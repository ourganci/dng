// dachfenster.component.ts
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';

interface City { name: string; region: string; }

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
      : this.serviceName;
  }

  get subtitleWithCity(): string {
    return this.city
      ? `Mehr Licht und Lebensqualität im Raum ${this.city.region}`
      : 'Mehr Licht, mehr Raum, mehr Lebensqualität';
  }

  private setSeoTags(): void {
    if (this.city) {
      // SEO mit Stadt
      this.titleService.setTitle(
        `${this.serviceName} ${this.city.name} – Einbau & Modernisierung | DNG GmbH`
      );

      this.metaService.updateTag({
        name: 'description',
        content: `Professioneller ${this.serviceName}-Einbau in ${this.city.name}. Velux-Partner. Mehr Licht & Wohnkomfort im Raum ${this.city.region}. Förderfähig bis 20%.`
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: `${this.serviceName} ${this.city.name} – Velux-Partner | DNG GmbH`
      });
    } else {
      // SEO ohne Stadt (Original)
      this.titleService.setTitle(
        'Dachfenster Einbau & Modernisierung – Velux-Partner | DNG GmbH'
      );

      this.metaService.updateTag({
        name: 'description',
        content: 'Professioneller Dachfenster-Einbau von Velux & anderen Herstellern. Mehr Licht, Luft & Komfort. Förderfähig bis 20%. Jetzt beraten lassen!'
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: 'Dachfenster vom Fachbetrieb – Velux-Partner | DNG GmbH'
      });
    }

    // Diese bleiben immer gleich
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Professioneller Dachfenster-Einbau und Modernisierung. Velux-Qualität, individuelle Beratung, förderfähig.'
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
}
