// ============================================================
// SIMULATEUR SANTÉ INDIVIDUELLE
// Kleios Madel Assurance · BTS Assurance
// Basé sur la structure Mutuelle Ociane Matmut "Santé vous bien !"
// Garanties 2025 — Structure modulaire TÊTE + CORPS
// ============================================================
import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────
type NiveauTete  = 1 | 2 | 3;
type NiveauCorps = 1 | 2 | 3;
type Situation   = "seul" | "couple" | "famille";
type Regime      = "salarie" | "tns" | "retraite" | "etudiant";

// ── Tarification indicative mensuelle (base adulte 30-39 ans) ─
const TARIF_TETE: Record<NiveauTete, number>  = { 1: 14, 2: 26, 3: 42 };
const TARIF_CORPS: Record<NiveauCorps, number> = { 1: 19, 2: 31, 3: 48 };

const COEFF_AGE = (age: number) => {
  if (age < 25)  return 0.75;
  if (age < 35)  return 1.00;
  if (age < 45)  return 1.15;
  if (age < 55)  return 1.30;
  if (age < 65)  return 1.55;
  return 1.85;
};

const COEFF_SITUATION: Record<Situation, number> = {
  seul:    1.00,
  couple:  1.85,
  famille: 2.20,
};

// ── Garanties TÊTE ────────────────────────────────────────────
const GARANTIES_TETE: Record<string, { label: string; t1: string; t2: string; t3: string; highlight?: boolean }> = {
  optique_100pct:    { label: "Optique 100% Santé (Classe A)", t1: "Intégral", t2: "Intégral", t3: "Intégral", highlight: true },
  optique_simple:    { label: "Optique Classe B — verres simples (16-54 ans)", t1: "0,15 €", t2: "125 €", t3: "200 €" },
  optique_complexe:  { label: "Optique Classe B — verres complexes (16-54 ans)", t1: "0,15 €", t2: "200 €", t3: "375 €" },
  optique_senior:    { label: "Optique Classe B — verres simples (55 ans+)", t1: "0,15 €", t2: "225 €", t3: "300 €" },
  lentilles:         { label: "Lentilles — forfait annuel", t1: "100% BR", t2: "100% BR + 75 €", t3: "100% BR + 100 €" },
  chirurgie_optique: { label: "Chirurgie réfractive (par œil)", t1: "—", t2: "100 €", t3: "200 €" },
  dentaire_soins:    { label: "Soins dentaires SS (caries, détartrage...)", t1: "100% BR", t2: "125% BR", t3: "150% BR" },
  dentaire_100pct:   { label: "Prothèses 100% Santé", t1: "Intégral", t2: "Intégral", t3: "Intégral", highlight: true },
  couronne_hm:       { label: "Couronne hors molaire (par dent)", t1: "120 €", t2: "240 €", t3: "360 €" },
  couronne_mol:      { label: "Couronne sur molaire (par dent)", t1: "120 €", t2: "190 €", t3: "310 €" },
  inlay_core:        { label: "Inlay-core (par dent)", t1: "90 €", t2: "140 €", t3: "180 €" },
  prothese_autre:    { label: "Autres prothèses (bridge, prothèse mobile...)", t1: "100% BR", t2: "150% BR", t3: "200% BR" },
  ortho_ss:          { label: "Orthodontie SS — forfait/semestre", t1: "193,50 €", t2: "300 €", t3: "450 €" },
  implant_hors_ss:   { label: "Implant/prothèse hors SS — forfait annuel", t1: "200 €", t2: "300 €", t3: "400 €" },
  audio_100pct:      { label: "Aides auditives 100% Santé (Classe I)", t1: "Intégral", t2: "Intégral", t3: "Intégral", highlight: true },
  audio_cl2_adulte:  { label: "Aide auditive Classe II — 20-54 ans (par oreille)", t1: "400 €", t2: "450 €", t3: "500 €" },
  audio_cl2_senior:  { label: "Aide auditive Classe II — 55 ans+ (par oreille)", t1: "500 €", t2: "550 €", t3: "600 €" },
};

