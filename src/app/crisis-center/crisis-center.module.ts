import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CririsListComponent } from './criris-list/criris-list.component';

@NgModule({
  declarations: [CririsListComponent],
  imports: [CommonModule, CrisisCenterRoutingModule],
})
export class CrisisCenterModule {}
