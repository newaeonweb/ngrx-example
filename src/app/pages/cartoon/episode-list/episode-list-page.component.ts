import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// NgRx State Management
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-store/state/app.state';
import {
  GetAllCharacters,
  GetAllEpisodes,
} from '../_cartoon-store/cartoon.actions';
import {
  selectEpisodeList,
  selectEpisodeInfo,
} from 'src/app/pages/cartoon/_cartoon-store/cartoon.selectors';
import { CartoonService } from '../services/cartoon.service';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Episode } from '../models/episode';

@Component({
  selector: 'app-episode-list-page',
  template: `
    <div class="page">
      <div class="page-content">
        <div class="container">
          <div class="row">
            <div class="col" *ngIf="info$ | async as info">
              <p class="is-center">
                Episodes found: {{ info.count }} | Pages: {{ info.pages }}
              </p>
            </div>
          </div>
          <div class="row">
            <div
              class="card is-text-center col-6 col-4-md col-4-lg"
              *ngFor="let item of episodes$ | async"
              (click)="navigateTo(item.id)"
            >
              <header>
                <h4>
                  <a routerLink="/episode/{{ item.id }}">{{ item.name }} </a>
                </h4>
                <hr />
                <p>Season: {{ item.episode }}</p>
              </header>

              <footer class="is-center">
                <p>On air: {{ item.air_date }}</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./episode-list-page.component.scss'],
})
export class EpisodeListPageComponent implements OnInit {
  errorMessage: string;
  mutiple = [];

  constructor(
    private store: Store<AppState>,
    private cartoonService: CartoonService,
    private router: Router
  ) {}

  // characters$ = this.cartoonService.getMultipleCharacters(this.array).pipe(
  //   catchError(error => {
  //     this.errorMessage = error;
  //     return of(null);
  //   })
  // );

  episodes$ = this.store.pipe(select(selectEpisodeList)).pipe(
    map(res => res),
    tap(res => console.log(res))
  );

  info$ = this.store.pipe(select(selectEpisodeInfo));

  ngOnInit() {
    this.store.dispatch(new GetAllEpisodes());
  }

  navigateTo(id: number) {
    this.router.navigate(['cartoon', id]);
  }
}
