// ============================================================
// SIMULATEUR EMPRUNTEUR — Assurance de Prêt Immobilier
// Kleios Madel Assurance · BTS Assurance
// TAEA, quotité, délégation, tableau d'amortissement
// ============================================================
import { useState, useMemo } from "react";
import { useSimulateurSouscription, BoutonSouscription } from "../../hooks/useSimulateurSouscription";

// ── Types ─────────────────────────────────────────────────────
type Situation  = "seul" | "couple";
type Quotite    = "100_0" | "50_50" | "100_100";
type Profession = "cadre" | "non_cadre" | "tns" | "fonctionnaire";

// ── Barème de base (taux assurance annuel pour 1 € de capital)
// Taux sur capital initial — barème indicatif marché 2025
const getTauxBase = (age: number, fumeur: boolean, profession: Profession): number => {
  let taux = 0;
  if      (age < 30) taux = 0.0007;
  else if (age < 35) taux = 0.0010;
  else if (age < 40) taux = 0.0014;
  else if (age < 45) taux = 0.0021;
  else if (age < 50) taux = 0.0032;
  else if (age < 55) taux = 0.0046;
  else if (age < 60) taux = 0.0067;
  else               taux = 0.0098;

  if (fumeur) taux *= 1.30;
  if (profession === "tns")           taux *= 1.15;
  if (profession === "fonctionnaire") taux *= 0.92;

  return Math.round(taux * 100000) / 100000;
};

// Majoration garanties optionnelles
const MAJORATIONS_GARANTIES = {
  itt:             0.35,
  ipp:             0.15,
  ipt:             0.20,
  sport_risque:    0.25,  // +25% — sports extrêmes déclarés
  psy_dorsale:     0.12,  // +12% — affections psy/dorsales hors hospi
  reprise_partielle: 0.10, // +10% — ITT à temps partiel thérapeutique
};

// Taux contrat groupe bancaire (toujours plus cher)
const TAUX_GROUPE_BANCAIRE_MAJORATION = 2.2; // 2.2× plus cher en moyenne

const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const eurDec = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
const pct = (n: number, dec = 3) => `${(n * 100).toFixed(dec)}%`;

// ── Calcul mensualité crédit ──────────────────────────────────
const calculerMensualiteCredit = (capital: number, tauxAnnuel: number, dureeAns: number): number => {
  const r = tauxAnnuel / 12;
  const n = dureeAns * 12;
  if (r === 0) return capital / n;
  return capital * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
};

