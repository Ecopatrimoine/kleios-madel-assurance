// ============================================================
// MOTEUR DE CALCUL — SIMULATEUR MRH
// Kleios Madel Assurance · BTS Assurance
// ============================================================

import type {
  SimulateurMRHInput,
  ResultatSimulateurMRH,
  DetailCalculMRH,
  AlerteMRH,
} from "./types";

import {
  PRIME_BASE_MRH,
  getCoefficientSurface,
  getCoefficientPieces,
  COEFFICIENTS_TYPE_LOGEMENT,
  COEFFICIENTS_ZONE_MRH,
  COEFFICIENTS_OCCUPATION,
  COEFFICIENTS_RESIDENCE,
  COEFFICIENT_ALARME,
  getCoefficientMobilier,
  calculerSupplementObjetsValeur,
  TARIF_OPTIONS_MRH,
  FISCALITE_MRH,
  FRANCHISE_STANDARD_MRH,
  GARANTIES_MRH_SOCLE,
  GARANTIES_OPTIONS_MRH,
  calculerPlafonds,
} from "./tables/coefficients";

// ── Paramètres pédagogiques ───────────────────────────────────
export const PARAMS_MRH = {
  marge_commerciale: 1.12,
};

const arr = (n: number, d = 2) => Math.round(n * 10 ** d) / 10 ** d;

// ── Calcul principal ──────────────────────────────────────────
export const calculerPrimeMRH = (input: SimulateurMRHInput): ResultatSimulateurMRH => {

  // Coefficients
  const cSurface   = getCoefficientSurface(input.surface);
  const cPieces    = getCoefficientPieces(input.nbPieces);
  const cType      = COEFFICIENTS_TYPE_LOGEMENT[input.typeLogement]    ?? 1.00;
  const cZone      = COEFFICIENTS_ZONE_MRH[input.zoneGeographique]     ?? 1.00;
  const cOccup     = COEFFICIENTS_OCCUPATION[input.typeOccupation]     ?? 1.00;
  const cResidence = COEFFICIENTS_RESIDENCE[input.typeResidence]       ?? 1.00;
  const cAlarme    = input.alarmeConnectee ? COEFFICIENT_ALARME : 1.00;
  const cMobilier  = getCoefficientMobilier(input.valeurMobilier);
  const cInondation = (input.zoneInondable && input.etage < 2) ? 1.20 : 1.00;

  // Supplément objets de valeur
  const suppObjetsValeur = calculerSupplementObjetsValeur(input.valeurObjetsValeur);

  // Supplément bâtiment (propriétaire uniquement)
  const suppBatiment = input.typeOccupation === "proprietaire" && input.valeurBatiment > 0
    ? arr(input.valeurBatiment * 0.0008) // ~0.08% de la valeur du bâtiment
    : 0;

  // Options
  // Note : reequipement_5ans et reequipement_illimite sont mutuellement exclusifs
  // On prend le plus élevé si les deux sont cochés par erreur
  const optionsFiltrees = input.options.filter(o => {
    if (o === "reequipement_5ans" && input.options.includes("reequipement_illimite")) return false;
    return true;
  });

  const montantOptions = optionsFiltrees.reduce((total: number, opt: string) =>
    total + (TARIF_OPTIONS_MRH[opt] ?? 0), 0
  );

  // Prime nette
  const primeNette = arr(
    PRIME_BASE_MRH
    * cSurface * cPieces * cType * cZone * cOccup * cResidence * cAlarme * cMobilier * cInondation
    * PARAMS_MRH.marge_commerciale
    + suppObjetsValeur
    + suppBatiment
    + montantOptions
  );

  // Taxes
  const montantTCA           = arr(primeNette * FISCALITE_MRH.taux_tca);
  const taxesEtContributions = arr(montantTCA + FISCALITE_MRH.contribution_attentat);
  const primeTTC             = arr(primeNette + taxesEtContributions);
  const primeMensuelle       = arr(primeTTC / 12);

  // Détail
  const detail: DetailCalculMRH = {
    primeBaseReference:      PRIME_BASE_MRH,
    coefficientSurface:      arr(cSurface),
    coefficientPieces:       arr(cPieces),
    coefficientTypeLogement: cType,
    coefficientZone:         cZone,
    coefficientOccupation:   cOccup,
    coefficientResidence:    cResidence,
    coefficientAlarme:       cAlarme,
    coefficientInondation:   cInondation,
    montantOptions:          arr(montantOptions + suppObjetsValeur + suppBatiment),
    primeNette:              arr(primeNette),
    tauxTCA:                 FISCALITE_MRH.taux_tca,
    contributionAttentat:    FISCALITE_MRH.contribution_attentat,
    primeTTC:                arr(primeTTC),
  };

  // Garanties
  const garanties = [
    ...GARANTIES_MRH_SOCLE,
    ...GARANTIES_OPTIONS_MRH
      .filter(o => input.options.includes(o.id))
      .map(o => ({ nom: o.nom, incluse: true, description: o.description, franchise: 150 })),
    ...GARANTIES_OPTIONS_MRH
      .filter(o => !input.options.includes(o.id))
      .map(o => ({ nom: o.nom, incluse: false, description: o.description })),
  ];

  // Franchises
  const franchises = [
    { type: "Sinistres courants (incendie, DDE, vol, bris de glace)", montant: 150, conditions: "Par sinistre" },
    { type: "Événements climatiques", montant: 150, conditions: "Par sinistre" },
    { type: "Catastrophes naturelles", montant: 380, conditions: "Franchise légale obligatoire" },
    { type: "Responsabilité Civile", montant: 0, conditions: "Aucune franchise sur la RC" },
  ];

  // Plafonds
  const plafonds = calculerPlafonds(
    input.valeurMobilier,
    input.valeurObjetsValeur,
    input.valeurBatiment,
    input.typeOccupation
  );

  // Niveau de risque
  const niveauRisque = calculerNiveauRisqueMRH(input);

  // Alertes
  const alertes = genererAlertesMRH(input, niveauRisque);

  // Facteurs
  const facteurs = identifierFacteursMRH(input, cZone, cResidence);

  return {
    primeMensuelle,
    primeAnnuelle:          arr(primeTTC),
    primeHT:                arr(primeNette),
    taxesEtContributions,
    franchise:              FRANCHISE_STANDARD_MRH,
    detail,
    garanties,
    franchises,
    alertes,
    niveauRisque,
    facteursPrincipauxRisque: facteurs,
    plafonds,
  };
};

