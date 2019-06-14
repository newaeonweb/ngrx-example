import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { selectSelectedUser } from 'src/app/store/selectors/user.selectors';
import { GetUser } from 'src/app/store/actions/user.actions';

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
