// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'RDAP';
//   onActivate(e) {
//     console.log(e.constructor.name);
//     if ((e.constructor.name)==="LoginComponent"){ // for example
//             window.scroll(0,0);
//     }
// }

// }
import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '../app/package/core/okta-auth/okta-auth-service';
import { OktaAuth, IDToken, AccessToken } from '@okta/okta-auth-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Onbase';
  isAuthenticated: boolean = false;
  constructor(public oktaAuthserv: OktaAuthService) {}

  ngOnInit(): void {
    // this.oktaAuthserv.$isAuthenticated.subscribe(val =>{
    //   this.isAuthenticated = val
    // });
    // if(!this.isAuthenticated){
    // }else{
    // }
  }
}