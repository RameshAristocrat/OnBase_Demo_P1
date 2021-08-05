import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OktaAuthService } from 'src/app/package/core/okta-auth/okta-auth-service';

@Component({
  selector: 'app-onbase-explorer-common-search',
  templateUrl: './onbase-explorer-common-search.component.html',
  styleUrls: ['./onbase-explorer-common-search.component.scss']
})
export class OnbaseExplorerCommonSearchComponent implements OnInit {
  public panelOpenState;
  public searchFilterData;
  public apiConfigData;
  public apiEndpointUrl;
  public apiParam;
  searchGridData: any;
  gridsource: any[];
  constructor(private httpClient: HttpClient, location: Location, private _router: Router,
    public fb: FormBuilder, private _snackBar: MatSnackBar, private okta: OktaAuthService) {
    this.httpClient.get("assets/api/master-api.json").subscribe(data => {
      this.apiConfigData = data;
    });
    this.panelOpenState = true;
  }

  ngOnInit(): void {
    this.panelOpenState = true;
  }

  searchfilterdata(event) {
    this.searchFilterData = event;
  }
  searcSubmit() {
    let basedoctype = this.searchFilterData.basesearchform.get('basedocumenttype').value;
    let apiTempValue;
    this.searchGridData = [];
    this.gridsource = [];
    if(basedoctype=="ACH"){
      this.httpClient.get("assets/config/search-data-mockup.json").subscribe(data => {     
        this.gridsource.push(data);
        this.gridsource.filter(x => {
          x.filter(y => {
            if (basedoctype == y.documenttype) {
              this.searchGridData = y.data;
            };
          })
        });
      });
    }else{
      this.apiConfigData.filter(x => {
        if (x.documenttype == basedoctype) {
          this.apiEndpointUrl = x.endpoint;
          this.apiParam = x.param;
          Object.keys(this.apiParam[0]).forEach(x => {
            if (x == "Vendor_Name") {
              apiTempValue = this.searchFilterData.doctypesearchform.get(x).value;
              this.apiEndpointUrl = this.apiEndpointUrl + "&" + x + "=" + apiTempValue["id"];
            } else if (x == "Page_Size") {
              this.apiEndpointUrl = this.apiEndpointUrl + "&" + x + "=" + 25;
            } else if (x == "Page_Nbr") {
              this.apiEndpointUrl = this.apiEndpointUrl + "&" + x + "=" + 1;
            } else {
              apiTempValue = null;
              this.apiEndpointUrl = this.apiEndpointUrl + "&" + x + "=" + null;
            }
          });
        }
      })
      this.httpClient.get(this.apiEndpointUrl).subscribe(data => { 
        this.searchGridData = data;
      })
    }
    
  }

}
