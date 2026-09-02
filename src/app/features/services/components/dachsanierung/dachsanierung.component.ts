// src/app/features/services/components/dachsanierung/dachsanierung.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { CITY_CONFIG, CityData } from '../../../city/city.config';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-dachsanierung',
  standalone: true,
  imports: [CtaButtonComponent, BreadcrumbComponent, RouterLink],
  templateUrl: './dachsanierung.component.html',
  styleUrl: './dachsanierung.component.scss'
})
export class DachsanierungComponent implements OnInit {

  city?: CityData;
  cityKey?: string;
  serviceKey = 'dachsanierung';
  serviceName = 'Dachsanierung';
  breadcrumbs: BreadcrumbItem[] = [];

  // Benachbarte Tier-A-Staedte fuer interne Verlinkung
  nearbyCities: { key: string; name: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {}

  faqs = [
    { question: 'Wann ist eine Dachsanierung notwendig?', answer: 'Eine Dachsanierung wird empfohlen bei sichtbaren Sch\u00e4den (Risse, fehlende Ziegel), bei Undichtigkeiten, starkem Moosbewuchs oder wenn Ihr Dach \u00e4lter als 30-40 Jahre ist. Auch bei unzureichender D\u00e4mmung ist eine energetische Sanierung sinnvoll.', isOpen: false },
    { question: 'Wie lange dauert eine Dachsanierung?', answer: 'Die Dauer h\u00e4ngt von der Dachgr\u00f6\u00dfe und dem Sanierungsumfang ab. Ein Einfamilienhaus (ca. 150m\u00b2) dauert in der Regel 1-3 Wochen. Wir erstellen Ihnen einen detaillierten Zeitplan.', isOpen: false },
    { question: 'Was kostet eine Dachsanierung?', answer: 'Die Kosten variieren je nach Dachfl\u00e4che, Material und Aufwand. F\u00fcr ein Einfamilienhaus k\u00f6nnen Sie mit 100-250\u20ac pro m\u00b2 rechnen. Kontaktieren Sie uns f\u00fcr ein kostenloses, unverbindliches Angebot.', isOpen: false },
    { question: 'Welche F\u00f6rderm\u00f6glichkeiten gibt es?', answer: 'F\u00fcr energetische Dachsanierungen gibt es F\u00f6rderungen \u00fcber die KfW und BAFA. Wir beraten Sie gerne zu den aktuellen F\u00f6rderprogrammen und unterst\u00fctzen Sie bei der Antragstellung.', isOpen: false },
    { question: 'F\u00fcr wen ist eine Dachsanierung sinnvoll?', answer: 'Eine Dachsanierung ist sinnvoll f\u00fcr: Privathaushalte, Hausverwaltungen und Bautr\u00e4ger, die Wert auf Energieeffizienz und Werterhalt legen.', isOpen: false }
  ];

  ngOnInit(): void {
    this.cityKey = this.route.snapshot.paramMap.get('city') || undefined;
    if (this.cityKey && CITY_CONFIG[this.cityKey]) {
      this.city = CITY_CONFIG[this.cityKey];

      // Stadtspezifische FAQs aus city.config laden
      if (this.city.cityFaqs?.length) {
        const validFaqs = this.city.cityFaqs
          .filter(f => !f.question.startsWith('TODO'))
          .map(f => ({ ...f, isOpen: false }));
        this.faqs.push(...validFaqs);
      }

      // Benachbarte Staedte fuer interne Verlinkung aufloesen
      this.nearbyCities = (this.city.nearbyApprovedCities || [])
        .filter(key => key !== this.cityKey && CITY_CONFIG[key])
        .map(key => ({ key, name: CITY_CONFIG[key].name }));
    }
    this.buildBreadcrumbs();
    this.applySeo();
  }

  private buildBreadcrumbs(): void {
    this.breadcrumbs = [
      { label: 'Startseite', url: '/' },
      { label: 'Leistungen', url: '/leistungen' },
      ...(this.city
        ? [{ label: 'Dachsanierung', url: '/leistungen/dachsanierung' }, { label: this.city.name }]
        : [{ label: 'Dachsanierung' }]
      )
    ];
  }

  private applySeo(): void {
    const cityName = this.city ? this.city.name : 'Nahe-Glan';
    const regionName = this.city ? this.city.region : 'der Region';
    const baseUrl = 'https://www.dng-nahe-glan.de/leistungen/dachsanierung';
    const canonicalUrl = this.cityKey ? `${baseUrl}/${this.cityKey}` : baseUrl;
    const seoTitle = this.city
      ? `Dachsanierung ${this.city.name} \u2013 Dach neu decken & d\u00e4mmen | DNG`
      : 'Dachsanierung Nahe Glan \u2013 Dach neu decken & d\u00e4mmen | DNG GmbH';
    const seoDesc = this.city
      ? `Professionelle Dachsanierung in ${this.city.name}. Energetische D\u00e4mmung & Neueindeckung im Raum ${this.city.region}. Jetzt KfW-F\u00f6rderung nutzen & Angebot erhalten!`
      : `Ihre Experten f\u00fcr Dachsanierung, D\u00e4mmung und Neueindeckung in Nahe Glan, Bad Kreuznach & Mainz. KfW-F\u00f6rderung m\u00f6glich. Jetzt beraten lassen!`;
    this.seoService.updateMetaTags({ title: seoTitle, description: seoDesc, url: canonicalUrl, keywords: `Dachsanierung ${cityName}, Dach d\u00e4mmen ${cityName}, Neueindeckung ${regionName}, Dachdecker ${cityName}, energetische Sanierung` });
  }

  get titleWithCity(): string { return this.city ? `${this.serviceName} in ${this.city.name}` : this.serviceName; }
  get subtitleWithCity(): string { return this.city ? `Dach neu decken & d\u00e4mmen im Raum ${this.city.region}` : 'Dach neu decken & d\u00e4mmen'; }
  toggleFaq(index: number): void { this.faqs[index].isOpen = !this.faqs[index].isOpen; }

  get regionalTextSanierung(): any {
    if (!this.city) return null;
    return {
      intro: `${this.city.name}, ${this.city.localHook}, ist ein typisches Einsatzgebiet f\u00fcr unsere Dachsanierungen \u2013 von der energetischen Erneuerung bis zur kompletten Neueindeckung.`,
      houseTypes: this.city.houseTypes && !this.city.houseTypes.startsWith('TODO') ? this.city.houseTypes : null,
      localFact: this.city.localFact && !this.city.localFact.startsWith('TODO') ? this.city.localFact : null,
      main: `Wir unterst\u00fctzen Sie in der gesamten Region ${this.city.region} dabei, W\u00e4rmeverluste zu stoppen und die Optik Ihres Hauses aufzuwerten. Dabei setzen wir auf langlebige Materialien, die exakt auf Ihre Anforderungen abgestimmt sind.`,
      closing: `Von der ersten Bestandsaufnahme in ${this.city.name} bis zur fachgerechten Ausf\u00fchrung erhalten Sie bei uns alles aus einer Hand \u2013 transparent, termingerecht und mit pers\u00f6nlichem Ansprechpartner vor Ort.`,
      distanceNote: this.city.distanceKm !== undefined && this.city.distanceKm > 0
        ? `${this.city.name} liegt ca. ${this.city.distanceKm}\u202fkm von unserem Firmensitz in Bad Kreuznach entfernt \u2013 wir sind regelm\u00e4\u00dfig in Ihrer Region im Einsatz.`
        : null
    };
  }
}
