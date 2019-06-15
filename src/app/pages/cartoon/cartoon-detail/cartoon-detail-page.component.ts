import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { selectSelectedCharacter } from '../_cartoon-store/cartoon.selectors';
import { GetOneCharacter } from '../_cartoon-store/cartoon.actions';

@Component({
  selector: 'app-cartoon-detail-page',
  templateUrl: './cartoon-detail-page.component.html',
  styleUrls: ['./cartoon-detail-page.component.scss'],
})
export class CartoonDetailPageComponent implements OnInit {
  character$ = this.store.pipe(select(selectSelectedCharacter));

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new GetOneCharacter(this.route.snapshot.params.id));
  }
}
