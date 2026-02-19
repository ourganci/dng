// dachfenster.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';
import { SERVICE_CONFIG } from '../../services.config'; // Wichtig: Import der Service-Config
import { SeoService } from '../../../../core/services/seo.service';

interface City { name: string; region: string; localHook?: string; solarHours?: number; }

@Component({
  selector: 'app-dachfenster',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './dachfenster.component.html',
  styleUrl: './dachfenster.component.scss'
})
export class DachfensterComponent implements OnInit {

  // City-Informationen
  city?: City;
  cityKey?: string;

  // Service-Informationen
  serviceKey = 'dachfenster'; // Key passend zur SERVICE_CONFIG
  serviceName = 'Dachfenster';

  openCard: number | null = null;
  currentSlide = 0;

  images = [
    { src: 'assets/images/services/Dach-Bad-3.webp', alt: 'Dachbad', caption: 'Optionaler Text', title: 'Modernes Dachbad' },
    { src: 'assets/images/services/Dach-Fenster-8.webp', alt: 'Dachfenster', caption: 'Optionaler Text', title: 'Modernes Dachfenster' },
    { src: 'assets/images/services/Dach-Kueche-1.webp', alt: 'Dachküche', caption: 'Optionaler Text', title: 'Moderne Dachküche' },
    { src: 'assets/images/services/Dach-Wohnen-3.webp', alt: 'Dachwohnraum', caption: 'Optionaler Text', title: 'Moderner Dachwohnraum' },
    { src: 'assets/images/services/Dach-Wohnen-8.webp', alt: 'Dachwohnraum', caption: 'Optionaler Text', title: 'Moderner Dachwohnraum' },
    { src: 'assets/images/services/Dach-Bad-7.webp', alt: 'Dachbad', caption: 'Optionaler Text', title: 'Modernes Dachbad' },
    { src: 'assets/images/services/Dach-Gaube-2.webp', alt: 'Dachgaube', caption: 'Optionaler Text', title: 'Moderne Dachgaube' },
    { src: 'assets/images/services/Dach-Kueche-4.webp', alt: 'Dachküche', caption: 'Optionaler Text', title: 'Moderne Dachküche' },
    { src: 'assets/images/services/Dach-Wohnen-7.webp', alt: 'Dachwohnraum', caption: 'Optionaler Text', title: 'Moderner Dachwohnraum' }
  ];

  faqs = [
    {
      question: 'Welche Dachfenster-Typen gibt es?',
      answer: 'Es gibt Schwingfenster, Klapp-Schwingfenster, Dachschiebefenster und Ausstiegsfenster. Wir beraten Sie zur passenden Lösung für Ihr Dach.',
      isOpen: false
    },
    {
      question: 'Wie lange dauert der Einbau eines Dachfensters?',
      answer: 'Ein Standard-Dachfenster wird in der Regel innerhalb eines Tages eingebaut. Bei komplexeren Projekten oder mehreren Fenstern kann es 2-3 Tage dauern.',
      isOpen: false
    },
    {
      question: 'Was kostet ein Dachfenster mit Einbau?',
      answer: 'Die Kosten variieren je nach Größe, Typ und Ausstattung. Für ein Standard-Dachfenster inkl. Einbau können Sie mit 1.500-3.500€ rechnen. Kontaktieren Sie uns für ein individuelles Angebot.',
      isOpen: false
    },
    {
      question: 'Sind Dachfenster förderfähig?',
      answer: 'Ja, der Einbau energieeffizienter Dachfenster kann über die BEG (Bundesförderung für effiziente Gebäude) mit bis zu 20% gefördert werden. Auch steuerliche Absetzung ist möglich.',
      isOpen: false
    },
    {
      question: 'Wie verbessern Dachfenster die Energieeffizienz?',
      answer: 'Moderne Dachfenster mit Dreifachverglasung reduzieren Wärmeverluste erheblich und verbessern die Dämmung. Sie erfüllen die aktuellen Anforderungen des GEG (Gebäudeenergiegesetz).',
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

      // Stadt-spezifische FAQ hinzufügen
      this.faqs.push({
        question: `Sind Sie auch in ${this.city.name} tätig?`,
        answer: `Ja, als regionaler Fachbetrieb führen wir den Dachfenster-Einbau in ${this.city.name} und der gesamten Region ${this.city.region} fachgerecht aus.`,
        isOpen: false
      });
    }

    // SEO zentral über den SeoService setzen
    this.applySeo();
  }

  private applySeo(): void {
    const service = SERVICE_CONFIG[this.serviceKey];
    const cityName = this.city ? this.city.name : 'Nahe-Glan';
    const regionName = this.city ? this.city.region : 'der Region';

    // Aufbau der URL für den Canonical Link
    const baseUrl = 'https://www.dng-nahe-glan.de/leistungen/dachfenster';
    const canonicalUrl = this.cityKey ? `${baseUrl}/${this.cityKey}` : baseUrl;

    // Dynamische Texte basierend auf City-Status
    const seoTitle = this.city 
      ? `Dachfenster ${this.city.name} – Einbau & Modernisierung | DNG`
      : 'Dachfenster Einbau & Modernisierung – Velux-Partner | DNG GmbH';

    const seoDesc = this.city
      ? `Professioneller Dachfenster-Einbau in ${this.city.name}. Velux-Partner. Mehr Licht & Wohnkomfort im Raum ${this.city.region}. Jetzt Termin vereinbaren!`
      : `Professioneller Dachfenster-Einbau von Velux & anderen Herstellern. Mehr Licht, Luft & Komfort. Jetzt Beratung in der Region Nahe-Glan anfordern!`;

    this.seoService.updateMetaTags({
      title: seoTitle,
      description: seoDesc,
      url: canonicalUrl,
      keywords: `Dachfenster ${cityName}, Velux ${cityName}, Dachfenster Einbau ${regionName}, Dachgaube ${cityName}, Dachfenster Kosten`
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
      ? `Mehr Licht und Lebensqualität im Raum ${this.city.region}`
      : 'Mehr Licht, mehr Raum, mehr Lebensqualität';
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  toggleCard(index: number): void {
    this.openCard = this.openCard === index ? null : index;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  goToSlide(i: number): void {
    this.currentSlide = i;
  }

  get regionalTextDachfenster(): any {
    if (!this.city) return null;

    return {
      intro: `Gerade in ${this.city.name} nutzen viele Hausbesitzer die Chance, durch moderne Dachfenster ungenutzten Dachraum in lichtdurchfluteten Wohnraum zu verwandeln.`,
      service: `Wir kennen die architektonischen Besonderheiten in der Region ${this.city.region} und sorgen dafür, dass sich Ihre neuen Fenster harmonisch in das Gesamtbild Ihres Hauses einfügen – inklusive perfektem Wärme- und Sonnenschutz.`
    };
  }
}