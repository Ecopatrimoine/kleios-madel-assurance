// ============================================================
// CLIENTS DEMO — 200 clients fictifs
// Kleios Madel Assurance · BTS Assurance
// Données purement fictives à but pédagogique
// ============================================================
import type { ClientDemo, ContratDemo } from "./types-clients";

// ── Pools de noms ─────────────────────────────────────────────
const PRENOMS_F = ["Marie","Sophie","Isabelle","Claire","Nathalie","Céline","Julie","Aurélie","Sandrine","Virginie","Camille","Lucie","Manon","Emma","Léa","Chloé","Laura","Émilie","Valérie","Christine","Sylvie","Martine","Monique","Françoise","Brigitte","Fatima","Amina","Samira","Laure","Charlotte","Anaïs","Élise","Pauline","Marine","Alice"];
const PRENOMS_M = ["Jean","Pierre","Paul","Michel","Philippe","François","Christophe","Nicolas","Laurent","Thierry","Sébastien","Alexandre","Julien","Thomas","Antoine","Mathieu","Romain","Lucas","Hugo","Louis","Bernard","Alain","Patrick","Daniel","Claude","Karim","Mohamed","Youssef","Mehdi","Sébastien","Vincent","Olivier","Frédéric","Éric","Denis"];
const NOMS = ["Martin","Bernard","Dubois","Thomas","Robert","Richard","Petit","Durand","Leroy","Moreau","Simon","Laurent","Lefebvre","Michel","Garcia","David","Bertrand","Roux","Vincent","Fournier","Morel","Girard","André","Lefèvre","Mercier","Dupont","Lambert","Bonnet","François","Martinez","Legrand","Garnier","Faure","Rousseau","Blanc","Guérin","Muller","Henry","Roussel","Nicolas","Perrin","Morin","Mathieu","Clément","Gauthier","Benali","Touati","Hamid","Bouvier","Leclerc"];

const VILLES: { ville: string; cp: string; region: string }[] = [
  { ville: "Marseille", cp: "13001", region: "PACA" },
  { ville: "Marseille", cp: "13008", region: "PACA" },
  { ville: "Aix-en-Provence", cp: "13100", region: "PACA" },
  { ville: "Toulon", cp: "83000", region: "PACA" },
  { ville: "Nice", cp: "06000", region: "PACA" },
  { ville: "Toulouse", cp: "31000", region: "Occitanie" },
  { ville: "Montpellier", cp: "34000", region: "Occitanie" },
  { ville: "Nîmes", cp: "30000", region: "Occitanie" },
  { ville: "Lyon", cp: "69001", region: "AURA" },
  { ville: "Grenoble", cp: "38000", region: "AURA" },
  { ville: "Bordeaux", cp: "33000", region: "Nouvelle-Aquitaine" },
  { ville: "Nantes", cp: "44000", region: "Pays de la Loire" },
  { ville: "Strasbourg", cp: "67000", region: "Grand Est" },
  { ville: "Lille", cp: "59000", region: "Hauts-de-France" },
  { ville: "Rennes", cp: "35000", region: "Bretagne" },
  { ville: "Paris 15e", cp: "75015", region: "Île-de-France" },
  { ville: "Paris 19e", cp: "75019", region: "Île-de-France" },
  { ville: "Versailles", cp: "78000", region: "Île-de-France" },
  { ville: "Nanterre", cp: "92000", region: "Île-de-France" },
  { ville: "Dijon", cp: "21000", region: "Bourgogne" },
];

const RUES = ["rue des Lilas","avenue Jean Jaurès","boulevard Michelet","impasse des Roses","chemin de la Fontaine","rue Victor Hugo","avenue du Général de Gaulle","rue de la Paix","allée des Mimosas","boulevard du Maréchal Foch","rue Gambetta","avenue Thiers","place de la République","rue du Moulin","avenue des Fleurs","rue Pasteur","cité des Acacias","impasse du Moulin","rue Nationale","avenue Carnot"];

