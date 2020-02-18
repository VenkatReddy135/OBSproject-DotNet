import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { BasicInfoComponent } from './employee/employee-edit/basic-info/basic-info.component';




import {NgxPaginationModule} from 'ngx-pagination';
import { EducationExperienceComponent } from './employee/employee-edit/education-experience/education-experience.component';
import { KyeComponent } from './employee/employee-edit/kye/kye.component';


import { ProfessionalSummaryComponent } from './employee/employee-edit/professional-summary/professional-summary.component';

import { DependentsComponent } from './employee/employee-edit/dependents/dependents.component';
import { ResignationComponent } from './employee/employee-edit/resignation/resignation.component';


@NgModule({
  declarations: [HomeComponent, EmployeeComponent, EmployeeEditComponent,BasicInfoComponent, EducationExperienceComponent, KyeComponent, ProfessionalSummaryComponent, DependentsComponent, ResignationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
   
    NgxPaginationModule
  ],

})
export class HomeModule { }
