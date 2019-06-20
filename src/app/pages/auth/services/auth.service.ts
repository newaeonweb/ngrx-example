import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Auth } from '../models/auth';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = `${environment.apiUrl}auth.json`;

  constructor(private http: HttpClient) {}

  getAuth(): Observable<Auth> {
    return this.http.get<Auth>(this.authUrl);
  }
}
