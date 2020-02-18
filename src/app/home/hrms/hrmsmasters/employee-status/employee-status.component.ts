import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.scss']
})
export class EmployeeStatusComponent implements OnInit {
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
