import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="page">
      <div class="page-content">
        <div class="container">
          <div class="row">
            <div class="card is-text-center">
              <header>
                <h4>
                  <a routerLink="/signin">THE RICK AND MORTY</a>
                </h4>
              </header>
              <img
                class="img-fluid"
                src="./assets/images/rkmt.jpeg"
                style="height:250px!important; margin: 0 auto; border-radius: 5px;"
              />
              <p>
                HEY, DID YOU EVER WANT TO HOLD A TERRY FOLD? I GOT ONE RIGHT
                HERE, GRAB MY TERRY FLAP
              </p>
              <footer class="is-center">
                <p>
                  Characters and Episodes
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeListPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
