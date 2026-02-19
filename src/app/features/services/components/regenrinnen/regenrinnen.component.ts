// regenrinnen.component.ts
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';

interface City { name: string; region: string; localHook: string; solarHours: number; }

@Component({
  selector: 'app-regenrinnen',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './regenrinnen.component.html',
  styleUrl: './regenrinnen.component.scss'
})
export class RegenrinnenComponent implements OnInit {

  // City-Informationen
  city?: City;
  cityKey?: string;

  // Service-Informationen
  serviceName = 'Regenrinnen';

  faqs = [
    {
      question: 'Wie oft sollten Regenrinnen gereinigt werden?',
      answer: 'Wir empfehlen eine Reinigung mindestens zweimal jährlich – idealerweise im Frühjahr und nach dem Laubfall im Herbst. Bei Immobilien mit hohem Baumbestand sind häufigere Kontrollen ratsam, um Verstopfungen und Überlaufen zu verhindern.',
      isOpen: false
    },
    {
      question: 'Was kostet eine professionelle Rinnenreinigung?',
      answer: 'Die Kosten richten sich nach der Gesamtlänge, dem Verschmutzungsgrad und der Erreichbarkeit der Rinnen. Als regionaler Fachbetrieb bieten wir faire Konditionen an. Kontaktieren Sie uns für ein unverbindliches Angebot für Ihr Objekt.',
      isOpen: false
    },
    {
      question: 'Welches Material ist am besten für Regenrinnen geeignet?',
      answer: 'Kupfer bietet die höchste Langlebigkeit (50+ Jahre), ist aber kostspieliger. Zink ist der robuste Standard für viele Wohnhäuser. Aluminium überzeugt durch Korrosionsbeständigkeit und Farbauswahl, während Kunststoff eine preiswerte, aber kurzlebigere Option darstellt.',
      isOpen: false
    },
    {
      question: 'Lohnt sich die Nachrüstung eines Laubschutzes?',
      answer: 'Definitiv. Ein professionell montiertes Laubschutzgitter verhindert, dass grober Schmutz in die Rinne und das Fallrohr gelangt. Das reduziert den Reinigungsaufwand erheblich und schützt langfristig vor teuren Verstopfungen im Kanalsystem.',
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
      : `${this.serviceName}- und Fensterarbeiten`;
  }

  get subtitleWithCity(): string {
    return this.city
      ? `Reinigung, Reparatur & Wartung im Raum ${this.city.region}`
      : 'Für ein sicheres und zuverlässiges Zuhause';
  }

  private setSeoTags(): void {
    if (this.city) {
      // SEO mit Stadt
      this.titleService.setTitle(
        `${this.serviceName} ${this.city.name} – Reinigung, Reparatur & Laubschutz | DNG`
      );

      this.metaService.updateTag({
        name: 'description',
        content: `${this.serviceName} reinigen, reparieren & austauschen in ${this.city.name}. Zink, Kupfer, Alu & Kunststoff. Inkl. Laubschutzsysteme im Raum ${this.city.region}.`
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: `${this.serviceName} ${this.city.name} – Meisterbetrieb | DNG GmbH`
      });
    } else {
      // SEO ohne Stadt (Original)
      this.titleService.setTitle(
        'Regenrinnen Nahe Glan – Reinigung, Reparatur & Laubschutz | DNG'
      );

      this.metaService.updateTag({
        name: 'description',
        content: 'Regenrinnen reinigen, reparieren & austauschen vom Meisterbetrieb. Zink, Kupfer, Alu & Kunststoff. Inkl. Laubschutzsysteme & Fallrohre. Jetzt Service buchen!'
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: 'Regenrinnen-Service – Reinigung, Reparatur & Laubschutz | DNG GmbH'
      });
    }

    // Keywords bleiben gleich (da sehr umfangreich und regional schon enthalten)
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Regenrinnen Nahe Glan, Dachrinnen Nahe Glan, Regenrinne installieren, Dachrinne montieren, Regenrinnen anbringen, Dachrinne einbauen, neue Regenrinne, neue Dachrinne, ' +
        'Rinnenreinigung, Dachrinnenreinigung, Regenrinne reinigen, verstopfte Regenrinne, Laubschutz Dachrinne, Fallrohr, Dachentwässerung, ' +
        'Regenrinnen Bad Kreuznach, Dachrinnen Kirn, Regenrinnen Mainz, Dachrinnen Kaiserslautern'
    });

    // Diese bleiben immer gleich
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Regenrinnen reinigen, reparieren & austauschen vom Meisterbetrieb. Zink, Kupfer, Alu & Kunststoff. Inkl. Laubschutzsysteme & Fallrohre. Jetzt Service buchen!'
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

  get regionalTextRegenrinne(): any {
    if (!this.city) return null;

    return {
      intro: `Eine funktionierende Dachentwässerung ist der wichtigste Schutz für die Fassade Ihres Hauses in ${this.city.name}. Als ${this.city.localHook} sind Gebäude hier oft wechselnden Witterungsverhältnissen ausgesetzt.`,
      detail: `In der gesamten Region ${this.city.region} sorgen wir dafür, dass Regenwasser sicher abgeleitet wird – bevor Feuchtigkeit die Bausubstanz angreifen kann.`,
      service: `Ob Reinigung, Reparatur oder komplette Erneuerung: Wir sind in ${this.city.name} schnell vor Ort, um Ihr Dach winterfest und sicher zu machen.`
    };
  }
}
