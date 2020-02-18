import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { EducationExperienceComponent } from './education-experience/education-experience.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProfessionalSummaryComponent } from './professional-summary/professional-summary.component';
import { KyeComponent } from './kye/kye.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  {
    path: '', component: InfoComponent,
    children: [
      {path : 'basic-info' ,component:BasicInfoComponent},
      {path : 'education & experience' ,component:EducationExperienceComponent},
      {path : 'project details' ,component:ProjectDetailsComponent},
      {path : 'professional summary' ,component:ProfessionalSummaryComponent},
      {path : 'kye' ,component:KyeComponent},
      {path : 'others' ,component:OthersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
