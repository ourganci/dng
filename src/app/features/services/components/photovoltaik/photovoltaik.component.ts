// photovoltaik.component.ts
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';

interface City { name: string; region: string; localHook: string; solarHours: number; }

@Component({
  selector: 'app-photovoltaik',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './photovoltaik.component.html',
  styleUrl: './photovoltaik.component.scss'
})
export class PhotovoltaikComponent implements OnInit {

  // City-Informationen
  city?: City;
  cityKey?: string;

  // Service-Informationen
  serviceName = 'Photovoltaik';

  faqs = [
    {
      question: 'Wie lange dauert die Installation einer PV-Anlage?',
      answer: 'Die Installation dauert in der Regel 2-4 Tage, je nach Anlagengröße und Dachkomplexität. Inkl. Anmeldung und Inbetriebnahme rechnen Sie mit 4-8 Wochen.',
      isOpen: false
    },
    {
      question: 'Übernehmen Sie auch die Anmeldung beim Netzbetreiber?',
      answer: 'Ja, wir übernehmen sämtliche administrativen Aufgaben inklusive Netzanmeldung, Marktstammdatenregister und Koordination mit dem Energieversorger.',
      isOpen: false
    },
    {
      question: 'Welche Fördermöglichkeiten gibt es für PV-Anlagen?',
      answer: 'Aktuell profitieren Sie von steuerlichen Vorteilen (0% USt, keine Einkommensteuer bis 30 kWp) sowie KfW-Förderungen für Speichersysteme. Wir beraten Sie gerne.',
      isOpen: false
    },
    {
      question: 'Kann ich meine PV-Anlage mit einer Dachsanierung kombinieren?',
      answer: 'Absolut! Als Dachdecker- und Elektrofachbetrieb koordinieren wir beides optimal – oft mit Kostenvorteilen durch gebündelte Maßnahmen.',
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

      // Stadt-spezifische FAQ hinzufügen
      this.faqs.push({
        question: `Sind Sie auch in ${this.city.name} tätig?`,
        answer: `Ja, als regional verwurzelter Fachbetrieb sind wir in ${this.city.name} und der gesamten Region ${this.city.region} für Sie im Einsatz. Wir bieten persönliche Vor-Ort-Beratung und kurze Reaktionszeiten.`,
        isOpen: false
      });
    } else {
      // Allgemeine Regions-FAQ
      this.faqs.push({
        question: 'In welchen Regionen sind Sie tätig?',
        answer: 'Als regional verwurzelter Fachbetrieb sind wir im Umkreis von ca. 50 km rund um Nahe-Glan für Sie im Einsatz. Wir realisieren Photovoltaik-Projekte in den Großräumen Mainz, Kaiserslautern und Bad Kreuznach sowie in Ingelheim, Bingen, Alzey und Idar-Oberstein. Auch in Gemeinden wie Kirn, Meisenheim, Wörrstadt und Rockenhausen sind wir Ihr persönlicher Ansprechpartner.',
        isOpen: false
      });
    }

    // SEO dynamisch setzen
    this.setSeoTags();
  }

  // Helper-Methods für Template
  get titleWithCity(): string {
    return this.city
      ? `${this.serviceName} & Solaranlagen in ${this.city.name}`
      : `${this.serviceName} & Solaranlagen`;
  }

  get subtitleWithCity(): string {
    return this.city
      ? `Komplettlösung mit Speicher & Wallbox im Raum ${this.city.region}`
      : 'Zukunftsorientierte Energielösungen für Ihr Zuhause';
  }

  get regionalText(): string {
    if (!this.city) {
      return `Von der ersten Planung in Bad Kreuznach bis zur fachgerechten Montage in Ingelheim, 
            Mainz oder Kaiserslautern erhalten Sie bei uns nachhaltige Solarlösungen aus einer Hand. 
            Direkt aus unserer Region für Ihr Zuhause.`;
    }

    // Hier wird es individuell:
    const intro = `${this.city.name}, als ${this.city.localHook}, bietet hervorragende Bedingungen für den Ausbau von Solarenergie.`;
    const sunFact = `Mit ca. ${this.city.solarHours} Sonnenstunden im Jahr gehört die Region ${this.city.region} zu den sonnigsten Standorten für Ihre neue PV-Anlage.`;
    const closing = `Von der ersten Planung direkt vor Ort bis zur Montage begleiten wir Sie in ${this.city.name} als erfahrener Partner bei der Energiewende.`;
    return `${intro} ${sunFact} ${closing}`;
  }

  private setSeoTags(): void {
    if (this.city) {
      // SEO mit Stadt - Hochoptimiert
      this.titleService.setTitle(
        `PV-Anlage ${this.city.name} – Komplettlösung mit Speicher & Wallbox | DNG`
      );

      this.metaService.updateTag({
        name: 'description',
        content: `PV-Anlage in ${this.city.name} vom Dachdecker & Elektriker aus einer Hand. Inkl. Speicher, Wallbox, Indach & Netzanmeldung. KfW-Förderung möglich. Persönliche Beratung im Raum ${this.city.region}!`
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: `PV-Anlage ${this.city.name} – Speicher & Wallbox inklusive | DNG GmbH`
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: `Photovoltaik-Komplettlösung in ${this.city.name}. Dachdecker + Elektriker = alles aus einer Hand. Inkl. Speicher, Wallbox, Förderberatung. Jetzt Vor-Ort-Termin vereinbaren!`
      });
    } else {
      // SEO ohne Stadt (Original - bereits optimiert)
      this.titleService.setTitle(
        'PV-Anlagen Nahe Glan – Komplettlösung mit Speicher | DNG GmbH'
      );

      this.metaService.updateTag({
        name: 'description',
        content: 'PV-Anlage vom Dachdecker & Elektriker aus einer Hand. Inkl. Speicher, Wallbox, Indach & Netzanmeldung. KfW-Förderung möglich. Jetzt Beratung in Nahe Glan!'
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: 'PV-Anlage mit Speicher & Wallbox – Alles aus einer Hand | DNG GmbH'
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: 'PV-Anlage vom Dachdecker & Elektriker aus einer Hand. Inkl. Speicher, Wallbox, Indach & Netzanmeldung. KfW-Förderung möglich. Jetzt Beratung in Nahe Glan!'
      });
    }

    // Keywords bleiben umfangreich (bereits sehr gut optimiert)
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'PV-Anlage Nahe Glan, Photovoltaik Nahe Glan, Solaranlage Bad Kreuznach, PV-Anlage Mainz, Photovoltaik Kaiserslautern, ' +
        'Stromspeicher, Wallbox installieren, PV Indach, KfW-Förderung Photovoltaik, Solaranlage Komplettlösung, ' +
        'PV-Anlage vom Dachdecker, eigene Monteure, ohne Subunternehmer, PV mit Dachsanierung kombinieren, ' +
        'Netzanmeldung PV, Marktstammdatenregister, Eigenverbrauch maximieren, Notstrom Solar'
    });

    // Diese bleiben immer gleich
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
}
