// city.config.ts
// =============================================================
// PRIO 5 – Content-Struktur fuer Tier-A-Stadtseiten
// =============================================================
// Felder mit TODO-Kommentar sind Platzhalter.
// Nur die Tier-A-Staedte (APPROVED_CITY_PAGES) benoetigen
// vollstaendige Befuellung. Alle anderen Staedte werden per
// 301 weitergeleitet und brauchen keinen Content.
//
// Befuellungsreihenfolge (nach Prioritaet):
//   1. bad-kreuznach  – Stammsitz, hoechste Relevanz
//   2. mainz          – groesstes Suchvolumen
//   3. kaiserslautern – Industrie/Gewerbe
//   4. bingen         – Rhein-Nahe
//   5. kirn           – Kernregion
//   6. idar-oberstein – Kernregion
//   7. wiesbaden      – PV/Indach-Fokus
//   8. koblenz        – Mittelrhein
// =============================================================

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityData {
  name: string;
  region: string;
  localHook: string;
  solarHours: number;

  // Kurzbeschreibung der typischen Bebauung / Hausstruktur
  // Beispiel: 'Viele Gruenderzeitbauten und Nachkriegsgebaeude mit Satteldach'
  houseTypes?: string;

  // Lokale Besonderheit fuer den jeweiligen Service
  // Beispiel: 'Durch die Hanglage sind Dachzugaenge oft anspruchsvoll'
  localFact?: string;

  // Entfernung vom Firmensitz Bad Kreuznach in km (fuer Notdienst-Relevanz)
  distanceKm?: number;

  // Stadtspezifische FAQs – erscheinen zusaetzlich zu den allgemeinen FAQs
  // Mindestens 1 Eintrag fuer echten SEO-Mehrwert
  cityFaqs?: CityFaq[];

  // Interne Verlinkung: Schluesselnamen benachbarter Tier-A-Staedte
  // Beispiel: ['kirn', 'idar-oberstein']
  nearbyApprovedCities?: string[];
}