const PROFESSIONS: Record<string, string[]> = {
  cadre:        ["Directeur commercial","Responsable RH","Ingénieur informatique","Chef de projet","Manager marketing","Responsable financier","Directeur technique","Architecte logiciel"],
  non_cadre:    ["Technicien maintenance","Comptable","Assistant(e) administratif(ve)","Secrétaire","Infirmier(e)","Commercial(e)","Ouvrier qualifié","Électricien"],
  tns:          ["Plombier","Électricien artisan","Menuisier","Coiffeur(se)","Auto-entrepreneur conseil","Artisan maçon","Restaurateur","Commerçant"],
  liberal:      ["Médecin généraliste","Avocat(e)","Expert-comptable","Architecte","Kinésithérapeute","Chirurgien-dentiste","Notaire","Psychologue"],
  fonctionnaire:["Enseignant(e)","Agent territorial","Policier(ère)","Infirmier(ère) hospitalier(ère)","Cadre de la fonction publique","Gendarme","Employé(e) de mairie"],
  retraite:     ["Retraité(e) cadre","Retraité(e) fonctionnaire","Retraité(e) commerçant","Ancien artisan","Ancienne infirmière","Ancien ingénieur"],
  etudiant:     ["Étudiant(e) BTS","Étudiant(e) licence","Apprenti(e)","Master 2"],
};

const VOITURES = [
  { marque: "Renault", modele: "Clio", annee: 2021, immat: "AB-123-CD" },
  { marque: "Peugeot", modele: "208", annee: 2022, immat: "EF-456-GH" },
  { marque: "Citroën", modele: "C3", annee: 2020, immat: "IJ-789-KL" },
  { marque: "Volkswagen", modele: "Golf", annee: 2021, immat: "MN-012-OP" },
  { marque: "Toyota", modele: "Yaris", annee: 2023, immat: "QR-345-ST" },
  { marque: "Ford", modele: "Fiesta", annee: 2019, immat: "UV-678-WX" },
  { marque: "Renault", modele: "Megane", annee: 2022, immat: "YZ-901-AB" },
  { marque: "Peugeot", modele: "3008", annee: 2023, immat: "CD-234-EF" },
  { marque: "BMW", modele: "Série 1", annee: 2022, immat: "GH-567-IJ" },
  { marque: "Mercedes", modele: "Classe A", annee: 2021, immat: "KL-890-MN" },
  { marque: "Dacia", modele: "Sandero", annee: 2020, immat: "OP-123-QR" },
  { marque: "Toyota", modele: "Corolla", annee: 2023, immat: "ST-456-UV" },
  { marque: "Renault", modele: "Captur", annee: 2022, immat: "WX-789-YZ" },
  { marque: "Citroën", modele: "C5 Aircross", annee: 2021, immat: "AB-012-CD" },
  { marque: "Audi", modele: "A3", annee: 2022, immat: "EF-345-GH" },
];

const MOTOS = [
  { marque: "Honda", modele: "CB500F", annee: 2021, immat: "MO-123-TO" },
  { marque: "Yamaha", modele: "MT-07", annee: 2022, immat: "MO-456-TO" },
  { marque: "Kawasaki", modele: "Z650", annee: 2020, immat: "MO-789-TO" },
  { marque: "BMW", modele: "F850GS", annee: 2023, immat: "MO-012-TO" },
];

const FORMULES_AUTO = [
  { nom: "Tiers Économique", prime: 420 },
  { nom: "Tiers Standard", prime: 580 },
  { nom: "Tiers Confort", prime: 720 },
  { nom: "Tous Risques Économique", prime: 890 },
  { nom: "Tous Risques Standard", prime: 1100 },
  { nom: "Tous Risques Premium", prime: 1380 },
];

const FORMULES_MRH = [
  { nom: "Locataire Essentiel", statut: "locataire", prime: 180 },
  { nom: "Locataire Confort", statut: "locataire", prime: 280 },
  { nom: "Locataire Premium", statut: "locataire", prime: 420 },
  { nom: "Propriétaire Essentiel", statut: "proprietaire", prime: 380 },
  { nom: "Propriétaire Confort", statut: "proprietaire", prime: 520 },
  { nom: "Propriétaire Premium", statut: "proprietaire", prime: 720 },
];

