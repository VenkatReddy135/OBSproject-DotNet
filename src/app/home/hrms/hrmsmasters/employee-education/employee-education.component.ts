import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-education',
  templateUrl: './employee-education.component.html',
  styleUrls: ['./employee-education.component.scss']
})
export class EmployeeEducationComponent implements OnInit {
  updateCard: boolean;
  
  constructor() { }

  ngOnInit() {
  }
  edit() {
    this.updateCard = true;
  }
  mainCard() {
   
    this.updateCard = false;
  }
}
