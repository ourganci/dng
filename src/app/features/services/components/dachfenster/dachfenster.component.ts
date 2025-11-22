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

  faqs = [
    {
      question: 'Welche Dachfenster-Typen gibt es?',
      answer: 'Die gängigsten Typen sind Schwingfenster (klassisch), Klapp-Schwingfenster (mit Balkon-Funktion) und Ausstiegsfenster für den Zugang aufs Dach. Wir beraten Sie, welcher Typ für Ihre Bedürfnisse ideal ist.',
      isOpen: false
    },
    {
      question: 'Kann jedes Dach ein Dachfenster bekommen?',
      answer: 'Grundsätzlich ja, allerdings müssen die Dachneigung (15-90°) und die Dachkonstruktion geprüft werden. Bei Flachdächern gibt es spezielle Lösungen wie Lichtkuppeln.',
      isOpen: false
    },
    {
      question: 'Wie lange dauert der Einbau?',
      answer: 'Der Einbau eines Dachfensters dauert in der Regel 4-8 Stunden pro Fenster, abhängig von der Dachkonstruktion und dem gewählten Fenstertyp.',
      isOpen: false
    },
    {
      question: 'Arbeiten Sie mit Markenherstellern?',
      answer: 'Ja, wir sind Partner von führenden Herstellern wie VELUX, Roto und Fakro und bieten Ihnen hochwertige Produkte mit Herstellergarantie.',
      isOpen: false
    }
  ]

  ngOnInit(): void {
    this.titleService.setTitle('Dachfenster Nahe Glan – Einbau, Austausch & Reparatur | DNG GmbH');

    this.metaService.updateTag({
      name: 'description',
      content: 'Dachfenster von VELUX & Roto für mehr Licht und Wohnkomfort. Fachgerechter Einbau, Austausch und Reparatur in Nahe Glan, Bad Kreuznach, MAinz, Kirn, Kaiserslautern und Zweibrücken.'
    });


    this.metaService.updateTag({
      name: 'keywords',
      content:
        // Hauptkeywords - Produkt/Dienstleistung
        'Dachfenster Nahe Glan, Dachfenster einbauen, Dachfenster austauschen, Dachfenster Einbau, Dachfenster Reparatur, Dachflächenfenster, Dachfenster Montage, Dachfenster Modernisierung, ' +

        // Marken & Hersteller
        'VELUX Dachfenster, Roto Dachfenster, VELUX Einbau, Roto Einbau, VELUX Austausch, Roto Austausch, ROOFLITE Dachfenster, ' +

        // Produktvarianten & Typen
        'Schwingfenster, Klapp-Schwingfenster, Dachfenster mit Rolladen, elektrische Dachfenster, Solar Dachfenster, Dachfenster mit Sonnenschutz, Dachfenster Kombination, ' +

        // Nutzen & Vorteile
        'mehr Licht Dachgeschoss, Wohnkomfort Dach, Dachausbau Fenster, Tageslicht Dachgeschoss, Dachgeschoss belüften, Raumklima Dach, ' +

        // Anwendungsfälle
        'Dachfenster Neubau, Dachfenster Sanierung, Dachfenster nachrüsten, alte Dachfenster austauschen, Dachfenster erneuern, Dachfenster Renovierung, ' +

        // Technische Aspekte
        'Dachfenster Wärmedämmung, Dachfenster Energieeffizienz, Dachfenster dreifach Verglasung, Dachfenster Abdichtung, Dachfenster undicht, Dachfenster Schimmel, ' +

        // Fachbetrieb & Service
        'Dachfenster Fachbetrieb, Dachdecker Dachfenster, Dachfenster Handwerker, Dachfenster Meisterbetrieb, Dachfenster Beratung, Dachfenster Kosten, Dachfenster Preis, ' +

        // Long-Tail Keywords (kaufbereite Kunden)
        'Dachfenster einbauen lassen, Dachfenster Einbau Kosten, Dachfenster austauschen Kosten, Dachfenster in meiner Nähe, Dachfenster Angebot, ' +

        // Regionale Keywords - Nahe Glan Region
        'Dachfenster Bad Kreuznach, Dachfenster Kirn, Dachfenster Idar-Oberstein, Dachfenster Birkenfeld, Dachfenster Meisenheim, Dachfenster Sobernheim, ' +

        // Regionale Keywords - Rheinland-Pfalz
        'Dachfenster Mainz, Dachfenster Wiesbaden, Dachfenster Bingen, Dachfenster Alzey, Dachfenster Ingelheim, Dachfenster Worms, Dachfenster Kaiserslautern, Dachfenster Neustadt Weinstraße, Dachfenster Speyer, Dachfenster Landau, Dachfenster Rheinland-Pfalz, ' +

        // Regionale Keywords - Saarland
        'Dachfenster Saarbrücken, Dachfenster Saarland, Dachfenster St. Wendel, Dachfenster Homburg, ' +

        // Regionale Keywords - Hessen
        'Dachfenster Frankfurt, Dachfenster Darmstadt, Dachfenster Offenbach, Dachfenster Rüsselsheim'
    });

    // Open Graph und Twitter Card Tags für Social Sharing
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Dachfenster Einbau & Austausch vom Fachetrieb | DNG GmbH'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Mehr Licht & Wohnkomfort mit Dachfenstern von VELUX & Roto. Fachgerechter Einbau, Austausch und Reparatur in Nahe Glan, Bad Kreuznach & Kirn. Jetzt Beratung anfordern!'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    // this.metaService.updateTag({ property: 'og:image', content: 'https://www.dng-nahe-glan.de/assets/images/services/dachfenster-og.jpg' }); // Optional: Bild-URL hinzufügen

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });
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

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
