import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Modules Pages
import { UserListPageComponent } from './user-list/user-list.component';
import { UserDetailPageComponent } from './user-detail/user-detail.component';

// Pages components
import { UserDetailComponent } from './user-detail/components/user-detail.component';
import { UserListComponent } from './user-list/components/user-list.component';

// Module Routes
import { userRoutes } from './user.route';

@NgModule({
  declarations: [
    UserListPageComponent,
    UserDetailPageComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [RouterModule.forChild(userRoutes), CommonModule],
})
export class UserModule {}
