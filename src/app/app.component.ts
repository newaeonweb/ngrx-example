import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from './app-store/state/app.state';
import { GetConfig } from './pages/user/_user-store/config.actions';
import { selectConfig } from './pages/user/_user-store/config.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  title = 'ngrx-example';
  config$ = this.store.pipe(select(selectConfig));

  ngOnInit() {
    this.store.dispatch(new GetConfig());
  }
}
