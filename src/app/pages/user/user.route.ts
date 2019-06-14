import { Routes } from '@angular/router';
import { UserListPageComponent } from './user-list/user-list.component';
import { UserDetailPageComponent } from './user-detail/user-detail.component';

export const userRoutes: Routes = [
  { path: 'users', component: UserListPageComponent },
  { path: 'user/:id', component: UserDetailPageComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
