// src/app/features/services/components/service-detail/service-detail.component.ts

import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs'; // ✅ NEU
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { SeoService } from '../../../../core/services/seo.service';
import { SchemaMarkupService } from '../../../../core/services/schema-markup.service';
import { ServiceDataService, ServiceContent, ServiceBenefit } from '../../../../core/services/service-data.service';

interface BenefitWithSanitizedIcon extends ServiceBenefit {
  sanitizedIcon: SafeHtml;
}

@Component({
  selector: 'app-service-detail',
  imports: [CtaButtonComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent implements OnInit, OnDestroy { // ✅ OnDestroy hinzugefügt
  private route = inject(ActivatedRoute);
  private serviceDataService = inject(ServiceDataService);
  private seoService = inject(SeoService);
  private sanitizer = inject(DomSanitizer);

  private routeSubscription?: Subscription; // ✅ NEU

  benefitsWithIcons: BenefitWithSanitizedIcon[] = [];
  service: ServiceContent | undefined;

  ngOnInit(): void {
    // ✅ Subscribe to route params (reagiert auf Änderungen!)
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const serviceId = params.get('id');

      if (serviceId) {
        this.loadService(serviceId); // ✅ Extrahiere Logik in separate Methode
      }
    });
  }

  // ✅ Neue Methode: Service laden
  private loadService(serviceId: string): void {
    this.service = this.serviceDataService.getServiceById(serviceId);

    if (this.service) {
      // Icons sanitizen
      this.benefitsWithIcons = (this.service?.benefits || []).map(b => ({
        ...b,
        sanitizedIcon: this.sanitizer.bypassSecurityTrustHtml(b.iconSvg)
      }));

      // SEO Meta Tags aktualisieren
      this.seoService.updateMetaTags({
        title: this.service.title,
        description: this.service.description,
        keywords: this.service.keywords,
        url: `https://www.dng-gmbh.de/leistungen/${serviceId}`
      });

      // ✅ Scroll to Top bei Route-Wechsel
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ✅ Cleanup: Subscription beenden
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
