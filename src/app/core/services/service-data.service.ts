// src/app/core/services/service-data.service.ts
import { Injectable } from '@angular/core';
import { title } from 'process';

export interface ServiceBenefit {
  title: string;    // ← NEU: Überschrift
  text: string;     // ← Beschreibung
  iconSvg: string; // ← SVG als String
}

export type ServiceSection =
  | { type: 'hero'; data: { headline: string; subline?: string; image?: string; overlay?: boolean } }
  | { type: 'intro'; data: { lead: string } }
  | { type: 'image'; data: { src: string; alt: string; caption?: string; fullWidth?: boolean } }
  | { type: 'gallery'; data: { images: { src: string; alt: string }[]; columns?: 2 | 3 | 4 } }
  | { type: 'bullets'; data: { title?: string; items: string[]; icon?: string } }
  | { type: 'checklist'; data: { title?: string; items: string[] } }
  | { type: 'steps'; data: { title?: string; steps: string[] } }
  | { type: 'twoColumn'; data: { leftHtml: string; rightHtml: string } }
  | { type: 'highlight'; data: { title?: string; text: string } }
  | { type: 'table'; data: { title?: string; headers: string[]; rows: string[][] } }
  | { type: 'faq'; data: { items: { question: string; answer: string }[] } }
  | { type: 'richtext'; data: { html: string } }
  | { type: 'accordion'; data: { items: { title: string; contentHtml: string }[] } }
  | { type: 'cta'; data: { title: string; text?: string; buttonText: string; link: string } }
  | { type: 'benefits-from-service'; data: { title: string } };

export interface ServiceContent {
  id: string;
  title: string;
  headline: string;
  description: string;
  keywords: string;
  icon: string;
  hasImage?: boolean;
  // Optional: legacy Felder weiter nutzen, aber perspektivisch in sections aufgehen lassen:
  benefits?: ServiceBenefit[];
  process?: string[];
  faqs?: { question: string; answer: string }[];
  // Neu:
  sections?: ServiceSection[];
}

// Einfaches Interface für Übersichtsseiten
export interface ServiceOverview {
  id: string;
  title: string;
  description: string;
  icon: string;
  hasImage: boolean;
  imageSrc?: string;
  topCities?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  // ⭐ ZENTRALE Liste: Welche Services haben Bilder?
  private servicesWithImages = new Set<string>([
    'dachsanierung',
    'dachfenster',
    'dachreparatur',
    'regenrinnen',
    'flachdachpruefung',
    'photovoltaik',
    'pv-indach',
    'hallenbeleuchtung'
  ]);

