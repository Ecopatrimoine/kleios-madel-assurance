// ============================================================
// FICHE ASSURÉ — Kleios Madel Assurance · BTS Assurance
// Changements :
//   - Bouton "Modifier" supprimé
//   - "Remplacer" → navigue vers le simulateur correspondant
//   - "Nouveau contrat" → sélecteur de type → simulateur
//   - ModalResilier → règles légales complètes
// ============================================================
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useClientsStore } from "../store/clientsStore";
import { TYPE_LABELS, STATUT_LABELS } from "../data/types-clients";
import type { TypeContrat, ContratDemo } from "../data/types-clients";

const eur    = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const eurDec = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });

const TYPES: TypeContrat[] = ["auto","moto","mrh","gav","scolaire","deces","ij","dependance","sante","emprunteur","rcpro","mrp"];

const SIMULATEUR_ROUTE: Record<TypeContrat, string> = {
  auto:        "/simulateurs/auto",
  moto:        "/simulateurs/moto",
  mrh:         "/simulateurs/mrh",
  gav:         "/simulateurs/gav",
  scolaire:    "/simulateurs/scolaire",
  deces:       "/simulateurs/deces",
  ij:          "/simulateurs/ij",
  dependance:  "/simulateurs/dependance",
  sante:       "/simulateurs/sante",
  emprunteur:  "/simulateurs/emprunteur",
  rcpro:       "/simulateurs/rcpro",
  mrp:         "/simulateurs/mrp",
};

const CSP: Record<string,string> = { cadre:"Cadre", non_cadre:"Non-cadre", tns:"TNS", liberal:"Libéral", fonctionnaire:"Fonctionnaire", retraite:"Retraité", etudiant:"Étudiant" };
const SIT: Record<string,string> = { celibataire:"Célibataire", marie:"Marié(e)", pacse:"Pacsé(e)", divorce:"Divorcé(e)", veuf:"Veuf/Veuve", concubinage:"Concubinage" };

// ── Règles légales de résiliation ────────────────────────────
interface RegleResiliation {
  id:             string;
  label:          string;
  icone:          string;
  description:    string;
  procedure:      string;
  delai:          string;
  types:          TypeContrat[];
  conditionMois:  number;
  couleur:        string;
}

