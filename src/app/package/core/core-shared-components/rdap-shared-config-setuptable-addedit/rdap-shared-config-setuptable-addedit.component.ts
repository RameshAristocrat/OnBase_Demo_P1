import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { isEmptyString } from 'src/app/package/modules/rdap-shared-components/utils/shared-utils';

@Component({
  selector: 'app-rdap-shared-config-setuptable-addedit',
  templateUrl: './rdap-shared-config-setuptable-addedit.component.html',
  styleUrls: ['./rdap-shared-config-setuptable-addedit.component.scss']
})
export class RdapSharedConfigSetuptableAddeditComponent implements OnInit {

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
  displayedColumns: string[];
  loopGridContent: any[];
  transactionFlag="A";
  //= ['select', 'position'];

  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private httpClient: HttpClient, location: Location, router: Router,
    public fb: FormBuilder, private _snackBar: MatSnackBar) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
        if(this.route.match("add").length){
          this.transactionFlag="A";
        }else if(this.route.match("edit").length){
          this.transactionFlag="E";
        }else if(this.route.match("view").length){
          this.transactionFlag="v";
        }
        this.routeName = this.route.split('/')[this.route.split('/').length - 1];
      } else {
        this.route = 'Home'
      }
    });
    this.httpClient.get("assets/config/masterScreenCommonAddEdit.json").subscribe(data => {
      this.configdata = data;
      this.getFormData();
    });
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnInit(): void {
  }
  getFormData() {
    this.formSelectApiData = [];
    if (this.route.match("channeltype") && this.route.match("channeltype").length) {
      this.formName = "channeltypeSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.channeltype;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else  if (this.route.match("cabinets") && this.route.match("cabinets").length) {
      this.formName = "cabinetsSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.cabinets;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("channel") && this.route.match("channel").length) {
      this.formName = "channelSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.channel;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("devefforttype") && this.route.match("devefforttype").length) {
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
    }else if (this.route.match("market") && this.route.match("market").length > 0) {
      this.formName = "marketSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.market;
        this.formdata = this.routedata[0].fieldprop;
        this.griddata = this.routedata[0].api[0];
      });
      this.createFormControl();
    }else if (this.route.match("studio") && this.route.match("studio").length > 0) {
      this.formName = "studioSearchForm";
      this.configdata[0].master.filter(x => {
        this.routedata = x.studio;
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

  public checkError = (controlName: string, errorName: string) => {
    return this.searchform.controls[controlName].hasError(errorName);
  }
  submit() {
    this.formGroupArr = [];
    this.gridsource = [];
    this.displayedColumns = [];
    this.loopGridContent = [];
    this.displayedColumns.push("select")
    let count = 1;
    let errorFlag = false;
    if (this.searchform.invalid) {
      return;
    }

    this.formdata.forEach((x, index) => {
      if (isEmptyString(this.searchform.get(x.formcontrolname).value)) {
        document.getElementById(x.formcontrolname).focus();
        setTimeout(() => {
          this.openSnackBar("Enter " + x.label + " !!");
          errorFlag = true;
          //this.searchform.get(x.formcontrolname).validator
        }, count * (this.timeOut + 500));
        count++;
      }
      this.formGroupArr.push({ key: x.formcontrolname, value: this.searchform.get(x.formcontrolname).value });
    });
    this.httpClient.get(this.griddata.api).subscribe(data => {
      this.gridsource.push(data);
      this.gridsource.filter(x => {
        x.filter(y => {
          if (y.pagename == this.routeName) {
            this.tempFilterData = y.data;
          };
        })
      })
      if (this.tempFilterData) {
        Object.keys(this.tempFilterData[0]).forEach(x => {
          this.displayedColumns.push(x);
          this.loopGridContent.push({ "title": x, "data": ("element." + x) });
        });
      }
    });
    //this.onSearchSumbit.emit(this.formGroupArr);
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
  openSnackBar(errormsg: string) {
    this._snackBar.open(errormsg, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1000,
      panelClass: ['warn-snackbar']
    });
  }

}
