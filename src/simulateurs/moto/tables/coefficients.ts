// ============================================================
// TABLES ACTUARIELLES — SIMULATEUR MOTO
// Sources : France Assureurs 2023, ONISR, données marché
// Kleios Madel Assurance · BTS Assurance
// ============================================================

// ── Primes de base par type de moto ──────────────────────────
// Base : conducteur 35 ans, CRM 1.00, zone3, usage quotidien
// 10 000 km/an, formule tiers, permis A depuis 5 ans
// Source : moyennes marché France Assureurs 2023
export const PRIME_BASE_MOTO: Record<string, number> = {
  scooter_50:    180,   // très faible risque, valeur faible
  scooter_125:   280,   // usage urbain, vol fréquent
  moto_125:      320,   // bonne sinistralité A1
  moto_moyenne:  420,   // 126-500cc — profil intermédiaire
  moto_500:      560,   // > 500cc accès progressif
  moto_grosse:   720,   // > 500cc permis A — sinistralité élevée
  moto_sportive: 980,   // sportive : sinistralité très élevée
  moto_custom:   520,   // custom : usage loisir, sinistralité modérée
  moto_trail:    580,   // trail : usage mixte
  side_car:      640,   // side-car : profil spécifique
};

// ── Coefficients âge conducteur moto ─────────────────────────
// La sinistralité moto est 3× plus élevée que l'auto chez les jeunes
// Source : ONISR — Bilan de l'accidentalité 2023
export const getCoefficientAgeMoto = (age: number, anneesPermis: number): number => {
  if (age < 18) return 1.00; // AM seulement
  if (age < 20 && anneesPermis < 2) return 3.20; // jeune motard — risque très élevé
  if (age < 22 && anneesPermis < 2) return 2.80;
  if (age < 25 && anneesPermis < 3) return 2.20;
  if (age < 25) return 1.80;
  if (age < 28) return 1.30;
  if (age >= 28 && age < 60) return 1.00; // référence
  if (age >= 60 && age < 70) return 1.10; // légère hausse
  if (age >= 70) return 1.35;
  return 1.00;
};

// ── Coefficients catégorie de permis ─────────────────────────
// L'accès progressif A2 → A réduit la sinistralité
export const COEFFICIENTS_PERMIS: Record<string, number> = {
  AM: 0.85,  // cyclomoteur — faible puissance, faible risque
  A1: 0.90,  // moto légère — profil débutant mais puissance limitée
  A2: 1.00,  // référence — permis intermédiaire
  A:  1.20,  // toutes motos — accès à haute puissance
};

// Bonus accès progressif : A2 puis A après 2 ans
// (réduit le coefficient A de 10%)
export const BONUS_ACCES_PROGRESSIF = 0.90;

// ── Coefficients usage moto ───────────────────────────────────
export const COEFFICIENTS_USAGE_MOTO: Record<string, number> = {
  loisir:    0.75,  // week-end seulement — exposition très réduite
  quotidien: 1.00,  // référence — trajet domicile-travail
  touring:   1.20,  // grands voyages — km élevés, fatigue
  piste:     2.50,  // circuit — risque extrême, peu couvert
};

// ── Coefficients kilométrage moto ────────────────────────────
export const getCoefficientKmMoto = (km: number): number => {
  if (km <= 2000)  return 0.70; // très faible utilisation
  if (km <= 5000)  return 0.85;
  if (km <= 8000)  return 0.93;
  if (km <= 12000) return 1.00; // référence
  if (km <= 20000) return 1.20;
  if (km <= 30000) return 1.40;
  return 1.65; // touring intensif
};

// ── Coefficients zone géographique ───────────────────────────
// Moto : vol très concentré en zone 1 (Paris, Lyon, Marseille)
export const COEFFICIENTS_ZONE_MOTO: Record<string, number> = {
  zone1: 1.55,  // métropoles : vol × 3 vs zone rurale
  zone2: 1.20,
  zone3: 1.00,  // référence
  zone4: 0.82,
};

