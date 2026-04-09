// ============================================================
// SIMULATEUR AUTO — Version finale complète
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState, useCallback } from "react";
import type {
  SimulateurAutoInput, ResultatSimulateurAuto,
  FormuleGarantie, UsagePrincipal, TypeVehicule,
  ZoneGeographique, OptionAuto,
} from "./types";
import { calculerPrimeAuto } from "./calcul";
import { useRecherchePlaque, vehiculeVersInput } from "./useRecherchePlaque";
import ChampPlaque from "./ChampPlaque";
import AntecedentsDrawer, { type DonneesAntecedents } from "./AntecedentsDrawer";
import type { VehiculeDB } from "./tables/vehicules-db";

// ── Constantes ───────────────────────────────────────────────

const ANNEE = new Date().getFullYear();

const defaultInput: SimulateurAutoInput = {
  agePrincipal: 35, anneesPermis: 15, bonusMalus: 0.80,
  typeVehicule: "berline", puissanceFiscale: 7,
  valeurVehicule: 12000, anneeMiseEnCirculation: 2019,
  usagePrincipal: "promenade_travail", kmAnnuels: 12000,
  zoneGeographique: "zone3", formule: "tiers_plus", options: [],
};

// ── Composant principal ──────────────────────────────────────

export default function SimulateurAuto() {
  const [input, setInput]         = useState<SimulateurAutoInput>(defaultInput);
  const [datePermis, setDatePermis] = useState("2009-06-15");
  const [bmTexte, setBmTexte]     = useState("0.80");
  const [bmErreur, setBmErreur]   = useState<string | null>(null);
  const [vehicule, setVehicule]   = useState<VehiculeDB | null>(null);
  const [valMajActive, setValMajActive] = useState(false);
  const [antecedents, setAntecedents] = useState<DonneesAntecedents | null>(null);
  const [resultat, setResultat]   = useState<ResultatSimulateurAuto | null>(null);
  const [onglet, setOnglet]       = useState<"resume" | "detail" | "garanties">("resume");

  // Connexion plaque → formulaire
  const handleVehiculeCharge = useCallback((v: VehiculeDB) => {
    setVehicule(v);
    setInput(prev => ({ ...prev, ...vehiculeVersInput(v, prev) }));
    setValMajActive(false);
    setResultat(null);
  }, []);

  const recherche = useRecherchePlaque(handleVehiculeCharge);

  const setField = <K extends keyof SimulateurAutoInput>(k: K, v: SimulateurAutoInput[K]) => {
    setInput(prev => ({ ...prev, [k]: v }));
    setResultat(null);
  };

  const handleDatePermis = (v: string) => {
    setDatePermis(v);
    const ans = v ? Math.max(0, ANNEE - new Date(v).getFullYear()) : 0;
    setField("anneesPermis", ans);
  };

  const handleBM = (v: string) => {
    setBmTexte(v);
    const n = parseFloat(v.replace(",", "."));
    if (isNaN(n))     { setBmErreur("Saisissez un nombre (ex : 0.80)"); return; }
    if (n < 0.50)     { setBmErreur("Minimum légal : 0.50"); return; }
    if (n > 3.50)     { setBmErreur("Maximum légal : 3.50"); return; }
    setBmErreur(null);
    setField("bonusMalus", n);
  };

  const toggleOption = (opt: OptionAuto) => {
    setInput(prev => ({
      ...prev,
      options: prev.options.includes(opt)
        ? prev.options.filter(o => o !== opt)
        : [...prev.options, opt],
    }));
    setResultat(null);
  };

  const handleValMaj = (on: boolean) => {
    setValMajActive(on);
    if (on && vehicule?.valeurNeuf) setField("valeurVehicule", Math.round(vehicule.valeurNeuf * 1.15));
    else if (!on && vehicule) setField("valeurVehicule", vehicule.valeurEstimee);
  };

  const handleCalculer = () => {
    if (bmErreur) return;
    setResultat(calculerPrimeAuto(input));
    setOnglet("resume");
  };

  const ageVehicule = ANNEE - input.anneeMiseEnCirculation;
  const valMajDispo = ageVehicule <= 2 && vehicule?.valeurNeuf != null;
  const bmN = parseFloat(bmTexte.replace(",", "."));

  const RISK = {
    faible:     { bg: "#EAF3DE", color: "#2E7D32", label: "✅ Risque faible" },
    modere:     { bg: "#FAEEDA", color: "#7B4F00", label: "⚠ Risque modéré" },
    eleve:      { bg: "#FAECE7", color: "#7B1A1A", label: "⛔ Risque élevé" },
    tres_eleve: { bg: "#FCE4EC", color: "#5C0011", label: "🚨 Risque très élevé" },
  };

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      {/* Titre page */}
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🚗 Simulateur Auto</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Coefficients AGIRA officiels · France Assureurs 2023 · 468 véhicules / 2 919 plaques
        </p>
      </div>

      {/* ── GRILLE FORMULAIRE 2 colonnes ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>

        {/* COL GAUCHE — Véhicule */}
        <Card titre="Identification du véhicule" icone="🔍" couleur="rose">
          <div style={{ marginBottom: 10 }}>
            <Label>Plaque d'immatriculation</Label>
            <ChampPlaque recherche={recherche} />
          </div>
          {valMajDispo && vehicule?.valeurNeuf && (
            <label style={{
              display: "flex", alignItems: "flex-start", gap: 8,
              padding: "9px 11px", borderRadius: 8, marginBottom: 10, cursor: "pointer",
              border: `1px solid ${valMajActive ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
              background: valMajActive ? "var(--madel-rose-light)" : "var(--madel-bg)",
            }}>
              <input type="checkbox" checked={valMajActive} onChange={e => handleValMaj(e.target.checked)}
                style={{ accentColor: "var(--madel-rose)", marginTop: 2, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 600 }}>Valeur majorée +15% — véhicule neuf</div>
                <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1 }}>
                  Garantie : {Math.round(vehicule.valeurNeuf * 1.15).toLocaleString("fr-FR")} €
                  {" "}au lieu de {vehicule.valeurEstimee.toLocaleString("fr-FR")} €
                </div>
              </div>
            </label>
          )}
          <div style={grid2}>
            <Champ label="Type de véhicule">
              <Select value={input.typeVehicule} onChange={v => setField("typeVehicule", v as TypeVehicule)}>
                <option value="citadine">Citadine</option>
                <option value="berline">Berline</option>
                <option value="SUV">SUV / Crossover</option>
                <option value="utilitaire">Utilitaire VUL</option>
                <option value="sportive">Sportive</option>
                <option value="ancienne">Collection</option>
              </Select>
            </Champ>
            <Champ label="CV fiscaux">
              <Input type="number" value={input.puissanceFiscale} onChange={v => setField("puissanceFiscale", +v)} min={1} max={30} />
            </Champ>
            <Champ label="Année mise en circulation">
              <Input type="number" value={input.anneeMiseEnCirculation} onChange={v => setField("anneeMiseEnCirculation", +v)} min={1960} max={ANNEE} />
            </Champ>
            <Champ label="Valeur véhicule (€)">
              <Input type="number" value={input.valeurVehicule} onChange={v => setField("valeurVehicule", +v)} min={500} max={200000} step={500} />
            </Champ>
          </div>
        </Card>

        {/* COL DROITE — Conducteur + Usage */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

          <Card titre="Conducteur principal" icone="👤" couleur="blue">
            <div style={grid3}>
              <Champ label="Âge">
                <Input type="number" value={input.agePrincipal} onChange={v => setField("agePrincipal", +v)} min={18} max={90} />
              </Champ>
              <Champ label="Date du permis">
                <Input type="date" value={datePermis} onChange={handleDatePermis} />
                <Hint type={input.anneesPermis < 3 ? "warn" : "muted"}>
                  {input.anneesPermis} an(s) de permis
                  {input.anneesPermis < 3 && " ⚠ Période probatoire"}
                </Hint>
              </Champ>
              <Champ label="CRM">
                <input
                  type="text" value={bmTexte} onChange={e => handleBM(e.target.value)}
                  placeholder="0.80"
                  style={{
                    ...inputBase,
                    fontFamily: "monospace", fontSize: 16, fontWeight: 700,
                    textAlign: "center", letterSpacing: ".08em",
                    borderColor: bmErreur ? "var(--madel-rose)" : "var(--madel-border)",
                    background: bmErreur ? "#FEF5F8" : "#fff",
                  }}
                />
                {bmErreur
                  ? <Hint type="warn">{bmErreur}</Hint>
                  : !isNaN(bmN) && (
                    <Hint type={bmN < 1 ? "ok" : bmN === 1 ? "muted" : "warn"}>
                      {bmN < 1 ? `✅ Bonus — −${Math.round((1 - bmN) * 100)}%`
                        : bmN === 1 ? "Coefficient neutre"
                        : `⚠ Malus +${Math.round((bmN - 1) * 100)}%`}
                    </Hint>
                  )
                }
              </Champ>
            </div>
          </Card>

          <Card titre="Usage & Zone" icone="📍" couleur="rose">
            <div style={grid3}>
              <Champ label="Usage">
                <Select value={input.usagePrincipal} onChange={v => setField("usagePrincipal", v as UsagePrincipal)}>
                  <option value="promenade">Promenade</option>
                  <option value="promenade_travail">Promenade + travail</option>
                  <option value="tournee">Tournée pro</option>
                  <option value="tous_deplacements">Tous déplacements</option>
                </Select>
              </Champ>
              <Champ label="Kilométrage / an">
                <Select value={String(input.kmAnnuels)} onChange={v => setField("kmAnnuels", +v)}>
                  <option value="3000">{"< 5 000 km"}</option>
                  <option value="7000">5 000 – 9 000 km</option>
                  <option value="12000">10 000 – 14 000 km</option>
                  <option value="17000">15 000 – 20 000 km</option>
                  <option value="25000">20 000 – 30 000 km</option>
                  <option value="40000">{"> 30 000 km"}</option>
                </Select>
              </Champ>
              <Champ label="Zone">
                <Select value={input.zoneGeographique} onChange={v => setField("zoneGeographique", v as ZoneGeographique)}>
                  <option value="zone1">Zone 1 — Métropole</option>
                  <option value="zone2">Zone 2 — Ville moy.</option>
                  <option value="zone3">Zone 3 — Périurbain</option>
                  <option value="zone4">Zone 4 — Rural</option>
                </Select>
              </Champ>
            </div>
          </Card>
        </div>
      </div>

      {/* ── ANTÉCÉDENTS — pleine largeur ── */}
      <AntecedentsDrawer onValider={(d) => { setAntecedents(d); setResultat(null); }} />

      {/* ── COUVERTURE — pleine largeur ── */}
      <Card titre="Couverture & Options" icone="🛡️" couleur="blue" fullWidth>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20 }}>

          {/* Formules */}
          <div>
            <Label>Formule de garantie</Label>
            <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 6 }}>
              {([
                { v: "tiers",        dot: "#F5B731", titre: "Tiers",        sub: "RC seule — minimum légal" },
                { v: "tiers_plus",   dot: "#E8722A", titre: "Tiers+",       sub: "Vol · Incendie · Bris de glace" },
                { v: "tous_risques", dot: "#4A8FD4", titre: "Tous risques", sub: "Couverture totale" },
              ] as { v: FormuleGarantie; dot: string; titre: string; sub: string }[]).map(f => (
                <button key={f.v} onClick={() => setField("formule", f.v)} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 14px", borderRadius: 10, textAlign: "left", width: "100%",
                  border: `2px solid ${input.formule === f.v ? "var(--madel-rose)" : "var(--madel-border)"}`,
                  background: input.formule === f.v ? "var(--madel-rose-light)" : "#fff",
                  cursor: "pointer", fontFamily: "var(--madel-font)",
                }}>
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: f.dot, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: input.formule === f.v ? 700 : 500, color: input.formule === f.v ? "var(--madel-rose-dark)" : "var(--madel-navy)" }}>{f.titre}</div>
                    <div style={{ fontSize: 10, color: input.formule === f.v ? "var(--madel-rose)" : "var(--madel-muted)", marginTop: 1 }}>{f.sub}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Options */}
          <div>
            <Label>Options complémentaires</Label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 6 }}>
              {([
                ["protection_juridique",     "Protection juridique",      "+42 €/an"],
                ["assistance_0km",           "Assistance 0 km",           "+38 €/an"],
                ["vehicule_de_remplacement", "Véhicule de remplacement",  "+55 €/an"],
                ["conducteur_exclusif",      "Conducteur exclusif",       "−25 €/an"],
                ["jeune_conducteur_accomp",  "Conduite accomp. AAC",      "−60 €/an"],
                ["rachat_franchise",         "Rachat de franchise",       "+95 €/an"],
              ] as [OptionAuto, string, string][]).map(([opt, label, prix]) => (
                <label key={opt} style={{
                  display: "flex", alignItems: "flex-start", gap: 7,
                  padding: "8px 10px", borderRadius: 8, cursor: "pointer",
                  border: `1.5px solid ${input.options.includes(opt) ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
                  background: input.options.includes(opt) ? "var(--madel-rose-light)" : "#fff",
                  transition: "all .15s",
                }}>
                  <input type="checkbox" checked={input.options.includes(opt)}
                    onChange={() => toggleOption(opt)}
                    style={{ accentColor: "var(--madel-rose)", marginTop: 1, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 500, color: "var(--madel-navy)" }}>{label}</div>
                    <div style={{ fontSize: 9, color: "var(--madel-muted)" }}>{prix}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* ── BOUTON CALCULER ── */}
      <button
        onClick={handleCalculer}
        disabled={!!bmErreur}
        style={{
          width: "100%", background: bmErreur ? "var(--madel-border)" : "var(--madel-rose)",
          color: "#fff", border: "none", borderRadius: 12, padding: 14,
          fontSize: 15, fontWeight: 700, cursor: bmErreur ? "not-allowed" : "pointer",
          fontFamily: "var(--madel-font)", marginBottom: 14, letterSpacing: ".02em",
        }}
      >
        Calculer la prime Madel →
      </button>

      {/* ── RÉSULTATS — pleine largeur ── */}
      {!resultat ? (
        <div style={{
          border: "2px dashed var(--madel-border)", borderRadius: 14,
          padding: 36, textAlign: "center", color: "var(--madel-muted)",
          lineHeight: 1.8, background: "#fff",
        }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>📊</div>
          Complétez le profil et cliquez sur{" "}
          <strong style={{ color: "var(--madel-rose)" }}>Calculer la prime Madel</strong>
        </div>
      ) : (
        <div>
          {/* Bandeau prime */}
          <div style={{
            background: "var(--madel-navy)", borderRadius: 14,
            padding: "20px 28px", marginBottom: 14,
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr auto auto",
            alignItems: "center",
          }}>
            <div>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 4 }}>Prime annuelle TTC</div>
              <div style={{ fontSize: 38, fontWeight: 800, color: "#fff", letterSpacing: "-1px", lineHeight: 1 }}>
                {resultat.primeAnnuelle.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)", marginTop: 4 }}>
                soit <strong style={{ color: "#fff" }}>
                  {resultat.primeMensuelle.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                </strong> / mois
              </div>
            </div>
            <div style={{ width: 1, height: 40, background: "rgba(255,255,255,.15)", margin: "0 24px" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)", marginBottom: 4 }}>Prime nette HT</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>
                {resultat.primeHT.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €
              </div>
            </div>
            <div style={{ width: 1, height: 40, background: "rgba(255,255,255,.15)", margin: "0 24px" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)", marginBottom: 4 }}>Taxes & contributions</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>
                {resultat.taxesEtContributions.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €
              </div>
            </div>
            <div style={{ marginLeft: 24 }}>
              <span style={{
                padding: "5px 14px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                background: RISK[resultat.niveauRisque].bg,
                color: RISK[resultat.niveauRisque].color,
              }}>
                {RISK[resultat.niveauRisque].label}
              </span>
            </div>
          </div>

          {/* Onglets */}
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden", marginBottom: 10 }}>
            <div style={{ display: "flex", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)" }}>
              {(["resume", "detail", "garanties"] as const).map(tab => (
                <button key={tab} onClick={() => setOnglet(tab)} style={{
                  flex: 1, padding: 10, border: "none",
                  background: onglet === tab ? "#fff" : "transparent",
                  color: onglet === tab ? "var(--madel-rose)" : "var(--madel-muted)",
                  fontWeight: onglet === tab ? 700 : 500,
                  fontSize: 11, cursor: "pointer",
                  borderBottom: `2px solid ${onglet === tab ? "var(--madel-rose)" : "transparent"}`,
                  fontFamily: "var(--madel-font)",
                }}>
                  {tab === "resume" ? "Résumé" : tab === "detail" ? "Détail du calcul" : "Garanties incluses"}
                </button>
              ))}
            </div>
            <div style={{ padding: "16px 18px" }}>
              {onglet === "resume" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <div style={sectionLabel}>Facteurs de risque</div>
                    {resultat.facteursPrincipauxRisque.length > 0
                      ? resultat.facteursPrincipauxRisque.map((f, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6, fontSize: 11, padding: "2px 0" }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--madel-rose)", marginTop: 4, flexShrink: 0 }} />
                          {f}
                        </div>
                      ))
                      : <div style={{ fontSize: 11, color: "var(--madel-muted)" }}>Profil standard — aucun facteur aggravant.</div>
                    }
                  </div>
                  <div>
                    <div style={sectionLabel}>Franchises applicables</div>
                    {resultat.franchises.length > 0
                      ? resultat.franchises.map((f, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 11, padding: "5px 0", borderBottom: "1px solid var(--madel-border)" }}>
                          <span style={{ color: "var(--madel-text)" }}>{f.type}</span>
                          <span style={{ fontWeight: 700 }}>{f.montant === 0 ? "Rachetée" : `${f.montant} €`}</span>
                        </div>
                      ))
                      : <div style={{ fontSize: 11, color: "var(--madel-muted)" }}>Aucune franchise applicable.</div>
                    }
                  </div>
                </div>
              )}
              {onglet === "detail" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--madel-border)", borderRadius: 10, overflow: "hidden" }}>
                  {[
                    ["Prime de base",       `${resultat.detail.primeBaseReference} €`],
                    ["× CRM (Bonus/Malus)", `× ${resultat.detail.coefficientBonusMalus}`],
                    ["× Âge conducteur",   `× ${resultat.detail.coefficientAge}`],
                    ["× Usage",            `× ${resultat.detail.coefficientUsage}`],
                    ["× Kilométrage",      `× ${resultat.detail.coefficientKm}`],
                    ["× Zone",             `× ${resultat.detail.coefficientZone}`],
                    ["× Puissance",        `× ${resultat.detail.coefficientVehicule}`],
                    ["× Formule",          `× ${resultat.detail.coefficientFormule}`],
                    ["× Marge cabinet",    "× 1.08"],
                    ["+ Options",          `+ ${resultat.detail.montantOptions} €`],
                    ["= Prime nette HT",   `${resultat.detail.primeNette} €`],
                    ["+ TCA 18%",          `+ ${(resultat.detail.primeNette * 0.18).toFixed(2)} €`],
                    ["+ Attentat + FGAO",  "+ 7.10 €"],
                  ].map(([l, v]) => (
                    <div key={l} style={{
                      background: l.startsWith("=") ? "var(--madel-navy)" : "#fff",
                      color: l.startsWith("=") ? "#fff" : "var(--madel-text)",
                      padding: l.startsWith("=") ? "8px 14px" : "7px 14px",
                      display: "flex", justifyContent: "space-between",
                      fontSize: 11, fontWeight: l.startsWith("=") ? 700 : 400,
                      gridColumn: l.startsWith("=") ? "span 1" : "auto",
                    }}>
                      <span>{l}</span>
                      <span style={{ fontFamily: "monospace" }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ background: "var(--madel-navy)", color: "#fff", padding: "8px 14px", display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, gridColumn: "span 2" }}>
                    <span>= Prime TTC annuelle</span>
                    <span style={{ fontFamily: "monospace" }}>
                      {resultat.primeAnnuelle.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €
                    </span>
                  </div>
                </div>
              )}
              {onglet === "garanties" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {resultat.garanties.map((g, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: 8,
                      padding: "9px 11px", borderRadius: 9, fontSize: 11,
                      background: g.incluse ? "var(--madel-blue-light)" : "var(--madel-bg)",
                      border: `1px solid ${g.incluse ? "#B5D4F4" : "var(--madel-border)"}`,
                      opacity: g.incluse ? 1 : 0.6,
                    }}>
                      <span style={{ fontSize: 13 }}>{g.incluse ? "✅" : "❌"}</span>
                      <div>
                        <div style={{ fontWeight: 700, color: "var(--madel-navy)" }}>{g.nom}</div>
                        <div style={{ color: "var(--madel-muted)", fontSize: 10, marginTop: 1, lineHeight: 1.4 }}>{g.description}</div>
                        {g.incluse && g.franchise !== undefined && (
                          <div style={{ fontSize: 9, color: "var(--madel-rose)", marginTop: 2 }}>
                            Franchise : {g.franchise === 0 ? "Aucune" : `${g.franchise} €`}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Alertes */}
          {resultat.alertes.map((a, i) => (
            <div key={i} style={{
              padding: "10px 14px", borderRadius: 10, marginBottom: 8,
              background: a.niveau === "important" ? "#FCEBEB" : a.niveau === "attention" ? "#FAEEDA" : "var(--madel-blue-light)",
              borderLeft: `3px solid ${a.niveau === "important" ? "var(--madel-rose)" : a.niveau === "attention" ? "#E8722A" : "var(--madel-blue)"}`,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, marginBottom: a.conseil ? 3 : 0, color: a.niveau === "important" ? "var(--madel-rose-dark)" : a.niveau === "attention" ? "#633806" : "var(--madel-navy)" }}>
                {a.message}
              </div>
              {a.conseil && <div style={{ fontSize: 10, color: "var(--madel-text)", lineHeight: 1.5 }}>💡 {a.conseil}</div>}
            </div>
          ))}

          {/* Alertes antécédents */}
          {antecedents?.alertes.filter(a => a.niveau === "rouge").map((a, i) => (
            <div key={i} style={{
              padding: "10px 14px", borderRadius: 10, marginBottom: 8,
              background: "#FCEBEB", borderLeft: "3px solid var(--madel-rose)",
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--madel-rose-dark)" }}>
                📋 Antécédent : {a.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Sous-composants ──────────────────────────────────────────

function Card({ titre, icone, couleur, children, fullWidth }: {
  titre: string; icone: string; couleur: "rose" | "blue";
  children: React.ReactNode; fullWidth?: boolean;
}) {
  return (
    <div style={{
      background: "#fff", borderRadius: 14,
      border: "1px solid var(--madel-border)",
      overflow: "visible",
      marginBottom: fullWidth ? 14 : 0,
    }}>
      <div style={{
        padding: "11px 16px", borderBottom: "1px solid var(--madel-border)",
        display: "flex", alignItems: "center", gap: 8,
        background: "var(--madel-bg)", borderRadius: "14px 14px 0 0",
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: 8, fontSize: 14,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: couleur === "rose" ? "var(--madel-rose-light)" : "var(--madel-blue-light)",
        }}>{icone}</div>
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--madel-navy)" }}>{titre}</span>
      </div>
      <div style={{ padding: 14 }}>{children}</div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 4 }}>
      {children}
    </label>
  );
}

function Champ({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><Label>{label}</Label>{children}</div>;
}

function Hint({ type, children }: { type: "ok" | "warn" | "muted"; children: React.ReactNode }) {
  const colors = { ok: "#2E7D32", warn: "var(--madel-rose)", muted: "var(--madel-muted)" };
  return <div style={{ fontSize: 10, marginTop: 3, color: colors[type] }}>{children}</div>;
}

function Input({ value, onChange, type, min, max, step }: {
  value: string | number; onChange: (v: string) => void;
  type?: string; min?: number; max?: number; step?: number;
}) {
  return (
    <input type={type || "text"} value={value} min={min} max={max} step={step}
      onChange={e => onChange(e.target.value)} style={inputBase} />
  );
}

function Select({ value, onChange, children }: {
  value: string; onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)} style={selectBase}>
      {children}
    </select>
  );
}

// ── Styles ───────────────────────────────────────────────────

const inputBase: React.CSSProperties = {
  width: "100%", padding: "8px 10px", borderRadius: 8,
  border: "1.5px solid var(--madel-border)", fontSize: 12,
  fontFamily: "var(--madel-font)", color: "var(--madel-navy)",
  background: "#fff", outline: "none",
};

const selectBase: React.CSSProperties = {
  ...inputBase, appearance: "none", cursor: "pointer", paddingRight: 26,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238A86A0'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat", backgroundPosition: "right 9px center",
};

const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 };
const grid3: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 };
const sectionLabel: React.CSSProperties = { fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 6 };
