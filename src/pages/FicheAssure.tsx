// ============================================================
// FICHE ASSURÉ v2 — Profil d'abord + 3 actions contrat
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useClientsStore } from "../store/clientsStore";
import { TYPE_LABELS, STATUT_LABELS } from "../data/types-clients";
import type { TypeContrat, ContratDemo } from "../data/types-clients";

const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const eurDec = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
const TYPES: TypeContrat[] = ["auto","moto","mrh","gav","scolaire","deces","ij","dependance","sante","emprunteur","rcpro","mrp"];
const CSP: Record<string,string> = { cadre:"Cadre", non_cadre:"Non-cadre", tns:"TNS", liberal:"Libéral", fonctionnaire:"Fonctionnaire", retraite:"Retraité", etudiant:"Étudiant" };
const SIT: Record<string,string> = { celibataire:"Célibataire", marie:"Marié(e)", pacse:"Pacsé(e)", divorce:"Divorcé(e)", veuf:"Veuf/Veuve", concubinage:"Concubinage" };
const inp: React.CSSProperties = { width:"100%", padding:"9px 11px", borderRadius:8, border:"1.5px solid var(--madel-border)", fontSize:12, fontFamily:"var(--madel-font)", color:"var(--madel-navy)", background:"#fff", outline:"none", boxSizing:"border-box" };
const MOTIFS = ["Vente du véhicule","Déménagement","Changement d'assureur","Décès de l'assuré","Non-paiement des cotisations","Résiliation légale (loi Lemoine)","Autre"];

// ── Helpers ───────────────────────────────────────────────────
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
      <div style={{ background:"#fff", borderRadius:18, padding:28, width, maxWidth:"95vw", boxShadow:"var(--shadow-lg)" }}>
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

// ── Modals contrat ────────────────────────────────────────────
function ModalSouscription({ clientId, onClose }: { clientId: string; onClose: () => void }) {
  const { addContrat } = useClientsStore();
  const [type, setType] = useState<TypeContrat>("auto");
  const [produit, setProduit] = useState("");
  const [prime, setPrime] = useState(500);
  return (
    <Modal title="📝 Nouveau contrat" onClose={onClose} width={520}>
      <Label text="Type de garantie" />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:16 }}>
        {TYPES.map(t => {
          const tl = TYPE_LABELS[t];
          return <button key={t} onClick={() => setType(t)} style={{ padding:"9px 4px", borderRadius:9, border:`2px solid ${type===t?"var(--madel-rose)":"var(--madel-border)"}`, background:type===t?"var(--madel-rose-light)":"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:10, color:type===t?"var(--madel-rose-dark)":"var(--madel-navy)", fontWeight:type===t?700:400 }}>
            <div style={{ fontSize:20, marginBottom:2 }}>{tl.icone}</div>{tl.label}
          </button>;
        })}
      </div>
      <Label text="Nom du produit / formule" />
      <input value={produit} onChange={e => setProduit(e.target.value)} placeholder={`Ex: ${TYPE_LABELS[type].label} Confort`} style={{ ...inp, marginBottom:14 }} />
      <Label text="Prime annuelle (€)" />
      <input type="number" value={prime} min={0} onChange={e => setPrime(+e.target.value)} style={{ ...inp, marginBottom:22 }} />
      <div style={{ display:"flex", gap:10 }}>
        <Btn label="✅ Souscrire le contrat" onClick={() => { if(!produit.trim()) return; addContrat(clientId, { id:"", type, produit, compagnie:"Madel Assurances", numeroContrat:`${type.toUpperCase()}-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`, statut:"actif", dateDebut:new Date().toISOString().split("T")[0], primeAnnuelle:prime, details:{} }); onClose(); }} disabled={!produit.trim()} />
        <Btn label="Annuler" onClick={onClose} variant="ghost" />
      </div>
    </Modal>
  );
}

