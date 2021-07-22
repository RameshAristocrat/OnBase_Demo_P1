import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rdap-config-common-add-edit',
  templateUrl: './rdap-config-common-add-edit.component.html',
  styleUrls: ['./rdap-config-common-add-edit.component.scss']
})
export class RdapConfigCommonAddEditComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }
  submit(event){
    console.log("event",event);
  }
}
