import { Routes } from '@angular/router';
import { CharacterListPageComponent } from './character-list/character-list-page.component';
import { CharacterDetailPageComponent } from './character-detail/character-detail-page.component';
import { EpisodeListPageComponent } from './episode-list/episode-list-page.component';
import { EpisodeDetailPageComponent } from './episode-detail/episode-detail-page.component';

export const cartoonRoutes: Routes = [
  { path: 'characters', component: CharacterListPageComponent },
  { path: 'character/:id', component: CharacterDetailPageComponent },
  { path: 'episodes', component: EpisodeListPageComponent },
  { path: 'episode/:id', component: EpisodeDetailPageComponent },
];
