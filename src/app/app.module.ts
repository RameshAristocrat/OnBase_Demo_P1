import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './package/core/login/login.component';
import { CoreModule } from './package/core/core.module';
import { MaterialModule } from "../app/package/mat-modules/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavService } from './package/core/side-menu-bar/sidenav.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { RdapExtraPinRequestDropdownComponent } from './package/modules/rdap-shared-components/rdap-autocomplete-shared-component/rdap-extra-pin-request-dropdown/rdap-extra-pin-request-dropdown.component';
//import { RdapSearchSharedComponent } from './package/modules/rdap-shared-components/rdap-search-shared/rdap-search-shared.component';
//import { StudioComponent } from './package/modules/configs/setup-tables/studio/studio.component';
//import { RDAPExtraPINRequestComponent } from './package/modules/rdap-extra-pin-request/rdap-extra-pin-request.component';
//import { DashboardComponent } from './package/launch-pad/components/dashboard/dashboard.component';
const config = {
  issuer: 'https://aristocrat.okta.com',
  redirectUri: 'http://sydc-appdev-01:8080/home',
  clientId: '0oa9t7ifubUwIhATi357',
  scope: 'openid'
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //SlimScroll,
    //RdapExtraPinRequestDropdownComponent,
    //RdapSearchSharedComponent,
    //StudioComponent,
   // RDAPExtraPINRequestComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    CoreModule,
    CommonModule,
    HttpClientModule,
    //OktaAuthModule.initAuth(config),
  ],
  providers: [SidenavService,
    //WorkoutService,
    //{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
