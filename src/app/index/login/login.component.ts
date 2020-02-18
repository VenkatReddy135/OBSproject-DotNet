import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { error } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder, private authservice: AuthService) {

  }
  ngOnInit() {
  }
  eye = false;
  slasheye = true;
  model: any = {};
  
  loginForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });



  eyeHide() {
    if (this.eye == false) {
      this.eye = true;
      this.slasheye = false;

    }
    else {
      this.eye = false;
      this.slasheye = true;

    }
  }
  home() {
    this.router.navigate(['home']);
  }
  onLogin(f) {
    this.authservice.loginservice(f).subscribe(res => {
      console.log(res);
      sessionStorage.setItem('userName', this.authservice.encryptData(f.userName));
      sessionStorage.setItem('token', res['authorization']);
      sessionStorage.setItem('role', this.authservice.encryptData(res['authorities']));
      this.router.navigate(['home/hrms/dashboard']);
    },
      error => {
        console.log(error.error.message)
      });
  }

 
}