// ── Coefficients cylindrée ───────────────────────────────────
// La cylindrée est corrélée à la vitesse max et la gravité des accidents
export const getCoefficientCylindree = (cc: number): number => {
  if (cc <= 50)   return 0.70;  // cyclomoteur
  if (cc <= 125)  return 0.85;  // 125cc
  if (cc <= 300)  return 0.95;
  if (cc <= 500)  return 1.00;  // référence
  if (cc <= 750)  return 1.20;
  if (cc <= 1000) return 1.45;
  if (cc <= 1300) return 1.65;
  return 1.85; // > 1300cc — gros cubes
};

// ── Coefficients formule ─────────────────────────────────────
export const COEFFICIENTS_FORMULE_MOTO: Record<string, number> = {
  tiers:        1.00,
  tiers_plus:   1.55,  // vol très important en moto → plus cher qu'auto
  tous_risques: 2.30,
};

// ── Coefficient garage fermée ─────────────────────────────────
// Moto garée dans un local fermé (box, garage) réduit le risque vol
export const COEFFICIENT_GARAGE_FERME = 0.88; // -12% si garage fermé

// ── Tarif options ─────────────────────────────────────────────
export const TARIF_OPTIONS_MOTO: Record<string, number> = {
  protection_juridique:   45,
  assistance_0km:         42,
  equipement_conducteur:  68,   // rachat équipement (casque, blouson, gants)
  accessoires_moto:       35,   // top-case, GPS, sacoches
  conducteur_exclusif:   -30,
  rachat_franchise:       110,
  vol_accessoires:        28,   // antivol, alarme, chaîne couverts
};

// ── Franchises standard moto ──────────────────────────────────
export const FRANCHISES_MOTO = {
  tiers: {
    rc: 0, bris_glace: null, vol: null, dta: null,
  },
  tiers_plus: {
    rc: 0, bris_glace: 100, vol: 400, incendie: 400, dta: null,
    // Note : franchise vol moto plus élevée qu'auto (risque plus élevé)
  },
  tous_risques: {
    rc: 0, bris_glace: 100, vol: 400, incendie: 400, dta: 500,
  },
};

// ── Garanties par formule ─────────────────────────────────────
export const GARANTIES_MOTO = {
  tiers: [
    { nom: "Responsabilité Civile", incluse: true, description: "Dommages corporels et matériels causés aux tiers. Obligatoire.", franchise: 0 },
    { nom: "Protection du conducteur", incluse: false, description: "Non inclus : dommages corporels du conducteur non couverts en tiers." },
    { nom: "Vol et incendie", incluse: false, description: "Non inclus en formule Tiers." },
    { nom: "Dommages tous accidents", incluse: false, description: "Non inclus en formule Tiers." },
  ],
  tiers_plus: [
    { nom: "Responsabilité Civile", incluse: true, description: "Couverture illimitée des dommages aux tiers.", franchise: 0 },
    { nom: "Vol et incendie", incluse: true, description: "Remboursement valeur vénale après dépôt de plainte obligatoire.", franchise: 400 },
    { nom: "Bris de glace / optique", incluse: true, description: "Bulle de carénage, optiques, rétroviseurs.", franchise: 100 },
    { nom: "Catastrophes naturelles", incluse: true, description: "Si arrêté interministériel.", franchise: 0 },
    { nom: "Dommages tous accidents", incluse: false, description: "Non inclus — passer en Tous Risques." },
  ],
  tous_risques: [
    { nom: "Responsabilité Civile", incluse: true, description: "Couverture illimitée des dommages aux tiers.", franchise: 0 },
    { nom: "Dommages tous accidents", incluse: true, description: "Couvre les dommages à la moto même si responsable.", franchise: 500 },
    { nom: "Vol et incendie", incluse: true, description: "Remboursement valeur vénale. Franchise réduite si antivol homologué.", franchise: 400 },
    { nom: "Bris de glace / optique", incluse: true, description: "Bulle, optiques, rétroviseurs, carénages optiques.", franchise: 100 },
    { nom: "Protection du conducteur", incluse: true, description: "Indemnisation des préjudices corporels du conducteur, même responsable.", franchise: 0 },
    { nom: "Catastrophes naturelles", incluse: true, description: "Couverture étendue.", franchise: 0 },
  ],
};

// ── Fiscalité (identique auto) ────────────────────────────────
export const FISCALITE_MOTO = {
  taux_tca:             0.18,
  contribution_attentat: 5.90,
  fgao:                  1.20,
};
