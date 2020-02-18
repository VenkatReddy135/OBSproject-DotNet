import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  p:number=1;
  constructor(private router:Router) { }

  duplicateData = [
    {
      'profile':1,
      'name':"razak",
      'employee_id':19127,
      'email':"a@gmail.com",
      'mobile':908989898,
      'status':"lateral"
    },
    {
      'profile':2,
      'name':"praneeth",
      'employee_id':19127,
      'email':"praneeth@gmail.com",
      'mobile':908989898,
      'status':"lateral"
    },
    {
      'profile':3,
      'name':"razak",
      'employee_id':19127,
      'email':"a@gmail.com",
      'mobile':908989898,
      'status':"bench"
    },
    {
      'profile':4,
      'name':"praneeth",
      'employee_id':19127,
      'email':"praneeth@gmail.com",
      'mobile':908989898,
      'status':"lateral"
    },
    {
      'profile':5,
      'name':"razak",
      'employee_id':19127,
      'email':"a@gmail.com",
      'mobile':908989898,
      'status':"bench"
    },
    {
      'profile':6,
      'name':"praneeth",
      'employee_id':19127,
      'email':"praneeth@gmail.com",
      'mobile':908989898,
      'status':"lateral"
    }
    

  ]
//['home/hrms/dashboard']
  // moveToinfo(){
  //   this.router.navigate(['home/team-info/emp-info'])
  // }

  ngOnInit() {
  }

}
