import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OktaAuthService } from './okta-auth-service'; 

@Injectable({providedIn: 'root'})
export class OktaAuthGuard implements CanActivate {
  constructor(private okta: OktaAuthService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("token app component", JSON.parse(localStorage.getItem("okta-token-storage")));
    console.log("is Auth app component", JSON.parse(localStorage.getItem("okta-auth-flag")));
    let tokenflag = JSON.parse(localStorage.getItem("okta-token-storage"))==null?0:1;
    console.log("tokenflag",tokenflag);
    let authenticated = await this.okta.isAuthenticated();
    if (authenticated) { return true; }

    // Redirect to login flow.
    this.okta.login(state.url);
    return false;
  }
}