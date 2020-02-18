import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrmsmastersRoutingModule } from './hrmsmasters-routing.module';
import { BusinessunitComponent } from './businessunit/businessunit.component';
import { CostcenterComponent } from './costcenter/costcenter.component';
import { EmployeeDesignationComponent } from './employee-designation/employee-designation.component';
import { EmployeeEducationComponent } from './employee-education/employee-education.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { PassportCentersComponent } from './passport-centers/passport-centers.component';
import { ResourcetypeComponent } from './resourcetype/resourcetype.component';
import { RolemanagementComponent } from './rolemanagement/rolemanagement.component';
import { SubbusinessunitComponent } from './subbusinessunit/subbusinessunit.component';
import { SkillsComponent } from './skills/skills.component';
import { StateListComponent } from './state-list/state-list.component';
import { SeparationtypeComponent } from './separationtype/separationtype.component';

import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [BusinessunitComponent, CostcenterComponent, EmployeeDesignationComponent, EmployeeEducationComponent, EmployeeStatusComponent, PassportCentersComponent, ResourcetypeComponent, RolemanagementComponent, SubbusinessunitComponent, SkillsComponent, StateListComponent, SeparationtypeComponent],
  imports: [
    CommonModule,
    HrmsmastersRoutingModule,
    NgxPaginationModule
  ],
  exports:[NgxPaginationModule]
})
export class HrmsmastersModule { }