// ── Composant ─────────────────────────────────────────────────
export default function SimulateurEmprunteur() {
  // Prêt
  const [capital, setCapital]       = useState(250000);
  const [duree, setDuree]           = useState(20);
  const [tauxPret, setTauxPret]     = useState(3.5);

  // Profil
  const [age, setAge]               = useState(35);
  const [situation, setSituation]   = useState<Situation>("seul");
  const [fumeur, setFumeur]         = useState(false);
  const [profession, setProfession] = useState<Profession>("cadre");

  // Couple
  const [age2, setAge2]             = useState(33);
  const [fumeur2, setFumeur2]       = useState(false);
  const [quotite, setQuotite]       = useState<Quotite>("100_100");

  // Garanties
  const [itt, setItt]               = useState(true);
  const [ipp, setIpp]               = useState(false);
  const [ipt, setIpt]               = useState(true);
  const [sportRisque, setSportRisque]           = useState(false);
  const [psyDorsale, setPsyDorsale]             = useState(false);
  const [reprisePartielle, setReprisePartielle] = useState(false);

  // Onglet
  const [onglet, setOnglet]         = useState<"profil" | "detail" | "amortissement" | "delegation">("profil");
  // Hook souscription — connecte le simulateur à la fiche assuré
  const { client, mode, isFromFiche, souscrire } = useSimulateurSouscription("emprunteur");

  // ── Calculs ──────────────────────────────────────────────────
  const calculs = useMemo(() => {
    const tauxBase1 = getTauxBase(age, fumeur, profession);
    const tauxBase2 = situation === "couple" ? getTauxBase(age2, fumeur2, profession) : 0;

    // Majoration garanties
    const majGaranties = 1
      + (itt ? MAJORATIONS_GARANTIES.itt : 0)
      + (ipp ? MAJORATIONS_GARANTIES.ipp : 0)
      + (ipt ? MAJORATIONS_GARANTIES.ipt : 0)
      + (sportRisque ? MAJORATIONS_GARANTIES.sport_risque : 0)
      + (psyDorsale ? MAJORATIONS_GARANTIES.psy_dorsale : 0)
      + (reprisePartielle ? MAJORATIONS_GARANTIES.reprise_partielle : 0);

    const tauxFinal1 = tauxBase1 * majGaranties;
    const tauxFinal2 = tauxBase2 * majGaranties;

    // Quotité
    const quotites = {
      "100_0":   [1.00, 0.00],
      "50_50":   [0.50, 0.50],
      "100_100": [1.00, 1.00],
    };
    const [q1, q2] = quotites[quotite];

    // Prime mensuelle assurance (sur capital initial)
    const primeAss1 = capital * tauxFinal1 * q1 / 12;
    const primeAss2 = situation === "couple" ? capital * tauxFinal2 * q2 / 12 : 0;
    const primeAssTotale = primeAss1 + primeAss2;

    // Mensualité crédit seul
    const mensualiteCredit = calculerMensualiteCredit(capital, tauxPret / 100, duree);
    const mensualiteTotale = mensualiteCredit + primeAssTotale;

    // Coût total assurance
    const coutTotalAss = primeAssTotale * duree * 12;

    // TAEA (Taux Annuel Effectif Assurance)
    // Formule simplifiée : (coût total assurance / capital) / durée × 100
    const taea = coutTotalAss / capital / duree;

    // Contrat groupe bancaire
    const primeGroupeTotale = primeAssTotale * TAUX_GROUPE_BANCAIRE_MAJORATION;
    const coutTotalGroupe = primeGroupeTotale * duree * 12;
    const economieGroupe = coutTotalGroupe - coutTotalAss;
    const taeaGroupe = coutTotalGroupe / capital / duree;

    // Tableau d'amortissement (annuel)
    const lignesAmort: {
      annee: number; capitalDebut: number; interets: number;
      amortissement: number; capitalFin: number; assurance: number; totalAnnee: number;
    }[] = [];

    let capitalRestant = capital;
    const r = tauxPret / 100 / 12;
    const mensCredit = calculerMensualiteCredit(capital, tauxPret / 100, duree);

    for (let annee = 1; annee <= duree; annee++) {
      let interetsAnnee = 0;
      let amortAnnee = 0;
      const capitalDebut = capitalRestant;

      for (let m = 0; m < 12; m++) {
        const interetsMois = capitalRestant * r;
        const amortMois = mensCredit - interetsMois;
        interetsAnnee += interetsMois;
        amortAnnee += amortMois;
        capitalRestant = Math.max(0, capitalRestant - amortMois);
      }

      lignesAmort.push({
        annee,
        capitalDebut: Math.round(capitalDebut),
        interets: Math.round(interetsAnnee),
        amortissement: Math.round(amortAnnee),
        capitalFin: Math.round(capitalRestant),
        assurance: Math.round(primeAssTotale * 12),
        totalAnnee: Math.round((mensCredit + primeAssTotale) * 12),
      });
    }

    const coutTotalCredit = mensualiteCredit * duree * 12 - capital;

    return {
      tauxFinal1, tauxFinal2, q1, q2,
      primeAss1, primeAss2, primeAssTotale,
      mensualiteCredit, mensualiteTotale,
      coutTotalAss, taea,
      primeGroupeTotale, coutTotalGroupe, economieGroupe, taeaGroupe,
      lignesAmort, coutTotalCredit,
    };
  }, [capital, duree, tauxPret, age, fumeur, profession, age2, fumeur2, situation, quotite, itt, ipp, ipt, sportRisque, psyDorsale, reprisePartielle]);

  const QUOTITES = [
    { v: "100_0",   label: "100% / 0%",    desc: "Un seul assuré — moins cher" },
    { v: "50_50",   label: "50% / 50%",    desc: "Couverture partielle chacun" },
    { v: "100_100", label: "100% / 100%",  desc: "Couverture totale chacun — idéal" },
  ] as { v: Quotite; label: string; desc: string }[];

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      {/* Titre */}
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🏦 Simulateur Emprunteur</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Assurance de prêt immobilier · TAEA · Quotité · Délégation d'assurance · Loi Lemoine 2022
        </p>
      </div>

      {/* Onglets */}
      <div style={{ display: "flex", gap: 0, marginBottom: 16, background: "var(--madel-bg)", borderRadius: 10, padding: 4, border: "1px solid var(--madel-border)" }}>
        {[
          { k: "profil",        label: "📋 Profil & Calcul" },
          { k: "detail",        label: "🔍 Détail garanties" },
          { k: "amortissement", label: "📊 Amortissement" },
          { k: "delegation",    label: "💡 Délégation d'assurance" },
        ].map(tab => (
          <button key={tab.k} onClick={() => setOnglet(tab.k as typeof onglet)} style={{
            flex: 1, padding: "10px 8px", borderRadius: 8, border: "none",
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

      {/* ── PROFIL & CALCUL ───────────────────────────────────── */}
      {onglet === "profil" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Prêt */}
            <Card titre="Caractéristiques du prêt" icone="🏦" couleur="blue">
              <Slider label={`Capital emprunté — ${eur(capital)}`} min={50000} max={600000} step={5000}
                value={capital} onChange={setCapital} formatLeft="50 000 €" formatRight="600 000 €" />
              <Slider label={`Durée — ${duree} ans`} min={5} max={30} step={1}
                value={duree} onChange={setDuree} formatLeft="5 ans" formatRight="30 ans" />
              <Slider label={`Taux du prêt — ${tauxPret.toFixed(2)}%`} min={1} max={6} step={0.05}
                value={tauxPret} onChange={setTauxPret} formatLeft="1%" formatRight="6%" />
              <div style={{ padding: "8px 12px", borderRadius: 8, background: "var(--madel-bg)", border: "1px solid var(--madel-border)", fontSize: 10, color: "var(--madel-muted)", display: "flex", justifyContent: "space-between" }}>
                <span>Mensualité crédit seul</span>
                <span style={{ fontWeight: 700, color: "var(--madel-navy)", fontFamily: "monospace" }}>{eurDec(calculs.mensualiteCredit)}/mois</span>
              </div>
            </Card>

            {/* Profil emprunteur 1 */}
            <Card titre={situation === "couple" ? "Emprunteur 1" : "Profil emprunteur"} icone="👤" couleur="rose">
              <Slider label={`Âge — ${age} ans`} min={18} max={75} step={1}
                value={age} onChange={setAge} formatLeft="18 ans" formatRight="75 ans" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <Champ label="Fumeur ?">
                  <div style={{ display: "flex", gap: 6 }}>
                    {[false, true].map(v => (
                      <button key={String(v)} onClick={() => setFumeur(v)} style={{
                        flex: 1, padding: "7px", borderRadius: 7, border: "2px solid",
                        borderColor: fumeur === v ? "var(--madel-rose)" : "var(--madel-border)",
                        background: fumeur === v ? "var(--madel-rose-light)" : "#fff",
                        cursor: "pointer", fontFamily: "var(--madel-font)",
                        fontSize: 11, fontWeight: fumeur === v ? 700 : 400,
                        color: fumeur === v ? "var(--madel-rose-dark)" : "var(--madel-navy)",
                      }}>
                        {v ? "🚬 Oui" : "✅ Non"}
                      </button>
                    ))}
                  </div>
                </Champ>
                <Champ label="Profession">
                  <select value={profession} onChange={e => setProfession(e.target.value as Profession)} style={selectStyle}>
                    <option value="cadre">Cadre</option>
                    <option value="non_cadre">Non-cadre</option>
                    <option value="tns">TNS / Indép. (+15%)</option>
                    <option value="fonctionnaire">Fonctionnaire (−8%)</option>
                  </select>
                </Champ>
              </div>
              <div style={{ fontSize: 10, color: "var(--madel-muted)", padding: "6px 10px", borderRadius: 7, background: "var(--madel-bg)", border: "1px solid var(--madel-border)" }}>
                Taux de base : <strong style={{ color: "var(--madel-navy)" }}>{pct(getTauxBase(age, fumeur, profession))}</strong>/an
                {fumeur && <span style={{ color: "var(--madel-rose)", marginLeft: 8 }}>🚬 +30% fumeur</span>}
              </div>
            </Card>

            {/* Situation */}
            <Card titre="Situation" icone="👥" couleur="blue">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
                {([
                  { v: "seul",   label: "🧑 Seul" },
                  { v: "couple", label: "👫 En couple" },
                ] as { v: Situation; label: string }[]).map(s => (
                  <button key={s.v} onClick={() => setSituation(s.v)} style={{
                    padding: "9px", borderRadius: 8, border: "2px solid",
                    borderColor: situation === s.v ? "var(--madel-rose)" : "var(--madel-border)",
                    background: situation === s.v ? "var(--madel-rose-light)" : "#fff",
                    cursor: "pointer", fontFamily: "var(--madel-font)",
                    fontSize: 12, fontWeight: 700, color: situation === s.v ? "var(--madel-rose-dark)" : "var(--madel-navy)",
                  }}>{s.label}</button>
                ))}
              </div>

              {situation === "couple" && (
                <>
                  <div style={{ height: 1, background: "var(--madel-border)", margin: "4px 0 8px" }} />
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--madel-muted)", marginBottom: 6 }}>Emprunteur 2</div>
                  <Slider label={`Âge — ${age2} ans`} min={18} max={75} step={1}
                    value={age2} onChange={setAge2} formatLeft="18 ans" formatRight="75 ans" />
                  <Champ label="Fumeur ?">
                    <div style={{ display: "flex", gap: 6 }}>
                      {[false, true].map(v => (
                        <button key={String(v)} onClick={() => setFumeur2(v)} style={{
                          flex: 1, padding: "7px", borderRadius: 7, border: "2px solid",
                          borderColor: fumeur2 === v ? "var(--madel-rose)" : "var(--madel-border)",
                          background: fumeur2 === v ? "var(--madel-rose-light)" : "#fff",
                          cursor: "pointer", fontFamily: "var(--madel-font)",
                          fontSize: 11, fontWeight: fumeur2 === v ? 700 : 400,
                          color: fumeur2 === v ? "var(--madel-rose-dark)" : "var(--madel-navy)",
                        }}>
                          {v ? "🚬 Oui" : "✅ Non"}
                        </button>
                      ))}
                    </div>
                  </Champ>
                  <div style={{ height: 1, background: "var(--madel-border)", margin: "4px 0 8px" }} />
                  <Champ label="Quotité">
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      {QUOTITES.map(q => (
                        <button key={q.v} onClick={() => setQuotite(q.v)} style={{
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          padding: "8px 10px", borderRadius: 8, border: "2px solid",
                          borderColor: quotite === q.v ? "var(--madel-rose)" : "var(--madel-border)",
                          background: quotite === q.v ? "var(--madel-rose-light)" : "#fff",
                          cursor: "pointer", fontFamily: "var(--madel-font)",
                        }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: quotite === q.v ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>{q.label}</span>
                          <span style={{ fontSize: 10, color: "var(--madel-muted)" }}>{q.desc}</span>
                        </button>
                      ))}
                    </div>
                    <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 4, padding: "6px 8px", borderRadius: 7, background: "var(--madel-bg)", border: "1px solid var(--madel-border)", lineHeight: 1.4 }}>
                      💡 La quotité représente le % du capital garanti par chaque emprunteur. En 100%/100%, le prêt est intégralement remboursé au décès de l'un ou l'autre.
                    </div>
                  </Champ>
                </>
              )}
            </Card>
          </div>

          {/* Résultats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Prime principale */}
            <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 14 }}>Résultat — Assurance emprunteur</div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                <div style={{ background: "rgba(255,255,255,.1)", borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,.5)", marginBottom: 2 }}>Prime mensuelle assurance</div>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
                    {eurDec(calculs.primeAssTotale)}
                  </div>
                </div>
                <div style={{ background: "rgba(255,255,255,.1)", borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,.5)", marginBottom: 2 }}>Mensualité totale (crédit + ass.)</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>
                    {eurDec(calculs.mensualiteTotale)}
                  </div>
                </div>
              </div>

              {[
                { l: "Taux assurance emp. 1", v: pct(calculs.tauxFinal1) + "/an" },
                ...(situation === "couple" ? [{ l: "Taux assurance emp. 2", v: pct(calculs.tauxFinal2) + "/an" }] : []),
                { l: "Coût total assurance sur " + duree + " ans", v: eur(calculs.coutTotalAss) },
                { l: "Coût total intérêts crédit", v: eur(calculs.coutTotalCredit) },
                { l: "TAEA (Taux Annuel Effectif Assurance)", v: pct(calculs.taea) },
              ].map(item => (
                <div key={item.l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,.08)", fontSize: 11 }}>
                  <span style={{ color: "rgba(255,255,255,.6)" }}>{item.l}</span>
                  <span style={{ color: "#fff", fontFamily: "monospace", fontWeight: 600 }}>{item.v}</span>
                </div>
              ))}

              <div style={{ marginTop: 12, padding: "8px 12px", borderRadius: 8, background: "rgba(255,255,255,.08)", fontSize: 10, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>
                📚 <strong style={{ color: "var(--madel-rose-mid)" }}>TAEA</strong> = (coût total assurance ÷ capital) ÷ durée. Obligatoirement affiché sur les offres depuis la loi Lagarde 2010.
              </div>
            </div>

            {/* Décomposition si couple */}
            {situation === "couple" && (
              <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 10 }}>Décomposition par emprunteur</div>
                {[
                  { label: `Emprunteur 1 — ${age} ans — quotité ${Math.round(calculs.q1 * 100)}%`, prime: calculs.primeAss1 },
                  { label: `Emprunteur 2 — ${age2} ans — quotité ${Math.round(calculs.q2 * 100)}%`, prime: calculs.primeAss2 },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 10px", marginBottom: 4, borderRadius: 8, background: "var(--madel-bg)", border: "1px solid var(--madel-border)" }}>
                    <span style={{ fontSize: 11, color: "var(--madel-text)" }}>{item.label}</span>
                    <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: 12, color: "var(--madel-navy)" }}>{eurDec(item.prime)}/mois</span>
                  </div>
                ))}
              </div>
            )}

            {/* Récapitulatif coûts */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 10 }}>Coût total sur {duree} ans</div>
              {[
                { label: "Capital emprunté", valeur: eur(capital), color: "var(--madel-navy)", pct: 100 },
                { label: "Intérêts du crédit", valeur: eur(calculs.coutTotalCredit), color: "#4A8FD4", pct: Math.round(calculs.coutTotalCredit / capital * 100) },
                { label: "Coût total assurance", valeur: eur(calculs.coutTotalAss), color: "var(--madel-rose)", pct: Math.round(calculs.coutTotalAss / capital * 100) },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                    <span style={{ fontSize: 11, color: "var(--madel-text)" }}>{item.label}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, fontFamily: "monospace", color: item.color }}>{item.valeur}</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: "var(--madel-bg)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${Math.min(100, item.pct)}%`, background: item.color, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 10, padding: "8px 10px", borderRadius: 8, background: "var(--madel-navy)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,.7)" }}>Coût total du crédit immobilier</span>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#fff", fontFamily: "monospace" }}>
                  {eur(capital + calculs.coutTotalCredit + calculs.coutTotalAss)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── DÉTAIL GARANTIES ──────────────────────────────────── */}
      {onglet === "detail" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Card titre="Garanties souscrites" icone="🛡️" couleur="rose">
              {[
                { id: "dc",   label: "Décès (DC)", desc: "Capital remboursé au décès de l'assuré. Garantie obligatoire imposée par la banque.", obligatoire: true, actif: true, setActif: null },
                { id: "ptia", label: "PTIA — Perte Totale et Irréversible d'Autonomie", desc: "Capital remboursé si l'assuré ne peut plus accomplir seul 4 actes essentiels. Obligatoire.", obligatoire: true, actif: true, setActif: null },
                { id: "ipt",  label: "IPT — Invalidité Permanente Totale (> 66%)", desc: "Capital remboursé si taux d'invalidité > 66%. Fortement recommandée.", obligatoire: false, actif: ipt, setActif: setIpt, majoration: MAJORATIONS_GARANTIES.ipt },
                { id: "itt",  label: "ITT — Incapacité Temporaire de Travail", desc: "Prise en charge des mensualités en cas d'arrêt de travail total. Exclue pour certains métiers.", obligatoire: false, actif: itt, setActif: setItt, majoration: MAJORATIONS_GARANTIES.itt },
                { id: "ipp",  label: "IPP — Invalidité Permanente Partielle (33-66%)", desc: "Indemnisation partielle si taux d'invalidité entre 33% et 66%. Option rarement exigée.", obligatoire: false, actif: ipp, setActif: setIpp, majoration: MAJORATIONS_GARANTIES.ipp },
                { id: "sport_risque", label: "Sport à risque", desc: "Couvre les accidents survenus lors de la pratique d'un sport à risque déclaré (moto, ski, escalade, parachute...). Sans cette option, les accidents sportifs extrêmes sont exclus.", obligatoire: false, actif: sportRisque, setActif: setSportRisque, majoration: MAJORATIONS_GARANTIES.sport_risque },
                { id: "psy_dorsale", label: "Affections psychiques et dorsales sans hospitalisation", desc: "Lève l'exclusion standard des affections psychiatriques et dorsales (hernies discales, lumbago...) sans hospitalisation préalable. Très fréquentes en pratique.", obligatoire: false, actif: psyDorsale, setActif: setPsyDorsale, majoration: MAJORATIONS_GARANTIES.psy_dorsale },
                { id: "reprise_partielle", label: "Reprise à temps partiel thérapeutique (ITT)", desc: "En cas de reprise du travail à temps partiel après arrêt, l'ITT continue à être versée partiellement. Sans cette option, l'ITT cesse dès la reprise, même partielle.", obligatoire: false, actif: reprisePartielle, setActif: setReprisePartielle, majoration: MAJORATIONS_GARANTIES.reprise_partielle },
              ].map(g => (
                <div key={g.id} style={{
                  padding: "10px 12px", borderRadius: 10, border: "2px solid",
                  borderColor: g.actif ? (g.obligatoire ? "#A5D6A7" : "var(--madel-rose-mid)") : "var(--madel-border)",
                  background: g.actif ? (g.obligatoire ? "var(--madel-success-bg)" : "var(--madel-rose-light)") : "var(--madel-bg)",
                  display: "flex", alignItems: "flex-start", gap: 10,
                }}>
                  {g.obligatoire ? (
                    <span style={{ fontSize: 16, flexShrink: 0 }}>🔒</span>
                  ) : (
                    <input type="checkbox" checked={g.actif}
                      onChange={e => g.setActif?.(e.target.checked)}
                      style={{ accentColor: "var(--madel-rose)", flexShrink: 0, marginTop: 3 }} />
                  )}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "var(--madel-navy)" }}>{g.label}</span>
                      <div style={{ display: "flex", gap: 4, flexShrink: 0, marginLeft: 8 }}>
                        {g.obligatoire && <span style={{ fontSize: 9, background: "#A5D6A7", color: "#1B5E20", padding: "1px 6px", borderRadius: 10, fontWeight: 700 }}>Obligatoire</span>}
                        {!g.obligatoire && g.majoration && <span style={{ fontSize: 9, background: "var(--madel-rose-light)", color: "var(--madel-rose)", padding: "1px 6px", borderRadius: 10, fontWeight: 700 }}>+{Math.round((g.majoration ?? 0) * 100)}%</span>}
                      </div>
                    </div>
                    <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 2, lineHeight: 1.4 }}>{g.desc}</div>
                  </div>
                </div>
              ))}
            </Card>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Loi Lemoine */}
            <div style={{ background: "var(--madel-blue-light)", borderRadius: 14, border: "1px solid #B5D4F4", padding: "16px 18px" }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: "var(--madel-navy)", marginBottom: 10 }}>
                📜 Loi Lemoine 2022 — Ce qui change
              </div>
              {[
                { icone: "✅", titre: "Résiliation à tout moment", desc: "Depuis le 1er juin 2022, l'emprunteur peut résilier et changer d'assurance à tout moment, sans frais ni pénalités." },
                { icone: "✅", titre: "Droit à l'oubli étendu", desc: "Ancienneté du cancer réduite à 5 ans (au lieu de 10). Pathologies cardiovasculaires incluses." },
                { icone: "✅", titre: "Suppression questionnaire médical", desc: "Pour les prêts ≤ 200 000 € remboursés avant 60 ans, le questionnaire médical est supprimé." },
                { icone: "⚠️", titre: "Convention AERAS maintenue", desc: "S'assurer et Emprunter avec un Risque Aggravé de Santé — dispositif d'accès à l'assurance pour les personnes malades." },
              ].map(item => (
                <div key={item.titre} style={{ display: "flex", gap: 8, marginBottom: 8, padding: "7px 10px", borderRadius: 8, background: "rgba(255,255,255,.6)" }}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>{item.icone}</span>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "var(--madel-navy)" }}>{item.titre}</div>
                    <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1, lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Exclusions courantes */}
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
              <div style={{ padding: "11px 16px", background: "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)", fontSize: 12, fontWeight: 700 }}>
                🚫 Exclusions courantes à connaître
              </div>
              <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 5 }}>
                {[
                  "Suicide dans la 1ère année du contrat",
                  "Sports extrêmes et activités dangereuses non déclarées",
                  "Guerre, émeutes, actes de terrorisme (selon contrat)",
                  "Arrêts de travail liés à des affections psych. non déclarées",
                  "Maladies préexistantes non déclarées lors de la souscription",
                  "ITT sans exercice d'activité professionnelle (sans emploi)",
                ].map((ex, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6, fontSize: 11, color: "var(--madel-text)" }}>
                    <span style={{ color: "var(--madel-rose)", flexShrink: 0 }}>✕</span>
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── AMORTISSEMENT ─────────────────────────────────────── */}
      {onglet === "amortissement" && (
        <div>
          <div style={{ marginBottom: 12, padding: "10px 14px", borderRadius: 10, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", fontSize: 11, color: "var(--madel-info)" }}>
            📚 Ce tableau montre l'évolution annuelle du capital restant dû, des intérêts, et du coût de l'assurance sur toute la durée du prêt. Total sur {duree} ans : <strong>{eur(capital + calculs.coutTotalCredit + calculs.coutTotalAss)}</strong>
          </div>
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                <thead>
                  <tr style={{ background: "var(--madel-navy)", color: "#fff" }}>
                    {["Année", "Capital début", "Intérêts", "Amortissement", "Capital fin", "Assurance/an", "Total annuel"].map(h => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: h === "Année" ? "left" : "right", fontWeight: 700, whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {calculs.lignesAmort.map((l, i) => (
                    <tr key={l.annee} style={{ background: i % 2 === 0 ? "#fff" : "var(--madel-bg)", borderBottom: "1px solid var(--madel-border)" }}>
                      <td style={{ padding: "7px 12px", fontWeight: 700, color: "var(--madel-navy)" }}>Année {l.annee}</td>
                      <td style={{ padding: "7px 12px", textAlign: "right", fontFamily: "monospace", color: "var(--madel-muted)" }}>{eur(l.capitalDebut)}</td>
                      <td style={{ padding: "7px 12px", textAlign: "right", fontFamily: "monospace", color: "#4A8FD4" }}>{eur(l.interets)}</td>
                      <td style={{ padding: "7px 12px", textAlign: "right", fontFamily: "monospace", color: "var(--madel-success)" }}>{eur(l.amortissement)}</td>
                      <td style={{ padding: "7px 12px", textAlign: "right", fontFamily: "monospace", color: "var(--madel-navy)", fontWeight: 600 }}>{eur(l.capitalFin)}</td>
                      <td style={{ padding: "7px 12px", textAlign: "right", fontFamily: "monospace", color: "var(--madel-rose)" }}>{eur(l.assurance)}</td>
                      <td style={{ padding: "7px 12px", textAlign: "right", fontFamily: "monospace", fontWeight: 700, color: "var(--madel-navy)" }}>{eur(l.totalAnnee)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr style={{ background: "var(--madel-navy)" }}>
                    <td style={{ padding: "10px 12px", fontWeight: 800, color: "#fff" }}>TOTAL</td>
                    <td style={{ padding: "10px 12px" }} />
                    <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "monospace", fontWeight: 700, color: "#93C5FD" }}>{eur(calculs.coutTotalCredit)}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "monospace", fontWeight: 700, color: "#86EFAC" }}>{eur(capital)}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "monospace", color: "rgba(255,255,255,.5)" }}>0 €</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "monospace", fontWeight: 700, color: "#FCA5A5" }}>{eur(calculs.coutTotalAss)}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "monospace", fontWeight: 800, color: "#fff" }}>{eur(capital + calculs.coutTotalCredit + calculs.coutTotalAss)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── DÉLÉGATION D'ASSURANCE ────────────────────────────── */}
      {onglet === "delegation" && (
        <div>
          <div style={{ marginBottom: 14, padding: "12px 16px", borderRadius: 10, background: "#FEF8EE", border: "1px solid #E8B86D", fontSize: 12, color: "#7B4F00" }}>
            💡 <strong>Délégation d'assurance :</strong> Depuis la loi Lemoine (2022), vous pouvez souscrire votre assurance emprunteur auprès d'un assureur différent de votre banque et en changer à tout moment. Cela peut générer des économies substantielles.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
            {/* Contrat groupe */}
            <div style={{ background: "#fff", borderRadius: 14, border: "2px solid var(--madel-border)", overflow: "hidden" }}>
              <div style={{ padding: "14px 18px", background: "#F5F5F5", borderBottom: "1px solid var(--madel-border)" }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: "#666" }}>🏦 Contrat groupe bancaire</div>
                <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>Proposé par votre banque — taux unique non individualisé</div>
              </div>
              <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { l: "Taux moyen annuel", v: pct(calculs.tauxFinal1 * TAUX_GROUPE_BANCAIRE_MAJORATION) },
                  { l: "Prime mensuelle", v: eurDec(calculs.primeGroupeTotale) },
                  { l: "Coût total sur " + duree + " ans", v: eur(calculs.coutTotalGroupe) },
                  { l: "TAEA groupe", v: pct(calculs.taeaGroupe) },
                ].map(item => (
                  <div key={item.l} style={{ display: "flex", justifyContent: "space-between", padding: "6px 8px", borderRadius: 7, background: "#F5F5F5" }}>
                    <span style={{ fontSize: 11, color: "#666" }}>{item.l}</span>
                    <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: 12, color: "#444" }}>{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Délégation */}
            <div style={{ background: "#fff", borderRadius: 14, border: "2px solid var(--madel-rose)", overflow: "hidden" }}>
              <div style={{ padding: "14px 18px", background: "var(--madel-rose-light)", borderBottom: "1px solid var(--madel-rose-mid)" }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: "var(--madel-rose-dark)" }}>🛡️ Assurance en délégation</div>
                <div style={{ fontSize: 11, color: "var(--madel-rose)", marginTop: 2 }}>Tarif individualisé — votre profil réel</div>
              </div>
              <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { l: "Taux annuel personnalisé", v: pct(calculs.tauxFinal1) },
                  { l: "Prime mensuelle", v: eurDec(calculs.primeAssTotale) },
                  { l: "Coût total sur " + duree + " ans", v: eur(calculs.coutTotalAss) },
                  { l: "TAEA délégation", v: pct(calculs.taea) },
                ].map(item => (
                  <div key={item.l} style={{ display: "flex", justifyContent: "space-between", padding: "6px 8px", borderRadius: 7, background: "var(--madel-rose-light)" }}>
                    <span style={{ fontSize: 11, color: "var(--madel-rose-dark)" }}>{item.l}</span>
                    <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: 12, color: "var(--madel-rose-dark)" }}>{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Économie */}
          <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 24px", marginBottom: 14 }}>
            <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 10 }}>Économie réalisée par la délégation</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { l: "Économie mensuelle", v: eurDec(calculs.primeGroupeTotale - calculs.primeAssTotale), grand: false },
                { l: `Économie sur ${duree} ans`, v: eur(calculs.economieGroupe), grand: true },
                { l: "Soit une réduction de", v: `${Math.round((calculs.economieGroupe / calculs.coutTotalGroupe) * 100)}%`, grand: false },
              ].map(item => (
                <div key={item.l} style={{ background: "rgba(255,255,255,.08)", borderRadius: 10, padding: "14px 16px", textAlign: "center" }}>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,.5)", marginBottom: 4 }}>{item.l}</div>
                  <div style={{ fontSize: item.grand ? 28 : 18, fontWeight: 800, color: item.grand ? "#86EFAC" : "#fff", fontFamily: "monospace" }}>{item.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lois */}
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 10 }}>📜 Évolution législative — À connaître pour le BTS</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { annee: "2010", loi: "Loi Lagarde", desc: "Liberté de choisir son assurance emprunteur dès la souscription. Obligation d'afficher le TAEA." },
                { annee: "2014", loi: "Loi Hamon", desc: "Résiliation possible dans les 12 mois suivant la signature du prêt." },
                { annee: "2017", loi: "Amendement Bourquin", desc: "Résiliation annuelle à la date anniversaire pour les contrats en cours." },
                { annee: "2022", loi: "Loi Lemoine", desc: "Résiliation à tout moment, sans frais. Questionnaire médical supprimé sous conditions. Droit à l'oubli renforcé." },
              ].map(item => (
                <div key={item.annee} style={{ padding: "10px 12px", borderRadius: 9, background: "var(--madel-bg)", border: "1px solid var(--madel-border)" }}>
                  <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 9, background: "var(--madel-navy)", color: "#fff", padding: "2px 6px", borderRadius: 8, fontWeight: 700 }}>{item.annee}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "var(--madel-navy)" }}>{item.loi}</span>
                  </div>
                  <div style={{ fontSize: 10, color: "var(--madel-muted)", lineHeight: 1.4 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Souscription depuis fiche assuré ── */}
      <BoutonSouscription
        isFromFiche={isFromFiche}
        client={client}
        mode={mode}
        primeAnnuelle={Math.round(calculs.primeAssTotale * 12)}
        onSouscrire={() => souscrire(Math.round(calculs.primeAssTotale * 12))}
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
      <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 5 }}>{label}</label>
      {children}
    </div>
  );
}

function Slider({ label, min, max, step, value, onChange, formatLeft, formatRight }: {
  label: string; min: number; max: number; step: number;
  value: number; onChange: (v: number) => void;
  formatLeft: string; formatRight: string;
}) {
  return (
    <Champ label={label}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(+e.target.value)}
          style={{ flex: 1, accentColor: "var(--madel-rose)" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--madel-muted)", marginTop: 1 }}>
        <span>{formatLeft}</span><span>{formatRight}</span>
      </div>
    </Champ>
  );
}

const selectStyle: React.CSSProperties = {
  width: "100%", padding: "8px 10px", borderRadius: 8,
  border: "1.5px solid var(--madel-border)", fontSize: 12,
  fontFamily: "var(--madel-font)", color: "var(--madel-navy)",
  background: "#fff", outline: "none", cursor: "pointer", appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238A86A0'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat", backgroundPosition: "right 9px center", boxSizing: "border-box",
};
