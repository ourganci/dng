// src/app/features/services/components/service-detail/service-detail.component.ts
import { Component, OnInit, inject, signal, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // ← NEU
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { SeoService } from '../../../../core/services/seo.service';
import { SchemaMarkupService } from '../../../../core/services/schema-markup.service';
import { ServiceDataService, ServiceContent, ServiceBenefit } from '../../../../core/services/service-data.service';

// Erweitertes Interface mit sanitiziertem Icon
interface BenefitWithSanitizedIcon extends ServiceBenefit {
  sanitizedIcon: SafeHtml;
}

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, CtaButtonComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
// Bleibt wie gehabt - hasImage ist bereits im Service enthalten
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private serviceDataService = inject(ServiceDataService);
  private seoService = inject(SeoService);
  private sanitizer = inject(DomSanitizer); // ← NEU
  benefitsWithIcons: BenefitWithSanitizedIcon[] = []; // ← NEU

  service: ServiceContent | undefined;

  ngOnInit(): void {
    const serviceId = this.route.snapshot.paramMap.get('id');
    if (serviceId) {
      this.service = this.serviceDataService.getServiceById(serviceId);

      if (this.service) {
        // ⭐ Icons sanitizen beim Laden
        this.benefitsWithIcons = this.service.benefits.map(benefit => ({
          ...benefit,
          sanitizedIcon: this.sanitizer.bypassSecurityTrustHtml(benefit.iconSvg)
        }));

        this.seoService.updateMetaTags({
          title: this.service.title,
          description: this.service.description,
          keywords: this.service.keywords,
          url: `https://www.dng-gmbh.de/leistungen/${serviceId}`
        });
      }
    }
  }

}
