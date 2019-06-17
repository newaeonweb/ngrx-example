import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules Pages
import { CharacterListPageComponent } from './character-list/character-list-page.component';
import { CharacterDetailPageComponent } from './character-detail/character-detail-page.component';

import { EpisodeListPageComponent } from './episode-list/episode-list-page.component';
import { EpisodeDetailPageComponent } from './episode-detail/episode-detail-page.component';

import { cartoonRoutes } from './cartoon.route';

@NgModule({
  declarations: [
    CharacterListPageComponent,
    CharacterDetailPageComponent,
    EpisodeListPageComponent,
    EpisodeDetailPageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(cartoonRoutes)],
})
export class CartoonModule {}