// ── Fonctions internes ────────────────────────────────────────

const calculerNiveauRisqueMRH = (
  input: SimulateurMRHInput
): "faible" | "modere" | "eleve" | "tres_eleve" => {
  let score = 0;
  if (input.zoneGeographique === "zone1") score += 3;
  else if (input.zoneGeographique === "zone2") score += 1;
  if (input.typeResidence === "secondaire") score += 3;
  if (input.valeurMobilier > 50000) score += 2;
  else if (input.valeurMobilier > 30000) score += 1;
  if (input.valeurObjetsValeur > 10000) score += 2;
  if (input.typeLogement === "maison" || input.typeLogement === "villa") score += 1;
  if (!input.alarmeConnectee && input.zoneGeographique === "zone1") score += 1;
  if (score <= 1) return "faible";
  if (score <= 3) return "modere";
  if (score <= 6) return "eleve";
  return "tres_eleve";
};

const genererAlertesMRH = (
  input: SimulateurMRHInput,
  _niveauRisque: string
): AlerteMRH[] => {
  const alertes: AlerteMRH[] = [];

  if (input.zoneInondable) {
    if (input.etage < 2) {
      alertes.push({
        niveau: "important",
        message: "🌊 Zone inondable (PPRI) — majoration de 20% appliquée (RDC ou 1er étage)",
        conseil: "L'assuré doit déclarer ce risque. Certains assureurs imposent des exclusions ou franchises spécifiques cat nat. Consulter le PPRI de la commune sur georisques.gouv.fr.",
      });
    } else {
      alertes.push({
        niveau: "info",
        message: "🌊 Zone inondable (PPRI) détectée — aucune majoration (étage ≥ 2)",
        conseil: "Bien situé en zone PPRI mais à un étage protégé du risque direct. La déclaration reste obligatoire.",
      });
    }
  }

  if (input.typeResidence === "secondaire") {    alertes.push({
      niveau: "important",
      message: "Résidence secondaire : obligation de déclarer les périodes d'inoccupation supérieures à 60 jours consécutifs",
      conseil: "Certaines garanties vol sont suspendues en cas d'inoccupation prolongée non déclarée.",
    });
  }

  if (input.valeurObjetsValeur > 0 && !input.options.includes("reequipement_5ans") && !input.options.includes("reequipement_illimite")) {
    alertes.push({
      niveau: "attention",
      message: `Objets de valeur déclarés (${input.valeurObjetsValeur.toLocaleString("fr-FR")} €) sans rééquipement à neuf`,
      conseil: "Sans option rééquipement, la vétusté sera déduite. Une montre de 5 000 € peut être remboursée 2 000 € après vétusté.",
    });
  }

  if (input.valeurMobilier < input.surface * 200) {
    alertes.push({
      niveau: "attention",
      message: "Valeur mobilier déclarée potentiellement sous-estimée",
      conseil: `Pour ${input.surface} m², la valeur recommandée est généralement ≥ ${(input.surface * 200).toLocaleString("fr-FR")} € (200 €/m² en moyenne). La sous-déclaration entraîne une règle proportionnelle.`,
    });
  }

  if (input.zoneGeographique === "zone1" && !input.alarmeConnectee) {
    alertes.push({
      niveau: "attention",
      message: "Zone métropolitaine sans alarme — risque vol élevé",
      conseil: "Une alarme certifiée NF permet une réduction de 10% et améliore la couverture vol.",
    });
  }

  if (input.typeOccupation === "proprietaire" && input.valeurBatiment === 0) {
    alertes.push({
      niveau: "important",
      message: "Propriétaire sans valeur bâtiment déclarée",
      conseil: "La valeur de reconstruction doit être déclarée pour garantir la couverture du bâtiment. Un expert peut l'estimer.",
    });
  }

  if (input.options.includes("reequipement_5ans") && input.options.includes("reequipement_illimite")) {
    alertes.push({
      niveau: "info",
      message: "Deux options rééquipement sélectionnées — seule l'option Illimitée sera appliquée",
      conseil: "Décochez l'option 5 ans pour éviter de payer une option qui n'est pas utilisée.",
    });
  }

  return alertes;
};

const identifierFacteursMRH = (
  input: SimulateurMRHInput,
  cZone: number,
  cResidence: number
): string[] => {
  const f: string[] = [];
  if (cZone > 1.20) f.push("Zone urbaine dense (vol élevé)");
  if (cResidence > 1) f.push("Résidence secondaire (+35%)");
  if (input.valeurMobilier > 40000) f.push(`Valeur mobilier élevée (${input.valeurMobilier.toLocaleString("fr-FR")} €)`);
  if (input.valeurObjetsValeur > 5000) f.push(`Objets de valeur (${input.valeurObjetsValeur.toLocaleString("fr-FR")} €)`);
  if (input.typeLogement === "villa") f.push("Villa — risques multiples");
  if (input.alarmeConnectee) f.push("Alarme certifiée → −10%");
  return f;
};
