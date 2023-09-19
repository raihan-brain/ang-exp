import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

const routes: Routes = [
  // redirect to heroes
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  // add wildcard route
  { path: '**', component: PageNotFoundComponent },
  {
    path: 'compose-log',
    component: ComposeMessageComponent,
    outlet: 'popup2',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
