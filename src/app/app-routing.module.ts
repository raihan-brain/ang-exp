import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CririsListComponent } from './crisis-center/criris-list/criris-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
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
