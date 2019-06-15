import { RouterReducerState } from '@ngrx/router-store';
import {
  UserState,
  initialUserState,
} from '../../pages/user/_user-store/user.state';

import {
  ConfigState,
  initialConfigState,
} from '../../pages/user/_user-store/config.state';

import {
  CartoonState,
  initialCartoonState,
} from '../../pages/cartoon/_cartoon-store/cartoon.state';

export interface AppState {
  router?: RouterReducerState;
  users: UserState;
  cartoon: CartoonState;
  config: ConfigState;
}

export const initialAppState: AppState = {
  users: initialUserState,
  cartoon: initialCartoonState,
  config: initialConfigState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
