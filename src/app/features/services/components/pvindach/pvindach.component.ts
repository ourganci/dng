// pvindach.component.ts
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';

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
      answer: 'PV Indach-Anlagen profitieren von denselben steuerlichen Vorteilen (0% USt, keine Einkommensteuer bis 30 kWp) und KfW-Förderungen für Speichersysteme wie herkömmliche PV-Anlagen. Wir beraten Sie individuell zu allen Optionen.',
      isOpen: false
    },
    {
      question: 'Ist eine PV Indach-Anlage besonders gut mit einer Dachsanierung oder einem Neubau kombinierbar?',
      answer: 'Absolut! Die PV Indach-Lösung ist ideal für Dachsanierungen und Neubauten, da die Module direkt die Dachhaut ersetzen. Dies spart Kosten und sorgt für eine ästhetisch ansprechende Integration. Als Dachdecker- und Elektrofachbetrieb koordinieren wir beides optimal.',
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
        answer: `Ja, wir installieren PV Indach-Anlagen in ${this.city.name} und der gesamten Region ${this.city.region}. Als Dachdecker- und Elektrofachbetrieb bieten wir persönliche Vor-Ort-Beratung und fachgerechte Montage.`,
        isOpen: false
      });
    } else {
      // Allgemeine Regions-FAQ
      this.faqs.push({
        question: 'In welchen Regionen sind Sie tätig?',
        answer: 'Als regional verwurzelter Fachbetrieb sind wir im Umkreis von ca. 50 km rund um Nahe-Glan für Sie im Einsatz. Wir realisieren PV Indach-Projekte in den Großräumen Mainz, Kaiserslautern und Bad Kreuznach sowie in allen umliegenden Gemeinden.',
        isOpen: false
      });
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
      ? `Dach und Solarenergie in einem System im Raum ${this.city.region}`
      : 'Dach und Solarenergie in einem System';
  }

  private setSeoTags(): void {
    if (this.city) {
      // SEO mit Stadt
      this.titleService.setTitle(
        `PV Indach ${this.city.name} – Ästhetische Solarlösung | DNG`
      );

      this.metaService.updateTag({
        name: 'description',
        content: `PV Indach-Lösung in ${this.city.name}: GSE In-Roof System vom Dachdecker & Elektriker. Ästhetisch integriert, sturmsicher, förderfähig. Ideal für Neubau & Sanierung im Raum ${this.city.region}.`
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: `PV Indach ${this.city.name} – GSE System | DNG GmbH`
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: `Indach-Photovoltaik in ${this.city.name}: Solarmodule als Dacheindeckung. Ästhetisch, effizient, langlebig. Komplettlösung vom Fachbetrieb. Jetzt beraten lassen!`
      });
    } else {
      // SEO ohne Stadt (Original)
      this.titleService.setTitle(
        'PV Indach-Lösungen Nahe Glan – Ästhetische Solarenergie | DNG'
      );

      this.metaService.updateTag({
        name: 'description',
        content: 'Entdecken Sie unsere PV Indach-Lösungen! Wir planen und installieren ästhetisch integrierte Photovoltaik-Anlagen, die sich nahtlos in Ihr Dach einfügen – für nachhaltige Energiegewinnung und eine moderne Optik.'
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: 'PV Indach-Lösungen Nahe Glan – Ästhetische Solarenergie | DNG'
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: 'Entdecken Sie unsere PV Indach-Lösungen! Wir planen und installieren ästhetisch integrierte Photovoltaik-Anlagen, die sich nahtlos in Ihr Dach einfügen – für nachhaltige Energiegewinnung und eine moderne Optik.'
      });
    }

    // Keywords bleiben umfangreich (bereits gut optimiert)
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Indach Photovoltaik, PV Indach, Indach PV Anlage, dachintegrierte Photovoltaik, BIPV, Solardach, ' +
        'ästhetische PV-Anlage, Solardachziegel, GSE In-Roof System, Indach Montagesystem, ' +
        'Indach vs Aufdach, Indach Photovoltaik Kosten, Indach PV Neubau, Dachsanierung mit Photovoltaik, ' +
        'Indach PV Nahe Glan, Indach Photovoltaik Bad Kreuznach, Indach PV Mainz, Indach PV Kaiserslautern'
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
