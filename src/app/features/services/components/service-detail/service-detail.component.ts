// src/app/features/services/components/service-detail/service-detail.component.ts
import { Component, OnInit, inject, signal, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { SeoService } from '../../../../core/services/seo.service';
import { SchemaMarkupService } from '../../../../core/services/schema-markup.service';
import { ServiceDataService, ServiceContent } from '../../../../core/services/service-data.service';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, CtaButtonComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);
  private schemaService = inject(SchemaMarkupService);
  private serviceDataService = inject(ServiceDataService);

  service = signal<ServiceContent | undefined>(undefined);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const serviceId = params['id'];
      const serviceData = this.serviceDataService.getServiceById(serviceId);
      
      if (serviceData) {
        this.service.set(serviceData);
        
        // SEO Meta Tags setzen
        this.seoService.updateMetaTags({
          title: serviceData.title,
          description: serviceData.description,
          keywords: serviceData.keywords,
          url: `https://www.dng-gmbh.de/leistungen/${serviceId}`
        });

        // Service Schema hinzufügen
        this.schemaService.addServiceSchema(
          serviceData.headline,
          serviceData.description
        );

        // Breadcrumb Schema hinzufügen
        this.schemaService.addBreadcrumbSchema([
          { name: 'Startseite', url: 'https://www.dng-gmbh.de' },
          { name: 'Leistungen', url: 'https://www.dng-gmbh.de/leistungen' },
          { name: serviceData.headline, url: `https://www.dng-gmbh.de/leistungen/${serviceId}` }
        ]);
      }
    });
  }

  ngOnDestroy(): void {
    // Schema beim Verlassen der Seite entfernen
    this.schemaService.removeAllSchemas();
  }
}
