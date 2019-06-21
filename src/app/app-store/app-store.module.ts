import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthStoreModule } from '../pages/auth/_auth-store/auth-store.module';
import { CartoonStoreModule } from '../pages/cartoon/_cartoon-store/cartoon-store.module';
import { appReducers } from './reducers/app.reducer';
import { AppState } from './state/app.state';
import { storeLogger } from 'ngrx-store-logger';

// Add logger to inspect state
export function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthStoreModule,
    CartoonStoreModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
        })
      : [],
  ],
})
export class AppStoreModule {}
