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
  currentTick: number;
  days: number;
  hours: number;
  companies: Company[];
  character: Npc;

  constructor() {
    this.currentTick = 0;
    this.days = 0;
    this.hours = 0;
    this.started = false;
    this.character = new Npc();
    this.companies = [];

    for (var _i = 0; _i < 50; _i++) {
      this.companies.push(new Company());
    }
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
