import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// NgRx State Management
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-store/state/app.state';
import { GetOneEpisode } from '../_cartoon-store/cartoon.actions';
import { selectSelectedEpisode } from 'src/app/pages/cartoon/_cartoon-store/cartoon.selectors';
import { CartoonService } from '../services/cartoon.service';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-episode-detail-page',
  template: `
    <div class="container">
      <app-episode-detail
        [episode]="episode$ | async"
        [characters]="characters$ | async"
      ></app-episode-detail>
    </div>
  `,
  styleUrls: ['./episode-detail-page.component.scss'],
})
export class EpisodeDetailPageComponent implements OnInit {
  errorMessage: string;
  characters$: Observable<any>;

  episode$ = this.store.pipe(select(selectSelectedEpisode)).pipe(
    tap(res => {
      if (res) {
        return this.getCharacterId(res.characters);
      }
    })
  );

  constructor(
    private store: Store<AppState>,
    private cartoonService: CartoonService,
    private route: ActivatedRoute
  ) {}

  getCharacterId(charactersList) {
    const getArray = [];

    charactersList.forEach(element => {
      const getNum = element.split('/');
      const num = getNum[getNum.length - 1];
      return getArray.unshift(parseInt(num, 10));
    });

    this.characters$ = this.cartoonService.getMultipleCharacters(getArray).pipe(
      catchError(error => {
        this.errorMessage = error;
        return of(null);
      })
    );
  }

  ngOnInit() {
    this.store.dispatch(new GetOneEpisode(this.route.snapshot.params.id));
  }
}