const FORMULES_SANTE = [
  { nom: "Tête 1 + Corps 1", prime: 420 },
  { nom: "Tête 1 + Corps 2", prime: 550 },
  { nom: "Tête 2 + Corps 1", prime: 580 },
  { nom: "Tête 2 + Corps 2", prime: 720 },
  { nom: "Tête 2 + Corps 3", prime: 880 },
  { nom: "Tête 3 + Corps 2", prime: 920 },
  { nom: "Tête 3 + Corps 3", prime: 1150 },
];

// ── Générateur déterministe ───────────────────────────────────
let seed = 42;
const rng = () => { seed = (seed * 1664525 + 1013904223) & 0x7fffffff; return seed / 0x7fffffff; };
const pick = <T>(arr: T[]): T => arr[Math.floor(rng() * arr.length)];
const pickN = <T>(arr: T[], n: number): T[] => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n); };
const randInt = (min: number, max: number) => Math.floor(rng() * (max - min + 1)) + min;
const randDate = (yearMin: number, yearMax: number) => {
  const y = randInt(yearMin, yearMax);
  const m = String(randInt(1, 12)).padStart(2, "0");
  const d = String(randInt(1, 28)).padStart(2, "0");
  return `${y}-${m}-${d}`;
};
const randDateRecent = () => {
  const y = randInt(2020, 2024);
  const m = String(randInt(1, 12)).padStart(2, "0");
  const d = String(randInt(1, 28)).padStart(2, "0");
  return `${y}-${m}-${d}`;
};
let ctrId = 0;
const newId = (prefix: string) => `${prefix}-${String(++ctrId).padStart(4, "0")}`;

