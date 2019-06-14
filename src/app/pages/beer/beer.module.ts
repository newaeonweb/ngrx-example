import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { beerRoutes } from './beer.routes';

// Module component
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

// Pipes
import { SearchPipe } from './pipes/search.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    BeerListComponent,
    BeerDetailComponent,
    SearchPipe,
    FilterPipe,
  ],
  imports: [RouterModule.forChild(beerRoutes), CommonModule, FormsModule],
})
export class BeerModule {}
