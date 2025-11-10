import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-pvindach',
  imports: [CtaButtonComponent],
  templateUrl: './pvindach.component.html',
  styleUrl: './pvindach.component.scss'
})
export class PvindachComponent {

  constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
    {
      question: 'Wie lange dauert die Installation einer PV Indach-Anlage?',
      answer: 'Die Installation einer PV Indach-Anlage dauert in der Regel 3-5 Tage, da die Module direkt in die Dachhaut integriert werden. Inklusive Anmeldung und Inbetriebnahme sollten Sie mit 6-10 Wochen rechnen.',
      isOpen: false
    },
    {
      question: 'Übernehmen Sie auch die Anmeldung der PV Indach-Anlage beim Netzbetreiber?',
      answer: 'Ja, wir kümmern uns um alle administrativen Schritte, einschließlich der Netzanmeldung und der Koordination mit Ihrem Energieversorger, speziell für Ihre Indach-Lösung.',
      isOpen: false
    },
    {
      question: 'Gibt es spezielle Fördermöglichkeiten für PV Indach-Anlagen?',
      answer: 'PV Indach-Anlagen profitieren von denselben steuerlichen Vorteilen (0% USt, keine Einkommensteuer bis 30 kWp) und KfW-Förderungen für Speichersysteme wie herkömmliche PV-Anlagen. Wir beraten Sie individuell zu allen Optionen.',
      isOpen: false
    },
    {
      question: 'Ist eine PV Indach-Anlage besonders gut mit einer Dachsanierung oder einem Neubau kombinierbar?',
      answer: 'Absolut! Die PV Indach-Lösung ist ideal für Dachsanierungen und Neubauten, da die Module direkt die Dachhaut ersetzen. Dies spart Kosten und sorgt für eine ästhetisch ansprechende Integration. Als Dachdecker- und Elektrofachbetrieb koordinieren wir beides optimal.',
      isOpen: false
    }
  ];

  ngOnInit(): void {
    this.titleService.setTitle('PV Indach-Lösungen Nahe Glan – Ästhetische Solarenergie');
    this.metaService.updateTag({ name: 'description', content: 'Entdecken Sie unsere PV Indach-Lösungen! Wir planen und installieren ästhetisch integrierte Photovoltaik-Anlagen, die sich nahtlos in Ihr Dach einfügen – für nachhaltige Energiegewinnung und eine moderne Optik.' });
    this.metaService.updateTag({ name: 'keywords', content: 'PV Indach, Indach Photovoltaik, Solardachziegel, ästhetische PV-Anlage, dachintegrierte Solaranlage, Nahe Glan, Bad Kreuznach, Kirn' });

    // Open Graph and Twitter Card tags for social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'PV Indach-Lösungen Nahe Glan – Ästhetische Solarenergie' });
    this.metaService.updateTag({ property: 'og:description', content: 'Entdecken Sie unsere PV Indach-Lösungen! Wir planen und installieren ästhetisch integrierte Photovoltaik-Anlagen, die sich nahtlos in Ihr Dach einfügen – für nachhaltige Energiegewinnung und eine moderne Optik.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    // this.metaService.updateTag({ property: 'og:image', content: 'URL_to_your_image.jpg' }); // Optional: Add a relevant image URL
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
