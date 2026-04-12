// ============================================================
// SIMULATEUR DÉCÈS / OBSÈQUES
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState } from "react";
import { useSimulateurSouscription, BoutonSouscription } from "../../hooks/useSimulateurSouscription";

// ── Types ─────────────────────────────────────────────────────
type OngletProduit = "deces" | "obseques";
type NiveauObseques = 3000 | 5000 | 8000 | 10000;

// ── Barème actuariel Décès ────────────────────────────────────
// Taux annuel pour 100 000 € de capital, selon l'âge
// Source : barèmes marché indicatifs, usage pédagogique
const getTauxDeces = (age: number): number => {
  if (age < 25) return 0.0012;
  if (age < 30) return 0.0015;
  if (age < 35) return 0.0020;
  if (age < 40) return 0.0028;
  if (age < 45) return 0.0040;
  if (age < 50) return 0.0060;
  if (age < 55) return 0.0090;
  if (age < 60) return 0.0140;
  if (age < 65) return 0.0200;
  if (age < 70) return 0.0300;
  if (age < 75) return 0.0450;
  return 0.0650; // 75 ans et plus
};

// ── Barème actuariel Obsèques ─────────────────────────────────
// Prime annuelle par tranche de capital selon l'âge
const getTarifObseques = (age: number, capital: NiveauObseques): number => {
  const tauxBase = {
    3000:  { 30: 9,  40: 14, 50: 22, 60: 38, 70: 68,  80: 120 },
    5000:  { 30: 15, 40: 23, 50: 37, 60: 63, 70: 113, 80: 200 },
    8000:  { 30: 24, 40: 37, 50: 59, 60: 101,70: 181, 80: 320 },
    10000: { 30: 30, 40: 46, 50: 74, 60: 126,70: 226, 80: 400 },
  }[capital];

  const tranches = [30, 40, 50, 60, 70, 80] as const;
  const tranche = tranches.reduce((prev, curr) =>
    age >= curr ? curr : prev, 30
  );
  return tauxBase[tranche];
};

// ── Options Décès ─────────────────────────────────────────────
const OPTIONS_DECES = [
  { id: "rente_conjoint", label: "Rente conjoint", desc: "Versement d'une rente mensuelle au conjoint survivant pendant 10 ans.", supplement: 0.20 },
  { id: "rente_education", label: "Rente éducation enfants", desc: "Rente mensuelle par enfant jusqu'à ses 25 ans en cas de décès.", supplement: 0.15 },
  { id: "doublement_accident", label: "Doublement si accident", desc: "Capital doublé si le décès est consécutif à un accident.", supplement: 0.10 },
  { id: "exoneration", label: "Exonération de cotisations", desc: "Cotisations prises en charge si arrêt de travail > 90 jours.", supplement: 0.08 },
];

const eur = (n: number) =>
  n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

const eurDec = (n: number) =>
  n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });

