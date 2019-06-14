import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { BeerInterface } from '../models/beer.interface';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  errorMessage: string;
  searchText: string;
  selectedFilter: string;

  constructor(private beersService: BeerService) {}

  beers$ = this.beersService.get(1, 10).pipe(
    catchError(error => {
      this.errorMessage = error;
      return of(null);
    })
  );

  filterProperty(property: string): void {
    this.selectedFilter = property;
  }

  removeFilter(): void {
    this.selectedFilter = undefined;
  }

  ngOnInit() {}
}
