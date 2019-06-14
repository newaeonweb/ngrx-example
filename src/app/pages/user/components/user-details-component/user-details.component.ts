import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/pages/user/models/user';

@Component({
  selector: 'app-user-details',
  template: `
    <div>
      <p>Name: {{ user.id }}</p>
      <p>Card Number: {{ user.cardNumber }}</p>
      <p>Card Type: {{ user.cardType }}</p>
    </div>
  `,
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit() {}
}
