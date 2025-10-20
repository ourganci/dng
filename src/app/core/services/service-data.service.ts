// src/app/core/services/service-data.service.ts
import { Injectable } from '@angular/core';
import { title } from 'process';

export interface ServiceBenefit {
  title: string;    // ← NEU: Überschrift
  text: string;     // ← Beschreibung
  iconSvg: string; // ← SVG als String
}

export interface ServiceContent {
  id: string;
  title: string;
  headline: string;
  description: string;
  benefits: ServiceBenefit[];
  process: string[];
  faqs: { question: string; answer: string }[];
  keywords: string;
  icon: string;
  hasImage?: boolean;
}

// Einfaches Interface für Übersichtsseiten
export interface ServiceOverview {
  id: string;
  title: string;
  description: string;
  icon: string;
  hasImage: boolean; // ← NEU
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  // ⭐ ZENTRALE Liste: Welche Services haben Bilder?
  private servicesWithImages = new Set<string>([
    'dachsanierung',
    'dachfenster',
    // Füge weitere hinzu sobald Bilder da sind:
    'dachreparaturen',
    'regenrinnen',
    'flachdachpruefung',
    'pv-anlagen',
    'hallenbeleuchtung'
  ]);

  private services: ServiceContent[] = [
    {
      id: 'dachsanierung',
      title: 'Dachsanierung Nahe Glan – Professionell und nachhaltig',
      headline: 'Dachsanierung vom Meisterbetrieb',
      description: 'Ihr Dach ist mehr als nur Schutz – es ist ein zentraler Bestandteil Ihres Hauses. Mit einer professionellen Dachsanierung verlängern Sie die Lebensdauer Ihres Daches, steigern die Energieeffizienz und erhöhen den Wert Ihrer Immobilie.',
      benefits: [
        {
          title: 'Langfristiger Schutz',
          text: 'Langfristiger Schutz vor Witterung und Schäden',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        },
        {
          title: 'Energieeffizienz',
          text: 'Energieeffizienz durch moderne Dämmsysteme',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>'
        },
        {
          title: 'Wertsteigerung',
          text: 'Wertsteigerung Ihrer Immobilie',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
        },
        {
          title: 'Individuelle Lösungen',
          text: 'Individuelle Lösungen für Steildächer und Flachdächer',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
        },
        {
          title: 'Fachgerechte Ausführung',
          text: 'Fachgerechte Ausführung nach aktuellen Standards',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>'
        },
        {
          title: 'Nachhaltige Materialien',
          text: 'Verwendung nachhaltiger und umweltfreundlicher Materialien',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>'
        }
      ],
      process: [
        'Kostenlose Erstberatung und Besichtigung vor Ort',
        'Detaillierte Schadensanalyse und Zustandsbewertung',
        'Transparentes Angebot mit allen Kosten',
        'Professionelle Ausführung durch erfahrene Dachdecker',
        'Saubere Baustelle und pünktliche Fertigstellung',
        'Abnahme und Dokumentation der durchgeführten Arbeiten'
      ],
      faqs: [
        {
          question: 'Wann ist eine Dachsanierung notwendig?',
          answer: 'Eine Dachsanierung wird empfohlen bei sichtbaren Schäden (Risse, fehlende Ziegel), bei Undichtigkeiten, starkem Moosbewuchs oder wenn Ihr Dach älter als 30-40 Jahre ist. Auch bei unzureichender Dämmung ist eine energetische Sanierung sinnvoll.'
        },
        {
          question: 'Wie lange dauert eine Dachsanierung?',
          answer: 'Die Dauer hängt von der Dachgröße und dem Sanierungsumfang ab. Ein Einfamilienhaus (ca. 150m²) dauert in der Regel 1-3 Wochen. Wir erstellen Ihnen einen detaillierten Zeitplan.'
        },
        {
          question: 'Was kostet eine Dachsanierung?',
          answer: 'Die Kosten variieren je nach Dachfläche, Material und Aufwand. Für ein Einfamilienhaus können Sie mit 100-250€ pro m² rechnen. Kontaktieren Sie uns für ein kostenloses, unverbindliches Angebot.'
        },
        {
          question: 'Welche Fördermöglichkeiten gibt es?',
          answer: 'Für energetische Dachsanierungen gibt es Förderungen über die KfW und BAFA. Wir beraten Sie gerne zu den aktuellen Förderprogrammen und unterstützen Sie bei der Antragstellung.'
        }
      ],
      keywords: 'Dachsanierung Nahe Glan, Dach sanieren, Dacherneuerung, Steildach, Flachdach, energetische Sanierung, Bad Kreuznach, Kirn',
      icon: '🏠'
    },
    {
      id: 'dachfenster',
      title: 'Dachfenster Nahe Glan – Mehr Licht und Wohnkomfort',
      headline: 'Dachfenster-Einbau vom Fachbetrieb',
      description: 'Dachfenster bringen natürliches Licht in Ihr Dachgeschoss und schaffen ein angenehmes Wohnklima. Wir sind Ihr Fachbetrieb für Einbau, Austausch und Reparatur von Dachfenstern in Nahe Glan und Umgebung.',
      benefits: [
        { title: 'Mehr Tageslicht und Wohnkomfort',
          text: 'Mehr Tageslicht und Wohnkomfort',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        { title: 'Bis zu 3x mehr Tageslicht als Fassadenfenster',
          text: 'Bis zu 3x mehr Tageslicht als Fassadenfenster',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        { title: 'Bessere Belüftung und gesundes Raumklima',
          text: 'Bessere Belüftung und gesundes Raumklima',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        { title: 'Energieeffiziente 3-fach-Verglasung',
          text: 'Energieeffiziente 3-fach-Verglasung',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        { title: 'Wertsteigerung Ihrer Immobilie',
          text: 'Wertsteigerung Ihrer Immobilie',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        { title: 'Vielfältige Designs und Größen verfügbar',
          text: 'Vielfältige Designs und Größen verfügbar',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        }
      ],
      process: [
        'Beratung zu Größe, Position und Fenstertyp',
        'Auswahl des passenden Dachfensters (z.B. VELUX)',
        'Präziser Einbau durch erfahrene Dachdecker',
        'Fachgerechte Abdichtung und Integration',
        'Funktionsprüfung und Einweisung',
        'Optional: Installation von Rollläden oder Sonnenschutz'
      ],
      faqs: [
        {
          question: 'Welche Dachfenster-Typen gibt es?',
          answer: 'Die gängigsten Typen sind Schwingfenster (klassisch), Klapp-Schwingfenster (mit Balkon-Funktion) und Ausstiegsfenster für den Zugang aufs Dach. Wir beraten Sie, welcher Typ für Ihre Bedürfnisse ideal ist.'
        },
        {
          question: 'Kann jedes Dach ein Dachfenster bekommen?',
          answer: 'Grundsätzlich ja, allerdings müssen die Dachneigung (15-90°) und die Dachkonstruktion geprüft werden. Bei Flachdächern gibt es spezielle Lösungen wie Lichtkuppeln.'
        },
        {
          question: 'Wie lange dauert der Einbau?',
          answer: 'Der Einbau eines Dachfensters dauert in der Regel 4-8 Stunden pro Fenster, abhängig von der Dachkonstruktion und dem gewählten Fenstertyp.'
        },
        {
          question: 'Arbeiten Sie mit Markenherstellern?',
          answer: 'Ja, wir sind Partner von führenden Herstellern wie VELUX, Roto und Fakro und bieten Ihnen hochwertige Produkte mit Herstellergarantie.'
        }
      ],
      keywords: 'Dachfenster Nahe Glan, Dachfenster einbauen, VELUX, Roto, Dachflächenfenster, Bad Kreuznach, Kirn',
      icon: '🪟'
    },
    {
      id: 'dachreparaturen',
      title: 'Dachreparaturen und Wartung Nahe Glan – Schnell und zuverlässig',
      headline: 'Notdienst und regelmäßige Dachwartung',
      description: 'Ein Dach braucht Pflege. Von der Notfall-Reparatur nach einem Sturm bis zur regelmäßigen Inspektion – wir kümmern uns um Ihr Dach und halten es in Top-Zustand.',
      benefits: [
        {
          title: 'Schneller Notdienst',
          text: 'Schneller Notdienst bei Sturmschäden',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M3 12h18"/><path d="M12 3v18"/></svg>'
        },
        {
          title: 'Vermeidung von Folgeschäden',
          text: 'Vermeidung kostspieliger Folgeschäden',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>'
        },
        {
          title: 'Regelmäßige Wartung',
          text: 'Regelmäßige Wartung verlängert die Lebensdauer',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M12 2v6"/><path d="M12 16v6"/></svg>'
        },
        {
          title: 'Transparente Preise',
          text: 'Transparente Preise ohne versteckte Kosten',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'
        },
        {
          title: 'Dokumentation',
          text: 'Dokumentation aller durchgeführten Arbeiten',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M8 6h8"/><path d="M8 12h8"/><path d="M8 18h8"/></svg>'
        }
      ],
      process: [
        'Schadensmeldung per Telefon, E-Mail oder Kontaktformular',
        'Bei Notfällen: Schnelle Terminvereinbarung (meist innerhalb 24h)',
        'Vor-Ort-Begutachtung und Schadensanalyse',
        'Sofortreparatur bei kleinen Schäden möglich',
        'Bei größerem Aufwand: Detailliertes Angebot',
        'Professionelle Reparatur und Dokumentation'
      ],
      faqs: [
        {
          question: 'Wie schnell können Sie bei einem Notfall vor Ort sein?',
          answer: 'Bei Notfällen wie Sturmschäden oder undichten Stellen bemühen wir uns, innerhalb von 24 Stunden bei Ihnen zu sein. Kontaktieren Sie uns telefonisch für eine schnelle Reaktion.'
        },
        {
          question: 'Wie oft sollte ein Dach gewartet werden?',
          answer: 'Wir empfehlen eine professionelle Inspektion alle 2-3 Jahre. Bei älteren Dächern (20+ Jahre) oder nach starken Stürmen sollte jährlich kontrolliert werden.'
        },
        {
          question: 'Was beinhaltet eine Dachwartung?',
          answer: 'Bei der Wartung prüfen wir die Dacheindeckung, Abdichtungen, Regenrinnen, Dachfenster und alle kritischen Bereiche. Kleine Mängel beheben wir direkt, größere Schäden dokumentieren wir im Wartungsprotokoll.'
        },
        {
          question: 'Bieten Sie Wartungsverträge an?',
          answer: 'Ja, besonders für Hausverwaltungen, Gewerbeimmobilien und Mehrfamilienhäuser bieten wir individuelle Wartungsverträge mit festen Terminen an.'
        }
      ],
      keywords: 'Dachreparatur Nahe Glan, Dach reparieren, Notdienst, Sturmschaden, Dachwartung, Dachinspektion, Bad Kreuznach',
      icon: '🔧'
    },
    {
      id: 'regenrinnen',
      title: 'Regenrinnen Nahe Glan – Installation, Reparatur und Reinigung',
      headline: 'Professionelle Regenrinnen-Services',
      description: 'Regenrinnen sind essentiell für den Schutz Ihres Hauses vor Feuchtigkeit und Wasserschäden. Wir installieren, reparieren und warten Regenrinnen sowie Fallrohre im Raum Nahe Glan.',
      benefits: [
        {
          title: 'Schutz vor Feuchtigkeitsschäden am Mauerwerk',
          text: 'Schutz vor Feuchtigkeitsschäden am Mauerwerk',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M12 2v20"/></svg>'
        },
        {
          title: 'Professionelle Rinnenreinigung',
          text: 'Professionelle Rinnenreinigung',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M3 12h18"/></svg>'
        },
        {
          title: 'Austausch alter oder beschädigter Rinnen',
          text: 'Austausch alter oder beschädigter Rinnen',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'
        },
        {
          title: 'Installation von Laubschutzgittern',
          text: 'Installation von Laubschutzgittern',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M4 6h16"/></svg>'
        },
        {
          title: 'Materialauswahl: Kupfer, Zink, Aluminium oder Kunststoff',
          text: 'Materialauswahl: Kupfer, Zink, Aluminium oder Kunststoff',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>'
        }
      ],
      process: [
        'Inspektion der vorhandenen Regenrinnen',
        'Reinigung und Begutachtung des Zustands',
        'Beratung zu Materialien und Lösungen',
        'Reparatur oder kompletter Austausch bei Bedarf',
        'Fachgerechte Montage neuer Rinnen',
        'Optional: Installation von Laubschutz-Gittern'
      ],
      faqs: [
        {
          question: 'Wie oft sollten Regenrinnen gereinigt werden?',
          answer: 'Mindestens zweimal jährlich – idealerweise im Frühjahr und Herbst. Bei vielen Bäumen in der Nähe empfehlen wir häufigere Kontrollen.'
        },
        {
          question: 'Was kostet eine Rinnenreinigung?',
          answer: 'Die Kosten hängen von der Länge und Zugänglichkeit der Rinnen ab. In der Regel liegen die Kosten bei 2-5€ pro laufendem Meter. Kontaktieren Sie uns für ein genaues Angebot.'
        },
        {
          question: 'Welches Material ist am besten für Regenrinnen?',
          answer: 'Kupfer ist sehr langlebig (50+ Jahre), aber teurer. Zink ist robust und preiswert. Aluminium ist leicht und korrosionsbeständig. Kunststoff ist kostengünstig, aber weniger langlebig. Wir beraten Sie gerne.'
        },
        {
          question: 'Lohnt sich ein Laubschutz?',
          answer: 'Ja, besonders bei vielen Bäumen in der Nähe. Ein Laubschutzgitter reduziert den Reinigungsaufwand erheblich und verhindert Verstopfungen.'
        }
      ],
      keywords: 'Regenrinnen Nahe Glan, Rinnenreinigung, Fallrohre, Laubschutz, Dachrinnen, Bad Kreuznach, Kirn',
      icon: '💧'
    },
    {
      id: 'flachdachpruefung',
      title: 'Flachdachdichtheitsprüfung Nahe Glan – Nach DIN-Norm',
      headline: 'Professionelle Flachdach-Dichtheitsprüfung',
      description: 'Für Gewerbeimmobilien, Hallen und Garagen: Wir prüfen Ihr Flachdach auf Dichtheit mit modernen Verfahren nach DIN-Norm und erstellen detaillierte Prüfprotokolle.',
      benefits: [
        {
          title: 'Früherkennung von Leckagen',
          text: 'Früherkennung von Leckagen vor großen Schäden',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M12 2v20"/></svg>'
        },
        {
          title: 'Prüfung nach DIN-Norm',
          text: 'Prüfung nach DIN 18531 und DIN 18195',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'
        },
        {
          title: 'Moderne Prüfverfahren',
          text: 'Moderne Prüfverfahren (Rauchgas, Dampf, Rauchimpuls)',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M4 12h16"/></svg>'
        },
        {
          title: 'Detaillierte Dokumentation',
          text: 'Detaillierte Dokumentation mit Fotos und Protokoll',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M8 6h8"/><path d="M8 12h8"/></svg>'
        },
        {
          title: 'Angebot zur Mängelbehebung',
          text: 'Angebot zur Behebung festgestellter Mängel',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>'
        }
      ],
      process: [
        'Terminvereinbarung und Vorbesprechung',
        'Auswahl des geeigneten Prüfverfahrens',
        'Durchführung der Dichtheitsprüfung vor Ort',
        'Präzise Lokalisierung undichter Stellen',
        'Fotodokumentation aller Befunde',
        'Erstellung eines detaillierten Prüfprotokolls',
        'Optional: Angebot zur Mängelbehebung'
      ],
      faqs: [
        {
          question: 'Welche Prüfverfahren gibt es?',
          answer: 'Wir nutzen Rauchgas-Verfahren, Dampferzeugungs-Verfahren und Rauchimpuls-Verfahren. Die Wahl hängt vom Dachaufbau, der Größe und den baulichen Gegebenheiten ab.'
        },
        {
          question: 'Wie lange dauert eine Flachdachprüfung?',
          answer: 'Je nach Dachgröße zwischen 2-6 Stunden. Bei sehr großen Hallen kann die Prüfung auch einen ganzen Tag dauern.'
        },
        {
          question: 'Für wen ist die Prüfung relevant?',
          answer: 'Ideal für Gewerbegebäude, Lagerhallen, Industriebauten, Tiefgaragen, Balkone und alle Flachdach-Konstruktionen. Besonders wichtig vor Ablauf der Gewährleistung oder bei Verdacht auf Undichtigkeiten.'
        },
        {
          question: 'Wird die Prüfung dokumentiert?',
          answer: 'Ja, Sie erhalten ein ausführliches Prüfprotokoll mit Fotos, Markierungen der undichten Stellen und Handlungsempfehlungen.'
        }
      ],
      keywords: 'Flachdachdichtheitsprüfung Nahe Glan, Flachdach prüfen, DIN-Prüfung, Gewerbe, Hallen, Bad Kreuznach',
      icon: '🔍'
    },
    {
      id: 'pv-anlagen',
      title: 'PV-Anlagen Nahe Glan – Solarenergie für Ihr Dach',
      headline: 'Photovoltaik-Anlagen vom Fachbetrieb',
      description: 'Nutzen Sie die Kraft der Sonne! Wir planen und installieren moderne Photovoltaik-Anlagen auf Ihrem Dach – für nachhaltige Energiegewinnung, Unabhängigkeit und Kosteneinsparung.',
      benefits: [
        {
          title: 'Bis zu 70% Reduzierung der Stromkosten',
          text: 'Bis zu 70% Reduzierung der Stromkosten',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>'
        },
        {
          title: 'Unabhängigkeit von steigenden Energiepreisen',
          text: 'Unabhängigkeit von steigenden Energiepreisen',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M12 2v6"/><path d="M12 16v6"/><circle cx="12" cy="12" r="3"/></svg>'
        },
        {
          title: 'CO₂-neutrale Stromerzeugung',
          text: 'CO₂-neutrale Stromerzeugung',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M3 12h18"/><path d="M12 3v18"/></svg>'
        },
        {
          title: 'Wertsteigerung Ihrer Immobilie',
          text: 'Wertsteigerung Ihrer Immobilie',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
        },
        {
          title: 'Attraktive Fördermöglichkeiten und KfW-Zuschüsse',
          text: 'Attraktive Fördermöglichkeiten und KfW-Zuschüsse',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'
        },
        {
          title: 'Professionelle Planung und Installation',
          text: 'Professionelle Planung und Installation',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M8 6h8"/><path d="M8 12h8"/><path d="M8 18h8"/></svg>'
        }
      ],
      process: [
        'Kostenlose Erstberatung und Standortanalyse',
        'Berechnung des Energiebedarfs und der Anlagengröße',
        'Beratung zu Fördermöglichkeiten (KfW, BAFA)',
        'Detailliertes Angebot mit Wirtschaftlichkeitsrechnung',
        'Fachgerechte Installation der PV-Module',
        'Elektrischer Anschluss und Inbetriebnahme',
        'Anmeldung beim Netzbetreiber und Einweisung'
      ],
      faqs: [
        {
          question: 'Lohnt sich eine PV-Anlage in unserer Region?',
          answer: 'Ja! Auch in Rheinland-Pfalz ist die Sonneneinstrahlung ausreichend für rentable PV-Anlagen. Mit ca. 1.000-1.200 kWh pro kWp Anlagenleistung können Sie rechnen.'
        },
        {
          question: 'Welche Fördermöglichkeiten gibt es?',
          answer: 'Es gibt verschiedene KfW-Programme (z.B. KfW 270 für zinsgünstige Kredite), BAFA-Zuschüsse und regionale Förderungen. Außerdem profitieren Sie von der Einspeisevergütung nach EEG. Wir beraten Sie umfassend.'
        },
        {
          question: 'Wie groß sollte meine PV-Anlage sein?',
          answer: 'Das hängt von Ihrem Stromverbrauch und der verfügbaren Dachfläche ab. Für einen 4-Personen-Haushalt empfehlen wir ca. 5-8 kWp (ca. 30-50m² Modulfläche). Wir erstellen eine individuelle Bedarfsanalyse.'
        },
        {
          question: 'Wie lange dauert die Installation?',
          answer: 'Die Installation dauert je nach Anlagengröße 2-5 Tage. Von der Planung bis zur Inbetriebnahme sollten Sie 4-8 Wochen einplanen (inkl. Genehmigungen und Netzbetreiber-Anmeldung).'
        },
        {
          question: 'Brauche ich einen Stromspeicher?',
          answer: 'Ein Stromspeicher erhöht Ihre Eigenverbrauchsquote von ca. 30% auf 60-80% und macht Sie unabhängiger. Die Anschaffung lohnt sich, wenn Sie möglichst viel selbst erzeugten Strom nutzen möchten.'
        }
      ],
      keywords: 'PV-Anlagen Nahe Glan, Photovoltaik, Solaranlage, Sonnenenergie, Stromspeicher, KfW-Förderung, Bad Kreuznach, Kirn',
      icon: '☀️'
    },
    {
      id: 'hallenbeleuchtung',
      title: 'Hallen- und Fassadenbeleuchtung Nahe Glan',
      headline: 'Moderne LED-Beleuchtung für Gewerbe',
      description: 'Energieeffiziente LED-Beleuchtung für Industrie- und Gewerbehallen sowie repräsentative Fassadenbeleuchtung – professionell geplant und installiert von unserem Fachteam.',
      benefits: [
        {
          title: 'Energieeinsparung',
          text: 'Bis zu 80% Energieeinsparung durch LED-Technik',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M9 18h6"/><path d="M12 2a6 6 0 0 0-4 9c0 3 4 4 4 4s4-1 4-4a6 6 0 0 0-4-9z"/></svg>'
        },
        {
          title: 'Optimale Ausleuchtung',
          text: 'Bessere Ausleuchtung für optimale Arbeitsbedingungen',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'
        },
        {
          title: 'Langlebige Technik',
          text: 'Langlebige Technik mit bis zu 50.000 Betriebsstunden',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>'
        },
        {
          title: 'Weniger Wartung',
          text: 'Geringerer Wartungsaufwand als herkömmliche Systeme',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M3 12h18"/></svg>'
        },
        {
          title: 'Repräsentative Beleuchtung',
          text: 'Repräsentative Fassadenbeleuchtung für Ihr Unternehmen',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M8 6h8"/><path d="M8 12h8"/></svg>'
        },
        {
          title: 'Lichtplanung',
          text: 'Professionelle Lichtplanung nach Ihren Anforderungen',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><path d="M12 2v6"/><path d="M12 16v6"/></svg>'
        }
      ],
      process: [
        'Bedarfsanalyse und Lichtplanung vor Ort',
        'Berechnung der optimalen Ausleuchtung (Lux-Werte)',
        'Auswahl passender LED-Systeme',
        'Angebot mit Wirtschaftlichkeitsberechnung',
        'Professionelle Installation durch Fachpersonal',
        'Elektrischer Anschluss und Inbetriebnahme',
        'Einweisung und Dokumentation'
      ],
      faqs: [
        {
          question: 'Für welche Objekte ist das geeignet?',
          answer: 'Ideal für Lagerhallen, Produktionshallen, Werkstätten, Logistikzentren, Gewerbefassaden und alle Industriebauten, die eine professionelle Beleuchtung benötigen.'
        },
        {
          question: 'Wie hoch ist die Energieeinsparung?',
          answer: 'LED-Beleuchtung spart gegenüber herkömmlichen Halogen- oder Leuchtstoffröhren bis zu 80% Energie. Bei einer 1.000m² Halle können Sie mit mehreren tausend Euro Einsparung pro Jahr rechnen.'
        },
        {
          question: 'Wie lange halten LED-Leuchtmittel?',
          answer: 'Hochwertige LED-Hallenstrahler haben eine Lebensdauer von 50.000-100.000 Betriebsstunden. Das entspricht bei 10h Betrieb/Tag ca. 15-25 Jahren.'
        },
        {
          question: 'Bieten Sie auch Wartung an?',
          answer: 'Ja, wir bieten Wartungsverträge für Gewerbekunden an, die regelmäßige Inspektionen und schnelle Reparaturen bei Ausfällen umfassen.'
        }
      ],
      keywords: 'Hallenbeleuchtung Nahe Glan, LED Beleuchtung, Fassadenbeleuchtung, Gewerbe, Industriehallen, Bad Kreuznach',
      icon: '💡'
    }
  ];

  // ⭐ Alle Services mit hasImage-Flag
  getAllServices(): ServiceContent[] {
    return this.services.map(service => ({
      ...service,
      hasImage: this.servicesWithImages.has(service.id)
    }));
  }

  // ⭐ Service-Übersicht für Cards (mit hasImage)
  getServicesOverview(): ServiceOverview[] {
    return this.services.map(service => ({
      id: service.id,
      title: service.headline,
      description: service.description,
      icon: service.icon,
      hasImage: this.servicesWithImages.has(service.id)
    }));
  }

  // Service by ID (mit hasImage)
  getServiceById(id: string): ServiceContent | undefined {
    const service = this.services.find(s => s.id === id);
    if (service) {
      return {
        ...service,
        hasImage: this.servicesWithImages.has(service.id)
      };
    }
    return undefined;
  }

  // ⭐ Hilfsmethode: Prüfe ob Service Bild hat
  hasImage(serviceId: string): boolean {
    return this.servicesWithImages.has(serviceId);
  }
}
