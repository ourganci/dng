// src/app/features/blog/blog.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  private seoService = inject(SeoService);

  // Später können diese aus einem CMS oder Service kommen
  blogPosts: BlogPost[] = [
    {
      slug: 'dach-im-winter-vorbereiten',
      title: 'So bereiten Sie Ihr Dach auf den Winter vor',
      excerpt: 'Der Winter stellt besondere Anforderungen an Ihr Dach. Erfahren Sie, welche Maßnahmen wichtig sind, um Schäden durch Schnee und Eis zu vermeiden.',
      category: 'Wartung',
      date: '2024-10-01',
      image: 'assets/images/blog/winter-dach.jpg',
      readTime: '5 min'
    },
    {
      slug: 'photovoltaik-lohnt-sich',
      title: 'Lohnt sich eine PV-Anlage 2024?',
      excerpt: 'Photovoltaik wird immer beliebter. Wir zeigen Ihnen, wann sich eine PV-Anlage rechnet und welche Förderungen es gibt.',
      category: 'PV-Anlagen',
      date: '2024-09-15',
      image: 'assets/images/blog/pv-solar.jpg',
      readTime: '7 min'
    },
    {
      slug: 'dachfenster-austauschen-wann',
      title: 'Wann sollten Dachfenster ausgetauscht werden?',
      excerpt: 'Alte Dachfenster können viel Energie kosten. Erfahren Sie, wann ein Austausch sinnvoll ist und was Sie beachten sollten.',
      category: 'Dachfenster',
      date: '2024-08-20',
      image: 'assets/images/blog/dachfenster.jpg',
      readTime: '4 min'
    },
    {
      slug: 'flachdach-wartung-wichtig',
      title: 'Warum Flachdach-Wartung so wichtig ist',
      excerpt: 'Flachdächer benötigen regelmäßige Kontrolle. Wir erklären, warum die Wartung essentiell ist und was geprüft werden muss.',
      category: 'Wartung',
      date: '2024-07-10',
      image: 'assets/images/blog/flachdach.jpg',
      readTime: '6 min'
    }
  ];

  categories = ['Alle', 'Wartung', 'PV-Anlagen', 'Dachfenster', 'Sanierung'];
  selectedCategory = 'Alle';

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Ratgeber & Blog – Tipps rund ums Dach | DNG GmbH',
      description: 'Nützliche Tipps und Ratschläge rund um Dach, Sanierung, PV-Anlagen und mehr. Expertenwissen vom Dachdeckermeisterbetrieb aus Nahe Glan.',
      keywords: 'Dachdecker Ratgeber, Dach Tipps, Blog, Wartung, PV-Anlagen',
      url: 'https://www.dng-gmbh.de/ratgeber'
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  get filteredPosts(): BlogPost[] {
    if (this.selectedCategory === 'Alle') {
      return this.blogPosts;
    }
    return this.blogPosts.filter(post => post.category === this.selectedCategory);
  }
}
