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
      <div *ngIf="episode$ | async as episode">
        <div class="card is-text-center">
          <header>
            <h4 class="text-primary ">{{ episode.name }}</h4>
            <img
              src="{{ episode.image }}"
              alt=""
              style="height:250px!important; margin: 0 auto;"
            />
            <p>
              On Air: {{ episode.air_date }} | Season: {{ episode.episode }}
            </p>
            <br />
            <hr />
          </header>
          <div *ngIf="characters$ | async as character">
            <h5>This episode have {{ character.length }} Characters:</h5>
            <ul class="row">
              <li class="col-3" *ngFor="let item of character">
                <div class="card">
                  <a routerLink="/character/{{ item.id }}">
                    <img
                      src="{{ item.image }}"
                      alt=""
                      style="height:50px!important; margin: 0 auto; border-radius: 50%;"
                    />
                    <p>{{ item.name }}</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          <footer class="is-center">
            <p class="text-grey">
              <strong>Created</strong> : {{ episode.created }}
            </p>
          </footer>
        </div>
      </div>
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
