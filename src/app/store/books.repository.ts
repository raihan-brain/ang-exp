import {
  selectAllEntities,
  setEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { createState, Store } from '@ngneat/elf';
import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  valumeInfo: {
    title: string;
    authors: string[];
  };
}

const { state, config } = createState(withEntities<Book>());

const store = new Store({ name: 'books', state, config });

@Injectable({ providedIn: 'root' })
export class BooksRepository {
  books$ = store.pipe(selectAllEntities());

  setBooks(books: Book[]) {
    store.update(setEntities(books));
  }
}
