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
import SimulateurScolaire from "./simulateurs/scolaire/SimulateurScolaire";
import SimulateurDeces from "./simulateurs/deces/SimulateurDeces";
import SimulateurIJ from "./simulateurs/ij/SimulateurIJ";
import SimulateurDependance from "./simulateurs/dependance/SimulateurDependance";
import SimulateurSante from "./simulateurs/sante/SimulateurSante";
import SimulateurEmprunteur from "./simulateurs/emprunteur/SimulateurEmprunteur";
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
        {[
          { icon: "🚗", label: "Auto",        path: "/simulateurs/auto" },
          { icon: "🏍️", label: "Moto",        path: "/simulateurs/moto" },
          { icon: "🏠", label: "MRH",         path: "/simulateurs/mrh"  },
          { icon: "🛡️", label: "GAV",         path: "/simulateurs/gav"  },
          { icon: "🎒", label: "Scolaire",    path: "/simulateurs/scolaire" },
          { icon: "⚫", label: "Décès",       path: "/simulateurs/deces" },
          { icon: "🏥", label: "IJ",          path: "/simulateurs/ij" },
          { icon: "♿", label: "Dépendance",  path: "/simulateurs/dependance" },
          { icon: "💊", label: "Santé",        path: "/simulateurs/sante" },
          { icon: "🏦", label: "Emprunteur",   path: "/simulateurs/emprunteur" },
        ].map(card => (
          <a key={card.label} href={card.path} style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid var(--madel-border)", textDecoration: "none", color: "var(--madel-navy)", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ fontSize: 22, flexShrink: 0 }}>{card.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 13 }}>{card.label}</div>
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
          <Route path="/login"                       element={<LoginPage />} />
          <Route path="/"                            element={<P><Dashboard /></P>} />
          <Route path="/assures"                     element={<P><ListeAssures /></P>} />
          <Route path="/assures/:id"                 element={<P><FicheAssure /></P>} />
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
          <Route path="/contrats"                    element={<P><PlaceholderPage title="Contrats" /></P>} />
          <Route path="/sinistres"                   element={<P><PlaceholderPage title="Sinistres" /></P>} />
          <Route path="/agenda"                      element={<P><PlaceholderPage title="Agenda" /></P>} />
          <Route path="*"                            element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
