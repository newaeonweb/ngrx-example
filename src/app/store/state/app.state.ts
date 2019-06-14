import { RouterReducerState } from '@ngrx/router-store';
import { UserState, initialUserState } from './user.state';
import { ConfigState, initialConfigState } from './config.state';

export interface AppState {
  router?: RouterReducerState;
  users: UserState;
  config: ConfigState;
}

export const initialAppState: AppState = {
  users: initialUserState,
  config: initialConfigState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
