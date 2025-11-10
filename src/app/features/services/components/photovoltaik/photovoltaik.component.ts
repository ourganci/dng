import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-photovoltaik',
  imports: [CtaButtonComponent],
  templateUrl: './photovoltaik.component.html',
  styleUrl: './photovoltaik.component.scss'
})
export class PhotovoltaikComponent {

  constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
    {
      question: 'Wie lange dauert die Installation einer PV-Anlage?',
      answer: 'Die Installation dauert in der Regel 2-4 Tage, je nach Anlagengröße und Dachkomplexität. Inkl. Anmeldung und Inbetriebnahme rechnen Sie mit 4-8 Wochen.',
      isOpen: false
    },
    {
      question: 'Übernehmen Sie auch die Anmeldung beim Netzbetreiber?',
      answer: 'Ja, wir übernehmen sämtliche administrativen Aufgaben inklusive Netzanmeldung, Marktstammdatenregister und Koordination mit dem Energieversorger.',
      isOpen: false
    },
    {
      question: 'Welche Fördermöglichkeiten gibt es für PV-Anlagen?',
      answer: 'Aktuell profitieren Sie von steuerlichen Vorteilen (0% USt, keine Einkommensteuer bis 30 kWp) sowie KfW-Förderungen für Speichersysteme. Wir beraten Sie gerne.',
      isOpen: false
    },
    {
      question: 'Kann ich meine PV-Anlage mit einer Dachsanierung kombinieren?',
      answer: 'Absolut! Als Dachdecker- und Elektrofachbetrieb koordinieren wir beides optimal – oft mit Kostenvorteilen durch gebündelte Maßnahmen.',
      isOpen: false
    }
  ];

  ngOnInit(): void {
    this.titleService.setTitle('PV-Anlagen Nahe Glan – Solarenergie für Ihr Dach');
    this.metaService.updateTag({ name: 'description', content: 'Nutzen Sie die Kraft der Sonne! Wir planen und installieren moderne Photovoltaik-Anlagen auf Ihrem Dach – für nachhaltige Energiegewinnung, Unabhängigkeit und Kosteneinsparung.' });
    this.metaService.updateTag({ name: 'keywords', content: 'PV-Anlagen Nahe Glan, Photovoltaik, Solaranlage, Sonnenenergie, Stromspeicher, KfW-Förderung, Bad Kreuznach, Kirn' });

    // Open Graph and Twitter Card tags for social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'PV-Anlagen Nahe Glan – Solarenergie für Ihr Dach' });
    this.metaService.updateTag({ property: 'og:description', content: 'Nutzen Sie die Kraft der Sonne! Wir planen und installieren moderne Photovoltaik-Anlagen auf Ihrem Dach – für nachhaltige Energiegewinnung, Unabhängigkeit und Kosteneinsparung.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    // this.metaService.updateTag({ property: 'og:image', content: 'URL_to_your_image.jpg' }); // Optional: Add a relevant image URL
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
