import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// NgRx State Management
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { GetUsers } from 'src/app/store/actions/user.actions';
import { selectUserList } from 'src/app/store/selectors/user.selectors';

@Component({
  template: `
    <div>
      <app-users
        [users]="users$ | async"
        (userSelected)="navigateToUser($event)"
      ></app-users>
    </div>
  `,
})
export class UserListPageComponent implements OnInit {
  users$ = this.store.pipe(select(selectUserList));

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this.router.navigate(['user', id]);
  }
}
