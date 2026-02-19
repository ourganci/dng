// src/app/features/services/components/dachsanierung/dachsanierung.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';
import { SERVICE_CONFIG } from '../../services.config';
import { SeoService } from '../../../../core/services/seo.service';

interface City { name: string; region: string; localHook: string; solarHours: number; }

@Component({
  selector: 'app-dachsanierung',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './dachsanierung.component.html',
  styleUrl: './dachsanierung.component.scss'
})
export class DachsanierungComponent implements OnInit {

  // City-Informationen
  city?: City;
  cityKey?: string;

  // Service-Informationen
  serviceKey = 'dachsanierung'; // Key passend zur SERVICE_CONFIG
  serviceName = 'Dachsanierung';

  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService
  ) { }

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
      answer: `Eine Dachsanierung ist sinnvoll für: Privathaushalte, Hausverwaltungen und Bauträger, die Wert auf Energieeffizienz und Werterhalt legen.`,
      isOpen: false
    }
  ];

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
    const baseUrl = 'https://www.dng-nahe-glan.de/leistungen/dachsanierung';
    const canonicalUrl = this.cityKey ? `${baseUrl}/${this.cityKey}` : baseUrl;

    // Dynamische Texte basierend auf City-Status
    const seoTitle = this.city 
      ? `Dachsanierung ${this.city.name} – Dach neu decken & dämmen | DNG`
      : 'Dachsanierung Nahe Glan – Dach neu decken & dämmen | DNG GmbH';

    const seoDesc = this.city
      ? `Professionelle Dachsanierung in ${this.city.name}. Energetische Dämmung & Neueindeckung im Raum ${this.city.region}. Jetzt KfW-Förderung nutzen & Angebot erhalten!`
      : `Ihre Experten für Dachsanierung, Dämmung und Neueindeckung in Nahe Glan, Bad Kreuznach & Mainz. KfW-Förderung möglich. Jetzt beraten lassen!`;

    this.seoService.updateMetaTags({
      title: seoTitle,
      description: seoDesc,
      url: canonicalUrl,
      keywords: `Dachsanierung ${cityName}, Dach dämmen ${cityName}, Neueindeckung ${regionName}, Dachdecker ${cityName}, energetische Sanierung`
    });
  }

  // Helper-Methods für Template
  get titleWithCity(): string {
    return this.city
      ? `${this.serviceName} in ${this.city.name}`
      : this.serviceName;
  }

  get subtitleWithCity(): string {
    return this.city
      ? `Dach neu decken & dämmen im Raum ${this.city.region}`
      : 'Dach neu decken & dämmen';
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  get regionalTextSanierung(): any {
    if (!this.city) return null;

    return {
      intro: `Eine hochwertige Dachsanierung sichert den Werterhalt Ihrer Immobilie in ${this.city.name} nachhaltig ab.`,
      main: `Wir unterstützen Sie in der gesamten Region ${this.city.region} dabei, Wärmeverluste zu stoppen und die Optik Ihres Hauses aufzuwerten. Dabei setzen wir auf langlebige Materialien, die exakt auf ihre Anforderungen abgestimmt sind.`,
      closing: `Von der ersten Bestandsaufnahme in ${this.city.name} bis zur fachgerechten Ausführung erhalten Sie bei uns alles aus einer Hand.`
    };
  }
}