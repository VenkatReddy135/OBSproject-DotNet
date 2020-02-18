import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#datepicker1').datepicker({
      uiLibrary: 'bootstrap4'
  });
  $('#datepicker2').datepicker({
    uiLibrary: 'bootstrap4'
});
  }

}
