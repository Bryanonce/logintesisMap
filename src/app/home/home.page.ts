import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router, private storage: Storage) { 
  }

  ngOnInit() {
  }

  goMap(){
    this.router.navigate(['/mapa']);
  }
  goDanger(){
    this.router.navigate(['/peligro']);
  }
  goRender(){
    this.router.navigate(['/render']);
  }
  goOut(){
    /*this.storage.set('googleAuth','false')
    .then(()=>{
      this.router.navigate(['/login']);
    })*/
  }

}
