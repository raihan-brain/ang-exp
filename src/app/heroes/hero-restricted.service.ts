import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroRestrictedService {
  constructor() {
    console.log('===== hero restricted service is created =====');
  }

  private heroAge = 18;

  private numberHeroAge = new BehaviorSubject(this.heroAge);

  heroAgeObserable$ = this.numberHeroAge.asObservable();

  setHeroAge() {
    this.heroAge = this.heroAge * 2;
    this.numberHeroAge.next(this.heroAge);
  }
}
