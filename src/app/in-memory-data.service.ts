import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from 'src/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice1' },
      { id: 13, name: 'Bombasto1' },
      { id: 14, name: 'Celeritas1' },
      { id: 15, name: 'Magneta1' },
      { id: 16, name: 'RubberMan1' },
      { id: 17, name: 'Dynama1' },
      { id: 18, name: 'Dr. IQ1' },
      { id: 19, name: 'Magma1' },
      { id: 20, name: 'Tornado1' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(heroes:Hero[]):number{
    return heroes.length>0 ? Math.max(...heroes.map(hero=>hero.id)) + 1:11;
  }

  constructor() { }
}
