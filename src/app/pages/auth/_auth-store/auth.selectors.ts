import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const authState = createFeatureSelector<AuthState>('auth');

export const selectConfig = createSelector(
  authState,
  (state: AuthState) => state.auth
);
