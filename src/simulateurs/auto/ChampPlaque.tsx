// ============================================================
// COMPOSANT — Champ de recherche par plaque d'immatriculation
// Kleios Assurance BTS
// ============================================================
import { useRef, useEffect } from "react";
import type { VehiculeDB } from "./tables/vehicules-db";
import type { UseRechercheplaqueReturn } from "./useRecherchePlaque";

interface ChampPlaqueProps {
  recherche: UseRechercheplaqueReturn;
}

const ICONE_CARBURANT: Record<string, string> = {
  essence:    "⛽",
  diesel:     "🛢️",
  hybride:    "🔋",
  electrique: "⚡",
  gpl:        "🟢",
};

const LABEL_CARBURANT: Record<string, string> = {
  essence:    "Essence",
  diesel:     "Diesel",
  hybride:    "Hybride",
  electrique: "Électrique",
  gpl:        "GPL / GNV",
};

const LABEL_TYPE: Record<string, string> = {
  citadine:   "Citadine",
  berline:    "Berline",
  SUV:        "SUV / Crossover",
  utilitaire: "Utilitaire",
  sportive:   "Sportive",
  ancienne:   "Véhicule de collection",
};

export default function ChampPlaque({ recherche }: ChampPlaqueProps) {
  const { saisie, statut, resultat, suggestions, setSaisie, selectionnerSuggestion, effacer } = recherche;
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Fermer les suggestions si clic extérieur
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
        // ne pas fermer, géré autrement
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const couleurStatut = {
    idle:        { border: "#D4DCE9", bg: "#FAFBFC" },
    en_saisie:   { border: "#8DAED4", bg: "#F5F8FC" },
    trouve:      { border: "#3B6D11", bg: "#F0F8E8" },
    introuvable: { border: "#A32D2D", bg: "#FEF5F5" },
  }[statut];

  return (
    <div style={{ position: "relative" }}>

      {/* Champ de saisie */}
      <div style={{
        display: "flex",
        alignItems: "center",
        border: `2px solid ${couleurStatut.border}`,
        borderRadius: 12,
        background: couleurStatut.bg,
        padding: "4px 8px 4px 12px",
        transition: "all .2s",
        gap: 8,
      }}>
        {/* Plaque FR visuelle */}
        <div style={{
          display: "flex",
          alignItems: "center",
          background: "#003189",
          borderRadius: 6,
          overflow: "hidden",
          flexShrink: 0,
          height: 32,
        }}>
          <div style={{
            background: "#003189",
            color: "#fff",
            fontSize: 9,
            fontWeight: 700,
            padding: "2px 4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            height: "100%",
            justifyContent: "center",
          }}>
            <span style={{ fontSize: 7 }}>🇪🇺</span>
            <span>F</span>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={saisie}
            onChange={e => setSaisie(e.target.value)}
            placeholder="AB-123-CD"
            maxLength={9}
            style={{
              border: "none",
              outline: "none",
              background: "#fff",
              fontFamily: "'DIN 1451 Engschrift', 'Arial Narrow', monospace",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "0.1em",
              color: "#1B3A6B",
              padding: "0 10px",
              width: 110,
              height: 32,
            }}
          />
        </div>

        {/* Statut visuel */}
        {statut === "trouve" && (
          <span style={{ color: "#3B6D11", fontSize: 18 }}>✅</span>
        )}
        {statut === "introuvable" && (
          <span style={{ color: "#A32D2D", fontSize: 18 }}>❌</span>
        )}
        {statut === "en_saisie" && (
          <span style={{ color: "#8DAED4", fontSize: 13 }}>...</span>
        )}

        {/* Bouton effacer */}
        {saisie.length > 0 && (
          <button
            onClick={effacer}
            style={{
              marginLeft: "auto",
              border: "none",
              background: "none",
              color: "#8DAED4",
              cursor: "pointer",
              fontSize: 16,
              padding: "2px 6px",
              borderRadius: 6,
            }}
          >
            ×
          </button>
        )}
      </div>

      {/* Message d'erreur */}
      {statut === "introuvable" && (
        <div style={{
          marginTop: 6,
          fontSize: 11,
          color: "#A32D2D",
          padding: "6px 10px",
          background: "#FCEBEB",
          borderRadius: 8,
        }}>
          Plaque <strong>{saisie}</strong> introuvable dans la base pédagogique.
          Vérifiez le format (ex: <code>AB-123-CD</code>) ou consultez la liste fournie par votre formateur.
        </div>
      )}

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && statut === "en_saisie" && (
        <div
          ref={suggestionsRef}
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "#fff",
            border: "1px solid #D4DCE9",
            borderRadius: 10,
            boxShadow: "0 4px 16px rgba(27,58,107,0.12)",
            zIndex: 100,
            overflow: "hidden",
          }}
        >
          {suggestions.map((s, i) => (
            <button
              key={s.plaque}
              onClick={() => selectionnerSuggestion(s.plaque)}
              style={{
                width: "100%",
                border: "none",
                borderBottom: i < suggestions.length - 1 ? "1px solid #F0F3F8" : "none",
                background: "transparent",
                padding: "10px 14px",
                textAlign: "left",
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "monospace",
                fontWeight: 600,
                color: "#1B3A6B",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#F5F8FC"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {s.plaque}
            </button>
          ))}
        </div>
      )}

      {/* Carte véhicule trouvé */}
      {statut === "trouve" && resultat && (
        <CarteVehicule vehicule={resultat.vehicule} plaque={resultat.plaqueInfo.plaque} />
      )}
    </div>
  );
}

