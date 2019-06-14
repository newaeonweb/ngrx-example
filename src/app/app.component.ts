import { Component, OnInit } from '@angular/core';
import { selectConfig } from './store/selectors/config.selectors';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/state/app.state';
import { GetConfig } from './store/actions/config.actions';

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
