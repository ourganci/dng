// pvindach.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';
import { SERVICE_CONFIG } from '../../services.config';
import { SeoService } from '../../../../core/services/seo.service';

interface City { name: string; region: string; }

@Component({
  selector: 'app-pvindach',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './pvindach.component.html',
  styleUrl: './pvindach.component.scss'
})
export class PvindachComponent implements OnInit {

  // City-Informationen
  city?: City;
  cityKey?: string;

  // Service-Informationen
  serviceKey = 'pv-indach'; // Key passend zur SERVICE_CONFIG
  serviceName = 'Indach-Photovoltaik';

  faqs = [
    {
      question: 'Wie lange dauert die Installation einer PV Indach-Anlage?',
      answer: 'Die Installation einer PV Indach-Anlage dauert in der Regel 3-5 Tage, da die Module direkt in die Dachhaut integriert werden. Inklusive Anmeldung und Inbetriebnahme sollten Sie mit 6-10 Wochen rechnen.',
      isOpen: false
    },
    {
      question: 'Übernehmen Sie auch die Anmeldung der PV Indach-Anlage beim Netzbetreiber?',
      answer: 'Ja, wir kümmern uns um alle administrativen Schritte, einschließlich der Netzanmeldung und der Koordination mit Ihrem Energieversorger, speziell für Ihre Indach-Lösung.',
      isOpen: false
    },
    {
      question: 'Gibt es spezielle Fördermöglichkeiten für PV Indach-Anlagen?',
      answer: 'PV Indach-Anlagen profitieren von denselben steuerlichen Vorteilen (0% USt, keine Einkommensteuer bis 30 kWp) und KfW-Förderungen für Speichersysteme wie herkömmliche PV-Anlagen.',
      isOpen: false
    },
    {
      question: 'Ist eine PV Indach-Anlage gut mit einer Dachsanierung kombinierbar?',
      answer: 'Absolut! Die PV Indach-Lösung ist ideal für Dachsanierungen und Neubauten, da die Module direkt die Dachhaut ersetzen. Dies spart Kosten und sorgt für eine ästhetisch ansprechende Integration.',
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

    // SEO zentral über den SeoService setzen
    this.applySeo();
  }

  private applySeo(): void {
    const service = SERVICE_CONFIG[this.serviceKey];
    const cityName = this.city ? this.city.name : 'Nahe-Glan';
    const regionName = this.city ? this.city.region : 'der Region';

    // Aufbau der URL für den Canonical Link
    const baseUrl = 'https://www.dng-nahe-glan.de/leistungen/pv-indach';
    const canonicalUrl = this.cityKey ? `${baseUrl}/${this.cityKey}` : baseUrl;

    // Dynamische Texte basierend auf City-Status
    const seoTitle = this.city 
      ? `PV Indach ${this.city.name} – Ästhetische Solarlösung | DNG`
      : 'PV Indach-Lösungen Nahe Glan – Ästhetische Solarenergie | DNG';

    const seoDesc = this.city
      ? `PV Indach-Lösung in ${this.city.name}: GSE In-Roof System vom Fachbetrieb. Ästhetisch integriert, sturmsicher & förderfähig. Jetzt Beratung im Raum ${this.city.region} vereinbaren!`
      : `Entdecken Sie unsere PV Indach-Lösungen! Ästhetisch integrierte Photovoltaik-Anlagen (GSE System) für Neubau & Sanierung in der Region Nahe-Glan. Jetzt informieren!`;

    this.seoService.updateMetaTags({
      title: seoTitle,
      description: seoDesc,
      url: canonicalUrl,
      keywords: `Indach Photovoltaik ${cityName}, PV Indach ${cityName}, GSE In-Roof System ${regionName}, ästhetische PV Anlage, Solardachziegel, dachintegrierte Photovoltaik`
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
      ? `Dach und Solarenergie in einem System im Raum ${this.city.region}`
      : 'Dach und Solarenergie in einem System';
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}