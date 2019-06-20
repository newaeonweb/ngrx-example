import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { Auth } from '../models/auth';
import { AuthService } from '../services/auth.service';
import * as fromAuth from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private authService: AuthService, private actions$: Actions) {}

  @Effect()
  getAuth$ = this.actions$.pipe(
    ofType<fromAuth.GetAuth>(fromAuth.AuthActionsType.GetAuth),
    map((action: fromAuth.GetAuth) => action.payload),
    switchMap(payload =>
      this.authService.getAuth(payload.email, payload.password)
    ),
    switchMap((auth: Auth) => {
      console.log(auth);
      return of(new fromAuth.GetAuthSuccess(auth));
    })
  );
}
