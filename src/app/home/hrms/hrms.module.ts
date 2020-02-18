import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrmsRoutingModule } from './hrms-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule} from '@angular/forms'



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HrmsRoutingModule,
    FormsModule
    
  ]
})
export class HrmsModule { }
