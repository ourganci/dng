// flachdach.component.ts
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';

interface City { name: string; region: string; }

@Component({
  selector: 'app-flachdach',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './flachdach.component.html',
  styleUrl: './flachdach.component.scss'
})
export class FlachdachComponent implements OnInit {

  // City-Informationen
  city?: City;
  cityKey?: string;

  // Service-Informationen
  serviceName = 'Flachdachdichtheitsprüfung';


  faqs = [
    {
      question: 'Wann ist eine Flachdachprüfung sinnvoll und für wen?',
      answer: 'Eine Prüfung ist ratsam bei unklaren Feuchtigkeitsschäden, nach schweren Unwettern oder zur Abnahme vor Ablauf der Gewährleistung. Wir prüfen alles vom privaten Balkon und Garagendach bis hin zu großen Industriehallen, Gewerbeobjekten und Tiefgaragen.',
      isOpen: false
    },
    {
      question: 'Welche Verfahren werden genutzt und entstehen dabei Schäden?',
      answer: 'Wir setzen auf zerstörungsfreie Methoden wie das Rauchgas-, Dampferzeugungs- oder Impulsstromverfahren. Dabei wird ein Gemisch unter die Abdichtung gepumpt, um Leckagen punktgenau sichtbar zu machen. Das Dach muss nicht großflächig geöffnet werden; lediglich kleine Anschlussöffnungen werden fachgerecht erstellt und sofort wieder verschlossen.',
      isOpen: false
    },
    {
      question: 'Wie lange dauert die Prüfung und was erhalte ich als Ergebnis?',
      answer: 'Je nach Objektgröße dauert die Prüfung zwischen 2 und 6 Stunden, bei Industriehallen ggf. einen Arbeitstag. Als Ergebnis erhalten Sie ein umfassendes, bebildertes Prüfprotokoll, das als gerichtsfester Nachweis für Versicherungen oder zur gezielten Reparaturplanung dient.',
      isOpen: false
    }
  ];

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // City-Parameter auslesen (falls vorhanden)
    this.cityKey = this.route.snapshot.paramMap.get('city') || undefined;

    if (this.cityKey) {
      this.city = CITY_CONFIG[this.cityKey];
    }

    // SEO dynamisch setzen
    this.setSeoTags();
  }

  // Helper-Methods für Template
  get titleWithCity(): string {
    return this.city
      ? `${this.serviceName} in ${this.city.name}`
      : this.serviceName;
  }

  get subtitleWithCity(): string {
    return this.city
      ? `Rauch- und Dampftest im Raum ${this.city.region}`
      : 'Mit Rauch- und Dampftest';
  }

  private setSeoTags(): void {
    if (this.city) {
      // SEO mit Stadt
      this.titleService.setTitle(
        `${this.serviceName} ${this.city.name} – Rauch & Dampf | DNG`
      );

      this.metaService.updateTag({
        name: 'description',
        content: `Professionelle ${this.serviceName} in ${this.city.name} (Rauch- & Dampftest) nach DIN. Schnelle Leckortung im Raum ${this.city.region}. Jetzt prüfen lassen!`
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: `${this.serviceName} ${this.city.name} – DIN-gerecht | DNG GmbH`
      });
    } else {
      // SEO ohne Stadt (Original)
      this.titleService.setTitle(
        'Flachdachdichtheitsprüfung Nahe Glan – Rauch & Dampf | DNG'
      );

      this.metaService.updateTag({
        name: 'description',
        content: 'Professionelle Flachdachdichtheitsprüfung (Rauch- & Dampftest) nach DIN in Mainz, Kaiserslautern & Nahe Glan. Schnelle Leckortung. Jetzt prüfen lassen!'
      });

      this.metaService.updateTag({
        property: 'og:title',
        content: 'Flachdachdichtheitsprüfung mit Rauch- & Dampftest | DNG GmbH'
      });
    }

    // Keywords bleiben gleich (da sehr umfangreich und regional schon enthalten)
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Flachdachdichtheitsprüfung Nahe Glan, Flachdach Dichtheitsprüfung, Rauchtest Flachdach, Dampftest Flachdach, ' +
        'Flachdach prüfen Bad Kreuznach, Flachdach prüfen Mainz, Flachdach prüfen Kaiserslautern, Leckortung, ' +
        'undichtes Flachdach finden, Flachdach Gewerbe prüfen, Industriehalle Flachdach'
    });

    // Diese bleiben immer gleich
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Professionelle Flachdachdichtheitsprüfung mit Rauch- & Dampftest nach DIN. Für Gewerbe, Hallen & Garagen. Schnelle Leckortung + Prüfprotokoll. Jetzt prüfen lassen!'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  get regionalTextFlachdach(): any {
    if (!this.city) return null;

    return {
      intro: `Undichte Flachdächer führen in ${this.city.name} oft zu schleichenden Schäden, die erst spät bemerkt werden.`,
      detail: `Unsere Spezialisten für die Region ${this.city.region} nutzen modernste Technik, um Leckagen punktgenau zu lokalisieren, bevor eine teure Gesamtsanierung notwendig wird.`,
      benefit: `Dank Rauchgas- und Dampfverfahren finden wir selbst kleinste Undichtigkeiten an Industriehallen, Garagen oder Wohngebäuden direkt vor Ort in ${this.city.name}.`
    };
  }
}
