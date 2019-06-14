import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent as UsersContainerComponent } from './user-list/user-list.component';
import { UsersComponent } from './components/user-list-component/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailsComponent } from './components/user-details-component/user-details.component';

import { userRoutes } from './user.route';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UsersContainerComponent,
    UsersComponent,
    UserDetailComponent,
    UserDetailsComponent,
  ],
  imports: [RouterModule.forChild(userRoutes), CommonModule],
})
export class UserModule {}
