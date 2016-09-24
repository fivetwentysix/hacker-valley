import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  currentTick: int;
  days: int;
  hours: int;

  constructor() {
    this.currentTick = 0;
    this.days = 0;
    this.hours = 0;
    this.started = false;
  }

  start(): void {
    this.started = true;
    setInterval(this.tick.bind(this), 1000);
  }

  tick(): void {
    this.currentTick++;
    this.setTime();
  }

  setTime(): void {
    this.hours = this.currentTick % 24;
    this.days = Math.floor(this.currentTick / 24);
  }
}
