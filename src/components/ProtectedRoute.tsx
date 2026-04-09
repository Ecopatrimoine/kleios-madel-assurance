// ============================================================
// PROTECTED ROUTE — Redirige vers login si non connecté
// ============================================================
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  // Écran de chargement pendant la vérification de session
  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "var(--madel-navy)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: 16,
      }}>
        <div style={{
          width: 50, height: 50,
          background: "var(--madel-rose)",
          borderRadius: 12,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26,
        }}>🐬</div>
        <div style={{ color: "rgba(255,255,255,.6)", fontSize: 13 }}>
          Chargement…
        </div>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  return <>{children}</>;
}
