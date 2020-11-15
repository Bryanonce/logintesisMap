import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Modelos
import { ObservablePost } from '../models/observable.model';

//Servicios
import { ServiceApiRestService } from '../services/service-api-rest.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  public tokenApirest:any;

  constructor(private authService: AuthService, public router: Router,private _serverRest:ServiceApiRestService) { }

  ngOnInit() {
  }

  loginGoogle(){
    this.authService.loginWithGoogle()
    .then((response) =>{
      //this.tokenApirest = response;
      this._serverRest.loginRestGoogle(response).subscribe((obs:ObservablePost)=>{
        if(obs.ok==true){
          this.router.navigate(['/home']);
        }
        this.tokenApirest = obs;
      })
    }).catch(err => {
      alert('ERROR:  ' + err);
      //this.tokenApirest = err;
    })
  }

  loginApiRest(){
    
  }

}
