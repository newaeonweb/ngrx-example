import { RouterReducerState } from '@ngrx/router-store';
import {
  UserState,
  initialUserState,
} from '../../pages/user/_user-store/user.state';

import {
  AuthState,
  initialAuthState,
} from '../../pages/user/_auth-store/auth.state';

import {
  CartoonState,
  initialCartoonState,
} from '../../pages/cartoon/_cartoon-store/cartoon.state';

export interface AppState {
  router?: RouterReducerState;
  users: UserState;
  cartoon: CartoonState;
  auth: AuthState;
}

export const initialAppState: AppState = {
  users: initialUserState,
  cartoon: initialCartoonState,
  auth: initialAuthState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
