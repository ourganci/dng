import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';


@Component({
  selector: 'app-dachreparatur',
  imports: [CtaButtonComponent],
  templateUrl: './dachreparatur.component.html',
  styleUrl: './dachreparatur.component.scss'
})
export class DachreparaturComponent {

  constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
    {
      question: 'Wie schnell können Sie bei einem Notfall vor Ort sein?',
      answer: 'Bei Notfällen wie Sturmschäden oder undichten Stellen bemühen wir uns, innerhalb von 24 Stunden bei Ihnen zu sein. Kontaktieren Sie uns telefonisch für eine schnelle Reaktion.',
      isOpen: false
    },
    {
      question: 'Wie oft sollte ein Dach gewartet werden?',
      answer: 'Wir empfehlen eine professionelle Inspektion alle 2-3 Jahre. Bei älteren Dächern (20+ Jahre) oder nach starken Stürmen sollte jährlich kontrolliert werden.',
      isOpen: false
    },
    {
      question: 'Was beinhaltet eine Dachwartung?',
      answer: 'Bei der Wartung prüfen wir die Dacheindeckung, Abdichtungen, Regenrinnen, Dachfenster und alle kritischen Bereiche. Kleine Mängel beheben wir direkt, größere Schäden dokumentieren wir im Wartungsprotokoll.',
      isOpen: false
    },
    {
      question: 'Bieten Sie Wartungsverträge an?',
      answer: 'Ja, besonders für Hausverwaltungen, Gewerbeimmobilien und Mehrfamilienhäuser bieten wir individuelle Wartungsverträge mit festen Terminen an.',
      isOpen: false
    }
  ];

  ngOnInit(): void {
    this.titleService.setTitle('Dachreparaturen und Wartung Nahe Glan – Schnell und zuverlässig');
    this.metaService.updateTag({ name: 'description', content: 'Ein Dach braucht Pflege. Von der Notfall-Reparatur nach einem Sturm bis zur regelmäßigen Inspektion – wir kümmern uns um Ihr Dach und halten es in Top-Zustand.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Dachreparatur Nahe Glan, Dach reparieren, Notdienst, Sturmschaden, Dachwartung, Dachinspektion, Bad Kreuznach' });

    // Open Graph and Twitter Card tags for social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'Dachreparaturen und Wartung vom Fachbetrieb' });
    this.metaService.updateTag({ property: 'og:description', content: 'Ein Dach braucht Pflege. Von der Notfall-Reparatur nach einem Sturm bis zur regelmäßigen Inspektion – wir kümmern uns um Ihr Dach und halten es in Top-Zustand.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    // this.metaService.updateTag({ property: 'og:image', content: 'URL_to_your_image.jpg' }); // Optional: Add a relevant image URL
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
