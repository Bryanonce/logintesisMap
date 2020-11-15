import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router, private _google:GooglePlus) { }
  loginWithGoogle(){
    return this._google.login({'webClientId': ''})
    .then((res)=>{
      const user_data_google = res.idToken;
      return user_data_google;      
    })
  }

}