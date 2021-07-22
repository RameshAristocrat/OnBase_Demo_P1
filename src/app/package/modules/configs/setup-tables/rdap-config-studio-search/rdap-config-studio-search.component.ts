import { Component, OnInit } from '@angular/core';
//import * as data from '../../../../../../../src/assets/config/searchConfig.json'
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rdap-config-studio-search',
  templateUrl: './rdap-config-studio-search.component.html',
  styleUrls: ['./rdap-config-studio-search.component.scss']
})
export class RdapConfigStudioSearchComponent implements OnInit {

  ngOnInit(): void {
    // this.searchform = this.fb.group({
    //   // studioname: ["", Validators.required],
    //   // studiodesc: ["", Validators.required]
    // });
  }
  submit(event){
    console.log("event",event);
  }

}
