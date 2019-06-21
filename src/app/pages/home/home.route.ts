import { Routes } from '@angular/router';
import { HomeListPageComponent } from './home-list/home-list-page.component';

export const homeRoutes: Routes = [
  { path: 'home', component: HomeListPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
