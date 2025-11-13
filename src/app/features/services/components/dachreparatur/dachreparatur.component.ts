import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';


@Component({
  selector: 'app-dachreparatur',
  imports: [CtaButtonComponent],
  templateUrl: './dachreparatur.component.html',
  styleUrl: './dachreparatur.component.scss'
})
export class DachreparaturComponent {

  constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
    {
      question: 'Wie schnell können Sie bei einem Notfall vor Ort sein?',
      answer: 'Bei Notfällen wie Sturmschäden oder undichten Stellen bemühen wir uns, innerhalb von 24 Stunden bei Ihnen zu sein. Kontaktieren Sie uns telefonisch für eine schnelle Reaktion.',
      isOpen: false
    },
    {
      question: 'Wie oft sollte ein Dach gewartet werden?',
      answer: 'Wir empfehlen eine professionelle Inspektion alle 2-3 Jahre. Bei älteren Dächern (20+ Jahre) oder nach starken Stürmen sollte jährlich kontrolliert werden.',
      isOpen: false
    },
    {
      question: 'Was beinhaltet eine Dachwartung?',
      answer: 'Bei der Wartung prüfen wir die Dacheindeckung, Abdichtungen, Regenrinnen, Dachfenster und alle kritischen Bereiche. Kleine Mängel beheben wir direkt, größere Schäden dokumentieren wir im Wartungsprotokoll.',
      isOpen: false
    },
    {
      question: 'Bieten Sie Wartungsverträge an?',
      answer: 'Ja, besonders für Hausverwaltungen, Gewerbeimmobilien und Mehrfamilienhäuser bieten wir individuelle Wartungsverträge mit festen Terminen an.',
      isOpen: false
    }
  ];

