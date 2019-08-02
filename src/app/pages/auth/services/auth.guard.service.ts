import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import { take, mergeMap, map, tap } from 'rxjs/operators';
import { selectAuthenticated } from '../_auth-store/auth.selectors';
import { AuthState } from '../_auth-store/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router
  ) {}

  canActivate(): Observable<any> {
    return this.checkStoreAuth().pipe(
      tap(storeAuth => {
        console.log('store', storeAuth);
        if (storeAuth) {
          return of(true);
        }
        this.router.navigate(['/signin']);
        return false;
      })
    );
  }

  checkStoreAuth() {
    return this.store.select(selectAuthenticated).pipe(take(1));
  }
}
