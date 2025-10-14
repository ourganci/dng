// src/app/core/services/schema-markup.service.ts
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SchemaMarkupService {
  
  constructor(@Inject(DOCUMENT) private document: Document) {}

  /**
   * Fügt LocalBusiness Schema hinzu (für Startseite und Kontakt)
   */
  addLocalBusinessSchema(): void {
    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "name": "DNG GmbH",
      "description": "Dachdeckermeisterbetrieb für Nahe Glan & Umgebung",
      "image": "https://www.dng-gmbh.de/assets/images/logo.png",
      "url": "https://www.dng-gmbh.de",
      "telephone": "+49-XXXX-XXXXXX", // TODO: Echte Nummer einfügen
      "email": "info@dng-gmbh.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Musterstraße 123", // TODO: Echte Adresse
        "addressLocality": "Nahe Glan",
        "addressRegion": "Rheinland-Pfalz",
        "postalCode": "55555", // TODO: Echte PLZ
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "49.7667", // TODO: Echte Koordinaten
        "longitude": "7.4667"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Nahe Glan"
        },
        {
          "@type": "City",
          "name": "Bad Kreuznach"
        },
        {
          "@type": "City",
          "name": "Kirn"
        },
        {
          "@type": "City",
          "name": "Bad Sobernheim"
        },
        {
          "@type": "City",
          "name": "Bingen"
        },
        {
          "@type": "City",
          "name": "Idar-Oberstein"
        }
      ],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "sameAs": [
        // TODO: Social Media Links einfügen
        // "https://www.facebook.com/dng-gmbh",
        // "https://www.instagram.com/dng-gmbh"
      ]
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * Fügt Service Schema hinzu (für Leistungsseiten)
   */
  addServiceSchema(serviceName: string, description: string): void {
    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceName,
      "provider": {
        "@type": "RoofingContractor",
        "name": "DNG GmbH",
        "telephone": "+49-XXXX-XXXXXX",
        "url": "https://www.dng-gmbh.de"
      },
      "description": description,
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "49.7667",
          "longitude": "7.4667"
        },
        "geoRadius": "50000"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * Fügt BreadcrumbList Schema hinzu
   */
  addBreadcrumbSchema(breadcrumbs: {name: string; url: string}[]): void {
    const itemListElement = breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }));

    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * Fügt Article Schema hinzu (für Blog-Artikel)
   */
  addArticleSchema(article: {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    image: string;
    url: string;
  }): void {
    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "description": article.description,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "DNG GmbH",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.dng-gmbh.de/assets/images/logo.png"
        }
      },
      "datePublished": article.datePublished,
      "image": article.image,
      "url": article.url
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * Entfernt alle Schema-Scripts (für Route-Wechsel)
   */
  removeAllSchemas(): void {
    const scripts = this.document.head.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => script.remove());
  }

  /**
   * Hilfsmethode zum Erstellen eines Schema-Scripts
   */
  private createSchemaScript(schema: any): HTMLScriptElement {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    return script;
  }
}
