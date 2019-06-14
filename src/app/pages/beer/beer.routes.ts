import { Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

export const beerRoutes: Routes = [
  {
    path: 'beers',
    children: [
      {
        path: '',
        component: BeerListComponent,
      },
      {
        path: ':id',
        component: BeerDetailComponent,
      },
    ],
  },
];
