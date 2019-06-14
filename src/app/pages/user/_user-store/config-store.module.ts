import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { configReducers } from './config.reducer';
import { ConfigEffects } from './config.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('config', configReducers),
    EffectsModule.forFeature([ConfigEffects]),
  ],
  providers: [ConfigEffects],
})
export class ConfigStoreModule {}
