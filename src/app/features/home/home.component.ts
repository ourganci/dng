// src/app/features/home/home.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaButtonComponent } from '../../shared/components/cta-button/cta-button.component';
import { SeoService } from '../../core/services/seo.service';
import { SchemaMarkupService } from '../../core/services/schema-markup.service';
import { ServiceDataService } from '../../core/services/service-data.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CtaButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private seoService = inject(SeoService);
  private schemaService = inject(SchemaMarkupService);
  private serviceDataService = inject(ServiceDataService);

  services = this.serviceDataService.getServicesOverview();

  // Liste der verfügbaren Bilder
  private availableImages = new Set<string>([
    'dachsanierung',
    'dachfenster',
    // Füge weitere hinzu sobald Bilder da sind:
    'dachreparaturen',
    'regenrinnen',
    'flachdachpruefung',
    'pv-anlagen',
    'hallenbeleuchtung'
  ]);

  // Add this property to your HomeComponent class
  partnerLogos = [
    { name: 'Creaton', file: 'creaton.png.webp' },
    // { name: 'GreenCoat', file: 'GreenCoat.png.webp' },
    { name: 'Kemperol', file: 'kemperol.jpg.webp' },
    { name: 'Prefa', file: 'prefa.svg' },
    // { name: 'Rheinzink', file: 'rheinzink.svg' },
    { name: 'Roto Frank', file: 'Roto_Frank.svg' },
    { name: 'Soprema', file: 'soprema.svg' },
    { name: 'Subnova', file: 'subnova.svg' },
    { name: 'VMZinc', file: 'vmzinc.svg' },
    // { name: 'Velux', file: 'velux.png' },
    { name: 'Wienerberger', file: 'wienerberger.svg' },
    { name: 'Wolf Gerüstbau', file: 'wolf-geruestbau-logo.png.webp' },
    { name: 'Würth', file: 'wuerth.svg' }
  ];

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'DNG GmbH – Dachdeckermeisterbetrieb für Nahe Glan & Umgebung',
      description: 'Ob Dachsanierung, Flachdachprüfung, PV-Anlagen oder Dachfenster-Einbau – wir sind Ihr Dachdecker-Fachbetrieb im Umkreis von 50 km rund um Nahe Glan.',
      keywords: 'Dachdecker Nahe Glan, Dachsanierung, Dachfenster, PV-Anlagen, Flachdachprüfung',
      url: 'https://www.dng-gmbh.de'
    });

    this.schemaService.addLocalBusinessSchema();
  }

  // Prüfe ob Bild verfügbar ist
  hasImage(serviceId: string): boolean {
    return this.availableImages.has(serviceId);
  }
}
