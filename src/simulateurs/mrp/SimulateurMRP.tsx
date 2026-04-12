// ============================================================
// SIMULATEUR MRP — Multirisque Professionnelle
// Kleios Madel Assurance · BTS Assurance
// Locaux + Matériel + Marchandises + RC + Options
// ============================================================
import { useState } from "react";
import { useSimulateurSouscription, BoutonSouscription } from "../../hooks/useSimulateurSouscription";

// ── Types ─────────────────────────────────────────────────────
type StatutLocal    = "locataire" | "proprietaire";
type TypeActivite   = "commerce" | "bureau" | "artisan" | "industrie" | "restauration";

// ── Coefficients par activité ─────────────────────────────────
const COEFFS_ACTIVITE: Record<TypeActivite, { label: string; icone: string; coeff: number; desc: string }> = {
  bureau:       { label: "Bureau / Cabinet",    icone: "🏢", coeff: 1.00, desc: "Conseil, professions libérales, services" },
  commerce:     { label: "Commerce de détail",  icone: "🛒", coeff: 1.20, desc: "Boutique, magasin, vente au détail" },
  restauration: { label: "Restauration",        icone: "🍽️", coeff: 1.45, desc: "Restaurant, snack, cuisine professionnelle" },
  artisan:      { label: "Artisan / Atelier",   icone: "🔧", coeff: 1.35, desc: "Atelier, production, travail manuel" },
  industrie:    { label: "Industrie",            icone: "🏭", coeff: 1.60, desc: "Fabrication, stockage lourd, machinerie" },
};

// ── Coefficients sécurité ─────────────────────────────────────
// Chaque mesure de sécurité apporte une réduction
const SECURITE_PORTES = [
  { id: "porte_standard",    label: "Porte standard",              malus: 0.05  },
  { id: "porte_blindee",     label: "Porte blindée certifiée A2P", bonus: -0.08 },
  { id: "porte_renforcee",   label: "Porte renforcée (3 points)",  bonus: -0.05 },
];

const SECURITE_VITRAGES = [
  { id: "vitrage_standard",  label: "Vitrage standard",            malus: 0.04  },
  { id: "vitrage_feuillete", label: "Vitrage feuilleté / anti-effraction", bonus: -0.07 },
  { id: "rideau_metallique", label: "Rideau métallique",           bonus: -0.05 },
];

const SECURITE_SURVEILLANCE = [
  { id: "aucune",            label: "Aucune surveillance",         malus: 0.06  },
  { id: "alarme_simple",     label: "Alarme simple (sirène)",      bonus: -0.04 },
  { id: "alarme_telereport", label: "Alarme avec télésurveillance", bonus: -0.09 },
  { id: "cameras",           label: "Caméras de surveillance",     bonus: -0.05 },
  { id: "gardiennage",       label: "Gardiennage / agent de sécurité", bonus: -0.12 },
];

const SECURITE_INCENDIE = [
  { id: "aucun",             label: "Aucune protection incendie",  malus: 0.08  },
  { id: "extincteurs",       label: "Extincteurs réglementaires",  bonus: -0.05 },
  { id: "sprinklers",        label: "Sprinklers / extinction auto", bonus: -0.10 },
  { id: "detecteurs",        label: "Détecteurs de fumée",         bonus: -0.04 },
  { id: "sssi",              label: "Système de sécurité incendie complet (SSSI)", bonus: -0.12 },
];

const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const eurDec = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });

