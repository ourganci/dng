export const SERVICE_CONFIG: Record<string, {
  name: string;
  description: string;
  seoText: string;
}> = {
  dachsanierung: {
    name: 'Dachsanierung',
    description: 'Dachsanierung und Dacherneuerung',
    seoText: 'Ihr Meisterbetrieb für energetische Dachsanierung und Neueindeckung.'
  },
  dachfenster: {
    name: 'Dachfenster',
    description: 'Einbau und Austausch von Dachfenstern',
    seoText: 'Mehr Licht und Energieeffizienz durch moderne Dachfenster von VELUX & ROTO.'
  },
  dachreparatur: {
    name: 'Dachreparatur',
    description: 'Reparatur von Sturmschäden und Undichtigkeiten',
    seoText: 'Schnelle Hilfe bei Sturmschäden und Undichtigkeiten – Ihr Meisterbetrieb.'
  },
  flachdachpruefung: {
    name: 'Flachdachprüfung',
    description: 'Prüfung und Wartung von Flachdächern',
    seoText: 'Professionelle Wartung und Prüfung Ihres Flachdachs zur Werterhaltung.'
  },
  hallenbeleuchtung: {
    name: 'Hallenbeleuchtung',
    description: 'Installation von LED-Hallenbeleuchtung',
    seoText: 'Energieeffiziente LED-Hallenbeleuchtung für Industrie und Gewerbe.'
  },
  photovoltaik: {
    name: 'Photovoltaik',
    description: 'Montage von Photovoltaikanlagen',
    seoText: 'Solaranlagen mit Speicher für maximale Autarkie und Stromkosten-Ersparnis.'
  },
  'pv-indach': {
    name: 'PV-Indach',
    description: 'Indach-Photovoltaiksysteme',
    seoText: 'Die ästhetische PV-Lösung: Solarmodule als eleganter Ersatz für Dachziegel.'
  },
  // Key auf Plural geändert, passend zur Route:
  regenrinnen: {
    name: 'Regenrinnen',
    description: 'Installation von Regenrinnen',
    seoText: 'Fachgerechte Montage von Regenrinnen für optimalen Gebäudeschutz.'
  },
};