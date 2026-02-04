import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-photovoltaik',
  imports: [CtaButtonComponent],
  templateUrl: './photovoltaik.component.html',
  styleUrl: './photovoltaik.component.scss'
})
export class PhotovoltaikComponent {

  constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
    {
      question: 'Wie lange dauert die Installation einer PV-Anlage?',
      answer: 'Die Installation dauert in der Regel 2-4 Tage, je nach Anlagengröße und Dachkomplexität. Inkl. Anmeldung und Inbetriebnahme rechnen Sie mit 4-8 Wochen.',
      isOpen: false
    },
    {
      question: 'Übernehmen Sie auch die Anmeldung beim Netzbetreiber?',
      answer: 'Ja, wir übernehmen sämtliche administrativen Aufgaben inklusive Netzanmeldung, Marktstammdatenregister und Koordination mit dem Energieversorger.',
      isOpen: false
    },
    {
      question: 'Welche Fördermöglichkeiten gibt es für PV-Anlagen?',
      answer: 'Aktuell profitieren Sie von steuerlichen Vorteilen (0% USt, keine Einkommensteuer bis 30 kWp) sowie KfW-Förderungen für Speichersysteme. Wir beraten Sie gerne.',
      isOpen: false
    },
    {
      question: 'Kann ich meine PV-Anlage mit einer Dachsanierung kombinieren?',
      answer: 'Absolut! Als Dachdecker- und Elektrofachbetrieb koordinieren wir beides optimal – oft mit Kostenvorteilen durch gebündelte Maßnahmen.',
      isOpen: false
    },
    {
      question: 'In welchen Regionen sind wir für Sie tätig?',
      answer: 'Als regional verwurzelter Fachbetrieb sind wir im Umkreis von ca. 50 km rund um Nahe-Glan für Sie im Einsatz. Wir realisieren Photovoltaik Projekte in den Großräumen Mainz, Kaiserslautern und Bad Kreuznach sowie in Ingelheim, Bingen, Alzey und Idar-Oberstein. Auch in Gemeinden wie Kirn, Meisenheim, Wörrstadt und Rockenhausen sind wir Ihr persönlicher Ansprechpartner für Photovoltaik und Dachhandwerk direkt aus unserer Region.',
      isOpen: false
    }

  ];

  ngOnInit(): void {
    this.titleService.setTitle('PV-Anlagen Nahe Glan – Komplettlösung mit Speicher | DNG GmbH');

    this.metaService.updateTag({
      name: 'description',
      content: 'PV-Anlage vom Dachdecker & Elektriker aus einer Hand. Inkl. Speicher, Wallbox, Indach & Netzanmeldung. KfW-Förderung möglich. Jetzt Beratung in Nahe Glan!'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        // Hauptdienstleistungen - PV-Anlagen
        'PV-Anlage Nahe Glan, Photovoltaik Nahe Glan, Solaranlage Nahe Glan, PV-Anlage Bad Kreuznach, Photovoltaik Bad Kreuznach, Photovoltaikanlage installieren, PV-Anlage installieren lassen, Solaranlage installieren, ' +

        // Komplettlösung & Leistungsumfang
        'PV-Anlage Komplettlösung, Photovoltaik aus einer Hand, PV-Anlage schlüsselfertig, Komplettpaket Solaranlage, PV-Anlage mit Montage, Photovoltaik Komplettservice, Solar Komplettanlage, ' +

        // Dachdecker + Elektriker USP
        'PV-Anlage vom Dachdecker, Photovoltaik Dachdecker Elektriker, Solar mit Dachkompetenz, Dachdecker mit Elektrik, eigene Monteure Photovoltaik, ohne Subunternehmer PV, ' +

        // Speichersysteme
        'Stromspeicher, PV-Anlage mit Speicher, Photovoltaik Speicher, Solarstromspeicher, Batteriespeicher Solar, Solarspeicher nachrüsten, PV-Speicher Kosten, Stromspeicher installieren, Heimspeicher, ' +

        // Wallbox & E-Mobilität
        'Wallbox installieren, PV-Anlage mit Wallbox, Wallbox Solaranlage, E-Auto laden Solar, Wallbox Photovoltaik, Ladestation Solar, Wallbox Installation, Wallbox Förderung, ' +

        // Indach-Systeme
        'PV Indach, Indachanlage, Photovoltaik Indach, GSE In-Roof, Solarmodule integriert, Indach Solaranlage, PV-Module im Dach, Indach-Photovoltaik, ästhetische Solaranlage, ' +

        // Aufdach-Systeme
        'PV Aufdach, Aufdachanlage, Photovoltaik Aufdach, Aufdach-Montage, klassische Solaranlage, PV-Module auf Dach, Dachflächenanlage, ' +

        // Förderung & Finanzierung
        'KfW-Förderung Photovoltaik, KfW Solaranlage, PV-Anlage Förderung, BAFA Solarförderung, Photovoltaik Zuschuss, Solaranlage finanzieren, PV-Anlage steuerlich absetzen, Einspeisevergütung, ' +

        // Netzanschluss & Bürokratie
        'Netzanmeldung PV, Marktstammdatenregister, PV-Anlage anmelden, Netzbetreiber Anmeldung, Einspeisevertrag, PV-Anmeldung Netzbetreiber, Stromnetz Anschluss Solar, ' +

        // Planung & Beratung
        'PV-Anlage planen, Solaranlage Beratung, Photovoltaik Planung, Ertragsberechnung Solar, Wirtschaftlichkeit PV-Anlage, Dacheignung Solar, Solarrechner, PV-Anlage dimensionieren, ' +

        // Kosten & Wirtschaftlichkeit
        'PV-Anlage Kosten, Photovoltaik Preis, Solaranlage Kosten pro kWp, Was kostet PV-Anlage, PV-Anlage Amortisation, Rendite Solaranlage, Stromkosten sparen Solar, Autarkie Solar, ' +

        // Wartung & Service
        'PV-Anlage Wartung, Solaranlage warten, Photovoltaik Reinigung, PV-Module reinigen, Solaranlage überprüfen, PV-Anlagencheck, Monitoring Solaranlage, Fernüberwachung PV, ' +

        // Dachtypen & Installation
        'PV auf Steildach, PV auf Flachdach, Solar Satteldach, Solar Walmdach, PV auf Ziegeldach, Solar auf Blechdach, PV Garage, Solar Carport, PV Scheune, ' +

        // Anlagentypen & Größen
        'kleine PV-Anlage, große Solaranlage, PV-Anlage Einfamilienhaus, PV-Anlage Gewerbe, Gewerbe Solaranlage, Industriedach Solar, PV Mehrfamilienhaus, PV Halle, ' +

        // Autarkie & Eigenverbrauch
        'Eigenverbrauch maximieren, Autarkie Solar, unabhängig Stromversorgung, Selbstversorgung Solar, Eigenverbrauchsoptimierung, Stromautonomie, eigener Solarstrom, ' +

        // Notstrom & Backup
        'Notstrom Solar, Notstromlösung PV, Blackout Solar, ersatzstromfähig, Insellösung Solar, Notstromversorgung Photovoltaik, PV mit Notstrom, ' +

        // Kombinationen
        'PV mit Dachsanierung, Solar bei Neueindeckung, PV und Dachfenster, PV mit Wärmepumpe, Solar und Wärmepumpe, PV Wärmepumpe Kombination, ' +

        // Dachausrichtung & Ertrag
        'PV Südausrichtung, PV Ost-West, Verschattung Solar, Ertrag Solaranlage, PV-Ertragsanalyse, Sonneneinstrahlung berechnen, optimale Dachneigung Solar, ' +

        // Komponenten & Technik
        'Wechselrichter, Solarmodule, PV-Module, Unterkonstruktion Solar, Montageschienen, Stromspeicher Lithium, Hybrid-Wechselrichter, DC-AC Wandler, ' +

        // Hersteller & Qualität
        'Tier 1 Module, deutsche Solarmodule, Qualitäts-PV-Anlage, hochwertige Solarmodule, Markenhersteller Solar, zertifizierte Module, Leistungsgarantie Solar, ' +

        // Zielgruppen
        'PV für Privathaus, Solar für Unternehmen, PV Landwirtschaft, Solar Hausverwaltung, PV für Eigentümer, Solar für Vermieter, Genossenschaft Solar, ' +

        // Long-Tail Keywords (Kaufintention)
        'PV-Anlage kaufen, Solaranlage Angebot, Photovoltaik Kostenvoranschlag, PV-Anlage in meiner Nähe, Solar Fachbetrieb, PV-Anlage beauftragen, wann lohnt sich Solar, ' +

        // Zeitliche Aspekte
        'PV-Anlage 2025, Solaranlage Lieferzeit, schnelle Installation PV, PV-Anlage Dauer, beste Zeit für Solar, PV-Anlage Sommer, Solar Installation Winter, ' +

        // Umwelt & Nachhaltigkeit
        'nachhaltige Energie, erneuerbare Energien, CO2-Einsparung Solar, grüner Strom, Klimaschutz Solar, Umweltschutz Photovoltaik, nachhaltiges Bauen, ' +

        // Fachbetrieb & Qualität
        'PV-Anlage Meisterbetrieb, Solar Fachbetrieb, Elektriker Photovoltaik, zertifizierter Solarteur, PV vom Fachmann, geprüfter Elektrofachbetrieb, Qualität Solaranlage, ' +

        // Regionale Keywords - Nahe Glan Region
        'PV-Anlage Kirn, Solaranlage Idar-Oberstein, Photovoltaik Birkenfeld, PV Meisenheim, Solar Sobernheim, PV Bingen, Solaranlage Simmern, Photovoltaik Kirchheimbolanden, ' +

        // Regionale Keywords - Rheinland-Pfalz
        'PV-Anlage Mainz, Solaranlage Wiesbaden, Photovoltaik Kaiserslautern, PV Ludwigshafen, Solar Koblenz, PV Trier, Solaranlage Alzey, Photovoltaik Ingelheim, PV Worms, ' +

        // Regionale Keywords - erweitert
        'PV-Anlage Rheinland-Pfalz, Solaranlage Saarland, Photovoltaik Saarbrücken, Solar Hunsrück, PV-Anlage Pfalz, Solaranlage Rheinhessen'
    });

    // Open Graph und Twitter Card Tags für Social Sharing
    this.metaService.updateTag({
      property: 'og:title',
      content: 'PV-Anlage mit Speicher & Wallbox – Alles aus einer Hand | DNG GmbH'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'PV-Anlage vom Dachdecker & Elektriker aus einer Hand. Inkl. Speicher, Wallbox, Indach & Netzanmeldung. KfW-Förderung möglich. Jetzt Beratung in Nahe Glan!'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    // this.metaService.updateTag({ property: 'og:image', content: 'https://www.dng-nahe-glan.de/assets/images/services/photovoltaik-og.jpg' }); // Optional: Bild-URL hinzufügen

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });
  }


  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
