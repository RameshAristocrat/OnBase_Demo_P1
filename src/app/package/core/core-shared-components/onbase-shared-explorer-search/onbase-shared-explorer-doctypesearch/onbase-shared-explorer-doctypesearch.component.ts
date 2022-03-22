import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, Input, ViewChild, OnChanges } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { isEmptyString } from 'src/app/package/modules/rdap-shared-components/utils/shared-utils';
//import { Input } from '@material-ui/core';
import * as doctypeData from 'src/assets/config/documenttype';
import * as doctypesearchctrlData from 'src/assets/config/documentTypeSearchControlConfig';
import { RdMasterApiService } from 'src/app/package/api/apiservice/masterApiService';
import { environment } from 'src/environments/environment';
import { IgxDialogComponent } from '@infragistics/igniteui-angular';
@Component({
  selector: 'app-onbase-shared-explorer-doctypesearch',
  templateUrl: './onbase-shared-explorer-doctypesearch.component.html',
  styleUrls: ['./onbase-shared-explorer-doctypesearch.component.scss']
})
export class OnbaseSharedExplorerDoctypesearchComponent implements OnInit, OnChanges {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  //@Output() onSearchSumbit = new EventEmitter<any>();
  @ViewChild('alert', { static: true }) public notificationAlert: IgxDialogComponent;
  public configdata;
  public routedata;
  public routedoctypedata;
  public formdata;
  public griddata;
  public basesearch;
  public doctypesearch;
  public explorerDocTypData;
  public apiConfigData;

  timeOut = 500;

  searchform: FormGroup;
  basesearchform: FormGroup;
  doctypesearchform: FormGroup;

  formName: string;
  route: string;
  routeName: string;
  formGroupArr: any[];
  formSelectApiData: any[];
  selectedResult: any;
  gridsource: any[];
  tempFilterData: any[];
  displayedColumns: string[];
  loopGridContent: any[];
  routers: Router;
  doctypesrcctrlData: any[];
  vendorData: any;
  baseApi: any;
  message: any;
  //= ['select', 'position'];

  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() selbasedoctype;
  @Output() doctypesearchemitter = new EventEmitter<any>();
  constructor(private httpClient: HttpClient, location: Location, private _router: Router,
    public fb: FormBuilder, private _snackBar: MatSnackBar, public cd: ChangeDetectorRef,
    private servicesApi: RdMasterApiService) {
    this.baseApi = environment.baseapiurl;
    //   debugger
    // this.doctypesrcctrlData = doctypesearchctrlData.doctypesearchctrlData;
    // console.log ("doctypesrcctrlData",this.doctypesrcctrlData);
    // this.explorerDocTypData = this.doctypesrcctrlData;
    //this.getDoctypeSearchFormData(this.selbasedoctype);
  }
  //this.onSearchSumbit.emit(this.formGroupArr);
  ngOnInit(): void {
    debugger
    console.log("servicesApi", this.servicesApi);
    this.doctypesrcctrlData = doctypesearchctrlData.doctypesearchctrlData;
    // console.log ("doctypesrcctrlData",this.doctypesrcctrlData);
    this.explorerDocTypData = this.doctypesrcctrlData;
    //this.getVendorDetailsByDocSubType();
    // this.getDoctypeSearchFormData(this.selbasedoctype);
  }

  ngOnChanges() {
    debugger
    console.log("ngonchanges");
    this.getDoctypeSearchFormData(this.selbasedoctype);
    this.getVendorDetailsByDocSubType();
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.doctypesearchform.controls[controlName].hasError(errorName);
  }
  public baseSearchOnChange = () => {
    //this.doctypesearchform.controls={};
  }
  public getVendorDetailsByDocSubType() {
    this.vendorData = null;
    let vendorUrl = this.baseApi + "Search/vendorddl/";
    if (this.selbasedoctype != null) {
      this.servicesApi.masterSearchDDL(vendorUrl + parseInt(this.selbasedoctype)).subscribe(data => {
        console.log("vendor ddl", data);
        this.vendorData = data.data;
        console.log("this.vendorData", this.vendorData);
      });
    }
  }
  public getDoctypeSearchFormData(param) {
    console.log("getDoctypeSearchFormData param", this.selbasedoctype);
    this.formSelectApiData = [];
    this.doctypesrcctrlData = doctypesearchctrlData.doctypesearchctrlData;
    this.explorerDocTypData = this.doctypesrcctrlData;
    debugger
    console.log("getDoctypeSearchFormData explorerDocTypData", this.explorerDocTypData);
    if (this.explorerDocTypData) {
      this.explorerDocTypData.filter(x => {
        console.log("getDoctypeSearchFormData x", x);
        if (x.documenttype == param) {
          this.routedoctypedata = x.controls;
          this.doctypesearch = this.routedoctypedata[0].fieldprop;
          this.griddata = this.routedoctypedata[0].api[0];
          if (this.doctypesearch.length == 0) {
            this.notificationAlert.open();
            this.message = "There is no data for this particular option in the database.";
          }else{
            //this.createDoctypeSearchFormControl();
          }
          this.createDoctypeSearchFormControl();
        }
      });
    }
  }

  public createDoctypeSearchFormControl() {
    let frmgrp = {};
    this.doctypesearch.forEach(x => {
      if (x.type == "select") {
        // this.httpClient.get(x.api).subscribe(data => {
        //   x.apidata = data;
        // });
        frmgrp[x.formcontrolname] = new FormControl();
      } else {
        if (x.required == "required") {
          frmgrp[x.formcontrolname] = new FormControl('', Validators.required);
        } else {
          frmgrp[x.formcontrolname] = new FormControl('');
        }
      }

    });
    this.doctypesearchform = new FormGroup(frmgrp);
    console.log("this.doctypesearchform ",this.doctypesearchform );
  }

  public fieldControlEvent(event, label) {
    this.doctypesearchemitter.emit(this.doctypesearchform);
  }

  public onDateChange(event, label){
    console.log("event",event);
    this.doctypesearchemitter.emit(this.doctypesearchform);
  }

  onDialogSubmit(event) {
    event.dialog.close();
  }

}