// ── Composant principal ───────────────────────────────────────
export default function SimulateurDecesScolaire() {
  const [onglet, setOnglet] = useState<OngletProduit>("deces");

  // État Décès
  const [age, setAge]             = useState(40);
  const [capital, setCapital]     = useState(150000);
  const [optionsDeces, setOptions] = useState<string[]>([]);

  // État Obsèques
  const [ageObs, setAgeObs]               = useState(60);
  const [capitalObs, setCapitalObs]       = useState<NiveauObseques>(5000);
  const [prestationNature, setPrestationNature] = useState(true);
  // Hook souscription — connecte le simulateur à la fiche assuré
  const { client, mode, isFromFiche, souscrire } = useSimulateurSouscription("deces");

  // ── Calculs Décès ──────────────────────────────────────────
  const tauxBase   = getTauxDeces(age);
  const coeffOpts  = optionsDeces.reduce((acc, id) => {
    const opt = OPTIONS_DECES.find(o => o.id === id);
    return acc + (opt?.supplement ?? 0);
  }, 0);
  const primeHTDeces   = Math.round(capital * (tauxBase * (1 + coeffOpts)) * 100) / 100;
  const tcaDeces       = Math.round(primeHTDeces * 0.09 * 100) / 100;
  const contribDeces   = 5.90;
  const primeTTCDeces  = Math.round((primeHTDeces + tcaDeces + contribDeces) * 100) / 100;
  const mensuelDeces   = Math.round(primeTTCDeces / 12 * 100) / 100;

  // ── Calculs Obsèques ───────────────────────────────────────
  const tarifBaseObs   = getTarifObseques(ageObs, capitalObs);
  const supplNature    = prestationNature ? 0.12 : 0;
  const primeHTObs     = Math.round(tarifBaseObs * (1 + supplNature) * 100) / 100;
  const tcaObs         = Math.round(primeHTObs * 0.09 * 100) / 100;
  const contribObs     = 5.90;
  const primeTTCObs    = Math.round((primeHTObs + tcaObs + contribObs) * 100) / 100;
  const mensuelObs     = Math.round(primeTTCObs / 12 * 100) / 100;

  const toggleOpt = (id: string) => {
    setOptions(prev => prev.includes(id) ? prev.filter(o => o !== id) : [...prev, id]);
  };

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      {/* Titre */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>⚫ Simulateur Décès & Obsèques</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Prévoyance · Capital décès · Financement funérailles · TCA 9%
        </p>
      </div>

      {/* Onglets produit */}
      <div style={{ display: "flex", gap: 0, marginBottom: 20, background: "var(--madel-bg)", borderRadius: 12, padding: 4, border: "1px solid var(--madel-border)" }}>
        {([
          { k: "deces",   label: "⚫ Assurance Décès",  desc: "Capital aux bénéficiaires" },
          { k: "obseques",label: "🕊️ Assurance Obsèques", desc: "Financement des funérailles" },
        ] as { k: OngletProduit; label: string; desc: string }[]).map(tab => (
          <button key={tab.k} onClick={() => setOnglet(tab.k)} style={{
            flex: 1, padding: "12px 16px", borderRadius: 9, border: "none",
            background: onglet === tab.k ? "#fff" : "transparent",
            boxShadow: onglet === tab.k ? "0 1px 4px rgba(26,43,95,.1)" : "none",
            cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "left",
            transition: "all .15s",
          }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: onglet === tab.k ? "var(--madel-navy)" : "var(--madel-muted)" }}>{tab.label}</div>
            <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1 }}>{tab.desc}</div>
          </button>
        ))}
      </div>

      {/* ── ONGLET DÉCÈS ─────────────────────────────────────── */}
      {onglet === "deces" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>

          {/* Formulaire */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            <Card titre="Profil assuré" icone="👤" couleur="rose">
              <Champ label="Âge de l'assuré">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <input type="range" min={18} max={75} value={age}
                    onChange={e => setAge(+e.target.value)}
                    style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                  <span style={{ fontWeight: 800, fontSize: 18, minWidth: 52, textAlign: "center", color: "var(--madel-navy)" }}>
                    {age} ans
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--madel-muted)", marginTop: 2 }}>
                  <span>18 ans</span><span>75 ans</span>
                </div>
              </Champ>

              <Champ label="Capital décès souhaité">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <input type="range" min={10000} max={500000} step={10000} value={capital}
                    onChange={e => setCapital(+e.target.value)}
                    style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                  <span style={{ fontWeight: 800, fontSize: 16, minWidth: 90, textAlign: "center", color: "var(--madel-navy)", fontFamily: "monospace" }}>
                    {eur(capital)}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--madel-muted)", marginTop: 2 }}>
                  <span>10 000 €</span><span>500 000 €</span>
                </div>
              </Champ>

              {/* Taux de mortalité affiché */}
              <div style={{ marginTop: 8, padding: "8px 12px", borderRadius: 8, background: "var(--madel-bg)", border: "1px solid var(--madel-border)", fontSize: 10, color: "var(--madel-muted)" }}>
                📚 Taux de mortalité actuariel appliqué à {age} ans : <strong style={{ color: "var(--madel-navy)" }}>{(tauxBase * 100).toFixed(3)}%</strong>
                <br/>Prime pure = Capital × taux = {eur(capital)} × {(tauxBase * 100).toFixed(3)}% = <strong style={{ color: "var(--madel-rose)" }}>{Math.round(capital * tauxBase)} €</strong>
              </div>
            </Card>

            <Card titre="Options complémentaires" icone="➕" couleur="blue">
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {OPTIONS_DECES.map(opt => (
                  <label key={opt.id} style={{
                    display: "flex", alignItems: "flex-start", gap: 8,
                    padding: "8px 10px", borderRadius: 8, cursor: "pointer",
                    border: `1.5px solid ${optionsDeces.includes(opt.id) ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
                    background: optionsDeces.includes(opt.id) ? "var(--madel-rose-light)" : "#fff",
                  }}>
                    <input type="checkbox" checked={optionsDeces.includes(opt.id)}
                      onChange={() => toggleOpt(opt.id)}
                      style={{ accentColor: "var(--madel-rose)", flexShrink: 0, marginTop: 2 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--madel-navy)" }}>{opt.label}</div>
                        <span style={{ fontSize: 10, color: "var(--madel-rose)", flexShrink: 0, marginLeft: 8 }}>+{Math.round(opt.supplement * 100)}%</span>
                      </div>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1, lineHeight: 1.4 }}>{opt.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </Card>
          </div>

          {/* Résultat */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 14 }}>Prime calculée</div>
              {[
                { l: "Capital garanti", v: eur(capital), big: true },
                { l: `Taux actuariel (${age} ans)`, v: `${(tauxBase * (1 + coeffOpts) * 100).toFixed(4)}%` },
                { l: "Prime pure", v: eurDec(capital * tauxBase) },
                { l: "Options (+)", v: coeffOpts > 0 ? `+${Math.round(coeffOpts * 100)}%` : "—" },
                { l: "Prime HT", v: eurDec(primeHTDeces) },
                { l: "TCA 9% + contrib.", v: `+ ${(tcaDeces + contribDeces).toFixed(2)} €` },
              ].map(item => (
                <div key={item.l} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,.6)" }}>{item.l}</span>
                  <span style={{ fontSize: item.big ? 14 : 11, fontWeight: item.big ? 800 : 600, color: item.big ? "#fff" : "var(--madel-rose-mid)", fontFamily: "monospace" }}>{item.v}</span>
                </div>
              ))}
              <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontSize: 10, color: "var(--madel-rose-mid)" }}>Prime annuelle TTC</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
                    {eurDec(primeTTCDeces)}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.5)" }}>Mensuel</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.8)" }}>{eurDec(mensuelDeces)}</div>
                </div>
              </div>
            </div>

            {/* Pédagogique : comparaison âges */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", fontSize: 12, fontWeight: 700 }}>
                📚 Impact de l'âge sur la prime (capital {eur(capital)})
              </div>
              <div style={{ padding: 14 }}>
                {[25, 35, 45, 55, 65].map(a => {
                  const p = Math.round(capital * getTauxDeces(a) * 1.09 * 100) / 100;
                  return (
                    <div key={a} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "6px 10px", marginBottom: 4, borderRadius: 7,
                      background: Math.abs(a - age) < 6 ? "var(--madel-rose-light)" : "var(--madel-bg)",
                      border: `1px solid ${Math.abs(a - age) < 6 ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
                    }}>
                      <span style={{ fontSize: 11, color: "var(--madel-text)" }}>{a} ans</span>
                      <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: 12, color: "var(--madel-navy)" }}>
                        {eurDec(p)}/an
                      </span>
                    </div>
                  );
                })}
                <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 6 }}>
                  💡 La prime augmente avec l'âge car le risque de décès augmente — principe de base de l'actuariat.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── ONGLET OBSÈQUES ───────────────────────────────────── */}
      {onglet === "obseques" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            <Card titre="Profil & Capital" icone="🕊️" couleur="rose">
              <Champ label="Âge de l'assuré">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <input type="range" min={18} max={85} value={ageObs}
                    onChange={e => setAgeObs(+e.target.value)}
                    style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                  <span style={{ fontWeight: 800, fontSize: 18, minWidth: 52, textAlign: "center" }}>{ageObs} ans</span>
                </div>
              </Champ>

              <Champ label="Capital obsèques">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {([3000, 5000, 8000, 10000] as NiveauObseques[]).map(c => (
                    <button key={c} onClick={() => setCapitalObs(c)} style={{
                      padding: "10px 8px", borderRadius: 9, border: "2px solid",
                      borderColor: capitalObs === c ? "var(--madel-rose)" : "var(--madel-border)",
                      background: capitalObs === c ? "var(--madel-rose-light)" : "#fff",
                      cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "center",
                    }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: capitalObs === c ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>
                        {eur(c)}
                      </div>
                      <div style={{ fontSize: 9, color: "var(--madel-muted)", marginTop: 2 }}>
                        {c === 3000 ? "Essentiel" : c === 5000 ? "Standard" : c === 8000 ? "Confort" : "Premium"}
                      </div>
                    </button>
                  ))}
                </div>
              </Champ>
            </Card>

            <Card titre="Type de prestation" icone="🏛️" couleur="blue">
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { v: true, label: "Prestation en nature", desc: "L'assureur organise les funérailles — pompes funèbres partenaires, choix des prestations garanties par contrat. (+12%)", icone: "🤝" },
                  { v: false, label: "Capital seul", desc: "Versement du capital aux bénéficiaires. Famille libre de choisir les prestataires et l'organisation.", icone: "💶" },
                ].map(opt => (
                  <button key={String(opt.v)} onClick={() => setPrestationNature(opt.v)} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    padding: "11px 14px", borderRadius: 10, border: "2px solid",
                    borderColor: prestationNature === opt.v ? "var(--madel-rose)" : "var(--madel-border)",
                    background: prestationNature === opt.v ? "var(--madel-rose-light)" : "#fff",
                    cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "left",
                  }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{opt.icone}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 12, color: prestationNature === opt.v ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>{opt.label}</div>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 2, lineHeight: 1.4 }}>{opt.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Résultat obsèques */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 14 }}>Prime obsèques calculée</div>
              {[
                { l: "Capital garanti", v: eur(capitalObs), big: true },
                { l: `Tarif de base (${ageObs} ans)`, v: `${tarifBaseObs} €` },
                { l: "Type de prestation", v: prestationNature ? "En nature (+12%)" : "Capital seul" },
                { l: "Prime HT", v: `${primeHTObs} €` },
                { l: "TCA 9% + contrib.", v: `+ ${(tcaObs + contribObs).toFixed(2)} €` },
              ].map(item => (
                <div key={item.l} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,.6)" }}>{item.l}</span>
                  <span style={{ fontSize: item.big ? 14 : 11, fontWeight: item.big ? 800 : 600, color: item.big ? "#fff" : "var(--madel-rose-mid)", fontFamily: "monospace" }}>{item.v}</span>
                </div>
              ))}
              <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontSize: 10, color: "var(--madel-rose-mid)" }}>Prime annuelle TTC</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
                    {eurDec(primeTTCObs)}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.5)" }}>Mensuel</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.8)" }}>{eurDec(mensuelObs)}</div>
                </div>
              </div>
            </div>

            {/* Comparaison âges obsèques */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", fontSize: 12, fontWeight: 700 }}>
                📚 Impact de l'âge — Capital {eur(capitalObs)}
              </div>
              <div style={{ padding: 14 }}>
                {[30, 40, 50, 60, 70, 80].map(a => {
                  const p = Math.round(getTarifObseques(a, capitalObs) * (prestationNature ? 1.12 : 1) * 1.09 * 100) / 100;
                  return (
                    <div key={a} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "5px 10px", marginBottom: 3, borderRadius: 7,
                      background: Math.abs(a - ageObs) < 6 ? "var(--madel-rose-light)" : "var(--madel-bg)",
                      border: `1px solid ${Math.abs(a - ageObs) < 6 ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
                    }}>
                      <span style={{ fontSize: 11, color: "var(--madel-text)" }}>{a} ans</span>
                      <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: 12, color: "var(--madel-navy)" }}>
                        {eurDec(p)}/an
                      </span>
                    </div>
                  );
                })}
                <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 6 }}>
                  💡 Souscrire jeune = tarif bloqué à vie. Plus on attend, plus la prime est élevée.
                </div>
              </div>
            </div>

            {/* Point pédagogique */}
            <div style={{ padding: "12px 16px", borderRadius: 10, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 11, color: "var(--madel-info)", lineHeight: 1.6 }}>
              📚 <strong>Décès vs Obsèques :</strong> Ce sont deux produits distincts. L'assurance décès verse un capital aux <em>bénéficiaires désignés</em> pour maintenir leur niveau de vie. L'assurance obsèques finance les <em>funérailles</em> de l'assuré lui-même, évitant d'alourdir la charge financière des proches au moment du deuil.
            </div>
          </div>
        </div>
      )}

      {/* ── Souscription depuis fiche assuré ── */}
      <BoutonSouscription
        isFromFiche={isFromFiche}
        client={client}
        mode={mode}
        primeAnnuelle={primeTTCDeces}
        onSouscrire={() => souscrire(primeTTCDeces)}
      />
    </div>
  );
}

// ── Sous-composants ───────────────────────────────────────────
function Card({ titre, icone, couleur, children }: { titre: string; icone: string; couleur: "rose" | "blue"; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)" }}>
      <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", display: "flex", alignItems: "center", gap: 8, background: "var(--madel-bg)", borderRadius: "14px 14px 0 0" }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", background: couleur === "rose" ? "var(--madel-rose-light)" : "var(--madel-blue-light)" }}>{icone}</div>
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--madel-navy)" }}>{titre}</span>
      </div>
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>{children}</div>
    </div>
  );
}

function Champ({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 6 }}>
        {label}
      </label>
      {children}
    </div>
  );
}
