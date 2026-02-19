// dachreparatur.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';
import { SERVICE_CONFIG } from '../../services.config';
import { SeoService } from '../../../../core/services/seo.service';

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
  serviceKey = 'dachreparatur'; // Key passend zur SERVICE_CONFIG
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
    private route: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    // City-Parameter auslesen
    this.cityKey = this.route.snapshot.paramMap.get('city') || undefined;

    if (this.cityKey && CITY_CONFIG[this.cityKey]) {
      this.city = CITY_CONFIG[this.cityKey];
    }

    // SEO zentral über den SeoService setzen
    this.applySeo();
  }

  private applySeo(): void {
    const service = SERVICE_CONFIG[this.serviceKey];
    const cityName = this.city ? this.city.name : 'Nahe-Glan';
    const regionName = this.city ? this.city.region : 'der Region';

    // Aufbau der URL für den Canonical Link
    const baseUrl = 'https://www.dng-nahe-glan.de/leistungen/dachreparatur';
    const canonicalUrl = this.cityKey ? `${baseUrl}/${this.cityKey}` : baseUrl;

    // Dynamische Texte basierend auf City-Status
    const seoTitle = this.city 
      ? `Dachreparatur ${this.city.name} – Schnelle Hilfe & Notdienst | DNG`
      : 'Dachreparatur & Wartung – Notdienst verfügbar | DNG GmbH';

    const seoDesc = this.city
      ? `Schnelle Dachreparatur in ${this.city.name}. Notdienst bei Sturmschäden & Undichtigkeiten. Ihr zuverlässiger Dachdecker im Raum ${this.city.region}. Jetzt anrufen!`
      : `Professionelle Dachreparatur bei Sturmschäden & undichten Stellen. Schneller Notdienst und Wartungsverträge in Nahe-Glan. Jetzt Kontakt aufnehmen!`;

    this.seoService.updateMetaTags({
      title: seoTitle,
      description: seoDesc,
      url: canonicalUrl,
      keywords: `Dachreparatur ${cityName}, Sturmschaden ${cityName}, Dachdecker Notdienst ${regionName}, Dach undicht ${cityName}, Dachwartung`
    });
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

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  get regionalTextParts(): any {
    if (!this.city) return null;

    return {
      intro: `Ob Sturmschaden oder defekter Ziegel – wir wissen, dass es bei Dachschäden auf Schnelligkeit ankommt.`,
      location: `Da ${this.city.name} fest zu unserem Kern-Einsatzgebiet gehört, sind wir in der gesamten Region ${this.city.region} kurzfristig für Sie einsatzbereit.`,
      action: `Wir begutachten den Schaden direkt vor Ort und sorgen mit fachgerechten Sofortmaßnahmen dafür, dass Ihr Zuhause in ${this.city.name} schnell wieder sicher und trocken ist.`
    };
  }
}