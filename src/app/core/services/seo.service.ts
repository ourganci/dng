// src/app/core/services/seo.service.ts
import { Injectable, Inject } from '@angular/core'; // Inject hinzugefügt
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common'; // DOCUMENT importiert

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  
  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private dom: Document // Den DOM-Zugriff injizieren
  ) {}

  updateMetaTags(config: {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
  }): void {
    this.title.setTitle(config.title);
    
    this.meta.updateTag({ 
      name: 'description', 
      content: config.description 
    });
    
    if (config.keywords) {
      this.meta.updateTag({ 
        name: 'keywords', 
        content: config.keywords 
      });
    }
    
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
      // NEU: Hier setzen wir den Canonical Link
      this.updateCanonicalTag(config.url);
    }
  }

  // Diese private Methode kümmert sich um den Canonical Link im <head>
  private updateCanonicalTag(url: string): void {
    let link: HTMLLinkElement | null = this.dom.querySelector('link[rel="canonical"]');
    
    if (!link) {
      link = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
    }
    
    link.setAttribute('href', url);
  }
}