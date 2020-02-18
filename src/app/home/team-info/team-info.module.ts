import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamInfoRoutingModule } from './team-info-routing.module';
import { TeamInfoComponent } from './team-info.component';


import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [TeamInfoComponent],
  imports: [
    CommonModule,
    TeamInfoRoutingModule,
    NgxPaginationModule
  ]
})
export class TeamInfoModule { }
