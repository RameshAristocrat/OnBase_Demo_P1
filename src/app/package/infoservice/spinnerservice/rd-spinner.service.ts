import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class RdSpinnerService {

  constructor(private spinner: NgxSpinnerService) { }

  show(){
    this.spinner.show();
  }
  hide(){
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
