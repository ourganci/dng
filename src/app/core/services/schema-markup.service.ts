// src/app/core/services/schema-markup.service.ts
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SchemaMarkupService {
  
  // ⭐ Zentrale Unternehmensdaten für Konsistenz
  public readonly companyData = {
    "@type": "RoofingContractor", // Spezifischer als "LocalBusiness" - wichtig für SEO!
    "name": "DNG GmbH",
    "alternateName": "DNG GmbH Nahe-Glan", // Für Variationen in Suchen
    "description": "Meisterbetrieb für Dachdeckerarbeiten, Photovoltaik-Indachanlagen, Dachsanierung und Dachfenster in Nahe Glan & Umgebung. Zertifizierter Fachbetrieb mit 20+ Jahren Erfahrung.",
    "image": "https://www.dng-nahe-glan.de/assets/images/logo.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.dng-nahe-glan.de/assets/images/logo.png",
      "width": "600",
      "height": "60"
    },
    "url": "https://www.dng-nahe-glan.de/",
    "telephone": "+4967531237119",
    "mobile": "+4915158420657",
    "email": "info@dng-nahe-glan.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hauptstraße 24",
      "addressLocality": "Callbach",
      "addressRegion": "Rheinland-Pfalz",
      "postalCode": "67829",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.704030,
      "longitude": 7.699911
    },
    // ✅ Erweiterte Servicegebiete für bessere lokale Suche
    "areaServed": [
      { "@type": "City", "name": "Nahe Glan", "sameAs": "https://de.wikipedia.org/wiki/Glan_(Nahe)" },
      { "@type": "City", "name": "Bad Kreuznach", "sameAs": "https://de.wikipedia.org/wiki/Bad_Kreuznach" },
      { "@type": "City", "name": "Kirn", "sameAs": "https://de.wikipedia.org/wiki/Kirn" },
      { "@type": "City", "name": "Bad Sobernheim" },
      { "@type": "City", "name": "Bingen am Rhein" },
      { "@type": "City", "name": "Idar-Oberstein" },
      { "@type": "City", "name": "Birkenfeld" },
      { "@type": "City", "name": "Mainz" },
      { "@type": "City", "name": "Wiesbaden" },
      { "@type": "City", "name": "Kaiserslautern" }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Invoice", "Bank Transfer"],
    "currenciesAccepted": "EUR",
    
    // ✅ Öffnungszeiten detaillierter
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    
    // ✅ Angebotene Services - wichtig für Google Rich Results
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dachdeckerarbeiten",
          "description": "Professionelle Dacheindeckung, Dachreparatur und Wartung"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Indach-Photovoltaik",
          "description": "Dachintegrierte PV-Anlagen mit GSE In-Roof System"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dachsanierung",
          "description": "Komplette Dachsanierung inkl. Dämmung und Abdichtung"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dachfenster",
          "description": "Einbau und Austausch von Dachfenstern (VELUX, ROTO)"
        }
      }
    ],
    
    // ✅ Aggregierte Bewertungen (falls vorhanden - sonst auskommentieren)
    /* 
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "42",
      "bestRating": "5",
      "worstRating": "1"
    },
    */
    
    "sameAs": [
      // TODO: Echte Social Media Links einfügen, sobald vorhanden
      // "https://www.facebook.com/dng-gmbh",
      // "https://www.instagram.com/dng-gmbh",
      // "https://de.linkedin.com/company/dng-gmbh"
    ]
  };

  constructor(@Inject(DOCUMENT) private document: Document) {}

  /**
   * ✅ LocalBusiness Schema mit vollständigen Daten (für Startseite)
   */
  addLocalBusinessSchema(): void {
    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      ...this.companyData
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * ✅ Service Schema mit erweiterten Details (für Leistungsseiten)
   */
  addServiceSchema(serviceName: string, description: string, priceRange?: string): void {
    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceName,
      "provider": {
        "@type": "RoofingContractor",
        "name": this.companyData.name,
        "url": this.companyData.url,
        "telephone": this.companyData.telephone,
        "address": this.companyData.address
      },
      "description": description,
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": this.companyData.geo.latitude,
          "longitude": this.companyData.geo.longitude
        },
        "geoRadius": 75000 // 75km Radius
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "EUR",
        ...(priceRange && { "priceRange": priceRange }) // Optional: Preisbereich
      }
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * ✅ Spezial-Schema für Indach-PV (Product + Service kombiniert)
   */
  addIndachPVSchema(): void {
    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Indach-Photovoltaikanlage",
      "description": "Dachintegrierte PV-Anlage mit GSE In-Roof System - ästhetisch, sturmsicher und hocheffizient",
      "brand": {
        "@type": "Brand",
        "name": "GSE Integration"
      },
      "category": "Solar Energy Equipment",
      "image": "https://www.dng-nahe-glan.de/assets/images/indach-pv.jpg", // Bild hinzufügen!
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR",
        "lowPrice": "15000",
        "highPrice": "35000",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": this.companyData.name
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "23"
      }
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * ✅ BreadcrumbList Schema
   */
  addBreadcrumbSchema(breadcrumbs: {name: string; url: string}[]): void {
    const itemListElement = breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.dng-nahe-glan.de${item.url}`
    }));

    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * ✅ FAQ Schema (für FAQ-Seiten oder Ratgeber)
   */
  addFAQSchema(faqs: {question: string; answer: string}[]): void {
    const mainEntity = faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }));

    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntity
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * ✅ HowTo Schema (für Anleitungen/Ratgeber)
   */
  addHowToSchema(title: string, description: string, steps: {name: string; text: string; image?: string}[]): void {
    const stepElements = steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image })
    }));

    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": title,
      "description": description,
      "step": stepElements,
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "value": "0"
      }
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * ✅ Article Schema (für Blog-Artikel)
   */
  addArticleSchema(article: {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
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
          "url": "https://www.dng-nahe-glan.de/assets/images/logo.png"
        }
      },
      "datePublished": article.datePublished,
      "dateModified": article.dateModified || article.datePublished,
      "image": article.image,
      "url": article.url,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": article.url
      }
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * ✅ Review Schema (für Kundenbewertungen)
   */
  addReviewSchema(review: {
    author: string;
    reviewBody: string;
    ratingValue: number;
    datePublished: string;
  }): void {
    const script = this.createSchemaScript({
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": this.companyData.name,
        "image": this.companyData.image
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.ratingValue,
        "bestRating": "5",
        "worstRating": "1"
      },
      "datePublished": review.datePublished
    });
    
    this.document.head.appendChild(script);
  }

  /**
   * ✅ Entfernt alle Schema-Scripts (für Route-Wechsel)
   */
  removeAllSchemas(): void {
    const scripts = this.document.head.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => script.remove());
  }

  /**
   * ✅ Hilfsmethode zum Erstellen eines Schema-Scripts
   */
  private createSchemaScript(schema: any): HTMLScriptElement {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema, null, 2); // Pretty Print für bessere Lesbarkeit
    return script;
  }
}
