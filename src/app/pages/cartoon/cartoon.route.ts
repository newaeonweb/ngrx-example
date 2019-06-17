import { Routes } from '@angular/router';
import { CartoonListPageComponent } from './cartoon-list/cartoon-list-page.component';
import { CartoonDetailPageComponent } from './cartoon-detail/cartoon-detail-page.component';
import { EpisodeListPageComponent } from './episode-list/episode-list-page.component';
import { EpisodeDetailPageComponent } from './episode-detail/episode-detail-page.component';

export const cartoonRoutes: Routes = [
  { path: 'characters', component: CartoonListPageComponent },
  { path: 'character/:id', component: CartoonDetailPageComponent },
  { path: 'episodes', component: EpisodeListPageComponent },
  { path: 'episode/:id', component: EpisodeDetailPageComponent },
];
