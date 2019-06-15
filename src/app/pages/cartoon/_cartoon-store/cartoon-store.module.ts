import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { cartoonReducers } from './cartoon.reducer';
import { CartoonEffects } from './cartoon.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('cartoon', cartoonReducers),
    EffectsModule.forFeature([CartoonEffects]),
  ],
  providers: [CartoonEffects],
})
export class CartoonStoreModule {}
