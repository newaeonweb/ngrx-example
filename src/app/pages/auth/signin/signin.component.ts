import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Auth } from '../models/auth';
import { AppState } from 'src/app/app-store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetAuth } from '../_auth-store/auth.actions';
import { selectAuth } from '../_auth-store/auth.selectors';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  user: Auth['user'] = new User();
  errorMessage: string;
  auth$ = this.store.pipe(select(selectAuth));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
    const payload = {
      email: this.user.email,
      password: this.user.password,
    };
    this.store.dispatch(new GetAuth(payload));
  }
}
