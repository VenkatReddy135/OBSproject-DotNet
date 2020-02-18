import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { EducationExperienceComponent } from './education-experience/education-experience.component';
import { ProfessionalSummaryComponent } from './professional-summary/professional-summary.component';
import { KyeComponent } from './kye/kye.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { OthersComponent } from './others/others.component';


@NgModule({
  declarations: [InfoComponent, BasicInfoComponent, EducationExperienceComponent, ProfessionalSummaryComponent, KyeComponent, ProjectDetailsComponent, OthersComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
