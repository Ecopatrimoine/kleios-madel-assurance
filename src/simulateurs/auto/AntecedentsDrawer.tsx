// ============================================================
// ANTECEDENTS DRAWER — Tiroir latéral
// Permis · Sinistres · Ancien assureur
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState, useEffect } from "react";

// ── Types ────────────────────────────────────────────────────

export type TypeSinistre =
  | "accident_responsable"
  | "accident_non_responsable"
  | "accident_corporel"
  | "vol" | "tentative_vol"
  | "incendie" | "bris_glace"
  | "catastrophe" | "vandalisme" | "stationnement" | "delit_fuite";

export type Responsabilite =
  | "responsable" | "non_responsable" | "partiel" | "tiers";

export interface Sinistre {
  id: string;
  date: string;
  type: TypeSinistre | "";
  responsabilite: Responsabilite | "";
  montant: number;
}

export interface DonneesPermis {
  numero: string;
  categorie: string;
  suspension: boolean;
  suspensionType: string;
  suspensionMotif: string;
  suspensionDebut: string;
  suspensionDuree: string;
}

export interface DonneesAncienAssureur {
  nom: string;
  numeroContrat: string;
  dateDebut: string;
  dateFin: string;
  motifResiliation: string;
}

export interface DonneesAntecedents {
  permis: DonneesPermis;
  sinistres: Sinistre[];
  ancienAssureur: DonneesAncienAssureur;
  alertes: Alerte[];
}

export interface Alerte {
  niveau: "rouge" | "orange" | "info";
  message: string;
}

// ── Valeurs par défaut ───────────────────────────────────────

const defaultPermis: DonneesPermis = {
  numero: "", categorie: "B",
  suspension: false, suspensionType: "suspension",
  suspensionMotif: "alcool", suspensionDebut: "", suspensionDuree: "6",
};

const defaultAncienAssureur: DonneesAncienAssureur = {
  nom: "", numeroContrat: "", dateDebut: "", dateFin: "", motifResiliation: "",
};

// ── Libellés ─────────────────────────────────────────────────

const TYPES_SINISTRE: { v: TypeSinistre; l: string }[] = [
  { v: "accident_responsable",    l: "Accident matériel — responsable" },
  { v: "accident_non_responsable",l: "Accident matériel — non responsable" },
  { v: "accident_corporel",       l: "Accident corporel — responsable" },
  { v: "vol",                     l: "Vol du véhicule" },
  { v: "tentative_vol",           l: "Tentative de vol" },
  { v: "incendie",                l: "Incendie / explosion" },
  { v: "bris_glace",              l: "Bris de glace" },
  { v: "catastrophe",             l: "Catastrophe naturelle / technologique" },
  { v: "vandalisme",              l: "Vandalisme / dégradation" },
  { v: "stationnement",           l: "Accrochage en stationnement" },
  { v: "delit_fuite",             l: "Délit de fuite subi" },
];

// ── Motifs résiliation à risque ──────────────────────────────
const MOTIFS_RISQUE = ["non_paiement", "sinistralite", "fausse_declaration", "judiciaire"];

