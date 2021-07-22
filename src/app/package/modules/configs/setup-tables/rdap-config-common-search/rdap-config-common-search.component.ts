import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rdap-config-common-search',
  templateUrl: './rdap-config-common-search.component.html',
  styleUrls: ['./rdap-config-common-search.component.scss']
})
export class RdapConfigCommonSearchComponent implements OnInit {
  formName: string;
  route: string;
  routeName: string;
  pageName : string;
  constructor(private httpClient: HttpClient, location: Location, router: Router, public fb: FormBuilder,) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
        this.routeName = this.route.split('/')[this.route.split('/').length - 1];
        // if(this.routeName == "marketsearch"){
        //   this.pageName = "Market";
        // }else if(this.routeName == "studiosearch"){
        //   this.pageName = "Studio";
        // }else if(this.routeName == "versionsearch"){
        //   this.pageName = "Version";
        // }else if(this.routeName == "eppsearch"){
        //   this.pageName = "EPP";
        // }else if(this.routeName == "gravitysearch"){
        //   this.pageName = "Gravity";
        // }else if(this.routeName == "poolsearch"){
        //   this.pageName = "EPP";
        // }else if(this.routeName == "regionsearch"){
        //   this.pageName = "EPP";
        // }
      } else {
        this.route = 'Home'
      }
    });
  }

  ngOnInit(): void {
  }

  submit(event){
    console.log("event",event);
  }

}
