import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '../okta-auth-service';

@Component({
  selector: 'app-rd-okta-callback',
  templateUrl: './rd-okta-callback.component.html',
  styleUrls: ['./rd-okta-callback.component.scss']
})
export class RdOktaCallbackComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(public oktaAuthserv: OktaAuthService,private router:Router) {}

  ngOnInit(): void {    
    //this.oktaAuthserv.handleAuthentication();
  }

}
