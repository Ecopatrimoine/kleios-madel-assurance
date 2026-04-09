// ============================================================
// BASE DE DONNÉES VÉHICULES — SIMULATEUR AUTO BTS ASSURANCE
// Généré automatiquement — NE PAS MODIFIER MANUELLEMENT
// 468 véhicules · 2919 plaques fictives
// Usage pédagogique uniquement · Données fictives
// ============================================================

export interface VehiculeDB {
  id: string;
  marque: string;
  modele: string;
  version: string;
  annee: number;
  cvFiscaux: number;
  cvDIN: number;
  puissanceKw: number;
  cylindree: number | null;
  carburant: "essence" | "diesel" | "hybride" | "electrique" | "gpl";
  typeVehicule: "citadine" | "berline" | "SUV" | "utilitaire" | "sportive" | "ancienne";
  carrosserie: string;
  valeurEstimee: number;
  valeurNeuf: number | null;
  nbPlaces: number;
  nbPortes: number;
  poidsVide: number;
  commentairePedagogique: string | null;
}

export interface PlaqueDB {
  plaque: string;
  vehiculeId: string;
  anneeImmat: number;
}

export const VEHICULES: VehiculeDB[] = [
  {
    "id": "V001",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.0 SCe 65ch",
    "annee": 2015,
    "cvFiscaux": 4,
    "cvDIN": 65,
    "puissanceKw": 48,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 5800,
    "valeurNeuf": 15200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V002",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.0 SCe 65ch",
    "annee": 2016,
    "cvFiscaux": 4,
    "cvDIN": 65,
    "puissanceKw": 48,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 7200,
    "valeurNeuf": 15200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V003",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.0 SCe 65ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 65,
    "puissanceKw": 48,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 8500,
    "valeurNeuf": 15200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V004",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.0 TCe 90ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 18200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V005",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.0 TCe 90ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 12000,
    "valeurNeuf": 18200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V006",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.0 TCe 90ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 13500,
    "valeurNeuf": 18200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V007",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.0 TCe 90ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 15000,
    "valeurNeuf": 18200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V008",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.5 dCi 85ch",
    "annee": 2016,
    "cvFiscaux": 4,
    "cvDIN": 85,
    "puissanceKw": 63,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 7200,
    "valeurNeuf": 16800,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V009",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.5 dCi 85ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 85,
    "puissanceKw": 63,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 8000,
    "valeurNeuf": 16800,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V010",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.5 dCi 85ch",
    "annee": 2018,
    "cvFiscaux": 4,
    "cvDIN": 85,
    "puissanceKw": 63,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9200,
    "valeurNeuf": 16800,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V011",
    "marque": "Renault",
    "modele": "Clio",
    "version": "E-Tech 140ch",
    "annee": 2022,
    "cvFiscaux": 6,
    "cvDIN": 140,
    "puissanceKw": 103,
    "cylindree": null,
    "carburant": "hybride",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 17000,
    "valeurNeuf": 25000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V012",
    "marque": "Renault",
    "modele": "Clio",
    "version": "E-Tech 140ch",
    "annee": 2023,
    "cvFiscaux": 6,
    "cvDIN": 140,
    "puissanceKw": 103,
    "cylindree": null,
    "carburant": "hybride",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 19500,
    "valeurNeuf": 25000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1090,
    "commentairePedagogique": null
  },
  {
    "id": "V013",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.2 PureTech 75ch",
    "annee": 2015,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 6500,
    "valeurNeuf": 14900,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V014",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.2 PureTech 75ch",
    "annee": 2016,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 7500,
    "valeurNeuf": 14900,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V015",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.2 PureTech 75ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 8500,
    "valeurNeuf": 14900,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V016",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.2 PureTech 75ch",
    "annee": 2018,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9500,
    "valeurNeuf": 14900,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V017",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.2 PureTech 100ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10000,
    "valeurNeuf": 20300,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V018",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.2 PureTech 100ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 12000,
    "valeurNeuf": 20300,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V019",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.2 PureTech 100ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 13500,
    "valeurNeuf": 20300,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V020",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.2 PureTech 100ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 15000,
    "valeurNeuf": 20300,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V021",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.2 PureTech 100ch",
    "annee": 2023,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 16500,
    "valeurNeuf": 20300,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V022",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2017,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 8500,
    "valeurNeuf": 18600,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V023",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9500,
    "valeurNeuf": 18600,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V024",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 11000,
    "valeurNeuf": 18600,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V025",
    "marque": "Peugeot",
    "modele": "208",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 12500,
    "valeurNeuf": 18600,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V026",
    "marque": "Peugeot",
    "modele": "208",
    "version": "e-208 136ch Elec",
    "annee": 2020,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 14000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V027",
    "marque": "Peugeot",
    "modele": "208",
    "version": "e-208 136ch Elec",
    "annee": 2021,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 16000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V028",
    "marque": "Peugeot",
    "modele": "208",
    "version": "e-208 136ch Elec",
    "annee": 2022,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 18000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V029",
    "marque": "Peugeot",
    "modele": "208",
    "version": "e-208 136ch Elec",
    "annee": 2023,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 20000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1100,
    "commentairePedagogique": null
  },
  {
    "id": "V030",
    "marque": "Citroën",
    "modele": "C3",
    "version": "1.2 PureTech 83ch",
    "annee": 2016,
    "cvFiscaux": 4,
    "cvDIN": 83,
    "puissanceKw": 61,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 7000,
    "valeurNeuf": 16500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 980,
    "commentairePedagogique": null
  },
  {
    "id": "V031",
    "marque": "Citroën",
    "modele": "C3",
    "version": "1.2 PureTech 83ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 83,
    "puissanceKw": 61,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 8000,
    "valeurNeuf": 16500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 980,
    "commentairePedagogique": null
  },
  {
    "id": "V032",
    "marque": "Citroën",
    "modele": "C3",
    "version": "1.2 PureTech 83ch",
    "annee": 2018,
    "cvFiscaux": 4,
    "cvDIN": 83,
    "puissanceKw": 61,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9000,
    "valeurNeuf": 16500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 980,
    "commentairePedagogique": null
  },
  {
    "id": "V033",
    "marque": "Citroën",
    "modele": "C3",
    "version": "1.2 PureTech 83ch",
    "annee": 2019,
    "cvFiscaux": 4,
    "cvDIN": 83,
    "puissanceKw": 61,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10000,
    "valeurNeuf": 16500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 980,
    "commentairePedagogique": null
  },
  {
    "id": "V034",
    "marque": "Citroën",
    "modele": "C3",
    "version": "1.2 PureTech 83ch",
    "annee": 2020,
    "cvFiscaux": 4,
    "cvDIN": 83,
    "puissanceKw": 61,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 11200,
    "valeurNeuf": 16500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 980,
    "commentairePedagogique": null
  },
  {
    "id": "V035",
    "marque": "Citroën",
    "modele": "C3",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 8500,
    "valeurNeuf": 18000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 980,
    "commentairePedagogique": null
  },
  {
    "id": "V036",
    "marque": "Citroën",
    "modele": "C3",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2018,
    "cvFiscaux": 4,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9500,
    "valeurNeuf": 18000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 980,
    "commentairePedagogique": null
  },
  {
    "id": "V037",
    "marque": "Citroën",
    "modele": "C3",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2019,
    "cvFiscaux": 4,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 18000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 980,
    "commentairePedagogique": null
  },
  {
    "id": "V038",
    "marque": "Toyota",
    "modele": "Yaris",
    "version": "1.0 VVT-i 70ch",
    "annee": 2015,
    "cvFiscaux": 4,
    "cvDIN": 70,
    "puissanceKw": 51,
    "cylindree": 998,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 5500,
    "valeurNeuf": 13000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1110,
    "commentairePedagogique": null
  },
  {
    "id": "V039",
    "marque": "Toyota",
    "modele": "Yaris",
    "version": "1.0 VVT-i 70ch",
    "annee": 2016,
    "cvFiscaux": 4,
    "cvDIN": 70,
    "puissanceKw": 51,
    "cylindree": 998,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 6500,
    "valeurNeuf": 13000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1110,
    "commentairePedagogique": null
  },
  {
    "id": "V040",
    "marque": "Toyota",
    "modele": "Yaris",
    "version": "1.0 VVT-i 70ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 70,
    "puissanceKw": 51,
    "cylindree": 998,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 7500,
    "valeurNeuf": 13000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1110,
    "commentairePedagogique": null
  },
  {
    "id": "V041",
    "marque": "Toyota",
    "modele": "Yaris",
    "version": "Hybride 100ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1497,
    "carburant": "hybride",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10000,
    "valeurNeuf": 20000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1110,
    "commentairePedagogique": null
  },
  {
    "id": "V042",
    "marque": "Toyota",
    "modele": "Yaris",
    "version": "Hybride 100ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1497,
    "carburant": "hybride",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 11500,
    "valeurNeuf": 20000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1110,
    "commentairePedagogique": null
  },
  {
    "id": "V043",
    "marque": "Toyota",
    "modele": "Yaris",
    "version": "Hybride 100ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1497,
    "carburant": "hybride",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 13000,
    "valeurNeuf": 20000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1110,
    "commentairePedagogique": null
  },
  {
    "id": "V044",
    "marque": "Toyota",
    "modele": "Yaris",
    "version": "Hybride 116ch GR S",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 116,
    "puissanceKw": 85,
    "cylindree": 1490,
    "carburant": "hybride",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 16000,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1110,
    "commentairePedagogique": null
  },
  {
    "id": "V045",
    "marque": "Toyota",
    "modele": "Yaris",
    "version": "Hybride 116ch GR S",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 116,
    "puissanceKw": 85,
    "cylindree": 1490,
    "carburant": "hybride",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 18000,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1110,
    "commentairePedagogique": null
  },
  {
    "id": "V046",
    "marque": "Toyota",
    "modele": "Yaris",
    "version": "Hybride 116ch GR S",
    "annee": 2023,
    "cvFiscaux": 5,
    "cvDIN": 116,
    "puissanceKw": 85,
    "cylindree": 1490,
    "carburant": "hybride",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 20000,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1110,
    "commentairePedagogique": null
  },
  {
    "id": "V047",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.0 MPI 75ch",
    "annee": 2015,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 7000,
    "valeurNeuf": 15000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V048",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.0 MPI 75ch",
    "annee": 2016,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 8000,
    "valeurNeuf": 15000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V049",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.0 MPI 75ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9000,
    "valeurNeuf": 15000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V050",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.0 MPI 75ch",
    "annee": 2018,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10000,
    "valeurNeuf": 15000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V051",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.0 TSI 95ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 95,
    "puissanceKw": 70,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10000,
    "valeurNeuf": 19800,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V052",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.0 TSI 95ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 95,
    "puissanceKw": 70,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 11500,
    "valeurNeuf": 19800,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V053",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.0 TSI 95ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 95,
    "puissanceKw": 70,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 12500,
    "valeurNeuf": 19800,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V054",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.0 TSI 95ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 95,
    "puissanceKw": 70,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 13500,
    "valeurNeuf": 19800,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V055",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.0 TSI 95ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 95,
    "puissanceKw": 70,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 15000,
    "valeurNeuf": 19800,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V056",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.6 TDI 95ch",
    "annee": 2016,
    "cvFiscaux": 5,
    "cvDIN": 95,
    "puissanceKw": 70,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 8500,
    "valeurNeuf": 18500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V057",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.6 TDI 95ch",
    "annee": 2017,
    "cvFiscaux": 5,
    "cvDIN": 95,
    "puissanceKw": 70,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9500,
    "valeurNeuf": 18500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V058",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.6 TDI 95ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 95,
    "puissanceKw": 70,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 18500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V059",
    "marque": "Volkswagen",
    "modele": "Polo",
    "version": "1.6 TDI 95ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 95,
    "puissanceKw": 70,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 11500,
    "valeurNeuf": 18500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V060",
    "marque": "Ford",
    "modele": "Fiesta",
    "version": "1.1 Ti-VCT 75ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1085,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 7500,
    "valeurNeuf": 15200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1020,
    "commentairePedagogique": null
  },
  {
    "id": "V061",
    "marque": "Ford",
    "modele": "Fiesta",
    "version": "1.1 Ti-VCT 75ch",
    "annee": 2018,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1085,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 8500,
    "valeurNeuf": 15200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1020,
    "commentairePedagogique": null
  },
  {
    "id": "V062",
    "marque": "Ford",
    "modele": "Fiesta",
    "version": "1.1 Ti-VCT 75ch",
    "annee": 2019,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1085,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9500,
    "valeurNeuf": 15200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1020,
    "commentairePedagogique": null
  },
  {
    "id": "V063",
    "marque": "Ford",
    "modele": "Fiesta",
    "version": "1.1 Ti-VCT 75ch",
    "annee": 2020,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1085,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 15200,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1020,
    "commentairePedagogique": null
  },
  {
    "id": "V064",
    "marque": "Ford",
    "modele": "Fiesta",
    "version": "1.0 EcoBoost 100ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9000,
    "valeurNeuf": 18000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1020,
    "commentairePedagogique": null
  },
  {
    "id": "V065",
    "marque": "Ford",
    "modele": "Fiesta",
    "version": "1.0 EcoBoost 100ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 18000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1020,
    "commentairePedagogique": null
  },
  {
    "id": "V066",
    "marque": "Ford",
    "modele": "Fiesta",
    "version": "1.0 EcoBoost 100ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 11800,
    "valeurNeuf": 18000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1020,
    "commentairePedagogique": null
  },
  {
    "id": "V067",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "1.2 75ch",
    "annee": 2015,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 5500,
    "valeurNeuf": 14000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V068",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "1.2 75ch",
    "annee": 2016,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 6500,
    "valeurNeuf": 14000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V069",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "1.2 75ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 7500,
    "valeurNeuf": 14000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V070",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "1.2 75ch",
    "annee": 2018,
    "cvFiscaux": 4,
    "cvDIN": 75,
    "puissanceKw": 55,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 8500,
    "valeurNeuf": 14000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V071",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "1.2 Turbo 100ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 11000,
    "valeurNeuf": 19500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V072",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "1.2 Turbo 100ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 13000,
    "valeurNeuf": 19500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V073",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "1.2 Turbo 100ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 14500,
    "valeurNeuf": 19500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V074",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "Electrique 136ch",
    "annee": 2020,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 13000,
    "valeurNeuf": 31000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V075",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "Electrique 136ch",
    "annee": 2021,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 15000,
    "valeurNeuf": 31000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V076",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "Electrique 136ch",
    "annee": 2022,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 17000,
    "valeurNeuf": 31000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V077",
    "marque": "Opel",
    "modele": "Corsa",
    "version": "Electrique 136ch",
    "annee": 2023,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 19000,
    "valeurNeuf": 31000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1080,
    "commentairePedagogique": null
  },
  {
    "id": "V078",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 SCe 65ch",
    "annee": 2015,
    "cvFiscaux": 4,
    "cvDIN": 65,
    "puissanceKw": 48,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 4500,
    "valeurNeuf": 10000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V079",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 SCe 65ch",
    "annee": 2016,
    "cvFiscaux": 4,
    "cvDIN": 65,
    "puissanceKw": 48,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 5000,
    "valeurNeuf": 10000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V080",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 SCe 65ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 65,
    "puissanceKw": 48,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 5800,
    "valeurNeuf": 10000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V081",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 SCe 65ch",
    "annee": 2018,
    "cvFiscaux": 4,
    "cvDIN": 65,
    "puissanceKw": 48,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 6500,
    "valeurNeuf": 10000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V082",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 SCe 65ch",
    "annee": 2019,
    "cvFiscaux": 4,
    "cvDIN": 65,
    "puissanceKw": 48,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 7200,
    "valeurNeuf": 10000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V083",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 TCe 90ch ECO-G",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "gpl",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9500,
    "valeurNeuf": 14500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V084",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 TCe 90ch ECO-G",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "gpl",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 14500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V085",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 TCe 90ch ECO-G",
    "annee": 2023,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "gpl",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 11500,
    "valeurNeuf": 14500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V086",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 TCe 100ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 9000,
    "valeurNeuf": 14000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V087",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 TCe 100ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10000,
    "valeurNeuf": 14000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V088",
    "marque": "Dacia",
    "modele": "Sandero",
    "version": "1.0 TCe 100ch",
    "annee": 2023,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 11000,
    "valeurNeuf": 14000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1000,
    "commentairePedagogique": "Véhicule entrée de gamme — prime souvent inférieure à sa valeur réelle"
  },
  {
    "id": "V089",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.3 TCe 115ch",
    "annee": 2017,
    "cvFiscaux": 6,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 10000,
    "valeurNeuf": 23000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V090",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.3 TCe 115ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 11500,
    "valeurNeuf": 23000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V091",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.3 TCe 115ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13000,
    "valeurNeuf": 23000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V092",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.3 TCe 115ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14500,
    "valeurNeuf": 23000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V093",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.5 dCi 110ch",
    "annee": 2016,
    "cvFiscaux": 5,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 9000,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V094",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.5 dCi 110ch",
    "annee": 2017,
    "cvFiscaux": 5,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V095",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.5 dCi 110ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 12000,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V096",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.5 dCi 110ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V097",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.6 E-Tech 160ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 160,
    "puissanceKw": 118,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 17000,
    "valeurNeuf": 30000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V098",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.6 E-Tech 160ch",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 160,
    "puissanceKw": 118,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 19000,
    "valeurNeuf": 30000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V099",
    "marque": "Renault",
    "modele": "Megane",
    "version": "1.6 E-Tech 160ch",
    "annee": 2023,
    "cvFiscaux": 7,
    "cvDIN": 160,
    "puissanceKw": 118,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 21500,
    "valeurNeuf": 30000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V100",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.2 PureTech 110ch",
    "annee": 2016,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 9500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V101",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.2 PureTech 110ch",
    "annee": 2017,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V102",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.2 PureTech 110ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 12000,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V103",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.2 PureTech 110ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V104",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.2 PureTech 110ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V105",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 12000,
    "valeurNeuf": 25000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V106",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13500,
    "valeurNeuf": 25000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V107",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 15000,
    "valeurNeuf": 25000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V108",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 16500,
    "valeurNeuf": 25000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V109",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.6 PureTech 180ch",
    "annee": 2017,
    "cvFiscaux": 8,
    "cvDIN": 180,
    "puissanceKw": 132,
    "cylindree": 1598,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V110",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.6 PureTech 180ch",
    "annee": 2018,
    "cvFiscaux": 8,
    "cvDIN": 180,
    "puissanceKw": 132,
    "cylindree": 1598,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14500,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V111",
    "marque": "Peugeot",
    "modele": "308",
    "version": "1.6 PureTech 180ch",
    "annee": 2019,
    "cvFiscaux": 8,
    "cvDIN": 180,
    "puissanceKw": 132,
    "cylindree": 1598,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 16000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V112",
    "marque": "Peugeot",
    "modele": "308",
    "version": "e-308 156ch Elec",
    "annee": 2023,
    "cvFiscaux": 2,
    "cvDIN": 156,
    "puissanceKw": 115,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 27000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V113",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "1.0 TSI 110ch",
    "annee": 2017,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 11000,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V114",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "1.0 TSI 110ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 12500,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V115",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "1.0 TSI 110ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14000,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V116",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "1.0 TSI 110ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 15500,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V117",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "1.5 TSI 130ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13000,
    "valeurNeuf": 27500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V118",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "1.5 TSI 130ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14500,
    "valeurNeuf": 27500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V119",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "1.5 TSI 130ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 16000,
    "valeurNeuf": 27500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V120",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "1.5 TSI 130ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 17500,
    "valeurNeuf": 27500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V121",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "1.5 TSI 130ch",
    "annee": 2022,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 19000,
    "valeurNeuf": 27500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V122",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "2.0 TDI 150ch",
    "annee": 2017,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13000,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V123",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "2.0 TDI 150ch",
    "annee": 2018,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14500,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V124",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "2.0 TDI 150ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 16000,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V125",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "2.0 TDI 150ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 17500,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V126",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "eHybrid 245ch GTE",
    "annee": 2021,
    "cvFiscaux": 9,
    "cvDIN": 245,
    "puissanceKw": 180,
    "cylindree": 1395,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 23000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V127",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "eHybrid 245ch GTE",
    "annee": 2022,
    "cvFiscaux": 9,
    "cvDIN": 245,
    "puissanceKw": 180,
    "cylindree": 1395,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 25500,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V128",
    "marque": "Volkswagen",
    "modele": "Golf",
    "version": "eHybrid 245ch GTE",
    "annee": 2023,
    "cvFiscaux": 9,
    "cvDIN": 245,
    "puissanceKw": 180,
    "cylindree": 1395,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 28000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V129",
    "marque": "Toyota",
    "modele": "Corolla",
    "version": "Hybride 122ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 122,
    "puissanceKw": 90,
    "cylindree": 1798,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 16000,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1390,
    "commentairePedagogique": null
  },
  {
    "id": "V130",
    "marque": "Toyota",
    "modele": "Corolla",
    "version": "Hybride 122ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 122,
    "puissanceKw": 90,
    "cylindree": 1798,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 17500,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1390,
    "commentairePedagogique": null
  },
  {
    "id": "V131",
    "marque": "Toyota",
    "modele": "Corolla",
    "version": "Hybride 122ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 122,
    "puissanceKw": 90,
    "cylindree": 1798,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 19000,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1390,
    "commentairePedagogique": null
  },
  {
    "id": "V132",
    "marque": "Toyota",
    "modele": "Corolla",
    "version": "Hybride 122ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 122,
    "puissanceKw": 90,
    "cylindree": 1798,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 21000,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1390,
    "commentairePedagogique": null
  },
  {
    "id": "V133",
    "marque": "Toyota",
    "modele": "Corolla",
    "version": "Hybride 122ch",
    "annee": 2023,
    "cvFiscaux": 5,
    "cvDIN": 122,
    "puissanceKw": 90,
    "cylindree": 1798,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 22500,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1390,
    "commentairePedagogique": null
  },
  {
    "id": "V134",
    "marque": "Toyota",
    "modele": "Corolla",
    "version": "2.0 Hybride 184ch",
    "annee": 2021,
    "cvFiscaux": 8,
    "cvDIN": 184,
    "puissanceKw": 135,
    "cylindree": 1987,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 20000,
    "valeurNeuf": 35000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1390,
    "commentairePedagogique": null
  },
  {
    "id": "V135",
    "marque": "Toyota",
    "modele": "Corolla",
    "version": "2.0 Hybride 184ch",
    "annee": 2022,
    "cvFiscaux": 8,
    "cvDIN": 184,
    "puissanceKw": 135,
    "cylindree": 1987,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 22500,
    "valeurNeuf": 35000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1390,
    "commentairePedagogique": null
  },
  {
    "id": "V136",
    "marque": "Toyota",
    "modele": "Corolla",
    "version": "2.0 Hybride 184ch",
    "annee": 2023,
    "cvFiscaux": 8,
    "cvDIN": 184,
    "puissanceKw": 135,
    "cylindree": 1987,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 24500,
    "valeurNeuf": 35000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1390,
    "commentairePedagogique": null
  },
  {
    "id": "V137",
    "marque": "Ford",
    "modele": "Focus",
    "version": "1.0 EcoBoost 100ch",
    "annee": 2016,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 8500,
    "valeurNeuf": 19000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V138",
    "marque": "Ford",
    "modele": "Focus",
    "version": "1.0 EcoBoost 100ch",
    "annee": 2017,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 9500,
    "valeurNeuf": 19000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V139",
    "marque": "Ford",
    "modele": "Focus",
    "version": "1.0 EcoBoost 100ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 19000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V140",
    "marque": "Ford",
    "modele": "Focus",
    "version": "1.0 EcoBoost 100ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 11500,
    "valeurNeuf": 19000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V141",
    "marque": "Ford",
    "modele": "Focus",
    "version": "1.5 EcoBlue 120ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 120,
    "puissanceKw": 88,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 11000,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V142",
    "marque": "Ford",
    "modele": "Focus",
    "version": "1.5 EcoBlue 120ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 120,
    "puissanceKw": 88,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 12500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V143",
    "marque": "Ford",
    "modele": "Focus",
    "version": "1.5 EcoBlue 120ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 120,
    "puissanceKw": 88,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14000,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V144",
    "marque": "Ford",
    "modele": "Focus",
    "version": "1.5 EcoBlue 120ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 120,
    "puissanceKw": 88,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 15500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": null
  },
  {
    "id": "V145",
    "marque": "Ford",
    "modele": "Focus",
    "version": "2.3 EcoBoost 280ch ST",
    "annee": 2019,
    "cvFiscaux": 11,
    "cvDIN": 280,
    "puissanceKw": 206,
    "cylindree": 2261,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 21000,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": "Véhicule sportif — prime élevée, bon cas pour les exercices malus"
  },
  {
    "id": "V146",
    "marque": "Ford",
    "modele": "Focus",
    "version": "2.3 EcoBoost 280ch ST",
    "annee": 2020,
    "cvFiscaux": 11,
    "cvDIN": 280,
    "puissanceKw": 206,
    "cylindree": 2261,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 23000,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": "Véhicule sportif — prime élevée, bon cas pour les exercices malus"
  },
  {
    "id": "V147",
    "marque": "Ford",
    "modele": "Focus",
    "version": "2.3 EcoBoost 280ch ST",
    "annee": 2021,
    "cvFiscaux": 11,
    "cvDIN": 280,
    "puissanceKw": 206,
    "cylindree": 2261,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 25000,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1370,
    "commentairePedagogique": "Véhicule sportif — prime élevée, bon cas pour les exercices malus"
  },
  {
    "id": "V148",
    "marque": "Citroën",
    "modele": "C4",
    "version": "1.2 PureTech 130ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 15000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V149",
    "marque": "Citroën",
    "modele": "C4",
    "version": "1.2 PureTech 130ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 17000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V150",
    "marque": "Citroën",
    "modele": "C4",
    "version": "1.2 PureTech 130ch",
    "annee": 2022,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 18500,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V151",
    "marque": "Citroën",
    "modele": "C4",
    "version": "1.2 PureTech 130ch",
    "annee": 2023,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 20000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V152",
    "marque": "Citroën",
    "modele": "C4",
    "version": "ë-C4 136ch Elec",
    "annee": 2021,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 18000,
    "valeurNeuf": 37000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V153",
    "marque": "Citroën",
    "modele": "C4",
    "version": "ë-C4 136ch Elec",
    "annee": 2022,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 20000,
    "valeurNeuf": 37000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V154",
    "marque": "Citroën",
    "modele": "C4",
    "version": "ë-C4 136ch Elec",
    "annee": 2023,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 22000,
    "valeurNeuf": 37000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1350,
    "commentairePedagogique": null
  },
  {
    "id": "V155",
    "marque": "Hyundai",
    "modele": "i30",
    "version": "1.0 T-GDi 120ch",
    "annee": 2017,
    "cvFiscaux": 6,
    "cvDIN": 120,
    "puissanceKw": 88,
    "cylindree": 998,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 10000,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1290,
    "commentairePedagogique": null
  },
  {
    "id": "V156",
    "marque": "Hyundai",
    "modele": "i30",
    "version": "1.0 T-GDi 120ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 120,
    "puissanceKw": 88,
    "cylindree": 998,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 11500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1290,
    "commentairePedagogique": null
  },
  {
    "id": "V157",
    "marque": "Hyundai",
    "modele": "i30",
    "version": "1.0 T-GDi 120ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 120,
    "puissanceKw": 88,
    "cylindree": 998,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13000,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1290,
    "commentairePedagogique": null
  },
  {
    "id": "V158",
    "marque": "Hyundai",
    "modele": "i30",
    "version": "1.0 T-GDi 120ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 120,
    "puissanceKw": 88,
    "cylindree": 998,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1290,
    "commentairePedagogique": null
  },
  {
    "id": "V159",
    "marque": "Hyundai",
    "modele": "i30",
    "version": "1.6 CRDi 136ch",
    "annee": 2017,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 23500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1290,
    "commentairePedagogique": null
  },
  {
    "id": "V160",
    "marque": "Hyundai",
    "modele": "i30",
    "version": "1.6 CRDi 136ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 12000,
    "valeurNeuf": 23500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1290,
    "commentairePedagogique": null
  },
  {
    "id": "V161",
    "marque": "Hyundai",
    "modele": "i30",
    "version": "1.6 CRDi 136ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13500,
    "valeurNeuf": 23500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1290,
    "commentairePedagogique": null
  },
  {
    "id": "V162",
    "marque": "Hyundai",
    "modele": "i30",
    "version": "1.6 CRDi 136ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 15000,
    "valeurNeuf": 23500,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1290,
    "commentairePedagogique": null
  },
  {
    "id": "V163",
    "marque": "Seat",
    "modele": "Leon",
    "version": "1.0 TSI 110ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 10000,
    "valeurNeuf": 21000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1310,
    "commentairePedagogique": null
  },
  {
    "id": "V164",
    "marque": "Seat",
    "modele": "Leon",
    "version": "1.0 TSI 110ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 11500,
    "valeurNeuf": 21000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1310,
    "commentairePedagogique": null
  },
  {
    "id": "V165",
    "marque": "Seat",
    "modele": "Leon",
    "version": "1.0 TSI 110ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13000,
    "valeurNeuf": 21000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1310,
    "commentairePedagogique": null
  },
  {
    "id": "V166",
    "marque": "Seat",
    "modele": "Leon",
    "version": "1.5 TSI 150ch FR",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1310,
    "commentairePedagogique": null
  },
  {
    "id": "V167",
    "marque": "Seat",
    "modele": "Leon",
    "version": "1.5 TSI 150ch FR",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 16000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1310,
    "commentairePedagogique": null
  },
  {
    "id": "V168",
    "marque": "Seat",
    "modele": "Leon",
    "version": "1.5 TSI 150ch FR",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 18000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1310,
    "commentairePedagogique": null
  },
  {
    "id": "V169",
    "marque": "Renault",
    "modele": "Captur",
    "version": "1.0 TCe 90ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 11000,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V170",
    "marque": "Renault",
    "modele": "Captur",
    "version": "1.0 TCe 90ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 12500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V171",
    "marque": "Renault",
    "modele": "Captur",
    "version": "1.0 TCe 90ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 14000,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V172",
    "marque": "Renault",
    "modele": "Captur",
    "version": "1.0 TCe 90ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 15500,
    "valeurNeuf": 22000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V173",
    "marque": "Renault",
    "modele": "Captur",
    "version": "1.3 TCe 130ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 14000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V174",
    "marque": "Renault",
    "modele": "Captur",
    "version": "1.3 TCe 130ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 15500,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V175",
    "marque": "Renault",
    "modele": "Captur",
    "version": "1.3 TCe 130ch",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V176",
    "marque": "Renault",
    "modele": "Captur",
    "version": "1.3 TCe 130ch",
    "annee": 2023,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 18500,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V177",
    "marque": "Renault",
    "modele": "Captur",
    "version": "E-Tech 145ch PHEV",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 145,
    "puissanceKw": 107,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V178",
    "marque": "Renault",
    "modele": "Captur",
    "version": "E-Tech 145ch PHEV",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 145,
    "puissanceKw": 107,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 19000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V179",
    "marque": "Renault",
    "modele": "Captur",
    "version": "E-Tech 145ch PHEV",
    "annee": 2023,
    "cvFiscaux": 7,
    "cvDIN": 145,
    "puissanceKw": 107,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 21000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V180",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "1.2 PureTech 100ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 14000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V181",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "1.2 PureTech 100ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 15500,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V182",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "1.2 PureTech 100ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V183",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "1.2 PureTech 100ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 18500,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V184",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "1.2 PureTech 100ch",
    "annee": 2023,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 20000,
    "valeurNeuf": 27000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V185",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "1.5 BlueHDi 110ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 14500,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V186",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "1.5 BlueHDi 110ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 16000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V187",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "1.5 BlueHDi 110ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17500,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V188",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "1.5 BlueHDi 110ch",
    "annee": 2022,
    "cvFiscaux": 6,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 19000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V189",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "e-2008 136ch Elec",
    "annee": 2020,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 16000,
    "valeurNeuf": 39000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V190",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "e-2008 136ch Elec",
    "annee": 2021,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 18500,
    "valeurNeuf": 39000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V191",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "e-2008 136ch Elec",
    "annee": 2022,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 21000,
    "valeurNeuf": 39000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V192",
    "marque": "Peugeot",
    "modele": "2008",
    "version": "e-2008 136ch Elec",
    "annee": 2023,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 23500,
    "valeurNeuf": 39000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1360,
    "commentairePedagogique": null
  },
  {
    "id": "V193",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "1.2 PureTech 130ch",
    "annee": 2018,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 16000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V194",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "1.2 PureTech 130ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 18000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V195",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "1.2 PureTech 130ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 20000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V196",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "1.2 PureTech 130ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 22000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V197",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17000,
    "valeurNeuf": 34000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V198",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 19000,
    "valeurNeuf": 34000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V199",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 21000,
    "valeurNeuf": 34000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V200",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 23000,
    "valeurNeuf": 34000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V201",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "Hybride4 300ch",
    "annee": 2020,
    "cvFiscaux": 13,
    "cvDIN": 300,
    "puissanceKw": 221,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 26000,
    "valeurNeuf": 48000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V202",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "Hybride4 300ch",
    "annee": 2021,
    "cvFiscaux": 13,
    "cvDIN": 300,
    "puissanceKw": 221,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 28000,
    "valeurNeuf": 48000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V203",
    "marque": "Peugeot",
    "modele": "3008",
    "version": "Hybride4 300ch",
    "annee": 2022,
    "cvFiscaux": 13,
    "cvDIN": 300,
    "puissanceKw": 221,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 31000,
    "valeurNeuf": 48000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V204",
    "marque": "Renault",
    "modele": "Kadjar",
    "version": "1.3 TCe 140ch",
    "annee": 2018,
    "cvFiscaux": 7,
    "cvDIN": 140,
    "puissanceKw": 103,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 14000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1460,
    "commentairePedagogique": null
  },
  {
    "id": "V205",
    "marque": "Renault",
    "modele": "Kadjar",
    "version": "1.3 TCe 140ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 140,
    "puissanceKw": 103,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 15500,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1460,
    "commentairePedagogique": null
  },
  {
    "id": "V206",
    "marque": "Renault",
    "modele": "Kadjar",
    "version": "1.3 TCe 140ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 140,
    "puissanceKw": 103,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1460,
    "commentairePedagogique": null
  },
  {
    "id": "V207",
    "marque": "Renault",
    "modele": "Kadjar",
    "version": "1.3 TCe 140ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 140,
    "puissanceKw": 103,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 18500,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1460,
    "commentairePedagogique": null
  },
  {
    "id": "V208",
    "marque": "Renault",
    "modele": "Kadjar",
    "version": "1.5 dCi 115ch",
    "annee": 2016,
    "cvFiscaux": 5,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 11000,
    "valeurNeuf": 26000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1460,
    "commentairePedagogique": null
  },
  {
    "id": "V209",
    "marque": "Renault",
    "modele": "Kadjar",
    "version": "1.5 dCi 115ch",
    "annee": 2017,
    "cvFiscaux": 5,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 12500,
    "valeurNeuf": 26000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1460,
    "commentairePedagogique": null
  },
  {
    "id": "V210",
    "marque": "Renault",
    "modele": "Kadjar",
    "version": "1.5 dCi 115ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 14000,
    "valeurNeuf": 26000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1460,
    "commentairePedagogique": null
  },
  {
    "id": "V211",
    "marque": "Renault",
    "modele": "Kadjar",
    "version": "1.5 dCi 115ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 15500,
    "valeurNeuf": 26000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1460,
    "commentairePedagogique": null
  },
  {
    "id": "V212",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "1.0 TSI 115ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 14000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": null
  },
  {
    "id": "V213",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "1.0 TSI 115ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 15500,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": null
  },
  {
    "id": "V214",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "1.0 TSI 115ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": null
  },
  {
    "id": "V215",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "1.0 TSI 115ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 18500,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": null
  },
  {
    "id": "V216",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "1.0 TSI 115ch",
    "annee": 2022,
    "cvFiscaux": 6,
    "cvDIN": 115,
    "puissanceKw": 85,
    "cylindree": 999,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 20000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": null
  },
  {
    "id": "V217",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "2.0 TDI 150ch",
    "annee": 2018,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 16000,
    "valeurNeuf": 31000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": null
  },
  {
    "id": "V218",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "2.0 TDI 150ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17500,
    "valeurNeuf": 31000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": null
  },
  {
    "id": "V219",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "2.0 TDI 150ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 19000,
    "valeurNeuf": 31000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": null
  },
  {
    "id": "V220",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "2.0 TDI 150ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 20500,
    "valeurNeuf": 31000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": null
  },
  {
    "id": "V221",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "2.0 TSI 300ch R 4Mo",
    "annee": 2020,
    "cvFiscaux": 13,
    "cvDIN": 300,
    "puissanceKw": 221,
    "cylindree": 1984,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 30000,
    "valeurNeuf": 52000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": "SUV sportif — cas intéressant pour exercice surprime"
  },
  {
    "id": "V222",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "2.0 TSI 300ch R 4Mo",
    "annee": 2021,
    "cvFiscaux": 13,
    "cvDIN": 300,
    "puissanceKw": 221,
    "cylindree": 1984,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 32000,
    "valeurNeuf": 52000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": "SUV sportif — cas intéressant pour exercice surprime"
  },
  {
    "id": "V223",
    "marque": "Volkswagen",
    "modele": "T-Roc",
    "version": "2.0 TSI 300ch R 4Mo",
    "annee": 2022,
    "cvFiscaux": 13,
    "cvDIN": 300,
    "puissanceKw": 221,
    "cylindree": 1984,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 35000,
    "valeurNeuf": 52000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1480,
    "commentairePedagogique": "SUV sportif — cas intéressant pour exercice surprime"
  },
  {
    "id": "V224",
    "marque": "Toyota",
    "modele": "RAV4",
    "version": "2.5 Hybride 218ch",
    "annee": 2019,
    "cvFiscaux": 10,
    "cvDIN": 218,
    "puissanceKw": 160,
    "cylindree": 2487,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 25000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V225",
    "marque": "Toyota",
    "modele": "RAV4",
    "version": "2.5 Hybride 218ch",
    "annee": 2020,
    "cvFiscaux": 10,
    "cvDIN": 218,
    "puissanceKw": 160,
    "cylindree": 2487,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 27000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V226",
    "marque": "Toyota",
    "modele": "RAV4",
    "version": "2.5 Hybride 218ch",
    "annee": 2021,
    "cvFiscaux": 10,
    "cvDIN": 218,
    "puissanceKw": 160,
    "cylindree": 2487,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 29000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V227",
    "marque": "Toyota",
    "modele": "RAV4",
    "version": "2.5 Hybride 218ch",
    "annee": 2022,
    "cvFiscaux": 10,
    "cvDIN": 218,
    "puissanceKw": 160,
    "cylindree": 2487,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 31000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V228",
    "marque": "Toyota",
    "modele": "RAV4",
    "version": "2.5 Hybride 218ch",
    "annee": 2023,
    "cvFiscaux": 10,
    "cvDIN": 218,
    "puissanceKw": 160,
    "cylindree": 2487,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 33000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V229",
    "marque": "Toyota",
    "modele": "RAV4",
    "version": "2.5 PHEV 306ch AWD",
    "annee": 2021,
    "cvFiscaux": 12,
    "cvDIN": 306,
    "puissanceKw": 225,
    "cylindree": 2487,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 30000,
    "valeurNeuf": 55000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V230",
    "marque": "Toyota",
    "modele": "RAV4",
    "version": "2.5 PHEV 306ch AWD",
    "annee": 2022,
    "cvFiscaux": 12,
    "cvDIN": 306,
    "puissanceKw": 225,
    "cylindree": 2487,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 33000,
    "valeurNeuf": 55000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V231",
    "marque": "Toyota",
    "modele": "RAV4",
    "version": "2.5 PHEV 306ch AWD",
    "annee": 2023,
    "cvFiscaux": 12,
    "cvDIN": 306,
    "puissanceKw": 225,
    "cylindree": 2487,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 36000,
    "valeurNeuf": 55000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V232",
    "marque": "Dacia",
    "modele": "Duster",
    "version": "1.0 TCe 90ch ECO-G",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "gpl",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 11000,
    "valeurNeuf": 19000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1380,
    "commentairePedagogique": null
  },
  {
    "id": "V233",
    "marque": "Dacia",
    "modele": "Duster",
    "version": "1.0 TCe 90ch ECO-G",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "gpl",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 12000,
    "valeurNeuf": 19000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1380,
    "commentairePedagogique": null
  },
  {
    "id": "V234",
    "marque": "Dacia",
    "modele": "Duster",
    "version": "1.0 TCe 90ch ECO-G",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "gpl",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 13500,
    "valeurNeuf": 19000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1380,
    "commentairePedagogique": null
  },
  {
    "id": "V235",
    "marque": "Dacia",
    "modele": "Duster",
    "version": "1.0 TCe 90ch ECO-G",
    "annee": 2023,
    "cvFiscaux": 5,
    "cvDIN": 90,
    "puissanceKw": 67,
    "cylindree": 999,
    "carburant": "gpl",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 15000,
    "valeurNeuf": 19000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1380,
    "commentairePedagogique": null
  },
  {
    "id": "V236",
    "marque": "Dacia",
    "modele": "Duster",
    "version": "1.3 TCe 150ch 4x4",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 14000,
    "valeurNeuf": 25000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1380,
    "commentairePedagogique": null
  },
  {
    "id": "V237",
    "marque": "Dacia",
    "modele": "Duster",
    "version": "1.3 TCe 150ch 4x4",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 15500,
    "valeurNeuf": 25000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1380,
    "commentairePedagogique": null
  },
  {
    "id": "V238",
    "marque": "Dacia",
    "modele": "Duster",
    "version": "1.3 TCe 150ch 4x4",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17000,
    "valeurNeuf": 25000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1380,
    "commentairePedagogique": null
  },
  {
    "id": "V239",
    "marque": "Dacia",
    "modele": "Duster",
    "version": "1.3 TCe 150ch 4x4",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 18500,
    "valeurNeuf": 25000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1380,
    "commentairePedagogique": null
  },
  {
    "id": "V240",
    "marque": "Kia",
    "modele": "Sportage",
    "version": "1.6 T-GDi 150ch",
    "annee": 2018,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1591,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 16000,
    "valeurNeuf": 30000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1600,
    "commentairePedagogique": null
  },
  {
    "id": "V241",
    "marque": "Kia",
    "modele": "Sportage",
    "version": "1.6 T-GDi 150ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1591,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17500,
    "valeurNeuf": 30000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1600,
    "commentairePedagogique": null
  },
  {
    "id": "V242",
    "marque": "Kia",
    "modele": "Sportage",
    "version": "1.6 T-GDi 150ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1591,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 19000,
    "valeurNeuf": 30000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1600,
    "commentairePedagogique": null
  },
  {
    "id": "V243",
    "marque": "Kia",
    "modele": "Sportage",
    "version": "1.6 T-GDi 150ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1591,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 21000,
    "valeurNeuf": 30000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1600,
    "commentairePedagogique": null
  },
  {
    "id": "V244",
    "marque": "Kia",
    "modele": "Sportage",
    "version": "1.6 CRDI 136ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 15500,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1600,
    "commentairePedagogique": null
  },
  {
    "id": "V245",
    "marque": "Kia",
    "modele": "Sportage",
    "version": "1.6 CRDI 136ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17000,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1600,
    "commentairePedagogique": null
  },
  {
    "id": "V246",
    "marque": "Kia",
    "modele": "Sportage",
    "version": "1.6 CRDI 136ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 18500,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1600,
    "commentairePedagogique": null
  },
  {
    "id": "V247",
    "marque": "Kia",
    "modele": "Sportage",
    "version": "1.6 CRDI 136ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1598,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 20000,
    "valeurNeuf": 29000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1600,
    "commentairePedagogique": null
  },
  {
    "id": "V248",
    "marque": "Kia",
    "modele": "Sportage",
    "version": "1.6 T-GDi HEV 230ch",
    "annee": 2022,
    "cvFiscaux": 10,
    "cvDIN": 230,
    "puissanceKw": 169,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 24000,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1600,
    "commentairePedagogique": null
  },
  {
    "id": "V249",
    "marque": "Kia",
    "modele": "Sportage",
    "version": "1.6 T-GDi HEV 230ch",
    "annee": 2023,
    "cvFiscaux": 10,
    "cvDIN": 230,
    "puissanceKw": 169,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 26500,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1600,
    "commentairePedagogique": null
  },
  {
    "id": "V250",
    "marque": "Tesla",
    "modele": "Model 3",
    "version": "Grande Autonomie AWD",
    "annee": 2019,
    "cvFiscaux": 4,
    "cvDIN": 351,
    "puissanceKw": 258,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 30000,
    "valeurNeuf": 55000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": "VE haut de gamme — prime souvent élevée malgré CV fiscaux faibles"
  },
  {
    "id": "V251",
    "marque": "Tesla",
    "modele": "Model 3",
    "version": "Grande Autonomie AWD",
    "annee": 2020,
    "cvFiscaux": 4,
    "cvDIN": 351,
    "puissanceKw": 258,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 32000,
    "valeurNeuf": 55000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": "VE haut de gamme — prime souvent élevée malgré CV fiscaux faibles"
  },
  {
    "id": "V252",
    "marque": "Tesla",
    "modele": "Model 3",
    "version": "Grande Autonomie AWD",
    "annee": 2021,
    "cvFiscaux": 4,
    "cvDIN": 351,
    "puissanceKw": 258,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 35000,
    "valeurNeuf": 55000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": "VE haut de gamme — prime souvent élevée malgré CV fiscaux faibles"
  },
  {
    "id": "V253",
    "marque": "Tesla",
    "modele": "Model 3",
    "version": "Grande Autonomie AWD",
    "annee": 2022,
    "cvFiscaux": 4,
    "cvDIN": 351,
    "puissanceKw": 258,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 38000,
    "valeurNeuf": 55000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": "VE haut de gamme — prime souvent élevée malgré CV fiscaux faibles"
  },
  {
    "id": "V254",
    "marque": "Tesla",
    "modele": "Model 3",
    "version": "Grande Autonomie AWD",
    "annee": 2023,
    "cvFiscaux": 4,
    "cvDIN": 351,
    "puissanceKw": 258,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 40000,
    "valeurNeuf": 55000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": "VE haut de gamme — prime souvent élevée malgré CV fiscaux faibles"
  },
  {
    "id": "V255",
    "marque": "Tesla",
    "modele": "Model 3",
    "version": "Standard Range RWD",
    "annee": 2020,
    "cvFiscaux": 2,
    "cvDIN": 283,
    "puissanceKw": 208,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 22000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V256",
    "marque": "Tesla",
    "modele": "Model 3",
    "version": "Standard Range RWD",
    "annee": 2021,
    "cvFiscaux": 2,
    "cvDIN": 283,
    "puissanceKw": 208,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 25000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V257",
    "marque": "Tesla",
    "modele": "Model 3",
    "version": "Standard Range RWD",
    "annee": 2022,
    "cvFiscaux": 2,
    "cvDIN": 283,
    "puissanceKw": 208,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 28000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V258",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "1.2 PureTech 130ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V259",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "1.2 PureTech 130ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 19000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V260",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "1.2 PureTech 130ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 21000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V261",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "1.2 PureTech 130ch",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1199,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 23000,
    "valeurNeuf": 33000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V262",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 17500,
    "valeurNeuf": 34000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V263",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 19500,
    "valeurNeuf": 34000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V264",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 21500,
    "valeurNeuf": 34000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V265",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "1.5 BlueHDi 130ch",
    "annee": 2022,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 23500,
    "valeurNeuf": 34000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V266",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "Hybride PHEV 225ch",
    "annee": 2020,
    "cvFiscaux": 10,
    "cvDIN": 225,
    "puissanceKw": 165,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 24000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V267",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "Hybride PHEV 225ch",
    "annee": 2021,
    "cvFiscaux": 10,
    "cvDIN": 225,
    "puissanceKw": 165,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 26000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V268",
    "marque": "Citroën",
    "modele": "C5 Aircross",
    "version": "Hybride PHEV 225ch",
    "annee": 2022,
    "cvFiscaux": 10,
    "cvDIN": 225,
    "puissanceKw": 165,
    "cylindree": 1598,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 28000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V269",
    "marque": "Renault",
    "modele": "Scenic",
    "version": "1.5 dCi 110ch",
    "annee": 2016,
    "cvFiscaux": 5,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 9000,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": null
  },
  {
    "id": "V270",
    "marque": "Renault",
    "modele": "Scenic",
    "version": "1.5 dCi 110ch",
    "annee": 2017,
    "cvFiscaux": 5,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 10500,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": null
  },
  {
    "id": "V271",
    "marque": "Renault",
    "modele": "Scenic",
    "version": "1.5 dCi 110ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 12000,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": null
  },
  {
    "id": "V272",
    "marque": "Renault",
    "modele": "Scenic",
    "version": "1.5 dCi 110ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13500,
    "valeurNeuf": 24000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": null
  },
  {
    "id": "V273",
    "marque": "Renault",
    "modele": "Scenic",
    "version": "1.3 TCe 140ch",
    "annee": 2018,
    "cvFiscaux": 7,
    "cvDIN": 140,
    "puissanceKw": 103,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 13000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": null
  },
  {
    "id": "V274",
    "marque": "Renault",
    "modele": "Scenic",
    "version": "1.3 TCe 140ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 140,
    "puissanceKw": 103,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14500,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": null
  },
  {
    "id": "V275",
    "marque": "Renault",
    "modele": "Scenic",
    "version": "1.3 TCe 140ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 140,
    "puissanceKw": 103,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 16000,
    "valeurNeuf": 28000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": null
  },
  {
    "id": "V276",
    "marque": "Ford",
    "modele": "S-Max",
    "version": "2.0 EcoBlue 150ch",
    "annee": 2018,
    "cvFiscaux": 8,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1997,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 18000,
    "valeurNeuf": 40000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1800,
    "commentairePedagogique": null
  },
  {
    "id": "V277",
    "marque": "Ford",
    "modele": "S-Max",
    "version": "2.0 EcoBlue 150ch",
    "annee": 2019,
    "cvFiscaux": 8,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1997,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 20000,
    "valeurNeuf": 40000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1800,
    "commentairePedagogique": null
  },
  {
    "id": "V278",
    "marque": "Ford",
    "modele": "S-Max",
    "version": "2.0 EcoBlue 150ch",
    "annee": 2020,
    "cvFiscaux": 8,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1997,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 22000,
    "valeurNeuf": 40000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1800,
    "commentairePedagogique": null
  },
  {
    "id": "V279",
    "marque": "Ford",
    "modele": "S-Max",
    "version": "2.0 EcoBlue 150ch",
    "annee": 2021,
    "cvFiscaux": 8,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1997,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 24000,
    "valeurNeuf": 40000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1800,
    "commentairePedagogique": null
  },
  {
    "id": "V280",
    "marque": "Renault",
    "modele": "Megane RS",
    "version": "1.8 TCe 280ch Trophy",
    "annee": 2018,
    "cvFiscaux": 12,
    "cvDIN": 280,
    "puissanceKw": 206,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 22000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": "Véhicule sportif référence — utilisez pour exercice tarification complexe"
  },
  {
    "id": "V281",
    "marque": "Renault",
    "modele": "Megane RS",
    "version": "1.8 TCe 280ch Trophy",
    "annee": 2019,
    "cvFiscaux": 12,
    "cvDIN": 280,
    "puissanceKw": 206,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 24000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": "Véhicule sportif référence — utilisez pour exercice tarification complexe"
  },
  {
    "id": "V282",
    "marque": "Renault",
    "modele": "Megane RS",
    "version": "1.8 TCe 280ch Trophy",
    "annee": 2020,
    "cvFiscaux": 12,
    "cvDIN": 280,
    "puissanceKw": 206,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 26000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": "Véhicule sportif référence — utilisez pour exercice tarification complexe"
  },
  {
    "id": "V283",
    "marque": "Renault",
    "modele": "Megane RS",
    "version": "1.8 TCe 280ch Trophy",
    "annee": 2021,
    "cvFiscaux": 12,
    "cvDIN": 280,
    "puissanceKw": 206,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 28000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": "Véhicule sportif référence — utilisez pour exercice tarification complexe"
  },
  {
    "id": "V284",
    "marque": "Renault",
    "modele": "Megane RS",
    "version": "2.0 TCe 265ch",
    "annee": 2016,
    "cvFiscaux": 11,
    "cvDIN": 265,
    "puissanceKw": 195,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 16000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": null
  },
  {
    "id": "V285",
    "marque": "Renault",
    "modele": "Megane RS",
    "version": "2.0 TCe 265ch",
    "annee": 2017,
    "cvFiscaux": 11,
    "cvDIN": 265,
    "puissanceKw": 195,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 18000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": null
  },
  {
    "id": "V286",
    "marque": "Renault",
    "modele": "Megane RS",
    "version": "2.0 TCe 265ch",
    "annee": 2018,
    "cvFiscaux": 11,
    "cvDIN": 265,
    "puissanceKw": 195,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 20000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1450,
    "commentairePedagogique": null
  },
  {
    "id": "V287",
    "marque": "Volkswagen",
    "modele": "Golf GTI",
    "version": "2.0 TSI 245ch Perf.",
    "annee": 2019,
    "cvFiscaux": 10,
    "cvDIN": 245,
    "puissanceKw": 180,
    "cylindree": 1984,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 22000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1400,
    "commentairePedagogique": "GTI — idéal pour illustrer l'impact du type de véhicule sur la prime"
  },
  {
    "id": "V288",
    "marque": "Volkswagen",
    "modele": "Golf GTI",
    "version": "2.0 TSI 245ch Perf.",
    "annee": 2020,
    "cvFiscaux": 10,
    "cvDIN": 245,
    "puissanceKw": 180,
    "cylindree": 1984,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 24500,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1400,
    "commentairePedagogique": "GTI — idéal pour illustrer l'impact du type de véhicule sur la prime"
  },
  {
    "id": "V289",
    "marque": "Volkswagen",
    "modele": "Golf GTI",
    "version": "2.0 TSI 245ch Perf.",
    "annee": 2021,
    "cvFiscaux": 10,
    "cvDIN": 245,
    "puissanceKw": 180,
    "cylindree": 1984,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 27000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1400,
    "commentairePedagogique": "GTI — idéal pour illustrer l'impact du type de véhicule sur la prime"
  },
  {
    "id": "V290",
    "marque": "Volkswagen",
    "modele": "Golf GTI",
    "version": "2.0 TSI 245ch Perf.",
    "annee": 2022,
    "cvFiscaux": 10,
    "cvDIN": 245,
    "puissanceKw": 180,
    "cylindree": 1984,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 30000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1400,
    "commentairePedagogique": "GTI — idéal pour illustrer l'impact du type de véhicule sur la prime"
  },
  {
    "id": "V291",
    "marque": "Volkswagen",
    "modele": "Golf GTI",
    "version": "2.0 TSI 220ch",
    "annee": 2016,
    "cvFiscaux": 9,
    "cvDIN": 220,
    "puissanceKw": 162,
    "cylindree": 1984,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 16000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1400,
    "commentairePedagogique": null
  },
  {
    "id": "V292",
    "marque": "Volkswagen",
    "modele": "Golf GTI",
    "version": "2.0 TSI 220ch",
    "annee": 2017,
    "cvFiscaux": 9,
    "cvDIN": 220,
    "puissanceKw": 162,
    "cylindree": 1984,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 18000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1400,
    "commentairePedagogique": null
  },
  {
    "id": "V293",
    "marque": "Volkswagen",
    "modele": "Golf GTI",
    "version": "2.0 TSI 220ch",
    "annee": 2018,
    "cvFiscaux": 9,
    "cvDIN": 220,
    "puissanceKw": 162,
    "cylindree": 1984,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 20000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1400,
    "commentairePedagogique": null
  },
  {
    "id": "V294",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "118i 136ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1499,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 20000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V295",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "118i 136ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1499,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 22000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V296",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "118i 136ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1499,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 24000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V297",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "118i 136ch",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1499,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 26000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V298",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "120d 190ch M Sport",
    "annee": 2020,
    "cvFiscaux": 8,
    "cvDIN": 190,
    "puissanceKw": 140,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 24000,
    "valeurNeuf": 44000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V299",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "120d 190ch M Sport",
    "annee": 2021,
    "cvFiscaux": 8,
    "cvDIN": 190,
    "puissanceKw": 140,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 26500,
    "valeurNeuf": 44000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V300",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "120d 190ch M Sport",
    "annee": 2022,
    "cvFiscaux": 8,
    "cvDIN": 190,
    "puissanceKw": 140,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 29000,
    "valeurNeuf": 44000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V301",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "M135i xDrive 306ch",
    "annee": 2019,
    "cvFiscaux": 13,
    "cvDIN": 306,
    "puissanceKw": 225,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 32000,
    "valeurNeuf": 54000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V302",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "M135i xDrive 306ch",
    "annee": 2020,
    "cvFiscaux": 13,
    "cvDIN": 306,
    "puissanceKw": 225,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 35000,
    "valeurNeuf": 54000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V303",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "M135i xDrive 306ch",
    "annee": 2021,
    "cvFiscaux": 13,
    "cvDIN": 306,
    "puissanceKw": 225,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 38000,
    "valeurNeuf": 54000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V304",
    "marque": "BMW",
    "modele": "Série 1",
    "version": "M135i xDrive 306ch",
    "annee": 2022,
    "cvFiscaux": 13,
    "cvDIN": 306,
    "puissanceKw": 225,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 41000,
    "valeurNeuf": 54000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1500,
    "commentairePedagogique": null
  },
  {
    "id": "V305",
    "marque": "Alpine",
    "modele": "A110",
    "version": "1.8 Turbo 252ch Pure",
    "annee": 2018,
    "cvFiscaux": 11,
    "cvDIN": 252,
    "puissanceKw": 185,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 35000,
    "valeurNeuf": 60000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1103,
    "commentairePedagogique": "Sportive pure — valeur élevée, prime importante, sujet de discussion en cours"
  },
  {
    "id": "V306",
    "marque": "Alpine",
    "modele": "A110",
    "version": "1.8 Turbo 252ch Pure",
    "annee": 2019,
    "cvFiscaux": 11,
    "cvDIN": 252,
    "puissanceKw": 185,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 37000,
    "valeurNeuf": 60000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1103,
    "commentairePedagogique": "Sportive pure — valeur élevée, prime importante, sujet de discussion en cours"
  },
  {
    "id": "V307",
    "marque": "Alpine",
    "modele": "A110",
    "version": "1.8 Turbo 252ch Pure",
    "annee": 2020,
    "cvFiscaux": 11,
    "cvDIN": 252,
    "puissanceKw": 185,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 40000,
    "valeurNeuf": 60000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1103,
    "commentairePedagogique": "Sportive pure — valeur élevée, prime importante, sujet de discussion en cours"
  },
  {
    "id": "V308",
    "marque": "Alpine",
    "modele": "A110",
    "version": "1.8 Turbo 252ch Pure",
    "annee": 2021,
    "cvFiscaux": 11,
    "cvDIN": 252,
    "puissanceKw": 185,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 43000,
    "valeurNeuf": 60000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1103,
    "commentairePedagogique": "Sportive pure — valeur élevée, prime importante, sujet de discussion en cours"
  },
  {
    "id": "V309",
    "marque": "Alpine",
    "modele": "A110",
    "version": "1.8 Turbo 252ch Pure",
    "annee": 2022,
    "cvFiscaux": 11,
    "cvDIN": 252,
    "puissanceKw": 185,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 46000,
    "valeurNeuf": 60000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1103,
    "commentairePedagogique": "Sportive pure — valeur élevée, prime importante, sujet de discussion en cours"
  },
  {
    "id": "V310",
    "marque": "Honda",
    "modele": "Civic Type R",
    "version": "2.0 VTEC Turbo 320ch",
    "annee": 2018,
    "cvFiscaux": 14,
    "cvDIN": 320,
    "puissanceKw": 235,
    "cylindree": 1996,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 27000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1413,
    "commentairePedagogique": null
  },
  {
    "id": "V311",
    "marque": "Honda",
    "modele": "Civic Type R",
    "version": "2.0 VTEC Turbo 320ch",
    "annee": 2019,
    "cvFiscaux": 14,
    "cvDIN": 320,
    "puissanceKw": 235,
    "cylindree": 1996,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 29000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1413,
    "commentairePedagogique": null
  },
  {
    "id": "V312",
    "marque": "Honda",
    "modele": "Civic Type R",
    "version": "2.0 VTEC Turbo 320ch",
    "annee": 2020,
    "cvFiscaux": 14,
    "cvDIN": 320,
    "puissanceKw": 235,
    "cylindree": 1996,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 32000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1413,
    "commentairePedagogique": null
  },
  {
    "id": "V313",
    "marque": "Honda",
    "modele": "Civic Type R",
    "version": "2.0 VTEC Turbo 320ch",
    "annee": 2021,
    "cvFiscaux": 14,
    "cvDIN": 320,
    "puissanceKw": 235,
    "cylindree": 1996,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 35000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1413,
    "commentairePedagogique": null
  },
  {
    "id": "V314",
    "marque": "Honda",
    "modele": "Civic Type R",
    "version": "2.0 VTEC Turbo 320ch",
    "annee": 2022,
    "cvFiscaux": 14,
    "cvDIN": 320,
    "puissanceKw": 235,
    "cylindree": 1996,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 38000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1413,
    "commentairePedagogique": null
  },
  {
    "id": "V315",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A200 163ch",
    "annee": 2018,
    "cvFiscaux": 8,
    "cvDIN": 163,
    "puissanceKw": 120,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 20000,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": null
  },
  {
    "id": "V316",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A200 163ch",
    "annee": 2019,
    "cvFiscaux": 8,
    "cvDIN": 163,
    "puissanceKw": 120,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 22000,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": null
  },
  {
    "id": "V317",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A200 163ch",
    "annee": 2020,
    "cvFiscaux": 8,
    "cvDIN": 163,
    "puissanceKw": 120,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 24500,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": null
  },
  {
    "id": "V318",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A200 163ch",
    "annee": 2021,
    "cvFiscaux": 8,
    "cvDIN": 163,
    "puissanceKw": 120,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 27000,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": null
  },
  {
    "id": "V319",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A200 163ch",
    "annee": 2022,
    "cvFiscaux": 8,
    "cvDIN": 163,
    "puissanceKw": 120,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 29500,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": null
  },
  {
    "id": "V320",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A220d 190ch 4Matic",
    "annee": 2019,
    "cvFiscaux": 9,
    "cvDIN": 190,
    "puissanceKw": 140,
    "cylindree": 1950,
    "carburant": "diesel",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 24000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": null
  },
  {
    "id": "V321",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A220d 190ch 4Matic",
    "annee": 2020,
    "cvFiscaux": 9,
    "cvDIN": 190,
    "puissanceKw": 140,
    "cylindree": 1950,
    "carburant": "diesel",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 26000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": null
  },
  {
    "id": "V322",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A220d 190ch 4Matic",
    "annee": 2021,
    "cvFiscaux": 9,
    "cvDIN": 190,
    "puissanceKw": 140,
    "cylindree": 1950,
    "carburant": "diesel",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 28000,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": null
  },
  {
    "id": "V323",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A45 S AMG 421ch 4Mo",
    "annee": 2019,
    "cvFiscaux": 18,
    "cvDIN": 421,
    "puissanceKw": 310,
    "cylindree": 1991,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 45000,
    "valeurNeuf": 72000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": "Extrême haut de gamme — cas pédagogique prime très élevée"
  },
  {
    "id": "V324",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A45 S AMG 421ch 4Mo",
    "annee": 2020,
    "cvFiscaux": 18,
    "cvDIN": 421,
    "puissanceKw": 310,
    "cylindree": 1991,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 48000,
    "valeurNeuf": 72000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": "Extrême haut de gamme — cas pédagogique prime très élevée"
  },
  {
    "id": "V325",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A45 S AMG 421ch 4Mo",
    "annee": 2021,
    "cvFiscaux": 18,
    "cvDIN": 421,
    "puissanceKw": 310,
    "cylindree": 1991,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 52000,
    "valeurNeuf": 72000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": "Extrême haut de gamme — cas pédagogique prime très élevée"
  },
  {
    "id": "V326",
    "marque": "Mercedes",
    "modele": "Classe A",
    "version": "A45 S AMG 421ch 4Mo",
    "annee": 2022,
    "cvFiscaux": 18,
    "cvDIN": 421,
    "puissanceKw": 310,
    "cylindree": 1991,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 56000,
    "valeurNeuf": 72000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1425,
    "commentairePedagogique": "Extrême haut de gamme — cas pédagogique prime très élevée"
  },
  {
    "id": "V327",
    "marque": "Audi",
    "modele": "A3",
    "version": "35 TFSI 150ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 22000,
    "valeurNeuf": 37000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1385,
    "commentairePedagogique": null
  },
  {
    "id": "V328",
    "marque": "Audi",
    "modele": "A3",
    "version": "35 TFSI 150ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 24000,
    "valeurNeuf": 37000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1385,
    "commentairePedagogique": null
  },
  {
    "id": "V329",
    "marque": "Audi",
    "modele": "A3",
    "version": "35 TFSI 150ch",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 26000,
    "valeurNeuf": 37000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1385,
    "commentairePedagogique": null
  },
  {
    "id": "V330",
    "marque": "Audi",
    "modele": "A3",
    "version": "35 TFSI 150ch",
    "annee": 2023,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 28000,
    "valeurNeuf": 37000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1385,
    "commentairePedagogique": null
  },
  {
    "id": "V331",
    "marque": "Audi",
    "modele": "A3",
    "version": "30 TDI 116ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 116,
    "puissanceKw": 85,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 21000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1385,
    "commentairePedagogique": null
  },
  {
    "id": "V332",
    "marque": "Audi",
    "modele": "A3",
    "version": "30 TDI 116ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 116,
    "puissanceKw": 85,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 23000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1385,
    "commentairePedagogique": null
  },
  {
    "id": "V333",
    "marque": "Audi",
    "modele": "A3",
    "version": "30 TDI 116ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 116,
    "puissanceKw": 85,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 25000,
    "valeurNeuf": 36000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1385,
    "commentairePedagogique": null
  },
  {
    "id": "V334",
    "marque": "Audi",
    "modele": "A3",
    "version": "40 TFSI e 204ch PHEV",
    "annee": 2021,
    "cvFiscaux": 9,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": 1395,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 28000,
    "valeurNeuf": 48000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1385,
    "commentairePedagogique": null
  },
  {
    "id": "V335",
    "marque": "Audi",
    "modele": "A3",
    "version": "40 TFSI e 204ch PHEV",
    "annee": 2022,
    "cvFiscaux": 9,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": 1395,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 31000,
    "valeurNeuf": 48000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1385,
    "commentairePedagogique": null
  },
  {
    "id": "V336",
    "marque": "Audi",
    "modele": "A3",
    "version": "40 TFSI e 204ch PHEV",
    "annee": 2023,
    "cvFiscaux": 9,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": 1395,
    "carburant": "hybride",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 34000,
    "valeurNeuf": 48000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1385,
    "commentairePedagogique": null
  },
  {
    "id": "V337",
    "marque": "Renault",
    "modele": "Kangoo",
    "version": "1.5 dCi 90ch",
    "annee": 2016,
    "cvFiscaux": 4,
    "cvDIN": 90,
    "puissanceKw": 66,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 7000,
    "valeurNeuf": 18000,
    "nbPlaces": 2,
    "nbPortes": 4,
    "poidsVide": 1300,
    "commentairePedagogique": "Utilitaire léger très courant en TPE/artisanat — bon cas usage professionnel"
  },
  {
    "id": "V338",
    "marque": "Renault",
    "modele": "Kangoo",
    "version": "1.5 dCi 90ch",
    "annee": 2017,
    "cvFiscaux": 4,
    "cvDIN": 90,
    "puissanceKw": 66,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 8000,
    "valeurNeuf": 18000,
    "nbPlaces": 2,
    "nbPortes": 4,
    "poidsVide": 1300,
    "commentairePedagogique": "Utilitaire léger très courant en TPE/artisanat — bon cas usage professionnel"
  },
  {
    "id": "V339",
    "marque": "Renault",
    "modele": "Kangoo",
    "version": "1.5 dCi 90ch",
    "annee": 2018,
    "cvFiscaux": 4,
    "cvDIN": 90,
    "puissanceKw": 66,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 9000,
    "valeurNeuf": 18000,
    "nbPlaces": 2,
    "nbPortes": 4,
    "poidsVide": 1300,
    "commentairePedagogique": "Utilitaire léger très courant en TPE/artisanat — bon cas usage professionnel"
  },
  {
    "id": "V340",
    "marque": "Renault",
    "modele": "Kangoo",
    "version": "1.5 dCi 90ch",
    "annee": 2019,
    "cvFiscaux": 4,
    "cvDIN": 90,
    "puissanceKw": 66,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 10000,
    "valeurNeuf": 18000,
    "nbPlaces": 2,
    "nbPortes": 4,
    "poidsVide": 1300,
    "commentairePedagogique": "Utilitaire léger très courant en TPE/artisanat — bon cas usage professionnel"
  },
  {
    "id": "V341",
    "marque": "Renault",
    "modele": "Kangoo",
    "version": "1.5 dCi 90ch",
    "annee": 2020,
    "cvFiscaux": 4,
    "cvDIN": 90,
    "puissanceKw": 66,
    "cylindree": 1461,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 11000,
    "valeurNeuf": 18000,
    "nbPlaces": 2,
    "nbPortes": 4,
    "poidsVide": 1300,
    "commentairePedagogique": "Utilitaire léger très courant en TPE/artisanat — bon cas usage professionnel"
  },
  {
    "id": "V342",
    "marque": "Renault",
    "modele": "Kangoo",
    "version": "1.3 TCe 100ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 13000,
    "valeurNeuf": 22000,
    "nbPlaces": 2,
    "nbPortes": 4,
    "poidsVide": 1300,
    "commentairePedagogique": "Utilitaire léger très courant en TPE/artisanat — bon cas usage professionnel"
  },
  {
    "id": "V343",
    "marque": "Renault",
    "modele": "Kangoo",
    "version": "1.3 TCe 100ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 15000,
    "valeurNeuf": 22000,
    "nbPlaces": 2,
    "nbPortes": 4,
    "poidsVide": 1300,
    "commentairePedagogique": "Utilitaire léger très courant en TPE/artisanat — bon cas usage professionnel"
  },
  {
    "id": "V344",
    "marque": "Renault",
    "modele": "Kangoo",
    "version": "1.3 TCe 100ch",
    "annee": 2023,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1332,
    "carburant": "essence",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 17000,
    "valeurNeuf": 22000,
    "nbPlaces": 2,
    "nbPortes": 4,
    "poidsVide": 1300,
    "commentairePedagogique": "Utilitaire léger très courant en TPE/artisanat — bon cas usage professionnel"
  },
  {
    "id": "V345",
    "marque": "Renault",
    "modele": "Kangoo",
    "version": "E-Tech Electric 90ch",
    "annee": 2022,
    "cvFiscaux": 1,
    "cvDIN": 90,
    "puissanceKw": 66,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 20000,
    "valeurNeuf": 35000,
    "nbPlaces": 2,
    "nbPortes": 4,
    "poidsVide": 1300,
    "commentairePedagogique": "Utilitaire léger très courant en TPE/artisanat — bon cas usage professionnel"
  },
  {
    "id": "V346",
    "marque": "Renault",
    "modele": "Kangoo",
    "version": "E-Tech Electric 90ch",
    "annee": 2023,
    "cvFiscaux": 1,
    "cvDIN": 90,
    "puissanceKw": 66,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 22000,
    "valeurNeuf": 35000,
    "nbPlaces": 2,
    "nbPortes": 4,
    "poidsVide": 1300,
    "commentairePedagogique": "Utilitaire léger très courant en TPE/artisanat — bon cas usage professionnel"
  },
  {
    "id": "V347",
    "marque": "Citroën",
    "modele": "Berlingo",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 11000,
    "valeurNeuf": 23000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V348",
    "marque": "Citroën",
    "modele": "Berlingo",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 12500,
    "valeurNeuf": 23000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V349",
    "marque": "Citroën",
    "modele": "Berlingo",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 14000,
    "valeurNeuf": 23000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V350",
    "marque": "Citroën",
    "modele": "Berlingo",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 15500,
    "valeurNeuf": 23000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V351",
    "marque": "Citroën",
    "modele": "Berlingo",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 17000,
    "valeurNeuf": 23000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V352",
    "marque": "Citroën",
    "modele": "Berlingo",
    "version": "e-Berlingo 136ch Elec",
    "annee": 2021,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 18000,
    "valeurNeuf": 37000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V353",
    "marque": "Citroën",
    "modele": "Berlingo",
    "version": "e-Berlingo 136ch Elec",
    "annee": 2022,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 20000,
    "valeurNeuf": 37000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V354",
    "marque": "Citroën",
    "modele": "Berlingo",
    "version": "e-Berlingo 136ch Elec",
    "annee": 2023,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 22000,
    "valeurNeuf": 37000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V355",
    "marque": "Ford",
    "modele": "Transit Custom",
    "version": "2.0 EcoBlue 130ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 14000,
    "valeurNeuf": 35000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1700,
    "commentairePedagogique": "VUL grand volume — usage professionnel, coefficient tournée à appliquer"
  },
  {
    "id": "V356",
    "marque": "Ford",
    "modele": "Transit Custom",
    "version": "2.0 EcoBlue 130ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 15500,
    "valeurNeuf": 35000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1700,
    "commentairePedagogique": "VUL grand volume — usage professionnel, coefficient tournée à appliquer"
  },
  {
    "id": "V357",
    "marque": "Ford",
    "modele": "Transit Custom",
    "version": "2.0 EcoBlue 130ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 17000,
    "valeurNeuf": 35000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1700,
    "commentairePedagogique": "VUL grand volume — usage professionnel, coefficient tournée à appliquer"
  },
  {
    "id": "V358",
    "marque": "Ford",
    "modele": "Transit Custom",
    "version": "2.0 EcoBlue 130ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 18500,
    "valeurNeuf": 35000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1700,
    "commentairePedagogique": "VUL grand volume — usage professionnel, coefficient tournée à appliquer"
  },
  {
    "id": "V359",
    "marque": "Ford",
    "modele": "Transit Custom",
    "version": "2.0 EcoBlue 130ch",
    "annee": 2022,
    "cvFiscaux": 6,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 20000,
    "valeurNeuf": 35000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1700,
    "commentairePedagogique": "VUL grand volume — usage professionnel, coefficient tournée à appliquer"
  },
  {
    "id": "V360",
    "marque": "Ford",
    "modele": "Transit Custom",
    "version": "2.0 EcoBlue 170ch 4x4",
    "annee": 2019,
    "cvFiscaux": 8,
    "cvDIN": 170,
    "puissanceKw": 125,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 19000,
    "valeurNeuf": 42000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1700,
    "commentairePedagogique": "VUL grand volume — usage professionnel, coefficient tournée à appliquer"
  },
  {
    "id": "V361",
    "marque": "Ford",
    "modele": "Transit Custom",
    "version": "2.0 EcoBlue 170ch 4x4",
    "annee": 2020,
    "cvFiscaux": 8,
    "cvDIN": 170,
    "puissanceKw": 125,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 21000,
    "valeurNeuf": 42000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1700,
    "commentairePedagogique": "VUL grand volume — usage professionnel, coefficient tournée à appliquer"
  },
  {
    "id": "V362",
    "marque": "Ford",
    "modele": "Transit Custom",
    "version": "2.0 EcoBlue 170ch 4x4",
    "annee": 2021,
    "cvFiscaux": 8,
    "cvDIN": 170,
    "puissanceKw": 125,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 23000,
    "valeurNeuf": 42000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1700,
    "commentairePedagogique": "VUL grand volume — usage professionnel, coefficient tournée à appliquer"
  },
  {
    "id": "V363",
    "marque": "Peugeot",
    "modele": "Partner",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2018,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 10500,
    "valeurNeuf": 22000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V364",
    "marque": "Peugeot",
    "modele": "Partner",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2019,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 12000,
    "valeurNeuf": 22000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V365",
    "marque": "Peugeot",
    "modele": "Partner",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2020,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 13500,
    "valeurNeuf": 22000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V366",
    "marque": "Peugeot",
    "modele": "Partner",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2021,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 15000,
    "valeurNeuf": 22000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V367",
    "marque": "Peugeot",
    "modele": "Partner",
    "version": "1.5 BlueHDi 100ch",
    "annee": 2022,
    "cvFiscaux": 5,
    "cvDIN": 100,
    "puissanceKw": 74,
    "cylindree": 1499,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 16500,
    "valeurNeuf": 22000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V368",
    "marque": "Peugeot",
    "modele": "Partner",
    "version": "e-Partner 136ch Elec",
    "annee": 2022,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 18000,
    "valeurNeuf": 36000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V369",
    "marque": "Peugeot",
    "modele": "Partner",
    "version": "e-Partner 136ch Elec",
    "annee": 2023,
    "cvFiscaux": 1,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 20000,
    "valeurNeuf": 36000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1340,
    "commentairePedagogique": null
  },
  {
    "id": "V370",
    "marque": "Volkswagen",
    "modele": "Transporter",
    "version": "2.0 TDI 150ch",
    "annee": 2017,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 20000,
    "valeurNeuf": 45000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V371",
    "marque": "Volkswagen",
    "modele": "Transporter",
    "version": "2.0 TDI 150ch",
    "annee": 2018,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 22000,
    "valeurNeuf": 45000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V372",
    "marque": "Volkswagen",
    "modele": "Transporter",
    "version": "2.0 TDI 150ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 24000,
    "valeurNeuf": 45000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V373",
    "marque": "Volkswagen",
    "modele": "Transporter",
    "version": "2.0 TDI 150ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 26000,
    "valeurNeuf": 45000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V374",
    "marque": "Volkswagen",
    "modele": "Transporter",
    "version": "2.0 TDI 150ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 28000,
    "valeurNeuf": 45000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 1850,
    "commentairePedagogique": null
  },
  {
    "id": "V375",
    "marque": "Mercedes",
    "modele": "Sprinter",
    "version": "314 CDI 143ch",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 143,
    "puissanceKw": 105,
    "cylindree": 2143,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 22000,
    "valeurNeuf": 50000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 2100,
    "commentairePedagogique": "Grand utilitaire — cas idéal pour exercice RC Pro artisan"
  },
  {
    "id": "V376",
    "marque": "Mercedes",
    "modele": "Sprinter",
    "version": "314 CDI 143ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 143,
    "puissanceKw": 105,
    "cylindree": 2143,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 24000,
    "valeurNeuf": 50000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 2100,
    "commentairePedagogique": "Grand utilitaire — cas idéal pour exercice RC Pro artisan"
  },
  {
    "id": "V377",
    "marque": "Mercedes",
    "modele": "Sprinter",
    "version": "314 CDI 143ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 143,
    "puissanceKw": 105,
    "cylindree": 2143,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 26000,
    "valeurNeuf": 50000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 2100,
    "commentairePedagogique": "Grand utilitaire — cas idéal pour exercice RC Pro artisan"
  },
  {
    "id": "V378",
    "marque": "Mercedes",
    "modele": "Sprinter",
    "version": "314 CDI 143ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 143,
    "puissanceKw": 105,
    "cylindree": 2143,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 28000,
    "valeurNeuf": 50000,
    "nbPlaces": 3,
    "nbPortes": 4,
    "poidsVide": 2100,
    "commentairePedagogique": "Grand utilitaire — cas idéal pour exercice RC Pro artisan"
  },
  {
    "id": "V379",
    "marque": "Renault",
    "modele": "R5",
    "version": "1.1 45ch",
    "annee": 1984,
    "cvFiscaux": 4,
    "cvDIN": 45,
    "puissanceKw": 33,
    "cylindree": 1108,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 4500,
    "valeurNeuf": null,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 720,
    "commentairePedagogique": "Véhicule de collection — illustration assurance collection vs usage quotidien"
  },
  {
    "id": "V380",
    "marque": "Renault",
    "modele": "R5",
    "version": "1.1 45ch",
    "annee": 1985,
    "cvFiscaux": 4,
    "cvDIN": 45,
    "puissanceKw": 33,
    "cylindree": 1108,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 5500,
    "valeurNeuf": null,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 720,
    "commentairePedagogique": "Véhicule de collection — illustration assurance collection vs usage quotidien"
  },
  {
    "id": "V381",
    "marque": "Renault",
    "modele": "R5",
    "version": "1.1 45ch",
    "annee": 1986,
    "cvFiscaux": 4,
    "cvDIN": 45,
    "puissanceKw": 33,
    "cylindree": 1108,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 7000,
    "valeurNeuf": null,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 720,
    "commentairePedagogique": "Véhicule de collection — illustration assurance collection vs usage quotidien"
  },
  {
    "id": "V382",
    "marque": "Citroën",
    "modele": "2CV",
    "version": "602 29ch",
    "annee": 1977,
    "cvFiscaux": 3,
    "cvDIN": 29,
    "puissanceKw": 21,
    "cylindree": 602,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 8000,
    "valeurNeuf": null,
    "nbPlaces": 4,
    "nbPortes": 4,
    "poidsVide": 560,
    "commentairePedagogique": "Icône — abordez l'assurance collection et la valeur conventionnelle"
  },
  {
    "id": "V383",
    "marque": "Citroën",
    "modele": "2CV",
    "version": "602 29ch",
    "annee": 1978,
    "cvFiscaux": 3,
    "cvDIN": 29,
    "puissanceKw": 21,
    "cylindree": 602,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 9000,
    "valeurNeuf": null,
    "nbPlaces": 4,
    "nbPortes": 4,
    "poidsVide": 560,
    "commentairePedagogique": "Icône — abordez l'assurance collection et la valeur conventionnelle"
  },
  {
    "id": "V384",
    "marque": "Citroën",
    "modele": "2CV",
    "version": "602 29ch",
    "annee": 1979,
    "cvFiscaux": 3,
    "cvDIN": 29,
    "puissanceKw": 21,
    "cylindree": 602,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 10000,
    "valeurNeuf": null,
    "nbPlaces": 4,
    "nbPortes": 4,
    "poidsVide": 560,
    "commentairePedagogique": "Icône — abordez l'assurance collection et la valeur conventionnelle"
  },
  {
    "id": "V385",
    "marque": "Citroën",
    "modele": "2CV",
    "version": "602 29ch",
    "annee": 1980,
    "cvFiscaux": 3,
    "cvDIN": 29,
    "puissanceKw": 21,
    "cylindree": 602,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 11000,
    "valeurNeuf": null,
    "nbPlaces": 4,
    "nbPortes": 4,
    "poidsVide": 560,
    "commentairePedagogique": "Icône — abordez l'assurance collection et la valeur conventionnelle"
  },
  {
    "id": "V386",
    "marque": "Citroën",
    "modele": "2CV",
    "version": "602 29ch",
    "annee": 1981,
    "cvFiscaux": 3,
    "cvDIN": 29,
    "puissanceKw": 21,
    "cylindree": 602,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 12000,
    "valeurNeuf": null,
    "nbPlaces": 4,
    "nbPortes": 4,
    "poidsVide": 560,
    "commentairePedagogique": "Icône — abordez l'assurance collection et la valeur conventionnelle"
  },
  {
    "id": "V387",
    "marque": "Citroën",
    "modele": "2CV",
    "version": "602 29ch",
    "annee": 1982,
    "cvFiscaux": 3,
    "cvDIN": 29,
    "puissanceKw": 21,
    "cylindree": 602,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 14000,
    "valeurNeuf": null,
    "nbPlaces": 4,
    "nbPortes": 4,
    "poidsVide": 560,
    "commentairePedagogique": "Icône — abordez l'assurance collection et la valeur conventionnelle"
  },
  {
    "id": "V388",
    "marque": "Volkswagen",
    "modele": "Golf 1 GTI",
    "version": "1.8 112ch",
    "annee": 1982,
    "cvFiscaux": 8,
    "cvDIN": 112,
    "puissanceKw": 82,
    "cylindree": 1781,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 15000,
    "valeurNeuf": null,
    "nbPlaces": 5,
    "nbPortes": 3,
    "poidsVide": 810,
    "commentairePedagogique": "Youngtimer à forte valeur — illustre la valeur agréée vs valeur vénale"
  },
  {
    "id": "V389",
    "marque": "Volkswagen",
    "modele": "Golf 1 GTI",
    "version": "1.8 112ch",
    "annee": 1983,
    "cvFiscaux": 8,
    "cvDIN": 112,
    "puissanceKw": 82,
    "cylindree": 1781,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 18000,
    "valeurNeuf": null,
    "nbPlaces": 5,
    "nbPortes": 3,
    "poidsVide": 810,
    "commentairePedagogique": "Youngtimer à forte valeur — illustre la valeur agréée vs valeur vénale"
  },
  {
    "id": "V390",
    "marque": "Volkswagen",
    "modele": "Golf 1 GTI",
    "version": "1.8 112ch",
    "annee": 1984,
    "cvFiscaux": 8,
    "cvDIN": 112,
    "puissanceKw": 82,
    "cylindree": 1781,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 22000,
    "valeurNeuf": null,
    "nbPlaces": 5,
    "nbPortes": 3,
    "poidsVide": 810,
    "commentairePedagogique": "Youngtimer à forte valeur — illustre la valeur agréée vs valeur vénale"
  },
  {
    "id": "V391",
    "marque": "Peugeot",
    "modele": "205 GTI",
    "version": "1.9 130ch",
    "annee": 1987,
    "cvFiscaux": 9,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1905,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 18000,
    "valeurNeuf": null,
    "nbPlaces": 5,
    "nbPortes": 3,
    "poidsVide": 870,
    "commentairePedagogique": "Très recherchée — cas valeur agréée en assurance collection"
  },
  {
    "id": "V392",
    "marque": "Peugeot",
    "modele": "205 GTI",
    "version": "1.9 130ch",
    "annee": 1988,
    "cvFiscaux": 9,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1905,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 20000,
    "valeurNeuf": null,
    "nbPlaces": 5,
    "nbPortes": 3,
    "poidsVide": 870,
    "commentairePedagogique": "Très recherchée — cas valeur agréée en assurance collection"
  },
  {
    "id": "V393",
    "marque": "Peugeot",
    "modele": "205 GTI",
    "version": "1.9 130ch",
    "annee": 1989,
    "cvFiscaux": 9,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1905,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 24000,
    "valeurNeuf": null,
    "nbPlaces": 5,
    "nbPortes": 3,
    "poidsVide": 870,
    "commentairePedagogique": "Très recherchée — cas valeur agréée en assurance collection"
  },
  {
    "id": "V394",
    "marque": "Peugeot",
    "modele": "205 GTI",
    "version": "1.9 130ch",
    "annee": 1990,
    "cvFiscaux": 9,
    "cvDIN": 130,
    "puissanceKw": 96,
    "cylindree": 1905,
    "carburant": "essence",
    "typeVehicule": "ancienne",
    "carrosserie": "Véhicule de collection",
    "valeurEstimee": 28000,
    "valeurNeuf": null,
    "nbPlaces": 5,
    "nbPortes": 3,
    "poidsVide": 870,
    "commentairePedagogique": "Très recherchée — cas valeur agréée en assurance collection"
  },
  {
    "id": "V395",
    "marque": "Renault",
    "modele": "Zoé",
    "version": "R110 110ch 41kWh",
    "annee": 2018,
    "cvFiscaux": 1,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 10000,
    "valeurNeuf": 32000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1502,
    "commentairePedagogique": null
  },
  {
    "id": "V396",
    "marque": "Renault",
    "modele": "Zoé",
    "version": "R110 110ch 41kWh",
    "annee": 2019,
    "cvFiscaux": 1,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 12000,
    "valeurNeuf": 32000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1502,
    "commentairePedagogique": null
  },
  {
    "id": "V397",
    "marque": "Renault",
    "modele": "Zoé",
    "version": "R110 110ch 41kWh",
    "annee": 2020,
    "cvFiscaux": 1,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 14000,
    "valeurNeuf": 32000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1502,
    "commentairePedagogique": null
  },
  {
    "id": "V398",
    "marque": "Renault",
    "modele": "Zoé",
    "version": "R110 110ch 41kWh",
    "annee": 2021,
    "cvFiscaux": 1,
    "cvDIN": 110,
    "puissanceKw": 81,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 16000,
    "valeurNeuf": 32000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1502,
    "commentairePedagogique": null
  },
  {
    "id": "V399",
    "marque": "Renault",
    "modele": "Zoé",
    "version": "R135 135ch 52kWh",
    "annee": 2020,
    "cvFiscaux": 1,
    "cvDIN": 135,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 14000,
    "valeurNeuf": 35000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1502,
    "commentairePedagogique": null
  },
  {
    "id": "V400",
    "marque": "Renault",
    "modele": "Zoé",
    "version": "R135 135ch 52kWh",
    "annee": 2021,
    "cvFiscaux": 1,
    "cvDIN": 135,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 16500,
    "valeurNeuf": 35000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1502,
    "commentairePedagogique": null
  },
  {
    "id": "V401",
    "marque": "Renault",
    "modele": "Zoé",
    "version": "R135 135ch 52kWh",
    "annee": 2022,
    "cvFiscaux": 1,
    "cvDIN": 135,
    "puissanceKw": 100,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "citadine",
    "carrosserie": "Berline",
    "valeurEstimee": 19000,
    "valeurNeuf": 35000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1502,
    "commentairePedagogique": null
  },
  {
    "id": "V402",
    "marque": "Volkswagen",
    "modele": "ID.3",
    "version": "Pure Performance 150ch",
    "annee": 2021,
    "cvFiscaux": 2,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 22000,
    "valeurNeuf": 40000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1771,
    "commentairePedagogique": null
  },
  {
    "id": "V403",
    "marque": "Volkswagen",
    "modele": "ID.3",
    "version": "Pure Performance 150ch",
    "annee": 2022,
    "cvFiscaux": 2,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 25000,
    "valeurNeuf": 40000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1771,
    "commentairePedagogique": null
  },
  {
    "id": "V404",
    "marque": "Volkswagen",
    "modele": "ID.3",
    "version": "Pure Performance 150ch",
    "annee": 2023,
    "cvFiscaux": 2,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 28000,
    "valeurNeuf": 40000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1771,
    "commentairePedagogique": null
  },
  {
    "id": "V405",
    "marque": "Volkswagen",
    "modele": "ID.3",
    "version": "Pro Performance 204ch",
    "annee": 2021,
    "cvFiscaux": 2,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 25000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1771,
    "commentairePedagogique": null
  },
  {
    "id": "V406",
    "marque": "Volkswagen",
    "modele": "ID.3",
    "version": "Pro Performance 204ch",
    "annee": 2022,
    "cvFiscaux": 2,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 28000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1771,
    "commentairePedagogique": null
  },
  {
    "id": "V407",
    "marque": "Volkswagen",
    "modele": "ID.3",
    "version": "Pro Performance 204ch",
    "annee": 2023,
    "cvFiscaux": 2,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 31000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1771,
    "commentairePedagogique": null
  },
  {
    "id": "V408",
    "marque": "Tesla",
    "modele": "Model Y",
    "version": "Long Range AWD 351ch",
    "annee": 2021,
    "cvFiscaux": 4,
    "cvDIN": 351,
    "puissanceKw": 258,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 40000,
    "valeurNeuf": 65000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1979,
    "commentairePedagogique": "SUV électrique premium — prime souvent élevée, bon sujet de débat"
  },
  {
    "id": "V409",
    "marque": "Tesla",
    "modele": "Model Y",
    "version": "Long Range AWD 351ch",
    "annee": 2022,
    "cvFiscaux": 4,
    "cvDIN": 351,
    "puissanceKw": 258,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 43000,
    "valeurNeuf": 65000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1979,
    "commentairePedagogique": "SUV électrique premium — prime souvent élevée, bon sujet de débat"
  },
  {
    "id": "V410",
    "marque": "Tesla",
    "modele": "Model Y",
    "version": "Long Range AWD 351ch",
    "annee": 2023,
    "cvFiscaux": 4,
    "cvDIN": 351,
    "puissanceKw": 258,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 46000,
    "valeurNeuf": 65000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1979,
    "commentairePedagogique": "SUV électrique premium — prime souvent élevée, bon sujet de débat"
  },
  {
    "id": "V411",
    "marque": "Tesla",
    "modele": "Model Y",
    "version": "Standard Range 220ch",
    "annee": 2022,
    "cvFiscaux": 2,
    "cvDIN": 220,
    "puissanceKw": 162,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 35000,
    "valeurNeuf": 50000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1979,
    "commentairePedagogique": null
  },
  {
    "id": "V412",
    "marque": "Tesla",
    "modele": "Model Y",
    "version": "Standard Range 220ch",
    "annee": 2023,
    "cvFiscaux": 2,
    "cvDIN": 220,
    "puissanceKw": 162,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 38000,
    "valeurNeuf": 50000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1979,
    "commentairePedagogique": null
  },
  {
    "id": "V413",
    "marque": "Kia",
    "modele": "EV6",
    "version": "77.4 kWh RWD 229ch",
    "annee": 2022,
    "cvFiscaux": 2,
    "cvDIN": 229,
    "puissanceKw": 168,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 36000,
    "valeurNeuf": 52000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 2015,
    "commentairePedagogique": null
  },
  {
    "id": "V414",
    "marque": "Kia",
    "modele": "EV6",
    "version": "77.4 kWh RWD 229ch",
    "annee": 2023,
    "cvFiscaux": 2,
    "cvDIN": 229,
    "puissanceKw": 168,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 39000,
    "valeurNeuf": 52000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 2015,
    "commentairePedagogique": null
  },
  {
    "id": "V415",
    "marque": "Kia",
    "modele": "EV6",
    "version": "GT AWD 585ch",
    "annee": 2023,
    "cvFiscaux": 4,
    "cvDIN": 585,
    "puissanceKw": 430,
    "cylindree": null,
    "carburant": "electrique",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 55000,
    "valeurNeuf": 75000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 2015,
    "commentairePedagogique": "Hypercar électrique — cas extrême pour discussion en cours"
  },
  {
    "id": "V416",
    "marque": "Ford",
    "modele": "Ranger",
    "version": "2.0 EcoBlue 170ch",
    "annee": 2019,
    "cvFiscaux": 8,
    "cvDIN": 170,
    "puissanceKw": 125,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 22000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2002,
    "commentairePedagogique": null
  },
  {
    "id": "V417",
    "marque": "Ford",
    "modele": "Ranger",
    "version": "2.0 EcoBlue 170ch",
    "annee": 2020,
    "cvFiscaux": 8,
    "cvDIN": 170,
    "puissanceKw": 125,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 24000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2002,
    "commentairePedagogique": null
  },
  {
    "id": "V418",
    "marque": "Ford",
    "modele": "Ranger",
    "version": "2.0 EcoBlue 170ch",
    "annee": 2021,
    "cvFiscaux": 8,
    "cvDIN": 170,
    "puissanceKw": 125,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 26000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2002,
    "commentairePedagogique": null
  },
  {
    "id": "V419",
    "marque": "Ford",
    "modele": "Ranger",
    "version": "2.0 EcoBlue 170ch",
    "annee": 2022,
    "cvFiscaux": 8,
    "cvDIN": 170,
    "puissanceKw": 125,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 28000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2002,
    "commentairePedagogique": null
  },
  {
    "id": "V420",
    "marque": "Ford",
    "modele": "Ranger",
    "version": "3.2 TDCi 200ch Wildtrak",
    "annee": 2017,
    "cvFiscaux": 9,
    "cvDIN": 200,
    "puissanceKw": 147,
    "cylindree": 3198,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 21000,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2002,
    "commentairePedagogique": null
  },
  {
    "id": "V421",
    "marque": "Ford",
    "modele": "Ranger",
    "version": "3.2 TDCi 200ch Wildtrak",
    "annee": 2018,
    "cvFiscaux": 9,
    "cvDIN": 200,
    "puissanceKw": 147,
    "cylindree": 3198,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 23000,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2002,
    "commentairePedagogique": null
  },
  {
    "id": "V422",
    "marque": "Ford",
    "modele": "Ranger",
    "version": "3.2 TDCi 200ch Wildtrak",
    "annee": 2019,
    "cvFiscaux": 9,
    "cvDIN": 200,
    "puissanceKw": 147,
    "cylindree": 3198,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 25000,
    "valeurNeuf": 38000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2002,
    "commentairePedagogique": null
  },
  {
    "id": "V423",
    "marque": "Toyota",
    "modele": "Hilux",
    "version": "2.8 D-4D 204ch 4x4",
    "annee": 2018,
    "cvFiscaux": 9,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": 2755,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 26000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2065,
    "commentairePedagogique": null
  },
  {
    "id": "V424",
    "marque": "Toyota",
    "modele": "Hilux",
    "version": "2.8 D-4D 204ch 4x4",
    "annee": 2019,
    "cvFiscaux": 9,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": 2755,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 28000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2065,
    "commentairePedagogique": null
  },
  {
    "id": "V425",
    "marque": "Toyota",
    "modele": "Hilux",
    "version": "2.8 D-4D 204ch 4x4",
    "annee": 2020,
    "cvFiscaux": 9,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": 2755,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 30000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2065,
    "commentairePedagogique": null
  },
  {
    "id": "V426",
    "marque": "Toyota",
    "modele": "Hilux",
    "version": "2.8 D-4D 204ch 4x4",
    "annee": 2021,
    "cvFiscaux": 9,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": 2755,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 32000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2065,
    "commentairePedagogique": null
  },
  {
    "id": "V427",
    "marque": "Toyota",
    "modele": "Hilux",
    "version": "2.8 D-4D 204ch 4x4",
    "annee": 2022,
    "cvFiscaux": 9,
    "cvDIN": 204,
    "puissanceKw": 150,
    "cylindree": 2755,
    "carburant": "diesel",
    "typeVehicule": "utilitaire",
    "carrosserie": "Véhicule utilitaire léger",
    "valeurEstimee": 34000,
    "valeurNeuf": 45000,
    "nbPlaces": 5,
    "nbPortes": 4,
    "poidsVide": 2065,
    "commentairePedagogique": null
  },
  {
    "id": "V428",
    "marque": "Volkswagen",
    "modele": "Touran",
    "version": "1.5 TSI 150ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 19000,
    "valeurNeuf": 34000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1570,
    "commentairePedagogique": null
  },
  {
    "id": "V429",
    "marque": "Volkswagen",
    "modele": "Touran",
    "version": "1.5 TSI 150ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 21000,
    "valeurNeuf": 34000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1570,
    "commentairePedagogique": null
  },
  {
    "id": "V430",
    "marque": "Volkswagen",
    "modele": "Touran",
    "version": "1.5 TSI 150ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 23000,
    "valeurNeuf": 34000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1570,
    "commentairePedagogique": null
  },
  {
    "id": "V431",
    "marque": "Volkswagen",
    "modele": "Touran",
    "version": "1.5 TSI 150ch",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 25000,
    "valeurNeuf": 34000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1570,
    "commentairePedagogique": null
  },
  {
    "id": "V432",
    "marque": "Volkswagen",
    "modele": "Touran",
    "version": "2.0 TDI 150ch",
    "annee": 2016,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 15000,
    "valeurNeuf": 32000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1570,
    "commentairePedagogique": null
  },
  {
    "id": "V433",
    "marque": "Volkswagen",
    "modele": "Touran",
    "version": "2.0 TDI 150ch",
    "annee": 2017,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 17000,
    "valeurNeuf": 32000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1570,
    "commentairePedagogique": null
  },
  {
    "id": "V434",
    "marque": "Volkswagen",
    "modele": "Touran",
    "version": "2.0 TDI 150ch",
    "annee": 2018,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 19000,
    "valeurNeuf": 32000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1570,
    "commentairePedagogique": null
  },
  {
    "id": "V435",
    "marque": "Volkswagen",
    "modele": "Touran",
    "version": "2.0 TDI 150ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 21000,
    "valeurNeuf": 32000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1570,
    "commentairePedagogique": null
  },
  {
    "id": "V436",
    "marque": "Renault",
    "modele": "Espace",
    "version": "1.8 TCe 225ch EDC",
    "annee": 2015,
    "cvFiscaux": 9,
    "cvDIN": 225,
    "puissanceKw": 165,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 14000,
    "valeurNeuf": 35000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1750,
    "commentairePedagogique": null
  },
  {
    "id": "V437",
    "marque": "Renault",
    "modele": "Espace",
    "version": "1.8 TCe 225ch EDC",
    "annee": 2016,
    "cvFiscaux": 9,
    "cvDIN": 225,
    "puissanceKw": 165,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 15500,
    "valeurNeuf": 35000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1750,
    "commentairePedagogique": null
  },
  {
    "id": "V438",
    "marque": "Renault",
    "modele": "Espace",
    "version": "1.8 TCe 225ch EDC",
    "annee": 2017,
    "cvFiscaux": 9,
    "cvDIN": 225,
    "puissanceKw": 165,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 17000,
    "valeurNeuf": 35000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1750,
    "commentairePedagogique": null
  },
  {
    "id": "V439",
    "marque": "Renault",
    "modele": "Espace",
    "version": "1.8 TCe 225ch EDC",
    "annee": 2018,
    "cvFiscaux": 9,
    "cvDIN": 225,
    "puissanceKw": 165,
    "cylindree": 1798,
    "carburant": "essence",
    "typeVehicule": "berline",
    "carrosserie": "Berline",
    "valeurEstimee": 18500,
    "valeurNeuf": 35000,
    "nbPlaces": 7,
    "nbPortes": 5,
    "poidsVide": 1750,
    "commentairePedagogique": null
  },
  {
    "id": "V440",
    "marque": "BMW",
    "modele": "X1",
    "version": "sDrive18i 136ch",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1499,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 22000,
    "valeurNeuf": 40000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V441",
    "marque": "BMW",
    "modele": "X1",
    "version": "sDrive18i 136ch",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1499,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 24000,
    "valeurNeuf": 40000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V442",
    "marque": "BMW",
    "modele": "X1",
    "version": "sDrive18i 136ch",
    "annee": 2021,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1499,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 26000,
    "valeurNeuf": 40000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V443",
    "marque": "BMW",
    "modele": "X1",
    "version": "sDrive18i 136ch",
    "annee": 2022,
    "cvFiscaux": 6,
    "cvDIN": 136,
    "puissanceKw": 100,
    "cylindree": 1499,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 28500,
    "valeurNeuf": 40000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V444",
    "marque": "BMW",
    "modele": "X1",
    "version": "sDrive18d 150ch",
    "annee": 2018,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 21000,
    "valeurNeuf": 41000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V445",
    "marque": "BMW",
    "modele": "X1",
    "version": "sDrive18d 150ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 23000,
    "valeurNeuf": 41000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V446",
    "marque": "BMW",
    "modele": "X1",
    "version": "sDrive18d 150ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 25000,
    "valeurNeuf": 41000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V447",
    "marque": "BMW",
    "modele": "X1",
    "version": "sDrive18d 150ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1995,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 27000,
    "valeurNeuf": 41000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V448",
    "marque": "BMW",
    "modele": "X1",
    "version": "xDrive25e 220ch PHEV",
    "annee": 2020,
    "cvFiscaux": 9,
    "cvDIN": 220,
    "puissanceKw": 162,
    "cylindree": 1499,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 27000,
    "valeurNeuf": 52000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V449",
    "marque": "BMW",
    "modele": "X1",
    "version": "xDrive25e 220ch PHEV",
    "annee": 2021,
    "cvFiscaux": 9,
    "cvDIN": 220,
    "puissanceKw": 162,
    "cylindree": 1499,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 30000,
    "valeurNeuf": 52000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V450",
    "marque": "BMW",
    "modele": "X1",
    "version": "xDrive25e 220ch PHEV",
    "annee": 2022,
    "cvFiscaux": 9,
    "cvDIN": 220,
    "puissanceKw": 162,
    "cylindree": 1499,
    "carburant": "hybride",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 33000,
    "valeurNeuf": 52000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1540,
    "commentairePedagogique": null
  },
  {
    "id": "V451",
    "marque": "Audi",
    "modele": "Q3",
    "version": "35 TFSI 150ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 24000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1535,
    "commentairePedagogique": null
  },
  {
    "id": "V452",
    "marque": "Audi",
    "modele": "Q3",
    "version": "35 TFSI 150ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 26000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1535,
    "commentairePedagogique": null
  },
  {
    "id": "V453",
    "marque": "Audi",
    "modele": "Q3",
    "version": "35 TFSI 150ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 28000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1535,
    "commentairePedagogique": null
  },
  {
    "id": "V454",
    "marque": "Audi",
    "modele": "Q3",
    "version": "35 TFSI 150ch",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 30000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1535,
    "commentairePedagogique": null
  },
  {
    "id": "V455",
    "marque": "Audi",
    "modele": "Q3",
    "version": "35 TFSI 150ch",
    "annee": 2023,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1498,
    "carburant": "essence",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 32000,
    "valeurNeuf": 42000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1535,
    "commentairePedagogique": null
  },
  {
    "id": "V456",
    "marque": "Audi",
    "modele": "Q3",
    "version": "35 TDI 150ch",
    "annee": 2019,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 24500,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1535,
    "commentairePedagogique": null
  },
  {
    "id": "V457",
    "marque": "Audi",
    "modele": "Q3",
    "version": "35 TDI 150ch",
    "annee": 2020,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 26500,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1535,
    "commentairePedagogique": null
  },
  {
    "id": "V458",
    "marque": "Audi",
    "modele": "Q3",
    "version": "35 TDI 150ch",
    "annee": 2021,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 28500,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1535,
    "commentairePedagogique": null
  },
  {
    "id": "V459",
    "marque": "Audi",
    "modele": "Q3",
    "version": "35 TDI 150ch",
    "annee": 2022,
    "cvFiscaux": 7,
    "cvDIN": 150,
    "puissanceKw": 110,
    "cylindree": 1968,
    "carburant": "diesel",
    "typeVehicule": "SUV",
    "carrosserie": "SUV / Crossover",
    "valeurEstimee": 30500,
    "valeurNeuf": 43000,
    "nbPlaces": 5,
    "nbPortes": 5,
    "poidsVide": 1535,
    "commentairePedagogique": null
  },
  {
    "id": "V460",
    "marque": "Mazda",
    "modele": "MX-5",
    "version": "1.5 132ch Skyactiv-G",
    "annee": 2016,
    "cvFiscaux": 6,
    "cvDIN": 132,
    "puissanceKw": 97,
    "cylindree": 1496,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 17000,
    "valeurNeuf": 29000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1000,
    "commentairePedagogique": "Cabriolet — illustre les garanties spécifiques (capote, séquestration...)"
  },
  {
    "id": "V461",
    "marque": "Mazda",
    "modele": "MX-5",
    "version": "1.5 132ch Skyactiv-G",
    "annee": 2017,
    "cvFiscaux": 6,
    "cvDIN": 132,
    "puissanceKw": 97,
    "cylindree": 1496,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 18500,
    "valeurNeuf": 29000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1000,
    "commentairePedagogique": "Cabriolet — illustre les garanties spécifiques (capote, séquestration...)"
  },
  {
    "id": "V462",
    "marque": "Mazda",
    "modele": "MX-5",
    "version": "1.5 132ch Skyactiv-G",
    "annee": 2018,
    "cvFiscaux": 6,
    "cvDIN": 132,
    "puissanceKw": 97,
    "cylindree": 1496,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 20000,
    "valeurNeuf": 29000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1000,
    "commentairePedagogique": "Cabriolet — illustre les garanties spécifiques (capote, séquestration...)"
  },
  {
    "id": "V463",
    "marque": "Mazda",
    "modele": "MX-5",
    "version": "1.5 132ch Skyactiv-G",
    "annee": 2019,
    "cvFiscaux": 6,
    "cvDIN": 132,
    "puissanceKw": 97,
    "cylindree": 1496,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 21500,
    "valeurNeuf": 29000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1000,
    "commentairePedagogique": "Cabriolet — illustre les garanties spécifiques (capote, séquestration...)"
  },
  {
    "id": "V464",
    "marque": "Mazda",
    "modele": "MX-5",
    "version": "1.5 132ch Skyactiv-G",
    "annee": 2020,
    "cvFiscaux": 6,
    "cvDIN": 132,
    "puissanceKw": 97,
    "cylindree": 1496,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 23000,
    "valeurNeuf": 29000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1000,
    "commentairePedagogique": "Cabriolet — illustre les garanties spécifiques (capote, séquestration...)"
  },
  {
    "id": "V465",
    "marque": "Mazda",
    "modele": "MX-5",
    "version": "2.0 184ch Skyactiv-G",
    "annee": 2019,
    "cvFiscaux": 8,
    "cvDIN": 184,
    "puissanceKw": 135,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 22000,
    "valeurNeuf": 35000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1000,
    "commentairePedagogique": null
  },
  {
    "id": "V466",
    "marque": "Mazda",
    "modele": "MX-5",
    "version": "2.0 184ch Skyactiv-G",
    "annee": 2020,
    "cvFiscaux": 8,
    "cvDIN": 184,
    "puissanceKw": 135,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 24000,
    "valeurNeuf": 35000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1000,
    "commentairePedagogique": null
  },
  {
    "id": "V467",
    "marque": "Mazda",
    "modele": "MX-5",
    "version": "2.0 184ch Skyactiv-G",
    "annee": 2021,
    "cvFiscaux": 8,
    "cvDIN": 184,
    "puissanceKw": 135,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 26000,
    "valeurNeuf": 35000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1000,
    "commentairePedagogique": null
  },
  {
    "id": "V468",
    "marque": "Mazda",
    "modele": "MX-5",
    "version": "2.0 184ch Skyactiv-G",
    "annee": 2022,
    "cvFiscaux": 8,
    "cvDIN": 184,
    "puissanceKw": 135,
    "cylindree": 1998,
    "carburant": "essence",
    "typeVehicule": "sportive",
    "carrosserie": "Coupé/Sportive",
    "valeurEstimee": 28000,
    "valeurNeuf": 35000,
    "nbPlaces": 2,
    "nbPortes": 2,
    "poidsVide": 1000,
    "commentairePedagogique": null
  }
];

export const PLAQUES: PlaqueDB[] = [
  {
    "plaque": "SZ-328-KR",
    "vehiculeId": "V001",
    "anneeImmat": 2015
  },
  {
    "plaque": "YV-961-ZZ",
    "vehiculeId": "V001",
    "anneeImmat": 2015
  },
  {
    "plaque": "SL-546-FK",
    "vehiculeId": "V001",
    "anneeImmat": 2015
  },
  {
    "plaque": "KQ-284-QN",
    "vehiculeId": "V001",
    "anneeImmat": 2015
  },
  {
    "plaque": "SQ-837-XX",
    "vehiculeId": "V001",
    "anneeImmat": 2016
  },
  {
    "plaque": "VR-620-LK",
    "vehiculeId": "V001",
    "anneeImmat": 2016
  },
  {
    "plaque": "MD-332-WJ",
    "vehiculeId": "V001",
    "anneeImmat": 2016
  },
  {
    "plaque": "JS-342-AJ",
    "vehiculeId": "V001",
    "anneeImmat": 2016
  },
  {
    "plaque": "XD-180-BW",
    "vehiculeId": "V001",
    "anneeImmat": 2016
  },
  {
    "plaque": "CA-844-FL",
    "vehiculeId": "V002",
    "anneeImmat": 2016
  },
  {
    "plaque": "PS-603-DH",
    "vehiculeId": "V002",
    "anneeImmat": 2016
  },
  {
    "plaque": "DQ-177-JT",
    "vehiculeId": "V002",
    "anneeImmat": 2016
  },
  {
    "plaque": "TC-161-DY",
    "vehiculeId": "V002",
    "anneeImmat": 2016
  },
  {
    "plaque": "BK-415-XA",
    "vehiculeId": "V002",
    "anneeImmat": 2017
  },
  {
    "plaque": "AV-236-NY",
    "vehiculeId": "V002",
    "anneeImmat": 2017
  },
  {
    "plaque": "LF-507-BC",
    "vehiculeId": "V002",
    "anneeImmat": 2017
  },
  {
    "plaque": "EG-900-NH",
    "vehiculeId": "V003",
    "anneeImmat": 2017
  },
  {
    "plaque": "PD-399-HY",
    "vehiculeId": "V003",
    "anneeImmat": 2017
  },
  {
    "plaque": "GE-104-EB",
    "vehiculeId": "V003",
    "anneeImmat": 2017
  },
  {
    "plaque": "VZ-612-MP",
    "vehiculeId": "V003",
    "anneeImmat": 2017
  },
  {
    "plaque": "BB-375-BE",
    "vehiculeId": "V004",
    "anneeImmat": 2019
  },
  {
    "plaque": "SN-844-BT",
    "vehiculeId": "V004",
    "anneeImmat": 2019
  },
  {
    "plaque": "TX-388-TP",
    "vehiculeId": "V004",
    "anneeImmat": 2019
  },
  {
    "plaque": "GF-259-AV",
    "vehiculeId": "V004",
    "anneeImmat": 2019
  },
  {
    "plaque": "QC-684-MW",
    "vehiculeId": "V004",
    "anneeImmat": 2020
  },
  {
    "plaque": "CV-662-PR",
    "vehiculeId": "V005",
    "anneeImmat": 2020
  },
  {
    "plaque": "VP-255-KN",
    "vehiculeId": "V005",
    "anneeImmat": 2020
  },
  {
    "plaque": "PE-894-XE",
    "vehiculeId": "V005",
    "anneeImmat": 2020
  },
  {
    "plaque": "AF-228-LL",
    "vehiculeId": "V005",
    "anneeImmat": 2020
  },
  {
    "plaque": "CR-548-NL",
    "vehiculeId": "V005",
    "anneeImmat": 2021
  },
  {
    "plaque": "SB-170-VD",
    "vehiculeId": "V005",
    "anneeImmat": 2021
  },
  {
    "plaque": "NH-514-BG",
    "vehiculeId": "V005",
    "anneeImmat": 2021
  },
  {
    "plaque": "GX-137-JD",
    "vehiculeId": "V005",
    "anneeImmat": 2021
  },
  {
    "plaque": "LX-884-ZR",
    "vehiculeId": "V005",
    "anneeImmat": 2021
  },
  {
    "plaque": "PF-343-XV",
    "vehiculeId": "V006",
    "anneeImmat": 2021
  },
  {
    "plaque": "JR-694-HA",
    "vehiculeId": "V006",
    "anneeImmat": 2021
  },
  {
    "plaque": "PF-572-YV",
    "vehiculeId": "V006",
    "anneeImmat": 2021
  },
  {
    "plaque": "CA-649-TP",
    "vehiculeId": "V006",
    "anneeImmat": 2021
  },
  {
    "plaque": "CV-113-FG",
    "vehiculeId": "V006",
    "anneeImmat": 2022
  },
  {
    "plaque": "TK-516-CF",
    "vehiculeId": "V007",
    "anneeImmat": 2022
  },
  {
    "plaque": "WH-701-XF",
    "vehiculeId": "V007",
    "anneeImmat": 2022
  },
  {
    "plaque": "DB-738-VQ",
    "vehiculeId": "V007",
    "anneeImmat": 2022
  },
  {
    "plaque": "QH-866-KB",
    "vehiculeId": "V007",
    "anneeImmat": 2022
  },
  {
    "plaque": "BF-835-XR",
    "vehiculeId": "V007",
    "anneeImmat": 2023
  },
  {
    "plaque": "GK-879-HR",
    "vehiculeId": "V008",
    "anneeImmat": 2016
  },
  {
    "plaque": "FH-367-DD",
    "vehiculeId": "V008",
    "anneeImmat": 2016
  },
  {
    "plaque": "WN-544-RB",
    "vehiculeId": "V008",
    "anneeImmat": 2016
  },
  {
    "plaque": "ES-100-EC",
    "vehiculeId": "V008",
    "anneeImmat": 2016
  },
  {
    "plaque": "PV-771-KZ",
    "vehiculeId": "V008",
    "anneeImmat": 2017
  },
  {
    "plaque": "DX-285-VA",
    "vehiculeId": "V008",
    "anneeImmat": 2017
  },
  {
    "plaque": "PY-691-GN",
    "vehiculeId": "V008",
    "anneeImmat": 2017
  },
  {
    "plaque": "GN-708-MP",
    "vehiculeId": "V009",
    "anneeImmat": 2017
  },
  {
    "plaque": "QD-587-WG",
    "vehiculeId": "V009",
    "anneeImmat": 2017
  },
  {
    "plaque": "ZX-792-SR",
    "vehiculeId": "V009",
    "anneeImmat": 2017
  },
  {
    "plaque": "YW-788-ST",
    "vehiculeId": "V009",
    "anneeImmat": 2017
  },
  {
    "plaque": "YH-528-MX",
    "vehiculeId": "V010",
    "anneeImmat": 2018
  },
  {
    "plaque": "BC-333-QG",
    "vehiculeId": "V010",
    "anneeImmat": 2018
  },
  {
    "plaque": "VJ-835-DM",
    "vehiculeId": "V010",
    "anneeImmat": 2018
  },
  {
    "plaque": "RA-600-KE",
    "vehiculeId": "V010",
    "anneeImmat": 2018
  },
  {
    "plaque": "AF-653-QC",
    "vehiculeId": "V010",
    "anneeImmat": 2019
  },
  {
    "plaque": "XH-796-PS",
    "vehiculeId": "V010",
    "anneeImmat": 2019
  },
  {
    "plaque": "MW-714-ZA",
    "vehiculeId": "V010",
    "anneeImmat": 2019
  },
  {
    "plaque": "HZ-893-DV",
    "vehiculeId": "V010",
    "anneeImmat": 2019
  },
  {
    "plaque": "CT-737-FQ",
    "vehiculeId": "V010",
    "anneeImmat": 2019
  },
  {
    "plaque": "YW-450-CN",
    "vehiculeId": "V011",
    "anneeImmat": 2022
  },
  {
    "plaque": "YW-452-QB",
    "vehiculeId": "V011",
    "anneeImmat": 2022
  },
  {
    "plaque": "DR-834-DP",
    "vehiculeId": "V011",
    "anneeImmat": 2022
  },
  {
    "plaque": "MP-162-EL",
    "vehiculeId": "V011",
    "anneeImmat": 2022
  },
  {
    "plaque": "WG-681-TQ",
    "vehiculeId": "V011",
    "anneeImmat": 2023
  },
  {
    "plaque": "KM-290-YS",
    "vehiculeId": "V012",
    "anneeImmat": 2023
  },
  {
    "plaque": "YL-284-TK",
    "vehiculeId": "V012",
    "anneeImmat": 2023
  },
  {
    "plaque": "CQ-929-QJ",
    "vehiculeId": "V012",
    "anneeImmat": 2023
  },
  {
    "plaque": "MY-330-ZB",
    "vehiculeId": "V012",
    "anneeImmat": 2023
  },
  {
    "plaque": "XX-143-AH",
    "vehiculeId": "V012",
    "anneeImmat": 2024
  },
  {
    "plaque": "CK-863-AQ",
    "vehiculeId": "V012",
    "anneeImmat": 2024
  },
  {
    "plaque": "BJ-371-XD",
    "vehiculeId": "V012",
    "anneeImmat": 2024
  },
  {
    "plaque": "RX-343-YP",
    "vehiculeId": "V013",
    "anneeImmat": 2015
  },
  {
    "plaque": "AJ-278-WB",
    "vehiculeId": "V013",
    "anneeImmat": 2015
  },
  {
    "plaque": "LE-880-AV",
    "vehiculeId": "V013",
    "anneeImmat": 2015
  },
  {
    "plaque": "PM-672-CP",
    "vehiculeId": "V013",
    "anneeImmat": 2015
  },
  {
    "plaque": "TV-672-CE",
    "vehiculeId": "V013",
    "anneeImmat": 2016
  },
  {
    "plaque": "LD-221-LL",
    "vehiculeId": "V013",
    "anneeImmat": 2016
  },
  {
    "plaque": "AD-590-XT",
    "vehiculeId": "V013",
    "anneeImmat": 2016
  },
  {
    "plaque": "VT-235-BB",
    "vehiculeId": "V014",
    "anneeImmat": 2016
  },
  {
    "plaque": "AR-459-AM",
    "vehiculeId": "V014",
    "anneeImmat": 2016
  },
  {
    "plaque": "CN-431-KG",
    "vehiculeId": "V014",
    "anneeImmat": 2016
  },
  {
    "plaque": "QB-326-TB",
    "vehiculeId": "V014",
    "anneeImmat": 2016
  },
  {
    "plaque": "DP-112-GX",
    "vehiculeId": "V014",
    "anneeImmat": 2017
  },
  {
    "plaque": "GK-259-FM",
    "vehiculeId": "V014",
    "anneeImmat": 2017
  },
  {
    "plaque": "HC-870-FF",
    "vehiculeId": "V014",
    "anneeImmat": 2017
  },
  {
    "plaque": "DN-765-VF",
    "vehiculeId": "V015",
    "anneeImmat": 2017
  },
  {
    "plaque": "GR-208-AW",
    "vehiculeId": "V015",
    "anneeImmat": 2017
  },
  {
    "plaque": "BZ-568-NK",
    "vehiculeId": "V015",
    "anneeImmat": 2017
  },
  {
    "plaque": "YQ-892-ZV",
    "vehiculeId": "V015",
    "anneeImmat": 2017
  },
  {
    "plaque": "DG-875-VF",
    "vehiculeId": "V015",
    "anneeImmat": 2018
  },
  {
    "plaque": "LF-834-AE",
    "vehiculeId": "V015",
    "anneeImmat": 2018
  },
  {
    "plaque": "QM-659-LS",
    "vehiculeId": "V015",
    "anneeImmat": 2018
  },
  {
    "plaque": "RA-249-QM",
    "vehiculeId": "V016",
    "anneeImmat": 2018
  },
  {
    "plaque": "YQ-325-RK",
    "vehiculeId": "V016",
    "anneeImmat": 2018
  },
  {
    "plaque": "RY-968-DT",
    "vehiculeId": "V016",
    "anneeImmat": 2018
  },
  {
    "plaque": "EL-423-YX",
    "vehiculeId": "V016",
    "anneeImmat": 2018
  },
  {
    "plaque": "BY-814-CL",
    "vehiculeId": "V017",
    "anneeImmat": 2019
  },
  {
    "plaque": "BJ-118-MT",
    "vehiculeId": "V017",
    "anneeImmat": 2019
  },
  {
    "plaque": "KE-498-EB",
    "vehiculeId": "V017",
    "anneeImmat": 2019
  },
  {
    "plaque": "SY-271-SY",
    "vehiculeId": "V017",
    "anneeImmat": 2019
  },
  {
    "plaque": "CE-987-GJ",
    "vehiculeId": "V017",
    "anneeImmat": 2020
  },
  {
    "plaque": "YA-227-XF",
    "vehiculeId": "V017",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZF-216-MA",
    "vehiculeId": "V017",
    "anneeImmat": 2020
  },
  {
    "plaque": "SS-570-CH",
    "vehiculeId": "V018",
    "anneeImmat": 2020
  },
  {
    "plaque": "FV-438-JE",
    "vehiculeId": "V018",
    "anneeImmat": 2020
  },
  {
    "plaque": "TY-553-ZR",
    "vehiculeId": "V018",
    "anneeImmat": 2020
  },
  {
    "plaque": "CT-739-ED",
    "vehiculeId": "V018",
    "anneeImmat": 2020
  },
  {
    "plaque": "PW-950-QB",
    "vehiculeId": "V019",
    "anneeImmat": 2021
  },
  {
    "plaque": "SM-650-ZG",
    "vehiculeId": "V019",
    "anneeImmat": 2021
  },
  {
    "plaque": "WA-520-TQ",
    "vehiculeId": "V019",
    "anneeImmat": 2021
  },
  {
    "plaque": "VK-394-CJ",
    "vehiculeId": "V019",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZH-689-HY",
    "vehiculeId": "V020",
    "anneeImmat": 2022
  },
  {
    "plaque": "EW-300-TA",
    "vehiculeId": "V020",
    "anneeImmat": 2022
  },
  {
    "plaque": "GV-444-RT",
    "vehiculeId": "V020",
    "anneeImmat": 2022
  },
  {
    "plaque": "NN-890-CE",
    "vehiculeId": "V020",
    "anneeImmat": 2022
  },
  {
    "plaque": "FX-110-KX",
    "vehiculeId": "V020",
    "anneeImmat": 2023
  },
  {
    "plaque": "XM-807-QQ",
    "vehiculeId": "V020",
    "anneeImmat": 2023
  },
  {
    "plaque": "AG-523-EN",
    "vehiculeId": "V020",
    "anneeImmat": 2023
  },
  {
    "plaque": "KA-587-MT",
    "vehiculeId": "V021",
    "anneeImmat": 2023
  },
  {
    "plaque": "QV-137-RK",
    "vehiculeId": "V021",
    "anneeImmat": 2023
  },
  {
    "plaque": "RF-432-ER",
    "vehiculeId": "V021",
    "anneeImmat": 2023
  },
  {
    "plaque": "AW-420-QV",
    "vehiculeId": "V021",
    "anneeImmat": 2023
  },
  {
    "plaque": "NP-294-FC",
    "vehiculeId": "V021",
    "anneeImmat": 2024
  },
  {
    "plaque": "EF-939-XK",
    "vehiculeId": "V021",
    "anneeImmat": 2024
  },
  {
    "plaque": "VS-165-YJ",
    "vehiculeId": "V021",
    "anneeImmat": 2024
  },
  {
    "plaque": "EQ-114-ZH",
    "vehiculeId": "V022",
    "anneeImmat": 2017
  },
  {
    "plaque": "ER-879-LT",
    "vehiculeId": "V022",
    "anneeImmat": 2017
  },
  {
    "plaque": "PX-388-ZA",
    "vehiculeId": "V022",
    "anneeImmat": 2017
  },
  {
    "plaque": "TW-804-EM",
    "vehiculeId": "V022",
    "anneeImmat": 2017
  },
  {
    "plaque": "JV-946-DN",
    "vehiculeId": "V022",
    "anneeImmat": 2018
  },
  {
    "plaque": "NX-812-YC",
    "vehiculeId": "V022",
    "anneeImmat": 2018
  },
  {
    "plaque": "GG-497-PJ",
    "vehiculeId": "V022",
    "anneeImmat": 2018
  },
  {
    "plaque": "PE-689-JQ",
    "vehiculeId": "V023",
    "anneeImmat": 2018
  },
  {
    "plaque": "QS-433-QV",
    "vehiculeId": "V023",
    "anneeImmat": 2018
  },
  {
    "plaque": "LX-146-AB",
    "vehiculeId": "V023",
    "anneeImmat": 2018
  },
  {
    "plaque": "VW-183-CK",
    "vehiculeId": "V023",
    "anneeImmat": 2018
  },
  {
    "plaque": "GD-678-YY",
    "vehiculeId": "V024",
    "anneeImmat": 2019
  },
  {
    "plaque": "TY-413-AD",
    "vehiculeId": "V024",
    "anneeImmat": 2019
  },
  {
    "plaque": "XH-302-BE",
    "vehiculeId": "V024",
    "anneeImmat": 2019
  },
  {
    "plaque": "GT-488-TF",
    "vehiculeId": "V024",
    "anneeImmat": 2019
  },
  {
    "plaque": "GX-749-MH",
    "vehiculeId": "V024",
    "anneeImmat": 2020
  },
  {
    "plaque": "BC-359-JG",
    "vehiculeId": "V025",
    "anneeImmat": 2020
  },
  {
    "plaque": "PB-579-XZ",
    "vehiculeId": "V025",
    "anneeImmat": 2020
  },
  {
    "plaque": "DP-763-CQ",
    "vehiculeId": "V025",
    "anneeImmat": 2020
  },
  {
    "plaque": "SS-491-BJ",
    "vehiculeId": "V025",
    "anneeImmat": 2020
  },
  {
    "plaque": "HY-615-WJ",
    "vehiculeId": "V026",
    "anneeImmat": 2020
  },
  {
    "plaque": "CP-193-WZ",
    "vehiculeId": "V026",
    "anneeImmat": 2020
  },
  {
    "plaque": "PH-480-RA",
    "vehiculeId": "V026",
    "anneeImmat": 2020
  },
  {
    "plaque": "GP-359-DH",
    "vehiculeId": "V026",
    "anneeImmat": 2020
  },
  {
    "plaque": "YP-817-DM",
    "vehiculeId": "V026",
    "anneeImmat": 2021
  },
  {
    "plaque": "DY-118-ES",
    "vehiculeId": "V026",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZB-453-YV",
    "vehiculeId": "V026",
    "anneeImmat": 2021
  },
  {
    "plaque": "WS-657-GM",
    "vehiculeId": "V027",
    "anneeImmat": 2021
  },
  {
    "plaque": "CV-681-PR",
    "vehiculeId": "V027",
    "anneeImmat": 2021
  },
  {
    "plaque": "RX-841-PS",
    "vehiculeId": "V027",
    "anneeImmat": 2021
  },
  {
    "plaque": "DB-348-GZ",
    "vehiculeId": "V027",
    "anneeImmat": 2021
  },
  {
    "plaque": "RP-163-VR",
    "vehiculeId": "V027",
    "anneeImmat": 2022
  },
  {
    "plaque": "HX-773-TX",
    "vehiculeId": "V028",
    "anneeImmat": 2022
  },
  {
    "plaque": "PB-362-TZ",
    "vehiculeId": "V028",
    "anneeImmat": 2022
  },
  {
    "plaque": "MG-729-KE",
    "vehiculeId": "V028",
    "anneeImmat": 2022
  },
  {
    "plaque": "MA-208-FR",
    "vehiculeId": "V028",
    "anneeImmat": 2022
  },
  {
    "plaque": "MK-932-SA",
    "vehiculeId": "V028",
    "anneeImmat": 2023
  },
  {
    "plaque": "YV-978-GZ",
    "vehiculeId": "V028",
    "anneeImmat": 2023
  },
  {
    "plaque": "TR-644-YY",
    "vehiculeId": "V028",
    "anneeImmat": 2023
  },
  {
    "plaque": "WC-715-NQ",
    "vehiculeId": "V028",
    "anneeImmat": 2023
  },
  {
    "plaque": "KV-133-CW",
    "vehiculeId": "V028",
    "anneeImmat": 2023
  },
  {
    "plaque": "TW-711-WR",
    "vehiculeId": "V029",
    "anneeImmat": 2023
  },
  {
    "plaque": "SM-468-BQ",
    "vehiculeId": "V029",
    "anneeImmat": 2023
  },
  {
    "plaque": "ED-988-HL",
    "vehiculeId": "V029",
    "anneeImmat": 2023
  },
  {
    "plaque": "MB-502-FX",
    "vehiculeId": "V029",
    "anneeImmat": 2023
  },
  {
    "plaque": "GA-660-SX",
    "vehiculeId": "V029",
    "anneeImmat": 2024
  },
  {
    "plaque": "TM-950-SS",
    "vehiculeId": "V029",
    "anneeImmat": 2024
  },
  {
    "plaque": "TW-897-QQ",
    "vehiculeId": "V029",
    "anneeImmat": 2024
  },
  {
    "plaque": "ZH-707-FS",
    "vehiculeId": "V029",
    "anneeImmat": 2024
  },
  {
    "plaque": "TB-220-YH",
    "vehiculeId": "V029",
    "anneeImmat": 2024
  },
  {
    "plaque": "QF-897-FS",
    "vehiculeId": "V030",
    "anneeImmat": 2016
  },
  {
    "plaque": "CF-207-LC",
    "vehiculeId": "V030",
    "anneeImmat": 2016
  },
  {
    "plaque": "TD-331-TY",
    "vehiculeId": "V030",
    "anneeImmat": 2016
  },
  {
    "plaque": "PF-999-GL",
    "vehiculeId": "V030",
    "anneeImmat": 2016
  },
  {
    "plaque": "ED-350-HF",
    "vehiculeId": "V030",
    "anneeImmat": 2017
  },
  {
    "plaque": "CB-624-HN",
    "vehiculeId": "V030",
    "anneeImmat": 2017
  },
  {
    "plaque": "BF-483-LR",
    "vehiculeId": "V030",
    "anneeImmat": 2017
  },
  {
    "plaque": "RN-642-QJ",
    "vehiculeId": "V031",
    "anneeImmat": 2017
  },
  {
    "plaque": "JH-615-EB",
    "vehiculeId": "V031",
    "anneeImmat": 2017
  },
  {
    "plaque": "CF-611-JM",
    "vehiculeId": "V031",
    "anneeImmat": 2017
  },
  {
    "plaque": "DY-168-FC",
    "vehiculeId": "V031",
    "anneeImmat": 2017
  },
  {
    "plaque": "GM-861-BZ",
    "vehiculeId": "V032",
    "anneeImmat": 2018
  },
  {
    "plaque": "PR-647-LS",
    "vehiculeId": "V032",
    "anneeImmat": 2018
  },
  {
    "plaque": "PS-353-YC",
    "vehiculeId": "V032",
    "anneeImmat": 2018
  },
  {
    "plaque": "GZ-391-RF",
    "vehiculeId": "V032",
    "anneeImmat": 2018
  },
  {
    "plaque": "VR-927-SD",
    "vehiculeId": "V032",
    "anneeImmat": 2019
  },
  {
    "plaque": "FX-237-RF",
    "vehiculeId": "V032",
    "anneeImmat": 2019
  },
  {
    "plaque": "DX-264-ME",
    "vehiculeId": "V032",
    "anneeImmat": 2019
  },
  {
    "plaque": "CE-634-TP",
    "vehiculeId": "V032",
    "anneeImmat": 2019
  },
  {
    "plaque": "EP-524-TF",
    "vehiculeId": "V032",
    "anneeImmat": 2019
  },
  {
    "plaque": "PC-671-TX",
    "vehiculeId": "V033",
    "anneeImmat": 2019
  },
  {
    "plaque": "FF-954-FA",
    "vehiculeId": "V033",
    "anneeImmat": 2019
  },
  {
    "plaque": "XP-829-NJ",
    "vehiculeId": "V033",
    "anneeImmat": 2019
  },
  {
    "plaque": "QJ-438-GS",
    "vehiculeId": "V033",
    "anneeImmat": 2019
  },
  {
    "plaque": "EB-273-NY",
    "vehiculeId": "V033",
    "anneeImmat": 2020
  },
  {
    "plaque": "WR-244-DB",
    "vehiculeId": "V034",
    "anneeImmat": 2020
  },
  {
    "plaque": "BQ-340-YP",
    "vehiculeId": "V034",
    "anneeImmat": 2020
  },
  {
    "plaque": "HL-796-MN",
    "vehiculeId": "V034",
    "anneeImmat": 2020
  },
  {
    "plaque": "QT-496-CT",
    "vehiculeId": "V034",
    "anneeImmat": 2020
  },
  {
    "plaque": "XF-160-RY",
    "vehiculeId": "V034",
    "anneeImmat": 2021
  },
  {
    "plaque": "LX-929-AG",
    "vehiculeId": "V034",
    "anneeImmat": 2021
  },
  {
    "plaque": "LM-324-TE",
    "vehiculeId": "V034",
    "anneeImmat": 2021
  },
  {
    "plaque": "VE-975-EY",
    "vehiculeId": "V034",
    "anneeImmat": 2021
  },
  {
    "plaque": "GZ-546-DD",
    "vehiculeId": "V034",
    "anneeImmat": 2021
  },
  {
    "plaque": "NM-468-CS",
    "vehiculeId": "V035",
    "anneeImmat": 2017
  },
  {
    "plaque": "EA-202-FW",
    "vehiculeId": "V035",
    "anneeImmat": 2017
  },
  {
    "plaque": "HQ-325-FB",
    "vehiculeId": "V035",
    "anneeImmat": 2017
  },
  {
    "plaque": "JM-515-WY",
    "vehiculeId": "V035",
    "anneeImmat": 2017
  },
  {
    "plaque": "FC-791-EV",
    "vehiculeId": "V035",
    "anneeImmat": 2018
  },
  {
    "plaque": "JV-447-RK",
    "vehiculeId": "V035",
    "anneeImmat": 2018
  },
  {
    "plaque": "CK-662-DJ",
    "vehiculeId": "V035",
    "anneeImmat": 2018
  },
  {
    "plaque": "ZM-715-GG",
    "vehiculeId": "V036",
    "anneeImmat": 2018
  },
  {
    "plaque": "RF-794-EH",
    "vehiculeId": "V036",
    "anneeImmat": 2018
  },
  {
    "plaque": "LX-937-ZS",
    "vehiculeId": "V036",
    "anneeImmat": 2018
  },
  {
    "plaque": "GS-597-PW",
    "vehiculeId": "V036",
    "anneeImmat": 2018
  },
  {
    "plaque": "KF-287-SP",
    "vehiculeId": "V036",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZN-863-NH",
    "vehiculeId": "V036",
    "anneeImmat": 2019
  },
  {
    "plaque": "KM-787-SZ",
    "vehiculeId": "V036",
    "anneeImmat": 2019
  },
  {
    "plaque": "LM-890-CF",
    "vehiculeId": "V037",
    "anneeImmat": 2019
  },
  {
    "plaque": "BG-862-YQ",
    "vehiculeId": "V037",
    "anneeImmat": 2019
  },
  {
    "plaque": "RL-101-KX",
    "vehiculeId": "V037",
    "anneeImmat": 2019
  },
  {
    "plaque": "VV-816-AK",
    "vehiculeId": "V037",
    "anneeImmat": 2019
  },
  {
    "plaque": "XP-339-JK",
    "vehiculeId": "V038",
    "anneeImmat": 2015
  },
  {
    "plaque": "DB-122-HP",
    "vehiculeId": "V038",
    "anneeImmat": 2015
  },
  {
    "plaque": "YP-879-WV",
    "vehiculeId": "V038",
    "anneeImmat": 2015
  },
  {
    "plaque": "MN-922-RF",
    "vehiculeId": "V038",
    "anneeImmat": 2015
  },
  {
    "plaque": "CT-387-CJ",
    "vehiculeId": "V038",
    "anneeImmat": 2016
  },
  {
    "plaque": "RY-159-HR",
    "vehiculeId": "V038",
    "anneeImmat": 2016
  },
  {
    "plaque": "AG-990-AD",
    "vehiculeId": "V038",
    "anneeImmat": 2016
  },
  {
    "plaque": "TE-281-RE",
    "vehiculeId": "V038",
    "anneeImmat": 2016
  },
  {
    "plaque": "JR-762-DA",
    "vehiculeId": "V038",
    "anneeImmat": 2016
  },
  {
    "plaque": "FW-533-LA",
    "vehiculeId": "V039",
    "anneeImmat": 2016
  },
  {
    "plaque": "CS-559-SL",
    "vehiculeId": "V039",
    "anneeImmat": 2016
  },
  {
    "plaque": "FW-470-HS",
    "vehiculeId": "V039",
    "anneeImmat": 2016
  },
  {
    "plaque": "FB-569-XK",
    "vehiculeId": "V039",
    "anneeImmat": 2016
  },
  {
    "plaque": "MX-382-CY",
    "vehiculeId": "V040",
    "anneeImmat": 2017
  },
  {
    "plaque": "TR-628-TE",
    "vehiculeId": "V040",
    "anneeImmat": 2017
  },
  {
    "plaque": "RQ-566-ED",
    "vehiculeId": "V040",
    "anneeImmat": 2017
  },
  {
    "plaque": "FR-939-HX",
    "vehiculeId": "V040",
    "anneeImmat": 2017
  },
  {
    "plaque": "PL-206-NK",
    "vehiculeId": "V040",
    "anneeImmat": 2018
  },
  {
    "plaque": "SF-289-PC",
    "vehiculeId": "V040",
    "anneeImmat": 2018
  },
  {
    "plaque": "CR-492-EQ",
    "vehiculeId": "V040",
    "anneeImmat": 2018
  },
  {
    "plaque": "QR-933-CY",
    "vehiculeId": "V041",
    "anneeImmat": 2018
  },
  {
    "plaque": "VE-652-TF",
    "vehiculeId": "V041",
    "anneeImmat": 2018
  },
  {
    "plaque": "XJ-805-WK",
    "vehiculeId": "V041",
    "anneeImmat": 2018
  },
  {
    "plaque": "GT-874-AC",
    "vehiculeId": "V041",
    "anneeImmat": 2018
  },
  {
    "plaque": "VW-154-BK",
    "vehiculeId": "V041",
    "anneeImmat": 2019
  },
  {
    "plaque": "HK-270-YH",
    "vehiculeId": "V041",
    "anneeImmat": 2019
  },
  {
    "plaque": "ST-796-ZW",
    "vehiculeId": "V041",
    "anneeImmat": 2019
  },
  {
    "plaque": "HS-657-EQ",
    "vehiculeId": "V041",
    "anneeImmat": 2019
  },
  {
    "plaque": "BC-788-YS",
    "vehiculeId": "V041",
    "anneeImmat": 2019
  },
  {
    "plaque": "YN-912-BV",
    "vehiculeId": "V042",
    "anneeImmat": 2019
  },
  {
    "plaque": "TV-356-VZ",
    "vehiculeId": "V042",
    "anneeImmat": 2019
  },
  {
    "plaque": "JT-203-RA",
    "vehiculeId": "V042",
    "anneeImmat": 2019
  },
  {
    "plaque": "EZ-311-WH",
    "vehiculeId": "V042",
    "anneeImmat": 2019
  },
  {
    "plaque": "KL-958-VK",
    "vehiculeId": "V042",
    "anneeImmat": 2020
  },
  {
    "plaque": "PX-471-MQ",
    "vehiculeId": "V042",
    "anneeImmat": 2020
  },
  {
    "plaque": "AZ-763-WP",
    "vehiculeId": "V042",
    "anneeImmat": 2020
  },
  {
    "plaque": "SF-657-CQ",
    "vehiculeId": "V042",
    "anneeImmat": 2020
  },
  {
    "plaque": "TF-836-DS",
    "vehiculeId": "V042",
    "anneeImmat": 2020
  },
  {
    "plaque": "RH-563-LX",
    "vehiculeId": "V043",
    "anneeImmat": 2020
  },
  {
    "plaque": "VB-253-NX",
    "vehiculeId": "V043",
    "anneeImmat": 2020
  },
  {
    "plaque": "AQ-150-AP",
    "vehiculeId": "V043",
    "anneeImmat": 2020
  },
  {
    "plaque": "VV-111-JH",
    "vehiculeId": "V043",
    "anneeImmat": 2020
  },
  {
    "plaque": "EV-244-CL",
    "vehiculeId": "V043",
    "anneeImmat": 2021
  },
  {
    "plaque": "BW-882-CR",
    "vehiculeId": "V043",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZA-992-HT",
    "vehiculeId": "V043",
    "anneeImmat": 2021
  },
  {
    "plaque": "KH-209-XV",
    "vehiculeId": "V043",
    "anneeImmat": 2021
  },
  {
    "plaque": "ET-324-CJ",
    "vehiculeId": "V043",
    "anneeImmat": 2021
  },
  {
    "plaque": "WH-699-HE",
    "vehiculeId": "V044",
    "anneeImmat": 2021
  },
  {
    "plaque": "PF-844-LJ",
    "vehiculeId": "V044",
    "anneeImmat": 2021
  },
  {
    "plaque": "GC-579-BN",
    "vehiculeId": "V044",
    "anneeImmat": 2021
  },
  {
    "plaque": "HF-686-LT",
    "vehiculeId": "V044",
    "anneeImmat": 2021
  },
  {
    "plaque": "AN-112-QG",
    "vehiculeId": "V044",
    "anneeImmat": 2022
  },
  {
    "plaque": "EM-860-GV",
    "vehiculeId": "V044",
    "anneeImmat": 2022
  },
  {
    "plaque": "QY-380-HX",
    "vehiculeId": "V044",
    "anneeImmat": 2022
  },
  {
    "plaque": "QP-185-JF",
    "vehiculeId": "V045",
    "anneeImmat": 2022
  },
  {
    "plaque": "MR-132-AY",
    "vehiculeId": "V045",
    "anneeImmat": 2022
  },
  {
    "plaque": "PQ-598-CN",
    "vehiculeId": "V045",
    "anneeImmat": 2022
  },
  {
    "plaque": "YJ-850-MS",
    "vehiculeId": "V045",
    "anneeImmat": 2022
  },
  {
    "plaque": "AQ-622-CF",
    "vehiculeId": "V045",
    "anneeImmat": 2023
  },
  {
    "plaque": "LL-385-VJ",
    "vehiculeId": "V045",
    "anneeImmat": 2023
  },
  {
    "plaque": "HE-348-SZ",
    "vehiculeId": "V045",
    "anneeImmat": 2023
  },
  {
    "plaque": "LX-977-NY",
    "vehiculeId": "V045",
    "anneeImmat": 2023
  },
  {
    "plaque": "LN-176-LA",
    "vehiculeId": "V045",
    "anneeImmat": 2023
  },
  {
    "plaque": "RB-186-RF",
    "vehiculeId": "V046",
    "anneeImmat": 2023
  },
  {
    "plaque": "TR-329-MN",
    "vehiculeId": "V046",
    "anneeImmat": 2023
  },
  {
    "plaque": "WC-325-MA",
    "vehiculeId": "V046",
    "anneeImmat": 2023
  },
  {
    "plaque": "CP-538-LF",
    "vehiculeId": "V046",
    "anneeImmat": 2023
  },
  {
    "plaque": "QD-313-HW",
    "vehiculeId": "V046",
    "anneeImmat": 2024
  },
  {
    "plaque": "WB-864-HW",
    "vehiculeId": "V046",
    "anneeImmat": 2024
  },
  {
    "plaque": "KG-743-EY",
    "vehiculeId": "V046",
    "anneeImmat": 2024
  },
  {
    "plaque": "BB-440-ET",
    "vehiculeId": "V047",
    "anneeImmat": 2015
  },
  {
    "plaque": "HV-849-XF",
    "vehiculeId": "V047",
    "anneeImmat": 2015
  },
  {
    "plaque": "QA-504-PG",
    "vehiculeId": "V047",
    "anneeImmat": 2015
  },
  {
    "plaque": "GA-263-NS",
    "vehiculeId": "V047",
    "anneeImmat": 2015
  },
  {
    "plaque": "KZ-114-ML",
    "vehiculeId": "V047",
    "anneeImmat": 2016
  },
  {
    "plaque": "SR-270-CP",
    "vehiculeId": "V047",
    "anneeImmat": 2016
  },
  {
    "plaque": "DJ-912-DV",
    "vehiculeId": "V047",
    "anneeImmat": 2016
  },
  {
    "plaque": "BF-973-GC",
    "vehiculeId": "V048",
    "anneeImmat": 2016
  },
  {
    "plaque": "DF-810-TE",
    "vehiculeId": "V048",
    "anneeImmat": 2016
  },
  {
    "plaque": "AC-281-SQ",
    "vehiculeId": "V048",
    "anneeImmat": 2016
  },
  {
    "plaque": "ZV-262-FJ",
    "vehiculeId": "V048",
    "anneeImmat": 2016
  },
  {
    "plaque": "JA-597-LV",
    "vehiculeId": "V048",
    "anneeImmat": 2017
  },
  {
    "plaque": "HF-663-MF",
    "vehiculeId": "V049",
    "anneeImmat": 2017
  },
  {
    "plaque": "YX-896-LS",
    "vehiculeId": "V049",
    "anneeImmat": 2017
  },
  {
    "plaque": "BB-665-MJ",
    "vehiculeId": "V049",
    "anneeImmat": 2017
  },
  {
    "plaque": "RV-750-FX",
    "vehiculeId": "V049",
    "anneeImmat": 2017
  },
  {
    "plaque": "XG-555-LV",
    "vehiculeId": "V049",
    "anneeImmat": 2018
  },
  {
    "plaque": "SX-951-DT",
    "vehiculeId": "V050",
    "anneeImmat": 2018
  },
  {
    "plaque": "EC-903-DZ",
    "vehiculeId": "V050",
    "anneeImmat": 2018
  },
  {
    "plaque": "KB-685-EK",
    "vehiculeId": "V050",
    "anneeImmat": 2018
  },
  {
    "plaque": "EC-536-YP",
    "vehiculeId": "V050",
    "anneeImmat": 2018
  },
  {
    "plaque": "GJ-902-LH",
    "vehiculeId": "V050",
    "anneeImmat": 2019
  },
  {
    "plaque": "HY-185-TQ",
    "vehiculeId": "V051",
    "anneeImmat": 2018
  },
  {
    "plaque": "HG-984-DS",
    "vehiculeId": "V051",
    "anneeImmat": 2018
  },
  {
    "plaque": "WA-629-CF",
    "vehiculeId": "V051",
    "anneeImmat": 2018
  },
  {
    "plaque": "JB-770-JA",
    "vehiculeId": "V051",
    "anneeImmat": 2018
  },
  {
    "plaque": "GW-515-BD",
    "vehiculeId": "V051",
    "anneeImmat": 2019
  },
  {
    "plaque": "NB-564-BR",
    "vehiculeId": "V052",
    "anneeImmat": 2019
  },
  {
    "plaque": "HS-917-FW",
    "vehiculeId": "V052",
    "anneeImmat": 2019
  },
  {
    "plaque": "KF-664-EN",
    "vehiculeId": "V052",
    "anneeImmat": 2019
  },
  {
    "plaque": "VW-482-GY",
    "vehiculeId": "V052",
    "anneeImmat": 2019
  },
  {
    "plaque": "DE-505-MF",
    "vehiculeId": "V053",
    "anneeImmat": 2020
  },
  {
    "plaque": "GC-547-XB",
    "vehiculeId": "V053",
    "anneeImmat": 2020
  },
  {
    "plaque": "TE-481-YD",
    "vehiculeId": "V053",
    "anneeImmat": 2020
  },
  {
    "plaque": "SQ-346-KY",
    "vehiculeId": "V053",
    "anneeImmat": 2020
  },
  {
    "plaque": "FJ-385-RP",
    "vehiculeId": "V053",
    "anneeImmat": 2021
  },
  {
    "plaque": "AW-594-PH",
    "vehiculeId": "V054",
    "anneeImmat": 2021
  },
  {
    "plaque": "MF-351-LZ",
    "vehiculeId": "V054",
    "anneeImmat": 2021
  },
  {
    "plaque": "LS-928-JA",
    "vehiculeId": "V054",
    "anneeImmat": 2021
  },
  {
    "plaque": "EP-220-JV",
    "vehiculeId": "V054",
    "anneeImmat": 2021
  },
  {
    "plaque": "HN-968-QS",
    "vehiculeId": "V054",
    "anneeImmat": 2022
  },
  {
    "plaque": "VH-371-YD",
    "vehiculeId": "V055",
    "anneeImmat": 2022
  },
  {
    "plaque": "FE-247-PS",
    "vehiculeId": "V055",
    "anneeImmat": 2022
  },
  {
    "plaque": "SC-864-WL",
    "vehiculeId": "V055",
    "anneeImmat": 2022
  },
  {
    "plaque": "XZ-920-BR",
    "vehiculeId": "V055",
    "anneeImmat": 2022
  },
  {
    "plaque": "JR-803-HC",
    "vehiculeId": "V056",
    "anneeImmat": 2016
  },
  {
    "plaque": "LG-125-LP",
    "vehiculeId": "V056",
    "anneeImmat": 2016
  },
  {
    "plaque": "MY-216-WT",
    "vehiculeId": "V056",
    "anneeImmat": 2016
  },
  {
    "plaque": "NB-972-JW",
    "vehiculeId": "V056",
    "anneeImmat": 2016
  },
  {
    "plaque": "FW-948-DY",
    "vehiculeId": "V057",
    "anneeImmat": 2017
  },
  {
    "plaque": "DJ-611-SY",
    "vehiculeId": "V057",
    "anneeImmat": 2017
  },
  {
    "plaque": "ER-437-VT",
    "vehiculeId": "V057",
    "anneeImmat": 2017
  },
  {
    "plaque": "GW-388-XZ",
    "vehiculeId": "V057",
    "anneeImmat": 2017
  },
  {
    "plaque": "NQ-803-KM",
    "vehiculeId": "V058",
    "anneeImmat": 2018
  },
  {
    "plaque": "RV-809-FT",
    "vehiculeId": "V058",
    "anneeImmat": 2018
  },
  {
    "plaque": "XY-636-YV",
    "vehiculeId": "V058",
    "anneeImmat": 2018
  },
  {
    "plaque": "BK-970-RP",
    "vehiculeId": "V058",
    "anneeImmat": 2018
  },
  {
    "plaque": "JA-412-AQ",
    "vehiculeId": "V058",
    "anneeImmat": 2019
  },
  {
    "plaque": "KW-267-MA",
    "vehiculeId": "V058",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZM-678-ZA",
    "vehiculeId": "V058",
    "anneeImmat": 2019
  },
  {
    "plaque": "RH-873-SH",
    "vehiculeId": "V058",
    "anneeImmat": 2019
  },
  {
    "plaque": "JA-385-JQ",
    "vehiculeId": "V058",
    "anneeImmat": 2019
  },
  {
    "plaque": "MW-489-NQ",
    "vehiculeId": "V059",
    "anneeImmat": 2019
  },
  {
    "plaque": "KH-491-FK",
    "vehiculeId": "V059",
    "anneeImmat": 2019
  },
  {
    "plaque": "MR-341-MT",
    "vehiculeId": "V059",
    "anneeImmat": 2019
  },
  {
    "plaque": "EL-934-VV",
    "vehiculeId": "V059",
    "anneeImmat": 2019
  },
  {
    "plaque": "CT-452-NC",
    "vehiculeId": "V060",
    "anneeImmat": 2017
  },
  {
    "plaque": "EJ-165-JG",
    "vehiculeId": "V060",
    "anneeImmat": 2017
  },
  {
    "plaque": "XQ-524-GE",
    "vehiculeId": "V060",
    "anneeImmat": 2017
  },
  {
    "plaque": "HR-870-BS",
    "vehiculeId": "V060",
    "anneeImmat": 2017
  },
  {
    "plaque": "KS-505-CP",
    "vehiculeId": "V060",
    "anneeImmat": 2018
  },
  {
    "plaque": "NB-907-EJ",
    "vehiculeId": "V060",
    "anneeImmat": 2018
  },
  {
    "plaque": "HE-680-ZP",
    "vehiculeId": "V060",
    "anneeImmat": 2018
  },
  {
    "plaque": "QV-103-BA",
    "vehiculeId": "V061",
    "anneeImmat": 2018
  },
  {
    "plaque": "PW-271-KC",
    "vehiculeId": "V061",
    "anneeImmat": 2018
  },
  {
    "plaque": "TM-309-NH",
    "vehiculeId": "V061",
    "anneeImmat": 2018
  },
  {
    "plaque": "WA-499-GG",
    "vehiculeId": "V061",
    "anneeImmat": 2018
  },
  {
    "plaque": "ZT-964-XT",
    "vehiculeId": "V061",
    "anneeImmat": 2019
  },
  {
    "plaque": "PG-386-VA",
    "vehiculeId": "V061",
    "anneeImmat": 2019
  },
  {
    "plaque": "JL-172-LH",
    "vehiculeId": "V061",
    "anneeImmat": 2019
  },
  {
    "plaque": "JA-593-BT",
    "vehiculeId": "V062",
    "anneeImmat": 2019
  },
  {
    "plaque": "JV-378-YJ",
    "vehiculeId": "V062",
    "anneeImmat": 2019
  },
  {
    "plaque": "QS-677-AV",
    "vehiculeId": "V062",
    "anneeImmat": 2019
  },
  {
    "plaque": "FB-101-AK",
    "vehiculeId": "V062",
    "anneeImmat": 2019
  },
  {
    "plaque": "JE-143-FK",
    "vehiculeId": "V062",
    "anneeImmat": 2020
  },
  {
    "plaque": "KY-799-MK",
    "vehiculeId": "V063",
    "anneeImmat": 2020
  },
  {
    "plaque": "XF-676-DL",
    "vehiculeId": "V063",
    "anneeImmat": 2020
  },
  {
    "plaque": "VA-130-ZE",
    "vehiculeId": "V063",
    "anneeImmat": 2020
  },
  {
    "plaque": "DJ-408-LV",
    "vehiculeId": "V063",
    "anneeImmat": 2020
  },
  {
    "plaque": "QV-683-JT",
    "vehiculeId": "V063",
    "anneeImmat": 2021
  },
  {
    "plaque": "LZ-399-ZW",
    "vehiculeId": "V063",
    "anneeImmat": 2021
  },
  {
    "plaque": "XD-101-GH",
    "vehiculeId": "V063",
    "anneeImmat": 2021
  },
  {
    "plaque": "WB-221-MP",
    "vehiculeId": "V064",
    "anneeImmat": 2018
  },
  {
    "plaque": "HQ-692-RD",
    "vehiculeId": "V064",
    "anneeImmat": 2018
  },
  {
    "plaque": "YJ-291-SB",
    "vehiculeId": "V064",
    "anneeImmat": 2018
  },
  {
    "plaque": "TT-187-JC",
    "vehiculeId": "V064",
    "anneeImmat": 2018
  },
  {
    "plaque": "DY-358-LA",
    "vehiculeId": "V064",
    "anneeImmat": 2019
  },
  {
    "plaque": "TK-368-XJ",
    "vehiculeId": "V065",
    "anneeImmat": 2019
  },
  {
    "plaque": "YH-894-QV",
    "vehiculeId": "V065",
    "anneeImmat": 2019
  },
  {
    "plaque": "TA-231-GN",
    "vehiculeId": "V065",
    "anneeImmat": 2019
  },
  {
    "plaque": "WS-381-FZ",
    "vehiculeId": "V065",
    "anneeImmat": 2019
  },
  {
    "plaque": "DK-827-VN",
    "vehiculeId": "V065",
    "anneeImmat": 2020
  },
  {
    "plaque": "MW-431-CN",
    "vehiculeId": "V066",
    "anneeImmat": 2020
  },
  {
    "plaque": "WP-762-XM",
    "vehiculeId": "V066",
    "anneeImmat": 2020
  },
  {
    "plaque": "VK-587-WX",
    "vehiculeId": "V066",
    "anneeImmat": 2020
  },
  {
    "plaque": "RN-857-HD",
    "vehiculeId": "V066",
    "anneeImmat": 2020
  },
  {
    "plaque": "LG-297-FY",
    "vehiculeId": "V066",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZA-982-AP",
    "vehiculeId": "V067",
    "anneeImmat": 2015
  },
  {
    "plaque": "DX-269-RM",
    "vehiculeId": "V067",
    "anneeImmat": 2015
  },
  {
    "plaque": "CG-953-SJ",
    "vehiculeId": "V067",
    "anneeImmat": 2015
  },
  {
    "plaque": "ML-103-GA",
    "vehiculeId": "V067",
    "anneeImmat": 2015
  },
  {
    "plaque": "AY-901-ER",
    "vehiculeId": "V067",
    "anneeImmat": 2016
  },
  {
    "plaque": "LQ-330-XL",
    "vehiculeId": "V067",
    "anneeImmat": 2016
  },
  {
    "plaque": "EA-727-XX",
    "vehiculeId": "V067",
    "anneeImmat": 2016
  },
  {
    "plaque": "GD-550-ML",
    "vehiculeId": "V068",
    "anneeImmat": 2016
  },
  {
    "plaque": "YF-719-PD",
    "vehiculeId": "V068",
    "anneeImmat": 2016
  },
  {
    "plaque": "CV-630-AW",
    "vehiculeId": "V068",
    "anneeImmat": 2016
  },
  {
    "plaque": "DF-377-KX",
    "vehiculeId": "V068",
    "anneeImmat": 2016
  },
  {
    "plaque": "SB-580-RB",
    "vehiculeId": "V068",
    "anneeImmat": 2017
  },
  {
    "plaque": "AS-201-GP",
    "vehiculeId": "V069",
    "anneeImmat": 2017
  },
  {
    "plaque": "BT-790-HX",
    "vehiculeId": "V069",
    "anneeImmat": 2017
  },
  {
    "plaque": "GN-201-HX",
    "vehiculeId": "V069",
    "anneeImmat": 2017
  },
  {
    "plaque": "SZ-446-VF",
    "vehiculeId": "V069",
    "anneeImmat": 2017
  },
  {
    "plaque": "NF-340-XP",
    "vehiculeId": "V069",
    "anneeImmat": 2018
  },
  {
    "plaque": "RM-516-WB",
    "vehiculeId": "V069",
    "anneeImmat": 2018
  },
  {
    "plaque": "KK-673-YT",
    "vehiculeId": "V069",
    "anneeImmat": 2018
  },
  {
    "plaque": "NA-500-YS",
    "vehiculeId": "V070",
    "anneeImmat": 2018
  },
  {
    "plaque": "HP-561-GT",
    "vehiculeId": "V070",
    "anneeImmat": 2018
  },
  {
    "plaque": "WT-366-QV",
    "vehiculeId": "V070",
    "anneeImmat": 2018
  },
  {
    "plaque": "WW-559-JC",
    "vehiculeId": "V070",
    "anneeImmat": 2018
  },
  {
    "plaque": "ER-504-CP",
    "vehiculeId": "V070",
    "anneeImmat": 2019
  },
  {
    "plaque": "AF-110-BV",
    "vehiculeId": "V071",
    "anneeImmat": 2020
  },
  {
    "plaque": "HY-408-AB",
    "vehiculeId": "V071",
    "anneeImmat": 2020
  },
  {
    "plaque": "GR-722-AD",
    "vehiculeId": "V071",
    "anneeImmat": 2020
  },
  {
    "plaque": "TN-204-PC",
    "vehiculeId": "V071",
    "anneeImmat": 2020
  },
  {
    "plaque": "JQ-161-JH",
    "vehiculeId": "V071",
    "anneeImmat": 2021
  },
  {
    "plaque": "NV-590-ME",
    "vehiculeId": "V071",
    "anneeImmat": 2021
  },
  {
    "plaque": "VT-994-CN",
    "vehiculeId": "V071",
    "anneeImmat": 2021
  },
  {
    "plaque": "WN-704-FW",
    "vehiculeId": "V071",
    "anneeImmat": 2021
  },
  {
    "plaque": "NM-534-BL",
    "vehiculeId": "V071",
    "anneeImmat": 2021
  },
  {
    "plaque": "DB-709-RM",
    "vehiculeId": "V072",
    "anneeImmat": 2021
  },
  {
    "plaque": "GV-645-RQ",
    "vehiculeId": "V072",
    "anneeImmat": 2021
  },
  {
    "plaque": "GT-937-LC",
    "vehiculeId": "V072",
    "anneeImmat": 2021
  },
  {
    "plaque": "RP-103-SV",
    "vehiculeId": "V072",
    "anneeImmat": 2021
  },
  {
    "plaque": "DK-615-MD",
    "vehiculeId": "V072",
    "anneeImmat": 2022
  },
  {
    "plaque": "GZ-221-AF",
    "vehiculeId": "V073",
    "anneeImmat": 2022
  },
  {
    "plaque": "BS-629-VG",
    "vehiculeId": "V073",
    "anneeImmat": 2022
  },
  {
    "plaque": "HL-925-QE",
    "vehiculeId": "V073",
    "anneeImmat": 2022
  },
  {
    "plaque": "WS-993-LY",
    "vehiculeId": "V073",
    "anneeImmat": 2022
  },
  {
    "plaque": "AE-442-VW",
    "vehiculeId": "V073",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZM-396-CS",
    "vehiculeId": "V074",
    "anneeImmat": 2020
  },
  {
    "plaque": "QC-214-HW",
    "vehiculeId": "V074",
    "anneeImmat": 2020
  },
  {
    "plaque": "JA-192-CL",
    "vehiculeId": "V074",
    "anneeImmat": 2020
  },
  {
    "plaque": "PY-125-RJ",
    "vehiculeId": "V074",
    "anneeImmat": 2020
  },
  {
    "plaque": "BQ-635-XH",
    "vehiculeId": "V075",
    "anneeImmat": 2021
  },
  {
    "plaque": "MY-523-JD",
    "vehiculeId": "V075",
    "anneeImmat": 2021
  },
  {
    "plaque": "VJ-152-NB",
    "vehiculeId": "V075",
    "anneeImmat": 2021
  },
  {
    "plaque": "PJ-232-EV",
    "vehiculeId": "V075",
    "anneeImmat": 2021
  },
  {
    "plaque": "HZ-246-HH",
    "vehiculeId": "V075",
    "anneeImmat": 2022
  },
  {
    "plaque": "TL-545-FW",
    "vehiculeId": "V076",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZK-281-FL",
    "vehiculeId": "V076",
    "anneeImmat": 2022
  },
  {
    "plaque": "JM-482-QC",
    "vehiculeId": "V076",
    "anneeImmat": 2022
  },
  {
    "plaque": "SQ-599-YM",
    "vehiculeId": "V076",
    "anneeImmat": 2022
  },
  {
    "plaque": "AF-539-XF",
    "vehiculeId": "V076",
    "anneeImmat": 2023
  },
  {
    "plaque": "QY-674-CK",
    "vehiculeId": "V077",
    "anneeImmat": 2023
  },
  {
    "plaque": "RM-979-KQ",
    "vehiculeId": "V077",
    "anneeImmat": 2023
  },
  {
    "plaque": "RQ-592-RY",
    "vehiculeId": "V077",
    "anneeImmat": 2023
  },
  {
    "plaque": "LC-650-DZ",
    "vehiculeId": "V077",
    "anneeImmat": 2023
  },
  {
    "plaque": "BV-440-ES",
    "vehiculeId": "V077",
    "anneeImmat": 2024
  },
  {
    "plaque": "YJ-628-AC",
    "vehiculeId": "V077",
    "anneeImmat": 2024
  },
  {
    "plaque": "KD-746-EN",
    "vehiculeId": "V077",
    "anneeImmat": 2024
  },
  {
    "plaque": "JY-864-LZ",
    "vehiculeId": "V077",
    "anneeImmat": 2024
  },
  {
    "plaque": "TS-983-AX",
    "vehiculeId": "V077",
    "anneeImmat": 2024
  },
  {
    "plaque": "TN-118-QX",
    "vehiculeId": "V078",
    "anneeImmat": 2015
  },
  {
    "plaque": "AN-383-SF",
    "vehiculeId": "V078",
    "anneeImmat": 2015
  },
  {
    "plaque": "HB-710-KR",
    "vehiculeId": "V078",
    "anneeImmat": 2015
  },
  {
    "plaque": "PK-233-KF",
    "vehiculeId": "V078",
    "anneeImmat": 2015
  },
  {
    "plaque": "SN-684-WH",
    "vehiculeId": "V078",
    "anneeImmat": 2016
  },
  {
    "plaque": "QY-551-QJ",
    "vehiculeId": "V078",
    "anneeImmat": 2016
  },
  {
    "plaque": "BH-584-XL",
    "vehiculeId": "V078",
    "anneeImmat": 2016
  },
  {
    "plaque": "QP-535-WG",
    "vehiculeId": "V078",
    "anneeImmat": 2016
  },
  {
    "plaque": "QJ-603-TX",
    "vehiculeId": "V078",
    "anneeImmat": 2016
  },
  {
    "plaque": "KN-519-MC",
    "vehiculeId": "V079",
    "anneeImmat": 2016
  },
  {
    "plaque": "LT-781-GG",
    "vehiculeId": "V079",
    "anneeImmat": 2016
  },
  {
    "plaque": "MN-657-MF",
    "vehiculeId": "V079",
    "anneeImmat": 2016
  },
  {
    "plaque": "MY-641-PL",
    "vehiculeId": "V079",
    "anneeImmat": 2016
  },
  {
    "plaque": "EG-396-RZ",
    "vehiculeId": "V079",
    "anneeImmat": 2017
  },
  {
    "plaque": "LP-753-LN",
    "vehiculeId": "V079",
    "anneeImmat": 2017
  },
  {
    "plaque": "EC-546-FA",
    "vehiculeId": "V079",
    "anneeImmat": 2017
  },
  {
    "plaque": "ST-418-PT",
    "vehiculeId": "V079",
    "anneeImmat": 2017
  },
  {
    "plaque": "YS-204-FY",
    "vehiculeId": "V079",
    "anneeImmat": 2017
  },
  {
    "plaque": "DP-840-NJ",
    "vehiculeId": "V080",
    "anneeImmat": 2017
  },
  {
    "plaque": "CV-400-ET",
    "vehiculeId": "V080",
    "anneeImmat": 2017
  },
  {
    "plaque": "JM-941-ND",
    "vehiculeId": "V080",
    "anneeImmat": 2017
  },
  {
    "plaque": "ZN-887-FQ",
    "vehiculeId": "V080",
    "anneeImmat": 2017
  },
  {
    "plaque": "MX-608-DZ",
    "vehiculeId": "V080",
    "anneeImmat": 2018
  },
  {
    "plaque": "FV-405-GD",
    "vehiculeId": "V081",
    "anneeImmat": 2018
  },
  {
    "plaque": "YA-815-YL",
    "vehiculeId": "V081",
    "anneeImmat": 2018
  },
  {
    "plaque": "ME-236-PP",
    "vehiculeId": "V081",
    "anneeImmat": 2018
  },
  {
    "plaque": "GE-253-DA",
    "vehiculeId": "V081",
    "anneeImmat": 2018
  },
  {
    "plaque": "NE-125-BE",
    "vehiculeId": "V081",
    "anneeImmat": 2019
  },
  {
    "plaque": "AP-458-QY",
    "vehiculeId": "V081",
    "anneeImmat": 2019
  },
  {
    "plaque": "BD-437-BM",
    "vehiculeId": "V081",
    "anneeImmat": 2019
  },
  {
    "plaque": "NW-132-GS",
    "vehiculeId": "V081",
    "anneeImmat": 2019
  },
  {
    "plaque": "CX-431-AV",
    "vehiculeId": "V081",
    "anneeImmat": 2019
  },
  {
    "plaque": "DJ-948-LD",
    "vehiculeId": "V082",
    "anneeImmat": 2019
  },
  {
    "plaque": "TT-887-FZ",
    "vehiculeId": "V082",
    "anneeImmat": 2019
  },
  {
    "plaque": "ER-907-LG",
    "vehiculeId": "V082",
    "anneeImmat": 2019
  },
  {
    "plaque": "HK-338-VJ",
    "vehiculeId": "V082",
    "anneeImmat": 2019
  },
  {
    "plaque": "KS-566-LG",
    "vehiculeId": "V082",
    "anneeImmat": 2020
  },
  {
    "plaque": "EP-266-JN",
    "vehiculeId": "V082",
    "anneeImmat": 2020
  },
  {
    "plaque": "RM-306-DP",
    "vehiculeId": "V082",
    "anneeImmat": 2020
  },
  {
    "plaque": "QY-993-ET",
    "vehiculeId": "V082",
    "anneeImmat": 2020
  },
  {
    "plaque": "EC-930-DM",
    "vehiculeId": "V082",
    "anneeImmat": 2020
  },
  {
    "plaque": "VM-223-MG",
    "vehiculeId": "V083",
    "anneeImmat": 2021
  },
  {
    "plaque": "EN-815-VX",
    "vehiculeId": "V083",
    "anneeImmat": 2021
  },
  {
    "plaque": "LV-403-FS",
    "vehiculeId": "V083",
    "anneeImmat": 2021
  },
  {
    "plaque": "CN-945-JV",
    "vehiculeId": "V083",
    "anneeImmat": 2021
  },
  {
    "plaque": "ST-585-XZ",
    "vehiculeId": "V083",
    "anneeImmat": 2022
  },
  {
    "plaque": "PH-283-FQ",
    "vehiculeId": "V083",
    "anneeImmat": 2022
  },
  {
    "plaque": "YS-556-RG",
    "vehiculeId": "V083",
    "anneeImmat": 2022
  },
  {
    "plaque": "KR-578-QE",
    "vehiculeId": "V083",
    "anneeImmat": 2022
  },
  {
    "plaque": "ET-776-EP",
    "vehiculeId": "V083",
    "anneeImmat": 2022
  },
  {
    "plaque": "BN-466-EJ",
    "vehiculeId": "V084",
    "anneeImmat": 2022
  },
  {
    "plaque": "NA-176-GJ",
    "vehiculeId": "V084",
    "anneeImmat": 2022
  },
  {
    "plaque": "KG-498-LD",
    "vehiculeId": "V084",
    "anneeImmat": 2022
  },
  {
    "plaque": "YP-994-BW",
    "vehiculeId": "V084",
    "anneeImmat": 2022
  },
  {
    "plaque": "VL-602-AH",
    "vehiculeId": "V084",
    "anneeImmat": 2023
  },
  {
    "plaque": "MW-638-KH",
    "vehiculeId": "V084",
    "anneeImmat": 2023
  },
  {
    "plaque": "DF-941-MN",
    "vehiculeId": "V084",
    "anneeImmat": 2023
  },
  {
    "plaque": "TF-138-XF",
    "vehiculeId": "V084",
    "anneeImmat": 2023
  },
  {
    "plaque": "BT-278-SP",
    "vehiculeId": "V084",
    "anneeImmat": 2023
  },
  {
    "plaque": "XD-914-QJ",
    "vehiculeId": "V085",
    "anneeImmat": 2023
  },
  {
    "plaque": "VR-720-QN",
    "vehiculeId": "V085",
    "anneeImmat": 2023
  },
  {
    "plaque": "RB-288-VL",
    "vehiculeId": "V085",
    "anneeImmat": 2023
  },
  {
    "plaque": "XV-527-MY",
    "vehiculeId": "V085",
    "anneeImmat": 2023
  },
  {
    "plaque": "AC-192-JN",
    "vehiculeId": "V086",
    "anneeImmat": 2021
  },
  {
    "plaque": "EN-396-PD",
    "vehiculeId": "V086",
    "anneeImmat": 2021
  },
  {
    "plaque": "LZ-908-HF",
    "vehiculeId": "V086",
    "anneeImmat": 2021
  },
  {
    "plaque": "AX-202-DH",
    "vehiculeId": "V086",
    "anneeImmat": 2021
  },
  {
    "plaque": "EL-818-EN",
    "vehiculeId": "V086",
    "anneeImmat": 2022
  },
  {
    "plaque": "KK-410-CB",
    "vehiculeId": "V087",
    "anneeImmat": 2022
  },
  {
    "plaque": "AM-984-FH",
    "vehiculeId": "V087",
    "anneeImmat": 2022
  },
  {
    "plaque": "PJ-826-QC",
    "vehiculeId": "V087",
    "anneeImmat": 2022
  },
  {
    "plaque": "HF-972-ZQ",
    "vehiculeId": "V087",
    "anneeImmat": 2022
  },
  {
    "plaque": "KL-889-FG",
    "vehiculeId": "V087",
    "anneeImmat": 2023
  },
  {
    "plaque": "FZ-719-VG",
    "vehiculeId": "V088",
    "anneeImmat": 2023
  },
  {
    "plaque": "LG-114-VN",
    "vehiculeId": "V088",
    "anneeImmat": 2023
  },
  {
    "plaque": "SA-854-VX",
    "vehiculeId": "V088",
    "anneeImmat": 2023
  },
  {
    "plaque": "HK-451-ZZ",
    "vehiculeId": "V088",
    "anneeImmat": 2023
  },
  {
    "plaque": "SA-910-ZQ",
    "vehiculeId": "V088",
    "anneeImmat": 2024
  },
  {
    "plaque": "NK-224-GR",
    "vehiculeId": "V088",
    "anneeImmat": 2024
  },
  {
    "plaque": "LR-251-PB",
    "vehiculeId": "V088",
    "anneeImmat": 2024
  },
  {
    "plaque": "XG-615-XS",
    "vehiculeId": "V088",
    "anneeImmat": 2024
  },
  {
    "plaque": "AA-981-PY",
    "vehiculeId": "V088",
    "anneeImmat": 2024
  },
  {
    "plaque": "QW-828-XQ",
    "vehiculeId": "V089",
    "anneeImmat": 2017
  },
  {
    "plaque": "SF-561-TT",
    "vehiculeId": "V089",
    "anneeImmat": 2017
  },
  {
    "plaque": "AJ-699-PK",
    "vehiculeId": "V089",
    "anneeImmat": 2017
  },
  {
    "plaque": "FB-397-XN",
    "vehiculeId": "V089",
    "anneeImmat": 2017
  },
  {
    "plaque": "KH-617-VS",
    "vehiculeId": "V089",
    "anneeImmat": 2018
  },
  {
    "plaque": "JC-285-KR",
    "vehiculeId": "V089",
    "anneeImmat": 2018
  },
  {
    "plaque": "KA-743-LV",
    "vehiculeId": "V089",
    "anneeImmat": 2018
  },
  {
    "plaque": "WJ-254-RP",
    "vehiculeId": "V090",
    "anneeImmat": 2018
  },
  {
    "plaque": "KC-414-VK",
    "vehiculeId": "V090",
    "anneeImmat": 2018
  },
  {
    "plaque": "GY-372-PM",
    "vehiculeId": "V090",
    "anneeImmat": 2018
  },
  {
    "plaque": "PC-927-DS",
    "vehiculeId": "V090",
    "anneeImmat": 2018
  },
  {
    "plaque": "GE-728-PA",
    "vehiculeId": "V090",
    "anneeImmat": 2019
  },
  {
    "plaque": "SX-602-QA",
    "vehiculeId": "V090",
    "anneeImmat": 2019
  },
  {
    "plaque": "CY-373-JM",
    "vehiculeId": "V090",
    "anneeImmat": 2019
  },
  {
    "plaque": "AR-987-MK",
    "vehiculeId": "V090",
    "anneeImmat": 2019
  },
  {
    "plaque": "XE-873-DS",
    "vehiculeId": "V090",
    "anneeImmat": 2019
  },
  {
    "plaque": "PD-175-EY",
    "vehiculeId": "V091",
    "anneeImmat": 2019
  },
  {
    "plaque": "HZ-914-NQ",
    "vehiculeId": "V091",
    "anneeImmat": 2019
  },
  {
    "plaque": "JV-231-KW",
    "vehiculeId": "V091",
    "anneeImmat": 2019
  },
  {
    "plaque": "TC-765-LA",
    "vehiculeId": "V091",
    "anneeImmat": 2019
  },
  {
    "plaque": "YT-451-WY",
    "vehiculeId": "V092",
    "anneeImmat": 2020
  },
  {
    "plaque": "AX-673-GQ",
    "vehiculeId": "V092",
    "anneeImmat": 2020
  },
  {
    "plaque": "XQ-166-AW",
    "vehiculeId": "V092",
    "anneeImmat": 2020
  },
  {
    "plaque": "TT-746-NZ",
    "vehiculeId": "V092",
    "anneeImmat": 2020
  },
  {
    "plaque": "PK-599-WC",
    "vehiculeId": "V092",
    "anneeImmat": 2021
  },
  {
    "plaque": "PM-640-PW",
    "vehiculeId": "V092",
    "anneeImmat": 2021
  },
  {
    "plaque": "DS-205-KR",
    "vehiculeId": "V092",
    "anneeImmat": 2021
  },
  {
    "plaque": "MR-640-FP",
    "vehiculeId": "V093",
    "anneeImmat": 2016
  },
  {
    "plaque": "WG-579-NW",
    "vehiculeId": "V093",
    "anneeImmat": 2016
  },
  {
    "plaque": "RP-195-GF",
    "vehiculeId": "V093",
    "anneeImmat": 2016
  },
  {
    "plaque": "VK-951-LE",
    "vehiculeId": "V093",
    "anneeImmat": 2016
  },
  {
    "plaque": "RZ-237-JD",
    "vehiculeId": "V094",
    "anneeImmat": 2017
  },
  {
    "plaque": "DV-308-TT",
    "vehiculeId": "V094",
    "anneeImmat": 2017
  },
  {
    "plaque": "XX-257-PC",
    "vehiculeId": "V094",
    "anneeImmat": 2017
  },
  {
    "plaque": "CG-212-SY",
    "vehiculeId": "V094",
    "anneeImmat": 2017
  },
  {
    "plaque": "SY-353-YS",
    "vehiculeId": "V094",
    "anneeImmat": 2018
  },
  {
    "plaque": "GC-698-ZP",
    "vehiculeId": "V094",
    "anneeImmat": 2018
  },
  {
    "plaque": "CV-916-LG",
    "vehiculeId": "V094",
    "anneeImmat": 2018
  },
  {
    "plaque": "WS-238-PJ",
    "vehiculeId": "V095",
    "anneeImmat": 2018
  },
  {
    "plaque": "WR-690-KQ",
    "vehiculeId": "V095",
    "anneeImmat": 2018
  },
  {
    "plaque": "NH-474-CX",
    "vehiculeId": "V095",
    "anneeImmat": 2018
  },
  {
    "plaque": "JK-778-DR",
    "vehiculeId": "V095",
    "anneeImmat": 2018
  },
  {
    "plaque": "PD-980-NK",
    "vehiculeId": "V095",
    "anneeImmat": 2019
  },
  {
    "plaque": "XE-894-QS",
    "vehiculeId": "V095",
    "anneeImmat": 2019
  },
  {
    "plaque": "LA-934-FA",
    "vehiculeId": "V095",
    "anneeImmat": 2019
  },
  {
    "plaque": "DT-935-SY",
    "vehiculeId": "V095",
    "anneeImmat": 2019
  },
  {
    "plaque": "HZ-124-GD",
    "vehiculeId": "V095",
    "anneeImmat": 2019
  },
  {
    "plaque": "YR-933-SB",
    "vehiculeId": "V096",
    "anneeImmat": 2019
  },
  {
    "plaque": "YG-211-HW",
    "vehiculeId": "V096",
    "anneeImmat": 2019
  },
  {
    "plaque": "FP-635-AY",
    "vehiculeId": "V096",
    "anneeImmat": 2019
  },
  {
    "plaque": "NW-489-EH",
    "vehiculeId": "V096",
    "anneeImmat": 2019
  },
  {
    "plaque": "TZ-721-NP",
    "vehiculeId": "V097",
    "anneeImmat": 2021
  },
  {
    "plaque": "LZ-380-SW",
    "vehiculeId": "V097",
    "anneeImmat": 2021
  },
  {
    "plaque": "SE-747-JS",
    "vehiculeId": "V097",
    "anneeImmat": 2021
  },
  {
    "plaque": "PJ-180-MG",
    "vehiculeId": "V097",
    "anneeImmat": 2021
  },
  {
    "plaque": "KQ-813-DF",
    "vehiculeId": "V097",
    "anneeImmat": 2022
  },
  {
    "plaque": "CX-636-NK",
    "vehiculeId": "V097",
    "anneeImmat": 2022
  },
  {
    "plaque": "DR-104-NR",
    "vehiculeId": "V097",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZV-460-AA",
    "vehiculeId": "V098",
    "anneeImmat": 2022
  },
  {
    "plaque": "QX-104-KQ",
    "vehiculeId": "V098",
    "anneeImmat": 2022
  },
  {
    "plaque": "VV-786-TY",
    "vehiculeId": "V098",
    "anneeImmat": 2022
  },
  {
    "plaque": "TA-260-SK",
    "vehiculeId": "V098",
    "anneeImmat": 2022
  },
  {
    "plaque": "RK-439-KP",
    "vehiculeId": "V098",
    "anneeImmat": 2023
  },
  {
    "plaque": "KX-689-QG",
    "vehiculeId": "V098",
    "anneeImmat": 2023
  },
  {
    "plaque": "NK-414-JL",
    "vehiculeId": "V098",
    "anneeImmat": 2023
  },
  {
    "plaque": "XR-318-FM",
    "vehiculeId": "V099",
    "anneeImmat": 2023
  },
  {
    "plaque": "TQ-933-XA",
    "vehiculeId": "V099",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZA-426-BV",
    "vehiculeId": "V099",
    "anneeImmat": 2023
  },
  {
    "plaque": "HH-216-WN",
    "vehiculeId": "V099",
    "anneeImmat": 2023
  },
  {
    "plaque": "RK-806-RA",
    "vehiculeId": "V099",
    "anneeImmat": 2024
  },
  {
    "plaque": "VA-727-FE",
    "vehiculeId": "V100",
    "anneeImmat": 2016
  },
  {
    "plaque": "BS-418-LJ",
    "vehiculeId": "V100",
    "anneeImmat": 2016
  },
  {
    "plaque": "XQ-721-PF",
    "vehiculeId": "V100",
    "anneeImmat": 2016
  },
  {
    "plaque": "EK-625-JR",
    "vehiculeId": "V100",
    "anneeImmat": 2016
  },
  {
    "plaque": "EV-905-WV",
    "vehiculeId": "V100",
    "anneeImmat": 2017
  },
  {
    "plaque": "JE-987-GC",
    "vehiculeId": "V101",
    "anneeImmat": 2017
  },
  {
    "plaque": "CD-672-MM",
    "vehiculeId": "V101",
    "anneeImmat": 2017
  },
  {
    "plaque": "SP-565-KR",
    "vehiculeId": "V101",
    "anneeImmat": 2017
  },
  {
    "plaque": "JX-453-SB",
    "vehiculeId": "V101",
    "anneeImmat": 2017
  },
  {
    "plaque": "VA-118-ST",
    "vehiculeId": "V101",
    "anneeImmat": 2018
  },
  {
    "plaque": "VJ-471-WQ",
    "vehiculeId": "V102",
    "anneeImmat": 2018
  },
  {
    "plaque": "YV-126-KK",
    "vehiculeId": "V102",
    "anneeImmat": 2018
  },
  {
    "plaque": "MN-307-CM",
    "vehiculeId": "V102",
    "anneeImmat": 2018
  },
  {
    "plaque": "YM-403-NS",
    "vehiculeId": "V102",
    "anneeImmat": 2018
  },
  {
    "plaque": "CJ-447-BM",
    "vehiculeId": "V102",
    "anneeImmat": 2019
  },
  {
    "plaque": "YV-391-FT",
    "vehiculeId": "V103",
    "anneeImmat": 2019
  },
  {
    "plaque": "RT-876-NE",
    "vehiculeId": "V103",
    "anneeImmat": 2019
  },
  {
    "plaque": "YG-603-AW",
    "vehiculeId": "V103",
    "anneeImmat": 2019
  },
  {
    "plaque": "WH-731-ZD",
    "vehiculeId": "V103",
    "anneeImmat": 2019
  },
  {
    "plaque": "AB-874-HB",
    "vehiculeId": "V103",
    "anneeImmat": 2020
  },
  {
    "plaque": "DD-504-FZ",
    "vehiculeId": "V103",
    "anneeImmat": 2020
  },
  {
    "plaque": "LM-379-RY",
    "vehiculeId": "V103",
    "anneeImmat": 2020
  },
  {
    "plaque": "ES-600-SJ",
    "vehiculeId": "V103",
    "anneeImmat": 2020
  },
  {
    "plaque": "GA-721-MP",
    "vehiculeId": "V103",
    "anneeImmat": 2020
  },
  {
    "plaque": "CG-847-VY",
    "vehiculeId": "V104",
    "anneeImmat": 2020
  },
  {
    "plaque": "WB-783-AE",
    "vehiculeId": "V104",
    "anneeImmat": 2020
  },
  {
    "plaque": "HC-884-TV",
    "vehiculeId": "V104",
    "anneeImmat": 2020
  },
  {
    "plaque": "HR-591-HH",
    "vehiculeId": "V104",
    "anneeImmat": 2020
  },
  {
    "plaque": "WZ-580-CJ",
    "vehiculeId": "V104",
    "anneeImmat": 2021
  },
  {
    "plaque": "SM-999-XK",
    "vehiculeId": "V105",
    "anneeImmat": 2018
  },
  {
    "plaque": "CL-993-YT",
    "vehiculeId": "V105",
    "anneeImmat": 2018
  },
  {
    "plaque": "HN-126-LK",
    "vehiculeId": "V105",
    "anneeImmat": 2018
  },
  {
    "plaque": "JR-722-DD",
    "vehiculeId": "V105",
    "anneeImmat": 2018
  },
  {
    "plaque": "XA-880-KD",
    "vehiculeId": "V106",
    "anneeImmat": 2019
  },
  {
    "plaque": "BV-666-MP",
    "vehiculeId": "V106",
    "anneeImmat": 2019
  },
  {
    "plaque": "WN-278-QS",
    "vehiculeId": "V106",
    "anneeImmat": 2019
  },
  {
    "plaque": "RA-713-CT",
    "vehiculeId": "V106",
    "anneeImmat": 2019
  },
  {
    "plaque": "VZ-384-QB",
    "vehiculeId": "V106",
    "anneeImmat": 2020
  },
  {
    "plaque": "CG-542-LW",
    "vehiculeId": "V106",
    "anneeImmat": 2020
  },
  {
    "plaque": "WQ-587-YL",
    "vehiculeId": "V106",
    "anneeImmat": 2020
  },
  {
    "plaque": "JV-815-SF",
    "vehiculeId": "V107",
    "anneeImmat": 2020
  },
  {
    "plaque": "SS-314-SZ",
    "vehiculeId": "V107",
    "anneeImmat": 2020
  },
  {
    "plaque": "YR-465-WL",
    "vehiculeId": "V107",
    "anneeImmat": 2020
  },
  {
    "plaque": "HT-852-DR",
    "vehiculeId": "V107",
    "anneeImmat": 2020
  },
  {
    "plaque": "RX-907-ZS",
    "vehiculeId": "V108",
    "anneeImmat": 2021
  },
  {
    "plaque": "KL-391-WF",
    "vehiculeId": "V108",
    "anneeImmat": 2021
  },
  {
    "plaque": "LH-394-GY",
    "vehiculeId": "V108",
    "anneeImmat": 2021
  },
  {
    "plaque": "FY-939-RH",
    "vehiculeId": "V108",
    "anneeImmat": 2021
  },
  {
    "plaque": "LY-676-XG",
    "vehiculeId": "V108",
    "anneeImmat": 2022
  },
  {
    "plaque": "EZ-305-FC",
    "vehiculeId": "V109",
    "anneeImmat": 2017
  },
  {
    "plaque": "VW-354-PF",
    "vehiculeId": "V109",
    "anneeImmat": 2017
  },
  {
    "plaque": "VF-564-ZM",
    "vehiculeId": "V109",
    "anneeImmat": 2017
  },
  {
    "plaque": "VD-952-KY",
    "vehiculeId": "V109",
    "anneeImmat": 2017
  },
  {
    "plaque": "HS-254-HZ",
    "vehiculeId": "V109",
    "anneeImmat": 2018
  },
  {
    "plaque": "LR-375-ZD",
    "vehiculeId": "V110",
    "anneeImmat": 2018
  },
  {
    "plaque": "GG-650-JW",
    "vehiculeId": "V110",
    "anneeImmat": 2018
  },
  {
    "plaque": "BG-299-QS",
    "vehiculeId": "V110",
    "anneeImmat": 2018
  },
  {
    "plaque": "TQ-111-AN",
    "vehiculeId": "V110",
    "anneeImmat": 2018
  },
  {
    "plaque": "RG-506-DX",
    "vehiculeId": "V111",
    "anneeImmat": 2019
  },
  {
    "plaque": "QN-154-BR",
    "vehiculeId": "V111",
    "anneeImmat": 2019
  },
  {
    "plaque": "BX-640-FZ",
    "vehiculeId": "V111",
    "anneeImmat": 2019
  },
  {
    "plaque": "SH-738-AT",
    "vehiculeId": "V111",
    "anneeImmat": 2019
  },
  {
    "plaque": "CT-357-WW",
    "vehiculeId": "V111",
    "anneeImmat": 2020
  },
  {
    "plaque": "DB-989-KH",
    "vehiculeId": "V111",
    "anneeImmat": 2020
  },
  {
    "plaque": "EY-160-LV",
    "vehiculeId": "V111",
    "anneeImmat": 2020
  },
  {
    "plaque": "ED-467-RF",
    "vehiculeId": "V111",
    "anneeImmat": 2020
  },
  {
    "plaque": "BL-164-TT",
    "vehiculeId": "V111",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZG-419-QK",
    "vehiculeId": "V112",
    "anneeImmat": 2023
  },
  {
    "plaque": "JK-138-LJ",
    "vehiculeId": "V112",
    "anneeImmat": 2023
  },
  {
    "plaque": "CC-653-PT",
    "vehiculeId": "V112",
    "anneeImmat": 2023
  },
  {
    "plaque": "MT-342-XC",
    "vehiculeId": "V112",
    "anneeImmat": 2023
  },
  {
    "plaque": "ST-796-JL",
    "vehiculeId": "V113",
    "anneeImmat": 2017
  },
  {
    "plaque": "KH-896-CH",
    "vehiculeId": "V113",
    "anneeImmat": 2017
  },
  {
    "plaque": "AN-274-LJ",
    "vehiculeId": "V113",
    "anneeImmat": 2017
  },
  {
    "plaque": "DX-636-CR",
    "vehiculeId": "V113",
    "anneeImmat": 2017
  },
  {
    "plaque": "TD-599-FQ",
    "vehiculeId": "V113",
    "anneeImmat": 2018
  },
  {
    "plaque": "YL-927-SY",
    "vehiculeId": "V113",
    "anneeImmat": 2018
  },
  {
    "plaque": "CK-802-ZP",
    "vehiculeId": "V113",
    "anneeImmat": 2018
  },
  {
    "plaque": "MC-629-TW",
    "vehiculeId": "V114",
    "anneeImmat": 2018
  },
  {
    "plaque": "YX-316-WH",
    "vehiculeId": "V114",
    "anneeImmat": 2018
  },
  {
    "plaque": "CK-800-BR",
    "vehiculeId": "V114",
    "anneeImmat": 2018
  },
  {
    "plaque": "JG-967-TD",
    "vehiculeId": "V114",
    "anneeImmat": 2018
  },
  {
    "plaque": "GW-911-KV",
    "vehiculeId": "V114",
    "anneeImmat": 2019
  },
  {
    "plaque": "PY-170-VB",
    "vehiculeId": "V114",
    "anneeImmat": 2019
  },
  {
    "plaque": "FE-270-QD",
    "vehiculeId": "V114",
    "anneeImmat": 2019
  },
  {
    "plaque": "JK-556-MH",
    "vehiculeId": "V114",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZG-974-RS",
    "vehiculeId": "V114",
    "anneeImmat": 2019
  },
  {
    "plaque": "HV-885-JH",
    "vehiculeId": "V115",
    "anneeImmat": 2019
  },
  {
    "plaque": "TA-148-CD",
    "vehiculeId": "V115",
    "anneeImmat": 2019
  },
  {
    "plaque": "CT-849-GJ",
    "vehiculeId": "V115",
    "anneeImmat": 2019
  },
  {
    "plaque": "CZ-731-XS",
    "vehiculeId": "V115",
    "anneeImmat": 2019
  },
  {
    "plaque": "VE-300-MR",
    "vehiculeId": "V116",
    "anneeImmat": 2020
  },
  {
    "plaque": "GJ-500-AY",
    "vehiculeId": "V116",
    "anneeImmat": 2020
  },
  {
    "plaque": "JT-800-LQ",
    "vehiculeId": "V116",
    "anneeImmat": 2020
  },
  {
    "plaque": "TW-516-WZ",
    "vehiculeId": "V116",
    "anneeImmat": 2020
  },
  {
    "plaque": "WH-473-BT",
    "vehiculeId": "V116",
    "anneeImmat": 2021
  },
  {
    "plaque": "SB-379-TH",
    "vehiculeId": "V117",
    "anneeImmat": 2018
  },
  {
    "plaque": "JM-873-WC",
    "vehiculeId": "V117",
    "anneeImmat": 2018
  },
  {
    "plaque": "FL-226-GR",
    "vehiculeId": "V117",
    "anneeImmat": 2018
  },
  {
    "plaque": "BL-167-CL",
    "vehiculeId": "V117",
    "anneeImmat": 2018
  },
  {
    "plaque": "ZC-239-ZD",
    "vehiculeId": "V117",
    "anneeImmat": 2019
  },
  {
    "plaque": "JA-425-JR",
    "vehiculeId": "V118",
    "anneeImmat": 2019
  },
  {
    "plaque": "CF-616-ZM",
    "vehiculeId": "V118",
    "anneeImmat": 2019
  },
  {
    "plaque": "TB-700-SQ",
    "vehiculeId": "V118",
    "anneeImmat": 2019
  },
  {
    "plaque": "TQ-879-ZG",
    "vehiculeId": "V118",
    "anneeImmat": 2019
  },
  {
    "plaque": "AS-698-CW",
    "vehiculeId": "V118",
    "anneeImmat": 2020
  },
  {
    "plaque": "VL-557-CT",
    "vehiculeId": "V118",
    "anneeImmat": 2020
  },
  {
    "plaque": "JW-509-NX",
    "vehiculeId": "V118",
    "anneeImmat": 2020
  },
  {
    "plaque": "HL-458-BC",
    "vehiculeId": "V118",
    "anneeImmat": 2020
  },
  {
    "plaque": "WF-669-RM",
    "vehiculeId": "V118",
    "anneeImmat": 2020
  },
  {
    "plaque": "QC-686-BJ",
    "vehiculeId": "V119",
    "anneeImmat": 2020
  },
  {
    "plaque": "VB-180-CX",
    "vehiculeId": "V119",
    "anneeImmat": 2020
  },
  {
    "plaque": "XG-496-WB",
    "vehiculeId": "V119",
    "anneeImmat": 2020
  },
  {
    "plaque": "XR-803-BJ",
    "vehiculeId": "V119",
    "anneeImmat": 2020
  },
  {
    "plaque": "JH-932-HL",
    "vehiculeId": "V119",
    "anneeImmat": 2021
  },
  {
    "plaque": "CS-222-PN",
    "vehiculeId": "V120",
    "anneeImmat": 2021
  },
  {
    "plaque": "YQ-754-BZ",
    "vehiculeId": "V120",
    "anneeImmat": 2021
  },
  {
    "plaque": "HX-112-PH",
    "vehiculeId": "V120",
    "anneeImmat": 2021
  },
  {
    "plaque": "BV-666-WS",
    "vehiculeId": "V120",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZB-232-QT",
    "vehiculeId": "V120",
    "anneeImmat": 2022
  },
  {
    "plaque": "GZ-405-VZ",
    "vehiculeId": "V120",
    "anneeImmat": 2022
  },
  {
    "plaque": "ED-141-DJ",
    "vehiculeId": "V120",
    "anneeImmat": 2022
  },
  {
    "plaque": "EY-312-YN",
    "vehiculeId": "V120",
    "anneeImmat": 2022
  },
  {
    "plaque": "KA-629-SS",
    "vehiculeId": "V120",
    "anneeImmat": 2022
  },
  {
    "plaque": "GT-571-NJ",
    "vehiculeId": "V121",
    "anneeImmat": 2022
  },
  {
    "plaque": "TY-988-BX",
    "vehiculeId": "V121",
    "anneeImmat": 2022
  },
  {
    "plaque": "WM-383-ZZ",
    "vehiculeId": "V121",
    "anneeImmat": 2022
  },
  {
    "plaque": "RQ-914-JX",
    "vehiculeId": "V121",
    "anneeImmat": 2022
  },
  {
    "plaque": "CK-845-BQ",
    "vehiculeId": "V121",
    "anneeImmat": 2023
  },
  {
    "plaque": "GZ-500-GM",
    "vehiculeId": "V122",
    "anneeImmat": 2017
  },
  {
    "plaque": "CZ-974-GY",
    "vehiculeId": "V122",
    "anneeImmat": 2017
  },
  {
    "plaque": "NK-748-XK",
    "vehiculeId": "V122",
    "anneeImmat": 2017
  },
  {
    "plaque": "PX-436-RM",
    "vehiculeId": "V122",
    "anneeImmat": 2017
  },
  {
    "plaque": "TR-260-XS",
    "vehiculeId": "V123",
    "anneeImmat": 2018
  },
  {
    "plaque": "NF-506-XL",
    "vehiculeId": "V123",
    "anneeImmat": 2018
  },
  {
    "plaque": "HK-160-WB",
    "vehiculeId": "V123",
    "anneeImmat": 2018
  },
  {
    "plaque": "WS-813-WR",
    "vehiculeId": "V123",
    "anneeImmat": 2018
  },
  {
    "plaque": "TJ-864-DE",
    "vehiculeId": "V123",
    "anneeImmat": 2019
  },
  {
    "plaque": "RT-661-RG",
    "vehiculeId": "V123",
    "anneeImmat": 2019
  },
  {
    "plaque": "DG-882-JV",
    "vehiculeId": "V123",
    "anneeImmat": 2019
  },
  {
    "plaque": "BM-206-NS",
    "vehiculeId": "V123",
    "anneeImmat": 2019
  },
  {
    "plaque": "QX-367-ZS",
    "vehiculeId": "V123",
    "anneeImmat": 2019
  },
  {
    "plaque": "TL-284-HA",
    "vehiculeId": "V124",
    "anneeImmat": 2019
  },
  {
    "plaque": "PN-811-SN",
    "vehiculeId": "V124",
    "anneeImmat": 2019
  },
  {
    "plaque": "BZ-668-WK",
    "vehiculeId": "V124",
    "anneeImmat": 2019
  },
  {
    "plaque": "PH-917-DT",
    "vehiculeId": "V124",
    "anneeImmat": 2019
  },
  {
    "plaque": "WS-179-AZ",
    "vehiculeId": "V124",
    "anneeImmat": 2020
  },
  {
    "plaque": "QT-123-BN",
    "vehiculeId": "V124",
    "anneeImmat": 2020
  },
  {
    "plaque": "VZ-900-XQ",
    "vehiculeId": "V124",
    "anneeImmat": 2020
  },
  {
    "plaque": "FF-105-BA",
    "vehiculeId": "V125",
    "anneeImmat": 2020
  },
  {
    "plaque": "JW-460-TT",
    "vehiculeId": "V125",
    "anneeImmat": 2020
  },
  {
    "plaque": "GM-500-GK",
    "vehiculeId": "V125",
    "anneeImmat": 2020
  },
  {
    "plaque": "GY-473-PC",
    "vehiculeId": "V125",
    "anneeImmat": 2020
  },
  {
    "plaque": "XK-180-AC",
    "vehiculeId": "V125",
    "anneeImmat": 2021
  },
  {
    "plaque": "RM-770-NX",
    "vehiculeId": "V125",
    "anneeImmat": 2021
  },
  {
    "plaque": "DJ-432-DS",
    "vehiculeId": "V125",
    "anneeImmat": 2021
  },
  {
    "plaque": "MZ-509-VE",
    "vehiculeId": "V125",
    "anneeImmat": 2021
  },
  {
    "plaque": "SB-949-DC",
    "vehiculeId": "V125",
    "anneeImmat": 2021
  },
  {
    "plaque": "WB-850-CN",
    "vehiculeId": "V126",
    "anneeImmat": 2021
  },
  {
    "plaque": "BX-629-EQ",
    "vehiculeId": "V126",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZZ-204-VA",
    "vehiculeId": "V126",
    "anneeImmat": 2021
  },
  {
    "plaque": "NR-257-FF",
    "vehiculeId": "V126",
    "anneeImmat": 2021
  },
  {
    "plaque": "VP-696-HJ",
    "vehiculeId": "V126",
    "anneeImmat": 2022
  },
  {
    "plaque": "QQ-574-QD",
    "vehiculeId": "V126",
    "anneeImmat": 2022
  },
  {
    "plaque": "GH-905-DJ",
    "vehiculeId": "V126",
    "anneeImmat": 2022
  },
  {
    "plaque": "VR-820-VN",
    "vehiculeId": "V127",
    "anneeImmat": 2022
  },
  {
    "plaque": "BM-952-GR",
    "vehiculeId": "V127",
    "anneeImmat": 2022
  },
  {
    "plaque": "AA-948-JJ",
    "vehiculeId": "V127",
    "anneeImmat": 2022
  },
  {
    "plaque": "WT-431-MZ",
    "vehiculeId": "V127",
    "anneeImmat": 2022
  },
  {
    "plaque": "FF-625-QZ",
    "vehiculeId": "V127",
    "anneeImmat": 2023
  },
  {
    "plaque": "HJ-591-PS",
    "vehiculeId": "V127",
    "anneeImmat": 2023
  },
  {
    "plaque": "GV-442-VX",
    "vehiculeId": "V127",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZD-597-DC",
    "vehiculeId": "V127",
    "anneeImmat": 2023
  },
  {
    "plaque": "WS-465-JN",
    "vehiculeId": "V127",
    "anneeImmat": 2023
  },
  {
    "plaque": "NZ-815-XV",
    "vehiculeId": "V128",
    "anneeImmat": 2023
  },
  {
    "plaque": "MT-821-LW",
    "vehiculeId": "V128",
    "anneeImmat": 2023
  },
  {
    "plaque": "HM-355-QM",
    "vehiculeId": "V128",
    "anneeImmat": 2023
  },
  {
    "plaque": "EE-993-EA",
    "vehiculeId": "V128",
    "anneeImmat": 2023
  },
  {
    "plaque": "RR-607-AK",
    "vehiculeId": "V129",
    "anneeImmat": 2019
  },
  {
    "plaque": "CX-399-DZ",
    "vehiculeId": "V129",
    "anneeImmat": 2019
  },
  {
    "plaque": "RN-194-TX",
    "vehiculeId": "V129",
    "anneeImmat": 2019
  },
  {
    "plaque": "VN-544-KN",
    "vehiculeId": "V129",
    "anneeImmat": 2019
  },
  {
    "plaque": "GR-742-JL",
    "vehiculeId": "V129",
    "anneeImmat": 2020
  },
  {
    "plaque": "JJ-720-CD",
    "vehiculeId": "V129",
    "anneeImmat": 2020
  },
  {
    "plaque": "MZ-419-VC",
    "vehiculeId": "V129",
    "anneeImmat": 2020
  },
  {
    "plaque": "QZ-646-KP",
    "vehiculeId": "V129",
    "anneeImmat": 2020
  },
  {
    "plaque": "PS-980-NS",
    "vehiculeId": "V129",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZT-140-VJ",
    "vehiculeId": "V130",
    "anneeImmat": 2020
  },
  {
    "plaque": "PG-772-DA",
    "vehiculeId": "V130",
    "anneeImmat": 2020
  },
  {
    "plaque": "YD-246-GZ",
    "vehiculeId": "V130",
    "anneeImmat": 2020
  },
  {
    "plaque": "VB-947-AS",
    "vehiculeId": "V130",
    "anneeImmat": 2020
  },
  {
    "plaque": "LC-935-RQ",
    "vehiculeId": "V130",
    "anneeImmat": 2021
  },
  {
    "plaque": "AM-170-LS",
    "vehiculeId": "V130",
    "anneeImmat": 2021
  },
  {
    "plaque": "TD-990-VD",
    "vehiculeId": "V130",
    "anneeImmat": 2021
  },
  {
    "plaque": "LF-830-NQ",
    "vehiculeId": "V131",
    "anneeImmat": 2021
  },
  {
    "plaque": "HH-816-GE",
    "vehiculeId": "V131",
    "anneeImmat": 2021
  },
  {
    "plaque": "QF-552-LC",
    "vehiculeId": "V131",
    "anneeImmat": 2021
  },
  {
    "plaque": "PG-195-YZ",
    "vehiculeId": "V131",
    "anneeImmat": 2021
  },
  {
    "plaque": "TC-431-TH",
    "vehiculeId": "V131",
    "anneeImmat": 2022
  },
  {
    "plaque": "BF-343-XX",
    "vehiculeId": "V131",
    "anneeImmat": 2022
  },
  {
    "plaque": "CJ-937-TJ",
    "vehiculeId": "V131",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZZ-841-TC",
    "vehiculeId": "V131",
    "anneeImmat": 2022
  },
  {
    "plaque": "CZ-739-EZ",
    "vehiculeId": "V131",
    "anneeImmat": 2022
  },
  {
    "plaque": "DD-542-YW",
    "vehiculeId": "V132",
    "anneeImmat": 2022
  },
  {
    "plaque": "CV-869-VZ",
    "vehiculeId": "V132",
    "anneeImmat": 2022
  },
  {
    "plaque": "ST-120-AR",
    "vehiculeId": "V132",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZR-568-CM",
    "vehiculeId": "V132",
    "anneeImmat": 2022
  },
  {
    "plaque": "TT-428-VS",
    "vehiculeId": "V133",
    "anneeImmat": 2023
  },
  {
    "plaque": "WW-337-GD",
    "vehiculeId": "V133",
    "anneeImmat": 2023
  },
  {
    "plaque": "KS-531-GK",
    "vehiculeId": "V133",
    "anneeImmat": 2023
  },
  {
    "plaque": "NQ-618-CE",
    "vehiculeId": "V133",
    "anneeImmat": 2023
  },
  {
    "plaque": "GE-455-KL",
    "vehiculeId": "V133",
    "anneeImmat": 2024
  },
  {
    "plaque": "LC-488-EQ",
    "vehiculeId": "V133",
    "anneeImmat": 2024
  },
  {
    "plaque": "YZ-429-PB",
    "vehiculeId": "V133",
    "anneeImmat": 2024
  },
  {
    "plaque": "MA-241-GN",
    "vehiculeId": "V134",
    "anneeImmat": 2021
  },
  {
    "plaque": "SV-114-KL",
    "vehiculeId": "V134",
    "anneeImmat": 2021
  },
  {
    "plaque": "LG-287-NC",
    "vehiculeId": "V134",
    "anneeImmat": 2021
  },
  {
    "plaque": "RZ-787-JP",
    "vehiculeId": "V134",
    "anneeImmat": 2021
  },
  {
    "plaque": "AE-113-MR",
    "vehiculeId": "V134",
    "anneeImmat": 2022
  },
  {
    "plaque": "KL-835-HB",
    "vehiculeId": "V134",
    "anneeImmat": 2022
  },
  {
    "plaque": "TH-194-NL",
    "vehiculeId": "V134",
    "anneeImmat": 2022
  },
  {
    "plaque": "QM-312-XR",
    "vehiculeId": "V135",
    "anneeImmat": 2022
  },
  {
    "plaque": "LT-994-AG",
    "vehiculeId": "V135",
    "anneeImmat": 2022
  },
  {
    "plaque": "AX-216-WP",
    "vehiculeId": "V135",
    "anneeImmat": 2022
  },
  {
    "plaque": "XT-517-WA",
    "vehiculeId": "V135",
    "anneeImmat": 2022
  },
  {
    "plaque": "NW-974-VG",
    "vehiculeId": "V135",
    "anneeImmat": 2023
  },
  {
    "plaque": "KG-350-RA",
    "vehiculeId": "V136",
    "anneeImmat": 2023
  },
  {
    "plaque": "MG-701-RT",
    "vehiculeId": "V136",
    "anneeImmat": 2023
  },
  {
    "plaque": "TB-814-XF",
    "vehiculeId": "V136",
    "anneeImmat": 2023
  },
  {
    "plaque": "TJ-570-MZ",
    "vehiculeId": "V136",
    "anneeImmat": 2023
  },
  {
    "plaque": "DH-837-RV",
    "vehiculeId": "V136",
    "anneeImmat": 2024
  },
  {
    "plaque": "EG-528-KD",
    "vehiculeId": "V136",
    "anneeImmat": 2024
  },
  {
    "plaque": "ZP-831-XW",
    "vehiculeId": "V136",
    "anneeImmat": 2024
  },
  {
    "plaque": "WZ-410-GG",
    "vehiculeId": "V136",
    "anneeImmat": 2024
  },
  {
    "plaque": "QV-189-VZ",
    "vehiculeId": "V136",
    "anneeImmat": 2024
  },
  {
    "plaque": "FY-704-HD",
    "vehiculeId": "V137",
    "anneeImmat": 2016
  },
  {
    "plaque": "GC-622-FQ",
    "vehiculeId": "V137",
    "anneeImmat": 2016
  },
  {
    "plaque": "JP-172-XA",
    "vehiculeId": "V137",
    "anneeImmat": 2016
  },
  {
    "plaque": "RB-396-DK",
    "vehiculeId": "V137",
    "anneeImmat": 2016
  },
  {
    "plaque": "CR-744-DZ",
    "vehiculeId": "V138",
    "anneeImmat": 2017
  },
  {
    "plaque": "KN-708-QZ",
    "vehiculeId": "V138",
    "anneeImmat": 2017
  },
  {
    "plaque": "EH-941-MM",
    "vehiculeId": "V138",
    "anneeImmat": 2017
  },
  {
    "plaque": "KP-365-GS",
    "vehiculeId": "V138",
    "anneeImmat": 2017
  },
  {
    "plaque": "RV-888-WZ",
    "vehiculeId": "V138",
    "anneeImmat": 2018
  },
  {
    "plaque": "HW-657-ND",
    "vehiculeId": "V138",
    "anneeImmat": 2018
  },
  {
    "plaque": "NG-793-VQ",
    "vehiculeId": "V138",
    "anneeImmat": 2018
  },
  {
    "plaque": "XS-865-ML",
    "vehiculeId": "V139",
    "anneeImmat": 2018
  },
  {
    "plaque": "DA-572-TH",
    "vehiculeId": "V139",
    "anneeImmat": 2018
  },
  {
    "plaque": "JV-290-JC",
    "vehiculeId": "V139",
    "anneeImmat": 2018
  },
  {
    "plaque": "TB-883-SB",
    "vehiculeId": "V139",
    "anneeImmat": 2018
  },
  {
    "plaque": "SW-958-XD",
    "vehiculeId": "V140",
    "anneeImmat": 2019
  },
  {
    "plaque": "TS-845-NL",
    "vehiculeId": "V140",
    "anneeImmat": 2019
  },
  {
    "plaque": "QT-824-VJ",
    "vehiculeId": "V140",
    "anneeImmat": 2019
  },
  {
    "plaque": "CJ-698-FL",
    "vehiculeId": "V140",
    "anneeImmat": 2019
  },
  {
    "plaque": "LC-326-NT",
    "vehiculeId": "V140",
    "anneeImmat": 2020
  },
  {
    "plaque": "JK-951-TK",
    "vehiculeId": "V140",
    "anneeImmat": 2020
  },
  {
    "plaque": "DG-727-CG",
    "vehiculeId": "V140",
    "anneeImmat": 2020
  },
  {
    "plaque": "GJ-812-XA",
    "vehiculeId": "V141",
    "anneeImmat": 2018
  },
  {
    "plaque": "JN-377-ZT",
    "vehiculeId": "V141",
    "anneeImmat": 2018
  },
  {
    "plaque": "XN-432-PY",
    "vehiculeId": "V141",
    "anneeImmat": 2018
  },
  {
    "plaque": "RY-236-XX",
    "vehiculeId": "V141",
    "anneeImmat": 2018
  },
  {
    "plaque": "HA-813-MN",
    "vehiculeId": "V141",
    "anneeImmat": 2019
  },
  {
    "plaque": "XT-327-CW",
    "vehiculeId": "V141",
    "anneeImmat": 2019
  },
  {
    "plaque": "SW-451-VM",
    "vehiculeId": "V141",
    "anneeImmat": 2019
  },
  {
    "plaque": "XE-877-YZ",
    "vehiculeId": "V141",
    "anneeImmat": 2019
  },
  {
    "plaque": "LY-533-GM",
    "vehiculeId": "V141",
    "anneeImmat": 2019
  },
  {
    "plaque": "TA-766-HW",
    "vehiculeId": "V142",
    "anneeImmat": 2019
  },
  {
    "plaque": "CB-933-DY",
    "vehiculeId": "V142",
    "anneeImmat": 2019
  },
  {
    "plaque": "ML-371-WH",
    "vehiculeId": "V142",
    "anneeImmat": 2019
  },
  {
    "plaque": "TH-393-RL",
    "vehiculeId": "V142",
    "anneeImmat": 2019
  },
  {
    "plaque": "QV-179-PA",
    "vehiculeId": "V143",
    "anneeImmat": 2020
  },
  {
    "plaque": "KX-445-NM",
    "vehiculeId": "V143",
    "anneeImmat": 2020
  },
  {
    "plaque": "BQ-893-TW",
    "vehiculeId": "V143",
    "anneeImmat": 2020
  },
  {
    "plaque": "XA-185-TK",
    "vehiculeId": "V143",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZT-800-EA",
    "vehiculeId": "V143",
    "anneeImmat": 2021
  },
  {
    "plaque": "PY-978-BG",
    "vehiculeId": "V143",
    "anneeImmat": 2021
  },
  {
    "plaque": "XX-116-VY",
    "vehiculeId": "V143",
    "anneeImmat": 2021
  },
  {
    "plaque": "SK-223-KG",
    "vehiculeId": "V144",
    "anneeImmat": 2021
  },
  {
    "plaque": "YY-427-SL",
    "vehiculeId": "V144",
    "anneeImmat": 2021
  },
  {
    "plaque": "HC-600-EN",
    "vehiculeId": "V144",
    "anneeImmat": 2021
  },
  {
    "plaque": "SS-139-AS",
    "vehiculeId": "V144",
    "anneeImmat": 2021
  },
  {
    "plaque": "JX-649-XE",
    "vehiculeId": "V144",
    "anneeImmat": 2022
  },
  {
    "plaque": "MY-625-PN",
    "vehiculeId": "V145",
    "anneeImmat": 2019
  },
  {
    "plaque": "VT-798-DM",
    "vehiculeId": "V145",
    "anneeImmat": 2019
  },
  {
    "plaque": "XT-293-AJ",
    "vehiculeId": "V145",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZK-740-RP",
    "vehiculeId": "V145",
    "anneeImmat": 2019
  },
  {
    "plaque": "FW-219-AK",
    "vehiculeId": "V145",
    "anneeImmat": 2020
  },
  {
    "plaque": "HR-830-TN",
    "vehiculeId": "V146",
    "anneeImmat": 2020
  },
  {
    "plaque": "JZ-151-NW",
    "vehiculeId": "V146",
    "anneeImmat": 2020
  },
  {
    "plaque": "SF-840-JX",
    "vehiculeId": "V146",
    "anneeImmat": 2020
  },
  {
    "plaque": "MS-806-KD",
    "vehiculeId": "V146",
    "anneeImmat": 2020
  },
  {
    "plaque": "EA-644-SJ",
    "vehiculeId": "V146",
    "anneeImmat": 2021
  },
  {
    "plaque": "RJ-484-FX",
    "vehiculeId": "V147",
    "anneeImmat": 2021
  },
  {
    "plaque": "RQ-406-VZ",
    "vehiculeId": "V147",
    "anneeImmat": 2021
  },
  {
    "plaque": "TN-733-GG",
    "vehiculeId": "V147",
    "anneeImmat": 2021
  },
  {
    "plaque": "PL-634-NK",
    "vehiculeId": "V147",
    "anneeImmat": 2021
  },
  {
    "plaque": "HB-745-HK",
    "vehiculeId": "V147",
    "anneeImmat": 2022
  },
  {
    "plaque": "CB-574-ER",
    "vehiculeId": "V147",
    "anneeImmat": 2022
  },
  {
    "plaque": "KY-382-TX",
    "vehiculeId": "V147",
    "anneeImmat": 2022
  },
  {
    "plaque": "HD-470-GZ",
    "vehiculeId": "V148",
    "anneeImmat": 2020
  },
  {
    "plaque": "VG-365-NX",
    "vehiculeId": "V148",
    "anneeImmat": 2020
  },
  {
    "plaque": "CY-432-DF",
    "vehiculeId": "V148",
    "anneeImmat": 2020
  },
  {
    "plaque": "YN-251-SL",
    "vehiculeId": "V148",
    "anneeImmat": 2020
  },
  {
    "plaque": "NL-318-RS",
    "vehiculeId": "V148",
    "anneeImmat": 2021
  },
  {
    "plaque": "TW-156-CH",
    "vehiculeId": "V149",
    "anneeImmat": 2021
  },
  {
    "plaque": "LF-275-ZJ",
    "vehiculeId": "V149",
    "anneeImmat": 2021
  },
  {
    "plaque": "GY-807-HQ",
    "vehiculeId": "V149",
    "anneeImmat": 2021
  },
  {
    "plaque": "NX-991-HT",
    "vehiculeId": "V149",
    "anneeImmat": 2021
  },
  {
    "plaque": "EX-572-FK",
    "vehiculeId": "V149",
    "anneeImmat": 2022
  },
  {
    "plaque": "CY-266-KN",
    "vehiculeId": "V149",
    "anneeImmat": 2022
  },
  {
    "plaque": "PH-309-LL",
    "vehiculeId": "V149",
    "anneeImmat": 2022
  },
  {
    "plaque": "RY-219-JV",
    "vehiculeId": "V149",
    "anneeImmat": 2022
  },
  {
    "plaque": "JW-873-SG",
    "vehiculeId": "V149",
    "anneeImmat": 2022
  },
  {
    "plaque": "NB-676-KX",
    "vehiculeId": "V150",
    "anneeImmat": 2022
  },
  {
    "plaque": "NV-126-KG",
    "vehiculeId": "V150",
    "anneeImmat": 2022
  },
  {
    "plaque": "TX-507-YA",
    "vehiculeId": "V150",
    "anneeImmat": 2022
  },
  {
    "plaque": "EL-722-FG",
    "vehiculeId": "V150",
    "anneeImmat": 2022
  },
  {
    "plaque": "KT-695-YY",
    "vehiculeId": "V150",
    "anneeImmat": 2023
  },
  {
    "plaque": "WG-731-ML",
    "vehiculeId": "V150",
    "anneeImmat": 2023
  },
  {
    "plaque": "KS-274-LW",
    "vehiculeId": "V150",
    "anneeImmat": 2023
  },
  {
    "plaque": "NP-405-JQ",
    "vehiculeId": "V150",
    "anneeImmat": 2023
  },
  {
    "plaque": "NZ-213-SY",
    "vehiculeId": "V150",
    "anneeImmat": 2023
  },
  {
    "plaque": "BG-148-TJ",
    "vehiculeId": "V151",
    "anneeImmat": 2023
  },
  {
    "plaque": "DW-850-XA",
    "vehiculeId": "V151",
    "anneeImmat": 2023
  },
  {
    "plaque": "KW-814-LH",
    "vehiculeId": "V151",
    "anneeImmat": 2023
  },
  {
    "plaque": "XZ-971-FY",
    "vehiculeId": "V151",
    "anneeImmat": 2023
  },
  {
    "plaque": "YY-403-QA",
    "vehiculeId": "V151",
    "anneeImmat": 2024
  },
  {
    "plaque": "HB-711-RT",
    "vehiculeId": "V151",
    "anneeImmat": 2024
  },
  {
    "plaque": "GX-249-ZP",
    "vehiculeId": "V151",
    "anneeImmat": 2024
  },
  {
    "plaque": "QM-910-HV",
    "vehiculeId": "V152",
    "anneeImmat": 2021
  },
  {
    "plaque": "MF-285-EA",
    "vehiculeId": "V152",
    "anneeImmat": 2021
  },
  {
    "plaque": "EZ-451-TL",
    "vehiculeId": "V152",
    "anneeImmat": 2021
  },
  {
    "plaque": "JP-252-JD",
    "vehiculeId": "V152",
    "anneeImmat": 2021
  },
  {
    "plaque": "YJ-131-WV",
    "vehiculeId": "V152",
    "anneeImmat": 2022
  },
  {
    "plaque": "EQ-194-DS",
    "vehiculeId": "V152",
    "anneeImmat": 2022
  },
  {
    "plaque": "CA-841-NG",
    "vehiculeId": "V152",
    "anneeImmat": 2022
  },
  {
    "plaque": "GE-406-FN",
    "vehiculeId": "V153",
    "anneeImmat": 2022
  },
  {
    "plaque": "YA-975-LA",
    "vehiculeId": "V153",
    "anneeImmat": 2022
  },
  {
    "plaque": "QL-926-FY",
    "vehiculeId": "V153",
    "anneeImmat": 2022
  },
  {
    "plaque": "GD-478-HN",
    "vehiculeId": "V153",
    "anneeImmat": 2022
  },
  {
    "plaque": "MJ-429-PT",
    "vehiculeId": "V153",
    "anneeImmat": 2023
  },
  {
    "plaque": "KQ-285-NT",
    "vehiculeId": "V153",
    "anneeImmat": 2023
  },
  {
    "plaque": "YW-921-CW",
    "vehiculeId": "V153",
    "anneeImmat": 2023
  },
  {
    "plaque": "TA-315-YD",
    "vehiculeId": "V153",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZB-510-HA",
    "vehiculeId": "V153",
    "anneeImmat": 2023
  },
  {
    "plaque": "PK-227-QT",
    "vehiculeId": "V154",
    "anneeImmat": 2023
  },
  {
    "plaque": "XD-335-PT",
    "vehiculeId": "V154",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZP-364-JH",
    "vehiculeId": "V154",
    "anneeImmat": 2023
  },
  {
    "plaque": "RH-209-GJ",
    "vehiculeId": "V154",
    "anneeImmat": 2023
  },
  {
    "plaque": "TC-867-XZ",
    "vehiculeId": "V154",
    "anneeImmat": 2024
  },
  {
    "plaque": "PQ-227-VA",
    "vehiculeId": "V155",
    "anneeImmat": 2017
  },
  {
    "plaque": "LK-915-EQ",
    "vehiculeId": "V155",
    "anneeImmat": 2017
  },
  {
    "plaque": "JA-790-XS",
    "vehiculeId": "V155",
    "anneeImmat": 2017
  },
  {
    "plaque": "ZA-310-CS",
    "vehiculeId": "V155",
    "anneeImmat": 2017
  },
  {
    "plaque": "QB-146-TQ",
    "vehiculeId": "V155",
    "anneeImmat": 2018
  },
  {
    "plaque": "PR-908-VV",
    "vehiculeId": "V155",
    "anneeImmat": 2018
  },
  {
    "plaque": "HH-673-RN",
    "vehiculeId": "V155",
    "anneeImmat": 2018
  },
  {
    "plaque": "ZE-323-RT",
    "vehiculeId": "V156",
    "anneeImmat": 2018
  },
  {
    "plaque": "LR-861-VQ",
    "vehiculeId": "V156",
    "anneeImmat": 2018
  },
  {
    "plaque": "SN-234-AA",
    "vehiculeId": "V156",
    "anneeImmat": 2018
  },
  {
    "plaque": "KJ-714-KE",
    "vehiculeId": "V156",
    "anneeImmat": 2018
  },
  {
    "plaque": "AC-964-GK",
    "vehiculeId": "V156",
    "anneeImmat": 2019
  },
  {
    "plaque": "AQ-268-AS",
    "vehiculeId": "V157",
    "anneeImmat": 2019
  },
  {
    "plaque": "BD-200-BJ",
    "vehiculeId": "V157",
    "anneeImmat": 2019
  },
  {
    "plaque": "DC-755-TK",
    "vehiculeId": "V157",
    "anneeImmat": 2019
  },
  {
    "plaque": "PX-729-GW",
    "vehiculeId": "V157",
    "anneeImmat": 2019
  },
  {
    "plaque": "CH-550-JH",
    "vehiculeId": "V157",
    "anneeImmat": 2020
  },
  {
    "plaque": "AX-883-PY",
    "vehiculeId": "V157",
    "anneeImmat": 2020
  },
  {
    "plaque": "XG-622-AM",
    "vehiculeId": "V157",
    "anneeImmat": 2020
  },
  {
    "plaque": "SX-538-AF",
    "vehiculeId": "V158",
    "anneeImmat": 2020
  },
  {
    "plaque": "SF-337-WB",
    "vehiculeId": "V158",
    "anneeImmat": 2020
  },
  {
    "plaque": "PC-986-KX",
    "vehiculeId": "V158",
    "anneeImmat": 2020
  },
  {
    "plaque": "TL-591-KG",
    "vehiculeId": "V158",
    "anneeImmat": 2020
  },
  {
    "plaque": "JS-421-DC",
    "vehiculeId": "V158",
    "anneeImmat": 2021
  },
  {
    "plaque": "AN-974-XF",
    "vehiculeId": "V159",
    "anneeImmat": 2017
  },
  {
    "plaque": "NZ-730-AR",
    "vehiculeId": "V159",
    "anneeImmat": 2017
  },
  {
    "plaque": "XZ-695-YT",
    "vehiculeId": "V159",
    "anneeImmat": 2017
  },
  {
    "plaque": "LX-331-HH",
    "vehiculeId": "V159",
    "anneeImmat": 2017
  },
  {
    "plaque": "QT-724-BW",
    "vehiculeId": "V159",
    "anneeImmat": 2018
  },
  {
    "plaque": "EN-364-WS",
    "vehiculeId": "V160",
    "anneeImmat": 2018
  },
  {
    "plaque": "CZ-684-XE",
    "vehiculeId": "V160",
    "anneeImmat": 2018
  },
  {
    "plaque": "QY-864-QK",
    "vehiculeId": "V160",
    "anneeImmat": 2018
  },
  {
    "plaque": "HJ-693-JC",
    "vehiculeId": "V160",
    "anneeImmat": 2018
  },
  {
    "plaque": "SA-247-QY",
    "vehiculeId": "V160",
    "anneeImmat": 2019
  },
  {
    "plaque": "XD-105-NB",
    "vehiculeId": "V160",
    "anneeImmat": 2019
  },
  {
    "plaque": "LW-482-HV",
    "vehiculeId": "V160",
    "anneeImmat": 2019
  },
  {
    "plaque": "GZ-250-KY",
    "vehiculeId": "V161",
    "anneeImmat": 2019
  },
  {
    "plaque": "NQ-900-JM",
    "vehiculeId": "V161",
    "anneeImmat": 2019
  },
  {
    "plaque": "WS-733-KB",
    "vehiculeId": "V161",
    "anneeImmat": 2019
  },
  {
    "plaque": "JC-558-MS",
    "vehiculeId": "V161",
    "anneeImmat": 2019
  },
  {
    "plaque": "HF-915-HR",
    "vehiculeId": "V161",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZK-976-LB",
    "vehiculeId": "V161",
    "anneeImmat": 2020
  },
  {
    "plaque": "XV-879-MV",
    "vehiculeId": "V161",
    "anneeImmat": 2020
  },
  {
    "plaque": "DP-269-FL",
    "vehiculeId": "V162",
    "anneeImmat": 2020
  },
  {
    "plaque": "WD-902-NP",
    "vehiculeId": "V162",
    "anneeImmat": 2020
  },
  {
    "plaque": "FZ-467-EP",
    "vehiculeId": "V162",
    "anneeImmat": 2020
  },
  {
    "plaque": "MF-570-KV",
    "vehiculeId": "V162",
    "anneeImmat": 2020
  },
  {
    "plaque": "GH-425-VM",
    "vehiculeId": "V162",
    "anneeImmat": 2021
  },
  {
    "plaque": "GV-202-CB",
    "vehiculeId": "V162",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZM-600-HK",
    "vehiculeId": "V162",
    "anneeImmat": 2021
  },
  {
    "plaque": "SG-166-TM",
    "vehiculeId": "V162",
    "anneeImmat": 2021
  },
  {
    "plaque": "TM-779-AM",
    "vehiculeId": "V162",
    "anneeImmat": 2021
  },
  {
    "plaque": "WK-653-ZG",
    "vehiculeId": "V163",
    "anneeImmat": 2018
  },
  {
    "plaque": "JB-919-HQ",
    "vehiculeId": "V163",
    "anneeImmat": 2018
  },
  {
    "plaque": "VF-855-HQ",
    "vehiculeId": "V163",
    "anneeImmat": 2018
  },
  {
    "plaque": "KF-311-VK",
    "vehiculeId": "V163",
    "anneeImmat": 2018
  },
  {
    "plaque": "ZN-996-WV",
    "vehiculeId": "V164",
    "anneeImmat": 2019
  },
  {
    "plaque": "NS-322-TY",
    "vehiculeId": "V164",
    "anneeImmat": 2019
  },
  {
    "plaque": "KY-579-EB",
    "vehiculeId": "V164",
    "anneeImmat": 2019
  },
  {
    "plaque": "JM-348-WP",
    "vehiculeId": "V164",
    "anneeImmat": 2019
  },
  {
    "plaque": "WV-833-ND",
    "vehiculeId": "V165",
    "anneeImmat": 2020
  },
  {
    "plaque": "LH-907-FJ",
    "vehiculeId": "V165",
    "anneeImmat": 2020
  },
  {
    "plaque": "NW-111-JN",
    "vehiculeId": "V165",
    "anneeImmat": 2020
  },
  {
    "plaque": "PG-780-HM",
    "vehiculeId": "V165",
    "anneeImmat": 2020
  },
  {
    "plaque": "MN-706-TZ",
    "vehiculeId": "V165",
    "anneeImmat": 2021
  },
  {
    "plaque": "NC-712-KR",
    "vehiculeId": "V165",
    "anneeImmat": 2021
  },
  {
    "plaque": "JC-539-VQ",
    "vehiculeId": "V165",
    "anneeImmat": 2021
  },
  {
    "plaque": "AR-448-PW",
    "vehiculeId": "V165",
    "anneeImmat": 2021
  },
  {
    "plaque": "HW-562-XJ",
    "vehiculeId": "V165",
    "anneeImmat": 2021
  },
  {
    "plaque": "CZ-866-NH",
    "vehiculeId": "V166",
    "anneeImmat": 2020
  },
  {
    "plaque": "MM-158-LN",
    "vehiculeId": "V166",
    "anneeImmat": 2020
  },
  {
    "plaque": "YB-530-DW",
    "vehiculeId": "V166",
    "anneeImmat": 2020
  },
  {
    "plaque": "AC-816-RG",
    "vehiculeId": "V166",
    "anneeImmat": 2020
  },
  {
    "plaque": "XR-938-SE",
    "vehiculeId": "V166",
    "anneeImmat": 2021
  },
  {
    "plaque": "JR-964-ZF",
    "vehiculeId": "V166",
    "anneeImmat": 2021
  },
  {
    "plaque": "DE-490-JR",
    "vehiculeId": "V166",
    "anneeImmat": 2021
  },
  {
    "plaque": "CD-854-YX",
    "vehiculeId": "V167",
    "anneeImmat": 2021
  },
  {
    "plaque": "LD-180-QS",
    "vehiculeId": "V167",
    "anneeImmat": 2021
  },
  {
    "plaque": "HT-591-PV",
    "vehiculeId": "V167",
    "anneeImmat": 2021
  },
  {
    "plaque": "XC-866-WV",
    "vehiculeId": "V167",
    "anneeImmat": 2021
  },
  {
    "plaque": "WK-312-HD",
    "vehiculeId": "V167",
    "anneeImmat": 2022
  },
  {
    "plaque": "NH-147-PN",
    "vehiculeId": "V167",
    "anneeImmat": 2022
  },
  {
    "plaque": "NT-375-YA",
    "vehiculeId": "V167",
    "anneeImmat": 2022
  },
  {
    "plaque": "KK-242-KX",
    "vehiculeId": "V168",
    "anneeImmat": 2022
  },
  {
    "plaque": "JM-312-PJ",
    "vehiculeId": "V168",
    "anneeImmat": 2022
  },
  {
    "plaque": "MK-120-BV",
    "vehiculeId": "V168",
    "anneeImmat": 2022
  },
  {
    "plaque": "KE-406-FF",
    "vehiculeId": "V168",
    "anneeImmat": 2022
  },
  {
    "plaque": "GA-274-DC",
    "vehiculeId": "V168",
    "anneeImmat": 2023
  },
  {
    "plaque": "FG-411-NA",
    "vehiculeId": "V168",
    "anneeImmat": 2023
  },
  {
    "plaque": "PH-891-GK",
    "vehiculeId": "V168",
    "anneeImmat": 2023
  },
  {
    "plaque": "BS-935-SN",
    "vehiculeId": "V168",
    "anneeImmat": 2023
  },
  {
    "plaque": "JV-401-NF",
    "vehiculeId": "V168",
    "anneeImmat": 2023
  },
  {
    "plaque": "EW-153-BL",
    "vehiculeId": "V169",
    "anneeImmat": 2019
  },
  {
    "plaque": "TW-683-KM",
    "vehiculeId": "V169",
    "anneeImmat": 2019
  },
  {
    "plaque": "CH-498-AC",
    "vehiculeId": "V169",
    "anneeImmat": 2019
  },
  {
    "plaque": "LW-354-JC",
    "vehiculeId": "V169",
    "anneeImmat": 2019
  },
  {
    "plaque": "BW-851-QW",
    "vehiculeId": "V170",
    "anneeImmat": 2020
  },
  {
    "plaque": "GW-377-TE",
    "vehiculeId": "V170",
    "anneeImmat": 2020
  },
  {
    "plaque": "YX-598-ZW",
    "vehiculeId": "V170",
    "anneeImmat": 2020
  },
  {
    "plaque": "QS-532-CJ",
    "vehiculeId": "V170",
    "anneeImmat": 2020
  },
  {
    "plaque": "PV-785-RN",
    "vehiculeId": "V170",
    "anneeImmat": 2021
  },
  {
    "plaque": "WV-945-BJ",
    "vehiculeId": "V170",
    "anneeImmat": 2021
  },
  {
    "plaque": "HD-369-NS",
    "vehiculeId": "V170",
    "anneeImmat": 2021
  },
  {
    "plaque": "PN-659-YJ",
    "vehiculeId": "V170",
    "anneeImmat": 2021
  },
  {
    "plaque": "NA-630-TH",
    "vehiculeId": "V170",
    "anneeImmat": 2021
  },
  {
    "plaque": "LB-525-EM",
    "vehiculeId": "V171",
    "anneeImmat": 2021
  },
  {
    "plaque": "CB-614-DN",
    "vehiculeId": "V171",
    "anneeImmat": 2021
  },
  {
    "plaque": "NA-350-MA",
    "vehiculeId": "V171",
    "anneeImmat": 2021
  },
  {
    "plaque": "BL-375-ZS",
    "vehiculeId": "V171",
    "anneeImmat": 2021
  },
  {
    "plaque": "KM-202-DB",
    "vehiculeId": "V171",
    "anneeImmat": 2022
  },
  {
    "plaque": "FH-372-KE",
    "vehiculeId": "V172",
    "anneeImmat": 2022
  },
  {
    "plaque": "KX-673-BD",
    "vehiculeId": "V172",
    "anneeImmat": 2022
  },
  {
    "plaque": "PJ-588-PP",
    "vehiculeId": "V172",
    "anneeImmat": 2022
  },
  {
    "plaque": "BV-162-QP",
    "vehiculeId": "V172",
    "anneeImmat": 2022
  },
  {
    "plaque": "FF-260-AC",
    "vehiculeId": "V172",
    "anneeImmat": 2023
  },
  {
    "plaque": "VW-603-EL",
    "vehiculeId": "V173",
    "anneeImmat": 2020
  },
  {
    "plaque": "QJ-870-FK",
    "vehiculeId": "V173",
    "anneeImmat": 2020
  },
  {
    "plaque": "EK-414-QT",
    "vehiculeId": "V173",
    "anneeImmat": 2020
  },
  {
    "plaque": "BY-354-XW",
    "vehiculeId": "V173",
    "anneeImmat": 2020
  },
  {
    "plaque": "DP-741-HZ",
    "vehiculeId": "V173",
    "anneeImmat": 2021
  },
  {
    "plaque": "FN-319-CF",
    "vehiculeId": "V174",
    "anneeImmat": 2021
  },
  {
    "plaque": "KA-115-SC",
    "vehiculeId": "V174",
    "anneeImmat": 2021
  },
  {
    "plaque": "MN-922-XZ",
    "vehiculeId": "V174",
    "anneeImmat": 2021
  },
  {
    "plaque": "WV-958-JP",
    "vehiculeId": "V174",
    "anneeImmat": 2021
  },
  {
    "plaque": "FQ-570-RX",
    "vehiculeId": "V174",
    "anneeImmat": 2022
  },
  {
    "plaque": "MD-795-WZ",
    "vehiculeId": "V174",
    "anneeImmat": 2022
  },
  {
    "plaque": "EA-542-KJ",
    "vehiculeId": "V174",
    "anneeImmat": 2022
  },
  {
    "plaque": "RR-753-VQ",
    "vehiculeId": "V175",
    "anneeImmat": 2022
  },
  {
    "plaque": "MC-571-VB",
    "vehiculeId": "V175",
    "anneeImmat": 2022
  },
  {
    "plaque": "XK-579-QL",
    "vehiculeId": "V175",
    "anneeImmat": 2022
  },
  {
    "plaque": "EJ-596-SK",
    "vehiculeId": "V175",
    "anneeImmat": 2022
  },
  {
    "plaque": "BG-925-VV",
    "vehiculeId": "V176",
    "anneeImmat": 2023
  },
  {
    "plaque": "PM-589-GS",
    "vehiculeId": "V176",
    "anneeImmat": 2023
  },
  {
    "plaque": "SF-727-YJ",
    "vehiculeId": "V176",
    "anneeImmat": 2023
  },
  {
    "plaque": "NR-349-PW",
    "vehiculeId": "V176",
    "anneeImmat": 2023
  },
  {
    "plaque": "WV-483-WA",
    "vehiculeId": "V176",
    "anneeImmat": 2024
  },
  {
    "plaque": "WT-577-SH",
    "vehiculeId": "V176",
    "anneeImmat": 2024
  },
  {
    "plaque": "SX-310-PS",
    "vehiculeId": "V176",
    "anneeImmat": 2024
  },
  {
    "plaque": "GB-923-LV",
    "vehiculeId": "V177",
    "anneeImmat": 2021
  },
  {
    "plaque": "XY-397-PH",
    "vehiculeId": "V177",
    "anneeImmat": 2021
  },
  {
    "plaque": "VS-242-MH",
    "vehiculeId": "V177",
    "anneeImmat": 2021
  },
  {
    "plaque": "VD-225-QW",
    "vehiculeId": "V177",
    "anneeImmat": 2021
  },
  {
    "plaque": "DC-759-VC",
    "vehiculeId": "V178",
    "anneeImmat": 2022
  },
  {
    "plaque": "VQ-690-WA",
    "vehiculeId": "V178",
    "anneeImmat": 2022
  },
  {
    "plaque": "QH-748-EQ",
    "vehiculeId": "V178",
    "anneeImmat": 2022
  },
  {
    "plaque": "AM-609-LH",
    "vehiculeId": "V178",
    "anneeImmat": 2022
  },
  {
    "plaque": "SR-411-XZ",
    "vehiculeId": "V178",
    "anneeImmat": 2023
  },
  {
    "plaque": "FG-721-MT",
    "vehiculeId": "V179",
    "anneeImmat": 2023
  },
  {
    "plaque": "MT-922-HG",
    "vehiculeId": "V179",
    "anneeImmat": 2023
  },
  {
    "plaque": "TK-135-KW",
    "vehiculeId": "V179",
    "anneeImmat": 2023
  },
  {
    "plaque": "DZ-334-TY",
    "vehiculeId": "V179",
    "anneeImmat": 2023
  },
  {
    "plaque": "CN-622-NY",
    "vehiculeId": "V179",
    "anneeImmat": 2024
  },
  {
    "plaque": "EZ-530-BL",
    "vehiculeId": "V179",
    "anneeImmat": 2024
  },
  {
    "plaque": "GW-980-LN",
    "vehiculeId": "V179",
    "anneeImmat": 2024
  },
  {
    "plaque": "BK-969-NL",
    "vehiculeId": "V180",
    "anneeImmat": 2019
  },
  {
    "plaque": "MH-267-LK",
    "vehiculeId": "V180",
    "anneeImmat": 2019
  },
  {
    "plaque": "FK-661-XC",
    "vehiculeId": "V180",
    "anneeImmat": 2019
  },
  {
    "plaque": "DZ-325-AL",
    "vehiculeId": "V180",
    "anneeImmat": 2019
  },
  {
    "plaque": "BJ-893-HG",
    "vehiculeId": "V180",
    "anneeImmat": 2020
  },
  {
    "plaque": "JT-910-FG",
    "vehiculeId": "V181",
    "anneeImmat": 2020
  },
  {
    "plaque": "GD-119-QB",
    "vehiculeId": "V181",
    "anneeImmat": 2020
  },
  {
    "plaque": "GF-143-YD",
    "vehiculeId": "V181",
    "anneeImmat": 2020
  },
  {
    "plaque": "GD-490-MN",
    "vehiculeId": "V181",
    "anneeImmat": 2020
  },
  {
    "plaque": "PF-121-NG",
    "vehiculeId": "V181",
    "anneeImmat": 2021
  },
  {
    "plaque": "EM-681-KA",
    "vehiculeId": "V182",
    "anneeImmat": 2021
  },
  {
    "plaque": "SB-355-TV",
    "vehiculeId": "V182",
    "anneeImmat": 2021
  },
  {
    "plaque": "WQ-386-AR",
    "vehiculeId": "V182",
    "anneeImmat": 2021
  },
  {
    "plaque": "TF-833-DV",
    "vehiculeId": "V182",
    "anneeImmat": 2021
  },
  {
    "plaque": "LA-205-TT",
    "vehiculeId": "V183",
    "anneeImmat": 2022
  },
  {
    "plaque": "EV-865-MR",
    "vehiculeId": "V183",
    "anneeImmat": 2022
  },
  {
    "plaque": "CQ-527-PL",
    "vehiculeId": "V183",
    "anneeImmat": 2022
  },
  {
    "plaque": "EZ-902-ZW",
    "vehiculeId": "V183",
    "anneeImmat": 2022
  },
  {
    "plaque": "KJ-294-LC",
    "vehiculeId": "V183",
    "anneeImmat": 2023
  },
  {
    "plaque": "XS-770-DW",
    "vehiculeId": "V183",
    "anneeImmat": 2023
  },
  {
    "plaque": "SP-115-KF",
    "vehiculeId": "V183",
    "anneeImmat": 2023
  },
  {
    "plaque": "AN-387-HT",
    "vehiculeId": "V184",
    "anneeImmat": 2023
  },
  {
    "plaque": "SP-568-RG",
    "vehiculeId": "V184",
    "anneeImmat": 2023
  },
  {
    "plaque": "XW-122-KT",
    "vehiculeId": "V184",
    "anneeImmat": 2023
  },
  {
    "plaque": "NC-430-VW",
    "vehiculeId": "V184",
    "anneeImmat": 2023
  },
  {
    "plaque": "VQ-309-MZ",
    "vehiculeId": "V184",
    "anneeImmat": 2024
  },
  {
    "plaque": "LX-397-MN",
    "vehiculeId": "V184",
    "anneeImmat": 2024
  },
  {
    "plaque": "FV-882-DE",
    "vehiculeId": "V184",
    "anneeImmat": 2024
  },
  {
    "plaque": "FA-953-KL",
    "vehiculeId": "V184",
    "anneeImmat": 2024
  },
  {
    "plaque": "WQ-844-XV",
    "vehiculeId": "V184",
    "anneeImmat": 2024
  },
  {
    "plaque": "RN-404-LF",
    "vehiculeId": "V185",
    "anneeImmat": 2019
  },
  {
    "plaque": "PK-379-LM",
    "vehiculeId": "V185",
    "anneeImmat": 2019
  },
  {
    "plaque": "AB-968-LK",
    "vehiculeId": "V185",
    "anneeImmat": 2019
  },
  {
    "plaque": "LN-234-MC",
    "vehiculeId": "V185",
    "anneeImmat": 2019
  },
  {
    "plaque": "MT-521-ZP",
    "vehiculeId": "V186",
    "anneeImmat": 2020
  },
  {
    "plaque": "TE-180-TS",
    "vehiculeId": "V186",
    "anneeImmat": 2020
  },
  {
    "plaque": "JG-846-ZH",
    "vehiculeId": "V186",
    "anneeImmat": 2020
  },
  {
    "plaque": "HT-848-QY",
    "vehiculeId": "V186",
    "anneeImmat": 2020
  },
  {
    "plaque": "RG-896-AB",
    "vehiculeId": "V186",
    "anneeImmat": 2021
  },
  {
    "plaque": "RG-329-KZ",
    "vehiculeId": "V187",
    "anneeImmat": 2021
  },
  {
    "plaque": "DX-130-FS",
    "vehiculeId": "V187",
    "anneeImmat": 2021
  },
  {
    "plaque": "VA-100-BH",
    "vehiculeId": "V187",
    "anneeImmat": 2021
  },
  {
    "plaque": "EL-771-XW",
    "vehiculeId": "V187",
    "anneeImmat": 2021
  },
  {
    "plaque": "WW-877-ZX",
    "vehiculeId": "V187",
    "anneeImmat": 2022
  },
  {
    "plaque": "VE-627-FP",
    "vehiculeId": "V187",
    "anneeImmat": 2022
  },
  {
    "plaque": "EV-486-TL",
    "vehiculeId": "V187",
    "anneeImmat": 2022
  },
  {
    "plaque": "HQ-623-CK",
    "vehiculeId": "V188",
    "anneeImmat": 2022
  },
  {
    "plaque": "GL-355-MR",
    "vehiculeId": "V188",
    "anneeImmat": 2022
  },
  {
    "plaque": "FE-125-HK",
    "vehiculeId": "V188",
    "anneeImmat": 2022
  },
  {
    "plaque": "FF-127-MC",
    "vehiculeId": "V188",
    "anneeImmat": 2022
  },
  {
    "plaque": "PK-431-ZS",
    "vehiculeId": "V188",
    "anneeImmat": 2023
  },
  {
    "plaque": "AK-982-DG",
    "vehiculeId": "V188",
    "anneeImmat": 2023
  },
  {
    "plaque": "KE-812-BH",
    "vehiculeId": "V188",
    "anneeImmat": 2023
  },
  {
    "plaque": "RZ-719-PG",
    "vehiculeId": "V189",
    "anneeImmat": 2020
  },
  {
    "plaque": "MQ-655-TJ",
    "vehiculeId": "V189",
    "anneeImmat": 2020
  },
  {
    "plaque": "LD-811-LS",
    "vehiculeId": "V189",
    "anneeImmat": 2020
  },
  {
    "plaque": "KD-942-VQ",
    "vehiculeId": "V189",
    "anneeImmat": 2020
  },
  {
    "plaque": "HV-839-QH",
    "vehiculeId": "V189",
    "anneeImmat": 2021
  },
  {
    "plaque": "AR-344-TE",
    "vehiculeId": "V189",
    "anneeImmat": 2021
  },
  {
    "plaque": "XX-658-YE",
    "vehiculeId": "V189",
    "anneeImmat": 2021
  },
  {
    "plaque": "LL-435-HP",
    "vehiculeId": "V190",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZP-704-FQ",
    "vehiculeId": "V190",
    "anneeImmat": 2021
  },
  {
    "plaque": "TS-515-AX",
    "vehiculeId": "V190",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZH-993-LP",
    "vehiculeId": "V190",
    "anneeImmat": 2021
  },
  {
    "plaque": "TW-938-TS",
    "vehiculeId": "V190",
    "anneeImmat": 2022
  },
  {
    "plaque": "GR-825-JN",
    "vehiculeId": "V190",
    "anneeImmat": 2022
  },
  {
    "plaque": "JM-651-KA",
    "vehiculeId": "V190",
    "anneeImmat": 2022
  },
  {
    "plaque": "WR-517-LB",
    "vehiculeId": "V190",
    "anneeImmat": 2022
  },
  {
    "plaque": "XY-415-SQ",
    "vehiculeId": "V190",
    "anneeImmat": 2022
  },
  {
    "plaque": "KT-220-YQ",
    "vehiculeId": "V191",
    "anneeImmat": 2022
  },
  {
    "plaque": "VW-480-GT",
    "vehiculeId": "V191",
    "anneeImmat": 2022
  },
  {
    "plaque": "MZ-531-WH",
    "vehiculeId": "V191",
    "anneeImmat": 2022
  },
  {
    "plaque": "MN-913-SC",
    "vehiculeId": "V191",
    "anneeImmat": 2022
  },
  {
    "plaque": "XF-210-SX",
    "vehiculeId": "V191",
    "anneeImmat": 2023
  },
  {
    "plaque": "LJ-451-KK",
    "vehiculeId": "V192",
    "anneeImmat": 2023
  },
  {
    "plaque": "XF-373-GE",
    "vehiculeId": "V192",
    "anneeImmat": 2023
  },
  {
    "plaque": "QY-120-VH",
    "vehiculeId": "V192",
    "anneeImmat": 2023
  },
  {
    "plaque": "WB-464-MD",
    "vehiculeId": "V192",
    "anneeImmat": 2023
  },
  {
    "plaque": "HR-947-VD",
    "vehiculeId": "V192",
    "anneeImmat": 2024
  },
  {
    "plaque": "FS-826-CW",
    "vehiculeId": "V192",
    "anneeImmat": 2024
  },
  {
    "plaque": "CK-704-CB",
    "vehiculeId": "V192",
    "anneeImmat": 2024
  },
  {
    "plaque": "RA-183-XY",
    "vehiculeId": "V193",
    "anneeImmat": 2018
  },
  {
    "plaque": "PR-877-VZ",
    "vehiculeId": "V193",
    "anneeImmat": 2018
  },
  {
    "plaque": "AB-511-RY",
    "vehiculeId": "V193",
    "anneeImmat": 2018
  },
  {
    "plaque": "EK-221-WV",
    "vehiculeId": "V193",
    "anneeImmat": 2018
  },
  {
    "plaque": "LK-647-KZ",
    "vehiculeId": "V193",
    "anneeImmat": 2019
  },
  {
    "plaque": "HB-273-CE",
    "vehiculeId": "V193",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZZ-704-PS",
    "vehiculeId": "V193",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZD-180-AF",
    "vehiculeId": "V193",
    "anneeImmat": 2019
  },
  {
    "plaque": "JE-792-YM",
    "vehiculeId": "V193",
    "anneeImmat": 2019
  },
  {
    "plaque": "YA-887-EW",
    "vehiculeId": "V194",
    "anneeImmat": 2019
  },
  {
    "plaque": "YJ-833-RP",
    "vehiculeId": "V194",
    "anneeImmat": 2019
  },
  {
    "plaque": "PT-918-DJ",
    "vehiculeId": "V194",
    "anneeImmat": 2019
  },
  {
    "plaque": "MG-920-DD",
    "vehiculeId": "V194",
    "anneeImmat": 2019
  },
  {
    "plaque": "KA-480-WR",
    "vehiculeId": "V194",
    "anneeImmat": 2020
  },
  {
    "plaque": "AF-817-VY",
    "vehiculeId": "V195",
    "anneeImmat": 2020
  },
  {
    "plaque": "YQ-781-YD",
    "vehiculeId": "V195",
    "anneeImmat": 2020
  },
  {
    "plaque": "GT-774-LB",
    "vehiculeId": "V195",
    "anneeImmat": 2020
  },
  {
    "plaque": "WH-909-TS",
    "vehiculeId": "V195",
    "anneeImmat": 2020
  },
  {
    "plaque": "MS-431-NB",
    "vehiculeId": "V195",
    "anneeImmat": 2021
  },
  {
    "plaque": "KJ-259-HH",
    "vehiculeId": "V196",
    "anneeImmat": 2021
  },
  {
    "plaque": "AY-746-JW",
    "vehiculeId": "V196",
    "anneeImmat": 2021
  },
  {
    "plaque": "RV-450-MH",
    "vehiculeId": "V196",
    "anneeImmat": 2021
  },
  {
    "plaque": "HR-792-TW",
    "vehiculeId": "V196",
    "anneeImmat": 2021
  },
  {
    "plaque": "TE-272-HA",
    "vehiculeId": "V196",
    "anneeImmat": 2022
  },
  {
    "plaque": "AT-837-VR",
    "vehiculeId": "V197",
    "anneeImmat": 2018
  },
  {
    "plaque": "YH-428-EC",
    "vehiculeId": "V197",
    "anneeImmat": 2018
  },
  {
    "plaque": "YZ-152-WJ",
    "vehiculeId": "V197",
    "anneeImmat": 2018
  },
  {
    "plaque": "CG-341-JF",
    "vehiculeId": "V197",
    "anneeImmat": 2018
  },
  {
    "plaque": "YA-281-FY",
    "vehiculeId": "V197",
    "anneeImmat": 2019
  },
  {
    "plaque": "SA-269-DW",
    "vehiculeId": "V197",
    "anneeImmat": 2019
  },
  {
    "plaque": "CY-520-YE",
    "vehiculeId": "V197",
    "anneeImmat": 2019
  },
  {
    "plaque": "DW-629-BK",
    "vehiculeId": "V197",
    "anneeImmat": 2019
  },
  {
    "plaque": "CH-297-NK",
    "vehiculeId": "V197",
    "anneeImmat": 2019
  },
  {
    "plaque": "RF-601-ME",
    "vehiculeId": "V198",
    "anneeImmat": 2019
  },
  {
    "plaque": "FR-791-AC",
    "vehiculeId": "V198",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZW-407-XK",
    "vehiculeId": "V198",
    "anneeImmat": 2019
  },
  {
    "plaque": "LD-355-WE",
    "vehiculeId": "V198",
    "anneeImmat": 2019
  },
  {
    "plaque": "CS-895-AT",
    "vehiculeId": "V198",
    "anneeImmat": 2020
  },
  {
    "plaque": "HS-812-NJ",
    "vehiculeId": "V198",
    "anneeImmat": 2020
  },
  {
    "plaque": "MA-380-YG",
    "vehiculeId": "V198",
    "anneeImmat": 2020
  },
  {
    "plaque": "VR-339-SR",
    "vehiculeId": "V199",
    "anneeImmat": 2020
  },
  {
    "plaque": "NS-478-MK",
    "vehiculeId": "V199",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZF-854-PV",
    "vehiculeId": "V199",
    "anneeImmat": 2020
  },
  {
    "plaque": "GC-787-GR",
    "vehiculeId": "V199",
    "anneeImmat": 2020
  },
  {
    "plaque": "RE-269-DQ",
    "vehiculeId": "V199",
    "anneeImmat": 2021
  },
  {
    "plaque": "QN-271-NX",
    "vehiculeId": "V199",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZD-338-PZ",
    "vehiculeId": "V199",
    "anneeImmat": 2021
  },
  {
    "plaque": "YE-814-KM",
    "vehiculeId": "V200",
    "anneeImmat": 2021
  },
  {
    "plaque": "YV-851-SR",
    "vehiculeId": "V200",
    "anneeImmat": 2021
  },
  {
    "plaque": "SC-291-LC",
    "vehiculeId": "V200",
    "anneeImmat": 2021
  },
  {
    "plaque": "GN-699-AV",
    "vehiculeId": "V200",
    "anneeImmat": 2021
  },
  {
    "plaque": "KS-303-KH",
    "vehiculeId": "V201",
    "anneeImmat": 2020
  },
  {
    "plaque": "CF-797-CS",
    "vehiculeId": "V201",
    "anneeImmat": 2020
  },
  {
    "plaque": "MD-953-ZJ",
    "vehiculeId": "V201",
    "anneeImmat": 2020
  },
  {
    "plaque": "PW-868-EF",
    "vehiculeId": "V201",
    "anneeImmat": 2020
  },
  {
    "plaque": "MD-117-RL",
    "vehiculeId": "V202",
    "anneeImmat": 2021
  },
  {
    "plaque": "AM-837-PT",
    "vehiculeId": "V202",
    "anneeImmat": 2021
  },
  {
    "plaque": "VJ-807-NK",
    "vehiculeId": "V202",
    "anneeImmat": 2021
  },
  {
    "plaque": "JZ-229-TS",
    "vehiculeId": "V202",
    "anneeImmat": 2021
  },
  {
    "plaque": "GN-340-HM",
    "vehiculeId": "V202",
    "anneeImmat": 2022
  },
  {
    "plaque": "TK-393-WH",
    "vehiculeId": "V202",
    "anneeImmat": 2022
  },
  {
    "plaque": "PY-490-FX",
    "vehiculeId": "V202",
    "anneeImmat": 2022
  },
  {
    "plaque": "VZ-539-XG",
    "vehiculeId": "V203",
    "anneeImmat": 2022
  },
  {
    "plaque": "JL-916-PD",
    "vehiculeId": "V203",
    "anneeImmat": 2022
  },
  {
    "plaque": "WJ-913-HB",
    "vehiculeId": "V203",
    "anneeImmat": 2022
  },
  {
    "plaque": "KN-215-QJ",
    "vehiculeId": "V203",
    "anneeImmat": 2022
  },
  {
    "plaque": "RM-365-HC",
    "vehiculeId": "V203",
    "anneeImmat": 2023
  },
  {
    "plaque": "BM-553-KS",
    "vehiculeId": "V203",
    "anneeImmat": 2023
  },
  {
    "plaque": "AJ-488-AZ",
    "vehiculeId": "V203",
    "anneeImmat": 2023
  },
  {
    "plaque": "TP-235-LW",
    "vehiculeId": "V204",
    "anneeImmat": 2018
  },
  {
    "plaque": "TN-477-AQ",
    "vehiculeId": "V204",
    "anneeImmat": 2018
  },
  {
    "plaque": "KE-216-WA",
    "vehiculeId": "V204",
    "anneeImmat": 2018
  },
  {
    "plaque": "AC-144-HY",
    "vehiculeId": "V204",
    "anneeImmat": 2018
  },
  {
    "plaque": "XS-339-DD",
    "vehiculeId": "V204",
    "anneeImmat": 2019
  },
  {
    "plaque": "EB-835-PS",
    "vehiculeId": "V204",
    "anneeImmat": 2019
  },
  {
    "plaque": "HS-334-CS",
    "vehiculeId": "V204",
    "anneeImmat": 2019
  },
  {
    "plaque": "PD-936-EW",
    "vehiculeId": "V205",
    "anneeImmat": 2019
  },
  {
    "plaque": "GG-304-BR",
    "vehiculeId": "V205",
    "anneeImmat": 2019
  },
  {
    "plaque": "YC-929-PC",
    "vehiculeId": "V205",
    "anneeImmat": 2019
  },
  {
    "plaque": "NV-440-JD",
    "vehiculeId": "V205",
    "anneeImmat": 2019
  },
  {
    "plaque": "BV-554-XD",
    "vehiculeId": "V205",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZS-691-CA",
    "vehiculeId": "V206",
    "anneeImmat": 2020
  },
  {
    "plaque": "KL-336-ZR",
    "vehiculeId": "V206",
    "anneeImmat": 2020
  },
  {
    "plaque": "DP-907-WQ",
    "vehiculeId": "V206",
    "anneeImmat": 2020
  },
  {
    "plaque": "MR-710-YQ",
    "vehiculeId": "V206",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZV-211-VJ",
    "vehiculeId": "V206",
    "anneeImmat": 2021
  },
  {
    "plaque": "VJ-124-JW",
    "vehiculeId": "V206",
    "anneeImmat": 2021
  },
  {
    "plaque": "AW-657-LC",
    "vehiculeId": "V206",
    "anneeImmat": 2021
  },
  {
    "plaque": "NC-997-HG",
    "vehiculeId": "V207",
    "anneeImmat": 2021
  },
  {
    "plaque": "VY-655-DP",
    "vehiculeId": "V207",
    "anneeImmat": 2021
  },
  {
    "plaque": "CL-925-VC",
    "vehiculeId": "V207",
    "anneeImmat": 2021
  },
  {
    "plaque": "RN-708-CW",
    "vehiculeId": "V207",
    "anneeImmat": 2021
  },
  {
    "plaque": "XX-424-AL",
    "vehiculeId": "V207",
    "anneeImmat": 2022
  },
  {
    "plaque": "KF-666-HQ",
    "vehiculeId": "V207",
    "anneeImmat": 2022
  },
  {
    "plaque": "BJ-453-LZ",
    "vehiculeId": "V207",
    "anneeImmat": 2022
  },
  {
    "plaque": "DH-745-PJ",
    "vehiculeId": "V207",
    "anneeImmat": 2022
  },
  {
    "plaque": "VR-848-PG",
    "vehiculeId": "V207",
    "anneeImmat": 2022
  },
  {
    "plaque": "GM-290-SV",
    "vehiculeId": "V208",
    "anneeImmat": 2016
  },
  {
    "plaque": "VG-282-SL",
    "vehiculeId": "V208",
    "anneeImmat": 2016
  },
  {
    "plaque": "HF-525-EZ",
    "vehiculeId": "V208",
    "anneeImmat": 2016
  },
  {
    "plaque": "AB-650-GG",
    "vehiculeId": "V208",
    "anneeImmat": 2016
  },
  {
    "plaque": "JR-838-CT",
    "vehiculeId": "V208",
    "anneeImmat": 2017
  },
  {
    "plaque": "RV-405-NT",
    "vehiculeId": "V209",
    "anneeImmat": 2017
  },
  {
    "plaque": "DL-870-VX",
    "vehiculeId": "V209",
    "anneeImmat": 2017
  },
  {
    "plaque": "CK-399-BY",
    "vehiculeId": "V209",
    "anneeImmat": 2017
  },
  {
    "plaque": "PR-890-FC",
    "vehiculeId": "V209",
    "anneeImmat": 2017
  },
  {
    "plaque": "TP-120-SB",
    "vehiculeId": "V209",
    "anneeImmat": 2018
  },
  {
    "plaque": "XY-558-KD",
    "vehiculeId": "V210",
    "anneeImmat": 2018
  },
  {
    "plaque": "ZQ-349-JC",
    "vehiculeId": "V210",
    "anneeImmat": 2018
  },
  {
    "plaque": "PF-214-TQ",
    "vehiculeId": "V210",
    "anneeImmat": 2018
  },
  {
    "plaque": "JN-508-MP",
    "vehiculeId": "V210",
    "anneeImmat": 2018
  },
  {
    "plaque": "MK-309-JC",
    "vehiculeId": "V210",
    "anneeImmat": 2019
  },
  {
    "plaque": "QP-714-EK",
    "vehiculeId": "V210",
    "anneeImmat": 2019
  },
  {
    "plaque": "MQ-121-LQ",
    "vehiculeId": "V210",
    "anneeImmat": 2019
  },
  {
    "plaque": "CK-578-MM",
    "vehiculeId": "V210",
    "anneeImmat": 2019
  },
  {
    "plaque": "LT-975-CZ",
    "vehiculeId": "V210",
    "anneeImmat": 2019
  },
  {
    "plaque": "HM-108-QY",
    "vehiculeId": "V211",
    "anneeImmat": 2019
  },
  {
    "plaque": "WH-465-RA",
    "vehiculeId": "V211",
    "anneeImmat": 2019
  },
  {
    "plaque": "PA-419-GM",
    "vehiculeId": "V211",
    "anneeImmat": 2019
  },
  {
    "plaque": "PB-617-JA",
    "vehiculeId": "V211",
    "anneeImmat": 2019
  },
  {
    "plaque": "NA-440-FF",
    "vehiculeId": "V211",
    "anneeImmat": 2020
  },
  {
    "plaque": "QY-707-MB",
    "vehiculeId": "V211",
    "anneeImmat": 2020
  },
  {
    "plaque": "GD-883-XN",
    "vehiculeId": "V211",
    "anneeImmat": 2020
  },
  {
    "plaque": "HC-596-EG",
    "vehiculeId": "V212",
    "anneeImmat": 2018
  },
  {
    "plaque": "FX-994-CD",
    "vehiculeId": "V212",
    "anneeImmat": 2018
  },
  {
    "plaque": "BL-763-TP",
    "vehiculeId": "V212",
    "anneeImmat": 2018
  },
  {
    "plaque": "YX-175-VK",
    "vehiculeId": "V212",
    "anneeImmat": 2018
  },
  {
    "plaque": "HT-291-BG",
    "vehiculeId": "V212",
    "anneeImmat": 2019
  },
  {
    "plaque": "TS-183-DR",
    "vehiculeId": "V212",
    "anneeImmat": 2019
  },
  {
    "plaque": "EP-567-ZS",
    "vehiculeId": "V212",
    "anneeImmat": 2019
  },
  {
    "plaque": "KS-377-NH",
    "vehiculeId": "V213",
    "anneeImmat": 2019
  },
  {
    "plaque": "AZ-594-WB",
    "vehiculeId": "V213",
    "anneeImmat": 2019
  },
  {
    "plaque": "CS-243-MR",
    "vehiculeId": "V213",
    "anneeImmat": 2019
  },
  {
    "plaque": "KA-293-PF",
    "vehiculeId": "V213",
    "anneeImmat": 2019
  },
  {
    "plaque": "DR-893-EN",
    "vehiculeId": "V213",
    "anneeImmat": 2020
  },
  {
    "plaque": "SL-318-TE",
    "vehiculeId": "V213",
    "anneeImmat": 2020
  },
  {
    "plaque": "QN-429-JQ",
    "vehiculeId": "V213",
    "anneeImmat": 2020
  },
  {
    "plaque": "RY-501-FT",
    "vehiculeId": "V213",
    "anneeImmat": 2020
  },
  {
    "plaque": "BG-835-LS",
    "vehiculeId": "V213",
    "anneeImmat": 2020
  },
  {
    "plaque": "SP-199-FW",
    "vehiculeId": "V214",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZD-176-CX",
    "vehiculeId": "V214",
    "anneeImmat": 2020
  },
  {
    "plaque": "YX-625-BM",
    "vehiculeId": "V214",
    "anneeImmat": 2020
  },
  {
    "plaque": "KP-333-XV",
    "vehiculeId": "V214",
    "anneeImmat": 2020
  },
  {
    "plaque": "MP-885-GN",
    "vehiculeId": "V214",
    "anneeImmat": 2021
  },
  {
    "plaque": "EZ-189-CJ",
    "vehiculeId": "V215",
    "anneeImmat": 2021
  },
  {
    "plaque": "GG-706-MQ",
    "vehiculeId": "V215",
    "anneeImmat": 2021
  },
  {
    "plaque": "CT-792-WL",
    "vehiculeId": "V215",
    "anneeImmat": 2021
  },
  {
    "plaque": "TA-198-GN",
    "vehiculeId": "V215",
    "anneeImmat": 2021
  },
  {
    "plaque": "WG-265-ZX",
    "vehiculeId": "V216",
    "anneeImmat": 2022
  },
  {
    "plaque": "NA-680-RG",
    "vehiculeId": "V216",
    "anneeImmat": 2022
  },
  {
    "plaque": "LH-270-HH",
    "vehiculeId": "V216",
    "anneeImmat": 2022
  },
  {
    "plaque": "YR-326-BX",
    "vehiculeId": "V216",
    "anneeImmat": 2022
  },
  {
    "plaque": "PM-464-XA",
    "vehiculeId": "V216",
    "anneeImmat": 2023
  },
  {
    "plaque": "EV-285-TW",
    "vehiculeId": "V217",
    "anneeImmat": 2018
  },
  {
    "plaque": "QN-869-TL",
    "vehiculeId": "V217",
    "anneeImmat": 2018
  },
  {
    "plaque": "WE-745-LT",
    "vehiculeId": "V217",
    "anneeImmat": 2018
  },
  {
    "plaque": "NT-319-KT",
    "vehiculeId": "V217",
    "anneeImmat": 2018
  },
  {
    "plaque": "YT-684-JP",
    "vehiculeId": "V218",
    "anneeImmat": 2019
  },
  {
    "plaque": "DE-622-YE",
    "vehiculeId": "V218",
    "anneeImmat": 2019
  },
  {
    "plaque": "QF-665-ZP",
    "vehiculeId": "V218",
    "anneeImmat": 2019
  },
  {
    "plaque": "LN-873-EC",
    "vehiculeId": "V218",
    "anneeImmat": 2019
  },
  {
    "plaque": "GM-421-LQ",
    "vehiculeId": "V219",
    "anneeImmat": 2020
  },
  {
    "plaque": "TP-733-AS",
    "vehiculeId": "V219",
    "anneeImmat": 2020
  },
  {
    "plaque": "VK-728-ZL",
    "vehiculeId": "V219",
    "anneeImmat": 2020
  },
  {
    "plaque": "PF-306-SM",
    "vehiculeId": "V219",
    "anneeImmat": 2020
  },
  {
    "plaque": "EN-245-LW",
    "vehiculeId": "V219",
    "anneeImmat": 2021
  },
  {
    "plaque": "TG-353-QW",
    "vehiculeId": "V220",
    "anneeImmat": 2021
  },
  {
    "plaque": "QA-634-XB",
    "vehiculeId": "V220",
    "anneeImmat": 2021
  },
  {
    "plaque": "LY-711-KM",
    "vehiculeId": "V220",
    "anneeImmat": 2021
  },
  {
    "plaque": "SE-536-NM",
    "vehiculeId": "V220",
    "anneeImmat": 2021
  },
  {
    "plaque": "WY-731-GW",
    "vehiculeId": "V220",
    "anneeImmat": 2022
  },
  {
    "plaque": "XM-626-BQ",
    "vehiculeId": "V221",
    "anneeImmat": 2020
  },
  {
    "plaque": "FR-824-YH",
    "vehiculeId": "V221",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZG-242-AJ",
    "vehiculeId": "V221",
    "anneeImmat": 2020
  },
  {
    "plaque": "GH-241-VE",
    "vehiculeId": "V221",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZT-392-GN",
    "vehiculeId": "V221",
    "anneeImmat": 2021
  },
  {
    "plaque": "DB-214-QR",
    "vehiculeId": "V222",
    "anneeImmat": 2021
  },
  {
    "plaque": "WA-358-NR",
    "vehiculeId": "V222",
    "anneeImmat": 2021
  },
  {
    "plaque": "LF-302-QT",
    "vehiculeId": "V222",
    "anneeImmat": 2021
  },
  {
    "plaque": "GT-378-QT",
    "vehiculeId": "V222",
    "anneeImmat": 2021
  },
  {
    "plaque": "CX-477-EB",
    "vehiculeId": "V223",
    "anneeImmat": 2022
  },
  {
    "plaque": "SP-813-RS",
    "vehiculeId": "V223",
    "anneeImmat": 2022
  },
  {
    "plaque": "PB-860-TT",
    "vehiculeId": "V223",
    "anneeImmat": 2022
  },
  {
    "plaque": "HF-323-VV",
    "vehiculeId": "V223",
    "anneeImmat": 2022
  },
  {
    "plaque": "VG-265-TC",
    "vehiculeId": "V223",
    "anneeImmat": 2023
  },
  {
    "plaque": "RQ-851-QY",
    "vehiculeId": "V224",
    "anneeImmat": 2019
  },
  {
    "plaque": "DQ-882-JD",
    "vehiculeId": "V224",
    "anneeImmat": 2019
  },
  {
    "plaque": "AP-409-ZT",
    "vehiculeId": "V224",
    "anneeImmat": 2019
  },
  {
    "plaque": "DH-752-AT",
    "vehiculeId": "V224",
    "anneeImmat": 2019
  },
  {
    "plaque": "FF-535-ZA",
    "vehiculeId": "V224",
    "anneeImmat": 2020
  },
  {
    "plaque": "YJ-614-AN",
    "vehiculeId": "V224",
    "anneeImmat": 2020
  },
  {
    "plaque": "BE-971-ML",
    "vehiculeId": "V224",
    "anneeImmat": 2020
  },
  {
    "plaque": "AH-425-CH",
    "vehiculeId": "V224",
    "anneeImmat": 2020
  },
  {
    "plaque": "KE-552-SX",
    "vehiculeId": "V224",
    "anneeImmat": 2020
  },
  {
    "plaque": "GN-366-CL",
    "vehiculeId": "V225",
    "anneeImmat": 2020
  },
  {
    "plaque": "DP-341-GS",
    "vehiculeId": "V225",
    "anneeImmat": 2020
  },
  {
    "plaque": "YG-788-YJ",
    "vehiculeId": "V225",
    "anneeImmat": 2020
  },
  {
    "plaque": "CY-140-CG",
    "vehiculeId": "V225",
    "anneeImmat": 2020
  },
  {
    "plaque": "FZ-290-MJ",
    "vehiculeId": "V226",
    "anneeImmat": 2021
  },
  {
    "plaque": "PM-793-AQ",
    "vehiculeId": "V226",
    "anneeImmat": 2021
  },
  {
    "plaque": "XP-805-BR",
    "vehiculeId": "V226",
    "anneeImmat": 2021
  },
  {
    "plaque": "HM-703-PY",
    "vehiculeId": "V226",
    "anneeImmat": 2021
  },
  {
    "plaque": "WD-238-WC",
    "vehiculeId": "V226",
    "anneeImmat": 2022
  },
  {
    "plaque": "FS-411-RT",
    "vehiculeId": "V226",
    "anneeImmat": 2022
  },
  {
    "plaque": "SZ-584-GK",
    "vehiculeId": "V226",
    "anneeImmat": 2022
  },
  {
    "plaque": "TZ-108-RR",
    "vehiculeId": "V227",
    "anneeImmat": 2022
  },
  {
    "plaque": "GX-746-KL",
    "vehiculeId": "V227",
    "anneeImmat": 2022
  },
  {
    "plaque": "DZ-145-WC",
    "vehiculeId": "V227",
    "anneeImmat": 2022
  },
  {
    "plaque": "RR-441-EL",
    "vehiculeId": "V227",
    "anneeImmat": 2022
  },
  {
    "plaque": "MY-899-XE",
    "vehiculeId": "V227",
    "anneeImmat": 2023
  },
  {
    "plaque": "CN-790-GJ",
    "vehiculeId": "V227",
    "anneeImmat": 2023
  },
  {
    "plaque": "RD-723-XA",
    "vehiculeId": "V227",
    "anneeImmat": 2023
  },
  {
    "plaque": "SM-357-CD",
    "vehiculeId": "V228",
    "anneeImmat": 2023
  },
  {
    "plaque": "LW-918-CJ",
    "vehiculeId": "V228",
    "anneeImmat": 2023
  },
  {
    "plaque": "TH-443-HZ",
    "vehiculeId": "V228",
    "anneeImmat": 2023
  },
  {
    "plaque": "QQ-734-PR",
    "vehiculeId": "V228",
    "anneeImmat": 2023
  },
  {
    "plaque": "GH-665-TH",
    "vehiculeId": "V228",
    "anneeImmat": 2024
  },
  {
    "plaque": "CD-844-RN",
    "vehiculeId": "V228",
    "anneeImmat": 2024
  },
  {
    "plaque": "PG-800-ER",
    "vehiculeId": "V228",
    "anneeImmat": 2024
  },
  {
    "plaque": "YT-504-GQ",
    "vehiculeId": "V229",
    "anneeImmat": 2021
  },
  {
    "plaque": "AR-555-VW",
    "vehiculeId": "V229",
    "anneeImmat": 2021
  },
  {
    "plaque": "VN-833-HW",
    "vehiculeId": "V229",
    "anneeImmat": 2021
  },
  {
    "plaque": "JK-559-VC",
    "vehiculeId": "V229",
    "anneeImmat": 2021
  },
  {
    "plaque": "CT-151-BK",
    "vehiculeId": "V229",
    "anneeImmat": 2022
  },
  {
    "plaque": "KZ-257-BW",
    "vehiculeId": "V230",
    "anneeImmat": 2022
  },
  {
    "plaque": "AR-368-KY",
    "vehiculeId": "V230",
    "anneeImmat": 2022
  },
  {
    "plaque": "YA-129-NF",
    "vehiculeId": "V230",
    "anneeImmat": 2022
  },
  {
    "plaque": "JX-427-WS",
    "vehiculeId": "V230",
    "anneeImmat": 2022
  },
  {
    "plaque": "XW-803-TR",
    "vehiculeId": "V230",
    "anneeImmat": 2023
  },
  {
    "plaque": "RK-443-XA",
    "vehiculeId": "V230",
    "anneeImmat": 2023
  },
  {
    "plaque": "EF-343-ZX",
    "vehiculeId": "V230",
    "anneeImmat": 2023
  },
  {
    "plaque": "TQ-511-JX",
    "vehiculeId": "V231",
    "anneeImmat": 2023
  },
  {
    "plaque": "LJ-630-VK",
    "vehiculeId": "V231",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZT-595-MQ",
    "vehiculeId": "V231",
    "anneeImmat": 2023
  },
  {
    "plaque": "NH-586-ZH",
    "vehiculeId": "V231",
    "anneeImmat": 2023
  },
  {
    "plaque": "JL-390-PL",
    "vehiculeId": "V231",
    "anneeImmat": 2024
  },
  {
    "plaque": "LE-489-TX",
    "vehiculeId": "V232",
    "anneeImmat": 2020
  },
  {
    "plaque": "PD-572-KD",
    "vehiculeId": "V232",
    "anneeImmat": 2020
  },
  {
    "plaque": "GM-707-PJ",
    "vehiculeId": "V232",
    "anneeImmat": 2020
  },
  {
    "plaque": "BE-116-RH",
    "vehiculeId": "V232",
    "anneeImmat": 2020
  },
  {
    "plaque": "PP-144-MB",
    "vehiculeId": "V232",
    "anneeImmat": 2021
  },
  {
    "plaque": "HN-553-FQ",
    "vehiculeId": "V233",
    "anneeImmat": 2021
  },
  {
    "plaque": "XE-451-XH",
    "vehiculeId": "V233",
    "anneeImmat": 2021
  },
  {
    "plaque": "BW-886-LD",
    "vehiculeId": "V233",
    "anneeImmat": 2021
  },
  {
    "plaque": "EG-679-ZL",
    "vehiculeId": "V233",
    "anneeImmat": 2021
  },
  {
    "plaque": "CD-923-RW",
    "vehiculeId": "V234",
    "anneeImmat": 2022
  },
  {
    "plaque": "LS-974-ME",
    "vehiculeId": "V234",
    "anneeImmat": 2022
  },
  {
    "plaque": "YF-315-ZF",
    "vehiculeId": "V234",
    "anneeImmat": 2022
  },
  {
    "plaque": "AZ-248-SC",
    "vehiculeId": "V234",
    "anneeImmat": 2022
  },
  {
    "plaque": "QF-488-QX",
    "vehiculeId": "V234",
    "anneeImmat": 2023
  },
  {
    "plaque": "ML-607-HK",
    "vehiculeId": "V234",
    "anneeImmat": 2023
  },
  {
    "plaque": "JF-626-ML",
    "vehiculeId": "V234",
    "anneeImmat": 2023
  },
  {
    "plaque": "VB-448-KY",
    "vehiculeId": "V235",
    "anneeImmat": 2023
  },
  {
    "plaque": "MM-356-JT",
    "vehiculeId": "V235",
    "anneeImmat": 2023
  },
  {
    "plaque": "SN-544-XQ",
    "vehiculeId": "V235",
    "anneeImmat": 2023
  },
  {
    "plaque": "GS-988-QH",
    "vehiculeId": "V235",
    "anneeImmat": 2023
  },
  {
    "plaque": "AQ-247-AX",
    "vehiculeId": "V235",
    "anneeImmat": 2024
  },
  {
    "plaque": "XL-180-KW",
    "vehiculeId": "V235",
    "anneeImmat": 2024
  },
  {
    "plaque": "ZJ-519-WZ",
    "vehiculeId": "V235",
    "anneeImmat": 2024
  },
  {
    "plaque": "ZS-733-EF",
    "vehiculeId": "V236",
    "anneeImmat": 2019
  },
  {
    "plaque": "NX-627-KL",
    "vehiculeId": "V236",
    "anneeImmat": 2019
  },
  {
    "plaque": "HS-211-HW",
    "vehiculeId": "V236",
    "anneeImmat": 2019
  },
  {
    "plaque": "LC-789-EE",
    "vehiculeId": "V236",
    "anneeImmat": 2019
  },
  {
    "plaque": "JT-466-JL",
    "vehiculeId": "V236",
    "anneeImmat": 2020
  },
  {
    "plaque": "WW-206-SS",
    "vehiculeId": "V236",
    "anneeImmat": 2020
  },
  {
    "plaque": "BX-171-CG",
    "vehiculeId": "V236",
    "anneeImmat": 2020
  },
  {
    "plaque": "JA-604-QA",
    "vehiculeId": "V236",
    "anneeImmat": 2020
  },
  {
    "plaque": "FA-918-PT",
    "vehiculeId": "V236",
    "anneeImmat": 2020
  },
  {
    "plaque": "BE-860-YR",
    "vehiculeId": "V237",
    "anneeImmat": 2020
  },
  {
    "plaque": "GA-461-VR",
    "vehiculeId": "V237",
    "anneeImmat": 2020
  },
  {
    "plaque": "YT-253-EZ",
    "vehiculeId": "V237",
    "anneeImmat": 2020
  },
  {
    "plaque": "XJ-698-ZR",
    "vehiculeId": "V237",
    "anneeImmat": 2020
  },
  {
    "plaque": "FH-763-KE",
    "vehiculeId": "V237",
    "anneeImmat": 2021
  },
  {
    "plaque": "LK-897-RD",
    "vehiculeId": "V237",
    "anneeImmat": 2021
  },
  {
    "plaque": "SG-252-AW",
    "vehiculeId": "V237",
    "anneeImmat": 2021
  },
  {
    "plaque": "BW-293-FA",
    "vehiculeId": "V238",
    "anneeImmat": 2021
  },
  {
    "plaque": "FB-749-MQ",
    "vehiculeId": "V238",
    "anneeImmat": 2021
  },
  {
    "plaque": "CY-430-BD",
    "vehiculeId": "V238",
    "anneeImmat": 2021
  },
  {
    "plaque": "EX-192-ZB",
    "vehiculeId": "V238",
    "anneeImmat": 2021
  },
  {
    "plaque": "WJ-643-DQ",
    "vehiculeId": "V238",
    "anneeImmat": 2022
  },
  {
    "plaque": "HS-180-HT",
    "vehiculeId": "V238",
    "anneeImmat": 2022
  },
  {
    "plaque": "CY-854-TW",
    "vehiculeId": "V238",
    "anneeImmat": 2022
  },
  {
    "plaque": "AK-592-MV",
    "vehiculeId": "V239",
    "anneeImmat": 2022
  },
  {
    "plaque": "HN-661-GS",
    "vehiculeId": "V239",
    "anneeImmat": 2022
  },
  {
    "plaque": "CC-940-BC",
    "vehiculeId": "V239",
    "anneeImmat": 2022
  },
  {
    "plaque": "VY-647-PL",
    "vehiculeId": "V239",
    "anneeImmat": 2022
  },
  {
    "plaque": "WX-952-BD",
    "vehiculeId": "V239",
    "anneeImmat": 2023
  },
  {
    "plaque": "DF-684-HJ",
    "vehiculeId": "V239",
    "anneeImmat": 2023
  },
  {
    "plaque": "SJ-595-AQ",
    "vehiculeId": "V239",
    "anneeImmat": 2023
  },
  {
    "plaque": "KC-235-YS",
    "vehiculeId": "V239",
    "anneeImmat": 2023
  },
  {
    "plaque": "JG-614-FP",
    "vehiculeId": "V239",
    "anneeImmat": 2023
  },
  {
    "plaque": "GH-645-DC",
    "vehiculeId": "V240",
    "anneeImmat": 2018
  },
  {
    "plaque": "KN-469-LW",
    "vehiculeId": "V240",
    "anneeImmat": 2018
  },
  {
    "plaque": "JQ-103-XT",
    "vehiculeId": "V240",
    "anneeImmat": 2018
  },
  {
    "plaque": "GM-163-QL",
    "vehiculeId": "V240",
    "anneeImmat": 2018
  },
  {
    "plaque": "AH-450-ZG",
    "vehiculeId": "V240",
    "anneeImmat": 2019
  },
  {
    "plaque": "NM-336-GT",
    "vehiculeId": "V241",
    "anneeImmat": 2019
  },
  {
    "plaque": "BH-976-KR",
    "vehiculeId": "V241",
    "anneeImmat": 2019
  },
  {
    "plaque": "FX-128-MZ",
    "vehiculeId": "V241",
    "anneeImmat": 2019
  },
  {
    "plaque": "VY-832-GR",
    "vehiculeId": "V241",
    "anneeImmat": 2019
  },
  {
    "plaque": "KC-755-CP",
    "vehiculeId": "V241",
    "anneeImmat": 2020
  },
  {
    "plaque": "QQ-139-SD",
    "vehiculeId": "V241",
    "anneeImmat": 2020
  },
  {
    "plaque": "EP-975-QL",
    "vehiculeId": "V241",
    "anneeImmat": 2020
  },
  {
    "plaque": "HQ-943-QA",
    "vehiculeId": "V242",
    "anneeImmat": 2020
  },
  {
    "plaque": "YC-844-QE",
    "vehiculeId": "V242",
    "anneeImmat": 2020
  },
  {
    "plaque": "VJ-428-VP",
    "vehiculeId": "V242",
    "anneeImmat": 2020
  },
  {
    "plaque": "GV-149-ER",
    "vehiculeId": "V242",
    "anneeImmat": 2020
  },
  {
    "plaque": "SQ-992-QS",
    "vehiculeId": "V242",
    "anneeImmat": 2021
  },
  {
    "plaque": "MX-814-EF",
    "vehiculeId": "V242",
    "anneeImmat": 2021
  },
  {
    "plaque": "BJ-796-RG",
    "vehiculeId": "V242",
    "anneeImmat": 2021
  },
  {
    "plaque": "QH-630-BJ",
    "vehiculeId": "V243",
    "anneeImmat": 2021
  },
  {
    "plaque": "AD-281-CD",
    "vehiculeId": "V243",
    "anneeImmat": 2021
  },
  {
    "plaque": "DC-699-EN",
    "vehiculeId": "V243",
    "anneeImmat": 2021
  },
  {
    "plaque": "LW-590-MQ",
    "vehiculeId": "V243",
    "anneeImmat": 2021
  },
  {
    "plaque": "AX-948-LT",
    "vehiculeId": "V244",
    "anneeImmat": 2018
  },
  {
    "plaque": "KW-112-AV",
    "vehiculeId": "V244",
    "anneeImmat": 2018
  },
  {
    "plaque": "SS-742-SG",
    "vehiculeId": "V244",
    "anneeImmat": 2018
  },
  {
    "plaque": "RY-599-WV",
    "vehiculeId": "V244",
    "anneeImmat": 2018
  },
  {
    "plaque": "PD-432-MN",
    "vehiculeId": "V244",
    "anneeImmat": 2019
  },
  {
    "plaque": "XJ-245-DT",
    "vehiculeId": "V244",
    "anneeImmat": 2019
  },
  {
    "plaque": "AD-838-RY",
    "vehiculeId": "V244",
    "anneeImmat": 2019
  },
  {
    "plaque": "DA-286-HE",
    "vehiculeId": "V244",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZA-171-BY",
    "vehiculeId": "V244",
    "anneeImmat": 2019
  },
  {
    "plaque": "BD-956-JQ",
    "vehiculeId": "V245",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZB-666-KN",
    "vehiculeId": "V245",
    "anneeImmat": 2019
  },
  {
    "plaque": "DQ-252-NX",
    "vehiculeId": "V245",
    "anneeImmat": 2019
  },
  {
    "plaque": "HT-407-LC",
    "vehiculeId": "V245",
    "anneeImmat": 2019
  },
  {
    "plaque": "HJ-368-XE",
    "vehiculeId": "V245",
    "anneeImmat": 2020
  },
  {
    "plaque": "CP-491-HW",
    "vehiculeId": "V245",
    "anneeImmat": 2020
  },
  {
    "plaque": "SD-456-KF",
    "vehiculeId": "V245",
    "anneeImmat": 2020
  },
  {
    "plaque": "BC-484-JA",
    "vehiculeId": "V246",
    "anneeImmat": 2020
  },
  {
    "plaque": "PL-851-EY",
    "vehiculeId": "V246",
    "anneeImmat": 2020
  },
  {
    "plaque": "BD-768-LR",
    "vehiculeId": "V246",
    "anneeImmat": 2020
  },
  {
    "plaque": "GR-349-NN",
    "vehiculeId": "V246",
    "anneeImmat": 2020
  },
  {
    "plaque": "ER-149-CZ",
    "vehiculeId": "V246",
    "anneeImmat": 2021
  },
  {
    "plaque": "QS-160-AW",
    "vehiculeId": "V246",
    "anneeImmat": 2021
  },
  {
    "plaque": "QL-205-ED",
    "vehiculeId": "V246",
    "anneeImmat": 2021
  },
  {
    "plaque": "KR-543-DC",
    "vehiculeId": "V247",
    "anneeImmat": 2021
  },
  {
    "plaque": "MZ-813-VM",
    "vehiculeId": "V247",
    "anneeImmat": 2021
  },
  {
    "plaque": "VP-576-ST",
    "vehiculeId": "V247",
    "anneeImmat": 2021
  },
  {
    "plaque": "EN-377-TX",
    "vehiculeId": "V247",
    "anneeImmat": 2021
  },
  {
    "plaque": "MQ-652-WQ",
    "vehiculeId": "V247",
    "anneeImmat": 2022
  },
  {
    "plaque": "GP-194-FN",
    "vehiculeId": "V248",
    "anneeImmat": 2022
  },
  {
    "plaque": "XV-609-VD",
    "vehiculeId": "V248",
    "anneeImmat": 2022
  },
  {
    "plaque": "DH-654-PB",
    "vehiculeId": "V248",
    "anneeImmat": 2022
  },
  {
    "plaque": "JQ-439-WK",
    "vehiculeId": "V248",
    "anneeImmat": 2022
  },
  {
    "plaque": "SN-408-EC",
    "vehiculeId": "V248",
    "anneeImmat": 2023
  },
  {
    "plaque": "GY-567-WL",
    "vehiculeId": "V248",
    "anneeImmat": 2023
  },
  {
    "plaque": "BN-461-RK",
    "vehiculeId": "V248",
    "anneeImmat": 2023
  },
  {
    "plaque": "TH-238-BA",
    "vehiculeId": "V248",
    "anneeImmat": 2023
  },
  {
    "plaque": "MP-789-GW",
    "vehiculeId": "V248",
    "anneeImmat": 2023
  },
  {
    "plaque": "CD-596-LS",
    "vehiculeId": "V249",
    "anneeImmat": 2023
  },
  {
    "plaque": "DG-663-SG",
    "vehiculeId": "V249",
    "anneeImmat": 2023
  },
  {
    "plaque": "RS-726-BH",
    "vehiculeId": "V249",
    "anneeImmat": 2023
  },
  {
    "plaque": "EF-217-TX",
    "vehiculeId": "V249",
    "anneeImmat": 2023
  },
  {
    "plaque": "BY-196-NS",
    "vehiculeId": "V249",
    "anneeImmat": 2024
  },
  {
    "plaque": "BQ-968-JR",
    "vehiculeId": "V250",
    "anneeImmat": 2019
  },
  {
    "plaque": "HJ-562-WK",
    "vehiculeId": "V250",
    "anneeImmat": 2019
  },
  {
    "plaque": "DQ-277-TV",
    "vehiculeId": "V250",
    "anneeImmat": 2019
  },
  {
    "plaque": "PB-753-EA",
    "vehiculeId": "V250",
    "anneeImmat": 2019
  },
  {
    "plaque": "RY-289-JZ",
    "vehiculeId": "V250",
    "anneeImmat": 2020
  },
  {
    "plaque": "KX-394-SH",
    "vehiculeId": "V250",
    "anneeImmat": 2020
  },
  {
    "plaque": "DF-376-AG",
    "vehiculeId": "V250",
    "anneeImmat": 2020
  },
  {
    "plaque": "KN-963-PV",
    "vehiculeId": "V251",
    "anneeImmat": 2020
  },
  {
    "plaque": "NX-170-VN",
    "vehiculeId": "V251",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZB-433-VD",
    "vehiculeId": "V251",
    "anneeImmat": 2020
  },
  {
    "plaque": "NC-411-TL",
    "vehiculeId": "V251",
    "anneeImmat": 2020
  },
  {
    "plaque": "TH-351-LL",
    "vehiculeId": "V251",
    "anneeImmat": 2021
  },
  {
    "plaque": "VS-180-CC",
    "vehiculeId": "V251",
    "anneeImmat": 2021
  },
  {
    "plaque": "MP-473-QJ",
    "vehiculeId": "V251",
    "anneeImmat": 2021
  },
  {
    "plaque": "EY-809-QJ",
    "vehiculeId": "V252",
    "anneeImmat": 2021
  },
  {
    "plaque": "LC-741-KX",
    "vehiculeId": "V252",
    "anneeImmat": 2021
  },
  {
    "plaque": "XE-354-GH",
    "vehiculeId": "V252",
    "anneeImmat": 2021
  },
  {
    "plaque": "HW-103-DS",
    "vehiculeId": "V252",
    "anneeImmat": 2021
  },
  {
    "plaque": "KF-735-WH",
    "vehiculeId": "V252",
    "anneeImmat": 2022
  },
  {
    "plaque": "PR-231-YY",
    "vehiculeId": "V252",
    "anneeImmat": 2022
  },
  {
    "plaque": "BP-445-HP",
    "vehiculeId": "V252",
    "anneeImmat": 2022
  },
  {
    "plaque": "CW-163-KM",
    "vehiculeId": "V252",
    "anneeImmat": 2022
  },
  {
    "plaque": "LW-977-KE",
    "vehiculeId": "V252",
    "anneeImmat": 2022
  },
  {
    "plaque": "HB-474-XP",
    "vehiculeId": "V253",
    "anneeImmat": 2022
  },
  {
    "plaque": "RT-769-RK",
    "vehiculeId": "V253",
    "anneeImmat": 2022
  },
  {
    "plaque": "FJ-495-WE",
    "vehiculeId": "V253",
    "anneeImmat": 2022
  },
  {
    "plaque": "VM-712-WE",
    "vehiculeId": "V253",
    "anneeImmat": 2022
  },
  {
    "plaque": "VD-896-KW",
    "vehiculeId": "V254",
    "anneeImmat": 2023
  },
  {
    "plaque": "PB-141-NG",
    "vehiculeId": "V254",
    "anneeImmat": 2023
  },
  {
    "plaque": "WK-377-AA",
    "vehiculeId": "V254",
    "anneeImmat": 2023
  },
  {
    "plaque": "EC-375-YL",
    "vehiculeId": "V254",
    "anneeImmat": 2023
  },
  {
    "plaque": "EA-935-ND",
    "vehiculeId": "V254",
    "anneeImmat": 2024
  },
  {
    "plaque": "JZ-201-FL",
    "vehiculeId": "V254",
    "anneeImmat": 2024
  },
  {
    "plaque": "SH-325-QY",
    "vehiculeId": "V254",
    "anneeImmat": 2024
  },
  {
    "plaque": "JR-215-XW",
    "vehiculeId": "V255",
    "anneeImmat": 2020
  },
  {
    "plaque": "WK-491-CX",
    "vehiculeId": "V255",
    "anneeImmat": 2020
  },
  {
    "plaque": "TV-680-DN",
    "vehiculeId": "V255",
    "anneeImmat": 2020
  },
  {
    "plaque": "VD-581-CG",
    "vehiculeId": "V255",
    "anneeImmat": 2020
  },
  {
    "plaque": "TL-349-HH",
    "vehiculeId": "V255",
    "anneeImmat": 2021
  },
  {
    "plaque": "VM-281-KL",
    "vehiculeId": "V256",
    "anneeImmat": 2021
  },
  {
    "plaque": "VW-640-JR",
    "vehiculeId": "V256",
    "anneeImmat": 2021
  },
  {
    "plaque": "DF-894-HE",
    "vehiculeId": "V256",
    "anneeImmat": 2021
  },
  {
    "plaque": "NX-775-PQ",
    "vehiculeId": "V256",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZR-131-QC",
    "vehiculeId": "V256",
    "anneeImmat": 2022
  },
  {
    "plaque": "SP-799-XE",
    "vehiculeId": "V256",
    "anneeImmat": 2022
  },
  {
    "plaque": "AS-150-GM",
    "vehiculeId": "V256",
    "anneeImmat": 2022
  },
  {
    "plaque": "PC-968-HV",
    "vehiculeId": "V256",
    "anneeImmat": 2022
  },
  {
    "plaque": "XL-521-KK",
    "vehiculeId": "V256",
    "anneeImmat": 2022
  },
  {
    "plaque": "VN-475-KQ",
    "vehiculeId": "V257",
    "anneeImmat": 2022
  },
  {
    "plaque": "KX-478-RS",
    "vehiculeId": "V257",
    "anneeImmat": 2022
  },
  {
    "plaque": "GH-206-WV",
    "vehiculeId": "V257",
    "anneeImmat": 2022
  },
  {
    "plaque": "LL-174-BZ",
    "vehiculeId": "V257",
    "anneeImmat": 2022
  },
  {
    "plaque": "AG-976-MZ",
    "vehiculeId": "V257",
    "anneeImmat": 2023
  },
  {
    "plaque": "YY-737-LJ",
    "vehiculeId": "V257",
    "anneeImmat": 2023
  },
  {
    "plaque": "FW-953-KR",
    "vehiculeId": "V257",
    "anneeImmat": 2023
  },
  {
    "plaque": "MR-977-KS",
    "vehiculeId": "V257",
    "anneeImmat": 2023
  },
  {
    "plaque": "HK-550-LY",
    "vehiculeId": "V257",
    "anneeImmat": 2023
  },
  {
    "plaque": "XP-128-JR",
    "vehiculeId": "V258",
    "anneeImmat": 2019
  },
  {
    "plaque": "PZ-629-TP",
    "vehiculeId": "V258",
    "anneeImmat": 2019
  },
  {
    "plaque": "NB-947-EC",
    "vehiculeId": "V258",
    "anneeImmat": 2019
  },
  {
    "plaque": "GW-456-EN",
    "vehiculeId": "V258",
    "anneeImmat": 2019
  },
  {
    "plaque": "WX-458-SF",
    "vehiculeId": "V258",
    "anneeImmat": 2020
  },
  {
    "plaque": "DB-293-WE",
    "vehiculeId": "V258",
    "anneeImmat": 2020
  },
  {
    "plaque": "LQ-601-GZ",
    "vehiculeId": "V258",
    "anneeImmat": 2020
  },
  {
    "plaque": "TL-259-JY",
    "vehiculeId": "V259",
    "anneeImmat": 2020
  },
  {
    "plaque": "RK-804-CT",
    "vehiculeId": "V259",
    "anneeImmat": 2020
  },
  {
    "plaque": "LB-864-TQ",
    "vehiculeId": "V259",
    "anneeImmat": 2020
  },
  {
    "plaque": "RZ-114-LN",
    "vehiculeId": "V259",
    "anneeImmat": 2020
  },
  {
    "plaque": "XW-517-VS",
    "vehiculeId": "V260",
    "anneeImmat": 2021
  },
  {
    "plaque": "CX-411-FF",
    "vehiculeId": "V260",
    "anneeImmat": 2021
  },
  {
    "plaque": "DN-569-DA",
    "vehiculeId": "V260",
    "anneeImmat": 2021
  },
  {
    "plaque": "CG-436-VV",
    "vehiculeId": "V260",
    "anneeImmat": 2021
  },
  {
    "plaque": "MF-177-WN",
    "vehiculeId": "V261",
    "anneeImmat": 2022
  },
  {
    "plaque": "SW-896-LW",
    "vehiculeId": "V261",
    "anneeImmat": 2022
  },
  {
    "plaque": "XF-127-GK",
    "vehiculeId": "V261",
    "anneeImmat": 2022
  },
  {
    "plaque": "LP-660-QQ",
    "vehiculeId": "V261",
    "anneeImmat": 2022
  },
  {
    "plaque": "AT-965-YG",
    "vehiculeId": "V261",
    "anneeImmat": 2023
  },
  {
    "plaque": "GQ-838-RY",
    "vehiculeId": "V261",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZE-821-ZL",
    "vehiculeId": "V261",
    "anneeImmat": 2023
  },
  {
    "plaque": "PM-642-MY",
    "vehiculeId": "V261",
    "anneeImmat": 2023
  },
  {
    "plaque": "AX-444-BG",
    "vehiculeId": "V261",
    "anneeImmat": 2023
  },
  {
    "plaque": "YZ-637-RF",
    "vehiculeId": "V262",
    "anneeImmat": 2019
  },
  {
    "plaque": "BE-641-JP",
    "vehiculeId": "V262",
    "anneeImmat": 2019
  },
  {
    "plaque": "BP-470-XZ",
    "vehiculeId": "V262",
    "anneeImmat": 2019
  },
  {
    "plaque": "QF-422-EA",
    "vehiculeId": "V262",
    "anneeImmat": 2019
  },
  {
    "plaque": "XA-417-BS",
    "vehiculeId": "V262",
    "anneeImmat": 2020
  },
  {
    "plaque": "KT-297-ZJ",
    "vehiculeId": "V263",
    "anneeImmat": 2020
  },
  {
    "plaque": "PZ-189-JD",
    "vehiculeId": "V263",
    "anneeImmat": 2020
  },
  {
    "plaque": "VC-595-NA",
    "vehiculeId": "V263",
    "anneeImmat": 2020
  },
  {
    "plaque": "WY-558-GY",
    "vehiculeId": "V263",
    "anneeImmat": 2020
  },
  {
    "plaque": "DL-932-QY",
    "vehiculeId": "V264",
    "anneeImmat": 2021
  },
  {
    "plaque": "AA-228-HF",
    "vehiculeId": "V264",
    "anneeImmat": 2021
  },
  {
    "plaque": "QW-288-MB",
    "vehiculeId": "V264",
    "anneeImmat": 2021
  },
  {
    "plaque": "YA-932-ED",
    "vehiculeId": "V264",
    "anneeImmat": 2021
  },
  {
    "plaque": "EE-602-TL",
    "vehiculeId": "V264",
    "anneeImmat": 2022
  },
  {
    "plaque": "RJ-880-TK",
    "vehiculeId": "V264",
    "anneeImmat": 2022
  },
  {
    "plaque": "SP-580-FX",
    "vehiculeId": "V264",
    "anneeImmat": 2022
  },
  {
    "plaque": "AH-963-BS",
    "vehiculeId": "V265",
    "anneeImmat": 2022
  },
  {
    "plaque": "LQ-479-NX",
    "vehiculeId": "V265",
    "anneeImmat": 2022
  },
  {
    "plaque": "TF-463-NX",
    "vehiculeId": "V265",
    "anneeImmat": 2022
  },
  {
    "plaque": "ES-926-HZ",
    "vehiculeId": "V265",
    "anneeImmat": 2022
  },
  {
    "plaque": "MH-217-BD",
    "vehiculeId": "V265",
    "anneeImmat": 2023
  },
  {
    "plaque": "SQ-127-DP",
    "vehiculeId": "V265",
    "anneeImmat": 2023
  },
  {
    "plaque": "JX-883-KD",
    "vehiculeId": "V265",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZR-747-HR",
    "vehiculeId": "V265",
    "anneeImmat": 2023
  },
  {
    "plaque": "GT-672-EQ",
    "vehiculeId": "V265",
    "anneeImmat": 2023
  },
  {
    "plaque": "MZ-119-DN",
    "vehiculeId": "V266",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZF-641-DR",
    "vehiculeId": "V266",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZJ-109-XV",
    "vehiculeId": "V266",
    "anneeImmat": 2020
  },
  {
    "plaque": "JD-962-RN",
    "vehiculeId": "V266",
    "anneeImmat": 2020
  },
  {
    "plaque": "MH-121-YB",
    "vehiculeId": "V267",
    "anneeImmat": 2021
  },
  {
    "plaque": "TH-448-PR",
    "vehiculeId": "V267",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZN-784-DL",
    "vehiculeId": "V267",
    "anneeImmat": 2021
  },
  {
    "plaque": "BS-532-TC",
    "vehiculeId": "V267",
    "anneeImmat": 2021
  },
  {
    "plaque": "BK-434-DM",
    "vehiculeId": "V268",
    "anneeImmat": 2022
  },
  {
    "plaque": "RJ-745-AQ",
    "vehiculeId": "V268",
    "anneeImmat": 2022
  },
  {
    "plaque": "QS-754-HE",
    "vehiculeId": "V268",
    "anneeImmat": 2022
  },
  {
    "plaque": "DE-736-BW",
    "vehiculeId": "V268",
    "anneeImmat": 2022
  },
  {
    "plaque": "SL-159-LS",
    "vehiculeId": "V268",
    "anneeImmat": 2023
  },
  {
    "plaque": "AZ-271-TR",
    "vehiculeId": "V268",
    "anneeImmat": 2023
  },
  {
    "plaque": "PT-354-NF",
    "vehiculeId": "V268",
    "anneeImmat": 2023
  },
  {
    "plaque": "QF-477-EX",
    "vehiculeId": "V269",
    "anneeImmat": 2016
  },
  {
    "plaque": "FH-572-YG",
    "vehiculeId": "V269",
    "anneeImmat": 2016
  },
  {
    "plaque": "DT-991-JH",
    "vehiculeId": "V269",
    "anneeImmat": 2016
  },
  {
    "plaque": "ZN-644-CY",
    "vehiculeId": "V269",
    "anneeImmat": 2016
  },
  {
    "plaque": "YB-338-KF",
    "vehiculeId": "V269",
    "anneeImmat": 2017
  },
  {
    "plaque": "BS-171-YM",
    "vehiculeId": "V269",
    "anneeImmat": 2017
  },
  {
    "plaque": "ZT-837-PK",
    "vehiculeId": "V269",
    "anneeImmat": 2017
  },
  {
    "plaque": "LG-800-MX",
    "vehiculeId": "V269",
    "anneeImmat": 2017
  },
  {
    "plaque": "ZP-966-XT",
    "vehiculeId": "V269",
    "anneeImmat": 2017
  },
  {
    "plaque": "FV-811-CJ",
    "vehiculeId": "V270",
    "anneeImmat": 2017
  },
  {
    "plaque": "FB-167-EH",
    "vehiculeId": "V270",
    "anneeImmat": 2017
  },
  {
    "plaque": "CW-937-BN",
    "vehiculeId": "V270",
    "anneeImmat": 2017
  },
  {
    "plaque": "DK-583-LV",
    "vehiculeId": "V270",
    "anneeImmat": 2017
  },
  {
    "plaque": "RW-557-HR",
    "vehiculeId": "V271",
    "anneeImmat": 2018
  },
  {
    "plaque": "DJ-580-MB",
    "vehiculeId": "V271",
    "anneeImmat": 2018
  },
  {
    "plaque": "PL-463-PT",
    "vehiculeId": "V271",
    "anneeImmat": 2018
  },
  {
    "plaque": "EX-984-GQ",
    "vehiculeId": "V271",
    "anneeImmat": 2018
  },
  {
    "plaque": "YG-979-MS",
    "vehiculeId": "V271",
    "anneeImmat": 2019
  },
  {
    "plaque": "JH-942-BK",
    "vehiculeId": "V271",
    "anneeImmat": 2019
  },
  {
    "plaque": "CY-833-CD",
    "vehiculeId": "V271",
    "anneeImmat": 2019
  },
  {
    "plaque": "KF-119-VS",
    "vehiculeId": "V271",
    "anneeImmat": 2019
  },
  {
    "plaque": "YM-720-GK",
    "vehiculeId": "V271",
    "anneeImmat": 2019
  },
  {
    "plaque": "JR-961-CT",
    "vehiculeId": "V272",
    "anneeImmat": 2019
  },
  {
    "plaque": "BC-566-FJ",
    "vehiculeId": "V272",
    "anneeImmat": 2019
  },
  {
    "plaque": "JP-730-XA",
    "vehiculeId": "V272",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZL-546-VF",
    "vehiculeId": "V272",
    "anneeImmat": 2019
  },
  {
    "plaque": "QZ-143-CV",
    "vehiculeId": "V272",
    "anneeImmat": 2020
  },
  {
    "plaque": "XS-894-FM",
    "vehiculeId": "V273",
    "anneeImmat": 2018
  },
  {
    "plaque": "QP-333-TG",
    "vehiculeId": "V273",
    "anneeImmat": 2018
  },
  {
    "plaque": "PS-465-ND",
    "vehiculeId": "V273",
    "anneeImmat": 2018
  },
  {
    "plaque": "TJ-785-RL",
    "vehiculeId": "V273",
    "anneeImmat": 2018
  },
  {
    "plaque": "QT-913-DX",
    "vehiculeId": "V273",
    "anneeImmat": 2019
  },
  {
    "plaque": "WN-815-GA",
    "vehiculeId": "V274",
    "anneeImmat": 2019
  },
  {
    "plaque": "LY-225-RV",
    "vehiculeId": "V274",
    "anneeImmat": 2019
  },
  {
    "plaque": "BB-575-CL",
    "vehiculeId": "V274",
    "anneeImmat": 2019
  },
  {
    "plaque": "PF-380-BM",
    "vehiculeId": "V274",
    "anneeImmat": 2019
  },
  {
    "plaque": "QG-912-GE",
    "vehiculeId": "V274",
    "anneeImmat": 2020
  },
  {
    "plaque": "HX-252-VM",
    "vehiculeId": "V274",
    "anneeImmat": 2020
  },
  {
    "plaque": "DX-149-TQ",
    "vehiculeId": "V274",
    "anneeImmat": 2020
  },
  {
    "plaque": "JG-701-RB",
    "vehiculeId": "V275",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZY-742-CL",
    "vehiculeId": "V275",
    "anneeImmat": 2020
  },
  {
    "plaque": "FW-987-JS",
    "vehiculeId": "V275",
    "anneeImmat": 2020
  },
  {
    "plaque": "NF-294-VH",
    "vehiculeId": "V275",
    "anneeImmat": 2020
  },
  {
    "plaque": "FC-807-RQ",
    "vehiculeId": "V275",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZX-928-SV",
    "vehiculeId": "V276",
    "anneeImmat": 2018
  },
  {
    "plaque": "TC-667-ZP",
    "vehiculeId": "V276",
    "anneeImmat": 2018
  },
  {
    "plaque": "WW-947-SN",
    "vehiculeId": "V276",
    "anneeImmat": 2018
  },
  {
    "plaque": "VC-521-XZ",
    "vehiculeId": "V276",
    "anneeImmat": 2018
  },
  {
    "plaque": "DN-636-NA",
    "vehiculeId": "V276",
    "anneeImmat": 2019
  },
  {
    "plaque": "KY-624-TM",
    "vehiculeId": "V277",
    "anneeImmat": 2019
  },
  {
    "plaque": "LJ-328-FC",
    "vehiculeId": "V277",
    "anneeImmat": 2019
  },
  {
    "plaque": "FT-837-ME",
    "vehiculeId": "V277",
    "anneeImmat": 2019
  },
  {
    "plaque": "WL-108-VY",
    "vehiculeId": "V277",
    "anneeImmat": 2019
  },
  {
    "plaque": "QL-740-FR",
    "vehiculeId": "V277",
    "anneeImmat": 2020
  },
  {
    "plaque": "EQ-419-ZB",
    "vehiculeId": "V278",
    "anneeImmat": 2020
  },
  {
    "plaque": "VH-170-XY",
    "vehiculeId": "V278",
    "anneeImmat": 2020
  },
  {
    "plaque": "HE-251-FL",
    "vehiculeId": "V278",
    "anneeImmat": 2020
  },
  {
    "plaque": "CN-671-QB",
    "vehiculeId": "V278",
    "anneeImmat": 2020
  },
  {
    "plaque": "RK-266-AK",
    "vehiculeId": "V278",
    "anneeImmat": 2021
  },
  {
    "plaque": "GB-730-HP",
    "vehiculeId": "V278",
    "anneeImmat": 2021
  },
  {
    "plaque": "JS-822-FD",
    "vehiculeId": "V278",
    "anneeImmat": 2021
  },
  {
    "plaque": "AB-404-ZS",
    "vehiculeId": "V279",
    "anneeImmat": 2021
  },
  {
    "plaque": "NH-849-PT",
    "vehiculeId": "V279",
    "anneeImmat": 2021
  },
  {
    "plaque": "LK-533-VE",
    "vehiculeId": "V279",
    "anneeImmat": 2021
  },
  {
    "plaque": "YL-311-PL",
    "vehiculeId": "V279",
    "anneeImmat": 2021
  },
  {
    "plaque": "TW-473-TV",
    "vehiculeId": "V279",
    "anneeImmat": 2022
  },
  {
    "plaque": "NZ-597-JY",
    "vehiculeId": "V279",
    "anneeImmat": 2022
  },
  {
    "plaque": "AN-798-VZ",
    "vehiculeId": "V279",
    "anneeImmat": 2022
  },
  {
    "plaque": "BC-268-FX",
    "vehiculeId": "V279",
    "anneeImmat": 2022
  },
  {
    "plaque": "QZ-741-DJ",
    "vehiculeId": "V279",
    "anneeImmat": 2022
  },
  {
    "plaque": "RA-919-DE",
    "vehiculeId": "V280",
    "anneeImmat": 2018
  },
  {
    "plaque": "CV-229-KY",
    "vehiculeId": "V280",
    "anneeImmat": 2018
  },
  {
    "plaque": "XB-269-LR",
    "vehiculeId": "V280",
    "anneeImmat": 2018
  },
  {
    "plaque": "YY-117-MY",
    "vehiculeId": "V280",
    "anneeImmat": 2018
  },
  {
    "plaque": "TL-771-VV",
    "vehiculeId": "V280",
    "anneeImmat": 2019
  },
  {
    "plaque": "GS-998-SD",
    "vehiculeId": "V281",
    "anneeImmat": 2019
  },
  {
    "plaque": "XV-249-ZL",
    "vehiculeId": "V281",
    "anneeImmat": 2019
  },
  {
    "plaque": "XV-156-NX",
    "vehiculeId": "V281",
    "anneeImmat": 2019
  },
  {
    "plaque": "TS-943-RW",
    "vehiculeId": "V281",
    "anneeImmat": 2019
  },
  {
    "plaque": "PK-292-BS",
    "vehiculeId": "V282",
    "anneeImmat": 2020
  },
  {
    "plaque": "TH-892-RL",
    "vehiculeId": "V282",
    "anneeImmat": 2020
  },
  {
    "plaque": "TV-871-YQ",
    "vehiculeId": "V282",
    "anneeImmat": 2020
  },
  {
    "plaque": "FR-847-MF",
    "vehiculeId": "V282",
    "anneeImmat": 2020
  },
  {
    "plaque": "YH-414-QC",
    "vehiculeId": "V283",
    "anneeImmat": 2021
  },
  {
    "plaque": "JS-400-EC",
    "vehiculeId": "V283",
    "anneeImmat": 2021
  },
  {
    "plaque": "CT-264-XX",
    "vehiculeId": "V283",
    "anneeImmat": 2021
  },
  {
    "plaque": "YP-336-HV",
    "vehiculeId": "V283",
    "anneeImmat": 2021
  },
  {
    "plaque": "JY-585-BC",
    "vehiculeId": "V283",
    "anneeImmat": 2022
  },
  {
    "plaque": "LK-959-YJ",
    "vehiculeId": "V283",
    "anneeImmat": 2022
  },
  {
    "plaque": "FT-548-MH",
    "vehiculeId": "V283",
    "anneeImmat": 2022
  },
  {
    "plaque": "RE-669-GX",
    "vehiculeId": "V284",
    "anneeImmat": 2016
  },
  {
    "plaque": "ZN-929-SF",
    "vehiculeId": "V284",
    "anneeImmat": 2016
  },
  {
    "plaque": "QQ-526-AW",
    "vehiculeId": "V284",
    "anneeImmat": 2016
  },
  {
    "plaque": "DD-859-VV",
    "vehiculeId": "V284",
    "anneeImmat": 2016
  },
  {
    "plaque": "GF-591-GM",
    "vehiculeId": "V285",
    "anneeImmat": 2017
  },
  {
    "plaque": "WT-715-VZ",
    "vehiculeId": "V285",
    "anneeImmat": 2017
  },
  {
    "plaque": "YE-193-FW",
    "vehiculeId": "V285",
    "anneeImmat": 2017
  },
  {
    "plaque": "NX-378-GS",
    "vehiculeId": "V285",
    "anneeImmat": 2017
  },
  {
    "plaque": "HN-694-RV",
    "vehiculeId": "V285",
    "anneeImmat": 2018
  },
  {
    "plaque": "WS-457-TP",
    "vehiculeId": "V286",
    "anneeImmat": 2018
  },
  {
    "plaque": "SD-737-QD",
    "vehiculeId": "V286",
    "anneeImmat": 2018
  },
  {
    "plaque": "ZL-665-TM",
    "vehiculeId": "V286",
    "anneeImmat": 2018
  },
  {
    "plaque": "NX-238-XK",
    "vehiculeId": "V286",
    "anneeImmat": 2018
  },
  {
    "plaque": "RW-247-LX",
    "vehiculeId": "V286",
    "anneeImmat": 2019
  },
  {
    "plaque": "SV-281-SM",
    "vehiculeId": "V287",
    "anneeImmat": 2019
  },
  {
    "plaque": "TP-186-PP",
    "vehiculeId": "V287",
    "anneeImmat": 2019
  },
  {
    "plaque": "AG-389-XF",
    "vehiculeId": "V287",
    "anneeImmat": 2019
  },
  {
    "plaque": "PR-376-FT",
    "vehiculeId": "V287",
    "anneeImmat": 2019
  },
  {
    "plaque": "KT-231-FB",
    "vehiculeId": "V288",
    "anneeImmat": 2020
  },
  {
    "plaque": "MY-316-BE",
    "vehiculeId": "V288",
    "anneeImmat": 2020
  },
  {
    "plaque": "RC-802-VL",
    "vehiculeId": "V288",
    "anneeImmat": 2020
  },
  {
    "plaque": "ME-458-BW",
    "vehiculeId": "V288",
    "anneeImmat": 2020
  },
  {
    "plaque": "FB-330-EN",
    "vehiculeId": "V288",
    "anneeImmat": 2021
  },
  {
    "plaque": "TG-794-VH",
    "vehiculeId": "V288",
    "anneeImmat": 2021
  },
  {
    "plaque": "EF-512-VL",
    "vehiculeId": "V288",
    "anneeImmat": 2021
  },
  {
    "plaque": "DA-628-NR",
    "vehiculeId": "V288",
    "anneeImmat": 2021
  },
  {
    "plaque": "GB-938-GN",
    "vehiculeId": "V288",
    "anneeImmat": 2021
  },
  {
    "plaque": "TZ-234-YV",
    "vehiculeId": "V289",
    "anneeImmat": 2021
  },
  {
    "plaque": "CA-529-PZ",
    "vehiculeId": "V289",
    "anneeImmat": 2021
  },
  {
    "plaque": "TD-611-DL",
    "vehiculeId": "V289",
    "anneeImmat": 2021
  },
  {
    "plaque": "XK-532-LJ",
    "vehiculeId": "V289",
    "anneeImmat": 2021
  },
  {
    "plaque": "WD-944-JT",
    "vehiculeId": "V289",
    "anneeImmat": 2022
  },
  {
    "plaque": "NB-363-KZ",
    "vehiculeId": "V290",
    "anneeImmat": 2022
  },
  {
    "plaque": "SL-162-DZ",
    "vehiculeId": "V290",
    "anneeImmat": 2022
  },
  {
    "plaque": "EF-571-LP",
    "vehiculeId": "V290",
    "anneeImmat": 2022
  },
  {
    "plaque": "GF-654-CC",
    "vehiculeId": "V290",
    "anneeImmat": 2022
  },
  {
    "plaque": "XB-805-YN",
    "vehiculeId": "V290",
    "anneeImmat": 2023
  },
  {
    "plaque": "BR-750-GR",
    "vehiculeId": "V290",
    "anneeImmat": 2023
  },
  {
    "plaque": "GC-521-FV",
    "vehiculeId": "V290",
    "anneeImmat": 2023
  },
  {
    "plaque": "VK-316-NF",
    "vehiculeId": "V291",
    "anneeImmat": 2016
  },
  {
    "plaque": "MW-914-LN",
    "vehiculeId": "V291",
    "anneeImmat": 2016
  },
  {
    "plaque": "EY-295-PN",
    "vehiculeId": "V291",
    "anneeImmat": 2016
  },
  {
    "plaque": "SW-892-LF",
    "vehiculeId": "V291",
    "anneeImmat": 2016
  },
  {
    "plaque": "YV-530-MX",
    "vehiculeId": "V291",
    "anneeImmat": 2017
  },
  {
    "plaque": "PA-985-NS",
    "vehiculeId": "V292",
    "anneeImmat": 2017
  },
  {
    "plaque": "AF-593-KC",
    "vehiculeId": "V292",
    "anneeImmat": 2017
  },
  {
    "plaque": "HJ-528-HA",
    "vehiculeId": "V292",
    "anneeImmat": 2017
  },
  {
    "plaque": "PM-204-EJ",
    "vehiculeId": "V292",
    "anneeImmat": 2017
  },
  {
    "plaque": "DR-335-TS",
    "vehiculeId": "V292",
    "anneeImmat": 2018
  },
  {
    "plaque": "XM-236-DA",
    "vehiculeId": "V293",
    "anneeImmat": 2018
  },
  {
    "plaque": "ZV-369-SZ",
    "vehiculeId": "V293",
    "anneeImmat": 2018
  },
  {
    "plaque": "NF-438-VX",
    "vehiculeId": "V293",
    "anneeImmat": 2018
  },
  {
    "plaque": "TF-279-HA",
    "vehiculeId": "V293",
    "anneeImmat": 2018
  },
  {
    "plaque": "HP-297-BC",
    "vehiculeId": "V293",
    "anneeImmat": 2019
  },
  {
    "plaque": "CS-225-SP",
    "vehiculeId": "V293",
    "anneeImmat": 2019
  },
  {
    "plaque": "NA-679-EP",
    "vehiculeId": "V293",
    "anneeImmat": 2019
  },
  {
    "plaque": "FY-758-XV",
    "vehiculeId": "V294",
    "anneeImmat": 2019
  },
  {
    "plaque": "KG-673-KK",
    "vehiculeId": "V294",
    "anneeImmat": 2019
  },
  {
    "plaque": "CZ-401-DC",
    "vehiculeId": "V294",
    "anneeImmat": 2019
  },
  {
    "plaque": "WK-217-XK",
    "vehiculeId": "V294",
    "anneeImmat": 2019
  },
  {
    "plaque": "SH-831-TK",
    "vehiculeId": "V295",
    "anneeImmat": 2020
  },
  {
    "plaque": "SA-409-BQ",
    "vehiculeId": "V295",
    "anneeImmat": 2020
  },
  {
    "plaque": "QW-173-WS",
    "vehiculeId": "V295",
    "anneeImmat": 2020
  },
  {
    "plaque": "BF-164-CN",
    "vehiculeId": "V295",
    "anneeImmat": 2020
  },
  {
    "plaque": "PZ-250-AV",
    "vehiculeId": "V296",
    "anneeImmat": 2021
  },
  {
    "plaque": "QF-492-FR",
    "vehiculeId": "V296",
    "anneeImmat": 2021
  },
  {
    "plaque": "GL-745-VZ",
    "vehiculeId": "V296",
    "anneeImmat": 2021
  },
  {
    "plaque": "XA-540-PA",
    "vehiculeId": "V296",
    "anneeImmat": 2021
  },
  {
    "plaque": "TL-974-RF",
    "vehiculeId": "V296",
    "anneeImmat": 2022
  },
  {
    "plaque": "AK-448-AD",
    "vehiculeId": "V297",
    "anneeImmat": 2022
  },
  {
    "plaque": "PB-374-WN",
    "vehiculeId": "V297",
    "anneeImmat": 2022
  },
  {
    "plaque": "JZ-362-YV",
    "vehiculeId": "V297",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZA-766-DC",
    "vehiculeId": "V297",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZE-677-MY",
    "vehiculeId": "V297",
    "anneeImmat": 2023
  },
  {
    "plaque": "QS-549-FF",
    "vehiculeId": "V298",
    "anneeImmat": 2020
  },
  {
    "plaque": "HL-255-VF",
    "vehiculeId": "V298",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZE-205-TS",
    "vehiculeId": "V298",
    "anneeImmat": 2020
  },
  {
    "plaque": "DR-147-WG",
    "vehiculeId": "V298",
    "anneeImmat": 2020
  },
  {
    "plaque": "MF-416-WQ",
    "vehiculeId": "V298",
    "anneeImmat": 2021
  },
  {
    "plaque": "WP-129-WM",
    "vehiculeId": "V298",
    "anneeImmat": 2021
  },
  {
    "plaque": "SR-464-GH",
    "vehiculeId": "V298",
    "anneeImmat": 2021
  },
  {
    "plaque": "NX-547-CY",
    "vehiculeId": "V299",
    "anneeImmat": 2021
  },
  {
    "plaque": "SG-774-CQ",
    "vehiculeId": "V299",
    "anneeImmat": 2021
  },
  {
    "plaque": "YV-581-QW",
    "vehiculeId": "V299",
    "anneeImmat": 2021
  },
  {
    "plaque": "SH-235-GN",
    "vehiculeId": "V299",
    "anneeImmat": 2021
  },
  {
    "plaque": "AK-604-EE",
    "vehiculeId": "V299",
    "anneeImmat": 2022
  },
  {
    "plaque": "AX-398-LY",
    "vehiculeId": "V299",
    "anneeImmat": 2022
  },
  {
    "plaque": "EB-358-YE",
    "vehiculeId": "V299",
    "anneeImmat": 2022
  },
  {
    "plaque": "RC-251-TN",
    "vehiculeId": "V299",
    "anneeImmat": 2022
  },
  {
    "plaque": "DZ-131-JQ",
    "vehiculeId": "V299",
    "anneeImmat": 2022
  },
  {
    "plaque": "GH-455-LF",
    "vehiculeId": "V300",
    "anneeImmat": 2022
  },
  {
    "plaque": "QW-779-LG",
    "vehiculeId": "V300",
    "anneeImmat": 2022
  },
  {
    "plaque": "PP-972-VW",
    "vehiculeId": "V300",
    "anneeImmat": 2022
  },
  {
    "plaque": "JS-461-VQ",
    "vehiculeId": "V300",
    "anneeImmat": 2022
  },
  {
    "plaque": "QG-730-FB",
    "vehiculeId": "V300",
    "anneeImmat": 2023
  },
  {
    "plaque": "EJ-301-AY",
    "vehiculeId": "V301",
    "anneeImmat": 2019
  },
  {
    "plaque": "TS-778-RQ",
    "vehiculeId": "V301",
    "anneeImmat": 2019
  },
  {
    "plaque": "YW-347-WX",
    "vehiculeId": "V301",
    "anneeImmat": 2019
  },
  {
    "plaque": "AD-702-XJ",
    "vehiculeId": "V301",
    "anneeImmat": 2019
  },
  {
    "plaque": "PZ-889-EF",
    "vehiculeId": "V301",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZW-900-XJ",
    "vehiculeId": "V301",
    "anneeImmat": 2020
  },
  {
    "plaque": "AS-968-EH",
    "vehiculeId": "V301",
    "anneeImmat": 2020
  },
  {
    "plaque": "BT-488-KK",
    "vehiculeId": "V301",
    "anneeImmat": 2020
  },
  {
    "plaque": "RB-204-DZ",
    "vehiculeId": "V301",
    "anneeImmat": 2020
  },
  {
    "plaque": "EA-925-AQ",
    "vehiculeId": "V302",
    "anneeImmat": 2020
  },
  {
    "plaque": "XP-318-NT",
    "vehiculeId": "V302",
    "anneeImmat": 2020
  },
  {
    "plaque": "NR-314-CM",
    "vehiculeId": "V302",
    "anneeImmat": 2020
  },
  {
    "plaque": "JF-848-AM",
    "vehiculeId": "V302",
    "anneeImmat": 2020
  },
  {
    "plaque": "FF-736-BQ",
    "vehiculeId": "V303",
    "anneeImmat": 2021
  },
  {
    "plaque": "CY-986-XF",
    "vehiculeId": "V303",
    "anneeImmat": 2021
  },
  {
    "plaque": "CQ-493-TP",
    "vehiculeId": "V303",
    "anneeImmat": 2021
  },
  {
    "plaque": "QW-478-QP",
    "vehiculeId": "V303",
    "anneeImmat": 2021
  },
  {
    "plaque": "GN-520-VS",
    "vehiculeId": "V303",
    "anneeImmat": 2022
  },
  {
    "plaque": "CT-369-DZ",
    "vehiculeId": "V304",
    "anneeImmat": 2022
  },
  {
    "plaque": "MY-258-VJ",
    "vehiculeId": "V304",
    "anneeImmat": 2022
  },
  {
    "plaque": "WR-536-KC",
    "vehiculeId": "V304",
    "anneeImmat": 2022
  },
  {
    "plaque": "MV-317-AZ",
    "vehiculeId": "V304",
    "anneeImmat": 2022
  },
  {
    "plaque": "FN-743-CB",
    "vehiculeId": "V304",
    "anneeImmat": 2023
  },
  {
    "plaque": "VX-208-EV",
    "vehiculeId": "V304",
    "anneeImmat": 2023
  },
  {
    "plaque": "YV-535-TD",
    "vehiculeId": "V304",
    "anneeImmat": 2023
  },
  {
    "plaque": "FH-972-FC",
    "vehiculeId": "V304",
    "anneeImmat": 2023
  },
  {
    "plaque": "VA-851-ED",
    "vehiculeId": "V304",
    "anneeImmat": 2023
  },
  {
    "plaque": "EP-851-KW",
    "vehiculeId": "V305",
    "anneeImmat": 2018
  },
  {
    "plaque": "AY-864-WT",
    "vehiculeId": "V305",
    "anneeImmat": 2018
  },
  {
    "plaque": "RQ-421-CH",
    "vehiculeId": "V305",
    "anneeImmat": 2018
  },
  {
    "plaque": "EE-399-TW",
    "vehiculeId": "V305",
    "anneeImmat": 2018
  },
  {
    "plaque": "LY-573-VF",
    "vehiculeId": "V305",
    "anneeImmat": 2019
  },
  {
    "plaque": "EF-202-JR",
    "vehiculeId": "V305",
    "anneeImmat": 2019
  },
  {
    "plaque": "XJ-287-VS",
    "vehiculeId": "V305",
    "anneeImmat": 2019
  },
  {
    "plaque": "EH-823-FW",
    "vehiculeId": "V305",
    "anneeImmat": 2019
  },
  {
    "plaque": "NK-852-BH",
    "vehiculeId": "V305",
    "anneeImmat": 2019
  },
  {
    "plaque": "LG-322-XX",
    "vehiculeId": "V306",
    "anneeImmat": 2019
  },
  {
    "plaque": "AQ-904-TM",
    "vehiculeId": "V306",
    "anneeImmat": 2019
  },
  {
    "plaque": "NT-949-EX",
    "vehiculeId": "V306",
    "anneeImmat": 2019
  },
  {
    "plaque": "CM-691-JS",
    "vehiculeId": "V306",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZQ-321-DY",
    "vehiculeId": "V307",
    "anneeImmat": 2020
  },
  {
    "plaque": "CV-762-VA",
    "vehiculeId": "V307",
    "anneeImmat": 2020
  },
  {
    "plaque": "VJ-245-QA",
    "vehiculeId": "V307",
    "anneeImmat": 2020
  },
  {
    "plaque": "KW-489-TG",
    "vehiculeId": "V307",
    "anneeImmat": 2020
  },
  {
    "plaque": "WT-428-ZY",
    "vehiculeId": "V307",
    "anneeImmat": 2021
  },
  {
    "plaque": "NJ-466-NQ",
    "vehiculeId": "V308",
    "anneeImmat": 2021
  },
  {
    "plaque": "EV-283-TR",
    "vehiculeId": "V308",
    "anneeImmat": 2021
  },
  {
    "plaque": "MC-318-NL",
    "vehiculeId": "V308",
    "anneeImmat": 2021
  },
  {
    "plaque": "SB-514-CM",
    "vehiculeId": "V308",
    "anneeImmat": 2021
  },
  {
    "plaque": "EQ-470-TW",
    "vehiculeId": "V308",
    "anneeImmat": 2022
  },
  {
    "plaque": "NK-662-EH",
    "vehiculeId": "V308",
    "anneeImmat": 2022
  },
  {
    "plaque": "VA-899-HT",
    "vehiculeId": "V308",
    "anneeImmat": 2022
  },
  {
    "plaque": "HX-901-PY",
    "vehiculeId": "V308",
    "anneeImmat": 2022
  },
  {
    "plaque": "CX-315-LZ",
    "vehiculeId": "V308",
    "anneeImmat": 2022
  },
  {
    "plaque": "EQ-435-XL",
    "vehiculeId": "V309",
    "anneeImmat": 2022
  },
  {
    "plaque": "QP-730-EA",
    "vehiculeId": "V309",
    "anneeImmat": 2022
  },
  {
    "plaque": "HV-451-EG",
    "vehiculeId": "V309",
    "anneeImmat": 2022
  },
  {
    "plaque": "CH-771-BZ",
    "vehiculeId": "V309",
    "anneeImmat": 2022
  },
  {
    "plaque": "SH-708-DT",
    "vehiculeId": "V309",
    "anneeImmat": 2023
  },
  {
    "plaque": "KG-364-XM",
    "vehiculeId": "V310",
    "anneeImmat": 2018
  },
  {
    "plaque": "AL-287-CP",
    "vehiculeId": "V310",
    "anneeImmat": 2018
  },
  {
    "plaque": "PP-281-GE",
    "vehiculeId": "V310",
    "anneeImmat": 2018
  },
  {
    "plaque": "VQ-937-TV",
    "vehiculeId": "V310",
    "anneeImmat": 2018
  },
  {
    "plaque": "PG-149-VZ",
    "vehiculeId": "V310",
    "anneeImmat": 2019
  },
  {
    "plaque": "KD-754-FV",
    "vehiculeId": "V310",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZY-158-FF",
    "vehiculeId": "V310",
    "anneeImmat": 2019
  },
  {
    "plaque": "TQ-222-EX",
    "vehiculeId": "V310",
    "anneeImmat": 2019
  },
  {
    "plaque": "NJ-992-EL",
    "vehiculeId": "V310",
    "anneeImmat": 2019
  },
  {
    "plaque": "CG-660-DB",
    "vehiculeId": "V311",
    "anneeImmat": 2019
  },
  {
    "plaque": "RD-849-NJ",
    "vehiculeId": "V311",
    "anneeImmat": 2019
  },
  {
    "plaque": "NZ-231-CS",
    "vehiculeId": "V311",
    "anneeImmat": 2019
  },
  {
    "plaque": "SM-604-DY",
    "vehiculeId": "V311",
    "anneeImmat": 2019
  },
  {
    "plaque": "NC-538-FH",
    "vehiculeId": "V311",
    "anneeImmat": 2020
  },
  {
    "plaque": "CS-437-LG",
    "vehiculeId": "V311",
    "anneeImmat": 2020
  },
  {
    "plaque": "LJ-635-RG",
    "vehiculeId": "V311",
    "anneeImmat": 2020
  },
  {
    "plaque": "AG-254-RP",
    "vehiculeId": "V311",
    "anneeImmat": 2020
  },
  {
    "plaque": "PB-400-GW",
    "vehiculeId": "V311",
    "anneeImmat": 2020
  },
  {
    "plaque": "XA-542-VL",
    "vehiculeId": "V312",
    "anneeImmat": 2020
  },
  {
    "plaque": "HJ-872-SM",
    "vehiculeId": "V312",
    "anneeImmat": 2020
  },
  {
    "plaque": "ML-123-HQ",
    "vehiculeId": "V312",
    "anneeImmat": 2020
  },
  {
    "plaque": "RL-461-AD",
    "vehiculeId": "V312",
    "anneeImmat": 2020
  },
  {
    "plaque": "FR-653-EA",
    "vehiculeId": "V312",
    "anneeImmat": 2021
  },
  {
    "plaque": "XE-708-RC",
    "vehiculeId": "V313",
    "anneeImmat": 2021
  },
  {
    "plaque": "DL-907-MH",
    "vehiculeId": "V313",
    "anneeImmat": 2021
  },
  {
    "plaque": "HR-678-DP",
    "vehiculeId": "V313",
    "anneeImmat": 2021
  },
  {
    "plaque": "SC-656-FN",
    "vehiculeId": "V313",
    "anneeImmat": 2021
  },
  {
    "plaque": "EY-500-PF",
    "vehiculeId": "V313",
    "anneeImmat": 2022
  },
  {
    "plaque": "QB-739-PG",
    "vehiculeId": "V313",
    "anneeImmat": 2022
  },
  {
    "plaque": "HM-939-XF",
    "vehiculeId": "V313",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZS-527-NC",
    "vehiculeId": "V314",
    "anneeImmat": 2022
  },
  {
    "plaque": "JA-129-PM",
    "vehiculeId": "V314",
    "anneeImmat": 2022
  },
  {
    "plaque": "HW-697-PZ",
    "vehiculeId": "V314",
    "anneeImmat": 2022
  },
  {
    "plaque": "GK-775-YW",
    "vehiculeId": "V314",
    "anneeImmat": 2022
  },
  {
    "plaque": "JK-570-JE",
    "vehiculeId": "V314",
    "anneeImmat": 2023
  },
  {
    "plaque": "SA-630-TC",
    "vehiculeId": "V314",
    "anneeImmat": 2023
  },
  {
    "plaque": "EB-264-RJ",
    "vehiculeId": "V314",
    "anneeImmat": 2023
  },
  {
    "plaque": "WE-547-TR",
    "vehiculeId": "V314",
    "anneeImmat": 2023
  },
  {
    "plaque": "JL-450-WH",
    "vehiculeId": "V314",
    "anneeImmat": 2023
  },
  {
    "plaque": "GB-793-DP",
    "vehiculeId": "V315",
    "anneeImmat": 2018
  },
  {
    "plaque": "JF-825-RA",
    "vehiculeId": "V315",
    "anneeImmat": 2018
  },
  {
    "plaque": "TZ-197-DQ",
    "vehiculeId": "V315",
    "anneeImmat": 2018
  },
  {
    "plaque": "NB-134-EA",
    "vehiculeId": "V315",
    "anneeImmat": 2018
  },
  {
    "plaque": "EG-193-VB",
    "vehiculeId": "V316",
    "anneeImmat": 2019
  },
  {
    "plaque": "NJ-174-PB",
    "vehiculeId": "V316",
    "anneeImmat": 2019
  },
  {
    "plaque": "CS-460-DZ",
    "vehiculeId": "V316",
    "anneeImmat": 2019
  },
  {
    "plaque": "MH-444-KV",
    "vehiculeId": "V316",
    "anneeImmat": 2019
  },
  {
    "plaque": "MB-602-AE",
    "vehiculeId": "V317",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZH-209-VV",
    "vehiculeId": "V317",
    "anneeImmat": 2020
  },
  {
    "plaque": "KM-540-NE",
    "vehiculeId": "V317",
    "anneeImmat": 2020
  },
  {
    "plaque": "GZ-965-KN",
    "vehiculeId": "V317",
    "anneeImmat": 2020
  },
  {
    "plaque": "GM-410-SF",
    "vehiculeId": "V317",
    "anneeImmat": 2021
  },
  {
    "plaque": "HR-112-AT",
    "vehiculeId": "V317",
    "anneeImmat": 2021
  },
  {
    "plaque": "QS-910-YW",
    "vehiculeId": "V317",
    "anneeImmat": 2021
  },
  {
    "plaque": "RS-224-SM",
    "vehiculeId": "V317",
    "anneeImmat": 2021
  },
  {
    "plaque": "BQ-690-LW",
    "vehiculeId": "V317",
    "anneeImmat": 2021
  },
  {
    "plaque": "CA-633-QG",
    "vehiculeId": "V318",
    "anneeImmat": 2021
  },
  {
    "plaque": "TC-666-QS",
    "vehiculeId": "V318",
    "anneeImmat": 2021
  },
  {
    "plaque": "PM-718-SJ",
    "vehiculeId": "V318",
    "anneeImmat": 2021
  },
  {
    "plaque": "HT-642-ND",
    "vehiculeId": "V318",
    "anneeImmat": 2021
  },
  {
    "plaque": "QR-335-GR",
    "vehiculeId": "V318",
    "anneeImmat": 2022
  },
  {
    "plaque": "HM-778-HT",
    "vehiculeId": "V319",
    "anneeImmat": 2022
  },
  {
    "plaque": "GK-312-BT",
    "vehiculeId": "V319",
    "anneeImmat": 2022
  },
  {
    "plaque": "YA-610-GV",
    "vehiculeId": "V319",
    "anneeImmat": 2022
  },
  {
    "plaque": "RF-398-BL",
    "vehiculeId": "V319",
    "anneeImmat": 2022
  },
  {
    "plaque": "EE-358-HK",
    "vehiculeId": "V319",
    "anneeImmat": 2023
  },
  {
    "plaque": "YT-409-EG",
    "vehiculeId": "V319",
    "anneeImmat": 2023
  },
  {
    "plaque": "YF-197-CB",
    "vehiculeId": "V319",
    "anneeImmat": 2023
  },
  {
    "plaque": "RT-204-AJ",
    "vehiculeId": "V320",
    "anneeImmat": 2019
  },
  {
    "plaque": "DQ-172-KP",
    "vehiculeId": "V320",
    "anneeImmat": 2019
  },
  {
    "plaque": "JZ-708-NG",
    "vehiculeId": "V320",
    "anneeImmat": 2019
  },
  {
    "plaque": "DK-844-TS",
    "vehiculeId": "V320",
    "anneeImmat": 2019
  },
  {
    "plaque": "HT-468-YW",
    "vehiculeId": "V320",
    "anneeImmat": 2020
  },
  {
    "plaque": "JH-596-FG",
    "vehiculeId": "V321",
    "anneeImmat": 2020
  },
  {
    "plaque": "LD-773-QA",
    "vehiculeId": "V321",
    "anneeImmat": 2020
  },
  {
    "plaque": "XW-651-PJ",
    "vehiculeId": "V321",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZE-806-WN",
    "vehiculeId": "V321",
    "anneeImmat": 2020
  },
  {
    "plaque": "GR-418-HF",
    "vehiculeId": "V321",
    "anneeImmat": 2021
  },
  {
    "plaque": "FE-652-WS",
    "vehiculeId": "V321",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZR-992-WJ",
    "vehiculeId": "V321",
    "anneeImmat": 2021
  },
  {
    "plaque": "TC-646-SW",
    "vehiculeId": "V321",
    "anneeImmat": 2021
  },
  {
    "plaque": "GF-516-HV",
    "vehiculeId": "V321",
    "anneeImmat": 2021
  },
  {
    "plaque": "EX-138-SE",
    "vehiculeId": "V322",
    "anneeImmat": 2021
  },
  {
    "plaque": "EL-103-SS",
    "vehiculeId": "V322",
    "anneeImmat": 2021
  },
  {
    "plaque": "QS-918-PN",
    "vehiculeId": "V322",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZF-224-PW",
    "vehiculeId": "V322",
    "anneeImmat": 2021
  },
  {
    "plaque": "KT-201-HZ",
    "vehiculeId": "V322",
    "anneeImmat": 2022
  },
  {
    "plaque": "SC-187-LV",
    "vehiculeId": "V322",
    "anneeImmat": 2022
  },
  {
    "plaque": "YA-821-YK",
    "vehiculeId": "V322",
    "anneeImmat": 2022
  },
  {
    "plaque": "QG-296-XG",
    "vehiculeId": "V323",
    "anneeImmat": 2019
  },
  {
    "plaque": "SQ-898-WL",
    "vehiculeId": "V323",
    "anneeImmat": 2019
  },
  {
    "plaque": "SJ-971-TC",
    "vehiculeId": "V323",
    "anneeImmat": 2019
  },
  {
    "plaque": "YA-379-ZK",
    "vehiculeId": "V323",
    "anneeImmat": 2019
  },
  {
    "plaque": "PL-963-JK",
    "vehiculeId": "V324",
    "anneeImmat": 2020
  },
  {
    "plaque": "GY-263-MP",
    "vehiculeId": "V324",
    "anneeImmat": 2020
  },
  {
    "plaque": "NR-525-KV",
    "vehiculeId": "V324",
    "anneeImmat": 2020
  },
  {
    "plaque": "KE-334-BB",
    "vehiculeId": "V324",
    "anneeImmat": 2020
  },
  {
    "plaque": "VV-814-SS",
    "vehiculeId": "V325",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZT-752-BR",
    "vehiculeId": "V325",
    "anneeImmat": 2021
  },
  {
    "plaque": "AE-993-DQ",
    "vehiculeId": "V325",
    "anneeImmat": 2021
  },
  {
    "plaque": "RL-662-KL",
    "vehiculeId": "V325",
    "anneeImmat": 2021
  },
  {
    "plaque": "BM-202-EK",
    "vehiculeId": "V325",
    "anneeImmat": 2022
  },
  {
    "plaque": "VA-188-LG",
    "vehiculeId": "V326",
    "anneeImmat": 2022
  },
  {
    "plaque": "BA-857-ZY",
    "vehiculeId": "V326",
    "anneeImmat": 2022
  },
  {
    "plaque": "WT-338-CB",
    "vehiculeId": "V326",
    "anneeImmat": 2022
  },
  {
    "plaque": "GB-719-AD",
    "vehiculeId": "V326",
    "anneeImmat": 2022
  },
  {
    "plaque": "RK-682-PH",
    "vehiculeId": "V326",
    "anneeImmat": 2023
  },
  {
    "plaque": "WX-247-ES",
    "vehiculeId": "V327",
    "anneeImmat": 2020
  },
  {
    "plaque": "WW-116-FX",
    "vehiculeId": "V327",
    "anneeImmat": 2020
  },
  {
    "plaque": "PZ-496-SA",
    "vehiculeId": "V327",
    "anneeImmat": 2020
  },
  {
    "plaque": "VA-900-LB",
    "vehiculeId": "V327",
    "anneeImmat": 2020
  },
  {
    "plaque": "BJ-703-BN",
    "vehiculeId": "V327",
    "anneeImmat": 2021
  },
  {
    "plaque": "HJ-545-LA",
    "vehiculeId": "V327",
    "anneeImmat": 2021
  },
  {
    "plaque": "YJ-465-MX",
    "vehiculeId": "V327",
    "anneeImmat": 2021
  },
  {
    "plaque": "NQ-287-CE",
    "vehiculeId": "V328",
    "anneeImmat": 2021
  },
  {
    "plaque": "KL-343-CF",
    "vehiculeId": "V328",
    "anneeImmat": 2021
  },
  {
    "plaque": "LN-904-HA",
    "vehiculeId": "V328",
    "anneeImmat": 2021
  },
  {
    "plaque": "KW-863-PT",
    "vehiculeId": "V328",
    "anneeImmat": 2021
  },
  {
    "plaque": "MR-916-WQ",
    "vehiculeId": "V328",
    "anneeImmat": 2022
  },
  {
    "plaque": "TB-238-WG",
    "vehiculeId": "V328",
    "anneeImmat": 2022
  },
  {
    "plaque": "BY-531-XC",
    "vehiculeId": "V328",
    "anneeImmat": 2022
  },
  {
    "plaque": "DT-641-VS",
    "vehiculeId": "V328",
    "anneeImmat": 2022
  },
  {
    "plaque": "FH-357-HG",
    "vehiculeId": "V328",
    "anneeImmat": 2022
  },
  {
    "plaque": "LP-104-TT",
    "vehiculeId": "V329",
    "anneeImmat": 2022
  },
  {
    "plaque": "LF-322-KG",
    "vehiculeId": "V329",
    "anneeImmat": 2022
  },
  {
    "plaque": "SL-981-GL",
    "vehiculeId": "V329",
    "anneeImmat": 2022
  },
  {
    "plaque": "NL-923-QQ",
    "vehiculeId": "V329",
    "anneeImmat": 2022
  },
  {
    "plaque": "EF-764-FX",
    "vehiculeId": "V329",
    "anneeImmat": 2023
  },
  {
    "plaque": "QT-845-XL",
    "vehiculeId": "V329",
    "anneeImmat": 2023
  },
  {
    "plaque": "NB-717-SS",
    "vehiculeId": "V329",
    "anneeImmat": 2023
  },
  {
    "plaque": "WD-611-SA",
    "vehiculeId": "V329",
    "anneeImmat": 2023
  },
  {
    "plaque": "FC-445-DQ",
    "vehiculeId": "V329",
    "anneeImmat": 2023
  },
  {
    "plaque": "BS-415-PV",
    "vehiculeId": "V330",
    "anneeImmat": 2023
  },
  {
    "plaque": "AK-530-JR",
    "vehiculeId": "V330",
    "anneeImmat": 2023
  },
  {
    "plaque": "LL-305-BV",
    "vehiculeId": "V330",
    "anneeImmat": 2023
  },
  {
    "plaque": "TQ-789-BE",
    "vehiculeId": "V330",
    "anneeImmat": 2023
  },
  {
    "plaque": "QC-623-CP",
    "vehiculeId": "V330",
    "anneeImmat": 2024
  },
  {
    "plaque": "BJ-337-TG",
    "vehiculeId": "V331",
    "anneeImmat": 2020
  },
  {
    "plaque": "PM-611-FD",
    "vehiculeId": "V331",
    "anneeImmat": 2020
  },
  {
    "plaque": "JM-534-LV",
    "vehiculeId": "V331",
    "anneeImmat": 2020
  },
  {
    "plaque": "SG-897-MK",
    "vehiculeId": "V331",
    "anneeImmat": 2020
  },
  {
    "plaque": "XE-514-VJ",
    "vehiculeId": "V331",
    "anneeImmat": 2021
  },
  {
    "plaque": "HT-875-SA",
    "vehiculeId": "V331",
    "anneeImmat": 2021
  },
  {
    "plaque": "SQ-329-HP",
    "vehiculeId": "V331",
    "anneeImmat": 2021
  },
  {
    "plaque": "KJ-305-VC",
    "vehiculeId": "V332",
    "anneeImmat": 2021
  },
  {
    "plaque": "PG-341-NJ",
    "vehiculeId": "V332",
    "anneeImmat": 2021
  },
  {
    "plaque": "HQ-661-TD",
    "vehiculeId": "V332",
    "anneeImmat": 2021
  },
  {
    "plaque": "TM-241-AQ",
    "vehiculeId": "V332",
    "anneeImmat": 2021
  },
  {
    "plaque": "VJ-223-QX",
    "vehiculeId": "V332",
    "anneeImmat": 2022
  },
  {
    "plaque": "WH-362-LV",
    "vehiculeId": "V333",
    "anneeImmat": 2022
  },
  {
    "plaque": "YT-895-VS",
    "vehiculeId": "V333",
    "anneeImmat": 2022
  },
  {
    "plaque": "DL-658-TX",
    "vehiculeId": "V333",
    "anneeImmat": 2022
  },
  {
    "plaque": "PY-443-YW",
    "vehiculeId": "V333",
    "anneeImmat": 2022
  },
  {
    "plaque": "WM-492-QM",
    "vehiculeId": "V333",
    "anneeImmat": 2023
  },
  {
    "plaque": "MV-796-MV",
    "vehiculeId": "V333",
    "anneeImmat": 2023
  },
  {
    "plaque": "HZ-802-AY",
    "vehiculeId": "V333",
    "anneeImmat": 2023
  },
  {
    "plaque": "EQ-500-WF",
    "vehiculeId": "V334",
    "anneeImmat": 2021
  },
  {
    "plaque": "HQ-355-ZY",
    "vehiculeId": "V334",
    "anneeImmat": 2021
  },
  {
    "plaque": "SS-687-MY",
    "vehiculeId": "V334",
    "anneeImmat": 2021
  },
  {
    "plaque": "TC-895-YS",
    "vehiculeId": "V334",
    "anneeImmat": 2021
  },
  {
    "plaque": "VJ-798-SW",
    "vehiculeId": "V334",
    "anneeImmat": 2022
  },
  {
    "plaque": "RF-977-XD",
    "vehiculeId": "V334",
    "anneeImmat": 2022
  },
  {
    "plaque": "SC-885-GW",
    "vehiculeId": "V334",
    "anneeImmat": 2022
  },
  {
    "plaque": "PH-759-KV",
    "vehiculeId": "V335",
    "anneeImmat": 2022
  },
  {
    "plaque": "GL-296-YD",
    "vehiculeId": "V335",
    "anneeImmat": 2022
  },
  {
    "plaque": "ML-876-XP",
    "vehiculeId": "V335",
    "anneeImmat": 2022
  },
  {
    "plaque": "TQ-736-RT",
    "vehiculeId": "V335",
    "anneeImmat": 2022
  },
  {
    "plaque": "XA-202-LA",
    "vehiculeId": "V335",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZV-996-RE",
    "vehiculeId": "V336",
    "anneeImmat": 2023
  },
  {
    "plaque": "WT-758-CC",
    "vehiculeId": "V336",
    "anneeImmat": 2023
  },
  {
    "plaque": "RB-540-AZ",
    "vehiculeId": "V336",
    "anneeImmat": 2023
  },
  {
    "plaque": "TL-377-FW",
    "vehiculeId": "V336",
    "anneeImmat": 2023
  },
  {
    "plaque": "XM-567-XG",
    "vehiculeId": "V337",
    "anneeImmat": 2016
  },
  {
    "plaque": "BY-498-XA",
    "vehiculeId": "V337",
    "anneeImmat": 2016
  },
  {
    "plaque": "KR-536-WY",
    "vehiculeId": "V337",
    "anneeImmat": 2016
  },
  {
    "plaque": "FY-561-HC",
    "vehiculeId": "V337",
    "anneeImmat": 2016
  },
  {
    "plaque": "CA-966-MY",
    "vehiculeId": "V337",
    "anneeImmat": 2017
  },
  {
    "plaque": "MR-171-ED",
    "vehiculeId": "V337",
    "anneeImmat": 2017
  },
  {
    "plaque": "LZ-674-KL",
    "vehiculeId": "V337",
    "anneeImmat": 2017
  },
  {
    "plaque": "BR-135-QH",
    "vehiculeId": "V338",
    "anneeImmat": 2017
  },
  {
    "plaque": "TB-723-SV",
    "vehiculeId": "V338",
    "anneeImmat": 2017
  },
  {
    "plaque": "HK-804-JQ",
    "vehiculeId": "V338",
    "anneeImmat": 2017
  },
  {
    "plaque": "SP-622-WY",
    "vehiculeId": "V338",
    "anneeImmat": 2017
  },
  {
    "plaque": "WX-503-TH",
    "vehiculeId": "V338",
    "anneeImmat": 2018
  },
  {
    "plaque": "FE-196-TS",
    "vehiculeId": "V338",
    "anneeImmat": 2018
  },
  {
    "plaque": "MD-469-QJ",
    "vehiculeId": "V338",
    "anneeImmat": 2018
  },
  {
    "plaque": "WP-840-LV",
    "vehiculeId": "V338",
    "anneeImmat": 2018
  },
  {
    "plaque": "XT-718-HQ",
    "vehiculeId": "V338",
    "anneeImmat": 2018
  },
  {
    "plaque": "DY-514-RW",
    "vehiculeId": "V339",
    "anneeImmat": 2018
  },
  {
    "plaque": "GD-787-ZP",
    "vehiculeId": "V339",
    "anneeImmat": 2018
  },
  {
    "plaque": "RS-203-QY",
    "vehiculeId": "V339",
    "anneeImmat": 2018
  },
  {
    "plaque": "RQ-502-HY",
    "vehiculeId": "V339",
    "anneeImmat": 2018
  },
  {
    "plaque": "VX-385-PW",
    "vehiculeId": "V339",
    "anneeImmat": 2019
  },
  {
    "plaque": "JB-990-YX",
    "vehiculeId": "V340",
    "anneeImmat": 2019
  },
  {
    "plaque": "XH-438-FC",
    "vehiculeId": "V340",
    "anneeImmat": 2019
  },
  {
    "plaque": "BA-833-DM",
    "vehiculeId": "V340",
    "anneeImmat": 2019
  },
  {
    "plaque": "MR-409-KY",
    "vehiculeId": "V340",
    "anneeImmat": 2019
  },
  {
    "plaque": "LS-606-RE",
    "vehiculeId": "V340",
    "anneeImmat": 2020
  },
  {
    "plaque": "GR-302-FX",
    "vehiculeId": "V340",
    "anneeImmat": 2020
  },
  {
    "plaque": "BA-686-XP",
    "vehiculeId": "V340",
    "anneeImmat": 2020
  },
  {
    "plaque": "PH-941-DY",
    "vehiculeId": "V341",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZJ-496-VG",
    "vehiculeId": "V341",
    "anneeImmat": 2020
  },
  {
    "plaque": "RN-391-QN",
    "vehiculeId": "V341",
    "anneeImmat": 2020
  },
  {
    "plaque": "SQ-159-JG",
    "vehiculeId": "V341",
    "anneeImmat": 2020
  },
  {
    "plaque": "RY-770-GY",
    "vehiculeId": "V342",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZK-247-RC",
    "vehiculeId": "V342",
    "anneeImmat": 2021
  },
  {
    "plaque": "BB-905-MX",
    "vehiculeId": "V342",
    "anneeImmat": 2021
  },
  {
    "plaque": "KS-207-KF",
    "vehiculeId": "V342",
    "anneeImmat": 2021
  },
  {
    "plaque": "XP-881-LB",
    "vehiculeId": "V343",
    "anneeImmat": 2022
  },
  {
    "plaque": "RT-809-WQ",
    "vehiculeId": "V343",
    "anneeImmat": 2022
  },
  {
    "plaque": "LA-431-YK",
    "vehiculeId": "V343",
    "anneeImmat": 2022
  },
  {
    "plaque": "RN-584-WZ",
    "vehiculeId": "V343",
    "anneeImmat": 2022
  },
  {
    "plaque": "NY-495-XC",
    "vehiculeId": "V343",
    "anneeImmat": 2023
  },
  {
    "plaque": "BX-182-JR",
    "vehiculeId": "V344",
    "anneeImmat": 2023
  },
  {
    "plaque": "NT-634-LB",
    "vehiculeId": "V344",
    "anneeImmat": 2023
  },
  {
    "plaque": "QQ-882-ZT",
    "vehiculeId": "V344",
    "anneeImmat": 2023
  },
  {
    "plaque": "BB-487-VC",
    "vehiculeId": "V344",
    "anneeImmat": 2023
  },
  {
    "plaque": "FE-419-AS",
    "vehiculeId": "V344",
    "anneeImmat": 2024
  },
  {
    "plaque": "CA-879-TT",
    "vehiculeId": "V344",
    "anneeImmat": 2024
  },
  {
    "plaque": "NR-426-BR",
    "vehiculeId": "V344",
    "anneeImmat": 2024
  },
  {
    "plaque": "PG-357-AC",
    "vehiculeId": "V345",
    "anneeImmat": 2022
  },
  {
    "plaque": "WG-915-XT",
    "vehiculeId": "V345",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZT-820-EJ",
    "vehiculeId": "V345",
    "anneeImmat": 2022
  },
  {
    "plaque": "RL-474-TA",
    "vehiculeId": "V345",
    "anneeImmat": 2022
  },
  {
    "plaque": "KN-259-LT",
    "vehiculeId": "V345",
    "anneeImmat": 2023
  },
  {
    "plaque": "AM-652-TH",
    "vehiculeId": "V345",
    "anneeImmat": 2023
  },
  {
    "plaque": "AY-287-AT",
    "vehiculeId": "V345",
    "anneeImmat": 2023
  },
  {
    "plaque": "AA-228-FF",
    "vehiculeId": "V346",
    "anneeImmat": 2023
  },
  {
    "plaque": "GC-473-SJ",
    "vehiculeId": "V346",
    "anneeImmat": 2023
  },
  {
    "plaque": "DL-166-GQ",
    "vehiculeId": "V346",
    "anneeImmat": 2023
  },
  {
    "plaque": "QW-666-FP",
    "vehiculeId": "V346",
    "anneeImmat": 2023
  },
  {
    "plaque": "YV-582-PZ",
    "vehiculeId": "V346",
    "anneeImmat": 2024
  },
  {
    "plaque": "JW-673-TY",
    "vehiculeId": "V346",
    "anneeImmat": 2024
  },
  {
    "plaque": "BG-828-KD",
    "vehiculeId": "V346",
    "anneeImmat": 2024
  },
  {
    "plaque": "HK-293-HB",
    "vehiculeId": "V347",
    "anneeImmat": 2018
  },
  {
    "plaque": "LB-411-JM",
    "vehiculeId": "V347",
    "anneeImmat": 2018
  },
  {
    "plaque": "WQ-803-SQ",
    "vehiculeId": "V347",
    "anneeImmat": 2018
  },
  {
    "plaque": "YK-937-TG",
    "vehiculeId": "V347",
    "anneeImmat": 2018
  },
  {
    "plaque": "TM-685-QF",
    "vehiculeId": "V347",
    "anneeImmat": 2019
  },
  {
    "plaque": "AT-256-XP",
    "vehiculeId": "V347",
    "anneeImmat": 2019
  },
  {
    "plaque": "JC-790-SD",
    "vehiculeId": "V347",
    "anneeImmat": 2019
  },
  {
    "plaque": "YB-596-QY",
    "vehiculeId": "V347",
    "anneeImmat": 2019
  },
  {
    "plaque": "XJ-664-XR",
    "vehiculeId": "V347",
    "anneeImmat": 2019
  },
  {
    "plaque": "KV-609-KP",
    "vehiculeId": "V348",
    "anneeImmat": 2019
  },
  {
    "plaque": "WY-872-CT",
    "vehiculeId": "V348",
    "anneeImmat": 2019
  },
  {
    "plaque": "RW-800-SP",
    "vehiculeId": "V348",
    "anneeImmat": 2019
  },
  {
    "plaque": "GH-494-FM",
    "vehiculeId": "V348",
    "anneeImmat": 2019
  },
  {
    "plaque": "YE-328-GE",
    "vehiculeId": "V348",
    "anneeImmat": 2020
  },
  {
    "plaque": "AV-857-CP",
    "vehiculeId": "V349",
    "anneeImmat": 2020
  },
  {
    "plaque": "MJ-458-HH",
    "vehiculeId": "V349",
    "anneeImmat": 2020
  },
  {
    "plaque": "WZ-275-AB",
    "vehiculeId": "V349",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZL-346-XV",
    "vehiculeId": "V349",
    "anneeImmat": 2020
  },
  {
    "plaque": "FD-828-XZ",
    "vehiculeId": "V349",
    "anneeImmat": 2021
  },
  {
    "plaque": "HE-111-PD",
    "vehiculeId": "V350",
    "anneeImmat": 2021
  },
  {
    "plaque": "VY-781-VG",
    "vehiculeId": "V350",
    "anneeImmat": 2021
  },
  {
    "plaque": "JN-702-FG",
    "vehiculeId": "V350",
    "anneeImmat": 2021
  },
  {
    "plaque": "FB-629-QL",
    "vehiculeId": "V350",
    "anneeImmat": 2021
  },
  {
    "plaque": "BX-952-DP",
    "vehiculeId": "V350",
    "anneeImmat": 2022
  },
  {
    "plaque": "CN-921-NF",
    "vehiculeId": "V350",
    "anneeImmat": 2022
  },
  {
    "plaque": "QN-194-RY",
    "vehiculeId": "V350",
    "anneeImmat": 2022
  },
  {
    "plaque": "SX-842-PS",
    "vehiculeId": "V351",
    "anneeImmat": 2022
  },
  {
    "plaque": "MG-193-DR",
    "vehiculeId": "V351",
    "anneeImmat": 2022
  },
  {
    "plaque": "FQ-587-ZE",
    "vehiculeId": "V351",
    "anneeImmat": 2022
  },
  {
    "plaque": "LE-169-BT",
    "vehiculeId": "V351",
    "anneeImmat": 2022
  },
  {
    "plaque": "NN-377-WB",
    "vehiculeId": "V351",
    "anneeImmat": 2023
  },
  {
    "plaque": "AT-418-CX",
    "vehiculeId": "V352",
    "anneeImmat": 2021
  },
  {
    "plaque": "BG-756-SC",
    "vehiculeId": "V352",
    "anneeImmat": 2021
  },
  {
    "plaque": "JW-271-PL",
    "vehiculeId": "V352",
    "anneeImmat": 2021
  },
  {
    "plaque": "RZ-815-RH",
    "vehiculeId": "V352",
    "anneeImmat": 2021
  },
  {
    "plaque": "QE-554-AT",
    "vehiculeId": "V352",
    "anneeImmat": 2022
  },
  {
    "plaque": "JY-174-WX",
    "vehiculeId": "V352",
    "anneeImmat": 2022
  },
  {
    "plaque": "PL-977-FL",
    "vehiculeId": "V352",
    "anneeImmat": 2022
  },
  {
    "plaque": "EP-927-AB",
    "vehiculeId": "V353",
    "anneeImmat": 2022
  },
  {
    "plaque": "XK-368-AD",
    "vehiculeId": "V353",
    "anneeImmat": 2022
  },
  {
    "plaque": "EP-952-TA",
    "vehiculeId": "V353",
    "anneeImmat": 2022
  },
  {
    "plaque": "WF-857-LQ",
    "vehiculeId": "V353",
    "anneeImmat": 2022
  },
  {
    "plaque": "BV-303-VL",
    "vehiculeId": "V354",
    "anneeImmat": 2023
  },
  {
    "plaque": "VA-868-MB",
    "vehiculeId": "V354",
    "anneeImmat": 2023
  },
  {
    "plaque": "EY-500-RS",
    "vehiculeId": "V354",
    "anneeImmat": 2023
  },
  {
    "plaque": "DV-963-TG",
    "vehiculeId": "V354",
    "anneeImmat": 2023
  },
  {
    "plaque": "PZ-978-ZP",
    "vehiculeId": "V354",
    "anneeImmat": 2024
  },
  {
    "plaque": "KC-105-RB",
    "vehiculeId": "V355",
    "anneeImmat": 2018
  },
  {
    "plaque": "JY-532-JM",
    "vehiculeId": "V355",
    "anneeImmat": 2018
  },
  {
    "plaque": "WW-673-WP",
    "vehiculeId": "V355",
    "anneeImmat": 2018
  },
  {
    "plaque": "SV-520-AQ",
    "vehiculeId": "V355",
    "anneeImmat": 2018
  },
  {
    "plaque": "CJ-676-LB",
    "vehiculeId": "V355",
    "anneeImmat": 2019
  },
  {
    "plaque": "PZ-192-FY",
    "vehiculeId": "V356",
    "anneeImmat": 2019
  },
  {
    "plaque": "QF-615-LE",
    "vehiculeId": "V356",
    "anneeImmat": 2019
  },
  {
    "plaque": "XV-130-BS",
    "vehiculeId": "V356",
    "anneeImmat": 2019
  },
  {
    "plaque": "FJ-433-KW",
    "vehiculeId": "V356",
    "anneeImmat": 2019
  },
  {
    "plaque": "GF-683-CY",
    "vehiculeId": "V357",
    "anneeImmat": 2020
  },
  {
    "plaque": "MY-417-KC",
    "vehiculeId": "V357",
    "anneeImmat": 2020
  },
  {
    "plaque": "TM-136-PQ",
    "vehiculeId": "V357",
    "anneeImmat": 2020
  },
  {
    "plaque": "FN-893-WA",
    "vehiculeId": "V357",
    "anneeImmat": 2020
  },
  {
    "plaque": "WM-789-VK",
    "vehiculeId": "V357",
    "anneeImmat": 2021
  },
  {
    "plaque": "BP-595-EA",
    "vehiculeId": "V358",
    "anneeImmat": 2021
  },
  {
    "plaque": "PC-790-XZ",
    "vehiculeId": "V358",
    "anneeImmat": 2021
  },
  {
    "plaque": "KQ-865-LV",
    "vehiculeId": "V358",
    "anneeImmat": 2021
  },
  {
    "plaque": "VJ-667-KL",
    "vehiculeId": "V358",
    "anneeImmat": 2021
  },
  {
    "plaque": "SC-503-FH",
    "vehiculeId": "V358",
    "anneeImmat": 2022
  },
  {
    "plaque": "TF-219-CA",
    "vehiculeId": "V358",
    "anneeImmat": 2022
  },
  {
    "plaque": "BF-934-CL",
    "vehiculeId": "V358",
    "anneeImmat": 2022
  },
  {
    "plaque": "PW-854-RL",
    "vehiculeId": "V359",
    "anneeImmat": 2022
  },
  {
    "plaque": "MX-654-AJ",
    "vehiculeId": "V359",
    "anneeImmat": 2022
  },
  {
    "plaque": "CX-234-KQ",
    "vehiculeId": "V359",
    "anneeImmat": 2022
  },
  {
    "plaque": "QL-762-XZ",
    "vehiculeId": "V359",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZA-152-HM",
    "vehiculeId": "V359",
    "anneeImmat": 2023
  },
  {
    "plaque": "XG-377-SG",
    "vehiculeId": "V359",
    "anneeImmat": 2023
  },
  {
    "plaque": "MX-645-NV",
    "vehiculeId": "V359",
    "anneeImmat": 2023
  },
  {
    "plaque": "PL-506-ZN",
    "vehiculeId": "V360",
    "anneeImmat": 2019
  },
  {
    "plaque": "RH-441-NL",
    "vehiculeId": "V360",
    "anneeImmat": 2019
  },
  {
    "plaque": "AT-980-MD",
    "vehiculeId": "V360",
    "anneeImmat": 2019
  },
  {
    "plaque": "WX-548-KT",
    "vehiculeId": "V360",
    "anneeImmat": 2019
  },
  {
    "plaque": "FL-963-XR",
    "vehiculeId": "V360",
    "anneeImmat": 2020
  },
  {
    "plaque": "LC-605-NR",
    "vehiculeId": "V360",
    "anneeImmat": 2020
  },
  {
    "plaque": "LP-895-KC",
    "vehiculeId": "V360",
    "anneeImmat": 2020
  },
  {
    "plaque": "TA-954-FB",
    "vehiculeId": "V361",
    "anneeImmat": 2020
  },
  {
    "plaque": "LQ-852-HB",
    "vehiculeId": "V361",
    "anneeImmat": 2020
  },
  {
    "plaque": "KC-441-DP",
    "vehiculeId": "V361",
    "anneeImmat": 2020
  },
  {
    "plaque": "PQ-328-DX",
    "vehiculeId": "V361",
    "anneeImmat": 2020
  },
  {
    "plaque": "NJ-645-NJ",
    "vehiculeId": "V361",
    "anneeImmat": 2021
  },
  {
    "plaque": "YM-974-RJ",
    "vehiculeId": "V361",
    "anneeImmat": 2021
  },
  {
    "plaque": "QA-383-BJ",
    "vehiculeId": "V361",
    "anneeImmat": 2021
  },
  {
    "plaque": "CY-738-WV",
    "vehiculeId": "V362",
    "anneeImmat": 2021
  },
  {
    "plaque": "TA-345-FX",
    "vehiculeId": "V362",
    "anneeImmat": 2021
  },
  {
    "plaque": "RH-355-VS",
    "vehiculeId": "V362",
    "anneeImmat": 2021
  },
  {
    "plaque": "WA-817-XK",
    "vehiculeId": "V362",
    "anneeImmat": 2021
  },
  {
    "plaque": "PY-783-PP",
    "vehiculeId": "V362",
    "anneeImmat": 2022
  },
  {
    "plaque": "SJ-288-BV",
    "vehiculeId": "V363",
    "anneeImmat": 2018
  },
  {
    "plaque": "MV-831-QA",
    "vehiculeId": "V363",
    "anneeImmat": 2018
  },
  {
    "plaque": "NK-924-AH",
    "vehiculeId": "V363",
    "anneeImmat": 2018
  },
  {
    "plaque": "BV-555-JP",
    "vehiculeId": "V363",
    "anneeImmat": 2018
  },
  {
    "plaque": "GY-676-VX",
    "vehiculeId": "V363",
    "anneeImmat": 2019
  },
  {
    "plaque": "FS-300-EN",
    "vehiculeId": "V363",
    "anneeImmat": 2019
  },
  {
    "plaque": "BY-633-YG",
    "vehiculeId": "V363",
    "anneeImmat": 2019
  },
  {
    "plaque": "BL-123-MT",
    "vehiculeId": "V364",
    "anneeImmat": 2019
  },
  {
    "plaque": "TA-546-ZL",
    "vehiculeId": "V364",
    "anneeImmat": 2019
  },
  {
    "plaque": "LG-713-LF",
    "vehiculeId": "V364",
    "anneeImmat": 2019
  },
  {
    "plaque": "HT-787-CP",
    "vehiculeId": "V364",
    "anneeImmat": 2019
  },
  {
    "plaque": "ML-573-CX",
    "vehiculeId": "V364",
    "anneeImmat": 2020
  },
  {
    "plaque": "EJ-867-HS",
    "vehiculeId": "V364",
    "anneeImmat": 2020
  },
  {
    "plaque": "JN-987-NL",
    "vehiculeId": "V364",
    "anneeImmat": 2020
  },
  {
    "plaque": "YY-453-LS",
    "vehiculeId": "V364",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZJ-967-PT",
    "vehiculeId": "V364",
    "anneeImmat": 2020
  },
  {
    "plaque": "YS-324-GT",
    "vehiculeId": "V365",
    "anneeImmat": 2020
  },
  {
    "plaque": "VK-562-QT",
    "vehiculeId": "V365",
    "anneeImmat": 2020
  },
  {
    "plaque": "MS-122-EB",
    "vehiculeId": "V365",
    "anneeImmat": 2020
  },
  {
    "plaque": "TM-838-WM",
    "vehiculeId": "V365",
    "anneeImmat": 2020
  },
  {
    "plaque": "VQ-463-TB",
    "vehiculeId": "V365",
    "anneeImmat": 2021
  },
  {
    "plaque": "AW-699-FH",
    "vehiculeId": "V366",
    "anneeImmat": 2021
  },
  {
    "plaque": "QX-840-SS",
    "vehiculeId": "V366",
    "anneeImmat": 2021
  },
  {
    "plaque": "GV-546-HP",
    "vehiculeId": "V366",
    "anneeImmat": 2021
  },
  {
    "plaque": "JD-400-BT",
    "vehiculeId": "V366",
    "anneeImmat": 2021
  },
  {
    "plaque": "GH-992-HW",
    "vehiculeId": "V366",
    "anneeImmat": 2022
  },
  {
    "plaque": "SX-135-QK",
    "vehiculeId": "V366",
    "anneeImmat": 2022
  },
  {
    "plaque": "MZ-308-YS",
    "vehiculeId": "V366",
    "anneeImmat": 2022
  },
  {
    "plaque": "FH-272-ME",
    "vehiculeId": "V367",
    "anneeImmat": 2022
  },
  {
    "plaque": "CA-732-XP",
    "vehiculeId": "V367",
    "anneeImmat": 2022
  },
  {
    "plaque": "CL-137-CW",
    "vehiculeId": "V367",
    "anneeImmat": 2022
  },
  {
    "plaque": "SN-913-NV",
    "vehiculeId": "V367",
    "anneeImmat": 2022
  },
  {
    "plaque": "LV-219-CF",
    "vehiculeId": "V367",
    "anneeImmat": 2023
  },
  {
    "plaque": "KL-553-NF",
    "vehiculeId": "V368",
    "anneeImmat": 2022
  },
  {
    "plaque": "NP-248-TZ",
    "vehiculeId": "V368",
    "anneeImmat": 2022
  },
  {
    "plaque": "LY-911-LG",
    "vehiculeId": "V368",
    "anneeImmat": 2022
  },
  {
    "plaque": "DF-785-YM",
    "vehiculeId": "V368",
    "anneeImmat": 2022
  },
  {
    "plaque": "SD-623-LQ",
    "vehiculeId": "V368",
    "anneeImmat": 2023
  },
  {
    "plaque": "DY-540-BQ",
    "vehiculeId": "V369",
    "anneeImmat": 2023
  },
  {
    "plaque": "JQ-305-JZ",
    "vehiculeId": "V369",
    "anneeImmat": 2023
  },
  {
    "plaque": "LK-754-XW",
    "vehiculeId": "V369",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZR-745-ER",
    "vehiculeId": "V369",
    "anneeImmat": 2023
  },
  {
    "plaque": "HH-356-XY",
    "vehiculeId": "V369",
    "anneeImmat": 2024
  },
  {
    "plaque": "EH-285-NW",
    "vehiculeId": "V369",
    "anneeImmat": 2024
  },
  {
    "plaque": "CH-767-BY",
    "vehiculeId": "V369",
    "anneeImmat": 2024
  },
  {
    "plaque": "SM-919-BG",
    "vehiculeId": "V370",
    "anneeImmat": 2017
  },
  {
    "plaque": "EV-588-QJ",
    "vehiculeId": "V370",
    "anneeImmat": 2017
  },
  {
    "plaque": "ZZ-244-TV",
    "vehiculeId": "V370",
    "anneeImmat": 2017
  },
  {
    "plaque": "VY-744-EH",
    "vehiculeId": "V370",
    "anneeImmat": 2017
  },
  {
    "plaque": "ZF-746-SG",
    "vehiculeId": "V370",
    "anneeImmat": 2018
  },
  {
    "plaque": "FA-543-RZ",
    "vehiculeId": "V370",
    "anneeImmat": 2018
  },
  {
    "plaque": "PT-304-XZ",
    "vehiculeId": "V370",
    "anneeImmat": 2018
  },
  {
    "plaque": "TE-374-HT",
    "vehiculeId": "V371",
    "anneeImmat": 2018
  },
  {
    "plaque": "JN-302-GP",
    "vehiculeId": "V371",
    "anneeImmat": 2018
  },
  {
    "plaque": "PH-143-FB",
    "vehiculeId": "V371",
    "anneeImmat": 2018
  },
  {
    "plaque": "NR-417-XL",
    "vehiculeId": "V371",
    "anneeImmat": 2018
  },
  {
    "plaque": "KD-399-QN",
    "vehiculeId": "V372",
    "anneeImmat": 2019
  },
  {
    "plaque": "KA-522-YG",
    "vehiculeId": "V372",
    "anneeImmat": 2019
  },
  {
    "plaque": "HS-806-LM",
    "vehiculeId": "V372",
    "anneeImmat": 2019
  },
  {
    "plaque": "QH-177-HA",
    "vehiculeId": "V372",
    "anneeImmat": 2019
  },
  {
    "plaque": "TG-976-DA",
    "vehiculeId": "V372",
    "anneeImmat": 2020
  },
  {
    "plaque": "EN-302-CX",
    "vehiculeId": "V372",
    "anneeImmat": 2020
  },
  {
    "plaque": "NR-455-RN",
    "vehiculeId": "V372",
    "anneeImmat": 2020
  },
  {
    "plaque": "MA-358-CQ",
    "vehiculeId": "V373",
    "anneeImmat": 2020
  },
  {
    "plaque": "VS-148-HJ",
    "vehiculeId": "V373",
    "anneeImmat": 2020
  },
  {
    "plaque": "TS-925-XX",
    "vehiculeId": "V373",
    "anneeImmat": 2020
  },
  {
    "plaque": "MV-743-WH",
    "vehiculeId": "V373",
    "anneeImmat": 2020
  },
  {
    "plaque": "BM-734-WB",
    "vehiculeId": "V373",
    "anneeImmat": 2021
  },
  {
    "plaque": "GW-458-MY",
    "vehiculeId": "V373",
    "anneeImmat": 2021
  },
  {
    "plaque": "HG-100-GC",
    "vehiculeId": "V373",
    "anneeImmat": 2021
  },
  {
    "plaque": "RN-683-NN",
    "vehiculeId": "V374",
    "anneeImmat": 2021
  },
  {
    "plaque": "FV-549-SN",
    "vehiculeId": "V374",
    "anneeImmat": 2021
  },
  {
    "plaque": "TB-279-HC",
    "vehiculeId": "V374",
    "anneeImmat": 2021
  },
  {
    "plaque": "PM-287-GK",
    "vehiculeId": "V374",
    "anneeImmat": 2021
  },
  {
    "plaque": "RW-660-GA",
    "vehiculeId": "V374",
    "anneeImmat": 2022
  },
  {
    "plaque": "HS-646-RM",
    "vehiculeId": "V374",
    "anneeImmat": 2022
  },
  {
    "plaque": "NC-301-ST",
    "vehiculeId": "V374",
    "anneeImmat": 2022
  },
  {
    "plaque": "QR-921-JL",
    "vehiculeId": "V375",
    "anneeImmat": 2018
  },
  {
    "plaque": "XR-687-GJ",
    "vehiculeId": "V375",
    "anneeImmat": 2018
  },
  {
    "plaque": "NT-367-JT",
    "vehiculeId": "V375",
    "anneeImmat": 2018
  },
  {
    "plaque": "QA-942-VH",
    "vehiculeId": "V375",
    "anneeImmat": 2018
  },
  {
    "plaque": "WX-456-EY",
    "vehiculeId": "V375",
    "anneeImmat": 2019
  },
  {
    "plaque": "QT-417-NS",
    "vehiculeId": "V375",
    "anneeImmat": 2019
  },
  {
    "plaque": "PP-407-HB",
    "vehiculeId": "V375",
    "anneeImmat": 2019
  },
  {
    "plaque": "DR-476-ML",
    "vehiculeId": "V376",
    "anneeImmat": 2019
  },
  {
    "plaque": "MK-356-PB",
    "vehiculeId": "V376",
    "anneeImmat": 2019
  },
  {
    "plaque": "MN-642-ZC",
    "vehiculeId": "V376",
    "anneeImmat": 2019
  },
  {
    "plaque": "XK-993-KD",
    "vehiculeId": "V376",
    "anneeImmat": 2019
  },
  {
    "plaque": "BH-265-CY",
    "vehiculeId": "V377",
    "anneeImmat": 2020
  },
  {
    "plaque": "HX-568-NW",
    "vehiculeId": "V377",
    "anneeImmat": 2020
  },
  {
    "plaque": "MH-236-QL",
    "vehiculeId": "V377",
    "anneeImmat": 2020
  },
  {
    "plaque": "FB-476-DW",
    "vehiculeId": "V377",
    "anneeImmat": 2020
  },
  {
    "plaque": "NC-328-ZC",
    "vehiculeId": "V377",
    "anneeImmat": 2021
  },
  {
    "plaque": "HF-562-SA",
    "vehiculeId": "V377",
    "anneeImmat": 2021
  },
  {
    "plaque": "BN-535-ZY",
    "vehiculeId": "V377",
    "anneeImmat": 2021
  },
  {
    "plaque": "RX-277-QJ",
    "vehiculeId": "V377",
    "anneeImmat": 2021
  },
  {
    "plaque": "HA-477-TF",
    "vehiculeId": "V377",
    "anneeImmat": 2021
  },
  {
    "plaque": "CQ-381-WV",
    "vehiculeId": "V378",
    "anneeImmat": 2021
  },
  {
    "plaque": "HJ-363-EM",
    "vehiculeId": "V378",
    "anneeImmat": 2021
  },
  {
    "plaque": "XX-618-SD",
    "vehiculeId": "V378",
    "anneeImmat": 2021
  },
  {
    "plaque": "WH-833-XH",
    "vehiculeId": "V378",
    "anneeImmat": 2021
  },
  {
    "plaque": "JM-392-ZJ",
    "vehiculeId": "V379",
    "anneeImmat": 1984
  },
  {
    "plaque": "XP-549-DK",
    "vehiculeId": "V379",
    "anneeImmat": 1984
  },
  {
    "plaque": "HJ-980-EL",
    "vehiculeId": "V379",
    "anneeImmat": 1984
  },
  {
    "plaque": "LK-747-HR",
    "vehiculeId": "V379",
    "anneeImmat": 1984
  },
  {
    "plaque": "VT-281-NF",
    "vehiculeId": "V379",
    "anneeImmat": 1985
  },
  {
    "plaque": "ZK-712-WN",
    "vehiculeId": "V379",
    "anneeImmat": 1985
  },
  {
    "plaque": "QA-929-EE",
    "vehiculeId": "V379",
    "anneeImmat": 1985
  },
  {
    "plaque": "JM-603-LH",
    "vehiculeId": "V380",
    "anneeImmat": 1985
  },
  {
    "plaque": "RG-781-CH",
    "vehiculeId": "V380",
    "anneeImmat": 1985
  },
  {
    "plaque": "QP-762-XF",
    "vehiculeId": "V380",
    "anneeImmat": 1985
  },
  {
    "plaque": "XC-344-AG",
    "vehiculeId": "V380",
    "anneeImmat": 1985
  },
  {
    "plaque": "VT-339-VZ",
    "vehiculeId": "V381",
    "anneeImmat": 1986
  },
  {
    "plaque": "BB-815-EP",
    "vehiculeId": "V381",
    "anneeImmat": 1986
  },
  {
    "plaque": "XG-575-CR",
    "vehiculeId": "V381",
    "anneeImmat": 1986
  },
  {
    "plaque": "EG-650-DF",
    "vehiculeId": "V381",
    "anneeImmat": 1986
  },
  {
    "plaque": "YV-817-QR",
    "vehiculeId": "V381",
    "anneeImmat": 1987
  },
  {
    "plaque": "JQ-462-JT",
    "vehiculeId": "V382",
    "anneeImmat": 1977
  },
  {
    "plaque": "LW-843-MS",
    "vehiculeId": "V382",
    "anneeImmat": 1977
  },
  {
    "plaque": "QK-930-LW",
    "vehiculeId": "V382",
    "anneeImmat": 1977
  },
  {
    "plaque": "QZ-190-NH",
    "vehiculeId": "V382",
    "anneeImmat": 1977
  },
  {
    "plaque": "TM-182-NW",
    "vehiculeId": "V382",
    "anneeImmat": 1978
  },
  {
    "plaque": "QL-644-TL",
    "vehiculeId": "V382",
    "anneeImmat": 1978
  },
  {
    "plaque": "YR-756-KX",
    "vehiculeId": "V382",
    "anneeImmat": 1978
  },
  {
    "plaque": "BB-157-HH",
    "vehiculeId": "V382",
    "anneeImmat": 1978
  },
  {
    "plaque": "GE-286-YR",
    "vehiculeId": "V382",
    "anneeImmat": 1978
  },
  {
    "plaque": "FK-258-CM",
    "vehiculeId": "V383",
    "anneeImmat": 1978
  },
  {
    "plaque": "RD-915-HQ",
    "vehiculeId": "V383",
    "anneeImmat": 1978
  },
  {
    "plaque": "WV-342-XJ",
    "vehiculeId": "V383",
    "anneeImmat": 1978
  },
  {
    "plaque": "HG-738-RN",
    "vehiculeId": "V383",
    "anneeImmat": 1978
  },
  {
    "plaque": "EK-895-SS",
    "vehiculeId": "V383",
    "anneeImmat": 1979
  },
  {
    "plaque": "YV-117-EF",
    "vehiculeId": "V384",
    "anneeImmat": 1979
  },
  {
    "plaque": "FQ-370-RR",
    "vehiculeId": "V384",
    "anneeImmat": 1979
  },
  {
    "plaque": "SD-192-VP",
    "vehiculeId": "V384",
    "anneeImmat": 1979
  },
  {
    "plaque": "KV-509-SE",
    "vehiculeId": "V384",
    "anneeImmat": 1979
  },
  {
    "plaque": "EY-510-YZ",
    "vehiculeId": "V384",
    "anneeImmat": 1980
  },
  {
    "plaque": "KY-134-XN",
    "vehiculeId": "V384",
    "anneeImmat": 1980
  },
  {
    "plaque": "HS-237-WY",
    "vehiculeId": "V384",
    "anneeImmat": 1980
  },
  {
    "plaque": "BL-282-BS",
    "vehiculeId": "V385",
    "anneeImmat": 1980
  },
  {
    "plaque": "RE-673-AB",
    "vehiculeId": "V385",
    "anneeImmat": 1980
  },
  {
    "plaque": "HQ-896-BN",
    "vehiculeId": "V385",
    "anneeImmat": 1980
  },
  {
    "plaque": "NG-101-DF",
    "vehiculeId": "V385",
    "anneeImmat": 1980
  },
  {
    "plaque": "JB-270-AV",
    "vehiculeId": "V385",
    "anneeImmat": 1981
  },
  {
    "plaque": "PP-623-AC",
    "vehiculeId": "V386",
    "anneeImmat": 1981
  },
  {
    "plaque": "TW-223-NA",
    "vehiculeId": "V386",
    "anneeImmat": 1981
  },
  {
    "plaque": "PR-408-VD",
    "vehiculeId": "V386",
    "anneeImmat": 1981
  },
  {
    "plaque": "CG-882-AG",
    "vehiculeId": "V386",
    "anneeImmat": 1981
  },
  {
    "plaque": "EF-758-GE",
    "vehiculeId": "V386",
    "anneeImmat": 1982
  },
  {
    "plaque": "VM-815-BS",
    "vehiculeId": "V386",
    "anneeImmat": 1982
  },
  {
    "plaque": "GL-301-MC",
    "vehiculeId": "V386",
    "anneeImmat": 1982
  },
  {
    "plaque": "JY-348-AT",
    "vehiculeId": "V387",
    "anneeImmat": 1982
  },
  {
    "plaque": "HK-860-QH",
    "vehiculeId": "V387",
    "anneeImmat": 1982
  },
  {
    "plaque": "MY-325-MP",
    "vehiculeId": "V387",
    "anneeImmat": 1982
  },
  {
    "plaque": "DP-870-KL",
    "vehiculeId": "V387",
    "anneeImmat": 1982
  },
  {
    "plaque": "BH-499-VR",
    "vehiculeId": "V387",
    "anneeImmat": 1983
  },
  {
    "plaque": "VC-325-WJ",
    "vehiculeId": "V388",
    "anneeImmat": 1982
  },
  {
    "plaque": "WM-952-YH",
    "vehiculeId": "V388",
    "anneeImmat": 1982
  },
  {
    "plaque": "CP-629-DJ",
    "vehiculeId": "V388",
    "anneeImmat": 1982
  },
  {
    "plaque": "QH-497-CP",
    "vehiculeId": "V388",
    "anneeImmat": 1982
  },
  {
    "plaque": "BF-393-HP",
    "vehiculeId": "V388",
    "anneeImmat": 1983
  },
  {
    "plaque": "WM-338-ZT",
    "vehiculeId": "V389",
    "anneeImmat": 1983
  },
  {
    "plaque": "AY-551-KP",
    "vehiculeId": "V389",
    "anneeImmat": 1983
  },
  {
    "plaque": "GP-208-VB",
    "vehiculeId": "V389",
    "anneeImmat": 1983
  },
  {
    "plaque": "PM-531-QJ",
    "vehiculeId": "V389",
    "anneeImmat": 1983
  },
  {
    "plaque": "JL-264-SR",
    "vehiculeId": "V389",
    "anneeImmat": 1984
  },
  {
    "plaque": "RY-619-HX",
    "vehiculeId": "V389",
    "anneeImmat": 1984
  },
  {
    "plaque": "KK-244-BR",
    "vehiculeId": "V389",
    "anneeImmat": 1984
  },
  {
    "plaque": "LZ-390-LC",
    "vehiculeId": "V390",
    "anneeImmat": 1984
  },
  {
    "plaque": "AL-119-DC",
    "vehiculeId": "V390",
    "anneeImmat": 1984
  },
  {
    "plaque": "AD-543-VL",
    "vehiculeId": "V390",
    "anneeImmat": 1984
  },
  {
    "plaque": "EV-764-RB",
    "vehiculeId": "V390",
    "anneeImmat": 1984
  },
  {
    "plaque": "RF-991-GR",
    "vehiculeId": "V390",
    "anneeImmat": 1985
  },
  {
    "plaque": "AW-823-CL",
    "vehiculeId": "V391",
    "anneeImmat": 1987
  },
  {
    "plaque": "SV-911-QY",
    "vehiculeId": "V391",
    "anneeImmat": 1987
  },
  {
    "plaque": "XX-703-BK",
    "vehiculeId": "V391",
    "anneeImmat": 1987
  },
  {
    "plaque": "JY-736-RE",
    "vehiculeId": "V391",
    "anneeImmat": 1987
  },
  {
    "plaque": "AL-267-RL",
    "vehiculeId": "V391",
    "anneeImmat": 1988
  },
  {
    "plaque": "GT-959-HT",
    "vehiculeId": "V391",
    "anneeImmat": 1988
  },
  {
    "plaque": "JV-299-VP",
    "vehiculeId": "V391",
    "anneeImmat": 1988
  },
  {
    "plaque": "DW-428-VD",
    "vehiculeId": "V392",
    "anneeImmat": 1988
  },
  {
    "plaque": "DN-550-YE",
    "vehiculeId": "V392",
    "anneeImmat": 1988
  },
  {
    "plaque": "HQ-113-PG",
    "vehiculeId": "V392",
    "anneeImmat": 1988
  },
  {
    "plaque": "ES-163-XK",
    "vehiculeId": "V392",
    "anneeImmat": 1988
  },
  {
    "plaque": "QS-103-RE",
    "vehiculeId": "V392",
    "anneeImmat": 1989
  },
  {
    "plaque": "AP-158-JJ",
    "vehiculeId": "V392",
    "anneeImmat": 1989
  },
  {
    "plaque": "CZ-668-VF",
    "vehiculeId": "V392",
    "anneeImmat": 1989
  },
  {
    "plaque": "RY-504-JT",
    "vehiculeId": "V392",
    "anneeImmat": 1989
  },
  {
    "plaque": "HE-607-XV",
    "vehiculeId": "V392",
    "anneeImmat": 1989
  },
  {
    "plaque": "SH-889-XG",
    "vehiculeId": "V393",
    "anneeImmat": 1989
  },
  {
    "plaque": "SG-669-JC",
    "vehiculeId": "V393",
    "anneeImmat": 1989
  },
  {
    "plaque": "JH-823-JS",
    "vehiculeId": "V393",
    "anneeImmat": 1989
  },
  {
    "plaque": "ZW-482-BX",
    "vehiculeId": "V393",
    "anneeImmat": 1989
  },
  {
    "plaque": "RC-129-BJ",
    "vehiculeId": "V393",
    "anneeImmat": 1990
  },
  {
    "plaque": "MV-675-LY",
    "vehiculeId": "V393",
    "anneeImmat": 1990
  },
  {
    "plaque": "GL-272-XE",
    "vehiculeId": "V393",
    "anneeImmat": 1990
  },
  {
    "plaque": "MD-897-EF",
    "vehiculeId": "V393",
    "anneeImmat": 1990
  },
  {
    "plaque": "ZX-573-YK",
    "vehiculeId": "V393",
    "anneeImmat": 1990
  },
  {
    "plaque": "TN-799-XR",
    "vehiculeId": "V394",
    "anneeImmat": 1990
  },
  {
    "plaque": "QC-365-VN",
    "vehiculeId": "V394",
    "anneeImmat": 1990
  },
  {
    "plaque": "BD-775-PF",
    "vehiculeId": "V394",
    "anneeImmat": 1990
  },
  {
    "plaque": "YK-119-SZ",
    "vehiculeId": "V394",
    "anneeImmat": 1990
  },
  {
    "plaque": "SW-307-HK",
    "vehiculeId": "V394",
    "anneeImmat": 1991
  },
  {
    "plaque": "ES-457-PP",
    "vehiculeId": "V395",
    "anneeImmat": 2018
  },
  {
    "plaque": "AH-663-VT",
    "vehiculeId": "V395",
    "anneeImmat": 2018
  },
  {
    "plaque": "ZF-228-JQ",
    "vehiculeId": "V395",
    "anneeImmat": 2018
  },
  {
    "plaque": "RB-806-FH",
    "vehiculeId": "V395",
    "anneeImmat": 2018
  },
  {
    "plaque": "QH-416-GA",
    "vehiculeId": "V395",
    "anneeImmat": 2019
  },
  {
    "plaque": "XL-666-BH",
    "vehiculeId": "V395",
    "anneeImmat": 2019
  },
  {
    "plaque": "NZ-389-AW",
    "vehiculeId": "V395",
    "anneeImmat": 2019
  },
  {
    "plaque": "NX-853-NA",
    "vehiculeId": "V396",
    "anneeImmat": 2019
  },
  {
    "plaque": "FP-321-WP",
    "vehiculeId": "V396",
    "anneeImmat": 2019
  },
  {
    "plaque": "CF-287-AD",
    "vehiculeId": "V396",
    "anneeImmat": 2019
  },
  {
    "plaque": "CV-377-FM",
    "vehiculeId": "V396",
    "anneeImmat": 2019
  },
  {
    "plaque": "BZ-678-AP",
    "vehiculeId": "V396",
    "anneeImmat": 2020
  },
  {
    "plaque": "TT-717-SA",
    "vehiculeId": "V397",
    "anneeImmat": 2020
  },
  {
    "plaque": "QL-108-GN",
    "vehiculeId": "V397",
    "anneeImmat": 2020
  },
  {
    "plaque": "JB-246-GC",
    "vehiculeId": "V397",
    "anneeImmat": 2020
  },
  {
    "plaque": "RK-714-MX",
    "vehiculeId": "V397",
    "anneeImmat": 2020
  },
  {
    "plaque": "RS-904-WQ",
    "vehiculeId": "V397",
    "anneeImmat": 2021
  },
  {
    "plaque": "PZ-687-NM",
    "vehiculeId": "V397",
    "anneeImmat": 2021
  },
  {
    "plaque": "TC-474-JE",
    "vehiculeId": "V397",
    "anneeImmat": 2021
  },
  {
    "plaque": "KL-127-AZ",
    "vehiculeId": "V398",
    "anneeImmat": 2021
  },
  {
    "plaque": "WE-899-ZN",
    "vehiculeId": "V398",
    "anneeImmat": 2021
  },
  {
    "plaque": "VB-929-CH",
    "vehiculeId": "V398",
    "anneeImmat": 2021
  },
  {
    "plaque": "RP-713-WX",
    "vehiculeId": "V398",
    "anneeImmat": 2021
  },
  {
    "plaque": "BS-828-BE",
    "vehiculeId": "V398",
    "anneeImmat": 2022
  },
  {
    "plaque": "HG-715-BE",
    "vehiculeId": "V398",
    "anneeImmat": 2022
  },
  {
    "plaque": "FR-232-XN",
    "vehiculeId": "V398",
    "anneeImmat": 2022
  },
  {
    "plaque": "DZ-794-GB",
    "vehiculeId": "V399",
    "anneeImmat": 2020
  },
  {
    "plaque": "MF-961-YR",
    "vehiculeId": "V399",
    "anneeImmat": 2020
  },
  {
    "plaque": "MK-620-PH",
    "vehiculeId": "V399",
    "anneeImmat": 2020
  },
  {
    "plaque": "BD-459-KB",
    "vehiculeId": "V399",
    "anneeImmat": 2020
  },
  {
    "plaque": "EF-945-KZ",
    "vehiculeId": "V399",
    "anneeImmat": 2021
  },
  {
    "plaque": "JC-694-VV",
    "vehiculeId": "V400",
    "anneeImmat": 2021
  },
  {
    "plaque": "XR-904-BJ",
    "vehiculeId": "V400",
    "anneeImmat": 2021
  },
  {
    "plaque": "JF-989-GF",
    "vehiculeId": "V400",
    "anneeImmat": 2021
  },
  {
    "plaque": "PJ-229-QW",
    "vehiculeId": "V400",
    "anneeImmat": 2021
  },
  {
    "plaque": "LB-253-DK",
    "vehiculeId": "V400",
    "anneeImmat": 2022
  },
  {
    "plaque": "CP-712-DK",
    "vehiculeId": "V401",
    "anneeImmat": 2022
  },
  {
    "plaque": "YW-752-WE",
    "vehiculeId": "V401",
    "anneeImmat": 2022
  },
  {
    "plaque": "EQ-841-VC",
    "vehiculeId": "V401",
    "anneeImmat": 2022
  },
  {
    "plaque": "ET-873-AH",
    "vehiculeId": "V401",
    "anneeImmat": 2022
  },
  {
    "plaque": "JZ-452-XY",
    "vehiculeId": "V402",
    "anneeImmat": 2021
  },
  {
    "plaque": "AR-636-YC",
    "vehiculeId": "V402",
    "anneeImmat": 2021
  },
  {
    "plaque": "GR-459-GG",
    "vehiculeId": "V402",
    "anneeImmat": 2021
  },
  {
    "plaque": "JR-625-XP",
    "vehiculeId": "V402",
    "anneeImmat": 2021
  },
  {
    "plaque": "LY-597-BH",
    "vehiculeId": "V402",
    "anneeImmat": 2022
  },
  {
    "plaque": "SF-270-LH",
    "vehiculeId": "V402",
    "anneeImmat": 2022
  },
  {
    "plaque": "WK-678-BP",
    "vehiculeId": "V402",
    "anneeImmat": 2022
  },
  {
    "plaque": "HV-888-BJ",
    "vehiculeId": "V403",
    "anneeImmat": 2022
  },
  {
    "plaque": "HG-265-NR",
    "vehiculeId": "V403",
    "anneeImmat": 2022
  },
  {
    "plaque": "EM-613-TG",
    "vehiculeId": "V403",
    "anneeImmat": 2022
  },
  {
    "plaque": "FQ-927-ZF",
    "vehiculeId": "V403",
    "anneeImmat": 2022
  },
  {
    "plaque": "HA-379-YX",
    "vehiculeId": "V403",
    "anneeImmat": 2023
  },
  {
    "plaque": "AJ-716-ML",
    "vehiculeId": "V404",
    "anneeImmat": 2023
  },
  {
    "plaque": "BB-675-TY",
    "vehiculeId": "V404",
    "anneeImmat": 2023
  },
  {
    "plaque": "VP-362-RH",
    "vehiculeId": "V404",
    "anneeImmat": 2023
  },
  {
    "plaque": "NX-891-BE",
    "vehiculeId": "V404",
    "anneeImmat": 2023
  },
  {
    "plaque": "AY-753-KS",
    "vehiculeId": "V405",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZR-268-JL",
    "vehiculeId": "V405",
    "anneeImmat": 2021
  },
  {
    "plaque": "RN-463-AT",
    "vehiculeId": "V405",
    "anneeImmat": 2021
  },
  {
    "plaque": "XW-508-DB",
    "vehiculeId": "V405",
    "anneeImmat": 2021
  },
  {
    "plaque": "HB-100-KM",
    "vehiculeId": "V406",
    "anneeImmat": 2022
  },
  {
    "plaque": "BR-265-LN",
    "vehiculeId": "V406",
    "anneeImmat": 2022
  },
  {
    "plaque": "JP-779-VD",
    "vehiculeId": "V406",
    "anneeImmat": 2022
  },
  {
    "plaque": "LL-863-QB",
    "vehiculeId": "V406",
    "anneeImmat": 2022
  },
  {
    "plaque": "JX-184-ND",
    "vehiculeId": "V406",
    "anneeImmat": 2023
  },
  {
    "plaque": "BB-955-EB",
    "vehiculeId": "V406",
    "anneeImmat": 2023
  },
  {
    "plaque": "RL-180-ZD",
    "vehiculeId": "V406",
    "anneeImmat": 2023
  },
  {
    "plaque": "SH-751-NV",
    "vehiculeId": "V407",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZW-466-BE",
    "vehiculeId": "V407",
    "anneeImmat": 2023
  },
  {
    "plaque": "FG-144-ZA",
    "vehiculeId": "V407",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZY-947-RR",
    "vehiculeId": "V407",
    "anneeImmat": 2023
  },
  {
    "plaque": "FE-393-BJ",
    "vehiculeId": "V407",
    "anneeImmat": 2024
  },
  {
    "plaque": "MR-975-QC",
    "vehiculeId": "V407",
    "anneeImmat": 2024
  },
  {
    "plaque": "KK-749-XH",
    "vehiculeId": "V407",
    "anneeImmat": 2024
  },
  {
    "plaque": "VK-383-LD",
    "vehiculeId": "V408",
    "anneeImmat": 2021
  },
  {
    "plaque": "DY-791-SG",
    "vehiculeId": "V408",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZL-444-JG",
    "vehiculeId": "V408",
    "anneeImmat": 2021
  },
  {
    "plaque": "LZ-339-SV",
    "vehiculeId": "V408",
    "anneeImmat": 2021
  },
  {
    "plaque": "ET-274-SH",
    "vehiculeId": "V408",
    "anneeImmat": 2022
  },
  {
    "plaque": "CA-117-XG",
    "vehiculeId": "V408",
    "anneeImmat": 2022
  },
  {
    "plaque": "WS-248-HF",
    "vehiculeId": "V408",
    "anneeImmat": 2022
  },
  {
    "plaque": "LG-674-JP",
    "vehiculeId": "V408",
    "anneeImmat": 2022
  },
  {
    "plaque": "BD-685-VC",
    "vehiculeId": "V408",
    "anneeImmat": 2022
  },
  {
    "plaque": "BT-468-VN",
    "vehiculeId": "V409",
    "anneeImmat": 2022
  },
  {
    "plaque": "VJ-950-WY",
    "vehiculeId": "V409",
    "anneeImmat": 2022
  },
  {
    "plaque": "EQ-895-VK",
    "vehiculeId": "V409",
    "anneeImmat": 2022
  },
  {
    "plaque": "AV-323-DQ",
    "vehiculeId": "V409",
    "anneeImmat": 2022
  },
  {
    "plaque": "NS-272-PB",
    "vehiculeId": "V409",
    "anneeImmat": 2023
  },
  {
    "plaque": "PS-529-EN",
    "vehiculeId": "V409",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZS-830-FM",
    "vehiculeId": "V409",
    "anneeImmat": 2023
  },
  {
    "plaque": "DF-556-JY",
    "vehiculeId": "V409",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZW-455-MG",
    "vehiculeId": "V409",
    "anneeImmat": 2023
  },
  {
    "plaque": "LE-108-FX",
    "vehiculeId": "V410",
    "anneeImmat": 2023
  },
  {
    "plaque": "DG-918-HH",
    "vehiculeId": "V410",
    "anneeImmat": 2023
  },
  {
    "plaque": "ED-466-PR",
    "vehiculeId": "V410",
    "anneeImmat": 2023
  },
  {
    "plaque": "ZD-568-CQ",
    "vehiculeId": "V410",
    "anneeImmat": 2023
  },
  {
    "plaque": "AX-549-RK",
    "vehiculeId": "V411",
    "anneeImmat": 2022
  },
  {
    "plaque": "VA-498-LR",
    "vehiculeId": "V411",
    "anneeImmat": 2022
  },
  {
    "plaque": "MS-350-PG",
    "vehiculeId": "V411",
    "anneeImmat": 2022
  },
  {
    "plaque": "AW-395-JR",
    "vehiculeId": "V411",
    "anneeImmat": 2022
  },
  {
    "plaque": "QF-209-MS",
    "vehiculeId": "V412",
    "anneeImmat": 2023
  },
  {
    "plaque": "QZ-748-LT",
    "vehiculeId": "V412",
    "anneeImmat": 2023
  },
  {
    "plaque": "KT-758-YS",
    "vehiculeId": "V412",
    "anneeImmat": 2023
  },
  {
    "plaque": "AB-954-YY",
    "vehiculeId": "V412",
    "anneeImmat": 2023
  },
  {
    "plaque": "BP-511-PL",
    "vehiculeId": "V412",
    "anneeImmat": 2024
  },
  {
    "plaque": "AB-694-VZ",
    "vehiculeId": "V412",
    "anneeImmat": 2024
  },
  {
    "plaque": "XB-435-NC",
    "vehiculeId": "V412",
    "anneeImmat": 2024
  },
  {
    "plaque": "LE-874-RY",
    "vehiculeId": "V413",
    "anneeImmat": 2022
  },
  {
    "plaque": "HL-151-GP",
    "vehiculeId": "V413",
    "anneeImmat": 2022
  },
  {
    "plaque": "KK-948-FC",
    "vehiculeId": "V413",
    "anneeImmat": 2022
  },
  {
    "plaque": "HV-826-WX",
    "vehiculeId": "V413",
    "anneeImmat": 2022
  },
  {
    "plaque": "SP-768-WA",
    "vehiculeId": "V414",
    "anneeImmat": 2023
  },
  {
    "plaque": "CF-796-CP",
    "vehiculeId": "V414",
    "anneeImmat": 2023
  },
  {
    "plaque": "XR-451-VW",
    "vehiculeId": "V414",
    "anneeImmat": 2023
  },
  {
    "plaque": "VL-470-VF",
    "vehiculeId": "V414",
    "anneeImmat": 2023
  },
  {
    "plaque": "BB-245-AZ",
    "vehiculeId": "V414",
    "anneeImmat": 2024
  },
  {
    "plaque": "HJ-973-GF",
    "vehiculeId": "V415",
    "anneeImmat": 2023
  },
  {
    "plaque": "XL-658-GG",
    "vehiculeId": "V415",
    "anneeImmat": 2023
  },
  {
    "plaque": "GE-932-MK",
    "vehiculeId": "V415",
    "anneeImmat": 2023
  },
  {
    "plaque": "WX-559-LH",
    "vehiculeId": "V415",
    "anneeImmat": 2023
  },
  {
    "plaque": "MP-790-RH",
    "vehiculeId": "V416",
    "anneeImmat": 2019
  },
  {
    "plaque": "ES-635-PX",
    "vehiculeId": "V416",
    "anneeImmat": 2019
  },
  {
    "plaque": "PJ-984-YA",
    "vehiculeId": "V416",
    "anneeImmat": 2019
  },
  {
    "plaque": "FW-780-YB",
    "vehiculeId": "V416",
    "anneeImmat": 2019
  },
  {
    "plaque": "QE-218-DN",
    "vehiculeId": "V416",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZM-889-TK",
    "vehiculeId": "V416",
    "anneeImmat": 2020
  },
  {
    "plaque": "HJ-604-YV",
    "vehiculeId": "V416",
    "anneeImmat": 2020
  },
  {
    "plaque": "NV-321-PC",
    "vehiculeId": "V417",
    "anneeImmat": 2020
  },
  {
    "plaque": "RA-929-ZA",
    "vehiculeId": "V417",
    "anneeImmat": 2020
  },
  {
    "plaque": "MB-961-RD",
    "vehiculeId": "V417",
    "anneeImmat": 2020
  },
  {
    "plaque": "GN-219-WD",
    "vehiculeId": "V417",
    "anneeImmat": 2020
  },
  {
    "plaque": "GV-862-WW",
    "vehiculeId": "V417",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZS-671-NA",
    "vehiculeId": "V418",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZK-586-XZ",
    "vehiculeId": "V418",
    "anneeImmat": 2021
  },
  {
    "plaque": "RJ-630-DJ",
    "vehiculeId": "V418",
    "anneeImmat": 2021
  },
  {
    "plaque": "VQ-325-HB",
    "vehiculeId": "V418",
    "anneeImmat": 2021
  },
  {
    "plaque": "XH-619-FW",
    "vehiculeId": "V418",
    "anneeImmat": 2022
  },
  {
    "plaque": "NQ-788-PY",
    "vehiculeId": "V418",
    "anneeImmat": 2022
  },
  {
    "plaque": "DR-700-YS",
    "vehiculeId": "V418",
    "anneeImmat": 2022
  },
  {
    "plaque": "CY-292-GC",
    "vehiculeId": "V418",
    "anneeImmat": 2022
  },
  {
    "plaque": "ST-199-FH",
    "vehiculeId": "V418",
    "anneeImmat": 2022
  },
  {
    "plaque": "PB-896-SZ",
    "vehiculeId": "V419",
    "anneeImmat": 2022
  },
  {
    "plaque": "EN-222-WA",
    "vehiculeId": "V419",
    "anneeImmat": 2022
  },
  {
    "plaque": "FM-532-SX",
    "vehiculeId": "V419",
    "anneeImmat": 2022
  },
  {
    "plaque": "VF-332-AF",
    "vehiculeId": "V419",
    "anneeImmat": 2022
  },
  {
    "plaque": "HC-417-VZ",
    "vehiculeId": "V420",
    "anneeImmat": 2017
  },
  {
    "plaque": "FY-228-XW",
    "vehiculeId": "V420",
    "anneeImmat": 2017
  },
  {
    "plaque": "TP-361-ZY",
    "vehiculeId": "V420",
    "anneeImmat": 2017
  },
  {
    "plaque": "DM-617-LW",
    "vehiculeId": "V420",
    "anneeImmat": 2017
  },
  {
    "plaque": "HP-994-PD",
    "vehiculeId": "V420",
    "anneeImmat": 2018
  },
  {
    "plaque": "XZ-316-NB",
    "vehiculeId": "V420",
    "anneeImmat": 2018
  },
  {
    "plaque": "MM-869-BB",
    "vehiculeId": "V420",
    "anneeImmat": 2018
  },
  {
    "plaque": "WZ-673-LM",
    "vehiculeId": "V421",
    "anneeImmat": 2018
  },
  {
    "plaque": "CW-353-RN",
    "vehiculeId": "V421",
    "anneeImmat": 2018
  },
  {
    "plaque": "VK-425-KT",
    "vehiculeId": "V421",
    "anneeImmat": 2018
  },
  {
    "plaque": "XJ-530-JF",
    "vehiculeId": "V421",
    "anneeImmat": 2018
  },
  {
    "plaque": "KC-341-RM",
    "vehiculeId": "V421",
    "anneeImmat": 2019
  },
  {
    "plaque": "SB-596-HP",
    "vehiculeId": "V421",
    "anneeImmat": 2019
  },
  {
    "plaque": "VS-803-XE",
    "vehiculeId": "V421",
    "anneeImmat": 2019
  },
  {
    "plaque": "XL-153-GS",
    "vehiculeId": "V421",
    "anneeImmat": 2019
  },
  {
    "plaque": "NM-688-QK",
    "vehiculeId": "V421",
    "anneeImmat": 2019
  },
  {
    "plaque": "PC-667-CQ",
    "vehiculeId": "V422",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZA-140-AC",
    "vehiculeId": "V422",
    "anneeImmat": 2019
  },
  {
    "plaque": "RD-992-GS",
    "vehiculeId": "V422",
    "anneeImmat": 2019
  },
  {
    "plaque": "WD-144-VK",
    "vehiculeId": "V422",
    "anneeImmat": 2019
  },
  {
    "plaque": "WW-359-KL",
    "vehiculeId": "V422",
    "anneeImmat": 2020
  },
  {
    "plaque": "AF-128-NM",
    "vehiculeId": "V422",
    "anneeImmat": 2020
  },
  {
    "plaque": "YZ-622-BZ",
    "vehiculeId": "V422",
    "anneeImmat": 2020
  },
  {
    "plaque": "WY-509-MQ",
    "vehiculeId": "V423",
    "anneeImmat": 2018
  },
  {
    "plaque": "SZ-903-CF",
    "vehiculeId": "V423",
    "anneeImmat": 2018
  },
  {
    "plaque": "WA-809-QW",
    "vehiculeId": "V423",
    "anneeImmat": 2018
  },
  {
    "plaque": "SX-395-JC",
    "vehiculeId": "V423",
    "anneeImmat": 2018
  },
  {
    "plaque": "QZ-685-NN",
    "vehiculeId": "V423",
    "anneeImmat": 2019
  },
  {
    "plaque": "TD-949-FC",
    "vehiculeId": "V423",
    "anneeImmat": 2019
  },
  {
    "plaque": "ZC-805-NP",
    "vehiculeId": "V423",
    "anneeImmat": 2019
  },
  {
    "plaque": "SE-669-ES",
    "vehiculeId": "V424",
    "anneeImmat": 2019
  },
  {
    "plaque": "GW-132-RE",
    "vehiculeId": "V424",
    "anneeImmat": 2019
  },
  {
    "plaque": "MS-338-FE",
    "vehiculeId": "V424",
    "anneeImmat": 2019
  },
  {
    "plaque": "JD-114-TT",
    "vehiculeId": "V424",
    "anneeImmat": 2019
  },
  {
    "plaque": "TM-569-QM",
    "vehiculeId": "V424",
    "anneeImmat": 2020
  },
  {
    "plaque": "VX-603-CZ",
    "vehiculeId": "V425",
    "anneeImmat": 2020
  },
  {
    "plaque": "WC-275-PG",
    "vehiculeId": "V425",
    "anneeImmat": 2020
  },
  {
    "plaque": "SM-639-EE",
    "vehiculeId": "V425",
    "anneeImmat": 2020
  },
  {
    "plaque": "NQ-969-FE",
    "vehiculeId": "V425",
    "anneeImmat": 2020
  },
  {
    "plaque": "BM-195-NV",
    "vehiculeId": "V425",
    "anneeImmat": 2021
  },
  {
    "plaque": "RE-289-QC",
    "vehiculeId": "V425",
    "anneeImmat": 2021
  },
  {
    "plaque": "TD-173-LK",
    "vehiculeId": "V425",
    "anneeImmat": 2021
  },
  {
    "plaque": "WE-696-PJ",
    "vehiculeId": "V426",
    "anneeImmat": 2021
  },
  {
    "plaque": "VZ-691-RS",
    "vehiculeId": "V426",
    "anneeImmat": 2021
  },
  {
    "plaque": "XG-387-MC",
    "vehiculeId": "V426",
    "anneeImmat": 2021
  },
  {
    "plaque": "XK-470-KH",
    "vehiculeId": "V426",
    "anneeImmat": 2021
  },
  {
    "plaque": "KG-570-RK",
    "vehiculeId": "V426",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZD-427-XM",
    "vehiculeId": "V427",
    "anneeImmat": 2022
  },
  {
    "plaque": "NE-735-DJ",
    "vehiculeId": "V427",
    "anneeImmat": 2022
  },
  {
    "plaque": "HT-995-BH",
    "vehiculeId": "V427",
    "anneeImmat": 2022
  },
  {
    "plaque": "SD-438-RY",
    "vehiculeId": "V427",
    "anneeImmat": 2022
  },
  {
    "plaque": "FD-102-EW",
    "vehiculeId": "V427",
    "anneeImmat": 2023
  },
  {
    "plaque": "QG-545-JB",
    "vehiculeId": "V427",
    "anneeImmat": 2023
  },
  {
    "plaque": "RZ-330-CR",
    "vehiculeId": "V427",
    "anneeImmat": 2023
  },
  {
    "plaque": "BP-573-PD",
    "vehiculeId": "V428",
    "anneeImmat": 2019
  },
  {
    "plaque": "JM-633-DF",
    "vehiculeId": "V428",
    "anneeImmat": 2019
  },
  {
    "plaque": "MW-966-AT",
    "vehiculeId": "V428",
    "anneeImmat": 2019
  },
  {
    "plaque": "BA-477-CX",
    "vehiculeId": "V428",
    "anneeImmat": 2019
  },
  {
    "plaque": "JH-165-TW",
    "vehiculeId": "V429",
    "anneeImmat": 2020
  },
  {
    "plaque": "AG-435-FK",
    "vehiculeId": "V429",
    "anneeImmat": 2020
  },
  {
    "plaque": "EY-124-PQ",
    "vehiculeId": "V429",
    "anneeImmat": 2020
  },
  {
    "plaque": "MF-828-YY",
    "vehiculeId": "V429",
    "anneeImmat": 2020
  },
  {
    "plaque": "DZ-533-WD",
    "vehiculeId": "V429",
    "anneeImmat": 2021
  },
  {
    "plaque": "YC-841-MZ",
    "vehiculeId": "V429",
    "anneeImmat": 2021
  },
  {
    "plaque": "DT-612-BZ",
    "vehiculeId": "V429",
    "anneeImmat": 2021
  },
  {
    "plaque": "GN-174-QR",
    "vehiculeId": "V429",
    "anneeImmat": 2021
  },
  {
    "plaque": "YA-779-TR",
    "vehiculeId": "V429",
    "anneeImmat": 2021
  },
  {
    "plaque": "BJ-506-XS",
    "vehiculeId": "V430",
    "anneeImmat": 2021
  },
  {
    "plaque": "AA-542-NE",
    "vehiculeId": "V430",
    "anneeImmat": 2021
  },
  {
    "plaque": "BM-144-FW",
    "vehiculeId": "V430",
    "anneeImmat": 2021
  },
  {
    "plaque": "PD-386-GA",
    "vehiculeId": "V430",
    "anneeImmat": 2021
  },
  {
    "plaque": "DF-937-NR",
    "vehiculeId": "V430",
    "anneeImmat": 2022
  },
  {
    "plaque": "AT-318-NQ",
    "vehiculeId": "V430",
    "anneeImmat": 2022
  },
  {
    "plaque": "CX-308-LL",
    "vehiculeId": "V430",
    "anneeImmat": 2022
  },
  {
    "plaque": "EC-228-WL",
    "vehiculeId": "V431",
    "anneeImmat": 2022
  },
  {
    "plaque": "EK-837-VY",
    "vehiculeId": "V431",
    "anneeImmat": 2022
  },
  {
    "plaque": "JD-973-HN",
    "vehiculeId": "V431",
    "anneeImmat": 2022
  },
  {
    "plaque": "KH-751-CC",
    "vehiculeId": "V431",
    "anneeImmat": 2022
  },
  {
    "plaque": "PD-198-LW",
    "vehiculeId": "V431",
    "anneeImmat": 2023
  },
  {
    "plaque": "AJ-400-TW",
    "vehiculeId": "V432",
    "anneeImmat": 2016
  },
  {
    "plaque": "HS-552-VL",
    "vehiculeId": "V432",
    "anneeImmat": 2016
  },
  {
    "plaque": "GX-328-CX",
    "vehiculeId": "V432",
    "anneeImmat": 2016
  },
  {
    "plaque": "MN-515-RM",
    "vehiculeId": "V432",
    "anneeImmat": 2016
  },
  {
    "plaque": "MA-189-YA",
    "vehiculeId": "V432",
    "anneeImmat": 2017
  },
  {
    "plaque": "MP-603-DV",
    "vehiculeId": "V432",
    "anneeImmat": 2017
  },
  {
    "plaque": "TJ-977-RZ",
    "vehiculeId": "V432",
    "anneeImmat": 2017
  },
  {
    "plaque": "KT-468-ZN",
    "vehiculeId": "V432",
    "anneeImmat": 2017
  },
  {
    "plaque": "TX-448-EQ",
    "vehiculeId": "V432",
    "anneeImmat": 2017
  },
  {
    "plaque": "HF-481-VB",
    "vehiculeId": "V433",
    "anneeImmat": 2017
  },
  {
    "plaque": "XN-880-DY",
    "vehiculeId": "V433",
    "anneeImmat": 2017
  },
  {
    "plaque": "AW-135-TC",
    "vehiculeId": "V433",
    "anneeImmat": 2017
  },
  {
    "plaque": "HJ-445-WK",
    "vehiculeId": "V433",
    "anneeImmat": 2017
  },
  {
    "plaque": "KW-973-NY",
    "vehiculeId": "V433",
    "anneeImmat": 2018
  },
  {
    "plaque": "BW-907-HN",
    "vehiculeId": "V433",
    "anneeImmat": 2018
  },
  {
    "plaque": "WH-476-DA",
    "vehiculeId": "V433",
    "anneeImmat": 2018
  },
  {
    "plaque": "CT-704-KD",
    "vehiculeId": "V434",
    "anneeImmat": 2018
  },
  {
    "plaque": "ML-323-CT",
    "vehiculeId": "V434",
    "anneeImmat": 2018
  },
  {
    "plaque": "CS-228-BD",
    "vehiculeId": "V434",
    "anneeImmat": 2018
  },
  {
    "plaque": "BH-778-HS",
    "vehiculeId": "V434",
    "anneeImmat": 2018
  },
  {
    "plaque": "DS-761-WD",
    "vehiculeId": "V435",
    "anneeImmat": 2019
  },
  {
    "plaque": "NW-502-PZ",
    "vehiculeId": "V435",
    "anneeImmat": 2019
  },
  {
    "plaque": "TW-378-LW",
    "vehiculeId": "V435",
    "anneeImmat": 2019
  },
  {
    "plaque": "VL-303-HA",
    "vehiculeId": "V435",
    "anneeImmat": 2019
  },
  {
    "plaque": "CX-936-BW",
    "vehiculeId": "V435",
    "anneeImmat": 2020
  },
  {
    "plaque": "RM-779-BQ",
    "vehiculeId": "V435",
    "anneeImmat": 2020
  },
  {
    "plaque": "YA-627-VX",
    "vehiculeId": "V435",
    "anneeImmat": 2020
  },
  {
    "plaque": "QP-600-YY",
    "vehiculeId": "V436",
    "anneeImmat": 2015
  },
  {
    "plaque": "WR-559-RW",
    "vehiculeId": "V436",
    "anneeImmat": 2015
  },
  {
    "plaque": "BT-413-JW",
    "vehiculeId": "V436",
    "anneeImmat": 2015
  },
  {
    "plaque": "YB-159-CJ",
    "vehiculeId": "V436",
    "anneeImmat": 2015
  },
  {
    "plaque": "TX-470-VL",
    "vehiculeId": "V436",
    "anneeImmat": 2016
  },
  {
    "plaque": "AT-109-JG",
    "vehiculeId": "V437",
    "anneeImmat": 2016
  },
  {
    "plaque": "ZG-436-XP",
    "vehiculeId": "V437",
    "anneeImmat": 2016
  },
  {
    "plaque": "NQ-774-ES",
    "vehiculeId": "V437",
    "anneeImmat": 2016
  },
  {
    "plaque": "TV-125-MP",
    "vehiculeId": "V437",
    "anneeImmat": 2016
  },
  {
    "plaque": "NE-743-WE",
    "vehiculeId": "V437",
    "anneeImmat": 2017
  },
  {
    "plaque": "AX-153-HE",
    "vehiculeId": "V437",
    "anneeImmat": 2017
  },
  {
    "plaque": "FW-889-BH",
    "vehiculeId": "V437",
    "anneeImmat": 2017
  },
  {
    "plaque": "SH-696-QN",
    "vehiculeId": "V437",
    "anneeImmat": 2017
  },
  {
    "plaque": "XY-683-SA",
    "vehiculeId": "V437",
    "anneeImmat": 2017
  },
  {
    "plaque": "AF-922-LF",
    "vehiculeId": "V438",
    "anneeImmat": 2017
  },
  {
    "plaque": "EC-330-XC",
    "vehiculeId": "V438",
    "anneeImmat": 2017
  },
  {
    "plaque": "TQ-688-WV",
    "vehiculeId": "V438",
    "anneeImmat": 2017
  },
  {
    "plaque": "BA-947-VL",
    "vehiculeId": "V438",
    "anneeImmat": 2017
  },
  {
    "plaque": "DV-534-KE",
    "vehiculeId": "V438",
    "anneeImmat": 2018
  },
  {
    "plaque": "CY-146-KZ",
    "vehiculeId": "V438",
    "anneeImmat": 2018
  },
  {
    "plaque": "GN-830-GM",
    "vehiculeId": "V438",
    "anneeImmat": 2018
  },
  {
    "plaque": "JZ-114-BJ",
    "vehiculeId": "V439",
    "anneeImmat": 2018
  },
  {
    "plaque": "HB-796-ZE",
    "vehiculeId": "V439",
    "anneeImmat": 2018
  },
  {
    "plaque": "LX-662-SE",
    "vehiculeId": "V439",
    "anneeImmat": 2018
  },
  {
    "plaque": "SB-462-ZQ",
    "vehiculeId": "V439",
    "anneeImmat": 2018
  },
  {
    "plaque": "WE-908-LN",
    "vehiculeId": "V439",
    "anneeImmat": 2019
  },
  {
    "plaque": "HK-894-AJ",
    "vehiculeId": "V439",
    "anneeImmat": 2019
  },
  {
    "plaque": "QF-742-PK",
    "vehiculeId": "V439",
    "anneeImmat": 2019
  },
  {
    "plaque": "WL-773-FN",
    "vehiculeId": "V439",
    "anneeImmat": 2019
  },
  {
    "plaque": "VN-824-GS",
    "vehiculeId": "V439",
    "anneeImmat": 2019
  },
  {
    "plaque": "LW-828-YF",
    "vehiculeId": "V440",
    "anneeImmat": 2019
  },
  {
    "plaque": "WK-864-TF",
    "vehiculeId": "V440",
    "anneeImmat": 2019
  },
  {
    "plaque": "HS-509-RJ",
    "vehiculeId": "V440",
    "anneeImmat": 2019
  },
  {
    "plaque": "GX-666-YC",
    "vehiculeId": "V440",
    "anneeImmat": 2019
  },
  {
    "plaque": "XD-270-CC",
    "vehiculeId": "V440",
    "anneeImmat": 2020
  },
  {
    "plaque": "FF-326-LL",
    "vehiculeId": "V440",
    "anneeImmat": 2020
  },
  {
    "plaque": "WM-327-AJ",
    "vehiculeId": "V440",
    "anneeImmat": 2020
  },
  {
    "plaque": "BD-889-AG",
    "vehiculeId": "V441",
    "anneeImmat": 2020
  },
  {
    "plaque": "BM-704-DD",
    "vehiculeId": "V441",
    "anneeImmat": 2020
  },
  {
    "plaque": "PK-461-NY",
    "vehiculeId": "V441",
    "anneeImmat": 2020
  },
  {
    "plaque": "PR-666-PG",
    "vehiculeId": "V441",
    "anneeImmat": 2020
  },
  {
    "plaque": "MD-984-DH",
    "vehiculeId": "V441",
    "anneeImmat": 2021
  },
  {
    "plaque": "HT-528-QB",
    "vehiculeId": "V441",
    "anneeImmat": 2021
  },
  {
    "plaque": "QF-852-VA",
    "vehiculeId": "V441",
    "anneeImmat": 2021
  },
  {
    "plaque": "CZ-445-FQ",
    "vehiculeId": "V441",
    "anneeImmat": 2021
  },
  {
    "plaque": "QA-243-EB",
    "vehiculeId": "V441",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZF-307-SL",
    "vehiculeId": "V442",
    "anneeImmat": 2021
  },
  {
    "plaque": "MF-886-NM",
    "vehiculeId": "V442",
    "anneeImmat": 2021
  },
  {
    "plaque": "EB-173-LG",
    "vehiculeId": "V442",
    "anneeImmat": 2021
  },
  {
    "plaque": "VH-173-LL",
    "vehiculeId": "V442",
    "anneeImmat": 2021
  },
  {
    "plaque": "LG-551-MT",
    "vehiculeId": "V442",
    "anneeImmat": 2022
  },
  {
    "plaque": "DV-305-EK",
    "vehiculeId": "V442",
    "anneeImmat": 2022
  },
  {
    "plaque": "HH-857-QT",
    "vehiculeId": "V442",
    "anneeImmat": 2022
  },
  {
    "plaque": "DK-932-QA",
    "vehiculeId": "V442",
    "anneeImmat": 2022
  },
  {
    "plaque": "DM-230-JW",
    "vehiculeId": "V442",
    "anneeImmat": 2022
  },
  {
    "plaque": "TG-251-XZ",
    "vehiculeId": "V443",
    "anneeImmat": 2022
  },
  {
    "plaque": "CB-728-XT",
    "vehiculeId": "V443",
    "anneeImmat": 2022
  },
  {
    "plaque": "KW-130-XN",
    "vehiculeId": "V443",
    "anneeImmat": 2022
  },
  {
    "plaque": "YT-692-CM",
    "vehiculeId": "V443",
    "anneeImmat": 2022
  },
  {
    "plaque": "LL-959-DT",
    "vehiculeId": "V443",
    "anneeImmat": 2023
  },
  {
    "plaque": "CK-599-AW",
    "vehiculeId": "V443",
    "anneeImmat": 2023
  },
  {
    "plaque": "HG-753-PD",
    "vehiculeId": "V443",
    "anneeImmat": 2023
  },
  {
    "plaque": "GX-187-HC",
    "vehiculeId": "V443",
    "anneeImmat": 2023
  },
  {
    "plaque": "AE-719-BA",
    "vehiculeId": "V443",
    "anneeImmat": 2023
  },
  {
    "plaque": "BA-743-KG",
    "vehiculeId": "V444",
    "anneeImmat": 2018
  },
  {
    "plaque": "NZ-150-JC",
    "vehiculeId": "V444",
    "anneeImmat": 2018
  },
  {
    "plaque": "ZV-154-XP",
    "vehiculeId": "V444",
    "anneeImmat": 2018
  },
  {
    "plaque": "DW-322-LC",
    "vehiculeId": "V444",
    "anneeImmat": 2018
  },
  {
    "plaque": "MB-824-PW",
    "vehiculeId": "V444",
    "anneeImmat": 2019
  },
  {
    "plaque": "FC-364-JY",
    "vehiculeId": "V445",
    "anneeImmat": 2019
  },
  {
    "plaque": "PX-880-FC",
    "vehiculeId": "V445",
    "anneeImmat": 2019
  },
  {
    "plaque": "GT-111-TG",
    "vehiculeId": "V445",
    "anneeImmat": 2019
  },
  {
    "plaque": "CB-933-GR",
    "vehiculeId": "V445",
    "anneeImmat": 2019
  },
  {
    "plaque": "XP-729-GX",
    "vehiculeId": "V445",
    "anneeImmat": 2020
  },
  {
    "plaque": "DS-667-JB",
    "vehiculeId": "V445",
    "anneeImmat": 2020
  },
  {
    "plaque": "AK-917-WZ",
    "vehiculeId": "V445",
    "anneeImmat": 2020
  },
  {
    "plaque": "DH-280-VF",
    "vehiculeId": "V446",
    "anneeImmat": 2020
  },
  {
    "plaque": "TK-381-GC",
    "vehiculeId": "V446",
    "anneeImmat": 2020
  },
  {
    "plaque": "SZ-503-DP",
    "vehiculeId": "V446",
    "anneeImmat": 2020
  },
  {
    "plaque": "NF-846-KZ",
    "vehiculeId": "V446",
    "anneeImmat": 2020
  },
  {
    "plaque": "CL-670-BX",
    "vehiculeId": "V446",
    "anneeImmat": 2021
  },
  {
    "plaque": "GT-673-FS",
    "vehiculeId": "V446",
    "anneeImmat": 2021
  },
  {
    "plaque": "MX-959-LG",
    "vehiculeId": "V446",
    "anneeImmat": 2021
  },
  {
    "plaque": "SA-756-CG",
    "vehiculeId": "V447",
    "anneeImmat": 2021
  },
  {
    "plaque": "KK-240-BL",
    "vehiculeId": "V447",
    "anneeImmat": 2021
  },
  {
    "plaque": "KG-554-CD",
    "vehiculeId": "V447",
    "anneeImmat": 2021
  },
  {
    "plaque": "JC-651-HN",
    "vehiculeId": "V447",
    "anneeImmat": 2021
  },
  {
    "plaque": "XP-126-AC",
    "vehiculeId": "V447",
    "anneeImmat": 2022
  },
  {
    "plaque": "GA-727-EF",
    "vehiculeId": "V448",
    "anneeImmat": 2020
  },
  {
    "plaque": "NJ-494-ZV",
    "vehiculeId": "V448",
    "anneeImmat": 2020
  },
  {
    "plaque": "PR-326-WE",
    "vehiculeId": "V448",
    "anneeImmat": 2020
  },
  {
    "plaque": "DV-227-DN",
    "vehiculeId": "V448",
    "anneeImmat": 2020
  },
  {
    "plaque": "ST-841-HY",
    "vehiculeId": "V448",
    "anneeImmat": 2021
  },
  {
    "plaque": "MY-781-DX",
    "vehiculeId": "V448",
    "anneeImmat": 2021
  },
  {
    "plaque": "YS-164-PA",
    "vehiculeId": "V448",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZJ-889-NG",
    "vehiculeId": "V449",
    "anneeImmat": 2021
  },
  {
    "plaque": "XM-987-ZN",
    "vehiculeId": "V449",
    "anneeImmat": 2021
  },
  {
    "plaque": "NX-680-YE",
    "vehiculeId": "V449",
    "anneeImmat": 2021
  },
  {
    "plaque": "PS-554-NC",
    "vehiculeId": "V449",
    "anneeImmat": 2021
  },
  {
    "plaque": "WV-465-GX",
    "vehiculeId": "V449",
    "anneeImmat": 2022
  },
  {
    "plaque": "KK-626-XG",
    "vehiculeId": "V450",
    "anneeImmat": 2022
  },
  {
    "plaque": "RY-671-CV",
    "vehiculeId": "V450",
    "anneeImmat": 2022
  },
  {
    "plaque": "GR-623-EY",
    "vehiculeId": "V450",
    "anneeImmat": 2022
  },
  {
    "plaque": "XC-870-LC",
    "vehiculeId": "V450",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZL-514-EZ",
    "vehiculeId": "V450",
    "anneeImmat": 2023
  },
  {
    "plaque": "GT-132-RE",
    "vehiculeId": "V450",
    "anneeImmat": 2023
  },
  {
    "plaque": "BL-755-EH",
    "vehiculeId": "V450",
    "anneeImmat": 2023
  },
  {
    "plaque": "WX-581-QD",
    "vehiculeId": "V451",
    "anneeImmat": 2019
  },
  {
    "plaque": "YG-644-NZ",
    "vehiculeId": "V451",
    "anneeImmat": 2019
  },
  {
    "plaque": "TP-546-AQ",
    "vehiculeId": "V451",
    "anneeImmat": 2019
  },
  {
    "plaque": "LE-418-HP",
    "vehiculeId": "V451",
    "anneeImmat": 2019
  },
  {
    "plaque": "DV-437-MP",
    "vehiculeId": "V451",
    "anneeImmat": 2020
  },
  {
    "plaque": "WW-293-JJ",
    "vehiculeId": "V451",
    "anneeImmat": 2020
  },
  {
    "plaque": "WK-813-JC",
    "vehiculeId": "V451",
    "anneeImmat": 2020
  },
  {
    "plaque": "TS-129-MF",
    "vehiculeId": "V452",
    "anneeImmat": 2020
  },
  {
    "plaque": "VL-281-QF",
    "vehiculeId": "V452",
    "anneeImmat": 2020
  },
  {
    "plaque": "XL-555-DZ",
    "vehiculeId": "V452",
    "anneeImmat": 2020
  },
  {
    "plaque": "AH-925-ND",
    "vehiculeId": "V452",
    "anneeImmat": 2020
  },
  {
    "plaque": "KK-262-ZD",
    "vehiculeId": "V452",
    "anneeImmat": 2021
  },
  {
    "plaque": "NA-883-DC",
    "vehiculeId": "V452",
    "anneeImmat": 2021
  },
  {
    "plaque": "QY-554-CY",
    "vehiculeId": "V452",
    "anneeImmat": 2021
  },
  {
    "plaque": "QT-282-CS",
    "vehiculeId": "V453",
    "anneeImmat": 2021
  },
  {
    "plaque": "QA-655-MG",
    "vehiculeId": "V453",
    "anneeImmat": 2021
  },
  {
    "plaque": "JW-304-VS",
    "vehiculeId": "V453",
    "anneeImmat": 2021
  },
  {
    "plaque": "DN-286-HZ",
    "vehiculeId": "V453",
    "anneeImmat": 2021
  },
  {
    "plaque": "VM-246-CH",
    "vehiculeId": "V453",
    "anneeImmat": 2022
  },
  {
    "plaque": "RH-116-PC",
    "vehiculeId": "V453",
    "anneeImmat": 2022
  },
  {
    "plaque": "BS-616-WK",
    "vehiculeId": "V453",
    "anneeImmat": 2022
  },
  {
    "plaque": "ZV-412-QD",
    "vehiculeId": "V454",
    "anneeImmat": 2022
  },
  {
    "plaque": "WE-621-QV",
    "vehiculeId": "V454",
    "anneeImmat": 2022
  },
  {
    "plaque": "YE-721-RG",
    "vehiculeId": "V454",
    "anneeImmat": 2022
  },
  {
    "plaque": "HY-418-JC",
    "vehiculeId": "V454",
    "anneeImmat": 2022
  },
  {
    "plaque": "MQ-221-RD",
    "vehiculeId": "V455",
    "anneeImmat": 2023
  },
  {
    "plaque": "DN-366-ML",
    "vehiculeId": "V455",
    "anneeImmat": 2023
  },
  {
    "plaque": "BB-962-JS",
    "vehiculeId": "V455",
    "anneeImmat": 2023
  },
  {
    "plaque": "KF-678-PX",
    "vehiculeId": "V455",
    "anneeImmat": 2023
  },
  {
    "plaque": "RL-354-CB",
    "vehiculeId": "V455",
    "anneeImmat": 2024
  },
  {
    "plaque": "JQ-578-YH",
    "vehiculeId": "V456",
    "anneeImmat": 2019
  },
  {
    "plaque": "DN-570-CK",
    "vehiculeId": "V456",
    "anneeImmat": 2019
  },
  {
    "plaque": "XQ-938-LY",
    "vehiculeId": "V456",
    "anneeImmat": 2019
  },
  {
    "plaque": "FG-758-NX",
    "vehiculeId": "V456",
    "anneeImmat": 2019
  },
  {
    "plaque": "DR-960-DW",
    "vehiculeId": "V457",
    "anneeImmat": 2020
  },
  {
    "plaque": "YR-235-JR",
    "vehiculeId": "V457",
    "anneeImmat": 2020
  },
  {
    "plaque": "EF-395-SH",
    "vehiculeId": "V457",
    "anneeImmat": 2020
  },
  {
    "plaque": "PT-312-HT",
    "vehiculeId": "V457",
    "anneeImmat": 2020
  },
  {
    "plaque": "GH-655-RV",
    "vehiculeId": "V457",
    "anneeImmat": 2021
  },
  {
    "plaque": "NC-909-EW",
    "vehiculeId": "V458",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZV-917-LX",
    "vehiculeId": "V458",
    "anneeImmat": 2021
  },
  {
    "plaque": "ZD-337-JM",
    "vehiculeId": "V458",
    "anneeImmat": 2021
  },
  {
    "plaque": "WS-607-SR",
    "vehiculeId": "V458",
    "anneeImmat": 2021
  },
  {
    "plaque": "SE-115-YA",
    "vehiculeId": "V458",
    "anneeImmat": 2022
  },
  {
    "plaque": "EJ-390-VF",
    "vehiculeId": "V459",
    "anneeImmat": 2022
  },
  {
    "plaque": "WP-658-BP",
    "vehiculeId": "V459",
    "anneeImmat": 2022
  },
  {
    "plaque": "TB-175-RS",
    "vehiculeId": "V459",
    "anneeImmat": 2022
  },
  {
    "plaque": "PK-733-FQ",
    "vehiculeId": "V459",
    "anneeImmat": 2022
  },
  {
    "plaque": "YY-792-RH",
    "vehiculeId": "V460",
    "anneeImmat": 2016
  },
  {
    "plaque": "VS-259-TN",
    "vehiculeId": "V460",
    "anneeImmat": 2016
  },
  {
    "plaque": "BT-264-CW",
    "vehiculeId": "V460",
    "anneeImmat": 2016
  },
  {
    "plaque": "VJ-565-FS",
    "vehiculeId": "V460",
    "anneeImmat": 2016
  },
  {
    "plaque": "ZB-964-WH",
    "vehiculeId": "V460",
    "anneeImmat": 2017
  },
  {
    "plaque": "AX-761-EK",
    "vehiculeId": "V460",
    "anneeImmat": 2017
  },
  {
    "plaque": "NW-754-QD",
    "vehiculeId": "V460",
    "anneeImmat": 2017
  },
  {
    "plaque": "GS-376-GR",
    "vehiculeId": "V461",
    "anneeImmat": 2017
  },
  {
    "plaque": "DP-510-KZ",
    "vehiculeId": "V461",
    "anneeImmat": 2017
  },
  {
    "plaque": "FH-182-RL",
    "vehiculeId": "V461",
    "anneeImmat": 2017
  },
  {
    "plaque": "BJ-202-MC",
    "vehiculeId": "V461",
    "anneeImmat": 2017
  },
  {
    "plaque": "VA-828-FX",
    "vehiculeId": "V461",
    "anneeImmat": 2018
  },
  {
    "plaque": "NT-201-WN",
    "vehiculeId": "V461",
    "anneeImmat": 2018
  },
  {
    "plaque": "HC-424-VW",
    "vehiculeId": "V461",
    "anneeImmat": 2018
  },
  {
    "plaque": "ML-588-YE",
    "vehiculeId": "V462",
    "anneeImmat": 2018
  },
  {
    "plaque": "JS-154-GX",
    "vehiculeId": "V462",
    "anneeImmat": 2018
  },
  {
    "plaque": "PX-573-NS",
    "vehiculeId": "V462",
    "anneeImmat": 2018
  },
  {
    "plaque": "CB-257-JN",
    "vehiculeId": "V462",
    "anneeImmat": 2018
  },
  {
    "plaque": "SA-204-YA",
    "vehiculeId": "V462",
    "anneeImmat": 2019
  },
  {
    "plaque": "KA-265-HT",
    "vehiculeId": "V463",
    "anneeImmat": 2019
  },
  {
    "plaque": "HR-602-EX",
    "vehiculeId": "V463",
    "anneeImmat": 2019
  },
  {
    "plaque": "BH-600-VM",
    "vehiculeId": "V463",
    "anneeImmat": 2019
  },
  {
    "plaque": "HK-732-ME",
    "vehiculeId": "V463",
    "anneeImmat": 2019
  },
  {
    "plaque": "MP-388-EQ",
    "vehiculeId": "V463",
    "anneeImmat": 2020
  },
  {
    "plaque": "LP-793-BG",
    "vehiculeId": "V464",
    "anneeImmat": 2020
  },
  {
    "plaque": "ZQ-151-RA",
    "vehiculeId": "V464",
    "anneeImmat": 2020
  },
  {
    "plaque": "EL-433-TV",
    "vehiculeId": "V464",
    "anneeImmat": 2020
  },
  {
    "plaque": "RD-178-XK",
    "vehiculeId": "V464",
    "anneeImmat": 2020
  },
  {
    "plaque": "GS-517-YE",
    "vehiculeId": "V464",
    "anneeImmat": 2021
  },
  {
    "plaque": "EC-201-ZP",
    "vehiculeId": "V465",
    "anneeImmat": 2019
  },
  {
    "plaque": "NL-240-ES",
    "vehiculeId": "V465",
    "anneeImmat": 2019
  },
  {
    "plaque": "LJ-742-NN",
    "vehiculeId": "V465",
    "anneeImmat": 2019
  },
  {
    "plaque": "CQ-397-CB",
    "vehiculeId": "V465",
    "anneeImmat": 2019
  },
  {
    "plaque": "FZ-344-LN",
    "vehiculeId": "V465",
    "anneeImmat": 2020
  },
  {
    "plaque": "DG-674-YC",
    "vehiculeId": "V466",
    "anneeImmat": 2020
  },
  {
    "plaque": "HE-373-HG",
    "vehiculeId": "V466",
    "anneeImmat": 2020
  },
  {
    "plaque": "EW-779-KR",
    "vehiculeId": "V466",
    "anneeImmat": 2020
  },
  {
    "plaque": "XA-860-ZB",
    "vehiculeId": "V466",
    "anneeImmat": 2020
  },
  {
    "plaque": "VT-371-VF",
    "vehiculeId": "V466",
    "anneeImmat": 2021
  },
  {
    "plaque": "EF-594-KJ",
    "vehiculeId": "V466",
    "anneeImmat": 2021
  },
  {
    "plaque": "GL-268-TT",
    "vehiculeId": "V466",
    "anneeImmat": 2021
  },
  {
    "plaque": "KV-138-JM",
    "vehiculeId": "V467",
    "anneeImmat": 2021
  },
  {
    "plaque": "PE-980-FR",
    "vehiculeId": "V467",
    "anneeImmat": 2021
  },
  {
    "plaque": "AY-723-XE",
    "vehiculeId": "V467",
    "anneeImmat": 2021
  },
  {
    "plaque": "JZ-825-WB",
    "vehiculeId": "V467",
    "anneeImmat": 2021
  },
  {
    "plaque": "YE-926-EJ",
    "vehiculeId": "V468",
    "anneeImmat": 2022
  },
  {
    "plaque": "GX-740-PS",
    "vehiculeId": "V468",
    "anneeImmat": 2022
  },
  {
    "plaque": "NS-802-BR",
    "vehiculeId": "V468",
    "anneeImmat": 2022
  },
  {
    "plaque": "JN-811-RV",
    "vehiculeId": "V468",
    "anneeImmat": 2022
  },
  {
    "plaque": "YA-135-KS",
    "vehiculeId": "V468",
    "anneeImmat": 2023
  }
];

// ============================================================
// NORMALISATION — Gère toutes les saisies possibles
//   "AB123CD"   → "AB-123-CD"
//   "ab123cd"   → "AB-123-CD"
//   "AB 123 CD" → "AB-123-CD"
//   "AB.123.CD" → "AB-123-CD"
//   "AB-123-CD" → "AB-123-CD"  (déjà formaté)
// ============================================================
export const normaliserPlaque = (saisie: string): string => {
  // Étape 1 : tout en majuscules, on ne garde que lettres et chiffres
  const brut = saisie.toUpperCase().replace(/[^A-Z0-9]/g, "");

  // Étape 2 : si 7 caractères au format SIV (AA000AA), on formate
  if (/^([A-Z]{2})([0-9]{3})([A-Z]{2})$/.test(brut)) {
    const m = brut.match(/^([A-Z]{2})([0-9]{3})([A-Z]{2})$/)!;
    return `${m[1]}-${m[2]}-${m[3]}`;
  }

  // Étape 3 : saisie partielle en cours — on formate progressivement
  // pour que le champ ressemble à une vraie plaque pendant la frappe
  if (/^[A-Z]{1,2}$/.test(brut))              return brut;
  if (/^[A-Z]{2}[0-9]{1,3}$/.test(brut))      return brut.slice(0,2) + "-" + brut.slice(2);
  if (/^[A-Z]{2}[0-9]{3}[A-Z]{1,2}$/.test(brut))
    return brut.slice(0,2) + "-" + brut.slice(2,5) + "-" + brut.slice(5);

  // Étape 4 : fallback — retourner brut tronqué
  return brut.slice(0, 9);
};

// Index de recherche en O(1)
// Clé = plaque normalisée (avec tirets), valeur = vehiculeId
export const INDEX_PLAQUES: Record<string, string> = Object.fromEntries(
  PLAQUES.map(p => [p.plaque, p.vehiculeId])
);

// Index secondaire sans tirets pour la recherche par saisie brute
// Permet de trouver "AB123CD" même si l'index stocke "AB-123-CD"
const INDEX_SANS_TIRETS: Record<string, string> = Object.fromEntries(
  PLAQUES.map(p => [p.plaque.replace(/-/g, ""), p.plaque])
);

// ============================================================
// RECHERCHE EXACTE
// Accepte n'importe quel format de saisie
// ============================================================
export const rechercherParPlaque = (
  saisie: string
): { vehicule: VehiculeDB; plaqueInfo: PlaqueDB } | null => {
  const normalisee = normaliserPlaque(saisie);

  // Recherche directe avec tirets
  let vehiculeId = INDEX_PLAQUES[normalisee];

  // Si pas trouvé, on essaie sans tirets (cas où normaliserPlaque
  // n'a pas pu formater correctement une saisie partielle)
  if (!vehiculeId) {
    const brut = saisie.toUpperCase().replace(/[^A-Z0-9]/g, "");
    const plaqueAvecTirets = INDEX_SANS_TIRETS[brut];
    if (plaqueAvecTirets) vehiculeId = INDEX_PLAQUES[plaqueAvecTirets];
  }

  if (!vehiculeId) return null;

  const vehicule = VEHICULES.find(v => v.id === vehiculeId) ?? null;
  const plaqueInfo = PLAQUES.find(p => p.vehiculeId === vehiculeId) ?? null;
  if (!vehicule || !plaqueInfo) return null;

  return { vehicule, plaqueInfo: { ...plaqueInfo, plaque: normalisee } };
};

// ============================================================
// SUGGESTIONS — Autocomplétion pendant la frappe
// Cherche sur la version formatée ET sans tirets
// ============================================================
export const rechercherSuggestions = (saisie: string): PlaqueDB[] => {
  const normalisee = normaliserPlaque(saisie);
  if (normalisee.length < 2) return [];

  // Recherche sur la plaque formatée (ex: "AB-1" matche "AB-123-CD")
  const parFormat = PLAQUES.filter(p => p.plaque.startsWith(normalisee));

  // Recherche sur la version sans tirets (ex: "AB1" matche "AB-123-CD")
  const brut = saisie.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const parBrut = brut.length >= 2
    ? PLAQUES.filter(p => p.plaque.replace(/-/g, "").startsWith(brut))
    : [];

  // Fusionner et dédoublonner
  const vues = new Set<string>();
  const resultats: PlaqueDB[] = [];
  for (const p of [...parFormat, ...parBrut]) {
    if (!vues.has(p.plaque)) {
      vues.add(p.plaque);
      resultats.push(p);
    }
    if (resultats.length >= 8) break;
  }

  return resultats;
};
