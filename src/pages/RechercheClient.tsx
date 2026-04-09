// ============================================================
// RECHERCHE CLIENT — Écran dédié
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useClientsStore } from "../store/clientsStore";
import { STATUT_LABELS, TYPE_LABELS } from "../data/types-clients";
import type { StatutClient, TypeContrat } from "../data/types-clients";

const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const CSP_LABELS: Record<string, string> = { cadre:"Cadre", non_cadre:"Non-cadre", tns:"TNS", liberal:"Libéral", fonctionnaire:"Fonctionnaire", retraite:"Retraité", etudiant:"Étudiant" };

export default function RechercheClient() {
  const navigate = useNavigate();
  const { clients, pickRandom, clientActif } = useClientsStore();
  const [q, setQ] = useState("");
  const [filtreStatut, setFiltreStatut] = useState<StatutClient | "tous">("tous");
  const [filtreType, setFiltreType] = useState<TypeContrat | "tous">("tous");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const resultats = useMemo(() => {
    const query = q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return clients.filter(c => {
      if (filtreStatut !== "tous" && c.statut !== filtreStatut) return false;
      if (filtreType !== "tous" && !c.contrats.some(ct => ct.type === filtreType && ct.statut === "actif")) return false;
      if (!query) return true;
      const h = `${c.nom} ${c.prenom} ${c.ville} ${c.codePostal} ${c.email} ${c.telephone} ${c.profession}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return h.includes(query);
    }).slice(0, 50);
  }, [clients, q, filtreStatut, filtreType]);

  const stats = useMemo(() => ({
    total: clients.length,
    actifs: clients.filter(c => c.statut === "client_actif").length,
    vip: clients.filter(c => c.statut === "vip").length,
    prospects: clients.filter(c => c.statut === "prospect").length,
  }), [clients]);

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 1000, margin: "0 auto", padding: "32px 20px 48px" }}>

      {/* Hero recherche */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 36, marginBottom: 10 }}>🔍</div>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>Rechercher un client</h1>
        <p style={{ color: "var(--madel-muted)", fontSize: 13 }}>Nom, prénom, ville, email, téléphone, profession...</p>
      </div>

      {/* Barre de recherche principale */}
      <div style={{ position: "relative", marginBottom: 20 }}>
        <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", fontSize: 18, pointerEvents: "none" }}>🔍</span>
        <input ref={inputRef} value={q} onChange={e => setQ(e.target.value)}
          placeholder="Rechercher un client..."
          style={{ width: "100%", padding: "16px 20px 16px 50px", borderRadius: 14, border: "2px solid var(--madel-border)", fontSize: 16, fontFamily: "var(--madel-font)", color: "var(--madel-navy)", background: "#fff", outline: "none", boxShadow: "var(--shadow-md)", boxSizing: "border-box", transition: "border-color .15s" }}
          onFocus={e => e.target.style.borderColor = "var(--madel-rose)"}
          onBlur={e => e.target.style.borderColor = "var(--madel-border)"}
        />
        {q && <button onClick={() => setQ("")} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", border: "none", background: "var(--madel-bg)", borderRadius: "50%", width: 28, height: 28, cursor: "pointer", fontSize: 14, color: "var(--madel-muted)", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>}
      </div>

      {/* Filtres */}
      <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
        {(["tous","prospect","client_actif","vip","archive"] as const).map(s => {
          const active = filtreStatut === s;
          const sl = s === "tous" ? null : STATUT_LABELS[s];
          return <button key={s} onClick={() => setFiltreStatut(s)} style={{ padding: "7px 14px", borderRadius: 20, border: `2px solid ${active ? "var(--madel-navy)" : "var(--madel-border)"}`, background: active ? "var(--madel-navy)" : "#fff", color: active ? "#fff" : "var(--madel-muted)", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 12, fontWeight: active ? 700 : 400, transition: "all .15s" }}>
            {s === "tous" ? `Tous (${stats.total})` : sl!.label}
          </button>;
        })}
        <select value={filtreType} onChange={e => setFiltreType(e.target.value as TypeContrat | "tous")} style={{ padding: "7px 12px", borderRadius: 20, border: "2px solid var(--madel-border)", fontSize: 12, fontFamily: "var(--madel-font)", color: "var(--madel-navy)", background: "#fff", cursor: "pointer", outline: "none" }}>
          <option value="tous">Tous types de contrat</option>
          {Object.entries(TYPE_LABELS).map(([k,v]) => <option key={k} value={k}>{v.icone} {v.label}</option>)}
        </select>
        <button onClick={() => { const c = pickRandom(); navigate(`/assures/${c.id}`); }} style={{ marginLeft: "auto", padding: "8px 16px", borderRadius: 20, border: "none", background: "var(--madel-rose)", color: "#fff", cursor: "pointer", fontFamily: "var(--madel-font)", fontWeight: 700, fontSize: 12 }}>
          🎲 Qui suis-je ?
        </button>
      </div>

      {/* Stats rapides si pas de recherche */}
      {!q && filtreStatut === "tous" && filtreType === "tous" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 28 }}>
          {[
            { label: "Total clients", v: stats.total, couleur: "var(--madel-navy)", bg: "#fff" },
            { label: "Prospects", v: stats.prospects, couleur: "#2563EB", bg: "#EFF6FF" },
            { label: "Actifs", v: stats.actifs, couleur: "#16A34A", bg: "#F0FDF4" },
            { label: "VIP", v: stats.vip, couleur: "#D97706", bg: "#FFFBEB" },
          ].map(k => (
            <div key={k.label} onClick={() => setFiltreStatut(k.label === "Total clients" ? "tous" : k.label === "Prospects" ? "prospect" : k.label === "Actifs" ? "client_actif" : "vip")} style={{ background: k.bg, borderRadius: 12, border: "1px solid var(--madel-border)", padding: "14px 18px", cursor: "pointer", transition: "transform .1s, box-shadow .1s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: k.couleur }}>{k.v}</div>
              <div style={{ fontSize: 11, color: "var(--madel-muted)", marginTop: 2 }}>{k.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Client en cours */}
      {clientActif && (
        <div style={{ marginBottom: 20, padding: "12px 16px", borderRadius: 12, background: "var(--madel-rose-light)", border: "2px solid var(--madel-rose)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 13, color: "var(--madel-rose-dark)" }}>
            🎲 <strong>Client en cours</strong> — {clientActif.prenom} {clientActif.nom}, {clientActif.profession}, {clientActif.ville}
          </div>
          <button onClick={() => navigate(`/assures/${clientActif.id}`)} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "var(--madel-rose)", color: "#fff", cursor: "pointer", fontFamily: "var(--madel-font)", fontWeight: 700, fontSize: 12 }}>Voir la fiche →</button>
        </div>
      )}

      {/* Résultats */}
      {resultats.length === 0 && q ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--madel-muted)" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>😶</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--madel-navy)", marginBottom: 6 }}>Aucun résultat</div>
          <div style={{ fontSize: 13 }}>Essayez avec un nom, une ville ou un email différent</div>
        </div>
      ) : (
        <>
          {q && <div style={{ fontSize: 12, color: "var(--madel-muted)", marginBottom: 14 }}>{resultats.length} résultat{resultats.length !== 1 ? "s" : ""} pour « {q} »</div>}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {resultats.map(c => {
              const contratsActifs = c.contrats.filter(ct => ct.statut === "actif");
              const primesAnn = contratsActifs.reduce((s, ct) => s + ct.primeAnnuelle, 0);
              const age = new Date().getFullYear() - new Date(c.dateNaissance).getFullYear();
              const sl = STATUT_LABELS[c.statut];
              const hue = (c.id.charCodeAt(4) ?? 0) * 23 % 360;
              const estActif = clientActif?.id === c.id;
              return (
                <div key={c.id} onClick={() => navigate(`/assures/${c.id}`)}
                  style={{ background: "#fff", borderRadius: 14, border: `2px solid ${estActif ? "var(--madel-rose)" : "var(--madel-border)"}`, padding: "16px 18px", cursor: "pointer", transition: "all .15s", position: "relative" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.borderColor = "var(--madel-navy)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = estActif ? "var(--madel-rose)" : "var(--madel-border)"; }}>

                  {estActif && <div style={{ position: "absolute", top: 10, right: 10, fontSize: 14 }}>🎲</div>}

                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: "50%", background: `hsl(${hue},55%,85%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, color: `hsl(${hue},55%,30%)`, flexShrink: 0 }}>
                      {c.prenom[0]}{c.nom[0]}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "var(--madel-navy)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.prenom} {c.nom}</div>
                      <div style={{ fontSize: 11, color: "var(--madel-muted)", marginTop: 1 }}>{age} ans · {c.ville}</div>
                      <span style={{ display: "inline-block", marginTop: 5, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: sl.bg, color: sl.couleur }}>{sl.label}</span>
                    </div>
                  </div>

                  <div style={{ fontSize: 11, color: "var(--madel-muted)", marginBottom: 8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {CSP_LABELS[c.csp]} · {c.profession}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                      {contratsActifs.length === 0
                        ? <span style={{ fontSize: 10, color: "var(--madel-muted)", fontStyle: "italic" }}>Aucun contrat</span>
                        : contratsActifs.slice(0, 5).map(ct => <span key={ct.id} title={TYPE_LABELS[ct.type].label} style={{ fontSize: 16 }}>{TYPE_LABELS[ct.type].icone}</span>)
                      }
                      {contratsActifs.length > 5 && <span style={{ fontSize: 10, color: "var(--madel-muted)", alignSelf: "center" }}>+{contratsActifs.length - 5}</span>}
                    </div>
                    {primesAnn > 0 && <div style={{ fontSize: 12, fontWeight: 700, fontFamily: "monospace", color: "var(--madel-navy)" }}>{eur(primesAnn)}/an</div>}
                  </div>
                </div>
              );
            })}
          </div>
          {!q && resultats.length === 50 && (
            <div style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "var(--madel-muted)" }}>50 premiers résultats — affinez votre recherche</div>
          )}
        </>
      )}
    </div>
  );
}
