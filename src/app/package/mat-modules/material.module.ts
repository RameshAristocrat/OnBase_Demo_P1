import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MdePopoverModule } from "@material-extended/mde";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule, MatNavList } from "@angular/material/list";
import { MatDatepickerModule } from "@angular/material/datepicker";
//import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSliderModule } from "@angular/material/slider";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
//import { MatNativeDateModule, MatIconModule, MatOptionModule, MatChipsModule, MatSidenavModule, MatTreeModule } from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatStepperModule } from "@angular/material/stepper";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatSidenavModule} from '@angular/material/sidenav';
//import { MatPasswordStrengthModule } from "@angular-material-extensions/password-strength";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import {MatDividerModule} from '@angular/material/divider';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatNativeDateModule} from "@angular/material/core";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from '@angular/forms';
import { IgxGridModule } from "igniteui-angular";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxRippleModule,
	IgxChipsModule
 } from "igniteui-angular";
//import { IgxGridModule } from 'igniteui-angular';
@NgModule({
  declarations: [],
  providers: [
   // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MdePopoverModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    //MatNavList,
    MatDatepickerModule,
   // MatMomentDateModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSliderModule, MatAutocompleteModule, 
    MatNativeDateModule,
     MatIconModule,
     // MatOptionModule,
    MatGridListModule, MatTabsModule, MatSnackBarModule, MatExpansionModule, MatProgressBarModule, MatSlideToggleModule, MatStepperModule,
    MatMenuModule,
   // MatChipsModule,
    //MatTreeModule,
    //MatPasswordStrengthModule, 
    MatButtonToggleModule,
    MatDividerModule,
    GoogleChartsModule,
    IgxGridModule,
    IgxButtonModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxRippleModule,
    IgxChipsModule,
    //AngularFontAwesomeModule
    //NativeDateAdapter
    NgSelectModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MdePopoverModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    //MatNavList,
    MatDatepickerModule,
    //MatMomentDateModule,
    MatBadgeModule,
    MatSliderModule, MatAutocompleteModule, 
    MatNativeDateModule, 
    MatIconModule,
    IgxGridModule, 
    //MatOptionModule,
    MatGridListModule, MatTabsModule, MatSnackBarModule, MatExpansionModule, MatProgressBarModule, MatSlideToggleModule, MatStepperModule,
    MatMenuModule,
    //MatChipsModule,
    MatToolbarModule,
    MatSidenavModule,
    //MatTreeModule,
    //MatPasswordStrengthModule, 
    MatButtonToggleModule,
    MatDividerModule,
    GoogleChartsModule,
    IgxGridModule,
    IgxButtonModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxRippleModule,
    IgxChipsModule,
    //FontAwesomeModule
    //NativeDateAdapter
    NgSelectModule,
    FormsModule
  ],
})
export class MaterialModule { }
