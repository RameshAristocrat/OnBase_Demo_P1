import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OktaAuthService } from 'src/app/package/core/okta-auth/okta-auth-service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import * as searchparamdata from 'src/assets/api/master-api';
import { RdMasterApiService} from 'src/app/package/api/apiservice/masterApiService';
import { environment } from 'src/environments/environment';
import { RdSpinnerService } from 'src/app/package/infoservice/spinnerservice/rd-spinner.service';
import { SnackbarInfoService } from 'src/app/package/infoservice/snackbarservice/snackbar.service';
import { time } from 'console';
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
  public apiParam: any[];
  public paramsObj:{parameters:any,value:any};
  public paramsObjArr:any[];
  public paramApiArr:{
    documentType:number,
    subDocumentType: number,
    params:any
  }
  private httpOption;
  searchGridData: any;
  gridsource: any[];
  commonviewmodel: any[];
  baseApi:any;
  constructor(private httpClient: HttpClient, location: Location, private _router: Router,
    public fb: FormBuilder, private _snackBar: MatSnackBar, private okta: OktaAuthService,
    private apiServiceCall:RdMasterApiService, private spinner: RdSpinnerService) {
    // this.httpClient.get("assets/api/master-api.json").subscribe(data => {
    //   this.apiConfigData = data;
    // });
    this.baseApi = environment.baseapiurl;
    this.apiConfigData = searchparamdata.searcparam;
    this.panelOpenState = true;
  }

  ngOnInit(): void {
    console.log("apiServiceCall",this.apiServiceCall)
    this.okta.handleAuthentication();
    this.panelOpenState = true;
  }

  searchfilterdata(event) {
    this.searchFilterData = event;
  }
  searcSubmit() {
    this.spinner.show();
    this.commonviewmodel = [];
    this.commonviewmodel.push({});
    //let basedoctype = this.searchFilterData.basesearchform.get('basedocumenttype').value;
    let apiTempValue;
    this.searchGridData = [];
    this.gridsource = [];
    this.paramsObj = {parameters:null,value:null};
    this.paramApiArr={documentType:0,params:null,subDocumentType:0};
    this.paramsObjArr=[];
   // console.log("this.apiParam", this.apiParam);
    console.log("this.searchFilterData", this.searchFilterData)
    if(this.searchFilterData && this.searchFilterData.doctypesearchform != null){
      Object.keys(this.searchFilterData.doctypesearchform.value).forEach(x => {
        console.log("x doctype form", x);
        if(this.searchFilterData.doctypesearchform.value[x]){
          if(x=="Vendor_Name"){
            this.paramsObj={parameters:x,value:this.searchFilterData.doctypesearchform.value[x].id};
          }else{
            this.paramsObj={parameters:x,value:this.searchFilterData.doctypesearchform.value[x]};
          }
          this.paramsObjArr.push(this.paramsObj);
        }
      });
      console.log("paramsObjArr",this.paramsObjArr);
      this.paramApiArr.params = this.paramsObjArr;
      this.paramApiArr.subDocumentType = parseInt(this.searchFilterData.basesearchform.value.basedocumenttype);
      this.paramApiArr.documentType = this.searchFilterData.basesearchform.value.documenttypegroup;
      console.log("paramApiArr",this.paramApiArr);
      console.log("basesearchform",this.searchFilterData.basesearchform);
      this.apiServiceCall.masterSearch(this.baseApi+"search",this.paramApiArr).subscribe(data=>{
        console.log("search response",data);
        this.searchGridData = data.data;
        this.spinner.hide();
      });
    }else{
      this.paramApiArr.params = this.paramsObjArr;
      this.paramApiArr.subDocumentType = parseInt(this.searchFilterData.basesearchform.value.basedocumenttype);
      this.paramApiArr.documentType = this.searchFilterData.basesearchform.value.documenttypegroup;
      console.log("paramApiArr",this.paramApiArr);
      console.log("basesearchform",this.searchFilterData.basesearchform);
      this.apiServiceCall.masterSearch(this.baseApi+"search",this.paramApiArr).subscribe(data=>{
        console.log("search response",data);
        this.searchGridData = data.data;
        this.spinner.hide();
      });
    }
  }
  public masterSearch(url, param): Observable<any> {
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.post<any>(url, param, this.httpOption).pipe(
      catchError((error) => {
        console.log(error);
        return throwError({
          error,
        });
      })
    );
  }

  public reset(){
    
  }
}
