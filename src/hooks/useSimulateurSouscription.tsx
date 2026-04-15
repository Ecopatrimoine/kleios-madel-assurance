// ============================================================
// HOOK — useSimulateurSouscription
// Kleios Madel Assurance · BTS Assurance
// Connecte n'importe quel simulateur à la fiche assuré
// ============================================================
import { useSearchParams, useNavigate } from "react-router-dom";
import { useClientsStore } from "../store/clientsStore";
import { TYPE_LABELS } from "../data/types-clients";
import type { TypeContrat, ContratDemo } from "../data/types-clients";

// ── Utilitaire : code postal → zone tarifaire ────────────────
// Identique à la logique de SimulateurMRH (recherche adresse BAN)
export function cpVersZone(codePostal: string): "zone1" | "zone2" | "zone3" | "zone4" {
  const dept = parseInt(codePostal.slice(0, 2));
  // Zone 1 — grandes métropoles (sinistralité vol élevée)
  if ([75, 92, 93, 94, 13, 69, 31, 33, 59, 67, 6].includes(dept)) return "zone1";
  // Zone 2 — villes moyennes et agglomérations
  if ([77, 78, 91, 95, 34, 44, 38, 76, 57, 83, 35, 25, 37, 45, 51].includes(dept)) return "zone2";
  // Zone 4 — rural (faible densité)
  if (dept >= 1 && dept <= 19) return "zone4";
  if ([23, 36, 46, 48, 55, 58, 61, 63, 70, 71, 87, 88].includes(dept)) return "zone4";
  // Zone 3 — périurbain (référence)
  return "zone3";
}

// ── Hook principal ────────────────────────────────────────────
export function useSimulateurSouscription(type: TypeContrat) {
  const [searchParams] = useSearchParams();
  const navigate       = useNavigate();
  const { addContrat, remplacerContrat, getClient } = useClientsStore();

  const clientId    = searchParams.get("clientId");
  const mode        = (searchParams.get("mode") ?? "nouveau") as "nouveau" | "remplacement";
  const ancienId    = searchParams.get("ancienId") ?? "";
  const client      = clientId ? getClient(clientId) : undefined;
  const isFromFiche = !!clientId;

  // Ancien contrat (remplacement) — ses details permettent de pré-remplir le simulateur
  const ancienContrat = client && ancienId
    ? client.contrats.find(c => c.id === ancienId)
    : undefined;

  // Âge du client calculé depuis sa date de naissance
  const clientAge = client
    ? new Date().getFullYear() - new Date(client.dateNaissance).getFullYear()
    : undefined;

  // Zone géographique déduite du code postal du client
  // Utilisée pour pré-remplir automatiquement la zone dans tous les simulateurs
  const clientZone: "zone1" | "zone2" | "zone3" | "zone4" | undefined = client
    ? cpVersZone(client.codePostal)
    : undefined;

  const souscrire = (primeAnnuelle: number, details: Record<string, unknown> = {}) => {
    if (!clientId) return;

    const contrat: ContratDemo = {
      id:            "",
      type,
      produit:       `${TYPE_LABELS[type].label} — Simulation Madel`,
      compagnie:     "Madel Assurances",
      numeroContrat: `${type.toUpperCase()}-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000) + 1000}`,
      statut:        "actif",
      dateDebut:     new Date().toISOString().split("T")[0],
      primeAnnuelle: Math.round(primeAnnuelle * 100) / 100,
      details,
    };

    if (mode === "remplacement" && ancienId) {
      remplacerContrat(clientId, ancienId, contrat);
    } else {
      addContrat(clientId, contrat);
    }

    navigate(`/assures/${clientId}`);
  };

  return { client, clientAge, clientZone, ancienContrat, mode, isFromFiche, souscrire };
}

// ── Composant BoutonSouscription ─────────────────────────────
interface BoutonSouscriptionProps {
  isFromFiche:   boolean;
  client:        ReturnType<typeof useSimulateurSouscription>["client"];
  mode:          "nouveau" | "remplacement";
  primeAnnuelle: number | null;
  onSouscrire:   () => void;
}

export function BoutonSouscription({
  isFromFiche, client, mode, primeAnnuelle, onSouscrire,
}: BoutonSouscriptionProps) {
  const navigate = useNavigate();
  if (!isFromFiche || !client) return null;

  const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });

  return (
    <div style={{
      marginTop: 16, borderRadius: 16,
      background: "linear-gradient(135deg, var(--madel-navy) 0%, #1e3a6e 100%)",
      padding: "20px 24px", display: "flex", justifyContent: "space-between",
      alignItems: "center", gap: 16, flexWrap: "wrap",
      boxShadow: "0 4px 24px rgba(17,29,64,.25)",
    }}>
      <div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 4 }}>
          {mode === "remplacement" ? "🔄 Remplacement de contrat" : "📝 Nouvelle souscription"}
        </div>
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>
          {client.prenom} {client.nom}
        </div>
        {primeAnnuelle !== null && (
          <div style={{ marginTop: 4 }}>
            <span style={{ color: "var(--madel-rose)", fontWeight: 800, fontSize: 22, fontFamily: "monospace" }}>
              {eur(primeAnnuelle)}
            </span>
            <span style={{ color: "rgba(255,255,255,.5)", fontSize: 11, marginLeft: 6 }}>
              /an · {eur(primeAnnuelle / 12)}/mois
            </span>
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button
          onClick={() => navigate(`/assures/${client.id}`)}
          style={{ padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,.2)", background: "transparent", color: "rgba(255,255,255,.75)", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 12 }}>
          ← Retour fiche
        </button>
        {primeAnnuelle !== null ? (
          <button
            onClick={onSouscrire}
            style={{ padding: "10px 24px", borderRadius: 10, border: "none", background: "var(--madel-rose)", color: "#fff", cursor: "pointer", fontFamily: "var(--madel-font)", fontSize: 13, fontWeight: 700, boxShadow: "0 2px 8px rgba(212,43,90,.4)" }}>
            {mode === "remplacement" ? "🔄 Valider le remplacement" : "✅ Souscrire ce contrat"}
          </button>
        ) : (
          <div style={{ padding: "10px 18px", borderRadius: 10, background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.4)", fontSize: 12, fontStyle: "italic" }}>
            Calculez la prime pour souscrire →
          </div>
        )}
      </div>
    </div>
  );
}
