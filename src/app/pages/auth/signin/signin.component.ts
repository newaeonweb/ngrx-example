import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Auth } from '../models/auth';
import { AppState } from 'src/app/app-store/state/app.state';
import { Store } from '@ngrx/store';
import { GetAuth } from '../_auth-store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  user: Auth['user'] = new User();
  errorMessage: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
    this.store.dispatch(new GetAuth());
  }
}
