// ============================================================
// LISTE ASSURÉS — Refonte complète
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useClientsStore } from "../store/clientsStore";
import { STATUT_LABELS, TYPE_LABELS } from "../data/types-clients";
import type { StatutClient, TypeContrat } from "../data/types-clients";

const STATUTS: StatutClient[] = ["prospect", "client_actif", "vip", "archive"];
const CSP_LABELS: Record<string, string> = {
  cadre: "Cadre", non_cadre: "Non-cadre", tns: "TNS", liberal: "Libéral",
  fonctionnaire: "Fonctionnaire", retraite: "Retraité", etudiant: "Étudiant",
};
const selectStyle: React.CSSProperties = {
  padding: "8px 10px", borderRadius: 8, border: "1.5px solid var(--madel-border)",
  fontSize: 12, fontFamily: "var(--madel-font)", color: "var(--madel-navy)",
  background: "#fff", outline: "none", cursor: "pointer", appearance: "none",
};
const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export default function ListeAssures() {
  const navigate = useNavigate();
  const { clients, pickRandom, reset, clientActif } = useClientsStore();

  const [recherche, setRecherche]     = useState("");
  const [filtreStatut, setFiltreStatut] = useState<StatutClient | "tous">("tous");
  const [filtreCsp, setFiltreCsp]     = useState("tous");
  const [filtreType, setFiltreType]   = useState<TypeContrat | "tous">("tous");
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const stats = useMemo(() => ({
    total:    clients.length,
    prospect: clients.filter(c => c.statut === "prospect").length,
    actif:    clients.filter(c => c.statut === "client_actif").length,
    vip:      clients.filter(c => c.statut === "vip").length,
    archive:  clients.filter(c => c.statut === "archive").length,
    totalPrimes: clients.reduce((s, c) => s + c.contrats.filter(ct => ct.statut === "actif").reduce((a, ct) => a + ct.primeAnnuelle, 0), 0),
    totalContrats: clients.reduce((s, c) => s + c.contrats.filter(ct => ct.statut === "actif").length, 0),
  }), [clients]);

  const clientsFiltres = useMemo(() => {
    const q = recherche.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return clients.filter(c => {
      if (filtreStatut !== "tous" && c.statut !== filtreStatut) return false;
      if (filtreCsp !== "tous" && c.csp !== filtreCsp) return false;
      if (filtreType !== "tous" && !c.contrats.some(ct => ct.type === filtreType && ct.statut === "actif")) return false;
      if (q) {
        const h = `${c.nom} ${c.prenom} ${c.ville} ${c.email} ${c.profession}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (!h.includes(q)) return false;
      }
      return true;
    });
  }, [clients, recherche, filtreStatut, filtreCsp, filtreType]);

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1200, margin: "0 auto", padding: "24px 20px 40px" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>👥 Portefeuille clients</h1>
          <p style={{ color: "var(--madel-muted)", fontSize: 13, marginTop: 4 }}>
            {stats.total} clients · {stats.totalContrats} contrats actifs · {eur(stats.totalPrimes)}/an
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button onClick={() => { const c = pickRandom(); navigate(`/assures/${c.id}`); }} style={{
            padding: "10px 18px", borderRadius: 10, border: "none",
            background: "var(--madel-rose)", color: "#fff",
            cursor: "pointer", fontFamily: "var(--madel-font)", fontWeight: 700, fontSize: 13,
          }}>
            🎲 Qui suis-je ?
          </button>
          {!showConfirmReset ? (
            <button onClick={() => setShowConfirmReset(true)} style={{
              padding: "10px 18px", borderRadius: 10, border: "2px solid var(--madel-border)",
              background: "#fff", color: "var(--madel-muted)",
              cursor: "pointer", fontFamily: "var(--madel-font)", fontWeight: 600, fontSize: 12,
            }}>🔄 Reset démo</button>
          ) : (
            <div style={{ display: "flex", gap: 6 }}>
              <button onClick={() => { reset(); setShowConfirmReset(false); }} style={{
                padding: "10px 14px", borderRadius: 10, border: "none",
                background: "#DC2626", color: "#fff",
                cursor: "pointer", fontFamily: "var(--madel-font)", fontWeight: 700, fontSize: 12,
              }}>Confirmer</button>
              <button onClick={() => setShowConfirmReset(false)} style={{
                padding: "10px 14px", borderRadius: 10, border: "1.5px solid var(--madel-border)",
                background: "#fff", color: "var(--madel-navy)",
                cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 12,
              }}>Annuler</button>
            </div>
          )}
        </div>
      </div>

      {/* Bandeau qui suis-je actif */}
      {clientActif && (
        <div style={{ marginBottom: 16, padding: "12px 16px", borderRadius: 12, background: "var(--madel-rose-light)", border: "2px solid var(--madel-rose)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 13, color: "var(--madel-rose-dark)" }}>
            🎲 <strong>Qui suis-je ?</strong> — Vous jouez le rôle de <strong>{clientActif.prenom} {clientActif.nom}</strong>, {clientActif.profession} à {clientActif.ville}
          </div>
          <button onClick={() => navigate(`/assures/${clientActif.id}`)} style={{
            padding: "6px 14px", borderRadius: 8, border: "none",
            background: "var(--madel-rose)", color: "#fff",
            cursor: "pointer", fontFamily: "var(--madel-font)", fontWeight: 700, fontSize: 12,
          }}>Voir ma fiche →</button>
        </div>
      )}

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, marginBottom: 20 }}>
        {[
          { label: "Total", valeur: stats.total, icone: "👥", couleur: "var(--madel-navy)" },
          { label: "Prospects", valeur: stats.prospect, icone: "🎯", couleur: "#2563EB" },
          { label: "Actifs", valeur: stats.actif, icone: "✅", couleur: "#16A34A" },
          { label: "VIP", valeur: stats.vip, icone: "⭐", couleur: "#D97706" },
          { label: "Archivés", valeur: stats.archive, icone: "📦", couleur: "#6B7280" },
        ].map(kpi => (
          <div key={kpi.label} style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--madel-border)", padding: "14px 16px" }}>
            <div style={{ fontSize: 18, marginBottom: 4 }}>{kpi.icone}</div>
            <div style={{ fontSize: 11, color: "var(--madel-muted)" }}>{kpi.label}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: kpi.couleur }}>{kpi.valeur}</div>
          </div>
        ))}
      </div>

      {/* Filtres */}
      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--madel-border)", padding: "14px 16px", marginBottom: 16, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <input placeholder="🔍 Nom, ville, profession..." value={recherche} onChange={e => setRecherche(e.target.value)}
          style={{ flex: 2, minWidth: 200, padding: "8px 12px", borderRadius: 8, border: "1.5px solid var(--madel-border)", fontSize: 13, fontFamily: "var(--madel-font)", outline: "none", color: "var(--madel-navy)" }} />
        <select value={filtreStatut} onChange={e => setFiltreStatut(e.target.value as StatutClient | "tous")} style={selectStyle}>
          <option value="tous">Tous statuts</option>
          {STATUTS.map(s => <option key={s} value={s}>{STATUT_LABELS[s].label}</option>)}
        </select>
        <select value={filtreCsp} onChange={e => setFiltreCsp(e.target.value)} style={selectStyle}>
          <option value="tous">Toutes CSP</option>
          {Object.entries(CSP_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <select value={filtreType} onChange={e => setFiltreType(e.target.value as TypeContrat | "tous")} style={selectStyle}>
          <option value="tous">Tous contrats</option>
          {Object.entries(TYPE_LABELS).map(([k, v]) => <option key={k} value={k}>{v.icone} {v.label}</option>)}
        </select>
        {(recherche || filtreStatut !== "tous" || filtreCsp !== "tous" || filtreType !== "tous") && (
          <button onClick={() => { setRecherche(""); setFiltreStatut("tous"); setFiltreCsp("tous"); setFiltreType("tous"); }}
            style={{ padding: "8px 12px", borderRadius: 8, border: "none", background: "var(--madel-bg)", color: "var(--madel-muted)", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 12 }}>
            ✕ Effacer
          </button>
        )}
        <span style={{ fontSize: 12, color: "var(--madel-muted)", flexShrink: 0 }}>{clientsFiltres.length} résultat{clientsFiltres.length !== 1 ? "s" : ""}</span>
      </div>

      {/* Tableau */}
      <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: "var(--madel-navy)", color: "#fff" }}>
              {["Client", "Situation", "Profession / CSP", "Ville", "Statut", "Contrats actifs", "Primes/an", ""].map(h => (
                <th key={h} style={{ padding: "11px 14px", textAlign: "left", fontWeight: 700, whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clientsFiltres.slice(0, 100).map((c, i) => {
              const contratsActifs = c.contrats.filter(ct => ct.statut === "actif");
              const primesAn = contratsActifs.reduce((s, ct) => s + ct.primeAnnuelle, 0);
              const sl = STATUT_LABELS[c.statut];
              const age = new Date().getFullYear() - new Date(c.dateNaissance).getFullYear();
              const estActif = clientActif?.id === c.id;
              const bgBase = estActif ? "#FFF5F7" : i % 2 === 0 ? "#fff" : "#FAFAFA";
              return (
                <tr key={c.id} onClick={() => navigate(`/assures/${c.id}`)}
                  style={{ background: bgBase, borderBottom: "1px solid var(--madel-border)", cursor: "pointer", borderLeft: estActif ? "3px solid var(--madel-rose)" : "3px solid transparent" }}>
                  <td style={{ padding: "10px 14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: `hsl(${(c.id.charCodeAt(4) ?? 0) * 17 % 360},50%,85%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0, color: "var(--madel-navy)" }}>
                        {c.prenom[0]}{c.nom[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: "var(--madel-navy)" }}>{c.prenom} {c.nom}</div>
                        <div style={{ fontSize: 10, color: "var(--madel-muted)" }}>{age} ans · {c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "10px 14px", fontSize: 11, color: "var(--madel-muted)" }}>
                    <div>{c.situationFamiliale.charAt(0).toUpperCase() + c.situationFamiliale.slice(1)}</div>
                    {c.nbEnfants > 0 && <div style={{ fontSize: 10 }}>{c.nbEnfants} enfant{c.nbEnfants > 1 ? "s" : ""}</div>}
                  </td>
                  <td style={{ padding: "10px 14px" }}>
                    <div style={{ fontSize: 11, color: "var(--madel-navy)" }}>{c.profession}</div>
                    <div style={{ fontSize: 10, color: "var(--madel-muted)" }}>{CSP_LABELS[c.csp]}</div>
                  </td>
                  <td style={{ padding: "10px 14px", fontSize: 11, color: "var(--madel-muted)" }}>{c.ville}</td>
                  <td style={{ padding: "10px 14px" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: sl.bg, color: sl.couleur }}>{sl.label}</span>
                  </td>
                  <td style={{ padding: "10px 14px" }}>
                    {contratsActifs.length === 0
                      ? <span style={{ fontSize: 11, color: "var(--madel-muted)", fontStyle: "italic" }}>Aucun</span>
                      : <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                          {contratsActifs.slice(0, 5).map(ct => <span key={ct.id} title={TYPE_LABELS[ct.type].label} style={{ fontSize: 16 }}>{TYPE_LABELS[ct.type].icone}</span>)}
                          {contratsActifs.length > 5 && <span style={{ fontSize: 10, color: "var(--madel-muted)", alignSelf: "center" }}>+{contratsActifs.length - 5}</span>}
                        </div>}
                  </td>
                  <td style={{ padding: "10px 14px", fontFamily: "monospace", fontWeight: 700, color: "var(--madel-navy)" }}>{primesAn > 0 ? eur(primesAn) : "—"}</td>
                  <td style={{ padding: "10px 14px", color: "var(--madel-muted)", fontSize: 18 }}>›</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {clientsFiltres.length > 100 && (
          <div style={{ padding: "12px", textAlign: "center", fontSize: 12, color: "var(--madel-muted)", background: "var(--madel-bg)", borderTop: "1px solid var(--madel-border)" }}>
            100 premiers résultats affichés — affinez la recherche
          </div>
        )}
        {clientsFiltres.length === 0 && (
          <div style={{ padding: "48px", textAlign: "center", color: "var(--madel-muted)" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, color: "var(--madel-navy)" }}>Aucun client trouvé</div>
            <div>Modifiez vos filtres</div>
          </div>
        )}
      </div>
    </div>
  );
}