// ── Garanties CORPS ───────────────────────────────────────────
const GARANTIES_CORPS: Record<string, { label: string; c1: string; c2: string; c3: string; highlight?: boolean }> = {
  hospi_honoraires:  { label: "Hospitalisation — honoraires", c1: "100% BR", c2: "125% BR", c3: "150% BR" },
  hospi_fjh:         { label: "Forfait journalier hospitalier (20 €/j)", c1: "Frais réels", c2: "Frais réels", c3: "Frais réels", highlight: true },
  hospi_sejour:      { label: "Frais de séjour", c1: "100% BR", c2: "100% BR", c3: "100% BR" },
  hospi_urgences:    { label: "Forfait patient urgences", c1: "Frais réels", c2: "Frais réels", c3: "Frais réels" },
  pharmacie:         { label: "Médicaments SMR important", c1: "100% BR", c2: "100% BR", c3: "100% BR" },
  vaccins:           { label: "Vaccins non remboursés SS — forfait/an", c1: "20 €", c2: "30 €", c3: "40 €" },
  medecin_gene:      { label: "Honoraires généraliste/spécialiste", c1: "100% BR", c2: "125% BR", c3: "150% BR" },
  paramedical:       { label: "Honoraires paramédicaux (infirmiers, kiné...)", c1: "100% BR", c2: "100% BR", c3: "125% BR" },
  analyses:          { label: "Analyses, biologie, radiologie", c1: "100% BR", c2: "100% BR", c3: "125% BR" },
  protheses_ext:     { label: "Prothèses externes SS (capillaires, mamm...)", c1: "100% BR + 50 €", c2: "100% BR + 75 €", c3: "100% BR + 100 €" },
  psy:               { label: "Séances psychologue (Mon soutien psy)", c1: "100% BR", c2: "100% BR", c3: "100% BR" },
  psy_non_ss:        { label: "Soutien psychologique hors SS — 3 séances/an", c1: "50 € × 3", c2: "50 € × 3", c3: "50 € × 3" },
  teleconsult:       { label: "Téléconsultation 24h/24 7j/7 (Medaviz)", c1: "Inclus", c2: "Inclus", c3: "Inclus", highlight: true },
  deuxieme_avis:     { label: "Deuxième avis médical en ligne", c1: "Inclus", c2: "Inclus", c3: "Inclus" },
  livraison_medoc:   { label: "Livraison médicaments à domicile", c1: "Inclus", c2: "Inclus", c3: "Inclus" },
  sport_ordo:        { label: "Sport sur ordonnance (ALD) — forfait/an", c1: "100 €", c2: "200 €", c3: "300 €" },
};

// ── Cas pratiques ─────────────────────────────────────────────
interface CasPratique {
  titre: string; icone: string;
  coutReel: number; baseRemboSS: number; tauxSS: number;
  remboT: Record<NiveauTete, number>;
  remboC: Record<NiveauCorps, number>;
  note?: string;
}