// ── Carte véhicule ──────────────────────────────────────────

function CarteVehicule({ vehicule, plaque }: { vehicule: VehiculeDB; plaque: string }) {
  const ageVehicule = new Date().getFullYear() - vehicule.annee;

  return (
    <div style={{
      marginTop: 10,
      border: "1px solid #C5DAB0",
      borderRadius: 12,
      background: "#F4FAF0",
      overflow: "hidden",
    }}>
      {/* En-tête */}
      <div style={{
        background: "#1B3A6B",
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>
            {vehicule.marque} {vehicule.modele}
          </span>
          <span style={{ color: "#8DAED4", fontSize: 12, marginLeft: 8 }}>
            {vehicule.version}
          </span>
        </div>
        <span style={{
          background: "#fff",
          color: "#1B3A6B",
          fontSize: 10,
          fontWeight: 700,
          padding: "2px 8px",
          borderRadius: 6,
          fontFamily: "monospace",
          letterSpacing: "0.05em",
        }}>
          {plaque}
        </span>
      </div>

      {/* Données techniques */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        background: "#D4DCE9",
      }}>
        {[
          ["Année", `${vehicule.annee} (${ageVehicule} ans)`],
          ["CV fiscaux", `${vehicule.cvFiscaux} CV`],
          ["Puissance", `${vehicule.cvDIN} ch / ${vehicule.puissanceKw} kW`],
          ["Carburant", `${ICONE_CARBURANT[vehicule.carburant]} ${LABEL_CARBURANT[vehicule.carburant]}`],
          ["Type", LABEL_TYPE[vehicule.typeVehicule]],
          ["Valeur estimée", `${vehicule.valeurEstimee.toLocaleString("fr-FR")} €`],
        ].map(([label, val]) => (
          <div key={label} style={{ background: "#F4FAF0", padding: "8px 12px" }}>
            <div style={{ fontSize: 9, fontWeight: 600, color: "#4A6080", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>
              {label}
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#1B3A6B" }}>
              {val}
            </div>
          </div>
        ))}
      </div>

      {/* Valeur neuf si dispo */}
      {vehicule.valeurNeuf && (
        <div style={{
          padding: "7px 14px",
          fontSize: 11,
          color: "#4A6080",
          borderTop: "1px solid #D4DCE9",
          display: "flex",
          gap: 16,
        }}>
          <span>Valeur d'origine neuf : <strong style={{ color: "#1B3A6B" }}>{vehicule.valeurNeuf.toLocaleString("fr-FR")} €</strong></span>
          <span style={{ color: "#8DAED4" }}>
            Décote : <strong style={{ color: "#633806" }}>
              {Math.round((1 - vehicule.valeurEstimee / vehicule.valeurNeuf) * 100)}%
            </strong>
          </span>
        </div>
      )}

      {/* Note pédagogique */}
      {vehicule.commentairePedagogique && (
        <div style={{
          padding: "7px 14px",
          fontSize: 11,
          color: "#185FA5",
          background: "#E6F1FB",
          borderTop: "1px solid #D4DCE9",
        }}>
          📚 <em>{vehicule.commentairePedagogique}</em>
        </div>
      )}
    </div>
  );
}