// ── Calcul alertes ───────────────────────────────────────────
function calculerAlertes(
  permis: DonneesPermis,
  sinistres: Sinistre[],
  ancienAssureur: DonneesAncienAssureur
): Alerte[] {
  const alertes: Alerte[] = [];

  // Suspension
  if (permis.suspension) {
    if (permis.suspensionMotif === "alcool" || permis.suspensionMotif === "stup") {
      alertes.push({ niveau: "rouge", message: `Suspension pour ${permis.suspensionMotif === "alcool" ? "alcoolémie" : "stupéfiants"} — refus quasi-systématique, BCT obligatoire` });
    } else {
      alertes.push({ niveau: "orange", message: `Suspension de permis (${permis.suspensionDuree} mois) — majoration probable` });
    }
  }

  // Sinistres
  const nbTotal = sinistres.length;
  const nbResp = sinistres.filter(s =>
    s.responsabilite === "responsable" || s.responsabilite === "partiel"
  ).length;

  if (nbTotal >= 3) {
    alertes.push({ niveau: "rouge", message: `${nbTotal} sinistres en 24 mois — sinistralité très élevée, vérifier cohérence CRM` });
  } else if (nbTotal === 2) {
    alertes.push({ niveau: "orange", message: "2 sinistres en 24 mois — cohérence CRM à contrôler" });
  }

  if (nbResp >= 2) {
    alertes.push({ niveau: "rouge", message: `${nbResp} sinistres responsables — impact majeur sur le CRM, refus possible` });
  } else if (nbResp === 1) {
    alertes.push({ niveau: "orange", message: "1 sinistre responsable — CRM attendu ≥ 1.25" });
  }

  // Résiliation
  if (MOTIFS_RISQUE.includes(ancienAssureur.motifResiliation)) {
    const labels: Record<string, string> = {
      non_paiement: "non-paiement",
      sinistralite: "sinistralité excessive",
      fausse_declaration: "fausse déclaration",
      judiciaire: "motif judiciaire",
    };
    alertes.push({
      niveau: "rouge",
      message: `Résiliation par l'assureur (${labels[ancienAssureur.motifResiliation]}) — obligation de déclaration, refus possible`,
    });
  }

  return alertes;
}

// ── Composant principal ──────────────────────────────────────

interface AntecedentsDrawerProps {
  onValider: (donnees: DonneesAntecedents) => void;
}

