import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent as UsersContainerComponent } from './user-list/users.component';
import { UsersComponent } from './components/user-list-component/user-list.component';
import { UserComponent } from './user-detail/user.component';
import { UserDetailsComponent } from './components/user-details-component/user-details.component';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