const REGLES_RESILIATION: RegleResiliation[] = [
  {
    id: "hamon", label: "Loi Hamon", icone: "⚡",
    description: "Résiliation à tout moment après 1 an de contrat, sans frais ni pénalité. Le nouvel assureur se charge des démarches.",
    procedure: "1. Souscrire un nouveau contrat auprès d'un autre assureur\n2. Le nouvel assureur envoie la demande de résiliation à votre place\n3. L'ancien contrat est résilié automatiquement sous 1 mois",
    delai: "Prise d'effet sous 1 mois après réception par l'assureur",
    types: ["auto","moto","mrh","sante"],
    conditionMois: 12,
    couleur: "#2563EB",
  },
  {
    id: "lemoine", label: "Loi Lemoine", icone: "🏦",
    description: "Résiliation à tout moment et sans frais pour l'assurance emprunteur, dès la 1ère année.",
    procedure: "1. Trouver une nouvelle assurance emprunteur\n2. Envoyer la demande de substitution à la banque\n3. La banque a 10 jours pour accepter ou refuser",
    delai: "Prise d'effet le lendemain de la réception par la banque",
    types: ["emprunteur"],
    conditionMois: 0,
    couleur: "#7C3AED",
  },
  {
    id: "echeance", label: "Résiliation à l'échéance annuelle", icone: "📅",
    description: "Pour tous les contrats : résiliation possible au moins 2 mois avant la date d'échéance annuelle.",
    procedure: "1. Identifier la date d'échéance du contrat\n2. Envoyer un courrier recommandé avec AR au moins 2 mois avant\n3. La résiliation prend effet à la date d'échéance",
    delai: "Prise d'effet à la date d'échéance annuelle",
    types: ["auto","moto","mrh","gav","scolaire","deces","ij","dependance","sante","emprunteur","rcpro","mrp"],
    conditionMois: 0,
    couleur: "#059669",
  },
  {
    id: "motif_legitime", label: "Motif légitime (art. L.113-16)", icone: "📋",
    description: "Changement de situation : déménagement, mariage, divorce, retraite, changement de profession, décès du souscripteur.",
    procedure: "1. Rassembler le justificatif du changement de situation\n2. Envoyer un courrier recommandé dans les 3 mois suivant l'événement\n3. Joindre le justificatif (acte de mariage, justificatif de domicile...)",
    delai: "Prise d'effet sous 1 mois après réception",
    types: ["auto","moto","mrh","gav","scolaire","deces","ij","dependance","sante","emprunteur","rcpro","mrp"],
    conditionMois: 0,
    couleur: "#D97706",
  },
  {
    id: "chatel", label: "Loi Chatel (art. L.113-15-1)", icone: "⚖️",
    description: "L'assureur n'a pas envoyé l'avis d'échéance dans les délais légaux (au moins 15 jours avant la date limite de résiliation).",
    procedure: "1. Vérifier que l'avis d'échéance a été reçu hors délai\n2. Résiliation possible à tout moment par lettre recommandée\n3. Aucun délai de préavis supplémentaire requis",
    delai: "Prise d'effet sous 1 mois après notification",
    types: ["auto","moto","mrh","gav","scolaire","ij","dependance","sante","rcpro","mrp"],
    conditionMois: 12,
    couleur: "#0891B2",
  },
  {
    id: "sinistre", label: "Résiliation après sinistre", icone: "🚨",
    description: "Suite à un sinistre déclaré, l'assuré ou l'assureur peut résilier le contrat dans un délai d'un mois.",
    procedure: "1. La résiliation doit être notifiée dans le mois suivant le sinistre\n2. Envoi d'un courrier recommandé avec AR\n3. L'assureur peut aussi initier la résiliation",
    delai: "Prise d'effet sous 1 mois après notification",
    types: ["auto","moto","mrh","sante","rcpro","mrp"],
    conditionMois: 0,
    couleur: "#DC2626",
  },
  {
    id: "non_paiement", label: "Non-paiement des cotisations", icone: "💸",
    description: "En cas d'impayé, l'assureur suspend les garanties puis résilie après mise en demeure restée sans effet.",
    procedure: "1. L'assureur envoie une mise en demeure par courrier\n2. Si non-régularisation sous 30 jours → suspension des garanties\n3. Si non-régularisation sous 10 jours supplémentaires → résiliation",
    delai: "40 jours après la mise en demeure",
    types: ["auto","moto","mrh","gav","scolaire","deces","ij","dependance","sante","emprunteur","rcpro","mrp"],
    conditionMois: 0,
    couleur: "#9F1239",
  },
];

// ── Helpers ───────────────────────────────────────────────────
function moisDepuisDebut(dateDebut: string): number {
  const debut = new Date(dateDebut);
  const now   = new Date();
  return (now.getFullYear() - debut.getFullYear()) * 12 + (now.getMonth() - debut.getMonth());
}

