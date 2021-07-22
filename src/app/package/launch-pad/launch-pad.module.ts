import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";
import { LaunchPadRoutes } from "./launch-pad.routing";
//import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MaterialModule } from "../mat-modules/material.module";
//import { LaunchPadService } from "./services/launch-pad.service";
import { HttpClientModule } from "@angular/common/http";
//import { CloudlexSharedModule } from "../modules/cloudlex-shared/cloudlex-shared.module";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    LaunchPadRoutes,
    MaterialModule
  ],
  declarations: [
    //DashboardComponent
  ],
  providers: [],
})
export class LaunchPadModule {}