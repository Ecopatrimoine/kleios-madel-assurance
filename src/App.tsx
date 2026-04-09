import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import "./design/tokens.css";

function Dashboard() {
  return (
    <div style={{ padding: 32, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ fontSize: 22, fontWeight: 800, color: "var(--madel-navy)", marginBottom: 6 }}>Tableau de bord</h1>
      <p style={{ color: "var(--madel-muted)", fontSize: 13, marginBottom: 28 }}>Bienvenue sur Madel Assurance — Espace Agent</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 28 }}>
        {[
          { icon: "👥", label: "Assurés actifs",     valeur: "15" },
          { icon: "📄", label: "Contrats actifs",    valeur: "10" },
          { icon: "🚨", label: "Sinistres en cours", valeur: "2"  },
          { icon: "💶", label: "Primes / an",         valeur: "12 370 €" },
        ].map(kpi => (
          <div key={kpi.label} style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--madel-border)", padding: "18px 20px" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{kpi.icon}</div>
            <div style={{ fontSize: 11, color: "var(--madel-muted)", marginBottom: 4 }}>{kpi.label}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "var(--madel-navy)" }}>{kpi.valeur}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {[
          { icon: "🚗", label: "Simulateur Auto", desc: "Tarification RC auto",    path: "/simulateurs/auto" },
          { icon: "🏍️", label: "Simulateur Moto", desc: "Tarification moto",       path: "/simulateurs/moto" },
          { icon: "🏠", label: "Simulateur MRH",  desc: "Multirisque habitation",  path: "/simulateurs/mrh"  },
          { icon: "🛡️", label: "Simulateur GAV",  desc: "Accidents de la vie",     path: "/simulateurs/gav"  },
        ].map(card => (
          <a key={card.label} href={card.path} style={{ background: "#fff", borderRadius: 14, padding: "16px 18px", border: "1px solid var(--madel-border)", textDecoration: "none", color: "var(--madel-navy)", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 26, flexShrink: 0 }}>{card.icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13 }}>{card.label}</div>
              <div style={{ fontSize: 11, color: "var(--madel-muted)", marginTop: 2 }}>{card.desc}</div>
            </div>
          </a>
        ))}
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
          <Route path="/login"              element={<LoginPage />} />
          <Route path="/"                   element={<P><Dashboard /></P>} />
          <Route path="/assures"            element={<P><ListeAssures /></P>} />
          <Route path="/assures/:id"        element={<P><FicheAssure /></P>} />
          <Route path="/simulateurs/auto"   element={<P><SimulateurAuto /></P>} />
          <Route path="/simulateurs/moto"   element={<P><SimulateurMoto /></P>} />
          <Route path="/simulateurs/mrh"    element={<P><SimulateurMRH /></P>} />
          <Route path="/simulateurs/gav"    element={<P><SimulateurGAV /></P>} />
          <Route path="/contrats"           element={<P><PlaceholderPage title="Contrats" /></P>} />
          <Route path="/sinistres"          element={<P><PlaceholderPage title="Sinistres" /></P>} />
          <Route path="/agenda"             element={<P><PlaceholderPage title="Agenda & Relances" /></P>} />
          <Route path="*"                   element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
