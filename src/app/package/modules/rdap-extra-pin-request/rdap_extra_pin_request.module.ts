import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { RDAPExtraPINRequestComponent } from './rdap-extra-pin-request.component';
import { MaterialModule } from '../../mat-modules/material.module';
import { ExtraPinRequestRoutes } from './rdap_extra_pin_request_routing';
import { RdapExtraPinRequestDetailsComponent } from './rdap-extra-pin-request-details/rdap-extra-pin-request-details.component';
import { RdapExtraPinRequestLinkedPinComponent } from './rdap-extra-pin-request-linked-pin/rdap-extra-pin-request-linked-pin.component';
import { RdapExtraPinRequestGameTitleComponent } from './rdap-extra-pin-request-game-title/rdap-extra-pin-request-game-title.component';
import { RdapExtraPinRequestCabinetTypeComponent } from './rdap-extra-pin-request-cabinet-type/rdap-extra-pin-request-cabinet-type.component';
import { configRoutes } from '../configs/rdap-configs.routing';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [RDAPExtraPINRequestComponent,
    RdapExtraPinRequestDetailsComponent,
    RdapExtraPinRequestLinkedPinComponent,
    RdapExtraPinRequestGameTitleComponent,
    RdapExtraPinRequestCabinetTypeComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    configRoutes,
    CoreModule,
    ExtraPinRequestRoutes],
  exports: [RDAPExtraPINRequestComponent],
  providers: [],
  bootstrap: [],
})
export class RdapExtraPinRequestModule {

}