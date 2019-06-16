import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartoonState } from './cartoon.state';
import { Character } from '../models/character';
import { Episode } from '../models/episode';

const selectCharacters = createFeatureSelector<CartoonState>('cartoon');

export const selectCartoonList = createSelector(
  selectCharacters,
  (state: CartoonState) => state.characters
);

export const selectCartoonInfo = createSelector(
  selectCharacters,
  (state: CartoonState) => state.info
);

export const selectSelectedCharacter = createSelector(
  selectCharacters,
  (state: CartoonState) => state.selectedCharacter
);

// Episode Selectors

export const selectEpisodeList = createSelector(
  selectCharacters,
  (state: CartoonState) => state.episodes
);

export const selectEpisodeInfo = createSelector(
  selectCharacters,
  (state: CartoonState) => state.info
);

export const selectSelectedEpisode = createSelector(
  selectCharacters,
  (state: CartoonState) => state.selectedEpisode
);
