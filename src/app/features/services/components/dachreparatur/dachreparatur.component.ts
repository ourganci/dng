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
    this.titleService.setTitle('Dachsanierung Nahe Glan – professionell & nachhaltig');
    this.metaService.updateTag({ name: 'description', content: 'Ihr Dach ist in die Jahre gekommen? Feuchtigkeit, Wärmeverluste oder lockere Ziegel sind erste Anzeichen für Sanierungsbedarf. Als erfahrener Dachdeckerbetrieb aus Nahe Glan bieten wir Ihnen fachgerechte Dachsanierungen im Umkreis von 50 km – für Wohnhäuser, Gewerbeobjekte und Mehrfamilienhäuser.' });
    this.metaService.updateTag({ name: 'description', content: 'Dachsanierung vom Fachbetrieb in Nahe Glan. Jetzt Dach prüfen & Angebot erhalten. Energieeffizient, zuverlässig & regional.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Dachsanierung, Dachdecker Nahe Glan, Dach erneuern, Dach dämmen, Dach abdichten, Sanierung' });

    // Open Graph and Twitter Card tags for social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'Dachsanierung vom Fachbetrieb' });
    this.metaService.updateTag({ property: 'og:description', content: 'Ihr Dach ist in die Jahre gekommen? Feuchtigkeit, Wärmeverluste oder lockere Ziegel sind erste Anzeichen für Sanierungsbedarf. Als erfahrener Dachdeckerbetrieb aus Nahe Glan bieten wir Ihnen fachgerechte Dachsanierungen im Umkreis von 50 km – für Wohnhäuser, Gewerbeobjekte und Mehrfamilienhäuser.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    // this.metaService.updateTag({ property: 'og:image', content: 'URL_to_your_image.jpg' }); // Optional: Add a relevant image URL
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
