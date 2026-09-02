// hallenbeleuchtung.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { CITY_CONFIG } from '../../../city/city.config';
import { SERVICE_CONFIG } from '../../services.config';
import { SeoService } from '../../../../core/services/seo.service';

interface City { name: string; region: string; localHook: string; solarHours: number; }

@Component({
  selector: 'app-hallenbeleuchtung',
  standalone: true,
  imports: [CtaButtonComponent, BreadcrumbComponent],
  templateUrl: './hallenbeleuchtung.component.html',
  styleUrl: './hallenbeleuchtung.component.scss'
})
export class HallenbeleuchtungComponent implements OnInit {

  city?: City;
  cityKey?: string;
  serviceKey = 'hallenbeleuchtung';
  serviceName = 'Hallenbeleuchtung';
  breadcrumbs: BreadcrumbItem[] = [];

  faqs = [
    { question: 'Wie schnell amortisiert sich eine Umrüstung?', answer: 'Je nach Nutzungszeiten und Strompreis oft 1,5–4 Jahre. Wir rechnen das für Ihre Halle vor.', isOpen: false },
    { question: 'Kann bestehende Verkabelung/Tragschienen weiter genutzt werden?', answer: 'Häufig ja – besonders bei Lichtbandsystemen. Wir prüfen das vor Ort.', isOpen: false },
    { question: 'Ist tageslichtabhängige Steuerung sinnvoll?', answer: 'Ja, in Hallen mit Oberlichtern/Fassadenfenstern lassen sich zusätzliche 10–30 % sparen.', isOpen: false },
    { question: 'Was ist mit Not- und Sicherheitsbeleuchtung?', answer: 'Planen und liefern wir normgerecht inkl. Prüfkonzept – DIN EN 1838.', isOpen: false }
  ];

  constructor(private route: ActivatedRoute, private seoService: SeoService) {}

  ngOnInit(): void {
    this.cityKey = this.route.snapshot.paramMap.get('city') || undefined;
    if (this.cityKey && CITY_CONFIG[this.cityKey]) {
      this.city = CITY_CONFIG[this.cityKey];
      this.faqs.push({
        question: `Sind Sie auch in ${this.city.name} tätig?`,
        answer: `Ja, wir realisieren LED-Hallenbeleuchtung in ${this.city.name} und der gesamten Region ${this.city.region}. Von der Lichtplanung bis zur Montage – alles aus einer Hand.`,
        isOpen: false
      });
    } else {
      this.faqs.push({
        question: 'In welchen Regionen sind Sie tätig?',
        answer: 'Als Elektro- und Dachdeckerfachbetrieb sind wir im Umkreis von ca. 50 km rund um Nahe-Glan tätig. Wir realisieren Hallenbeleuchtungsprojekte in den Großräumen Mainz, Kaiserslautern und Bad Kreuznach.',
        isOpen: false
      });
    }
    this.buildBreadcrumbs();
    this.applySeo();
  }

  private buildBreadcrumbs(): void {
    this.breadcrumbs = [
      { label: 'Startseite', url: '/' },
      { label: 'Leistungen', url: '/leistungen' },
      ...(this.city
        ? [{ label: 'Hallenbeleuchtung', url: '/leistungen/hallenbeleuchtung' }, { label: this.city.name }]
        : [{ label: 'Hallenbeleuchtung' }]
      )
    ];
  }

  private applySeo(): void {
    const cityName = this.city ? this.city.name : 'Nahe-Glan';
    const regionName = this.city ? this.city.region : 'der Region';
    const baseUrl = 'https://www.dng-nahe-glan.de/leistungen/hallenbeleuchtung';
    const canonicalUrl = this.cityKey ? `${baseUrl}/${this.cityKey}` : baseUrl;
    const seoTitle = this.city
      ? `LED ${this.serviceName} ${this.city.name} – Planung & Montage | DNG`
      : 'Hallenbeleuchtung – Planung, LED-Umrüstung & Montage | DNG GmbH';
    const seoDesc = this.city
      ? `Professionelle LED ${this.serviceName} in ${this.city.name}. Lichtplanung nach DIN, Montage & Steuerung für Industrie, Lager & Werkstatt im Raum ${this.city.region}. Jetzt beraten lassen!`
      : `Effiziente LED-Hallenbeleuchtung für Produktion, Lager & Werkstatt. Planung mit Lichtberechnung, Montage & Steuerung. Ihr Fachbetrieb in der Region Nahe-Glan.`;
    this.seoService.updateMetaTags({ title: seoTitle, description: seoDesc, url: canonicalUrl, keywords: `LED Hallenbeleuchtung ${cityName}, Lichtplanung ${cityName}, Industriebeleuchtung ${regionName}, LED Umrüstung Halle, Hallenstrahler Montage` });
  }

  get titleWithCity(): string { return this.city ? `${this.serviceName} in ${this.city.name}` : this.serviceName; }
  get subtitleWithCity(): string { return this.city ? `LED-Lösungen für Industrie & Gewerbe im Raum ${this.city.region}` : 'Effizient, normgerecht und langlebig'; }
  toggleFaq(index: number): void { this.faqs[index].isOpen = !this.faqs[index].isOpen; }

  get regionalTextHalle(): any {
    if (!this.city) return null;
    return {
      intro: `${this.city.name}, ${this.city.localHook}, ist ein bedeutender Gewerbe- und Industriestandort in der Region ${this.city.region}. Viele Betriebe hier setzen bereits auf moderne LED-Technik, um Energiekosten dauerhaft zu senken.`,
      detail: `Als Elektro- und Dachdeckerfachbetrieb planen und installieren wir Ihre Hallenbeleuchtung in ${this.city.name} normgerecht nach DIN EN 12464 – von der Lichtberechnung bis zur Abnahme.`,
      closing: `Durch die hohe Sonneneinstrahlung in der Region (ca. ${this.city.solarHours} Sonnenstunden/Jahr) empfehlen wir zusätzlich tageslichtabhängige Steuerungen, die weitere 10–30 % Energie einsparen.`
    };
  }
}
