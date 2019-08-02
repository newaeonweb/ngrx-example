import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-episode-list',
  template: `
    <div class="row">
      <div
        class="card is-text-center col-6 col-4-md col-4-lg"
        *ngFor="let item of episodes; let i = index"
        (click)="navigateTo(item.id)"
      >
        <header>
          <h4>
            <a routerLink="/episode/{{ item.id }}"
              >#{{ i + 1 }} {{ item.name }}
            </a>
          </h4>
          <hr />
          <p>
            Season: <span class="text-grey">{{ item.episode }}</span>
          </p>
        </header>
        <footer class="is-center">
          <p>
            On air: <span class="text-grey">{{ item.air_date }}</span>
          </p>
        </footer>
      </div>
    </div>
  `,
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
  @Input() episodes: Episode[];
  @Output() episodeSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  navigateTo(id: number) {
    this.episodeSelected.emit(id);
  }
}
