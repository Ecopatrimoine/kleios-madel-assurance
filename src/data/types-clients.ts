// ============================================================
// TYPES — Clients & Contrats
// Kleios Madel Assurance · BTS Assurance
// ============================================================

export type SituationFamiliale = "celibataire" | "marie" | "pacse" | "divorce" | "veuf" | "concubinage";
export type CSP = "cadre" | "non_cadre" | "tns" | "liberal" | "fonctionnaire" | "retraite" | "etudiant";
export type StatutClient = "prospect" | "client_actif" | "vip" | "archive";
export type StatutContrat = "actif" | "resilie" | "en_cours" | "suspendu";
export type TypeContrat =
  | "auto" | "moto" | "mrh" | "gav" | "scolaire"
  | "deces" | "ij" | "dependance" | "sante" | "emprunteur"
  | "rcpro" | "mrp";

export interface Enfant {
  prenom: string;
  dateNaissance: string;
}

export interface Conjoint {
  prenom: string;
  nom: string;
  dateNaissance: string;
  csp?: CSP;
  profession?: string;
}

export interface ContratDemo {
  id: string;
  type: TypeContrat;
  produit: string;
  compagnie: string;
  numeroContrat: string;
  statut: StatutContrat;
  dateDebut: string;
  dateFin?: string;
  primeAnnuelle: number;
  details: Record<string, unknown>;
  motifResiliation?: string;
}

export interface ClientDemo {
  id: string;
  // Identité
  nom: string;
  prenom: string;
  dateNaissance: string;
  email: string;
  telephone: string;
  adresse: string;
  codePostal: string;
  ville: string;
  // Famille
  situationFamiliale: SituationFamiliale;
  nbEnfants: number;
  enfants: Enfant[];
  conjoint?: Conjoint;
  // Pro
  csp: CSP;
  profession: string;
  revenuAnnuel: number;
  // Statut
  statut: StatutClient;
  dateEntree: string;
  notes?: string;
  // Contrats
  contrats: ContratDemo[];
}

export const TYPE_LABELS: Record<TypeContrat, { label: string; icone: string; couleur: string }> = {
  auto:       { label: "Auto",         icone: "🚗", couleur: "#4A8FD4" },
  moto:       { label: "Moto",         icone: "🏍️", couleur: "#7C3AED" },
  mrh:        { label: "MRH",          icone: "🏠", couleur: "#059669" },
  gav:        { label: "GAV",          icone: "🛡️", couleur: "#D97706" },
  scolaire:   { label: "Scolaire",     icone: "🎒", couleur: "#2563EB" },
  deces:      { label: "Décès",        icone: "⚫", couleur: "#6B7280" },
  ij:         { label: "IJ",           icone: "🏥", couleur: "#DC2626" },
  dependance: { label: "Dépendance",   icone: "♿", couleur: "#9333EA" },
  sante:      { label: "Santé",        icone: "💊", couleur: "#16A34A" },
  emprunteur: { label: "Emprunteur",   icone: "🏦", couleur: "#0891B2" },
  rcpro:      { label: "RC Pro",       icone: "⚖️", couleur: "#B45309" },
  mrp:        { label: "MRP",          icone: "🏢", couleur: "#0F766E" },
};

export const STATUT_LABELS: Record<StatutClient, { label: string; couleur: string; bg: string }> = {
  prospect:     { label: "Prospect",     couleur: "#2563EB", bg: "#EFF6FF" },
  client_actif: { label: "Client actif", couleur: "#16A34A", bg: "#F0FDF4" },
  vip:          { label: "VIP",          couleur: "#D97706", bg: "#FFFBEB" },
  archive:      { label: "Archivé",      couleur: "#6B7280", bg: "#F9FAFB" },
};
