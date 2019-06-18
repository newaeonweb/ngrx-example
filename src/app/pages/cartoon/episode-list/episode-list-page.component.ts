import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// NgRx State Management
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-store/state/app.state';
import { GetAllEpisodes } from '../_cartoon-store/cartoon.actions';
import {
  selectEpisodeList,
  selectEpisodeInfo,
} from 'src/app/pages/cartoon/_cartoon-store/cartoon.selectors';
import { CartoonService } from '../services/cartoon.service';

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
              *ngFor="let item of episodes$ | async as episode; let i = index"
              (click)="navigateTo(item.id)"
            >
              <header>
                <h4>
                  <a routerLink="/episode/{{ item.id }}"
                    >#{{ i + 1 }} {{ item.name }}
                  </a>
                </h4>
                <hr />
                <p>
                  Season: <span class="text-grey">{{ item.episode }}</span>
                </p>
              </header>

              <footer class="is-center">
                <p>
                  On air: <span class="text-grey">{{ item.air_date }}</span>
                </p>
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

  episodes$ = this.store.pipe(select(selectEpisodeList));
  info$ = this.store.pipe(select(selectEpisodeInfo));

  constructor(
    private store: Store<AppState>,
    private cartoonService: CartoonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetAllEpisodes());
  }

  navigateTo(id: number) {
    this.router.navigate(['cartoon', id]);
  }
}
