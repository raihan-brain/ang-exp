import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  private screenSize$ = new BehaviorSubject<string>(this.getScreenSize());

  constructor() {
    window.addEventListener('resize', () => {
      this.screenSize$.next(this.getScreenSize());
    });
  }

  // Helper function to get the screen size
  private getScreenSize(): string {
    if (window.innerWidth < 576) {
      return 'xs';
    } else if (window.innerWidth < 768) {
      return 'sm';
    } else if (window.innerWidth < 992) {
      return 'md';
    } else if (window.innerWidth < 1200) {
      return 'lg';
    } else {
      return 'xl';
    }
  }
  // Public method to get the current screen size as an Observable
  getScreenSize$(): Observable<string> {
    return this.screenSize$.asObservable();
  }
}
