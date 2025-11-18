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
  {
    path: 'leistungen/dachsanierung',
    loadComponent: () => import('./features/services/components/dachsanierung/dachsanierung.component')
      .then(m => m.DachsanierungComponent)
  },
  {
    path: 'leistungen/dachfenster',
    loadComponent: () => import('./features/services/components/dachfenster/dachfenster.component')
      .then(m => m.DachfensterComponent)
  },
  {
    path: 'leistungen/regenrinnen',
    loadComponent: () => import('./features/services/components/regenrinnen/regenrinnen.component')
      .then(m => m.RegenrinnenComponent)
  },
  {
    path: 'leistungen/dachreparatur',
    loadComponent: () => import('./features/services/components/dachreparatur/dachreparatur.component')
      .then(m => m.DachreparaturComponent)
  },
  {
    path: 'leistungen/flachdachpruefung',
    loadComponent: () => import('./features/services/components/flachdach/flachdach.component')
      .then(m => m.FlachdachComponent)
  },
  {
    path: 'leistungen/photovoltaik',
    loadComponent: () => import('./features/services/components/photovoltaik/photovoltaik.component')
      .then(m => m.PhotovoltaikComponent)
  },
  {
    path: 'leistungen/pv-indach',
    loadComponent: () => import('./features/services/components/pvindach/pvindach.component')
      .then(m => m.PvindachComponent)
  },
  {
    path: 'leistungen/hallenbeleuchtung',
    loadComponent: () => import('./features/services/components/hallenbeleuchtung/hallenbeleuchtung.component')
      .then(m => m.HallenbeleuchtungComponent)
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
  // {
  //   path: 'ratgeber',
  //   loadChildren: () => import('./features/blog/blog.routes')
  //     .then(m => m.BLOG_ROUTES)
  // },
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
    path: 'agb',
    loadComponent: () => import('./features/legal/agb/agb.component')
      .then(m => m.AgbComponent)
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
