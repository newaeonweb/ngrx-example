import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from './app-store/state/app.state';
import { GetAuth } from './pages/auth/_auth-store/auth.actions';
import { selectAuth } from './pages/auth/_auth-store/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  title = 'ngrx-example';
  auth$ = this.store.pipe(select(selectAuth));

  ngOnInit() {
    // this.store.dispatch(new GetAuth());
  }
}
