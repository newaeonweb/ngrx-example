import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Character } from '../models/character';
import { CharacterHttp } from '../models/characterHttp';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartoonService {
  cartoonApi = `${environment.cartoonApi}/character`;

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<CharacterHttp> {
    return this.http
      .get<CharacterHttp>(this.cartoonApi)
      .pipe(tap(res => console.log(res)));
  }
}
