import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index.component';
import { LoginGuard } from '../guards/login.guard';


const routes: Routes = [
  { path: '',component:IndexComponent,canActivate:[LoginGuard],children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
matchMedia
