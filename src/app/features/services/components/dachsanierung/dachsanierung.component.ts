import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';

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
  serviceName = 'Dachsanierung';

  constructor(private titleService: Title, private metaService: Meta, private route: ActivatedRoute) { }

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
      answer: `
        Eine Dachsanierung ist sinnvoll für:
        - Privathaushalte (Eigentümer & Bauherren)
        - Hausverwaltungen & Immobiliengesellschaften
        - Bauträger & Sanierungsfirmen
      `,
      isOpen: false
    }
  ];

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
      ? `Dach neu decken & dämmen im Raum ${this.city.region}`
      : 'Dach neu decken & dämmen';
  }

  private setSeoTags(): void {
    if (this.city) {
      // SEO mit Stadt
      this.titleService.setTitle(
        `${this.serviceName} ${this.city.name} – Dach neu decken & dämmen | DNG GmbH`
      );

      this.metaService.updateTag({
        name: 'description',
        content: `Professionelle ${this.serviceName} in ${this.city.name}. Energetische Dämmung und Neueindeckung im Raum ${this.city.region}. KfW-Förderung möglich.`
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: `${this.serviceName} ${this.city.name} – KfW-Förderung möglich | DNG GmbH`
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: `Professionelle ${this.serviceName} in ${this.city.name}. KfW-Förderung möglich. Energieeffizient dämmen, neu decken & Heizkosten sparen.`
      });
    } else {
      // SEO ohne Stadt (Original)
      this.titleService.setTitle(
        'Dachsanierung Nahe Glan – Dach neu decken & dämmen | DNG GmbH'
      );

      this.metaService.updateTag({
        name: 'description',
        content: 'Professionelle Dachsanierung, energetische Dämmung und Neueindeckung in Nahe Glan, Bad Kreuznach Mainz, Kaiserslautern und Kirn. KfW-Förderung möglich.'
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: 'Dachsanierung vom Fachbetrieb – KfW-Förderung möglich | DNG GmbH'
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: 'Professionelle Dachsanierung vom Fachbetrieb in Nahe Glan. KfW-Förderung möglich. Energieeffizient dämmen, neu decken & Heizkosten sparen. Jetzt Angebot erhalten!'
      });
    }

    // Diese bleiben immer gleich
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Dachsanierung Nahe Glan, Dachsanierung Bad Kreuznach, ...' // deine Keywords
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

  get regionalTextSanierung(): any {
    if (!this.city) return null;

    return {
      intro: `Eine hochwertige Dachsanierung sichert den Werterhalt Ihrer Immobilie in ${this.city.name} nachhaltig ab.`,
      main: `Wir unterstützen Sie in der gesamten Region ${this.city.region} dabei, Wärmeverluste zu stoppen und die Optik Ihres Hauses aufzuwerten. Dabei setzen wir auf langlebige Materialien, die exakt auf ihre Anforderungen abgestimmt sind.`,
      closing: `Von der ersten Bestandsaufnahme in ${this.city.name} bis zur fachgerechten Ausführung erhalten Sie bei uns alles aus einer Hand.`
    };
  }

}
