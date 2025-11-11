import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hallenbeleuchtung',
  standalone: true,
  imports: [CtaButtonComponent, CommonModule],
  templateUrl: './hallenbeleuchtung.component.html',
  styleUrl: './hallenbeleuchtung.component.scss'
})
export class HallenbeleuchtungComponent {
  constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
    {
      question: 'Wie schnell amortisiert sich eine Umrüstung?',
      answer: 'Je nach Nutzungszeiten und Strompreis oft 1,5–4 Jahre. Wir rechnen das für Ihre Halle vor.',
      isOpen: false
    },
    {
      question: 'Kann bestehende Verkabelung/Tragschienen weiter genutzt werden?',
      answer: 'Häufig ja – besonders bei Lichtbandsystemen. Wir prüfen das vor Ort.',
      isOpen: false
    },
    {
      question: 'Ist tageslichtabhängige Steuerung sinnvoll?',
      answer: 'Ja, in Hallen mit Oberlichtern/Fassadenfenstern lassen sich zusätzliche 10–30 % sparen.',
      isOpen: false
    },
    {
      question: 'Was ist mit Not- und Sicherheitsbeleuchtung?',
      answer: 'Planen und liefern wir normgerecht inkl. Prüfkonzept – DIN EN 1838.',
      isOpen: false
    }
  ];

  ngOnInit(): void {
    this.titleService.setTitle('Hallenbeleuchtung – Planung, LED-Umrüstung & Montage | DNG GmbH Nahe-Glan');
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Effiziente LED-Hallenbeleuchtung für Produktion, Lager, Werkstatt & Sporthallen. Planung mit Lichtberechnung, Montage, Steuerung & Wartung. Fördermittel-Check. DNG GmbH – Ihr Fachbetrieb in Rheinland-Pfalz.' 
    });
    
    this.metaService.updateTag({
      name: 'keywords',
      content:
        // Hauptkeywords - Produkt/Technik
        'Hallenbeleuchtung, LED Hallenbeleuchtung, Hallenbeleuchtung LED, LED Beleuchtung Halle, Industriehallenbeleuchtung, LED Hallenstrahler, Hallentiefstrahler LED, Lichtbandsystem, Feuchtraumleuchten, ' +
        // Anwendungsbereiche
        'Hallenbeleuchtung Industrie, Hallenbeleuchtung Produktion, Hallenbeleuchtung Lager, Hallenbeleuchtung Logistik, Hallenbeleuchtung Werkstatt, Sporthallen Beleuchtung, Reithallen Beleuchtung, ' +
        // Dienstleistungen
        'Hallenbeleuchtung Planung, Lichtberechnung Halle, Hallenbeleuchtung Montage, LED Umrüstung Halle, Hallenbeleuchtung Installation, Lichtplanung Industrie, ' +
        // Technische Aspekte
        'Hallenbeleuchtung Steuerung, Präsenzmelder Halle, Tageslichtsteuerung Halle, Not- und Sicherheitsbeleuchtung, DIN EN 12464-1, Beleuchtungsstärke Halle, ' +
        // Vorteile & Wirtschaftlichkeit
        'Energieeffiziente Hallenbeleuchtung, Hallenbeleuchtung Energieeinsparung, LED Hallenbeleuchtung Förderung, Hallenbeleuchtung Wartung, flimmerfreie Beleuchtung, ' +
        // Regionale Keywords - Nahe Glan Region
        'Hallenbeleuchtung Nahe Glan, LED Hallenbeleuchtung Bad Kreuznach, Hallenbeleuchtung Kirn, LED Beleuchtung Idar-Oberstein, Hallenbeleuchtung Birkenfeld, ' +
        // Regionale Keywords - Rheinland-Pfalz
        'Hallenbeleuchtung Mainz, LED Hallenbeleuchtung Wiesbaden, Hallenbeleuchtung Frankfurt, Hallenbeleuchtung Kaiserslautern, LED Beleuchtung Ludwigshafen, ' +
        'Hallenbeleuchtung Koblenz, Hallenbeleuchtung Trier, LED Hallenbeleuchtung Rheinland-Pfalz, Hallenbeleuchtung Saarland, Hallenbeleuchtung Hessen'
    });

    // Open Graph and Twitter Card tags for social sharing
    this.metaService.updateTag({ 
      property: 'og:title', 
      content: 'Hallenbeleuchtung – Planung, LED-Umrüstung & Montage | DNG GmbH Nahe-Glan' 
    });
    this.metaService.updateTag({ 
      property: 'og:description', 
      content: 'Effiziente LED-Hallenbeleuchtung für Produktion, Lager, Werkstatt & Sporthallen. Planung mit Lichtberechnung, Montage, Steuerung & Wartung. Fördermittel-Check. DNG GmbH – Ihr Fachbetrieb in Rheinland-Pfalz.' 
    });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
