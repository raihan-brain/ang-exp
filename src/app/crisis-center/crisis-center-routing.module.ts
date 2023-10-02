import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CririsListComponent } from './criris-list/criris-list.component';
import { CrsisCenterComponent } from './crsis-center/crsis-center.component';
import { CrsisDetailComponent } from './crsis-detail/crsis-detail.component';
import { CrsisCenterHomeComponent } from './crsis-center-home/crsis-center-home.component';
import { crisisDetailResolverResolver } from './crisis-detail-resolver.resolver';

const routes: Routes = [
  {
    path: '',
    component: CrsisCenterComponent,
    children: [
      {
        path: '',
        component: CririsListComponent,
        children: [
          {
            path: ':id',
            component: CrsisDetailComponent,
            resolve: {
              crisis: crisisDetailResolverResolver,
            },
          },
          { path: '', component: CrsisCenterHomeComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrisisCenterRoutingModule {}
