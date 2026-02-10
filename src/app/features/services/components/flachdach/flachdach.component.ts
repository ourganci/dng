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
}
