import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-onbase-explorer-common-search',
  templateUrl: './onbase-explorer-common-search.component.html',
  styleUrls: ['./onbase-explorer-common-search.component.scss']
})
export class OnbaseExplorerCommonSearchComponent implements OnInit {
  public panelOpenState;
  public searchFilterData;
  searchGridData:any;
  gridsource: any[];
  constructor(private httpClient: HttpClient, location: Location, private _router: Router,
    public fb: FormBuilder,private _snackBar: MatSnackBar) {
    this.panelOpenState = true;
  }

  ngOnInit(): void {
    this.panelOpenState = true;
  }

  searchfilterdata(event) {
    this.searchFilterData = event;
   // console.log(this.searchFilterData);
  }
  searcSubmit() {
   // console.log("this.searchFilterData", this.searchFilterData.basesearchform.get('basedocumenttype').value);
    let basedoctype = this.searchFilterData.basesearchform.get('basedocumenttype').value;
    this.searchGridData=[];
    this.gridsource = [];
    this.httpClient.get("assets/config/search-data-mockup.json").subscribe(data => {
      this.gridsource.push(data);
      this.gridsource.filter(x => {
        x.filter(y => {
          if(basedoctype == y.documenttype){
            this.searchGridData= y.data;
            console.log("this.searchGridData= y",this.searchGridData);
          };
        })
      });
    });
  }

}
