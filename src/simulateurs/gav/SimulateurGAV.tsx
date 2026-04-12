// ============================================================
// SIMULATEUR GAV — Garantie des Accidents de la Vie
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState } from "react";
import { useSimulateurSouscription, BoutonSouscription } from "../../hooks/useSimulateurSouscription";

// ── Types ─────────────────────────────────────────────────────
type FormuleGAV = "seul" | "couple" | "famille";
type OptionGAV = "itt" | "accidents_medicaux" | "protection_conducteur" | "assistance_voyage";

// ── Données par formule ───────────────────────────────────────
const FORMULES = {
  seul: {
    label: "Seul",
    icone: "🧑",
    desc: "Assuré uniquement",
    tarif: 65,
    capitaux: {
      ipp100:        600000,
      ipp5:           30000,
      deces:         300000,
      ptia:          300000,
      fraisMedicaux:  30000,
      decesCojoint:       0,
      capitalEnfant:      0,
    },
  },
  couple: {
    label: "Couple",
    icone: "👫",
    desc: "Assuré + conjoint",
    tarif: 99,
    capitaux: {
      ipp100:        800000,
      ipp5:           40000,
      deces:         400000,
      ptia:          400000,
      fraisMedicaux:  40000,
      decesCojoint:  200000,
      capitalEnfant:      0,
    },
  },
  famille: {
    label: "Famille",
    icone: "👨‍👩‍👧‍👦",
    desc: "Assuré + conjoint + enfants",
    tarif: 125,
    capitaux: {
      ipp100:       1000000,
      ipp5:           50000,
      deces:         500000,
      ptia:          500000,
      fraisMedicaux:  50000,
      decesCojoint:  200000,
      capitalEnfant:  60000,
    },
  },
};

const OPTIONS: { id: OptionGAV; label: string; desc: string; tarif: number }[] = [
  {
    id: "itt",
    label: "Incapacité Temporaire Totale (ITT)",
    desc: "Indemnité journalière en cas d'arrêt de travail consécutif à un accident garanti. Versée dès le 8e jour d'arrêt.",
    tarif: 45,
  },
  {
    id: "accidents_medicaux",
    label: "Accidents médicaux",
    desc: "Couvre les aléas thérapeutiques et actes médicaux fautifs (erreur médicale, infection nosocomiale, etc.).",
    tarif: 35,
  },
  {
    id: "protection_conducteur",
    label: "Protection conducteur étendue",
    desc: "Couvre vos dommages corporels lors de la conduite d'un véhicule prêté ou loué (non couvert par votre auto).",
    tarif: 25,
  },
  {
    id: "assistance_voyage",
    label: "Assistance voyage étendue",
    desc: "Rapatriement sanitaire, frais médicaux à l'étranger, retour des accompagnants, envoi de médicaments.",
    tarif: 22,
  },
];

const GARANTIES_SOCLE = [
  {
    icone: "🏠",
    nom: "Accidents de la vie privée",
    desc: "Chute, brûlure, bricolage, jardinage, sport, loisirs, agression, attentat, catastrophe naturelle.",
    franchise: "Taux IPP ≥ 5%",
  },
  {
    icone: "⚫",
    nom: "Décès accidentel",
    desc: "Capital versé aux bénéficiaires désignés en cas de décès consécutif à un accident garanti.",
    franchise: "Aucune",
  },
  {
    icone: "🛋️",
    nom: "PTIA — Perte Totale et Irréversible d'Autonomie",
    desc: "Capital versé si l'assuré ne peut plus accomplir seul les actes essentiels de la vie courante suite à un accident.",
    franchise: "Aucune",
  },
  {
    icone: "📊",
    nom: "Invalidité Permanente Partielle (IPP)",
    desc: "Capital proportionnel au taux d'IPP fixé par expertise médicale. Versé dès 5% d'IPP.",
    franchise: "Seuil 5% d'IPP",
  },
  {
    icone: "🏥",
    nom: "Frais médicaux accidentels",
    desc: "Prise en charge des frais d'hospitalisation, rééducation, prothèses, appareillages consécutifs à un accident.",
    franchise: "Franchise 150 €",
  },
  {
    icone: "🤝",
    nom: "Assistance quotidienne",
    desc: "Aide-ménagère, garde des enfants, portage de médicaments, conduite à l'école, soutien psychologique.",
    franchise: "Dès 2 jours d'hospitalisation",
  },
];

const EXCLUSIONS = [
  "Maladies (sauf si consécutives à un accident garanti)",
  "Accidents du travail (sauf accidents de trajet)",
  "Accidents impliquant un véhicule terrestre à moteur (couvert par assurance auto)",
  "Pathologies vertébrales/dorsales sans fracture radiologique",
  "AVC, arrêt cardiaque, AIT",
  "Lésions musculaires, tendineuses ou ligamentaires",
  "Faute intentionnelle ou dolosive de l'assuré",
  "Suicide ou tentative de suicide",
  "Pratique d'un sport à titre professionnel",
  "Usage de drogues, alcool ou stupéfiants",
];

