// ============================================================
// HOOK — Recherche plaque moto + détection contrat auto
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState, useCallback, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../hooks/useAuth";
import {
  rechercherMotoParPlaque,
  rechercherSuggestionsMoto,
  normaliserPlaqueMoto,
  type MotoVehiculeDB,
  type MotoPlaqueDB,
} from "./tables/motos-db";

export type StatutRechercheMoto = "idle" | "en_saisie" | "trouve" | "introuvable";

export interface UseRecherchePlaqueMotoReturn {
  saisie: string;
  statut: StatutRechercheMoto;
  resultat: { moto: MotoVehiculeDB; plaque: string } | null;
  suggestions: MotoPlaqueDB[];
  setSaisie: (v: string) => void;
  selectionnerSuggestion: (plaque: string) => void;
  effacer: () => void;
  // Multi-détention
  assureId: string | null;
  assureNom: string | null;
  autoDetectee: boolean;
  numeroContratAuto: string | null;
}

export const useRecherchePlaqueMoto = (
  onMotoChargee?: (moto: MotoVehiculeDB) => void,
  onAutoDetectee?: (detected: boolean) => void
): UseRecherchePlaqueMotoReturn => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();

  const [saisie, setSaisieRaw]   = useState("");
  const [statut, setStatut]      = useState<StatutRechercheMoto>("idle");
  const [resultat, setResultat]  = useState<{ moto: MotoVehiculeDB; plaque: string } | null>(null);
  const [suggestions, setSuggestions] = useState<MotoPlaqueDB[]>([]);

  // Multi-détention
  const [assureId, setAssureId]   = useState<string | null>(null);
  const [assureNom, setAssureNom] = useState<string | null>(null);
  const [autoDetectee, setAutoDetectee] = useState(false);
  const [numeroContratAuto, setNumeroContratAuto] = useState<string | null>(null);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Détection automatique du contrat auto si assuré passé en URL
  useEffect(() => {
    const id = searchParams.get("assure");
    if (!id || !user) return;

    setAssureId(id);

    const detecter = async () => {
      // 1. Charger le nom de l'assuré
      const { data: assure } = await supabase
        .from("assures")
        .select("nom, prenom")
        .eq("id", id)
        .eq("user_id", user.id)
        .single();

      if (assure) setAssureNom(`${assure.prenom} ${assure.nom}`);

      // 2. Chercher un contrat auto actif
      const { data: contrats } = await supabase
        .from("contrats")
        .select("numero_contrat, type_contrat, statut")
        .eq("assure_id", id)
        .eq("user_id", user.id)
        .eq("statut", "actif")
        .eq("type_contrat", "auto");

      if (contrats && contrats.length > 0) {
        setAutoDetectee(true);
        setNumeroContratAuto(contrats[0].numero_contrat);
        onAutoDetectee?.(true);
      } else {
        setAutoDetectee(false);
        onAutoDetectee?.(false);
      }
    };

    detecter();
  }, [searchParams, user]);

  const setSaisie = useCallback((valeur: string) => {
    const formate = normaliserPlaqueMoto(valeur).slice(0, 9);
    setSaisieRaw(formate);
    setResultat(null);

    if (formate.length === 0) {
      setStatut("idle");
      setSuggestions([]);
      return;
    }

    setStatut("en_saisie");

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const exact = rechercherMotoParPlaque(formate);
      if (exact) {
        setStatut("trouve");
        setResultat(exact);
        setSuggestions([]);
        onMotoChargee?.(exact.moto);
        return;
      }
      const suggs = rechercherSuggestionsMoto(formate);
      setSuggestions(suggs);
      if (formate.length >= 9) setStatut("introuvable");
    }, 200);
  }, [onMotoChargee]);

  const selectionnerSuggestion = useCallback((plaque: string) => {
    setSaisieRaw(plaque);
    setSuggestions([]);
    const exact = rechercherMotoParPlaque(plaque);
    if (exact) {
      setStatut("trouve");
      setResultat(exact);
      onMotoChargee?.(exact.moto);
    }
  }, [onMotoChargee]);

  const effacer = useCallback(() => {
    setSaisieRaw("");
    setStatut("idle");
    setResultat(null);
    setSuggestions([]);
  }, []);

  return {
    saisie, statut, resultat, suggestions,
    setSaisie, selectionnerSuggestion, effacer,
    assureId, assureNom, autoDetectee, numeroContratAuto,
  };
};
