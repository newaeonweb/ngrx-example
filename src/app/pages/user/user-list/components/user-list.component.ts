import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/pages/user/models/user';

@Component({
  selector: 'app-users',
  template: `
    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Card Number</th>
          <th scope="col">Card Type</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users" (click)="navigateToUser(user.id)">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.cardNumber }}</td>
          <td>{{ user.cardType }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @Output() userSelected: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }
}
