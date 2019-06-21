import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { AppState } from '../state/app.state';

import { authReducers } from '../../pages/auth/_auth-store/auth.reducer';
import { cartoonReducers } from 'src/app/pages/cartoon/_cartoon-store/cartoon.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  cartoon: cartoonReducers,
  auth: authReducers,
};
