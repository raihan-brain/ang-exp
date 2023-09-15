import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CririsListComponent } from './criris-list/criris-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'crisis-center', component: CririsListComponent },
  { path: 'heroes', component: HeroListComponent },
  // redirect to heroes
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  // add wildcard route
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
