// ============================================================
// AUTH CALLBACK — Acceptation invitation + définition mdp
// Kleios Madel Assurance · BTS Assurance
// Fix : gestion flux PKCE (code en query string) + flux legacy (hash)
// ============================================================
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

type Step = "loading" | "set_password" | "success" | "error" | "expired";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [step, setStep]         = useState<Step>("loading");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [email, setEmail]       = useState("");

  useEffect(() => {
    // La route /auth/callback n'est atteinte QUE via un lien d'invitation.
    // Supabase (detectSessionInUrl: true par défaut) traite les tokens de l'URL
    // automatiquement AVANT que ce composant se monte.
    // On utilise onAuthStateChange pour attraper la session au bon moment.

    // Vérifier d'abord si la session est déjà établie (traitement synchrone)
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setEmail(data.session.user?.email ?? "");
        setStep("set_password");
      }
    });

    // Écouter aussi l'établissement de session (traitement asynchrone)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      // SIGNED_IN = invitation acceptée
      // PASSWORD_RECOVERY = lien "mot de passe oublié" cliqué
      if ((event === "SIGNED_IN" || event === "PASSWORD_RECOVERY") && session) {
        setEmail(session.user?.email ?? "");
        setStep("set_password");
      } else if (event === "SIGNED_OUT") {
        setStep("error");
      }
    });

    // Timeout de sécurité : si après 5s on n'a toujours rien, erreur
    const timeout = setTimeout(() => {
      setStep(prev => prev === "loading" ? "error" : prev);
    }, 5000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  const handleSetPassword = async () => {
    setError("");
    if (password.length < 8) { setError("Le mot de passe doit contenir au moins 8 caractères."); return; }
    if (password !== confirm) { setError("Les mots de passe ne correspondent pas."); return; }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }
    setStep("success");
    setTimeout(() => navigate("/"), 2500);
  };

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 14px", borderRadius: 10,
    border: "1.5px solid var(--madel-border)", fontSize: 14,
    fontFamily: "var(--madel-font)", color: "var(--madel-navy)",
    background: "#fff", outline: "none", boxSizing: "border-box",
    transition: "border-color .15s",
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--madel-bg)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--madel-font)", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 20, padding: "40px 36px", width: 420, maxWidth: "100%", boxShadow: "var(--shadow-lg)", textAlign: "center" }}>

        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <div style={{ background: "var(--madel-navy)", borderRadius: 16, width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>🐬</div>
        </div>

        {/* Loading */}
        {step === "loading" && (
          <>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--madel-navy)" }}>Vérification en cours...</div>
            <div style={{ fontSize: 13, color: "var(--madel-muted)", marginTop: 8 }}>Veuillez patienter</div>
          </>
        )}

        {/* Définir le mot de passe */}
        {step === "set_password" && (
          <>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--madel-navy)", marginBottom: 6 }}>Madel Assurance — Espace Agent</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "var(--madel-navy)", marginBottom: 6 }}>Bienvenue ! 👋</div>
            {email && <div style={{ fontSize: 12, color: "var(--madel-muted)", marginBottom: 24 }}>Compte : <strong>{email}</strong></div>}
            <div style={{ fontSize: 13, color: "var(--madel-text)", marginBottom: 24, lineHeight: 1.5 }}>
              Choisissez votre mot de passe pour accéder à l'espace agent.
            </div>

            <div style={{ textAlign: "left", marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }}>
                Mot de passe (8 caractères minimum)
              </label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                placeholder="••••••••" style={inp}
                onKeyDown={e => e.key === "Enter" && handleSetPassword()}
                onFocus={e => e.target.style.borderColor = "var(--madel-rose)"}
                onBlur={e => e.target.style.borderColor = "var(--madel-border)"}
              />
            </div>

            <div style={{ textAlign: "left", marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "var(--madel-muted)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }}>
                Confirmer le mot de passe
              </label>
              <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)}
                placeholder="••••••••" style={inp}
                onKeyDown={e => e.key === "Enter" && handleSetPassword()}
                onFocus={e => e.target.style.borderColor = "var(--madel-rose)"}
                onBlur={e => e.target.style.borderColor = "var(--madel-border)"}
              />
            </div>

            {/* Indicateur force mdp */}
            {password.length > 0 && (
              <div style={{ marginBottom: 16, textAlign: "left" }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: password.length >= i * 3 ? (i <= 2 ? "#F59E0B" : "#16A34A") : "var(--madel-border)", transition: "background .3s" }} />
                  ))}
                </div>
                <div style={{ fontSize: 10, color: "var(--madel-muted)" }}>
                  {password.length < 6 ? "Trop court" : password.length < 9 ? "Moyen" : password.length < 12 ? "Bon" : "Excellent"}
                </div>
              </div>
            )}

            {error && (
              <div style={{ marginBottom: 16, padding: "10px 14px", borderRadius: 9, background: "var(--madel-danger-bg)", border: "1px solid #FCA5A5", fontSize: 12, color: "var(--madel-danger)", textAlign: "left" }}>
                ⚠️ {error}
              </div>
            )}

            <button onClick={handleSetPassword} disabled={loading || !password || !confirm}
              style={{ width: "100%", padding: "13px", borderRadius: 10, border: "none", background: (loading || !password || !confirm) ? "var(--madel-border)" : "var(--madel-rose)", color: (loading || !password || !confirm) ? "var(--madel-muted)" : "#fff", cursor: (loading || !password || !confirm) ? "not-allowed" : "pointer", fontFamily: "var(--madel-font)", fontWeight: 700, fontSize: 14, transition: "all .15s" }}>
              {loading ? "⏳ Création du compte..." : "✅ Créer mon compte"}
            </button>
          </>
        )}

        {/* Succès */}
        {step === "success" && (
          <>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "var(--madel-navy)", marginBottom: 8 }}>Compte créé !</div>
            <div style={{ fontSize: 13, color: "var(--madel-muted)", lineHeight: 1.5 }}>
              Bienvenue sur Madel Assurance.<br />Redirection automatique...
            </div>
            <div style={{ marginTop: 20, height: 4, borderRadius: 2, background: "var(--madel-bg)", overflow: "hidden" }}>
              <div style={{ height: "100%", background: "var(--madel-rose)", borderRadius: 2, animation: "progress 2.5s linear forwards" }} />
            </div>
          </>
        )}

        {/* Lien expiré */}
        {step === "expired" && (
          <>
            <div style={{ fontSize: 48, marginBottom: 16 }}>⏰</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "var(--madel-navy)", marginBottom: 8 }}>Lien expiré</div>
            <div style={{ fontSize: 13, color: "var(--madel-muted)", lineHeight: 1.5, marginBottom: 24 }}>
              Le lien d'invitation a expiré (validité 24h).<br />
              Contactez votre formateur pour recevoir une nouvelle invitation.
            </div>
            <button onClick={() => navigate("/login")} style={{ width: "100%", padding: "12px", borderRadius: 10, border: "none", background: "var(--madel-navy)", color: "#fff", cursor: "pointer", fontFamily: "var(--madel-font)", fontWeight: 700 }}>
              Retour à la connexion
            </button>
          </>
        )}

        {/* Erreur générique */}
        {step === "error" && (
          <>
            <div style={{ fontSize: 48, marginBottom: 16 }}>❌</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "var(--madel-navy)", marginBottom: 8 }}>Lien invalide</div>
            <div style={{ fontSize: 13, color: "var(--madel-muted)", lineHeight: 1.5, marginBottom: 24 }}>
              Ce lien ne semble pas valide.<br />Contactez votre formateur.
            </div>
            <button onClick={() => navigate("/login")} style={{ width: "100%", padding: "12px", borderRadius: 10, border: "none", background: "var(--madel-navy)", color: "#fff", cursor: "pointer", fontFamily: "var(--madel-font)", fontWeight: 700 }}>
              Retour à la connexion
            </button>
          </>
        )}

      </div>
    </div>
  );
}
