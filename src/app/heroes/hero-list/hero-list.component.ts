import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { catchError, EMPTY, map, Subscription, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HeroRestrictedService } from '../hero-restricted.service';
import { BooksRepository } from '../../store/books.repository';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListComponent implements OnDestroy, OnInit {
  heroes$ = this.route.paramMap.pipe(
    switchMap(params => {
      this.selectedId = parseInt(params.get('id')!, 10);
      return this.heroService.getHeroes();
    })
  );
  hhService: Subscription | undefined;
  heroName = '';
  selectedId = 0;
  heroAge$ = this.heroRestrictedService.heroAgeObserable$.pipe(
    map(item => {
      item = item * 2;
      if (item >= 1440) {
        throw new Error('error');
      }
      return item;
    }),
    tap(item => console.log('item :', item)),
    catchError(err => {
      {
        console.log('err :', err);
        throw EMPTY;
      }
    })
  );

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private heroRestrictedService: HeroRestrictedService,
    public bookRepository: BooksRepository
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroBooks().subscribe();
  }

  increaseHeroAge(): void {
    this.heroRestrictedService.setHeroAge();
  }
  ngOnDestroy(): void {
    this.hhService?.unsubscribe();
  }

  testBinding(): void {
    // generate random number between 1 -10000
    const randomNum = Math.floor(Math.random() * 10000) + 1;
    console.log('hero name :', this.heroName);
    const newHero: Hero = { id: randomNum, name: this.heroName };
    this.heroService.setHero(newHero);
    this.heroName = '';
  }
}
