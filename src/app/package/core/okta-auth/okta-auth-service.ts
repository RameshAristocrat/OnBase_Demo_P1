import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuth, IDToken, AccessToken } from '@okta/okta-auth-js';

@Injectable({providedIn: 'root'})
export class OktaAuthService {
  // IMPORTANT!
  // Replace {clientId} with your actual Client ID
  // Replace {yourOktaDomain} with your actual Okta domain
  // If using a custom authorization server, ISSUER should be 'https://{yourOktaDomain}/oauth2/${authServerId}'
// Dev App
  CLIENT_ID = '0oa1dhxn7iiOdIVNZ5d7';
  ISSUER = 'https://dev-88037208.okta.com'
  LOGIN_REDIRECT_URI = 'https://bg4ws1619:9090/home/explorer/search';
  LOGOUT_REDIRECT_URI = 'https://bg4ws1619:9090';
  SCOPE = ['openid','email'];

  //Aristocrat Portal App
//   CLIENT_ID = '0oa9t7ifubUwIhATi357';
//   ISSUER = 'https://aristocrat.okta.com'
//   LOGIN_REDIRECT_URI = 'http://sydc-appdev-01:8080/home';
//   LOGOUT_REDIRECT_URI = 'http://sydc-appdev-01:8080';
//   SCOPE = ['openid','email'];

  oktaAuth = new OktaAuth({
    clientId: this.CLIENT_ID,
    issuer: this.ISSUER,
    redirectUri: this.LOGIN_REDIRECT_URI,
    pkce: true,
    scopes:this.SCOPE
  });

  $isAuthenticated: Observable<boolean>;
  private observer?: Observer<boolean>;
  constructor(private router: Router) {
    this.$isAuthenticated = new Observable((observer: Observer<boolean>) => {
      this.observer = observer;
      this.isAuthenticated().then(val => {
        observer.next(val);
      });
    });
  }

  async isAuthenticated() {

     //console.log(this.oktaAuth.token.parseFromUrl());
    // Checks if there is a current accessToken in the TokenManger.
    return !!(await this.oktaAuth.tokenManager.get('accessToken'));
  }

  login(originalUrl: string) {
    // Save current URL before redirect
    sessionStorage.setItem('okta-onbase-app-url', originalUrl || this.router.url);

    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({
      scopes: ['openid', 'email', 'profile']
    });
  }

  async handleAuthentication() {
      if(this.oktaAuth.token){
        const tokenContainer = await this.oktaAuth.token.parseFromUrl();
        console.log("tokenContainer",tokenContainer)
            this.oktaAuth.tokenManager.add('idToken', tokenContainer.tokens.idToken as IDToken);
            this.oktaAuth.tokenManager.add('accessToken', tokenContainer.tokens.accessToken as AccessToken);
            localStorage.setItem('testObject', JSON.stringify(this.oktaAuth));
            if (await this.isAuthenticated()) {
              this.observer?.next(true);
            }
        
            // Retrieve the saved URL and navigate back
            const url = sessionStorage.getItem('okta-onbase-app-url') as string;
            this.router.navigateByUrl(url);
      }
  }

  async logout() {
    await this.oktaAuth.signOut({
      postLogoutRedirectUri: this.LOGOUT_REDIRECT_URI
    });
  }
}