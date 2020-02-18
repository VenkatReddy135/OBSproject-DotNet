import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HrmsmastersService {
  host_url:any;

  constructor(private http:HttpClient,private _router: Router) { 
    this.host_url = `${environment.host_url}`
  }
  getCostcenter(costcenterReqObj) {
    return this.http.post(this.host_url+"/obs/master/costcenterservice/get",costcenterReqObj);
  }

  
}
