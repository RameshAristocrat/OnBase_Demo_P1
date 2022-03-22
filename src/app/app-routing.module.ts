import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//const routes: Routes = [];
const routes: Routes = [{ path: "", redirectTo: "callback", pathMatch: "full" }];
@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload", relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