// ── Factories contrats ────────────────────────────────────────
const makeAuto = (): ContratDemo => {
  const voiture = pick(VOITURES);
  const formule = pick(FORMULES_AUTO);
  const bonus = [0.50, 0.55, 0.60, 0.65, 0.72, 0.80, 0.85, 0.90, 0.95, 1.00, 1.25][randInt(0, 10)];
  return {
    id: newId("C"), type: "auto", produit: formule.nom, compagnie: "Madel Assurances",
    numeroContrat: `AUTO-${randInt(2020, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDateRecent(), primeAnnuelle: Math.round(formule.prime * bonus * (0.9 + rng() * 0.2)),
    details: { marque: voiture.marque, modele: voiture.modele, annee: voiture.annee, immatriculation: `${voiture.immat.slice(0, 2)}-${randInt(100, 999)}-${voiture.immat.slice(-2)}`, bonus, formule: formule.nom },
  };
};

const makeMoto = (): ContratDemo => {
  const moto = pick(MOTOS);
  const prime = randInt(380, 980);
  return {
    id: newId("C"), type: "moto", produit: pick(["Tiers Moto","Tous Risques Moto","Tous Risques Premium Moto"]),
    compagnie: "Madel Assurances", numeroContrat: `MOTO-${randInt(2020, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDateRecent(), primeAnnuelle: prime,
    details: { marque: moto.marque, modele: moto.modele, annee: moto.annee, immatriculation: `MO-${randInt(100, 999)}-TO`, categoriePermis: pick(["A","A2","A1"]) },
  };
};

const makeMRH = (): ContratDemo => {
  const f = pick(FORMULES_MRH);
  const surface = randInt(35, 180);
  return {
    id: newId("C"), type: "mrh", produit: f.nom, compagnie: "Madel Assurances",
    numeroContrat: `MRH-${randInt(2020, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDateRecent(), primeAnnuelle: Math.round(f.prime * (0.85 + rng() * 0.3)),
    details: { statut: f.statut, surface, typeLogement: pick(["appartement","maison","studio"]), zoneGeo: pick(["zone1","zone2","zone3","zone4"]), alarme: rng() > 0.5 },
  };
};

const makeGAV = (formule?: string): ContratDemo => {
  const f = formule ?? pick(["Seul","Couple","Famille"]);
  const primes: Record<string, number> = { Seul: 148, Couple: 206, Famille: 258 };
  return {
    id: newId("C"), type: "gav", produit: `GAV ${f}`,
    compagnie: "Madel Assurances", numeroContrat: `GAV-${randInt(2020, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDateRecent(), primeAnnuelle: primes[f] + randInt(-20, 40),
    details: { formule: f, options: pickN(["itt","accidents_medicaux","protection_conducteur"], randInt(0, 2)) },
  };
};

const makeScolaire = (nbEnfants: number): ContratDemo => {
  const formule = pick(["Essentielle","Confort","Intégrale"]);
  const primes: Record<string, number> = { Essentielle: 28, Confort: 48, Intégrale: 68 };
  return {
    id: newId("C"), type: "scolaire", produit: `Scolaire ${formule}`,
    compagnie: "Madel Assurances", numeroContrat: `SCO-${randInt(2020, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDateRecent(), primeAnnuelle: Math.round(primes[formule] * (nbEnfants <= 1 ? 1 : 1.8)),
    details: { formule, nbEnfants },
  };
};

const makeDeces = (): ContratDemo => {
  const capital = pick([100000, 150000, 200000, 300000, 500000]);
  const age = randInt(28, 62);
  const taux = age < 35 ? 0.0010 : age < 45 ? 0.0020 : age < 55 ? 0.0040 : 0.0080;
  return {
    id: newId("C"), type: "deces", produit: pick(["Capital Décès Essentiel","Capital Décès Confort","Capital Décès Premium"]),
    compagnie: "Madel Assurances", numeroContrat: `DEC-${randInt(2020, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDateRecent(), primeAnnuelle: Math.round(capital * taux * 1.09),
    details: { capital, agesouscription: age, beneficiaires: pick(["Conjoint","Enfants","Désignés au contrat"]) },
  };
};

const makeIJ = (csp: string): ContratDemo => {
  const regime = csp === "tns" || csp === "liberal" ? pick(["TNS Artisan/Commerçant","CIPAV","Micro-entrepreneur"]) : "Salarié";
  const franchise = pick([30, 60, 90, 180]);
  const ijJour = randInt(40, 150);
  return {
    id: newId("C"), type: "ij", produit: `Prévoyance IJ ${regime}`,
    compagnie: "Madel Assurances", numeroContrat: `IJ-${randInt(2020, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDateRecent(), primeAnnuelle: Math.round(ijJour * 365 * 0.025 * (franchise === 30 ? 1.4 : franchise === 60 ? 1.0 : franchise === 90 ? 0.75 : 0.5) * 1.09),
    details: { regime, ijJourSouhaitee: ijJour, franchise },
  };
};

const makeDependance = (): ContratDemo => {
  const age = randInt(50, 70);
  const rente = pick([500, 800, 1000, 1500, 2000]);
  const formule = pick(["Totale","Intégrale"]);
  const taux = age < 55 ? 2.42 : age < 60 ? 3.80 : age < 65 ? 6.12 : age < 70 ? 8.98 : 12.0;
  return {
    id: newId("C"), type: "dependance", produit: `Dépendance AVQ ${formule}`,
    compagnie: "Madel Assurances", numeroContrat: `DEP-${randInt(2018, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDate(2018, 2024), primeAnnuelle: Math.round((rente / 100) * taux * (formule === "Intégrale" ? 1.35 : 1) * 1.09 * 12),
    details: { agesouscription: age, renteMensuelle: rente, formule, revalorisation: rng() > 0.3 },
  };
};

const makeSante = (): ContratDemo => {
  const f = pick(FORMULES_SANTE);
  return {
    id: newId("C"), type: "sante", produit: `Santé ${f.nom}`,
    compagnie: "Mutuelle Ociane Madel", numeroContrat: `SAN-${randInt(2020, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDateRecent(), primeAnnuelle: Math.round(f.prime * (0.9 + rng() * 0.2)),
    details: { formule: f.nom },
  };
};

const makeEmprunteur = (): ContratDemo => {
  const capital = pick([120000, 180000, 220000, 280000, 350000, 420000]);
  const duree = pick([15, 20, 25]);
  const age = randInt(28, 52);
  const taux = age < 35 ? 0.0010 : age < 45 ? 0.0020 : 0.0035;
  return {
    id: newId("C"), type: "emprunteur", produit: pick(["Emprunteur Standard","Emprunteur Confort","Emprunteur Premium"]),
    compagnie: "Madel Assurances", numeroContrat: `EMP-${randInt(2018, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDate(2018, 2024), primeAnnuelle: Math.round(capital * taux * 12),
    details: { capitalEmprunte: capital, dureeAns: duree, tauxPret: pick([2.8, 3.2, 3.5, 3.8, 4.1]), quotite: pick(["100%","50/50","100/100"]) },
  };
};

const makeRCPro = (): ContratDemo => {
  const secteur = pick(["Conseil & Informatique","Commerce & Distribution","Artisan BTP","Profession libérale","Restauration & Hôtellerie","Industrie & Fabrication"]);
  const ca = pick([50000, 80000, 120000, 200000, 350000, 500000]);
  return {
    id: newId("C"), type: "rcpro", produit: `RC Pro ${secteur}`,
    compagnie: "Madel Assurances", numeroContrat: `RCP-${randInt(2020, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDateRecent(), primeAnnuelle: randInt(350, 1800),
    details: { secteur, ca, effectif: randInt(0, 15), plafond: 2000000 },
  };
};

const makeMRP = (): ContratDemo => {
  const surface = randInt(30, 300);
  const ca = pick([80000, 150000, 300000, 500000]);
  return {
    id: newId("C"), type: "mrp", produit: pick(["MRP Essentiel","MRP Confort","MRP Premium","MRP Artisan","MRP Commerce"]),
    compagnie: "Madel Assurances", numeroContrat: `MRP-${randInt(2020, 2024)}-${randInt(1000, 9999)}`,
    statut: "actif", dateDebut: randDateRecent(), primeAnnuelle: randInt(420, 2200),
    details: { surface, ca, statut: pick(["locataire","proprietaire"]), activite: pick(["bureau","commerce","artisan","restauration","industrie"]) },
  };
};

// ── Factory client ────────────────────────────────────────────
const makeClient = (id: string, statut: "prospect" | "client_actif" | "vip" | "archive", contrats: ContratDemo[], opts: Partial<{ csp: string; age: number; situation: string; nbEnfants: number; genre: "M" | "F" }> = {}): ClientDemo => {
  const genre = opts.genre ?? (rng() > 0.5 ? "M" : "F");
  const prenom = genre === "F" ? pick(PRENOMS_F) : pick(PRENOMS_M);
  const nom = pick(NOMS).toUpperCase();
  const age = opts.age ?? randInt(22, 75);
  const anneeNaissance = 2025 - age;
  const loc = pick(VILLES);
  const csp = (opts.csp as ClientDemo["csp"]) ?? pick(["cadre","non_cadre","tns","liberal","fonctionnaire","retraite","etudiant"] as ClientDemo["csp"][]);
  const situation = (opts.situation as ClientDemo["situationFamiliale"]) ?? pick(["celibataire","marie","pacse","divorce","veuf","concubinage"] as ClientDemo["situationFamiliale"][]);
  const nbEnfants = opts.nbEnfants ?? (["marie","pacse","concubinage"].includes(situation) && age > 28 && age < 58 ? randInt(0, 3) : situation === "divorce" ? randInt(0, 2) : 0);

  const conjoint = ["marie","pacse","concubinage"].includes(situation) ? {
    prenom: genre === "F" ? pick(PRENOMS_M) : pick(PRENOMS_F),
    nom,
    dateNaissance: `${anneeNaissance + randInt(-5, 5)}-${String(randInt(1,12)).padStart(2,"0")}-${String(randInt(1,28)).padStart(2,"0")}`,
    csp: pick(["cadre","non_cadre","fonctionnaire","tns","retraite"] as ClientDemo["csp"][]),
  } : undefined;

  const enfants = Array.from({ length: nbEnfants }, (_) => ({
    prenom: pick([...PRENOMS_F, ...PRENOMS_M]),
    dateNaissance: `${anneeNaissance + randInt(22, 35)}-${String(randInt(1,12)).padStart(2,"0")}-${String(randInt(1,28)).padStart(2,"0")}`,
  }));

  const profs = PROFESSIONS[csp] ?? PROFESSIONS.cadre;
  const revenuBase: Record<string, [number, number]> = {
    cadre: [38000, 85000], non_cadre: [22000, 40000], tns: [25000, 70000],
    liberal: [45000, 120000], fonctionnaire: [25000, 55000], retraite: [18000, 42000], etudiant: [8000, 18000],
  };
  const [rMin, rMax] = revenuBase[csp] ?? [25000, 50000];

  return {
    id,
    nom, prenom,
    dateNaissance: `${anneeNaissance}-${String(randInt(1,12)).padStart(2,"0")}-${String(randInt(1,28)).padStart(2,"0")}`,
    email: `${prenom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(" ","-")}.${nom.toLowerCase()}@${pick(["gmail.com","orange.fr","free.fr","sfr.fr","laposte.net","hotmail.fr"])}`,
    telephone: `0${pick([6,6,6,6,7])} ${Array.from({length:4},()=>String(randInt(10,99))).join(" ")}`,
    adresse: `${randInt(1, 180)} ${pick(RUES)}`,
    codePostal: loc.cp,
    ville: loc.ville,
    situationFamiliale: situation as ClientDemo["situationFamiliale"],
    nbEnfants,
    enfants,
    conjoint,
    csp,
    profession: pick(profs),
    revenuAnnuel: randInt(rMin, rMax),
    statut,
    dateEntree: randDate(2019, 2024),
    contrats,
  };
};

// ── Génération des 200 clients ────────────────────────────────
const generer = (): ClientDemo[] => {
  const clients: ClientDemo[] = [];
  let n = 1;
  const id = () => `CLI-${String(n++).padStart(3, "0")}`;

  // ── 50 PROSPECTS — sans contrat ──────────────────────────────
  for (let i = 0; i < 12; i++) clients.push(makeClient(id(), "prospect", [], { csp: "cadre", age: randInt(25, 45) }));
  for (let i = 0; i < 10; i++) clients.push(makeClient(id(), "prospect", [], { csp: "non_cadre", age: randInt(22, 40) }));
  for (let i = 0; i < 8; i++) clients.push(makeClient(id(), "prospect", [], { csp: "tns", age: randInt(28, 55) }));
  for (let i = 0; i < 7; i++) clients.push(makeClient(id(), "prospect", [], { csp: "liberal", age: randInt(30, 55) }));
  for (let i = 0; i < 7; i++) clients.push(makeClient(id(), "prospect", [], { csp: "fonctionnaire", age: randInt(25, 50) }));
  for (let i = 0; i < 6; i++) clients.push(makeClient(id(), "prospect", [], { csp: "retraite", age: randInt(62, 78) }));

  // ── CLIENTS ACTIFS — profils variés ─────────────────────────

  // Jeunes célibataires (1-2 contrats)
  for (let i = 0; i < 8; i++) clients.push(makeClient(id(), "client_actif", [makeAuto()], { age: randInt(22, 30), situation: "celibataire", nbEnfants: 0 }));
  for (let i = 0; i < 6; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH()], { age: randInt(25, 32), situation: "celibataire", nbEnfants: 0 }));
  for (let i = 0; i < 4; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeGAV("Seul")], { age: randInt(25, 35), situation: "celibataire" }));

  // Couples sans enfants
  for (let i = 0; i < 6; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeGAV("Couple")], { situation: "marie", nbEnfants: 0, age: randInt(28, 40) }));
  for (let i = 0; i < 5; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeAuto(), makeMRH(), makeSante()], { situation: "pacse", nbEnfants: 0, age: randInt(30, 45) }));

  // Familles avec enfants
  for (let i = 0; i < 8; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeGAV("Famille"), makeScolaire(2)], { situation: "marie", nbEnfants: 2, age: randInt(33, 48) }));
  for (let i = 0; i < 6; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeAuto(), makeMRH(), makeGAV("Famille"), makeScolaire(3), makeDeces()], { situation: "marie", nbEnfants: 3, age: randInt(35, 50) }));
  for (let i = 0; i < 4; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeEmprunteur(), makeScolaire(1)], { situation: "marie", nbEnfants: 1, age: randInt(30, 45) }));

  // Parents isolés / divorcés
  for (let i = 0; i < 6; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeScolaire(1), makeGAV("Seul")], { situation: "divorce", nbEnfants: randInt(1, 2), age: randInt(32, 48) }));
  for (let i = 0; i < 4; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeIJ("non_cadre")], { situation: "celibataire", csp: "non_cadre", age: randInt(30, 50) }));

  // TNS avec assurances pro
  for (let i = 0; i < 8; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeIJ("tns"), makeRCPro()], { csp: "tns", age: randInt(28, 55) }));
  for (let i = 0; i < 6; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeIJ("tns"), makeRCPro(), makeMRP()], { csp: "tns", age: randInt(30, 52) }));
  for (let i = 0; i < 4; i++) clients.push(makeClient(id(), "client_actif", [makeMoto(), makeMRH(), makeIJ("tns"), makeRCPro()], { csp: "tns", age: randInt(25, 45) }));

  // Professions libérales
  for (let i = 0; i < 6; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeIJ("liberal"), makeRCPro(), makeSante(), makeDeces()], { csp: "liberal", age: randInt(32, 58) }));
  for (let i = 0; i < 4; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeRCPro(), makeEmprunteur()], { csp: "liberal", age: randInt(30, 50) }));

  // Fonctionnaires
  for (let i = 0; i < 6; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeSante()], { csp: "fonctionnaire", age: randInt(28, 55) }));
  for (let i = 0; i < 4; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeSante(), makeEmprunteur(), makeScolaire(2)], { csp: "fonctionnaire", situation: "marie", nbEnfants: 2, age: randInt(33, 50) }));

  // Retraités
  for (let i = 0; i < 8; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeSante(), makeDependance()], { csp: "retraite", age: randInt(62, 78) }));
  for (let i = 0; i < 5; i++) clients.push(makeClient(id(), "client_actif", [makeAuto(), makeMRH(), makeSante(), makeDependance(), makeDeces()], { csp: "retraite", age: randInt(65, 80) }));

  // Motards
  for (let i = 0; i < 4; i++) clients.push(makeClient(id(), "client_actif", [makeMoto(), makeAuto(), makeMRH(), makeGAV("Seul")], { age: randInt(22, 45) }));

  // ── VIP — portefeuilles complets ─────────────────────────────
  for (let i = 0; i < 8; i++) clients.push(makeClient(id(), "vip", [makeAuto(), makeAuto(), makeMRH(), makeGAV("Famille"), makeSante(), makeDeces(), makeEmprunteur(), makeScolaire(2)], { situation: "marie", nbEnfants: 2, age: randInt(38, 55) }));
  for (let i = 0; i < 6; i++) clients.push(makeClient(id(), "vip", [makeAuto(), makeMRH(), makeIJ("liberal"), makeRCPro(), makeSante(), makeDeces(), makeDependance(), makeEmprunteur()], { csp: "liberal", age: randInt(42, 60) }));
  for (let i = 0; i < 4; i++) clients.push(makeClient(id(), "vip", [makeAuto(), makeAuto(), makeMRH(), makeIJ("tns"), makeRCPro(), makeMRP(), makeSante()], { csp: "tns", situation: "marie", age: randInt(35, 55) }));
  for (let i = 0; i < 2; i++) clients.push(makeClient(id(), "vip", [makeAuto(), makeMRH(), makeSante(), makeDependance(), makeDeces(), makeEmprunteur()], { csp: "retraite", age: randInt(62, 72) }));

  // ── ARCHIVÉS ─────────────────────────────────────────────────
  for (let i = 0; i < 10; i++) {
    const c = makeClient(id(), "archive", [{ ...makeAuto(), statut: "resilie", motifResiliation: pick(["Vente du véhicule","Changement d'assureur","Déménagement à l'étranger"]) }], { age: randInt(25, 60) });
    clients.push(c);
  }

  return clients;
};

export const CLIENTS_DEMO: ClientDemo[] = generer();

// Vérifie qu'on a au moins 200 clients
if (CLIENTS_DEMO.length < 200) {
  console.warn(`[Demo] Seulement ${CLIENTS_DEMO.length} clients générés`);
}
