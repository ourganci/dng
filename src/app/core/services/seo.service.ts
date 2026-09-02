// src/app/core/services/seo.service.ts
import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private dom: Document
  ) {}

  updateMetaTags(config: {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
  }): void {
    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });

    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
      this.updateCanonicalTag(config.url);
    }

    // noindex entfernen wenn eine normale Seite geladen wird
    this.meta.removeTag('name="robots"');
  }

  /**
   * Setzt noindex + follow fuer rechtliche Seiten (Impressum, Datenschutz, AGB).
   * Immer NACH updateMetaTags() aufrufen.
   */
  setNoIndex(): void {
    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
  }

  private updateCanonicalTag(url: string): void {
    // Normalisieren: immer www, immer https, kein Trailing-Slash
    const normalized = url
      .replace(/^http:\/\//, 'https://')
      .replace('https://dng-nahe-glan.de', 'https://www.dng-nahe-glan.de')
      .replace(/\/$/, '');

    let link: HTMLLinkElement | null = this.dom.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
    }
    link.setAttribute('href', normalized);
  }
}