ngOnInit(): void {
  this.titleService.setTitle('Dachreparatur & Notdienst Nahe Glan – Schnelle Hilfe | DNG GmbH');
  
  this.metaService.updateTag({ 
    name: 'description', 
    content: 'Schnelle Dachreparatur bei Sturmschäden & Notfällen. Wartungsverträge & Inspektion vom Fachetrieb in Nahe Glan, Bad Kreuznach & Kirn. 24h-Notdienst verfügbar!' 
  });
  
  this.metaService.updateTag({ 
    name: 'keywords', 
    content: 
      // Hauptdienstleistungen - Reparatur
      'Dachreparatur Nahe Glan, Dach reparieren, Dach reparieren lassen, Dachreparatur Kosten, Dachschaden reparieren, defektes Dach reparieren, undichtes Dach abdichten, Dachziegel austauschen, Dachziegel ersetzen, ' +
      
      // Notdienst & Schnellservice
      'Dachdecker Notdienst, Notdienst Dach, Dach Notdienst 24h, Dachreparatur Notfall, Dachdecker Notfall, Sofort Dachreparatur, schnelle Dachreparatur, Dach Eilreparatur, ' +
      
      // Schadensarten
      'Sturmschaden Dach, Dach Sturmschaden reparieren, Hagelschaden Dach, Wasserschaden Dach, Dach undicht, Dach leckt, Dachziegel abgedeckt, Dachziegel lose, Dachziegel zerbrochen, Dachziegel kaputt, ' +
      
      // Wetterschäden
      'Dach nach Sturm, Dachreparatur nach Unwetter, Dachreparatur nach Hagel, Dachreparatur nach Orkan, Wintersturmschaden Dach, Schneedruckschaden Dach, ' +
      
      // Wartung & Inspektion
      'Dachwartung, Dachinspektion, Dach inspizieren, Dach prüfen, Dach überprüfen, Dach kontrollieren, Dach Wartungsvertrag, regelmäßige Dachwartung, Dachpflege, Dach Instandhaltung, ' +
      
      // Wartungsleistungen
      'Dachcheck, Dachrinnen reinigen, Laubentfernung Dach, Dachrinnen-Check, Dach Sichtprüfung, Dach Dokumentation, Versicherung Dachinspektion, ' +
      
      // Spezifische Reparaturen
      'Dachziegel Austausch, Dachpfanne ersetzen, Dach Abdichtung reparieren, Dachabdichtung erneuern, Dachfirst reparieren, Dachfirstziegel austauschen, Kehle reparieren, Dachrinne verstopft, ' +
      
      // Kundengruppen
      'Hausverwaltung Dachreparatur, Gewerbe Dachreparatur, Industrie Dachreparatur, öffentliche Gebäude Dach, Mehrfamilienhaus Dachreparatur, ' +
      
      // Dachtypen
      'Steildach reparieren, Satteldach reparieren, Walmdach reparieren, Flachdach reparieren, Ziegeldach reparieren, Schieferdach reparieren, Blechdach reparieren, ' +
      
      // Versicherung & Schaden
      'Dachreparatur Versicherung, Sturmschaden melden, Dachschaden Versicherung, Schadensgutachten Dach, Versicherungsschaden Dach, Elementarschaden Dach, ' +
      
      // Zeitkritisch & Dringend
      'Dachreparatur sofort, Dachreparatur heute noch, Dachreparatur am Wochenende, Dachreparatur Feiertag, Dach Notabdichtung, provisorische Dachabdeckung, ' +
      
      // Long-Tail Keywords
      'Dach undicht was tun, Wassereintritt Dach, Dach leckt bei Regen, abgedeckte Dachziegel nach Sturm, Dachreparatur in meiner Nähe, Dachdecker schnell verfügbar, ' +
      
      // Fachbetrieb & Qualität
      'Dachreparatur Meisterbetrieb, Dachdecker Fachbetrieb, Dachreparatur vom Fachmann, zertifizierter Dachdecker, geprüfter Dachdecker, schneller Dachdecker, zuverlässiger Dachdecker, ' +
      
      // Regionale Keywords - Nahe Glan Region
      'Dachreparatur Bad Kreuznach, Dachreparatur Kirn, Dachreparatur Idar-Oberstein, Dachreparatur Birkenfeld, Dachreparatur Meisenheim, Dachreparatur Sobernheim, Dachreparatur Kirchheimbolanden, ' +
      
      // Regionale Keywords - Rheinland-Pfalz
      'Notdienst Dachdecker Bad Kreuznach, Notdienst Dachdecker Kirn, Dachreparatur Mainz, Dachreparatur Wiesbaden, Dachreparatur Bingen, Dachreparatur Alzey, Dachreparatur Ingelheim, ' +
      
      // Weitere regionale Keywords
      'Dachreparatur Kaiserslautern, Dachreparatur Ludwigshafen, Dachreparatur Worms, Dachreparatur Rheinland-Pfalz, Dachreparatur Saarland, Dachreparatur Saarbrücken, Dachreparatur Trier'
  });

  // Open Graph und Twitter Card Tags für Social Sharing
  this.metaService.updateTag({ 
    property: 'og:title', 
    content: 'Dachreparatur & 24h-Notdienst vom Fachetrieb | DNG GmbH' 
  });
  
  this.metaService.updateTag({ 
    property: 'og:description', 
    content: 'Schnelle Dachreparatur bei Sturmschäden & Notfällen. Wartungsverträge & Inspektion vom Fachetrieb in Nahe Glan, Bad Kreuznach & Kirn. 24h-Notdienst verfügbar!' 
  });
  
  this.metaService.updateTag({ 
    property: 'og:type', 
    content: 'website' 
  });
  
  // this.metaService.updateTag({ property: 'og:image', content: 'https://www.dng-nahe-glan.de/assets/images/services/dachreparatur-notdienst-og.jpg' }); // Optional: Bild-URL hinzufügen
  
  this.metaService.updateTag({ 
    name: 'twitter:card', 
    content: 'summary_large_image' 
  });
}


  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
