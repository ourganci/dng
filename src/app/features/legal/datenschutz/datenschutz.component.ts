// src/app/features/legal/datenschutz/datenschutz.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-datenschutz',
  imports: [],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Datenschutzerklärung – DNG GmbH',
      description: 'Datenschutzerklärung der DNG GmbH gemäß DSGVO.',
      keywords: 'Datenschutz, DSGVO, Datenschutzerklärung',
      url: 'https://www.dng-gmbh.de/datenschutz'
    });
  }
}
