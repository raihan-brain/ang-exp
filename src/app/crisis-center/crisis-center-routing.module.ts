import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CririsListComponent } from './criris-list/criris-list.component';

const routes: Routes = [
  { path: 'crisis-center', component: CririsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrisisCenterRoutingModule {}
