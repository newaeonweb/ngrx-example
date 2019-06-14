import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { UserHttp } from '../models/user-http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserHttp> {
    return this.http.get<UserHttp>(this.usersUrl);
  }
}
