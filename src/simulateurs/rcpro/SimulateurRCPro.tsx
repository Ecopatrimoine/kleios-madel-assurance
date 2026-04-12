// ============================================================
// SIMULATEUR RC PRO — Responsabilité Civile Professionnelle
// Kleios Madel Assurance · BTS Assurance
// Plafond fixe 2 000 000 € — tarification par secteur + CA + effectif
// ============================================================
import { useState } from "react";
import { useSimulateurSouscription, BoutonSouscription } from "../../hooks/useSimulateurSouscription";

// ── Types ─────────────────────────────────────────────────────
type Secteur = "conseil_info" | "commerce" | "artisan_btp" | "liberal" | "restauration" | "industrie";

// ── Données secteurs ──────────────────────────────────────────
const SECTEURS: Record<Secteur, {
  label: string; icone: string; risque: "faible" | "moyen" | "eleve";
  desc: string; tauxBase: number; exemples: string;
}> = {
  conseil_info: {
    label: "Conseil & Informatique", icone: "💻", risque: "faible",
    desc: "Consultant, développeur, designer, RH, marketing, formation",
    tauxBase: 0.0035,
    exemples: "Erreur de conseil, bug logiciel, violation RGPD, perte de données client",
  },
  commerce: {
    label: "Commerce & Distribution", icone: "🛒", risque: "moyen",
    desc: "Commerçant, agent commercial, distributeur, e-commerce",
    tauxBase: 0.0055,
    exemples: "Produit défectueux vendu, livraison endommagée, accident en magasin",
  },
  artisan_btp: {
    label: "Artisan BTP", icone: "🔨", risque: "eleve",
    desc: "Plombier, électricien, maçon, charpentier, carreleur, peintre",
    tauxBase: 0.0110,
    exemples: "Malfaçon, dommage sur l'ouvrage, blessure de tiers sur chantier",
  },
  liberal: {
    label: "Profession libérale", icone: "⚖️", risque: "moyen",
    desc: "Avocat, comptable, architecte, médecin, psychologue, notaire",
    tauxBase: 0.0070,
    exemples: "Erreur de diagnostic, vice de conseil, manquement déontologique",
  },
  restauration: {
    label: "Restauration & Hôtellerie", icone: "🍽️", risque: "moyen",
    desc: "Restaurant, café, hôtel, traiteur, événementiel, food-truck",
    tauxBase: 0.0065,
    exemples: "Intoxication alimentaire, chute d'un client, incendie cuisine",
  },
  industrie: {
    label: "Industrie & Fabrication", icone: "🏭", risque: "eleve",
    desc: "Manufacturier, producteur, sous-traitant industriel, atelier",
    tauxBase: 0.0095,
    exemples: "Produit défectueux causant blessure, pollution accidentelle, accident machine",
  },
};

// ── Coefficient CA ────────────────────────────────────────────
const getCoeffCA = (ca: number): number => {
  if (ca < 50000)   return 0.65;
  if (ca < 100000)  return 0.80;
  if (ca < 250000)  return 1.00;
  if (ca < 500000)  return 1.20;
  if (ca < 1000000) return 1.40;
  return 1.65;
};

// ── Coefficient effectif ──────────────────────────────────────
const getCoeffEffectif = (nb: number): number => {
  if (nb === 0)  return 0.80; // solo
  if (nb <= 2)   return 0.90;
  if (nb <= 5)   return 1.00;
  if (nb <= 10)  return 1.15;
  if (nb <= 20)  return 1.30;
  return 1.50;
};

const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const eurDec = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });

const RISQUE_STYLE = {
  faible: { bg: "#EAF3DE", color: "#2E7D32", label: "Risque faible" },
  moyen:  { bg: "#FAEEDA", color: "#7B4F00", label: "Risque modéré" },
  eleve:  { bg: "#FCEBEB", color: "#A8204A", label: "Risque élevé" },
};

// ── Options ───────────────────────────────────────────────────
const OPTIONS_RCPRO = [
  { id: "pj",       label: "Protection Juridique Professionnelle", desc: "Défense de vos intérêts en cas de litige commercial, social ou fiscal. Prise en charge des frais d'avocat.", taux: 0.15 },
  { id: "biens_confies", label: "Dommages aux biens confiés", desc: "Couvre les dommages causés aux biens appartenant à vos clients et confiés pour réparation, travaux ou conservation.", taux: 0.20 },
  { id: "cyber",    label: "RC Cyber & Données personnelles", desc: "Responsabilité en cas de violation de données personnelles, cyberattaque ou non-conformité RGPD.", taux: 0.18 },
];

