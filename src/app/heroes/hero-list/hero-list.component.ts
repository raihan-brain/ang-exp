import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable, Subscription, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit, OnDestroy {
  heroes$!: Observable<Hero[]>;
  hhService: Subscription | undefined;
  heroName = '';
  selectedId = 0;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.heroService.getHeroes();
      })
    );
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
