// pvindach.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { CITY_CONFIG } from '../../../city/city.config';
import { SERVICE_CONFIG } from '../../services.config';
import { SeoService } from '../../../../core/services/seo.service';

interface City { name: string; region: string; localHook: string; solarHours: number; }

@Component({
  selector: 'app-pvindach',
  standalone: true,
  imports: [CtaButtonComponent, BreadcrumbComponent],
  templateUrl: './pvindach.component.html',
  styleUrl: './pvindach.component.scss'
})
export class PvindachComponent implements OnInit {

  city?: City;
  cityKey?: string;
  serviceKey = 'pv-indach';
  serviceName = 'Indach-Photovoltaik';
  breadcrumbs: BreadcrumbItem[] = [];

  faqs = [
    { question: 'Wie lange dauert die Installation einer PV Indach-Anlage?', answer: 'Die Installation einer PV Indach-Anlage dauert in der Regel 3-5 Tage, da die Module direkt in die Dachhaut integriert werden. Inklusive Anmeldung und Inbetriebnahme sollten Sie mit 6-10 Wochen rechnen.', isOpen: false },
    { question: 'Übernehmen Sie auch die Anmeldung der PV Indach-Anlage beim Netzbetreiber?', answer: 'Ja, wir kümmern uns um alle administrativen Schritte, einschließlich der Netzanmeldung und der Koordination mit Ihrem Energieversorger, speziell für Ihre Indach-Lösung.', isOpen: false },
    { question: 'Gibt es spezielle Fördermöglichkeiten für PV Indach-Anlagen?', answer: 'PV Indach-Anlagen profitieren von denselben steuerlichen Vorteilen (0% USt, keine Einkommensteuer bis 30 kWp) und KfW-Förderungen für Speichersysteme wie herkömmliche PV-Anlagen.', isOpen: false },
    { question: 'Ist eine PV Indach-Anlage gut mit einer Dachsanierung kombinierbar?', answer: 'Absolut! Die PV Indach-Lösung ist ideal für Dachsanierungen und Neubauten, da die Module direkt die Dachhaut ersetzen. Dies spart Kosten und sorgt für eine ästhetisch ansprechende Integration.', isOpen: false }
  ];

  constructor(private route: ActivatedRoute, private seoService: SeoService) {}

  ngOnInit(): void {
    this.cityKey = this.route.snapshot.paramMap.get('city') || undefined;
    if (this.cityKey && CITY_CONFIG[this.cityKey]) {
      this.city = CITY_CONFIG[this.cityKey];
      this.faqs.push({
        question: `Sind Sie auch in ${this.city.name} tätig?`,
        answer: `Ja, wir installieren PV Indach-Anlagen in ${this.city.name} und der gesamten Region ${this.city.region}. Als Dachdecker- und Elektrofachbetrieb bieten wir persönliche Vor-Ort-Beratung.`,
        isOpen: false
      });
    } else {
      this.faqs.push({
        question: 'In welchen Regionen sind Sie tätig?',
        answer: 'Wir sind im Umkreis von ca. 50 km rund um Nahe-Glan für Sie im Einsatz, inklusive der Großräume Mainz, Kaiserslautern und Bad Kreuznach.',
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
        ? [{ label: 'PV-Indach', url: '/leistungen/pv-indach' }, { label: this.city.name }]
        : [{ label: 'PV-Indach' }]
      )
    ];
  }

  private applySeo(): void {
    const cityName = this.city ? this.city.name : 'Nahe-Glan';
    const regionName = this.city ? this.city.region : 'der Region';
    const baseUrl = 'https://www.dng-nahe-glan.de/leistungen/pv-indach';
    const canonicalUrl = this.cityKey ? `${baseUrl}/${this.cityKey}` : baseUrl;
    const seoTitle = this.city
      ? `PV Indach ${this.city.name} – Ästhetische Solarlösung | DNG`
      : 'PV Indach-Lösungen Nahe Glan – Ästhetische Solarenergie | DNG';
    const seoDesc = this.city
      ? `PV Indach-Lösung in ${this.city.name}: GSE In-Roof System vom Fachbetrieb. Ästhetisch integriert, sturmsicher & förderfähig. Jetzt Beratung im Raum ${this.city.region} vereinbaren!`
      : `Entdecken Sie unsere PV Indach-Lösungen! Ästhetisch integrierte Photovoltaik-Anlagen (GSE System) für Neubau & Sanierung in der Region Nahe-Glan. Jetzt informieren!`;
    this.seoService.updateMetaTags({ title: seoTitle, description: seoDesc, url: canonicalUrl, keywords: `Indach Photovoltaik ${cityName}, PV Indach ${cityName}, GSE In-Roof System ${regionName}, ästhetische PV Anlage, Solardachziegel, dachintegrierte Photovoltaik` });
  }

  get titleWithCity(): string { return this.city ? `${this.serviceName} in ${this.city.name}` : this.serviceName; }
  get subtitleWithCity(): string { return this.city ? `Dach und Solarenergie in einem System im Raum ${this.city.region}` : 'Dach und Solarenergie in einem System'; }
  toggleFaq(index: number): void { this.faqs[index].isOpen = !this.faqs[index].isOpen; }

  get regionalTextPvIndach(): any {
    if (!this.city) return null;
    return {
      intro: `${this.city.name}, ${this.city.localHook}, bietet mit durchschnittlich ${this.city.solarHours} Sonnenstunden im Jahr ideale Voraussetzungen für eine dachintegrierte PV-Anlage.`,
      detail: `Das GSE In-Roof System ersetzt konventionelle Ziegel vollständig und fügt sich in der Region ${this.city.region} harmonisch in das Stadtbild ein – ohne aufgesetzte Module, mit maximaler Sturmsicherheit.`,
      closing: `Von der Planung bis zur Netzanmeldung begleiten wir Sie in ${this.city.name} als Dachdecker- und Elektrofachbetrieb aus einer Hand.`
    };
  }
}
