import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  hero: Hero;

  getHeroes(): Observable<Hero[]> {

    // for (const h of HEROES) {
    //   for (let v in h) {
    //     console.log(v + ' ' + h[v]);
    //   }
    // }
    return of(HEROES);
  }
  constructor() { }
}
