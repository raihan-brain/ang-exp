import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FormsModule } from '@angular/forms';
import { HeroRestrictedService } from './hero-restricted.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeroDetailComponent, HeroListComponent],
  imports: [CommonModule, FormsModule, HeroesRoutingModule, HttpClientModule],
  providers: [HeroRestrictedService],
})
export class HeroesModule {}
