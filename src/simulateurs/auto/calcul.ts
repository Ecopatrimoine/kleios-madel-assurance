// ============================================================
// MOTEUR DE CALCUL — SIMULATEUR AUTO
// Kleios Assurance BTS — EcoPatrimoine Conseil
//
// Architecture : ce fichier est la SEULE source de vérité
// pour les calculs. L'UI ne fait aucun calcul elle-même.
// Le prof peut modifier les paramètres ici sans toucher à l'UI.
// ============================================================

import type {
  SimulateurAutoInput,
  ResultatSimulateurAuto,
  DetailCalculAuto,
  AlerteSimulateur,
} from "./types";

import {
  PRIME_BASE_REFERENCE,
  getCoefficientsAge,
  COEFFICIENTS_USAGE,
  getCoefficientKm,
  COEFFICIENTS_ZONE,
  getCoefficientPuissance,
  COEFFICIENTS_FORMULE,
  TARIF_OPTIONS,
  FRANCHISES_STANDARD,
  FISCALITE,
  GARANTIES_PAR_FORMULE,
  BM_MIN,
  BM_MAX,
} from "./tables/agira";

// ============================================================
// PARAMÈTRES PÉDAGOGIQUES — modifiables par le professeur
// Ces constantes permettent d'ajuster le réalisme sans
// modifier la logique de calcul sous-jacente.
// ============================================================
export const PARAMS_PEDAGOGIQUES = {
  // Marge commerciale simulée du cabinet (chargements)
  marge_commerciale: 1.08,       // +8% sur la prime technique

  // Réduction fidélité (si client existant dans le CRM)
  reduction_fidelite_3ans: 0.05, // -5% après 3 ans de contrat
  reduction_fidelite_5ans: 0.08, // -8% après 5 ans

  // Seuil d'alerte sinistre (pour l'affichage pédagogique)
  seuil_risque_eleve: 1800,      // prime annuelle > 1800€ = risque élevé

  // Arrondi des primes (centimes)
  arrondi: 2,
};

// ============================================================
// FONCTION PRINCIPALE DE CALCUL
// ============================================================
export const calculerPrimeAuto = (
  input: SimulateurAutoInput
): ResultatSimulateurAuto => {

  // --- 1. Validation des entrées ---------------------------
  const bonusMalus = Math.min(Math.max(input.bonusMalus, BM_MIN), BM_MAX);

  // --- 2. Prime de base ------------------------------------
  const primeBaseReference =
    PRIME_BASE_REFERENCE[input.typeVehicule] ?? PRIME_BASE_REFERENCE.berline;

  // --- 3. Application des coefficients ---------------------
  const coeffAge       = getCoefficientsAge(input.agePrincipal, input.anneesPermis);
  const coeffUsage     = COEFFICIENTS_USAGE[input.usagePrincipal] ?? 1.00;
  const coeffKm        = getCoefficientKm(input.kmAnnuels);
  const coeffZone      = COEFFICIENTS_ZONE[input.zoneGeographique] ?? 1.00;
  const coeffPuissance = getCoefficientPuissance(input.puissanceFiscale);
  const coeffFormule   = COEFFICIENTS_FORMULE[input.formule] ?? 1.00;

  // --- 4. Prime nette avant options ------------------------
  // La prime nette = base × tous les coefficients × marge commerciale
  const primeNetteSansOptions =
    primeBaseReference
    * bonusMalus
    * coeffAge
    * coeffUsage
    * coeffKm
    * coeffZone
    * coeffPuissance
    * coeffFormule
    * PARAMS_PEDAGOGIQUES.marge_commerciale;

  // --- 5. Options ------------------------------------------
  const montantOptions = input.options.reduce((total: number, option: string) => {
    return total + (TARIF_OPTIONS[option] ?? 0);
  }, 0);

  const primeNette = primeNetteSansOptions + montantOptions;

  // --- 6. Taxes et contributions ---------------------------
  const montantTCA             = primeNette * FISCALITE.taux_tca;
  const contributionAttentat   = FISCALITE.contribution_attentat;
  const fgao                   = FISCALITE.fonds_garantie_auto;
  const taxesEtContributions   = montantTCA + contributionAttentat + fgao;

  const primeTTC = primeNette + taxesEtContributions;

  // --- 7. Arrondi ------------------------------------------
  const arrondir = (n: number) =>
    Math.round(n * 10 ** PARAMS_PEDAGOGIQUES.arrondi) / 10 ** PARAMS_PEDAGOGIQUES.arrondi;

  const primeAnnuelle  = arrondir(primeTTC);
  const primeMensuelle = arrondir(primeTTC / 12);

  // --- 8. Détail pédagogique (transparence du calcul) ------
  const detail: DetailCalculAuto = {
    primeBaseReference:      arrondir(primeBaseReference),
    coefficientBonusMalus:   bonusMalus,
    coefficientAge:          coeffAge,
    coefficientUsage:        coeffUsage,
    coefficientKm:           coeffKm,
    coefficientZone:         coeffZone,
    coefficientVehicule:     arrondir(coeffPuissance),
    coefficientFormule:      coeffFormule,
    montantOptions:          arrondir(montantOptions),
    primeNette:              arrondir(primeNette),
    tauxTCA:                 FISCALITE.taux_tca,
    contributionAttentat:    contributionAttentat,
    primeTTC:                arrondir(primeTTC),
  };

  // --- 9. Garanties incluses selon formule -----------------
  const garantiesBase = (GARANTIES_PAR_FORMULE as Record<string, GarantieItem[]>)[input.formule] ?? [];
  const garantiesAvecOptions = ajouterGarantiesOptions(garantiesBase, input.options);

  // --- 10. Franchises applicables --------------------------
  const franchisesApplicables = extraireFranchises(input.formule, input.options);

  // --- 11. Niveau de risque (indicateur pédagogique) -------
  const niveauRisque = calculerNiveauRisque(primeAnnuelle, input, bonusMalus);

  // --- 12. Alertes pédagogiques ----------------------------
  const alertes = genererAlertes(input, bonusMalus, primeAnnuelle, niveauRisque);

  // --- 13. Facteurs de risque principaux -------------------
  const facteursPrincipaux = identifierFacteursRisque(input, bonusMalus, coeffAge);

  return {
    primeMensuelle,
    primeAnnuelle,
    primeHT:               arrondir(primeNette),
    taxesEtContributions:  arrondir(taxesEtContributions),
    detail,
    garanties:             garantiesAvecOptions,
    franchises:            franchisesApplicables,
    alertes,
    niveauRisque,
    facteursPrincipauxRisque: facteursPrincipaux,
  };
};

