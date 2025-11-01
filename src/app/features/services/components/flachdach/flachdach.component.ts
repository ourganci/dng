import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-flachdach',
  imports: [CtaButtonComponent],
  templateUrl: './flachdach.component.html',
  styleUrl: './flachdach.component.scss'
})
export class FlachdachComponent {

    constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
        {
          question: 'Welche Prüfverfahren gibt es?',
          answer: 'Wir nutzen Rauchgas-Verfahren, Dampferzeugungs-Verfahren und Rauchimpuls-Verfahren. Die Wahl hängt vom Dachaufbau, der Größe und den baulichen Gegebenheiten ab.',
          isOpen: false
        },
        {
          question: 'Wie lange dauert eine Flachdachprüfung?',
          answer: 'Je nach Dachgröße zwischen 2-6 Stunden. Bei sehr großen Hallen kann die Prüfung auch einen ganzen Tag dauern.',
          isOpen: false
        },
        {
          question: 'Für wen ist die Prüfung relevant?',
          answer: 'Ideal für Gewerbegebäude, Lagerhallen, Industriebauten, Tiefgaragen, Balkone und alle Flachdach-Konstruktionen. Besonders wichtig vor Ablauf der Gewährleistung oder bei Verdacht auf Undichtigkeiten.',
          isOpen: false
        },
        {
          question: 'Wird die Prüfung dokumentiert?',
          answer: 'Ja, Sie erhalten ein ausführliches Prüfprotokoll mit Fotos, Markierungen der undichten Stellen und Handlungsempfehlungen.',
          isOpen: false
        }
  ];

  ngOnInit(): void {
    this.titleService.setTitle('Flachdachdichtheitsprüfung Nahe Glan – Nach DIN-Norm');
    this.metaService.updateTag({ name: 'description', content: 'Für Gewerbeimmobilien, Hallen und Garagen: Wir prüfen Ihr Flachdach auf Dichtheit mit modernen Verfahren nach DIN-Norm und erstellen detaillierte Prüfprotokolle.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Flachdachdichtheitsprüfung Nahe Glan, Flachdach prüfen, DIN-Prüfung, Gewerbe, Hallen, Bad Kreuznach' });

    // Open Graph and Twitter Card tags for social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'Flachdachdichtheitsprüfung vom Fachbetrieb' });
    this.metaService.updateTag({ property: 'og:description', content: 'Für Gewerbeimmobilien, Hallen und Garagen: Wir prüfen Ihr Flachdach auf Dichtheit mit modernen Verfahren nach DIN-Norm und erstellen detaillierte Prüfprotokolle.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    // this.metaService.updateTag({ property: 'og:image', content: 'URL_to_your_image.jpg' }); // Optional: Add a relevant image URL
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
