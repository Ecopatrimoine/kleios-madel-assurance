import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useClientsStore } from "../store/clientsStore";
import { TYPE_LABELS, STATUT_LABELS } from "../data/types-clients";
import type { TypeContrat, ContratDemo } from "../data/types-clients";

const eur = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const eurDec = (n: number) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
const TYPES: TypeContrat[] = ["auto","moto","mrh","gav","scolaire","deces","ij","dependance","sante","emprunteur","rcpro","mrp"];
const inputSt: React.CSSProperties = { width:"100%", padding:"8px 10px", borderRadius:8, border:"1.5px solid var(--madel-border)", fontSize:12, fontFamily:"var(--madel-font)", color:"var(--madel-navy)", background:"#fff", outline:"none", boxSizing:"border-box" };

function ModalSouscription({ clientId, onClose }: { clientId: string; onClose: () => void }) {
  const { addContrat } = useClientsStore();
  const [type, setType] = useState<TypeContrat>("auto");
  const [produit, setProduit] = useState("");
  const [prime, setPrime] = useState(500);
  const submit = () => {
    if (!produit.trim()) return;
    addContrat(clientId, { id:"", type, produit, compagnie:"Madel Assurances", numeroContrat:`${type.toUpperCase()}-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`, statut:"actif", dateDebut:new Date().toISOString().split("T")[0], primeAnnuelle:prime, details:{} });
    onClose();
  };
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.5)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"#fff", borderRadius:16, padding:28, width:500, maxWidth:"90vw", boxShadow:"0 24px 64px rgba(0,0,0,.2)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:20 }}>
          <div style={{ fontSize:16, fontWeight:800, color:"var(--madel-navy)" }}>📝 Nouvelle souscription</div>
          <button onClick={onClose} style={{ border:"none", background:"none", fontSize:20, cursor:"pointer" }}>✕</button>
        </div>
        <label style={{ fontSize:9, fontWeight:700, color:"var(--madel-muted)", textTransform:"uppercase", letterSpacing:".05em", display:"block", marginBottom:6 }}>TYPE DE CONTRAT</label>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:14 }}>
          {TYPES.map(t => {
            const tl = TYPE_LABELS[t];
            return <button key={t} onClick={() => setType(t)} style={{ padding:"8px 4px", borderRadius:8, border:`2px solid ${type===t?"var(--madel-rose)":"var(--madel-border)"}`, background:type===t?"var(--madel-rose-light)":"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:10, color:type===t?"var(--madel-rose-dark)":"var(--madel-navy)" }}><div style={{ fontSize:18 }}>{tl.icone}</div>{tl.label}</button>;
          })}
        </div>
        <label style={{ fontSize:9, fontWeight:700, color:"var(--madel-muted)", textTransform:"uppercase", letterSpacing:".05em", display:"block", marginBottom:6 }}>NOM DU PRODUIT</label>
        <input value={produit} onChange={e => setProduit(e.target.value)} placeholder={`Ex: ${TYPE_LABELS[type].label} Confort`} style={{ ...inputSt, marginBottom:14 }} />
        <label style={{ fontSize:9, fontWeight:700, color:"var(--madel-muted)", textTransform:"uppercase", letterSpacing:".05em", display:"block", marginBottom:6 }}>PRIME ANNUELLE (€)</label>
        <input type="number" value={prime} min={0} onChange={e => setPrime(+e.target.value)} style={{ ...inputSt, marginBottom:20 }} />
        <div style={{ display:"flex", gap:10 }}>
          <button onClick={submit} disabled={!produit.trim()} style={{ flex:1, padding:12, borderRadius:10, border:"none", background:produit.trim()?"var(--madel-rose)":"var(--madel-border)", color:produit.trim()?"#fff":"var(--madel-muted)", cursor:produit.trim()?"pointer":"not-allowed", fontFamily:"var(--madel-font)", fontWeight:700, fontSize:13 }}>✅ Souscrire</button>
          <button onClick={onClose} style={{ padding:"12px 20px", borderRadius:10, border:"1.5px solid var(--madel-border)", background:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)" }}>Annuler</button>
        </div>
      </div>
    </div>
  );
}

function ModalResiliation({ clientId, contrat, onClose }: { clientId: string; contrat: ContratDemo; onClose: () => void }) {
  const { resilierContrat } = useClientsStore();
  const [motif, setMotif] = useState("");
  const MOTIFS = ["Vente du véhicule","Déménagement","Changement d'assureur","Décès de l'assuré","Non-paiement des cotisations","Autre"];
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.5)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"#fff", borderRadius:16, padding:28, width:440, boxShadow:"0 24px 64px rgba(0,0,0,.2)" }}>
        <div style={{ fontSize:16, fontWeight:800, color:"var(--madel-navy)", marginBottom:6 }}>🚫 Résilier le contrat</div>
        <div style={{ fontSize:12, color:"var(--madel-muted)", marginBottom:20 }}>{TYPE_LABELS[contrat.type].icone} {contrat.produit} — {contrat.numeroContrat}</div>
        <label style={{ fontSize:9, fontWeight:700, color:"var(--madel-muted)", textTransform:"uppercase", letterSpacing:".05em", display:"block", marginBottom:6 }}>MOTIF</label>
        <select value={motif} onChange={e => setMotif(e.target.value)} style={{ ...inputSt, marginBottom:20, cursor:"pointer" }}>
          <option value="">Sélectionner...</option>
          {MOTIFS.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <div style={{ display:"flex", gap:10 }}>
          <button onClick={() => { resilierContrat(clientId, contrat.id, motif); onClose(); }} disabled={!motif} style={{ flex:1, padding:12, borderRadius:10, border:"none", background:motif?"#DC2626":"var(--madel-border)", color:motif?"#fff":"var(--madel-muted)", cursor:motif?"pointer":"not-allowed", fontFamily:"var(--madel-font)", fontWeight:700 }}>Confirmer la résiliation</button>
          <button onClick={onClose} style={{ padding:"12px 20px", borderRadius:10, border:"1.5px solid var(--madel-border)", background:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)" }}>Annuler</button>
        </div>
      </div>
    </div>
  );
}

