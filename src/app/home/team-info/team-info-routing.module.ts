import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamInfoComponent } from './team-info.component';


const routes: Routes = [
  { path : '' ,component:TeamInfoComponent},
  { path: 'emp-info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamInfoRoutingModule { }
