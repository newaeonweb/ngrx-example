import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Module Routes
import { authRoutes } from './auth.route';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(authRoutes), CommonModule],
})
export class UserModule {}
