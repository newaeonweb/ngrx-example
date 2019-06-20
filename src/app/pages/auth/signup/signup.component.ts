import { Component, OnInit } from '@angular/core';
import { Auth } from '../models/auth';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: Auth['user'] = new User();
  errorMessage: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
  }
}
