// ============================================================
// PAGE ADMIN — Gestion des accès élèves
// Kleios Madel Assurance · BTS Assurance
// Réservée au compte administrateur
// ============================================================
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL ?? "";

interface UserRecord {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string | null;
  confirmed_at: string | null;
}

export default function AdminPage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<{ email: string } | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Invitation
  const [email, setEmail] = useState("");
  const [inviting, setInviting] = useState(false);
  const [inviteResult, setInviteResult] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  // Liste utilisateurs
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { navigate("/login"); return; }
      const email = data.user.email ?? "";
      setCurrentUser({ email });
      const admin = ADMIN_EMAIL ? email === ADMIN_EMAIL : true; // si pas configuré, laisse passer pour le dev
      setIsAdmin(admin);
      if (!admin) { navigate("/"); return; }
      setLoading(false);
    });
  }, [navigate]);

  const handleInvite = async () => {
    if (!email.trim()) return;
    setInviting(true);
    setInviteResult(null);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { setInviteResult({ type: "error", msg: "Session expirée" }); setInviting(false); return; }

    try {
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/invite-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ email: email.trim(), role: "student" }),
      });
      const json = await res.json();
      if (res.ok) {
        setInviteResult({ type: "success", msg: `✅ Invitation envoyée à ${email.trim()}` });
        setEmail("");
      } else {
        setInviteResult({ type: "error", msg: json.error ?? "Erreur inconnue" });
      }
    } catch {
      setInviteResult({ type: "error", msg: "Erreur réseau" });
    }
    setInviting(false);
  };

  const inp: React.CSSProperties = {
    width: "100%", padding: "11px 14px", borderRadius: 10,
    border: "1.5px solid var(--madel-border)", fontSize: 13,
    fontFamily: "var(--madel-font)", color: "var(--madel-navy)",
    background: "#fff", outline: "none", boxSizing: "border-box",
  };

  if (loading) return (
    <div style={{ padding: 48, textAlign: "center", color: "var(--madel-muted)" }}>
      <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
      Chargement...
    </div>
  );

  return (
    <div style={{ fontFamily: "var(--madel-font)", color: "var(--madel-navy)", maxWidth: 800, margin: "0 auto", padding: "28px 20px 48px" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <div style={{ fontSize: 22, fontWeight: 800 }}>🔐 Administration</div>
            <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 20, background: "#FEF3E2", color: "#92520A", fontWeight: 700 }}>Accès restreint</span>
          </div>
          <div style={{ fontSize: 13, color: "var(--madel-muted)" }}>Connecté en tant que <strong>{currentUser?.email}</strong></div>
        </div>
        <button onClick={() => navigate("/")} style={{ padding: "8px 16px", borderRadius: 8, border: "1.5px solid var(--madel-border)", background: "#fff", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 12, color: "var(--madel-navy)" }}>
          ← Retour
        </button>
      </div>

      {/* Inviter un élève */}
      <div style={{ background: "#fff", borderRadius: 16, border: "1px solid var(--madel-border)", padding: "24px 28px", marginBottom: 20, boxShadow: "var(--shadow-sm)" }}>
        <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>✉️ Inviter un élève</div>
        <div style={{ fontSize: 12, color: "var(--madel-muted)", marginBottom: 20, lineHeight: 1.5 }}>
          L'élève recevra un email avec un lien pour créer son mot de passe et accéder à Madel Assurance.
          Le lien est valable <strong>24 heures</strong>.
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <input value={email} onChange={e => setEmail(e.target.value)}
            placeholder="prenom.nom@lycee.fr"
            type="email"
            onKeyDown={e => e.key === "Enter" && handleInvite()}
            style={{ ...inp, flex: 1 }}
            onFocus={e => e.target.style.borderColor = "var(--madel-rose)"}
            onBlur={e => e.target.style.borderColor = "var(--madel-border)"}
          />
          <button onClick={handleInvite} disabled={inviting || !email.trim()}
            style={{ padding: "11px 24px", borderRadius: 10, border: "none", background: (inviting || !email.trim()) ? "var(--madel-border)" : "var(--madel-rose)", color: (inviting || !email.trim()) ? "var(--madel-muted)" : "#fff", cursor: (inviting || !email.trim()) ? "not-allowed" : "pointer", fontFamily: "var(--madel-font)", fontWeight: 700, fontSize: 13, flexShrink: 0, whiteSpace: "nowrap" }}>
            {inviting ? "Envoi..." : "📨 Envoyer l'invitation"}
          </button>
        </div>

        {inviteResult && (
          <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 9, background: inviteResult.type === "success" ? "var(--madel-success-bg)" : "var(--madel-danger-bg)", border: `1px solid ${inviteResult.type === "success" ? "#A5D6A7" : "#FCA5A5"}`, fontSize: 13, color: inviteResult.type === "success" ? "var(--madel-success)" : "var(--madel-danger)", fontWeight: 600 }}>
            {inviteResult.msg}
          </div>
        )}
      </div>

      {/* Invitations multiples */}
      <div style={{ background: "#fff", borderRadius: 16, border: "1px solid var(--madel-border)", padding: "24px 28px", marginBottom: 20, boxShadow: "var(--shadow-sm)" }}>
        <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>📋 Invitations en masse</div>
        <div style={{ fontSize: 12, color: "var(--madel-muted)", marginBottom: 14, lineHeight: 1.5 }}>
          Entrez plusieurs emails séparés par des virgules ou un par ligne.
        </div>
        <MultiInvite supabaseUrl={import.meta.env.VITE_SUPABASE_URL} />
      </div>

      {/* Instructions */}
      <div style={{ background: "var(--madel-blue-light)", borderRadius: 14, border: "1px solid #B5D4F4", padding: "20px 24px" }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "var(--madel-navy)", marginBottom: 12 }}>📖 Guide — Comment ça fonctionne</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { n: 1, txt: "Entrez l'email de l'élève et cliquez sur «Envoyer l'invitation»." },
            { n: 2, txt: "L'élève reçoit un email de Supabase avec un lien d'activation (valable 24h)." },
            { n: 3, txt: "Il clique sur le lien → arrive sur la page de création de mot de passe de Madel Assurance." },
            { n: 4, txt: "Il choisit son mot de passe → son compte est créé, il accède directement à l'espace agent." },
            { n: 5, txt: "En cas de lien expiré, renvoyez simplement une nouvelle invitation avec le même email." },
          ].map(step => (
            <div key={step.n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--madel-navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{step.n}</div>
              <div style={{ fontSize: 12, color: "var(--madel-navy)", lineHeight: 1.5, paddingTop: 3 }}>{step.txt}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, padding: "10px 14px", borderRadius: 9, background: "rgba(255,255,255,.6)", fontSize: 11, color: "var(--madel-info)", lineHeight: 1.5 }}>
          💡 <strong>Astuce :</strong> Si un élève oublie son mot de passe, il peut utiliser le lien «Mot de passe oublié» sur la page de connexion. Supabase lui envoie automatiquement un lien de réinitialisation.
        </div>
      </div>
    </div>
  );
}

