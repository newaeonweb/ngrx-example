import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import { UserHttp } from '../models/user-http';

import { AppState } from '../../../app-store/state/app.state';
import * as fromUser from './user.actions';

import { selectUserList } from './user.selectors';

@Injectable()
export class UserEffects {
  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<fromUser.GetUsers>(fromUser.UserActionsType.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((userHttp: UserHttp) =>
      of(new fromUser.GetUsersSuccess(userHttp.users))
    )
  );

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<fromUser.GetUser>(fromUser.UserActionsType.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new fromUser.GetUserSuccess(selectedUser));
    })
  );
}