  private services: ServiceContent[] = [
    {
      id: 'photovoltaik',
      title: 'PV-Anlagen Nahe Glan – Solarenergie für Ihr Dach',
      headline: 'Photovoltaik-Anlagen',
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
    },
    {
      id: 'dachsanierung',
      title: 'Dachsanierung Nahe Glan – professionell & nachhaltig',
      headline: 'Dachsanierung',
      description: 'Ihr Dach ist in die Jahre gekommen? Feuchtigkeit, Wärmeverluste oder lockere Ziegel sind erste Anzeichen für Sanierungsbedarf. Als erfahrener Dachdeckerbetrieb aus Nahe Glan bieten wir Ihnen fachgerechte Dachsanierungen im Umkreis von 50 km – für Wohnhäuser, Gewerbeobjekte und Mehrfamilienhäuser.',
      keywords: 'Dachsanierung, Dachdecker Nahe Glan, Dach erneuern, Dach dämmen, Dach abdichten, Sanierung',
      icon: '🏠',
      hasImage: true,
      sections: [
        {
          type: 'hero', data: {
            headline: 'Dachsanierung vom Fachetrieb – DNG GmbH Nahe-Glan',
            subline: 'Professionell & nachhaltig',
            image: 'assets/images/services/dachsanierung.jpg',
            overlay: true
          }
        },
        {
          type: 'intro', data: {
            lead: 'Ihr Dach ist in die Jahre gekommen? Feuchtigkeit, Wärmeverluste oder lockere Ziegel sind erste Anzeichen für Sanierungsbedarf. Als erfahrener Dachdeckerbetrieb aus Nahe Glan bieten wir Ihnen fachgerechte Dachsanierungen im Umkreis von 50 km – für Wohnhäuser, Gewerbeobjekte und Mehrfamilienhäuser.'
          }
        },
        {
          type: 'richtext', data: {
            html: '<h2>Ursachen und typische Schäden am Dach</h2><p>Ein beschädigtes Dach beeinträchtigt nicht nur die Optik, sondern vor allem die Sicherheit und Energieeffizienz Ihres Gebäudes. Häufige Anzeichen für einen Sanierungsbedarf:</p>'
          }
        },
        {
          type: 'bullets', data: {
            items: [
              'Moos- oder Algenbefall, brüchige Ziegel',
              'Undichtigkeiten & Wassereintritt',
              'Hoher Wärmeverlust durch mangelnde Dämmung',
              'Schäden nach Sturm oder Hagel',
              'Korrosion an Dachrinnen und Blechen'
            ]
          }
        },
        {
          type: 'highlight', data: {
            title: 'Je früher Sie handeln, desto günstiger die Sanierung',
            text: 'Frühe Maßnahmen verhindern Folgeschäden und reduzieren Gesamtkosten.'
          }
        },
        {
          type: 'richtext', data: {
            html: '<h2>Vorteile einer professionellen Dachsanierung</h2><p>Eine Sanierung ist nicht nur eine Instandhaltung, sondern eine Investition in die Zukunft Ihrer Immobilie:</p>'
          }
        },
        {
          type: 'bullets', data: {
            items: [
              'Wertsteigerung: Erhöht Marktwert & Wohnqualität',
              'Energieeffizienz: Spart Heizkosten durch neue Dämmung (z. B. nach GEG)',
              'Dichtigkeit & Schutz: Verhindert teure Folgeschäden durch Feuchtigkeit',
              'Förderfähig: KfW-Zuschüsse & steuerliche Vorteile möglich'
            ]
          }
        },
        {
          type: 'steps', data: {
            title: 'So läuft eine Dachsanierung mit uns ab',
            steps: [
              'Vor-Ort-Besichtigung & Beratung – Wir begutachten den Zustand Ihres Daches und klären mögliche Maßnahmen.',
              'Individuelles Angebot und Planung – Transparent, auf Wunsch mit verschiedenen Materialoptionen.',
              'Rückbau und Entsorgung – Fachgerechte Entfernung alter Eindeckung inkl. umweltfreundlicher Entsorgung.',
              'Neueindeckung und Dämmung – Ziegel, Dachsteine, Schiefer oder Metall – passend zum Hausstil und Budget.',
              'Abschlusskontrolle und Abnahme – Inklusive Übergabeprotokoll und Fotodokumentation.'
            ]
          }
        },
        {
          type: 'richtext', data: {
            html: '<p>Auf Wunsch realisieren wir auch Dachfenstereinbau oder PV-Anlagen.</p>'
          }
        },
        {
          type: 'richtext', data: {
            html: '<h2>Für wen ist eine Dachsanierung sinnvoll?</h2><p>Unsere Leistungen richten sich an:</p>'
          }
        },
        {
          type: 'bullets', data: {
            items: [
              'Privathaushalte (Eigentümer & Bauherren)',
              'Hausverwaltungen & Immobiliengesellschaften',
              'Bauträger & Sanierungsfirmen'
            ]
          }
        },
        {
          type: 'richtext', data: {
            html: '<h2>Regional & zuverlässig</h2><p>Wir sanieren Dächer im gesamten Raum: Nahe Glan, Bad Kreuznach, Kirn, Meisenheim, Bingen, Simmern, Kirchheimbolanden, Idar-Oberstein & Umgebung.</p><p>Als regionaler Fachetrieb mit Erfahrung aus über 50 Dachprojekten stehen wir für Zuverlässigkeit, Termintreue und Qualität.</p>'
          }
        },
        {
          type: 'cta', data: {
            title: 'Jetzt Dachsanierung anfragen',
            text: 'Kostenlose Vor-Ort-Besichtigung und transparentes Angebot.',
            buttonText: 'Kostenlose Beratung',
            link: '/kontakt'
          }
        }
      ]
    },
    {
      id: 'dachfenster',
      title: 'Dachfenster Nahe Glan – Mehr Licht und Wohnkomfort',
      headline: 'Dachfenster',
      description: 'Dachfenster bringen natürliches Licht in Ihr Dachgeschoss und schaffen ein angenehmes Wohnklima. Wir sind Ihr Fachbetrieb für Einbau, Austausch und Reparatur von Dachfenstern in Nahe Glan und Umgebung.',
      benefits: [
        {
          title: 'Mehr Tageslicht und Wohnkomfort',
          text: 'Mehr Tageslicht und Wohnkomfort',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        {
          title: 'Bis zu 3x mehr Tageslicht als Fassadenfenster',
          text: 'Bis zu 3x mehr Tageslicht als Fassadenfenster',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        {
          title: 'Bessere Belüftung und gesundes Raumklima',
          text: 'Bessere Belüftung und gesundes Raumklima',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        {
          title: 'Energieeffiziente 3-fach-Verglasung',
          text: 'Energieeffiziente 3-fach-Verglasung',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        {
          title: 'Wertsteigerung Ihrer Immobilie',
          text: 'Wertsteigerung Ihrer Immobilie',
          iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-medium)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
        },
        {
          title: 'Vielfältige Designs und Größen verfügbar',
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
      id: 'dachreparatur',
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
      id: 'pv-indach',
      title: 'PV Indach-Systeme von DNG',
      headline: 'GSE In-Roof System – Die elegante Solarlösung',
      description: 'Innovative Indach-Photovoltaik mit GSE IN-ROOF SYSTEM: Solardachplatten ersetzen konventionelle Ziegel vollständig. Witterungsschutz und Stromerzeugung vereint – elegant, sturmsicher und maximal effizient.',
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
  ];

  // ⭐ Alle Services mit hasImage-Flag
  getAllServices(): ServiceContent[] {
    return this.services.map(service => ({
      ...service,
      hasImage: this.servicesWithImages.has(service.id)
    }));
  }

    // Service-Übersicht für Cards (mit dynamischen topCities)
  getServicesOverview(): ServiceOverview[] {
    return this.services.map(service => ({
      id: service.id,
      title: service.headline,
      description: service.description,
      icon: service.icon,
      hasImage: this.servicesWithImages.has(service.id),
      imageSrc: this.servicesWithImages.has(service.id)
        ? `assets/images/services/${service.id}.jpg`
        : undefined,
      topCities: this.getTopCitiesForService(service.id)
    }));
  }

    // ⭐ Strategische Top-Cities pro Service (Keys, nicht Namen!)
  private getTopCitiesForService(serviceId: string): string[] {
    const cityMapping: Record<string, string[]> = {
      // Dach-Services: Fokus auf Nahe-Glan Kern + wichtige Städte
      'dachsanierung': [
        'mainz',           // Größte Stadt, hohes Suchvolumen
        'bad-kreuznach',   // Stammsitz
        'kaiserslautern',  // Wirtschaftsstarke Region
        'bingen'           // Rhein-Nähe
      ],
      
      'dachfenster': [
        'mainz',
        'ingelheim',       // Wohlhabende Vorstadt
        'bad-kreuznach',
        'alzey'            // Rheinhessen
      ],
      
      'dachreparatur': [
        'bad-kreuznach',   // Lokal, schnelle Anfahrt
        'kirn',            // Nahe Region
        'idar-oberstein',  // Nahe Region
        'mainz'
      ],
      
      'regenrinnen': [
        'mainz',
        'bingen',
        'bad-kreuznach',
        'worrstadt'        // Rheinhessen
      ],
      
      // Spezial-Services: Fokus auf größere Gewerbe-Städte
      'flachdachpruefung': [
        'mainz',
        'kaiserslautern',  // Viel Industrie
        'ludwigshafen',    // BASF-Region
        'worms'            // Gewerbehallen
      ],
      
      // PV-Services: Kaufkräftige & wirtschaftsstarke Regionen
      'photovoltaik': [
        'mainz',
        'kaiserslautern',  // Uni + Militär
        'bad-kreuznach',
        'ingelheim'        // Kaufkraft
      ],
      
      'pv-indach': [
        'mainz',
        'wiesbaden',       // Kaufkräftig, Neubaugebiet
        'bingen',
        'alzey'
      ],
      
      // B2B: Industrie-Standorte
      'hallenbeleuchtung': [
        'kaiserslautern',  // Industrie + Logistik
        'mainz',
        'ludwigshafen',    // BASF
        'zweibruecken'     // Outlet + Gewerbe
      ]
    };

    // Fallback: Standard-Cities wenn Service nicht gemappt
    return cityMapping[serviceId] || ['mainz', 'bingen', 'bad-kreuznach', 'ingelheim'];
  }


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

  hasImage(serviceId: string): boolean {
    return this.servicesWithImages.has(serviceId);
  }
}
