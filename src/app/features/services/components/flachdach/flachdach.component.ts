// src/app/features/services/components/flachdach/flachdach.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../../../city/city.config';
import { SERVICE_CONFIG } from '../../services.config';
import { SeoService } from '../../../../core/services/seo.service';

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
  serviceKey = 'flachdachpruefung'; // Key passend zur SERVICE_CONFIG & Route
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
    private route: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    // City-Parameter auslesen
    this.cityKey = this.route.snapshot.paramMap.get('city') || undefined;

    if (this.cityKey && CITY_CONFIG[this.cityKey]) {
      this.city = CITY_CONFIG[this.cityKey];
    }

    // SEO zentral über den SeoService setzen
    this.applySeo();
  }

  private applySeo(): void {
    const service = SERVICE_CONFIG[this.serviceKey];
    const cityName = this.city ? this.city.name : 'Nahe-Glan';
    const regionName = this.city ? this.city.region : 'der Region';

    // Aufbau der URL für den Canonical Link (passend zum Pfad 'flachdachpruefung')
    const baseUrl = 'https://www.dng-nahe-glan.de/leistungen/flachdachpruefung';
    const canonicalUrl = this.cityKey ? `${baseUrl}/${this.cityKey}` : baseUrl;

    // Dynamische Texte basierend auf City-Status
    const seoTitle = this.city 
      ? `${this.serviceName} ${this.city.name} – Rauch & Dampf | DNG`
      : 'Flachdachdichtheitsprüfung Nahe Glan – Rauch & Dampf | DNG';

    const seoDesc = this.city
      ? `Professionelle ${this.serviceName} in ${this.city.name}. Zerstörungsfreie Leckortung (Rauch- & Dampftest) im Raum ${this.city.region}. Jetzt Termin vereinbaren!`
      : `Professionelle Flachdachdichtheitsprüfung nach DIN in Mainz, Kaiserslautern & Nahe-Glan. Schnelle Leckortung für Gewerbe & Privat. Jetzt prüfen lassen!`;

    this.seoService.updateMetaTags({
      title: seoTitle,
      description: seoDesc,
      url: canonicalUrl,
      keywords: `Flachdachdichtheitsprüfung ${cityName}, Leckortung ${cityName}, Rauchtest Flachdach ${regionName}, Flachdach prüfen, Industriehalle undicht`
    });
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