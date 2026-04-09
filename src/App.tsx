import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/layout/Header";
import LoginPage from "./pages/LoginPage";
import ListeAssures from "./pages/ListeAssures";
import FicheAssure from "./pages/FicheAssure";
import SimulateurAuto from "./simulateurs/auto/SimulateurAuto";
import SimulateurMoto from "./simulateurs/moto/SimulateurMoto";
import SimulateurMRH from "./simulateurs/mrh/SimulateurMRH";
import SimulateurGAV from "./simulateurs/gav/SimulateurGAV";
import SimulateurScolaire from "./simulateurs/scolaire/SimulateurScolaire";
import SimulateurDeces from "./simulateurs/deces/SimulateurDeces";
import SimulateurIJ from "./simulateurs/ij/SimulateurIJ";
import SimulateurDependance from "./simulateurs/dependance/SimulateurDependance";
import SimulateurSante from "./simulateurs/sante/SimulateurSante";
import SimulateurEmprunteur from "./simulateurs/emprunteur/SimulateurEmprunteur";
import SimulateurRCPro from "./simulateurs/rcpro/SimulateurRCPro";
import SimulateurMRP from "./simulateurs/mrp/SimulateurMRP";
import RechercheClient from "./pages/RechercheClient";
import AuthCallback from "./pages/AuthCallback";
import AdminPage from "./pages/AdminPage";
import { useClientsStore } from "./store/clientsStore";
import { TYPE_LABELS, STATUT_LABELS } from "./data/types-clients";
import type { TypeContrat } from "./data/types-clients";
import "./design/tokens.css";

