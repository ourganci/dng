// src/app/features/references/references.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  private seoService = inject(SeoService);

  projects = [
    {
      title: 'Dachsanierung Einfamilienhaus',
      location: 'Bad Kreuznach',
      year: '2024',
      service: 'Komplettsanierung',
      imageBefore: 'assets/images/references/dach11.jpg',
      imageAfter: 'assets/images/references/dach12.jpg',
      description: 'Vollständige Sanierung eines Einfamilienhauses mit energetischer Dämmung und neuer Eindeckung.'
    },
    {
      title: 'PV-Anlage Installation',
      location: 'Nahe Glan',
      year: '2024',
      service: 'Photovoltaik-Montage',
      imageBefore: 'assets/images/references/dach-21.jpg',
      imageAfter: 'assets/images/references/dach-22.jpg',
      description: 'Installation einer modernen PV-Anlage auf einem Flachdach mit 40 kWp Leistung.'
    },
    {
      title: 'Dachfenster-Einbau',
      location: 'Kirn',
      year: '2023',
      service: 'Fenstertausch',
      imageBefore: 'assets/images/references/dach-31.jpg',
      imageAfter: 'assets/images/references/dach-32.jpg',
      description: 'Austausch von 6 veralteten Dachfenstern gegen moderne, energieeffiziente Modelle.'
    },
    {
      title: 'Dachfenster-Einbau',
      location: 'Kirn',
      year: '2023',
      service: 'Fenstertausch',
      imageBefore: 'assets/images/references/dach-41.jpg',
      imageAfter: 'assets/images/references/dach-42.jpg',
      description: 'Austausch von 6 veralteten Dachfenstern gegen moderne, energieeffiziente Modelle.'
    }
  ];

  testimonials = [
    {
      name: 'Familie Müller',
      location: 'Bad Kreuznach',
      rating: 5,
      text: 'Hervorragende Arbeit! Das Team war pünktlich, professionell und hat unser Dach perfekt saniert. Wir sind sehr zufrieden!',
      date: 'März 2024'
    },
    {
      name: 'Herr Schmidt',
      location: 'Nahe Glan',
      rating: 5,
      text: 'Von der Beratung bis zur Ausführung alles top. Die PV-Anlage läuft einwandfrei und produziert wie versprochen Strom.',
      date: 'Januar 2024'
    },
    {
      name: 'Frau Weber',
      location: 'Kirn',
      rating: 5,
      text: 'Sehr zufrieden mit den neuen Dachfenstern. Endlich mehr Licht im Dachgeschoss. Schnelle und saubere Arbeit!',
      date: 'Oktober 2023'
    }
  ];


  images = [
    { src: '/assets/images/references/r1.webp', alt: 'PV Anlage', caption: 'Geschäftsstelle Volksbank Otterbach', title: 'PV-Anlage Lauterecken' },
    { src: '/assets/images/references/r2.webp', alt: 'PV Anlage', caption: 'Geschäftsstelle Volksbank Otterbach', title: 'PV-Anlage Lauterecken' },
    { src: '/assets/images/references/r3.webp', alt: 'PV Anlage Dintesheim', title: 'PV Anlage Dintesheim', caption: '36 Module Glas-Glas - 10kWh Speicher', },
    { src: '/assets/images/references/r4.webp', alt: 'PV Anlage Eisenberg', title: ' PV Anlage Eisenberg', caption: '15 Module Glas-Glas - 10kWh Speicher' },
    { src: '/assets/images/references/r5.webp', alt: 'PV Anlage Rehborn', title: 'PV Anlage Rehborn', caption: '26 Module Glas-Glas - 10kWh Speicher' },
    { src: '/assets/images/references/r6.webp', alt: 'PV Anlage Rehborn', title: 'PV Anlage Rehborn', caption: '26 Module Glas-Glas - 10kWh Speicher' },
    { src: '/assets/images/references/r7.webp', alt: 'PV Anlage Rehborn', title: 'PV Anlage Rehborn', caption: '32 Module Glas-Glas - 10kWh Speicher und Wallbox' },
    { src: '/assets/images/references/r8.webp', alt: 'PV Anlage Rehborn Wallbox', title: 'PV Anlage Rehborn', caption: '32 Module Glas-Glas - 10kWh Speicher und Wallbox' },
    { src: '/assets/images/references/r9.webp', alt: 'PV Anlage Gau-Bickelheim', title: 'PV Anlage Gau-Bickelheim', caption: '3-seitige Installation mit 30 Modulen Glas-Glas - 10kWh Speicher' },
  ];

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Referenzen – Unsere Projekte | DNG GmbH Dachdeckerei',
      description: 'Überzeugen Sie sich von unserer Arbeit. Sehen Sie Beispiele unserer Dachprojekte im Raum Nahe Glan, Bad Kreuznach und Kirn.',
      keywords: 'Dachdecker Referenzen, Projekte, Vorher Nachher, Kundenstimmen',
      url: 'https://www.dng-nahe-glan.de/referenzen'
    });
  }

  getRatingStars(rating: number): string[] {
    return Array(rating).fill('⭐');
  }
}
