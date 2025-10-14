// src/app/core/services/service-data.service.ts
import { Injectable } from '@angular/core';

export interface ServiceContent {
  id: string;
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  keywords: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  private services: ServiceContent[] = [
    {
      id: 'dachsanierung',
      title: 'Dachsanierung Nahe Glan – Professionell und nachhaltig',
      headline: 'Dachsanierung vom Meisterbetrieb',
      description: 'Ihr Dach ist mehr als nur Schutz – es ist ein zentraler Bestandteil Ihres Hauses. Mit einer professionellen Dachsanierung verlängern Sie die Lebensdauer Ihres Daches, steigern die Energieeffizienz und erhöhen den Wert Ihrer Immobilie.',
      benefits: [
        'Langfristiger Schutz vor Witterung und Schäden',
        'Energieeffizienz durch moderne Dämmsysteme',
        'Wertsteigerung Ihrer Immobilie',
        'Individuelle Lösungen für Steildächer und Flachdächer',
        'Fachgerechte Ausführung nach aktuellen Standards'
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
        'Bis zu 3x mehr Tageslicht als Fassadenfenster',
        'Bessere Belüftung und gesundes Raumklima',
        'Energieeffiziente 3-fach-Verglasung',
        'Wertsteigerung Ihrer Immobilie',
        'Vielfältige Designs und Größen verfügbar'
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
        'Schneller Notdienst bei Sturmschäden',
        'Vermeidung kostspieliger Folgeschäden',
        'Regelmäßige Wartung verlängert die Lebensdauer',
        'Transparente Preise ohne versteckte Kosten',
        'Dokumentation aller durchgeführten Arbeiten'
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
        'Schutz vor Feuchtigkeitsschäden am Mauerwerk',
        'Professionelle Rinnenreinigung',
        'Austausch alter oder beschädigter Rinnen',
        'Installation von Laubschutzgittern',
        'Materialauswahl: Kupfer, Zink, Aluminium oder Kunststoff'
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
        'Früherkennung von Leckagen vor großen Schäden',
        'Prüfung nach DIN 18531 und DIN 18195',
        'Moderne Prüfverfahren (Rauchgas, Dampf, Rauchimpuls)',
        'Detaillierte Dokumentation mit Fotos und Protokoll',
        'Angebot zur Behebung festgestellter Mängel'
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
        'Bis zu 70% Reduzierung der Stromkosten',
        'Unabhängigkeit von steigenden Energiepreisen',
        'CO₂-neutrale Stromerzeugung',
        'Wertsteigerung Ihrer Immobilie',
        'Attraktive Fördermöglichkeiten und KfW-Zuschüsse',
        'Professionelle Planung und Installation'
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
        'Bis zu 80% Energieeinsparung durch LED-Technik',
        'Bessere Ausleuchtung für optimale Arbeitsbedingungen',
        'Langlebige Technik mit bis zu 50.000 Betriebsstunden',
        'Geringerer Wartungsaufwand als herkömmliche Systeme',
        'Repräsentative Fassadenbeleuchtung für Ihr Unternehmen',
        'Professionelle Lichtplanung nach Ihren Anforderungen'
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

  getAllServices(): ServiceContent[] {
    return this.services;
  }

  getServiceById(id: string): ServiceContent | undefined {
    return this.services.find(service => service.id === id);
  }

  getServicesOverview() {
    return this.services.map(service => ({
      id: service.id,
      title: service.headline,
      description: service.description,
      icon: service.icon
    }));
  }
}