function Dashboard() {
  const { clients, pickRandom } = useClientsStore();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const stats = useMemo(() => {
    const contratsActifs = clients.flatMap(c => c.contrats.filter(ct => ct.statut === "actif"));
    const primesTotal = contratsActifs.reduce((s, ct) => s + ct.primeAnnuelle, 0);
    const parType = contratsActifs.reduce((acc, ct) => {
      acc[ct.type] = (acc[ct.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    const topTypes = Object.entries(parType).sort((a,b) => b[1]-a[1]).slice(0, 6);
    return {
      total: clients.length,
      actifs: clients.filter(c => c.statut === "client_actif").length,
      vip: clients.filter(c => c.statut === "vip").length,
      prospects: clients.filter(c => c.statut === "prospect").length,
      contratsActifs: contratsActifs.length,
      primesTotal,
      parType,
      topTypes,
    };
  }, [clients]);

  const resultatsRecherche = useMemo(() => {
    if (!q.trim()) return [];
    const query = q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    return clients.filter(c => {
      const h = `${c.nom} ${c.prenom} ${c.ville} ${c.email} ${c.telephone} ${c.profession}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
      return h.includes(query);
    }).slice(0, 8);
  }, [clients, q]);

  const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  return (
    <div style={{ padding: "28px 24px 48px", maxWidth: 1100, margin: "0 auto", fontFamily: "var(--madel-font)" }}>

      {/* Titre */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: "var(--madel-navy)", marginBottom: 4 }}>Tableau de bord</h1>
        <p style={{ color: "var(--madel-muted)", fontSize: 13 }}>Bienvenue — données en temps réel depuis le portefeuille démo</p>
      </div>

      {/* Recherche rapide */}
      <div style={{ background: "var(--madel-navy)", borderRadius: 16, padding: "24px 28px", marginBottom: 24, boxShadow: "var(--shadow-md)" }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)", marginBottom: 10 }}>🔍 Recherche rapide client</div>
        <div style={{ position: "relative" }}>
          <input value={q} onChange={e => setQ(e.target.value)}
            placeholder="Nom, prénom, ville, téléphone..."
            style={{ width: "100%", padding: "13px 18px", borderRadius: 12, border: "none", fontSize: 14, fontFamily: "var(--madel-font)", color: "var(--madel-navy)", background: "#fff", outline: "none", boxSizing: "border-box" }} />
          {q && (
            <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, background: "#fff", borderRadius: 12, boxShadow: "var(--shadow-lg)", border: "1px solid var(--madel-border)", zIndex: 50, overflow: "hidden" }}>
              {resultatsRecherche.length === 0 ? (
                <div style={{ padding: "14px 18px", color: "var(--madel-muted)", fontSize: 12 }}>Aucun résultat</div>
              ) : resultatsRecherche.map(c => {
                const age = new Date().getFullYear() - new Date(c.dateNaissance).getFullYear();
                const sl = STATUT_LABELS[c.statut];
                const contratsActifs = c.contrats.filter(ct => ct.statut === "actif");
                return (
                  <div key={c.id} onClick={() => { setQ(""); navigate(`/assures/${c.id}`); }}
                    style={{ padding: "11px 18px", cursor: "pointer", borderBottom: "1px solid var(--madel-border)", display: "flex", alignItems: "center", gap: 12 }}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--madel-bg)"}
                    onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--madel-rose-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "var(--madel-rose-dark)", flexShrink: 0 }}>{c.prenom[0]}{c.nom[0]}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: "var(--madel-navy)" }}>{c.prenom} {c.nom}</div>
                      <div style={{ fontSize: 11, color: "var(--madel-muted)" }}>{age} ans · {c.ville} · {c.profession}</div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <div style={{ display: "flex", gap: 3 }}>{contratsActifs.slice(0,4).map(ct => <span key={ct.id} style={{ fontSize: 14 }}>{TYPE_LABELS[ct.type].icone}</span>)}</div>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 20, background: sl.bg, color: sl.couleur }}>{sl.label}</span>
                    </div>
                  </div>
                );
              })}
              <div onClick={() => { navigate(`/recherche?q=${q}`); setQ(""); }} style={{ padding: "10px 18px", cursor: "pointer", fontSize: 12, color: "var(--madel-rose)", fontWeight: 700, textAlign: "center", background: "var(--madel-bg)" }}>
                Voir tous les résultats →
              </div>
            </div>
          )}
        </div>
        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          <button onClick={() => navigate("/recherche")} style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,.2)", background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.8)", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 12 }}>Recherche avancée →</button>
          <button onClick={() => { const c = pickRandom(); navigate(`/assures/${c.id}`); }} style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: "var(--madel-rose)", color: "#fff", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 12, fontWeight: 700 }}>🎲 Qui suis-je ?</button>
        </div>
      </div>

      {/* KPIs temps réel */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
        {[
          { icon: "👥", label: "Total clients", valeur: stats.total, sub: `dont ${stats.prospects} prospects`, couleur: "var(--madel-navy)" },
          { icon: "✅", label: "Clients actifs + VIP", valeur: stats.actifs + stats.vip, sub: `${stats.actifs} actifs · ${stats.vip} VIP`, couleur: "#16A34A" },
          { icon: "📄", label: "Contrats actifs", valeur: stats.contratsActifs, sub: `sur ${stats.total} clients`, couleur: "#2563EB" },
        ].map(kpi => (
          <div key={kpi.label} style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: "18px 22px", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{kpi.icon}</div>
            <div style={{ fontSize: 11, color: "var(--madel-muted)", marginBottom: 4 }}>{kpi.label}</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: kpi.couleur, fontFamily: "monospace" }}>{kpi.valeur}</div>
            <div style={{ fontSize: 11, color: "var(--madel-muted)", marginTop: 4 }}>{kpi.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
        {/* Primes */}
        <div style={{ background: "linear-gradient(135deg, var(--madel-rose) 0%, var(--madel-rose-dark) 100%)", borderRadius: 14, padding: "20px 22px", boxShadow: "var(--shadow-md)" }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.65)", marginBottom: 8 }}>💶 Primes annuelles totales</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", fontFamily: "monospace" }}>{eur(stats.primesTotal)}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.65)", marginTop: 6 }}>Moyenne : {eur(Math.round(stats.primesTotal / Math.max(1, stats.actifs + stats.vip)))} / client actif</div>
        </div>

        {/* Top types de contrats */}
        <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: "18px 22px", boxShadow: "var(--shadow-xs)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 12 }}>📊 Contrats par type</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {stats.topTypes.map(([type, nb]) => {
              const tl = TYPE_LABELS[type as TypeContrat];
              const pct = Math.round((nb / stats.contratsActifs) * 100);
              return (
                <div key={type} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{tl?.icone ?? "?"}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 11, fontWeight: 600 }}>{tl?.label ?? type}</span>
                      <span style={{ fontSize: 11, color: "var(--madel-muted)" }}>{nb} ({pct}%)</span>
                    </div>
                    <div style={{ height: 5, borderRadius: 3, background: "var(--madel-bg)", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: tl?.couleur ?? "var(--madel-rose)", borderRadius: 3, transition: "width .5s" }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Accès rapides simulateurs */}
      <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: "18px 22px", boxShadow: "var(--shadow-xs)" }}>
        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 14 }}>🧮 Accès rapide simulateurs</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
          {[
            { icon:"🚗", label:"Auto",        path:"/simulateurs/auto" },
            { icon:"🏠", label:"MRH",         path:"/simulateurs/mrh" },
            { icon:"🛡️", label:"GAV",         path:"/simulateurs/gav" },
            { icon:"🏥", label:"IJ",          path:"/simulateurs/ij" },
            { icon:"💊", label:"Santé",       path:"/simulateurs/sante" },
            { icon:"🏦", label:"Emprunteur",  path:"/simulateurs/emprunteur" },
            { icon:"🏍️", label:"Moto",        path:"/simulateurs/moto" },
            { icon:"🎒", label:"Scolaire",    path:"/simulateurs/scolaire" },
            { icon:"⚫", label:"Décès",       path:"/simulateurs/deces" },
            { icon:"♿", label:"Dépendance",  path:"/simulateurs/dependance" },
            { icon:"⚖️", label:"RC Pro",      path:"/simulateurs/rcpro" },
            { icon:"🏢", label:"MRP",         path:"/simulateurs/mrp" },
          ].map(card => (
            <button key={card.path} onClick={() => navigate(card.path)} style={{ background: "var(--madel-bg)", borderRadius: 10, padding: "12px 8px", border: "1px solid var(--madel-border)", cursor: "pointer", fontFamily: "var(--madel-font)", color: "var(--madel-navy)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, transition: "all .15s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--madel-navy)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--madel-bg)"; e.currentTarget.style.color = "var(--madel-navy)"; }}>
              <div style={{ fontSize: 22 }}>{card.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 11 }}>{card.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div style={{ padding: 40, textAlign: "center", color: "var(--madel-muted)" }}>
      <div style={{ fontSize: 48, marginBottom: 14 }}>🚧</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "var(--madel-navy)", marginBottom: 8 }}>{title}</div>
      <div>Module en cours de développement</div>
    </div>
  );
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute><AppLayout>{children}</AppLayout></ProtectedRoute>;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login"                       element={<LoginPage />} />
          <Route path="/auth/callback"              element={<AuthCallback />} />
          <Route path="/admin"                       element={<P><AdminPage /></P>} />
          <Route path="/"                            element={<P><Dashboard /></P>} />
          <Route path="/assures"                     element={<P><ListeAssures /></P>} />
          <Route path="/assures/:id"                 element={<P><FicheAssure /></P>} />
          <Route path="/recherche"                   element={<P><RechercheClient /></P>} />
          <Route path="/simulateurs/auto"            element={<P><SimulateurAuto /></P>} />
          <Route path="/simulateurs/moto"            element={<P><SimulateurMoto /></P>} />
          <Route path="/simulateurs/mrh"             element={<P><SimulateurMRH /></P>} />
          <Route path="/simulateurs/gav"             element={<P><SimulateurGAV /></P>} />
          <Route path="/simulateurs/scolaire"        element={<P><SimulateurScolaire /></P>} />
          <Route path="/simulateurs/deces"           element={<P><SimulateurDeces /></P>} />
          <Route path="/simulateurs/ij"              element={<P><SimulateurIJ /></P>} />
          <Route path="/simulateurs/dependance"      element={<P><SimulateurDependance /></P>} />
          <Route path="/simulateurs/sante"           element={<P><SimulateurSante /></P>} />
          <Route path="/simulateurs/emprunteur"      element={<P><SimulateurEmprunteur /></P>} />
          <Route path="/simulateurs/rcpro"           element={<P><SimulateurRCPro /></P>} />
          <Route path="/simulateurs/mrp"             element={<P><SimulateurMRP /></P>} />
          <Route path="/contrats"                    element={<P><PlaceholderPage title="Contrats" /></P>} />
          <Route path="/sinistres"                   element={<P><PlaceholderPage title="Sinistres" /></P>} />
          <Route path="/agenda"                      element={<P><PlaceholderPage title="Agenda" /></P>} />
          <Route path="*"                            element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
