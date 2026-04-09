// ============================================================
// PAGE FICHE ASSURÉ — Kleios Madel Assurance
// ============================================================
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useAuth } from "../hooks/useAuth";
import type { DbAssure, DbContrat, DbSinistre } from "../lib/supabase";

// ── Utilitaires ──────────────────────────────────────────────

const formatDate = (d?: string) => d
  ? new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" })
  : "—";

const calculerAge = (d?: string) => {
  if (!d) return null;
  const today = new Date();
  const naissance = new Date(d);
  let age = today.getFullYear() - naissance.getFullYear();
  if (today < new Date(today.getFullYear(), naissance.getMonth(), naissance.getDate())) age--;
  return age;
};

const LABEL_CONTRAT: Record<string, string> = {
  auto: "🚗 Auto", moto: "🏍️ Moto", mrh: "🏠 MRH",
  pno: "🏢 PNO", sante: "🏥 Santé", prevoyance_individuelle: "🛡️ Prévoyance",
  prevoyance_collective: "👥 Prév. collective", deces: "⚫ Décès",
  dependance: "♿ Dépendance", emprunteur: "🏦 Emprunteur",
  rc_pro: "💼 RC Pro", gav: "🎯 GAV", scolaire: "🎒 Scolaire",
};

const COULEUR_STATUT_CONTRAT: Record<string, { bg: string; text: string; label: string }> = {
  actif:     { bg: "#EAF3DE", text: "#2E7D32", label: "Actif" },
  suspendu:  { bg: "#FAEEDA", text: "#7B4F00", label: "Suspendu" },
  resilie:   { bg: "#FCEBEB", text: "#A8204A", label: "Résilié" },
  en_cours:  { bg: "#EBF4FB", text: "#185FA5", label: "En cours" },
};

const COULEUR_STATUT_SINISTRE: Record<string, { bg: string; text: string; label: string }> = {
  declare:   { bg: "#EBF4FB", text: "#185FA5", label: "Déclaré" },
  en_cours:  { bg: "#FAEEDA", text: "#7B4F00", label: "En cours" },
  expertise: { bg: "#EDE8FB", text: "#5B3FBF", label: "Expertise" },
  clos:      { bg: "#EAF3DE", text: "#2E7D32", label: "Clos" },
  refuse:    { bg: "#FCEBEB", text: "#A8204A", label: "Refusé" },
};

// ── Composant principal ──────────────────────────────────────

