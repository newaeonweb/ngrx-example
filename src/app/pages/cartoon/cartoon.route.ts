import { Routes } from '@angular/router';
import { CharacterListPageComponent } from './character-list/character-list-page.component';
import { CharacterDetailPageComponent } from './character-detail/character-detail-page.component';
import { EpisodeListPageComponent } from './episode-list/episode-list-page.component';
import { EpisodeDetailPageComponent } from './episode-detail/episode-detail-page.component';
import { AuthGuard } from '../auth/services/auth.guard.service';

export const cartoonRoutes: Routes = [
  {
    path: 'characters',
    component: CharacterListPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'character/:id',
    component: CharacterDetailPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'episodes',
    component: EpisodeListPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'episode/:id',
    component: EpisodeDetailPageComponent,
    canActivate: [AuthGuard],
  },
];
