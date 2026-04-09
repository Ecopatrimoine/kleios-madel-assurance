// ============================================================
// SIMULATEUR MOTO — Types & Interfaces
// Kleios Madel Assurance · BTS Assurance
// ============================================================

export type TypeMoto =
  | "scooter_50"        // 50cc — permis AM (14 ans)
  | "scooter_125"       // 125cc — permis A1 ou B+formation
  | "moto_125"          // moto 125cc — A1
  | "moto_moyenne"      // 126-500cc — A2
  | "moto_500"          // > 500cc accès progressif A2
  | "moto_grosse"       // > 500cc — permis A
  | "moto_sportive"     // sportive haute puissance (>100ch)
  | "moto_custom"       // custom / cruiser (Harley, etc.)
  | "moto_trail"        // trail / adventure (Africa Twin, etc.)
  | "side_car";         // side-car

export type CategoriePeermis =
  | "AM"   // cyclomoteur (14 ans)
  | "A1"   // moto légère ≤ 11kW, ≤ 125cc
  | "A2"   // moto ≤ 35kW, rapport poids/puissance ≤ 0.2 kW/kg
  | "A";   // toutes motos (accès direct > 24 ans ou progression 2 ans A2)

export type UsageMoto =
  | "loisir"            // week-end, balade — usage limité
  | "quotidien"         // trajet domicile-travail
  | "touring"           // grands voyages, usage intensif
  | "piste";            // usage circuit (très rare, surprime massive)

export type FormuleGarantieMoto =
  | "tiers"
  | "tiers_plus"
  | "tous_risques";

export type OptionMoto =
  | "protection_juridique"
  | "assistance_0km"
  | "equipement_conducteur"   // casque, blouson, gants — jusqu'à 1500€
  | "accessoires_moto"        // top-case, sacoches, GPS — jusqu'à 800€
  | "conducteur_exclusif"
  | "rachat_franchise"
  | "vol_accessoires";        // antivol, chaîne, alarme inclus

export interface SimulateurMotoInput {
  // Conducteur
  agePrincipal: number;
  anneesPermis: number;
  categoriePermis: CategoriePeermis;
  bonusMalus: number;           // CRM 0.50 → 3.50 (même règle AGIRA)

  // Moto
  typeMoto: TypeMoto;
  cylindree: number;            // cm³
  puissanceKw: number;          // kW
  valeurMoto: number;           // € valeur vénale
  anneeMiseEnCirculation: number;

  // Usage
  usagePrincipal: UsageMoto;
  kmAnnuels: number;
  zoneGeographique: "zone1" | "zone2" | "zone3" | "zone4";
  garageeFermee: boolean;       // moto garée dans un local fermé (réduit vol)

  // Couverture
  formule: FormuleGarantieMoto;
  options: OptionMoto[];

  // Multi-détention
  autoAssureeMadel: boolean; // contrat auto déjà souscrit chez Madel → -30%
}

export interface ResultatSimulateurMoto {
  primeMensuelle: number;
  primeAnnuelle: number;
  primeHT: number;
  taxesEtContributions: number;
  detail: DetailCalculMoto;
  garanties: GarantieMotoDetail[];
  franchises: FranchiseMotoDetail[];
  alertes: AlerteMoto[];
  niveauRisque: "faible" | "modere" | "eleve" | "tres_eleve";
  facteursPrincipauxRisque: string[];
}

export interface DetailCalculMoto {
  primeBaseReference: number;
  coefficientBonusMalus: number;
  coefficientAge: number;
  coefficientPermis: number;
  coefficientUsage: number;
  coefficientKm: number;
  coefficientZone: number;
  coefficientCylindree: number;
  coefficientFormule: number;
  coefficientGarage: number;
  coefficientMultiDetention: number;
  montantOptions: number;
  primeNette: number;
  tauxTCA: number;
  contributionAttentat: number;
  primeTTC: number;
}

export interface GarantieMotoDetail {
  nom: string;
  incluse: boolean;
  description: string;
  franchise?: number;
}

export interface FranchiseMotoDetail {
  type: string;
  montant: number;
  conditions: string;
}

export interface AlerteMoto {
  niveau: "info" | "attention" | "important";
  message: string;
  conseil?: string;
}
