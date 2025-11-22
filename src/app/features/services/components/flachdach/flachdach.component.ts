import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-flachdach',
  imports: [CtaButtonComponent],
  templateUrl: './flachdach.component.html',
  styleUrl: './flachdach.component.scss'
})
export class FlachdachComponent {

  constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
    {
      question: 'Welche Prüfverfahren gibt es?',
      answer: 'Wir nutzen Rauchgas-Verfahren, Dampferzeugungs-Verfahren und Rauchimpuls-Verfahren. Die Wahl hängt vom Dachaufbau, der Größe und den baulichen Gegebenheiten ab.',
      isOpen: false
    },
    {
      question: 'Wie lange dauert eine Flachdachprüfung?',
      answer: 'Je nach Dachgröße zwischen 2-6 Stunden. Bei sehr großen Hallen kann die Prüfung auch einen ganzen Tag dauern.',
      isOpen: false
    },
    {
      question: 'Für wen ist die Prüfung relevant?',
      answer: 'Ideal für Gewerbegebäude, Lagerhallen, Industriebauten, Tiefgaragen, Balkone und alle Flachdach-Konstruktionen. Besonders wichtig vor Ablauf der Gewährleistung oder bei Verdacht auf Undichtigkeiten.',
      isOpen: false
    },
    {
      question: 'Wird die Prüfung dokumentiert?',
      answer: 'Ja, Sie erhalten ein ausführliches Prüfprotokoll mit Fotos, Markierungen der undichten Stellen und Handlungsempfehlungen.',
      isOpen: false
    }
  ];

  ngOnInit(): void {
    this.titleService.setTitle('Flachdachdichtheitsprüfung Nahe Glan – Rauch & Dampf | DNG');

    this.metaService.updateTag({
      name: 'description',
      content: 'Professionelle Flachdachdichtheitsprüfung (Rauch- & Dampftest) nach DIN in Mainz, Kaiserslautern & Nahe Glan. Schnelle Leckortung. Jetzt prüfen lassen!'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        // Hauptdienstleistung - Dichtheitsprüfung
        'Flachdachdichtheitsprüfung Nahe Glan, Flachdach Dichtheitsprüfung, Flachdach prüfen, Flachdach Dichtigkeitsprüfung, Flachdach auf Dichtheit prüfen, Flachdach Leckortung, undichtes Flachdach finden, Flachdach Lecksuche, ' +

        // Prüfverfahren & Methoden
        'Rauchtest Flachdach, Rauchgasprüfung Flachdach, Dampftest Flachdach, Dampfprüfung Flachdach, Rauch- und Dampftest, Flachdach Rauchverfahren, Rauch Leckortung, Dampf Leckortung, ' +

        // DIN-Normen & Standards
        'Flachdach Prüfung DIN, DIN-Prüfung Flachdach, Flachdach DIN-Norm, normgerechte Dachprüfung, zertifizierte Flachdachprüfung, Flachdach nach Norm prüfen, ' +

        // Dokumentation & Protokolle
        'Flachdach Prüfprotokoll, Dichtheitsprüfung Protokoll, Flachdach Gutachten, Prüfbericht Flachdach, Leckortung Dokumentation, Flachdach Zustandsbericht, Prüfbescheinigung Flachdach, ' +

        // Zielgruppen - Gewerblich
        'Flachdach Gewerbe prüfen, Industriehalle Flachdach, Gewerbehalle Dichtheitsprüfung, Lagerhalle Flachdach prüfen, Produktionshalle Flachdach, Flachdach Gewerbeimmobilie, ' +

        // Gebäudetypen
        'Flachdach Tiefgarage prüfen, Parkdeck Dichtheitsprüfung, Garage Flachdach undicht, Carport Flachdach prüfen, Wohnanlage Flachdach, Mehrfamilienhaus Flachdach, Bürogebäude Flachdach, ' +

        // Flachdachtypen & Materialien
        'Bitumen Flachdach prüfen, Folien Flachdach prüfen, EPDM Flachdach prüfen, Bitumenbahn undicht, Kunststoffdach prüfen, FPO Flachdach, PVC Flachdach prüfen, ' +

        // Problemstellungen & Schäden
        'Flachdach undicht finden, Flachdach Leck lokalisieren, Wasserschaden Flachdach, Flachdach Feuchtigkeit, durchfeuchtetes Flachdach, Flachdach Wassereinbruch, Pfützen Flachdach, stehendes Wasser Flachdach, ' +

        // Schadensanzeichen
        'Flachdach tropft, Flachdach leckt, Flachdach Risse, Flachdach Blasenbildung, Flachdach porös, Schimmel unter Flachdach, feuchte Decke unter Flachdach, ' +

        // Sanierung & Reparatur (Zusatzleistungen)
        'Flachdach sanieren, Flachdach abdichten, Flachdach reparieren, Flachdach erneuern, Flachdach Sanierung, Flachdachsanierung Kosten, undichtes Flachdach reparieren, ' +

        // Wartung & Inspektion
        'Flachdach Wartung, Flachdach Inspektion, Flachdach überprüfen, Flachdach kontrollieren, regelmäßige Flachdachprüfung, Flachdach Wartungsvertrag, präventive Flachdachprüfung, ' +

        // Versicherung & rechtliche Aspekte
        'Flachdach Versicherung Gutachten, Dichtheitsprüfung Versicherung, Flachdach Schadensgutachten, Flachdach Beweissicherung, Flachdach Versicherungsschaden, Gewährleistung Flachdach, ' +

        // Vorteile & Nutzen
        'schnelle Leckortung, zerstörungsfreie Prüfung, Flachdach ohne Öffnung prüfen, präzise Leckortung, kosteneffiziente Prüfung, Folgeschäden vermeiden Flachdach, ' +

        // Einsatzbereiche erweitert
        'Flachdach Logistikzentrum, Flachdach Supermarkt, Flachdach Einkaufszentrum, Flachdach Sporthalle, Flachdach Schulgebäude, Flachdach Krankenhaus, Flachdach Hotel, ' +

        // Long-Tail Keywords (Kaufintention)
        'Flachdach prüfen lassen Kosten, Dichtheitsprüfung Flachdach Preis, Flachdach Leckortung beauftragen, Flachdach prüfen lassen, Flachdach Gutachter, Flachdach Sachverständiger, ' +

        // Zeitliche & geografische Aspekte
        'Flachdach Notfallprüfung, schnelle Flachdachprüfung, Flachdach prüfen in meiner Nähe, Flachdach Experte, Flachdachprüfung Termin, sofortige Leckortung, ' +

        // Fachbetrieb & Qualität
        'Flachdach Fachbetrieb, Dachdecker Flachdach Spezialist, Flachdach Meisterbetrieb, zertifizierter Flachdachprüfer, erfahrener Dachdecker Flachdach, Flachdach vom Fachmann, ' +

        // Regionale Keywords - Nahe Glan Region
        'Flachdach prüfen Bad Kreuznach, Flachdach prüfen Kirn, Flachdach prüfen Idar-Oberstein, Flachdach prüfen Birkenfeld, Dichtheitsprüfung Bad Kreuznach, Leckortung Bad Kreuznach, ' +

        // Regionale Keywords - Rheinland-Pfalz
        'Flachdach prüfen Mainz, Flachdach prüfen Wiesbaden, Flachdach prüfen Kaiserslautern, Flachdach prüfen Ludwigshafen, Flachdach prüfen Koblenz, Flachdach prüfen Trier, ' +

        // Regionale Keywords - erweitert
        'Flachdach prüfen Saarbrücken, Flachdach prüfen Rheinland-Pfalz, Flachdach prüfen Saarland, Dichtheitsprüfung Rheinland-Pfalz, Rauchtest Bad Kreuznach'
    });

    // Open Graph und Twitter Card Tags für Social Sharing
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Flachdachdichtheitsprüfung mit Rauch- & Dampftest | DNG GmbH'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Professionelle Flachdachdichtheitsprüfung mit Rauch- & Dampftest nach DIN. Für Gewerbe, Hallen & Garagen. Schnelle Leckortung + Prüfprotokoll. Jetzt prüfen lassen!'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    // this.metaService.updateTag({ property: 'og:image', content: 'https://www.dng-nahe-glan.de/assets/images/services/flachdach-pruefung-og.jpg' }); // Optional: Bild-URL hinzufügen

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });
  }


  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
