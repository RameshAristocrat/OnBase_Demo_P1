import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { RdapConfigStudioSearchComponent } from './setup-tables/rdap-config-studio-search/rdap-config-studio-search.component';
import { MaterialModule } from '../../mat-modules/material.module';
import { SetupTableHomeComponent } from './setup-tables/setup-table-home/setup-table-home.component';
import { configRoutes } from './rdap-configs.routing';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdapConfigMarketSearchComponent } from './setup-tables/rdap-config-market-search/rdap-config-market-search.component';
import { RdapConfigCommonSearchComponent } from './setup-tables/rdap-config-common-search/rdap-config-common-search.component';
import { RdapConfigCommonAddEditComponent } from './setup-tables/rdap-config-common-add-edit/rdap-config-common-add-edit.component';
@NgModule({
    declarations: [RdapConfigStudioSearchComponent, SetupTableHomeComponent, RdapConfigMarketSearchComponent, RdapConfigCommonSearchComponent, RdapConfigCommonAddEditComponent],
    imports:[
      FormsModule,
      ReactiveFormsModule,
        configRoutes,
        MaterialModule,
        CommonModule, 
        CoreModule,
        MatGridListModule, 
        MatCardModule, 
        MatMenuModule, 
        MatIconModule, 
        MatButtonModule, 
        LayoutModule],
    exports:[],
  providers: [],
  bootstrap: [],
})
export class RdapConfigModule { 

}