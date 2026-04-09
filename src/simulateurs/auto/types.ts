// ============================================================
// SIMULATEUR AUTO — Types & Interfaces
// Kleios Assurance BTS — EcoPatrimoine Conseil
// ============================================================

// --- Enums ---------------------------------------------------

export type UsagePrincipal =
  | "promenade_travail"   // usage le plus courant : domicile ↔ travail + loisirs
  | "promenade"           // loisirs uniquement, pas de trajet travail
  | "tournee"             // usage professionnel (commercial, artisan)
  | "tous_deplacements";  // usage intensif (VRP, taxi, ambulance non agréé)

export type FormuleGarantie =
  | "tiers"               // RC seule — minimum légal
  | "tiers_plus"          // RC + vol + incendie + bris de glace
  | "tous_risques";       // couverture complète

export type TypeVehicule =
  | "citadine"            // < 6 CV
  | "berline"             // 6–9 CV
  | "SUV"                 // 7–11 CV, valeur élevée
  | "utilitaire"          // VUL usage pro
  | "sportive"            // > 10 CV, moins de 10 ans
  | "ancienne";           // > 20 ans (collection / loisir)

export type ZoneGeographique =
  | "zone1"  // grandes métropoles : Paris, Lyon, Marseille, Lille, Bordeaux
  | "zone2"  // villes moyennes : 50 000–200 000 hab
  | "zone3"  // zones périurbaines et petites villes
  | "zone4"; // zones rurales — sinistralité la plus basse

// --- Input du simulateur -------------------------------------

export interface SimulateurAutoInput {
  // Conducteur principal
  agePrincipal: number;               // 18 à 90 ans
  anneesPermis: number;               // 0 = jeune conducteur
  bonusMalus: number;                 // coefficient officiel AGIRA : 0.50 à 3.50
  // Véhicule
  typeVehicule: TypeVehicule;
  puissanceFiscale: number;           // chevaux fiscaux (CV)
  valeurVehicule: number;             // valeur de remplacement en €
  anneeMiseEnCirculation: number;     // année (ex: 2018)
  // Usage
  usagePrincipal: UsagePrincipal;
  kmAnnuels: number;                  // kilométrage annuel déclaré
  zoneGeographique: ZoneGeographique;
  // Couverture
  formule: FormuleGarantie;
  options: OptionAuto[];
  // Contexte pédagogique
  dateSimulation?: Date;
}

export type OptionAuto =
  | "protection_juridique"    // +/- 40 €/an
  | "assistance_0km"          // +/- 35 €/an (assistance même à domicile)
  | "conducteur_exclusif"     // réduction si 1 seul conducteur déclaré
  | "jeune_conducteur_accomp" // réduction si conduite accompagnée validée
  | "vehicule_de_remplacement"// +/- 50 €/an
  | "garantie_du_capital"     // valeur d'achat remboursée 1 an (nouveau véhicule)
  | "rachat_franchise";       // supprime la franchise en tous risques

// --- Résultat du simulateur ----------------------------------

export interface ResultatSimulateurAuto {
  // Primes
  primeMensuelle: number;
  primeAnnuelle: number;
  primeHT: number;
  taxesEtContributions: number; // TCA 18% + contribution attentat 5.90€

  // Détail du calcul (transparence pédagogique)
  detail: DetailCalculAuto;

  // Garanties incluses
  garanties: GarantieDetail[];

  // Franchises applicables
  franchises: FranchiseDetail[];

  // Alertes et recommandations pédagogiques
  alertes: AlerteSimulateur[];

  // Indicateurs de risque (pour discussion en classe)
  niveauRisque: "faible" | "modere" | "eleve" | "tres_eleve";
  facteursPrincipauxRisque: string[];
}

export interface DetailCalculAuto {
  primeBaseReference: number;       // prime de référence avant tout coefficient
  coefficientBonusMalus: number;    // coefficient AGIRA appliqué
  coefficientAge: number;           // surcharge jeune conducteur
  coefficientUsage: number;         // selon usage déclaré
  coefficientKm: number;            // selon km annuels
  coefficientZone: number;          // selon zone géographique
  coefficientVehicule: number;      // selon puissance + type
  coefficientFormule: number;       // selon niveau de couverture
  montantOptions: number;           // cumul des options choisies
  primeNette: number;               // avant taxes
  tauxTCA: number;                  // Taxe sur les Conventions d'Assurance (18%)
  contributionAttentat: number;     // fixe : 5.90 €/an
  primeTTC: number;                 // montant final
}

export interface GarantieDetail {
  nom: string;
  incluse: boolean;
  description: string;
  plafond?: string;
  franchise?: number;
}

export interface FranchiseDetail {
  type: string;
  montant: number;
  conditions: string;
}

export interface AlerteSimulateur {
  niveau: "info" | "attention" | "important";
  message: string;
  conseil?: string;
}
