import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-separationtype',
  templateUrl: './separationtype.component.html',
  styleUrls: ['./separationtype.component.scss']
})
export class SeparationtypeComponent implements OnInit {
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
