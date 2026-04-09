// ============================================================
// TABLE OFFICIELLE BONUS/MALUS — AGIRA
// Source : Annexe de l'article A. 121-1 du Code des assurances
// https://www.legifrance.gouv.fr
// ============================================================
// Le coefficient varie de 0.50 (bonus maximum) à 3.50 (malus maximum)
// Chaque année sans sinistre responsable : × 0.95 (réduction de 5%)
// Chaque sinistre responsable : × 1.25 (majoration de 25%)
// Sinistre semi-responsable : × 1.125 (majoration de 12.5%)
// Plancher légal : 0.50 — Plafond légal : 3.50

export const COEFFICIENTS_BONUS_MALUS_AGIRA: number[] = [
  // Tous les paliers officiels de la grille AGIRA
  0.50, 0.51, 0.53, 0.55, 0.58,
  0.60, 0.63, 0.66, 0.70, 0.73,
  0.77, 0.81, 0.85, 0.90, 0.95,
  1.00, // coefficient de départ (conducteur sans historique)
  1.12, 1.25, 1.40, 1.56, 1.73,
  1.91, 2.10, 2.31, 2.55, 2.80,
  3.07, 3.38, 3.50,
];

// Coefficient de départ selon le profil
export const COEFFICIENT_DEPART = {
  nouveau_permis: 1.00,
  conduite_accompagnee: 0.90, // AAC validée : avantage dès le départ
  transfert_depuis_autre_assureur: 1.00, // sans relevé d'information
};

// Règle : en dessous de 0.50 c'est illégal, au-dessus de 3.50 idem
export const BM_MIN = 0.50;
export const BM_MAX = 3.50;
export const BM_DEPART = 1.00;

// ============================================================
// DONNÉES STATISTIQUES — FRANCE ASSUREURS (ex-FFSA)
// Source : Rapport annuel France Assureurs 2023
// Sinistralité automobile France, données consolidées marché
// ============================================================

// Prime de référence par type de véhicule
// Base : prime RC seule, conducteur 35 ans, BM 1.00, zone3, usage promenade+travail, 12 000 km/an
// Source : moyennes marché France Assureurs 2023 (ajusté pédagogique)
export const PRIME_BASE_REFERENCE: Record<string, number> = {
  citadine:    380,   // ex. Peugeot 208, Renault Clio
  berline:     460,   // ex. Peugeot 308, Renault Megane
  SUV:         540,   // ex. Peugeot 3008, Renault Kadjar
  utilitaire:  620,   // ex. Renault Master, Peugeot Partner
  sportive:    780,   // ex. Golf GTI, BMW Série 1 M
  ancienne:    290,   // usage limité, valeur souvent faible
};

// ============================================================
// COEFFICIENTS D'ÂGE DU CONDUCTEUR
// Source : statistiques sinistralité par tranche d'âge ONISR 2023
// Les jeunes conducteurs ont une sinistralité 2 à 4× supérieure
// ============================================================
export const getCoefficientsAge = (age: number, anneesPermis: number): number => {
  // Jeune conducteur (< 3 ans de permis) — surcharge légalement encadrée
  if (anneesPermis === 0) return 1.00; // sera géré par BM départ
  if (age < 21)                return 2.20; // sinistralité très élevée
  if (age < 23)                return 1.80;
  if (age < 25)                return 1.45;
  if (age < 26 && anneesPermis < 2) return 1.35;
  if (age >= 25 && age < 30)   return 1.10; // encore légèrement pénalisé
  if (age >= 30 && age < 65)   return 1.00; // tranche de référence
  if (age >= 65 && age < 75)   return 1.05; // légère remontée
  if (age >= 75 && age < 80)   return 1.20; // réflexes ralentis
  if (age >= 80)               return 1.45; // risque accru
  return 1.00;
};

// ============================================================
// COEFFICIENTS D'USAGE
// Source : barèmes indicatifs France Assureurs + AGIRA
// ============================================================
export const COEFFICIENTS_USAGE: Record<string, number> = {
  promenade:           0.90,  // -10% : pas de trajet domicile-travail
  promenade_travail:   1.00,  // référence
  tournee:             1.35,  // +35% : usage professionnel intensif
  tous_deplacements:   1.60,  // +60% : VRP, commercial, usage très intense
};

// ============================================================
// COEFFICIENTS KILOMÉTRAGE ANNUEL
// Tranche de km déclaré — impact sur la fréquence d'exposition au risque
// Source : France Assureurs, corrélation km/sinistralité
// ============================================================
export const getCoefficientKm = (kmAnnuels: number): number => {
  if (kmAnnuels <= 5_000)  return 0.80;  // très faible exposition
  if (kmAnnuels <= 8_000)  return 0.90;
  if (kmAnnuels <= 12_000) return 1.00;  // référence
  if (kmAnnuels <= 15_000) return 1.08;
  if (kmAnnuels <= 20_000) return 1.18;
  if (kmAnnuels <= 30_000) return 1.32;
  return 1.50;                           // > 30 000 km : grand rouleur
};

// ============================================================
// COEFFICIENTS DE ZONE GÉOGRAPHIQUE
// Source : statistiques sinistralité AGIRA par département 2022
// Zone 1 = Paris + grandes métropoles (sinistralité vol élevée)
// Zone 4 = rural (faible densité, faible sinistralité)
// ============================================================
export const COEFFICIENTS_ZONE: Record<string, number> = {
  zone1: 1.35,  // Paris IDF, Lyon, Marseille, Lille, Bordeaux
  zone2: 1.15,  // Villes moyennes et agglomérations
  zone3: 1.00,  // Périurbain — référence
  zone4: 0.88,  // Rural — faible sinistralité
};

