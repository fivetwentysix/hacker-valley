import { Component } from '@angular/core';
import { GameService } from './game.service';
@Component({
  providers: [GameService],
  selector: 'hacker-valley',
  template: `
  <md-toolbar>Hacker Valley</md-toolbar>
  <md-card>
  <b>Time</b>: <game-time [days]=game.days [hours]=game.hours></game-time>
  </md-card>
  `
})
export class AppComponent { 
  constructor(private game: GameService) {
    this.game.start();
  }
}

