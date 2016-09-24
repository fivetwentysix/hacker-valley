import { Component } from '@angular/core';
import { GameService } from './game.service';
@Component({
  providers: [GameService],
  selector: 'hacker-valley',
  template: `
  <md-toolbar>Hacker Valley</md-toolbar>
  <md-card>
    <b>Time</b>:
    <game-time [days]=game.days [hours]=game.hours>
    </game-time>
  </md-card>

  <md-card *ngFor="let npc of game.staff">
    <md-card-title>{{npc.name}}</md-card-title>
    <md-card-subtitle>
      <button md-raised-button *ngFor="let job of npc.jobs">
        Level {{job.level}} {{job.job}}
      </button>
    </md-card-subtitle>
  </md-card>
  `
})
export class AppComponent { 
  constructor(private game: GameService) {
    this.game.start();
  }
}

