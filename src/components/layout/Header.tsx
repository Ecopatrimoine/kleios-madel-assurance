// ============================================================
// HEADER — Madel Assurance
// ============================================================
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/",              label: "Dashboard",    icon: "📊" },
  { path: "/simulateurs",   label: "Simulateurs",  icon: "🧮" },
  { path: "/assures",       label: "Assurés",      icon: "👥" },
  { path: "/contrats",      label: "Contrats",     icon: "📄" },
  { path: "/sinistres",     label: "Sinistres",    icon: "🚨" },
  { path: "/agenda",        label: "Agenda",       icon: "📅" },
];

export default function Header() {
  const location = useLocation();

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
          background: "var(--madel-rose)",
          borderRadius: 10,
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
        {NAV_ITEMS.map(item => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 12px",
              borderRadius: "var(--madel-radius-sm)",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: location.pathname === item.path ? 700 : 400,
              color: location.pathname === item.path ? "#fff" : "rgba(255,255,255,.6)",
              background: location.pathname === item.path
                ? "rgba(255,255,255,.15)"
                : "transparent",
              transition: "all .15s",
            }}
          >
            <span style={{ fontSize: 14 }}>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Badge utilisateur */}
      <div style={{
        background: "rgba(255,255,255,.12)",
        border: "1px solid rgba(255,255,255,.2)",
        borderRadius: 20,
        padding: "5px 12px",
        color: "rgba(255,255,255,.8)",
        fontSize: 11,
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}>
        <span>🎓</span>
        <span>BTS Assurance · Élève</span>
      </div>
    </header>
  );
}
