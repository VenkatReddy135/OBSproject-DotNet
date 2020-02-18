import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeSheetsComponent } from './time-sheets.component';


const routes: Routes = [
  { path: '', component: TimeSheetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeSheetsRoutingModule { }
