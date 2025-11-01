import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-regenrinnen',
  imports: [CtaButtonComponent],
  templateUrl: './regenrinnen.component.html',
  styleUrl: './regenrinnen.component.scss'
})
export class RegenrinnenComponent {

  constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
    {
      question: 'Wie oft sollten Regenrinnen gereinigt werden?',
      answer: 'Mindestens zweimal jährlich – idealerweise im Frühjahr und Herbst. Bei vielen Bäumen in der Nähe empfehlen wir häufigere Kontrollen.',
      isOpen: false
    },
    {
      question: 'Was kostet eine Rinnenreinigung?',
      answer: 'Die Kosten hängen von der Länge und Zugänglichkeit der Rinnen ab. In der Regel liegen die Kosten bei 2-5€ pro laufendem Meter. Kontaktieren Sie uns für ein genaues Angebot.',
      isOpen: false
    },
    {
      question: 'Welches Material ist am besten für Regenrinnen?',
      answer: 'Kupfer ist sehr langlebig (50+ Jahre), aber teurer. Zink ist robust und preiswert. Aluminium ist leicht und korrosionsbeständig. Kunststoff ist kostengünstig, aber weniger langlebig. Wir beraten Sie gerne.',
      isOpen: false
    },
    {
      question: 'Lohnt sich ein Laubschutz?',
      answer: 'Ja, besonders bei vielen Bäumen in der Nähe. Ein Laubschutzgitter reduziert den Reinigungsaufwand erheblich und verhindert Verstopfungen.',
      isOpen: false
    }
  ];

  ngOnInit(): void {
    this.titleService.setTitle('Regenrinnen Nahe Glan – Installation, Reparatur und Reinigung');
    this.metaService.updateTag({ name: 'description', content: 'Regenrinnen sind essentiell für den Schutz Ihres Hauses vor Feuchtigkeit und Wasserschäden. Wir installieren, reparieren und warten Regenrinnen sowie Fallrohre im Raum Nahe Glan.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Regenrinnen Nahe Glan, Rinnenreinigung, Fallrohre, Laubschutz, Dachrinnen, Bad Kreuznach, Kirn' });

    // Open Graph and Twitter Card tags for social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'Regenrinnen vom Fachbetrieb' });
    this.metaService.updateTag({ property: 'og:description', content: 'Regenrinnen sind essentiell für den Schutz Ihres Hauses vor Feuchtigkeit und Wasserschäden. Wir installieren, reparieren und warten Regenrinnen sowie Fallrohre im Raum Nahe Glan.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    // this.metaService.updateTag({ property: 'og:image', content: 'URL_to_your_image.jpg' }); // Optional: Add a relevant image URL
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
