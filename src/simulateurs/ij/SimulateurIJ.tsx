// ============================================================
// SIMULATEUR IJ — Indemnités Journalières
// Kleios Madel Assurance · BTS Assurance
// Chiffres officiels 2026 — Sources : Légifrance, Ameli, URSSAF
// SMIC 2026 : 1 823,03 € | PASS 2026 : 48 060 €
// Décret n°2025-160 du 20 février 2025 (plafond 1,4 SMIC)
// ============================================================
import { useState } from "react";
import { useSimulateurSouscription, BoutonSouscription } from "../../hooks/useSimulateurSouscription";

// ── Constantes officielles 2026 ───────────────────────────────
const REFERENTIELS = {
  SMIC_MENSUEL_BRUT:     1823.03,  // Ministère du Travail, 1er jan. 2026
  PASS_ANNUEL:           48060,    // Arrêté JORF 22 déc. 2025
  PMSS:                  4005,     // PASS mensuel 2026
  IJ_MAX_SALARIE:        41.95,    // 50% × (1,4 SMIC × 3 / 91,25) — depuis 1er avril 2025
  IJ_MAX_TNS:            65.84,    // PASS 2026 / 730
  IJ_MIN_TNS:            25.40,    // cotisation minimale SSI
  IJ_MIN_MICROENTREPRENEUR: 5.76,
  IJ_MAX_CIPAV_CPAM:     190.55,   // CPAM pour CIPAV — J4 à J90
  IJ_MIN_CIPAV_CPAM:     25.40,
};

// ── Types ─────────────────────────────────────────────────────
type RegimeIJ = "salarie" | "tns" | "cipav" | "micro";
type FranchisePrevoyance = 30 | 60 | 90 | 180;
type ConventionCollective = "aucune" | "syntec" | "btp" | "commerce" | "transport" | "metallurgie" | "banque" | "hotellerie" | "sante" | "restauration";

// ── Conventions collectives ───────────────────────────────────
const CONVENTIONS: Record<ConventionCollective, { label: string; maintienPct1: number; duree1: number; maintienPct2: number; duree2: number; carence: number; note: string }> = {
  aucune: {
    label: "Loi de mensualisation (Code du travail)",
    maintienPct1: 90, duree1: 30, maintienPct2: 66.66, duree2: 30,
    carence: 7,
    note: "Carence employeur : 7 jours. S'applique dès 1 an d'ancienneté.",
  },
  syntec: {
    label: "Syntec (informatique, conseil, ingénierie)",
    maintienPct1: 100, duree1: 90, maintienPct2: 100, duree2: 30,
    carence: 0,
    note: "Maintien 100% pendant 3 mois dès le 1er jour, sans carence conventionnelle.",
  },
  btp: {
    label: "BTP (Bâtiment & Travaux Publics)",
    maintienPct1: 100, duree1: 90, maintienPct2: 66.66, duree2: 90,
    carence: 3,
    note: "Carence de 3 jours. Maintien 100% sur 3 mois, puis 66% sur 3 mois.",
  },
  commerce: {
    label: "Commerce de détail",
    maintienPct1: 90, duree1: 30, maintienPct2: 66.66, duree2: 30,
    carence: 7,
    note: "Proche du Code du travail. Maintien dès 1 an d'ancienneté.",
  },
  transport: {
    label: "Transport routier",
    maintienPct1: 100, duree1: 30, maintienPct2: 75, duree2: 30,
    carence: 3,
    note: "Carence 3 jours. Maintien 100% sur 1 mois puis 75% sur 1 mois.",
  },
  metallurgie: {
    label: "Métallurgie (Accord national 2022)",
    maintienPct1: 100, duree1: 60, maintienPct2: 80, duree2: 60,
    carence: 0,
    note: "Accord national 2022 : maintien 100% sur 2 mois, 80% sur 2 mois supplémentaires.",
  },
  banque: {
    label: "Banque & Assurance",
    maintienPct1: 100, duree1: 90, maintienPct2: 100, duree2: 90,
    carence: 0,
    note: "Parmi les plus favorables. Maintien 100% sans carence pendant 6 mois.",
  },
  hotellerie: {
    label: "Hôtellerie-Restauration (HCR)",
    maintienPct1: 90, duree1: 30, maintienPct2: 66.66, duree2: 30,
    carence: 7,
    note: "Proche du minimum légal. Secteur avec forte proportion de temps partiels.",
  },
  sante: {
    label: "Santé privée (FEHAP / FHP)",
    maintienPct1: 100, duree1: 90, maintienPct2: 75, duree2: 90,
    carence: 0,
    note: "Maintien 100% sur 3 mois, 75% sur 3 mois supplémentaires. Sans carence.",
  },
  restauration: {
    label: "Restauration rapide",
    maintienPct1: 90, duree1: 30, maintienPct2: 66.66, duree2: 30,
    carence: 7,
    note: "Proche du Code du travail. Forte proportion de CDD et temps partiels.",
  },
};

// ── Calcul IJ Salarié ─────────────────────────────────────────
const calculerIJSalarie = (salaireMensuelBrut: number): {
  sjb: number; ijSecu: number; ijMax: number; plafonnee: boolean;
} => {
  const salairePlafonne = Math.min(salaireMensuelBrut, 1.4 * REFERENTIELS.SMIC_MENSUEL_BRUT);
  const sjb = (salairePlafonne * 3) / 91.25;
  const ijSecu = Math.min(sjb * 0.5, REFERENTIELS.IJ_MAX_SALARIE);
  return {
    sjb: Math.round(sjb * 100) / 100,
    ijSecu: Math.round(ijSecu * 100) / 100,
    ijMax: REFERENTIELS.IJ_MAX_SALARIE,
    plafonnee: salaireMensuelBrut > 1.4 * REFERENTIELS.SMIC_MENSUEL_BRUT,
  };
};

