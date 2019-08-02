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
          <app-episode-list
            [episodes]="episodes$ | async"
            (episodeSelected)="navigateTo($event)"
          ></app-episode-list>
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
