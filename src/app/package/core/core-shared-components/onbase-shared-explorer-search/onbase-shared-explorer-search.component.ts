import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { isEmptyString } from 'src/app/package/modules/rdap-shared-components/utils/shared-utils';
import * as doctypeData from 'src/assets/config/documenttype';
import { IgxDialogComponent } from '@infragistics/igniteui-angular';
export interface PeriodicElement {
  name: string;
  position: number;
}

@Component({
  selector: 'app-onbase-shared-explorer-search',
  templateUrl: './onbase-shared-explorer-search.component.html',
  styleUrls: ['./onbase-shared-explorer-search.component.scss']
})
export class OnbaseSharedExplorerSearchComponent implements OnInit {
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
  selbasedoctype: any;
  basedocumenttypeData: any[];
  doctypeddldata: any[];
  message:any;
  //= ['select', 'position'];

  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() searchfilterdata = new EventEmitter<any>();
  constructor(private httpClient: HttpClient, location: Location, private _router: Router,
    public fb: FormBuilder, private _snackBar: MatSnackBar, public cd: ChangeDetectorRef) {
    this.doctypeddldata = [];
    this.basedocumenttypeData = [];
    this.basedocumenttypeData.push(doctypeData.doctypeData[0]);
    this.doctypeddldata.push(doctypeData.doctypeData);
    this.doctypeddldata = this.doctypeddldata[0];
    this.httpClient.get("assets/config/baseSearchControlConfig.json").subscribe(data => {
      this.configdata = data;
      this.getBaseSearchFormData();
      this.basesearchform.controls['document'].setValue(1);
      this.basesearchform.controls['documentlist'].setValue(1);
      this.basesearchform.controls['documenttypegroup'].setValue(1);
      this.basesearchform.controls['basedocumenttype'].setValue("");
      console.log(this.basesearchform.get('basedocumenttype').value)
      //this.selbasedoctype = this.basesearchform.get('basedocumenttype').value;
    });
  }

  ngOnInit(): void {
    this.getBaseSearchFormData();
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.doctypesearchform.controls[controlName].hasError(errorName);
  }
  public baseSearchOnChange = (event, item, ctrlname) => {
    console.log("baseSearchOnChange event", event);
    console.log("baseSearchOnChange ctrlname", ctrlname);
    debugger
    if (ctrlname == "documenttypegroup") {
      this.selbasedoctype = "";
      this.basesearchform.controls['basedocumenttype'].setValue("");
      let tempFilterdata;
      let doctypgrpid = this.basesearchform.get("documenttypegroup").value;
      this.basedocumenttypeData = [];
      this.doctypeddldata = [];
      this.basedocumenttypeData.push(doctypeData.doctypeData);
      if (doctypgrpid != 1) {
        tempFilterdata = this.basedocumenttypeData[0].filter(x => {
          return x.dtgrid == doctypgrpid
        });
      } else {
        tempFilterdata = this.basedocumenttypeData[0]
      }
      this.doctypeddldata = tempFilterdata;
      console.log(this.doctypeddldata);
      this.cd.detectChanges();
    } else if (ctrlname == 'basedocumenttype') {
      debugger
      console.log("ctrlname basedocumenttype",ctrlname);
      this.selbasedoctype = event.id;
      console.log("ctrlname selbasedoctype",this.selbasedoctype);
      this.cd.detectChanges();
    }
  }

  getBaseSearchFormData() {
    this.formSelectApiData = [];
    this.configdata[0].explorer.filter(x => {
      this.routedata = x.basesearch;
      this.basesearch = this.routedata[0].fieldprop;
      this.griddata = this.routedata[0].api[0];
    });
    this.createBaseSearchFormControl();
  }

  createBaseSearchFormControl() {
    let frmgrp = {};
    this.basesearch.forEach(x => {
      if (x.type == "select") {
        this.httpClient.get(x.api).subscribe(data => {
          x.apidata = data;
        });
        frmgrp[x.formcontrolname] = new FormControl();
      } else {
        if (x.required == "required") {
          frmgrp[x.formcontrolname] = new FormControl('', Validators.required);
        } else {
          frmgrp[x.formcontrolname] = new FormControl('');
        }
      }

    });
    this.basesearchform = new FormGroup(frmgrp);
    this.searchfilterdata.emit({ doctypesearchform: null, basesearchform: this.basesearchform })
  }
  doctypesearchemitter(event) {
    this.searchfilterdata.emit({ doctypesearchform: event, basesearchform: this.basesearchform })
  }
}
