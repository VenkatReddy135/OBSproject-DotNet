import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [IndexComponent, LoginComponent, SignupComponent, ForgotpasswordComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule
  ]
})
export class IndexModule { }
