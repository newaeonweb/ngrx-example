import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-episode-detail',
  template: `
    <div *ngIf="episode as episode">
      <div class="card is-text-center">
        <header>
          <h4 class="text-primary ">{{ episode.name }}</h4>
          <img
            src="{{ episode.image }}"
            alt=""
            style="height:250px!important; margin: 0 auto;"
          />
          <p>On Air: {{ episode.air_date }} | Season: {{ episode.episode }}</p>
          <br />
          <hr />
        </header>
        <div *ngIf="characters as character">
          <h5>This episode have {{ character.length }} Characters</h5>
          <ul class="row">
            <li class="col-3" *ngFor="let item of character">
              <div class="card">
                <a routerLink="/character/{{ item.id }}">
                  <img
                    src="{{ item.image }}"
                    alt=""
                    style="height:50px!important; margin: 0 auto; border-radius: 50%;"
                  />
                  <p>{{ item.name }}</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        <footer class="is-center">
          <p class="text-grey">
            <strong>Created</strong> : {{ episode.created }}
          </p>
        </footer>
      </div>
    </div>
  `,
  styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
  @Input() episode: Episode;
  @Input() characters: Character[];
  constructor() {}

  ngOnInit() {}
}