export default function FicheAssure() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getClient, clientActif } = useClientsStore();
  const client = getClient(id ?? "");
  const [showSouscription, setShowSouscription] = useState(false);
  const [contratAResilier, setContratAResilier] = useState<ContratDemo | null>(null);
  const [onglet, setOnglet] = useState<"contrats"|"profil">("contrats");

  if (!client) return (
    <div style={{ padding:48, textAlign:"center", color:"var(--madel-muted)" }}>
      <div style={{ fontSize:48, marginBottom:14 }}>❓</div>
      <div style={{ fontSize:16, fontWeight:700, color:"var(--madel-navy)", marginBottom:8 }}>Client introuvable</div>
      <button onClick={() => navigate("/assures")} style={{ padding:"10px 24px", borderRadius:10, border:"none", background:"var(--madel-rose)", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontWeight:700 }}>← Retour</button>
    </div>
  );

  const contratsActifs = client.contrats.filter(c => c.statut === "actif");
  const contratsResilies = client.contrats.filter(c => c.statut === "resilie");
  const primesAnn = contratsActifs.reduce((s, c) => s + c.primeAnnuelle, 0);
  const age = new Date().getFullYear() - new Date(client.dateNaissance).getFullYear();
  const sl = STATUT_LABELS[client.statut];

  return (
    <div style={{ fontFamily:"var(--madel-font)", color:"var(--madel-navy)", maxWidth:1100, margin:"0 auto", padding:"24px 20px 40px" }}>
      {showSouscription && <ModalSouscription clientId={client.id} onClose={() => setShowSouscription(false)} />}
      {contratAResilier && <ModalResiliation clientId={client.id} contrat={contratAResilier} onClose={() => setContratAResilier(null)} />}

      {clientActif?.id === client.id && (
        <div style={{ marginBottom:16, padding:"10px 16px", borderRadius:10, background:"var(--madel-rose-light)", border:"2px solid var(--madel-rose)", fontSize:12, color:"var(--madel-rose-dark)", fontWeight:700 }}>
          🎲 Vous jouez le rôle de ce client dans la simulation
        </div>
      )}

      {/* Breadcrumb */}
      <div style={{ display:"flex", gap:8, marginBottom:20, fontSize:13, color:"var(--madel-muted)", alignItems:"center" }}>
        <button onClick={() => navigate("/assures")} style={{ border:"none", background:"none", cursor:"pointer", color:"var(--madel-rose)", fontFamily:"var(--madel-font)", fontSize:13, padding:0 }}>👥 Assurés</button>
        <span>›</span>
        <span style={{ color:"var(--madel-navy)", fontWeight:600 }}>{client.prenom} {client.nom}</span>
      </div>

      {/* Header navy */}
      <div style={{ background:"var(--madel-navy)", borderRadius:16, padding:"24px 28px", marginBottom:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:14 }}>
        <div style={{ display:"flex", gap:18, alignItems:"center" }}>
          <div style={{ width:58, height:58, borderRadius:"50%", background:"var(--madel-rose)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, fontWeight:800, color:"#fff", flexShrink:0 }}>{client.prenom[0]}{client.nom[0]}</div>
          <div>
            <div style={{ fontSize:22, fontWeight:800, color:"#fff" }}>{client.prenom} {client.nom}</div>
            <div style={{ fontSize:13, color:"rgba(255,255,255,.65)", marginTop:2 }}>{age} ans · {client.ville} · {client.profession}</div>
            <div style={{ marginTop:8, display:"flex", gap:8, flexWrap:"wrap" }}>
              <span style={{ fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20, background:sl.bg, color:sl.couleur }}>{sl.label}</span>
              <span style={{ fontSize:11, padding:"3px 10px", borderRadius:20, background:"rgba(255,255,255,.12)", color:"rgba(255,255,255,.7)" }}>{contratsActifs.length} contrat{contratsActifs.length!==1?"s":""} actif{contratsActifs.length!==1?"s":""}</span>
            </div>
          </div>
        </div>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          <button onClick={() => navigate(`/simulateurs/auto?assure=${client.id}`)} style={{ padding:"8px 12px", borderRadius:8, border:"none", background:"rgba(255,255,255,.12)", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:11, fontWeight:600 }}>🚗 Auto</button>
          <button onClick={() => navigate(`/simulateurs/mrh?assure=${client.id}`)} style={{ padding:"8px 12px", borderRadius:8, border:"none", background:"rgba(255,255,255,.12)", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:11, fontWeight:600 }}>🏠 MRH</button>
          <button onClick={() => setShowSouscription(true)} style={{ padding:"10px 18px", borderRadius:10, border:"none", background:"var(--madel-rose)", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontWeight:700, fontSize:13 }}>+ Nouveau contrat</button>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10, marginBottom:20 }}>
        {[
          { label:"Contrats actifs", v:String(contratsActifs.length), c:"#16A34A" },
          { label:"Primes/an", v:eur(primesAnn), c:"var(--madel-navy)" },
          { label:"Primes/mois", v:eurDec(primesAnn/12), c:"var(--madel-rose)" },
          { label:"Résiliés", v:String(contratsResilies.length), c:"#6B7280" },
        ].map(k => (
          <div key={k.label} style={{ background:"#fff", borderRadius:12, border:"1px solid var(--madel-border)", padding:"14px 16px" }}>
            <div style={{ fontSize:11, color:"var(--madel-muted)", marginBottom:4 }}>{k.label}</div>
            <div style={{ fontSize:20, fontWeight:800, color:k.c }}>{k.v}</div>
          </div>
        ))}
      </div>

      {/* Onglets */}
      <div style={{ display:"flex", gap:0, marginBottom:16, background:"var(--madel-bg)", borderRadius:10, padding:4, border:"1px solid var(--madel-border)" }}>
        {[{k:"contrats",l:"📄 Contrats"},{k:"profil",l:"👤 Profil"}].map(t => (
          <button key={t.k} onClick={() => setOnglet(t.k as "contrats"|"profil")} style={{ flex:1, padding:"10px", borderRadius:8, border:"none", background:onglet===t.k?"#fff":"transparent", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:12, fontWeight:onglet===t.k?700:400, color:onglet===t.k?"var(--madel-navy)":"var(--madel-muted)" }}>{t.l}</button>
        ))}
      </div>

      {/* CONTRATS */}
      {onglet === "contrats" && (
        <div>
          {contratsActifs.length === 0 && (
            <div style={{ background:"#fff", borderRadius:14, border:"2px dashed var(--madel-border)", padding:"48px", textAlign:"center", marginBottom:14 }}>
              <div style={{ fontSize:40, marginBottom:12 }}>📋</div>
              <div style={{ fontSize:15, fontWeight:700, marginBottom:8, color:"var(--madel-navy)" }}>Aucun contrat actif</div>
              <div style={{ fontSize:13, color:"var(--madel-muted)", marginBottom:20 }}>{client.statut==="prospect"?"Ce prospect n'a pas encore souscrit de contrat.":"Tous les contrats ont été résiliés."}</div>
              <button onClick={() => setShowSouscription(true)} style={{ padding:"12px 28px", borderRadius:10, border:"none", background:"var(--madel-rose)", color:"#fff", cursor:"pointer", fontFamily:"var(--madel-font)", fontWeight:700 }}>+ Souscrire un contrat</button>
            </div>
          )}
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {contratsActifs.map(ct => {
              const tl = TYPE_LABELS[ct.type];
              return (
                <div key={ct.id} style={{ background:"#fff", borderRadius:14, border:"1px solid var(--madel-border)", overflow:"hidden" }}>
                  <div style={{ padding:"16px 20px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
                    <div style={{ display:"flex", gap:14, alignItems:"center" }}>
                      <div style={{ width:46, height:46, borderRadius:12, background:`${tl.couleur}18`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{tl.icone}</div>
                      <div>
                        <div style={{ fontWeight:700, fontSize:14 }}>{ct.produit}</div>
                        <div style={{ fontSize:11, color:"var(--madel-muted)", marginTop:2 }}>{ct.numeroContrat} · {ct.compagnie} · Depuis {new Date(ct.dateDebut).toLocaleDateString("fr-FR")}</div>
                      </div>
                    </div>
                    <div style={{ display:"flex", gap:14, alignItems:"center" }}>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontWeight:800, fontSize:16, fontFamily:"monospace" }}>{eur(ct.primeAnnuelle)}/an</div>
                        <div style={{ fontSize:11, color:"var(--madel-muted)" }}>{eurDec(ct.primeAnnuelle/12)}/mois</div>
                      </div>
                      <button onClick={() => setContratAResilier(ct)} style={{ padding:"8px 14px", borderRadius:8, border:"1.5px solid #FCA5A5", background:"#FEF2F2", color:"#DC2626", cursor:"pointer", fontFamily:"var(--madel-font)", fontSize:11, fontWeight:600 }}>Résilier</button>
                    </div>
                  </div>
                  {Object.keys(ct.details).length > 0 && (
                    <div style={{ padding:"8px 20px 12px", borderTop:"1px solid var(--madel-border)", background:"var(--madel-bg)", display:"flex", gap:18, flexWrap:"wrap" }}>
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
          {contratsResilies.length > 0 && (
            <div style={{ marginTop:20 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"var(--madel-muted)", marginBottom:8 }}>📦 Résiliés ({contratsResilies.length})</div>
              {contratsResilies.map(ct => (
                <div key={ct.id} style={{ background:"var(--madel-bg)", borderRadius:10, border:"1px solid var(--madel-border)", padding:"10px 16px", display:"flex", justifyContent:"space-between", opacity:0.7, marginBottom:6 }}>
                  <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                    <span style={{ fontSize:18 }}>{TYPE_LABELS[ct.type].icone}</span>
                    <div>
                      <div style={{ fontSize:12, fontWeight:600 }}>{ct.produit}</div>
                      <div style={{ fontSize:10, color:"var(--madel-muted)" }}>{ct.dateFin?`Résilié le ${new Date(ct.dateFin).toLocaleDateString("fr-FR")}`:"Résilié"}{ct.motifResiliation?` · ${ct.motifResiliation}`:""}</div>
                    </div>
                  </div>
                  <span style={{ fontSize:11, fontFamily:"monospace", color:"var(--madel-muted)" }}>{eur(ct.primeAnnuelle)}/an</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* PROFIL */}
      {onglet === "profil" && (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            <ProfilCard titre="🪪 Identité">
              {[
                ["Nom complet", `${client.prenom} ${client.nom}`],
                ["Date de naissance", `${new Date(client.dateNaissance).toLocaleDateString("fr-FR")} (${age} ans)`],
                ["Email", client.email],
                ["Téléphone", client.telephone],
                ["Adresse", `${client.adresse}, ${client.codePostal} ${client.ville}`],
              ].map(([l,v]) => <ProfilRow key={l} label={l} valeur={v} />)}
            </ProfilCard>
            <ProfilCard titre="💼 Professionnel">
              {[
                ["Profession", client.profession],
                ["CSP", {cadre:"Cadre",non_cadre:"Non-cadre",tns:"TNS",liberal:"Libéral",fonctionnaire:"Fonctionnaire",retraite:"Retraité",etudiant:"Étudiant"}[client.csp]??client.csp],
                ["Revenu annuel", eur(client.revenuAnnuel)],
              ].map(([l,v]) => <ProfilRow key={l} label={l} valeur={String(v)} />)}
            </ProfilCard>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            <ProfilCard titre="👨‍👩‍👧 Famille">
              {[
                ["Situation", client.situationFamiliale.charAt(0).toUpperCase()+client.situationFamiliale.slice(1)],
                ["Enfants", client.nbEnfants===0?"Aucun":`${client.nbEnfants} enfant${client.nbEnfants>1?"s":""}`],
                ...(client.conjoint?[["Conjoint(e)",`${client.conjoint.prenom} ${client.conjoint.nom}`]]:[] as string[][]),
                ...client.enfants.map((e,i) => [`Enfant ${i+1}`,`${e.prenom} — ${new Date(e.dateNaissance).toLocaleDateString("fr-FR")}`] as string[]),
              ].map(([l,v]) => <ProfilRow key={l} label={l} valeur={v} />)}
            </ProfilCard>
            <ProfilCard titre="🏢 Cabinet">
              {[
                ["ID client", client.id],
                ["Statut", STATUT_LABELS[client.statut].label],
                ["Client depuis", new Date(client.dateEntree).toLocaleDateString("fr-FR")],
                ["Portefeuille annuel", eur(primesAnn)],
              ].map(([l,v]) => <ProfilRow key={l} label={l} valeur={v} />)}
            </ProfilCard>
          </div>
        </div>
      )}
    </div>
  );
}

function ProfilCard({ titre, children }: { titre: string; children: React.ReactNode }) {
  return <div style={{ background:"#fff", borderRadius:14, border:"1px solid var(--madel-border)" }}><div style={{ padding:"11px 16px", borderBottom:"1px solid var(--madel-border)", background:"var(--madel-bg)", borderRadius:"14px 14px 0 0", fontSize:12, fontWeight:700 }}>{titre}</div><div style={{ padding:14, display:"flex", flexDirection:"column", gap:6 }}>{children}</div></div>;
}
function ProfilRow({ label, valeur }: { label: string; valeur: string }) {
  return <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, padding:"4px 0", borderBottom:"1px solid var(--madel-border)" }}><span style={{ color:"var(--madel-muted)" }}>{label}</span><span style={{ fontWeight:600, textAlign:"right", maxWidth:"60%" }}>{valeur}</span></div>;
}
