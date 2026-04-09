// ============================================================
// BASE DE DONNÉES MOTOS — SIMULATEUR MOTO BTS ASSURANCE
// Généré automatiquement — NE PAS MODIFIER MANUELLEMENT
// 227 motos · 1161 plaques fictives
// Usage pédagogique uniquement · Données fictives
// ============================================================

export interface MotoVehiculeDB {
  id: string;
  marque: string;
  modele: string;
  version: string;
  annee: number;
  cylindree: number | null;
  puissanceKw: number;
  carburant: "essence" | "electrique";
  typeMoto: string;
  valeurEstimee: number;
  valeurNeuf: number | null;
  commentairePedagogique: string | null;
}

export interface MotoPlaqueDB {
  plaque: string;
  motoId: string;
}

export const MOTOS: MotoVehiculeDB[] = [
  {
    "id": "M001",
    "marque": "Peugeot",
    "modele": "Kisbee",
    "version": "50 4T",
    "annee": 2018,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 800,
    "valeurNeuf": 1800,
    "commentairePedagogique": "Scooter 50 basique — permis AM, cas pédagogique lycéen"
  },
  {
    "id": "M002",
    "marque": "Peugeot",
    "modele": "Kisbee",
    "version": "50 4T",
    "annee": 2019,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 900,
    "valeurNeuf": 1800,
    "commentairePedagogique": "Scooter 50 basique — permis AM, cas pédagogique lycéen"
  },
  {
    "id": "M003",
    "marque": "Peugeot",
    "modele": "Kisbee",
    "version": "50 4T",
    "annee": 2020,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 1000,
    "valeurNeuf": 1800,
    "commentairePedagogique": "Scooter 50 basique — permis AM, cas pédagogique lycéen"
  },
  {
    "id": "M004",
    "marque": "Peugeot",
    "modele": "Kisbee",
    "version": "50 4T",
    "annee": 2021,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 1100,
    "valeurNeuf": 1800,
    "commentairePedagogique": "Scooter 50 basique — permis AM, cas pédagogique lycéen"
  },
  {
    "id": "M005",
    "marque": "Peugeot",
    "modele": "Kisbee",
    "version": "50 4T",
    "annee": 2022,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 1200,
    "valeurNeuf": 1800,
    "commentairePedagogique": "Scooter 50 basique — permis AM, cas pédagogique lycéen"
  },
  {
    "id": "M006",
    "marque": "Honda",
    "modele": "SH 50",
    "version": "50cc",
    "annee": 2017,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 900,
    "valeurNeuf": 2200,
    "commentairePedagogique": null
  },
  {
    "id": "M007",
    "marque": "Honda",
    "modele": "SH 50",
    "version": "50cc",
    "annee": 2018,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 1000,
    "valeurNeuf": 2200,
    "commentairePedagogique": null
  },
  {
    "id": "M008",
    "marque": "Honda",
    "modele": "SH 50",
    "version": "50cc",
    "annee": 2019,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 1100,
    "valeurNeuf": 2200,
    "commentairePedagogique": null
  },
  {
    "id": "M009",
    "marque": "Honda",
    "modele": "SH 50",
    "version": "50cc",
    "annee": 2020,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 1200,
    "valeurNeuf": 2200,
    "commentairePedagogique": null
  },
  {
    "id": "M010",
    "marque": "Yamaha",
    "modele": "Neos",
    "version": "50cc",
    "annee": 2018,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 700,
    "valeurNeuf": 1900,
    "commentairePedagogique": null
  },
  {
    "id": "M011",
    "marque": "Yamaha",
    "modele": "Neos",
    "version": "50cc",
    "annee": 2019,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 800,
    "valeurNeuf": 1900,
    "commentairePedagogique": null
  },
  {
    "id": "M012",
    "marque": "Yamaha",
    "modele": "Neos",
    "version": "50cc",
    "annee": 2020,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 900,
    "valeurNeuf": 1900,
    "commentairePedagogique": null
  },
  {
    "id": "M013",
    "marque": "Yamaha",
    "modele": "Neos",
    "version": "50cc",
    "annee": 2021,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 1000,
    "valeurNeuf": 1900,
    "commentairePedagogique": null
  },
  {
    "id": "M014",
    "marque": "MBK",
    "modele": "Booster",
    "version": "50cc",
    "annee": 2017,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 600,
    "valeurNeuf": 1700,
    "commentairePedagogique": "Scooter 50 très courant en milieu urbain"
  },
  {
    "id": "M015",
    "marque": "MBK",
    "modele": "Booster",
    "version": "50cc",
    "annee": 2018,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 700,
    "valeurNeuf": 1700,
    "commentairePedagogique": "Scooter 50 très courant en milieu urbain"
  },
  {
    "id": "M016",
    "marque": "MBK",
    "modele": "Booster",
    "version": "50cc",
    "annee": 2019,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 800,
    "valeurNeuf": 1700,
    "commentairePedagogique": "Scooter 50 très courant en milieu urbain"
  },
  {
    "id": "M017",
    "marque": "MBK",
    "modele": "Booster",
    "version": "50cc",
    "annee": 2020,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 900,
    "valeurNeuf": 1700,
    "commentairePedagogique": "Scooter 50 très courant en milieu urbain"
  },
  {
    "id": "M018",
    "marque": "MBK",
    "modele": "Booster",
    "version": "50cc",
    "annee": 2021,
    "cylindree": 49,
    "puissanceKw": 3,
    "carburant": "essence",
    "typeMoto": "scooter_50",
    "valeurEstimee": 1000,
    "valeurNeuf": 1700,
    "commentairePedagogique": "Scooter 50 très courant en milieu urbain"
  },
  {
    "id": "M019",
    "marque": "Honda",
    "modele": "SH 125",
    "version": "125i ABS",
    "annee": 2019,
    "cylindree": 124,
    "puissanceKw": 9,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 2800,
    "valeurNeuf": 4800,
    "commentairePedagogique": "Scooter 125 premium — le plus vendu de France"
  },
  {
    "id": "M020",
    "marque": "Honda",
    "modele": "SH 125",
    "version": "125i ABS",
    "annee": 2020,
    "cylindree": 124,
    "puissanceKw": 9,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 3200,
    "valeurNeuf": 4800,
    "commentairePedagogique": "Scooter 125 premium — le plus vendu de France"
  },
  {
    "id": "M021",
    "marque": "Honda",
    "modele": "SH 125",
    "version": "125i ABS",
    "annee": 2021,
    "cylindree": 124,
    "puissanceKw": 9,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 3600,
    "valeurNeuf": 4800,
    "commentairePedagogique": "Scooter 125 premium — le plus vendu de France"
  },
  {
    "id": "M022",
    "marque": "Honda",
    "modele": "SH 125",
    "version": "125i ABS",
    "annee": 2022,
    "cylindree": 124,
    "puissanceKw": 9,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 4000,
    "valeurNeuf": 4800,
    "commentairePedagogique": "Scooter 125 premium — le plus vendu de France"
  },
  {
    "id": "M023",
    "marque": "Honda",
    "modele": "SH 125",
    "version": "125i ABS",
    "annee": 2023,
    "cylindree": 124,
    "puissanceKw": 9,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 4400,
    "valeurNeuf": 4800,
    "commentairePedagogique": "Scooter 125 premium — le plus vendu de France"
  },
  {
    "id": "M024",
    "marque": "Yamaha",
    "modele": "XMAX 125",
    "version": "125cc ABS",
    "annee": 2018,
    "cylindree": 124,
    "puissanceKw": 9,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 3000,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M025",
    "marque": "Yamaha",
    "modele": "XMAX 125",
    "version": "125cc ABS",
    "annee": 2019,
    "cylindree": 124,
    "puissanceKw": 9,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 3400,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M026",
    "marque": "Yamaha",
    "modele": "XMAX 125",
    "version": "125cc ABS",
    "annee": 2020,
    "cylindree": 124,
    "puissanceKw": 9,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 3800,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M027",
    "marque": "Yamaha",
    "modele": "XMAX 125",
    "version": "125cc ABS",
    "annee": 2021,
    "cylindree": 124,
    "puissanceKw": 9,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 4200,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M028",
    "marque": "Yamaha",
    "modele": "XMAX 125",
    "version": "125cc ABS",
    "annee": 2022,
    "cylindree": 124,
    "puissanceKw": 9,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 4600,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M029",
    "marque": "Peugeot",
    "modele": "Metropolis",
    "version": "400cc",
    "annee": 2017,
    "cylindree": 399,
    "puissanceKw": 23,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 4000,
    "valeurNeuf": 8000,
    "commentairePedagogique": "Grand scooter 3 roues — cas spécifique permis B"
  },
  {
    "id": "M030",
    "marque": "Peugeot",
    "modele": "Metropolis",
    "version": "400cc",
    "annee": 2018,
    "cylindree": 399,
    "puissanceKw": 23,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 4500,
    "valeurNeuf": 8000,
    "commentairePedagogique": "Grand scooter 3 roues — cas spécifique permis B"
  },
  {
    "id": "M031",
    "marque": "Peugeot",
    "modele": "Metropolis",
    "version": "400cc",
    "annee": 2019,
    "cylindree": 399,
    "puissanceKw": 23,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 5000,
    "valeurNeuf": 8000,
    "commentairePedagogique": "Grand scooter 3 roues — cas spécifique permis B"
  },
  {
    "id": "M032",
    "marque": "Peugeot",
    "modele": "Metropolis",
    "version": "400cc",
    "annee": 2020,
    "cylindree": 399,
    "puissanceKw": 23,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 5500,
    "valeurNeuf": 8000,
    "commentairePedagogique": "Grand scooter 3 roues — cas spécifique permis B"
  },
  {
    "id": "M033",
    "marque": "Peugeot",
    "modele": "Metropolis",
    "version": "400cc",
    "annee": 2021,
    "cylindree": 399,
    "puissanceKw": 23,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 6000,
    "valeurNeuf": 8000,
    "commentairePedagogique": "Grand scooter 3 roues — cas spécifique permis B"
  },
  {
    "id": "M034",
    "marque": "Kymco",
    "modele": "Agility 125",
    "version": "125cc",
    "annee": 2018,
    "cylindree": 124,
    "puissanceKw": 7,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 1800,
    "valeurNeuf": 2800,
    "commentairePedagogique": null
  },
  {
    "id": "M035",
    "marque": "Kymco",
    "modele": "Agility 125",
    "version": "125cc",
    "annee": 2019,
    "cylindree": 124,
    "puissanceKw": 7,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 2000,
    "valeurNeuf": 2800,
    "commentairePedagogique": null
  },
  {
    "id": "M036",
    "marque": "Kymco",
    "modele": "Agility 125",
    "version": "125cc",
    "annee": 2020,
    "cylindree": 124,
    "puissanceKw": 7,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 2200,
    "valeurNeuf": 2800,
    "commentairePedagogique": null
  },
  {
    "id": "M037",
    "marque": "Kymco",
    "modele": "Agility 125",
    "version": "125cc",
    "annee": 2021,
    "cylindree": 124,
    "puissanceKw": 7,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 2400,
    "valeurNeuf": 2800,
    "commentairePedagogique": null
  },
  {
    "id": "M038",
    "marque": "Piaggio",
    "modele": "MP3 300",
    "version": "300 HPE ABS",
    "annee": 2019,
    "cylindree": 278,
    "puissanceKw": 19,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 5500,
    "valeurNeuf": 9500,
    "commentairePedagogique": "Scooter 3 roues — permis B suffisant"
  },
  {
    "id": "M039",
    "marque": "Piaggio",
    "modele": "MP3 300",
    "version": "300 HPE ABS",
    "annee": 2020,
    "cylindree": 278,
    "puissanceKw": 19,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 6000,
    "valeurNeuf": 9500,
    "commentairePedagogique": "Scooter 3 roues — permis B suffisant"
  },
  {
    "id": "M040",
    "marque": "Piaggio",
    "modele": "MP3 300",
    "version": "300 HPE ABS",
    "annee": 2021,
    "cylindree": 278,
    "puissanceKw": 19,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 6500,
    "valeurNeuf": 9500,
    "commentairePedagogique": "Scooter 3 roues — permis B suffisant"
  },
  {
    "id": "M041",
    "marque": "Piaggio",
    "modele": "MP3 300",
    "version": "300 HPE ABS",
    "annee": 2022,
    "cylindree": 278,
    "puissanceKw": 19,
    "carburant": "essence",
    "typeMoto": "scooter_125",
    "valeurEstimee": 7000,
    "valeurNeuf": 9500,
    "commentairePedagogique": "Scooter 3 roues — permis B suffisant"
  },
  {
    "id": "M042",
    "marque": "Honda",
    "modele": "CB 125 R",
    "version": "125cc ABS",
    "annee": 2018,
    "cylindree": 124,
    "puissanceKw": 10,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3200,
    "valeurNeuf": 5000,
    "commentairePedagogique": "Roadster 125 — très populaire chez les jeunes A1"
  },
  {
    "id": "M043",
    "marque": "Honda",
    "modele": "CB 125 R",
    "version": "125cc ABS",
    "annee": 2019,
    "cylindree": 124,
    "puissanceKw": 10,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3500,
    "valeurNeuf": 5000,
    "commentairePedagogique": "Roadster 125 — très populaire chez les jeunes A1"
  },
  {
    "id": "M044",
    "marque": "Honda",
    "modele": "CB 125 R",
    "version": "125cc ABS",
    "annee": 2020,
    "cylindree": 124,
    "puissanceKw": 10,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3800,
    "valeurNeuf": 5000,
    "commentairePedagogique": "Roadster 125 — très populaire chez les jeunes A1"
  },
  {
    "id": "M045",
    "marque": "Honda",
    "modele": "CB 125 R",
    "version": "125cc ABS",
    "annee": 2021,
    "cylindree": 124,
    "puissanceKw": 10,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 4100,
    "valeurNeuf": 5000,
    "commentairePedagogique": "Roadster 125 — très populaire chez les jeunes A1"
  },
  {
    "id": "M046",
    "marque": "Honda",
    "modele": "CB 125 R",
    "version": "125cc ABS",
    "annee": 2022,
    "cylindree": 124,
    "puissanceKw": 10,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 4400,
    "valeurNeuf": 5000,
    "commentairePedagogique": "Roadster 125 — très populaire chez les jeunes A1"
  },
  {
    "id": "M047",
    "marque": "Yamaha",
    "modele": "MT-125",
    "version": "125cc ABS",
    "annee": 2017,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3000,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M048",
    "marque": "Yamaha",
    "modele": "MT-125",
    "version": "125cc ABS",
    "annee": 2018,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3300,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M049",
    "marque": "Yamaha",
    "modele": "MT-125",
    "version": "125cc ABS",
    "annee": 2019,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3600,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M050",
    "marque": "Yamaha",
    "modele": "MT-125",
    "version": "125cc ABS",
    "annee": 2020,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3900,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M051",
    "marque": "Yamaha",
    "modele": "MT-125",
    "version": "125cc ABS",
    "annee": 2021,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 4200,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M052",
    "marque": "Yamaha",
    "modele": "MT-125",
    "version": "125cc ABS",
    "annee": 2022,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 4500,
    "valeurNeuf": 5200,
    "commentairePedagogique": null
  },
  {
    "id": "M053",
    "marque": "KTM",
    "modele": "Duke 125",
    "version": "125cc",
    "annee": 2017,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3000,
    "valeurNeuf": 5500,
    "commentairePedagogique": "Duke 125 — sportive légère, choisie par jeunes motards"
  },
  {
    "id": "M054",
    "marque": "KTM",
    "modele": "Duke 125",
    "version": "125cc",
    "annee": 2018,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3300,
    "valeurNeuf": 5500,
    "commentairePedagogique": "Duke 125 — sportive légère, choisie par jeunes motards"
  },
  {
    "id": "M055",
    "marque": "KTM",
    "modele": "Duke 125",
    "version": "125cc",
    "annee": 2019,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3600,
    "valeurNeuf": 5500,
    "commentairePedagogique": "Duke 125 — sportive légère, choisie par jeunes motards"
  },
  {
    "id": "M056",
    "marque": "KTM",
    "modele": "Duke 125",
    "version": "125cc",
    "annee": 2020,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3900,
    "valeurNeuf": 5500,
    "commentairePedagogique": "Duke 125 — sportive légère, choisie par jeunes motards"
  },
  {
    "id": "M057",
    "marque": "KTM",
    "modele": "Duke 125",
    "version": "125cc",
    "annee": 2021,
    "cylindree": 124,
    "puissanceKw": 11,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 4200,
    "valeurNeuf": 5500,
    "commentairePedagogique": "Duke 125 — sportive légère, choisie par jeunes motards"
  },
  {
    "id": "M058",
    "marque": "Kawasaki",
    "modele": "Z 125",
    "version": "125cc",
    "annee": 2019,
    "cylindree": 124,
    "puissanceKw": 7,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 2500,
    "valeurNeuf": 4200,
    "commentairePedagogique": null
  },
  {
    "id": "M059",
    "marque": "Kawasaki",
    "modele": "Z 125",
    "version": "125cc",
    "annee": 2020,
    "cylindree": 124,
    "puissanceKw": 7,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 2800,
    "valeurNeuf": 4200,
    "commentairePedagogique": null
  },
  {
    "id": "M060",
    "marque": "Kawasaki",
    "modele": "Z 125",
    "version": "125cc",
    "annee": 2021,
    "cylindree": 124,
    "puissanceKw": 7,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3000,
    "valeurNeuf": 4200,
    "commentairePedagogique": null
  },
  {
    "id": "M061",
    "marque": "Kawasaki",
    "modele": "Z 125",
    "version": "125cc",
    "annee": 2022,
    "cylindree": 124,
    "puissanceKw": 7,
    "carburant": "essence",
    "typeMoto": "moto_125",
    "valeurEstimee": 3200,
    "valeurNeuf": 4200,
    "commentairePedagogique": null
  },
  {
    "id": "M062",
    "marque": "Honda",
    "modele": "CB 500 F",
    "version": "500cc ABS",
    "annee": 2016,
    "cylindree": 471,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 4500,
    "valeurNeuf": 8000,
    "commentairePedagogique": "CB500 — moto A2 par excellence, très courante"
  },
  {
    "id": "M063",
    "marque": "Honda",
    "modele": "CB 500 F",
    "version": "500cc ABS",
    "annee": 2017,
    "cylindree": 471,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5000,
    "valeurNeuf": 8000,
    "commentairePedagogique": "CB500 — moto A2 par excellence, très courante"
  },
  {
    "id": "M064",
    "marque": "Honda",
    "modele": "CB 500 F",
    "version": "500cc ABS",
    "annee": 2018,
    "cylindree": 471,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5500,
    "valeurNeuf": 8000,
    "commentairePedagogique": "CB500 — moto A2 par excellence, très courante"
  },
  {
    "id": "M065",
    "marque": "Honda",
    "modele": "CB 500 F",
    "version": "500cc ABS",
    "annee": 2019,
    "cylindree": 471,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 6000,
    "valeurNeuf": 8000,
    "commentairePedagogique": "CB500 — moto A2 par excellence, très courante"
  },
  {
    "id": "M066",
    "marque": "Honda",
    "modele": "CB 500 F",
    "version": "500cc ABS",
    "annee": 2020,
    "cylindree": 471,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 6500,
    "valeurNeuf": 8000,
    "commentairePedagogique": "CB500 — moto A2 par excellence, très courante"
  },
  {
    "id": "M067",
    "marque": "Honda",
    "modele": "CB 500 F",
    "version": "500cc ABS",
    "annee": 2021,
    "cylindree": 471,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 7000,
    "valeurNeuf": 8000,
    "commentairePedagogique": "CB500 — moto A2 par excellence, très courante"
  },
  {
    "id": "M068",
    "marque": "Kawasaki",
    "modele": "Z 400",
    "version": "400cc ABS",
    "annee": 2019,
    "cylindree": 399,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5000,
    "valeurNeuf": 7500,
    "commentairePedagogique": null
  },
  {
    "id": "M069",
    "marque": "Kawasaki",
    "modele": "Z 400",
    "version": "400cc ABS",
    "annee": 2020,
    "cylindree": 399,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5500,
    "valeurNeuf": 7500,
    "commentairePedagogique": null
  },
  {
    "id": "M070",
    "marque": "Kawasaki",
    "modele": "Z 400",
    "version": "400cc ABS",
    "annee": 2021,
    "cylindree": 399,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 6000,
    "valeurNeuf": 7500,
    "commentairePedagogique": null
  },
  {
    "id": "M071",
    "marque": "Kawasaki",
    "modele": "Z 400",
    "version": "400cc ABS",
    "annee": 2022,
    "cylindree": 399,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 6500,
    "valeurNeuf": 7500,
    "commentairePedagogique": null
  },
  {
    "id": "M072",
    "marque": "Yamaha",
    "modele": "MT-03",
    "version": "321cc ABS",
    "annee": 2016,
    "cylindree": 321,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 3800,
    "valeurNeuf": 7000,
    "commentairePedagogique": "MT-03 — roadster A2 très vendu"
  },
  {
    "id": "M073",
    "marque": "Yamaha",
    "modele": "MT-03",
    "version": "321cc ABS",
    "annee": 2017,
    "cylindree": 321,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 4200,
    "valeurNeuf": 7000,
    "commentairePedagogique": "MT-03 — roadster A2 très vendu"
  },
  {
    "id": "M074",
    "marque": "Yamaha",
    "modele": "MT-03",
    "version": "321cc ABS",
    "annee": 2018,
    "cylindree": 321,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 4600,
    "valeurNeuf": 7000,
    "commentairePedagogique": "MT-03 — roadster A2 très vendu"
  },
  {
    "id": "M075",
    "marque": "Yamaha",
    "modele": "MT-03",
    "version": "321cc ABS",
    "annee": 2019,
    "cylindree": 321,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5000,
    "valeurNeuf": 7000,
    "commentairePedagogique": "MT-03 — roadster A2 très vendu"
  },
  {
    "id": "M076",
    "marque": "Yamaha",
    "modele": "MT-03",
    "version": "321cc ABS",
    "annee": 2020,
    "cylindree": 321,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5400,
    "valeurNeuf": 7000,
    "commentairePedagogique": "MT-03 — roadster A2 très vendu"
  },
  {
    "id": "M077",
    "marque": "Yamaha",
    "modele": "MT-03",
    "version": "321cc ABS",
    "annee": 2021,
    "cylindree": 321,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5800,
    "valeurNeuf": 7000,
    "commentairePedagogique": "MT-03 — roadster A2 très vendu"
  },
  {
    "id": "M078",
    "marque": "Yamaha",
    "modele": "MT-03",
    "version": "321cc ABS",
    "annee": 2022,
    "cylindree": 321,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 6200,
    "valeurNeuf": 7000,
    "commentairePedagogique": "MT-03 — roadster A2 très vendu"
  },
  {
    "id": "M079",
    "marque": "Honda",
    "modele": "CB 300 R",
    "version": "300cc ABS",
    "annee": 2018,
    "cylindree": 286,
    "puissanceKw": 24,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 4000,
    "valeurNeuf": 6500,
    "commentairePedagogique": null
  },
  {
    "id": "M080",
    "marque": "Honda",
    "modele": "CB 300 R",
    "version": "300cc ABS",
    "annee": 2019,
    "cylindree": 286,
    "puissanceKw": 24,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 4400,
    "valeurNeuf": 6500,
    "commentairePedagogique": null
  },
  {
    "id": "M081",
    "marque": "Honda",
    "modele": "CB 300 R",
    "version": "300cc ABS",
    "annee": 2020,
    "cylindree": 286,
    "puissanceKw": 24,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 4800,
    "valeurNeuf": 6500,
    "commentairePedagogique": null
  },
  {
    "id": "M082",
    "marque": "Honda",
    "modele": "CB 300 R",
    "version": "300cc ABS",
    "annee": 2021,
    "cylindree": 286,
    "puissanceKw": 24,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5200,
    "valeurNeuf": 6500,
    "commentairePedagogique": null
  },
  {
    "id": "M083",
    "marque": "Honda",
    "modele": "CB 300 R",
    "version": "300cc ABS",
    "annee": 2022,
    "cylindree": 286,
    "puissanceKw": 24,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5600,
    "valeurNeuf": 6500,
    "commentairePedagogique": null
  },
  {
    "id": "M084",
    "marque": "KTM",
    "modele": "Duke 390",
    "version": "390cc ABS",
    "annee": 2017,
    "cylindree": 373,
    "puissanceKw": 32,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 4500,
    "valeurNeuf": 7800,
    "commentairePedagogique": "Duke 390 — sportive A2, surreprésentée dans les sinistres jeunes"
  },
  {
    "id": "M085",
    "marque": "KTM",
    "modele": "Duke 390",
    "version": "390cc ABS",
    "annee": 2018,
    "cylindree": 373,
    "puissanceKw": 32,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5000,
    "valeurNeuf": 7800,
    "commentairePedagogique": "Duke 390 — sportive A2, surreprésentée dans les sinistres jeunes"
  },
  {
    "id": "M086",
    "marque": "KTM",
    "modele": "Duke 390",
    "version": "390cc ABS",
    "annee": 2019,
    "cylindree": 373,
    "puissanceKw": 32,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5500,
    "valeurNeuf": 7800,
    "commentairePedagogique": "Duke 390 — sportive A2, surreprésentée dans les sinistres jeunes"
  },
  {
    "id": "M087",
    "marque": "KTM",
    "modele": "Duke 390",
    "version": "390cc ABS",
    "annee": 2020,
    "cylindree": 373,
    "puissanceKw": 32,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 6000,
    "valeurNeuf": 7800,
    "commentairePedagogique": "Duke 390 — sportive A2, surreprésentée dans les sinistres jeunes"
  },
  {
    "id": "M088",
    "marque": "KTM",
    "modele": "Duke 390",
    "version": "390cc ABS",
    "annee": 2021,
    "cylindree": 373,
    "puissanceKw": 32,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 6500,
    "valeurNeuf": 7800,
    "commentairePedagogique": "Duke 390 — sportive A2, surreprésentée dans les sinistres jeunes"
  },
  {
    "id": "M089",
    "marque": "KTM",
    "modele": "Duke 390",
    "version": "390cc ABS",
    "annee": 2022,
    "cylindree": 373,
    "puissanceKw": 32,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 7000,
    "valeurNeuf": 7800,
    "commentairePedagogique": "Duke 390 — sportive A2, surreprésentée dans les sinistres jeunes"
  },
  {
    "id": "M090",
    "marque": "Royal Enfield",
    "modele": "Meteor 350",
    "version": "350cc",
    "annee": 2021,
    "cylindree": 349,
    "puissanceKw": 15,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 4500,
    "valeurNeuf": 5800,
    "commentairePedagogique": null
  },
  {
    "id": "M091",
    "marque": "Royal Enfield",
    "modele": "Meteor 350",
    "version": "350cc",
    "annee": 2022,
    "cylindree": 349,
    "puissanceKw": 15,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5000,
    "valeurNeuf": 5800,
    "commentairePedagogique": null
  },
  {
    "id": "M092",
    "marque": "Royal Enfield",
    "modele": "Meteor 350",
    "version": "350cc",
    "annee": 2023,
    "cylindree": 349,
    "puissanceKw": 15,
    "carburant": "essence",
    "typeMoto": "moto_moyenne",
    "valeurEstimee": 5500,
    "valeurNeuf": 5800,
    "commentairePedagogique": null
  },
  {
    "id": "M093",
    "marque": "Triumph",
    "modele": "Trident 660",
    "version": "660cc A2",
    "annee": 2021,
    "cylindree": 660,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_500",
    "valeurEstimee": 7000,
    "valeurNeuf": 9000,
    "commentairePedagogique": "660cc bridée A2 — cas intéressant débridage à l'accès A"
  },
  {
    "id": "M094",
    "marque": "Triumph",
    "modele": "Trident 660",
    "version": "660cc A2",
    "annee": 2022,
    "cylindree": 660,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_500",
    "valeurEstimee": 7500,
    "valeurNeuf": 9000,
    "commentairePedagogique": "660cc bridée A2 — cas intéressant débridage à l'accès A"
  },
  {
    "id": "M095",
    "marque": "Triumph",
    "modele": "Trident 660",
    "version": "660cc A2",
    "annee": 2023,
    "cylindree": 660,
    "puissanceKw": 35,
    "carburant": "essence",
    "typeMoto": "moto_500",
    "valeurEstimee": 8000,
    "valeurNeuf": 9000,
    "commentairePedagogique": "660cc bridée A2 — cas intéressant débridage à l'accès A"
  },
  {
    "id": "M096",
    "marque": "Honda",
    "modele": "CB 650 R",
    "version": "650cc ABS",
    "annee": 2019,
    "cylindree": 649,
    "puissanceKw": 70,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 7000,
    "valeurNeuf": 10000,
    "commentairePedagogique": "CB650 — roadster intermédiaire, bon équilibre"
  },
  {
    "id": "M097",
    "marque": "Honda",
    "modele": "CB 650 R",
    "version": "650cc ABS",
    "annee": 2020,
    "cylindree": 649,
    "puissanceKw": 70,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 7500,
    "valeurNeuf": 10000,
    "commentairePedagogique": "CB650 — roadster intermédiaire, bon équilibre"
  },
  {
    "id": "M098",
    "marque": "Honda",
    "modele": "CB 650 R",
    "version": "650cc ABS",
    "annee": 2021,
    "cylindree": 649,
    "puissanceKw": 70,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 8000,
    "valeurNeuf": 10000,
    "commentairePedagogique": "CB650 — roadster intermédiaire, bon équilibre"
  },
  {
    "id": "M099",
    "marque": "Honda",
    "modele": "CB 650 R",
    "version": "650cc ABS",
    "annee": 2022,
    "cylindree": 649,
    "puissanceKw": 70,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 8500,
    "valeurNeuf": 10000,
    "commentairePedagogique": "CB650 — roadster intermédiaire, bon équilibre"
  },
  {
    "id": "M100",
    "marque": "Honda",
    "modele": "CB 650 R",
    "version": "650cc ABS",
    "annee": 2023,
    "cylindree": 649,
    "puissanceKw": 70,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 9000,
    "valeurNeuf": 10000,
    "commentairePedagogique": "CB650 — roadster intermédiaire, bon équilibre"
  },
  {
    "id": "M101",
    "marque": "Yamaha",
    "modele": "MT-07",
    "version": "689cc ABS",
    "annee": 2015,
    "cylindree": 689,
    "puissanceKw": 55,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 5000,
    "valeurNeuf": 9000,
    "commentairePedagogique": "MT-07 — la moto la plus vendue en France sur plusieurs années"
  },
  {
    "id": "M102",
    "marque": "Yamaha",
    "modele": "MT-07",
    "version": "689cc ABS",
    "annee": 2016,
    "cylindree": 689,
    "puissanceKw": 55,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 5500,
    "valeurNeuf": 9000,
    "commentairePedagogique": "MT-07 — la moto la plus vendue en France sur plusieurs années"
  },
  {
    "id": "M103",
    "marque": "Yamaha",
    "modele": "MT-07",
    "version": "689cc ABS",
    "annee": 2017,
    "cylindree": 689,
    "puissanceKw": 55,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 6000,
    "valeurNeuf": 9000,
    "commentairePedagogique": "MT-07 — la moto la plus vendue en France sur plusieurs années"
  },
  {
    "id": "M104",
    "marque": "Yamaha",
    "modele": "MT-07",
    "version": "689cc ABS",
    "annee": 2018,
    "cylindree": 689,
    "puissanceKw": 55,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 6500,
    "valeurNeuf": 9000,
    "commentairePedagogique": "MT-07 — la moto la plus vendue en France sur plusieurs années"
  },
  {
    "id": "M105",
    "marque": "Yamaha",
    "modele": "MT-07",
    "version": "689cc ABS",
    "annee": 2019,
    "cylindree": 689,
    "puissanceKw": 55,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 7000,
    "valeurNeuf": 9000,
    "commentairePedagogique": "MT-07 — la moto la plus vendue en France sur plusieurs années"
  },
  {
    "id": "M106",
    "marque": "Yamaha",
    "modele": "MT-07",
    "version": "689cc ABS",
    "annee": 2020,
    "cylindree": 689,
    "puissanceKw": 55,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 7500,
    "valeurNeuf": 9000,
    "commentairePedagogique": "MT-07 — la moto la plus vendue en France sur plusieurs années"
  },
  {
    "id": "M107",
    "marque": "Yamaha",
    "modele": "MT-07",
    "version": "689cc ABS",
    "annee": 2021,
    "cylindree": 689,
    "puissanceKw": 55,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 8000,
    "valeurNeuf": 9000,
    "commentairePedagogique": "MT-07 — la moto la plus vendue en France sur plusieurs années"
  },
  {
    "id": "M108",
    "marque": "Yamaha",
    "modele": "MT-07",
    "version": "689cc ABS",
    "annee": 2022,
    "cylindree": 689,
    "puissanceKw": 55,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 8500,
    "valeurNeuf": 9000,
    "commentairePedagogique": "MT-07 — la moto la plus vendue en France sur plusieurs années"
  },
  {
    "id": "M109",
    "marque": "Kawasaki",
    "modele": "Z 650",
    "version": "650cc ABS",
    "annee": 2017,
    "cylindree": 649,
    "puissanceKw": 50,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 5500,
    "valeurNeuf": 8500,
    "commentairePedagogique": null
  },
  {
    "id": "M110",
    "marque": "Kawasaki",
    "modele": "Z 650",
    "version": "650cc ABS",
    "annee": 2018,
    "cylindree": 649,
    "puissanceKw": 50,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 6000,
    "valeurNeuf": 8500,
    "commentairePedagogique": null
  },
  {
    "id": "M111",
    "marque": "Kawasaki",
    "modele": "Z 650",
    "version": "650cc ABS",
    "annee": 2019,
    "cylindree": 649,
    "puissanceKw": 50,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 6500,
    "valeurNeuf": 8500,
    "commentairePedagogique": null
  },
  {
    "id": "M112",
    "marque": "Kawasaki",
    "modele": "Z 650",
    "version": "650cc ABS",
    "annee": 2020,
    "cylindree": 649,
    "puissanceKw": 50,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 7000,
    "valeurNeuf": 8500,
    "commentairePedagogique": null
  },
  {
    "id": "M113",
    "marque": "Kawasaki",
    "modele": "Z 650",
    "version": "650cc ABS",
    "annee": 2021,
    "cylindree": 649,
    "puissanceKw": 50,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 7500,
    "valeurNeuf": 8500,
    "commentairePedagogique": null
  },
  {
    "id": "M114",
    "marque": "Kawasaki",
    "modele": "Z 650",
    "version": "650cc ABS",
    "annee": 2022,
    "cylindree": 649,
    "puissanceKw": 50,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 8000,
    "valeurNeuf": 8500,
    "commentairePedagogique": null
  },
  {
    "id": "M115",
    "marque": "Honda",
    "modele": "CB 750 Hornet",
    "version": "750cc ABS",
    "annee": 2023,
    "cylindree": 755,
    "puissanceKw": 67,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 9000,
    "valeurNeuf": 10500,
    "commentairePedagogique": null
  },
  {
    "id": "M116",
    "marque": "BMW",
    "modele": "F 900 R",
    "version": "895cc ABS",
    "annee": 2020,
    "cylindree": 895,
    "puissanceKw": 77,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 8500,
    "valeurNeuf": 12000,
    "commentairePedagogique": null
  },
  {
    "id": "M117",
    "marque": "BMW",
    "modele": "F 900 R",
    "version": "895cc ABS",
    "annee": 2021,
    "cylindree": 895,
    "puissanceKw": 77,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 9000,
    "valeurNeuf": 12000,
    "commentairePedagogique": null
  },
  {
    "id": "M118",
    "marque": "BMW",
    "modele": "F 900 R",
    "version": "895cc ABS",
    "annee": 2022,
    "cylindree": 895,
    "puissanceKw": 77,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 9500,
    "valeurNeuf": 12000,
    "commentairePedagogique": null
  },
  {
    "id": "M119",
    "marque": "BMW",
    "modele": "F 900 R",
    "version": "895cc ABS",
    "annee": 2023,
    "cylindree": 895,
    "puissanceKw": 77,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 10000,
    "valeurNeuf": 12000,
    "commentairePedagogique": null
  },
  {
    "id": "M120",
    "marque": "Triumph",
    "modele": "Street Triple",
    "version": "765cc R ABS",
    "annee": 2017,
    "cylindree": 765,
    "puissanceKw": 88,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 8000,
    "valeurNeuf": 13000,
    "commentairePedagogique": "Street Triple — roadster sportif très apprécié"
  },
  {
    "id": "M121",
    "marque": "Triumph",
    "modele": "Street Triple",
    "version": "765cc R ABS",
    "annee": 2018,
    "cylindree": 765,
    "puissanceKw": 88,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 8500,
    "valeurNeuf": 13000,
    "commentairePedagogique": "Street Triple — roadster sportif très apprécié"
  },
  {
    "id": "M122",
    "marque": "Triumph",
    "modele": "Street Triple",
    "version": "765cc R ABS",
    "annee": 2019,
    "cylindree": 765,
    "puissanceKw": 88,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 9000,
    "valeurNeuf": 13000,
    "commentairePedagogique": "Street Triple — roadster sportif très apprécié"
  },
  {
    "id": "M123",
    "marque": "Triumph",
    "modele": "Street Triple",
    "version": "765cc R ABS",
    "annee": 2020,
    "cylindree": 765,
    "puissanceKw": 88,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 9500,
    "valeurNeuf": 13000,
    "commentairePedagogique": "Street Triple — roadster sportif très apprécié"
  },
  {
    "id": "M124",
    "marque": "Triumph",
    "modele": "Street Triple",
    "version": "765cc R ABS",
    "annee": 2021,
    "cylindree": 765,
    "puissanceKw": 88,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 10000,
    "valeurNeuf": 13000,
    "commentairePedagogique": "Street Triple — roadster sportif très apprécié"
  },
  {
    "id": "M125",
    "marque": "Triumph",
    "modele": "Street Triple",
    "version": "765cc R ABS",
    "annee": 2022,
    "cylindree": 765,
    "puissanceKw": 88,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 10500,
    "valeurNeuf": 13000,
    "commentairePedagogique": "Street Triple — roadster sportif très apprécié"
  },
  {
    "id": "M126",
    "marque": "Ducati",
    "modele": "Monster 937",
    "version": "937cc ABS",
    "annee": 2021,
    "cylindree": 937,
    "puissanceKw": 82,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 12000,
    "valeurNeuf": 16000,
    "commentairePedagogique": "Ducati — prime élevée, bon cas pédagogique premium"
  },
  {
    "id": "M127",
    "marque": "Ducati",
    "modele": "Monster 937",
    "version": "937cc ABS",
    "annee": 2022,
    "cylindree": 937,
    "puissanceKw": 82,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 13000,
    "valeurNeuf": 16000,
    "commentairePedagogique": "Ducati — prime élevée, bon cas pédagogique premium"
  },
  {
    "id": "M128",
    "marque": "Ducati",
    "modele": "Monster 937",
    "version": "937cc ABS",
    "annee": 2023,
    "cylindree": 937,
    "puissanceKw": 82,
    "carburant": "essence",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 14000,
    "valeurNeuf": 16000,
    "commentairePedagogique": "Ducati — prime élevée, bon cas pédagogique premium"
  },
  {
    "id": "M129",
    "marque": "Honda",
    "modele": "Africa Twin",
    "version": "1084cc DCT ABS",
    "annee": 2020,
    "cylindree": 1084,
    "puissanceKw": 75,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 11000,
    "valeurNeuf": 16500,
    "commentairePedagogique": "Trail emblématique — touring longue distance"
  },
  {
    "id": "M130",
    "marque": "Honda",
    "modele": "Africa Twin",
    "version": "1084cc DCT ABS",
    "annee": 2021,
    "cylindree": 1084,
    "puissanceKw": 75,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 12000,
    "valeurNeuf": 16500,
    "commentairePedagogique": "Trail emblématique — touring longue distance"
  },
  {
    "id": "M131",
    "marque": "Honda",
    "modele": "Africa Twin",
    "version": "1084cc DCT ABS",
    "annee": 2022,
    "cylindree": 1084,
    "puissanceKw": 75,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 13000,
    "valeurNeuf": 16500,
    "commentairePedagogique": "Trail emblématique — touring longue distance"
  },
  {
    "id": "M132",
    "marque": "Honda",
    "modele": "Africa Twin",
    "version": "1084cc DCT ABS",
    "annee": 2023,
    "cylindree": 1084,
    "puissanceKw": 75,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 14000,
    "valeurNeuf": 16500,
    "commentairePedagogique": "Trail emblématique — touring longue distance"
  },
  {
    "id": "M133",
    "marque": "Honda",
    "modele": "Africa Twin",
    "version": "1100cc Adventure",
    "annee": 2021,
    "cylindree": 1084,
    "puissanceKw": 75,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 13000,
    "valeurNeuf": 16500,
    "commentairePedagogique": "Trail emblématique — touring longue distance"
  },
  {
    "id": "M134",
    "marque": "Honda",
    "modele": "Africa Twin",
    "version": "1100cc Adventure",
    "annee": 2022,
    "cylindree": 1084,
    "puissanceKw": 75,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 14000,
    "valeurNeuf": 16500,
    "commentairePedagogique": "Trail emblématique — touring longue distance"
  },
  {
    "id": "M135",
    "marque": "Honda",
    "modele": "Africa Twin",
    "version": "1100cc Adventure",
    "annee": 2023,
    "cylindree": 1084,
    "puissanceKw": 75,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 15000,
    "valeurNeuf": 16500,
    "commentairePedagogique": "Trail emblématique — touring longue distance"
  },
  {
    "id": "M136",
    "marque": "BMW",
    "modele": "GS 1250",
    "version": "R1250GS ABS",
    "annee": 2019,
    "cylindree": 1254,
    "puissanceKw": 100,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 12000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "BMW GS — la trail premium la plus vendue au monde"
  },
  {
    "id": "M137",
    "marque": "BMW",
    "modele": "GS 1250",
    "version": "R1250GS ABS",
    "annee": 2020,
    "cylindree": 1254,
    "puissanceKw": 100,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 13000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "BMW GS — la trail premium la plus vendue au monde"
  },
  {
    "id": "M138",
    "marque": "BMW",
    "modele": "GS 1250",
    "version": "R1250GS ABS",
    "annee": 2021,
    "cylindree": 1254,
    "puissanceKw": 100,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 14000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "BMW GS — la trail premium la plus vendue au monde"
  },
  {
    "id": "M139",
    "marque": "BMW",
    "modele": "GS 1250",
    "version": "R1250GS ABS",
    "annee": 2022,
    "cylindree": 1254,
    "puissanceKw": 100,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 15000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "BMW GS — la trail premium la plus vendue au monde"
  },
  {
    "id": "M140",
    "marque": "BMW",
    "modele": "GS 1250",
    "version": "R1250GS ABS",
    "annee": 2023,
    "cylindree": 1254,
    "puissanceKw": 100,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 16000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "BMW GS — la trail premium la plus vendue au monde"
  },
  {
    "id": "M141",
    "marque": "BMW",
    "modele": "GS 1250",
    "version": "R1250GS Adventure",
    "annee": 2019,
    "cylindree": 1254,
    "puissanceKw": 100,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 14000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "BMW GS — la trail premium la plus vendue au monde"
  },
  {
    "id": "M142",
    "marque": "BMW",
    "modele": "GS 1250",
    "version": "R1250GS Adventure",
    "annee": 2020,
    "cylindree": 1254,
    "puissanceKw": 100,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 15000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "BMW GS — la trail premium la plus vendue au monde"
  },
  {
    "id": "M143",
    "marque": "BMW",
    "modele": "GS 1250",
    "version": "R1250GS Adventure",
    "annee": 2021,
    "cylindree": 1254,
    "puissanceKw": 100,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 16000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "BMW GS — la trail premium la plus vendue au monde"
  },
  {
    "id": "M144",
    "marque": "BMW",
    "modele": "GS 1250",
    "version": "R1250GS Adventure",
    "annee": 2022,
    "cylindree": 1254,
    "puissanceKw": 100,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 17000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "BMW GS — la trail premium la plus vendue au monde"
  },
  {
    "id": "M145",
    "marque": "BMW",
    "modele": "GS 1250",
    "version": "R1250GS Adventure",
    "annee": 2023,
    "cylindree": 1254,
    "puissanceKw": 100,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 18000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "BMW GS — la trail premium la plus vendue au monde"
  },
  {
    "id": "M146",
    "marque": "Kawasaki",
    "modele": "Versys 1000",
    "version": "1043cc ABS",
    "annee": 2019,
    "cylindree": 1043,
    "puissanceKw": 88,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 9000,
    "valeurNeuf": 14000,
    "commentairePedagogique": null
  },
  {
    "id": "M147",
    "marque": "Kawasaki",
    "modele": "Versys 1000",
    "version": "1043cc ABS",
    "annee": 2020,
    "cylindree": 1043,
    "puissanceKw": 88,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 9500,
    "valeurNeuf": 14000,
    "commentairePedagogique": null
  },
  {
    "id": "M148",
    "marque": "Kawasaki",
    "modele": "Versys 1000",
    "version": "1043cc ABS",
    "annee": 2021,
    "cylindree": 1043,
    "puissanceKw": 88,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 10000,
    "valeurNeuf": 14000,
    "commentairePedagogique": null
  },
  {
    "id": "M149",
    "marque": "Kawasaki",
    "modele": "Versys 1000",
    "version": "1043cc ABS",
    "annee": 2022,
    "cylindree": 1043,
    "puissanceKw": 88,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 10500,
    "valeurNeuf": 14000,
    "commentairePedagogique": null
  },
  {
    "id": "M150",
    "marque": "Yamaha",
    "modele": "Ténéré 700",
    "version": "689cc ABS",
    "annee": 2019,
    "cylindree": 689,
    "puissanceKw": 54,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 7500,
    "valeurNeuf": 11000,
    "commentairePedagogique": "Trail accessible A2 compatible — usage aventure"
  },
  {
    "id": "M151",
    "marque": "Yamaha",
    "modele": "Ténéré 700",
    "version": "689cc ABS",
    "annee": 2020,
    "cylindree": 689,
    "puissanceKw": 54,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 8000,
    "valeurNeuf": 11000,
    "commentairePedagogique": "Trail accessible A2 compatible — usage aventure"
  },
  {
    "id": "M152",
    "marque": "Yamaha",
    "modele": "Ténéré 700",
    "version": "689cc ABS",
    "annee": 2021,
    "cylindree": 689,
    "puissanceKw": 54,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 8500,
    "valeurNeuf": 11000,
    "commentairePedagogique": "Trail accessible A2 compatible — usage aventure"
  },
  {
    "id": "M153",
    "marque": "Yamaha",
    "modele": "Ténéré 700",
    "version": "689cc ABS",
    "annee": 2022,
    "cylindree": 689,
    "puissanceKw": 54,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 9000,
    "valeurNeuf": 11000,
    "commentairePedagogique": "Trail accessible A2 compatible — usage aventure"
  },
  {
    "id": "M154",
    "marque": "Yamaha",
    "modele": "Ténéré 700",
    "version": "689cc ABS",
    "annee": 2023,
    "cylindree": 689,
    "puissanceKw": 54,
    "carburant": "essence",
    "typeMoto": "moto_trail",
    "valeurEstimee": 9500,
    "valeurNeuf": 11000,
    "commentairePedagogique": "Trail accessible A2 compatible — usage aventure"
  },
  {
    "id": "M155",
    "marque": "Yamaha",
    "modele": "R6",
    "version": "599cc ABS",
    "annee": 2017,
    "cylindree": 599,
    "puissanceKw": 92,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 9000,
    "valeurNeuf": 13500,
    "commentairePedagogique": "R6 — sportive pure, surprime jeune conducteur très élevée"
  },
  {
    "id": "M156",
    "marque": "Yamaha",
    "modele": "R6",
    "version": "599cc ABS",
    "annee": 2018,
    "cylindree": 599,
    "puissanceKw": 92,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 9500,
    "valeurNeuf": 13500,
    "commentairePedagogique": "R6 — sportive pure, surprime jeune conducteur très élevée"
  },
  {
    "id": "M157",
    "marque": "Yamaha",
    "modele": "R6",
    "version": "599cc ABS",
    "annee": 2019,
    "cylindree": 599,
    "puissanceKw": 92,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 10000,
    "valeurNeuf": 13500,
    "commentairePedagogique": "R6 — sportive pure, surprime jeune conducteur très élevée"
  },
  {
    "id": "M158",
    "marque": "Yamaha",
    "modele": "R6",
    "version": "599cc ABS",
    "annee": 2020,
    "cylindree": 599,
    "puissanceKw": 92,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 10500,
    "valeurNeuf": 13500,
    "commentairePedagogique": "R6 — sportive pure, surprime jeune conducteur très élevée"
  },
  {
    "id": "M159",
    "marque": "Honda",
    "modele": "CBR 600 RR",
    "version": "599cc",
    "annee": 2016,
    "cylindree": 599,
    "puissanceKw": 87,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 7500,
    "valeurNeuf": 13000,
    "commentairePedagogique": null
  },
  {
    "id": "M160",
    "marque": "Honda",
    "modele": "CBR 600 RR",
    "version": "599cc",
    "annee": 2017,
    "cylindree": 599,
    "puissanceKw": 87,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 8000,
    "valeurNeuf": 13000,
    "commentairePedagogique": null
  },
  {
    "id": "M161",
    "marque": "Honda",
    "modele": "CBR 600 RR",
    "version": "599cc",
    "annee": 2018,
    "cylindree": 599,
    "puissanceKw": 87,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 8500,
    "valeurNeuf": 13000,
    "commentairePedagogique": null
  },
  {
    "id": "M162",
    "marque": "Honda",
    "modele": "CBR 600 RR",
    "version": "599cc",
    "annee": 2019,
    "cylindree": 599,
    "puissanceKw": 87,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 9000,
    "valeurNeuf": 13000,
    "commentairePedagogique": null
  },
  {
    "id": "M163",
    "marque": "Kawasaki",
    "modele": "ZX-6R",
    "version": "636cc ABS",
    "annee": 2019,
    "cylindree": 636,
    "puissanceKw": 97,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 9500,
    "valeurNeuf": 14000,
    "commentairePedagogique": null
  },
  {
    "id": "M164",
    "marque": "Kawasaki",
    "modele": "ZX-6R",
    "version": "636cc ABS",
    "annee": 2020,
    "cylindree": 636,
    "puissanceKw": 97,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 10000,
    "valeurNeuf": 14000,
    "commentairePedagogique": null
  },
  {
    "id": "M165",
    "marque": "Kawasaki",
    "modele": "ZX-6R",
    "version": "636cc ABS",
    "annee": 2021,
    "cylindree": 636,
    "puissanceKw": 97,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 10500,
    "valeurNeuf": 14000,
    "commentairePedagogique": null
  },
  {
    "id": "M166",
    "marque": "Kawasaki",
    "modele": "ZX-6R",
    "version": "636cc ABS",
    "annee": 2022,
    "cylindree": 636,
    "puissanceKw": 97,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 11000,
    "valeurNeuf": 14000,
    "commentairePedagogique": null
  },
  {
    "id": "M167",
    "marque": "Yamaha",
    "modele": "R1",
    "version": "998cc ABS",
    "annee": 2018,
    "cylindree": 998,
    "puissanceKw": 147,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 13000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "R1 — superbike, prime extrêmement élevée, refus fréquents"
  },
  {
    "id": "M168",
    "marque": "Yamaha",
    "modele": "R1",
    "version": "998cc ABS",
    "annee": 2019,
    "cylindree": 998,
    "puissanceKw": 147,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 14000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "R1 — superbike, prime extrêmement élevée, refus fréquents"
  },
  {
    "id": "M169",
    "marque": "Yamaha",
    "modele": "R1",
    "version": "998cc ABS",
    "annee": 2020,
    "cylindree": 998,
    "puissanceKw": 147,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 15000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "R1 — superbike, prime extrêmement élevée, refus fréquents"
  },
  {
    "id": "M170",
    "marque": "Yamaha",
    "modele": "R1",
    "version": "998cc ABS",
    "annee": 2021,
    "cylindree": 998,
    "puissanceKw": 147,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 16000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "R1 — superbike, prime extrêmement élevée, refus fréquents"
  },
  {
    "id": "M171",
    "marque": "Yamaha",
    "modele": "R1",
    "version": "998cc ABS",
    "annee": 2022,
    "cylindree": 998,
    "puissanceKw": 147,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 17000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "R1 — superbike, prime extrêmement élevée, refus fréquents"
  },
  {
    "id": "M172",
    "marque": "Kawasaki",
    "modele": "ZX-10R",
    "version": "998cc ABS",
    "annee": 2018,
    "cylindree": 998,
    "puissanceKw": 150,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 12000,
    "valeurNeuf": 20000,
    "commentairePedagogique": null
  },
  {
    "id": "M173",
    "marque": "Kawasaki",
    "modele": "ZX-10R",
    "version": "998cc ABS",
    "annee": 2019,
    "cylindree": 998,
    "puissanceKw": 150,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 13000,
    "valeurNeuf": 20000,
    "commentairePedagogique": null
  },
  {
    "id": "M174",
    "marque": "Kawasaki",
    "modele": "ZX-10R",
    "version": "998cc ABS",
    "annee": 2020,
    "cylindree": 998,
    "puissanceKw": 150,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 14000,
    "valeurNeuf": 20000,
    "commentairePedagogique": null
  },
  {
    "id": "M175",
    "marque": "Kawasaki",
    "modele": "ZX-10R",
    "version": "998cc ABS",
    "annee": 2021,
    "cylindree": 998,
    "puissanceKw": 150,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 15000,
    "valeurNeuf": 20000,
    "commentairePedagogique": null
  },
  {
    "id": "M176",
    "marque": "Kawasaki",
    "modele": "ZX-10R",
    "version": "998cc ABS",
    "annee": 2022,
    "cylindree": 998,
    "puissanceKw": 150,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 16000,
    "valeurNeuf": 20000,
    "commentairePedagogique": null
  },
  {
    "id": "M177",
    "marque": "Ducati",
    "modele": "Panigale V4",
    "version": "1103cc ABS",
    "annee": 2020,
    "cylindree": 1103,
    "puissanceKw": 153,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 20000,
    "valeurNeuf": 30000,
    "commentairePedagogique": "Superbike premium — cas extrême tarification élevée"
  },
  {
    "id": "M178",
    "marque": "Ducati",
    "modele": "Panigale V4",
    "version": "1103cc ABS",
    "annee": 2021,
    "cylindree": 1103,
    "puissanceKw": 153,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 22000,
    "valeurNeuf": 30000,
    "commentairePedagogique": "Superbike premium — cas extrême tarification élevée"
  },
  {
    "id": "M179",
    "marque": "Ducati",
    "modele": "Panigale V4",
    "version": "1103cc ABS",
    "annee": 2022,
    "cylindree": 1103,
    "puissanceKw": 153,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 24000,
    "valeurNeuf": 30000,
    "commentairePedagogique": "Superbike premium — cas extrême tarification élevée"
  },
  {
    "id": "M180",
    "marque": "Ducati",
    "modele": "Panigale V4",
    "version": "1103cc ABS",
    "annee": 2023,
    "cylindree": 1103,
    "puissanceKw": 153,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 26000,
    "valeurNeuf": 30000,
    "commentairePedagogique": "Superbike premium — cas extrême tarification élevée"
  },
  {
    "id": "M181",
    "marque": "BMW",
    "modele": "S1000RR",
    "version": "999cc ABS",
    "annee": 2019,
    "cylindree": 999,
    "puissanceKw": 152,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 15000,
    "valeurNeuf": 22000,
    "commentairePedagogique": null
  },
  {
    "id": "M182",
    "marque": "BMW",
    "modele": "S1000RR",
    "version": "999cc ABS",
    "annee": 2020,
    "cylindree": 999,
    "puissanceKw": 152,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 16000,
    "valeurNeuf": 22000,
    "commentairePedagogique": null
  },
  {
    "id": "M183",
    "marque": "BMW",
    "modele": "S1000RR",
    "version": "999cc ABS",
    "annee": 2021,
    "cylindree": 999,
    "puissanceKw": 152,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 17000,
    "valeurNeuf": 22000,
    "commentairePedagogique": null
  },
  {
    "id": "M184",
    "marque": "BMW",
    "modele": "S1000RR",
    "version": "999cc ABS",
    "annee": 2022,
    "cylindree": 999,
    "puissanceKw": 152,
    "carburant": "essence",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 18000,
    "valeurNeuf": 22000,
    "commentairePedagogique": null
  },
  {
    "id": "M185",
    "marque": "Harley-Davidson",
    "modele": "Sportster S",
    "version": "1252cc Revolution Max",
    "annee": 2021,
    "cylindree": 1252,
    "puissanceKw": 90,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 15000,
    "valeurNeuf": 18000,
    "commentairePedagogique": "Harley — custom emblématique, usage loisir, sinistralité modérée"
  },
  {
    "id": "M186",
    "marque": "Harley-Davidson",
    "modele": "Sportster S",
    "version": "1252cc Revolution Max",
    "annee": 2022,
    "cylindree": 1252,
    "puissanceKw": 90,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 16000,
    "valeurNeuf": 18000,
    "commentairePedagogique": "Harley — custom emblématique, usage loisir, sinistralité modérée"
  },
  {
    "id": "M187",
    "marque": "Harley-Davidson",
    "modele": "Sportster S",
    "version": "1252cc Revolution Max",
    "annee": 2023,
    "cylindree": 1252,
    "puissanceKw": 90,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 17000,
    "valeurNeuf": 18000,
    "commentairePedagogique": "Harley — custom emblématique, usage loisir, sinistralité modérée"
  },
  {
    "id": "M188",
    "marque": "Indian",
    "modele": "Scout",
    "version": "1133cc",
    "annee": 2018,
    "cylindree": 1133,
    "puissanceKw": 69,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 12000,
    "valeurNeuf": 18000,
    "commentairePedagogique": null
  },
  {
    "id": "M189",
    "marque": "Indian",
    "modele": "Scout",
    "version": "1133cc",
    "annee": 2019,
    "cylindree": 1133,
    "puissanceKw": 69,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 13000,
    "valeurNeuf": 18000,
    "commentairePedagogique": null
  },
  {
    "id": "M190",
    "marque": "Indian",
    "modele": "Scout",
    "version": "1133cc",
    "annee": 2020,
    "cylindree": 1133,
    "puissanceKw": 69,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 14000,
    "valeurNeuf": 18000,
    "commentairePedagogique": null
  },
  {
    "id": "M191",
    "marque": "Indian",
    "modele": "Scout",
    "version": "1133cc",
    "annee": 2021,
    "cylindree": 1133,
    "puissanceKw": 69,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 15000,
    "valeurNeuf": 18000,
    "commentairePedagogique": null
  },
  {
    "id": "M192",
    "marque": "Indian",
    "modele": "Scout",
    "version": "1133cc",
    "annee": 2022,
    "cylindree": 1133,
    "puissanceKw": 69,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 16000,
    "valeurNeuf": 18000,
    "commentairePedagogique": null
  },
  {
    "id": "M193",
    "marque": "Kawasaki",
    "modele": "Vulcan S",
    "version": "649cc ABS",
    "annee": 2017,
    "cylindree": 649,
    "puissanceKw": 44,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 5500,
    "valeurNeuf": 9000,
    "commentairePedagogique": null
  },
  {
    "id": "M194",
    "marque": "Kawasaki",
    "modele": "Vulcan S",
    "version": "649cc ABS",
    "annee": 2018,
    "cylindree": 649,
    "puissanceKw": 44,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 6000,
    "valeurNeuf": 9000,
    "commentairePedagogique": null
  },
  {
    "id": "M195",
    "marque": "Kawasaki",
    "modele": "Vulcan S",
    "version": "649cc ABS",
    "annee": 2019,
    "cylindree": 649,
    "puissanceKw": 44,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 6500,
    "valeurNeuf": 9000,
    "commentairePedagogique": null
  },
  {
    "id": "M196",
    "marque": "Kawasaki",
    "modele": "Vulcan S",
    "version": "649cc ABS",
    "annee": 2020,
    "cylindree": 649,
    "puissanceKw": 44,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 7000,
    "valeurNeuf": 9000,
    "commentairePedagogique": null
  },
  {
    "id": "M197",
    "marque": "Kawasaki",
    "modele": "Vulcan S",
    "version": "649cc ABS",
    "annee": 2021,
    "cylindree": 649,
    "puissanceKw": 44,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 7500,
    "valeurNeuf": 9000,
    "commentairePedagogique": null
  },
  {
    "id": "M198",
    "marque": "Kawasaki",
    "modele": "Vulcan S",
    "version": "650cc Café",
    "annee": 2017,
    "cylindree": 649,
    "puissanceKw": 44,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 6000,
    "valeurNeuf": 9000,
    "commentairePedagogique": null
  },
  {
    "id": "M199",
    "marque": "Kawasaki",
    "modele": "Vulcan S",
    "version": "650cc Café",
    "annee": 2018,
    "cylindree": 649,
    "puissanceKw": 44,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 6500,
    "valeurNeuf": 9000,
    "commentairePedagogique": null
  },
  {
    "id": "M200",
    "marque": "Kawasaki",
    "modele": "Vulcan S",
    "version": "650cc Café",
    "annee": 2019,
    "cylindree": 649,
    "puissanceKw": 44,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 7000,
    "valeurNeuf": 9000,
    "commentairePedagogique": null
  },
  {
    "id": "M201",
    "marque": "Royal Enfield",
    "modele": "Classic 350",
    "version": "349cc",
    "annee": 2021,
    "cylindree": 349,
    "puissanceKw": 15,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 4500,
    "valeurNeuf": 5800,
    "commentairePedagogique": "Custom abordable A2 — croissance forte en France"
  },
  {
    "id": "M202",
    "marque": "Royal Enfield",
    "modele": "Classic 350",
    "version": "349cc",
    "annee": 2022,
    "cylindree": 349,
    "puissanceKw": 15,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 5000,
    "valeurNeuf": 5800,
    "commentairePedagogique": "Custom abordable A2 — croissance forte en France"
  },
  {
    "id": "M203",
    "marque": "Royal Enfield",
    "modele": "Classic 350",
    "version": "349cc",
    "annee": 2023,
    "cylindree": 349,
    "puissanceKw": 15,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 5500,
    "valeurNeuf": 5800,
    "commentairePedagogique": "Custom abordable A2 — croissance forte en France"
  },
  {
    "id": "M204",
    "marque": "Honda",
    "modele": "CMX 500 Rebel",
    "version": "471cc ABS",
    "annee": 2017,
    "cylindree": 471,
    "puissanceKw": 33,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 5000,
    "valeurNeuf": 8500,
    "commentairePedagogique": "Custom A2 — très apprécié comme premier custom"
  },
  {
    "id": "M205",
    "marque": "Honda",
    "modele": "CMX 500 Rebel",
    "version": "471cc ABS",
    "annee": 2018,
    "cylindree": 471,
    "puissanceKw": 33,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 5500,
    "valeurNeuf": 8500,
    "commentairePedagogique": "Custom A2 — très apprécié comme premier custom"
  },
  {
    "id": "M206",
    "marque": "Honda",
    "modele": "CMX 500 Rebel",
    "version": "471cc ABS",
    "annee": 2019,
    "cylindree": 471,
    "puissanceKw": 33,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 6000,
    "valeurNeuf": 8500,
    "commentairePedagogique": "Custom A2 — très apprécié comme premier custom"
  },
  {
    "id": "M207",
    "marque": "Honda",
    "modele": "CMX 500 Rebel",
    "version": "471cc ABS",
    "annee": 2020,
    "cylindree": 471,
    "puissanceKw": 33,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 6500,
    "valeurNeuf": 8500,
    "commentairePedagogique": "Custom A2 — très apprécié comme premier custom"
  },
  {
    "id": "M208",
    "marque": "Honda",
    "modele": "CMX 500 Rebel",
    "version": "471cc ABS",
    "annee": 2021,
    "cylindree": 471,
    "puissanceKw": 33,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 7000,
    "valeurNeuf": 8500,
    "commentairePedagogique": "Custom A2 — très apprécié comme premier custom"
  },
  {
    "id": "M209",
    "marque": "Honda",
    "modele": "CMX 500 Rebel",
    "version": "471cc ABS",
    "annee": 2022,
    "cylindree": 471,
    "puissanceKw": 33,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 7500,
    "valeurNeuf": 8500,
    "commentairePedagogique": "Custom A2 — très apprécié comme premier custom"
  },
  {
    "id": "M210",
    "marque": "BMW",
    "modele": "R nineT",
    "version": "1170cc ABS",
    "annee": 2017,
    "cylindree": 1170,
    "puissanceKw": 81,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 10000,
    "valeurNeuf": 16000,
    "commentairePedagogique": null
  },
  {
    "id": "M211",
    "marque": "BMW",
    "modele": "R nineT",
    "version": "1170cc ABS",
    "annee": 2018,
    "cylindree": 1170,
    "puissanceKw": 81,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 11000,
    "valeurNeuf": 16000,
    "commentairePedagogique": null
  },
  {
    "id": "M212",
    "marque": "BMW",
    "modele": "R nineT",
    "version": "1170cc ABS",
    "annee": 2019,
    "cylindree": 1170,
    "puissanceKw": 81,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 12000,
    "valeurNeuf": 16000,
    "commentairePedagogique": null
  },
  {
    "id": "M213",
    "marque": "BMW",
    "modele": "R nineT",
    "version": "1170cc ABS",
    "annee": 2020,
    "cylindree": 1170,
    "puissanceKw": 81,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 13000,
    "valeurNeuf": 16000,
    "commentairePedagogique": null
  },
  {
    "id": "M214",
    "marque": "BMW",
    "modele": "R nineT",
    "version": "1170cc ABS",
    "annee": 2021,
    "cylindree": 1170,
    "puissanceKw": 81,
    "carburant": "essence",
    "typeMoto": "moto_custom",
    "valeurEstimee": 14000,
    "valeurNeuf": 16000,
    "commentairePedagogique": null
  },
  {
    "id": "M215",
    "marque": "Zero",
    "modele": "SR/F",
    "version": "14.4 kWh",
    "annee": 2020,
    "cylindree": null,
    "puissanceKw": 82,
    "carburant": "electrique",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 12000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "Moto électrique — cas spécifique tarification, fiscalité avantageuse"
  },
  {
    "id": "M216",
    "marque": "Zero",
    "modele": "SR/F",
    "version": "14.4 kWh",
    "annee": 2021,
    "cylindree": null,
    "puissanceKw": 82,
    "carburant": "electrique",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 13000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "Moto électrique — cas spécifique tarification, fiscalité avantageuse"
  },
  {
    "id": "M217",
    "marque": "Zero",
    "modele": "SR/F",
    "version": "14.4 kWh",
    "annee": 2022,
    "cylindree": null,
    "puissanceKw": 82,
    "carburant": "electrique",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 14000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "Moto électrique — cas spécifique tarification, fiscalité avantageuse"
  },
  {
    "id": "M218",
    "marque": "Zero",
    "modele": "SR/F",
    "version": "14.4 kWh",
    "annee": 2023,
    "cylindree": null,
    "puissanceKw": 82,
    "carburant": "electrique",
    "typeMoto": "moto_grosse",
    "valeurEstimee": 15000,
    "valeurNeuf": 20000,
    "commentairePedagogique": "Moto électrique — cas spécifique tarification, fiscalité avantageuse"
  },
  {
    "id": "M219",
    "marque": "Energica",
    "modele": "Ego",
    "version": "21.5 kWh",
    "annee": 2020,
    "cylindree": null,
    "puissanceKw": 107,
    "carburant": "electrique",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 18000,
    "valeurNeuf": 30000,
    "commentairePedagogique": "Sportive électrique premium — cas pédagogique valeur élevée"
  },
  {
    "id": "M220",
    "marque": "Energica",
    "modele": "Ego",
    "version": "21.5 kWh",
    "annee": 2021,
    "cylindree": null,
    "puissanceKw": 107,
    "carburant": "electrique",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 20000,
    "valeurNeuf": 30000,
    "commentairePedagogique": "Sportive électrique premium — cas pédagogique valeur élevée"
  },
  {
    "id": "M221",
    "marque": "Energica",
    "modele": "Ego",
    "version": "21.5 kWh",
    "annee": 2022,
    "cylindree": null,
    "puissanceKw": 107,
    "carburant": "electrique",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 22000,
    "valeurNeuf": 30000,
    "commentairePedagogique": "Sportive électrique premium — cas pédagogique valeur élevée"
  },
  {
    "id": "M222",
    "marque": "Energica",
    "modele": "Ego",
    "version": "21.5 kWh",
    "annee": 2023,
    "cylindree": null,
    "puissanceKw": 107,
    "carburant": "electrique",
    "typeMoto": "moto_sportive",
    "valeurEstimee": 24000,
    "valeurNeuf": 30000,
    "commentairePedagogique": "Sportive électrique premium — cas pédagogique valeur élevée"
  },
  {
    "id": "M223",
    "marque": "BMW",
    "modele": "CE 04",
    "version": "Scooter Elec",
    "annee": 2022,
    "cylindree": null,
    "puissanceKw": 31,
    "carburant": "electrique",
    "typeMoto": "scooter_125",
    "valeurEstimee": 10000,
    "valeurNeuf": 14000,
    "commentairePedagogique": "Scooter électrique premium — cas tarification spécifique"
  },
  {
    "id": "M224",
    "marque": "BMW",
    "modele": "CE 04",
    "version": "Scooter Elec",
    "annee": 2023,
    "cylindree": null,
    "puissanceKw": 31,
    "carburant": "electrique",
    "typeMoto": "scooter_125",
    "valeurEstimee": 11000,
    "valeurNeuf": 14000,
    "commentairePedagogique": "Scooter électrique premium — cas tarification spécifique"
  },
  {
    "id": "M225",
    "marque": "Vmoto",
    "modele": "Soco TC Max",
    "version": "Scooter 125E",
    "annee": 2021,
    "cylindree": null,
    "puissanceKw": 7,
    "carburant": "electrique",
    "typeMoto": "scooter_125",
    "valeurEstimee": 3500,
    "valeurNeuf": 5500,
    "commentairePedagogique": null
  },
  {
    "id": "M226",
    "marque": "Vmoto",
    "modele": "Soco TC Max",
    "version": "Scooter 125E",
    "annee": 2022,
    "cylindree": null,
    "puissanceKw": 7,
    "carburant": "electrique",
    "typeMoto": "scooter_125",
    "valeurEstimee": 4000,
    "valeurNeuf": 5500,
    "commentairePedagogique": null
  },
  {
    "id": "M227",
    "marque": "Vmoto",
    "modele": "Soco TC Max",
    "version": "Scooter 125E",
    "annee": 2023,
    "cylindree": null,
    "puissanceKw": 7,
    "carburant": "electrique",
    "typeMoto": "scooter_125",
    "valeurEstimee": 4500,
    "valeurNeuf": 5500,
    "commentairePedagogique": null
  }
];

