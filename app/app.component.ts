import { Component } from '@angular/core';
import { GameService } from './game.service';
@Component({
  providers: [GameService],
  selector: 'hacker-valley',
  templateUrl: 'app/app.html'
})
export class AppComponent { 
  constructor(private game: GameService) {
    this.game.start();
  }
}