// ── Calcul IJ TNS ─────────────────────────────────────────────
const calculerIJTNS = (revenuAnnuelMoyen: number): { ij: number; plafonnee: boolean } => {
  const ij = Math.min(revenuAnnuelMoyen / 730, REFERENTIELS.IJ_MAX_TNS);
  return {
    ij: Math.max(Math.round(ij * 100) / 100, REFERENTIELS.IJ_MIN_TNS),
    plafonnee: revenuAnnuelMoyen / 730 > REFERENTIELS.IJ_MAX_TNS,
  };
};

// ── Calcul IJ Micro-entrepreneur ──────────────────────────────
const calculerIJMicro = (caBrut: number, typeActivite: "vente" | "service" | "liberal"): { ij: number; revenuApresAbattement: number } => {
  const abattement = typeActivite === "vente" ? 0.71 : typeActivite === "service" ? 0.50 : 0.34;
  const revenu = caBrut * (1 - abattement);
  const ij = Math.min(Math.max(revenu / 730, REFERENTIELS.IJ_MIN_MICROENTREPRENEUR), REFERENTIELS.IJ_MAX_TNS);
  return { ij: Math.round(ij * 100) / 100, revenuApresAbattement: Math.round(revenu) };
};

// ── Projection cumulée ────────────────────────────────────────
const calculerProjection = (
  regime: RegimeIJ,
  ijSecu: number,
  salaireMensuelBrut: number,
  convention: ConventionCollective,
  franchisePrev: FranchisePrevoyance,
  ijPrevoyance: number,
  dureeJours: number
): { secu: number; employeur: number; prevoyance: number; total: number; manqueAGagner: number } => {
  const salaireJournalier = salaireMensuelBrut / 30.42;
  let secuCumulee = 0;
  let employeurCumule = 0;
  let prevoyanceCumulee = 0;

  for (let j = 1; j <= dureeJours; j++) {
    // IJ Sécu (après carence 3j)
    const ijSecuJour = j > 3 ? ijSecu : 0;
    secuCumulee += ijSecuJour;

    // Maintien employeur (salarié seulement)
    if (regime === "salarie") {
      const conv = CONVENTIONS[convention];
      const debutMaintien = conv.carence + 1;
      const finPeriode1 = conv.carence + conv.duree1;
      const finPeriode2 = conv.carence + conv.duree1 + conv.duree2;

      let maintienCible = 0;
      if (j >= debutMaintien && j <= finPeriode1) {
        maintienCible = salaireJournalier * (conv.maintienPct1 / 100);
      } else if (j > finPeriode1 && j <= finPeriode2) {
        maintienCible = salaireJournalier * (conv.maintienPct2 / 100);
      }
      const complementEmployeur = Math.max(0, maintienCible - ijSecuJour);
      employeurCumule += complementEmployeur;
    }

    // Prévoyance complémentaire (après franchise)
    if (j > franchisePrev) {
      prevoyanceCumulee += ijPrevoyance;
    }
  }

  const total = secuCumulee + employeurCumule + prevoyanceCumulee;
  const gainTotal = salaireJournalier * dureeJours;
  const manqueAGagner = Math.max(0, gainTotal - total);

  return {
    secu: Math.round(secuCumulee),
    employeur: Math.round(employeurCumule),
    prevoyance: Math.round(prevoyanceCumulee),
    total: Math.round(total),
    manqueAGagner: Math.round(manqueAGagner),
  };
};

// ── Tarif prévoyance complémentaire ──────────────────────────
const calculerTarifPrevoyance = (
  regime: RegimeIJ,
  ijSouhaitee: number,
  franchise: FranchisePrevoyance,
  age: number
): number => {
  // Barème actualisé 2025 — sources : April, Malakoff Humanis, SwissLife
  // Profil référence : salarié 38 ans, IJ 80€/j, franchise 90j → ~420€/an TTC
  const baseAge = age < 35 ? 0.90 : age < 45 ? 1.00 : age < 55 ? 1.25 : 1.65;
  const baseFranchise: Record<number, number> = { 30: 1.45, 60: 1.10, 90: 0.78, 180: 0.52 };
  const baseRegime = regime === "cipav" ? 1.25 : regime === "tns" ? 1.18 : regime === "micro" ? 1.22 : 1.00;
  const tarifBase = ijSouhaitee * 365 * 0.016;  // facteur marché 2025 (anciennement 0.025)
  return Math.round(tarifBase * baseAge * (baseFranchise[franchise] ?? 1) * baseRegime * 12) / 12;
};

const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
const eurRound = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

