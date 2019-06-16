import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartoonState } from './cartoon.state';

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
