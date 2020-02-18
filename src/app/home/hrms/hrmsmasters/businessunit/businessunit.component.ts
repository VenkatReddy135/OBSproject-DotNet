import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-businessunit',
  templateUrl: './businessunit.component.html',
  styleUrls: ['./businessunit.component.scss']
})
export class BusinessunitComponent implements OnInit {

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
