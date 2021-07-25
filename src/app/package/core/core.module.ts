import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CoreRoutes } from '../core/core-routing';
import { LoginFooterComponent } from './login/login-footer/login-footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuBarComponent } from './main-menu-bar/main-menu-bar.component';
import { MaterialModule } from "../mat-modules/material.module";
import{CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LauncherComponent } from './launcher/launcher.component';
import { SideMenuBarComponent } from './side-menu-bar/side-menu-bar.component';
import { SidenavService } from './side-menu-bar/sidenav.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DBoardComponent } from './d-board/d-board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DatatableComponent } from './components/datatable/datatable.component';
import { RdapSharedConfigSearchComponent } from './core-shared-components/rdap-shared-config-search/rdap-shared-config-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdapSharedBreadcrumbComponent } from './core-shared-components/rdap-shared-breadcrumb/rdap-shared-breadcrumb.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RdapSharedConfigSetuptableAddeditComponent } from './core-shared-components/rdap-shared-config-setuptable-addedit/rdap-shared-config-setuptable-addedit.component';
import { OnbaseSharedExplorerSearchComponent } from './core-shared-components/onbase-shared-explorer-search/onbase-shared-explorer-search.component';
import { OnbaseSharedExplorerDoctypesearchComponent } from './core-shared-components/onbase-shared-explorer-search/onbase-shared-explorer-doctypesearch/onbase-shared-explorer-doctypesearch.component';
@NgModule({
  declarations: [
    LoginFooterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuBarComponent,
    LauncherComponent,
    SideMenuBarComponent,
    DBoardComponent,
    DatatableComponent,
    RdapSharedConfigSearchComponent,
    RdapSharedBreadcrumbComponent,
    RdapSharedConfigSetuptableAddeditComponent,
    OnbaseSharedExplorerSearchComponent,
    OnbaseSharedExplorerDoctypesearchComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CoreRoutes,
    MaterialModule,
    CommonModule, 
    MatGridListModule,
     MatCardModule, 
     MatMenuModule, 
     MatIconModule, 
     MatButtonModule, 
     LayoutModule
    ],
  exports:[
  LoginFooterComponent,
  SideMenuBarComponent,
  RdapSharedConfigSearchComponent,
  RdapSharedBreadcrumbComponent,
  RdapSharedConfigSetuptableAddeditComponent,
  OnbaseSharedExplorerSearchComponent
  ],
  entryComponents:[
    RdapSharedConfigSearchComponent,
    RdapSharedBreadcrumbComponent,
    RdapSharedConfigSetuptableAddeditComponent,
    OnbaseSharedExplorerSearchComponent
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { 

}
