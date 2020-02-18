import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  url: any = `${environment.host_url}`
  public loginservice(postData) {
    var userObj = { username: postData.userName, password: postData.password }
    return this.http.post(this.url + '/obs/login', userObj);
  }


  public isAuthenticate(): boolean {
    //method return true or false based on login credential
    const token = sessionStorage.getItem('token');

    if (token && token.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }


  public getToken(): string {
    return sessionStorage.getItem('token');
  }


  encryptSecretKey = "OJAS-OBS";
  encryptedvalue: any;
  decryptedvalue: any;

  encryptData(data) {

    try {

      return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();

    } catch (e) {
      console.log(e);
    }
  }

  decryptData(data) {

    try {
      const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }

}
