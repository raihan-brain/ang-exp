import {Component, OnInit} from '@angular/core';
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit{
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService:HeroService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.getHeroes();
  }

  //create get heroes method
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroListComponent: Selected hero id=${hero.id}`);
  }

}
