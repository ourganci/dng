// src/app/features/blog/blog-detail/blog-detail.component.ts
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { SchemaMarkupService } from '../../../core/services/schema-markup.service'; // ← HINZUFÜGEN

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);
  private schemaService = inject(SchemaMarkupService); // ← HINZUFÜGEN

  slug = '';
  
  // Später aus CMS oder Service laden
  article = {
    title: 'So bereiten Sie Ihr Dach auf den Winter vor',
    category: 'Wartung',
    date: '2024-10-01',
    readTime: '5 min',
    author: 'Max Mustermann',
    image: 'assets/images/blog/winter-dach.jpg',
    content: `
      <h2>Warum Wintervorbereitung wichtig ist</h2>
      <p>Der Winter stellt besondere Anforderungen an Ihr Dach. Schnee, Eis und Frost können zu Schäden führen, die im Frühjahr teuer werden können.</p>
      
      <h2>Checkliste für die Wintervorbereitung</h2>
      <ul>
        <li>Dachrinnen von Laub und Schmutz befreien</li>
        <li>Dachziegel auf Risse und Beschädigungen prüfen</li>
        <li>Schneefanggitter kontrollieren</li>
        <li>Dachfenster auf Dichtigkeit prüfen</li>
        <li>Dämmung kontrollieren</li>
      </ul>
      
      <h2>Professionelle Inspektion empfohlen</h2>
      <p>Eine professionelle Dachinspektion im Herbst kann teure Winterschäden verhindern. Unsere Dachdecker-Experten prüfen Ihr Dach gründlich und beheben kleine Mängel, bevor sie zu großen Problemen werden.</p>
      
      <h2>Fazit</h2>
      <p>Mit der richtigen Vorbereitung übersteht Ihr Dach den Winter problemlos. Kontaktieren Sie uns für eine kostenlose Beratung!</p>
    `
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      
      // SEO für Artikel
      this.seoService.updateMetaTags({
        title: `${this.article.title} – DNG GmbH Ratgeber`,
        description: 'Der Winter stellt besondere Anforderungen an Ihr Dach. Erfahren Sie, welche Maßnahmen wichtig sind.',
        keywords: 'Dach Winter, Wintervorbereitung, Dachinspektion',
        url: `https://www.dng-gmbh.de/ratgeber/${this.slug}`
      });

      // Article Schema hinzufügen
      this.schemaService.addArticleSchema({
        headline: this.article.title,
        description: 'Der Winter stellt besondere Anforderungen an Ihr Dach. Erfahren Sie, welche Maßnahmen wichtig sind.',
        author: this.article.author,
        datePublished: this.article.date,
        image: `https://www.dng-gmbh.de/${this.article.image}`,
        url: `https://www.dng-gmbh.de/ratgeber/${this.slug}`
      });
    });
  }

  ngOnDestroy(): void {
    // Schema beim Verlassen der Seite entfernen
    this.schemaService.removeAllSchemas();
  }
}
