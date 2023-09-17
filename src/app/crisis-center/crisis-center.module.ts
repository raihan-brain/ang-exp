import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CririsListComponent } from './criris-list/criris-list.component';
import { CrsisCenterComponent } from './crsis-center/crsis-center.component';
import { CrsisCenterHomeComponent } from './crsis-center-home/crsis-center-home.component';
import { CrsisDetailComponent } from './crsis-detail/crsis-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CririsListComponent,
    CrsisCenterComponent,
    CrsisCenterHomeComponent,
    CrsisDetailComponent,
  ],
  imports: [CommonModule, FormsModule, CrisisCenterRoutingModule],
})
export class CrisisCenterModule {}