function ModalModifier({ clientId, contrat, onClose }: { clientId: string; contrat: ContratDemo; onClose: () => void }) {
  const { updateContrat } = useClientsStore();
  const [produit, setProduit] = useState(contrat.produit);
  const [prime, setPrime] = useState(contrat.primeAnnuelle);
  return (
    <Modal title={`✏️ Modifier — ${TYPE_LABELS[contrat.type].icone} ${contrat.produit}`} onClose={onClose}>
      <div style={{ fontSize:11, color:"var(--madel-muted)", marginBottom:18, padding:"8px 12px", borderRadius:8, background:"var(--madel-bg)" }}>{contrat.numeroContrat} · Depuis le {new Date(contrat.dateDebut).toLocaleDateString("fr-FR")}</div>
      <Label text="Nom du produit / formule" />
      <input value={produit} onChange={e => setProduit(e.target.value)} style={{ ...inp, marginBottom:14 }} />
      <Label text="Prime annuelle (€)" />
      <input type="number" value={prime} min={0} onChange={e => setPrime(+e.target.value)} style={{ ...inp, marginBottom:22 }} />
      <div style={{ display:"flex", gap:10 }}>
        <Btn label="💾 Enregistrer les modifications" onClick={() => { updateContrat(clientId, contrat.id, { produit, primeAnnuelle: prime }); onClose(); }} disabled={!produit.trim()} />
        <Btn label="Annuler" onClick={onClose} variant="ghost" />
      </div>
    </Modal>
  );
}

function ModalRemplacer({ clientId, contrat, onClose }: { clientId: string; contrat: ContratDemo; onClose: () => void }) {
  const { remplacerContrat } = useClientsStore();
  const [type, setType] = useState<TypeContrat>(contrat.type);
  const [produit, setProduit] = useState("");
  const [prime, setPrime] = useState(contrat.primeAnnuelle);
  return (
    <Modal title={`🔄 Remplacer — ${TYPE_LABELS[contrat.type].icone} ${contrat.produit}`} onClose={onClose} width={540}>
      <div style={{ padding:"10px 14px", borderRadius:9, background:"#FEF3E2", border:"1px solid #E8B86D", fontSize:11, color:"#92520A", marginBottom:18 }}>
        ⚠️ L'ancien contrat sera automatiquement résilié au profit du nouveau.
      </div>
      <Label text="Nouveau type de contrat" />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:16 }}>
        {TYPES.map(t => {
          const tl = TYPE_LABELS[t];
          return <button key={t} onClick={() => setType(t)} style={{ padding:"8px 4px", borderRadius:9, border:`2px solid ${type===t?"var(--madel-rose)":"var(--madel-border)"}`, background:type===t?"var(--madel-rose-light)":"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:10, color:type===t?"var(--madel-rose-dark)":"var(--madel-navy)", fontWeight:type===t?700:400 }}>
            <div style={{ fontSize:18, marginBottom:2 }}>{tl.icone}</div>{tl.label}
          </button>;
        })}
      </div>
      <Label text="Nom du nouveau produit / formule" />
      <input value={produit} onChange={e => setProduit(e.target.value)} placeholder={`Ex: ${TYPE_LABELS[type].label} Confort`} style={{ ...inp, marginBottom:14 }} />
      <Label text="Nouvelle prime annuelle (€)" />
      <input type="number" value={prime} min={0} onChange={e => setPrime(+e.target.value)} style={{ ...inp, marginBottom:22 }} />
      <div style={{ display:"flex", gap:10 }}>
        <Btn label="🔄 Valider le remplacement" onClick={() => { if(!produit.trim()) return; remplacerContrat(clientId, contrat.id, { id:"", type, produit, compagnie:"Madel Assurances", numeroContrat:`${type.toUpperCase()}-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`, statut:"actif", dateDebut:new Date().toISOString().split("T")[0], primeAnnuelle:prime, details:{} }); onClose(); }} disabled={!produit.trim()} />
        <Btn label="Annuler" onClick={onClose} variant="ghost" />
      </div>
    </Modal>
  );
}

