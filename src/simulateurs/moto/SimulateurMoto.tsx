// ============================================================
// SIMULATEUR MOTO — Interface utilisateur
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState, useCallback } from "react";
import type {
  SimulateurMotoInput, ResultatSimulateurMoto,
  TypeMoto, CategoriePeermis, UsageMoto,
  FormuleGarantieMoto, OptionMoto,
} from "./types";
import { calculerPrimeMoto } from "./calcul";
import { useRecherchePlaqueMoto } from "./useRecherchePlaqueMoto";
import ChampPlaqueMoto from "./ChampPlaqueMoto";
import type { MotoVehiculeDB } from "./tables/motos-db";
import { useSimulateurSouscription, BoutonSouscription } from "../../hooks/useSimulateurSouscription";

// ── Valeurs par défaut ───────────────────────────────────────
const ANNEE = new Date().getFullYear();

const defaultInput: SimulateurMotoInput = {
  agePrincipal: 28,
  anneesPermis: 4,
  categoriePermis: "A2",
  bonusMalus: 0.90,
  typeMoto: "moto_moyenne",
  cylindree: 400,
  puissanceKw: 35,
  valeurMoto: 6500,
  anneeMiseEnCirculation: 2021,
  usagePrincipal: "quotidien",
  kmAnnuels: 8000,
  zoneGeographique: "zone3",
  garageeFermee: false,
  formule: "tiers_plus",
  options: [],
  autoAssureeMadel: false,
};

const RISK_STYLE = {
  faible:     { bg: "#EAF3DE", color: "#2E7D32", label: "✅ Risque faible" },
  modere:     { bg: "#FAEEDA", color: "#7B4F00", label: "⚠ Risque modéré" },
  eleve:      { bg: "#FAECE7", color: "#7B1A1A", label: "⛔ Risque élevé" },
  tres_eleve: { bg: "#FCE4EC", color: "#5C0011", label: "🚨 Risque très élevé" },
};

