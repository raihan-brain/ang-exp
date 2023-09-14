import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CririsListComponent } from './criris-list/criris-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { HeroesModule } from './heroes/heroes.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CririsListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    TopbarComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
