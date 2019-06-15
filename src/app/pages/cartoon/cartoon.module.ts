import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules Pages
import { CartoonListPageComponent } from './cartoon-list/cartoon-list-page.component';
import { CartoonDetailPageComponent } from './cartoon-detail/cartoon-detail-page.component';

import { cartoonRoutes } from './cartoon.route';

@NgModule({
  declarations: [CartoonListPageComponent, CartoonDetailPageComponent],
  imports: [CommonModule, RouterModule.forChild(cartoonRoutes)],
})
export class CartoonModule {}
