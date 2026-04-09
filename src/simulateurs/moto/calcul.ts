// ============================================================
// MOTEUR DE CALCUL — SIMULATEUR MOTO
// Kleios Madel Assurance · BTS Assurance
// ============================================================

import type {
  SimulateurMotoInput,
  ResultatSimulateurMoto,
  DetailCalculMoto,
  AlerteMoto,
} from "./types";

import {
  PRIME_BASE_MOTO,
  getCoefficientAgeMoto,
  COEFFICIENTS_PERMIS,
  COEFFICIENTS_USAGE_MOTO,
  getCoefficientKmMoto,
  COEFFICIENTS_ZONE_MOTO,
  getCoefficientCylindree,
  COEFFICIENTS_FORMULE_MOTO,
  COEFFICIENT_GARAGE_FERME,
  TARIF_OPTIONS_MOTO,
  FRANCHISES_MOTO,
  GARANTIES_MOTO,
  FISCALITE_MOTO,
} from "./tables/coefficients";

// ── Paramètres pédagogiques ───────────────────────────────────
export const PARAMS_MOTO = {
  marge_commerciale: 1.10, // marge légèrement plus élevée qu'auto (marché moins concurrentiel)
  reduction_multi_detention: 0.70, // -30% si contrat auto déjà souscrit
};

const arr = (n: number, d = 2) => Math.round(n * 10 ** d) / 10 ** d;

