import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Auth } from '../models/auth';
import { AuthService } from '../services/auth.service';
import * as fromAuth from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private configService: AuthService, private actions$: Actions) {}

  @Effect()
  getAuth$ = this.actions$.pipe(
    ofType<fromAuth.GetAuth>(fromAuth.AuthActionsType.GetAuth),
    switchMap(() => this.configService.getAuth()),
    switchMap((config: Auth) => {
      return of(new fromAuth.GetAuthSuccess(config));
    })
  );
}