import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Modules Pages
import { CharacterListPageComponent } from './character-list/character-list-page.component';
import { CharacterDetailPageComponent } from './character-detail/character-detail-page.component';

import { EpisodeListPageComponent } from './episode-list/episode-list-page.component';
import { EpisodeDetailPageComponent } from './episode-detail/episode-detail-page.component';

import { cartoonRoutes } from './cartoon.route';
import { SearchCharacterPipe } from './character-list/pipes/search.pipe';
import { EpisodeListComponent } from './episode-list/components/episode-list.component';
import { EpisodeDetailComponent } from './episode-detail/components/episode-detail.component';

@NgModule({
  declarations: [
    CharacterListPageComponent,
    CharacterDetailPageComponent,
    EpisodeListPageComponent,
    EpisodeDetailPageComponent,
    SearchCharacterPipe,
    EpisodeListComponent,
    EpisodeDetailComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(cartoonRoutes), FormsModule],
})
export class CartoonModule {}
