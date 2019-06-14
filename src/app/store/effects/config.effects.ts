import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Config } from '../../models/config';
import { ConfigService } from './../../services/config.service';
import * as fromConfig from '../actions/config.actions';

@Injectable()
export class ConfigEffects {
  constructor(
    private configService: ConfigService,
    private actions$: Actions
  ) {}

  @Effect()
  getConfig$ = this.actions$.pipe(
    ofType<fromConfig.GetConfig>(fromConfig.ConfigActionsType.GetConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap((config: Config) => {
      return of(new fromConfig.GetConfigSuccess(config));
    })
  );
}
