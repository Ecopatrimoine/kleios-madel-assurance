// ============================================================
// SIMULATEUR MRH — Interface utilisateur
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { supabase } from "../../lib/supabase";
import type {
  SimulateurMRHInput, ResultatSimulateurMRH,
  TypeLogement, TypeOccupation, TypeResidence,
  ZoneGeographiqueMRH, OptionMRH,
} from "./types";
import { calculerPrimeMRH } from "./calcul";
import { GARANTIES_OPTIONS_MRH, TARIF_OPTIONS_MRH } from "./tables/coefficients";
import { useSimulateurSouscription, BoutonSouscription } from "../../hooks/useSimulateurSouscription";

// ── Valeurs par défaut ────────────────────────────────────────
const defaultInput = (occupation: TypeOccupation): SimulateurMRHInput => ({
  typeOccupation:   occupation,
  typeResidence:    "principale",
  typeLogement:     occupation === "locataire" ? "appartement" : "maison",
  surface:          65,
  nbPieces:         3,
  etage:            2,
  zoneGeographique: "zone3",
  alarmeConnectee:  false,
  valeurMobilier:   15000,
  valeurObjetsValeur: 0,
  valeurBatiment:   0,
  options:          [], // tout décoché — élèves font le travail
  zoneInondable:    false,
});

const RISK_STYLE = {
  faible:     { bg: "#EAF3DE", color: "#2E7D32", label: "✅ Risque faible" },
  modere:     { bg: "#FAEEDA", color: "#7B4F00", label: "⚠ Risque modéré" },
  eleve:      { bg: "#FAECE7", color: "#7B1A1A", label: "⛔ Risque élevé" },
  tres_eleve: { bg: "#FCE4EC", color: "#5C0011", label: "🚨 Risque très élevé" },
};

// ── Autocomplétion adresse BAN ────────────────────────────────
interface AdresseBAN {
  label:      string;
  postcode:   string;
  city:       string;
  context:    string;
  score:      number;
  lat:        number;
  lon:        number;
}

// ── Résultat Géorisques ───────────────────────────────────────
interface RisqueGeo {
  zoneInondable:  boolean;
  niveauSismique: number;   // 1 à 5
  risqueArgile:   string;   // "Faible" | "Moyen" | "Fort" | "Très Fort"
  commune:        string;
  loading:        boolean;
  erreur:         boolean;
}

const rechercherAdresse = async (query: string): Promise<AdresseBAN[]> => {
  if (query.length < 4) return [];
  try {
    const res = await fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=6&type=housenumber`
    );
    const data = await res.json();
    return data.features?.map((f: {
      properties: { label: string; postcode: string; city: string; context: string; score: number };
      geometry:   { coordinates: [number, number] };
    }) => ({
      label:    f.properties.label,
      postcode: f.properties.postcode,
      city:     f.properties.city,
      context:  f.properties.context,
      score:    f.properties.score,
      lon:      f.geometry.coordinates[0],
      lat:      f.geometry.coordinates[1],
    })) ?? [];
  } catch {
    return [];
  }
};

const rechercherGeorisques = async (lat: number, lon: number): Promise<Omit<RisqueGeo, "loading" | "erreur">> => {
  const res = await fetch(
    `https://georisques.gouv.fr/api/v1/gaspar/risques?latlon=${lon},${lat}&rayon=500`
  );
  const data = await res.json();

  // Inondation
  const risques: {codeRisque: string}[] = data.risques ?? [];
  const zoneInondable = risques.some((r) =>
    ["11", "12", "13", "14"].includes(r.codeRisque) // codes GASPAR inondation
  );

  // Sismicité
  let niveauSismique = 1;
  try {
    const resSismo = await fetch(
      `https://georisques.gouv.fr/api/v1/zonage_sismique?latlon=${lon},${lat}`
    );
    const dataSismo = await resSismo.json();
    niveauSismique = dataSismo.zone ?? 1;
  } catch { /* non bloquant */ }

  // Argile
  let risqueArgile = "Faible";
  try {
    const resArgile = await fetch(
      `https://georisques.gouv.fr/api/v1/rga?latlon=${lon},${lat}`
    );
    const dataArgile = await resArgile.json();
    risqueArgile = dataArgile.exposition ?? "Faible";
  } catch { /* non bloquant */ }

  return {
    zoneInondable,
    niveauSismique,
    risqueArgile,
    commune: data.commune?.nom ?? "",
  };
};