function Label({ text }: { text: string }) {
  return <label style={{ display:"block", fontSize:9, fontWeight:700, color:"var(--madel-muted)", textTransform:"uppercase", letterSpacing:".06em", marginBottom:5 }}>{text}</label>;
}
function InfoRow({ label, valeur }: { label: string; valeur: string }) {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", padding:"8px 0", borderBottom:"1px solid var(--madel-border-light)" }}>
      <span style={{ fontSize:12, color:"var(--madel-muted)", flexShrink:0, marginRight:16 }}>{label}</span>
      <span style={{ fontSize:12, fontWeight:600, color:"var(--madel-navy)", textAlign:"right" }}>{valeur}</span>
    </div>
  );
}
function Card({ titre, children, action }: { titre: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div style={{ background:"#fff", borderRadius:14, border:"1px solid var(--madel-border)", overflow:"hidden", boxShadow:"var(--shadow-xs)" }}>
      <div style={{ padding:"12px 18px", borderBottom:"1px solid var(--madel-border)", background:"var(--madel-bg)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ fontSize:12, fontWeight:700, color:"var(--madel-navy)" }}>{titre}</div>
        {action}
      </div>
      <div style={{ padding:"14px 18px" }}>{children}</div>
    </div>
  );
}
function Overlay({ children }: { children: React.ReactNode }) {
  return <div style={{ position:"fixed", inset:0, background:"rgba(17,29,64,.55)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>{children}</div>;
}
function Modal({ title, children, onClose, width=480 }: { title: string; children: React.ReactNode; onClose: () => void; width?: number }) {
  return (
    <Overlay>
      <div style={{ background:"#fff", borderRadius:18, padding:28, width, maxWidth:"95vw", maxHeight:"90vh", overflowY:"auto", boxShadow:"var(--shadow-lg)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:22 }}>
          <div style={{ fontSize:16, fontWeight:800, color:"var(--madel-navy)" }}>{title}</div>
          <button onClick={onClose} style={{ border:"none", background:"var(--madel-bg)", borderRadius:"50%", width:30, height:30, cursor:"pointer", fontSize:14, color:"var(--madel-muted)", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
        </div>
        {children}
      </div>
    </Overlay>
  );
}
function Btn({ label, onClick, variant="primary", disabled=false }: { label: string; onClick: () => void; variant?: "primary"|"danger"|"ghost"; disabled?: boolean }) {
  const styles = {
    primary: { background:"var(--madel-navy)", color:"#fff", border:"none" },
    danger:  { background:"#DC2626", color:"#fff", border:"none" },
    ghost:   { background:"#fff", color:"var(--madel-navy)", border:"1.5px solid var(--madel-border)" },
  };
  return <button onClick={onClick} disabled={disabled} style={{ ...styles[variant], padding:"11px 20px", borderRadius:10, cursor:disabled?"not-allowed":"pointer", fontFamily:"var(--madel-font)", fontWeight:700, fontSize:13, opacity:disabled?.45:1, transition:"opacity .15s" }}>{label}</button>;
}

// ── Modal : choix du simulateur (nouveau contrat) ─────────────
function ModalChoixSimulateur({ clientId, onClose }: { clientId: string; onClose: () => void }) {
  const navigate = useNavigate();
  const [type, setType] = useState<TypeContrat>("auto");
  return (
    <Modal title="📝 Nouveau contrat — Choisir le simulateur" onClose={onClose} width={540}>
      <div style={{ fontSize:12, color:"var(--madel-muted)", marginBottom:16, lineHeight:1.5 }}>
        Sélectionnez le type de contrat. Vous serez redirigé vers le simulateur pour calculer la prime, puis vous pourrez souscrire directement.
      </div>
      <Label text="Type de garantie" />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:24 }}>
        {TYPES.map(t => {
          const tl = TYPE_LABELS[t];
          return (
            <button key={t} onClick={() => setType(t)}
              style={{ padding:"10px 4px", borderRadius:9, border:`2px solid ${type===t?"var(--madel-rose)":"var(--madel-border)"}`, background:type===t?"var(--madel-rose-light)":"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:10, color:type===t?"var(--madel-rose-dark)":"var(--madel-navy)", fontWeight:type===t?700:400, transition:"all .15s" }}>
              <div style={{ fontSize:20, marginBottom:3 }}>{tl.icone}</div>{tl.label}
            </button>
          );
        })}
      </div>
      <div style={{ padding:"12px 14px", borderRadius:9, background:"var(--madel-bg)", border:"1px solid var(--madel-border)", fontSize:11, color:"var(--madel-muted)", marginBottom:22 }}>
        💡 Le simulateur <strong>{TYPE_LABELS[type].label}</strong> va s'ouvrir. Renseignez les informations du bien/de la personne, calculez la prime, puis cliquez sur <strong>"✅ Souscrire ce contrat"</strong>.
      </div>
      <div style={{ display:"flex", gap:10 }}>
        <button
          onClick={() => navigate(`${SIMULATEUR_ROUTE[type]}?clientId=${clientId}&mode=nouveau`)}
          style={{ flex:1, padding:"12px", borderRadius:10, border:"none", background:"var(--madel-rose)", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontWeight:700, fontSize:13 }}>
          Ouvrir le simulateur {TYPE_LABELS[type].icone} →
        </button>
        <Btn label="Annuler" onClick={onClose} variant="ghost" />
      </div>
    </Modal>
  );
}

// ── Modal : résiliation avec règles légales ───────────────────
function ModalResilier({ clientId, contrat, onClose }: { clientId: string; contrat: ContratDemo; onClose: () => void }) {
  const { resilierContrat } = useClientsStore();
  const [regleId, setRegleId]   = useState<string>("");
  const [confirme, setConfirme] = useState(false);

  const mois = moisDepuisDebut(contrat.dateDebut);

  const reglesApplicables = REGLES_RESILIATION.filter(r =>
    r.types.includes(contrat.type) && mois >= r.conditionMois
  );

  const regleSelectionnee = REGLES_RESILIATION.find(r => r.id === regleId);

  return (
    <Modal title={`🚫 Résilier — ${TYPE_LABELS[contrat.type].icone} ${contrat.produit}`} onClose={onClose} width={580}>
      {/* Infos contrat */}
      <div style={{ padding:"10px 14px", borderRadius:9, background:"var(--madel-bg)", border:"1px solid var(--madel-border)", fontSize:11, color:"var(--madel-muted)", marginBottom:20, display:"flex", gap:16 }}>
        <span>📄 {contrat.numeroContrat}</span>
        <span>💶 {eur(contrat.primeAnnuelle)}/an</span>
        <span>📅 Depuis le {new Date(contrat.dateDebut).toLocaleDateString("fr-FR")}</span>
        <span style={{ color: mois >= 12 ? "#059669" : "var(--madel-rose)", fontWeight:700 }}>({mois} mois)</span>
      </div>

      {/* Choix de la base légale */}
      <Label text="Base légale de résiliation" />
      <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
        {reglesApplicables.map(r => (
          <button key={r.id} onClick={() => { setRegleId(r.id); setConfirme(false); }}
            style={{ padding:"12px 14px", borderRadius:10, border:`2px solid ${regleId===r.id ? r.couleur : "var(--madel-border)"}`, background:regleId===r.id ? `${r.couleur}08` : "#fff", cursor:"pointer", fontFamily:"var(--madel-font)", textAlign:"left", transition:"all .15s" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
              <span style={{ fontSize:16 }}>{r.icone}</span>
              <span style={{ fontSize:12, fontWeight:700, color:regleId===r.id ? r.couleur : "var(--madel-navy)" }}>{r.label}</span>
            </div>
            <div style={{ fontSize:11, color:"var(--madel-muted)", lineHeight:1.4 }}>{r.description}</div>
          </button>
        ))}
      </div>

      {/* Procédure de la règle sélectionnée */}
      {regleSelectionnee && (
        <div style={{ padding:"14px 16px", borderRadius:10, background:`${regleSelectionnee.couleur}08`, border:`1px solid ${regleSelectionnee.couleur}30`, marginBottom:20 }}>
          <div style={{ fontSize:11, fontWeight:700, color:regleSelectionnee.couleur, marginBottom:10 }}>
            📋 Procédure — {regleSelectionnee.label}
          </div>
          <div style={{ fontSize:11, color:"var(--madel-text)", lineHeight:1.8, whiteSpace:"pre-line" }}>
            {regleSelectionnee.procedure}
          </div>
          <div style={{ marginTop:10, padding:"8px 10px", borderRadius:7, background:"rgba(0,0,0,.04)", fontSize:10, color:"var(--madel-muted)" }}>
            ⏱ {regleSelectionnee.delai}
          </div>
        </div>
      )}

      {/* Confirmation */}
      {regleSelectionnee && !confirme && (
        <div style={{ padding:"12px 14px", borderRadius:9, background:"#FEF3E2", border:"1px solid #E8B86D", fontSize:11, color:"#92520A", marginBottom:20 }}>
          ⚠️ La résiliation est <strong>irréversible</strong> dans le simulateur. Cliquez sur "Confirmer" pour valider.
        </div>
      )}

      <div style={{ display:"flex", gap:10 }}>
        {regleSelectionnee && !confirme && (
          <button onClick={() => setConfirme(true)}
            style={{ flex:1, padding:"11px", borderRadius:10, border:"none", background:"#F59E0B", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontWeight:700, fontSize:13 }}>
            Je confirme vouloir résilier →
          </button>
        )}
        {regleSelectionnee && confirme && (
          <button onClick={() => { resilierContrat(clientId, contrat.id, regleSelectionnee.label); onClose(); }}
            style={{ flex:1, padding:"11px", borderRadius:10, border:"none", background:"#DC2626", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontWeight:700, fontSize:13 }}>
            🚫 Résilier définitivement
          </button>
        )}
        <Btn label="Annuler" onClick={onClose} variant="ghost" />
      </div>
    </Modal>
  );
}

// ── Composant principal ───────────────────────────────────────
type ActionType = "resilier";
interface ActionState { type: ActionType; contrat: ContratDemo; }

export default function FicheAssure() {
  const { id }     = useParams<{ id: string }>();
  const navigate   = useNavigate();
  const { getClient, clientActif } = useClientsStore();
  const client = getClient(id ?? "");

  const [onglet, setOnglet]               = useState<"profil"|"contrats">("profil");
  const [showSouscription, setShowSouscription] = useState(false);
  const [action, setAction]               = useState<ActionState | null>(null);

  if (!client) return (
    <div style={{ padding:60, textAlign:"center", color:"var(--madel-muted)" }}>
      <div style={{ fontSize:48, marginBottom:14 }}>❓</div>
      <div style={{ fontSize:16, fontWeight:700, color:"var(--madel-navy)", marginBottom:16 }}>Client introuvable</div>
      <Btn label="← Retour" onClick={() => navigate("/recherche")} variant="ghost" />
    </div>
  );

  const contratsActifs   = client.contrats.filter(c => c.statut === "actif");
  const contratsResilies = client.contrats.filter(c => c.statut === "resilie");
  const primesAnn        = contratsActifs.reduce((s, c) => s + c.primeAnnuelle, 0);
  const age              = new Date().getFullYear() - new Date(client.dateNaissance).getFullYear();
  const sl               = STATUT_LABELS[client.statut];
  const hue              = (client.id.charCodeAt(4) ?? 0) * 23 % 360;

  return (
    <div style={{ fontFamily:"var(--madel-font)", color:"var(--madel-navy)", maxWidth:1100, margin:"0 auto", padding:"24px 20px 48px" }}>

      {/* Modals */}
      {showSouscription && (
        <ModalChoixSimulateur clientId={client.id} onClose={() => setShowSouscription(false)} />
      )}
      {action?.type === "resilier" && (
        <ModalResilier clientId={client.id} contrat={action.contrat} onClose={() => setAction(null)} />
      )}

      {/* Breadcrumb */}
      <div style={{ display:"flex", gap:6, alignItems:"center", marginBottom:20, fontSize:12, color:"var(--madel-muted)" }}>
        <button onClick={() => navigate("/recherche")} style={{ border:"none", background:"none", cursor:"pointer", color:"var(--madel-rose)", fontFamily:"var(--madel-font)", fontSize:12, padding:0 }}>🔍 Recherche</button>
        <span>›</span>
        <span style={{ color:"var(--madel-navy)", fontWeight:600 }}>{client.prenom} {client.nom}</span>
        {clientActif?.id === client.id && (
          <span style={{ fontSize:10, padding:"2px 8px", borderRadius:20, background:"var(--madel-rose-light)", color:"var(--madel-rose-dark)", fontWeight:700, marginLeft:6 }}>🎲 Simulation en cours</span>
        )}
      </div>

      {/* ── Hero client ─────────────────────────────────────── */}
      <div style={{ background:"linear-gradient(135deg, var(--madel-navy) 0%, var(--madel-navy-light) 100%)", borderRadius:20, padding:"28px 32px", marginBottom:20, boxShadow:"var(--shadow-md)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:16 }}>
          <div style={{ display:"flex", gap:20, alignItems:"center" }}>
            <div style={{ width:64, height:64, borderRadius:"50%", background:`hsl(${hue},55%,75%)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, fontWeight:800, color:`hsl(${hue},55%,25%)`, flexShrink:0, border:"3px solid rgba(255,255,255,.2)" }}>
              {client.prenom[0]}{client.nom[0]}
            </div>
            <div>
              <div style={{ fontSize:24, fontWeight:800, color:"#fff", marginBottom:4 }}>{client.prenom} {client.nom}</div>
              <div style={{ fontSize:13, color:"rgba(255,255,255,.65)" }}>{age} ans · {client.ville} ({client.codePostal}) · {client.telephone}</div>
              <div style={{ marginTop:6, display:"flex", gap:8, flexWrap:"wrap" }}>
                <span style={{ fontSize:10, padding:"3px 9px", borderRadius:20, background:sl.bg, color:sl.couleur, fontWeight:700 }}>{sl.label}</span>
                <span style={{ fontSize:10, padding:"3px 9px", borderRadius:20, background:"rgba(255,255,255,.12)", color:"rgba(255,255,255,.75)" }}>{client.profession}</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign:"right" }}>
            <div style={{ fontSize:11, color:"rgba(255,255,255,.5)", marginBottom:4 }}>Portefeuille annuel</div>
            <div style={{ fontSize:28, fontWeight:800, color:"#fff", fontFamily:"monospace" }}>{eur(primesAnn)}</div>
            <div style={{ fontSize:11, color:"rgba(255,255,255,.5)", marginTop:2 }}>{contratsActifs.length} contrat{contratsActifs.length!==1?"s":""} actif{contratsActifs.length!==1?"s":""}</div>
          </div>
        </div>

        {/* Accès rapide simulateurs — avec clientId */}
        <div style={{ marginTop:20, paddingTop:16, borderTop:"1px solid rgba(255,255,255,.12)", display:"flex", gap:8, flexWrap:"wrap", alignItems:"center" }}>
          <span style={{ fontSize:10, color:"rgba(255,255,255,.4)", marginRight:4 }}>Simuler & souscrire :</span>
          {TYPES.map(t => {
            const tl = TYPE_LABELS[t];
            return (
              <button key={t}
                onClick={() => navigate(`${SIMULATEUR_ROUTE[t]}?clientId=${client.id}&mode=nouveau`)}
                style={{ padding:"6px 12px", borderRadius:8, border:"1px solid rgba(255,255,255,.2)", background:"rgba(255,255,255,.08)", color:"rgba(255,255,255,.8)", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:11, fontWeight:600, transition:"background .15s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.18)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,.08)"}>
                {tl.icone} {tl.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Onglets ──────────────────────────────────────────── */}
      <div style={{ display:"flex", gap:0, marginBottom:20, background:"#fff", borderRadius:12, padding:5, border:"1px solid var(--madel-border)", boxShadow:"var(--shadow-xs)" }}>
        {[
          { k:"profil",   l:"👤 Profil",   badge: null },
          { k:"contrats", l:"📄 Contrats", badge: contratsActifs.length > 0 ? String(contratsActifs.length) : null },
        ].map(tab => (
          <button key={tab.k} onClick={() => setOnglet(tab.k as "profil"|"contrats")}
            style={{ flex:1, padding:"11px 16px", borderRadius:9, border:"none", background:onglet===tab.k?"var(--madel-navy)":"transparent", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:13, fontWeight:onglet===tab.k?700:400, color:onglet===tab.k?"#fff":"var(--madel-muted)", transition:"all .15s", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
            {tab.l}
            {tab.badge && <span style={{ fontSize:10, fontWeight:800, padding:"2px 7px", borderRadius:20, background:onglet===tab.k?"rgba(255,255,255,.25)":"var(--madel-rose-light)", color:onglet===tab.k?"#fff":"var(--madel-rose-dark)" }}>{tab.badge}</span>}
          </button>
        ))}
      </div>

      {/* ── PROFIL ────────────────────────────────────────────── */}
      {onglet === "profil" && (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14 }}>
          <Card titre="🪪 Identité">
            <InfoRow label="Prénom" valeur={client.prenom} />
            <InfoRow label="Nom" valeur={client.nom} />
            <InfoRow label="Naissance" valeur={`${new Date(client.dateNaissance).toLocaleDateString("fr-FR")} — ${age} ans`} />
            <InfoRow label="Email" valeur={client.email} />
            <InfoRow label="Téléphone" valeur={client.telephone} />
            <InfoRow label="Adresse" valeur={client.adresse} />
            <InfoRow label="Ville" valeur={`${client.codePostal} ${client.ville}`} />
          </Card>

          <Card titre="💼 Professionnel">
            <InfoRow label="Profession" valeur={client.profession} />
            <InfoRow label="CSP" valeur={CSP[client.csp] ?? client.csp} />
            <InfoRow label="Revenu annuel" valeur={eur(client.revenuAnnuel)} />
            <InfoRow label="Revenu mensuel" valeur={eurDec(client.revenuAnnuel/12)} />
            <div style={{ marginTop:10, padding:"10px 12px", borderRadius:8, background:"var(--madel-blue-light)", fontSize:11, color:"var(--madel-info)", lineHeight:1.5 }}>
              💡 Taux d'effort assurantiel estimé : <strong>{((primesAnn/client.revenuAnnuel)*100).toFixed(1)}%</strong> du revenu
            </div>
          </Card>

          <Card titre="👨‍👩‍👧 Famille">
            <InfoRow label="Situation civile" valeur={SIT[client.situationFamiliale] ?? client.situationFamiliale} />
            <InfoRow label="Enfants" valeur={client.nbEnfants === 0 ? "Aucun" : `${client.nbEnfants} enfant${client.nbEnfants>1?"s":""}`} />
            {client.conjoint && <>
              <InfoRow label="Conjoint(e)" valeur={`${client.conjoint.prenom} ${client.conjoint.nom}`} />
              <InfoRow label="Né(e) le" valeur={new Date(client.conjoint.dateNaissance).toLocaleDateString("fr-FR")} />
            </>}
            {client.enfants.map((e,i) => <InfoRow key={i} label={`Enfant ${i+1}`} valeur={`${e.prenom} — ${new Date(e.dateNaissance).toLocaleDateString("fr-FR")}`} />)}
          </Card>

          <div style={{ gridColumn:"1 / -1" }}>
            <Card titre="📋 Résumé du portefeuille" action={
              <button onClick={() => setOnglet("contrats")} style={{ fontSize:11, fontWeight:700, color:"var(--madel-rose)", border:"none", background:"none", cursor:"pointer", fontFamily:"var(--madel-font)" }}>Gérer les contrats →</button>
            }>
              {contratsActifs.length === 0 ? (
                <div style={{ textAlign:"center", padding:"20px", color:"var(--madel-muted)" }}>
                  <div style={{ fontSize:28, marginBottom:8 }}>📋</div>
                  <div style={{ fontWeight:700, marginBottom:4, fontSize:13 }}>Aucun contrat actif</div>
                  <button onClick={() => { setOnglet("contrats"); setShowSouscription(true); }} style={{ marginTop:10, padding:"8px 18px", borderRadius:8, border:"none", background:"var(--madel-rose)", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontWeight:700, fontSize:12 }}>+ Souscrire un premier contrat</button>
                </div>
              ) : (
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px,1fr))", gap:8 }}>
                  {contratsActifs.map(ct => {
                    const tl = TYPE_LABELS[ct.type];
                    return (
                      <div key={ct.id} style={{ padding:"10px 12px", borderRadius:10, background:"var(--madel-bg)", border:"1px solid var(--madel-border)", display:"flex", gap:10, alignItems:"center" }}>
                        <div style={{ width:34, height:34, borderRadius:8, background:`${tl.couleur}15`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{tl.icone}</div>
                        <div style={{ minWidth:0 }}>
                          <div style={{ fontSize:11, fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{ct.produit}</div>
                          <div style={{ fontSize:11, fontFamily:"monospace", color:"var(--madel-rose)", fontWeight:700 }}>{eur(ct.primeAnnuelle)}/an</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </Card>
          </div>

          <Card titre="🏢 Cabinet">
            <InfoRow label="ID client" valeur={client.id} />
            <InfoRow label="Statut" valeur={sl.label} />
            <InfoRow label="Client depuis" valeur={new Date(client.dateEntree).toLocaleDateString("fr-FR")} />
            <InfoRow label="Portefeuille annuel" valeur={eur(primesAnn)} />
            <InfoRow label="Nb contrats actifs" valeur={String(contratsActifs.length)} />
          </Card>
        </div>
      )}

      {/* ── CONTRATS ──────────────────────────────────────────── */}
      {onglet === "contrats" && (
        <div>
          {/* Barre d'action */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
            <div style={{ fontSize:13, color:"var(--madel-muted)" }}>
              {contratsActifs.length} contrat{contratsActifs.length!==1?"s":""} actif{contratsActifs.length!==1?"s":""} · {eur(primesAnn)}/an
            </div>
            <button onClick={() => setShowSouscription(true)}
              style={{ padding:"10px 20px", borderRadius:10, border:"none", background:"var(--madel-rose)", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontWeight:700, fontSize:13 }}>
              + Nouveau contrat
            </button>
          </div>

          {contratsActifs.length === 0 && (
            <div style={{ background:"#fff", borderRadius:16, border:"2px dashed var(--madel-border)", padding:"60px 40px", textAlign:"center" }}>
              <div style={{ fontSize:44, marginBottom:14 }}>📋</div>
              <div style={{ fontSize:16, fontWeight:700, marginBottom:8 }}>Aucun contrat actif</div>
              <div style={{ fontSize:13, color:"var(--madel-muted)", marginBottom:24 }}>{client.statut==="prospect"?"Ce prospect n'a pas encore souscrit.":"Tous les contrats ont été résiliés."}</div>
              <button onClick={() => setShowSouscription(true)} style={{ padding:"12px 28px", borderRadius:10, border:"none", background:"var(--madel-rose)", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontWeight:700 }}>+ Souscrire un contrat</button>
            </div>
          )}

          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {contratsActifs.map(ct => {
              const tl   = TYPE_LABELS[ct.type];
              const mois = moisDepuisDebut(ct.dateDebut);
              return (
                <div key={ct.id} style={{ background:"#fff", borderRadius:16, border:"1px solid var(--madel-border)", overflow:"hidden", boxShadow:"var(--shadow-xs)" }}>
                  {/* En-tête contrat */}
                  <div style={{ padding:"16px 22px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
                    <div style={{ display:"flex", gap:14, alignItems:"center" }}>
                      <div style={{ width:48, height:48, borderRadius:12, background:`${tl.couleur}12`, border:`1.5px solid ${tl.couleur}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, flexShrink:0 }}>{tl.icone}</div>
                      <div>
                        <div style={{ fontWeight:700, fontSize:15 }}>{ct.produit}</div>
                        <div style={{ fontSize:11, color:"var(--madel-muted)", marginTop:2 }}>{ct.numeroContrat} · {ct.compagnie}</div>
                        <div style={{ fontSize:11, color:"var(--madel-muted)" }}>
                          Depuis le {new Date(ct.dateDebut).toLocaleDateString("fr-FR")}
                          <span style={{ marginLeft:8, padding:"1px 6px", borderRadius:10, background: mois >= 12 ? "#D1FAE5" : "#FEF3E2", color: mois >= 12 ? "#065F46" : "#92520A", fontSize:9, fontWeight:700 }}>
                            {mois} mois
                          </span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display:"flex", alignItems:"center", gap:20 }}>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontWeight:800, fontSize:18, fontFamily:"monospace", color:"var(--madel-navy)" }}>{eur(ct.primeAnnuelle)}/an</div>
                        <div style={{ fontSize:11, color:"var(--madel-muted)" }}>{eurDec(ct.primeAnnuelle/12)}/mois</div>
                      </div>

                      {/* 2 actions : Remplacer + Résilier (Modifier supprimé) */}
                      <div style={{ display:"flex", gap:6 }}>
                        <button
                          onClick={() => navigate(`${SIMULATEUR_ROUTE[ct.type]}?clientId=${client.id}&mode=remplacement&ancienId=${ct.id}`)}
                          title="Remplacer via simulateur"
                          style={{ padding:"8px 12px", borderRadius:8, border:"1.5px solid #D97706", background:"#FFFBEB", color:"#92520A", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:11, fontWeight:700, transition:"all .15s" }}
                          onMouseEnter={e => e.currentTarget.style.background="#FEF3C7"}
                          onMouseLeave={e => e.currentTarget.style.background="#FFFBEB"}>
                          🔄 Remplacer
                        </button>
                        <button
                          onClick={() => setAction({ type:"resilier", contrat:ct })}
                          title="Résilier"
                          style={{ padding:"8px 12px", borderRadius:8, border:"1.5px solid #FCA5A5", background:"#FEF2F2", color:"#DC2626", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:11, fontWeight:700, transition:"all .15s" }}
                          onMouseEnter={e => e.currentTarget.style.background="#FEE2E2"}
                          onMouseLeave={e => e.currentTarget.style.background="#FEF2F2"}>
                          🚫 Résilier
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Détails du contrat */}
                  {Object.keys(ct.details).length > 0 && (
                    <div style={{ padding:"10px 22px 14px", borderTop:"1px solid var(--madel-border)", background:"var(--madel-bg)", display:"flex", gap:20, flexWrap:"wrap" }}>
                      {Object.entries(ct.details).map(([k,v]) => (
                        <div key={k} style={{ fontSize:11 }}>
                          <span style={{ color:"var(--madel-muted)", textTransform:"capitalize" }}>{k.replace(/_/g," ")} :</span>{" "}
                          <span style={{ fontWeight:600 }}>{typeof v==="boolean"?(v?"Oui":"Non"):Array.isArray(v)?(v as string[]).join(", ")||"—":String(v)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contrats résiliés */}
          {contratsResilies.length > 0 && (
            <div style={{ marginTop:28 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"var(--madel-muted)", marginBottom:10, display:"flex", alignItems:"center", gap:8 }}>
                <span>📦 Contrats résiliés</span>
                <span style={{ padding:"2px 8px", borderRadius:20, background:"var(--madel-bg)", border:"1px solid var(--madel-border)", fontWeight:700 }}>{contratsResilies.length}</span>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                {contratsResilies.map(ct => (
                  <div key={ct.id} style={{ background:"var(--madel-bg)", borderRadius:12, border:"1px solid var(--madel-border)", padding:"12px 18px", display:"flex", justifyContent:"space-between", alignItems:"center", opacity:.65 }}>
                    <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                      <span style={{ fontSize:20 }}>{TYPE_LABELS[ct.type].icone}</span>
                      <div>
                        <div style={{ fontSize:12, fontWeight:600 }}>{ct.produit}</div>
                        <div style={{ fontSize:10, color:"var(--madel-muted)" }}>
                          Résilié{ct.dateFin ? ` le ${new Date(ct.dateFin).toLocaleDateString("fr-FR")}` : ""}{ct.motifResiliation ? ` · ${ct.motifResiliation}` : ""}
                        </div>
                      </div>
                    </div>
                    <span style={{ fontSize:11, fontFamily:"monospace", color:"var(--madel-muted)" }}>{eur(ct.primeAnnuelle)}/an</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
