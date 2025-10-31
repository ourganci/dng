// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'leistungen',
    loadComponent: () => import('./features/services/components/services-overview/services-overview.component')
      .then(m => m.ServicesOverviewComponent)
  },
  { path: 'leistungen/dachsanierung', 
    loadComponent: () => import('./features/services/components/dachsanierung/dachsanierung.component')
    .then(m => m.DachsanierungComponent)
  },
    { path: 'leistungen/dachfenster', 
    loadComponent: () => import('./features/services/components/dachfenster/dachfenster.component')
    .then(m => m.DachfensterComponent)
  },
  {
    path: 'ueber-uns',
    loadComponent: () => import('./features/about/about.component')
      .then(m => m.AboutComponent)
  },
  {
    path: 'referenzen',
    loadComponent: () => import('./features/references/references.component')
      .then(m => m.ReferencesComponent)
  },
  {
    path: 'ratgeber',
    loadChildren: () => import('./features/blog/blog.routes')
      .then(m => m.BLOG_ROUTES)
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./features/contact/contact.component')
      .then(m => m.ContactComponent)
  },
  {
    path: 'impressum',
    loadComponent: () => import('./features/legal/impressum/impressum.component')
      .then(m => m.ImpressumComponent)
  },
  {
    path: 'datenschutz',
    loadComponent: () => import('./features/legal/datenschutz/datenschutz.component')
      .then(m => m.DatenschutzComponent)
  },
  {
    path: '404',
    loadComponent: () => import('./features/not-found/not-found.component')
      .then(m => m.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
