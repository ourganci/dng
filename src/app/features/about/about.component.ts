// src/app/features/about/about.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Über uns – DNG GmbH Dachdeckerfachbetrieb Nahe Glan',
      description: 'Lernen Sie Thomas Schneider und sein Team kennen. Als Dachdeckerfachbetrieb sind wir Ihr zuverlässiger Partner im Raum Nahe Glan.',
      keywords: 'Dachdecker Team, Fachbetrieb, Thomas Schneider, Nahe Glan, Über uns',
      url: 'https://www.dng-nahe-glan.de/ueber-uns'
    });
  }
}
