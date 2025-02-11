import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'forms',
    loadComponent: () => import('./pages/forms/forms.page').then((m) => m.FormsPage),
  },
  {
    path: '',
    redirectTo: 'forms',
    pathMatch: 'full',
  },
];
