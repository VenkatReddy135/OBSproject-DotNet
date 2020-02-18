import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubbusinessunitComponent } from './subbusinessunit/subbusinessunit.component';
import { CostcenterComponent } from './costcenter/costcenter.component';
import { BusinessunitComponent } from './businessunit/businessunit.component';
import { EmployeeEducationComponent } from './employee-education/employee-education.component';
import { StateListComponent } from './state-list/state-list.component';
import { ResourcetypeComponent } from './resourcetype/resourcetype.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { SeparationtypeComponent } from './separationtype/separationtype.component';
import { EmployeeDesignationComponent } from './employee-designation/employee-designation.component';
import { RolemanagementComponent } from './rolemanagement/rolemanagement.component';
import { PassportCentersComponent } from './passport-centers/passport-centers.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path: 'cost-center', component: CostcenterComponent },
  { path:'businessunit',component:BusinessunitComponent},
  { path:'subbusinessunit',component:SubbusinessunitComponent},
  {path:'emp-education',component:EmployeeEducationComponent},
  {path:'stateList',component:StateListComponent},
  {path:'resourceType',component:ResourcetypeComponent},
  {path:'emp-status',component:EmployeeStatusComponent},
  {path:'separationType',component:SeparationtypeComponent},
  {path:'roleManagement',component:RolemanagementComponent},
  {path:'emp-designation',component:EmployeeDesignationComponent},
  {path:'passportCenters',component:PassportCentersComponent},
  {path:'skills',component:SkillsComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmsmastersRoutingModule { }
