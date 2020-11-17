import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Modelos
import { ObservablePost } from '../models/observable.model';

//Servicios
import { ServiceApiRestService } from '../services/service-api-rest.service';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  //public tokenApirest:any;

  constructor(private storage: Storage, private authService: AuthService, public router: Router,private _serverRest:ServiceApiRestService) { 
    storage.ready().then(()=>{
      if(this.storage.get('googleAuth')){
        this.storage.get('googleAuth')
      .then((response) =>{
        if(response == 'true'){
          this.loginGoogle();
        }
      })
      }
      return
    })
  }

  ngOnInit() {
    
  }

  loginGoogle(){
    this.authService.loginWithGoogle()
    .then((response) =>{
      //this.tokenApirest = response;
      this._serverRest.loginRestGoogle(response).subscribe((obs:ObservablePost)=>{
        if(obs.ok==true){
          this.router.navigate(['/home']);
          this.storage.set('googleAuth','true')
        }
        //this.tokenApirest = obs;
      })
    }).catch(err => {
      alert('ERROR:  ' + err);
      //this.tokenApirest = err;
    })
  }

  byPass(){
    this.router.navigate(['/home']);
  }

}
