// ============================================================
// APP — Kleios Madel Assurance
// ============================================================
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import SimulateurAuto from "./simulateurs/auto/SimulateurAuto";
import "./design/tokens.css";

function Dashboard() {
  return (
    <div style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, color: "var(--madel-navy)", marginBottom: 8 }}>
        Bienvenue sur Madel Assurance
      </h1>
      <p style={{ color: "var(--madel-muted)", fontSize: 14, marginBottom: 32 }}>
        Espace de simulation pédagogique BTS Assurance
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { icon: "🚗", label: "Simulateur Auto", desc: "Tarification RC automobile", path: "/simulateurs/auto" },
          { icon: "🏍️", label: "Simulateur Moto", desc: "Bientôt disponible", path: "#" },
          { icon: "🏠", label: "Simulateur MRH", desc: "Bientôt disponible", path: "#" },
        ].map(card => (
          <a key={card.label} href={card.path} style={{
            background: "#fff", borderRadius: 14, padding: 20,
            border: "1px solid var(--madel-border)",
            textDecoration: "none", color: "var(--madel-navy)",
            transition: "box-shadow .15s",
          }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>{card.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{card.label}</div>
            <div style={{ fontSize: 12, color: "var(--madel-muted)", marginTop: 4 }}>{card.desc}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div style={{ padding: 32, textAlign: "center", color: "var(--madel-muted)" }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>🚧</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "var(--madel-navy)" }}>{title}</div>
      <div style={{ marginTop: 8 }}>Module en cours de développement</div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <main style={{ flex: 1, padding: "0 0 24px" }}>
          <Routes>
            <Route path="/"                    element={<Dashboard />} />
            <Route path="/simulateurs"         element={<Dashboard />} />
            <Route path="/simulateurs/auto"    element={<SimulateurAuto />} />
            <Route path="/assures"             element={<PlaceholderPage title="Liste des Assurés" />} />
            <Route path="/contrats"            element={<PlaceholderPage title="Contrats" />} />
            <Route path="/sinistres"           element={<PlaceholderPage title="Sinistres" />} />
            <Route path="/agenda"              element={<PlaceholderPage title="Agenda & Relances" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
