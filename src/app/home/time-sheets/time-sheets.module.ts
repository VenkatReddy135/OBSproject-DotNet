import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSheetsRoutingModule } from './time-sheets-routing.module';
import { TimeSheetsComponent } from './time-sheets.component';


@NgModule({
  declarations: [TimeSheetsComponent],
  imports: [
    CommonModule,
    TimeSheetsRoutingModule
  ]
})
export class TimeSheetsModule { }
