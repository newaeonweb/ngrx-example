import { RouterReducerState } from '@ngrx/router-store';

import {
  AuthState,
  initialAuthState,
} from '../../pages/auth/_auth-store/auth.state';

import {
  CartoonState,
  initialCartoonState,
} from '../../pages/cartoon/_cartoon-store/cartoon.state';

export interface AppState {
  router?: RouterReducerState;
  cartoon: CartoonState;
  auth: AuthState;
}

export const initialAppState: AppState = {
  cartoon: initialCartoonState,
  auth: initialAuthState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
