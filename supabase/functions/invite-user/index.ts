// ============================================================
// EDGE FUNCTION — invite-user
// Kleios Madel Assurance · BTS Assurance
// Déployer avec : supabase functions deploy invite-user
// ============================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL") ?? "";

Deno.serve(async (req: Request) => {
  // CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    // Vérifier que l'appelant est authentifié
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return Response.json({ error: "Non autorisé" }, { status: 401 });
    }

    // Créer un client Supabase avec la clé anon pour vérifier l'identité de l'appelant
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    // Vérifier l'identité de l'utilisateur appelant
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    if (userError || !user) {
      return Response.json({ error: "Non authentifié" }, { status: 401 });
    }

    // Vérifier que c'est bien l'admin
    if (user.email !== ADMIN_EMAIL) {
      return Response.json({ error: "Accès réservé à l'administrateur" }, { status: 403 });
    }

    // Récupérer l'email à inviter depuis le body
    const { email, role } = await req.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Email invalide" }, { status: 400 });
    }

    // Créer un client admin avec la service role key
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    // Inviter l'utilisateur
    const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
      data: { role: role ?? "student" },
      redirectTo: `${Deno.env.get("APP_URL") ?? ""}/auth/callback`,
    });

    if (error) {
      // Si l'utilisateur existe déjà
      if (error.message.includes("already been registered")) {
        return Response.json({ error: "Cet email est déjà inscrit" }, { status: 409 });
      }
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({
      success: true,
      message: `Invitation envoyée à ${email}`,
      userId: data.user?.id,
    }, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });

  } catch (err) {
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
});