function ModalResilier({ clientId, contrat, onClose }: { clientId: string; contrat: ContratDemo; onClose: () => void }) {
  const { resilierContrat } = useClientsStore();
  const [motif, setMotif] = useState("");
  return (
    <Modal title={`🚫 Résilier — ${TYPE_LABELS[contrat.type].icone} ${contrat.produit}`} onClose={onClose}>
      <div style={{ fontSize:11, color:"var(--madel-muted)", marginBottom:18, padding:"8px 12px", borderRadius:8, background:"var(--madel-bg)" }}>{contrat.numeroContrat} · {eur(contrat.primeAnnuelle)}/an</div>
      <Label text="Motif de résiliation (obligatoire)" />
      <select value={motif} onChange={e => setMotif(e.target.value)} style={{ ...inp, marginBottom:22, cursor:"pointer" }}>
        <option value="">Sélectionner un motif...</option>
        {MOTIFS.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
      <div style={{ display:"flex", gap:10 }}>
        <Btn label="Confirmer la résiliation" onClick={() => { resilierContrat(clientId, contrat.id, motif); onClose(); }} disabled={!motif} variant="danger" />
        <Btn label="Annuler" onClick={onClose} variant="ghost" />
      </div>
    </Modal>
  );
}

// ── Composant principal ───────────────────────────────────────
type ActionType = "modifier" | "remplacer" | "resilier";
interface ActionState { type: ActionType; contrat: ContratDemo; }

export default function FicheAssure() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getClient, clientActif } = useClientsStore();
  const client = getClient(id ?? "");

  const [onglet, setOnglet] = useState<"profil"|"contrats">("profil");
  const [showSouscription, setShowSouscription] = useState(false);
  const [action, setAction] = useState<ActionState | null>(null);

  if (!client) return (
    <div style={{ padding:60, textAlign:"center", color:"var(--madel-muted)" }}>
      <div style={{ fontSize:48, marginBottom:14 }}>❓</div>
      <div style={{ fontSize:16, fontWeight:700, color:"var(--madel-navy)", marginBottom:16 }}>Client introuvable</div>
      <Btn label="← Retour" onClick={() => navigate("/recherche")} variant="ghost" />
    </div>
  );

  const contratsActifs = client.contrats.filter(c => c.statut === "actif");
  const contratsResilies = client.contrats.filter(c => c.statut === "resilie");
  const primesAnn = contratsActifs.reduce((s, c) => s + c.primeAnnuelle, 0);
  const age = new Date().getFullYear() - new Date(client.dateNaissance).getFullYear();
  const sl = STATUT_LABELS[client.statut];
  const hue = (client.id.charCodeAt(4) ?? 0) * 23 % 360;

  return (
    <div style={{ fontFamily:"var(--madel-font)", color:"var(--madel-navy)", maxWidth:1100, margin:"0 auto", padding:"24px 20px 48px" }}>

      {/* Modals */}
      {showSouscription && <ModalSouscription clientId={client.id} onClose={() => setShowSouscription(false)} />}
      {action?.type === "modifier"  && <ModalModifier  clientId={client.id} contrat={action.contrat} onClose={() => setAction(null)} />}
      {action?.type === "remplacer" && <ModalRemplacer clientId={client.id} contrat={action.contrat} onClose={() => setAction(null)} />}
      {action?.type === "resilier"  && <ModalResilier  clientId={client.id} contrat={action.contrat} onClose={() => setAction(null)} />}

      {/* Breadcrumb */}
      <div style={{ display:"flex", gap:6, alignItems:"center", marginBottom:20, fontSize:12, color:"var(--madel-muted)" }}>
        <button onClick={() => navigate("/recherche")} style={{ border:"none", background:"none", cursor:"pointer", color:"var(--madel-rose)", fontFamily:"var(--madel-font)", fontSize:12, padding:0 }}>🔍 Recherche</button>
        <span>›</span>
        <span style={{ color:"var(--madel-navy)", fontWeight:600 }}>{client.prenom} {client.nom}</span>
        {clientActif?.id === client.id && <span style={{ fontSize:10, padding:"2px 8px", borderRadius:20, background:"var(--madel-rose-light)", color:"var(--madel-rose-dark)", fontWeight:700, marginLeft:6 }}>🎲 Simulation en cours</span>}
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
              <div style={{ marginTop:10, display:"flex", gap:8, flexWrap:"wrap" }}>
                <span style={{ fontSize:11, fontWeight:700, padding:"4px 12px", borderRadius:20, background:sl.bg, color:sl.couleur }}>{sl.label}</span>
                <span style={{ fontSize:11, padding:"4px 12px", borderRadius:20, background:"rgba(255,255,255,.12)", color:"rgba(255,255,255,.8)" }}>{SIT[client.situationFamiliale] ?? client.situationFamiliale}</span>
                <span style={{ fontSize:11, padding:"4px 12px", borderRadius:20, background:"rgba(255,255,255,.12)", color:"rgba(255,255,255,.8)" }}>{CSP[client.csp] ?? client.csp}</span>
                {client.nbEnfants > 0 && <span style={{ fontSize:11, padding:"4px 12px", borderRadius:20, background:"rgba(255,255,255,.12)", color:"rgba(255,255,255,.8)" }}>{client.nbEnfants} enfant{client.nbEnfants>1?"s":""}</span>}
              </div>
            </div>
          </div>

          {/* KPIs rapides */}
          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            {[
              { l:"Contrats actifs", v:String(contratsActifs.length), c:"#86EFAC" },
              { l:"Primes/an", v:eur(primesAnn), c:"#fff" },
              { l:"Primes/mois", v:eurDec(primesAnn/12), c:"var(--madel-rose-mid)" },
            ].map(k => (
              <div key={k.l} style={{ textAlign:"center", padding:"12px 16px", borderRadius:12, background:"rgba(255,255,255,.1)", minWidth:100 }}>
                <div style={{ fontSize:16, fontWeight:800, color:k.c, fontFamily:"monospace" }}>{k.v}</div>
                <div style={{ fontSize:10, color:"rgba(255,255,255,.5)", marginTop:3 }}>{k.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions rapides simulateurs */}
        <div style={{ marginTop:18, paddingTop:16, borderTop:"1px solid rgba(255,255,255,.1)", display:"flex", gap:8, flexWrap:"wrap" }}>
          <span style={{ fontSize:10, color:"rgba(255,255,255,.4)", alignSelf:"center", marginRight:4 }}>Simuler :</span>
          {[
            { label:"🚗 Auto", path:"/simulateurs/auto" },
            { label:"🏠 MRH", path:"/simulateurs/mrh" },
            { label:"💊 Santé", path:"/simulateurs/sante" },
            { label:"🏦 Emprunteur", path:"/simulateurs/emprunteur" },
            { label:"⚖️ RC Pro", path:"/simulateurs/rcpro" },
          ].map(s => (
            <button key={s.path} onClick={() => navigate(`${s.path}?assure=${client.id}`)} style={{ padding:"6px 12px", borderRadius:8, border:"1px solid rgba(255,255,255,.2)", background:"rgba(255,255,255,.08)", color:"rgba(255,255,255,.8)", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:11, fontWeight:600, transition:"background .15s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.18)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,.08)"}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Onglets ──────────────────────────────────────────── */}
      <div style={{ display:"flex", gap:0, marginBottom:20, background:"#fff", borderRadius:12, padding:5, border:"1px solid var(--madel-border)", boxShadow:"var(--shadow-xs)" }}>
        {[
          { k:"profil",   l:"👤 Profil", badge: null },
          { k:"contrats", l:"📄 Contrats", badge: contratsActifs.length > 0 ? String(contratsActifs.length) : null },
        ].map(tab => (
          <button key={tab.k} onClick={() => setOnglet(tab.k as "profil"|"contrats")} style={{ flex:1, padding:"11px 16px", borderRadius:9, border:"none", background:onglet===tab.k?"var(--madel-navy)":"transparent", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:13, fontWeight:onglet===tab.k?700:400, color:onglet===tab.k?"#fff":"var(--madel-muted)", transition:"all .15s", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
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
            <InfoRow label="Adresse" valeur={`${client.adresse}`} />
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

          {/* Résumé contrats */}
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

          {/* Infos cabinet */}
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
            <button onClick={() => setShowSouscription(true)} style={{ padding:"10px 20px", borderRadius:10, border:"none", background:"var(--madel-rose)", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontWeight:700, fontSize:13 }}>
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
              const tl = TYPE_LABELS[ct.type];
              return (
                <div key={ct.id} style={{ background:"#fff", borderRadius:16, border:"1px solid var(--madel-border)", overflow:"hidden", boxShadow:"var(--shadow-xs)" }}>
                  {/* En-tête contrat */}
                  <div style={{ padding:"16px 22px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
                    <div style={{ display:"flex", gap:14, alignItems:"center" }}>
                      <div style={{ width:48, height:48, borderRadius:12, background:`${tl.couleur}12`, border:`1.5px solid ${tl.couleur}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, flexShrink:0 }}>{tl.icone}</div>
                      <div>
                        <div style={{ fontWeight:700, fontSize:15 }}>{ct.produit}</div>
                        <div style={{ fontSize:11, color:"var(--madel-muted)", marginTop:2 }}>
                          {ct.numeroContrat} · {ct.compagnie}
                        </div>
                        <div style={{ fontSize:11, color:"var(--madel-muted)" }}>
                          Depuis le {new Date(ct.dateDebut).toLocaleDateString("fr-FR")}
                        </div>
                      </div>
                    </div>

                    <div style={{ display:"flex", alignItems:"center", gap:20 }}>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontWeight:800, fontSize:18, fontFamily:"monospace", color:"var(--madel-navy)" }}>{eur(ct.primeAnnuelle)}/an</div>
                        <div style={{ fontSize:11, color:"var(--madel-muted)" }}>{eurDec(ct.primeAnnuelle/12)}/mois</div>
                      </div>

                      {/* 3 actions */}
                      <div style={{ display:"flex", gap:6 }}>
                        <button onClick={() => setAction({ type:"modifier", contrat:ct })} title="Modifier" style={{ padding:"8px 12px", borderRadius:8, border:"1.5px solid var(--madel-border)", background:"#fff", color:"var(--madel-navy)", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:11, fontWeight:600, transition:"all .15s" }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor="var(--madel-navy)"; e.currentTarget.style.background="var(--madel-bg)"; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor="var(--madel-border)"; e.currentTarget.style.background="#fff"; }}>
                          ✏️ Modifier
                        </button>
                        <button onClick={() => setAction({ type:"remplacer", contrat:ct })} title="Remplacer" style={{ padding:"8px 12px", borderRadius:8, border:"1.5px solid var(--madel-border)", background:"#fff", color:"var(--madel-navy)", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:11, fontWeight:600, transition:"all .15s" }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor="#D97706"; e.currentTarget.style.background="#FFFBEB"; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor="var(--madel-border)"; e.currentTarget.style.background="#fff"; }}>
                          🔄 Remplacer
                        </button>
                        <button onClick={() => setAction({ type:"resilier", contrat:ct })} title="Résilier" style={{ padding:"8px 12px", borderRadius:8, border:"1.5px solid #FCA5A5", background:"#FEF2F2", color:"#DC2626", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:11, fontWeight:600, transition:"all .15s" }}
                          onMouseEnter={e => { e.currentTarget.style.background="#FEE2E2"; }}
                          onMouseLeave={e => { e.currentTarget.style.background="#FEF2F2"; }}>
                          🚫 Résilier
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Détails */}
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

          {/* Résiliés */}
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
                          Résilié{ct.dateFin?` le ${new Date(ct.dateFin).toLocaleDateString("fr-FR")}`:""}{ct.motifResiliation?` · ${ct.motifResiliation}`:""}
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
