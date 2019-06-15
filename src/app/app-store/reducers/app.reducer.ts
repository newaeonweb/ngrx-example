import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { AppState } from '../state/app.state';

import { configReducers } from '../../pages/user/_user-store/config.reducer';
import { userReducers } from '../../pages/user/_user-store/user.reducer';
import { cartoonReducers } from 'src/app/pages/cartoon/_cartoon-store/cartoon.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  users: userReducers,
  cartoon: cartoonReducers,
  config: configReducers,
};
