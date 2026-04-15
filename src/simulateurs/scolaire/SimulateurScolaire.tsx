// ============================================================
// SIMULATEUR SCOLAIRE — Assurance Scolaire & Extrascolaire
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────
type FormuleScolaire = "essentielle" | "confort" | "integrale";

// ── Données formules ──────────────────────────────────────────
const FORMULES = {
  essentielle: {
    label: "Essentielle",
    icone: "📚",
    couleur: "#F5B731",
    desc: "Protection de base — accidents scolaires",
    tarif: 17,
    garanties: [
      { nom: "Accidents corporels en milieu scolaire", inclus: true, desc: "Accidents survenus dans l'enceinte de l'école, lors d'activités organisées et sur le trajet domicile-école." },
      { nom: "RC Vie Privée", inclus: true, desc: "Dommages causés à autrui dans le cadre de la vie privée et scolaire de l'enfant." },
      { nom: "Défense pénale et recours", inclus: true, desc: "Défense des intérêts de l'enfant et des parents en cas de litige lié à un accident." },
      { nom: "Activités sportives scolaires", inclus: true, desc: "Sport pratiqué dans le cadre des cours d'EPS et sorties scolaires." },
      { nom: "Activités extrascolaires & loisirs", inclus: false, desc: "Non inclus — passer en formule Confort." },
      { nom: "Cyber-harcèlement", inclus: false, desc: "Non inclus — passer en formule Intégrale." },
      { nom: "Objets personnels & matériel scolaire", inclus: false, desc: "Non inclus — passer en formule Intégrale." },
      { nom: "Bris de lunettes", inclus: false, desc: "Non inclus — passer en formule Intégrale." },
    ],
  },
  confort: {
    label: "Confort",
    icone: "⭐",
    couleur: "#E8722A",
    desc: "Scolaire + sport + loisirs",
    tarif: 31,
    garanties: [
      { nom: "Accidents corporels en milieu scolaire", inclus: true, desc: "Accidents survenus dans l'enceinte de l'école, lors d'activités organisées et sur le trajet domicile-école." },
      { nom: "RC Vie Privée", inclus: true, desc: "Dommages causés à autrui dans le cadre de la vie privée et scolaire de l'enfant." },
      { nom: "Défense pénale et recours", inclus: true, desc: "Défense des intérêts de l'enfant et des parents en cas de litige lié à un accident." },
      { nom: "Activités sportives scolaires", inclus: true, desc: "Sport pratiqué dans le cadre des cours d'EPS et sorties scolaires." },
      { nom: "Activités extrascolaires & loisirs", inclus: true, desc: "Sport en club, centres aérés, colonies de vacances, activités culturelles — France et étranger." },
      { nom: "Cyber-harcèlement", inclus: false, desc: "Non inclus — passer en formule Intégrale." },
      { nom: "Objets personnels & matériel scolaire", inclus: false, desc: "Non inclus — passer en formule Intégrale." },
      { nom: "Bris de lunettes", inclus: false, desc: "Non inclus — passer en formule Intégrale." },
    ],
  },
  integrale: {
    label: "Intégrale",
    icone: "🏆",
    couleur: "#4A8FD4",
    desc: "Couverture totale",
    tarif: 45,
    garanties: [
      { nom: "Accidents corporels en milieu scolaire", inclus: true, desc: "Accidents survenus dans l'enceinte de l'école, lors d'activités organisées et sur le trajet domicile-école." },
      { nom: "RC Vie Privée", inclus: true, desc: "Dommages causés à autrui dans le cadre de la vie privée et scolaire de l'enfant." },
      { nom: "Défense pénale et recours", inclus: true, desc: "Défense des intérêts de l'enfant et des parents en cas de litige lié à un accident." },
      { nom: "Activités sportives scolaires", inclus: true, desc: "Sport pratiqué dans le cadre des cours d'EPS et sorties scolaires." },
      { nom: "Activités extrascolaires & loisirs", inclus: true, desc: "Sport en club, centres aérés, colonies de vacances, activités culturelles — France et étranger." },
      { nom: "Cyber-harcèlement", inclus: true, desc: "Prise en charge psychologique, assistance juridique et accompagnement en cas de harcèlement en ligne ou cyber-intimidation." },
      { nom: "Objets personnels & matériel scolaire", inclus: true, desc: "Cartable, fournitures, vêtements, téléphone portable — en cas de vol avec violence ou dommage accidentel." },
      { nom: "Bris de lunettes", inclus: true, desc: "Remplacement des lunettes de vue cassées accidentellement, sans franchise, une fois par an." },
    ],
  },
};

