import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Module component
import { BeerComponent } from './beer.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

// Pipes
import { SearchPipe } from './pipes/search.pipe';
import { FilterPipe } from './pipes/filter.pipe';

// Module Routes
import { beerRoutes } from './beer.routes';

@NgModule({
  declarations: [
    BeerComponent,
    BeerListComponent,
    BeerDetailComponent,
    SearchPipe,
    FilterPipe,
  ],
  imports: [RouterModule.forChild(beerRoutes), CommonModule, FormsModule],
})
export class BeerModule {}
