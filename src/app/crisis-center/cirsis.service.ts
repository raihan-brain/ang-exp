import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { CRISES } from './mock-crises';
import { Crisis } from './crisis';

@Injectable({
  providedIn: 'root',
})
export class CirsisService {
  constructor(private messageService: MessageService) {}

  getCrises() {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched crisis');
    return crises;
  }

  getCrisis(id: number): Observable<Crisis> {
    const crisis = CRISES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    console.log('crisis', crisis);
    return of(crisis);
  }
}
