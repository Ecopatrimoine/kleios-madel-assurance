// ============================================================
// PAGE LISTE ASSURÉS — Kleios Madel Assurance
// ============================================================
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useAuth } from "../hooks/useAuth";
import type { DbAssure } from "../lib/supabase";

// ── Utilitaires ──────────────────────────────────────────────

const calculerAge = (dateNaissance: string): number => {
  const today = new Date();
  const naissance = new Date(dateNaissance);
  let age = today.getFullYear() - naissance.getFullYear();
  if (today < new Date(today.getFullYear(), naissance.getMonth(), naissance.getDate())) age--;
  return age;
};

const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });

const initialesAvatar = (nom: string, prenom: string): string =>
  `${prenom.charAt(0)}${nom.charAt(0)}`.toUpperCase();

const COULEURS_AVATAR = [
  { bg: "#FCEEF2", text: "#D42B5A" },
  { bg: "#EBF4FB", text: "#4A8FD4" },
  { bg: "#EAF3DE", text: "#2E7D32" },
  { bg: "#FAEEDA", text: "#7B4F00" },
  { bg: "#EDE8FB", text: "#5B3FBF" },
];

const couleurAvatar = (nom: string) => {
  const idx = nom.charCodeAt(0) % COULEURS_AVATAR.length;
  return COULEURS_AVATAR[idx];
};

// ── Composant principal ──────────────────────────────────────