export const PLAQUES_MOTO: MotoPlaqueDB[] = [
  {
    "plaque": "FY-127-WW",
    "motoId": "M001"
  },
  {
    "plaque": "CJ-689-LG",
    "motoId": "M001"
  },
  {
    "plaque": "EB-303-RB",
    "motoId": "M001"
  },
  {
    "plaque": "SC-229-BC",
    "motoId": "M001"
  },
  {
    "plaque": "PN-893-PS",
    "motoId": "M002"
  },
  {
    "plaque": "CY-421-TJ",
    "motoId": "M002"
  },
  {
    "plaque": "DX-100-QA",
    "motoId": "M002"
  },
  {
    "plaque": "VM-270-ZH",
    "motoId": "M002"
  },
  {
    "plaque": "KR-259-DY",
    "motoId": "M003"
  },
  {
    "plaque": "VH-977-VE",
    "motoId": "M003"
  },
  {
    "plaque": "QF-315-FF",
    "motoId": "M003"
  },
  {
    "plaque": "LY-312-EK",
    "motoId": "M003"
  },
  {
    "plaque": "JS-765-RG",
    "motoId": "M003"
  },
  {
    "plaque": "ZW-207-JD",
    "motoId": "M004"
  },
  {
    "plaque": "QP-477-PV",
    "motoId": "M004"
  },
  {
    "plaque": "NW-683-KV",
    "motoId": "M004"
  },
  {
    "plaque": "SK-785-KK",
    "motoId": "M004"
  },
  {
    "plaque": "MF-388-MX",
    "motoId": "M004"
  },
  {
    "plaque": "BL-100-ZA",
    "motoId": "M005"
  },
  {
    "plaque": "WL-352-LT",
    "motoId": "M005"
  },
  {
    "plaque": "ZY-509-YY",
    "motoId": "M005"
  },
  {
    "plaque": "GR-304-XS",
    "motoId": "M005"
  },
  {
    "plaque": "TG-697-ND",
    "motoId": "M005"
  },
  {
    "plaque": "QJ-541-NF",
    "motoId": "M006"
  },
  {
    "plaque": "XV-190-WR",
    "motoId": "M006"
  },
  {
    "plaque": "NN-689-AM",
    "motoId": "M006"
  },
  {
    "plaque": "AW-110-TK",
    "motoId": "M006"
  },
  {
    "plaque": "FF-945-VP",
    "motoId": "M007"
  },
  {
    "plaque": "EC-731-HF",
    "motoId": "M007"
  },
  {
    "plaque": "TX-248-AH",
    "motoId": "M007"
  },
  {
    "plaque": "PT-656-MT",
    "motoId": "M007"
  },
  {
    "plaque": "XC-776-NH",
    "motoId": "M007"
  },
  {
    "plaque": "RR-303-WX",
    "motoId": "M007"
  },
  {
    "plaque": "BA-375-QQ",
    "motoId": "M007"
  },
  {
    "plaque": "MG-540-YQ",
    "motoId": "M008"
  },
  {
    "plaque": "NZ-879-AA",
    "motoId": "M008"
  },
  {
    "plaque": "HX-657-HG",
    "motoId": "M008"
  },
  {
    "plaque": "ZN-284-LB",
    "motoId": "M008"
  },
  {
    "plaque": "JF-285-RZ",
    "motoId": "M008"
  },
  {
    "plaque": "WR-227-DG",
    "motoId": "M009"
  },
  {
    "plaque": "XS-792-FE",
    "motoId": "M009"
  },
  {
    "plaque": "QH-288-VB",
    "motoId": "M009"
  },
  {
    "plaque": "XS-633-JH",
    "motoId": "M009"
  },
  {
    "plaque": "YZ-798-YP",
    "motoId": "M009"
  },
  {
    "plaque": "WS-890-BW",
    "motoId": "M010"
  },
  {
    "plaque": "QR-994-MM",
    "motoId": "M010"
  },
  {
    "plaque": "EV-861-DZ",
    "motoId": "M010"
  },
  {
    "plaque": "CA-118-MF",
    "motoId": "M010"
  },
  {
    "plaque": "CP-235-DD",
    "motoId": "M011"
  },
  {
    "plaque": "MY-632-QX",
    "motoId": "M011"
  },
  {
    "plaque": "AT-500-LW",
    "motoId": "M011"
  },
  {
    "plaque": "EH-911-QP",
    "motoId": "M011"
  },
  {
    "plaque": "NS-275-JR",
    "motoId": "M012"
  },
  {
    "plaque": "WP-178-SK",
    "motoId": "M012"
  },
  {
    "plaque": "RQ-418-LL",
    "motoId": "M012"
  },
  {
    "plaque": "WB-912-ZL",
    "motoId": "M012"
  },
  {
    "plaque": "TB-427-AJ",
    "motoId": "M013"
  },
  {
    "plaque": "TK-180-ER",
    "motoId": "M013"
  },
  {
    "plaque": "FK-456-ZS",
    "motoId": "M013"
  },
  {
    "plaque": "KG-812-RQ",
    "motoId": "M013"
  },
  {
    "plaque": "FJ-404-ZR",
    "motoId": "M014"
  },
  {
    "plaque": "RR-842-WE",
    "motoId": "M014"
  },
  {
    "plaque": "QN-763-GH",
    "motoId": "M014"
  },
  {
    "plaque": "QC-761-RX",
    "motoId": "M014"
  },
  {
    "plaque": "QW-425-AG",
    "motoId": "M014"
  },
  {
    "plaque": "BB-417-BZ",
    "motoId": "M014"
  },
  {
    "plaque": "NN-118-TQ",
    "motoId": "M014"
  },
  {
    "plaque": "VK-622-NK",
    "motoId": "M015"
  },
  {
    "plaque": "HQ-183-FK",
    "motoId": "M015"
  },
  {
    "plaque": "LF-165-DX",
    "motoId": "M015"
  },
  {
    "plaque": "DF-430-EM",
    "motoId": "M015"
  },
  {
    "plaque": "YB-484-JC",
    "motoId": "M015"
  },
  {
    "plaque": "CA-417-WZ",
    "motoId": "M015"
  },
  {
    "plaque": "QH-634-NZ",
    "motoId": "M015"
  },
  {
    "plaque": "AS-884-HP",
    "motoId": "M016"
  },
  {
    "plaque": "YJ-315-AE",
    "motoId": "M016"
  },
  {
    "plaque": "LP-824-WJ",
    "motoId": "M016"
  },
  {
    "plaque": "WW-753-AZ",
    "motoId": "M016"
  },
  {
    "plaque": "CN-120-RD",
    "motoId": "M016"
  },
  {
    "plaque": "XQ-988-GB",
    "motoId": "M016"
  },
  {
    "plaque": "ML-281-QQ",
    "motoId": "M016"
  },
  {
    "plaque": "FL-819-MN",
    "motoId": "M017"
  },
  {
    "plaque": "YG-773-QC",
    "motoId": "M017"
  },
  {
    "plaque": "SC-230-XK",
    "motoId": "M017"
  },
  {
    "plaque": "HM-479-HP",
    "motoId": "M017"
  },
  {
    "plaque": "AB-851-ER",
    "motoId": "M017"
  },
  {
    "plaque": "JX-716-WM",
    "motoId": "M017"
  },
  {
    "plaque": "AC-451-FV",
    "motoId": "M017"
  },
  {
    "plaque": "HH-705-ML",
    "motoId": "M018"
  },
  {
    "plaque": "MD-619-EL",
    "motoId": "M018"
  },
  {
    "plaque": "VH-719-DD",
    "motoId": "M018"
  },
  {
    "plaque": "JL-392-EW",
    "motoId": "M018"
  },
  {
    "plaque": "PW-900-FW",
    "motoId": "M018"
  },
  {
    "plaque": "DM-789-RR",
    "motoId": "M019"
  },
  {
    "plaque": "YF-497-WH",
    "motoId": "M019"
  },
  {
    "plaque": "AA-120-KX",
    "motoId": "M019"
  },
  {
    "plaque": "KZ-588-CB",
    "motoId": "M019"
  },
  {
    "plaque": "XS-920-SJ",
    "motoId": "M020"
  },
  {
    "plaque": "DH-932-MA",
    "motoId": "M020"
  },
  {
    "plaque": "RF-571-PS",
    "motoId": "M020"
  },
  {
    "plaque": "EC-163-KG",
    "motoId": "M020"
  },
  {
    "plaque": "TT-821-XB",
    "motoId": "M020"
  },
  {
    "plaque": "YZ-503-HJ",
    "motoId": "M020"
  },
  {
    "plaque": "PM-644-SS",
    "motoId": "M020"
  },
  {
    "plaque": "CQ-718-RM",
    "motoId": "M021"
  },
  {
    "plaque": "WS-976-CS",
    "motoId": "M021"
  },
  {
    "plaque": "DW-603-NP",
    "motoId": "M021"
  },
  {
    "plaque": "LA-225-AX",
    "motoId": "M021"
  },
  {
    "plaque": "GH-322-BF",
    "motoId": "M021"
  },
  {
    "plaque": "AH-927-NA",
    "motoId": "M022"
  },
  {
    "plaque": "MA-472-RP",
    "motoId": "M022"
  },
  {
    "plaque": "FD-176-EV",
    "motoId": "M022"
  },
  {
    "plaque": "WM-453-DS",
    "motoId": "M022"
  },
  {
    "plaque": "FR-647-DK",
    "motoId": "M022"
  },
  {
    "plaque": "JN-144-VD",
    "motoId": "M023"
  },
  {
    "plaque": "ZJ-262-RZ",
    "motoId": "M023"
  },
  {
    "plaque": "NM-887-KS",
    "motoId": "M023"
  },
  {
    "plaque": "QP-280-QS",
    "motoId": "M023"
  },
  {
    "plaque": "CM-947-LX",
    "motoId": "M023"
  },
  {
    "plaque": "GH-468-GR",
    "motoId": "M024"
  },
  {
    "plaque": "ZJ-922-LS",
    "motoId": "M024"
  },
  {
    "plaque": "BE-861-FV",
    "motoId": "M024"
  },
  {
    "plaque": "KH-338-HH",
    "motoId": "M024"
  },
  {
    "plaque": "JW-507-VK",
    "motoId": "M025"
  },
  {
    "plaque": "DW-937-CV",
    "motoId": "M025"
  },
  {
    "plaque": "LV-791-HB",
    "motoId": "M025"
  },
  {
    "plaque": "DN-700-AH",
    "motoId": "M025"
  },
  {
    "plaque": "BH-911-FY",
    "motoId": "M026"
  },
  {
    "plaque": "VZ-932-FS",
    "motoId": "M026"
  },
  {
    "plaque": "JA-398-EX",
    "motoId": "M026"
  },
  {
    "plaque": "ZT-125-HS",
    "motoId": "M026"
  },
  {
    "plaque": "AQ-952-WM",
    "motoId": "M027"
  },
  {
    "plaque": "ND-615-YV",
    "motoId": "M027"
  },
  {
    "plaque": "QD-566-NJ",
    "motoId": "M027"
  },
  {
    "plaque": "QJ-152-XV",
    "motoId": "M027"
  },
  {
    "plaque": "NN-897-EA",
    "motoId": "M027"
  },
  {
    "plaque": "YJ-788-AT",
    "motoId": "M028"
  },
  {
    "plaque": "SE-794-SW",
    "motoId": "M028"
  },
  {
    "plaque": "JQ-331-DV",
    "motoId": "M028"
  },
  {
    "plaque": "SC-203-LS",
    "motoId": "M028"
  },
  {
    "plaque": "EJ-712-EW",
    "motoId": "M028"
  },
  {
    "plaque": "SG-686-EL",
    "motoId": "M029"
  },
  {
    "plaque": "VG-671-JW",
    "motoId": "M029"
  },
  {
    "plaque": "HK-378-VL",
    "motoId": "M029"
  },
  {
    "plaque": "FG-129-WB",
    "motoId": "M029"
  },
  {
    "plaque": "DG-164-AP",
    "motoId": "M029"
  },
  {
    "plaque": "MJ-808-VR",
    "motoId": "M030"
  },
  {
    "plaque": "AB-925-HY",
    "motoId": "M030"
  },
  {
    "plaque": "GC-897-TK",
    "motoId": "M030"
  },
  {
    "plaque": "DK-770-NR",
    "motoId": "M030"
  },
  {
    "plaque": "EW-588-DH",
    "motoId": "M031"
  },
  {
    "plaque": "SD-587-TM",
    "motoId": "M031"
  },
  {
    "plaque": "RG-755-GY",
    "motoId": "M031"
  },
  {
    "plaque": "BR-133-XF",
    "motoId": "M031"
  },
  {
    "plaque": "HV-234-VQ",
    "motoId": "M031"
  },
  {
    "plaque": "ZM-854-FL",
    "motoId": "M031"
  },
  {
    "plaque": "MC-506-YS",
    "motoId": "M031"
  },
  {
    "plaque": "HC-680-SV",
    "motoId": "M032"
  },
  {
    "plaque": "DW-864-KT",
    "motoId": "M032"
  },
  {
    "plaque": "GC-803-AE",
    "motoId": "M032"
  },
  {
    "plaque": "EY-701-MG",
    "motoId": "M032"
  },
  {
    "plaque": "GT-247-NR",
    "motoId": "M032"
  },
  {
    "plaque": "CL-862-VG",
    "motoId": "M032"
  },
  {
    "plaque": "JA-554-RW",
    "motoId": "M032"
  },
  {
    "plaque": "QX-950-NV",
    "motoId": "M033"
  },
  {
    "plaque": "GX-340-NZ",
    "motoId": "M033"
  },
  {
    "plaque": "NL-584-PQ",
    "motoId": "M033"
  },
  {
    "plaque": "DS-367-XW",
    "motoId": "M033"
  },
  {
    "plaque": "KS-340-ZX",
    "motoId": "M033"
  },
  {
    "plaque": "FG-278-ZH",
    "motoId": "M033"
  },
  {
    "plaque": "DP-394-FB",
    "motoId": "M033"
  },
  {
    "plaque": "RD-557-NA",
    "motoId": "M034"
  },
  {
    "plaque": "YJ-183-LP",
    "motoId": "M034"
  },
  {
    "plaque": "TJ-928-VY",
    "motoId": "M034"
  },
  {
    "plaque": "VL-692-ZL",
    "motoId": "M034"
  },
  {
    "plaque": "QB-130-KG",
    "motoId": "M034"
  },
  {
    "plaque": "KF-597-XM",
    "motoId": "M034"
  },
  {
    "plaque": "EG-237-ZK",
    "motoId": "M034"
  },
  {
    "plaque": "RH-844-FB",
    "motoId": "M035"
  },
  {
    "plaque": "JL-927-VW",
    "motoId": "M035"
  },
  {
    "plaque": "TN-486-RM",
    "motoId": "M035"
  },
  {
    "plaque": "KE-630-CY",
    "motoId": "M035"
  },
  {
    "plaque": "JR-332-XZ",
    "motoId": "M035"
  },
  {
    "plaque": "FK-602-QX",
    "motoId": "M036"
  },
  {
    "plaque": "BK-579-HR",
    "motoId": "M036"
  },
  {
    "plaque": "PG-985-TP",
    "motoId": "M036"
  },
  {
    "plaque": "LN-363-SK",
    "motoId": "M036"
  },
  {
    "plaque": "CK-434-NB",
    "motoId": "M037"
  },
  {
    "plaque": "HL-264-XT",
    "motoId": "M037"
  },
  {
    "plaque": "WN-918-BR",
    "motoId": "M037"
  },
  {
    "plaque": "QL-573-JA",
    "motoId": "M037"
  },
  {
    "plaque": "MG-246-VT",
    "motoId": "M037"
  },
  {
    "plaque": "DK-346-GF",
    "motoId": "M037"
  },
  {
    "plaque": "DA-155-FN",
    "motoId": "M037"
  },
  {
    "plaque": "YD-779-AT",
    "motoId": "M038"
  },
  {
    "plaque": "GK-431-DT",
    "motoId": "M038"
  },
  {
    "plaque": "KQ-179-DN",
    "motoId": "M038"
  },
  {
    "plaque": "SM-791-JA",
    "motoId": "M038"
  },
  {
    "plaque": "JK-563-CW",
    "motoId": "M039"
  },
  {
    "plaque": "HM-380-FE",
    "motoId": "M039"
  },
  {
    "plaque": "KS-842-JY",
    "motoId": "M039"
  },
  {
    "plaque": "HY-435-AX",
    "motoId": "M039"
  },
  {
    "plaque": "AE-794-LT",
    "motoId": "M040"
  },
  {
    "plaque": "EQ-244-DP",
    "motoId": "M040"
  },
  {
    "plaque": "HK-533-EH",
    "motoId": "M040"
  },
  {
    "plaque": "MZ-324-WQ",
    "motoId": "M040"
  },
  {
    "plaque": "PS-392-AK",
    "motoId": "M041"
  },
  {
    "plaque": "SY-256-ST",
    "motoId": "M041"
  },
  {
    "plaque": "HN-963-ET",
    "motoId": "M041"
  },
  {
    "plaque": "PC-669-BP",
    "motoId": "M041"
  },
  {
    "plaque": "WD-680-FW",
    "motoId": "M042"
  },
  {
    "plaque": "EE-634-PG",
    "motoId": "M042"
  },
  {
    "plaque": "EX-741-YF",
    "motoId": "M042"
  },
  {
    "plaque": "RB-980-EE",
    "motoId": "M042"
  },
  {
    "plaque": "WJ-807-SW",
    "motoId": "M042"
  },
  {
    "plaque": "LT-665-KP",
    "motoId": "M042"
  },
  {
    "plaque": "DQ-497-SV",
    "motoId": "M042"
  },
  {
    "plaque": "NV-595-AC",
    "motoId": "M043"
  },
  {
    "plaque": "RM-552-AZ",
    "motoId": "M043"
  },
  {
    "plaque": "WJ-154-SK",
    "motoId": "M043"
  },
  {
    "plaque": "JF-175-MC",
    "motoId": "M043"
  },
  {
    "plaque": "AM-766-BC",
    "motoId": "M044"
  },
  {
    "plaque": "SK-879-HS",
    "motoId": "M044"
  },
  {
    "plaque": "EA-933-AY",
    "motoId": "M044"
  },
  {
    "plaque": "DP-576-ZT",
    "motoId": "M044"
  },
  {
    "plaque": "MJ-817-PY",
    "motoId": "M045"
  },
  {
    "plaque": "BJ-552-JH",
    "motoId": "M045"
  },
  {
    "plaque": "EH-755-EK",
    "motoId": "M045"
  },
  {
    "plaque": "CJ-476-VE",
    "motoId": "M045"
  },
  {
    "plaque": "LR-229-VR",
    "motoId": "M045"
  },
  {
    "plaque": "GL-900-VW",
    "motoId": "M046"
  },
  {
    "plaque": "CY-562-JG",
    "motoId": "M046"
  },
  {
    "plaque": "VX-998-ZC",
    "motoId": "M046"
  },
  {
    "plaque": "PW-302-PY",
    "motoId": "M046"
  },
  {
    "plaque": "JB-816-BA",
    "motoId": "M047"
  },
  {
    "plaque": "SG-399-LZ",
    "motoId": "M047"
  },
  {
    "plaque": "LF-569-VV",
    "motoId": "M047"
  },
  {
    "plaque": "FP-486-VR",
    "motoId": "M047"
  },
  {
    "plaque": "FV-202-LE",
    "motoId": "M047"
  },
  {
    "plaque": "VZ-222-CK",
    "motoId": "M047"
  },
  {
    "plaque": "DR-492-DA",
    "motoId": "M047"
  },
  {
    "plaque": "JL-528-JJ",
    "motoId": "M048"
  },
  {
    "plaque": "WJ-829-SN",
    "motoId": "M048"
  },
  {
    "plaque": "JN-268-ER",
    "motoId": "M048"
  },
  {
    "plaque": "CW-168-QS",
    "motoId": "M048"
  },
  {
    "plaque": "AC-500-VE",
    "motoId": "M048"
  },
  {
    "plaque": "QQ-662-VQ",
    "motoId": "M049"
  },
  {
    "plaque": "ZX-666-PQ",
    "motoId": "M049"
  },
  {
    "plaque": "ZP-108-HA",
    "motoId": "M049"
  },
  {
    "plaque": "XB-675-DA",
    "motoId": "M049"
  },
  {
    "plaque": "KG-281-ZR",
    "motoId": "M049"
  },
  {
    "plaque": "CN-270-VV",
    "motoId": "M049"
  },
  {
    "plaque": "JX-825-YM",
    "motoId": "M049"
  },
  {
    "plaque": "JP-601-WN",
    "motoId": "M050"
  },
  {
    "plaque": "XY-607-QP",
    "motoId": "M050"
  },
  {
    "plaque": "TB-534-KH",
    "motoId": "M050"
  },
  {
    "plaque": "XT-451-YW",
    "motoId": "M050"
  },
  {
    "plaque": "NP-234-CE",
    "motoId": "M050"
  },
  {
    "plaque": "QP-766-BE",
    "motoId": "M051"
  },
  {
    "plaque": "DD-193-DP",
    "motoId": "M051"
  },
  {
    "plaque": "PB-203-FQ",
    "motoId": "M051"
  },
  {
    "plaque": "PE-598-CC",
    "motoId": "M051"
  },
  {
    "plaque": "BM-272-TS",
    "motoId": "M051"
  },
  {
    "plaque": "JW-128-LM",
    "motoId": "M052"
  },
  {
    "plaque": "DA-837-LC",
    "motoId": "M052"
  },
  {
    "plaque": "DD-699-SQ",
    "motoId": "M052"
  },
  {
    "plaque": "ET-212-PV",
    "motoId": "M052"
  },
  {
    "plaque": "CS-418-SK",
    "motoId": "M053"
  },
  {
    "plaque": "QM-845-SM",
    "motoId": "M053"
  },
  {
    "plaque": "NB-289-RH",
    "motoId": "M053"
  },
  {
    "plaque": "YJ-231-FQ",
    "motoId": "M053"
  },
  {
    "plaque": "NF-841-ZF",
    "motoId": "M054"
  },
  {
    "plaque": "LT-255-ZY",
    "motoId": "M054"
  },
  {
    "plaque": "HB-902-WT",
    "motoId": "M054"
  },
  {
    "plaque": "AQ-952-LE",
    "motoId": "M054"
  },
  {
    "plaque": "CY-943-FY",
    "motoId": "M054"
  },
  {
    "plaque": "BK-206-CB",
    "motoId": "M055"
  },
  {
    "plaque": "AF-296-DM",
    "motoId": "M055"
  },
  {
    "plaque": "SR-804-PH",
    "motoId": "M055"
  },
  {
    "plaque": "KK-186-MA",
    "motoId": "M055"
  },
  {
    "plaque": "PK-956-GV",
    "motoId": "M056"
  },
  {
    "plaque": "NS-976-MY",
    "motoId": "M056"
  },
  {
    "plaque": "EC-332-CE",
    "motoId": "M056"
  },
  {
    "plaque": "TQ-471-MZ",
    "motoId": "M056"
  },
  {
    "plaque": "WY-511-XQ",
    "motoId": "M056"
  },
  {
    "plaque": "CY-789-DM",
    "motoId": "M057"
  },
  {
    "plaque": "GB-866-WN",
    "motoId": "M057"
  },
  {
    "plaque": "BT-272-KQ",
    "motoId": "M057"
  },
  {
    "plaque": "DV-288-CK",
    "motoId": "M057"
  },
  {
    "plaque": "VP-796-XW",
    "motoId": "M058"
  },
  {
    "plaque": "VX-958-RH",
    "motoId": "M058"
  },
  {
    "plaque": "RG-142-CR",
    "motoId": "M058"
  },
  {
    "plaque": "BH-512-MR",
    "motoId": "M058"
  },
  {
    "plaque": "XD-690-HM",
    "motoId": "M059"
  },
  {
    "plaque": "XH-132-VJ",
    "motoId": "M059"
  },
  {
    "plaque": "KB-263-WH",
    "motoId": "M059"
  },
  {
    "plaque": "YC-237-CG",
    "motoId": "M059"
  },
  {
    "plaque": "XZ-762-ED",
    "motoId": "M060"
  },
  {
    "plaque": "EL-198-CR",
    "motoId": "M060"
  },
  {
    "plaque": "JG-268-XL",
    "motoId": "M060"
  },
  {
    "plaque": "LG-176-TG",
    "motoId": "M060"
  },
  {
    "plaque": "TA-504-CJ",
    "motoId": "M060"
  },
  {
    "plaque": "KF-891-SE",
    "motoId": "M060"
  },
  {
    "plaque": "PJ-658-VF",
    "motoId": "M060"
  },
  {
    "plaque": "EG-579-VA",
    "motoId": "M061"
  },
  {
    "plaque": "DK-257-YJ",
    "motoId": "M061"
  },
  {
    "plaque": "GM-224-GJ",
    "motoId": "M061"
  },
  {
    "plaque": "XX-367-BC",
    "motoId": "M061"
  },
  {
    "plaque": "LL-400-CT",
    "motoId": "M061"
  },
  {
    "plaque": "YH-796-RD",
    "motoId": "M061"
  },
  {
    "plaque": "DQ-595-GA",
    "motoId": "M061"
  },
  {
    "plaque": "LZ-157-AJ",
    "motoId": "M062"
  },
  {
    "plaque": "NC-657-LK",
    "motoId": "M062"
  },
  {
    "plaque": "BN-185-QE",
    "motoId": "M062"
  },
  {
    "plaque": "ZS-248-EM",
    "motoId": "M062"
  },
  {
    "plaque": "QW-455-GZ",
    "motoId": "M063"
  },
  {
    "plaque": "SA-496-JS",
    "motoId": "M063"
  },
  {
    "plaque": "QA-956-XE",
    "motoId": "M063"
  },
  {
    "plaque": "WR-264-NZ",
    "motoId": "M063"
  },
  {
    "plaque": "LM-185-KC",
    "motoId": "M063"
  },
  {
    "plaque": "LX-292-KX",
    "motoId": "M064"
  },
  {
    "plaque": "VZ-804-ZB",
    "motoId": "M064"
  },
  {
    "plaque": "VX-538-PH",
    "motoId": "M064"
  },
  {
    "plaque": "JH-887-BN",
    "motoId": "M064"
  },
  {
    "plaque": "PT-770-RV",
    "motoId": "M064"
  },
  {
    "plaque": "BX-960-WS",
    "motoId": "M065"
  },
  {
    "plaque": "HL-496-FJ",
    "motoId": "M065"
  },
  {
    "plaque": "ZM-425-CY",
    "motoId": "M065"
  },
  {
    "plaque": "RS-951-MT",
    "motoId": "M065"
  },
  {
    "plaque": "BH-182-FF",
    "motoId": "M065"
  },
  {
    "plaque": "VP-917-YB",
    "motoId": "M065"
  },
  {
    "plaque": "LR-728-EM",
    "motoId": "M065"
  },
  {
    "plaque": "LB-217-RS",
    "motoId": "M066"
  },
  {
    "plaque": "SV-810-NZ",
    "motoId": "M066"
  },
  {
    "plaque": "YZ-860-BX",
    "motoId": "M066"
  },
  {
    "plaque": "EY-435-RD",
    "motoId": "M066"
  },
  {
    "plaque": "MZ-250-GA",
    "motoId": "M066"
  },
  {
    "plaque": "TH-212-NB",
    "motoId": "M067"
  },
  {
    "plaque": "NX-794-CS",
    "motoId": "M067"
  },
  {
    "plaque": "KX-653-KX",
    "motoId": "M067"
  },
  {
    "plaque": "DE-182-VH",
    "motoId": "M067"
  },
  {
    "plaque": "SZ-687-RF",
    "motoId": "M067"
  },
  {
    "plaque": "GN-228-XG",
    "motoId": "M068"
  },
  {
    "plaque": "RP-633-BL",
    "motoId": "M068"
  },
  {
    "plaque": "PJ-348-PQ",
    "motoId": "M068"
  },
  {
    "plaque": "GZ-217-WB",
    "motoId": "M068"
  },
  {
    "plaque": "YP-853-DR",
    "motoId": "M068"
  },
  {
    "plaque": "PS-899-AF",
    "motoId": "M068"
  },
  {
    "plaque": "TC-442-FM",
    "motoId": "M068"
  },
  {
    "plaque": "HH-186-DE",
    "motoId": "M069"
  },
  {
    "plaque": "XQ-805-CJ",
    "motoId": "M069"
  },
  {
    "plaque": "NX-504-HH",
    "motoId": "M069"
  },
  {
    "plaque": "GR-979-CZ",
    "motoId": "M069"
  },
  {
    "plaque": "CJ-896-KZ",
    "motoId": "M070"
  },
  {
    "plaque": "JJ-280-JG",
    "motoId": "M070"
  },
  {
    "plaque": "AM-451-HK",
    "motoId": "M070"
  },
  {
    "plaque": "CF-647-FA",
    "motoId": "M070"
  },
  {
    "plaque": "XX-585-MJ",
    "motoId": "M070"
  },
  {
    "plaque": "KF-965-AK",
    "motoId": "M071"
  },
  {
    "plaque": "QM-564-CG",
    "motoId": "M071"
  },
  {
    "plaque": "ME-628-NL",
    "motoId": "M071"
  },
  {
    "plaque": "MY-893-YN",
    "motoId": "M071"
  },
  {
    "plaque": "PH-748-DP",
    "motoId": "M071"
  },
  {
    "plaque": "QS-556-GG",
    "motoId": "M072"
  },
  {
    "plaque": "GA-187-EA",
    "motoId": "M072"
  },
  {
    "plaque": "WV-798-ZM",
    "motoId": "M072"
  },
  {
    "plaque": "VQ-425-TW",
    "motoId": "M072"
  },
  {
    "plaque": "KW-503-HX",
    "motoId": "M073"
  },
  {
    "plaque": "WL-537-VY",
    "motoId": "M073"
  },
  {
    "plaque": "JH-912-HW",
    "motoId": "M073"
  },
  {
    "plaque": "NN-481-VV",
    "motoId": "M073"
  },
  {
    "plaque": "PJ-340-MG",
    "motoId": "M073"
  },
  {
    "plaque": "CF-499-LK",
    "motoId": "M074"
  },
  {
    "plaque": "WT-228-HV",
    "motoId": "M074"
  },
  {
    "plaque": "HM-260-RS",
    "motoId": "M074"
  },
  {
    "plaque": "TJ-468-NW",
    "motoId": "M074"
  },
  {
    "plaque": "FG-743-KL",
    "motoId": "M075"
  },
  {
    "plaque": "ZJ-547-LG",
    "motoId": "M075"
  },
  {
    "plaque": "VA-238-GR",
    "motoId": "M075"
  },
  {
    "plaque": "GG-738-XA",
    "motoId": "M075"
  },
  {
    "plaque": "DB-629-ZN",
    "motoId": "M076"
  },
  {
    "plaque": "SS-990-FH",
    "motoId": "M076"
  },
  {
    "plaque": "AV-282-BX",
    "motoId": "M076"
  },
  {
    "plaque": "FX-435-TZ",
    "motoId": "M076"
  },
  {
    "plaque": "WL-555-QF",
    "motoId": "M077"
  },
  {
    "plaque": "XV-937-GY",
    "motoId": "M077"
  },
  {
    "plaque": "YV-732-DC",
    "motoId": "M077"
  },
  {
    "plaque": "XM-339-AM",
    "motoId": "M077"
  },
  {
    "plaque": "ET-384-TC",
    "motoId": "M078"
  },
  {
    "plaque": "QW-265-KS",
    "motoId": "M078"
  },
  {
    "plaque": "QR-982-DF",
    "motoId": "M078"
  },
  {
    "plaque": "DJ-983-KY",
    "motoId": "M078"
  },
  {
    "plaque": "KN-437-QB",
    "motoId": "M078"
  },
  {
    "plaque": "EL-150-JJ",
    "motoId": "M079"
  },
  {
    "plaque": "TH-750-TE",
    "motoId": "M079"
  },
  {
    "plaque": "SJ-864-DR",
    "motoId": "M079"
  },
  {
    "plaque": "TK-941-ES",
    "motoId": "M079"
  },
  {
    "plaque": "JQ-810-EW",
    "motoId": "M080"
  },
  {
    "plaque": "LQ-633-VA",
    "motoId": "M080"
  },
  {
    "plaque": "YL-611-HG",
    "motoId": "M080"
  },
  {
    "plaque": "VQ-383-CX",
    "motoId": "M080"
  },
  {
    "plaque": "JJ-248-LQ",
    "motoId": "M080"
  },
  {
    "plaque": "YG-247-TF",
    "motoId": "M081"
  },
  {
    "plaque": "KW-546-SM",
    "motoId": "M081"
  },
  {
    "plaque": "HJ-886-RM",
    "motoId": "M081"
  },
  {
    "plaque": "KX-106-TA",
    "motoId": "M081"
  },
  {
    "plaque": "FP-577-SC",
    "motoId": "M081"
  },
  {
    "plaque": "WR-829-QY",
    "motoId": "M081"
  },
  {
    "plaque": "HB-599-TV",
    "motoId": "M081"
  },
  {
    "plaque": "MR-353-TN",
    "motoId": "M082"
  },
  {
    "plaque": "WW-299-JF",
    "motoId": "M082"
  },
  {
    "plaque": "WP-913-HH",
    "motoId": "M082"
  },
  {
    "plaque": "BQ-264-DE",
    "motoId": "M082"
  },
  {
    "plaque": "NP-276-DS",
    "motoId": "M083"
  },
  {
    "plaque": "PL-364-XD",
    "motoId": "M083"
  },
  {
    "plaque": "CD-704-HB",
    "motoId": "M083"
  },
  {
    "plaque": "EC-861-DJ",
    "motoId": "M083"
  },
  {
    "plaque": "MW-783-TC",
    "motoId": "M083"
  },
  {
    "plaque": "HS-637-QK",
    "motoId": "M084"
  },
  {
    "plaque": "VP-398-CV",
    "motoId": "M084"
  },
  {
    "plaque": "GJ-729-YS",
    "motoId": "M084"
  },
  {
    "plaque": "TZ-970-RR",
    "motoId": "M084"
  },
  {
    "plaque": "JW-271-XH",
    "motoId": "M084"
  },
  {
    "plaque": "XG-704-DC",
    "motoId": "M084"
  },
  {
    "plaque": "KL-285-FX",
    "motoId": "M084"
  },
  {
    "plaque": "EQ-341-LJ",
    "motoId": "M085"
  },
  {
    "plaque": "MF-141-JF",
    "motoId": "M085"
  },
  {
    "plaque": "QE-617-WZ",
    "motoId": "M085"
  },
  {
    "plaque": "WK-106-NZ",
    "motoId": "M085"
  },
  {
    "plaque": "TD-244-KF",
    "motoId": "M085"
  },
  {
    "plaque": "FV-218-WC",
    "motoId": "M086"
  },
  {
    "plaque": "YE-554-GX",
    "motoId": "M086"
  },
  {
    "plaque": "MJ-752-AE",
    "motoId": "M086"
  },
  {
    "plaque": "ER-593-TV",
    "motoId": "M086"
  },
  {
    "plaque": "DK-203-BX",
    "motoId": "M086"
  },
  {
    "plaque": "AG-649-GP",
    "motoId": "M086"
  },
  {
    "plaque": "LK-130-KG",
    "motoId": "M086"
  },
  {
    "plaque": "ZD-721-GZ",
    "motoId": "M087"
  },
  {
    "plaque": "YX-160-LD",
    "motoId": "M087"
  },
  {
    "plaque": "QM-227-ZE",
    "motoId": "M087"
  },
  {
    "plaque": "SQ-619-MQ",
    "motoId": "M087"
  },
  {
    "plaque": "PT-128-JH",
    "motoId": "M087"
  },
  {
    "plaque": "DD-138-EB",
    "motoId": "M087"
  },
  {
    "plaque": "DG-617-XJ",
    "motoId": "M087"
  },
  {
    "plaque": "AV-392-NW",
    "motoId": "M088"
  },
  {
    "plaque": "LK-982-DW",
    "motoId": "M088"
  },
  {
    "plaque": "PJ-801-NM",
    "motoId": "M088"
  },
  {
    "plaque": "BC-870-WD",
    "motoId": "M088"
  },
  {
    "plaque": "EP-618-LY",
    "motoId": "M088"
  },
  {
    "plaque": "KJ-343-XW",
    "motoId": "M089"
  },
  {
    "plaque": "BS-556-QJ",
    "motoId": "M089"
  },
  {
    "plaque": "VQ-358-TA",
    "motoId": "M089"
  },
  {
    "plaque": "RC-952-ZD",
    "motoId": "M089"
  },
  {
    "plaque": "FX-996-AX",
    "motoId": "M089"
  },
  {
    "plaque": "YS-841-AD",
    "motoId": "M090"
  },
  {
    "plaque": "WD-412-ZY",
    "motoId": "M090"
  },
  {
    "plaque": "AX-309-PS",
    "motoId": "M090"
  },
  {
    "plaque": "MT-542-AL",
    "motoId": "M090"
  },
  {
    "plaque": "NQ-692-LH",
    "motoId": "M090"
  },
  {
    "plaque": "AS-862-FJ",
    "motoId": "M090"
  },
  {
    "plaque": "YV-904-GR",
    "motoId": "M090"
  },
  {
    "plaque": "FV-522-GC",
    "motoId": "M091"
  },
  {
    "plaque": "XS-158-WR",
    "motoId": "M091"
  },
  {
    "plaque": "RJ-175-JH",
    "motoId": "M091"
  },
  {
    "plaque": "ZQ-101-EH",
    "motoId": "M091"
  },
  {
    "plaque": "ZP-280-FX",
    "motoId": "M091"
  },
  {
    "plaque": "KW-651-TL",
    "motoId": "M092"
  },
  {
    "plaque": "PH-378-YN",
    "motoId": "M092"
  },
  {
    "plaque": "FB-565-JE",
    "motoId": "M092"
  },
  {
    "plaque": "AB-842-SY",
    "motoId": "M092"
  },
  {
    "plaque": "RM-340-MA",
    "motoId": "M092"
  },
  {
    "plaque": "PA-334-AV",
    "motoId": "M092"
  },
  {
    "plaque": "BT-688-HR",
    "motoId": "M092"
  },
  {
    "plaque": "FG-280-LJ",
    "motoId": "M093"
  },
  {
    "plaque": "EH-594-AX",
    "motoId": "M093"
  },
  {
    "plaque": "HX-785-CR",
    "motoId": "M093"
  },
  {
    "plaque": "JZ-315-LP",
    "motoId": "M093"
  },
  {
    "plaque": "KC-982-VF",
    "motoId": "M093"
  },
  {
    "plaque": "QZ-781-SW",
    "motoId": "M094"
  },
  {
    "plaque": "XC-505-BA",
    "motoId": "M094"
  },
  {
    "plaque": "WE-953-DG",
    "motoId": "M094"
  },
  {
    "plaque": "DG-840-VW",
    "motoId": "M094"
  },
  {
    "plaque": "RR-889-KY",
    "motoId": "M095"
  },
  {
    "plaque": "LT-646-ZN",
    "motoId": "M095"
  },
  {
    "plaque": "XJ-770-JH",
    "motoId": "M095"
  },
  {
    "plaque": "MS-753-SK",
    "motoId": "M095"
  },
  {
    "plaque": "EM-697-AD",
    "motoId": "M096"
  },
  {
    "plaque": "KN-380-GH",
    "motoId": "M096"
  },
  {
    "plaque": "GY-897-HC",
    "motoId": "M096"
  },
  {
    "plaque": "LW-421-LK",
    "motoId": "M096"
  },
  {
    "plaque": "NB-199-VR",
    "motoId": "M097"
  },
  {
    "plaque": "KM-301-RF",
    "motoId": "M097"
  },
  {
    "plaque": "ZZ-143-TB",
    "motoId": "M097"
  },
  {
    "plaque": "TL-268-GT",
    "motoId": "M097"
  },
  {
    "plaque": "HF-318-CE",
    "motoId": "M097"
  },
  {
    "plaque": "WK-775-TA",
    "motoId": "M098"
  },
  {
    "plaque": "SK-156-CG",
    "motoId": "M098"
  },
  {
    "plaque": "TB-330-CE",
    "motoId": "M098"
  },
  {
    "plaque": "CT-587-SE",
    "motoId": "M098"
  },
  {
    "plaque": "NB-788-MN",
    "motoId": "M098"
  },
  {
    "plaque": "YY-956-HL",
    "motoId": "M098"
  },
  {
    "plaque": "SS-915-ZZ",
    "motoId": "M098"
  },
  {
    "plaque": "AL-268-MH",
    "motoId": "M099"
  },
  {
    "plaque": "SK-502-JX",
    "motoId": "M099"
  },
  {
    "plaque": "MZ-172-ZY",
    "motoId": "M099"
  },
  {
    "plaque": "FF-603-PG",
    "motoId": "M099"
  },
  {
    "plaque": "LP-491-ZC",
    "motoId": "M099"
  },
  {
    "plaque": "HF-846-DL",
    "motoId": "M099"
  },
  {
    "plaque": "WA-185-KT",
    "motoId": "M099"
  },
  {
    "plaque": "GP-894-EP",
    "motoId": "M100"
  },
  {
    "plaque": "ZH-974-LX",
    "motoId": "M100"
  },
  {
    "plaque": "WY-674-BE",
    "motoId": "M100"
  },
  {
    "plaque": "YM-217-DZ",
    "motoId": "M100"
  },
  {
    "plaque": "GV-786-JE",
    "motoId": "M100"
  },
  {
    "plaque": "YC-385-PD",
    "motoId": "M101"
  },
  {
    "plaque": "RY-916-HB",
    "motoId": "M101"
  },
  {
    "plaque": "HF-822-RE",
    "motoId": "M101"
  },
  {
    "plaque": "PJ-953-TT",
    "motoId": "M101"
  },
  {
    "plaque": "TK-612-AD",
    "motoId": "M102"
  },
  {
    "plaque": "YW-780-TC",
    "motoId": "M102"
  },
  {
    "plaque": "HS-230-TQ",
    "motoId": "M102"
  },
  {
    "plaque": "YC-630-JD",
    "motoId": "M102"
  },
  {
    "plaque": "NH-938-RK",
    "motoId": "M102"
  },
  {
    "plaque": "CB-341-AR",
    "motoId": "M103"
  },
  {
    "plaque": "DF-358-ZM",
    "motoId": "M103"
  },
  {
    "plaque": "XL-389-YD",
    "motoId": "M103"
  },
  {
    "plaque": "YJ-207-TF",
    "motoId": "M103"
  },
  {
    "plaque": "PC-954-VH",
    "motoId": "M104"
  },
  {
    "plaque": "EH-719-QY",
    "motoId": "M104"
  },
  {
    "plaque": "KP-657-GH",
    "motoId": "M104"
  },
  {
    "plaque": "QH-752-CE",
    "motoId": "M104"
  },
  {
    "plaque": "QM-446-GQ",
    "motoId": "M104"
  },
  {
    "plaque": "KR-254-HP",
    "motoId": "M105"
  },
  {
    "plaque": "YE-893-CR",
    "motoId": "M105"
  },
  {
    "plaque": "AX-300-SQ",
    "motoId": "M105"
  },
  {
    "plaque": "BQ-871-ZB",
    "motoId": "M105"
  },
  {
    "plaque": "QA-483-DW",
    "motoId": "M106"
  },
  {
    "plaque": "FY-452-JT",
    "motoId": "M106"
  },
  {
    "plaque": "WC-201-TW",
    "motoId": "M106"
  },
  {
    "plaque": "WL-196-YZ",
    "motoId": "M106"
  },
  {
    "plaque": "XM-257-NH",
    "motoId": "M106"
  },
  {
    "plaque": "ST-827-KN",
    "motoId": "M107"
  },
  {
    "plaque": "KP-774-SM",
    "motoId": "M107"
  },
  {
    "plaque": "RD-923-RQ",
    "motoId": "M107"
  },
  {
    "plaque": "NH-807-JH",
    "motoId": "M107"
  },
  {
    "plaque": "DL-853-QW",
    "motoId": "M107"
  },
  {
    "plaque": "BL-500-HE",
    "motoId": "M108"
  },
  {
    "plaque": "FS-237-KV",
    "motoId": "M108"
  },
  {
    "plaque": "NX-596-HT",
    "motoId": "M108"
  },
  {
    "plaque": "TL-722-XA",
    "motoId": "M108"
  },
  {
    "plaque": "GG-830-DV",
    "motoId": "M108"
  },
  {
    "plaque": "ZJ-939-PQ",
    "motoId": "M109"
  },
  {
    "plaque": "HL-482-HZ",
    "motoId": "M109"
  },
  {
    "plaque": "ML-533-PP",
    "motoId": "M109"
  },
  {
    "plaque": "QL-388-MT",
    "motoId": "M109"
  },
  {
    "plaque": "DP-850-FM",
    "motoId": "M109"
  },
  {
    "plaque": "JX-307-BJ",
    "motoId": "M110"
  },
  {
    "plaque": "YK-325-DJ",
    "motoId": "M110"
  },
  {
    "plaque": "XB-818-VR",
    "motoId": "M110"
  },
  {
    "plaque": "TA-193-RN",
    "motoId": "M110"
  },
  {
    "plaque": "CN-214-RC",
    "motoId": "M110"
  },
  {
    "plaque": "HE-831-HP",
    "motoId": "M111"
  },
  {
    "plaque": "EB-646-NZ",
    "motoId": "M111"
  },
  {
    "plaque": "XR-727-QH",
    "motoId": "M111"
  },
  {
    "plaque": "FF-656-AB",
    "motoId": "M111"
  },
  {
    "plaque": "YX-476-PA",
    "motoId": "M111"
  },
  {
    "plaque": "PA-361-VS",
    "motoId": "M112"
  },
  {
    "plaque": "JA-872-EB",
    "motoId": "M112"
  },
  {
    "plaque": "EY-419-BB",
    "motoId": "M112"
  },
  {
    "plaque": "ZJ-832-DB",
    "motoId": "M112"
  },
  {
    "plaque": "YK-330-DD",
    "motoId": "M113"
  },
  {
    "plaque": "SX-636-QZ",
    "motoId": "M113"
  },
  {
    "plaque": "AA-937-EQ",
    "motoId": "M113"
  },
  {
    "plaque": "EB-765-CC",
    "motoId": "M113"
  },
  {
    "plaque": "WF-734-RD",
    "motoId": "M113"
  },
  {
    "plaque": "XT-230-GY",
    "motoId": "M114"
  },
  {
    "plaque": "SJ-408-KW",
    "motoId": "M114"
  },
  {
    "plaque": "CC-476-HD",
    "motoId": "M114"
  },
  {
    "plaque": "TP-686-FE",
    "motoId": "M114"
  },
  {
    "plaque": "FY-645-TF",
    "motoId": "M115"
  },
  {
    "plaque": "WC-235-WQ",
    "motoId": "M115"
  },
  {
    "plaque": "NG-747-ZN",
    "motoId": "M115"
  },
  {
    "plaque": "ZV-993-MW",
    "motoId": "M115"
  },
  {
    "plaque": "XX-485-MM",
    "motoId": "M115"
  },
  {
    "plaque": "CE-678-EL",
    "motoId": "M116"
  },
  {
    "plaque": "XE-286-DW",
    "motoId": "M116"
  },
  {
    "plaque": "YT-161-QK",
    "motoId": "M116"
  },
  {
    "plaque": "SD-119-KY",
    "motoId": "M116"
  },
  {
    "plaque": "CY-581-WV",
    "motoId": "M117"
  },
  {
    "plaque": "XV-925-JF",
    "motoId": "M117"
  },
  {
    "plaque": "HD-234-DT",
    "motoId": "M117"
  },
  {
    "plaque": "LR-630-TB",
    "motoId": "M117"
  },
  {
    "plaque": "WA-635-DT",
    "motoId": "M118"
  },
  {
    "plaque": "QS-869-JH",
    "motoId": "M118"
  },
  {
    "plaque": "LS-873-YL",
    "motoId": "M118"
  },
  {
    "plaque": "SQ-487-ZM",
    "motoId": "M118"
  },
  {
    "plaque": "FA-603-HL",
    "motoId": "M119"
  },
  {
    "plaque": "PA-182-ZX",
    "motoId": "M119"
  },
  {
    "plaque": "ZM-277-TC",
    "motoId": "M119"
  },
  {
    "plaque": "JT-634-PJ",
    "motoId": "M119"
  },
  {
    "plaque": "ZE-454-AV",
    "motoId": "M119"
  },
  {
    "plaque": "MG-563-JT",
    "motoId": "M120"
  },
  {
    "plaque": "DV-408-QS",
    "motoId": "M120"
  },
  {
    "plaque": "LF-629-ND",
    "motoId": "M120"
  },
  {
    "plaque": "HY-779-HC",
    "motoId": "M120"
  },
  {
    "plaque": "JF-975-QG",
    "motoId": "M121"
  },
  {
    "plaque": "LP-638-VF",
    "motoId": "M121"
  },
  {
    "plaque": "CQ-988-QC",
    "motoId": "M121"
  },
  {
    "plaque": "QX-866-CS",
    "motoId": "M121"
  },
  {
    "plaque": "GF-615-WV",
    "motoId": "M122"
  },
  {
    "plaque": "ZB-979-KQ",
    "motoId": "M122"
  },
  {
    "plaque": "BF-939-CM",
    "motoId": "M122"
  },
  {
    "plaque": "WJ-792-CX",
    "motoId": "M122"
  },
  {
    "plaque": "CB-449-HS",
    "motoId": "M123"
  },
  {
    "plaque": "XX-651-JL",
    "motoId": "M123"
  },
  {
    "plaque": "PM-740-CK",
    "motoId": "M123"
  },
  {
    "plaque": "AB-487-AC",
    "motoId": "M123"
  },
  {
    "plaque": "BZ-442-AE",
    "motoId": "M124"
  },
  {
    "plaque": "DC-522-XR",
    "motoId": "M124"
  },
  {
    "plaque": "KZ-809-RE",
    "motoId": "M124"
  },
  {
    "plaque": "VW-595-CE",
    "motoId": "M124"
  },
  {
    "plaque": "XB-907-DV",
    "motoId": "M124"
  },
  {
    "plaque": "TB-732-BK",
    "motoId": "M124"
  },
  {
    "plaque": "VF-762-LE",
    "motoId": "M124"
  },
  {
    "plaque": "LX-232-LW",
    "motoId": "M125"
  },
  {
    "plaque": "JY-639-XM",
    "motoId": "M125"
  },
  {
    "plaque": "HJ-235-BE",
    "motoId": "M125"
  },
  {
    "plaque": "LD-330-FR",
    "motoId": "M125"
  },
  {
    "plaque": "PL-945-XS",
    "motoId": "M125"
  },
  {
    "plaque": "QL-678-FW",
    "motoId": "M125"
  },
  {
    "plaque": "XY-480-QZ",
    "motoId": "M125"
  },
  {
    "plaque": "GA-704-QA",
    "motoId": "M126"
  },
  {
    "plaque": "AD-818-TJ",
    "motoId": "M126"
  },
  {
    "plaque": "ZS-333-JB",
    "motoId": "M126"
  },
  {
    "plaque": "BQ-874-VY",
    "motoId": "M126"
  },
  {
    "plaque": "AN-221-LH",
    "motoId": "M127"
  },
  {
    "plaque": "YX-710-XS",
    "motoId": "M127"
  },
  {
    "plaque": "NA-478-SF",
    "motoId": "M127"
  },
  {
    "plaque": "PX-961-FG",
    "motoId": "M127"
  },
  {
    "plaque": "BH-493-SQ",
    "motoId": "M128"
  },
  {
    "plaque": "JS-269-ZF",
    "motoId": "M128"
  },
  {
    "plaque": "AY-268-MP",
    "motoId": "M128"
  },
  {
    "plaque": "KY-907-KS",
    "motoId": "M128"
  },
  {
    "plaque": "AR-236-KC",
    "motoId": "M128"
  },
  {
    "plaque": "CR-973-WK",
    "motoId": "M129"
  },
  {
    "plaque": "CT-914-CS",
    "motoId": "M129"
  },
  {
    "plaque": "HN-628-LR",
    "motoId": "M129"
  },
  {
    "plaque": "BS-260-XS",
    "motoId": "M129"
  },
  {
    "plaque": "YQ-394-WN",
    "motoId": "M130"
  },
  {
    "plaque": "RY-880-TL",
    "motoId": "M130"
  },
  {
    "plaque": "ME-815-DN",
    "motoId": "M130"
  },
  {
    "plaque": "YC-841-AB",
    "motoId": "M130"
  },
  {
    "plaque": "XL-138-YE",
    "motoId": "M131"
  },
  {
    "plaque": "CX-353-NJ",
    "motoId": "M131"
  },
  {
    "plaque": "XL-749-ZJ",
    "motoId": "M131"
  },
  {
    "plaque": "DR-195-EA",
    "motoId": "M131"
  },
  {
    "plaque": "XN-503-AP",
    "motoId": "M131"
  },
  {
    "plaque": "CP-405-TX",
    "motoId": "M132"
  },
  {
    "plaque": "FJ-204-AT",
    "motoId": "M132"
  },
  {
    "plaque": "AH-997-JR",
    "motoId": "M132"
  },
  {
    "plaque": "JP-584-HH",
    "motoId": "M132"
  },
  {
    "plaque": "XP-494-MA",
    "motoId": "M132"
  },
  {
    "plaque": "RX-460-SR",
    "motoId": "M133"
  },
  {
    "plaque": "AZ-358-NX",
    "motoId": "M133"
  },
  {
    "plaque": "WS-939-BC",
    "motoId": "M133"
  },
  {
    "plaque": "MA-110-TP",
    "motoId": "M133"
  },
  {
    "plaque": "HD-102-WJ",
    "motoId": "M133"
  },
  {
    "plaque": "SW-861-ME",
    "motoId": "M133"
  },
  {
    "plaque": "QL-437-HC",
    "motoId": "M133"
  },
  {
    "plaque": "CH-870-QZ",
    "motoId": "M134"
  },
  {
    "plaque": "JR-762-RH",
    "motoId": "M134"
  },
  {
    "plaque": "VT-404-QS",
    "motoId": "M134"
  },
  {
    "plaque": "HM-887-RV",
    "motoId": "M134"
  },
  {
    "plaque": "NY-659-FW",
    "motoId": "M134"
  },
  {
    "plaque": "JC-498-PY",
    "motoId": "M134"
  },
  {
    "plaque": "YH-252-BM",
    "motoId": "M134"
  },
  {
    "plaque": "XW-749-HS",
    "motoId": "M135"
  },
  {
    "plaque": "ZH-223-LK",
    "motoId": "M135"
  },
  {
    "plaque": "FY-351-GD",
    "motoId": "M135"
  },
  {
    "plaque": "NJ-886-LJ",
    "motoId": "M135"
  },
  {
    "plaque": "ME-185-SP",
    "motoId": "M135"
  },
  {
    "plaque": "PG-937-JH",
    "motoId": "M135"
  },
  {
    "plaque": "YP-132-WX",
    "motoId": "M135"
  },
  {
    "plaque": "SX-222-FY",
    "motoId": "M136"
  },
  {
    "plaque": "RV-733-EY",
    "motoId": "M136"
  },
  {
    "plaque": "BC-605-YV",
    "motoId": "M136"
  },
  {
    "plaque": "TD-783-DQ",
    "motoId": "M136"
  },
  {
    "plaque": "AL-328-CB",
    "motoId": "M136"
  },
  {
    "plaque": "AA-963-AR",
    "motoId": "M136"
  },
  {
    "plaque": "NC-908-QX",
    "motoId": "M136"
  },
  {
    "plaque": "KC-341-WR",
    "motoId": "M137"
  },
  {
    "plaque": "ZD-230-AX",
    "motoId": "M137"
  },
  {
    "plaque": "MF-306-CD",
    "motoId": "M137"
  },
  {
    "plaque": "WA-566-ZE",
    "motoId": "M137"
  },
  {
    "plaque": "NK-942-MW",
    "motoId": "M137"
  },
  {
    "plaque": "TT-347-JZ",
    "motoId": "M138"
  },
  {
    "plaque": "ML-535-DC",
    "motoId": "M138"
  },
  {
    "plaque": "DQ-190-VD",
    "motoId": "M138"
  },
  {
    "plaque": "HT-682-QV",
    "motoId": "M138"
  },
  {
    "plaque": "EH-253-SH",
    "motoId": "M139"
  },
  {
    "plaque": "QD-338-AG",
    "motoId": "M139"
  },
  {
    "plaque": "CP-481-SV",
    "motoId": "M139"
  },
  {
    "plaque": "WW-318-TY",
    "motoId": "M139"
  },
  {
    "plaque": "QR-135-YY",
    "motoId": "M139"
  },
  {
    "plaque": "SD-628-HY",
    "motoId": "M140"
  },
  {
    "plaque": "XE-245-XN",
    "motoId": "M140"
  },
  {
    "plaque": "HW-531-PE",
    "motoId": "M140"
  },
  {
    "plaque": "VF-396-PN",
    "motoId": "M140"
  },
  {
    "plaque": "XZ-606-NN",
    "motoId": "M140"
  },
  {
    "plaque": "GE-824-BB",
    "motoId": "M141"
  },
  {
    "plaque": "GR-376-VA",
    "motoId": "M141"
  },
  {
    "plaque": "HD-204-RL",
    "motoId": "M141"
  },
  {
    "plaque": "KB-412-PS",
    "motoId": "M141"
  },
  {
    "plaque": "YE-139-PW",
    "motoId": "M141"
  },
  {
    "plaque": "GS-176-ZA",
    "motoId": "M142"
  },
  {
    "plaque": "TG-337-AX",
    "motoId": "M142"
  },
  {
    "plaque": "GS-185-BN",
    "motoId": "M142"
  },
  {
    "plaque": "XS-912-NG",
    "motoId": "M142"
  },
  {
    "plaque": "GY-826-VX",
    "motoId": "M142"
  },
  {
    "plaque": "TF-458-MA",
    "motoId": "M143"
  },
  {
    "plaque": "FX-507-RJ",
    "motoId": "M143"
  },
  {
    "plaque": "TL-904-VR",
    "motoId": "M143"
  },
  {
    "plaque": "ZB-713-ZK",
    "motoId": "M143"
  },
  {
    "plaque": "ST-549-ZV",
    "motoId": "M144"
  },
  {
    "plaque": "AT-761-CC",
    "motoId": "M144"
  },
  {
    "plaque": "FS-984-LH",
    "motoId": "M144"
  },
  {
    "plaque": "BN-494-DB",
    "motoId": "M144"
  },
  {
    "plaque": "GM-476-DY",
    "motoId": "M144"
  },
  {
    "plaque": "QY-454-PF",
    "motoId": "M145"
  },
  {
    "plaque": "YK-729-TS",
    "motoId": "M145"
  },
  {
    "plaque": "MR-484-WT",
    "motoId": "M145"
  },
  {
    "plaque": "GV-698-YY",
    "motoId": "M145"
  },
  {
    "plaque": "EG-941-QE",
    "motoId": "M145"
  },
  {
    "plaque": "EF-314-YY",
    "motoId": "M146"
  },
  {
    "plaque": "KK-610-MD",
    "motoId": "M146"
  },
  {
    "plaque": "MC-132-GV",
    "motoId": "M146"
  },
  {
    "plaque": "SZ-854-JD",
    "motoId": "M146"
  },
  {
    "plaque": "HK-529-FQ",
    "motoId": "M146"
  },
  {
    "plaque": "LH-842-LR",
    "motoId": "M147"
  },
  {
    "plaque": "WT-917-ZD",
    "motoId": "M147"
  },
  {
    "plaque": "JQ-836-BY",
    "motoId": "M147"
  },
  {
    "plaque": "NS-348-RJ",
    "motoId": "M147"
  },
  {
    "plaque": "PY-833-BW",
    "motoId": "M147"
  },
  {
    "plaque": "ZG-306-FX",
    "motoId": "M148"
  },
  {
    "plaque": "BP-820-PB",
    "motoId": "M148"
  },
  {
    "plaque": "BF-338-HA",
    "motoId": "M148"
  },
  {
    "plaque": "GF-780-CP",
    "motoId": "M148"
  },
  {
    "plaque": "CZ-128-BL",
    "motoId": "M149"
  },
  {
    "plaque": "JD-787-YY",
    "motoId": "M149"
  },
  {
    "plaque": "AX-784-JR",
    "motoId": "M149"
  },
  {
    "plaque": "PY-776-KX",
    "motoId": "M149"
  },
  {
    "plaque": "CH-372-GG",
    "motoId": "M149"
  },
  {
    "plaque": "NH-398-NE",
    "motoId": "M149"
  },
  {
    "plaque": "KW-566-SE",
    "motoId": "M149"
  },
  {
    "plaque": "YA-114-VK",
    "motoId": "M150"
  },
  {
    "plaque": "SW-549-EZ",
    "motoId": "M150"
  },
  {
    "plaque": "BX-303-SW",
    "motoId": "M150"
  },
  {
    "plaque": "LS-643-PY",
    "motoId": "M150"
  },
  {
    "plaque": "SW-561-PX",
    "motoId": "M151"
  },
  {
    "plaque": "RA-756-KJ",
    "motoId": "M151"
  },
  {
    "plaque": "FK-758-YQ",
    "motoId": "M151"
  },
  {
    "plaque": "CB-397-WV",
    "motoId": "M151"
  },
  {
    "plaque": "VM-640-YQ",
    "motoId": "M151"
  },
  {
    "plaque": "CC-671-EP",
    "motoId": "M151"
  },
  {
    "plaque": "XT-318-GW",
    "motoId": "M151"
  },
  {
    "plaque": "WH-683-SB",
    "motoId": "M152"
  },
  {
    "plaque": "GA-694-PL",
    "motoId": "M152"
  },
  {
    "plaque": "NJ-117-XV",
    "motoId": "M152"
  },
  {
    "plaque": "RH-503-KR",
    "motoId": "M152"
  },
  {
    "plaque": "MT-340-LY",
    "motoId": "M152"
  },
  {
    "plaque": "QA-402-KG",
    "motoId": "M152"
  },
  {
    "plaque": "GN-423-DN",
    "motoId": "M152"
  },
  {
    "plaque": "ND-818-AQ",
    "motoId": "M153"
  },
  {
    "plaque": "CN-214-JB",
    "motoId": "M153"
  },
  {
    "plaque": "BF-168-NM",
    "motoId": "M153"
  },
  {
    "plaque": "AJ-974-JX",
    "motoId": "M153"
  },
  {
    "plaque": "WA-166-DW",
    "motoId": "M153"
  },
  {
    "plaque": "KF-596-ZG",
    "motoId": "M154"
  },
  {
    "plaque": "VE-866-JT",
    "motoId": "M154"
  },
  {
    "plaque": "RM-469-EG",
    "motoId": "M154"
  },
  {
    "plaque": "SD-352-RD",
    "motoId": "M154"
  },
  {
    "plaque": "FP-414-XC",
    "motoId": "M155"
  },
  {
    "plaque": "KW-192-HD",
    "motoId": "M155"
  },
  {
    "plaque": "ZK-673-YV",
    "motoId": "M155"
  },
  {
    "plaque": "JA-204-QP",
    "motoId": "M155"
  },
  {
    "plaque": "EH-878-PA",
    "motoId": "M155"
  },
  {
    "plaque": "WV-952-SM",
    "motoId": "M156"
  },
  {
    "plaque": "MD-743-KJ",
    "motoId": "M156"
  },
  {
    "plaque": "ZC-606-PZ",
    "motoId": "M156"
  },
  {
    "plaque": "FG-502-SM",
    "motoId": "M156"
  },
  {
    "plaque": "XM-329-DD",
    "motoId": "M156"
  },
  {
    "plaque": "BV-324-MV",
    "motoId": "M157"
  },
  {
    "plaque": "HQ-116-YZ",
    "motoId": "M157"
  },
  {
    "plaque": "NX-543-CJ",
    "motoId": "M157"
  },
  {
    "plaque": "FD-124-YB",
    "motoId": "M157"
  },
  {
    "plaque": "GZ-690-QH",
    "motoId": "M157"
  },
  {
    "plaque": "DX-243-SG",
    "motoId": "M157"
  },
  {
    "plaque": "AF-685-QX",
    "motoId": "M157"
  },
  {
    "plaque": "YR-453-LG",
    "motoId": "M158"
  },
  {
    "plaque": "KF-924-MT",
    "motoId": "M158"
  },
  {
    "plaque": "PR-261-CL",
    "motoId": "M158"
  },
  {
    "plaque": "XG-468-TD",
    "motoId": "M158"
  },
  {
    "plaque": "YQ-613-TQ",
    "motoId": "M159"
  },
  {
    "plaque": "RR-427-FL",
    "motoId": "M159"
  },
  {
    "plaque": "BD-520-VY",
    "motoId": "M159"
  },
  {
    "plaque": "BS-257-FX",
    "motoId": "M159"
  },
  {
    "plaque": "GD-305-SZ",
    "motoId": "M159"
  },
  {
    "plaque": "DY-894-DT",
    "motoId": "M160"
  },
  {
    "plaque": "KM-765-JR",
    "motoId": "M160"
  },
  {
    "plaque": "LD-469-MC",
    "motoId": "M160"
  },
  {
    "plaque": "CR-580-RE",
    "motoId": "M160"
  },
  {
    "plaque": "NN-960-WH",
    "motoId": "M161"
  },
  {
    "plaque": "VE-308-BF",
    "motoId": "M161"
  },
  {
    "plaque": "PZ-538-BF",
    "motoId": "M161"
  },
  {
    "plaque": "HS-522-HH",
    "motoId": "M161"
  },
  {
    "plaque": "NH-947-YM",
    "motoId": "M162"
  },
  {
    "plaque": "WP-602-HM",
    "motoId": "M162"
  },
  {
    "plaque": "NJ-471-LP",
    "motoId": "M162"
  },
  {
    "plaque": "VF-960-SM",
    "motoId": "M162"
  },
  {
    "plaque": "QX-833-GK",
    "motoId": "M163"
  },
  {
    "plaque": "JQ-497-ST",
    "motoId": "M163"
  },
  {
    "plaque": "ZK-843-AZ",
    "motoId": "M163"
  },
  {
    "plaque": "AN-604-WZ",
    "motoId": "M163"
  },
  {
    "plaque": "LX-546-ZD",
    "motoId": "M163"
  },
  {
    "plaque": "GE-522-ZJ",
    "motoId": "M163"
  },
  {
    "plaque": "WY-593-QL",
    "motoId": "M163"
  },
  {
    "plaque": "ND-743-XP",
    "motoId": "M164"
  },
  {
    "plaque": "ZJ-951-MJ",
    "motoId": "M164"
  },
  {
    "plaque": "AY-573-WN",
    "motoId": "M164"
  },
  {
    "plaque": "MC-108-TJ",
    "motoId": "M164"
  },
  {
    "plaque": "MV-730-DF",
    "motoId": "M164"
  },
  {
    "plaque": "DD-226-AY",
    "motoId": "M165"
  },
  {
    "plaque": "KV-324-QZ",
    "motoId": "M165"
  },
  {
    "plaque": "WY-963-DE",
    "motoId": "M165"
  },
  {
    "plaque": "TB-818-DY",
    "motoId": "M165"
  },
  {
    "plaque": "WA-539-ZH",
    "motoId": "M165"
  },
  {
    "plaque": "XF-852-QF",
    "motoId": "M165"
  },
  {
    "plaque": "DM-368-KP",
    "motoId": "M165"
  },
  {
    "plaque": "XW-339-XM",
    "motoId": "M166"
  },
  {
    "plaque": "EY-640-MH",
    "motoId": "M166"
  },
  {
    "plaque": "ST-635-BE",
    "motoId": "M166"
  },
  {
    "plaque": "WA-452-JW",
    "motoId": "M166"
  },
  {
    "plaque": "MX-894-BR",
    "motoId": "M166"
  },
  {
    "plaque": "DJ-363-RP",
    "motoId": "M167"
  },
  {
    "plaque": "MW-831-EX",
    "motoId": "M167"
  },
  {
    "plaque": "WC-989-SN",
    "motoId": "M167"
  },
  {
    "plaque": "NZ-137-PD",
    "motoId": "M167"
  },
  {
    "plaque": "CJ-913-BN",
    "motoId": "M168"
  },
  {
    "plaque": "AS-404-YJ",
    "motoId": "M168"
  },
  {
    "plaque": "LV-980-MY",
    "motoId": "M168"
  },
  {
    "plaque": "AN-933-ZT",
    "motoId": "M168"
  },
  {
    "plaque": "GT-680-JC",
    "motoId": "M168"
  },
  {
    "plaque": "PV-299-MT",
    "motoId": "M168"
  },
  {
    "plaque": "KX-153-QQ",
    "motoId": "M168"
  },
  {
    "plaque": "WY-127-BL",
    "motoId": "M169"
  },
  {
    "plaque": "XQ-156-WP",
    "motoId": "M169"
  },
  {
    "plaque": "ZA-356-YL",
    "motoId": "M169"
  },
  {
    "plaque": "QZ-700-NM",
    "motoId": "M169"
  },
  {
    "plaque": "PG-367-MT",
    "motoId": "M169"
  },
  {
    "plaque": "EJ-433-GN",
    "motoId": "M170"
  },
  {
    "plaque": "VA-870-VB",
    "motoId": "M170"
  },
  {
    "plaque": "CM-405-FG",
    "motoId": "M170"
  },
  {
    "plaque": "RL-813-ZP",
    "motoId": "M170"
  },
  {
    "plaque": "ZB-203-TM",
    "motoId": "M171"
  },
  {
    "plaque": "LB-356-KP",
    "motoId": "M171"
  },
  {
    "plaque": "QC-215-SX",
    "motoId": "M171"
  },
  {
    "plaque": "EZ-850-LD",
    "motoId": "M171"
  },
  {
    "plaque": "JE-784-LB",
    "motoId": "M171"
  },
  {
    "plaque": "TS-113-HX",
    "motoId": "M171"
  },
  {
    "plaque": "YB-312-TD",
    "motoId": "M171"
  },
  {
    "plaque": "HB-698-ED",
    "motoId": "M172"
  },
  {
    "plaque": "SJ-786-XS",
    "motoId": "M172"
  },
  {
    "plaque": "PG-461-PH",
    "motoId": "M172"
  },
  {
    "plaque": "PL-474-HS",
    "motoId": "M172"
  },
  {
    "plaque": "RT-625-MJ",
    "motoId": "M172"
  },
  {
    "plaque": "QX-371-DF",
    "motoId": "M173"
  },
  {
    "plaque": "LX-310-PP",
    "motoId": "M173"
  },
  {
    "plaque": "MY-471-YC",
    "motoId": "M173"
  },
  {
    "plaque": "LV-710-NJ",
    "motoId": "M173"
  },
  {
    "plaque": "CT-546-ZN",
    "motoId": "M174"
  },
  {
    "plaque": "BL-298-JD",
    "motoId": "M174"
  },
  {
    "plaque": "VM-721-TG",
    "motoId": "M174"
  },
  {
    "plaque": "TP-863-PP",
    "motoId": "M174"
  },
  {
    "plaque": "GZ-347-TP",
    "motoId": "M174"
  },
  {
    "plaque": "AJ-439-MT",
    "motoId": "M175"
  },
  {
    "plaque": "DM-479-EH",
    "motoId": "M175"
  },
  {
    "plaque": "DR-648-NA",
    "motoId": "M175"
  },
  {
    "plaque": "MW-981-LW",
    "motoId": "M175"
  },
  {
    "plaque": "EE-418-AM",
    "motoId": "M176"
  },
  {
    "plaque": "KM-291-CC",
    "motoId": "M176"
  },
  {
    "plaque": "BA-558-WQ",
    "motoId": "M176"
  },
  {
    "plaque": "MA-751-VF",
    "motoId": "M176"
  },
  {
    "plaque": "GY-209-XP",
    "motoId": "M176"
  },
  {
    "plaque": "LS-613-VX",
    "motoId": "M177"
  },
  {
    "plaque": "XL-868-NA",
    "motoId": "M177"
  },
  {
    "plaque": "HR-124-YW",
    "motoId": "M177"
  },
  {
    "plaque": "VJ-772-CZ",
    "motoId": "M177"
  },
  {
    "plaque": "CR-950-ZP",
    "motoId": "M177"
  },
  {
    "plaque": "CV-901-NF",
    "motoId": "M177"
  },
  {
    "plaque": "GW-193-ZY",
    "motoId": "M177"
  },
  {
    "plaque": "NP-522-ET",
    "motoId": "M178"
  },
  {
    "plaque": "ZA-100-NT",
    "motoId": "M178"
  },
  {
    "plaque": "ZH-453-KP",
    "motoId": "M178"
  },
  {
    "plaque": "RC-287-QE",
    "motoId": "M178"
  },
  {
    "plaque": "GZ-884-JJ",
    "motoId": "M178"
  },
  {
    "plaque": "DK-794-SB",
    "motoId": "M178"
  },
  {
    "plaque": "EP-575-YV",
    "motoId": "M178"
  },
  {
    "plaque": "LP-391-KM",
    "motoId": "M179"
  },
  {
    "plaque": "WP-483-NJ",
    "motoId": "M179"
  },
  {
    "plaque": "QZ-379-WS",
    "motoId": "M179"
  },
  {
    "plaque": "QW-653-QD",
    "motoId": "M179"
  },
  {
    "plaque": "XG-666-HK",
    "motoId": "M179"
  },
  {
    "plaque": "NH-951-RH",
    "motoId": "M179"
  },
  {
    "plaque": "AN-840-ML",
    "motoId": "M179"
  },
  {
    "plaque": "XD-599-EH",
    "motoId": "M180"
  },
  {
    "plaque": "VL-199-SS",
    "motoId": "M180"
  },
  {
    "plaque": "XA-509-MY",
    "motoId": "M180"
  },
  {
    "plaque": "YQ-998-HC",
    "motoId": "M180"
  },
  {
    "plaque": "GD-748-ES",
    "motoId": "M181"
  },
  {
    "plaque": "RX-404-HG",
    "motoId": "M181"
  },
  {
    "plaque": "EZ-447-DY",
    "motoId": "M181"
  },
  {
    "plaque": "XE-273-SX",
    "motoId": "M181"
  },
  {
    "plaque": "AG-118-YH",
    "motoId": "M181"
  },
  {
    "plaque": "NW-488-TT",
    "motoId": "M181"
  },
  {
    "plaque": "KS-716-CG",
    "motoId": "M181"
  },
  {
    "plaque": "XE-369-RX",
    "motoId": "M182"
  },
  {
    "plaque": "QK-266-DD",
    "motoId": "M182"
  },
  {
    "plaque": "XG-996-SY",
    "motoId": "M182"
  },
  {
    "plaque": "SW-933-KE",
    "motoId": "M182"
  },
  {
    "plaque": "NH-576-QS",
    "motoId": "M182"
  },
  {
    "plaque": "BC-620-GW",
    "motoId": "M183"
  },
  {
    "plaque": "HN-654-DQ",
    "motoId": "M183"
  },
  {
    "plaque": "NA-815-NH",
    "motoId": "M183"
  },
  {
    "plaque": "CR-801-ZW",
    "motoId": "M183"
  },
  {
    "plaque": "PN-374-NX",
    "motoId": "M184"
  },
  {
    "plaque": "WZ-336-GW",
    "motoId": "M184"
  },
  {
    "plaque": "QY-415-QT",
    "motoId": "M184"
  },
  {
    "plaque": "HQ-722-WQ",
    "motoId": "M184"
  },
  {
    "plaque": "BA-406-BF",
    "motoId": "M185"
  },
  {
    "plaque": "EP-285-NM",
    "motoId": "M185"
  },
  {
    "plaque": "BM-607-CW",
    "motoId": "M185"
  },
  {
    "plaque": "HQ-229-FA",
    "motoId": "M185"
  },
  {
    "plaque": "HV-470-LL",
    "motoId": "M186"
  },
  {
    "plaque": "SL-874-QK",
    "motoId": "M186"
  },
  {
    "plaque": "XS-361-CF",
    "motoId": "M186"
  },
  {
    "plaque": "JS-310-FT",
    "motoId": "M186"
  },
  {
    "plaque": "JV-575-ZE",
    "motoId": "M186"
  },
  {
    "plaque": "EZ-452-ZM",
    "motoId": "M187"
  },
  {
    "plaque": "SB-646-EZ",
    "motoId": "M187"
  },
  {
    "plaque": "CG-532-AC",
    "motoId": "M187"
  },
  {
    "plaque": "MN-847-YK",
    "motoId": "M187"
  },
  {
    "plaque": "AY-564-VK",
    "motoId": "M187"
  },
  {
    "plaque": "PX-734-LN",
    "motoId": "M187"
  },
  {
    "plaque": "PD-300-XW",
    "motoId": "M187"
  },
  {
    "plaque": "RC-126-MA",
    "motoId": "M188"
  },
  {
    "plaque": "SP-310-MC",
    "motoId": "M188"
  },
  {
    "plaque": "NA-103-LS",
    "motoId": "M188"
  },
  {
    "plaque": "WW-989-PQ",
    "motoId": "M188"
  },
  {
    "plaque": "XY-907-ED",
    "motoId": "M189"
  },
  {
    "plaque": "NG-869-PH",
    "motoId": "M189"
  },
  {
    "plaque": "CW-369-HF",
    "motoId": "M189"
  },
  {
    "plaque": "LM-256-XR",
    "motoId": "M189"
  },
  {
    "plaque": "AD-248-TB",
    "motoId": "M189"
  },
  {
    "plaque": "KH-681-EN",
    "motoId": "M190"
  },
  {
    "plaque": "ZN-987-WW",
    "motoId": "M190"
  },
  {
    "plaque": "GF-384-YF",
    "motoId": "M190"
  },
  {
    "plaque": "JB-698-CA",
    "motoId": "M190"
  },
  {
    "plaque": "ZX-178-MX",
    "motoId": "M191"
  },
  {
    "plaque": "DV-619-KR",
    "motoId": "M191"
  },
  {
    "plaque": "SE-454-GF",
    "motoId": "M191"
  },
  {
    "plaque": "FK-331-JB",
    "motoId": "M191"
  },
  {
    "plaque": "AR-774-TM",
    "motoId": "M192"
  },
  {
    "plaque": "HR-642-EX",
    "motoId": "M192"
  },
  {
    "plaque": "WE-478-DF",
    "motoId": "M192"
  },
  {
    "plaque": "JD-690-RC",
    "motoId": "M192"
  },
  {
    "plaque": "PL-208-BE",
    "motoId": "M193"
  },
  {
    "plaque": "AF-650-VS",
    "motoId": "M193"
  },
  {
    "plaque": "KT-215-CX",
    "motoId": "M193"
  },
  {
    "plaque": "AY-451-XG",
    "motoId": "M193"
  },
  {
    "plaque": "DT-157-EB",
    "motoId": "M193"
  },
  {
    "plaque": "ZW-357-BL",
    "motoId": "M193"
  },
  {
    "plaque": "AH-800-KM",
    "motoId": "M193"
  },
  {
    "plaque": "AV-924-CA",
    "motoId": "M194"
  },
  {
    "plaque": "YG-637-TK",
    "motoId": "M194"
  },
  {
    "plaque": "AX-809-MT",
    "motoId": "M194"
  },
  {
    "plaque": "XD-804-DW",
    "motoId": "M194"
  },
  {
    "plaque": "YZ-600-GK",
    "motoId": "M195"
  },
  {
    "plaque": "AR-419-ML",
    "motoId": "M195"
  },
  {
    "plaque": "HT-152-RZ",
    "motoId": "M195"
  },
  {
    "plaque": "WG-704-AG",
    "motoId": "M195"
  },
  {
    "plaque": "XQ-746-HH",
    "motoId": "M195"
  },
  {
    "plaque": "GJ-636-GK",
    "motoId": "M195"
  },
  {
    "plaque": "WT-676-EV",
    "motoId": "M195"
  },
  {
    "plaque": "AT-896-XR",
    "motoId": "M196"
  },
  {
    "plaque": "BQ-676-AR",
    "motoId": "M196"
  },
  {
    "plaque": "HP-792-BJ",
    "motoId": "M196"
  },
  {
    "plaque": "HJ-672-RZ",
    "motoId": "M196"
  },
  {
    "plaque": "FP-113-QZ",
    "motoId": "M196"
  },
  {
    "plaque": "VA-707-LS",
    "motoId": "M196"
  },
  {
    "plaque": "CZ-476-YH",
    "motoId": "M196"
  },
  {
    "plaque": "SE-619-VR",
    "motoId": "M197"
  },
  {
    "plaque": "LH-359-SY",
    "motoId": "M197"
  },
  {
    "plaque": "TK-612-XX",
    "motoId": "M197"
  },
  {
    "plaque": "BB-521-AJ",
    "motoId": "M197"
  },
  {
    "plaque": "WM-180-DF",
    "motoId": "M197"
  },
  {
    "plaque": "CM-327-ZL",
    "motoId": "M197"
  },
  {
    "plaque": "NA-800-VX",
    "motoId": "M197"
  },
  {
    "plaque": "LG-192-QM",
    "motoId": "M198"
  },
  {
    "plaque": "WQ-993-EJ",
    "motoId": "M198"
  },
  {
    "plaque": "BP-978-SJ",
    "motoId": "M198"
  },
  {
    "plaque": "XP-409-PE",
    "motoId": "M198"
  },
  {
    "plaque": "TH-470-PK",
    "motoId": "M198"
  },
  {
    "plaque": "FX-138-BL",
    "motoId": "M199"
  },
  {
    "plaque": "WX-181-PX",
    "motoId": "M199"
  },
  {
    "plaque": "AZ-635-XH",
    "motoId": "M199"
  },
  {
    "plaque": "GK-460-NJ",
    "motoId": "M199"
  },
  {
    "plaque": "ZD-638-VM",
    "motoId": "M200"
  },
  {
    "plaque": "ZN-655-TD",
    "motoId": "M200"
  },
  {
    "plaque": "LD-147-KE",
    "motoId": "M200"
  },
  {
    "plaque": "FC-912-DZ",
    "motoId": "M200"
  },
  {
    "plaque": "ZR-227-EH",
    "motoId": "M200"
  },
  {
    "plaque": "DN-769-TG",
    "motoId": "M201"
  },
  {
    "plaque": "FJ-142-WV",
    "motoId": "M201"
  },
  {
    "plaque": "AH-389-KY",
    "motoId": "M201"
  },
  {
    "plaque": "EJ-500-PF",
    "motoId": "M201"
  },
  {
    "plaque": "TV-105-ZK",
    "motoId": "M201"
  },
  {
    "plaque": "QD-499-AH",
    "motoId": "M202"
  },
  {
    "plaque": "SA-174-ZE",
    "motoId": "M202"
  },
  {
    "plaque": "LS-808-NJ",
    "motoId": "M202"
  },
  {
    "plaque": "ZM-626-ZW",
    "motoId": "M202"
  },
  {
    "plaque": "GG-972-EE",
    "motoId": "M203"
  },
  {
    "plaque": "SV-300-BR",
    "motoId": "M203"
  },
  {
    "plaque": "GD-790-HW",
    "motoId": "M203"
  },
  {
    "plaque": "ZH-934-WS",
    "motoId": "M203"
  },
  {
    "plaque": "HN-270-YY",
    "motoId": "M204"
  },
  {
    "plaque": "TH-593-TT",
    "motoId": "M204"
  },
  {
    "plaque": "JT-291-YD",
    "motoId": "M204"
  },
  {
    "plaque": "FR-693-EE",
    "motoId": "M204"
  },
  {
    "plaque": "ZW-770-JM",
    "motoId": "M205"
  },
  {
    "plaque": "CC-852-GQ",
    "motoId": "M205"
  },
  {
    "plaque": "XR-792-TZ",
    "motoId": "M205"
  },
  {
    "plaque": "NB-438-ME",
    "motoId": "M205"
  },
  {
    "plaque": "ZH-700-BV",
    "motoId": "M205"
  },
  {
    "plaque": "HT-541-HX",
    "motoId": "M205"
  },
  {
    "plaque": "PY-685-NY",
    "motoId": "M205"
  },
  {
    "plaque": "KJ-568-AH",
    "motoId": "M206"
  },
  {
    "plaque": "HE-890-DR",
    "motoId": "M206"
  },
  {
    "plaque": "TG-941-EN",
    "motoId": "M206"
  },
  {
    "plaque": "NC-704-KE",
    "motoId": "M206"
  },
  {
    "plaque": "GH-270-RW",
    "motoId": "M206"
  },
  {
    "plaque": "MQ-358-VR",
    "motoId": "M207"
  },
  {
    "plaque": "PH-162-ST",
    "motoId": "M207"
  },
  {
    "plaque": "GS-560-RV",
    "motoId": "M207"
  },
  {
    "plaque": "GX-222-WH",
    "motoId": "M207"
  },
  {
    "plaque": "DH-647-PX",
    "motoId": "M207"
  },
  {
    "plaque": "TL-429-FW",
    "motoId": "M208"
  },
  {
    "plaque": "YN-467-AE",
    "motoId": "M208"
  },
  {
    "plaque": "PV-170-JL",
    "motoId": "M208"
  },
  {
    "plaque": "FT-664-JJ",
    "motoId": "M208"
  },
  {
    "plaque": "VD-601-ZE",
    "motoId": "M208"
  },
  {
    "plaque": "TR-324-KB",
    "motoId": "M209"
  },
  {
    "plaque": "PR-430-MH",
    "motoId": "M209"
  },
  {
    "plaque": "CW-416-XP",
    "motoId": "M209"
  },
  {
    "plaque": "PN-369-GR",
    "motoId": "M209"
  },
  {
    "plaque": "RC-336-VF",
    "motoId": "M209"
  },
  {
    "plaque": "MS-724-XQ",
    "motoId": "M209"
  },
  {
    "plaque": "DT-274-EG",
    "motoId": "M209"
  },
  {
    "plaque": "MG-929-VF",
    "motoId": "M210"
  },
  {
    "plaque": "KV-636-NC",
    "motoId": "M210"
  },
  {
    "plaque": "JL-198-LK",
    "motoId": "M210"
  },
  {
    "plaque": "KZ-327-DG",
    "motoId": "M210"
  },
  {
    "plaque": "WG-616-QZ",
    "motoId": "M211"
  },
  {
    "plaque": "HS-988-FM",
    "motoId": "M211"
  },
  {
    "plaque": "AR-483-ZQ",
    "motoId": "M211"
  },
  {
    "plaque": "YV-408-XH",
    "motoId": "M211"
  },
  {
    "plaque": "ZA-260-HB",
    "motoId": "M211"
  },
  {
    "plaque": "ET-887-DN",
    "motoId": "M212"
  },
  {
    "plaque": "QX-136-CB",
    "motoId": "M212"
  },
  {
    "plaque": "JF-432-MH",
    "motoId": "M212"
  },
  {
    "plaque": "QY-988-LR",
    "motoId": "M212"
  },
  {
    "plaque": "DJ-406-TH",
    "motoId": "M212"
  },
  {
    "plaque": "AZ-507-NE",
    "motoId": "M213"
  },
  {
    "plaque": "PA-115-FG",
    "motoId": "M213"
  },
  {
    "plaque": "FK-409-KE",
    "motoId": "M213"
  },
  {
    "plaque": "CE-866-KK",
    "motoId": "M213"
  },
  {
    "plaque": "MH-814-RR",
    "motoId": "M213"
  },
  {
    "plaque": "ZE-697-FX",
    "motoId": "M213"
  },
  {
    "plaque": "GQ-966-RG",
    "motoId": "M213"
  },
  {
    "plaque": "DB-473-TX",
    "motoId": "M214"
  },
  {
    "plaque": "HB-290-FF",
    "motoId": "M214"
  },
  {
    "plaque": "BR-113-PQ",
    "motoId": "M214"
  },
  {
    "plaque": "YF-963-KG",
    "motoId": "M214"
  },
  {
    "plaque": "VX-136-GZ",
    "motoId": "M214"
  },
  {
    "plaque": "YF-405-NG",
    "motoId": "M215"
  },
  {
    "plaque": "SL-933-NZ",
    "motoId": "M215"
  },
  {
    "plaque": "ZT-844-TV",
    "motoId": "M215"
  },
  {
    "plaque": "BT-509-VP",
    "motoId": "M215"
  },
  {
    "plaque": "SM-491-YZ",
    "motoId": "M215"
  },
  {
    "plaque": "SY-571-MG",
    "motoId": "M216"
  },
  {
    "plaque": "DA-153-MA",
    "motoId": "M216"
  },
  {
    "plaque": "VZ-720-DF",
    "motoId": "M216"
  },
  {
    "plaque": "XB-232-DF",
    "motoId": "M216"
  },
  {
    "plaque": "YR-284-PB",
    "motoId": "M217"
  },
  {
    "plaque": "JG-811-PB",
    "motoId": "M217"
  },
  {
    "plaque": "BK-513-FA",
    "motoId": "M217"
  },
  {
    "plaque": "DW-257-TP",
    "motoId": "M217"
  },
  {
    "plaque": "ZW-651-XN",
    "motoId": "M217"
  },
  {
    "plaque": "CM-433-CB",
    "motoId": "M217"
  },
  {
    "plaque": "CG-122-EY",
    "motoId": "M217"
  },
  {
    "plaque": "ME-592-PC",
    "motoId": "M218"
  },
  {
    "plaque": "GJ-593-XM",
    "motoId": "M218"
  },
  {
    "plaque": "WA-509-NR",
    "motoId": "M218"
  },
  {
    "plaque": "ZR-105-CT",
    "motoId": "M218"
  },
  {
    "plaque": "BK-267-PV",
    "motoId": "M218"
  },
  {
    "plaque": "VV-296-QD",
    "motoId": "M219"
  },
  {
    "plaque": "SJ-220-TL",
    "motoId": "M219"
  },
  {
    "plaque": "ES-217-CT",
    "motoId": "M219"
  },
  {
    "plaque": "DY-458-DB",
    "motoId": "M219"
  },
  {
    "plaque": "JR-545-VG",
    "motoId": "M219"
  },
  {
    "plaque": "ZJ-690-AV",
    "motoId": "M219"
  },
  {
    "plaque": "QQ-972-SJ",
    "motoId": "M219"
  },
  {
    "plaque": "LS-398-RX",
    "motoId": "M220"
  },
  {
    "plaque": "VC-748-AS",
    "motoId": "M220"
  },
  {
    "plaque": "KK-904-RV",
    "motoId": "M220"
  },
  {
    "plaque": "XN-729-CH",
    "motoId": "M220"
  },
  {
    "plaque": "BG-306-DP",
    "motoId": "M220"
  },
  {
    "plaque": "FW-941-JA",
    "motoId": "M221"
  },
  {
    "plaque": "RT-138-YH",
    "motoId": "M221"
  },
  {
    "plaque": "RE-285-ML",
    "motoId": "M221"
  },
  {
    "plaque": "XE-466-KM",
    "motoId": "M221"
  },
  {
    "plaque": "MB-666-VV",
    "motoId": "M221"
  },
  {
    "plaque": "JQ-635-CV",
    "motoId": "M222"
  },
  {
    "plaque": "PJ-302-LT",
    "motoId": "M222"
  },
  {
    "plaque": "TF-624-MW",
    "motoId": "M222"
  },
  {
    "plaque": "YM-706-ML",
    "motoId": "M222"
  },
  {
    "plaque": "VT-334-AV",
    "motoId": "M222"
  },
  {
    "plaque": "YV-321-BT",
    "motoId": "M223"
  },
  {
    "plaque": "HM-785-SH",
    "motoId": "M223"
  },
  {
    "plaque": "PT-777-CK",
    "motoId": "M223"
  },
  {
    "plaque": "DA-772-EE",
    "motoId": "M223"
  },
  {
    "plaque": "VD-204-ZN",
    "motoId": "M223"
  },
  {
    "plaque": "GB-898-TT",
    "motoId": "M223"
  },
  {
    "plaque": "TX-884-NV",
    "motoId": "M223"
  },
  {
    "plaque": "YQ-811-WP",
    "motoId": "M224"
  },
  {
    "plaque": "HW-895-NE",
    "motoId": "M224"
  },
  {
    "plaque": "FV-456-DZ",
    "motoId": "M224"
  },
  {
    "plaque": "TH-506-WD",
    "motoId": "M224"
  },
  {
    "plaque": "SS-673-AQ",
    "motoId": "M225"
  },
  {
    "plaque": "HM-955-LK",
    "motoId": "M225"
  },
  {
    "plaque": "QR-267-SJ",
    "motoId": "M225"
  },
  {
    "plaque": "ZD-423-BC",
    "motoId": "M225"
  },
  {
    "plaque": "YB-607-VC",
    "motoId": "M225"
  },
  {
    "plaque": "XJ-891-CT",
    "motoId": "M226"
  },
  {
    "plaque": "DM-265-WB",
    "motoId": "M226"
  },
  {
    "plaque": "ZX-832-GS",
    "motoId": "M226"
  },
  {
    "plaque": "RM-305-ZL",
    "motoId": "M226"
  },
  {
    "plaque": "VE-686-FD",
    "motoId": "M226"
  },
  {
    "plaque": "ZG-290-DY",
    "motoId": "M227"
  },
  {
    "plaque": "MH-629-XQ",
    "motoId": "M227"
  },
  {
    "plaque": "PG-163-AY",
    "motoId": "M227"
  },
  {
    "plaque": "MP-980-JP",
    "motoId": "M227"
  }
];

