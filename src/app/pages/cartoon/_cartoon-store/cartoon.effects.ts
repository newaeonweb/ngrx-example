import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { CartoonService } from '../services/cartoon.service';
import { CharacterHttp } from '../models/characterHttp';

import { AppState } from '../../../app-store/state/app.state';
import * as fromCartoon from './cartoon.actions';

import { selectCartoonList, selectEpisodeList } from './cartoon.selectors';
import { EpisodeHttp } from '../models/episodeHttp';

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
      console.log(characters);
      const selectedCharacter = characters.filter(
        charct => charct.id === +id
      )[0];
      console.log(selectedCharacter);
      return of(new fromCartoon.GetOneCharacterSuccess(selectedCharacter));
    })
  );

  // Episode Effects
  @Effect()
  getAllEpisodes$ = this.actions$.pipe(
    ofType<fromCartoon.GetAllEpisodes>(
      fromCartoon.CharacterActionsType.GetAllEpisodes
    ),
    switchMap(() => this.cartoonService.getAllEpisodes()),
    switchMap((episodeHttp: EpisodeHttp) =>
      of(new fromCartoon.GetAllEpisodesSuccess(episodeHttp))
    )
  );

  @Effect()
  getOneEpisode$ = this.actions$.pipe(
    ofType<fromCartoon.GetOneEpisode>(
      fromCartoon.CharacterActionsType.GetOneEpisode
    ),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectEpisodeList))),
    switchMap(([id, episodes]) => {
      console.log(episodes);
      const selectedEpisode = episodes.filter(charct => charct.id === +id)[0];
      console.log(selectedEpisode);
      return of(new fromCartoon.GetOneEpisodeSuccess(selectedEpisode));
    })
  );
}
