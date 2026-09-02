// regenrinnen.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { CITY_CONFIG } from '../../../city/city.config';
import { SERVICE_CONFIG } from '../../services.config';
import { SeoService } from '../../../../core/services/seo.service';

interface City { name: string; region: string; localHook: string; solarHours: number; }

@Component({
  selector: 'app-regenrinnen',
  standalone: true,
  imports: [CtaButtonComponent, BreadcrumbComponent],
  templateUrl: './regenrinnen.component.html',
  styleUrl: './regenrinnen.component.scss'
})
export class RegenrinnenComponent implements OnInit {

  city?: City;
  cityKey?: string;
  serviceKey = 'regenrinnen';
  serviceName = 'Regenrinnen';
  breadcrumbs: BreadcrumbItem[] = [];

  faqs = [
    { question: 'Wie oft sollten Regenrinnen gereinigt werden?', answer: 'Wir empfehlen eine Reinigung mindestens zweimal jährlich – idealerweise im Frühjahr und nach dem Laubfall im Herbst. Bei Immobilien mit hohem Baumbestand sind häufigere Kontrollen ratsam.', isOpen: false },
    { question: 'Was kostet eine professionelle Rinnenreinigung?', answer: 'Die Kosten richten sich nach Länge, Verschmutzung und Erreichbarkeit. Als regionaler Fachbetrieb bieten wir faire Konditionen an. Kontaktieren Sie uns für ein unverbindliches Angebot.', isOpen: false },
    { question: 'Welches Material ist am besten für Regenrinnen geeignet?', answer: 'Kupfer bietet die höchste Langlebigkeit (50+ Jahre). Zink ist der robuste Standard. Aluminium überzeugt durch Korrosionsbeständigkeit, während Kunststoff eine preiswerte Option darstellt.', isOpen: false },
    { question: 'Lohnt sich die Nachrüstung eines Laubschutzes?', answer: 'Definitiv. Ein professionell montierter Laubschutz verhindert, dass grober Schmutz in die Rinne gelangt. Das reduziert den Reinigungsaufwand und schützt vor teuren Verstopfungen.', isOpen: false }
  ];

  constructor(private route: ActivatedRoute, private seoService: SeoService) {}

  ngOnInit(): void {
    this.cityKey = this.route.snapshot.paramMap.get('city') || undefined;
    if (this.cityKey && CITY_CONFIG[this.cityKey]) {
      this.city = CITY_CONFIG[this.cityKey];
    }
    this.buildBreadcrumbs();
    this.applySeo();
  }

  private buildBreadcrumbs(): void {
    this.breadcrumbs = [
      { label: 'Startseite', url: '/' },
      { label: 'Leistungen', url: '/leistungen' },
      ...(this.city
        ? [{ label: 'Regenrinnen', url: '/leistungen/regenrinnen' }, { label: this.city.name }]
        : [{ label: 'Regenrinnen' }]
      )
    ];
  }

  private applySeo(): void {
    const cityName = this.city ? this.city.name : 'Nahe-Glan';
    const regionName = this.city ? this.city.region : 'der Region';
    const baseUrl = 'https://www.dng-nahe-glan.de/leistungen/regenrinnen';
    const canonicalUrl = this.cityKey ? `${baseUrl}/${this.cityKey}` : baseUrl;
    const seoTitle = this.city
      ? `${this.serviceName} ${this.city.name} – Reinigung, Reparatur & Laubschutz | DNG`
      : 'Regenrinnen Nahe Glan – Reinigung, Reparatur & Laubschutz | DNG';
    const seoDesc = this.city
      ? `${this.serviceName} reinigen, reparieren & austauschen in ${this.city.name}. Zink, Kupfer, Alu & Laubschutz. Fachgerechte Dachentwässerung im Raum ${this.city.region}. Jetzt anfragen!`
      : `Regenrinnen-Service vom Meisterbetrieb: Reinigung, Reparatur & Austausch. Zink, Kupfer, Alu & Laubschutzsysteme in Nahe-Glan & Umgebung. Jetzt Termin sichern!`;
    this.seoService.updateMetaTags({ title: seoTitle, description: seoDesc, url: canonicalUrl, keywords: `Regenrinnen ${cityName}, Dachrinnenreinigung ${cityName}, Dachrinne reparieren ${regionName}, Laubschutz montieren, Dachentwässerung ${cityName}` });
  }

  get titleWithCity(): string { return this.city ? `${this.serviceName} in ${this.city.name}` : `${this.serviceName}- und Fensterarbeiten`; }
  get subtitleWithCity(): string { return this.city ? `Reinigung, Reparatur & Wartung im Raum ${this.city.region}` : 'Für ein sicheres und zuverlässiges Zuhause'; }
  toggleFaq(index: number): void { this.faqs[index].isOpen = !this.faqs[index].isOpen; }

  get regionalTextRegenrinne(): any {
    if (!this.city) return null;
    return {
      intro: `Eine funktionierende Dachentwässerung ist der wichtigste Schutz für die Fassade Ihres Hauses in ${this.city.name}. Als ${this.city.localHook} sind Gebäude hier oft wechselnden Witterungsverhältnissen ausgesetzt – mit durchschnittlich ${this.city.solarHours} Sonnenstunden im Jahr und entsprechend intensiven Regenereignissen.`,
      detail: `In der gesamten Region ${this.city.region} sorgen wir dafür, dass Regenwasser sicher abgeleitet wird – bevor Feuchtigkeit die Bausubstanz angreifen kann.`,
      service: `Ob Reinigung, Reparatur oder komplette Erneuerung: Wir sind in ${this.city.name} schnell vor Ort, um Ihr Dach winterfest und sicher zu machen.`
    };
  }
}