// Index O(1)
export const INDEX_PLAQUES_MOTO: Record<string, string> = Object.fromEntries(
  PLAQUES_MOTO.map(p => [p.plaque, p.motoId])
);

// Index sans tirets
const INDEX_SANS_TIRETS_MOTO: Record<string, string> = Object.fromEntries(
  PLAQUES_MOTO.map(p => [p.plaque.replace(/-/g, ""), p.plaque])
);

export const normaliserPlaqueMoto = (saisie: string): string => {
  const b = saisie.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const m = b.match(/^([A-Z]{2})([0-9]{3})([A-Z]{2})$/);
  if (m) return m[1] + "-" + m[2] + "-" + m[3];
  if (/^[A-Z]{1,2}$/.test(b)) return b;
  if (/^[A-Z]{2}[0-9]{1,3}$/.test(b)) return b.slice(0, 2) + "-" + b.slice(2);
  if (/^[A-Z]{2}[0-9]{3}[A-Z]{1,2}$/.test(b))
    return b.slice(0, 2) + "-" + b.slice(2, 5) + "-" + b.slice(5);
  return b.slice(0, 9);
};

export const rechercherMotoParPlaque = (
  saisie: string
): { moto: MotoVehiculeDB; plaque: string } | null => {
  const normalisee = normaliserPlaqueMoto(saisie);
  let motoId = INDEX_PLAQUES_MOTO[normalisee];
  if (!motoId) {
    const brut = saisie.toUpperCase().replace(/[^A-Z0-9]/g, "");
    const plaqueAvecTirets = INDEX_SANS_TIRETS_MOTO[brut];
    if (plaqueAvecTirets) motoId = INDEX_PLAQUES_MOTO[plaqueAvecTirets];
  }
  if (!motoId) return null;
  const moto = MOTOS.find(m => m.id === motoId) ?? null;
  if (!moto) return null;
  return { moto, plaque: normalisee };
};

export const rechercherSuggestionsMoto = (saisie: string): MotoPlaqueDB[] => {
  const n = normaliserPlaqueMoto(saisie);
  const b = saisie.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (n.length < 2) return [];
  const vues = new Set<string>();
  const res: MotoPlaqueDB[] = [];
  for (const p of PLAQUES_MOTO) {
    if ((p.plaque.startsWith(n) || p.plaque.replace(/-/g, "").startsWith(b)) && !vues.has(p.plaque)) {
      vues.add(p.plaque);
      res.push(p);
    }
    if (res.length >= 8) break;
  }
  return res;
};
