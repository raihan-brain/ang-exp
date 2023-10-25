import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, of, tap } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HttpClient } from '@angular/common/http';
import { Book, BooksRepository } from '../store/books.repository';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private bookRepository: BooksRepository
  ) {}

  baseURL = '/api/books';

  // get heroes
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  setHero(hero: Hero): void {
    HEROES.push(hero);
  }

  // get hero by id
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getHeroBooks() {
    return this.http.get<Book[]>(this.baseURL).pipe(
      tap((books: Book[]) => {
        console.log('books :', books);
        this.bookRepository.setBooks(books);
      })
    );
  }
}
