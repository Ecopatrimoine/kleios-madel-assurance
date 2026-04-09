// ============================================================
// HOOK — Recherche plaque d'immatriculation
// Kleios Assurance BTS
// ============================================================
import { useState, useCallback, useRef } from "react";
import {
  rechercherParPlaque,
  rechercherSuggestions,
  normaliserPlaque,
  type VehiculeDB,
  type PlaqueDB,
} from "./tables/vehicules-db";

export type StatutRecherche =
  | "idle"
  | "en_saisie"
  | "trouve"
  | "introuvable";

export interface ResultatRecherchePlaque {
  vehicule: VehiculeDB;
  plaqueInfo: PlaqueDB;
}

export interface UseRechercheplaqueReturn {
  saisie: string;
  statut: StatutRecherche;
  resultat: ResultatRecherchePlaque | null;
  suggestions: PlaqueDB[];
  setSaisie: (v: string) => void;
  selectionnerSuggestion: (plaque: string) => void;
  effacer: () => void;
}

export const useRecherchePlaque = (
  onVehiculeCharge?: (vehicule: VehiculeDB) => void
): UseRechercheplaqueReturn => {
  const [saisie, setSaisieRaw] = useState("");
  const [statut, setStatut] = useState<StatutRecherche>("idle");
  const [resultat, setResultat] = useState<ResultatRecherchePlaque | null>(null);
  const [suggestions, setSuggestions] = useState<PlaqueDB[]>([]);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setSaisie = useCallback((valeur: string) => {
    // Formatage automatique via normaliserPlaque
    // "AB123CD" → "AB-123-CD" en temps réel pendant la frappe
    const formate = normaliserPlaque(valeur).slice(0, 9);

    setSaisieRaw(formate);
    setResultat(null);

    if (formate.length === 0) {
      setStatut("idle");
      setSuggestions([]);
      return;
    }

    setStatut("en_saisie");

    // Debounce pour les suggestions
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      // Recherche exacte d'abord
      const exact = rechercherParPlaque(formate);
      if (exact) {
        setStatut("trouve");
        setResultat(exact);
        setSuggestions([]);
        onVehiculeCharge?.(exact.vehicule);
        return;
      }
      // Sinon suggestions
      const sugg = rechercherSuggestions(formate);
      setSuggestions(sugg);
      if (formate.length >= 9) {
        setStatut("introuvable");
      }
    }, 200);
  }, [onVehiculeCharge]);

  const selectionnerSuggestion = useCallback((plaque: string) => {
    setSaisieRaw(plaque);
    setSuggestions([]);
    const exact = rechercherParPlaque(plaque);
    if (exact) {
      setStatut("trouve");
      setResultat(exact);
      onVehiculeCharge?.(exact.vehicule);
    }
  }, [onVehiculeCharge]);

  const effacer = useCallback(() => {
    setSaisieRaw("");
    setStatut("idle");
    setResultat(null);
    setSuggestions([]);
  }, []);

  return { saisie, statut, resultat, suggestions, setSaisie, selectionnerSuggestion, effacer };
};

// ============================================================
// Utilitaire : convertir VehiculeDB → champs SimulateurAutoInput
// ============================================================
import type { SimulateurAutoInput, TypeVehicule } from "./types";

export const vehiculeVersInput = (
  vehicule: VehiculeDB,
  inputActuel: SimulateurAutoInput
): Partial<SimulateurAutoInput> => {
  return {
    typeVehicule:          vehicule.typeVehicule as TypeVehicule,
    puissanceFiscale:      vehicule.cvFiscaux,
    valeurVehicule:        vehicule.valeurEstimee,
    anneeMiseEnCirculation: vehicule.annee,
    // On garde les champs conducteur et usage intacts
    agePrincipal:          inputActuel.agePrincipal,
    anneesPermis:          inputActuel.anneesPermis,
    bonusMalus:            inputActuel.bonusMalus,
    usagePrincipal:        inputActuel.usagePrincipal,
    kmAnnuels:             inputActuel.kmAnnuels,
    zoneGeographique:      inputActuel.zoneGeographique,
    formule:               inputActuel.formule,
    options:               inputActuel.options,
  };
};
