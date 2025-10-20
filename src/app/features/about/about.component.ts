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

  team = [
    {
      name: 'Max Mustermann',
      role: 'Dachdeckermeister & Geschäftsführer',
      image: 'assets/images/team/max-mustermann.jpg',
      description: 'Mit über 20 Jahren Erfahrung im Dachdeckerhandwerk'
    },
    {
      name: 'Sarah Schmidt',
      role: 'Büro & Kundenbetreuung',
      image: 'assets/images/team/sarah-schmidt.jpg',
      description: 'Ihre erste Anlaufstelle für alle Anfragen'
    },
    {
      name: 'Thomas Weber',
      role: 'Dachdeckergeselle',
      image: 'assets/images/team/thomas-weber.jpg',
      description: 'Spezialist für Dachsanierung und Reparaturen'
    }
  ];

  values = [
    {
      icon: '🎯',
      title: 'Qualität',
      description: 'Höchste Handwerkskunst und geprüfte Materialien'
    },
    {
      icon: '🤝',
      title: 'Zuverlässigkeit',
      description: 'Pünktlich, ehrlich und verbindlich'
    },
    {
      icon: '📍',
      title: 'Regional',
      description: 'Verwurzelt in Nahe Glan seit über 20 Jahren'
    },
    {
      icon: '💚',
      title: 'Nachhaltigkeit',
      description: 'Umweltbewusste Lösungen für langlebige Dächer'
    }
  ];

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Über uns – DNG GmbH Dachdeckermeisterbetrieb Nahe Glan',
      description: 'Lernen Sie unser Team kennen. Als Dachdeckermeisterbetrieb sind wir seit über 20 Jahren Ihr zuverlässiger Partner im Raum Nahe Glan.',
      keywords: 'Dachdecker Team, Meisterbetrieb, Nahe Glan, Über uns',
      url: 'https://www.dng-gmbh.de/ueber-uns'
    });
  }
}
