import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Modules Pages
import { HomeListPageComponent } from './home-list/home-list-page.component';

// Module Routes
import { homeRoutes } from './home.route';

@NgModule({
  declarations: [HomeListPageComponent],
  imports: [RouterModule.forChild(homeRoutes), CommonModule],
})
export class HomeModule {}