// ── Calcul principal ──────────────────────────────────────────
export const calculerPrimeMoto = (input: SimulateurMotoInput): ResultatSimulateurMoto => {

  const bm = Math.min(Math.max(input.bonusMalus, 0.50), 3.50);

  // Base
  const primeBase = PRIME_BASE_MOTO[input.typeMoto] ?? 420;

  // Coefficients
  const cAge      = getCoefficientAgeMoto(input.agePrincipal, input.anneesPermis);
  const cPermis   = COEFFICIENTS_PERMIS[input.categoriePermis] ?? 1.00;
  const cUsage    = COEFFICIENTS_USAGE_MOTO[input.usagePrincipal] ?? 1.00;
  const cKm       = getCoefficientKmMoto(input.kmAnnuels);
  const cZone     = COEFFICIENTS_ZONE_MOTO[input.zoneGeographique] ?? 1.00;
  const cCyl      = getCoefficientCylindree(input.cylindree);
  const cFormule  = COEFFICIENTS_FORMULE_MOTO[input.formule] ?? 1.00;
  const cGarage   = input.garageeFermee ? COEFFICIENT_GARAGE_FERME : 1.00;
  const cMulti = input.autoAssureeMadel ? PARAMS_MOTO.reduction_multi_detention : 1.00;

  // Options
  const montantOptions = input.options.reduce((total: number, opt: string) =>
    total + (TARIF_OPTIONS_MOTO[opt] ?? 0), 0
  );

  // Prime nette
const primeNette = arr(
  primeBase * bm * cAge * cPermis * cUsage * cKm * cZone * cCyl
  * cFormule * cGarage * cMulti
  * PARAMS_MOTO.marge_commerciale
  + montantOptions
);

  // Taxes
  const montantTCA           = arr(primeNette * FISCALITE_MOTO.taux_tca);
  const taxesEtContributions = arr(montantTCA + FISCALITE_MOTO.contribution_attentat + FISCALITE_MOTO.fgao);
  const primeTTC             = arr(primeNette + taxesEtContributions);
  const primeMensuelle       = arr(primeTTC / 12);

  // Détail
  const detail: DetailCalculMoto = {
    primeBaseReference:      arr(primeBase),
    coefficientBonusMalus:   bm,
    coefficientAge:          cAge,
    coefficientPermis:       cPermis,
    coefficientUsage:        cUsage,
    coefficientKm:           cKm,
    coefficientZone:         cZone,
    coefficientCylindree:    arr(cCyl),
    coefficientFormule:      cFormule,
    coefficientGarage:       cGarage,
    coefficientMultiDetention: cMulti,
    montantOptions:          arr(montantOptions),
    primeNette:              arr(primeNette),
    tauxTCA:                 FISCALITE_MOTO.taux_tca,
    contributionAttentat:    FISCALITE_MOTO.contribution_attentat,
    primeTTC:                arr(primeTTC),
  };

  // Garanties
  const garantiesBase = (GARANTIES_MOTO as Record<string, typeof GARANTIES_MOTO.tiers>)[input.formule] ?? [];
  const garanties = [...garantiesBase];
  if (input.options.includes("equipement_conducteur")) {
    garanties.push({ nom: "Équipement conducteur", incluse: true, description: "Casque, blouson, gants, bottes — jusqu'à 1 500 €.", franchise: 0 });
  }
  if (input.options.includes("accessoires_moto")) {
    garanties.push({ nom: "Accessoires moto", incluse: true, description: "Top-case, sacoches, GPS, antivol — jusqu'à 800 €.", franchise: 0 });
  }

  // Franchises
const fBase = (FRANCHISES_MOTO as unknown as Record<string, { rc: number; bris_glace: number | null; vol: number | null; dta: number | null }>)[input.formule];
  const franchises = [];
  if (fBase.vol !== null) {
    franchises.push({
      type: "Vol et incendie",
      montant: fBase.vol!,
      conditions: "Après dépôt de plainte obligatoire" + (input.garageeFermee ? " — réduite car garage fermé" : ""),
    });
  }
  if (fBase.bris_glace !== null) {
    franchises.push({ type: "Bris de glace / optiques", montant: fBase.bris_glace!, conditions: "Par sinistre" });
  }
  if (input.formule === "tous_risques") {
    const dtaMontant = input.options.includes("rachat_franchise") ? 0 : fBase.dta!;
    franchises.push({
      type: "Dommages tous accidents",
      montant: dtaMontant,
      conditions: input.options.includes("rachat_franchise") ? "Franchise rachetée" : "Par sinistre responsable",
    });
  }

  // Niveau de risque
  const niveauRisque = calculerNiveauRisqueMoto(input, bm, cAge);

  // Alertes
  const alertes = genererAlertesMoto(input, bm, cAge, niveauRisque);

  // Facteurs
  const facteurs = identifierFacteursMoto(input, bm, cAge);

  return {
    primeMensuelle,
    primeAnnuelle:          arr(primeTTC),
    primeHT:                arr(primeNette),
    taxesEtContributions,
    detail,
    garanties,
    franchises,
    alertes,
    niveauRisque,
    facteursPrincipauxRisque: facteurs,
  };
};

// ── Fonctions internes ────────────────────────────────────────

const calculerNiveauRisqueMoto = (
  input: SimulateurMotoInput,
  bm: number,
  _cAge: number
): "faible" | "modere" | "eleve" | "tres_eleve" => {
  let score = 0;
  if (bm >= 2.50) score += 3; else if (bm >= 1.50) score += 2; else if (bm >= 1.00) score += 1;
  if (input.agePrincipal < 22) score += 4;
  else if (input.agePrincipal < 25) score += 3;
  else if (input.agePrincipal < 28) score += 1;
  if (input.cylindree > 1000) score += 3;
  else if (input.cylindree > 600) score += 2;
  else if (input.cylindree > 400) score += 1;
  if (input.typeMoto === "moto_sportive") score += 3;
  if (input.usagePrincipal === "piste") score += 4;
  if (input.zoneGeographique === "zone1") score += 2;
  if (!input.garageeFermee && input.zoneGeographique !== "zone4") score += 1;
  if (score <= 2) return "faible";
  if (score <= 5) return "modere";
  if (score <= 9) return "eleve";
  return "tres_eleve";
};

