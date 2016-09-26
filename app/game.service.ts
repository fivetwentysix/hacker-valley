import { Injectable } from '@angular/core';

const chance = require('node_modules/chance/dist/chance.min.js')();
const faker = require('node_modules/faker/build/build/faker.js');

const JOBS = [
  'Software Engineer',
  'Sales',
  'Designer',
  'Business Administration'
];

const INDUSTRIES = [
  'Marketing',
  'Sales',
  'Advertising',
  'Social Media',
  'Graphics & Design',
  'Business Administration',
  'Communications',
  'Education'
];

class Product {
  industry: string;

  constructor() {
    this.industry = chance.pickone(INDUSTRIES);
  }
}

class Company {
  name: string;
  networth: number;
  products: Product[];
  staff: Npc[];

  constructor() {
    this.name = faker.company.companyName();
    this.networth = 0;
    this.products = [new Product()];
  }
}

class Npc {
  name: string;
  jobs: any[];
  level: number;
  energy: number;
  resting: boolean;

  constructor() {
    this.name = chance.name();
    this.level = 1;
    this.jobs = JOBS.map((job) => {
      return { job, level: 1 }
    });

    this.energy = 100;
  }

  tick(): void {
    this.determineNeed().then((need) => {
      switch (need) {
        case 'work':
          this.work();
          break;
        case 'sleep':
          this.rest();
          break;
      }
    });
  }

  determineNeed(): Promise<string> {
    return new Promise((resolve) => {
      if (this.resting || this.needsSleep()) {
        return resolve('sleep');
      } else {
        return resolve('work')
      }
    });
  }

  needsSleep(): boolean {
    return this.energy < 20;
  }

  work(): Promise<number> {
    return new Promise((resolve) => {
      let energyCost = 10;
      this.energy -= energyCost;
      resolve(this.energy);
    });
  }

  rest(): Promise<number> {
    return new Promise((resolve) => {
      let energyGain = 10;
      this.energy += energyGain;
      this.resting = !this.energyIsFull();
      resolve(this.energy);
    });
  }

  energyIsFull(): boolean {
    return this.energy === 100;
  }

  currentNeed(): string {
    return 'money';
  }
}

@Injectable()
export class GameService {
  currentTick: number;
  days: number;
  hours: number;
  companies: Company[];
  character: Npc;
  ticker: number;

  constructor() {
    this.currentTick = 0;
    this.days = 0;
    this.hours = 0;
    this.character = new Npc();
    this.companies = [];

    for (var _i = 0; _i < 50; _i++) {
      this.companies.push(new Company());
    }
  }

  start(): void {
    this.ticker = setInterval(this.tick.bind(this), 300);
  }

  pause(): void {
    clearInterval(this.ticker);
  }

  tick(): void {
    this.character.tick();
    this.currentTick++;
    this.setTime();
  }

  setTime(): void {
    this.hours = this.currentTick % 24;
    this.days = Math.floor(this.currentTick / 24);
  }
}
