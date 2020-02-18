import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LmsRoutingModule } from './lms-routing.module';
import { LmsComponent } from './lms.component';
import { SummaryComponent } from './summary/summary.component';
import { ApplyComponent } from './apply/apply.component';
import { ReviewComponent } from './review/review.component';
import { GrantsComponent } from './grants/grants.component';


@NgModule({
  declarations: [LmsComponent, SummaryComponent, ApplyComponent, ReviewComponent, GrantsComponent],
  imports: [
    CommonModule,
    LmsRoutingModule
  ]
})
export class LmsModule { }
