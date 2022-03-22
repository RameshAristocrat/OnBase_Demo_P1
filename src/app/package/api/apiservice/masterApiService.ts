import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { RDAPMASTERAPI } from '../apienvironment/api-master-environment';
// import { marketmodel } from 'src//app/package/api/model/master/rd_model_market';
import { OktaAuthService } from '../../core/okta-auth/okta-auth-service';
import { OktaAuth, IDToken, AccessToken } from '@okta/okta-auth-js';
import { environment } from 'src/environments/environment';
//import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
import { RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RdMasterApiService {
  private headers;
  private idToken;
  private param;
  private httpOption;
  //private marketmodel:marketmodel; 
  isAuthenticated: boolean = false;
  public oktaAuthToken: any;
  constructor(private https: HttpClient,public oktaAuthserv: OktaAuthService, 
    private _router: Router, _location: Location) {
    // let idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    // this.httpOption = {
    //   headers: new HttpHeaders({
    //     Authorization: "Bearer " + idToken.idToken,
    //   }),
    // };
  }

  public refreshToken():any{
    console.log(environment.oktaconfig)
    console.log("service refresh token app component", JSON.parse(localStorage.getItem("okta-token-storage")));
    console.log("service refresh is Auth app component", JSON.parse(localStorage.getItem("okta-auth-flag")));
    this.oktaAuthToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    if((this.oktaAuthToken!= null) && (this.oktaAuthToken.idToken.expiresAt < moment(Date.now()).unix())){
      console.log(this.oktaAuthToken.idToken.expiresAt);
      console.log(moment(Date.now()).unix());
      this.oktaAuthserv.logout();
      this._router.navigate(['/callback'])
    }
  }

  public masterSearch(url, param): Observable<any> {
    console.log(url);
   // this.refreshToken();
    //let idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        //"Authorization": "Bearer " + idToken.idToken.idToken
      })
    }
    return this.https.post<any>(url, param, this.httpOption).pipe(
      catchError((error) => {
        console.log(error);
        return throwError({
          error,
        });
      })
    );
  }
  public masterAdd(url:string, addparam:any): Observable<any> {
    this.refreshToken();
    let idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + idToken.idToken.idToken
      })
    }
    return this.https.post<any>(url,addparam,this.httpOption).pipe(
      catchError((error) => {
        console.log(error);
        return throwError({
          error,
        });
      })
    );
  }
  public masterUpdate(url:string, addparam:any): Observable<any> {
    this.refreshToken();
    let idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + idToken.idToken.idToken
      })
    }
    return this.https.put<any>(url,addparam,this.httpOption).pipe(
      catchError((error) => {
        console.log(error);
        return throwError({
          error,
        });
      })
    );
  }
  public masterSearchDDL(url): Observable<any> {
   // this.refreshToken();
    console.log(url);
   // let idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      //  "Authorization": "Bearer " + idToken.idToken.idToken
      })
    }
    return this.https.get<any>(url, this.httpOption).pipe(
      catchError((error) => {
        console.log(error);
        return throwError({
          error,
        });
      })
    );
  }

  public getMasterDataById(url):Observable<any>{
    this.refreshToken();
    let idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + idToken.idToken.idToken
      })
    }
    return this.https.get<any>(url, this.httpOption).pipe(
      catchError((error) => {
        console.log(error);
        return throwError({
          error,
        });
      })
    );
  }

  public deleteMasterDataById(url):Observable<any>{
    this.refreshToken();
    let idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + idToken.idToken.idToken
      })
    }
    return this.https.delete<any>(url, this.httpOption).pipe(
      catchError((error) => {
        console.log(error);
        return throwError({
          error,
        });
      })
    );
  }

  public getRequestPinById(url): Observable<any> {
    this.refreshToken();
    console.log(url);
    let idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + idToken.idToken.idToken
      })
    }
    return this.https.get<any>(url, this.httpOption).pipe(
      catchError((error) => {
        console.log(error);
        return throwError({
          error,
        });
      })
    );
  }

  public managePinUpdate(url:string, addparam:any): Observable<any> {
   //this.refreshToken();
    let idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + idToken.idToken.idToken
      })
    }
    return this.https.put<any>(url,addparam,this.httpOption).pipe(
      catchError((error) => {
        console.log(error);
        return throwError({
          error,
        });
      })
    );
  }

  public download(url: string): Observable<Blob> {
    return this.https.get(url, {
      responseType: 'blob'
    })
  }
}