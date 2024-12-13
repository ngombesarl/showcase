import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',  redirectTo: 'home', pathMatch: 'full'},
    {
        path: '',
        loadComponent: () => import('./components/landing/landing.component').then(c => c.LandingComponent),
    },
    {
        path: 'service/:id',
        loadComponent: () => import('./components/service/service.component').then(c => c.ServiceComponent),
    }
];
