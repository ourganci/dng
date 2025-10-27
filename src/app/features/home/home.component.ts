// src/app/features/home/home.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaButtonComponent } from '../../shared/components/cta-button/cta-button.component';
import { SeoService } from '../../core/services/seo.service';
import { ServiceDataService } from '../../core/services/service-data.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CtaButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private seoService = inject(SeoService);
  private serviceDataService = inject(ServiceDataService);

  // ⭐ Nutze getServicesOverview() - enthält hasImage bereits
  services = this.serviceDataService.getServicesOverview();

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
      title: 'DNG GmbH – Dachdeckerfachbetrieb für Nahe Glan & Umgebung',
      description: 'Ihr Dachdecker-Fachbetrieb für Dachsanierung, PV-Anlagen, Dachfenster und mehr.',
      keywords: 'Dachdecker Nahe Glan, Dachsanierung, PV-Anlagen',
      url: 'https://www.dng-gmbh.de'
    });
  }

  // ⭐ hasImage()-Methode wird NICHT mehr benötigt!
  // Die Info ist direkt im service.hasImage verfügbar
}
