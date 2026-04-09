// ============================================================
// SIMULATEUR DÉPENDANCE — Modèle AVQ
// Kleios Madel Assurance · BTS Assurance
// Actes de la Vie Quotidienne — Rente viagère
// ============================================================
import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────
type FormuleDependance = "totale" | "integrale";
type NiveauQuestionnaire = "standard" | "surpoids" | "antecedents" | "tabac" | "refus";

// ── Barème actuariel ──────────────────────────────────────────
// Prime mensuelle pour 100 € de rente, selon l'âge de souscription
// Formule totale (dépendance totale uniquement)
// Tarifs alignés sur le marché France 2025 — sources : leguidedusenior, April, AG2R, Alptis
const BAREME_TOTALE: Record<number, number> = {
  50: 1.60,
  51: 1.74,
  52: 1.89,
  53: 2.05,
  54: 2.23,
  55: 2.42,
  56: 2.65,
  57: 2.90,
  58: 3.18,
  59: 3.48,
  60: 3.80,   // ~19 €/mois pour 500 € de rente — conforme marché
  61: 4.18,
  62: 4.60,
  63: 5.05,
  64: 5.56,
  65: 6.12,   // ~30,6 €/mois pour 500 € de rente
  66: 6.74,
  67: 7.42,
  68: 8.16,
  69: 8.98,
  70: 9.88,   // ~49 €/mois pour 500 € de rente
};

// Majoration formule Intégrale (+35%)
const MAJORATION_INTEGRALE = 1.35;

// Majorations questionnaire médical
const MAJORATIONS_QM: Record<NiveauQuestionnaire, { taux: number; label: string; couleur: string }> = {
  standard:     { taux: 1.00, label: "Standard — pas de surprime", couleur: "#2E7D32" },
  surpoids:     { taux: 1.15, label: "Surpoids / obésité — +15%", couleur: "#7B4F00" },
  antecedents:  { taux: 1.30, label: "Antécédents cardiovasculaires ou neuro — +30%", couleur: "#A8204A" },
  tabac:        { taux: 1.10, label: "Tabagisme actif — +10%", couleur: "#7B4F00" },
  refus:        { taux: 0,    label: "Refus de l'assureur — non assurable", couleur: "#D42B5A" },
};

// ── AVQ couverts ──────────────────────────────────────────────
// 5 AVQ standard — grille officielle marché / FFA
const AVQ_LISTE = [
  { icone: "🛁", nom: "Se laver / faire sa toilette", desc: "Soins d'hygiène corporelle complets, bain ou douche" },
  { icone: "🚶", nom: "Se déplacer", desc: "Se lever, marcher, changer de position sans aide" },
  { icone: "👕", nom: "S'habiller", desc: "Enfiler et retirer ses vêtements seul" },
  { icone: "🍽️", nom: "S'alimenter", desc: "Manger et boire sans assistance" },
  { icone: "🚽", nom: "Contrôler ses sphincters", desc: "Maîtriser les fonctions d'élimination urinaire et fécale" },
];

const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
const eurRound = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

