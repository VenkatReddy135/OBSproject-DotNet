import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgStructureRoutingModule } from './org-structure-routing.module';
import { OrgStructureComponent } from '../org-structure/org-structure.component';


@NgModule({
  declarations: [OrgStructureComponent],
  imports: [
    CommonModule,
    OrgStructureRoutingModule
  ]
})
export class OrgStructureModule { }
