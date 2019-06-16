import { Routes } from '@angular/router';
import { CartoonListPageComponent } from './cartoon-list/cartoon-list-page.component';
import { CartoonDetailPageComponent } from './cartoon-detail/cartoon-detail-page.component';
import { EpisodeListPageComponent } from './episode-list/episode-list-page.component';

export const cartoonRoutes: Routes = [
  { path: 'cartoon', component: CartoonListPageComponent },
  { path: 'cartoon/:id', component: CartoonDetailPageComponent },
  { path: 'episode', component: EpisodeListPageComponent },
];
