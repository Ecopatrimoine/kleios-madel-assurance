// ============================================================
// HEADER — Madel Assurance
// ============================================================
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NAV_ITEMS = [
  { path: "/",            label: "Dashboard",  icon: "📊" },
  { path: "/simulateurs/auto", label: "Simulateurs", icon: "🧮" },
  { path: "/assures",     label: "Assurés",    icon: "👥" },
  { path: "/contrats",    label: "Contrats",   icon: "📄" },
  { path: "/sinistres",   label: "Sinistres",  icon: "🚨" },
  { path: "/agenda",      label: "Agenda",     icon: "📅" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  // Affiche juste la partie avant le @ pour rester compact
  const emailCourt = user?.email?.split("@")[0] ?? "Agent";

  return (
    <header style={{
      background: "var(--madel-navy)",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 60,
      flexShrink: 0,
      boxShadow: "0 2px 8px rgba(26,43,95,.2)",
    }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          background: "var(--madel-rose)", borderRadius: 10,
          width: 36, height: 36,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, flexShrink: 0,
        }}>🐬</div>
        <div>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 16, lineHeight: 1.1 }}>
            Madel Assurance
          </div>
          <div style={{ color: "var(--madel-rose-mid)", fontSize: 10 }}>
            Espace Agent
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
        {NAV_ITEMS.map(item => {
          const actif = location.pathname === item.path ||
            (item.path !== "/" && location.pathname.startsWith(item.path));
          return (
            <Link key={item.path} to={item.path} style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "6px 12px", borderRadius: "var(--madel-radius-sm)",
              textDecoration: "none", fontSize: 12,
              fontWeight: actif ? 700 : 400,
              color: actif ? "#fff" : "rgba(255,255,255,.6)",
              background: actif ? "rgba(255,255,255,.15)" : "transparent",
              transition: "all .15s",
            }}>
              <span style={{ fontSize: 14 }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Utilisateur + déconnexion */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{
          background: "rgba(255,255,255,.12)",
          border: "1px solid rgba(255,255,255,.2)",
          borderRadius: 20, padding: "5px 12px",
          color: "rgba(255,255,255,.8)", fontSize: 11,
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <span>🎓</span>
          <span>{emailCourt}</span>
        </div>
        <button
          onClick={handleSignOut}
          title="Se déconnecter"
          style={{
            background: "rgba(212,43,90,.25)",
            border: "1px solid rgba(212,43,90,.4)",
            borderRadius: 20, padding: "5px 12px",
            color: "var(--madel-rose-mid)", fontSize: 11,
            cursor: "pointer", fontFamily: "var(--madel-font)",
            display: "flex", alignItems: "center", gap: 5,
            transition: "all .15s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(212,43,90,.45)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(212,43,90,.25)";
            e.currentTarget.style.color = "var(--madel-rose-mid)";
          }}
        >
          <span>⏏</span>
          <span>Déconnexion</span>
        </button>
      </div>
    </header>
  );
}

