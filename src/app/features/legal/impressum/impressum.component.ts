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
      title: 'Impressum – DNG GmbH Dachdeckermeisterbetrieb',
      description: 'Impressum und Kontaktdaten der DNG GmbH Dachdeckermeisterbetrieb.',
      keywords: 'Impressum, Kontakt, Angaben',
      url: 'https://www.dng-gmbh.de/impressum'
    });
  }
}