// ── Composant ─────────────────────────────────────────────────
export default function SimulateurMRP() {
  // Local
  const [statut, setStatut]       = useState<StatutLocal>("locataire");
  const [surface, setSurface]     = useState(80);
  const [valeurLocal, setValeurLocal] = useState(200000);
  const [typeActivite, setTypeActivite] = useState<TypeActivite>("commerce");

  // Valeurs assurées
  const [valeurMateriel, setValeurMateriel]       = useState(30000);
  const [valeurMarchandises, setValeurMarchandises] = useState(20000);

  // Options
  const [pertesExploitation, setPertesExploitation] = useState(false);
  const [ca, setCa]                               = useState(300000);
  const [brissMachine, setBrisMachine]            = useState(false);
  const [cyber, setCyber]                         = useState(false);

  // Sécurité
  const [porte, setPorte]           = useState("porte_standard");
  const [vitrage, setVitrage]       = useState("vitrage_standard");
  const [surveillance, setSurveillance] = useState<string[]>(["aucune"]);
  const [incendie, setIncendie]     = useState<string[]>(["aucun"]);

  const [onglet, setOnglet]         = useState<"profil" | "securite" | "garanties">("profil");
  // Hook souscription — connecte le simulateur à la fiche assuré
  const { client, mode, isFromFiche, souscrire } = useSimulateurSouscription("mrp");

  // ── Calculs ──────────────────────────────────────────────────
  const coeffActivite = COEFFS_ACTIVITE[typeActivite].coeff;

  const getCoeffSecurite = () => {
    let coeff = 1.00;
    const p = [...SECURITE_PORTES].find(p => p.id === porte);
    if (p) coeff += "malus" in p ? p.malus ?? 0 : p.bonus ?? 0;
    const v = [...SECURITE_VITRAGES].find(v => v.id === vitrage);
    if (v) coeff += "malus" in v ? v.malus ?? 0 : v.bonus ?? 0;
    surveillance.forEach(id => {
      const s = SECURITE_SURVEILLANCE.find(s => s.id === id);
      if (s) coeff += "malus" in s ? s.malus ?? 0 : s.bonus ?? 0;
    });
    incendie.forEach(id => {
      const f = SECURITE_INCENDIE.find(f => f.id === id);
      if (f) coeff += "malus" in f ? f.malus ?? 0 : f.bonus ?? 0;
    });
    return Math.max(0.70, Math.min(1.30, coeff));
  };

  const coeffSecurite = getCoeffSecurite();
  const reductionSecurite = Math.round((1 - coeffSecurite) * 100);

  // ── Taux réalistes marché 2026 ────────────────────────────────
  // Source : MMA, Allianz, AXA — fourchettes constatées
  // Local : tarif au m² selon activité
  const TARIF_M2: Record<TypeActivite, number> = {
    bureau:       1.20,  // €/m²/an
    commerce:     1.50,
    restauration: 2.80,
    artisan:      2.20,
    industrie:    2.00,
  };

  // Taux sur valeurs assurées
  const TAUX_MATERIEL    = 0.0050;  // 0,50% de la valeur
  const TAUX_MARCHANDISES = 0.0060; // 0,60% de la valeur
  // Valeur reconstituée locaux propriétaire
  const TAUX_BATIMENT    = 0.0012;  // 0,12% de la valeur bâtiment

  // Options — taux réalistes
  const TAUX_PE     = 0.0012;  // 0,12% du CA — donne ~360€ pour 300k CA ✓
  const TAUX_BRIS   = 0.0030;  // 0,30% de la valeur matériel
  const TAUX_CYBER  = 0.0010;  // 0,10% du CA — donne ~300€ pour 300k CA ✓
  const RC_FORFAIT  = 120;     // RC forfait de base incluse

  const baseLocal       = statut === "locataire"
    ? surface * TARIF_M2[typeActivite]
    : valeurLocal * TAUX_BATIMENT;
  const baseMateriel    = valeurMateriel * TAUX_MATERIEL;
  const baseMarchandises = valeurMarchandises * TAUX_MARCHANDISES;
  const basePE          = pertesExploitation ? ca * TAUX_PE : 0;
  const baseBris        = brissMachine ? valeurMateriel * TAUX_BRIS : 0;
  const baseCyber       = cyber ? Math.max(250, ca * TAUX_CYBER) : 0;

  const baseTotale = (baseLocal + baseMateriel + baseMarchandises + RC_FORFAIT + basePE + baseBris + baseCyber)
    * coeffActivite * coeffSecurite;

  const primeHT    = Math.round(baseTotale * 100) / 100;
  const tca        = Math.round(primeHT * 0.09 * 100) / 100;
  const primeTTC   = Math.round((primeHT + tca) * 100) / 100;
  const primeMois  = Math.round(primeTTC / 12 * 100) / 100;

  const toggleMulti = (id: string, list: string[], setList: (v: string[]) => void, exclusif?: string) => {
    if (exclusif && id === exclusif) {
      setList([exclusif]);
      return;
    }
    const sans = list.filter(x => x !== exclusif);
    setList(sans.includes(id) ? sans.filter(x => x !== id) : [...sans, id]);
  };

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🏢 Simulateur MRP — Multirisque Professionnelle</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Locaux · Matériel · Marchandises · RC incluse · Options · TCA 9%
        </p>
      </div>

      {/* Onglets */}
      <div style={{ display: "flex", gap: 0, marginBottom: 16, background: "var(--madel-bg)", borderRadius: 10, padding: 4, border: "1px solid var(--madel-border)" }}>
        {[
          { k: "profil",    label: "📋 Profil & Valeurs" },
          { k: "securite",  label: "🔒 Sécurité du local" },
          { k: "garanties", label: "🛡️ Garanties" },
        ].map(tab => (
          <button key={tab.k} onClick={() => setOnglet(tab.k as typeof onglet)} style={{
            flex: 1, padding: "10px", borderRadius: 8, border: "none",
            background: onglet === tab.k ? "#fff" : "transparent",
            boxShadow: onglet === tab.k ? "0 1px 4px rgba(26,43,95,.1)" : "none",
            cursor: "pointer", fontFamily: "var(--madel-font)",
            fontSize: 12, fontWeight: onglet === tab.k ? 700 : 400,
            color: onglet === tab.k ? "var(--madel-navy)" : "var(--madel-muted)",
          }}>{tab.label}</button>
        ))}
      </div>

      {/* ── PROFIL ────────────────────────────────────────────── */}
      {onglet === "profil" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Type d'activité */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", borderRadius: "14px 14px 0 0", fontSize: 12, fontWeight: 700 }}>🏭 Type d'activité</div>
              <div style={{ padding: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
                {(Object.entries(COEFFS_ACTIVITE) as [TypeActivite, typeof COEFFS_ACTIVITE.bureau][]).map(([k, a]) => (
                  <button key={k} onClick={() => setTypeActivite(k)} style={{
                    padding: "10px 10px", borderRadius: 9, border: "2px solid",
                    borderColor: typeActivite === k ? "var(--madel-rose)" : "var(--madel-border)",
                    background: typeActivite === k ? "var(--madel-rose-light)" : "#fff",
                    cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "left",
                  }}>
                    <div style={{ fontSize: 18, marginBottom: 4 }}>{a.icone}</div>
                    <div style={{ fontWeight: 700, fontSize: 11, color: typeActivite === k ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>{a.label}</div>
                    <div style={{ fontSize: 9, color: "var(--madel-muted)", marginTop: 2 }}>{a.desc}</div>
                    <div style={{ fontSize: 9, color: typeActivite === k ? "var(--madel-rose)" : "var(--madel-muted)", marginTop: 3 }}>Coefficient risque : ×{a.coeff}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Local */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", borderRadius: "14px 14px 0 0", fontSize: 12, fontWeight: 700 }}>🏠 Local professionnel</div>
              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {([
                    { v: "locataire",    label: "🏠 Locataire", desc: "Assure le contenu + RC locative" },
                    { v: "proprietaire", label: "🏗️ Propriétaire", desc: "Assure aussi le bâtiment" },
                  ] as { v: StatutLocal; label: string; desc: string }[]).map(s => (
                    <button key={s.v} onClick={() => setStatut(s.v)} style={{
                      padding: "10px", borderRadius: 9, border: "2px solid",
                      borderColor: statut === s.v ? "var(--madel-rose)" : "var(--madel-border)",
                      background: statut === s.v ? "var(--madel-rose-light)" : "#fff",
                      cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "left",
                    }}>
                      <div style={{ fontWeight: 700, fontSize: 12, color: statut === s.v ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>{s.label}</div>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 2 }}>{s.desc}</div>
                    </button>
                  ))}
                </div>

                <div>
                  <label style={{ fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", display: "block", marginBottom: 6 }}>
                    Surface — {surface} m²
                  </label>
                  <input type="range" min={10} max={1000} step={10} value={surface}
                    onChange={e => setSurface(+e.target.value)}
                    style={{ width: "100%", accentColor: "var(--madel-rose)" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--madel-muted)", marginTop: 2 }}>
                    <span>10 m²</span><span>1 000 m²</span>
                  </div>
                </div>

                {statut === "proprietaire" && (
                  <div>
                    <label style={{ fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", display: "block", marginBottom: 6 }}>
                      Valeur du bâtiment — {eur(valeurLocal)}
                    </label>
                    <input type="range" min={50000} max={2000000} step={10000} value={valeurLocal}
                      onChange={e => setValeurLocal(+e.target.value)}
                      style={{ width: "100%", accentColor: "var(--madel-rose)" }} />
                  </div>
                )}
              </div>
            </div>

            {/* Valeurs */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", borderRadius: "14px 14px 0 0", fontSize: 12, fontWeight: 700 }}>💰 Valeurs assurées</div>
              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Matériel & équipements", value: valeurMateriel, set: setValeurMateriel, max: 500000, step: 5000 },
                  { label: "Marchandises & stocks", value: valeurMarchandises, set: setValeurMarchandises, max: 500000, step: 5000 },
                ].map(item => (
                  <div key={item.label}>
                    <label style={{ fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", display: "block", marginBottom: 6 }}>
                      {item.label} — {eur(item.value)}
                    </label>
                    <input type="range" min={0} max={item.max} step={item.step} value={item.value}
                      onChange={e => item.set(+e.target.value)}
                      style={{ width: "100%", accentColor: "var(--madel-rose)" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--madel-muted)", marginTop: 2 }}>
                      <span>0 €</span><span>{eur(item.max)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Options */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", borderRadius: "14px 14px 0 0", fontSize: 12, fontWeight: 700 }}>➕ Options</div>
              <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 7 }}>
                {[
                  { actif: pertesExploitation, set: setPertesExploitation, label: "Pertes d'exploitation", desc: `Compense la perte de chiffre d'affaires en cas de sinistre (incendie, dégât des eaux...) sur la base de votre CA. CA : ${eur(ca)}`, showCA: true },
                  { actif: brissMachine, set: setBrisMachine, label: "Bris de machine", desc: "Couvre la casse accidentelle de vos machines et équipements, hors vétusté et panne électrique simple.", showCA: false },
                  { actif: cyber, set: setCyber, label: "Cyber-risques & RGPD", desc: "Violation de données personnelles, rançongiciel, attaque informatique. Inclut la gestion de crise et les frais de notification CNIL.", showCA: false },
                ].map(opt => (
                  <div key={opt.label}>
                    <label style={{
                      display: "flex", alignItems: "flex-start", gap: 9,
                      padding: "9px 11px", borderRadius: 9, cursor: "pointer",
                      border: `1.5px solid ${opt.actif ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
                      background: opt.actif ? "var(--madel-rose-light)" : "#fff",
                    }}>
                      <input type="checkbox" checked={opt.actif} onChange={e => opt.set(e.target.checked)}
                        style={{ accentColor: "var(--madel-rose)", flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--madel-navy)" }}>{opt.label}</div>
                        <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 2, lineHeight: 1.4 }}>{opt.desc}</div>
                      </div>
                    </label>
                    {opt.showCA && opt.actif && (
                      <div style={{ marginTop: 6, padding: "8px 12px", borderRadius: 8, background: "var(--madel-bg)", border: "1px solid var(--madel-border)" }}>
                        <label style={{ fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", display: "block", marginBottom: 5 }}>
                          Chiffre d'affaires annuel — {eur(ca)}
                        </label>
                        <input type="range" min={50000} max={2000000} step={10000} value={ca}
                          onChange={e => setCa(+e.target.value)}
                          style={{ width: "100%", accentColor: "var(--madel-rose)" }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 14 }}>Prime MRP calculée</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                <div style={{ background: "rgba(255,255,255,.1)", borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,.5)", marginBottom: 2 }}>Prime annuelle TTC</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>{eurDec(primeTTC)}</div>
                </div>
                <div style={{ background: "rgba(255,255,255,.1)", borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,.5)", marginBottom: 2 }}>Par mois</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{eurDec(primeMois)}</div>
                </div>
              </div>

              {/* Décomposition par poste */}
              <div style={{ marginBottom: 10 }}>
                {[
                  { l: statut === "locataire" ? `Local locataire (${surface} m²)` : `Bâtiment propriétaire`, v: Math.round(baseLocal), show: true },
                  { l: `Matériel (${eur(valeurMateriel)})`, v: Math.round(baseMateriel), show: true },
                  { l: `Marchandises (${eur(valeurMarchandises)})`, v: Math.round(baseMarchandises), show: true },
                  { l: "Pertes d'exploitation", v: Math.round(basePE), show: pertesExploitation },
                  { l: "Bris de machine", v: Math.round(baseBris), show: brissMachine },
                  { l: "Cyber-risques", v: Math.round(baseCyber), show: cyber },
                  { l: "RC incluse (forfait)", v: RC_FORFAIT, show: true },
                ].filter(i => i.show).map(item => (
                  <div key={item.l} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,.08)", fontSize: 10 }}>
                    <span style={{ color: "rgba(255,255,255,.6)" }}>{item.l}</span>
                    <span style={{ color: "#fff", fontFamily: "monospace" }}>{eur(item.v)}</span>
                  </div>
                ))}
              </div>

              {[
                { l: `Coefficient activité (${COEFFS_ACTIVITE[typeActivite].label})`, v: `× ${coeffActivite}` },
                { l: "Coefficient sécurité", v: reductionSecurite < 0 ? `× ${coeffSecurite.toFixed(2)} (${reductionSecurite}%)` : reductionSecurite > 0 ? `× ${coeffSecurite.toFixed(2)} (+${reductionSecurite}% malus)` : "× 1.00" },
                { l: "Prime HT", v: eurDec(primeHT) },
                { l: "TCA 9%", v: `+ ${eurDec(tca)}` },
              ].map(item => (
                <div key={item.l} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,.08)", fontSize: 11 }}>
                  <span style={{ color: "rgba(255,255,255,.6)" }}>{item.l}</span>
                  <span style={{ color: item.l.includes("sécurité") && reductionSecurite < 0 ? "#86EFAC" : "#fff", fontFamily: "monospace", fontWeight: item.l.includes("sécurité") ? 700 : 400 }}>{item.v}</span>
                </div>
              ))}
            </div>

            {/* Impact sécurité */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                🔒 Impact des mesures de sécurité
                {reductionSecurite < 0 && (
                  <span style={{ fontSize: 10, background: "#EAF3DE", color: "#2E7D32", padding: "2px 8px", borderRadius: 10, fontWeight: 700 }}>
                    Réduction {reductionSecurite}%
                  </span>
                )}
                {reductionSecurite > 0 && (
                  <span style={{ fontSize: 10, background: "#FCEBEB", color: "var(--madel-rose)", padding: "2px 8px", borderRadius: 10, fontWeight: 700 }}>
                    Malus +{reductionSecurite}%
                  </span>
                )}
              </div>
              <div style={{ fontSize: 10, color: "var(--madel-muted)", lineHeight: 1.6 }}>
                💡 Allez dans l'onglet <strong>Sécurité du local</strong> pour configurer vos mesures de protection.
                Une bonne sécurisation peut réduire la prime jusqu'à <strong>30%</strong>.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── SÉCURITÉ ──────────────────────────────────────────── */}
      {onglet === "securite" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Portes */}
            <SecuriteSection titre="🚪 Portes et fermetures">
              {SECURITE_PORTES.map(p => (
                <SecuriteChoice key={p.id} id={p.id} label={p.label} selected={porte === p.id}
                  onClick={() => setPorte(p.id)}
                  bonus={"bonus" in p ? p.bonus : undefined}
                  malus={"malus" in p ? p.malus : undefined} />
              ))}
            </SecuriteSection>

            {/* Vitrages */}
            <SecuriteSection titre="🪟 Vitrages et rideaux">
              {SECURITE_VITRAGES.map(v => (
                <SecuriteChoice key={v.id} id={v.id} label={v.label} selected={vitrage === v.id}
                  onClick={() => setVitrage(v.id)}
                  bonus={"bonus" in v ? v.bonus : undefined}
                  malus={"malus" in v ? v.malus : undefined} />
              ))}
            </SecuriteSection>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Surveillance */}
            <SecuriteSection titre="📷 Surveillance et alarme">
              <div style={{ fontSize: 10, color: "var(--madel-muted)", marginBottom: 6 }}>Vous pouvez cumuler plusieurs mesures.</div>
              {SECURITE_SURVEILLANCE.map(s => (
                <SecuriteChoice key={s.id} id={s.id} label={s.label}
                  selected={surveillance.includes(s.id)}
                  onClick={() => toggleMulti(s.id, surveillance, setSurveillance, "aucune")}
                  bonus={"bonus" in s ? s.bonus : undefined}
                  malus={"malus" in s ? s.malus : undefined}
                  multi />
              ))}
            </SecuriteSection>

            {/* Incendie */}
            <SecuriteSection titre="🔥 Protection incendie">
              <div style={{ fontSize: 10, color: "var(--madel-muted)", marginBottom: 6 }}>Vous pouvez cumuler plusieurs mesures.</div>
              {SECURITE_INCENDIE.map(f => (
                <SecuriteChoice key={f.id} id={f.id} label={f.label}
                  selected={incendie.includes(f.id)}
                  onClick={() => toggleMulti(f.id, incendie, setIncendie, "aucun")}
                  bonus={"bonus" in f ? f.bonus : undefined}
                  malus={"malus" in f ? f.malus : undefined}
                  multi />
              ))}
            </SecuriteSection>

            {/* Bilan sécurité */}
            <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "16px 18px" }}>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 10 }}>Bilan sécurité</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                Coefficient de sécurité : ×{coeffSecurite.toFixed(2)}
              </div>
              <div style={{ fontSize: 12, color: reductionSecurite < 0 ? "#86EFAC" : reductionSecurite > 0 ? "#FCA5A5" : "rgba(255,255,255,.7)" }}>
                {reductionSecurite < 0
                  ? `✅ Réduction de prime : ${reductionSecurite}%`
                  : reductionSecurite > 0
                  ? `⚠ Malus appliqué : +${reductionSecurite}%`
                  : "Niveau de sécurité de base"}
              </div>
              <div style={{ marginTop: 10, fontSize: 10, color: "rgba(255,255,255,.5)", lineHeight: 1.5 }}>
                💡 Pédagogique : les assureurs récompensent les efforts de prévention.
                Une alarme avec télésurveillance peut réduire la prime vol de 15 à 25%.
                Les sprinklers peuvent réduire la prime incendie de 20 à 30%.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── GARANTIES ─────────────────────────────────────────── */}
      {onglet === "garanties" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
              <div style={{ padding: "11px 16px", background: "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)", fontSize: 12, fontWeight: 700 }}>✅ Garanties socle incluses</div>
              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 7 }}>
                {[
                  { nom: "Incendie & Explosion", desc: "Dommages causés par un incendie, une explosion ou la foudre. Inclut les frais de déblaiement et démolition.", icone: "🔥" },
                  { nom: "Dégâts des eaux", desc: "Fuites, infiltrations, ruptures de canalisations. Inclut les frais de recherche de fuite.", icone: "💧" },
                  { nom: "Vol & Vandalisme", desc: "Vol par effraction, tentative de vol, vandalisme. Coefficient selon les mesures de sécurité.", icone: "🔒" },
                  { nom: "Bris de glace", desc: "Vitres, vitrines, enseignes lumineuses. Franchise habituelle : 150 €.", icone: "🪟" },
                  { nom: "Catastrophes naturelles", desc: "Couverture légale obligatoire (loi 82-600). Franchise légale de 380 € pour les professionnels.", icone: "🌊" },
                  { nom: "Responsabilité Civile", desc: "RC exploitation incluse — dommages causés à des tiers dans le cadre de l'activité.", icone: "⚖️" },
                ].map((g, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, padding: "8px 10px", borderRadius: 8, background: "#EAF3DE", border: "1px solid #A5D6A7" }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{g.icone}</span>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "var(--madel-navy)" }}>{g.nom}</div>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1, lineHeight: 1.4 }}>{g.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden", marginBottom: 12 }}>
              <div style={{ padding: "11px 16px", background: "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)", fontSize: 12, fontWeight: 700 }}>
                🚫 Exclusions principales
              </div>
              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 5 }}>
                {[
                  "Faute intentionnelle ou dolosive du souscripteur",
                  "Vétusté ou défaut d'entretien normal",
                  "Guerre et émeutes (sauf cat nat)",
                  "Dommages électriques sans surtension (selon contrat)",
                  "Pertes indirectes sans option pertes d'exploitation",
                  "Vol sans effraction visible",
                  "Marchandises en transit (contrat transport séparé)",
                ].map((ex, i) => (
                  <div key={i} style={{ display: "flex", gap: 7, fontSize: 11, color: "var(--madel-text)" }}>
                    <span style={{ color: "var(--madel-rose)", flexShrink: 0 }}>✕</span>{ex}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: "12px 16px", borderRadius: 12, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 11, color: "var(--madel-info)", lineHeight: 1.6 }}>
              📚 <strong>Valeur à neuf vs valeur vénale :</strong><br />
              — <strong>Valeur à neuf</strong> = remplacement par équivalent neuf. Recommandée pour le matériel récent.<br />
              — <strong>Valeur vénale</strong> = valeur marchande au jour du sinistre (déduction vétusté). Moins protectrice.
            </div>
          </div>
        </div>
      )}

      {/* ── Souscription depuis fiche assuré ── */}
      <BoutonSouscription
        isFromFiche={isFromFiche}
        client={client}
        mode={mode}
        primeAnnuelle={primeTTC}
        onSouscrire={() => souscrire(primeTTC)}
      />
    </div>
  );
}

// ── Sous-composants sécurité ──────────────────────────────────
function SecuriteSection({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)" }}>
      <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", borderRadius: "14px 14px 0 0", fontSize: 12, fontWeight: 700 }}>
        {titre}
      </div>
      <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 6 }}>{children}</div>
    </div>
  );
}

function SecuriteChoice({ label, selected, onClick, bonus, malus, multi }: {
  id?: string; label: string; selected: boolean; onClick: () => void;
  bonus?: number; malus?: number; multi?: boolean;
}) {
  const hasBonus = bonus !== undefined && bonus < 0;
  const hasMalus = malus !== undefined && malus > 0;
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "9px 11px", borderRadius: 8, border: "2px solid",
      borderColor: selected ? (hasBonus ? "#A5D6A7" : "var(--madel-rose-mid)") : "var(--madel-border)",
      background: selected ? (hasBonus ? "var(--madel-success-bg)" : "var(--madel-rose-light)") : "#fff",
      cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "left", width: "100%",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        {multi ? (
          <div style={{ width: 16, height: 16, borderRadius: 4, border: `2px solid ${selected ? "#2E7D32" : "var(--madel-border)"}`, background: selected ? "#2E7D32" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {selected && <span style={{ color: "#fff", fontSize: 10 }}>✓</span>}
          </div>
        ) : (
          <div style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${selected ? "#2E7D32" : "var(--madel-border)"}`, background: selected ? "#2E7D32" : "#fff", flexShrink: 0 }} />
        )}
        <span style={{ fontSize: 11, color: "var(--madel-navy)", fontWeight: selected ? 600 : 400 }}>{label}</span>
      </div>
      {hasBonus && <span style={{ fontSize: 10, fontWeight: 700, color: "#2E7D32", flexShrink: 0 }}>{Math.round((bonus ?? 0) * 100)}%</span>}
      {hasMalus && <span style={{ fontSize: 10, fontWeight: 700, color: "var(--madel-rose)", flexShrink: 0 }}>+{Math.round((malus ?? 0) * 100)}%</span>}
    </button>
  );
}
