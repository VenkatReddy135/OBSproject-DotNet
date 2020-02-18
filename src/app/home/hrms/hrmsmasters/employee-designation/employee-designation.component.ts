import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-designation',
  templateUrl: './employee-designation.component.html',
  styleUrls: ['./employee-designation.component.scss']
})
export class EmployeeDesignationComponent implements OnInit {
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
