import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/user-list/users.component';
import { UserComponent } from './pages/users/user-detail/user.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
