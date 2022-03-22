import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { OktaAuthService } from './okta-auth-service'; 
import * as moment from 'moment';
@Injectable({providedIn: 'root'})
export class OktaAuthRefreshGuard implements CanActivateChild {
    public oktaAuthToken: any;
  constructor(private okta: OktaAuthService, private router: Router) {}
  async canActivateChild() {
    console.log("refresh token app component", JSON.parse(localStorage.getItem("okta-token-storage")));
    console.log("refresh is Auth app component", JSON.parse(localStorage.getItem("okta-auth-flag")));
    this.oktaAuthToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    if((this.oktaAuthToken!= null) && (this.oktaAuthToken.idToken.expiresAt < moment(Date.now()).unix())){
      console.log(this.oktaAuthToken.idToken.expiresAt);
      console.log(moment(Date.now()).unix());
      this.okta.logout();
      this.router.navigate(['/callback'])
    }
    return true;
  }
}