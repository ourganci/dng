// src/app/features/legal/agb/agb.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agb.component.html',
  styleUrls: ['./agb.component.scss']
})
export class AgbComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'AGB – DNG GmbH Dachdeckerfachbetrieb',
      description: 'Allgemeine Geschäftsbedingungen der DNG GmbH.',
      url: 'https://www.dng-nahe-glan.de/agb'
    });
    this.seoService.setNoIndex();
  }
}
