// ============================================================
// TABLES ACTUARIELLES — SIMULATEUR MRH
// Sources : France Assureurs 2023, données marché
// Kleios Madel Assurance · BTS Assurance
// ============================================================

// ── Prime de base ─────────────────────────────────────────────
// Base : locataire, appartement, 50m², 3 pièces, zone3,
// résidence principale, 15 000€ mobilier, sans alarme
export const PRIME_BASE_MRH = 135; // €/an
// Recalibré marché France 2025 — source : comparateurs assurance habitation
// Profil réf. (appart 50m², locataire, zone3, mobilier 15k) → ~171€/an TTC (vs 226€ avant)

// ── Coefficient surface ───────────────────────────────────────
// La surface impacte la prime via les plafonds de garantie
export const getCoefficientSurface = (m2: number): number => {
  if (m2 <= 25)  return 0.70;
  if (m2 <= 40)  return 0.85;
  if (m2 <= 60)  return 1.00; // référence
  if (m2 <= 80)  return 1.15;
  if (m2 <= 100) return 1.30;
  if (m2 <= 150) return 1.50;
  if (m2 <= 200) return 1.75;
  return 2.10; // > 200m²
};

// ── Coefficient nombre de pièces ──────────────────────────────
// Le nb de pièces affine la tarification indépendamment de la surface
export const getCoefficientPieces = (pieces: number): number => {
  if (pieces <= 1) return 0.80;
  if (pieces <= 2) return 0.90;
  if (pieces <= 3) return 1.00; // référence
  if (pieces <= 4) return 1.10;
  if (pieces <= 5) return 1.20;
  if (pieces <= 7) return 1.35;
  return 1.55; // > 7 pièces
};

// ── Coefficient type de logement ──────────────────────────────
export const COEFFICIENTS_TYPE_LOGEMENT: Record<string, number> = {
  studio:      0.85,  // surface réduite, moins de biens
  appartement: 1.00,  // référence
  maison:      1.25,  // plus grande surface, jardin, plus de risques
  villa:       1.55,  // grande maison, valeurs élevées, piscine fréquente
};

// ── Coefficient zone géographique ─────────────────────────────
// Impact principal : vol et dégâts des eaux en zone dense
export const COEFFICIENTS_ZONE_MRH: Record<string, number> = {
  zone1: 1.40,  // Paris + métropoles — vol élevé, dégâts des eaux fréquents
  zone2: 1.15,
  zone3: 1.00,  // référence
  zone4: 0.88,  // rural — faible sinistralité vol
};

// ── Coefficient type d'occupation ────────────────────────────
export const COEFFICIENTS_OCCUPATION: Record<string, number> = {
  locataire:    1.00,  // référence
  proprietaire: 1.20,  // valeur bâtiment assurée en plus
};

// ── Coefficient résidence ─────────────────────────────────────
// Résidence secondaire : inoccupation = risque vol et dégâts non détectés
export const COEFFICIENTS_RESIDENCE: Record<string, number> = {
  principale: 1.00,  // référence
  secondaire: 1.35,  // +35% — vol plus facile, sinistres découverts tardivement
};

// ── Coefficient alarme ────────────────────────────────────────
export const COEFFICIENT_ALARME = 0.90; // -10% si alarme certifiée NF

// ── Tarif mobilier ────────────────────────────────────────────
// La valeur des biens augmente la prime proportionnellement
export const getCoefficientMobilier = (valeur: number): number => {
  if (valeur <= 10000)  return 0.85;
  if (valeur <= 20000)  return 1.00; // référence
  if (valeur <= 30000)  return 1.15;
  if (valeur <= 50000)  return 1.30;
  if (valeur <= 80000)  return 1.50;
  return 1.75; // > 80 000 €
};

// ── Tarif objets de valeur ────────────────────────────────────
// Supplément annuel pour les objets de valeur (bijoux, art, montres)
// Source : barèmes marché — environ 1.5% de la valeur déclarée/an
export const calculerSupplementObjetsValeur = (valeur: number): number => {
  if (valeur <= 0) return 0;
  return Math.round(valeur * 0.015); // 1.5% de la valeur déclarée
};

// ── Tarif options ─────────────────────────────────────────────
export const TARIF_OPTIONS_MRH: Record<string, number> = {
  protection_juridique:    55,   // €/an
  assistance_depannage:    48,   // €/an
  dommages_electriques:    38,   // €/an
  equipements_exterieurs:  45,   // €/an
  reequipement_5ans:       65,   // €/an — sans vétusté ≤ 5 ans
  reequipement_illimite:  110,   // €/an — sans vétusté illimité
};

// ── Fiscalité MRH ─────────────────────────────────────────────
// TCA habitation : 9% (taux réduit vs 18% auto)
export const FISCALITE_MRH = {
  taux_tca:              0.09,
  contribution_attentat: 5.90,
  fgao:                  0.00,  // pas de FGAO en MRH
};