// ── Plafonds de garantie ──────────────────────────────────────
const PLAFONDS = {
  essentielle: { ipp: 375000, fraisMedicaux: 7500, rc: "Illimitée (corporel) / 750 000 €", deces: 15000, objets: 0, brisLunettes: 0 },
  confort:     { ipp: 750000, fraisMedicaux: 15000, rc: "Illimitée (corporel) / 1 500 000 €", deces: 20000, objets: 0, brisLunettes: 0 },
  integrale:   { ipp: 1000000, fraisMedicaux: 20000, rc: "Illimitée (corporel) / 2 000 000 €", deces: 25000, objets: 500, brisLunettes: 250 },
};

// ── Réduction multienfants ────────────────────────────────────
const REDUCTION_MULTI = (nb: number): number => {
  if (nb === 1) return 1.00;
  if (nb === 2) return 1.80; // 2e enfant à -10%
  if (nb === 3) return 2.50; // 3e enfant à -17%
  return 2.50 + (nb - 3) * 0.75; // chaque enfant supp. à -25%
};

const eur = (n: number) =>
  n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

// ── Composant ─────────────────────────────────────────────────
export default function SimulateurScolaire() {
  const [formule, setFormule]     = useState<FormuleScolaire>("confort");
  const [nbEnfants, setNbEnfants] = useState(1);

  const data      = FORMULES[formule];
  const plafonds  = PLAFONDS[formule];
  const coeff     = REDUCTION_MULTI(nbEnfants);
  const primeHT   = Math.round(data.tarif * coeff * 100) / 100;
  const tca       = Math.round(primeHT * 0.09 * 100) / 100;
  const contrib   = 5.90;
  const primeTTC  = Math.round((primeHT + tca + contrib) * 100) / 100;
  const mensuel   = Math.round(primeTTC / 12 * 100) / 100;

  const economie = nbEnfants > 1
    ? Math.round((data.tarif * nbEnfants - primeHT) * 100) / 100
    : 0;

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      {/* Titre */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🎒 Simulateur Scolaire</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Assurance scolaire & extrascolaire · Enfants 3–25 ans · TCA 9%
        </p>
      </div>

      {/* Nombre d'enfants */}
      <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: "16px 20px", marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "var(--madel-navy)" }}>Nombre d'enfants à assurer</div>
          <div style={{ fontSize: 11, color: "var(--madel-muted)", marginTop: 2 }}>Tarif dégressif à partir du 2e enfant</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {economie > 0 && (
            <div style={{ padding: "5px 12px", borderRadius: 20, background: "var(--madel-success-bg)", color: "var(--madel-success)", fontSize: 11, fontWeight: 700 }}>
              Économie : {eur(economie)}/an
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={() => setNbEnfants(n => Math.max(1, n - 1))} style={{ width: 32, height: 32, borderRadius: 8, border: "1.5px solid var(--madel-border)", background: "#fff", cursor: "pointer", fontSize: 16, fontWeight: 700, color: "var(--madel-navy)", fontFamily: "var(--madel-font)" }}>−</button>
            <span style={{ fontSize: 20, fontWeight: 800, minWidth: 28, textAlign: "center" }}>{nbEnfants}</span>
            <button onClick={() => setNbEnfants(n => Math.min(6, n + 1))} style={{ width: 32, height: 32, borderRadius: 8, border: "1.5px solid var(--madel-border)", background: "#fff", cursor: "pointer", fontSize: 16, fontWeight: 700, color: "var(--madel-navy)", fontFamily: "var(--madel-font)" }}>+</button>
          </div>
        </div>
      </div>

      {/* Formules */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 14 }}>
        {(Object.entries(FORMULES) as [FormuleScolaire, typeof FORMULES.essentielle][]).map(([key, f]) => {
          const tarifF = Math.round(f.tarif * REDUCTION_MULTI(nbEnfants) * 100) / 100;
          return (
            <button key={key} onClick={() => setFormule(key)} style={{
              padding: "16px 18px", borderRadius: 12, border: "2px solid",
              borderColor: formule === key ? "var(--madel-rose)" : "var(--madel-border)",
              background: formule === key ? "var(--madel-rose-light)" : "#fff",
              cursor: "pointer", fontFamily: "var(--madel-font)", textAlign: "left",
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{f.icone}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: formule === key ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>{f.label}</div>
              <div style={{ fontSize: 11, color: "var(--madel-muted)", marginTop: 2, marginBottom: 8 }}>{f.desc}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: formule === key ? "var(--madel-rose)" : "var(--madel-navy)" }}>
                  {tarifF.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €
                </span>
                <span style={{ fontSize: 10, color: "var(--madel-muted)" }}>
                  /an · {nbEnfants} enfant{nbEnfants > 1 ? "s" : ""}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>

        {/* Garanties */}
        <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
          <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", display: "flex", alignItems: "center", gap: 8, background: "var(--madel-bg)", borderRadius: "14px 14px 0 0" }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--madel-rose-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>✅</div>
            <span style={{ fontSize: 12, fontWeight: 700 }}>Garanties — Formule {data.label}</span>
          </div>
          <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
            {data.garanties.map((g, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 8,
                padding: "8px 10px", borderRadius: 8,
                background: g.inclus ? "var(--madel-blue-light)" : "var(--madel-bg)",
                border: `1px solid ${g.inclus ? "#B5D4F4" : "var(--madel-border)"}`,
                opacity: g.inclus ? 1 : 0.55,
              }}>
                <span style={{ fontSize: 13, flexShrink: 0 }}>{g.inclus ? "✅" : "❌"}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 11, color: "var(--madel-navy)" }}>{g.nom}</div>
                  <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1, lineHeight: 1.4 }}>{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plafonds + Prime */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

          {/* Plafonds */}
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", display: "flex", alignItems: "center", gap: 8, background: "var(--madel-bg)", borderRadius: "14px 14px 0 0" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--madel-blue-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>💰</div>
              <span style={{ fontSize: 12, fontWeight: 700 }}>Plafonds de garantie</span>
            </div>
            <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { label: "Invalidité Permanente (100%)", valeur: eur(plafonds.ipp), highlight: true },
                { label: "Frais médicaux accidentels", valeur: eur(plafonds.fraisMedicaux) },
                { label: "Responsabilité Civile", valeur: plafonds.rc },
                { label: "Capital décès accidentel", valeur: eur(plafonds.deces) },
                { label: "Objets personnels", valeur: plafonds.objets > 0 ? eur(plafonds.objets) : "Non inclus" },
                { label: "Bris de lunettes", valeur: plafonds.brisLunettes > 0 ? eur(plafonds.brisLunettes) + "/an" : "Non inclus" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "8px 10px", borderRadius: 8,
                  background: item.highlight ? "var(--madel-navy)" : "var(--madel-bg)",
                  border: `1px solid ${item.highlight ? "var(--madel-navy)" : "var(--madel-border)"}`,
                }}>
                  <span style={{ fontSize: 11, color: item.highlight ? "var(--madel-rose-mid)" : "var(--madel-text)" }}>{item.label}</span>
                  <span style={{ fontWeight: 700, fontSize: 11, fontFamily: "monospace", color: item.highlight ? "#fff" : "var(--madel-navy)" }}>{item.valeur}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prime */}
          <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "16px 20px" }}>
            <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 10 }}>Récapitulatif prime</div>
            {[
              { l: `Tarif de base (${data.label})`, v: `${data.tarif} €/enfant` },
              { l: `× Coefficient (${nbEnfants} enfant${nbEnfants > 1 ? "s" : ""})`, v: `× ${coeff.toFixed(2)}` },
              { l: "Prime HT", v: `${primeHT} €` },
              { l: "TCA 9% + contribution", v: `+ ${(tca + contrib).toFixed(2)} €` },
            ].map(item => (
              <div key={item.l} style={{ display: "flex", justifyContent: "space-between", fontSize: 11, padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                <span style={{ color: "rgba(255,255,255,.6)" }}>{item.l}</span>
                <span style={{ color: "#fff", fontFamily: "monospace" }}>{item.v}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,.2)", marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontSize: 10, color: "var(--madel-rose-mid)" }}>Prime annuelle TTC</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
                  {primeTTC.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.5)" }}>Par mois</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.8)" }}>
                  {mensuel.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Note pédagogique */}
      <div style={{ padding: "12px 16px", borderRadius: 10, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 11, color: "var(--madel-info)", lineHeight: 1.6 }}>
        📚 <strong>Point pédagogique :</strong> L'assurance scolaire n'est pas obligatoire en France (sauf pour les activités facultatives organisées par l'école).
        Cependant, elle est fortement recommandée car la RC des parents couvre les dommages causés aux tiers, mais pas les dommages subis par l'enfant lui-même.
        La formule Intégrale est particulièrement pertinente pour les enfants pratiquant un sport en club en dehors de l'école.
      </div>
    </div>
  );
}
