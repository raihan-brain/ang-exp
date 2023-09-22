import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string | null = null;

  constructor() {
    console.log(
      '======================== AuthService is created ========================'
    );
  }

  private booleanPropertySubject = new BehaviorSubject<boolean>(false);

  booleanProperty$ = this.booleanPropertySubject.asObservable();
  login() {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLoggedIn = true;
        this.booleanPropertySubject.next(this.isLoggedIn);
      })
    );
  }

  logout() {
    console.log(
      '======================== logout ======================== is called'
    );
    this.isLoggedIn = false;
    this.booleanPropertySubject.next(this.isLoggedIn);
  }

  getLoginStatus() {
    return of(this.isLoggedIn);
  }
}