// ============================================================
// FONCTIONS UTILITAIRES INTERNES
// ============================================================

interface GarantieItem { nom: string; incluse: boolean; description: string; franchise?: number; }

const ajouterGarantiesOptions = (
  garantiesBase: GarantieItem[],
  options: string[]
) => {
  const garanties = [...garantiesBase];

  if (options.includes("protection_juridique")) {
    const idx = garanties.findIndex(g => g.nom === "Défense pénale et recours");
    if (idx !== -1) garanties[idx] = { ...garanties[idx], incluse: true };
    else garanties.push({ nom: "Protection juridique", incluse: true, description: "Défense de vos intérêts en cas de litige lié à un accident.", franchise: 0 });
  }

  if (options.includes("assistance_0km")) {
    const idx = garanties.findIndex(g => g.nom === "Assistance 0 km");
    if (idx !== -1) garanties[idx] = { ...garanties[idx], incluse: true };
    else garanties.push({ nom: "Assistance 0 km", incluse: true, description: "Dépannage et remorquage même si la panne survient devant chez vous.", franchise: 0 });
  }

  if (options.includes("vehicule_de_remplacement")) {
    garanties.push({ nom: "Véhicule de remplacement", incluse: true, description: "Mise à disposition d'un véhicule pendant les réparations (jusqu'à 10 jours).", franchise: 0 });
  }

  return garanties;
};

const extraireFranchises = (
  formule: string,
  options: string[]
) => {
  const f = FRANCHISES_STANDARD[formule as keyof typeof FRANCHISES_STANDARD];
  if (!f) return [];

  const franchises = [];

  if (formule === "tiers_plus" || formule === "tous_risques") {
    if (f.bris_glace !== null) {
      franchises.push({ type: "Bris de glace", montant: f.bris_glace!, conditions: "Par sinistre" });
    }
    if (f.vol !== null) {
      franchises.push({ type: "Vol et incendie", montant: f.vol!, conditions: "Par sinistre, après dépôt de plainte obligatoire" });
    }
  }

  if (formule === "tous_risques") {
    const montantDTA = options.includes("rachat_franchise") ? 0 : f.dta!;
    franchises.push({
      type: "Dommages tous accidents",
      montant: montantDTA,
      conditions: options.includes("rachat_franchise")
        ? "Franchise rachetée — aucune franchise applicable"
        : "Par sinistre responsable",
    });
  }

  return franchises;
};

const calculerNiveauRisque = (
  _primeAnnuelle: number,
  input: SimulateurAutoInput,
  bonusMalus: number
): "faible" | "modere" | "eleve" | "tres_eleve" => {
  let score = 0;

  // Bonus/malus
  if (bonusMalus >= 2.50) score += 3;
  else if (bonusMalus >= 1.50) score += 2;
  else if (bonusMalus >= 1.00) score += 1;

  // Âge
  if (input.agePrincipal < 23) score += 3;
  else if (input.agePrincipal < 25) score += 2;
  else if (input.agePrincipal >= 80) score += 2;

  // Kilométrage
  if (input.kmAnnuels > 30000) score += 2;
  else if (input.kmAnnuels > 20000) score += 1;

  // Zone
  if (input.zoneGeographique === "zone1") score += 2;

  // Usage
  if (input.usagePrincipal === "tous_deplacements") score += 2;
  else if (input.usagePrincipal === "tournee") score += 1;

  if (score <= 2) return "faible";
  if (score <= 4) return "modere";
  if (score <= 7) return "eleve";
  return "tres_eleve";
};

