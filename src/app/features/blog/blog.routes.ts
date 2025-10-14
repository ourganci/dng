// src/app/features/blog/blog.routes.ts
import { Routes } from '@angular/router';

export const BLOG_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./blog.component')
      .then(m => m.BlogComponent)
  },
  {
    path: ':slug',
    loadComponent: () => import('./blog-detail/blog-detail.component')
      .then(m => m.BlogDetailComponent)
  }
];
