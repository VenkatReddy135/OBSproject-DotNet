import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  personal_info_data:boolean =true;
  contact_info_data:boolean =true;
  bank_info_data:boolean =true;
  onboarding_data:boolean =true;
  editable1:boolean = false;
  editable2:boolean = false;
  editable3:boolean = false;
  editable4:boolean = false;
  constructor() { }
  duplicateData1 = [
    {
      'id':1,
      'name':"razak",
      'dob':12-1-1997,
      'gender':"male",
      'role':"manager",
      'busemail':"a@gamil.com",
      'title':"ceo"
    }
  ]
  duplicateData2 = [
    {
      'phone':1,
      'altnumber':9090909090,
      'email':"sdgsj@gmail.com",
      'emergencynumber':9087654321,
      'permananentaddr':"sr nagar",
      'currrentaddr':"sr nagar"
    }
  ]
  editPersonalInfo(){
    this.editable1  = true;
    this.personal_info_data = false;
  }
  closePersonalInfo(){
    this.editable1 = false;
    this.personal_info_data  =true
  }
  editContactInfo(){
    this.editable2  = true;
    this.contact_info_data = false;
  }
  closeContactInfo(){
    this.editable2  = false;
    this.contact_info_data = true;
  }

  editBankInfo(){
    this.editable3  = true;
    this.bank_info_data = false;
  }
  closeBankInfo(){
    this.editable3  = false;
    this.bank_info_data = true;
  }
 
  editOnboarding(){
    this.editable4  = true;
    this.onboarding_data = false;
  }
  closeOnboarding(){
    this.editable4  = false;
    this.onboarding_data = true;
  }

  ngOnInit() {
  }

}
