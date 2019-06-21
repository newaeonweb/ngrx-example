import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Auth } from '../models/auth';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user';
import { AuthState } from '../_auth-store/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = `${environment.apiUrl}signin`;

  constructor(private http: HttpClient) {}

  getAuth(email: string, password: string): Observable<User> {
    return this.http.post<User>(this.authUrl, { email, password });
  }
}
