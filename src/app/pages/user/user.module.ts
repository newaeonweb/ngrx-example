import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Modules Pages
import { UserListPageComponent } from './user-list/user-list.component';
import { UserDetailPageComponent } from './user-detail/user-detail.component';

// Pages components
import { UserDetailsComponent } from './components/user-details-component/user-details.component';
import { UsersComponent } from './components/user-list-component/user-list.component';

// Module Routes
import { userRoutes } from './user.route';

@NgModule({
  declarations: [
    UserListPageComponent,
    UserDetailPageComponent,
    UsersComponent,
    UserDetailsComponent,
  ],
  imports: [RouterModule.forChild(userRoutes), CommonModule],
})
export class UserModule {}