const CAS_PRATIQUES_TETE: CasPratique[] = [
  {
    titre: "Consultation spécialiste (secteur 2, dépassement)",
    icone: "👨‍⚕️",
    coutReel: 65, baseRemboSS: 28, tauxSS: 0.70,
    remboT: { 1: 0, 2: 0, 3: 0 },
    remboC: { 1: 28, 2: 35, 3: 42 },
    note: "BR = 28 €, SS rembourse 70% = 19,60 €. La complémentaire complète jusqu'à 100/125/150% BR.",
  },
  {
    titre: "Paire de lunettes — verres complexes 16-54 ans (hors 100% Santé)",
    icone: "👓",
    coutReel: 380, baseRemboSS: 14, tauxSS: 0.60,
    remboT: { 1: 1, 2: 200, 3: 375 },
    remboC: { 1: 0, 2: 0, 3: 0 },
    note: "Monture + 2 verres. La SS rembourse ~8,40 € (60% de 14 €). Tête 1 = quasi rien.",
  },
  {
    titre: "Couronne dentaire hors molaire (tarifs maîtrisés)",
    icone: "🦷",
    coutReel: 350, baseRemboSS: 107, tauxSS: 0.70,
    remboT: { 1: 120, 2: 240, 3: 360 },
    remboC: { 1: 0, 2: 0, 3: 0 },
    note: "SS rembourse 70% du BR = 74,90 €. Le forfait mutuelle vient compléter.",
  },
  {
    titre: "Hospitalisation 5 jours (forfait journalier + dépassements)",
    icone: "🏥",
    coutReel: 600, baseRemboSS: 500, tauxSS: 0.80,
    remboT: { 1: 0, 2: 0, 3: 0 },
    remboC: { 1: 500, 2: 625, 3: 750 },
    note: "FJH 20 €/j = 100 €. SS couvre 80% des frais de séjour. La mutuelle couvre le reste.",
  },
  {
    titre: "Aide auditive Classe II — adulte (par oreille)",
    icone: "👂",
    coutReel: 1200, baseRemboSS: 1000, tauxSS: 0.60,
    remboT: { 1: 400, 2: 450, 3: 500 },
    remboC: { 1: 0, 2: 0, 3: 0 },
    note: "Pour la Classe I (100% Santé) : reste à charge = 0 € sur tous les niveaux.",
  },
];

const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const eurDec = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });

