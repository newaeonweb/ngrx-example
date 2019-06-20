import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Auth } from '../models/auth';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = `${environment.apiUrl}signin`;

  constructor(private http: HttpClient) {}

  getAuth(email: string, password: string): Observable<Auth> {
    return this.http.post<Auth>(this.authUrl, { email, password });
  }
}
