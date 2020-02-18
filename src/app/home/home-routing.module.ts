import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { BasicInfoComponent } from './employee/employee-edit/basic-info/basic-info.component';
import { EmployeeComponent } from './employee/employee.component';
import { EducationExperienceComponent } from './employee/employee-edit/education-experience/education-experience.component';
import { ProfessionalSummaryComponent } from './employee/employee-edit/professional-summary/professional-summary.component';
import { KyeComponent } from './employee/employee-edit/kye/kye.component';
import { DependentsComponent } from './employee/employee-edit/dependents/dependents.component';
import { ResignationComponent } from './employee/employee-edit/resignation/resignation.component';


const routes: Routes = [

  {

    path: '', component: HomeComponent,
    children: [
      { path: 'hrms', loadChildren: () => import('./hrms/hrms.module').then(m => m.HrmsModule) },
      { path: 'team-info', loadChildren: () => import('./team-info/team-info.module').then(m => m.TeamInfoModule) },
      { path: 'org-structure', loadChildren: () => import('./org-structure/org-structure.module').then(m => m.OrgStructureModule) },
      { path: 'time-sheets', loadChildren: () => import('./time-sheets/time-sheets.module').then(m => m.TimeSheetsModule) },
      { path: 'lms', loadChildren: () => import('./lms/lms.module').then(m => m.LmsModule) },
      {
        path:'employee', component:EmployeeComponent
      },
      {
        path: 'employee/employeeedit/:employee_Id', component: EmployeeEditComponent
        , children: [
          { path: '', redirectTo: 'basic-info', pathMatch: 'full' },
          { path: 'basic-info', component: BasicInfoComponent },
          {path : 'education-experience' ,component:EducationExperienceComponent},
          {path : 'dependents' ,component:DependentsComponent},
          {path : 'resignation' ,component:ResignationComponent},
          {path : 'professional-summary' ,component:ProfessionalSummaryComponent},
          {path : 'kye' ,component:KyeComponent},
        
         
        ]
      },
      {path:'employeeedit/:employee_Id', component: EmployeeEditComponent
      , children: [
        { path: '', redirectTo: 'basicInfo', pathMatch: 'full' },
        { path: 'basicInfo', component: BasicInfoComponent },
      {path : 'education-experience' ,component:EducationExperienceComponent},
    
      {path : 'professional-summary' ,component:ProfessionalSummaryComponent},
      {path : 'kye' ,component:KyeComponent},

      ]
    },
    
    
    ],

  },

  { path: '', redirectTo: 'hrms', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