// ── Composant ────────────────────────────────────────────────
export default function SimulateurMoto() {
  const [input, setInput]           = useState<SimulateurMotoInput>(defaultInput);
  const [datePermis, setDatePermis] = useState("2020-06-15");
  const [bmTexte, setBmTexte]       = useState("0.90");
  const [bmErreur, setBmErreur]     = useState<string | null>(null);
  const [resultat, setResultat]     = useState<ResultatSimulateurMoto | null>(null);
  const [onglet, setOnglet]         = useState<"resume" | "detail" | "garanties">("resume");
  const [lieuStationnement, setLieuStationnement] = useState<"rue" | "parking_public" | "parking_prive" | "garage_ferme">("parking_prive");
  // Hook souscription — connecte le simulateur à la fiche assuré
  const { client, mode, isFromFiche, souscrire } = useSimulateurSouscription("moto");

  // Détection automatique contrat auto
  const handleAutoDetectee = useCallback((detected: boolean) => {
    setInput(prev => ({ ...prev, autoAssureeMadel: detected }));
    setResultat(null);
  }, []);

  // Chargement moto depuis la plaque
  const handleMotoChargee = useCallback((moto: MotoVehiculeDB) => {
    setInput(prev => ({
      ...prev,
      typeMoto:               moto.typeMoto as TypeMoto,
      cylindree:              moto.cylindree ?? prev.cylindree,
      puissanceKw:            moto.puissanceKw,
      valeurMoto:             moto.valeurEstimee,
      anneeMiseEnCirculation: moto.annee,
    }));
    setResultat(null);
  }, []);

  const recherche = useRecherchePlaqueMoto(handleMotoChargee, handleAutoDetectee);

  const setField = <K extends keyof SimulateurMotoInput>(k: K, v: SimulateurMotoInput[K]) => {
    setInput(prev => ({ ...prev, [k]: v }));
    setResultat(null);
  };

  const COEFF_STATIONNEMENT_MOTO: Record<string, { coeff: number; garage: boolean }> = {
    rue:            { coeff: 1.20, garage: false },  // +20% — vol très exposé
    parking_public: { coeff: 1.10, garage: false },  // +10% — couvert mais non sécurisé
    parking_prive:  { coeff: 1.00, garage: false },  // référence
    garage_ferme:   { coeff: 0.88, garage: true  },  // −12% — calcul.ts applique COEFFICIENT_GARAGE_FERME
  };

  const handleLieuStationnement = (lieu: typeof lieuStationnement) => {
    setLieuStationnement(lieu);
    setField("garageeFermee", COEFF_STATIONNEMENT_MOTO[lieu].garage);
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
    if (isNaN(n))  { setBmErreur("Saisissez un nombre (ex : 0.90)"); return; }
    if (n < 0.50)  { setBmErreur("Minimum légal : 0.50"); return; }
    if (n > 3.50)  { setBmErreur("Maximum légal : 3.50"); return; }
    setBmErreur(null);
    setField("bonusMalus", n);
  };

  const toggleOption = (opt: OptionMoto) => {
    setInput(prev => ({
      ...prev,
      options: prev.options.includes(opt)
        ? prev.options.filter(o => o !== opt)
        : [...prev.options, opt],
    }));
    setResultat(null);
  };

  const handleCalculer = () => {
    if (bmErreur) return;
    setResultat(calculerPrimeMoto(input));
    setOnglet("resume");
  };

  const bmN = parseFloat(bmTexte.replace(",", "."));

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      {/* Titre */}
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🏍️ Simulateur Moto</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Tarification moto · Coefficients AGIRA · France Assureurs 2023
        </p>
      </div>

      {/* Bannière assuré détecté */}
      {recherche.assureNom && (
        <div style={{
          marginBottom: 14, padding: "12px 16px", borderRadius: 12,
          background: "var(--madel-navy)", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 20 }}>👤</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13 }}>Devis pour : {recherche.assureNom}</div>
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginTop: 2 }}>
                Simulation liée au dossier assuré
              </div>
            </div>
          </div>
          {/* Badge multi-détention */}
          {recherche.autoDetectee ? (
            <div style={{
              background: "var(--madel-success-bg)", color: "var(--madel-success)",
              borderRadius: 10, padding: "8px 14px", textAlign: "center",
            }}>
              <div style={{ fontWeight: 700, fontSize: 12 }}>✅ Contrat Auto détecté</div>
              <div style={{ fontSize: 10, marginTop: 2 }}>
                {recherche.numeroContratAuto} · Réduction −30% appliquée automatiquement
              </div>
            </div>
          ) : (
            <div style={{
              background: "rgba(255,255,255,.1)", borderRadius: 10,
              padding: "8px 14px", textAlign: "center",
            }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)" }}>Pas de contrat auto actif</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.5)", marginTop: 2 }}>
                Souscrire un auto = −30% sur la moto
              </div>
            </div>
          )}
        </div>
      )}

      {/* Grille formulaire 2 colonnes */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>

        {/* COL GAUCHE — Moto */}
        <Card titre="Identification de la moto" icone="🏍️" couleur="rose">
          {/* Recherche par plaque */}
          <div style={{ marginBottom: 12 }}>
            <Champ label="Plaque d'immatriculation">
              <ChampPlaqueMoto recherche={recherche} />
            </Champ>
          </div>
          <div style={grid2}>
            <Champ label="Type de moto">
              <Select value={input.typeMoto} onChange={v => setField("typeMoto", v as TypeMoto)}>
                <option value="scooter_50">Scooter 50cc</option>
                <option value="scooter_125">Scooter 125cc</option>
                <option value="moto_125">Moto 125cc</option>
                <option value="moto_moyenne">Moto 126–500cc</option>
                <option value="moto_500">Moto &gt; 500cc (A2 progressif)</option>
                <option value="moto_grosse">Grosse cylindrée &gt; 500cc</option>
                <option value="moto_sportive">Sportive haute performance</option>
                <option value="moto_custom">Custom / Cruiser</option>
                <option value="moto_trail">Trail / Adventure</option>
                <option value="side_car">Side-car</option>
              </Select>
            </Champ>
            <Champ label="Cylindrée (cm³)">
              <Input type="number" value={input.cylindree} onChange={v => setField("cylindree", +v)} min={49} max={2500} />
            </Champ>
            <Champ label="Puissance (kW)">
              <Input type="number" value={input.puissanceKw} onChange={v => setField("puissanceKw", +v)} min={1} max={250} />
            </Champ>
            <Champ label="Valeur de la moto (€)">
              <Input type="number" value={input.valeurMoto} onChange={v => setField("valeurMoto", +v)} min={200} max={80000} step={200} />
            </Champ>
            <Champ label="Année mise en circulation">
              <Input type="number" value={input.anneeMiseEnCirculation} onChange={v => setField("anneeMiseEnCirculation", +v)} min={1970} max={ANNEE} />
            </Champ>
            <Champ label="Lieu de stationnement habituel">
              <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 2 }}>
                {([
                  { v: "rue",            icone: "🛣️", label: "Rue / espace public",      impact: "+20% vol",   couleur: "#DC2626", bg: "#FEF2F2" },
                  { v: "parking_public", icone: "🏢", label: "Parking public couvert",    impact: "+10% vol",   couleur: "#D97706", bg: "#FFFBEB" },
                  { v: "parking_prive",  icone: "🔑", label: "Parking privé / résidence", impact: "Référence",  couleur: "#059669", bg: "#F0FDF4" },
                  { v: "garage_ferme",   icone: "🔒", label: "Box / garage fermé",         impact: "−12% vol",   couleur: "#2563EB", bg: "#EFF6FF" },
                ] as { v: typeof lieuStationnement; icone: string; label: string; impact: string; couleur: string; bg: string }[]).map(opt => (
                  <button key={opt.v} onClick={() => handleLieuStationnement(opt.v)}
                    style={{
                      display: "flex", alignItems: "center", gap: 8,
                      padding: "7px 10px", borderRadius: 8, width: "100%", textAlign: "left",
                      border: `1.5px solid ${lieuStationnement === opt.v ? opt.couleur : "var(--madel-border)"}`,
                      background: lieuStationnement === opt.v ? opt.bg : "#fff",
                      cursor: "pointer", fontFamily: "var(--madel-font)", transition: "all .12s",
                    }}>
                    <span style={{ fontSize: 13, flexShrink: 0 }}>{opt.icone}</span>
                    <span style={{ flex: 1, fontSize: 10, fontWeight: lieuStationnement === opt.v ? 700 : 400, color: lieuStationnement === opt.v ? opt.couleur : "var(--madel-navy)" }}>{opt.label}</span>
                    <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 8, background: lieuStationnement === opt.v ? opt.couleur : "var(--madel-border)", color: lieuStationnement === opt.v ? "#fff" : "var(--madel-muted)" }}>{opt.impact}</span>
                  </button>
                ))}
              </div>
            </Champ>
          </div>
        </Card>

        {/* COL DROITE — Conducteur + Usage */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

          <Card titre="Conducteur" icone="👤" couleur="blue">
            <div style={grid2}>
              <Champ label="Âge">
                <Input type="number" value={input.agePrincipal} onChange={v => setField("agePrincipal", +v)} min={14} max={90} />
              </Champ>
              <Champ label="Catégorie de permis">
                <Select value={input.categoriePermis} onChange={v => setField("categoriePermis", v as CategoriePeermis)}>
                  <option value="AM">AM — Cyclomoteur (14 ans)</option>
                  <option value="A1">A1 — Moto légère ≤ 125cc</option>
                  <option value="A2">A2 — Moto ≤ 35kW</option>
                  <option value="A">A — Toutes motos</option>
                </Select>
              </Champ>
              <Champ label="Date du permis moto">
                <Input type="date" value={datePermis} onChange={handleDatePermis} />
                <Hint type="muted">{input.anneesPermis} an(s) de permis{input.anneesPermis < 2 && " ⚠ Novice"}</Hint>
              </Champ>
              <Champ label="CRM">
                <input type="text" value={bmTexte} onChange={e => handleBM(e.target.value)}
                  placeholder="0.90"
                  style={{ ...inputBase, fontFamily: "monospace", fontSize: 16, fontWeight: 700, textAlign: "center", letterSpacing: ".08em",
                    borderColor: bmErreur ? "var(--madel-rose)" : "var(--madel-border)",
                    background: bmErreur ? "#FEF5F8" : "#fff",
                  }} />
                {bmErreur
                  ? <Hint type="warn">{bmErreur}</Hint>
                  : !isNaN(bmN) && <Hint type={bmN < 1 ? "ok" : bmN === 1 ? "muted" : "warn"}>
                      {bmN < 1 ? `✅ Bonus −${Math.round((1 - bmN) * 100)}%` : bmN === 1 ? "Neutre" : `⚠ Malus +${Math.round((bmN - 1) * 100)}%`}
                    </Hint>
                }
              </Champ>
            </div>
          </Card>

          <Card titre="Usage & Zone" icone="📍" couleur="rose">
            <div style={grid2}>
              <Champ label="Usage principal">
                <Select value={input.usagePrincipal} onChange={v => setField("usagePrincipal", v as UsageMoto)}>
                  <option value="loisir">Loisir (week-end)</option>
                  <option value="quotidien">Quotidien (domicile-travail)</option>
                  <option value="touring">Touring (grands voyages)</option>
                  <option value="piste">Circuit / Piste ⚠</option>
                </Select>
              </Champ>
              <Champ label="Kilométrage / an">
                <Select value={String(input.kmAnnuels)} onChange={v => setField("kmAnnuels", +v)}>
                  <option value="1000">{"< 2 000 km (loisir rare)"}</option>
                  <option value="3500">2 000 – 5 000 km</option>
                  <option value="6500">5 000 – 8 000 km</option>
                  <option value="10000">8 000 – 12 000 km</option>
                  <option value="16000">12 000 – 20 000 km</option>
                  <option value="25000">{"> 20 000 km (touring)"}</option>
                </Select>
              </Champ>
              <Champ label="Zone géographique">
                <Select value={input.zoneGeographique} onChange={v => setField("zoneGeographique", v as SimulateurMotoInput["zoneGeographique"])}>
                  <option value="zone1">Zone 1 — Métropole</option>
                  <option value="zone2">Zone 2 — Ville moy.</option>
                  <option value="zone3">Zone 3 — Périurbain</option>
                  <option value="zone4">Zone 4 — Rural</option>
                </Select>
              </Champ>
              <Champ label="Contrat auto Madel ?">
                {/* Si détecté automatiquement depuis la fiche assuré */}
                {recherche.autoDetectee ? (
                  <div style={{
                    padding: "8px 10px", borderRadius: 8,
                    background: "var(--madel-success-bg)",
                    border: "1.5px solid #A5D6A7",
                    fontSize: 11, color: "var(--madel-success)", fontWeight: 600,
                  }}>
                    ✅ Détecté automatiquement — {recherche.numeroContratAuto}
                    <div style={{ fontSize: 9, fontWeight: 400, marginTop: 2, color: "#388E3C" }}>
                      Réduction −30% appliquée
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: "1.5px solid var(--madel-border)" }}>
                      {[
                        { v: false, l: "Non souscrit" },
                        { v: true,  l: "✅ Oui — −30%" },
                      ].map(opt => (
                        <button key={String(opt.v)} onClick={() => setField("autoAssureeMadel", opt.v)} style={{
                          flex: 1, padding: "7px 6px", border: "none", fontSize: 11,
                          background: input.autoAssureeMadel === opt.v
                            ? opt.v ? "var(--madel-success-bg)" : "var(--madel-bg)"
                            : "#fff",
                          color: input.autoAssureeMadel === opt.v
                            ? opt.v ? "var(--madel-success)" : "var(--madel-text)"
                            : "var(--madel-muted)",
                          fontWeight: input.autoAssureeMadel === opt.v ? 700 : 400,
                          cursor: "pointer", fontFamily: "var(--madel-font)",
                        }}>{opt.l}</button>
                      ))}
                    </div>
                    {!input.autoAssureeMadel && (
                      <div style={{ fontSize: 9, color: "var(--madel-muted)", marginTop: 3 }}>
                        ℹ Souscrire un contrat auto Madel = −30% sur la moto
                      </div>
                    )}
                  </>
                )}
              </Champ>
            </div>
          </Card>
        </div>
      </div>

      {/* Couverture pleine largeur */}
      <Card titre="Couverture & Options" icone="🛡️" couleur="blue" fullWidth>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20 }}>
          <div>
            <Label>Formule de garantie</Label>
            <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 6 }}>
              {([
                { v: "tiers",        dot: "#F5B731", titre: "Tiers",        sub: "RC seule — minimum légal" },
                { v: "tiers_plus",   dot: "#E8722A", titre: "Tiers+",       sub: "Vol · Incendie · Optiques" },
                { v: "tous_risques", dot: "#4A8FD4", titre: "Tous risques", sub: "Couverture totale + protection conducteur" },
              ] as { v: FormuleGarantieMoto; dot: string; titre: string; sub: string }[]).map(f => (
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
          <div>
            <Label>Options complémentaires</Label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 6 }}>
              {([
                ["protection_juridique",  "Protection juridique",       "+45 €/an"],
                ["assistance_0km",        "Assistance 0 km",            "+42 €/an"],
                ["equipement_conducteur", "Équipement conducteur",      "+68 €/an"],
                ["accessoires_moto",      "Accessoires moto",           "+35 €/an"],
                ["conducteur_exclusif",   "Conducteur exclusif",        "−30 €/an"],
                ["rachat_franchise",      "Rachat de franchise",        "+110 €/an"],
                ["vol_accessoires",       "Vol antivol / alarme",       "+28 €/an"],
              ] as [OptionMoto, string, string][]).map(([opt, label, prix]) => (
                <label key={opt} style={{
                  display: "flex", alignItems: "flex-start", gap: 7,
                  padding: "8px 10px", borderRadius: 8, cursor: "pointer",
                  border: `1.5px solid ${input.options.includes(opt) ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
                  background: input.options.includes(opt) ? "var(--madel-rose-light)" : "#fff",
                }}>
                  <input type="checkbox" checked={input.options.includes(opt)} onChange={() => toggleOption(opt)}
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

      {/* Bouton calculer */}
      <button onClick={handleCalculer} disabled={!!bmErreur} style={{
        width: "100%", background: bmErreur ? "var(--madel-border)" : "var(--madel-rose)",
        color: "#fff", border: "none", borderRadius: 12, padding: 14,
        fontSize: 15, fontWeight: 700, cursor: bmErreur ? "not-allowed" : "pointer",
        fontFamily: "var(--madel-font)", marginBottom: 14, letterSpacing: ".02em",
      }}>
        Calculer la prime Moto →
      </button>

      {/* Résultats */}
      {!resultat ? (
        <div style={{ border: "2px dashed var(--madel-border)", borderRadius: 14, padding: 36, textAlign: "center", color: "var(--madel-muted)", background: "#fff" }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>🏍️</div>
          Complétez le profil et cliquez sur <strong style={{ color: "var(--madel-rose)" }}>Calculer la prime Moto</strong>
        </div>
      ) : (
        <Resultats resultat={resultat} onglet={onglet} setOnglet={setOnglet} />
        
      )}

      {/* ── Souscription depuis fiche assuré ── */}
      <BoutonSouscription
        isFromFiche={isFromFiche}
        client={client}
        mode={mode}
        primeAnnuelle={resultat?.primeAnnuelle ?? null}
        onSouscrire={() => souscrire(resultat!.primeAnnuelle)}
      />
    </div>
  );
}

// ── Résultats ────────────────────────────────────────────────

function Resultats({ resultat, onglet, setOnglet }: {
  resultat: ResultatSimulateurMoto;
  onglet: "resume" | "detail" | "garanties";
  setOnglet: (o: "resume" | "detail" | "garanties") => void;
}) {
  const risk = RISK_STYLE[resultat.niveauRisque];
  return (
    <div>
      {/* Bandeau prime */}
      <div style={{ background: "var(--madel-navy)", borderRadius: 14, padding: "20px 28px", marginBottom: 14, display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr auto auto", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginBottom: 4 }}>Prime annuelle TTC</div>
          <div style={{ fontSize: 38, fontWeight: 800, color: "#fff", letterSpacing: "-1px", lineHeight: 1 }}>
            {resultat.primeAnnuelle.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)", marginTop: 4 }}>
            soit <strong style={{ color: "#fff" }}>{resultat.primeMensuelle.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</strong> / mois
          </div>
        </div>
        <div style={{ width: 1, height: 40, background: "rgba(255,255,255,.15)", margin: "0 24px" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)", marginBottom: 4 }}>Prime nette HT</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{resultat.primeHT.toFixed(2)} €</div>
        </div>
        <div style={{ width: 1, height: 40, background: "rgba(255,255,255,.15)", margin: "0 24px" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)", marginBottom: 4 }}>Taxes</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{resultat.taxesEtContributions.toFixed(2)} €</div>
        </div>
        <div style={{ marginLeft: 24 }}>
          <span style={{ padding: "5px 14px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: risk.bg, color: risk.color }}>{risk.label}</span>
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
              fontWeight: onglet === tab ? 700 : 500, fontSize: 11, cursor: "pointer",
              borderBottom: `2px solid ${onglet === tab ? "var(--madel-rose)" : "transparent"}`,
              fontFamily: "var(--madel-font)",
            }}>
              {tab === "resume" ? "Résumé" : tab === "detail" ? "Détail calcul" : "Garanties"}
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
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--madel-rose)", marginTop: 4, flexShrink: 0 }} />{f}
                    </div>
                  ))
                  : <div style={{ fontSize: 11, color: "var(--madel-muted)" }}>Profil standard.</div>
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
                  : <div style={{ fontSize: 11, color: "var(--madel-muted)" }}>Aucune franchise.</div>
                }
              </div>
            </div>
          )}
          {onglet === "detail" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--madel-border)", borderRadius: 10, overflow: "hidden" }}>
              {[
                ["Prime de base",         `${resultat.detail.primeBaseReference} €`],
                ["× CRM (Bonus/Malus)",   `× ${resultat.detail.coefficientBonusMalus}`],
                ["× Âge conducteur",      `× ${resultat.detail.coefficientAge}`],
                ["× Catégorie permis",    `× ${resultat.detail.coefficientPermis}`],
                ["× Usage",               `× ${resultat.detail.coefficientUsage}`],
                ["× Kilométrage",         `× ${resultat.detail.coefficientKm}`],
                ["× Zone géographique",   `× ${resultat.detail.coefficientZone}`],
                ["× Cylindrée",           `× ${resultat.detail.coefficientCylindree}`],
                ["× Formule garantie",    `× ${resultat.detail.coefficientFormule}`],
                ["× Garage fermé",        `× ${resultat.detail.coefficientGarage}`],
                ["× Marge cabinet",       "× 1.10"],
                ["× Multi-détention auto", `× ${resultat.detail.coefficientMultiDetention === 0.70 ? "0.70 (−30%)" : "1.00"}`],
                ["+ Options",             `+ ${resultat.detail.montantOptions} €`],
                ["= Prime nette HT",      `${resultat.detail.primeNette} €`],
                ["+ TCA 18% + contrib.",  `+ ${(resultat.detail.primeNette * 0.18 + 7.10).toFixed(2)} €`],
              ].map(([l, v]) => (
                <div key={l} style={{
                  background: l.startsWith("=") ? "var(--madel-navy)" : "#fff",
                  color: l.startsWith("=") ? "#fff" : "var(--madel-text)",
                  padding: "7px 14px", display: "flex", justifyContent: "space-between", fontSize: 11,
                  fontWeight: l.startsWith("=") ? 700 : 400,
                }}>
                  <span>{l}</span><span style={{ fontFamily: "monospace" }}>{v}</span>
                </div>
              ))}
              <div style={{ background: "var(--madel-navy)", color: "#fff", padding: "8px 14px", display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, gridColumn: "span 2" }}>
                <span>= Prime TTC annuelle</span>
                <span style={{ fontFamily: "monospace" }}>{resultat.primeAnnuelle.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</span>
              </div>
            </div>
          )}
          {onglet === "garanties" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {resultat.garanties.map((g, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 8, padding: "9px 11px", borderRadius: 9,
                  background: g.incluse ? "var(--madel-blue-light)" : "var(--madel-bg)",
                  border: `1px solid ${g.incluse ? "#B5D4F4" : "var(--madel-border)"}`,
                  opacity: g.incluse ? 1 : 0.6,
                }}>
                  <span style={{ fontSize: 13 }}>{g.incluse ? "✅" : "❌"}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--madel-navy)", fontSize: 11 }}>{g.nom}</div>
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
    </div>
  );
}

// ── Sous-composants ──────────────────────────────────────────

function Card({ titre, icone, couleur, children, fullWidth }: { titre: string; icone: string; couleur: "rose" | "blue"; children: React.ReactNode; fullWidth?: boolean }) {
  return (
    <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "visible", marginBottom: fullWidth ? 14 : 0 }}>
      <div style={{ padding: "11px 16px", borderBottom: "1px solid var(--madel-border)", display: "flex", alignItems: "center", gap: 8, background: "var(--madel-bg)", borderRadius: "14px 14px 0 0" }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", background: couleur === "rose" ? "var(--madel-rose-light)" : "var(--madel-blue-light)" }}>{icone}</div>
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--madel-navy)" }}>{titre}</span>
      </div>
      <div style={{ padding: 14 }}>{children}</div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 4 }}>{children}</label>;
}
function Champ({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><Label>{label}</Label>{children}</div>;
}
function Hint({ type, children }: { type: "ok" | "warn" | "muted"; children: React.ReactNode }) {
  return <div style={{ fontSize: 10, marginTop: 3, color: { ok: "#2E7D32", warn: "var(--madel-rose)", muted: "var(--madel-muted)" }[type] }}>{children}</div>;
}
function Input({ value, onChange, type, min, max, step }: { value: string | number; onChange: (v: string) => void; type?: string; min?: number; max?: number; step?: number }) {
  return <input type={type || "text"} value={value} min={min} max={max} step={step} onChange={e => onChange(e.target.value)} style={inputBase} />;
}
function Select({ value, onChange, children }: { value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return <select value={value} onChange={e => onChange(e.target.value)} style={selectBase}>{children}</select>;
}

const inputBase: React.CSSProperties = { width: "100%", padding: "8px 10px", borderRadius: 8, border: "1.5px solid var(--madel-border)", fontSize: 12, fontFamily: "var(--madel-font)", color: "var(--madel-navy)", background: "#fff", outline: "none" };
const selectBase: React.CSSProperties = { ...inputBase, appearance: "none", cursor: "pointer", paddingRight: 26, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238A86A0'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 9px center" };
const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 };
const sectionLabel: React.CSSProperties = { fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 6 };