// ── Composant ─────────────────────────────────────────────────
export default function SimulateurDependance() {
  const [ageSouscription, setAgeSouscription]   = useState(55);
  const [renteMensuelle, setRenteMensuelle]      = useState(1000);
  const [formule, setFormule]                    = useState<FormuleDependance>("totale");
  const [questionnaire, setQuestionnaire]        = useState<NiveauQuestionnaire>("standard");
  const [revalorisation, setRevalorisation]      = useState(true);
  const [onglet, setOnglet]                      = useState<"tarif" | "avq" | "comparatif">("tarif");

  // ── Calculs ──────────────────────────────────────────────────
  const tauxBase = BAREME_TOTALE[ageSouscription] ?? 1.00;
  const qm = MAJORATIONS_QM[questionnaire];
  const refus = questionnaire === "refus";

  // Prime mensuelle HT
  const primeMensuelleHT = refus ? 0 : Math.round(
    (renteMensuelle / 100) * tauxBase
    * (formule === "integrale" ? MAJORATION_INTEGRALE : 1.00)
    * qm.taux
    * (revalorisation ? 1.08 : 1.00) // revalorisation = +8% sur la prime
    * 100
  ) / 100;

  const tca = Math.round(primeMensuelleHT * 0.09 * 100) / 100;
  const primeMensuelleTTC = Math.round((primeMensuelleHT + tca) * 100) / 100;
  const primeAnnuelleTTC  = Math.round(primeMensuelleTTC * 12 * 100) / 100;

  // Rente réelle selon niveau
  const renteTotale   = renteMensuelle;
  const rentePartielle = Math.round(renteMensuelle * 0.66);

  // Cotisations totales versées jusqu'à 85 ans
  const anneesSouscription = 85 - ageSouscription;
  const totalCotisations = Math.round(primeAnnuelleTTC * anneesSouscription);

  // Tableau comparatif par âge
  const AGES_COMPARATIF = [50, 55, 60, 65, 70];
  const comparatif = AGES_COMPARATIF.map(a => {
    const taux = BAREME_TOTALE[a] ?? 1;
    const prime = Math.round(
      (renteMensuelle / 100) * taux
      * (formule === "integrale" ? MAJORATION_INTEGRALE : 1)
      * qm.taux
      * (revalorisation ? 1.08 : 1)
      * 1.09 * 12 * 100
    ) / 100;
    const total = Math.round(prime * (85 - a));
    const ratio = BAREME_TOTALE[50] > 0 ? Math.round(taux / BAREME_TOTALE[50] * 10) / 10 : 1;
    return { age: a, primeMensuelle: Math.round(prime / 12 * 100) / 100, primeAnnuelle: prime, total, ratio };
  });

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      {/* Titre */}
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>♿ Simulateur Dépendance — AVQ</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Actes de la Vie Quotidienne · Rente viagère · Souscription 50–70 ans · TCA 9%
        </p>
      </div>

      {/* Onglets */}
      <div style={{ display: "flex", gap: 0, marginBottom: 16, background: "var(--madel-bg)", borderRadius: 10, padding: 4, border: "1px solid var(--madel-border)" }}>
        {[
          { k: "tarif",      label: "💶 Tarification" },
          { k: "avq",        label: "🏥 Garanties AVQ" },
          { k: "comparatif", label: "📊 Comparatif âges" },
        ].map(tab => (
          <button key={tab.k} onClick={() => setOnglet(tab.k as typeof onglet)} style={{
            flex: 1, padding: "10px 14px", borderRadius: 8, border: "none",
            background: onglet === tab.k ? "#fff" : "transparent",
            boxShadow: onglet === tab.k ? "0 1px 4px rgba(26,43,95,.1)" : "none",
            cursor: "pointer", fontFamily: "var(--madel-font)",
            fontSize: 12, fontWeight: onglet === tab.k ? 700 : 400,
            color: onglet === tab.k ? "var(--madel-navy)" : "var(--madel-muted)",
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── ONGLET TARIFICATION ───────────────────────────────── */}
      {onglet === "tarif" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>

          {/* Formulaire */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            <Card titre="Paramètres de souscription" icone="📋" couleur="rose">
              {/* Âge */}
              <Champ label={`Âge à la souscription — ${ageSouscription} ans`}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <input type="range" min={50} max={70} value={ageSouscription}
                    onChange={e => setAgeSouscription(+e.target.value)}
                    style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                  <span style={{ fontWeight: 800, fontSize: 20, minWidth: 52, textAlign: "center", color: "var(--madel-rose)" }}>
                    {ageSouscription} ans
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--madel-muted)", marginTop: 2 }}>
                  <span>50 ans</span><span>70 ans</span>
                </div>
                <div style={{ marginTop: 6, fontSize: 10, color: "var(--madel-muted)", padding: "6px 10px", borderRadius: 7, background: "var(--madel-bg)", border: "1px solid var(--madel-border)" }}>
                  ⚠️ Le tarif est <strong>fixé à la souscription</strong> et n'évolue plus avec l'âge.
                  Plus on souscrit jeune, plus c'est avantageux sur la durée.
                </div>
              </Champ>

              {/* Rente */}
              <Champ label={`Rente mensuelle souhaitée — ${renteMensuelle.toLocaleString("fr-FR")} €`}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <input type="range" min={500} max={3000} step={100} value={renteMensuelle}
                    onChange={e => setRenteMensuelle(+e.target.value)}
                    style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                  <span style={{ fontWeight: 800, fontSize: 18, minWidth: 80, textAlign: "right", fontFamily: "monospace", color: "var(--madel-navy)" }}>
                    {renteMensuelle.toLocaleString("fr-FR")} €
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--madel-muted)", marginTop: 2 }}>
                  <span>500 €</span><span>3 000 €</span>
                </div>
              </Champ>

              {/* Formule */}
              <Champ label="Formule">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {([
                    { v: "totale",    label: "Totale",    desc: "Dépendance totale uniquement\n100% de la rente", icone: "🔴" },
                    { v: "integrale", label: "Intégrale", desc: "Totale + Partielle\n100% et 66% selon niveau", icone: "🟠" },
                  ] as { v: FormuleDependance; label: string; desc: string; icone: string }[]).map(f => (
                    <button key={f.v} onClick={() => setFormule(f.v)} style={{
                      padding: "12px 14px", borderRadius: 10, border: "2px solid",
                      borderColor: formule === f.v ? "var(--madel-rose)" : "var(--madel-border)",
                      background: formule === f.v ? "var(--madel-rose-light)" : "#fff",
                      cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "left",
                    }}>
                      <div style={{ fontSize: 18, marginBottom: 4 }}>{f.icone}</div>
                      <div style={{ fontWeight: 700, fontSize: 12, color: formule === f.v ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>{f.label}</div>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 3, whiteSpace: "pre-line", lineHeight: 1.4 }}>{f.desc}</div>
                      {f.v === "integrale" && <div style={{ fontSize: 9, color: "var(--madel-rose)", marginTop: 4 }}>+35% sur la prime</div>}
                    </button>
                  ))}
                </div>
              </Champ>
            </Card>

            <Card titre="Questionnaire médical" icone="🩺" couleur="blue">
              <div style={{ fontSize: 10, color: "var(--madel-muted)", marginBottom: 10, lineHeight: 1.5 }}>
                La dépendance nécessite un questionnaire médical obligatoire à la souscription.
                Selon l'état de santé, l'assureur peut appliquer une surprime ou refuser la couverture.
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {(Object.entries(MAJORATIONS_QM) as [NiveauQuestionnaire, typeof MAJORATIONS_QM.standard][]).map(([k, v]) => (
                  <button key={k} onClick={() => setQuestionnaire(k)} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "9px 12px", borderRadius: 8, border: "2px solid",
                    borderColor: questionnaire === k ? v.couleur : "var(--madel-border)",
                    background: questionnaire === k ? `${v.couleur}15` : "#fff",
                    cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "left",
                  }}>
                    <span style={{ fontSize: 11, fontWeight: questionnaire === k ? 700 : 400, color: questionnaire === k ? v.couleur : "var(--madel-navy)" }}>
                      {v.label}
                    </span>
                    {k !== "refus" && k !== "standard" && (
                      <span style={{ fontSize: 10, fontWeight: 700, color: v.couleur, flexShrink: 0, marginLeft: 8 }}>
                        ×{v.taux}
                      </span>
                    )}
                    {k === "refus" && (
                      <span style={{ fontSize: 10, fontWeight: 700, color: v.couleur, flexShrink: 0 }}>🚫</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Revalorisation */}
              <div style={{ marginTop: 10 }}>
                <label style={{
                  display: "flex", alignItems: "center", gap: 9, cursor: "pointer",
                  padding: "9px 11px", borderRadius: 8,
                  border: `1.5px solid ${revalorisation ? "#A5D6A7" : "var(--madel-border)"}`,
                  background: revalorisation ? "var(--madel-success-bg)" : "var(--madel-bg)",
                }}>
                  <input type="checkbox" checked={revalorisation}
                    onChange={e => setRevalorisation(e.target.checked)}
                    style={{ accentColor: "var(--madel-success)", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "var(--madel-navy)" }}>
                      Revalorisation annuelle (inflation)
                    </div>
                    <div style={{ fontSize: 9, color: revalorisation ? "var(--madel-success)" : "var(--madel-muted)", marginTop: 1 }}>
                      La rente est indexée sur l'inflation · +8% sur la prime
                    </div>
                  </div>
                </label>
              </div>
            </Card>
          </div>

          {/* Résultats droite */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Refus */}
            {refus ? (
              <div style={{ padding: "24px 20px", borderRadius: 14, background: "#FCEBEB", border: "2px solid var(--madel-rose)", textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>🚫</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: "var(--madel-rose-dark)", marginBottom: 8 }}>
                  Refus de l'assureur
                </div>
                <div style={{ fontSize: 12, color: "var(--madel-rose-dark)", lineHeight: 1.6 }}>
                  L'état de santé déclaré ne permet pas la souscription d'un contrat dépendance standard.
                  Des solutions spécifiques existent (contrats simplifiés sans questionnaire) mais avec des plafonds de rente réduits.
                </div>
                <div style={{ marginTop: 12, fontSize: 11, color: "var(--madel-rose)", padding: "8px 12px", borderRadius: 8, background: "rgba(212,43,90,.1)" }}>
                  💡 Pédagogique : le refus illustre l'importance de souscrire jeune, en bonne santé.
                </div>
              </div>
            ) : (
              <>
                {/* Bandeau prime */}
                <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 22px" }}>
                  <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 12 }}>
                    Prime calculée — {ageSouscription} ans à la souscription
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                    <div style={{ background: "rgba(255,255,255,.1)", borderRadius: 10, padding: "12px 14px" }}>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,.5)", marginBottom: 3 }}>Prime mensuelle TTC</div>
                      <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
                        {eur(primeMensuelleTTC)}
                      </div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,.1)", borderRadius: 10, padding: "12px 14px" }}>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,.5)", marginBottom: 3 }}>Prime annuelle TTC</div>
                      <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>
                        {eur(primeAnnuelleTTC)}
                      </div>
                    </div>
                  </div>

                  {[
                    { l: "Taux base (âge " + ageSouscription + " ans)", v: `${tauxBase} €/mois pour 100 €` },
                    { l: "Formule", v: formule === "integrale" ? "Intégrale (×1.35)" : "Totale" },
                    { l: "Questionnaire médical", v: `×${qm.taux}` },
                    { l: "Revalorisation", v: revalorisation ? "Oui (×1.08)" : "Non" },
                    { l: "TCA 9%", v: `+${eur(tca)}/mois` },
                  ].map(item => (
                    <div key={item.l} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,.08)", fontSize: 10 }}>
                      <span style={{ color: "rgba(255,255,255,.55)" }}>{item.l}</span>
                      <span style={{ color: "#fff", fontFamily: "monospace" }}>{item.v}</span>
                    </div>
                  ))}

                  <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,.08)" }}>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,.5)", marginBottom: 2 }}>
                      Total cotisations versées jusqu'à 85 ans ({anneesSouscription} ans de cotisation)
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "var(--madel-rose-mid)", fontFamily: "monospace" }}>
                      {eurRound(totalCotisations)}
                    </div>
                  </div>
                </div>

                {/* Rentes garanties */}
                <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
                  <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--madel-rose-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>💶</div>
                    Rentes garanties
                  </div>
                  <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{
                      padding: "12px 14px", borderRadius: 10,
                      background: "var(--madel-navy)", border: "none",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}>
                      <div>
                        <div style={{ color: "var(--madel-rose-mid)", fontSize: 10, marginBottom: 2 }}>Dépendance totale (3 AVQ ou +)</div>
                        <div style={{ color: "#fff", fontSize: 11 }}>Incapacité sévère — GIR 1-2</div>
                      </div>
                      <div style={{ fontWeight: 800, fontSize: 22, color: "#fff", fontFamily: "monospace" }}>
                        {eurRound(renteTotale)}<span style={{ fontSize: 11, fontWeight: 400, color: "rgba(255,255,255,.6)" }}>/mois</span>
                      </div>
                    </div>

                    {formule === "integrale" && (
                      <div style={{
                        padding: "12px 14px", borderRadius: 10,
                        background: "var(--madel-blue-light)", border: "1px solid #B5D4F4",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                      }}>
                        <div>
                          <div style={{ color: "var(--madel-blue)", fontSize: 10, marginBottom: 2 }}>Dépendance partielle (1-2 AVQ)</div>
                          <div style={{ color: "var(--madel-navy)", fontSize: 11 }}>Perte d'autonomie partielle — GIR 3-4</div>
                        </div>
                        <div style={{ fontWeight: 800, fontSize: 20, color: "var(--madel-navy)", fontFamily: "monospace" }}>
                          {eurRound(rentePartielle)}<span style={{ fontSize: 11, fontWeight: 400, color: "var(--madel-muted)" }}>/mois</span>
                        </div>
                      </div>
                    )}

                    {formule === "totale" && (
                      <div style={{ padding: "10px 12px", borderRadius: 8, background: "var(--madel-bg)", border: "1px solid var(--madel-border)", opacity: 0.6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontSize: 10, color: "var(--madel-muted)" }}>Dépendance partielle</div>
                          <div style={{ fontSize: 11, color: "var(--madel-muted)" }}>Non couvert — formule Totale</div>
                        </div>
                        <span style={{ fontSize: 14 }}>❌</span>
                      </div>
                    )}

                    <div style={{ marginTop: 4, padding: "9px 12px", borderRadius: 8, background: "var(--madel-bg)", border: "1px solid var(--madel-border)", fontSize: 10, color: "var(--madel-muted)", lineHeight: 1.5 }}>
                      ℹ Pas de franchise — la rente démarre après <strong>consolidation médicale</strong> constatée par expertise.
                      {revalorisation && <><br />📈 Rente revalorisée chaque année selon l'inflation (IPCH).</>}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── ONGLET GARANTIES AVQ ──────────────────────────────── */}
      {onglet === "avq" && (
        <div>
          {/* Intro */}
          <div style={{ marginBottom: 16, padding: "14px 18px", borderRadius: 12, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 12, color: "var(--madel-info)", lineHeight: 1.6 }}>
            📚 <strong>Qu'est-ce qu'un AVQ ?</strong> Les Actes de la Vie Quotidienne sont des actions essentielles du quotidien.
            La dépendance est reconnue quand une personne ne peut plus accomplir <strong>au moins 4 des 5 AVQ</strong> seule sans aide extérieure (dépendance totale), ou <strong>1 à 3 AVQ</strong> pour la dépendance partielle.
          </div>

          {/* Les 6 AVQ */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
            {AVQ_LISTE.map((avq, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "16px 18px", border: "1px solid var(--madel-border)" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{avq.icone}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "var(--madel-navy)", marginBottom: 4 }}>{avq.nom}</div>
                <div style={{ fontSize: 11, color: "var(--madel-muted)", lineHeight: 1.4 }}>{avq.desc}</div>
              </div>
            ))}
          </div>

          {/* Tableau niveaux */}
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", fontSize: 12, fontWeight: 700 }}>
              Niveaux de dépendance et rentes versées
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ background: "var(--madel-navy)", color: "#fff" }}>
                  <th style={{ padding: "10px 14px", textAlign: "left" }}>Niveau</th>
                  <th style={{ padding: "10px 14px", textAlign: "left" }}>GIR</th>
                  <th style={{ padding: "10px 14px", textAlign: "left" }}>Critère</th>
                  <th style={{ padding: "10px 14px", textAlign: "right" }}>Rente versée</th>
                  <th style={{ padding: "10px 14px", textAlign: "center" }}>Formule Totale</th>
                  <th style={{ padding: "10px 14px", textAlign: "center" }}>Formule Intégrale</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--madel-border)" }}>
                  <td style={{ padding: "12px 14px", fontWeight: 700, color: "var(--madel-rose)" }}>🔴 Totale</td>
                  <td style={{ padding: "12px 14px", color: "var(--madel-text)" }}>GIR 1-2</td>
                  <td style={{ padding: "12px 14px", color: "var(--madel-text)" }}>4 AVQ sur 5 impossibles</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontWeight: 700, fontFamily: "monospace", color: "var(--madel-navy)" }}>
                    {eurRound(renteTotale)}/mois
                  </td>
                  <td style={{ padding: "12px 14px", textAlign: "center" }}>✅</td>
                  <td style={{ padding: "12px 14px", textAlign: "center" }}>✅</td>
                </tr>
                <tr style={{ background: "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)" }}>
                  <td style={{ padding: "12px 14px", fontWeight: 700, color: "#4A8FD4" }}>🟡 Partielle</td>
                  <td style={{ padding: "12px 14px", color: "var(--madel-text)" }}>GIR 3-4</td>
                  <td style={{ padding: "12px 14px", color: "var(--madel-text)" }}>1 à 3 AVQ impossibles</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontWeight: 700, fontFamily: "monospace", color: "var(--madel-navy)" }}>
                    {formule === "integrale" ? `${eurRound(rentePartielle)}/mois` : "Non couvert"}
                  </td>
                  <td style={{ padding: "12px 14px", textAlign: "center" }}>❌</td>
                  <td style={{ padding: "12px 14px", textAlign: "center" }}>✅ (66%)</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 14px", fontWeight: 700, color: "var(--madel-success)" }}>🟢 Autonome</td>
                  <td style={{ padding: "12px 14px", color: "var(--madel-text)" }}>GIR 5-6</td>
                  <td style={{ padding: "12px 14px", color: "var(--madel-text)" }}>Tous AVQ préservés</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", color: "var(--madel-muted)" }}>Pas de rente</td>
                  <td style={{ padding: "12px 14px", textAlign: "center" }}>—</td>
                  <td style={{ padding: "12px 14px", textAlign: "center" }}>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note pédagogique */}
          <div style={{ marginTop: 14, padding: "12px 16px", borderRadius: 10, background: "#FEF8EE", border: "1px solid #E8B86D", fontSize: 11, color: "#7B4F00", lineHeight: 1.6 }}>
            📚 <strong>Questionnaire médical :</strong> Contrairement aux contrats décès ou IJ, la dépendance nécessite toujours un questionnaire médical détaillé.
            Les antécédents neurologiques, cardiovasculaires ou orthopédiques peuvent entraîner des surprimes ou un refus.
            C'est pourquoi il faut souscrire le plus tôt possible (dès 50 ans) pour maximiser ses chances d'acceptance à tarif standard.
          </div>
        </div>
      )}

      {/* ── ONGLET COMPARATIF ÂGES ────────────────────────────── */}
      {onglet === "comparatif" && (
        <div>
          <div style={{ marginBottom: 14, padding: "12px 16px", borderRadius: 10, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 12, color: "var(--madel-info)" }}>
            📚 Ce tableau montre l'impact de l'âge de souscription sur le coût total jusqu'à 85 ans.
            Pour une rente de <strong>{eurRound(renteMensuelle)}/mois</strong>, la différence entre souscrire à 50 ou 70 ans est considérable.
          </div>

          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden", marginBottom: 14 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ background: "var(--madel-navy)", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Âge souscription</th>
                  <th style={{ padding: "12px 16px", textAlign: "right" }}>Prime mensuelle TTC</th>
                  <th style={{ padding: "12px 16px", textAlign: "right" }}>Prime annuelle TTC</th>
                  <th style={{ padding: "12px 16px", textAlign: "right" }}>Cotisations totales jusqu'à 85 ans</th>
                  <th style={{ padding: "12px 16px", textAlign: "right" }}>Coût vs 50 ans</th>
                </tr>
              </thead>
              <tbody>
                {comparatif.map((row, i) => {
                  const isSelected = row.age === ageSouscription;
                  const ref50 = comparatif[0].total;
                  const surcoût = row.total - ref50;
                  return (
                    <tr key={row.age} style={{
                      background: isSelected ? "var(--madel-rose-light)" : i % 2 === 0 ? "#fff" : "var(--madel-bg)",
                      borderBottom: "1px solid var(--madel-border)",
                    }}>
                      <td style={{ padding: "12px 16px", fontWeight: isSelected ? 800 : 500, color: isSelected ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>
                        {row.age} ans {isSelected && <span style={{ fontSize: 10, background: "var(--madel-rose)", color: "#fff", padding: "2px 7px", borderRadius: 10, marginLeft: 6 }}>Vous</span>}
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "monospace", fontWeight: 600, color: "var(--madel-navy)" }}>
                        {eur(row.primeMensuelle)}
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "monospace", color: "var(--madel-navy)" }}>
                        {eur(row.primeAnnuelle)}
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "monospace", fontWeight: 700, color: "var(--madel-navy)" }}>
                        {eurRound(row.total)}
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "right" }}>
                        {i === 0 ? (
                          <span style={{ background: "var(--madel-success-bg)", color: "var(--madel-success)", borderRadius: 10, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>Référence</span>
                        ) : (
                          <span style={{
                            background: surcoût > 20000 ? "#FCEBEB" : "#FAEEDA",
                            color: surcoût > 20000 ? "var(--madel-rose)" : "#7B4F00",
                            borderRadius: 10, padding: "2px 8px", fontSize: 10, fontWeight: 700,
                          }}>
                            +{eurRound(surcoût)}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Visualisation barres */}
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 12 }}>Coût total des cotisations — visualisation</div>
            {comparatif.map(row => {
              const maxTotal = comparatif[comparatif.length - 1].total;
              const pct = Math.round((row.total / maxTotal) * 100);
              const isSelected = row.age === ageSouscription;
              return (
                <div key={row.age} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: isSelected ? 700 : 400, minWidth: 50, color: isSelected ? "var(--madel-rose)" : "var(--madel-navy)" }}>
                    {row.age} ans
                  </span>
                  <div style={{ flex: 1, height: 20, background: "var(--madel-bg)", borderRadius: 6, overflow: "hidden" }}>
                    <div style={{
                      height: "100%", width: `${pct}%`,
                      background: isSelected ? "var(--madel-rose)" : "var(--madel-blue)",
                      borderRadius: 6, transition: "width .3s",
                    }} />
                  </div>
                  <span style={{ fontSize: 11, fontFamily: "monospace", fontWeight: 700, minWidth: 90, textAlign: "right", color: isSelected ? "var(--madel-rose)" : "var(--madel-navy)" }}>
                    {eurRound(row.total)}
                  </span>
                </div>
              );
            })}
            <div style={{ marginTop: 10, fontSize: 10, color: "var(--madel-muted)", lineHeight: 1.5 }}>
              💡 Souscrire à 50 ans au lieu de 70 ans économise{" "}
              <strong style={{ color: "var(--madel-navy)" }}>
                {eurRound(comparatif[4].total - comparatif[0].total)}
              </strong>{" "}
              sur le total des cotisations jusqu'à 85 ans — tout en bénéficiant de la même rente.
            </div>
          </div>
        </div>
      )}
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
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>{children}</div>
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
