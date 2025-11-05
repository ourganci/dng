import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { title } from 'process';

@Component({
  selector: 'app-dachfenster',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './dachfenster.component.html',
  styleUrl: './dachfenster.component.scss'
})
export class DachfensterComponent implements OnInit {

  openCard: number | null = null;

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Dachfenster Nahe Glan – Mehr Licht und Wohnkomfort');
    this.metaService.updateTag({ name: 'description', content: 'Dachfenster bringen natürliches Licht in Ihr Dachgeschoss und schaffen ein angenehmes Wohnklima. Wir sind Ihr Fachbetrieb für Einbau, Austausch und Reparatur von Dachfenstern in Nahe Glan und Umgebung.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Dachfenster Nahe Glan, Dachfenster einbauen, VELUX, Roto, Dachflächenfenster, Bad Kreuznach, Kirn' });

    // Open Graph and Twitter Card tags for social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'Dachfenster-Einbau vom Fachbetrieb' });
    this.metaService.updateTag({ property: 'og:description', content: 'Dachfenster bringen natürliches Licht in Ihr Dachgeschoss und schaffen ein angenehmes Wohnklima. Wir sind Ihr Fachbetrieb für Einbau, Austausch und Reparatur von Dachfenstern in Nahe Glan und Umgebung.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    // this.metaService.updateTag({ property: 'og:image', content: 'URL_to_your_image.jpg' }); // Optional: Add a relevant image URL
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  images = [
    { src: 'assets/images/services/Dach-Bad-3.webp', alt: 'Dachbad', caption: 'Optionaler Text', title: 'Modernes Dachbad' },
    { src: 'assets/images/services/Dach-Fenster-8.webp', alt: 'Dachfenster', caption: 'Optionaler Text', title: 'Modernes Dachfenster' },
    { src: 'assets/images/services/Dach-Kueche-1.webp', alt: 'Dachküche', caption: 'Optionaler Text', title: 'Moderne Dachküche' },
    { src: 'assets/images/services/Dach-Wohnen-3.webp', alt: 'Dachwohnraum', caption: 'Optionaler Text', title: 'Moderner Dachwohnraum' },
    { src: 'assets/images/services/Dach-Wohnen-8.webp', alt: 'Dachwohnraum', caption: 'Optionaler Text', title: 'Moderner Dachwohnraum' },
    { src: 'assets/images/services/Dach-Bad-7.webp', alt: 'Dachbad', caption: 'Optionaler Text', title: 'Modernes Dachbad' },
    { src: 'assets/images/services/Dach-Gaube-2.webp', alt: 'Dachgaube', caption: 'Optionaler Text', title: 'Moderne Dachgaube' },
    { src: 'assets/images/services/Dach-Kueche-4.webp', alt: 'Dachküche', caption: 'Optionaler Text', title: 'Moderne Dachküche' },
    { src: 'assets/images/services/Dach-Wohnen-7.webp', alt: 'Dachwohnraum', caption: 'Optionaler Text', title: 'Moderner Dachwohnraum' }
  ];

  currentSlide = 0;

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  goToSlide(i: number): void {
    this.currentSlide = i;
  }

  toggleCard(index: number): void {
    this.openCard = this.openCard === index ? null : index;
  }


}