// ── Franchise ─────────────────────────────────────────────────
export const FRANCHISE_STANDARD_MRH = 150; // € — fixe sur tous les sinistres

// ── Plafonds de garantie ──────────────────────────────────────
// Calculés dynamiquement selon les valeurs déclarées
export const calculerPlafonds = (
  valeurMobilier: number,
  valeurObjetsValeur: number,
  valeurBatiment: number,
  typeOccupation: string
) => ({
  mobilier:      valeurMobilier,
  objetsValeur:  valeurObjetsValeur,
  batiment:      typeOccupation === "proprietaire" ? valeurBatiment : 0,
  rcViePrivee:   "Illimitée (dommages corporels) / 1 500 000 € (dommages matériels)",
  vol:           Math.min(valeurMobilier * 0.50, 25000), // plafond vol = 50% du mobilier, max 25 000€
  degatsEaux:    "Frais réels dans la limite du mobilier déclaré",
});

// ── Garanties détaillées ──────────────────────────────────────
export const GARANTIES_MRH_SOCLE = [
  {
    nom: "RC Vie Privée + Défense Recours",
    incluse: true,
    description: "Dommages corporels et matériels causés aux tiers par vous, votre famille ou vos animaux. Inclut la défense de vos intérêts en cas de litige.",
    plafond: "Illimitée (corporel) / 1 500 000 € (matériel)",
    franchise: 0,
  },
  {
    nom: "Incendie & explosion",
    incluse: true,
    description: "Dommages causés par le feu, la foudre directe, l'explosion de gaz ou d'appareils.",
    plafond: "Valeur déclarée des biens",
    franchise: 150,
  },
  {
    nom: "Dégâts des eaux",
    incluse: true,
    description: "Fuites et ruptures de canalisations, infiltrations par les toitures, débordements d'appareils ménagers.",
    plafond: "Frais réels",
    franchise: 150,
  },
  {
    nom: "Événement climatique",
    incluse: true,
    description: "Tempête, grêle, neige, chute d'arbres, effondrement de toiture sous le poids de la neige.",
    plafond: "Valeur déclarée des biens",
    franchise: 150,
  },
  {
    nom: "Catastrophes naturelles",
    incluse: true,
    description: "Inondation, coulée de boue, séisme, sécheresse — uniquement si arrêté interministériel publié.",
    plafond: "Valeur déclarée",
    franchise: 380, // franchise légale cat nat
  },
  {
    nom: "Catastrophes technologiques",
    incluse: true,
    description: "Explosion d'usine, nuage toxique, effondrement d'infrastructure industrielle à proximité.",
    plafond: "Valeur déclarée",
    franchise: 0,
  },
  {
    nom: "Vol et vandalisme",
    incluse: true,
    description: "Cambriolage avec effraction, tentative de vol, dégradations commises lors d'un cambriolage.",
    plafond: "50% du mobilier déclaré, max 25 000 €",
    franchise: 150,
  },
  {
    nom: "Bris de glace",
    incluse: true,
    description: "Vitres, baies vitrées, miroirs, plaques vitrocéramiques, panneaux solaires.",
    plafond: "Valeur de remplacement",
    franchise: 150,
  },
  {
    nom: "Dommages au bâtiment",
    incluse: true,
    description: "Structure, murs porteurs, toiture, planchers — couverture automatique sur tous les contrats.",
    plafond: "Valeur de reconstruction",
    franchise: 150,
  },
];

export const GARANTIES_OPTIONS_MRH = [
  {
    id: "protection_juridique" as const,
    nom: "Protection juridique",
    description: "Défense de vos intérêts en cas de litige avec votre propriétaire, bailleur, voisin ou syndic.",
  },
  {
    id: "assistance_depannage" as const,
    nom: "Assistance dépannage 24h/24",
    description: "Intervention urgente d'un plombier, serrurier ou électricien à domicile, 7j/7.",
  },
  {
    id: "dommages_electriques" as const,
    nom: "Dommages électriques",
    description: "Surtension, court-circuit, foudre indirecte — couvre appareils électroménagers et hi-fi.",
  },
  {
    id: "equipements_exterieurs" as const,
    nom: "Équipements extérieurs",
    description: "Piscine, spa, abri de jardin, mobilier de jardin, barbecue, arbres — dommages et RC.",
  },
  {
    id: "reequipement_5ans" as const,
    nom: "Rééquipement à neuf — 5 ans",
    description: "Remboursement sans déduction de vétusté pour les biens de moins de 5 ans. Au-delà : vétusté standard.",
  },
  {
    id: "reequipement_illimite" as const,
    nom: "Rééquipement à neuf — Illimité",
    description: "Remboursement sans aucune déduction de vétusté, quel que soit l'âge du bien. La meilleure couverture.",
  },
];