const genererAlertes = (
  input: SimulateurAutoInput,
  bonusMalus: number,
  _primeAnnuelle: number,
  niveauRisque: string
): AlerteSimulateur[] => {
  const alertes: AlerteSimulateur[] = [];

  // Alerte jeune conducteur
  if (input.agePrincipal < 25 && input.anneesPermis < 3) {
    alertes.push({
      niveau: "important",
      message: "Conducteur novice : surprime légalement encadrée (art. A. 335-9-2 CA)",
      conseil: "La conduite accompagnée (AAC) aurait permis de réduire ce coefficient. À mentionner au prospect.",
    });
  }

  // Alerte malus élevé
  if (bonusMalus >= 2.00) {
    alertes.push({
      niveau: "important",
      message: `Malus élevé (${bonusMalus}) : plusieurs sinistres responsables dans l'historique`,
      conseil: "Vérifier le relevé d'information sur les 5 dernières années. Possibilité de résiliation par l'assureur précédent.",
    });
  }

  // Recommandation formule
  if (input.formule === "tiers" && input.valeurVehicule > 8000) {
    alertes.push({
      niveau: "attention",
      message: `Véhicule estimé à ${input.valeurVehicule.toLocaleString("fr-FR")} € — formule Tiers insuffisante`,
      conseil: "En cas d'accident responsable, aucune indemnisation pour les dommages au véhicule. Recommander Tiers+ ou Tous Risques.",
    });
  }

  // Véhicule ancien et tous risques
  const anneeActuelle = new Date().getFullYear();
  const ageVehicule = anneeActuelle - input.anneeMiseEnCirculation;
  if (input.formule === "tous_risques" && ageVehicule > 8) {
    alertes.push({
      niveau: "info",
      message: `Véhicule de ${ageVehicule} ans en formule Tous Risques`,
      conseil: "Pour un véhicule > 8 ans, la valeur vénale est souvent inférieure au coût de la prime Tous Risques. Envisager un passage en Tiers+.",
    });
  }

  // Prime élevée
  if (niveauRisque === "tres_eleve") {
    alertes.push({
      niveau: "important",
      message: "Profil à risque très élevé — cotisation importante",
      conseil: "L'assuré peut saisir le Bureau Central de Tarification (BCT) si plusieurs assureurs refusent de le couvrir.",
    });
  }

  return alertes;
};

const identifierFacteursRisque = (
  input: SimulateurAutoInput,
  bonusMalus: number,
  coeffAge: number
): string[] => {
  const facteurs: string[] = [];

  if (bonusMalus > 1.00) facteurs.push(`Malus (×${bonusMalus})`);
  else if (bonusMalus < 0.80) facteurs.push(`Bonus maximum (×${bonusMalus})`);

  if (coeffAge > 1.20) facteurs.push(`Âge conducteur (${input.agePrincipal} ans)`);
  if (input.usagePrincipal === "tournee" || input.usagePrincipal === "tous_deplacements") {
    facteurs.push(`Usage professionnel intensif`);
  }
  if (input.kmAnnuels > 20000) facteurs.push(`Kilométrage élevé (${input.kmAnnuels.toLocaleString()} km/an)`);
  if (input.zoneGeographique === "zone1") facteurs.push(`Zone urbaine dense`);
  if (input.puissanceFiscale > 10) facteurs.push(`Véhicule puissant (${input.puissanceFiscale} CV)`);
  if (input.typeVehicule === "sportive") facteurs.push(`Véhicule sportif`);

  return facteurs;
};

// ============================================================
// UTILITAIRE : simulation d'évolution bonus/malus
// Pratique pour les exercices pédagogiques
// "Que se passe-t-il si l'assuré a 1 sinistre de plus ?"
// ============================================================
export const simulerEvolutionBonusMalus = (
  bonusMalusActuel: number,
  sinistresResponsables: number,
  anneesSansAccident: number
): number => {
  let bm = bonusMalusActuel;

  // Application des sinistres (×1.25 par sinistre)
  for (let i = 0; i < sinistresResponsables; i++) {
    bm = Math.min(bm * 1.25, BM_MAX);
  }

  // Application des années sans accident (×0.95 par an)
  for (let i = 0; i < anneesSansAccident; i++) {
    bm = Math.max(bm * 0.95, BM_MIN);
  }

  // Arrondi au centième
  return Math.round(bm * 100) / 100;
};
