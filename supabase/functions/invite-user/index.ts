// ============================================================
// EDGE FUNCTION — invite-user
// Kleios Madel Assurance · BTS Assurance
// Fix : redirectTo complet + meilleure gestion d'erreur
// Déployer avec : supabase functions deploy invite-user
// ============================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL") ?? "";
const APP_URL     = Deno.env.get("APP_URL") ?? "";  // ex: https://madel-assurance.netlify.app

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // ── Vérifier l'authentification de l'appelant ──
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return Response.json({ error: "Non autorisé" }, { status: 401, headers: corsHeaders });
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    if (userError || !user) {
      return Response.json({ error: "Non authentifié" }, { status: 401, headers: corsHeaders });
    }

    if (user.email !== ADMIN_EMAIL) {
      return Response.json({ error: "Accès réservé à l'administrateur" }, { status: 403, headers: corsHeaders });
    }

    // ── Récupérer les paramètres ──
    const { email, role } = await req.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Email invalide" }, { status: 400, headers: corsHeaders });
    }

    // Vérifier que APP_URL est configuré
    if (!APP_URL) {
      console.error("⚠️  Variable APP_URL non définie dans les secrets Supabase !");
      return Response.json({ error: "Configuration serveur incomplète (APP_URL manquant)" }, { status: 500, headers: corsHeaders });
    }

    // ── Client admin ──
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    // ── Envoyer l'invitation ──
    // redirectTo DOIT être dans les "Redirect URLs" autorisées dans Supabase Dashboard
    const redirectTo = `${APP_URL}/auth/callback`;
    console.log(`Invitation de ${email} → redirectTo: ${redirectTo}`);

    const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
      data: { role: role ?? "student" },
      redirectTo,
    });

    if (error) {
      console.error("Erreur invitation:", error.message);
      if (error.message.includes("already been registered")) {
        return Response.json({ error: "Cet email est déjà inscrit" }, { status: 409, headers: corsHeaders });
      }
      return Response.json({ error: error.message }, { status: 400, headers: corsHeaders });
    }

    console.log(`✅ Invitation envoyée à ${email} (userId: ${data.user?.id})`);

    return Response.json({
      success: true,
      message: `Invitation envoyée à ${email}`,
      userId: data.user?.id,
    }, { headers: corsHeaders });

  } catch (err) {
    console.error("Erreur serveur inattendue:", err);
    return Response.json({ error: "Erreur serveur" }, { status: 500, headers: corsHeaders });
  }
});
