// ============================================================
// PAGE LOGIN — Madel Assurance
// ============================================================
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur]     = useState<string | null>(null);
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErreur(null);
    setLoading(true);
    const { error } = await signIn(email, password);
    if (error) {
      setErreur("Email ou mot de passe incorrect");
      setLoading(false);
    } else {
      navigate("/");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--madel-navy)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    }}>
      {/* Cercles décoratifs */}
      <div style={{
        position: "fixed", top: -120, right: -120,
        width: 400, height: 400, borderRadius: "50%",
        background: "rgba(212,43,90,.12)", pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", bottom: -80, left: -80,
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(74,143,212,.10)", pointerEvents: "none",
      }} />

      {/* Card login */}
      <div style={{
        background: "#fff",
        borderRadius: 20,
        padding: "40px 36px",
        width: "100%",
        maxWidth: 420,
        boxShadow: "var(--madel-shadow-lg)",
        position: "relative",
      }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            width: 60, height: 60,
            background: "var(--madel-rose)",
            borderRadius: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 30, margin: "0 auto 14px",
          }}>🐬</div>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: "var(--madel-navy)", margin: 0 }}>
            Madel Assurance
          </h1>
          <p style={{ fontSize: 13, color: "var(--madel-muted)", marginTop: 4 }}>
            Espace Agent — Connexion
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{
              display: "block", fontSize: 11, fontWeight: 700,
              color: "var(--madel-muted)", textTransform: "uppercase",
              letterSpacing: ".05em", marginBottom: 6,
            }}>
              Adresse email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="agent@madel-assurance.fr"
              required
              style={{
                width: "100%", padding: "11px 14px",
                borderRadius: 10,
                border: `1.5px solid ${erreur ? "var(--madel-rose)" : "var(--madel-border)"}`,
                fontSize: 14, fontFamily: "var(--madel-font)",
                color: "var(--madel-navy)", background: "#fff",
                outline: "none", boxSizing: "border-box",
                transition: "border-color .15s",
              }}
              onFocus={e => e.target.style.borderColor = "var(--madel-rose)"}
              onBlur={e => e.target.style.borderColor = erreur ? "var(--madel-rose)" : "var(--madel-border)"}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{
              display: "block", fontSize: 11, fontWeight: 700,
              color: "var(--madel-muted)", textTransform: "uppercase",
              letterSpacing: ".05em", marginBottom: 6,
            }}>
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: "100%", padding: "11px 14px",
                borderRadius: 10,
                border: `1.5px solid ${erreur ? "var(--madel-rose)" : "var(--madel-border)"}`,
                fontSize: 14, fontFamily: "var(--madel-font)",
                color: "var(--madel-navy)", background: "#fff",
                outline: "none", boxSizing: "border-box",
                transition: "border-color .15s",
              }}
              onFocus={e => e.target.style.borderColor = "var(--madel-rose)"}
              onBlur={e => e.target.style.borderColor = erreur ? "var(--madel-rose)" : "var(--madel-border)"}
            />
          </div>

          {/* Message erreur */}
          {erreur && (
            <div style={{
              padding: "10px 14px", borderRadius: 8, marginBottom: 16,
              background: "var(--madel-rose-light)",
              border: "1px solid var(--madel-rose-mid)",
              color: "var(--madel-rose-dark)", fontSize: 13,
            }}>
              ⚠ {erreur}
            </div>
          )}

          {/* Bouton */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%", padding: 13,
              background: loading ? "var(--madel-border)" : "var(--madel-rose)",
              color: "#fff", border: "none", borderRadius: 10,
              fontSize: 14, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
              fontFamily: "var(--madel-font)", letterSpacing: ".02em",
              transition: "background .15s",
            }}
          >
            {loading ? "Connexion…" : "Se connecter →"}
          </button>
        </form>

        {/* Badge pédagogique */}
        <div style={{
          marginTop: 24, textAlign: "center",
          padding: "8px 16px", borderRadius: 20,
          background: "var(--madel-bg)",
          fontSize: 11, color: "var(--madel-muted)",
        }}>
          🎓 Outil pédagogique BTS Assurance · Usage interne
        </div>
      </div>
    </div>
  );
}
