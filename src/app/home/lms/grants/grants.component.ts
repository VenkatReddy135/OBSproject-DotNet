import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.scss']
})
export class GrantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $("#datepicker").datepicker({ 
            autoclose: true, 
            todayHighlight: true
      }).datepicker('update', new Date());
    });
  }

}
