// src/app/core/services/seo.service.ts
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  
  constructor(
    private meta: Meta,
    private title: Title
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
    
    this.meta.updateTag({ 
      property: 'og:title', 
      content: config.title 
    });
    
    this.meta.updateTag({ 
      property: 'og:description', 
      content: config.description 
    });
    
    if (config.url) {
      this.meta.updateTag({ 
        property: 'og:url', 
        content: config.url 
      });
    }
  }
}
