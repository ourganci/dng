// src/app/features/services/services.routes.ts
import { Routes } from '@angular/router';

export const SERVICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/services-overview/services-overview.component')
      .then(m => m.ServicesOverviewComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./components/service-detail/service-detail.component')
      .then(m => m.ServiceDetailComponent)
  }
];
