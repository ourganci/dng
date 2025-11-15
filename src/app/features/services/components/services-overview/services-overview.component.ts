// src/app/features/services/components/services-overview/services-overview.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { SeoService } from '../../../../core/services/seo.service';
import { ServiceDataService } from '../../../../core/services/service-data.service';

@Component({
  selector: 'app-services-overview',
  imports: [RouterLink, CtaButtonComponent],
  templateUrl: './services-overview.component.html',
  styleUrl: './services-overview.component.scss'
})
export class ServicesOverviewComponent implements OnInit {
  private seoService = inject(SeoService);
  private serviceDataService = inject(ServiceDataService);

    // ⭐ Nutzt getServicesOverview() - enthält bereits hasImage!
  services = this.serviceDataService.getServicesOverview();

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Unsere Leistungen – DNG GmbH Dachdeckerfachbetrieb',
      description: 'Alle Dacharbeiten aus einer Hand: Dachsanierung, Dachfenster, Reparaturen, PV-Anlagen und mehr. Ihr Experte für Nahe Glan und Umgebung.',
      keywords: 'Dachdecker Leistungen, Dachsanierung, Dachfenster, PV-Anlagen, Flachdach',
      url: 'https://www.dng-nahe-glan.de/leistungen'
    });
  }
}