export default function AntecedentsDrawer({ onValider }: AntecedentsDrawerProps) {
  const [ouvert, setOuvert] = useState(false);
  const [valide, setValide] = useState(false);
  const [permis, setPermis] = useState<DonneesPermis>(defaultPermis);
  const [sinistres, setSinistres] = useState<Sinistre[]>([]);
  const [ancienAssureur, setAncienAssureur] = useState<DonneesAncienAssureur>(defaultAncienAssureur);
  const [alertes, setAlertes] = useState<Alerte[]>([]);

  // Recalcul alertes à chaque changement
  useEffect(() => {
    setAlertes(calculerAlertes(permis, sinistres, ancienAssureur));
  }, [permis, sinistres, ancienAssureur]);

  // Ancienneté calculée
  const anciennete = (() => {
    if (!ancienAssureur.dateDebut) return null;
    const d1 = new Date(ancienAssureur.dateDebut);
    const d2 = ancienAssureur.dateFin ? new Date(ancienAssureur.dateFin) : new Date();
    const mois = Math.max(0, Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24 * 30.5)));
    const ans = Math.floor(mois / 12);
    const reste = mois % 12;
    return { mois, ans, reste };
  })();

  const ajouterSinistre = () => {
    setSinistres(prev => [...prev, {
      id: Date.now().toString(),
      date: "", type: "", responsabilite: "", montant: 0,
    }]);
  };

  const supprimerSinistre = (id: string) => {
    setSinistres(prev => prev.filter(s => s.id !== id));
  };

  const updateSinistre = (id: string, field: keyof Sinistre, value: string | number) => {
    setSinistres(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const handleValider = () => {
    const donnees: DonneesAntecedents = { permis, sinistres, ancienAssureur, alertes };
    onValider(donnees);
    setValide(true);
    setOuvert(false);
  };

  // Badge du bouton trigger
  const rouges = alertes.filter(a => a.niveau === "rouge").length;
  const oranges = alertes.filter(a => a.niveau === "orange").length;
  const triggerColor = valide
    ? rouges > 0 ? "var(--madel-rose)" : oranges > 0 ? "#E8722A" : "#2E7D32"
    : "var(--madel-border)";
  const triggerBg = valide
    ? rouges > 0 ? "var(--madel-rose-light)" : oranges > 0 ? "#FEF8EE" : "#F1FAF3"
    : "var(--madel-white)";

  return (
    <>
      {/* ── Bouton trigger ── */}
      <button
        onClick={() => setOuvert(true)}
        style={{
          width: "100%",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "13px 16px",
          borderRadius: "var(--madel-radius-md)",
          border: `2px solid ${triggerColor}`,
          background: triggerBg,
          cursor: "pointer",
          fontFamily: "var(--madel-font)",
          transition: "all .2s",
          marginBottom: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 9,
            background: "var(--madel-rose-light)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, flexShrink: 0,
          }}>📋</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--madel-navy)" }}>
              Antécédents & Historique assuré
            </div>
            <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1 }}>
              {valide
                ? [
                    permis.numero && "Permis renseigné",
                    sinistres.length > 0 && `${sinistres.length} sinistre${sinistres.length > 1 ? "s" : ""}`,
                    ancienAssureur.nom && ancienAssureur.nom,
                  ].filter(Boolean).join(" · ") || "Complété"
                : "Permis · Sinistres · Ancien assureur — Cliquez pour compléter"
              }
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {!valide && <Badge type="grey">Non renseigné</Badge>}
          {valide && rouges > 0 && <Badge type="rouge">⛔ {rouges} critique{rouges > 1 ? "s" : ""}</Badge>}
          {valide && oranges > 0 && <Badge type="orange">⚠ {oranges} attention{oranges > 1 ? "s" : ""}</Badge>}
          {valide && rouges === 0 && oranges === 0 && <Badge type="green">✅ Profil sain</Badge>}
          <span style={{ color: "var(--madel-muted)", fontSize: 16 }}>›</span>
        </div>
      </button>

      {/* ── Overlay ── */}
      {ouvert && (
        <div
          onClick={() => setOuvert(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(26,43,95,.45)",
            zIndex: 400,
          }}
        />
      )}

      {/* ── Tiroir ── */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: 520, maxWidth: "95vw",
        background: "#fff",
        zIndex: 500,
        display: "flex", flexDirection: "column",
        boxShadow: "var(--madel-shadow-lg)",
        transform: ouvert ? "translateX(0)" : "translateX(100%)",
        transition: "transform .35s cubic-bezier(.4,0,.2,1)",
      }}>

        {/* Header tiroir */}
        <div style={{
          background: "var(--madel-navy)",
          padding: "16px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div>
            <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>
              📋 Antécédents & Historique assuré
            </div>
            <div style={{ color: "var(--madel-rose-mid)", fontSize: 10, marginTop: 2 }}>
              Permis de conduire · Sinistres · Ancien assureur
            </div>
          </div>
          <button
            onClick={() => setOuvert(false)}
            style={{
              border: "none", background: "rgba(255,255,255,.15)", color: "#fff",
              width: 32, height: 32, borderRadius: 8, cursor: "pointer", fontSize: 18,
            }}
          >×</button>
        </div>

        {/* Corps tiroir */}
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 20px" }}>

          {/* ── PERMIS ── */}
          <DrawerSection titre="🪪 Permis de conduire">
            <div style={grid2}>
              <div>
                <Label>Numéro de permis</Label>
                <input
                  type="text" placeholder="12AB34567" maxLength={20}
                  value={permis.numero}
                  onChange={e => setPermis(p => ({ ...p, numero: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <Label>Catégorie(s)</Label>
                <select
                  value={permis.categorie}
                  onChange={e => setPermis(p => ({ ...p, categorie: e.target.value }))}
                  style={selectStyle}
                >
                  <option value="B">B — Voiture (≤ 3,5t)</option>
                  <option value="BE">BE — Voiture + remorque</option>
                  <option value="B_A2">B + A2 — Voiture + moto intermédiaire</option>
                  <option value="B_A">B + A — Toutes catégories</option>
                  <option value="C">C — Poids lourd</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div>
              <Label>Retrait ou suspension de permis</Label>
              <ToggleGroup
                value={permis.suspension}
                onChange={v => setPermis(p => ({ ...p, suspension: v }))}
              />
            </div>

            {permis.suspension && (
              <div style={{
                marginTop: 10, padding: 12,
                background: "var(--madel-rose-light)",
                borderRadius: 10, border: "1px solid var(--madel-rose-mid)",
              }}>
                <div style={grid2}>
                  <div>
                    <Label>Type</Label>
                    <select value={permis.suspensionType}
                      onChange={e => setPermis(p => ({ ...p, suspensionType: e.target.value }))}
                      style={selectStyle}
                    >
                      <option value="suspension">Suspension</option>
                      <option value="retrait">Retrait (annulation)</option>
                      <option value="restriction">Restriction (points)</option>
                    </select>
                  </div>
                  <div>
                    <Label>Motif</Label>
                    <select value={permis.suspensionMotif}
                      onChange={e => setPermis(p => ({ ...p, suspensionMotif: e.target.value }))}
                      style={selectStyle}
                    >
                      <option value="alcool">Alcoolémie</option>
                      <option value="stup">Stupéfiants</option>
                      <option value="vitesse">Excès de vitesse</option>
                      <option value="delit_fuite">Délit de fuite</option>
                      <option value="autre">Autre infraction</option>
                    </select>
                  </div>
                </div>
                <div style={{ ...grid2, marginTop: 8 }}>
                  <div>
                    <Label>Date de début</Label>
                    <input type="date" value={permis.suspensionDebut}
                      onChange={e => setPermis(p => ({ ...p, suspensionDebut: e.target.value }))}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <Label>Durée</Label>
                    <select value={permis.suspensionDuree}
                      onChange={e => setPermis(p => ({ ...p, suspensionDuree: e.target.value }))}
                      style={selectStyle}
                    >
                      {["1","3","6","12","24","36"].map(d => (
                        <option key={d} value={d}>{d} mois{d === "36" ? " +" : ""}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <AlerteBox niveau="rouge">
                  ⚠ Suspension ou retrait : refus possible, BCT à anticiper.
                </AlerteBox>
              </div>
            )}
          </DrawerSection>

          {/* ── SINISTRES ── */}
          <DrawerSection titre="🚨 Sinistres déclarés — 24 derniers mois">
            {sinistres.length === 0 && (
              <div style={{ fontSize: 11, color: "var(--madel-muted)", padding: "6px 0 10px" }}>
                Aucun sinistre déclaré sur les 24 derniers mois.
              </div>
            )}
            {sinistres.map((s, i) => (
              <div key={s.id} style={{
                background: "var(--madel-bg)", borderRadius: 10,
                padding: 12, border: "1px solid var(--madel-border)",
                marginBottom: 8, position: "relative",
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "var(--madel-muted)", marginBottom: 8, textTransform: "uppercase", letterSpacing: ".05em" }}>
                  Sinistre {i + 1}
                </div>
                <button
                  onClick={() => supprimerSinistre(s.id)}
                  style={{ position: "absolute", top: 10, right: 10, border: "none", background: "none", color: "var(--madel-muted)", cursor: "pointer", fontSize: 16, padding: "2px 6px", borderRadius: 5 }}
                >×</button>
                <div style={{ ...grid2, marginBottom: 8 }}>
                  <div>
                    <Label>Date du sinistre</Label>
                    <input type="date" value={s.date}
                      onChange={e => updateSinistre(s.id, "date", e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <Label>Type de sinistre</Label>
                    <select value={s.type}
                      onChange={e => updateSinistre(s.id, "type", e.target.value)}
                      style={selectStyle}
                    >
                      <option value="">— Choisir —</option>
                      {TYPES_SINISTRE.map(t => (
                        <option key={t.v} value={t.v}>{t.l}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div style={grid2}>
                  <div>
                    <Label>Responsabilité</Label>
                    <select value={s.responsabilite}
                      onChange={e => updateSinistre(s.id, "responsabilite", e.target.value)}
                      style={selectStyle}
                    >
                      <option value="">— Choisir —</option>
                      <option value="responsable">Responsable</option>
                      <option value="non_responsable">Non responsable</option>
                      <option value="partiel">Partiellement responsable</option>
                      <option value="tiers">Tiers identifié</option>
                    </select>
                  </div>
                  <div>
                    <Label>Montant estimé (€)</Label>
                    <input type="number" value={s.montant || ""} placeholder="0" min={0} step={100}
                      onChange={e => updateSinistre(s.id, "montant", +e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={ajouterSinistre}
              style={{
                width: "100%", padding: 9,
                border: "2px dashed var(--madel-border)",
                borderRadius: 9, background: "transparent",
                color: "var(--madel-muted)", fontSize: 12,
                cursor: "pointer", fontFamily: "var(--madel-font)",
                transition: "all .15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--madel-rose-mid)"; e.currentTarget.style.color = "var(--madel-rose)"; e.currentTarget.style.background = "var(--madel-rose-light)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--madel-border)"; e.currentTarget.style.color = "var(--madel-muted)"; e.currentTarget.style.background = "transparent"; }}
            >
              + Ajouter un sinistre
            </button>
          </DrawerSection>

          {/* ── ANCIEN ASSUREUR ── */}
          <DrawerSection titre="🏢 Précédent assureur">
            <div style={{ ...grid2, marginBottom: 10 }}>
              <div>
                <Label>Nom de la compagnie</Label>
                <input type="text" placeholder="Ex : AXA, MAAF, MAIF…"
                  value={ancienAssureur.nom}
                  onChange={e => setAncienAssureur(a => ({ ...a, nom: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <Label>Numéro de contrat</Label>
                <input type="text" placeholder="Optionnel"
                  value={ancienAssureur.numeroContrat}
                  onChange={e => setAncienAssureur(a => ({ ...a, numeroContrat: e.target.value }))}
                  style={inputStyle}
                />
              </div>
            </div>
            <div style={{ ...grid2, marginBottom: 10 }}>
              <div>
                <Label>Date de début du contrat</Label>
                <input type="date" value={ancienAssureur.dateDebut}
                  onChange={e => setAncienAssureur(a => ({ ...a, dateDebut: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <Label>Date de fin</Label>
                <input type="date" value={ancienAssureur.dateFin}
                  onChange={e => setAncienAssureur(a => ({ ...a, dateFin: e.target.value }))}
                  style={inputStyle}
                />
              </div>
            </div>
            {anciennete && (
              <div style={{
                fontSize: 10, marginBottom: 10,
                color: anciennete.mois >= 24 ? "var(--madel-success)" : anciennete.mois >= 12 ? "var(--madel-muted)" : "var(--madel-rose)",
              }}>
                📅 Ancienneté : {anciennete.ans} an{anciennete.ans > 1 ? "s" : ""}
                {anciennete.reste > 0 ? ` et ${anciennete.reste} mois` : ""} de couverture continue
              </div>
            )}
            <div>
              <Label>Motif de résiliation</Label>
              <select value={ancienAssureur.motifResiliation}
                onChange={e => setAncienAssureur(a => ({ ...a, motifResiliation: e.target.value }))}
                style={selectStyle}
              >
                <option value="">— Sélectionner —</option>
                <option value="echeance">Résiliation à l'échéance</option>
                <option value="loi_hamon">Résiliation loi Hamon (après 1 an)</option>
                <option value="non_paiement">Résiliation pour non-paiement</option>
                <option value="sinistralite">Résiliation pour sinistralité excessive</option>
                <option value="fausse_declaration">Résiliation pour fausse déclaration</option>
                <option value="judiciaire">Résiliation judiciaire</option>
                <option value="premier_contrat">Premier contrat — pas d'antécédent</option>
              </select>
            </div>
            {MOTIFS_RISQUE.includes(ancienAssureur.motifResiliation) && (
              <AlerteBox niveau="rouge" style={{ marginTop: 8 }}>
                ⚠ Résiliation par l'assureur : obligation de déclaration — BCT à anticiper.
              </AlerteBox>
            )}
          </DrawerSection>

          {/* ── RÉCAP ALERTES ── */}
          {alertes.length > 0 ? (
            <div style={{
              padding: "12px 14px", background: "var(--madel-bg)",
              borderRadius: 10, border: "1px solid var(--madel-border)",
            }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 8 }}>
                Alertes de souscription détectées
              </div>
              {alertes.map((a, i) => (
                <AlerteBox key={i} niveau={a.niveau} style={{ marginBottom: 6 }}>
                  {a.message}
                </AlerteBox>
              ))}
            </div>
          ) : (
            <AlerteBox niveau="info">
              ✅ Aucune alerte — profil standard, souscription possible
            </AlerteBox>
          )}
        </div>

        {/* Footer tiroir */}
        <div style={{
          padding: "14px 20px",
          borderTop: "1px solid var(--madel-border)",
          display: "flex", gap: 10,
          background: "#fff", flexShrink: 0,
        }}>
          <button
            onClick={() => setOuvert(false)}
            style={{
              padding: "11px 18px", border: "1.5px solid var(--madel-border)",
              borderRadius: 10, background: "#fff", color: "var(--madel-text)",
              fontSize: 13, cursor: "pointer", fontFamily: "var(--madel-font)",
            }}
          >
            Annuler
          </button>
          <button
            onClick={handleValider}
            style={{
              flex: 1, background: "var(--madel-rose)", color: "#fff",
              border: "none", borderRadius: 10, padding: 11,
              fontSize: 13, fontWeight: 700, cursor: "pointer",
              fontFamily: "var(--madel-font)",
            }}
          >
            ✓ Valider les antécédents
          </button>
        </div>
      </div>
    </>
  );
}

// ── Sous-composants internes ─────────────────────────────────

function DrawerSection({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: "var(--madel-navy)",
        textTransform: "uppercase", letterSpacing: ".05em",
        marginBottom: 12, paddingBottom: 6,
        borderBottom: "2px solid var(--madel-rose-light)",
        display: "flex", alignItems: "center", gap: 7,
      }}>
        {titre}
      </div>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label style={{
      display: "block", fontSize: 9, fontWeight: 700,
      color: "var(--madel-muted)", textTransform: "uppercase",
      letterSpacing: ".05em", marginBottom: 4,
    }}>
      {children}
    </label>
  );
}

function ToggleGroup({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div style={{
      display: "flex", borderRadius: 8, overflow: "hidden",
      border: "1.5px solid var(--madel-border)",
    }}>
      {[{ v: false, l: "Non" }, { v: true, l: "Oui" }].map(opt => (
        <button
          key={String(opt.v)}
          onClick={() => onChange(opt.v)}
          style={{
            flex: 1, padding: "7px 10px", border: "none",
            background: value === opt.v
              ? opt.v ? "var(--madel-rose)" : "var(--madel-navy)"
              : "#fff",
            color: value === opt.v ? "#fff" : "var(--madel-text)",
            fontSize: 11, fontWeight: value === opt.v ? 700 : 500,
            cursor: "pointer", fontFamily: "var(--madel-font)",
            transition: "all .15s",
          }}
        >
          {opt.l}
        </button>
      ))}
    </div>
  );
}

function Badge({ type, children }: { type: "grey" | "rouge" | "orange" | "green"; children: React.ReactNode }) {
  const styles = {
    grey:   { background: "var(--madel-bg)",         color: "var(--madel-muted)" },
    rouge:  { background: "var(--madel-danger-bg)",  color: "var(--madel-danger)" },
    orange: { background: "var(--madel-warning-bg)", color: "var(--madel-warning)" },
    green:  { background: "var(--madel-success-bg)", color: "var(--madel-success)" },
  }[type];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "3px 9px", borderRadius: 20, fontSize: 10, fontWeight: 700,
      ...styles,
    }}>
      {children}
    </span>
  );
}

function AlerteBox({ niveau, children, style }: {
  niveau: "rouge" | "orange" | "info";
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const cfg = {
    rouge:  { bg: "var(--madel-danger-bg)",  border: "var(--madel-rose)",  color: "var(--madel-danger)" },
    orange: { bg: "var(--madel-warning-bg)", border: "#E8722A",            color: "var(--madel-warning)" },
    info:   { bg: "var(--madel-info-bg)",    border: "var(--madel-blue)",  color: "var(--madel-info)" },
  }[niveau];
  return (
    <div style={{
      padding: "8px 12px", borderRadius: 8, fontSize: 11,
      background: cfg.bg, borderLeft: `3px solid ${cfg.border}`, color: cfg.color,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── Styles partagés ──────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "7px 10px", borderRadius: 8,
  border: "1.5px solid var(--madel-border)", fontSize: 12,
  fontFamily: "var(--madel-font)",
  color: "var(--madel-navy)", background: "#fff",
  outline: "none",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238A86A0'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 9px center",
  paddingRight: 26,
  cursor: "pointer",
};

const grid2: React.CSSProperties = {
  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
};
