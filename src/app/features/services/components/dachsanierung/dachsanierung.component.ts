import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';


@Component({
  selector: 'app-dachsanierung',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './dachsanierung.component.html',
  styleUrl: './dachsanierung.component.scss'
})
export class DachsanierungComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
    {
      question: 'Wann ist eine Dachsanierung notwendig?',
      answer: 'Eine Dachsanierung wird empfohlen bei sichtbaren Schäden (Risse, fehlende Ziegel), bei Undichtigkeiten, starkem Moosbewuchs oder wenn Ihr Dach älter als 30-40 Jahre ist. Auch bei unzureichender Dämmung ist eine energetische Sanierung sinnvoll.',
      isOpen: false
    },
    {
      question: 'Wie lange dauert eine Dachsanierung?',
      answer: 'Die Dauer hängt von der Dachgröße und dem Sanierungsumfang ab. Ein Einfamilienhaus (ca. 150m²) dauert in der Regel 1-3 Wochen. Wir erstellen Ihnen einen detaillierten Zeitplan.',
      isOpen: false
    },
    {
      question: 'Was kostet eine Dachsanierung?',
      answer: 'Die Kosten variieren je nach Dachfläche, Material und Aufwand. Für ein Einfamilienhaus können Sie mit 100-250€ pro m² rechnen. Kontaktieren Sie uns für ein kostenloses, unverbindliches Angebot.',
      isOpen: false
    },
    {
      question: 'Welche Fördermöglichkeiten gibt es?',
      answer: 'Für energetische Dachsanierungen gibt es Förderungen über die KfW und BAFA. Wir beraten Sie gerne zu den aktuellen Förderprogrammen und unterstützen Sie bei der Antragstellung.',
      isOpen: false
    },
    {
      question: 'Für wen ist eine Dachsanierung sinnvoll?',
      answer: `
        Eine Dachsanierung ist sinnvoll für:
        - Privathaushalte (Eigentümer & Bauherren)
        - Hausverwaltungen & Immobiliengesellschaften
        - Bauträger & Sanierungsfirmen
      `,
      isOpen: false
    }
  ];

