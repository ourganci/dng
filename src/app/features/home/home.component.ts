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
    { name: 'DEG', file: 'deg.png', alt: 'DEG Fachhändler für die Bedachungsbranche'},
    { name: 'Velux', file: 'velux.png', alt: 'Velux Dachfenster Hersteller'},
    { name: 'Beinbrech', file: 'beinbrech.png', alt: 'Beinbrech Bedachungsmaterialien'},
    { name: 'Creaton', file: 'creaton.png.webp', alt: 'Creaton Dachziegel Hersteller'},
    { name: 'Kemperol', file: 'kemperol.jpg.webp', alt: 'Kemperol Abdichtungssysteme'},
    { name: 'Prefa', file: 'prefa.svg', alt: 'Prefa Dach- und Fassadensysteme'},
    { name: 'Steiner Gerüstbau', file: 'gerustbau_steiner_new_s.webp', alt: 'Steiner Gerüstbau'},
    { name: 'Wienerberger', file: 'wienerberger.svg', alt: 'Wienerberger Ziegel'},
    { name: 'Würth', file: 'wuerth.svg', alt: 'Würth Befestigungstechnik'}
  ];

ngOnInit(): void {
  this.seoService.updateMetaTags({
    title: 'DNG GmbH | Dachdecker & Photovoltaik in Mainz, Bad Kreuznach & Ingelheim',
    description: 'Ihr Meisterbetrieb für Dachsanierung & Photovoltaik-Anlagen im Raum Mainz, Bad Kreuznach, Ingelheim & Kaiserslautern. PV-Anlagen, Dachfenster & Reparaturen aus einer Hand.',
    url: 'https://www.dng-nahe-glan.de',
    keywords: 'Dachdecker Mainz, Photovoltaik Bad Kreuznach, Dachsanierung Kaiserslautern, PV-Anlage Ingelheim, DNG GmbH',
  });
}


  // ⭐ hasImage()-Methode wird NICHT mehr benötigt!
  // Die Info ist direkt im service.hasImage verfügbar
}
