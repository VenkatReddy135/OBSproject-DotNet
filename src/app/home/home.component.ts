import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { AuthService } from '../services/auth.service';
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url: string;
  urlArray: any;
  route: string;

  roles:any=[
    {role: 'ROLE_ADMIN', value:false},
    {role: 'ROLE_HR', value:false},
    {role: 'ROLE_USER', value:false},
    {role: 'ROLE_MANAGER', value:false},
    {role: 'ROLE_SALES', value:false},
    {role: 'ROLE_BDM', value:false},
    {role: 'ROLE_BUHEAD', value:false},
    {role: 'ROLE_SBUHEAD', value:false},
    {role: 'ROLE_DM', value:false},
    {role: 'ROLE_FINANCE', value:false},
    {role: 'ROLE_STAFFAUGHEAD', value:false},
    {role: 'ROLE_BDMHEAD', value:false}
    
   
];

  role:string;
  constructor(location: Location, private router: Router,private authService:AuthService) {
    this.role = this.authService.decryptData(sessionStorage.getItem('role'));
    console.log(this.role,"role");

    for(var i=0;i<this.roles.length;i++){
      console.log(this.roles[i].role,"roles");
      if(this.roles[i].role==this.role.trim()){
        this.roles[i].value=true;
      }
    }
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.url = location.path();
        this.urlArray = this.url.slice(1).split("/");
        //console.log(this.urlArray[this.urlArray.length - 1]);
      } else {
        this.route = "Home";

      }
    });
  }
  ngOnInit() {
    //this.getUrl();

  }
  openNav() {
    document.getElementById("mySidebar").style.width = "270px";
    document.getElementById("mySidebar").style.display = "block";
    //document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebar").style.display = "none";
    //document.getElementById("main").style.marginLeft= "0";
  }


  logout() {
    sessionStorage.clear();
    this.router.navigate(['index'])
  }
}