export const CITY_CONFIG: Record<string, CityData> = {

  // =============================================================
  // TIER A – Vollstaendig befuellen (APPROVED_CITY_PAGES)
  // =============================================================

  'bad-kreuznach': {
    name: 'Bad Kreuznach',
    region: 'Nahe-Glan',
    localHook: 'Kurstadt an der Nahe',
    solarHours: 1680,
    distanceKm: 0,
    houseTypes: 'TODO: z.B. Viele Gruenderzeitbauten, Einfamilienhaeuser der 60er-80er Jahre sowie neuere Wohngebiete am Stadtrand',
    localFact: 'TODO: z.B. Als unser Firmensitz sind wir in Bad Kreuznach innerhalb weniger Stunden vor Ort',
    cityFaqs: [
      { question: 'TODO: Stadtspezifische Frage 1', answer: 'TODO: Antwort 1' },
      { question: 'TODO: Stadtspezifische Frage 2', answer: 'TODO: Antwort 2' }
    ],
    nearbyApprovedCities: ['kirn', 'idar-oberstein', 'bingen']
  },

  'mainz': {
    name: 'Mainz',
    region: 'Rheinhessen',
    localHook: 'Landeshauptstadt',
    solarHours: 1715,
    distanceKm: 45,
    houseTypes: 'TODO: z.B. Gruenderzeitgebaeude in der Altstadt, Mehrfamilienhaeuser, Gewerbeobjekte und Neubauten in den Aussenvierteln',
    localFact: 'TODO: z.B. In Mainz realisieren wir regelmaessig Dachsanierungen an Mehrfamilienhaeusern fuer Hausverwaltungen',
    cityFaqs: [
      { question: 'TODO: Stadtspezifische Frage 1', answer: 'TODO: Antwort 1' }
    ],
    nearbyApprovedCities: ['bingen', 'wiesbaden']
  },

  'kaiserslautern': {
    name: 'Kaiserslautern',
    region: 'Westpfalz',
    localHook: 'Zentrum der Westpfalz',
    solarHours: 1640,
    distanceKm: 60,
    houseTypes: 'TODO: z.B. Viele Industrie- und Gewerbegebaeude mit Flachdach, Einfamilienhaeuser in den Vororten',
    localFact: 'TODO: z.B. Kaiserslautern ist unser wichtigster Gewerbestandort fuer Flachdachpruefung und Hallenbeleuchtung',
    cityFaqs: [
      { question: 'TODO: Stadtspezifische Frage 1', answer: 'TODO: Antwort 1' }
    ],
    nearbyApprovedCities: []
  },

  'bingen': {
    name: 'Bingen am Rhein',
    region: 'Rhein-Nahe',
    localHook: 'Stadt am UNESCO-Welterbe',
    solarHours: 1675,
    distanceKm: 25,
    houseTypes: 'TODO: z.B. Historische Bebauung in der Altstadt, Weinbaugebaeude mit Schiefer- und Ziegeldaechern',
    localFact: 'TODO: z.B. Die Naehe zum Rhein bringt besondere Anforderungen an Dachentwaesserung und Regenrinnen',
    cityFaqs: [
      { question: 'TODO: Stadtspezifische Frage 1', answer: 'TODO: Antwort 1' }
    ],
    nearbyApprovedCities: ['bad-kreuznach', 'mainz']
  },

  'kirn': {
    name: 'Kirn',
    region: 'Nahe-Glan',
    localHook: 'Lederstadt an der Nahe',
    solarHours: 1625,
    distanceKm: 20,
    houseTypes: 'TODO: z.B. Ueberwiegend Einfamilienhaeuser und kleinere Mehrfamilienhaeuser, viele Altbauten mit Sanierungsbedarf',
    localFact: 'TODO: z.B. Kirn liegt direkt in unserem Kerngebiet – Notdienst innerhalb von 30 Minuten moeglich',
    cityFaqs: [
      { question: 'TODO: Stadtspezifische Frage 1', answer: 'TODO: Antwort 1' }
    ],
    nearbyApprovedCities: ['bad-kreuznach', 'idar-oberstein']
  },

  'idar-oberstein': {
    name: 'Idar-Oberstein',
    region: 'Nahe-Glan',
    localHook: 'Edelsteinstadt',
    solarHours: 1595,
    distanceKm: 35,
    houseTypes: 'TODO: z.B. Hanglage mit besonderen Dachkonstruktionen, viele aeltere Gebaeude mit Schieferdaechern',
    localFact: 'TODO: z.B. Die Hanglage in Idar-Oberstein erfordert besondere Erfahrung bei Dacharbeiten – die wir mitbringen',
    cityFaqs: [
      { question: 'TODO: Stadtspezifische Frage 1', answer: 'TODO: Antwort 1' }
    ],
    nearbyApprovedCities: ['kirn', 'bad-kreuznach']
  },

  'wiesbaden': {
    name: 'Wiesbaden',
    region: 'Rhein-Main',
    localHook: 'Hessische Landeshauptstadt',
    solarHours: 1695,
    distanceKm: 55,
    houseTypes: 'TODO: z.B. Gruenderzeitvillen, hochwertige Einfamilienhaeuser, Neubauprojekte mit PV-Potenzial',
    localFact: 'TODO: z.B. In Wiesbaden realisieren wir vor allem PV-Indach-Anlagen und hochwertige Dachsanierungen',
    cityFaqs: [
      { question: 'TODO: Stadtspezifische Frage 1', answer: 'TODO: Antwort 1' }
    ],
    nearbyApprovedCities: ['mainz']
  },

  'koblenz': {
    name: 'Koblenz',
    region: 'Mittelrhein',
    localHook: 'Stadt am Deutschen Eck',
    solarHours: 1635,
    distanceKm: 80,
    houseTypes: 'TODO: z.B. Historische Altstadt, Gruenderzeitgebaeude, Gewerbeobjekte am Rheinufer',
    localFact: 'TODO: z.B. Koblenz ist unser noerdlichster Standort – wir realisieren dort groessere Projekte auf Anfrage',
    cityFaqs: [
      { question: 'TODO: Stadtspezifische Frage 1', answer: 'TODO: Antwort 1' }
    ],
    nearbyApprovedCities: []
  },

  // =============================================================
  // TIER B/C – Werden per 301 weitergeleitet, kein Content noetig
  // =============================================================

  'birkenfeld':        { name: 'Birkenfeld',                  region: 'Nahe-Glan',        localHook: 'Kreisstadt im Oberen Nahegebiet',  solarHours: 1585 },
  'meisenheim':        { name: 'Meisenheim',                  region: 'Nahe-Glan',        localHook: 'Historische Stadt am Glan',        solarHours: 1610 },
  'sobernheim':        { name: 'Bad Sobernheim',              region: 'Naheland',         localHook: 'Felkestadt an der Nahe',           solarHours: 1645 },
  'ingelheim':         { name: 'Ingelheim am Rhein',          region: 'Rheinhessen',      localHook: 'Rotweinstadt im Rheinknie',        solarHours: 1705 },
  'alzey':             { name: 'Alzey',                       region: 'Rheinhessen',      localHook: 'Heimliche Hauptstadt Rheinhessens', solarHours: 1710 },
  'worms':             { name: 'Worms',                       region: 'Rheinhessen',      localHook: 'Nibelungenstadt',                  solarHours: 1720 },
  'woerrstadt':        { name: 'W\u00f6rrstadt',              region: 'Rheinhessen',      localHook: 'Herz von Rheinhessen',             solarHours: 1700 },
  'zweibruecken':      { name: 'Zweibr\u00fccken',            region: 'Westpfalz',        localHook: 'Rosenstadt',                       solarHours: 1630 },
  'pirmasens':         { name: 'Pirmasens',                   region: 'Westpfalz',        localHook: 'Siebenh\u00fcgelstadt',            solarHours: 1625 },
  'kirchheimbolanden': { name: 'Kirchheimbolanden',           region: 'Donnersbergkreis', localHook: 'Residenzstadt am Donnersberg',     solarHours: 1615 },
  'rockenhausen':      { name: 'Rockenhausen',                region: 'Donnersbergkreis', localHook: 'Stadt im Alsenztal',               solarHours: 1605 },
  'ludwigshafen':      { name: 'Ludwigshafen',                region: 'Vorderpfalz',      localHook: 'Metropole am Rhein',               solarHours: 1715 },
  'neustadt':          { name: 'Neustadt an der Weinstra\u00dfe', region: 'Weinstra\u00dfe', localHook: 'Zentrum der Weinstra\u00dfe',    solarHours: 1725 },
  'speyer':            { name: 'Speyer',                      region: 'Vorderpfalz',      localHook: 'Domstadt am Rhein',                solarHours: 1710 },
  'landau':            { name: 'Landau in der Pfalz',         region: 'S\u00fcdpfalz',    localHook: 'Gartenstadt der S\u00fcdpfalz',    solarHours: 1720 },
  'bad-duerkheim':     { name: 'Bad D\u00fcrkheim',           region: 'Weinstra\u00dfe',   localHook: 'Kurstadt an der Haardt',           solarHours: 1720 },
  'simmern':           { name: 'Simmern',                     region: 'Hunsr\u00fcck',    localHook: 'Kreisstadt im Hunsr\u00fcck',      solarHours: 1580 },
  'trier':             { name: 'Trier',                       region: 'Moseltal',         localHook: '\u00c4lteste Stadt Deutschlands',  solarHours: 1610 },
  'saarbruecken':      { name: 'Saarbr\u00fccken',            region: 'Saarland',         localHook: 'Landeshauptstadt an der Saar',     solarHours: 1650 },
  'homburg':           { name: 'Homburg',                     region: 'Saarpfalz',        localHook: 'Universit\u00e4tsstadt',           solarHours: 1645 },
};
