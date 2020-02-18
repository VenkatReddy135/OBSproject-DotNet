import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrmsmastersService } from '../hrmsmasters.service';

@Component({
  selector: 'app-costcenter',
  templateUrl: './costcenter.component.html',
  styleUrls: ['./costcenter.component.scss']
})
export class CostcenterComponent implements OnInit {

  updateCard: boolean;
  tableData: boolean = true;
  costCenterList: Object;
  p:number=1;
  constructor(private router: Router, private hrmsServices: HrmsmastersService) { }

  ngOnInit() {
    // this.getCostCenter();
  }
  // getCostCenter() {
  //   var request =
  //   {
  //     "costCenter": [{
  //     }],
  //     "sessionId": "124",
  //     "transactionType": "get"
  //   }
  //   this.hrmsServices.getCostcenter(request).subscribe(res => {
  //     console.log(res, "costcenter Data list")
  //   })
  // }

  duplicateData = [
    {
      'id':1,
      'name':9999
    },
    {
      'id':2,
      'name':9909
    },
    {
      'id':3,
      'name':9078
    },
    {
      'id':4,
      'name':9090
    },
    {
      'id':5,
      'name':9900
    },
    {
      'id':6,
      'name':9009
    }
    

  ]

  edit() {
    this.updateCard = true;
  }
  mainCard() {
    this.tableData = true;
    this.updateCard = false;
  }
}