export default function ListeAssures() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [assures, setAssures]     = useState<DbAssure[]>([]);
  const [loading, setLoading]     = useState(true);
  const [erreur, setErreur]       = useState<string | null>(null);
  const [recherche, setRecherche] = useState("");
  const [tri, setTri]             = useState<{ col: keyof DbAssure; dir: "asc" | "desc" }>({ col: "nom", dir: "asc" });

  // Chargement depuis Supabase
  useEffect(() => {
    if (!user) return;
    const charger = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("assures")
        .select("*")
        .eq("user_id", user.id)
        .order("nom", { ascending: true });

      if (error) {
        setErreur("Impossible de charger les assurés.");
        console.error(error);
      } else {
        setAssures(data ?? []);
      }
      setLoading(false);
    };
    charger();
  }, [user]);

  // Filtrage + tri
  const assuresFiltres = assures
    .filter(a => {
      const q = recherche.toLowerCase();
      return (
        a.nom.toLowerCase().includes(q) ||
        a.prenom.toLowerCase().includes(q) ||
        a.email?.toLowerCase().includes(q) ||
        a.ville?.toLowerCase().includes(q) ||
        a.numero_client?.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      const va = String(a[tri.col] ?? "").toLowerCase();
      const vb = String(b[tri.col] ?? "").toLowerCase();
      return tri.dir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
    });

  const toggleTri = (col: keyof DbAssure) => {
    setTri(prev => prev.col === col
      ? { col, dir: prev.dir === "asc" ? "desc" : "asc" }
      : { col, dir: "asc" }
    );
  };

  const iconeTri = (col: keyof DbAssure) => {
    if (tri.col !== col) return <span style={{ color: "var(--madel-border)", marginLeft: 4 }}>↕</span>;
    return <span style={{ color: "var(--madel-rose)", marginLeft: 4 }}>{tri.dir === "asc" ? "↑" : "↓"}</span>;
  };

  // ── Render ─────────────────────────────────────────────────

  return (
    <div style={{ padding: "24px 28px", maxWidth: 1100, margin: "0 auto" }}>

      {/* En-tête */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: "var(--madel-navy)", margin: 0 }}>
            Assurés
          </h1>
          <p style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 3 }}>
            {assures.length} assuré{assures.length > 1 ? "s" : ""} dans le portefeuille
          </p>
        </div>
        <button
          onClick={() => navigate("/assures/nouveau")}
          style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "var(--madel-rose)", color: "#fff",
            border: "none", borderRadius: 10, padding: "10px 18px",
            fontSize: 13, fontWeight: 700, cursor: "pointer",
            fontFamily: "var(--madel-font)",
          }}
        >
          + Nouvel assuré
        </button>
      </div>

      {/* Barre de recherche */}
      <div style={{ position: "relative", marginBottom: 16 }}>
        <span style={{
          position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
          fontSize: 16, pointerEvents: "none",
        }}>🔍</span>
        <input
          type="text"
          placeholder="Rechercher par nom, email, ville, numéro client…"
          value={recherche}
          onChange={e => setRecherche(e.target.value)}
          style={{
            width: "100%", padding: "11px 14px 11px 38px",
            borderRadius: 10, border: "1.5px solid var(--madel-border)",
            fontSize: 13, fontFamily: "var(--madel-font)",
            color: "var(--madel-navy)", background: "#fff",
            outline: "none", boxSizing: "border-box",
          }}
          onFocus={e => e.target.style.borderColor = "var(--madel-rose)"}
          onBlur={e => e.target.style.borderColor = "var(--madel-border)"}
        />
        {recherche && (
          <button onClick={() => setRecherche("")} style={{
            position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
            border: "none", background: "none", color: "var(--madel-muted)",
            cursor: "pointer", fontSize: 18, padding: "0 4px",
          }}>×</button>
        )}
      </div>

      {/* États */}
      {loading && (
        <div style={{ textAlign: "center", padding: 40, color: "var(--madel-muted)" }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>⏳</div>
          Chargement des assurés…
        </div>
      )}

      {erreur && (
        <div style={{
          padding: "12px 16px", borderRadius: 10, marginBottom: 16,
          background: "var(--madel-danger-bg)", color: "var(--madel-danger)",
          border: "1px solid var(--madel-rose-mid)", fontSize: 13,
        }}>
          ⚠ {erreur}
        </div>
      )}

      {!loading && !erreur && assuresFiltres.length === 0 && (
        <div style={{ textAlign: "center", padding: 40, color: "var(--madel-muted)" }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>👤</div>
          {recherche ? `Aucun résultat pour "${recherche}"` : "Aucun assuré dans le portefeuille"}
        </div>
      )}

      {/* Tableau */}
      {!loading && assuresFiltres.length > 0 && (
        <div style={{
          background: "#fff", borderRadius: 14,
          border: "1px solid var(--madel-border)",
          overflow: "hidden",
        }}>
          {/* En-têtes colonnes */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1.5fr 1fr 1.2fr 1fr 80px",
            padding: "10px 16px",
            background: "var(--madel-bg)",
            borderBottom: "1px solid var(--madel-border)",
          }}>
            {[
              { col: "nom" as keyof DbAssure,            label: "Assuré" },
              { col: "email" as keyof DbAssure,          label: "Contact" },
              { col: "date_naissance" as keyof DbAssure, label: "Âge" },
              { col: "ville" as keyof DbAssure,          label: "Ville" },
              { col: "numero_client" as keyof DbAssure,  label: "N° client" },
            ].map(({ col, label }) => (
              <button key={col} onClick={() => toggleTri(col)} style={{
                border: "none", background: "none", textAlign: "left",
                fontSize: 10, fontWeight: 700, color: "var(--madel-muted)",
                textTransform: "uppercase", letterSpacing: ".05em",
                cursor: "pointer", padding: 0, fontFamily: "var(--madel-font)",
                display: "flex", alignItems: "center",
              }}>
                {label}{iconeTri(col)}
              </button>
            ))}
            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".05em" }}>
              Actions
            </div>
          </div>

          {/* Lignes */}
          {assuresFiltres.map((assure, idx) => {
            const couleur = couleurAvatar(assure.nom);
            return (
              <div
                key={assure.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.5fr 1fr 1.2fr 1fr 80px",
                  padding: "12px 16px",
                  borderBottom: idx < assuresFiltres.length - 1 ? "1px solid var(--madel-border)" : "none",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "background .12s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--madel-bg)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#fff"}
                onClick={() => navigate(`/assures/${assure.id}`)}
              >
                {/* Nom + avatar */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: couleur.bg, color: couleur.text,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700,
                  }}>
                    {initialesAvatar(assure.nom, assure.prenom)}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--madel-navy)" }}>
                      {assure.prenom} {assure.nom}
                    </div>
                    <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1 }}>
                      Assuré depuis {new Date(assure.created_at).getFullYear()}
                    </div>
                  </div>
                </div>

                {/* Email + téléphone */}
                <div>
                  <div style={{ fontSize: 12, color: "var(--madel-text)" }}>{assure.email}</div>
                  <div style={{ fontSize: 11, color: "var(--madel-muted)", marginTop: 1 }}>{assure.telephone}</div>
                </div>

                {/* Âge */}
                <div style={{ fontSize: 12, color: "var(--madel-text)" }}>
                  {assure.date_naissance
                    ? `${calculerAge(assure.date_naissance)} ans`
                    : "—"
                  }
                  {assure.date_naissance && (
                    <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1 }}>
                      {formatDate(assure.date_naissance)}
                    </div>
                  )}
                </div>

                {/* Ville */}
                <div style={{ fontSize: 12, color: "var(--madel-text)" }}>
                  {assure.ville || "—"}
                  {assure.code_postal && (
                    <div style={{ fontSize: 10, color: "var(--madel-muted)", marginTop: 1 }}>
                      {assure.code_postal}
                    </div>
                  )}
                </div>

                {/* Numéro client */}
                <div style={{
                  display: "inline-flex", alignItems: "center",
                  background: "var(--madel-bg)", color: "var(--madel-navy)",
                  borderRadius: 6, padding: "3px 8px",
                  fontSize: 11, fontWeight: 600, fontFamily: "monospace",
                  border: "1px solid var(--madel-border)",
                }}>
                  {assure.numero_client}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: 6 }} onClick={e => e.stopPropagation()}>
                  <button
                    onClick={() => navigate(`/assures/${assure.id}`)}
                    title="Voir la fiche"
                    style={{
                      width: 30, height: 30, borderRadius: 7,
                      border: "1px solid var(--madel-border)", background: "#fff",
                      cursor: "pointer", fontSize: 14,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >👁</button>
                  <button
                    onClick={() => navigate(`/simulateurs/auto?assure=${assure.id}`)}
                    title="Simuler un contrat"
                    style={{
                      width: 30, height: 30, borderRadius: 7,
                      border: "1px solid var(--madel-border)", background: "#fff",
                      cursor: "pointer", fontSize: 14,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >🚗</button>
                </div>
              </div>
            );
          })}

          {/* Footer */}
          <div style={{
            padding: "10px 16px",
            background: "var(--madel-bg)",
            borderTop: "1px solid var(--madel-border)",
            fontSize: 11, color: "var(--madel-muted)",
            display: "flex", justifyContent: "space-between",
          }}>
            <span>
              {assuresFiltres.length === assures.length
                ? `${assures.length} assuré${assures.length > 1 ? "s" : ""}`
                : `${assuresFiltres.length} résultat${assuresFiltres.length > 1 ? "s" : ""} sur ${assures.length}`
              }
            </span>
            <span>Cliquez sur une ligne pour ouvrir la fiche</span>
          </div>
        </div>
      )}
    </div>
  );
}
