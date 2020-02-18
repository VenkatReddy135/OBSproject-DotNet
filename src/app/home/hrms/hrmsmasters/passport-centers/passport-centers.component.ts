import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passport-centers',
  templateUrl: './passport-centers.component.html',
  styleUrls: ['./passport-centers.component.scss']
})
export class PassportCentersComponent implements OnInit {
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