// ── Composant ─────────────────────────────────────────────────
export default function SimulateurSante() {
  const [niveauTete, setNiveauTete]   = useState<NiveauTete>(2);
  const [niveauCorps, setNiveauCorps] = useState<NiveauCorps>(2);
  const [situation, setSituation]     = useState<Situation>("seul");
  const [regime, setRegime]           = useState<Regime>("salarie");
  const [age, setAge]                 = useState(35);
  const [onglet, setOnglet]           = useState<"profil" | "tete" | "corps" | "cas">("profil");

  // ── Calcul prime ─────────────────────────────────────────────
  const cAge  = COEFF_AGE(age);
  const cSit  = COEFF_SITUATION[situation];
  const primeTete  = Math.round(TARIF_TETE[niveauTete]  * cAge * cSit * 100) / 100;
  const primeCorps = Math.round(TARIF_CORPS[niveauCorps] * cAge * cSit * 100) / 100;
  const primeHT    = Math.round((primeTete + primeCorps) * 100) / 100;
  const tca        = Math.round(primeHT * 0.1327 * 100) / 100;
  const primeTTC   = Math.round((primeHT + tca) * 100) / 100;
  const primeAnnee = Math.round(primeTTC * 12 * 100) / 100;

  // Pack âge automatique
  const packAge = age <= 16 ? "enfant" : age <= 54 ? "adulte" : "senior";

  const PACK_LABELS = {
    enfant: { label: "Pack enfant (jusqu'à 16 ans)", items: ["Ergothérapeutes, psychomotriciens — 70 €/an", "Dépistage troubles apprentissage — 70 €/an", "Lunettes anti-lumière bleue — 30 €/an"] },
    adulte: { label: "Pack adulte (17-54 ans)", items: ["Sevrage tabagique — 90 €/an", "Contraception (pilule, patch...) — 30 €/an", "Tests de grossesse et ovulation — 30 €/an"] },
    senior: { label: "Pack senior (55 ans et plus)", items: ["Ostéodensitométrie hors SS — 45 €/an", "Pédicures et podologues — 30 €/an", "Participation licence sportive — 20 €/an"] },
  };

  const tV = (t: NiveauTete, valeurs: { t1: string; t2: string; t3: string }) =>
    t === 1 ? valeurs.t1 : t === 2 ? valeurs.t2 : valeurs.t3;
  const cV = (c: NiveauCorps, valeurs: { c1: string; c2: string; c3: string }) =>
    c === 1 ? valeurs.c1 : c === 2 ? valeurs.c2 : valeurs.c3;

  const COULEURS_NIVEAU = ["", "#4A8FD4", "#E8722A", "#D42B5A"] as const;

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      {/* Titre */}
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🏥 Simulateur Santé Individuelle</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Structure modulaire TÊTE + CORPS · Garanties 2025 · TCA 13,27% · 100% Santé intégré
        </p>
      </div>

      {/* Onglets */}
      <div style={{ display: "flex", gap: 0, marginBottom: 16, background: "var(--madel-bg)", borderRadius: 10, padding: 4, border: "1px solid var(--madel-border)" }}>
        {[
          { k: "profil", label: "👤 Profil & Prime" },
          { k: "tete",   label: "💡 Garanties TÊTE (Optique / Dentaire / Audio)" },
          { k: "corps",  label: "🫀 Garanties CORPS (Hospi / Soins)" },
          { k: "cas",    label: "📋 Cas pratiques" },
        ].map(tab => (
          <button key={tab.k} onClick={() => setOnglet(tab.k as typeof onglet)} style={{
            flex: 1, padding: "9px 10px", borderRadius: 8, border: "none",
            background: onglet === tab.k ? "#fff" : "transparent",
            boxShadow: onglet === tab.k ? "0 1px 4px rgba(26,43,95,.1)" : "none",
            cursor: "pointer", fontFamily: "var(--madel-font)",
            fontSize: 11, fontWeight: onglet === tab.k ? 700 : 400,
            color: onglet === tab.k ? "var(--madel-navy)" : "var(--madel-muted)",
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── PROFIL ────────────────────────────────────────────── */}
      {onglet === "profil" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Niveau TÊTE */}
            <Card titre="Module TÊTE — Optique / Dentaire / Audiologie" icone="💡" couleur="rose">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {([1, 2, 3] as NiveauTete[]).map(n => (
                  <button key={n} onClick={() => setNiveauTete(n)} style={{
                    padding: "14px 10px", borderRadius: 10, border: "2px solid",
                    borderColor: niveauTete === n ? COULEURS_NIVEAU[n] : "var(--madel-border)",
                    background: niveauTete === n ? `${COULEURS_NIVEAU[n]}15` : "#fff",
                    cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "center",
                  }}>
                    <div style={{ fontWeight: 800, fontSize: 20, color: niveauTete === n ? COULEURS_NIVEAU[n] : "var(--madel-navy)" }}>TÊTE {n}</div>
                    <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 4 }}>
                      {n === 1 ? "100% Santé uniquement" : n === 2 ? "Équilibre" : "Premium"}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: niveauTete === n ? COULEURS_NIVEAU[n] : "var(--madel-navy)", marginTop: 4 }}>
                      ~{TARIF_TETE[n]} €/mois*
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Niveau CORPS */}
            <Card titre="Module CORPS — Hospitalisation / Soins courants" icone="🫀" couleur="blue">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {([1, 2, 3] as NiveauCorps[]).map(n => (
                  <button key={n} onClick={() => setNiveauCorps(n)} style={{
                    padding: "14px 10px", borderRadius: 10, border: "2px solid",
                    borderColor: niveauCorps === n ? COULEURS_NIVEAU[n] : "var(--madel-border)",
                    background: niveauCorps === n ? `${COULEURS_NIVEAU[n]}15` : "#fff",
                    cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "center",
                  }}>
                    <div style={{ fontWeight: 800, fontSize: 20, color: niveauCorps === n ? COULEURS_NIVEAU[n] : "var(--madel-navy)" }}>CORPS {n}</div>
                    <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 4 }}>
                      {n === 1 ? "Base" : n === 2 ? "Renforcé" : "Premium"}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: niveauCorps === n ? COULEURS_NIVEAU[n] : "var(--madel-navy)", marginTop: 4 }}>
                      ~{TARIF_CORPS[n]} €/mois*
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Profil */}
            <Card titre="Profil assuré" icone="👤" couleur="rose">
              <Champ label="Situation familiale">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
                  {([
                    { v: "seul",    label: "🧑 Seul" },
                    { v: "couple",  label: "👫 Couple" },
                    { v: "famille", label: "👨‍👩‍👧 Famille" },
                  ] as { v: Situation; label: string }[]).map(s => (
                    <button key={s.v} onClick={() => setSituation(s.v)} style={{
                      padding: "8px 6px", borderRadius: 8, border: "2px solid",
                      borderColor: situation === s.v ? "var(--madel-rose)" : "var(--madel-border)",
                      background: situation === s.v ? "var(--madel-rose-light)" : "#fff",
                      cursor: "pointer", fontFamily: "var(--madel-font)",
                      fontSize: 11, fontWeight: 600, color: situation === s.v ? "var(--madel-rose-dark)" : "var(--madel-navy)",
                    }}>
                      {s.label}
                    </button>
                  ))}
                </div>
              </Champ>
              <Champ label="Régime">
                <select value={regime} onChange={e => setRegime(e.target.value as Regime)} style={selectStyle}>
                  <option value="salarie">Salarié</option>
                  <option value="tns">TNS / Indépendant (Loi Madelin)</option>
                  <option value="retraite">Retraité</option>
                  <option value="etudiant">Étudiant</option>
                </select>
                {regime === "tns" && (
                  <div style={{ fontSize: 10, color: "var(--madel-success)", marginTop: 4 }}>
                    💡 Loi Madelin : cotisations déductibles du bénéfice imposable (plafond PASS 2026)
                  </div>
                )}
              </Champ>
              <Champ label={`Âge — ${age} ans`}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <input type="range" min={18} max={85} value={age}
                    onChange={e => setAge(+e.target.value)}
                    style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
                  <span style={{ fontWeight: 800, fontSize: 18, minWidth: 52, textAlign: "center" }}>{age} ans</span>
                </div>
              </Champ>
            </Card>
          </div>

          {/* Droite — prime + pack âge */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Prime */}
            <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 14 }}>
                Prime estimée — TÊTE {niveauTete} + CORPS {niveauCorps}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                {[
                  { l: `Module TÊTE ${niveauTete}`, v: `${primeTete} €/mois`, c: "#93C5FD" },
                  { l: `Module CORPS ${niveauCorps}`, v: `${primeCorps} €/mois`, c: "#86EFAC" },
                  { l: "Situation", v: COEFF_SITUATION[situation] === 1 ? "Seul (×1)" : situation === "couple" ? "Couple (×1.85)" : "Famille (×2.20)", c: "rgba(255,255,255,.7)" },
                  { l: "Coefficient âge", v: `${age} ans (×${cAge})`, c: "rgba(255,255,255,.7)" },
                  { l: "Prime HT", v: `${primeHT} €/mois`, c: "#fff" },
                  { l: "TCA 13,27%", v: `+ ${tca} €`, c: "rgba(255,255,255,.6)" },
                ].map(item => (
                  <div key={item.l} style={{ background: "rgba(255,255,255,.08)", borderRadius: 8, padding: "8px 10px" }}>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,.45)", marginBottom: 2 }}>{item.l}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: item.c, fontFamily: "monospace" }}>{item.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontSize: 10, color: "var(--madel-rose-mid)" }}>Prime mensuelle TTC estimée</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>{eurDec(primeTTC)}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.5)" }}>Annuelle</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,.8)" }}>{eur(primeAnnee)}</div>
                </div>
              </div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,.35)", marginTop: 8 }}>
                * Tarifs indicatifs basés sur des barèmes de marché. Devis personnalisé nécessaire.
              </div>
            </div>

            {/* 100% Santé */}
            <div style={{ background: "#EAF3DE", borderRadius: 12, padding: "14px 16px", border: "1px solid #A5D6A7" }}>
              <div style={{ fontWeight: 700, fontSize: 12, color: "#2E7D32", marginBottom: 8 }}>
                ✅ 100% Santé — Toujours intégral (tous niveaux)
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5, fontSize: 11, color: "#2E7D32" }}>
                <div>👓 Optique Classe A — monture + verres anti-reflets anti-rayures</div>
                <div>🦷 Prothèses dentaires 100% Santé (couronnes, bridges...)</div>
                <div>👂 Aides auditives Classe I — avec 30 jours d'essai et 4 ans de garantie</div>
              </div>
              <div style={{ fontSize: 10, color: "#2E7D32", marginTop: 8, fontStyle: "italic" }}>
                Reste à charge = 0 € pour les équipements 100% Santé, quel que soit le niveau souscrit.
              </div>
            </div>

            {/* Pack âge */}
            <div style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--madel-border)", padding: "14px 16px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, color: "var(--madel-navy)", marginBottom: 8 }}>
                🎁 {PACK_LABELS[packAge].label} — inclus automatiquement
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {PACK_LABELS[packAge].items.map((item, i) => (
                  <div key={i} style={{ fontSize: 11, color: "var(--madel-text)", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "var(--madel-rose)", flexShrink: 0 }}>→</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Services inclus */}
            <div style={{ background: "var(--madel-blue-light)", borderRadius: 12, border: "1px solid #B5D4F4", padding: "12px 16px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, color: "var(--madel-navy)", marginBottom: 6 }}>📱 Services inclus dans tous les niveaux</div>
              <div style={{ fontSize: 11, color: "var(--madel-info)", display: "flex", flexDirection: "column", gap: 4 }}>
                <div>📞 Téléconsultation 24h/24 7j/7 (Medaviz)</div>
                <div>🔬 Deuxième avis médical en ligne (en moins de 7 jours)</div>
                <div>🚚 Livraison de médicaments à domicile</div>
                <div>🤝 Assistance et ligne d'écoute (Allo Léa)</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── GARANTIES TÊTE ────────────────────────────────────── */}
      {onglet === "tete" && (
        <div>
          <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
            {([1, 2, 3] as NiveauTete[]).map(n => (
              <button key={n} onClick={() => setNiveauTete(n)} style={{
                padding: "8px 20px", borderRadius: 20, border: "2px solid",
                borderColor: niveauTete === n ? COULEURS_NIVEAU[n] : "var(--madel-border)",
                background: niveauTete === n ? COULEURS_NIVEAU[n] : "#fff",
                color: niveauTete === n ? "#fff" : "var(--madel-navy)",
                cursor: "pointer", fontFamily: "var(--madel-font)", fontWeight: 700, fontSize: 12,
              }}>
                TÊTE {n}
              </button>
            ))}
          </div>

          {[
            { section: "👓 OPTIQUE", keys: ["optique_100pct", "optique_simple", "optique_complexe", "optique_senior", "lentilles", "chirurgie_optique"] },
            { section: "🦷 DENTAIRE", keys: ["dentaire_soins", "dentaire_100pct", "couronne_hm", "couronne_mol", "inlay_core", "prothese_autre", "ortho_ss", "implant_hors_ss"] },
            { section: "👂 AIDES AUDITIVES", keys: ["audio_100pct", "audio_cl2_adulte", "audio_cl2_senior"] },
          ].map(group => (
            <div key={group.section} style={{ marginBottom: 14, background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
              <div style={{ padding: "10px 16px", background: "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)", fontSize: 12, fontWeight: 700 }}>
                {group.section}
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                <thead>
                  <tr style={{ background: "#F8F8FC" }}>
                    <th style={{ padding: "8px 14px", textAlign: "left", color: "var(--madel-muted)", fontWeight: 600 }}>Garantie</th>
                    {([1, 2, 3] as NiveauTete[]).map(n => (
                      <th key={n} style={{ padding: "8px 12px", textAlign: "center", color: niveauTete === n ? COULEURS_NIVEAU[n] : "var(--madel-muted)", fontWeight: niveauTete === n ? 800 : 600, minWidth: 100 }}>
                        TÊTE {n} {niveauTete === n ? "✓" : ""}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {group.keys.map((k, i) => {
                    const g = GARANTIES_TETE[k as keyof typeof GARANTIES_TETE];
                    return (
                      <tr key={k} style={{ background: g.highlight ? "#EAF3DE" : i % 2 === 0 ? "#fff" : "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)" }}>
                        <td style={{ padding: "9px 14px", color: "var(--madel-navy)", fontWeight: g.highlight ? 700 : 400 }}>
                          {g.highlight && <span style={{ color: "#2E7D32", marginRight: 5 }}>✅</span>}
                          {g.label}
                        </td>
                        {([1, 2, 3] as NiveauTete[]).map(n => {
                          const val = tV(n, g as { t1: string; t2: string; t3: string });
                          return (
                            <td key={n} style={{
                              padding: "9px 12px", textAlign: "center", fontFamily: "monospace",
                              fontWeight: niveauTete === n ? 700 : 400,
                              color: val === "Intégral" ? "#2E7D32" : val === "—" ? "var(--madel-muted)" : niveauTete === n ? COULEURS_NIVEAU[n] : "var(--madel-navy)",
                              background: niveauTete === n ? `${COULEURS_NIVEAU[n]}08` : "transparent",
                            }}>
                              {val}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      {/* ── GARANTIES CORPS ───────────────────────────────────── */}
      {onglet === "corps" && (
        <div>
          <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
            {([1, 2, 3] as NiveauCorps[]).map(n => (
              <button key={n} onClick={() => setNiveauCorps(n)} style={{
                padding: "8px 20px", borderRadius: 20, border: "2px solid",
                borderColor: niveauCorps === n ? COULEURS_NIVEAU[n] : "var(--madel-border)",
                background: niveauCorps === n ? COULEURS_NIVEAU[n] : "#fff",
                color: niveauCorps === n ? "#fff" : "var(--madel-navy)",
                cursor: "pointer", fontFamily: "var(--madel-font)", fontWeight: 700, fontSize: 12,
              }}>
                CORPS {n}
              </button>
            ))}
          </div>

          {[
            { section: "🏥 HOSPITALISATION", keys: ["hospi_honoraires", "hospi_fjh", "hospi_sejour", "hospi_urgences"] },
            { section: "💊 PHARMACIE", keys: ["pharmacie", "vaccins"] },
            { section: "🩺 SOINS COURANTS", keys: ["medecin_gene", "paramedical", "analyses", "protheses_ext", "psy", "psy_non_ss"] },
            { section: "📱 SERVICES DIGITAUX", keys: ["teleconsult", "deuxieme_avis", "livraison_medoc"] },
            { section: "🏃 SPORT SUR ORDONNANCE (ALD)", keys: ["sport_ordo"] },
          ].map(group => (
            <div key={group.section} style={{ marginBottom: 14, background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
              <div style={{ padding: "10px 16px", background: "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)", fontSize: 12, fontWeight: 700 }}>
                {group.section}
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                <thead>
                  <tr style={{ background: "#F8F8FC" }}>
                    <th style={{ padding: "8px 14px", textAlign: "left", color: "var(--madel-muted)", fontWeight: 600 }}>Garantie</th>
                    {([1, 2, 3] as NiveauCorps[]).map(n => (
                      <th key={n} style={{ padding: "8px 12px", textAlign: "center", color: niveauCorps === n ? COULEURS_NIVEAU[n] : "var(--madel-muted)", fontWeight: niveauCorps === n ? 800 : 600, minWidth: 100 }}>
                        CORPS {n} {niveauCorps === n ? "✓" : ""}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {group.keys.map((k, i) => {
                    const g = GARANTIES_CORPS[k as keyof typeof GARANTIES_CORPS];
                    return (
                      <tr key={k} style={{ background: g.highlight ? "#EAF3DE" : i % 2 === 0 ? "#fff" : "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)" }}>
                        <td style={{ padding: "9px 14px", color: "var(--madel-navy)", fontWeight: g.highlight ? 700 : 400 }}>
                          {g.highlight && <span style={{ color: "#2E7D32", marginRight: 5 }}>✅</span>}
                          {g.label}
                        </td>
                        {([1, 2, 3] as NiveauCorps[]).map(n => {
                          const val = cV(n, g as { c1: string; c2: string; c3: string });
                          return (
                            <td key={n} style={{
                              padding: "9px 12px", textAlign: "center", fontFamily: "monospace",
                              fontWeight: niveauCorps === n ? 700 : 400,
                              color: val === "Inclus" ? "#2E7D32" : val === "Frais réels" ? "#1D4ED8" : niveauCorps === n ? COULEURS_NIVEAU[n] : "var(--madel-navy)",
                              background: niveauCorps === n ? `${COULEURS_NIVEAU[n]}08` : "transparent",
                            }}>
                              {val}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      {/* ── CAS PRATIQUES ─────────────────────────────────────── */}
      {onglet === "cas" && (
        <div>
          <div style={{ marginBottom: 12, padding: "12px 16px", borderRadius: 10, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 12, color: "var(--madel-info)" }}>
            📚 Ces exemples montrent le fonctionnement du remboursement en 3 étages : Sécurité sociale → Mutuelle → Reste à charge assuré.
            Les montants sont calculés pour votre sélection actuelle : <strong>TÊTE {niveauTete} + CORPS {niveauCorps}</strong>.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {CAS_PRATIQUES_TETE.map((cas, i) => {
              const partSS    = Math.round(cas.baseRemboSS * cas.tauxSS * 100) / 100;
              const isTete    = cas.remboT[niveauTete] > 0;
              const partMutuelle = isTete ? cas.remboT[niveauTete] : cas.remboC[niveauCorps];
              const totalRembourse = Math.min(cas.coutReel, partSS + partMutuelle);
              const resteCharge = Math.max(0, cas.coutReel - totalRembourse);
              const pct = Math.round((totalRembourse / cas.coutReel) * 100);

              return (
                <div key={i} style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
                  <div style={{ padding: "12px 16px", background: "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 22 }}>{cas.icone}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: "var(--madel-navy)" }}>{cas.titre}</div>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1 }}>Coût réel : {eur(cas.coutReel)}</div>
                    </div>
                  </div>
                  <div style={{ padding: 14 }}>
                    {/* Barre visuelle */}
                    <div style={{ display: "flex", height: 14, borderRadius: 6, overflow: "hidden", marginBottom: 10 }}>
                      <div title="Sécurité sociale" style={{ flex: partSS, background: "#4A8FD4" }} />
                      <div title="Mutuelle" style={{ flex: partMutuelle, background: "#2E7D32" }} />
                      {resteCharge > 0 && <div title="Reste à charge" style={{ flex: resteCharge, background: "#FCEBEB" }} />}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 10 }}>
                      {[
                        { l: "Part Sécurité sociale", v: eur(partSS), c: "#4A8FD4" },
                        { l: "Part Mutuelle", v: eur(partMutuelle), c: "#2E7D32" },
                        { l: "Total remboursé", v: eur(totalRembourse), c: "var(--madel-navy)" },
                        { l: "Reste à charge", v: eur(resteCharge), c: resteCharge > 50 ? "var(--madel-rose)" : "var(--madel-success)" },
                      ].map(item => (
                        <div key={item.l} style={{ padding: "8px 10px", borderRadius: 8, background: "var(--madel-bg)", border: "1px solid var(--madel-border)", textAlign: "center" }}>
                          <div style={{ fontSize: 9, color: "var(--madel-muted)", marginBottom: 3 }}>{item.l}</div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: item.c, fontFamily: "monospace" }}>{item.v}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", lineHeight: 1.4, flex: 1 }}>
                        💡 {cas.note}
                      </div>
                      <span style={{
                        marginLeft: 12, padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, flexShrink: 0,
                        background: pct >= 90 ? "#EAF3DE" : pct >= 70 ? "#FAEEDA" : "#FCEBEB",
                        color: pct >= 90 ? "#2E7D32" : pct >= 70 ? "#7B4F00" : "var(--madel-rose)",
                      }}>
                        Couverture {pct}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>{children}</div>
    </div>
  );
}

function Champ({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 5 }}>{label}</label>
      {children}
    </div>
  );
}

const selectStyle: React.CSSProperties = {
  width: "100%", padding: "8px 10px", borderRadius: 8,
  border: "1.5px solid var(--madel-border)", fontSize: 12,
  fontFamily: "var(--madel-font)", color: "var(--madel-navy)",
  background: "#fff", outline: "none", cursor: "pointer",
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238A86A0'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat", backgroundPosition: "right 9px center",
  boxSizing: "border-box",
};
