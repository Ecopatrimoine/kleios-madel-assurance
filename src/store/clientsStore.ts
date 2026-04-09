// ============================================================
// STORE CLIENTS — Zustand
// Kleios Madel Assurance · BTS Assurance
// ============================================================
import { create } from "zustand";
import { CLIENTS_DEMO } from "../data/clients-demo";
import type { ClientDemo, ContratDemo, StatutContrat } from "../data/types-clients";

interface ClientsState {
  clients: ClientDemo[];
  clientActif: ClientDemo | null; // "Qui suis-je?"

  // Lecture
  getClient: (id: string) => ClientDemo | undefined;
  getProspects: () => ClientDemo[];
  getClientsActifs: () => ClientDemo[];

  // Mutations client
  setClientActif: (id: string | null) => void;
  pickRandom: () => ClientDemo;

  // Contrats
  addContrat: (clientId: string, contrat: ContratDemo) => void;
  updateContrat: (clientId: string, contratId: string, changes: Partial<ContratDemo>) => void;
  resilierContrat: (clientId: string, contratId: string, motif: string) => void;
  remplacerContrat: (clientId: string, ancienId: string, nouveau: ContratDemo) => void;

  // Reset
  reset: () => void;
}

// Deep clone du state initial
const cloneInitial = (): ClientDemo[] =>
  JSON.parse(JSON.stringify(CLIENTS_DEMO));

const newContratId = () => `C-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

export const useClientsStore = create<ClientsState>((set, get) => ({
  clients: cloneInitial(),
  clientActif: null,

  getClient: (id) => get().clients.find(c => c.id === id),
  getProspects: () => get().clients.filter(c => c.statut === "prospect"),
  getClientsActifs: () => get().clients.filter(c => ["client_actif", "vip"].includes(c.statut)),

  setClientActif: (id) => set(s => ({
    clientActif: id ? s.clients.find(c => c.id === id) ?? null : null,
  })),

  pickRandom: () => {
    const actifs = get().clients.filter(c =>
      ["prospect", "client_actif", "vip"].includes(c.statut)
    );
    const client = actifs[Math.floor(Math.random() * actifs.length)];
    set({ clientActif: client });
    return client;
  },

  addContrat: (clientId, contrat) => set(s => ({
    clients: s.clients.map(c =>
      c.id !== clientId ? c : {
        ...c,
        statut: c.statut === "prospect" ? "client_actif" : c.statut,
        contrats: [...c.contrats, { ...contrat, id: newContratId() }],
      }
    ),
    clientActif: s.clientActif?.id === clientId
      ? { ...s.clientActif, statut: s.clientActif.statut === "prospect" ? "client_actif" : s.clientActif.statut, contrats: [...s.clientActif.contrats, { ...contrat, id: newContratId() }] }
      : s.clientActif,
  })),

  updateContrat: (clientId, contratId, changes) => set(s => ({
    clients: s.clients.map(c =>
      c.id !== clientId ? c : {
        ...c,
        contrats: c.contrats.map(ct => ct.id !== contratId ? ct : { ...ct, ...changes }),
      }
    ),
  })),

  resilierContrat: (clientId, contratId, motif) => set(s => ({
    clients: s.clients.map(c =>
      c.id !== clientId ? c : {
        ...c,
        contrats: c.contrats.map(ct =>
          ct.id !== contratId ? ct : {
            ...ct,
            statut: "resilie" as StatutContrat,
            motifResiliation: motif,
            dateFin: new Date().toISOString().split("T")[0],
          }
        ),
      }
    ),
  })),

  remplacerContrat: (clientId, ancienId, nouveau) => set(s => ({
    clients: s.clients.map(c =>
      c.id !== clientId ? c : {
        ...c,
        contrats: [
          ...c.contrats.map(ct =>
            ct.id !== ancienId ? ct : {
              ...ct,
              statut: "resilie" as StatutContrat,
              dateFin: new Date().toISOString().split("T")[0],
              motifResiliation: "Remplacement par nouveau contrat",
            }
          ),
          { ...nouveau, id: newContratId() },
        ],
      }
    ),
  })),

  reset: () => set({ clients: cloneInitial(), clientActif: null }),
}));
