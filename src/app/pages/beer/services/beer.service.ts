import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { BeerInterface } from '../models/beer.interface';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private url = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) {}

  get(page: number, perPage: number): Observable<BeerInterface[]> {
    return this.http
      .get<any[]>(this.url + '/?page=' + page + '&per_page=' + perPage)
      .pipe(catchError(error => this.handleError(error)));
  }

  getDetail(id: string): Observable<BeerInterface> {
    return this.http
      .get<BeerInterface>(this.url + `/${id}`)
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
