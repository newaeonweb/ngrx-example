import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const authState = createFeatureSelector<AuthState>('auth');

export const selectAuth = createSelector(
  authState,
  (state: AuthState) => state
);
