import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resourcetype',
  templateUrl: './resourcetype.component.html',
  styleUrls: ['./resourcetype.component.scss']
})
export class ResourcetypeComponent implements OnInit {

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
