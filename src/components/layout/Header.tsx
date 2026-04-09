// ============================================================
// HEADER v2 — Avec bandeau client persistant + nav dropdown
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useClientsStore } from "../../store/clientsStore";

const SIMUS = [
  { group: "IARD Particuliers", items: [
    { path: "/simulateurs/auto",       label: "🚗 Auto" },
    { path: "/simulateurs/moto",       label: "🏍️ Moto" },
    { path: "/simulateurs/mrh",        label: "🏠 MRH" },
  ]},
  { group: "Prévoyance", items: [
    { path: "/simulateurs/gav",        label: "🛡️ GAV" },
    { path: "/simulateurs/scolaire",   label: "🎒 Scolaire" },
    { path: "/simulateurs/deces",      label: "⚫ Décès" },
    { path: "/simulateurs/ij",         label: "🏥 IJ" },
    { path: "/simulateurs/dependance", label: "♿ Dépendance" },
  ]},
  { group: "Santé & Emprunt", items: [
    { path: "/simulateurs/sante",      label: "💊 Santé" },
    { path: "/simulateurs/emprunteur", label: "🏦 Emprunteur" },
  ]},
  { group: "Professionnel", items: [
    { path: "/simulateurs/rcpro",      label: "⚖️ RC Pro" },
    { path: "/simulateurs/mrp",        label: "🏢 MRP" },
  ]},
];

const NAV = [
  { path: "/",         label: "Tableau de bord", icon: "📊" },
  { path: "/recherche", label: "Rechercher",      icon: "🔍" },
  { path: "/assures",  label: "Assurés",          icon: "👥" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { clientActif, setClientActif } = useClientsStore();
  const [simuOpen, setSimuOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setSimuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const emailCourt = user?.email?.split("@")[0] ?? "Agent";
  const isAdmin = user?.email === (import.meta.env.VITE_ADMIN_EMAIL ?? "");
  const isSimu = location.pathname.startsWith("/simulateurs");

  return (
    <div style={{ flexShrink: 0 }}>
      {/* ── Barre principale ── */}
      <header style={{ background: "var(--madel-navy)", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 58, boxShadow: "0 2px 12px rgba(26,43,95,.25)", position: "relative", zIndex: 100 }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{ background: "var(--madel-rose)", borderRadius: 10, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>🐬</div>
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, lineHeight: 1.1 }}>Madel Assurance</div>
            <div style={{ color: "var(--madel-rose-mid)", fontSize: 9, letterSpacing: ".05em" }}>ESPACE AGENT</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {NAV.map(item => {
            const actif = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path);
            return (
              <Link key={item.path} to={item.path} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 13px", borderRadius: 8, textDecoration: "none", fontSize: 12, fontWeight: actif ? 700 : 400, color: actif ? "#fff" : "rgba(255,255,255,.6)", background: actif ? "rgba(255,255,255,.14)" : "transparent", transition: "all .15s" }}>
                <span style={{ fontSize: 13 }}>{item.icon}</span>{item.label}
              </Link>
            );
          })}

          {/* Dropdown Simulateurs */}
          <div ref={dropRef} style={{ position: "relative" }}>
            <button onClick={() => setSimuOpen(o => !o)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 13px", borderRadius: 8, border: "none", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 12, fontWeight: isSimu ? 700 : 400, color: isSimu ? "#fff" : "rgba(255,255,255,.6)", background: isSimu ? "rgba(255,255,255,.14)" : "transparent" }}>
              <span style={{ fontSize: 13 }}>🧮</span>Simulateurs
              <span style={{ fontSize: 9, marginLeft: 2, opacity: .7 }}>{simuOpen ? "▲" : "▼"}</span>
            </button>
            {simuOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, background: "#fff", borderRadius: 14, boxShadow: "var(--shadow-lg)", border: "1px solid var(--madel-border)", padding: 12, minWidth: 280, zIndex: 200, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {SIMUS.map(g => (
                  <div key={g.group}>
                    <div style={{ fontSize: 9, fontWeight: 800, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 6, paddingLeft: 6 }}>{g.group}</div>
                    {g.items.map(item => (
                      <button key={item.path} onClick={() => { navigate(item.path); setSimuOpen(false); }} style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "7px 10px", borderRadius: 8, border: "none", background: location.pathname === item.path ? "var(--madel-rose-light)" : "transparent", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 12, color: location.pathname === item.path ? "var(--madel-rose-dark)" : "var(--madel-navy)", fontWeight: location.pathname === item.path ? 700 : 400, textAlign: "left" }}>
                        {item.label}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Utilisateur */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {isAdmin && (
            <button onClick={() => navigate("/admin")} style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 20, padding: "5px 12px", color: "rgba(255,255,255,.75)", fontSize: 11, cursor: "pointer", fontFamily: "var(--madel-font)", display: "flex", alignItems: "center", gap: 5 }}>
              <span>🔐</span><span>Admin</span>
            </button>
          )}
          <div style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 20, padding: "5px 12px", color: "rgba(255,255,255,.75)", fontSize: 11, display: "flex", alignItems: "center", gap: 5 }}>
            <span>🎓</span><span>{emailCourt}</span>
          </div>
          <button onClick={async () => { await signOut(); navigate("/login"); }} style={{ background: "rgba(212,43,90,.2)", border: "1px solid rgba(212,43,90,.35)", borderRadius: 20, padding: "5px 12px", color: "var(--madel-rose-mid)", fontSize: 11, cursor: "pointer", fontFamily: "var(--madel-font)", display: "flex", alignItems: "center", gap: 5 }}>
            <span>⏏</span><span>Déconnexion</span>
          </button>
        </div>
      </header>

      {/* ── Bandeau client en cours ── */}
      {clientActif && (
        <div style={{ background: "linear-gradient(90deg, #A8204A 0%, #D42B5A 100%)", padding: "0 20px", height: 40, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff", flexShrink: 0 }}>
              {clientActif.prenom[0]}{clientActif.nom[0]}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#fff" }}>
              <span style={{ fontSize: 10, opacity: .75 }}>Client en cours :</span>
              <span style={{ fontWeight: 700 }}>{clientActif.prenom} {clientActif.nom}</span>
              <span style={{ opacity: .6 }}>·</span>
              <span style={{ opacity: .75 }}>{clientActif.profession}</span>
              <span style={{ opacity: .6 }}>·</span>
              <span style={{ opacity: .75 }}>{clientActif.ville}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => navigate(`/assures/${clientActif.id}`)} style={{ padding: "5px 14px", borderRadius: 20, border: "1.5px solid rgba(255,255,255,.4)", background: "rgba(255,255,255,.15)", color: "#fff", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 11, fontWeight: 700 }}>
              Voir la fiche →
            </button>
            <button onClick={() => setClientActif(null)} style={{ padding: "5px 10px", borderRadius: 20, border: "1.5px solid rgba(255,255,255,.25)", background: "transparent", color: "rgba(255,255,255,.7)", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 11 }}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
