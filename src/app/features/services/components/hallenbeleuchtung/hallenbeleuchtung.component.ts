// hallenbeleuchtung.component.ts
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CommonModule } from '@angular/common';
import { CITY_CONFIG } from '../../../city/city.config';

interface City { name: string; region: string; }

@Component({
  selector: 'app-hallenbeleuchtung',
  standalone: true,
  imports: [CtaButtonComponent, CommonModule],
  templateUrl: './hallenbeleuchtung.component.html',
  styleUrl: './hallenbeleuchtung.component.scss'
})
export class HallenbeleuchtungComponent implements OnInit {

  // City-Informationen
  city?: City;
  cityKey?: string;

  // Service-Informationen
  serviceName = 'Hallenbeleuchtung';

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

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // City-Parameter auslesen (falls vorhanden)
    this.cityKey = this.route.snapshot.paramMap.get('city') || undefined;
    
    if (this.cityKey) {
      this.city = CITY_CONFIG[this.cityKey];
      
      // Stadt-spezifische FAQ hinzufügen
      this.faqs.push({
        question: `Sind Sie auch in ${this.city.name} tätig?`,
        answer: `Ja, wir realisieren LED-Hallenbeleuchtung in ${this.city.name} und der gesamten Region ${this.city.region}. Von der Lichtplanung bis zur Montage – alles aus einer Hand.`,
        isOpen: false
      });
    } else {
      // Allgemeine Regions-FAQ
      this.faqs.push({
        question: 'In welchen Regionen sind Sie tätig?',
        answer: 'Als Elektro- und Dachdeckerfachbetrieb sind wir im Umkreis von ca. 50 km rund um Nahe-Glan tätig. Wir realisieren Hallenbeleuchtungsprojekte in den Großräumen Mainz, Kaiserslautern und Bad Kreuznach.',
        isOpen: false
      });
    }

    // SEO dynamisch setzen
    this.setSeoTags();
  }

  // Helper-Methods für Template
  get titleWithCity(): string {
    return this.city 
      ? `${this.serviceName} in ${this.city.name}`
      : this.serviceName;
  }

  get subtitleWithCity(): string {
    return this.city
      ? `LED-Lösungen für Industrie & Gewerbe im Raum ${this.city.region}`
      : 'Effizient, normgerecht und langlebig';
  }

  private setSeoTags(): void {
    if (this.city) {
      // SEO mit Stadt
      this.titleService.setTitle(
        `LED ${this.serviceName} ${this.city.name} – Planung & Montage | DNG`
      );

      this.metaService.updateTag({
        name: 'description',
        content: `Professionelle LED ${this.serviceName} in ${this.city.name}. Lichtplanung nach DIN, Montage & Steuerung für Industrie, Lager & Werkstatt im Raum ${this.city.region}. Jetzt beraten lassen!`
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: `LED ${this.serviceName} ${this.city.name} – Fachbetrieb | DNG GmbH`
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: `Effiziente LED-Hallenbeleuchtung in ${this.city.name} mit Planung, Montage und Wartung. Nachhaltige Lösungen für Industrie & Lager. Bis zu 75% Energieeinsparung.`
      });
    } else {
      // SEO ohne Stadt (Original)
      this.titleService.setTitle(
        'Hallenbeleuchtung – Planung, LED-Umrüstung & Montage | DNG GmbH Nahe-Glan'
      );

      this.metaService.updateTag({
        name: 'description',
        content: 'Effiziente LED-Hallenbeleuchtung für Produktion, Lager, Werkstatt & Sporthallen. Planung mit Lichtberechnung, Montage, Steuerung & Wartung. Fördermittel-Check. DNG GmbH – Ihr Fachbetrieb in Rheinland-Pfalz.'
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: 'Hallenbeleuchtung – Planung, LED-Umrüstung & Montage | DNG GmbH Nahe-Glan'
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: 'Effiziente LED-Hallenbeleuchtung mit Planung, Montage und Wartung in Bad Kreuznach, Zweibrücken, Kaiserslautern und Mainz. Nachhaltige Lösungen für Industrie & Lager.'
      });
    }

    // Keywords bleiben umfangreich (bereits gut optimiert)
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Hallenbeleuchtung, LED Hallenbeleuchtung, LED Hallenstrahler, Hallentiefstrahler LED, Lichtbandsystem, ' +
        'Hallenbeleuchtung Industrie, Hallenbeleuchtung Lager, Hallenbeleuchtung Werkstatt, Sporthallen Beleuchtung, ' +
        'Hallenbeleuchtung Planung, Lichtberechnung Halle, LED Umrüstung Halle, DIN EN 12464-1, ' +
        'Hallenbeleuchtung Nahe Glan, LED Hallenbeleuchtung Bad Kreuznach, Hallenbeleuchtung Mainz, Hallenbeleuchtung Kaiserslautern'
    });

    // Diese bleiben immer gleich
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