// ── Composant ─────────────────────────────────────────────────
export default function SimulateurRCPro() {
  const [secteur, setSecteur]     = useState<Secteur>("conseil_info");
  const [ca, setCa]               = useState(150000);
  const [effectif, setEffectif]   = useState(2);
  const [options, setOptions]     = useState<string[]>([]);
  const [onglet, setOnglet]       = useState<"tarif" | "garanties" | "cas">("tarif");
  // Hook souscription — connecte le simulateur à la fiche assuré
  const { client, mode, isFromFiche, souscrire } = useSimulateurSouscription("rcpro");

  const data     = SECTEURS[secteur];
  const coeffCA  = getCoeffCA(ca);
  const coeffEff = getCoeffEffectif(effectif);
  const tauxOpts = options.reduce((acc, id) => acc + (OPTIONS_RCPRO.find(o => o.id === id)?.taux ?? 0), 0);
  const tauxFinal = data.tauxBase * coeffCA * coeffEff * (1 + tauxOpts);

  const primeHT   = Math.round(ca * tauxFinal * 100) / 100;
  const tca       = Math.round(primeHT * 0.09 * 100) / 100;
  const primeTTC  = Math.round((primeHT + tca) * 100) / 100;
  const primeMois = Math.round(primeTTC / 12 * 100) / 100;

  const toggleOpt = (id: string) =>
    setOptions(prev => prev.includes(id) ? prev.filter(o => o !== id) : [...prev, id]);

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>⚖️ Simulateur RC Pro</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Responsabilité Civile Professionnelle · Plafond 2 000 000 € · TCA 9%
        </p>
      </div>

      {/* Onglets */}
      <div style={{ display: "flex", gap: 0, marginBottom: 16, background: "var(--madel-bg)", borderRadius: 10, padding: 4, border: "1px solid var(--madel-border)" }}>
        {[
          { k: "tarif",     label: "💶 Tarification" },
          { k: "garanties", label: "🛡️ Garanties" },
          { k: "cas",       label: "📋 Cas pratiques" },
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

      {onglet === "tarif" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Secteur */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", borderRadius: "14px 14px 0 0", fontSize: 12, fontWeight: 700 }}>
                🏢 Secteur d'activité
              </div>
              <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 6 }}>
                {(Object.entries(SECTEURS) as [Secteur, typeof SECTEURS.conseil_info][]).map(([k, s]) => {
                  const rs = RISQUE_STYLE[s.risque];
                  return (
                    <button key={k} onClick={() => setSecteur(k)} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "10px 12px", borderRadius: 9, border: "2px solid",
                      borderColor: secteur === k ? "var(--madel-rose)" : "var(--madel-border)",
                      background: secteur === k ? "var(--madel-rose-light)" : "#fff",
                      cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "left",
                    }}>
                      <span style={{ fontSize: 20, flexShrink: 0 }}>{s.icone}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 12, color: secteur === k ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>{s.label}</div>
                        <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1 }}>{s.desc}</div>
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 10, background: rs.bg, color: rs.color, flexShrink: 0 }}>{rs.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CA + Effectif */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", borderRadius: "14px 14px 0 0", fontSize: 12, fontWeight: 700 }}>
                📊 Données entreprise
              </div>
              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <label style={{ fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", display: "block", marginBottom: 6 }}>
                    Chiffre d'affaires annuel — {eur(ca)}
                  </label>
                  <input type="range" min={10000} max={2000000} step={10000} value={ca}
                    onChange={e => setCa(+e.target.value)}
                    style={{ width: "100%", accentColor: "var(--madel-rose)" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--madel-muted)", marginTop: 2 }}>
                    <span>10 000 €</span><span>2 000 000 €</span>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", display: "block", marginBottom: 6 }}>
                    Nombre de salariés — {effectif === 0 ? "Solo (sans salarié)" : `${effectif} salarié${effectif > 1 ? "s" : ""}`}
                  </label>
                  <input type="range" min={0} max={50} step={1} value={effectif}
                    onChange={e => setEffectif(+e.target.value)}
                    style={{ width: "100%", accentColor: "var(--madel-rose)" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--madel-muted)", marginTop: 2 }}>
                    <span>Solo</span><span>50 salariés</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Options */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", borderRadius: "14px 14px 0 0", fontSize: 12, fontWeight: 700 }}>
                ➕ Options complémentaires
              </div>
              <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 7 }}>
                {OPTIONS_RCPRO.map(opt => (
                  <label key={opt.id} style={{
                    display: "flex", alignItems: "flex-start", gap: 9,
                    padding: "9px 11px", borderRadius: 9, cursor: "pointer",
                    border: `1.5px solid ${options.includes(opt.id) ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
                    background: options.includes(opt.id) ? "var(--madel-rose-light)" : "#fff",
                  }}>
                    <input type="checkbox" checked={options.includes(opt.id)} onChange={() => toggleOpt(opt.id)}
                      style={{ accentColor: "var(--madel-rose)", flexShrink: 0, marginTop: 2 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--madel-navy)" }}>{opt.label}</div>
                        <span style={{ fontSize: 10, color: "var(--madel-rose)", flexShrink: 0, marginLeft: 8 }}>+{Math.round(opt.taux * 100)}%</span>
                      </div>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 2, lineHeight: 1.4 }}>{opt.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 14 }}>Prime RC Pro calculée</div>
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
              {[
                { l: "Secteur", v: data.label },
                { l: "Taux de base", v: `${(data.tauxBase * 100).toFixed(3)}% du CA` },
                { l: `Coeff. CA (${eur(ca)})`, v: `× ${coeffCA}` },
                { l: `Coeff. effectif (${effectif} sal.)`, v: `× ${coeffEff}` },
                { l: "Options", v: tauxOpts > 0 ? `+${Math.round(tauxOpts * 100)}%` : "—" },
                { l: "Taux final", v: `${(tauxFinal * 100).toFixed(3)}% du CA` },
                { l: "Prime HT", v: eurDec(primeHT) },
                { l: "TCA 9%", v: `+ ${eurDec(tca)}` },
              ].map(item => (
                <div key={item.l} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,.08)", fontSize: 11 }}>
                  <span style={{ color: "rgba(255,255,255,.6)" }}>{item.l}</span>
                  <span style={{ color: "#fff", fontFamily: "monospace" }}>{item.v}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, padding: "8px 12px", borderRadius: 8, background: "rgba(255,255,255,.08)", fontSize: 10, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>
                🛡️ Plafond de garantie unique : <strong style={{ color: "#fff" }}>2 000 000 €</strong> par sinistre et par année
              </div>
            </div>

            {/* Risque du secteur */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 8 }}>
                {data.icone} {data.label} — Sinistres typiques
              </div>
              <div style={{ padding: "10px 12px", borderRadius: 9, background: RISQUE_STYLE[data.risque].bg, border: `1px solid ${RISQUE_STYLE[data.risque].color}30`, fontSize: 11, color: RISQUE_STYLE[data.risque].color, lineHeight: 1.6, marginBottom: 10 }}>
                {data.exemples}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {[
                  { label: "RC Exploitation", desc: "Dommages causés à des tiers dans le cadre de votre activité courante.", inclus: true },
                  { label: "RC Après livraison / Après travaux", desc: "Dommages survenus après la remise du produit ou la fin du chantier.", inclus: true },
                  { label: "RC Professionnelle (erreur, omission)", desc: "Faute professionnelle, mauvais conseil, négligence dans votre mission.", inclus: true },
                ].map((g, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, padding: "6px 8px", borderRadius: 7, background: "#EAF3DE", border: "1px solid #A5D6A7" }}>
                    <span style={{ color: "#2E7D32", flexShrink: 0 }}>✅</span>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "var(--madel-navy)" }}>{g.label}</div>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1 }}>{g.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note RC Pro obligatoire */}
            <div style={{ padding: "12px 16px", borderRadius: 10, background: "#FEF8EE", border: "1px solid #E8B86D", fontSize: 11, color: "#7B4F00", lineHeight: 1.6 }}>
              📚 <strong>RC Pro obligatoire</strong> pour certaines professions réglementées : avocats, architectes, médecins, comptables, agents immobiliers, constructeurs... La loi impose une couverture minimale et parfois un plafond minimum.
            </div>
          </div>
        </div>
      )}

      {onglet === "garanties" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden", marginBottom: 12 }}>
              <div style={{ padding: "11px 16px", background: "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)", fontSize: 12, fontWeight: 700 }}>🛡️ Garanties incluses — Plafond 2 000 000 €</div>
              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { nom: "RC Exploitation", desc: "Dommages corporels, matériels et immatériels causés à des tiers dans le cadre de l'exploitation de l'entreprise (locaux, personnel, équipements).", plafond: "2 000 000 €/sinistre" },
                  { nom: "RC Après livraison / Après travaux", desc: "Dommages constatés après la remise du produit ou la réception des travaux. Couvre les malfaçons, vices cachés, produits défectueux.", plafond: "2 000 000 €/sinistre" },
                  { nom: "RC Professionnelle", desc: "Fautes, erreurs, négligences ou omissions commises dans l'exercice de la mission professionnelle. Inclut les dommages immatériels non consécutifs.", plafond: "2 000 000 €/sinistre" },
                  { nom: "Dommages immatériels consécutifs", desc: "Préjudices financiers résultant d'un dommage matériel ou corporel garanti (ex : perte de CA du client suite à une erreur).", plafond: "Inclus dans le plafond" },
                ].map((g, i) => (
                  <div key={i} style={{ padding: "10px 12px", borderRadius: 9, background: "#EAF3DE", border: "1px solid #A5D6A7" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--madel-navy)" }}>✅ {g.nom}</div>
                      <span style={{ fontSize: 10, fontFamily: "monospace", color: "#2E7D32", fontWeight: 700 }}>{g.plafond}</span>
                    </div>
                    <div style={{ fontSize: 10, color: "var(--madel-muted)", lineHeight: 1.4 }}>{g.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden", marginBottom: 12 }}>
              <div style={{ padding: "11px 16px", background: "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)", fontSize: 12, fontWeight: 700 }}>🚫 Exclusions principales</div>
              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  "Faute intentionnelle ou dolosive",
                  "Amendes et pénalités contractuelles",
                  "Dommages causés par des véhicules terrestres à moteur",
                  "Dommages environnementaux volontaires",
                  "Responsabilité pénale (reste à la charge du dirigeant)",
                  "Dommages aux biens appartenant à l'entreprise assurée",
                  "Fraude ou malveillance",
                ].map((ex, i) => (
                  <div key={i} style={{ display: "flex", gap: 7, fontSize: 11, color: "var(--madel-text)", padding: "4px 0" }}>
                    <span style={{ color: "var(--madel-rose)", flexShrink: 0 }}>✕</span>{ex}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: "12px 16px", borderRadius: 12, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 11, color: "var(--madel-info)", lineHeight: 1.6 }}>
              📚 <strong>Dommages immatériels :</strong><br />
              — <strong>Consécutifs</strong> = résultent d'un dommage corporel ou matériel garanti → inclus<br />
              — <strong>Non consécutifs</strong> = purement financiers, sans dommage physique → couverts par la RC Professionnelle uniquement
            </div>
          </div>
        </div>
      )}

      {onglet === "cas" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ padding: "10px 16px", borderRadius: 10, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 11, color: "var(--madel-info)" }}>
            📚 Exemples de sinistres RC Pro selon le secteur sélectionné : <strong>{data.label}</strong>
          </div>
          {[
            {
              titre: "Sinistre corporel — client blessé",
              icone: "🤕",
              scenario: `Un client se blesse dans vos locaux (chute, accident). Il engage votre responsabilité civile exploitation.`,
              prejudice: 45000,
              couverture: 2000000,
              franchise: 500,
            },
            {
              titre: "Sinistre matériel — dommage chez le client",
              icone: "💥",
              scenario: `Lors d'une intervention chez un client, votre équipe endommage accidentellement du matériel appartenant au client.`,
              prejudice: 12000,
              couverture: 2000000,
              franchise: 300,
            },
            {
              titre: "Sinistre immatériel — erreur professionnelle",
              icone: "📋",
              scenario: `Une erreur dans votre prestation cause un préjudice financier à votre client (perte de contrat, retard livraison, mauvais conseil).`,
              prejudice: 80000,
              couverture: 2000000,
              franchise: 1000,
            },
            {
              titre: "Sinistre grave — mise en cause judiciaire",
              icone: "⚖️",
              scenario: `Un tiers engage une procédure judiciaire. Frais de défense + dommages-intérêts accordés par le tribunal.`,
              prejudice: 350000,
              couverture: 2000000,
              franchise: 2000,
            },
          ].map((cas, i) => {
            const netApresFranchise = Math.max(0, cas.prejudice - cas.franchise);
            const couvert = Math.min(netApresFranchise, cas.couverture);
            return (
              <div key={i} style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
                <div style={{ padding: "11px 16px", background: "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)", display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontSize: 20 }}>{cas.icone}</span>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{cas.titre}</div>
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ fontSize: 11, color: "var(--madel-muted)", marginBottom: 12, lineHeight: 1.5 }}>{cas.scenario}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                    {[
                      { l: "Préjudice total", v: eur(cas.prejudice), c: "var(--madel-navy)" },
                      { l: "Franchise", v: eur(cas.franchise), c: "#7B4F00" },
                      { l: "Pris en charge", v: eur(couvert), c: "#2E7D32" },
                      { l: "Reste à charge", v: eur(cas.franchise), c: "var(--madel-rose)" },
                    ].map(item => (
                      <div key={item.l} style={{ padding: "8px 10px", borderRadius: 8, background: "var(--madel-bg)", border: "1px solid var(--madel-border)", textAlign: "center" }}>
                        <div style={{ fontSize: 9, color: "var(--madel-muted)", marginBottom: 3 }}>{item.l}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: item.c, fontFamily: "monospace" }}>{item.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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