// ── Composant principal ───────────────────────────────────────
export default function SimulateurMRH() {
  const { user }        = useAuth();
  const [searchParams]  = useSearchParams();

  const [occupation, setOccupation] = useState<TypeOccupation>("locataire");
  const [input, setInput]           = useState<SimulateurMRHInput>(defaultInput("locataire"));
  const [resultat, setResultat]     = useState<ResultatSimulateurMRH | null>(null);
  const [onglet, setOnglet]         = useState<"resume" | "detail" | "garanties" | "plafonds">("resume");

  // Assuré depuis URL
  const [assureNom, setAssureNom]   = useState<string | null>(null);
  const [adresseClient, setAdresseClient] = useState<string | null>(null);

  // Adresse BAN
  const [adresseQuery, setAdresseQuery]       = useState("");
  const [adresseSugg, setAdresseSugg]         = useState<AdresseBAN[]>([]);
  const [adresseSelectionnee, setAdresseSelectionnee] = useState<AdresseBAN | null>(null);
  const [adresseLoading, setAdresseLoading]   = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Géorisques
  const [risqueGeo, setRisqueGeo] = useState<RisqueGeo | null>(null);
  // Hook souscription — connecte le simulateur à la fiche assuré
  const { client, mode, isFromFiche, souscrire } = useSimulateurSouscription("mrh");

  // Chargement assuré depuis URL
  useEffect(() => {
    const id = searchParams.get("assure");
    if (!id || !user) return;
    const charger = async () => {
      const { data } = await supabase
        .from("assures")
        .select("nom, prenom, adresse, code_postal, ville")
        .eq("id", id).eq("user_id", user.id).single();
      if (data) {
        setAssureNom(`${data.prenom} ${data.nom}`);
        if (data.adresse && data.ville) {
          setAdresseClient(`${data.adresse}, ${data.code_postal} ${data.ville}`);
        }
      }
    };
    charger();
  }, [searchParams, user]);

  // Debounce recherche adresse
  useEffect(() => {
    if (adresseQuery.length < 4) { setAdresseSugg([]); return; }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setAdresseLoading(true);
      const res = await rechercherAdresse(adresseQuery);
      setAdresseSugg(res);
      setAdresseLoading(false);
    }, 350);
  }, [adresseQuery]);

  const handleOccupationChange = (occ: TypeOccupation) => {
    setOccupation(occ);
    setInput(defaultInput(occ));
    setResultat(null);
  };

  const setField = <K extends keyof SimulateurMRHInput>(k: K, v: SimulateurMRHInput[K]) => {
    setInput(prev => ({ ...prev, [k]: v }));
    setResultat(null);
  };

  const toggleOption = (opt: OptionMRH) => {
    setInput(prev => {
      let opts = prev.options.includes(opt)
        ? prev.options.filter(o => o !== opt)
        : [...prev.options, opt];
      // mutuellement exclusifs : 5ans vs illimité
      if (opt === "reequipement_5ans" && opts.includes("reequipement_illimite"))
        opts = opts.filter(o => o !== "reequipement_illimite");
      if (opt === "reequipement_illimite" && opts.includes("reequipement_5ans"))
        opts = opts.filter(o => o !== "reequipement_5ans");
      return { ...prev, options: opts };
    });
    setResultat(null);
  };

  const selectionnerAdresse = async (a: AdresseBAN) => {
    setAdresseSelectionnee(a);
    setAdresseQuery(a.label);
    setAdresseSugg([]);

    // Zone géographique automatique
    const dept = a.context.split(",")[0].trim();
    const deptNum = parseInt(dept);
    let zone: ZoneGeographiqueMRH = "zone3";
    if ([75,92,93,94,13,69,31,33,59,67,6].includes(deptNum)) zone = "zone1";
    else if ([77,78,91,95,34,44,38,76,57,67].includes(deptNum)) zone = "zone2";
    else if (deptNum >= 1 && deptNum <= 19) zone = "zone4";
    setField("zoneGeographique", zone);

    // Géorisques — appel API avec les coordonnées GPS
    if (a.lat && a.lon) {
      setRisqueGeo({ zoneInondable: false, niveauSismique: 1, risqueArgile: "Faible", commune: "", loading: true, erreur: false });
      try {
        const geo = await rechercherGeorisques(a.lat, a.lon);
        setRisqueGeo({ ...geo, loading: false, erreur: false });
        // Appliquer la majoration inondation dans l'input
        setField("zoneInondable" as keyof SimulateurMRHInput, geo.zoneInondable as never);
      } catch {
        setRisqueGeo(prev => prev ? { ...prev, loading: false, erreur: true } : null);
      }
    }
  };

  const utiliserAdresseClient = () => {
    if (!adresseClient) return;
    setAdresseQuery(adresseClient);
    setAdresseSelectionnee({ label: adresseClient, postcode: "", city: "", context: "", score: 1, lat: 0, lon: 0 });
    setAdresseSugg([]);
  };

  const handleCalculer = () => {
    setResultat(calculerPrimeMRH(input));
    setOnglet("resume");
  };

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1100, margin: "0 auto", padding: "18px 20px 32px" }}>

      {/* Titre */}
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🏠 Simulateur MRH</h2>
        <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
          Multirisque Habitation · Locataire & Propriétaire · TCA 9%
        </p>
      </div>

      {/* Bannière assuré */}
      {assureNom && (
        <div style={{ marginBottom: 14, padding: "12px 16px", borderRadius: 12, background: "var(--madel-navy)", color: "#fff", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>👤</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13 }}>Devis pour : {assureNom}</div>
            {adresseClient && (
              <div style={{ fontSize: 11, color: "var(--madel-rose-mid)", marginTop: 2 }}>
                Adresse dossier : {adresseClient}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toggle Locataire / Propriétaire */}
      <div style={{ marginBottom: 14, display: "flex", gap: 10 }}>
        {(["locataire", "proprietaire"] as TypeOccupation[]).map(occ => (
          <button key={occ} onClick={() => handleOccupationChange(occ)} style={{
            flex: 1, padding: "14px 20px", borderRadius: 12, border: "2px solid",
            borderColor: occupation === occ ? "var(--madel-rose)" : "var(--madel-border)",
            background: occupation === occ ? "var(--madel-rose-light)" : "#fff",
            color: occupation === occ ? "var(--madel-rose-dark)" : "var(--madel-navy)",
            fontWeight: occupation === occ ? 700 : 500, fontSize: 14,
            cursor: "pointer", fontFamily: "var(--madel-font)",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          }}>
            <span style={{ fontSize: 22 }}>{occ === "locataire" ? "🔑" : "🏡"}</span>
            <div style={{ textAlign: "left" }}>
              <div>{occ === "locataire" ? "Locataire" : "Propriétaire"}</div>
              <div style={{ fontSize: 10, fontWeight: 400, color: occupation === occ ? "var(--madel-rose)" : "var(--madel-muted)", marginTop: 2 }}>
                {occ === "locataire" ? "Contrat de base — options libres" : "Contrat complet — options à personnaliser"}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Formulaire grille 2 colonnes */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>

        {/* COL GAUCHE — Logement */}
        <Card titre="Le logement assuré" icone="🏠" couleur="rose">

          {/* Adresse BAN */}
          <div style={{ marginBottom: 12 }}>
            <Label>Adresse du bien assuré</Label>
            {adresseClient && !adresseSelectionnee && (
              <button onClick={utiliserAdresseClient} style={{
                width: "100%", marginBottom: 6, padding: "7px 12px",
                borderRadius: 8, border: "1.5px dashed var(--madel-rose-mid)",
                background: "var(--madel-rose-light)", color: "var(--madel-rose-dark)",
                fontSize: 11, cursor: "pointer", fontFamily: "var(--madel-font)",
                textAlign: "left",
              }}>
                📍 Utiliser l'adresse du client : {adresseClient}
              </button>
            )}
            <div style={{ position: "relative" }}>
              <input
                type="text" value={adresseQuery}
                onChange={e => { setAdresseQuery(e.target.value); setAdresseSelectionnee(null); }}
                placeholder="Tapez une adresse…"
                style={{ ...inputBase, paddingRight: adresseLoading ? 36 : 14 }}
              />
              {adresseLoading && (
                <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", fontSize: 12 }}>⏳</span>
              )}
              {adresseSugg.length > 0 && (
                <div style={{
                  position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0,
                  background: "#fff", border: "1px solid var(--madel-border)",
                  borderRadius: 9, boxShadow: "var(--madel-shadow-md)", zIndex: 300, overflow: "hidden",
                }}>
                  {adresseSugg.map((a, i) => (
                    <button key={i} onClick={() => selectionnerAdresse(a)} style={{
                      width: "100%", border: "none",
                      borderBottom: i < adresseSugg.length - 1 ? "1px solid var(--madel-border)" : "none",
                      background: "transparent", padding: "9px 12px", textAlign: "left",
                      cursor: "pointer", fontSize: 12, color: "var(--madel-navy)",
                      fontFamily: "var(--madel-font)",
                    }}>
                      <div style={{ fontWeight: 600 }}>{a.label}</div>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1 }}>{a.context}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {adresseSelectionnee && (
              <div style={{ fontSize: 10, color: "var(--madel-success)", marginTop: 3 }}>
                ✅ Adresse validée — Zone détectée automatiquement
              </div>
            )}

            {/* Géorisques */}
            {risqueGeo?.loading && (
              <div style={{ marginTop: 8, padding: "8px 12px", borderRadius: 8, background: "var(--madel-bg)", border: "1px solid var(--madel-border)", fontSize: 11, color: "var(--madel-muted)" }}>
                ⏳ Analyse des risques géographiques en cours…
              </div>
            )}
            {risqueGeo && !risqueGeo.loading && !risqueGeo.erreur && (
              <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                {/* ALERTE INONDATION */}
                {risqueGeo.zoneInondable && input.etage < 2 && (
                  <div style={{
                    padding: "12px 14px", borderRadius: 10,
                    background: "#FCEBEB", border: "2px solid var(--madel-rose)",
                    display: "flex", alignItems: "flex-start", gap: 10,
                  }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>🌊</span>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--madel-rose-dark)", fontSize: 12, marginBottom: 3 }}>
                        ⚠ ZONE INONDABLE — PPRI détecté
                      </div>
                      <div style={{ fontSize: 11, color: "var(--madel-rose-dark)", lineHeight: 1.5 }}>
                        Ce bien est situé dans un périmètre de Plan de Prévention du Risque Inondation.
                        Une <strong>majoration de 20%</strong> est appliquée sur la prime (RDC ou 1er étage).
                        Certains assureurs peuvent refuser ou imposer des conditions particulières.
                      </div>
                      <div style={{ fontSize: 10, color: "var(--madel-rose)", marginTop: 4 }}>
                        💡 L'assuré doit déclarer ce risque obligatoirement — toute omission entraîne la nullité du contrat.
                      </div>
                    </div>
                  </div>
                )}
                {risqueGeo.zoneInondable && input.etage >= 2 && (
                  <div style={{
                    padding: "10px 14px", borderRadius: 10,
                    background: "var(--madel-blue-light)", border: "1px solid #B5D4F4",
                    display: "flex", alignItems: "flex-start", gap: 10,
                  }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>🌊</span>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--madel-info)", fontSize: 11, marginBottom: 2 }}>
                        Zone PPRI détectée — aucune majoration (étage ≥ 2)
                      </div>
                      <div style={{ fontSize: 10, color: "var(--madel-info)", lineHeight: 1.4 }}>
                        Le bien est protégé du risque direct par son étage. La déclaration reste obligatoire.
                      </div>
                    </div>
                  </div>
                )}
                {/* Info risques complémentaires */}
                <div style={{
                  padding: "8px 12px", borderRadius: 8,
                  background: risqueGeo.zoneInondable ? "#FEF8EE" : "var(--madel-success-bg)",
                  border: `1px solid ${risqueGeo.zoneInondable ? "#E8B86D" : "#A5D6A7"}`,
                  fontSize: 10, display: "flex", gap: 16,
                }}>
                  <span style={{ color: risqueGeo.zoneInondable ? "#7B4F00" : "var(--madel-success)" }}>
                    🏔 Sismicité : <strong>Zone {risqueGeo.niveauSismique}</strong>
                  </span>
                  <span style={{ color: risqueGeo.zoneInondable ? "#7B4F00" : "var(--madel-success)" }}>
                    🧱 Argile : <strong>{risqueGeo.risqueArgile}</strong>
                  </span>
                  <span style={{ color: "var(--madel-muted)" }}>
                    Source : Géorisques.gouv.fr
                  </span>
                </div>
              </div>
            )}
            {risqueGeo?.erreur && (
              <div style={{ marginTop: 6, fontSize: 10, color: "var(--madel-muted)", padding: "6px 10px", background: "var(--madel-bg)", borderRadius: 7 }}>
                ⚠ Analyse des risques indisponible — vérifiez manuellement sur georisques.gouv.fr
              </div>
            )}
          </div>

          <div style={grid2}>
            <Champ label="Type de logement">
              <Select value={input.typeLogement} onChange={v => setField("typeLogement", v as TypeLogement)}>
                <option value="studio">Studio / T1</option>
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="villa">Villa</option>
              </Select>
            </Champ>
            <Champ label="Résidence">
              <Select value={input.typeResidence} onChange={v => setField("typeResidence", v as TypeResidence)}>
                <option value="principale">Résidence principale</option>
                <option value="secondaire">Résidence secondaire (+35%)</option>
              </Select>
            </Champ>
            <Champ label="Surface (m²)">
              <Input type="number" value={input.surface} onChange={v => setField("surface", +v)} min={9} max={500} />
            </Champ>
            <Champ label="Nombre de pièces">
              <Input type="number" value={input.nbPieces} onChange={v => setField("nbPieces", +v)} min={1} max={15} />
            </Champ>
            {input.typeOccupation === "locataire" && (
              <Champ label="Étage">
                <Select value={String(input.etage)} onChange={v => setField("etage", +v)}>
                  <option value="0">Rez-de-chaussée</option>
                  <option value="1">1er étage</option>
                  <option value="2">2e étage</option>
                  <option value="3">3e étage</option>
                  <option value="4">4e et +</option>
                </Select>
              </Champ>
            )}
            <Champ label="Zone géographique">
              <Select value={input.zoneGeographique} onChange={v => setField("zoneGeographique", v as ZoneGeographiqueMRH)}>
                <option value="zone1">Zone 1 — Grande métropole</option>
                <option value="zone2">Zone 2 — Ville moyenne</option>
                <option value="zone3">Zone 3 — Périurbain</option>
                <option value="zone4">Zone 4 — Rural</option>
              </Select>
            </Champ>
          </div>

          {/* Alarme */}
          <div style={{ marginTop: 10 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer", padding: "9px 11px", borderRadius: 8, border: `1.5px solid ${input.alarmeConnectee ? "#A5D6A7" : "var(--madel-border)"}`, background: input.alarmeConnectee ? "var(--madel-success-bg)" : "var(--madel-bg)" }}>
              <input type="checkbox" checked={input.alarmeConnectee} onChange={e => setField("alarmeConnectee", e.target.checked)} style={{ accentColor: "var(--madel-success)", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--madel-navy)" }}>Alarme connectée certifiée NF</div>
                <div style={{ fontSize: 9, color: "var(--madel-success)", marginTop: 1 }}>−10% sur la prime si cochée</div>
              </div>
            </label>
          </div>
        </Card>

        {/* COL DROITE — Valeurs + Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

          <Card titre="Valeurs assurées" icone="💶" couleur="blue">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Champ label="Valeur totale du mobilier (€)">
                <Input type="number" value={input.valeurMobilier} onChange={v => setField("valeurMobilier", +v)} min={0} max={500000} step={1000} />
                <Hint type="muted">Meubles, électroménager, vêtements, hi-fi, literie…</Hint>
              </Champ>
              <Champ label="Objets de valeur (€)">
                <Input type="number" value={input.valeurObjetsValeur} onChange={v => setField("valeurObjetsValeur", +v)} min={0} max={200000} step={500} />
                <Hint type="muted">Bijoux, montres, œuvres d'art, instruments — 0 si aucun</Hint>
                {input.valeurObjetsValeur > 0 && (
                  <Hint type="ok">Supplément : +{Math.round(input.valeurObjetsValeur * 0.015).toLocaleString("fr-FR")} €/an (1,5% de la valeur)</Hint>
                )}
              </Champ>
              {input.typeOccupation === "proprietaire" && (
                <Champ label="Valeur du bâtiment — reconstruction (€)">
                  <Input type="number" value={input.valeurBatiment} onChange={v => setField("valeurBatiment", +v)} min={0} max={2000000} step={5000} />
                  <Hint type="muted">Valeur de reconstruction à neuf hors terrain</Hint>
                </Champ>
              )}
            </div>
          </Card>

          <Card titre="Options complémentaires" icone="🛡️" couleur="rose">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {GARANTIES_OPTIONS_MRH.map(opt => {
                // Désactiver l'option 5ans si illimité coché et vice versa
                const disabled =
                  (opt.id === "reequipement_5ans" && input.options.includes("reequipement_illimite")) ||
                  (opt.id === "reequipement_illimite" && input.options.includes("reequipement_5ans"));
                const active = input.options.includes(opt.id as OptionMRH);
                return (
                  <label key={opt.id} style={{
                    display: "flex", alignItems: "flex-start", gap: 9,
                    padding: "9px 11px", borderRadius: 8, cursor: disabled ? "not-allowed" : "pointer",
                    border: `1.5px solid ${active ? "var(--madel-rose-mid)" : "var(--madel-border)"}`,
                    background: active ? "var(--madel-rose-light)" : disabled ? "var(--madel-bg)" : "#fff",
                    opacity: disabled ? 0.5 : 1,
                    transition: "all .15s",
                  }}>
                    <input
                      type="checkbox"
                      checked={active}
                      disabled={disabled}
                      onChange={() => toggleOption(opt.id as OptionMRH)}
                      style={{ accentColor: "var(--madel-rose)", flexShrink: 0, marginTop: 2 }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--madel-navy)" }}>{opt.nom}</div>
                        <span style={{ fontSize: 10, color: "var(--madel-muted)", flexShrink: 0, marginLeft: 8 }}>
                          +{TARIF_OPTIONS_MRH[opt.id] ?? 0} €/an
                        </span>
                      </div>
                      <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 2, lineHeight: 1.4 }}>{opt.description}</div>
                    </div>
                  </label>
                );
              })}
            </div>
          </Card>
        </div>
      </div>

      {/* Bouton calculer */}
      <button onClick={handleCalculer} style={{
        width: "100%", background: "var(--madel-rose)", color: "#fff",
        border: "none", borderRadius: 12, padding: 14,
        fontSize: 15, fontWeight: 700, cursor: "pointer",
        fontFamily: "var(--madel-font)", marginBottom: 14, letterSpacing: ".02em",
      }}>
        Calculer la prime MRH →
      </button>

      {/* Résultats */}
      {!resultat ? (
        <div style={{ border: "2px dashed var(--madel-border)", borderRadius: 14, padding: 36, textAlign: "center", color: "var(--madel-muted)", background: "#fff" }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>🏠</div>
          Complétez le profil et cliquez sur <strong style={{ color: "var(--madel-rose)" }}>Calculer la prime MRH</strong>
        </div>
      ) : (
        <ResultatsMRH resultat={resultat} onglet={onglet} setOnglet={setOnglet} />
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

// ── Composant Résultats ───────────────────────────────────────
function ResultatsMRH({ resultat, onglet, setOnglet }: {
  resultat: ResultatSimulateurMRH;
  onglet: "resume" | "detail" | "garanties" | "plafonds";
  setOnglet: (o: "resume" | "detail" | "garanties" | "plafonds") => void;
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
          <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)", marginBottom: 4 }}>TCA 9% + taxes</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{resultat.taxesEtContributions.toFixed(2)} €</div>
        </div>
        <div style={{ marginLeft: 24 }}>
          <span style={{ padding: "5px 14px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: risk.bg, color: risk.color }}>{risk.label}</span>
        </div>
      </div>

      {/* Info franchise */}
      <div style={{ padding: "9px 14px", borderRadius: 10, background: "var(--madel-blue-light)", border: "1px solid #B5D4F4", marginBottom: 10, fontSize: 12, color: "var(--madel-info)" }}>
        ℹ Franchise standard : <strong>{resultat.franchise} €</strong> par sinistre — <strong>380 €</strong> légal pour les catastrophes naturelles
      </div>

      {/* Onglets */}
      <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden", marginBottom: 10 }}>
        <div style={{ display: "flex", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)" }}>
          {(["resume", "detail", "garanties", "plafonds"] as const).map(tab => (
            <button key={tab} onClick={() => setOnglet(tab)} style={{
              flex: 1, padding: 10, border: "none",
              background: onglet === tab ? "#fff" : "transparent",
              color: onglet === tab ? "var(--madel-rose)" : "var(--madel-muted)",
              fontWeight: onglet === tab ? 700 : 500, fontSize: 11, cursor: "pointer",
              borderBottom: `2px solid ${onglet === tab ? "var(--madel-rose)" : "transparent"}`,
              fontFamily: "var(--madel-font)",
            }}>
              {tab === "resume" ? "Résumé" : tab === "detail" ? "Détail calcul" : tab === "garanties" ? "Garanties" : "Plafonds"}
            </button>
          ))}
        </div>

        <div style={{ padding: "16px 18px" }}>
          {/* RÉSUMÉ */}
          {onglet === "resume" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <SectionLabel>Facteurs de risque</SectionLabel>
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
                <SectionLabel>Franchises applicables</SectionLabel>
                {resultat.franchises.map((f, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 11, padding: "5px 0", borderBottom: "1px solid var(--madel-border)" }}>
                    <span style={{ color: "var(--madel-text)" }}>{f.type}</span>
                    <span style={{ fontWeight: 700, flexShrink: 0, marginLeft: 8 }}>{f.montant === 0 ? "Aucune" : `${f.montant} €`}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DÉTAIL CALCUL */}
          {onglet === "detail" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--madel-border)", borderRadius: 10, overflow: "hidden" }}>
              {[
                ["Prime de base",             `${resultat.detail.primeBaseReference} €`],
                ["× Surface",                 `× ${resultat.detail.coefficientSurface}`],
                ["× Nombre de pièces",        `× ${resultat.detail.coefficientPieces}`],
                ["× Type de logement",        `× ${resultat.detail.coefficientTypeLogement}`],
                ["× Zone géographique",       `× ${resultat.detail.coefficientZone}`],
                ["× Occupation",              `× ${resultat.detail.coefficientOccupation}`],
                ["× Type de résidence",       `× ${resultat.detail.coefficientResidence}`],
                ["× Valeur mobilier",         `× (calculé)`],
                ["× Alarme certifiée",        `× ${resultat.detail.coefficientAlarme}`],
                ["× Zone inondable (PPRI)",   resultat.detail.coefficientInondation > 1 ? "× 1.20 (+20%)" : "× 1.00 (non concerné)"],
                ["× Marge cabinet",           "× 1.12"],
                ["+ Options & suppléments",   `+ ${resultat.detail.montantOptions} €`],
                ["= Prime nette HT",          `${resultat.detail.primeNette} €`],
                ["+ TCA 9%",                  `+ ${(resultat.detail.primeNette * 0.09).toFixed(2)} €`],
                ["+ Contribution attentat",   `+ ${resultat.detail.contributionAttentat} €`],
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

          {/* GARANTIES */}
          {onglet === "garanties" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {resultat.garanties.map((g, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                  padding: "10px 12px", borderRadius: 9,
                  background: g.incluse ? "var(--madel-blue-light)" : "var(--madel-bg)",
                  border: `1px solid ${g.incluse ? "#B5D4F4" : "var(--madel-border)"}`,
                  opacity: g.incluse ? 1 : 0.6,
                }}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>{g.incluse ? "✅" : "❌"}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div style={{ fontWeight: 700, color: "var(--madel-navy)", fontSize: 12 }}>{g.nom}</div>
                      {g.incluse && g.franchise !== undefined && (
                        <span style={{ fontSize: 9, color: "var(--madel-rose)", flexShrink: 0, marginLeft: 8 }}>
                          Franchise : {g.franchise === 0 ? "Aucune" : `${g.franchise} €`}
                        </span>
                      )}
                    </div>
                    <div style={{ color: "var(--madel-muted)", fontSize: 10, marginTop: 2, lineHeight: 1.5 }}>{g.description}</div>
                    {g.plafond && g.incluse && (
                      <div style={{ fontSize: 9, color: "var(--madel-blue)", marginTop: 3 }}>
                        Plafond : {g.plafond}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PLAFONDS */}
          {onglet === "plafonds" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { label: "Mobilier assuré",        valeur: `${resultat.plafonds.mobilier.toLocaleString("fr-FR")} €`, icone: "🛋️" },
                { label: "Objets de valeur",        valeur: resultat.plafonds.objetsValeur > 0 ? `${resultat.plafonds.objetsValeur.toLocaleString("fr-FR")} €` : "Non déclarés", icone: "💍" },
                { label: "Plafond vol",             valeur: `${resultat.plafonds.vol.toLocaleString("fr-FR")} € max`, icone: "🔒" },
                { label: "RC Vie Privée",           valeur: "Illimitée (corporel)", icone: "⚖️" },
                { label: "Dégâts des eaux",         valeur: "Frais réels", icone: "💧" },
                { label: "Franchise standard",      valeur: "150 €", icone: "📋" },
                { label: "Franchise cat. nat.",     valeur: "380 € (légal)", icone: "🌊" },
                ...(resultat.plafonds.batiment > 0 ? [{ label: "Valeur bâtiment", valeur: `${resultat.plafonds.batiment.toLocaleString("fr-FR")} €`, icone: "🏗️" }] : []),
              ].map(item => (
                <div key={item.label} style={{ background: "var(--madel-bg)", borderRadius: 10, padding: "12px 14px", border: "1px solid var(--madel-border)" }}>
                  <div style={{ fontSize: 18, marginBottom: 6 }}>{item.icone}</div>
                  <div style={{ fontSize: 10, color: "var(--madel-muted)", marginBottom: 3 }}>{item.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--madel-navy)" }}>{item.valeur}</div>
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

// ── Sous-composants ───────────────────────────────────────────
function Card({ titre, icone, couleur, children }: { titre: string; icone: string; couleur: "rose" | "blue"; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)" }}>
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
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 6 }}>{children}</div>;
}
function Input({ value, onChange, type, min, max, step }: { value: string | number; onChange: (v: string) => void; type?: string; min?: number; max?: number; step?: number }) {
  return <input type={type || "text"} value={value} min={min} max={max} step={step} onChange={e => onChange(e.target.value)} style={inputBase} />;
}
function Select({ value, onChange, children }: { value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return <select value={value} onChange={e => onChange(e.target.value)} style={selectBase}>{children}</select>;
}

const inputBase: React.CSSProperties = { width: "100%", padding: "8px 10px", borderRadius: 8, border: "1.5px solid var(--madel-border)", fontSize: 12, fontFamily: "var(--madel-font)", color: "var(--madel-navy)", background: "#fff", outline: "none", boxSizing: "border-box" };
const selectBase: React.CSSProperties = { ...inputBase, appearance: "none", cursor: "pointer", paddingRight: 26, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238A86A0'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 9px center" };
const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 };
