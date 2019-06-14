import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UserStoreModule } from '../pages/user/_user-store/user-store.module';
import { ConfigStoreModule } from '../pages/user/_user-store/config-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserStoreModule,
    ConfigStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
        })
      : [],
  ],
})
export class AppStoreModule {}
