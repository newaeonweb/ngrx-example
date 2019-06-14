import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { BeerInterface } from '../models/beer.interface';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
  errorMessage: string;
  beerId: string = this.route.snapshot.paramMap.get('id');

  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute
  ) {}

  beer$: Observable<BeerInterface> = this.beerService
    .getDetail(this.beerId)
    .pipe(
      catchError(error => {
        this.errorMessage = error;
        return of(null);
      })
    );

  ngOnInit() {}
}
