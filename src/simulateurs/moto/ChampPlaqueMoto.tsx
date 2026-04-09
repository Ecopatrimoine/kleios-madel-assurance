// ============================================================
// COMPOSANT — Champ plaque moto avec carte véhicule
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import type { UseRecherchePlaqueMotoReturn } from "./useRecherchePlaqueMoto";
import type { MotoVehiculeDB } from "./tables/motos-db";

interface ChampPlaqueMotoProps {
  recherche: UseRecherchePlaqueMotoReturn;
}

const CARB_LABEL: Record<string, string> = {
  essence: "⛽ Essence", electrique: "⚡ Électrique",
};

const TYPE_LABEL: Record<string, string> = {
  scooter_50: "Scooter 50cc", scooter_125: "Scooter 125cc",
  moto_125: "Moto 125cc", moto_moyenne: "Moto 126–500cc",
  moto_500: "Moto > 500cc (A2)", moto_grosse: "Grosse cylindrée",
  moto_sportive: "Sportive", moto_custom: "Custom / Cruiser",
  moto_trail: "Trail / Adventure", side_car: "Side-car",
};

export default function ChampPlaqueMoto({ recherche }: ChampPlaqueMotoProps) {
  const { saisie, statut, resultat, suggestions, setSaisie, selectionnerSuggestion, effacer } = recherche;

  const borderColor = {
    idle: "var(--madel-border)", en_saisie: "var(--madel-blue)",
    trouve: "#2E7D32", introuvable: "var(--madel-rose)",
  }[statut];

  const bgColor = {
    idle: "#fff", en_saisie: "var(--madel-blue-light)",
    trouve: "#F1FAF3", introuvable: "#FEF5F8",
  }[statut];

  return (
    <div style={{ position: "relative" }}>
      {/* Champ */}
      <div style={{
        display: "flex", alignItems: "center",
        border: `2px solid ${borderColor}`,
        borderRadius: 10, background: bgColor,
        padding: "3px 8px 3px 0", gap: 7, transition: "all .2s",
      }}>
        <div style={{
          display: "flex", alignItems: "center",
          background: "#003189", borderRadius: "7px 0 0 7px",
          height: 34, flexShrink: 0,
        }}>
          <div style={{
            background: "#003189", color: "#fff", fontSize: 7, fontWeight: 700,
            padding: "0 3px", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", height: "100%", gap: 1,
          }}>
            <span style={{ fontSize: 8 }}>🇪🇺</span>
            <span>F</span>
          </div>
          <input
            type="text" value={saisie} maxLength={9}
            placeholder="AB-123-CD" autoComplete="off"
            onChange={e => setSaisie(e.target.value)}
            style={{
              border: "none", outline: "none", background: "#fff",
              fontFamily: "'Arial Narrow', monospace", fontWeight: 800,
              fontSize: 17, letterSpacing: ".12em", color: "#1A2B5F",
              padding: "0 9px", width: 122, height: 34,
              textTransform: "uppercase",
            }}
          />
        </div>
        <span style={{ fontSize: 15 }}>
          {statut === "trouve" ? "✅" : statut === "introuvable" ? "❌" : ""}
        </span>
        {saisie && (
          <button onClick={effacer} style={{
            marginLeft: "auto", border: "none", background: "none",
            color: "var(--madel-muted)", cursor: "pointer", fontSize: 17, padding: "2px 6px",
          }}>×</button>
        )}

        {/* Suggestions */}
        {suggestions.length > 0 && statut === "en_saisie" && (
          <div style={{
            position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0,
            background: "#fff", border: "1px solid var(--madel-border)",
            borderRadius: 9, boxShadow: "0 4px 18px rgba(26,43,95,.14)",
            zIndex: 300, overflow: "hidden",
          }}>
            {suggestions.map((s, i) => (
              <button key={s.plaque} onClick={() => selectionnerSuggestion(s.plaque)} style={{
                width: "100%", border: "none",
                borderBottom: i < suggestions.length - 1 ? "1px solid #F5F3FA" : "none",
                background: "transparent", padding: "8px 12px",
                textAlign: "left", cursor: "pointer",
                fontSize: 12, fontFamily: "monospace", fontWeight: 700,
                color: "var(--madel-navy)", letterSpacing: ".05em",
              }}>
                {s.plaque}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Erreur */}
      {statut === "introuvable" && (
        <div style={{
          marginTop: 5, fontSize: 10, color: "var(--madel-rose)",
          padding: "5px 9px", background: "var(--madel-rose-light)", borderRadius: 7,
        }}>
          Plaque <strong>{saisie}</strong> introuvable dans la base pédagogique.
        </div>
      )}

      {/* Carte moto */}
      {statut === "trouve" && resultat && (
        <CarteMoto moto={resultat.moto} plaque={resultat.plaque} />
      )}
    </div>
  );
}

function CarteMoto({ moto, plaque }: { moto: MotoVehiculeDB; plaque: string }) {
  const age = new Date().getFullYear() - moto.annee;
  const decote = moto.valeurNeuf
    ? Math.round((1 - moto.valeurEstimee / moto.valeurNeuf) * 100)
    : null;

  return (
    <div style={{
      marginTop: 9, border: "1px solid var(--madel-rose-mid)",
      borderRadius: 11, overflow: "hidden",
      animation: "fadeIn .2s ease",
    }}>
      <div style={{
        background: "var(--madel-navy)", padding: "9px 13px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>
            {moto.marque} {moto.modele}
          </div>
          <div style={{ color: "var(--madel-rose-mid)", fontSize: 10 }}>{moto.version}</div>
        </div>
        <span style={{
          background: "#fff", color: "var(--madel-navy)",
          fontSize: 10, fontWeight: 800, padding: "2px 8px",
          borderRadius: 5, fontFamily: "monospace",
        }}>{plaque}</span>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1, background: "var(--madel-border)",
      }}>
        {[
          ["Année",     `${moto.annee} (${age} an${age > 1 ? "s" : ""})`],
          ["Cylindrée", moto.cylindree ? `${moto.cylindree} cc` : "Électrique"],
          ["Puissance",  `${moto.puissanceKw} kW`],
          ["Carburant",  CARB_LABEL[moto.carburant] ?? moto.carburant],
          ["Type",       TYPE_LABEL[moto.typeMoto] ?? moto.typeMoto],
          ["Valeur",     `${moto.valeurEstimee.toLocaleString("fr-FR")} €`],
        ].map(([l, v]) => (
          <div key={l} style={{ background: "var(--madel-rose-light)", padding: "6px 10px" }}>
            <div style={{ fontSize: 8, fontWeight: 700, color: "var(--madel-text)", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 1 }}>{l}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--madel-navy)" }}>{v}</div>
          </div>
        ))}
      </div>
      {moto.valeurNeuf && (
        <div style={{ padding: "6px 12px", fontSize: 10, color: "var(--madel-text)", background: "var(--madel-rose-light)", borderTop: "1px solid var(--madel-rose-mid)", display: "flex", gap: 12 }}>
          <span>Neuf : <strong>{moto.valeurNeuf.toLocaleString("fr-FR")} €</strong></span>
          {decote !== null && <span>Décote : <strong style={{ color: "#633806" }}>{decote}%</strong></span>}
        </div>
      )}
      {moto.commentairePedagogique && (
        <div style={{ padding: "6px 12px", fontSize: 10, color: "#0C447C", background: "var(--madel-blue-light)", borderTop: "1px solid var(--madel-border)" }}>
          📚 <em>{moto.commentairePedagogique}</em>
        </div>
      )}
    </div>
  );
}