export default function FicheAssure() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [assure, setAssure]     = useState<DbAssure | null>(null);
  const [contrats, setContrats] = useState<DbContrat[]>([]);
  const [sinistres, setSinistres] = useState<DbSinistre[]>([]);
  const [loading, setLoading]   = useState(true);
  const [onglet, setOnglet]     = useState<"infos" | "contrats" | "sinistres">("infos");

  useEffect(() => {
    if (!user || !id) return;
    const charger = async () => {
      setLoading(true);

      const [ra, rc, rs] = await Promise.all([
        supabase.from("assures").select("*").eq("id", id).eq("user_id", user.id).single(),
        supabase.from("contrats").select("*").eq("assure_id", id).eq("user_id", user.id).order("date_effet", { ascending: false }),
        supabase.from("sinistres").select("*").eq("assure_id", id).eq("user_id", user.id).order("date_sinistre", { ascending: false }),
      ]);

      if (ra.data) setAssure(ra.data);
      if (rc.data) setContrats(rc.data);
      if (rs.data) setSinistres(rs.data);
      setLoading(false);
    };
    charger();
  }, [user, id]);

  if (loading) return (
    <div style={{ padding: 40, textAlign: "center", color: "var(--madel-muted)" }}>
      <div style={{ fontSize: 32, marginBottom: 10 }}>⏳</div>Chargement…
    </div>
  );

  if (!assure) return (
    <div style={{ padding: 40, textAlign: "center", color: "var(--madel-muted)" }}>
      <div style={{ fontSize: 32, marginBottom: 10 }}>❌</div>Assuré introuvable
    </div>
  );

  const age = calculerAge(assure.date_naissance);
  const contratsActifs = contrats.filter(c => c.statut === "actif").length;
  const sinistresEnCours = sinistres.filter(s => s.statut === "en_cours" || s.statut === "declare").length;
  const primeTotal = contrats.filter(c => c.statut === "actif").reduce((s, c) => s + (c.prime_annuelle || 0), 0);

  return (
    <div style={{ padding: "24px 28px", maxWidth: 1100, margin: "0 auto" }}>

      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, fontSize: 12, color: "var(--madel-muted)" }}>
        <button onClick={() => navigate("/assures")} style={{ border: "none", background: "none", color: "var(--madel-muted)", cursor: "pointer", padding: 0, fontSize: 12, fontFamily: "var(--madel-font)" }}>
          Assurés
        </button>
        <span>›</span>
        <span style={{ color: "var(--madel-navy)", fontWeight: 600 }}>{assure.prenom} {assure.nom}</span>
      </div>

      {/* En-tête fiche */}
      <div style={{
        background: "var(--madel-navy)", borderRadius: 16,
        padding: "24px 28px", marginBottom: 20,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Avatar */}
          <div style={{
            width: 60, height: 60, borderRadius: 14,
            background: "var(--madel-rose)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, fontWeight: 800, color: "#fff", flexShrink: 0,
          }}>
            {assure.prenom.charAt(0)}{assure.nom.charAt(0)}
          </div>
          <div>
            <h1 style={{ color: "#fff", fontSize: 22, fontWeight: 800, margin: 0 }}>
              {assure.prenom} {assure.nom}
            </h1>
            <div style={{ color: "var(--madel-rose-mid)", fontSize: 12, marginTop: 4, display: "flex", gap: 14 }}>
              <span>{assure.numero_client}</span>
              {age && <span>{age} ans</span>}
              {assure.ville && <span>📍 {assure.ville}</span>}
            </div>
          </div>
        </div>

        {/* KPIs rapides */}
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { label: "Contrats actifs",    valeur: contratsActifs,                   icone: "📄" },
            { label: "Sinistres en cours", valeur: sinistresEnCours,                 icone: "🚨" },
            { label: "Primes / an",        valeur: `${primeTotal.toLocaleString("fr-FR")} €`, icone: "💶" },
          ].map(kpi => (
            <div key={kpi.label} style={{
              background: "rgba(255,255,255,.1)", borderRadius: 12,
              padding: "10px 16px", textAlign: "center", minWidth: 100,
            }}>
              <div style={{ fontSize: 18, marginBottom: 3 }}>{kpi.icone}</div>
              <div style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{kpi.valeur}</div>
              <div style={{ color: "var(--madel-rose-mid)", fontSize: 10, marginTop: 2 }}>{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bouton simulateur */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button
          onClick={() => navigate(`/simulateurs/auto?assure=${assure.id}`)}
          style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "var(--madel-rose)", color: "#fff",
            border: "none", borderRadius: 10, padding: "9px 16px",
            fontSize: 12, fontWeight: 700, cursor: "pointer",
            fontFamily: "var(--madel-font)",
          }}
        >
          🚗 Simuler un contrat Auto
        </button>
        <button
          onClick={() => navigate("/assures")}
          style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "#fff", color: "var(--madel-navy)",
            border: "1px solid var(--madel-border)", borderRadius: 10, padding: "9px 16px",
            fontSize: 12, fontWeight: 600, cursor: "pointer",
            fontFamily: "var(--madel-font)",
          }}
        >
          ← Retour à la liste
        </button>
      </div>

      {/* Onglets */}
      <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
        <div style={{ display: "flex", borderBottom: "1px solid var(--madel-border)", background: "var(--madel-bg)" }}>
          {([
            { k: "infos",     label: "📋 Informations",                    badge: null },
            { k: "contrats",  label: "📄 Contrats",                        badge: contrats.length },
            { k: "sinistres", label: "🚨 Sinistres",                       badge: sinistres.length },
          ] as { k: "infos" | "contrats" | "sinistres"; label: string; badge: number | null }[]).map(tab => (
            <button key={tab.k} onClick={() => setOnglet(tab.k)} style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "12px 20px", border: "none",
              background: onglet === tab.k ? "#fff" : "transparent",
              color: onglet === tab.k ? "var(--madel-rose)" : "var(--madel-muted)",
              fontWeight: onglet === tab.k ? 700 : 500,
              fontSize: 13, cursor: "pointer",
              borderBottom: `2px solid ${onglet === tab.k ? "var(--madel-rose)" : "transparent"}`,
              fontFamily: "var(--madel-font)",
            }}>
              {tab.label}
              {tab.badge !== null && tab.badge > 0 && (
                <span style={{
                  background: onglet === tab.k ? "var(--madel-rose)" : "var(--madel-border)",
                  color: onglet === tab.k ? "#fff" : "var(--madel-text)",
                  borderRadius: 20, padding: "1px 7px", fontSize: 10, fontWeight: 700,
                }}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        <div style={{ padding: 24 }}>

          {/* ── ONGLET INFOS ── */}
          {onglet === "infos" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <SectionTitre>Identité</SectionTitre>
                <InfoGrid items={[
                  { label: "Nom complet",     valeur: `${assure.prenom} ${assure.nom}` },
                  { label: "Date de naissance", valeur: formatDate(assure.date_naissance) },
                  { label: "Âge",             valeur: age ? `${age} ans` : "—" },
                  { label: "N° client",       valeur: assure.numero_client, mono: true },
                ]} />
              </div>
              <div>
                <SectionTitre>Coordonnées</SectionTitre>
                <InfoGrid items={[
                  { label: "Email",     valeur: assure.email },
                  { label: "Téléphone", valeur: assure.telephone },
                  { label: "Adresse",   valeur: assure.adresse },
                  { label: "Ville",     valeur: assure.ville ? `${assure.code_postal} ${assure.ville}` : "—" },
                ]} />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <SectionTitre>Informations dossier</SectionTitre>
                <InfoGrid items={[
                  { label: "Date création",  valeur: formatDate(assure.created_at) },
                  { label: "Dernière MAJ",   valeur: formatDate(assure.updated_at) },
                  { label: "Contrats actifs", valeur: `${contratsActifs} contrat${contratsActifs > 1 ? "s" : ""}` },
                  { label: "Total primes",   valeur: `${primeTotal.toLocaleString("fr-FR")} € / an` },
                ]} />
              </div>
            </div>
          )}

          {/* ── ONGLET CONTRATS ── */}
          {onglet === "contrats" && (
            <div>
              {contrats.length === 0 ? (
                <div style={{ textAlign: "center", padding: 32, color: "var(--madel-muted)" }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>📄</div>
                  Aucun contrat pour cet assuré
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {contrats.map(contrat => {
                    const s = COULEUR_STATUT_CONTRAT[contrat.statut] ?? COULEUR_STATUT_CONTRAT.actif;
                    return (
                      <div key={contrat.id} style={{
                        background: "var(--madel-bg)", borderRadius: 12,
                        padding: "14px 16px", border: "1px solid var(--madel-border)",
                        display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr auto",
                        alignItems: "center", gap: 12,
                      }}>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--madel-navy)" }}>
                            {LABEL_CONTRAT[contrat.type_contrat] ?? `📋 ${contrat.type_contrat}`}
                          </div>
                          <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 2, fontFamily: "monospace" }}>
                            {contrat.numero_contrat}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: 11, color: "var(--madel-muted)" }}>Compagnie</div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--madel-navy)" }}>{contrat.compagnie}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: 11, color: "var(--madel-muted)" }}>Période</div>
                          <div style={{ fontSize: 12, color: "var(--madel-text)" }}>
                            {formatDate(contrat.date_effet)} → {formatDate(contrat.date_echeance)}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: 11, color: "var(--madel-muted)" }}>Prime annuelle</div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--madel-navy)" }}>
                            {contrat.prime_annuelle?.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €
                          </div>
                        </div>
                        <span style={{
                          background: s.bg, color: s.text,
                          borderRadius: 20, padding: "3px 10px",
                          fontSize: 11, fontWeight: 700,
                        }}>
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ── ONGLET SINISTRES ── */}
          {onglet === "sinistres" && (
            <div>
              {sinistres.length === 0 ? (
                <div style={{ textAlign: "center", padding: 32, color: "var(--madel-muted)" }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>🚨</div>
                  Aucun sinistre déclaré
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {sinistres.map(sinistre => {
                    const s = COULEUR_STATUT_SINISTRE[sinistre.statut] ?? COULEUR_STATUT_SINISTRE.declare;
                    return (
                      <div key={sinistre.id} style={{
                        background: "var(--madel-bg)", borderRadius: 12,
                        padding: "14px 16px", border: "1px solid var(--madel-border)",
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--madel-navy)" }}>
                              {sinistre.numero_sinistre}
                            </div>
                            <div style={{ fontSize: 11, color: "var(--madel-muted)", marginTop: 2 }}>
                              {sinistre.type_sinistre.replace(/_/g, " ")} · Déclaré le {formatDate(sinistre.date_declaration)}
                            </div>
                          </div>
                          <span style={{
                            background: s.bg, color: s.text,
                            borderRadius: 20, padding: "3px 10px",
                            fontSize: 11, fontWeight: 700,
                          }}>
                            {s.label}
                          </span>
                        </div>
                        {sinistre.description && (
                          <div style={{ fontSize: 12, color: "var(--madel-text)", marginBottom: 8, lineHeight: 1.5 }}>
                            {sinistre.description}
                          </div>
                        )}
                        <div style={{ display: "flex", gap: 16, fontSize: 11 }}>
                          <span style={{ color: "var(--madel-muted)" }}>
                            Date sinistre : <strong style={{ color: "var(--madel-navy)" }}>{formatDate(sinistre.date_sinistre)}</strong>
                          </span>
                          {sinistre.montant_estime > 0 && (
                            <span style={{ color: "var(--madel-muted)" }}>
                              Montant estimé : <strong style={{ color: "var(--madel-navy)" }}>{sinistre.montant_estime.toLocaleString("fr-FR")} €</strong>
                            </span>
                          )}
                          {sinistre.montant_indemnise > 0 && (
                            <span style={{ color: "var(--madel-muted)" }}>
                              Indemnisé : <strong style={{ color: "#2E7D32" }}>{sinistre.montant_indemnise.toLocaleString("fr-FR")} €</strong>
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Sous-composants ──────────────────────────────────────────

function SectionTitre({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, color: "var(--madel-muted)",
      textTransform: "uppercase", letterSpacing: ".05em",
      marginBottom: 12, paddingBottom: 6,
      borderBottom: "2px solid var(--madel-rose-light)",
    }}>
      {children}
    </div>
  );
}

function InfoGrid({ items }: { items: { label: string; valeur?: string | null; mono?: boolean }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
      {items.map(item => (
        <div key={item.label}>
          <div style={{ fontSize: 10, color: "var(--madel-muted)", marginBottom: 2 }}>{item.label}</div>
          <div style={{
            fontSize: 13, fontWeight: 500, color: "var(--madel-navy)",
            fontFamily: item.mono ? "monospace" : "var(--madel-font)",
          }}>
            {item.valeur || "—"}
          </div>
        </div>
      ))}
    </div>
  );
}
