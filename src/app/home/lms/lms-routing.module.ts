import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { ApplyComponent } from './apply/apply.component';
import { ReviewComponent } from './review/review.component';
import { GrantsComponent } from './grants/grants.component';
import { LmsComponent } from './lms.component';


const routes: Routes = [
  {
    path: '', component: LmsComponent,
    children:[
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: 'summary', component: SummaryComponent },
      { path: 'apply', component: ApplyComponent },
      { path: 'review', component: ReviewComponent },
      { path: 'grants', component: GrantsComponent }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsRoutingModule { }
