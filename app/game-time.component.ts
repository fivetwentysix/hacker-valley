import { Component, Input } from '@angular/core';
@Component({
  selector: 'game-time',
  template: '{{days}} days {{hours}} hours'
})
export class GameTimeComponent {
  @Input()
  days: number;

  @Input()
  hours: number;
}
