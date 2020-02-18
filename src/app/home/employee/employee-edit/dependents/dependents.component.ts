import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.scss']
})
export class DependentsComponent implements OnInit {
addDependent : boolean =false;
  constructor() { }
  addDependents(){
    this.addDependent=true;
  }
  cancelDependent(){
    this.addDependent=false;
  }
  ngOnInit() {
  }

}
