import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canMatch: [authGuard],
  },
  {
    path: 'crisis-center',
    loadChildren: () =>
      import('./crisis-center/crisis-center.module').then(
        m => m.CrisisCenterModule
      ),
    data: { preload: true },
  },
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
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
