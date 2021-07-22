import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { isEmptyString } from 'src/app/package/modules/rdap-shared-components/utils/shared-utils';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Game Title#1' },
  { position: 2, name: 'Game Title#2' },
  { position: 3, name: 'Game Title#3' },
  // { position: 4, name: 'Game Title#4'},
  // { position: 5, name: 'Game Title#5'},
  // { position: 6, name: 'Game Title#6'},
  // { position: 7, name: 'Game Title#7'},
  // { position: 8, name: 'Game Title#8'}
];

@Component({
  selector: 'app-rdap-shared-config-search',
  templateUrl: './rdap-shared-config-search.component.html',
  styleUrls: ['./rdap-shared-config-search.component.scss']
})

export class RdapSharedConfigSearchComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @Output() onSearchSumbit = new EventEmitter<any>();

  public configdata;
  public routedata;
  public formdata;
  public griddata;

  timeOut = 500;

  searchform: FormGroup;

  formName: string;
  route: string;
  routeName: string;
  formGroupArr: any[];
  formSelectApiData: any[];
  selectedResult: any;
  gridsource: any[];
  tempFilterData: any[];
  displayedColumns: string[] ;
  loopGridContent:any[];
  routers:Router;
  //= ['select', 'position'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private httpClient: HttpClient, location: Location, private _router: Router,
     public fb: FormBuilder,private _snackBar: MatSnackBar) {
      _router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
        this.routeName = this.route.split('/')[this.route.split('/').length - 1];
      } else {
        this.route = 'Home'
      }
    });
    this.httpClient.get("assets/config/masterScreenSearchCommonConfig.json").subscribe(data => {
      this.configdata = data;
      this.getFormData();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }
  getFormData() {
    this.formSelectApiData = [];
    if (this.route.match("studio")) {
      this.formName = "studioSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.studio;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    } else if (this.routeName == "versionsearch") {
      this.formName = "versionSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.version;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.routeName == "eppsearch") {
      this.formName = "eppSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.EPP;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.routeName == "regionsearch") {
      this.formName = "regionSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.region;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.routeName == "poolsearch") {
      this.formName = "poolSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.pool;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("gravity") && this.route.match("gravity").length > 0) {
      this.formName = "gravitySearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.gravity;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("devtype1") && this.route.match("devtype1").length > 0) {
      this.formName = "devtype1SearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.devtype1;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("devtype2") && this.route.match("devtype2").length > 0) {
      this.formName = "devtype2SearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.devtype2;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("channeltype") && this.route.match("channeltype").length > 0) {
      this.formName = "channeltypeSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.channeltype;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("cabinets") && this.route.match("cabinets").length > 0) {
      this.formName = "cabinetsSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.cabinets;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("channel") && this.route.match("channel").length > 0) {
      this.formName = "channelSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.channel;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("devefforttype") && this.route.match("devefforttype").length > 0) {
      this.formName = "devefforttypeSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.devefforttype;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("devcomplexity") && this.route.match("devcomplexity").length > 0) {
      this.formName = "devcomplexitySearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.devcomplexity;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    } else if (this.route.match("market") && this.route.match("market").length > 0) {
      this.formName = "marketSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.market;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("quarter") && this.route.match("quarter").length > 0) {
      this.formName = "quarterSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.quarter;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }
  }
  submit() {
    this.formGroupArr = [];
    this.gridsource = [];
    this.displayedColumns=[];
    this.loopGridContent=[];
    this.displayedColumns.push("select");
    let count = 1;
    let errorFlag = false;
    if (this.searchform.invalid) {
      return;
    }
    this.formdata.forEach((x, index) => {
      if (isEmptyString(this.searchform.get(x.formcontrolname).value)) {
        setTimeout(() => {
          this.openSnackBar("Enter " + x.label + " !!");
          errorFlag = true;
        }, count * (this.timeOut + 500));
        count++;
      }
      this.formGroupArr.push({ key: x.formcontrolname, value: this.searchform.get(x.formcontrolname).value });
    });
    this.httpClient.get(this.griddata.api).subscribe(data => {
      this.gridsource.push(data);
      this.gridsource.filter(x => {
        x.filter(y => {
          if(this.route.match(y.pagename)){
            this.tempFilterData = y.data;
          };
        })
      })
      if (this.tempFilterData) {
      Object.keys(this.tempFilterData[0]).forEach(x =>{
        this.displayedColumns.push(x);
        this.loopGridContent.push({"title":x,"data":("element."+x)});
      });
    }
    });
    this.onSearchSumbit.emit(this.formGroupArr);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.searchform.controls[controlName].hasError(errorName);
  }
  createFormControl() {
    let frmgrp = {};
    this.formdata.forEach(x => {
      if (x.type == "select") {
        this.httpClient.get(x.api).subscribe(data => {
          x.apidata = data;
        });
        frmgrp[x.formcontrolname] = new FormControl();
      } else {
        if(x.required=="required"){
          frmgrp[x.formcontrolname] = new FormControl('', Validators.required);
        }else{
          frmgrp[x.formcontrolname] = new FormControl('');
        }    
      }

    });
    this.searchform = new FormGroup(frmgrp);
  }
  openSnackBar(errormsg:string) {
    this._snackBar.open(errormsg, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:4000,
      panelClass: ['warn-snackbar']
    });
  }
  addnewrecord(url){
    let tempUrl;
    tempUrl = this.route.replace('search','add');
    console.log(tempUrl)
    this._router.navigate([tempUrl.toString()]);
  }
}
