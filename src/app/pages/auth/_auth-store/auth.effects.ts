import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { Auth } from '../models/auth';
import { AuthService } from '../services/auth.service';
import * as fromAuth from './auth.actions';
import { AuthState } from './auth.state';

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
    switchMap(auth => {
      console.log(auth);
      return of(new fromAuth.GetAuthSuccess(auth));
    })
  );

  @Effect({ dispatch: false })
  LogOut$ = this.actions$.pipe(
    ofType(fromAuth.AuthActionsType.LogOut)
    // tap(user => {
    //   localStorage.removeItem('token');
    // })
  );
}
