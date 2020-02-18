import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subbusinessunit',
  templateUrl: './subbusinessunit.component.html',
  styleUrls: ['./subbusinessunit.component.scss']
})
export class SubbusinessunitComponent implements OnInit {
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
