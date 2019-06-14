import { createSelector } from '@ngrx/store';
import { AppState } from '../../../app-store/state/app.state';
import { ConfigState } from './config.state';

const configState = (state: AppState) => state.config;

export const selectConfig = createSelector(
  configState,
  (state: ConfigState) => state.config
);
