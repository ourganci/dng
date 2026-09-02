// src/app/features/legal/impressum/impressum.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Impressum – DNG GmbH Dachdeckerfachbetrieb',
      description: 'Impressum und Kontaktdaten der DNG GmbH Dachdeckerfachbetrieb.',
      url: 'https://www.dng-nahe-glan.de/impressum'
    });
    this.seoService.setNoIndex();
  }
}
