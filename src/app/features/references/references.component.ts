import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

interface ReferenceImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

interface ReferenceProject {
  title: string;
  location: string;
  description: string;
  facts: string[];
  images: ReferenceImage[];
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  private seoService = inject(SeoService);

  readonly images: ReferenceImage[] = [
    { src: '/assets/images/references/r1.webp', alt: 'Photovoltaikanlage auf der Geschäftsstelle Volksbank Otterbach', title: 'Geschäftsstelle Volksbank Otterbach', caption: 'PV-Anlage in Lauterecken' },
    { src: '/assets/images/references/r2.webp', alt: 'Weitere Ansicht der Photovoltaikanlage der Volksbank Otterbach', title: 'Geschäftsstelle Volksbank Otterbach', caption: 'PV-Anlage in Lauterecken' },
    { src: '/assets/images/references/r3.webp', alt: 'Photovoltaikanlage auf einem Wohnhaus in Dintesheim', title: 'PV-Anlage Dintesheim', caption: '36 Glas-Glas-Module und 10-kWh-Speicher' },
    { src: '/assets/images/references/r4.webp', alt: 'Photovoltaikanlage auf einem Wohnhaus in Eisenberg', title: 'PV-Anlage Eisenberg', caption: '15 Glas-Glas-Module und 10-kWh-Speicher' },
    { src: '/assets/images/references/r5.webp', alt: 'Photovoltaikanlage auf einem Wohnhaus in Rehborn', title: 'PV-Anlage Rehborn', caption: '26 Glas-Glas-Module und 10-kWh-Speicher' },
    { src: '/assets/images/references/r6.webp', alt: 'Detailansicht der Photovoltaikanlage in Rehborn', title: 'PV-Anlage Rehborn', caption: '26 Glas-Glas-Module und 10-kWh-Speicher' },
    { src: '/assets/images/references/r7.webp', alt: 'Photovoltaikanlage mit Speicher und Wallbox in Rehborn', title: 'PV-Anlage Rehborn', caption: '32 Glas-Glas-Module, 10-kWh-Speicher und Wallbox' },
    { src: '/assets/images/references/r8.webp', alt: 'Wallbox der Photovoltaikanlage in Rehborn', title: 'PV-Anlage Rehborn', caption: 'System mit Speicher und Wallbox' },
    { src: '/assets/images/references/r9.webp', alt: 'Dreiseitig installierte Photovoltaikanlage in Gau-Bickelheim', title: 'PV-Anlage Gau-Bickelheim', caption: '30 Glas-Glas-Module und 10-kWh-Speicher' }
  ];

  readonly projects: ReferenceProject[] = [
    { title: 'Geschäftsstelle Volksbank Otterbach', location: 'Lauterecken', description: 'Photovoltaik auf einer großflächigen Gewerbeimmobilie. Die Anlage nutzt die vorhandenen Dachflächen für eine unauffällige, gleichmäßige Modulbelegung.', facts: ['Photovoltaik', 'Gewerbeobjekt'], images: [this.images[0], this.images[1]] },
    { title: 'PV-Anlage Dintesheim', location: 'Dintesheim', description: 'Eine kompakte Anlage auf dem geneigten Dach eines Wohnhauses – kombiniert mit einem Speicher für eine bessere Nutzung des selbst erzeugten Stroms.', facts: ['36 Glas-Glas-Module', '10-kWh-Speicher'], images: [this.images[2]] },
    { title: 'PV-Anlage Eisenberg', location: 'Eisenberg', description: 'Die Modulfläche wurde passend zur verfügbaren Dachgeometrie angeordnet und als geschlossenes, ruhiges Feld umgesetzt.', facts: ['15 Glas-Glas-Module', '10-kWh-Speicher'], images: [this.images[3]] },
    { title: 'PV-Anlage Rehborn', location: 'Rehborn', description: 'Zwei Ansichten einer Anlage auf einem Wohngebäude. Die Belegung fügt sich klar in die bestehende Dachfläche ein.', facts: ['26 Glas-Glas-Module', '10-kWh-Speicher'], images: [this.images[4], this.images[5]] },
    { title: 'PV-System mit Wallbox', location: 'Rehborn', description: 'Photovoltaikanlage, Stromspeicher und Wallbox als abgestimmtes Gesamtsystem für Stromerzeugung, Speicherung und Elektromobilität.', facts: ['32 Glas-Glas-Module', '10-kWh-Speicher', 'Wallbox'], images: [this.images[6], this.images[7]] },
    { title: 'Dreiseitige Installation', location: 'Gau-Bickelheim', description: 'Drei geeignete Dachseiten wurden in die Planung einbezogen, um die vorhandene Fläche umfassend für die Stromerzeugung zu nutzen.', facts: ['30 Glas-Glas-Module', '10-kWh-Speicher'], images: [this.images[8]] }
  ];

  selectedImage?: ReferenceImage;

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Referenzen – Photovoltaik-Projekte | DNG GmbH',
      description: 'Ausgewählte Photovoltaik-Projekte der DNG GmbH in Lauterecken, Dintesheim, Eisenberg, Rehborn und Gau-Bickelheim.',
      keywords: 'DNG Referenzen, Photovoltaik Projekte, PV-Anlagen Nahe Glan',
      url: 'https://www.dng-nahe-glan.de/referenzen'
    });
  }

  openImage(image: ReferenceImage): void { this.selectedImage = image; }
  closeImage(): void { this.selectedImage = undefined; }
  projectNumber(index: number): string { return String(index + 1).padStart(2, '0'); }
}