const genererAlertesMoto = (
  input: SimulateurMotoInput,
  bm: number,
  _cAge: number,
  niveauRisque: string
): AlerteMoto[] => {
  const alertes: AlerteMoto[] = [];

  if (input.agePrincipal < 25 && input.anneesPermis < 3) {
    alertes.push({
      niveau: "important",
      message: "Jeune motard : sinistralité 3× supérieure à la moyenne nationale (ONISR 2023)",
      conseil: "Fortement recommandé : stage de conduite moto et équipement homologué complet.",
    });
  }

  if (input.typeMoto === "moto_sportive" && input.agePrincipal < 30) {
    alertes.push({
      niveau: "important",
      message: "Moto sportive + conducteur jeune : profil à risque très élevé",
      conseil: "Certains assureurs refusent ce profil. La formule Tiers+ minimum est recommandée.",
    });
  }

  if (input.usagePrincipal === "piste") {
    alertes.push({
      niveau: "important",
      message: "Usage circuit : couverture très limitée — la plupart des contrats excluent les dommages en piste",
      conseil: "Un contrat spécifique assurance circuit est nécessaire pour les journées piste.",
    });
  }

  if (bm >= 2.00) {
    alertes.push({
      niveau: "important",
      message: `CRM élevé (${bm}) : plusieurs sinistres responsables dans l'historique`,
      conseil: "Vérifier le relevé d'information. Ce profil peut entraîner un refus d'assurance.",
    });
  }

  if (!input.garageeFermee && input.zoneGeographique === "zone1") {
    alertes.push({
      niveau: "attention",
      message: "Moto en zone métropolitaine sans garage fermé : risque vol très élevé",
      conseil: "Recommander un antivol homologué + alarme + chaîne. Certains assureurs l'exigent.",
    });
  }

  if (input.formule === "tiers" && input.valeurMoto > 5000) {
    alertes.push({
      niveau: "attention",
      message: `Moto à ${input.valeurMoto.toLocaleString("fr-FR")} € — formule Tiers insuffisante`,
      conseil: "En cas de vol ou d'accident responsable, aucune indemnisation pour la moto.",
    });
  }

  if (niveauRisque === "tres_eleve") {
    alertes.push({
      niveau: "important",
      message: "Profil très élevé — Bureau Central de Tarification (BCT) à anticiper",
      conseil: "Si plusieurs assureurs refusent, le BCT oblige un assureur à couvrir l'assuré.",
    });
  }

  return alertes;
};

const identifierFacteursMoto = (
  input: SimulateurMotoInput,
  bm: number,
  cAge: number
): string[] => {
  const f: string[] = [];
  if (bm > 1.00) f.push(`CRM (×${bm})`);
  else if (bm < 0.80) f.push(`Excellent CRM (×${bm})`);
  if (cAge > 1.50) f.push(`Jeune conducteur (${input.agePrincipal} ans)`);
  if (input.cylindree > 750) f.push(`Grosse cylindrée (${input.cylindree} cc)`);
  if (input.typeMoto === "moto_sportive") f.push("Moto sportive");
  if (input.zoneGeographique === "zone1") f.push("Zone métropolitaine (vol)");
  if (!input.garageeFermee) f.push("Pas de garage fermé");
  if (input.usagePrincipal === "piste") f.push("Usage circuit");
  if (input.usagePrincipal === "touring") f.push("Touring intensif");
  return f;
};

// ── Utilitaire pédagogique : évolution BM ────────────────────
export const simulerEvolutionBMMoto = (
  bmActuel: number,
  sinistresResponsables: number,
  anneesSansAccident: number
): number => {
  let bm = bmActuel;
  for (let i = 0; i < sinistresResponsables; i++) bm = Math.min(bm * 1.25, 3.50);
  for (let i = 0; i < anneesSansAccident; i++) bm = Math.max(bm * 0.95, 0.50);
  return Math.round(bm * 100) / 100;
};
