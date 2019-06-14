import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// NgRx State Management
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-store/state/app.state';
import { GetUser } from 'src/app/app-store/actions/user.actions';
import { selectSelectedUser } from 'src/app/app-store/selectors/user.selectors';

@Component({
  template: `
    <div>
      <app-user-details [user]="user$ | async"></app-user-details>
    </div>
  `,
})
export class UserDetailPageComponent implements OnInit {
  user$ = this.store.pipe(select(selectSelectedUser));

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new GetUser(this.route.snapshot.params.id));
  }
}
