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
this.metaService.updateTag({ 
  name: 'keywords', 
  content:
    // Hauptkeywords - Produkt/Technik
    'Indach Photovoltaik, PV Indach, Indach PV Anlage, Indach Solaranlage, dachintegrierte Photovoltaik, gebäudeintegrierte Photovoltaik, BIPV, Solardach, Photovoltaik Dachintegration, Solarmodule Indach, Indach System, ' +
    
    // Ästhetik & Design (hohe Nachfrage)
    'ästhetische PV-Anlage, ästhetische Solaranlage, unauffällige Photovoltaik, Solardachziegel, Solardachpfannen, Photovoltaik als Dacheindeckung, PV-Module ohne Ziegel, rahmenlose Solarmodule, ' +
    
    // Vergleich & Entscheidungshilfe
    'Indach vs Aufdach, Indach oder Aufdach Photovoltaik, Unterschied Indach Aufdach, Indach Photovoltaik Vorteile, Indach Photovoltaik Nachteile, ' +
    
    // Kosten & Wirtschaftlichkeit (Top-Suchanfrage)
    'Indach Photovoltaik Kosten, Indach PV Kosten pro qm, Indach Photovoltaik Preis, Indach PV Anlage Kosten, was kostet Indach Photovoltaik, Indach Photovoltaik Förderung, ' +
    
    // Anwendungsfälle
    'Indach PV Neubau, Indach Photovoltaik Altbau, Dachsanierung mit Photovoltaik, Dachsanierung mit PV, Dacherneuerung mit Solar, Solardach statt Ziegel, PV bei Dachsanierung, ' +
    
    // Technische Begriffe
    'Indach Montagesystem, GSE In-Roof System, Indach Befestigungssystem, PV Schienensystem Indach, dachintegrierte Solarmodule, Indach PV Abdichtung, ' +
    
    // Fachbetrieb & Dienstleistung
    'Indach Photovoltaik Dachdecker, Indach PV Installation, Indach PV Fachbetrieb, Indach Photovoltaik Montage, Dachdeckerbetrieb mit PV, Meisterbetrieb Indach PV, ' +
    
    // Long-Tail Keywords (kaufbereite Kunden)
    'Indach Photovoltaik in meiner Nähe, Indach PV Angebot, Indach Solaranlage Angebot einholen, Indach Photovoltaik Beratung, Indach PV kaufen, ' +
    
    // Regionale Keywords - Nahe Glan Region
    'Indach PV Nahe Glan, Indach Photovoltaik Bad Kreuznach, Indach PV Kirn, Indach Solaranlage Idar-Oberstein, Indach PV Birkenfeld, ' +
    
    // Regionale Keywords - Rhein-Main Gebiet
    'Indach PV Mainz, Indach Photovoltaik Wiesbaden, Indach PV Frankfurt, Indach PV Darmstadt, Indach Solaranlage Mainz, Indach PV Bingen, Indach PV Alzey, Indach PV Ingelheim, ' +
    
    // Regionale Keywords - Rheinland-Pfalz
    'Indach PV Worms, Indach Photovoltaik Ludwigshafen, Indach PV Mannheim, Indach PV Kaiserslautern, Indach PV Neustadt Weinstraße, Indach PV Speyer, Indach PV Landau, Indach PV Pirmasens, Indach PV Zweibrücken, Indach PV Bad Dürkheim, Indach PV Rheinland-Pfalz, ' +
    
    // Regionale Keywords - Saarland
    'Indach PV Saarbrücken, Indach Photovoltaik Saarland, Indach PV Homburg, Indach PV St. Wendel, ' +
    
    // Regionale Keywords - Hessen
    'Indach PV Offenbach, Indach Photovoltaik Rüsselsheim, Indach PV Groß-Gerau'
});


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
