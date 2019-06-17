import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Character } from '../models/character';
import { CharacterHttp } from '../models/characterHttp';
import { tap } from 'rxjs/operators';
import { EpisodeHttp } from '../models/episodeHttp';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root',
})
export class CartoonService {
  characterApi = `${environment.cartoonApi}/character`;
  episodeApi = `${environment.cartoonApi}/episode`;

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<CharacterHttp> {
    return this.http
      .get<CharacterHttp>(this.characterApi)
      .pipe(tap(res => console.log(res)));
  }

  getOneCharacter(id: number): Observable<Character> {
    return this.http
      .get<Character>(`${this.characterApi}/${id}`)
      .pipe(tap(res => console.log(res)));
  }

  getMultipleCharacters(array): Observable<Character[]> {
    return this.http
      .get<Character[]>(`${this.characterApi}/${array}`)
      .pipe(tap(res => console.log(res)));
  }

  getAllEpisodes(): Observable<EpisodeHttp> {
    return this.http
      .get<EpisodeHttp>(this.episodeApi)
      .pipe(tap(res => console.log(res)));
  }

  getOneEpisode(id: number): Observable<Episode> {
    return this.http
      .get<Episode>(`${this.episodeApi}/${id}`)
      .pipe(tap(res => console.log(res)));
  }
}
