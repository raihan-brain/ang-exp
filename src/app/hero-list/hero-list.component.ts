import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";
import {Hero} from "../hero";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, OnDestroy{
  heroes: Hero[] = [];
  selectedHero?: Hero;
  hhService: Subscription | undefined;
  heroName: string = "";

  constructor(private heroService:HeroService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.getHeroes();
  }

  //create get heroes method
  getHeroes():void{
    this.hhService = this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroListComponent: Selected hero id=${hero.id}`);
  }

  ngOnDestroy(): void {
      this.hhService?.unsubscribe();
  }

  testBinding():void{
    // generate random number between 1 -10000
    const randomNum = Math.floor(Math.random() * 10000) + 1;
    console.log("hero name :" ,this.heroName);
    const newHero:Hero = {id: randomNum, name: this.heroName};
    this.heroService.setHero(newHero);
    this.heroName = "";
  }
}
