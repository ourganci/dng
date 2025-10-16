// src/app/features/leistungen/services-overview/services-overview.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { ServiceDataService } from '../../../../core/services/service-data.service';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-services-overview',
  imports: [RouterLink, CtaButtonComponent],
  templateUrl: './services-overview.component.html',
  styleUrl: './services-overview.component.scss'
})
export class ServicesOverviewComponent implements OnInit {
  private serviceDataService = inject(ServiceDataService);
  private seoService = inject(SeoService);

  services = this.serviceDataService.getAllServices();

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Unsere Leistungen – DNG GmbH Dachdecker',
      description: 'Alle Dachdeckerleistungen im Überblick: Dachsanierung, PV-Anlagen, Dachfenster, Flachdach und mehr. Kostenlose Beratung.',
      keywords: 'Dachdeckerleistungen, Dachsanierung, PV-Anlagen, Dachfenster',
      url: 'https://www.dng-gmbh.de/leistungen'
    });
  }
}
