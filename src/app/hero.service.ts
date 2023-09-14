import { Injectable } from '@angular/core';
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {Hero} from "./hero";
import {HEROES} from "./mock/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  // get heroes
  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
