// photovoltaik.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { CITY_CONFIG } from '../../../city/city.config';
import { SERVICE_CONFIG } from '../../services.config';
import { SeoService } from '../../../../core/services/seo.service';

interface City { name: string; region: string; localHook: string; solarHours: number; }

@Component({
  selector: 'app-photovoltaik',
  standalone: true,
  imports: [CtaButtonComponent, BreadcrumbComponent],
  templateUrl: './photovoltaik.component.html',
  styleUrl: './photovoltaik.component.scss'
})
export class PhotovoltaikComponent implements OnInit {

  city?: City;
  cityKey?: string;
  serviceKey = 'photovoltaik';
  serviceName = 'Photovoltaik';
  breadcrumbs: BreadcrumbItem[] = [];

  faqs = [
    { question: 'Wie lange dauert die Installation einer PV-Anlage?', answer: 'Die Installation dauert in der Regel 2-4 Tage, je nach Anlagengröße und Dachkomplexität. Inkl. Anmeldung und Inbetriebnahme rechnen Sie mit 4-8 Wochen.', isOpen: false },
    { question: 'Übernehmen Sie auch die Anmeldung beim Netzbetreiber?', answer: 'Ja, wir übernehmen sämtliche administrativen Aufgaben inklusive Netzanmeldung, Marktstammdatenregister und Koordination mit dem Energieversorger.', isOpen: false },
    { question: 'Welche Fördermöglichkeiten gibt es für PV-Anlagen?', answer: 'Aktuell profitieren Sie von steuerlichen Vorteilen (0% USt, keine Einkommensteuer bis 30 kWp) sowie KfW-Förderungen für Speichersysteme. Wir beraten Sie gerne.', isOpen: false },
    { question: 'Kann ich meine PV-Anlage mit einer Dachsanierung kombinieren?', answer: 'Absolut! Als Dachdecker- und Elektrofachbetrieb koordinieren wir beides optimal – oft mit Kostenvorteilen durch gebündelte Maßnahmen.', isOpen: false }
  ];

  constructor(private route: ActivatedRoute, private seoService: SeoService) {}

  ngOnInit(): void {
    this.cityKey = this.route.snapshot.paramMap.get('city') || undefined;
    if (this.cityKey && CITY_CONFIG[this.cityKey]) {
      this.city = CITY_CONFIG[this.cityKey];
      this.faqs.push({
        question: `Sind Sie auch in ${this.city.name} tätig?`,
        answer: `Ja, als regional verwurzelter Fachbetrieb sind wir in ${this.city.name} und der gesamten Region ${this.city.region} für Sie im Einsatz. Wir bieten persönliche Vor-Ort-Beratung und kurze Reaktionszeiten.`,
        isOpen: false
      });
    } else {
      this.faqs.push({
        question: 'In welchen Regionen sind Sie tätig?',
        answer: 'Als regional verwurzelter Fachbetrieb sind wir im Umkreis von ca. 50 km rund um Nahe-Glan für Sie im Einsatz. Wir realisieren Photovoltaik-Projekte in den Großräumen Mainz, Kaiserslautern und Bad Kreuznach sowie in Ingelheim, Bingen, Alzey und Idar-Oberstein.',
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
        ? [{ label: 'Photovoltaik', url: '/leistungen/photovoltaik' }, { label: this.city.name }]
        : [{ label: 'Photovoltaik' }]
      )
    ];
  }

  private applySeo(): void {
    const cityName = this.city ? this.city.name : 'Nahe-Glan';
    const regionName = this.city ? this.city.region : 'der Region';
    const baseUrl = 'https://www.dng-nahe-glan.de/leistungen/photovoltaik';
    const canonicalUrl = this.cityKey ? `${baseUrl}/${this.cityKey}` : baseUrl;
    const seoTitle = this.city
      ? `PV-Anlage ${this.city.name} – Komplettlösung mit Speicher & Wallbox | DNG`
      : 'PV-Anlagen Nahe Glan – Komplettlösung mit Speicher | DNG GmbH';
    const seoDesc = this.city
      ? `PV-Anlage in ${this.city.name} vom Dachdecker & Elektriker aus einer Hand. Inkl. Speicher, Wallbox & Netzanmeldung. Persönliche Beratung im Raum ${this.city.region}!`
      : `PV-Anlage vom Dachdecker & Elektriker aus einer Hand. Inkl. Speicher, Wallbox & Netzanmeldung. Jetzt Beratung in der Region Nahe-Glan anfordern!`;
    this.seoService.updateMetaTags({ title: seoTitle, description: seoDesc, url: canonicalUrl, keywords: `Photovoltaik ${cityName}, Solaranlage ${cityName}, PV-Speicher ${regionName}, PV-Anlage Meisenheim, Photovoltaik Bad Kreuznach, DNG Photovoltaik` });
  }

  get titleWithCity(): string { return this.city ? `${this.serviceName} & Solaranlagen in ${this.city.name}` : `${this.serviceName} & Solaranlagen`; }
  get subtitleWithCity(): string { return this.city ? `Komplettlösung mit Speicher & Wallbox im Raum ${this.city.region}` : 'Zukunftsorientierte Energielösungen für Ihr Zuhause'; }
  toggleFaq(index: number): void { this.faqs[index].isOpen = !this.faqs[index].isOpen; }

  get regionalText(): string {
    if (!this.city) {
      return `Von der ersten Planung in Bad Kreuznach bis zur fachgerechten Montage in Ingelheim, Mainz oder Kaiserslautern erhalten Sie bei uns nachhaltige Solarlösungen aus einer Hand. Direkt aus unserer Region für Ihr Zuhause.`;
    }
    return `${this.city.name}, als ${this.city.localHook}, bietet hervorragende Bedingungen für den Ausbau von Solarenergie. Mit ca. ${this.city.solarHours} Sonnenstunden im Jahr gehört die Region ${this.city.region} zu den sonnigsten Standorten für Ihre neue PV-Anlage. Von der ersten Planung direkt vor Ort bis zur Montage begleiten wir Sie in ${this.city.name} als erfahrener Partner bei der Energiewende.`;
  }
}