ngOnInit(): void {
  this.titleService.setTitle('Dachsanierung Nahe Glan – Dach neu decken & dämmen | DNG GmbH');
  
  this.metaService.updateTag({ 
    name: 'description', 
    content: 'Professionelle Dachsanierung vom Fachetrieb in Nahe Glan. KfW-Förderung möglich. Energieeffizient dämmen, neu decken & Heizkosten sparen. Jetzt Angebot erhalten!' 
  });
  
  this.metaService.updateTag({ 
    name: 'keywords', 
    content: 
      // Hauptdienstleistungen - Sanierung
      'Dachsanierung Nahe Glan, Dachsanierung Bad Kreuznach, Dachsanierung Kirn, Dach sanieren, Dach sanieren lassen, Dachsanierung Kosten, Dachsanierung Preis, komplette Dachsanierung, Dach Komplettsanierung, ' +
      
      // Kerntätigkeiten
      'Dach neu decken, Dach neu eindecken, Dach erneuern, Dacheindeckung erneuern, Dach komplett erneuern, altes Dach erneuern, Dach modernisieren, Dachmodernisierung, ' +
      
      // Dämmung & Energieeffizienz
      'Dach dämmen, Dachdämmung, Dach dämmen Kosten, Dach von innen dämmen, Dach von außen dämmen, Aufsparrendämmung, Zwischensparrendämmung, Untersparrendämmung, Dachdämmung nachträglich, ' +
      
      // Energetische Sanierung
      'energetische Dachsanierung, Dach energetisch sanieren, Wärmedämmung Dach, Dach Energieeffizienz, Heizkosten sparen Dach, Wärmeverlust Dach reduzieren, GEG Dach, GEG-konform dämmen, ' +
      
      // Förderung & Finanzierung
      'Dachsanierung KfW-Förderung, KfW-Förderung Dach, BEG Förderung Dach, BAFA Dachsanierung, Dachsanierung Zuschuss, Dachsanierung steuerlich absetzen, Dachsanierung finanzieren, Fördermittel Dachsanierung, ' +
      
      // Abdichtung & Schutz
      'Dach abdichten, Dachabdichtung erneuern, Dach wasserdicht machen, undichtes Dach sanieren, Dach Feuchtigkeit, Wasserschaden Dach sanieren, Dach diffusionsoffen, ' +
      
      // Materialien & Eindeckung
      'Dach neu decken Ziegel, Dachziegel erneuern, Dachsteine erneuern, Schieferdach sanieren, Metalldach sanieren, Biberschwanz Dach, Frankfurter Pfanne, Betonziegel Dach, ' +
      
      // Dachtypen
      'Steildach sanieren, Satteldach sanieren, Walmdach sanieren, Pultdach sanieren, Mansarddach sanieren, Zeltdach sanieren, Flachdach sanieren, Gründach sanieren, ' +
      
      // Schadensbilder & Anzeichen
      'Dach undicht sanieren, Dach porös, brüchige Dachziegel, Moosbefall Dach entfernen, Algenbefall Dach, Dach verwittert, alte Dacheindeckung, Sturmschaden Dach sanieren, Hagelschaden Dach sanieren, ' +
      
      // Zusatzleistungen bei Sanierung
      'Dachfenster bei Sanierung, Dachgaube bei Sanierung, PV-Anlage bei Sanierung, Solardach, Dachausbau mit Sanierung, Dachrinnen erneuern, Dachrinnen bei Sanierung, Dachrinne mitversetzen, ' +
      
      // Umfang & Projekttypen
      'Teilsanierung Dach, Dach Teilerneuerung, Dachsanierung Altbau, Dachsanierung Neubau, Dachsanierung Einfamilienhaus, Dachsanierung Mehrfamilienhaus, Dachsanierung Gewerbe, Dachsanierung Industrie, ' +
      
      // Zielgruppen
      'Dachsanierung Hausverwaltung, Dachsanierung Immobiliengesellschaft, Dachsanierung Bauträger, Dachsanierung Eigentümer, Dachsanierung Vermieter, Dachsanierung WEG, ' +
      
      // Ablauf & Leistungen
      'Dachsanierung Ablauf, Dachgutachten, Dachberatung, Dachcheck kostenlos, Vor-Ort-Besichtigung Dach, Dachrückbau, alte Eindeckung entsorgen, Dachsanierung mit Gerüst, ' +
      
      // Vorteile & Nutzen
      'Wertsteigerung durch Dachsanierung, Immobilienwert steigern Dach, Schallschutz Dach verbessern, Brandschutz Dach, Dach Lebensdauer verlängern, Dach zukunftssicher, ' +
      
      // Zeitliche Aspekte
      'Dachsanierung Dauer, wie lange dauert Dachsanierung, Dachsanierung ohne Gerüst, Dachsanierung Sommer, beste Zeit Dachsanierung, Dachsanierung planen, ' +
      
      // Long-Tail Keywords (Kaufintention)
      'Dachsanierung in meiner Nähe, Dachsanierung Angebot einholen, Dachsanierung Kostenvoranschlag, Was kostet komplette Dachsanierung, Dachsanierung notwendig, wann Dach sanieren, ' +
      
      // Fachbetrieb & Qualität
      'Dachsanierung Meisterbetrieb, Dachdecker Meisterbetrieb, Dachsanierung Fachbetrieb, zertifizierter Dachdecker, geprüfter Dachdeckerbetrieb, Dachsanierung vom Fachmann, Qualität Dachsanierung, ' +
      
      // Regionale Keywords - Nahe Glan Region
      'Dachsanierung Idar-Oberstein, Dachsanierung Birkenfeld, Dachsanierung Meisenheim, Dachsanierung Sobernheim, Dachsanierung Kirchheimbolanden, Dachsanierung Bingen, Dachsanierung Simmern, ' +
      
      // Regionale Keywords - Rheinland-Pfalz
      'Dachsanierung Mainz, Dachsanierung Wiesbaden, Dachsanierung Alzey, Dachsanierung Ingelheim, Dachsanierung Worms, Dachsanierung Kaiserslautern, Dachsanierung Ludwigshafen, Dachsanierung Neustadt Weinstraße, ' +
      
      // Regionale Keywords - erweitert
      'Dachsanierung Rheinland-Pfalz, Dachsanierung Saarland, Dachsanierung Saarbrücken, Dachsanierung Trier, Dachsanierung Koblenz, Dachsanierung Hunsrück'
  });

  // Open Graph und Twitter Card Tags für Social Sharing
  this.metaService.updateTag({ 
    property: 'og:title', 
    content: 'Dachsanierung vom Fachetrieb – KfW-Förderung möglich | DNG GmbH' 
  });
  
  this.metaService.updateTag({ 
    property: 'og:description', 
    content: 'Professionelle Dachsanierung vom Fachetrieb in Nahe Glan. KfW-Förderung möglich. Energieeffizient dämmen, neu decken & Heizkosten sparen. Jetzt Angebot erhalten!' 
  });
  
  this.metaService.updateTag({ 
    property: 'og:type', 
    content: 'website' 
  });
  
  // this.metaService.updateTag({ property: 'og:image', content: 'https://www.dng-nahe-glan.de/assets/images/services/dachsanierung-og.jpg' }); // Optional: Bild-URL hinzufügen
  
  this.metaService.updateTag({ 
    name: 'twitter:card', 
    content: 'summary_large_image' 
  });
}


  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
