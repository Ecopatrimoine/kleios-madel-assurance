// ============================================================
// SIMULATEUR MRH — Types & Interfaces
// Kleios Madel Assurance · BTS Assurance
// ============================================================

export type TypeLogement =
  | "studio"        // T1, ≤ 25m²
  | "appartement"   // T2 à T4
  | "maison"        // maison individuelle
  | "villa";        // villa / grande maison avec terrain

export type TypeOccupation =
  | "locataire"
  | "proprietaire";

export type TypeResidence =
  | "principale"    // occupation > 8 mois/an
  | "secondaire";   // occupation ≤ 8 mois/an — majoration + conditions vol

export type ZoneGeographiqueMRH =
  | "zone1"   // Paris + grandes métropoles
  | "zone2"   // villes moyennes
  | "zone3"   // périurbain — référence
  | "zone4";  // rural

export type OptionMRH =
  | "protection_juridique"
  | "assistance_depannage"
  | "dommages_electriques"
  | "equipements_exterieurs"
  | "reequipement_5ans"       // rééquipement à neuf sans vétusté jusqu'à 5 ans
  | "reequipement_illimite";  // rééquipement à neuf sans vétusté illimité

export type NiveauReequipement =
  | "standard"    // avec vétusté (défaut)
  | "5ans"        // sans vétusté ≤ 5 ans
  | "illimite";   // sans vétusté illimité

export interface SimulateurMRHInput {
  // Assuré
  typeOccupation:  TypeOccupation;
  typeResidence:   TypeResidence;

  // Logement
  typeLogement:    TypeLogement;
  surface:         number;      // m²
  nbPieces:        number;      // nombre de pièces principales
  etage:           number;      // 0 = RDC, -1 = non applicable (maison)
  zoneGeographique: ZoneGeographiqueMRH;
  alarmeConnectee: boolean;     // alarme certifiée → réduction

  // Valeurs assurées
  valeurMobilier:        number;  // € total des biens mobiliers déclarés
  valeurObjetsValeur:    number;  // € bijoux, art, montres (0 si aucun)
  valeurBatiment:        number;  // € valeur reconstruction (propriétaire uniquement)

  // Couverture
  options: OptionMRH[];

  // Risques géographiques
  zoneInondable: boolean; // PPRI détecté via Géorisques
}

export interface ResultatSimulateurMRH {
  primeMensuelle:        number;
  primeAnnuelle:         number;
  primeHT:               number;
  taxesEtContributions:  number;
  franchise:             number;  // toujours 150 €
  detail:                DetailCalculMRH;
  garanties:             GarantieMRHDetail[];
  franchises:            FranchiseMRHDetail[];
  alertes:               AlerteMRH[];
  niveauRisque:          "faible" | "modere" | "eleve" | "tres_eleve";
  facteursPrincipauxRisque: string[];
  plafonds:              PlafondsGaranties;
}

export interface DetailCalculMRH {
  primeBaseReference:      number;
  coefficientSurface:      number;
  coefficientPieces:       number;
  coefficientTypeLogement: number;
  coefficientZone:         number;
  coefficientOccupation:   number;
  coefficientResidence:    number;
  coefficientAlarme:       number;
  coefficientInondation:   number;
  montantOptions:          number;
  primeNette:              number;
  tauxTCA:                 number;
  contributionAttentat:    number;
  primeTTC:                number;
}

export interface GarantieMRHDetail {
  nom:         string;
  incluse:     boolean;
  description: string;
  plafond?:    string;
  franchise?:  number;
}

export interface FranchiseMRHDetail {
  type:       string;
  montant:    number;
  conditions: string;
}

export interface AlerteMRH {
  niveau:   "info" | "attention" | "important";
  message:  string;
  conseil?: string;
}

export interface PlafondsGaranties {
  mobilier:        number;
  objetsValeur:    number;
  batiment:        number;
  rcViePrivee:     string;
  vol:             number;
  degatsEaux:      string;
}