const eur = (n: number) =>
  n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

// ── Composant principal ───────────────────────────────────────
export default function SimulateurGAV() {
  const [formule, setFormule]   = useState<FormuleGAV>("seul");
  const [options, setOptions]   = useState<OptionGAV[]>([]);
  const [afficherExclusions, setAfficherExclusions] = useState(false);
  // Hook souscription — connecte le simulateur à la fiche assuré
  const { client, mode, isFromFiche, souscrire } = useSimulateurSouscription("gav");

  const data = FORMULES[formule];
  const montantOptions = options.reduce((t, o) =>
    t + (OPTIONS.find(op => op.id === o)?.tarif ?? 0), 0
  );
  const primeHT   = data.tarif + montantOptions;
  const tca       = Math.round(primeHT * 0.09 * 100) / 100;
  const contrib   = 5.90;
  const primeTTC  = Math.round((primeHT + tca + contrib) * 100) / 100;
  const mensuel   = Math.round(primeTTC / 12 * 100) / 100;

  const toggleOption = (id: OptionGAV) => {
    setOptions(prev =>
      prev.includes(id) ? prev.filter(o => o !== id) : [...prev, id]
    );
  };

  // Exemple IPP pédagogique : taux 30%
  const exIPP30 = Math.round(data.capitaux.ipp100 * 0.30);

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      {/* Titre */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🛡️ Simulateur GAV</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Garantie des Accidents de la Vie · Sans questionnaire médical · TCA 9%
        </p>
      </div>

      {/* Toggle formule */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
        {(Object.entries(FORMULES) as [FormuleGAV, typeof FORMULES.seul][]).map(([key, f]) => (
          <button key={key} onClick={() => setFormule(key)} style={{
            padding: "16px 20px", borderRadius: 12, border: "2px solid",
            borderColor: formule === key ? "var(--madel-rose)" : "var(--madel-border)",
            background: formule === key ? "var(--madel-rose-light)" : "#fff",
            cursor: "pointer", fontFamily: "var(--madel-font)",
            display: "flex", alignItems: "center", gap: 12, textAlign: "left",
          }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>{f.icone}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: formule === key ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>
                {f.label}
              </div>
              <div style={{ fontSize: 11, color: "var(--madel-muted)", marginTop: 2 }}>{f.desc}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: formule === key ? "var(--madel-rose)" : "var(--madel-navy)", marginTop: 4 }}>
                {f.tarif} €/an
              </div>
            </div>
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>

        {/* COLONNE GAUCHE — Capitaux garantis */}
        <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
          <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", display: "flex", alignItems: "center", gap: 8, background: "var(--madel-bg)", borderRadius: "14px 14px 0 0" }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--madel-rose-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>💰</div>
            <span style={{ fontSize: 12, fontWeight: 700 }}>Capitaux garantis — Formule {data.label}</span>
          </div>
          <div style={{ padding: 14 }}>
            {[
              { label: "Invalidité Permanente (100%)", valeur: data.capitaux.ipp100, highlight: true },
              { label: "Invalidité Permanente (seuil 5%)", valeur: data.capitaux.ipp5 },
              { label: `Exemple IPP 30%`, valeur: exIPP30, muted: true },
              { label: "Décès accidentel (assuré)", valeur: data.capitaux.deces },
              { label: "PTIA", valeur: data.capitaux.ptia },
              { label: "Frais médicaux accidentels", valeur: data.capitaux.fraisMedicaux },
              ...(formule !== "seul" ? [{ label: "Décès conjoint", valeur: data.capitaux.decesCojoint }] : []),
              ...(formule === "famille" ? [{ label: "Capital par enfant", valeur: data.capitaux.capitalEnfant }] : []),
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "9px 12px", marginBottom: 4, borderRadius: 8,
                background: item.highlight ? "var(--madel-navy)" : item.muted ? "var(--madel-bg)" : "#fff",
                border: `1px solid ${item.highlight ? "var(--madel-navy)" : "var(--madel-border)"}`,
              }}>
                <span style={{ fontSize: 11, color: item.highlight ? "var(--madel-rose-mid)" : item.muted ? "var(--madel-muted)" : "var(--madel-text)" }}>
                  {item.label}
                </span>
                <span style={{ fontWeight: 700, fontSize: item.highlight ? 15 : 12, fontFamily: "monospace", color: item.highlight ? "#fff" : item.muted ? "var(--madel-muted)" : "var(--madel-navy)" }}>
                  {eur(item.valeur)}
                </span>
              </div>
            ))}

            {/* Note pédagogique IPP */}
            <div style={{ marginTop: 10, padding: "9px 12px", borderRadius: 8, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 10, color: "var(--madel-info)", lineHeight: 1.6 }}>
              📚 <strong>Comment se calcule l'IPP ?</strong><br />
              Capital IPP = Capital 100% × taux d'invalidité fixé par expertise.<br />
              Ex : IPP 30% → {eur(exIPP30)} ({eur(data.capitaux.ipp100)} × 30%)
            </div>
          </div>
        </div>

        {/* COLONNE DROITE — Options + Garanties socle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

          {/* Options */}
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", display: "flex", alignItems: "center", gap: 8, background: "var(--madel-bg)", borderRadius: "14px 14px 0 0" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--madel-blue-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>➕</div>
              <span style={{ fontSize: 12, fontWeight: 700 }}>Options complémentaires</span>
              <span style={{ fontSize: 10, color: "var(--madel-muted)", marginLeft: 4 }}>(temporaires — coût élevé)</span>
            </div>
            <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 7 }}>
              {OPTIONS.map(opt => (
                <label key={opt.id} style={{
                  display: "flex", alignItems: "flex-start", gap: 9,
                  padding: "9px 11px", borderRadius: 9, cursor: "pointer",
                  border: `1.5px solid ${options.includes(opt.id) ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
                  background: options.includes(opt.id) ? "var(--madel-rose-light)" : "#fff",
                  transition: "all .15s",
                }}>
                  <input type="checkbox" checked={options.includes(opt.id)}
                    onChange={() => toggleOption(opt.id)}
                    style={{ accentColor: "var(--madel-rose)", flexShrink: 0, marginTop: 2 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "var(--madel-navy)" }}>{opt.label}</div>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "var(--madel-rose)", flexShrink: 0, marginLeft: 8 }}>
                        +{opt.tarif} €/an
                      </span>
                    </div>
                    <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 2, lineHeight: 1.4 }}>{opt.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Prime résumé en temps réel */}
          <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "16px 20px" }}>
            <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 8 }}>Prime calculée en temps réel</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
              {[
                { l: "Formule " + data.label, v: `${data.tarif} €` },
                { l: "Options", v: montantOptions > 0 ? `+ ${montantOptions} €` : "—" },
                { l: "Prime HT", v: `${primeHT} €` },
                { l: "TCA 9% + contrib.", v: `+ ${(tca + contrib).toFixed(2)} €` },
              ].map(item => (
                <div key={item.l} style={{ background: "rgba(255,255,255,.08)", borderRadius: 8, padding: "7px 10px" }}>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,.5)", marginBottom: 2 }}>{item.l}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", fontFamily: "monospace" }}>{item.v}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontSize: 10, color: "var(--madel-rose-mid)", marginBottom: 2 }}>Prime annuelle TTC</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
                  {primeTTC.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.5)", marginBottom: 2 }}>Par mois</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,.8)" }}>
                  {mensuel.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Garanties socle */}
      <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden", marginBottom: 14 }}>
        <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", display: "flex", alignItems: "center", gap: 8, background: "var(--madel-bg)", borderRadius: "14px 14px 0 0" }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--madel-rose-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>✅</div>
          <span style={{ fontSize: 12, fontWeight: 700 }}>Garanties incluses — Toutes formules</span>
        </div>
        <div style={{ padding: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {GARANTIES_SOCLE.map((g, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 10,
              padding: "10px 12px", borderRadius: 9,
              background: "var(--madel-blue-light)", border: "1px solid #B5D4F4",
            }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>{g.icone}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 11, color: "var(--madel-navy)" }}>{g.nom}</div>
                <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 2, lineHeight: 1.4 }}>{g.desc}</div>
                <div style={{ fontSize: 9, color: "var(--madel-rose)", marginTop: 3 }}>Franchise : {g.franchise}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exclusions */}
      <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
        <button
          onClick={() => setAfficherExclusions(v => !v)}
          style={{
            width: "100%", padding: "11px 16px", display: "flex",
            alignItems: "center", justifyContent: "space-between",
            background: "var(--madel-bg)", border: "none", cursor: "pointer",
            fontFamily: "var(--madel-font)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "#FCEBEB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>❌</div>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--madel-navy)" }}>Exclusions principales</span>
          </div>
          <span style={{ fontSize: 16, color: "var(--madel-muted)", transition: "transform .2s", transform: afficherExclusions ? "rotate(90deg)" : "none" }}>›</span>
        </button>
        {afficherExclusions && (
          <div style={{ padding: "12px 16px", borderTop: "1px solid var(--madel-border)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {EXCLUSIONS.map((ex, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 11, color: "var(--madel-text)", padding: "4px 0" }}>
                  <span style={{ color: "var(--madel-rose)", flexShrink: 0, marginTop: 1 }}>✕</span>
                  {ex}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10, padding: "8px 12px", borderRadius: 8, background: "#FEF8EE", border: "1px solid #E8B86D", fontSize: 10, color: "#7B4F00" }}>
              💡 Pédagogique : les exclusions AT/MP sont importantes — l'élève doit comprendre que la GAV est complémentaire de la prévoyance collective, pas substituable.
            </div>
          </div>
        )}
      </div>


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
