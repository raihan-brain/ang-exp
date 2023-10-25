import {
  selectAllEntities,
  selectEntities,
  setEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { createState, propsArrayFactory, Store } from '@ngneat/elf';
import { Injectable } from '@angular/core';
import { map, withLatestFrom } from 'rxjs';

export interface Book {
  id: string;
  valumeInfo: {
    title: string;
    authors: string[];
  };
}

const {
  withLibraryIds,
  selectLibraryIds,
  addLibraryIds,
  removeLibraryIds,
  inLibraryIds,
} = propsArrayFactory('libraryIds', { initialValue: [] as string[] });

const { state, config } = createState(withEntities<Book>(), withLibraryIds());

const store = new Store({ name: 'books', state, config });

@Injectable({ providedIn: 'root' })
export class BooksRepository {
  books$ = store.pipe(selectAllEntities());

  ownBooks$ = store.pipe(selectLibraryIds()).pipe(
    withLatestFrom(store.pipe(selectEntities())),
    map(([ids, books]) => ids.map(id => books[id]))
  );

  setBooks(books: Book[]) {
    store.update(setEntities(books));
  }

  removeFromCollection(bookId: string) {
    store.update(removeLibraryIds(bookId));
  }

  addToCollection(bookId: string) {
    if (!store.query(inLibraryIds(bookId))) {
      store.update(addLibraryIds(bookId));
    }
  }
}
