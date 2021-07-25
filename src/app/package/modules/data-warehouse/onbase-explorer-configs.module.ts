import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../../mat-modules/material.module';
import { onbaseExplorerRoutes } from './onbase-explorer-configs-routing';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnbaseExplorerCommonSearchComponent } from './explorer/onbase-explorer-common-search/onbase-explorer-common-search.component';
@NgModule({
    declarations: [OnbaseExplorerCommonSearchComponent],
    imports:[
      FormsModule,
      ReactiveFormsModule,
      onbaseExplorerRoutes,
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
export class OnbaseExplorerConfigModule { 

}