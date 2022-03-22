import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuth, IDToken, AccessToken, RefreshToken } from '@okta/okta-auth-js';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({ providedIn: 'root' })
export class OktaAuthService {
  public CLIENT_ID = environment.oktaconfig.CLIENT_ID;
  public ISSUER = environment.oktaconfig.ISSUER;
  public LOGIN_REDIRECT_URI = environment.oktaconfig.LOGIN_REDIRECT_URI;
  public LOGOUT_REDIRECT_URI = environment.oktaconfig.LOGOUT_REDIRECT_URI;
  public SCOPE = environment.oktaconfig.SCOPE;
  //public oktaAuth:OktaAuth;
  public oktaConfigDetails: any;
  oktaAuth = new OktaAuth({
    clientId: this.CLIENT_ID,
    issuer: this.ISSUER,
    redirectUri: this.LOGIN_REDIRECT_URI,
    pkce: true,
    scopes: this.SCOPE
  });
  $isAuthenticated: Observable<boolean>;
  private observer?: Observer<boolean>;
  constructor(private router: Router, private httpClient: HttpClient) {
    console.log("env file loaded",environment.oktaconfig);
    console.log("OKTA LOGIN_REDIRECT_URI",this.LOGIN_REDIRECT_URI);
    this.$isAuthenticated = new Observable((observer: Observer<boolean>) => {
      this.observer = observer;
      this.isAuthenticated().then(val => {
        observer.next(val);
      });
    });
  }

  async isAuthenticated() {
    let tempToken = this.oktaAuth.isAuthenticated();
    // Checks if there is a current accessToken in the TokenManger.
    return !!(await this.oktaAuth.tokenManager.get('accessToken'));
  }

  login(originalUrl: string) {
    // Save current URL before redirect
    sessionStorage.setItem('okta-app-url', originalUrl || this.router.url);
    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({
      scopes: ['openid', 'email', 'profile']
    });
  }

  async handleAuthentication() {
    let oktaAuthToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    if (this.oktaAuth.token) {
      localStorage.setItem('okta-customapp-flag', 'true');
    //   const tokenContainer = await this.oktaAuth.token.parseFromUrl();
    //   console.log("tokenContainer", tokenContainer)
    //  this.oktaAuth.tokenManager.add('idToken', tokenContainer.tokens.idToken as IDToken);
    //  this.oktaAuth.tokenManager.add('accessToken', tokenContainer.tokens.accessToken as AccessToken);
    //   if (await this.isAuthenticated()) {
    //     this.observer?.next(true);
    //   }
     // this.oktaAuth.tokenManager.clear();

      // Retrieve the saved URL and navigate back
      //const url = sessionStorage.getItem('okta-app-url') as string;
      //this.router.navigateByUrl(url);
    }
  }

  // async logout() {
  //   await this.oktaAuth.signOut({
  //     postLogoutRedirectUri: this.LOGOUT_REDIRECT_URI
  //   });
  // }
  async logout() {
    await this.oktaAuth.tokenManager.clear();
  }

  // async logout(){
  //   localStorage.clear();
  //   sessionStorage.clear();
  //   this.deleteAllCookies();
  //   await this.oktaAuth.signOut();
  //   this.router.navigate(['/login']);
  // }
  deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}


}