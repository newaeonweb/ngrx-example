import { RouterReducerState } from '@ngrx/router-store';
import {
  UserState,
  initialUserState,
} from '../../pages/user/_user-store/user.state';
import {
  ConfigState,
  initialConfigState,
} from '../../pages/user/_user-store/config.state';

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
