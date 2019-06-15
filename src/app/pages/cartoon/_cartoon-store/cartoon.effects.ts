import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { CartoonService } from '../services/cartoon.service';
import { CharacterHttp } from '../models/characterHttp';

import { AppState } from '../../../app-store/state/app.state';
import * as fromCartoon from './cartoon.actions';

import { selectCartoonList } from './cartoon.selectors';

@Injectable()
export class CartoonEffects {
  constructor(
    private cartoonService: CartoonService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  getAllCharacters$ = this.actions$.pipe(
    ofType<fromCartoon.GetAllCharacters>(
      fromCartoon.CharacterActionsType.GetAllCharacters
    ),
    switchMap(() => this.cartoonService.getAllCharacters()),
    switchMap((characterHttp: CharacterHttp) =>
      of(new fromCartoon.GetAllCharactersSuccess(characterHttp))
    )
  );

  @Effect()
  getOneCharacter$ = this.actions$.pipe(
    ofType<fromCartoon.GetOneCharacter>(
      fromCartoon.CharacterActionsType.GetOneCharacter
    ),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectCartoonList))),
    switchMap(([id, characters]) => {
      const selectedCharacter = characters.filter(
        charct => charct.id === +id
      )[0];
      return of(new fromCartoon.GetOneCharacterSuccess(selectedCharacter));
    })
  );
}