// ── Composant invitations multiples ──────────────────────────
function MultiInvite({ supabaseUrl }: { supabaseUrl: string }) {
  const [texte, setTexte] = useState("");
  const [results, setResults] = useState<{ email: string; status: "ok" | "error" | "pending"; msg?: string }[]>([]);
  const [running, setRunning] = useState(false);

  const handleMulti = async () => {
    const emails = texte
      .split(/[\n,;]+/)
      .map(e => e.trim())
      .filter(e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e));

    if (emails.length === 0) return;
    setRunning(true);
    setResults(emails.map(e => ({ email: e, status: "pending" })));

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { setRunning(false); return; }

    for (let i = 0; i < emails.length; i++) {
      const email = emails[i];
      try {
        const res = await fetch(`${supabaseUrl}/functions/v1/invite-user`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${session.access_token}` },
          body: JSON.stringify({ email, role: "student" }),
        });
        const json = await res.json();
        setResults(prev => prev.map((r, idx) =>
          idx === i ? { ...r, status: res.ok ? "ok" : "error", msg: json.error } : r
        ));
      } catch {
        setResults(prev => prev.map((r, idx) =>
          idx === i ? { ...r, status: "error", msg: "Erreur réseau" } : r
        ));
      }
      // Pause pour ne pas surcharger
      await new Promise(r => setTimeout(r, 500));
    }
    setRunning(false);
  };

  return (
    <>
      <textarea value={texte} onChange={e => setTexte(e.target.value)}
        placeholder={"eleve1@lycee.fr\neleve2@lycee.fr\neleve3@lycee.fr"}
        rows={4}
        style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid var(--madel-border)", fontSize: 12, fontFamily: "var(--madel-font)", color: "var(--madel-navy)", background: "#fff", outline: "none", resize: "vertical", boxSizing: "border-box", marginBottom: 10 }}
        onFocus={e => e.target.style.borderColor = "var(--madel-rose)"}
        onBlur={e => e.target.style.borderColor = "var(--madel-border)"}
      />
      <button onClick={handleMulti} disabled={running || !texte.trim()}
        style={{ padding: "10px 20px", borderRadius: 10, border: "none", background: (running || !texte.trim()) ? "var(--madel-border)" : "var(--madel-navy)", color: (running || !texte.trim()) ? "var(--madel-muted)" : "#fff", cursor: (running || !texte.trim()) ? "not-allowed" : "pointer", fontFamily: "var(--madel-font)", fontWeight: 700, fontSize: 12 }}>
        {running ? "Envoi en cours..." : "📨 Envoyer toutes les invitations"}
      </button>

      {results.length > 0 && (
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 5 }}>
          {results.map((r, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "7px 12px", borderRadius: 8, background: r.status === "ok" ? "var(--madel-success-bg)" : r.status === "error" ? "var(--madel-danger-bg)" : "var(--madel-bg)", border: `1px solid ${r.status === "ok" ? "#A5D6A7" : r.status === "error" ? "#FCA5A5" : "var(--madel-border)"}` }}>
              <span style={{ fontSize: 14 }}>{r.status === "ok" ? "✅" : r.status === "error" ? "❌" : "⏳"}</span>
              <span style={{ fontSize: 12, fontWeight: 600, flex: 1 }}>{r.email}</span>
              {r.msg && <span style={{ fontSize: 11, color: "var(--madel-danger)" }}>{r.msg}</span>}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