// ── Composant ─────────────────────────────────────────────────
export default function SimulateurIJ() {
  const [regime, setRegime] = useState<RegimeIJ>("salarie");
  const [onglet, setOnglet] = useState<"profil" | "projection" | "prevoyance">("profil");

  // Salarié
  const [salaire, setSalaire]           = useState(3000);
  const [anciennete, setAnciennete]     = useState(3);
  const [convention, setConvention]     = useState<ConventionCollective>("aucune");

  // TNS
  const [revenuTNS, setRevenuTNS]       = useState(40000);

  // CIPAV
  const [revenuCIPAV, setRevenuCIPAV]   = useState(60000);

  // Micro
  const [caMicro, setCaMicro]           = useState(30000);
  const [typeActivite, setTypeActivite] = useState<"vente" | "service" | "liberal">("service");

  // Commun
  const [age, setAge]                   = useState(38);
  const [franchise, setFranchise]       = useState<FranchisePrevoyance>(90);
  const [ijSouhaitee, setIjSouhaitee]   = useState(80);
  // Hook souscription — connecte le simulateur à la fiche assuré
  const { client, mode, isFromFiche, souscrire } = useSimulateurSouscription("ij");

  // ── Calculs ──────────────────────────────────────────────────
  const calc = (() => {
    switch (regime) {
      case "salarie": return calculerIJSalarie(salaire);
      case "tns":     return { ...calculerIJTNS(revenuTNS), sjb: 0, ijMax: REFERENTIELS.IJ_MAX_TNS };
      case "cipav":   return { ijSecu: REFERENTIELS.IJ_MIN_CIPAV_CPAM, sjb: 0, ijMax: REFERENTIELS.IJ_MAX_CIPAV_CPAM, plafonnee: false };
      case "micro":   return { ...calculerIJMicro(caMicro, typeActivite), ijSecu: calculerIJMicro(caMicro, typeActivite).ij, sjb: 0, ijMax: REFERENTIELS.IJ_MAX_TNS, plafonnee: false };
    }
  })();

  const ijJour = regime === "salarie" ? (calc as ReturnType<typeof calculerIJSalarie>).ijSecu
    : regime === "tns" ? (calc as ReturnType<typeof calculerIJTNS>).ij
    : regime === "micro" ? calculerIJMicro(caMicro, typeActivite).ij
    : REFERENTIELS.IJ_MIN_CIPAV_CPAM;

  const salairePourProjection = regime === "salarie" ? salaire
    : regime === "tns" ? revenuTNS / 12
    : regime === "cipav" ? revenuCIPAV / 12
    : caMicro / 12;

  const projection30  = calculerProjection(regime, ijJour, salairePourProjection, convention, franchise, ijSouhaitee, 30);
  const projection90  = calculerProjection(regime, ijJour, salairePourProjection, convention, franchise, ijSouhaitee, 90);
  const projection180 = calculerProjection(regime, ijJour, salairePourProjection, convention, franchise, ijSouhaitee, 180);

  const tarifPrevoyance = calculerTarifPrevoyance(regime, ijSouhaitee, franchise, age);
  const tarifTTC = Math.round(tarifPrevoyance * 1.09 * 100) / 100;

  const salaireJournalier = salairePourProjection / 30.42;
  const tauxRemplacement = salaireJournalier > 0 ? Math.round((ijJour / salaireJournalier) * 100) : 0;

  const REGIMES = [
    { k: "salarie", label: "Salarié", icone: "👔", desc: "Régime général CPAM", couleur: "#4A8FD4" },
    { k: "tns",     label: "TNS",     icone: "🏪", desc: "Artisan / Commerçant (SSI)", couleur: "#E8722A" },
    { k: "cipav",   label: "CIPAV",   icone: "⚕️", desc: "Profession libérale réglementée", couleur: "#D42B5A" },
    { k: "micro",   label: "Micro",   icone: "📱", desc: "Micro-entrepreneur", couleur: "#8B5CF6" },
  ] as { k: RegimeIJ; label: string; icone: string; desc: string; couleur: string }[];

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      {/* Titre */}
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🏥 Simulateur IJ — Indemnités Journalières</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Chiffres officiels 2026 · SMIC 1 823,03 € · PASS 48 060 € · Décret 2025-160 (plafond 1,4 SMIC depuis avril 2025)
        </p>
      </div>

      {/* Sélection régime */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
        {REGIMES.map(r => (
          <button key={r.k} onClick={() => setRegime(r.k)} style={{
            padding: "14px 16px", borderRadius: 12, border: "2px solid",
            borderColor: regime === r.k ? r.couleur : "var(--madel-border)",
            background: regime === r.k ? `${r.couleur}15` : "#fff",
            cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "left",
          }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{r.icone}</div>
            <div style={{ fontWeight: 700, fontSize: 13, color: regime === r.k ? r.couleur : "var(--madel-navy)" }}>{r.label}</div>
            <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 2 }}>{r.desc}</div>
          </button>
        ))}
      </div>

      {/* Onglets */}
      <div style={{ display: "flex", gap: 0, marginBottom: 16, background: "var(--madel-bg)", borderRadius: 10, padding: 4, border: "1px solid var(--madel-border)" }}>
        {[
          { k: "profil",     label: "👤 Profil & Calcul" },
          { k: "projection", label: "📊 Projection" },
          { k: "prevoyance", label: "🛡️ Prévoyance complémentaire" },
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

      {/* ── ONGLET PROFIL ─────────────────────────────────────── */}
      {onglet === "profil" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>

          {/* Formulaire gauche */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Salarié */}
            {regime === "salarie" && (
              <Card titre="Données salarié" icone="👔" couleur="blue">
                <Champ label="Salaire mensuel brut (€)">
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <input type="range" min={1400} max={10000} step={100} value={salaire}
                      onChange={e => setSalaire(+e.target.value)}
                      style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                    <span style={{ fontWeight: 800, fontSize: 16, minWidth: 80, textAlign: "right", fontFamily: "monospace" }}>
                      {salaire.toLocaleString("fr-FR")} €
                    </span>
                  </div>
                  {salaire > 1.4 * REFERENTIELS.SMIC_MENSUEL_BRUT && (
                    <div style={{ fontSize: 10, color: "var(--madel-rose)", marginTop: 3 }}>
                      ⚠ Salaire plafonné à 2 552 € pour le calcul CPAM (1,4 × SMIC 2026)
                    </div>
                  )}
                </Champ>
                <Champ label="Ancienneté">
                  <select value={anciennete} onChange={e => setAnciennete(+e.target.value)} style={selectStyle}>
                    <option value={0}>Moins d'1 an — pas de maintien</option>
                    <option value={1}>1 à 3 ans</option>
                    <option value={3}>3 à 5 ans</option>
                    <option value={5}>5 à 8 ans</option>
                    <option value={8}>8 à 10 ans</option>
                    <option value={10}>10 ans et plus</option>
                  </select>
                </Champ>
                {anciennete >= 1 && (
                  <Champ label="Convention collective">
                    <select value={convention} onChange={e => setConvention(e.target.value as ConventionCollective)} style={selectStyle}>
                      {Object.entries(CONVENTIONS).map(([k, v]) => (
                        <option key={k} value={k}>{v.label}</option>
                      ))}
                    </select>
                    {anciennete >= 1 && (
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 3, lineHeight: 1.4 }}>
                        💡 {CONVENTIONS[convention].note}
                      </div>
                    )}
                  </Champ>
                )}
              </Card>
            )}

            {/* TNS */}
            {regime === "tns" && (
              <Card titre="Données TNS — Artisan / Commerçant" icone="🏪" couleur="rose">
                <Champ label="Revenu annuel moyen — 3 dernières années (RAAM) (€)">
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <input type="range" min={0} max={150000} step={1000} value={revenuTNS}
                      onChange={e => setRevenuTNS(+e.target.value)}
                      style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                    <span style={{ fontWeight: 800, fontSize: 16, minWidth: 90, textAlign: "right", fontFamily: "monospace" }}>
                      {revenuTNS.toLocaleString("fr-FR")} €
                    </span>
                  </div>
                </Champ>
                <div style={{ padding: "10px 12px", borderRadius: 8, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 10, color: "var(--madel-info)", lineHeight: 1.6 }}>
                  📚 <strong>Formule officielle :</strong> IJ = RAAM ÷ 730<br />
                  RAAM = moyenne des revenus cotisés des 3 années civiles précédant l'arrêt<br />
                  Carence : 3 jours (si arrêt &gt; 7 jours). Durée max : 360 jours / 3 ans.
                </div>
              </Card>
            )}

            {/* CIPAV */}
            {regime === "cipav" && (
              <Card titre="Données profession libérale — CIPAV" icone="⚕️" couleur="rose">
                <Champ label="Revenu annuel (BNC/BIC) (€)">
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <input type="range" min={0} max={200000} step={1000} value={revenuCIPAV}
                      onChange={e => setRevenuCIPAV(+e.target.value)}
                      style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                    <span style={{ fontWeight: 800, fontSize: 16, minWidth: 90, textAlign: "right", fontFamily: "monospace" }}>
                      {revenuCIPAV.toLocaleString("fr-FR")} €
                    </span>
                  </div>
                </Champ>
                <div style={{ padding: "12px 14px", borderRadius: 10, background: "#FCEBEB", border: "2px solid var(--madel-rose)", fontSize: 11, color: "var(--madel-rose-dark)", lineHeight: 1.6 }}>
                  ⚠ <strong>Attention — Cas critique pédagogique :</strong><br />
                  La CIPAV (architectes, consultants, ingénieurs, etc.) verse des IJ via la CPAM <strong>uniquement du J4 au J90</strong>.
                  Après le 90e jour : <strong>0 € de la CIPAV</strong>. Aucune couverture longue durée.<br />
                  C'est le régime le plus précaire — la prévoyance complémentaire est quasi-obligatoire.
                </div>
              </Card>
            )}

            {/* Micro */}
            {regime === "micro" && (
              <Card titre="Données Micro-entrepreneur" icone="📱" couleur="rose">
                <Champ label="Chiffre d'affaires annuel brut (€)">
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <input type="range" min={0} max={80000} step={500} value={caMicro}
                      onChange={e => setCaMicro(+e.target.value)}
                      style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                    <span style={{ fontWeight: 800, fontSize: 16, minWidth: 90, textAlign: "right", fontFamily: "monospace" }}>
                      {caMicro.toLocaleString("fr-FR")} €
                    </span>
                  </div>
                </Champ>
                <Champ label="Type d'activité (abattement fiscal)">
                  <select value={typeActivite} onChange={e => setTypeActivite(e.target.value as typeof typeActivite)} style={selectStyle}>
                    <option value="vente">Vente de marchandises — abattement 71%</option>
                    <option value="service">Prestations de services BIC — abattement 50%</option>
                    <option value="liberal">Professions libérales BNC — abattement 34%</option>
                  </select>
                </Champ>
                <div style={{ padding: "10px 12px", borderRadius: 8, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 10, color: "var(--madel-info)", lineHeight: 1.6 }}>
                  📚 <strong>Formule :</strong> Revenu = CA × (1 - abattement) | IJ = Revenu ÷ 730<br />
                  CA après abattement : <strong>{((1 - (typeActivite === "vente" ? 0.71 : typeActivite === "service" ? 0.50 : 0.34)) * caMicro).toLocaleString("fr-FR")} €</strong>
                </div>
              </Card>
            )}

            <Champ label="Âge de l'assuré">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <input type="range" min={18} max={65} value={age}
                  onChange={e => setAge(+e.target.value)}
                  style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                <span style={{ fontWeight: 800, fontSize: 18, minWidth: 52, textAlign: "center" }}>{age} ans</span>
              </div>
            </Champ>
          </div>

          {/* Résultat droite */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Bandeau IJ */}
            <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 12 }}>
                IJ régime obligatoire — {regime === "salarie" ? "CPAM Salarié" : regime === "tns" ? "SSI Artisan/Commerçant" : regime === "cipav" ? "CPAM pour CIPAV" : "SSI Micro-entrepreneur"}
              </div>

              {/* IJ principale */}
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 14 }}>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)" }}>IJ journalière brute</div>
                  <div style={{ fontSize: 40, fontWeight: 800, color: "#fff", letterSpacing: "-2px", lineHeight: 1 }}>
                    {eur(ijJour)}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginTop: 3 }}>par jour</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)", marginBottom: 2 }}>Par mois (30j)</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{eurRound(ijJour * 30)}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.4)", marginTop: 3 }}>Taux remplacement : {tauxRemplacement}%</div>
                </div>
              </div>

              {/* CIPAV — affichage spécial */}
              {regime === "cipav" && (
                <div style={{ background: "rgba(212,43,90,.2)", borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
                  <div style={{ color: "var(--madel-rose-mid)", fontSize: 11, fontWeight: 700, marginBottom: 4 }}>
                    ⚠ Couverture CIPAV
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}>
                    <span style={{ color: "rgba(255,255,255,.7)" }}>J4 → J90 (CPAM)</span>
                    <span style={{ color: "#fff", fontWeight: 700 }}>25,40 € à 190,55 €/j</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginTop: 4 }}>
                    <span style={{ color: "rgba(255,255,255,.7)" }}>Après J90</span>
                    <span style={{ color: "var(--madel-rose-mid)", fontWeight: 800 }}>0,00 € — RIEN</span>
                  </div>
                </div>
              )}

              {/* Infos calcul */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 12 }}>
                {regime === "salarie" && (
                  <>
                    <InfoLigne label="Salaire journalier de base (SJB)" valeur={`${eur((calc as ReturnType<typeof calculerIJSalarie>).sjb)}`} />
                    <InfoLigne label="IJ = 50% du SJB" valeur={`50% × ${eur((calc as ReturnType<typeof calculerIJSalarie>).sjb)} = ${eur(ijJour)}`} />
                    <InfoLigne label="Plafond max 2026 (1,4 SMIC)" valeur={`${eur(REFERENTIELS.IJ_MAX_SALARIE)}/j`} />
                    <InfoLigne label="Carence" valeur="3 jours calendaires" />
                  </>
                )}
                {regime === "tns" && (
                  <>
                    <InfoLigne label="Formule" valeur={`RAAM ÷ 730 = ${revenuTNS.toLocaleString("fr-FR")} ÷ 730`} />
                    <InfoLigne label="IJ calculée" valeur={`${eur(revenuTNS / 730)}/j`} />
                    <InfoLigne label="Plafond max 2026 (PASS/730)" valeur={`${eur(REFERENTIELS.IJ_MAX_TNS)}/j`} />
                    <InfoLigne label="Minimum garanti" valeur={`${eur(REFERENTIELS.IJ_MIN_TNS)}/j`} />
                  </>
                )}
                {regime === "micro" && (
                  <>
                    <InfoLigne label="Abattement appliqué" valeur={typeActivite === "vente" ? "71%" : typeActivite === "service" ? "50%" : "34%"} />
                    <InfoLigne label="Revenu après abattement" valeur={`${((1 - (typeActivite === "vente" ? 0.71 : typeActivite === "service" ? 0.50 : 0.34)) * caMicro).toLocaleString("fr-FR")} €/an`} />
                    <InfoLigne label="IJ = Revenu ÷ 730" valeur={eur(ijJour)} />
                    <InfoLigne label="Minimum garanti" valeur={`${eur(REFERENTIELS.IJ_MIN_MICROENTREPRENEUR)}/j`} />
                  </>
                )}
              </div>
            </div>

            {/* Tableau comparatif rapide */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", fontSize: 12, fontWeight: 700 }}>
                📊 Synthèse — 30j / 90j / 180j
              </div>
              <div style={{ padding: 14 }}>
                {[
                  { label: "30 jours d'arrêt", proj: projection30, couleur: "#2E7D32" },
                  { label: "90 jours d'arrêt", proj: projection90, couleur: "#7B4F00" },
                  { label: "180 jours d'arrêt", proj: projection180, couleur: "#A8204A" },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: 10, padding: "10px 12px", borderRadius: 9, background: "var(--madel-bg)", border: "1px solid var(--madel-border)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "var(--madel-navy)" }}>{item.label}</span>
                      <span style={{ fontSize: 11, fontWeight: 800, color: item.couleur }}>
                        Manque : {eurRound(item.proj.manqueAGagner)}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 0, height: 8, borderRadius: 4, overflow: "hidden", background: "#e0e0e0" }}>
                      {item.proj.secu > 0 && <div style={{ flex: item.proj.secu, background: "#4A8FD4" }} />}
                      {item.proj.employeur > 0 && <div style={{ flex: item.proj.employeur, background: "#2E7D32" }} />}
                      {item.proj.manqueAGagner > 0 && <div style={{ flex: item.proj.manqueAGagner, background: "#FCEBEB" }} />}
                    </div>
                    <div style={{ display: "flex", gap: 12, marginTop: 4, fontSize: 9, color: "var(--madel-muted)" }}>
                      <span style={{ color: "#4A8FD4" }}>■ Sécu : {eurRound(item.proj.secu)}</span>
                      {regime === "salarie" && <span style={{ color: "#2E7D32" }}>■ Employeur : {eurRound(item.proj.employeur)}</span>}
                      <span style={{ color: "#A8204A" }}>■ Manque : {eurRound(item.proj.manqueAGagner)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── ONGLET PROJECTION ────────────────────────────────── */}
      {onglet === "projection" && (() => {
        // Paramètres pour la projection
        const revenuMensuel = salairePourProjection;
        const revenuJournalier = revenuMensuel / 30.42;

        // Génère le tableau mois par mois sur 36 mois (3 ans)
        const MOIS_MAX = 36;
        const lignes: {
          mois: number; jours: number; joursCumulatifs: number;
          secu: number; employeur: number; prevoyance: number;
          total: number; revenu: number; manque: number; tauxCouverture: number;
          secuActif: boolean; employeurActif: boolean; prevoyanceActive: boolean;
        }[] = [];

        let joursCumul = 0;
        for (let m = 1; m <= MOIS_MAX; m++) {
          const j30 = 30;
          const debutMois = joursCumul;
          joursCumul += j30;

          let secu = 0;
          let employeur = 0;
          let prev = 0;

          for (let j = debutMois + 1; j <= joursCumul; j++) {
            // IJ Sécu
            const carence = 3;
            const maxSecu = regime === "cipav" ? 90 : 360;
            const ijSecuJour = (j > carence && j <= maxSecu) ? ijJour : 0;
            secu += ijSecuJour;

            // Maintien employeur (salarié uniquement)
            if (regime === "salarie" && anciennete >= 1) {
              const conv = CONVENTIONS[convention];
              const debutMaintien = conv.carence + 1;
              const finP1 = conv.carence + conv.duree1;
              const finP2 = conv.carence + conv.duree1 + conv.duree2;
              let cible = 0;
              if (j >= debutMaintien && j <= finP1) cible = revenuJournalier * (conv.maintienPct1 / 100);
              else if (j > finP1 && j <= finP2)      cible = revenuJournalier * (conv.maintienPct2 / 100);
              employeur += Math.max(0, cible - ijSecuJour);
            }

            // Prévoyance
            if (j > franchise) prev += ijSouhaitee;
          }

          const total = secu + employeur + prev;
          const revenuPeriode = revenuJournalier * j30;
          const manque = Math.max(0, revenuPeriode - total);
          const taux = revenuPeriode > 0 ? Math.round((total / revenuPeriode) * 100) : 0;

          lignes.push({
            mois: m, jours: j30, joursCumulatifs: joursCumul,
            secu: Math.round(secu), employeur: Math.round(employeur), prevoyance: Math.round(prev),
            total: Math.round(total), revenu: Math.round(revenuPeriode),
            manque: Math.round(manque), tauxCouverture: taux,
            secuActif: joursCumul - j30 < 360 && (regime !== "cipav" || joursCumul - j30 < 90),
            employeurActif: regime === "salarie" && anciennete >= 1 && (joursCumul - j30) < (CONVENTIONS[convention].carence + CONVENTIONS[convention].duree1 + CONVENTIONS[convention].duree2),
            prevoyanceActive: joursCumul > franchise,
          });
        }

        // Cumulatifs
        const cumul36 = lignes.reduce((a, l) => ({
          secu: a.secu + l.secu, employeur: a.employeur + l.employeur,
          prevoyance: a.prevoyance + l.prevoyance, total: a.total + l.total,
          revenu: a.revenu + l.revenu, manque: a.manque + l.manque,
        }), { secu: 0, employeur: 0, prevoyance: 0, total: 0, revenu: 0, manque: 0 });

        return (
          <div>
            {/* Paramètres */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 14 }}>
              {regime === "salarie" && (
                <div>
                  <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 4 }}>Convention collective</label>
                  <select value={convention} onChange={e => setConvention(e.target.value as ConventionCollective)} style={selectStyle}>
                    {Object.entries(CONVENTIONS).map(([k, v]) => (
                      <option key={k} value={k}>{v.label}</option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 4 }}>IJ prévoyance (€/j)</label>
                <input type="number" value={ijSouhaitee} min={0} max={500} step={10}
                  onChange={e => setIjSouhaitee(+e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 4 }}>Franchise prévoyance</label>
                <select value={franchise} onChange={e => setFranchise(+e.target.value as FranchisePrevoyance)} style={selectStyle}>
                  <option value={30}>30 jours</option>
                  <option value={60}>60 jours</option>
                  <option value={90}>90 jours</option>
                  <option value={180}>180 jours</option>
                </select>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <div style={{ padding: "8px 12px", borderRadius: 8, background: "var(--madel-navy)", color: "var(--madel-rose-mid)", fontSize: 10, lineHeight: 1.5 }}>
                  Revenu de référence<br />
                  <strong style={{ color: "#fff", fontSize: 13 }}>{eurRound(revenuMensuel)}/mois</strong>
                </div>
              </div>
            </div>

            {/* Tableau mensuel */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                  <thead>
                    <tr style={{ background: "var(--madel-navy)", color: "#fff" }}>
                      <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, whiteSpace: "nowrap" }}>Mois</th>
                      <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, color: "#93C5FD", whiteSpace: "nowrap" }}>IJ Sécu</th>
                      {regime === "salarie" && <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, color: "#86EFAC", whiteSpace: "nowrap" }}>Employeur</th>}
                      <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, color: "#FCA5A5", whiteSpace: "nowrap" }}>Prévoyance</th>
                      <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, whiteSpace: "nowrap" }}>Total perçu</th>
                      <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, color: "var(--madel-rose-mid)", whiteSpace: "nowrap" }}>Manque</th>
                      <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700, whiteSpace: "nowrap" }}>Taux</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lignes.map((l, i) => {
                      const estCritique = l.tauxCouverture < 50;
                      const estAttention = l.tauxCouverture >= 50 && l.tauxCouverture < 80;
                      const bg = i % 2 === 0 ? "#fff" : "var(--madel-bg)";
                      const bgRow = estCritique ? "#FEF5F8" : estAttention ? "#FEF8EE" : bg;
                      return (
                        <tr key={l.mois} style={{ background: bgRow }}>
                          <td style={{ padding: "8px 12px", fontWeight: 600, color: "var(--madel-navy)", borderBottom: "1px solid var(--madel-border)", whiteSpace: "nowrap" }}>
                            M{l.mois}
                            <span style={{ fontSize: 9, color: "var(--madel-muted)", marginLeft: 6 }}>J{l.joursCumulatifs - 29}→{l.joursCumulatifs}</span>
                          </td>
                          <td style={{ padding: "8px 12px", textAlign: "right", color: l.secuActif ? "#1D4ED8" : "var(--madel-muted)", fontFamily: "monospace", borderBottom: "1px solid var(--madel-border)" }}>
                            {l.secu > 0 ? eurRound(l.secu) : <span style={{ color: "var(--madel-rose)", fontWeight: 700 }}>0 €</span>}
                          </td>
                          {regime === "salarie" && (
                            <td style={{ padding: "8px 12px", textAlign: "right", color: l.employeurActif ? "#166534" : "var(--madel-muted)", fontFamily: "monospace", borderBottom: "1px solid var(--madel-border)" }}>
                              {l.employeur > 0 ? eurRound(l.employeur) : "—"}
                            </td>
                          )}
                          <td style={{ padding: "8px 12px", textAlign: "right", color: l.prevoyanceActive ? "#9A3412" : "var(--madel-muted)", fontFamily: "monospace", borderBottom: "1px solid var(--madel-border)" }}>
                            {l.prevoyance > 0 ? eurRound(l.prevoyance) : l.joursCumulatifs > franchise ? eurRound(ijSouhaitee * 30) : "—"}
                          </td>
                          <td style={{ padding: "8px 12px", textAlign: "right", fontWeight: 700, fontFamily: "monospace", color: "var(--madel-navy)", borderBottom: "1px solid var(--madel-border)" }}>
                            {eurRound(l.total)}
                          </td>
                          <td style={{ padding: "8px 12px", textAlign: "right", fontWeight: 700, fontFamily: "monospace", color: estCritique ? "var(--madel-rose)" : estAttention ? "#7B4F00" : "var(--madel-success)", borderBottom: "1px solid var(--madel-border)" }}>
                            {l.manque > 0 ? `-${eurRound(l.manque)}` : "—"}
                          </td>
                          <td style={{ padding: "8px 12px", textAlign: "center", borderBottom: "1px solid var(--madel-border)" }}>
                            <span style={{
                              display: "inline-block", padding: "2px 8px", borderRadius: 20,
                              fontSize: 10, fontWeight: 700,
                              background: estCritique ? "#FCEBEB" : estAttention ? "#FAEEDA" : "#EAF3DE",
                              color: estCritique ? "var(--madel-rose)" : estAttention ? "#7B4F00" : "var(--madel-success)",
                            }}>
                              {l.tauxCouverture}%
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                    {/* Ligne totale */}
                    <tr style={{ background: "var(--madel-navy)" }}>
                      <td style={{ padding: "10px 12px", fontWeight: 800, color: "#fff" }}>TOTAL 3 ans</td>
                      <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "monospace", fontWeight: 700, color: "#93C5FD" }}>{eurRound(cumul36.secu)}</td>
                      {regime === "salarie" && <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "monospace", fontWeight: 700, color: "#86EFAC" }}>{eurRound(cumul36.employeur)}</td>}
                      <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "monospace", fontWeight: 700, color: "#FCA5A5" }}>{eurRound(cumul36.prevoyance)}</td>
                      <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "monospace", fontWeight: 800, color: "#fff" }}>{eurRound(cumul36.total)}</td>
                      <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "monospace", fontWeight: 800, color: "var(--madel-rose-mid)" }}>-{eurRound(cumul36.manque)}</td>
                      <td style={{ padding: "10px 12px", textAlign: "center" }}>
                        <span style={{ color: "#fff", fontWeight: 700, fontSize: 11 }}>
                          {Math.round((cumul36.total / cumul36.revenu) * 100)}%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Légende */}
              <div style={{ padding: "10px 14px", background: "var(--madel-bg)", borderTop: "1px solid var(--madel-border)", display: "flex", gap: 16, fontSize: 10, color: "var(--madel-muted)", flexWrap: "wrap" }}>
                <span style={{ color: "#1D4ED8" }}>■ IJ Sécu (max 360j, 90j CIPAV)</span>
                {regime === "salarie" && <span style={{ color: "#166534" }}>■ Maintien employeur</span>}
                <span style={{ color: "#9A3412" }}>■ Prévoyance (après franchise {franchise}j)</span>
                <span style={{ color: "var(--madel-rose)" }}>■ Taux &lt; 50% = critique</span>
                <span style={{ color: "#7B4F00" }}>■ Taux 50–80% = attention</span>
              </div>
            </div>

            {/* Alerte CIPAV */}
            {regime === "cipav" && (
              <div style={{ marginTop: 10, padding: "12px 16px", borderRadius: 10, background: "#FCEBEB", border: "2px solid var(--madel-rose)", fontSize: 11, color: "var(--madel-rose-dark)", lineHeight: 1.6 }}>
                🚨 <strong>CIPAV : après le mois 3, l'IJ Sécu tombe à 0.</strong> Sans prévoyance complémentaire, le manque à gagner devient total sur les 33 mois restants.
              </div>
            )}
          </div>
        );
      })()}

      {/* ── ONGLET PRÉVOYANCE ────────────────────────────────── */}
      {onglet === "prevoyance" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Card titre="Paramètres prévoyance" icone="🛡️" couleur="rose">
              <Champ label="IJ complémentaire souhaitée (€/jour)">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <input type="range" min={10} max={500} step={10} value={ijSouhaitee}
                    onChange={e => setIjSouhaitee(+e.target.value)}
                    style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                  <span style={{ fontWeight: 800, fontSize: 16, minWidth: 60, textAlign: "right" }}>{ijSouhaitee} €/j</span>
                </div>
              </Champ>
              <Champ label="Franchise (jours de carence)">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
                  {([30, 60, 90, 180] as FranchisePrevoyance[]).map(f => (
                    <button key={f} onClick={() => setFranchise(f)} style={{
                      padding: "8px 4px", borderRadius: 8, border: "2px solid",
                      borderColor: franchise === f ? "var(--madel-rose)" : "var(--madel-border)",
                      background: franchise === f ? "var(--madel-rose-light)" : "#fff",
                      cursor: "pointer", fontFamily: "var(--madel-font)",
                      fontSize: 12, fontWeight: franchise === f ? 700 : 400,
                      color: franchise === f ? "var(--madel-rose-dark)" : "var(--madel-navy)",
                    }}>
                      {f}j
                    </button>
                  ))}
                </div>
                <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 4 }}>
                  Plus la franchise est longue, moins la prime est élevée. 90j est le standard recommandé.
                </div>
              </Champ>
            </Card>

            {/* Note pédagogique loi Madelin */}
            {(regime === "tns" || regime === "cipav" || regime === "micro") && (
              <div style={{ padding: "12px 16px", borderRadius: 12, background: "var(--madel-success-bg)", border: "1px solid #A5D6A7", fontSize: 11, color: "var(--madel-success)", lineHeight: 1.6 }}>
                💡 <strong>Loi Madelin :</strong> En tant que TNS, les cotisations de prévoyance sont déductibles du bénéfice imposable dans la limite de :
                3,75% du bénéfice imposable + 7% du PASS, le tout plafonné à 3% de 8 PASS (soit max 11 534 €/an en 2026).
              </div>
            )}
          </div>

          <div>
            {/* Prime calculée */}
            <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 22px", marginBottom: 14 }}>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 14 }}>Prime prévoyance estimée</div>
              {[
                { label: "IJ complémentaire", valeur: `${ijSouhaitee} €/jour` },
                { label: "Franchise choisie", valeur: `${franchise} jours` },
                { label: "Régime", valeur: REGIMES.find(r => r.k === regime)?.label ?? "" },
                { label: "Âge", valeur: `${age} ans` },
                { label: "Prime HT estimée", valeur: eur(tarifPrevoyance) },
                { label: "TCA 9%", valeur: `+ ${eur(tarifTTC - tarifPrevoyance)}` },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,.6)" }}>{item.label}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#fff", fontFamily: "monospace" }}>{item.valeur}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,.2)" }}>
                <div>
                  <div style={{ fontSize: 10, color: "var(--madel-rose-mid)" }}>Prime annuelle TTC estimée</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>{eur(tarifTTC)}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.5)" }}>Mensuel</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.8)" }}>{eur(tarifTTC / 12)}</div>
                </div>
              </div>
            </div>

            {/* Comparaison franchises */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
              <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)", fontSize: 12, fontWeight: 700 }}>
                📚 Comparaison franchises — IJ {ijSouhaitee} €/j
              </div>
              <div style={{ padding: 14 }}>
                {([30, 60, 90, 180] as FranchisePrevoyance[]).map(f => {
                  const tarif = calculerTarifPrevoyance(regime, ijSouhaitee, f, age) * 1.09;
                  return (
                    <div key={f} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "8px 10px", marginBottom: 4, borderRadius: 8,
                      background: franchise === f ? "var(--madel-rose-light)" : "var(--madel-bg)",
                      border: `1px solid ${franchise === f ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
                    }}>
                      <div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--madel-navy)" }}>Franchise {f} jours</span>
                        <span style={{ fontSize: 10, color: "var(--madel-muted)", marginLeft: 8 }}>
                          {f === 30 ? "Coûteuse mais protectrice" : f === 60 ? "Bon équilibre" : f === 90 ? "Standard recommandé" : "Économique — long terme"}
                        </span>
                      </div>
                      <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: 12, color: franchise === f ? "var(--madel-rose)" : "var(--madel-navy)" }}>
                        {eur(Math.round(tarif * 100) / 100)}/an
                      </span>
                    </div>
                  );
                })}
                <div style={{ marginTop: 8, fontSize: 10, color: "var(--madel-muted)" }}>
                  💡 Pédagogique : plus la franchise est courte, plus la prime est élevée. L'arbitrage franchise/prime est un cas pratique clé du BTS Assurance.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Référentiels officiels */}
      <div style={{ marginTop: 14, padding: "10px 14px", borderRadius: 10, background: "var(--madel-bg)", border: "1px solid var(--madel-border)", fontSize: 10, color: "var(--madel-muted)", display: "flex", gap: 24, flexWrap: "wrap" }}>
        <span>📋 <strong>Sources officielles 2026</strong></span>
        <span>SMIC : 1 823,03 €/mois (Ministère du Travail)</span>
        <span>PASS : 48 060 €/an (Arrêté JORF 22/12/2025)</span>
        <span>IJ max salarié : 41,95 €/j (Décret 2025-160)</span>
        <span>IJ max TNS : 65,84 €/j (PASS/730)</span>
      </div>

      {/* ── Souscription depuis fiche assuré ── */}
      <BoutonSouscription
        isFromFiche={isFromFiche}
        client={client}
        mode={mode}
        primeAnnuelle={tarifTTC}
        onSouscrire={() => souscrire(tarifTTC)}
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
      <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 6 }}>{label}</label>
      {children}
    </div>
  );
}
function InfoLigne({ label, valeur }: { label: string; valeur: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 10 }}>
      <span style={{ color: "rgba(255,255,255,.55)" }}>{label}</span>
      <span style={{ color: "rgba(255,255,255,.85)", fontFamily: "monospace" }}>{valeur}</span>
    </div>
  );
}

const inputStyle: React.CSSProperties = { width: "100%", padding: "8px 10px", borderRadius: 8, border: "1.5px solid var(--madel-border)", fontSize: 12, fontFamily: "var(--madel-font)", color: "var(--madel-navy)", background: "#fff", outline: "none", boxSizing: "border-box" };
const selectStyle: React.CSSProperties = { ...inputStyle, appearance: "none", cursor: "pointer", paddingRight: 26, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238A86A0'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 9px center" };
