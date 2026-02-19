// dachreparatur.component.ts
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';

interface City { name: string; region: string; localHook: string; solarHours: number; }

@Component({
  selector: 'app-dachreparatur',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './dachreparatur.component.html',
  styleUrl: './dachreparatur.component.scss'
})
export class DachreparaturComponent implements OnInit {

  // City-Informationen
  city?: City;
  cityKey?: string;

  // Service-Informationen
  serviceName = 'Dachreparatur';

  faqs = [
    {
      question: 'Wie schnell können Sie bei einem Notfall vor Ort sein?',
      answer: 'Bei akuten Schäden mit Gefahr im Verzug sind wir innerhalb von 24 Stunden vor Ort. In Notfällen bieten wir auf Anfrage auch einen Bereitschaftsdienst an.',
      isOpen: false
    },
    {
      question: 'Was kostet eine Dachreparatur?',
      answer: 'Die Kosten hängen vom Umfang der Schäden ab. Kleinere Reparaturen (z.B. einzelne Ziegel) beginnen bei ca. 200-500€. Für größere Schäden erstellen wir Ihnen nach einer Besichtigung ein detailliertes Angebot.',
      isOpen: false
    },
    {
      question: 'Übernimmt meine Versicherung die Reparaturkosten?',
      answer: 'Bei Sturmschäden oder Hagelschäden übernimmt in der Regel die Wohngebäudeversicherung die Kosten. Wir dokumentieren den Schaden fotografisch und unterstützen Sie bei der Schadensabwicklung.',
      isOpen: false
    },
    {
      question: 'Bieten Sie auch Wartungsverträge an?',
      answer: 'Ja, wir bieten regelmäßige Wartungsverträge an. Diese beinhalten jährliche Inspektionen, Reinigung, kleine Reparaturen und eine Dokumentation für Ihre Unterlagen. So vermeiden Sie teure Folgeschäden.',
      isOpen: false
    },
    {
      question: 'Welche Schäden können Sie reparieren?',
      answer: 'Wir reparieren alle gängigen Dachschäden: defekte oder lose Ziegel, undichte Stellen, Sturmschäden, verstopfte Rinnen, beschädigte Kehlen und vieles mehr. Bei einer Besichtigung prüfen wir den Umfang.',
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
    }

    // SEO dynamisch setzen
    this.setSeoTags();
  }

  // Helper-Methods für Template
  get titleWithCity(): string {
    return this.city
      ? `${this.serviceName} in ${this.city.name}`
      : `${this.serviceName} und Wartung`;
  }

  get subtitleWithCity(): string {
    return this.city
      ? `Schnelle Hilfe im Raum ${this.city.region}`
      : 'Schnell, sicher, zuverlässig';
  }

  private setSeoTags(): void {
    if (this.city) {
      // SEO mit Stadt
      this.titleService.setTitle(
        `${this.serviceName} ${this.city.name} – Schnelle Hilfe & Notdienst | DNG`
      );

      this.metaService.updateTag({
        name: 'description',
        content: `Schnelle ${this.serviceName} in ${this.city.name}. Notdienst bei Sturmschäden. Wartungsverträge verfügbar. Ihr Dachdecker im Raum ${this.city.region}.`
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: `${this.serviceName} ${this.city.name} – Notdienst verfügbar | DNG GmbH`
      });
    } else {
      // SEO ohne Stadt (Original)
      this.titleService.setTitle(
        'Dachreparatur & Wartung – Notdienst verfügbar | DNG GmbH'
      );

      this.metaService.updateTag({
        name: 'description',
        content: 'Schnelle Dachreparatur bei Sturmschäden, undichten Stellen oder defekten Ziegeln. Notdienst und Wartungsverträge verfügbar. Jetzt Kontakt aufnehmen!'
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: 'Dachreparatur vom Fachbetrieb – Notdienst | DNG GmbH'
      });
    }

    // Diese bleiben immer gleich
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Professionelle Dachreparatur und Wartung. Schneller Notdienst bei Schäden. Wartungsverträge verfügbar.'
    });

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

  get regionalTextParts(): any {
    if (!this.city) {
      return null; // Wichtig: null triggert das @else im Template
    }

    return {
      intro: `Ob Sturmschaden oder defekter Ziegel – wir wissen, dass es bei Dachschäden auf Schnelligkeit ankommt.`,
      location: `Da ${this.city.name} fest zu unserem Kern-Einsatzgebiet gehört, sind wir in der gesamten Region ${this.city.region} kurzfristig für Sie einsatzbereit.`,
      action: `Wir begutachten den Schaden direkt vor Ort und sorgen mit fachgerechten Sofortmaßnahmen dafür, dass Ihr Zuhause in ${this.city.name} schnell wieder sicher und trocken ist.`
    };
  }
}