// ============================================================
// COEFFICIENTS PUISSANCE FISCALE
// Source : barèmes assureurs (données agrégées marché)
// La puissance est corrélée à la vitesse max et la sinistralité matérielle
// ============================================================
export const getCoefficientPuissance = (cv: number): number => {
  if (cv <= 4)  return 0.85;
  if (cv <= 6)  return 0.95;
  if (cv <= 8)  return 1.00;  // référence
  if (cv <= 10) return 1.12;
  if (cv <= 12) return 1.25;
  if (cv <= 15) return 1.45;
  return 1.65;                // > 15 CV : sportives et luxe
};

// ============================================================
// COEFFICIENTS DE FORMULE (sur la prime RC de base)
// Source : structure tarifaire standard marché
// ============================================================
export const COEFFICIENTS_FORMULE: Record<string, number> = {
  tiers:       1.00,  // RC seule — référence
  tiers_plus:  1.45,  // RC + vol + incendie + bris glace
  tous_risques: 2.10, // couverture complète (inclut dommages tous accidents)
};

// ============================================================
// TARIFICATION DES OPTIONS (montants annuels indicatifs)
// Source : tarifs moyens observés sur le marché français 2023
// ============================================================
export const TARIF_OPTIONS: Record<string, number> = {
  protection_juridique:     42,   // €/an
  assistance_0km:           38,   // €/an — assistance même depuis le domicile
  conducteur_exclusif:     -25,   // réduction €/an (un seul conducteur)
  jeune_conducteur_accomp: -60,   // réduction AAC (conduite accompagnée validée)
  vehicule_de_remplacement: 55,   // €/an
  garantie_du_capital:      85,   // €/an (véhicule neuf seulement, 1ère année)
  rachat_franchise:         95,   // €/an (supprime la franchise DTA)
};

// ============================================================
// FRANCHISES STANDARD PAR FORMULE
// Source : conditions générales types marché
// ============================================================
export const FRANCHISES_STANDARD = {
  tiers: {
    rc:         0,    // RC : pas de franchise légalement (tiers indemnisé directement)
    bris_glace: null, // non couvert
    vol:        null, // non couvert
    incendie:   null, // non couvert
    dta:        null, // non couvert
  },
  tiers_plus: {
    rc:         0,
    bris_glace: 75,   // €
    vol:        300,  // €
    incendie:   300,  // €
    dta:        null, // non couvert
  },
  tous_risques: {
    rc:         0,
    bris_glace: 75,   // €
    vol:        300,  // €
    incendie:   300,  // €
    dta:        300,  // € — Dommages Tous Accidents
  },
};

// ============================================================
// FISCALITÉ AUTOMOBILE
// Source : Code des assurances, CGI
// TCA = Taxe sur les Conventions d'Assurance
// ============================================================
export const FISCALITE = {
  taux_tca:                  0.18,    // 18% sur prime nette (auto)
  contribution_attentat:     5.90,    // € fixe par an (loi 2017)
  fonds_garantie_auto:       1.20,    // € fixe par an (FGAO)
};

// ============================================================
// DESCRIPTIF DES GARANTIES PAR FORMULE
// ============================================================
export const GARANTIES_PAR_FORMULE = {
  tiers: [
    { nom: "Responsabilité Civile", incluse: true, description: "Couvre les dommages corporels et matériels causés aux tiers. Obligatoire légalement.", franchise: 0 },
    { nom: "Défense pénale et recours", incluse: false, description: "En option : protection juridique en cas de litige suite à un accident." },
    { nom: "Garantie personnelle du conducteur", incluse: false, description: "Non incluse : les dommages corporels du conducteur ne sont pas couverts." },
    { nom: "Bris de glace", incluse: false, description: "Non inclus en formule tiers." },
    { nom: "Vol et incendie", incluse: false, description: "Non inclus en formule tiers." },
    { nom: "Dommages tous accidents (DTA)", incluse: false, description: "Non inclus en formule tiers." },
  ],
  tiers_plus: [
    { nom: "Responsabilité Civile", incluse: true, description: "Couvre les dommages corporels et matériels causés aux tiers.", franchise: 0 },
    { nom: "Vol et tentative de vol", incluse: true, description: "Remboursement valeur vénale du véhicule après enquête.", franchise: 300 },
    { nom: "Incendie et explosion", incluse: true, description: "Couvre les dégâts causés par le feu, quelle qu'en soit l'origine.", franchise: 300 },
    { nom: "Bris de glace", incluse: true, description: "Pare-brise, glaces latérales et lunette arrière.", franchise: 75 },
    { nom: "Catastrophes naturelles", incluse: true, description: "Couverture obligatoire si arrêté interministériel." },
    { nom: "Dommages tous accidents (DTA)", incluse: false, description: "Non inclus. Passe en tous risques pour couvrir les dommages à votre propre véhicule." },
  ],
  tous_risques: [
    { nom: "Responsabilité Civile", incluse: true, description: "Couverture illimitée des dommages aux tiers.", franchise: 0 },
    { nom: "Dommages tous accidents (DTA)", incluse: true, description: "Couvre tous les dommages à votre véhicule, même si vous êtes responsable.", franchise: 300 },
    { nom: "Vol et incendie", incluse: true, description: "Protection complète contre le vol et l'incendie.", franchise: 300 },
    { nom: "Bris de glace", incluse: true, description: "Vitrages de série compris (toits panoramiques inclus).", franchise: 75 },
    { nom: "Catastrophes naturelles et technologiques", incluse: true, description: "Couverture étendue events exceptionnels." },
    { nom: "Garantie personnelle du conducteur", incluse: true, description: "Indemnisation des préjudices corporels du conducteur, y compris si responsable.", franchise: 0 },
    { nom: "Assistance 0 km", incluse: false, description: "En option : dépannage même si la panne survient au domicile." },
  ],
};
