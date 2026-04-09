// ============================================================
// CLIENT SUPABASE — Kleios Madel Assurance
// ============================================================
import { createClient } from "@supabase/supabase-js";

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL  as string;
const supabaseKey  = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Variables VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY manquantes dans .env");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// ── Types base de données ────────────────────────────────────

export interface DbAssure {
  id: string;                    // UUID
  user_id: string;               // UUID de l'agent (auth.users)
  numero_client: string;         // ex: "MA-2024-0001"
  nom: string;
  prenom: string;
  date_naissance: string;        // ISO date
  email: string;
  telephone: string;
  adresse: string;
  code_postal: string;
  ville: string;
  payload: Record<string, unknown>; // données complémentaires JSON
  created_at: string;
  updated_at: string;
}

export interface DbContrat {
  id: string;
  user_id: string;
  assure_id: string;
  numero_contrat: string;        // ex: "AUTO-2024-0042"
  type_contrat: string;          // "auto" | "moto" | "mrh" | etc.
  compagnie: string;
  date_effet: string;
  date_echeance: string;
  prime_annuelle: number;
  statut: "actif" | "suspendu" | "resilie" | "en_cours";
  payload: Record<string, unknown>;
  created_at: string;
}

export interface DbSinistre {
  id: string;
  user_id: string;
  assure_id: string;
  contrat_id: string;
  numero_sinistre: string;
  type_sinistre: string;
  date_sinistre: string;
  date_declaration: string;
  description: string;
  montant_estime: number;
  montant_indemnise: number;
  statut: "declare" | "en_cours" | "expertise" | "clos" | "refuse";
  created_at: string;
}

export interface DbCabinetSettings {
  id: string;
  user_id: string;
  nom_cabinet: string;
  logo_url?: string;
  couleur_principale: string;
  adresse: string;
  telephone: string;
  email: string;
  numero_orias: string;
  created_at: string;
}
