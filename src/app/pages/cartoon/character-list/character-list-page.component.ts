import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// NgRx State Management
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-store/state/app.state';
import { GetAllCharacters } from '../_cartoon-store/cartoon.actions';
import {
  selectCartoonList,
  selectCartoonInfo,
} from 'src/app/pages/cartoon/_cartoon-store/cartoon.selectors';
import { CartoonService } from '../services/cartoon.service';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-cartoon-list-page',
  templateUrl: './character-list-page.component.html',
  styleUrls: ['./character-list-page.component.scss'],
})
export class CharacterListPageComponent implements OnInit {
  errorMessage: string;

  constructor(
    private store: Store<AppState>,
    private cartoonService: CartoonService,
    private router: Router
  ) {}

  // characters$ = this.cartoonService.getAllCharacters().pipe(
  //   catchError(error => {
  //     this.errorMessage = error;
  //     return of(null);
  //   })
  // );

  characters$ = this.store.pipe(select(selectCartoonList));
  info$ = this.store.pipe(select(selectCartoonInfo));

  ngOnInit() {
    this.store.dispatch(new GetAllCharacters());
  }

  navigateTo(id: number) {
    this.router.navigate(['character', id]);
  }
}
