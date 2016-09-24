import { Injectable } from '@angular/core';

const chance = require('node_modules/chance/dist/chance.min.js')();

const JOBS = [
  'Software Engineer',
  'Sales',
  'Designer',
  'Business Administration'
];

class Npc {
  name: string;
  job: string;

  constructor() {
    this.name = chance.name();
    this.level = 1;
    this.jobs = JOBS.map((job) => {
      return { job, level: 1 }
    });
  }
}

@Injectable()
export class GameService {
  currentTick: int;
  days: int;
  hours: int;
  staff: Npc[];

  constructor() {
    this.currentTick = 0;
    this.days = 0;
    this.hours = 0;
    this.started = false;
    this.staff = [new Npc()];
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
