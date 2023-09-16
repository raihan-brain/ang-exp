import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { HeroesModule } from './heroes/heroes.module';
import { FormsModule } from '@angular/forms';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, TopbarComponent],
  imports: [
    BrowserModule,
    HeroesModule,
    FormsModule,
    CrisisCenterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
