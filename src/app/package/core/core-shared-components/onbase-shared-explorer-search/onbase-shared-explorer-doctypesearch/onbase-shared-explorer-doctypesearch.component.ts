import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output,Input, ViewChild, OnChanges } from '@angular/core';
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

@Component({
  selector: 'app-onbase-shared-explorer-doctypesearch',
  templateUrl: './onbase-shared-explorer-doctypesearch.component.html',
  styleUrls: ['./onbase-shared-explorer-doctypesearch.component.scss']
})
export class OnbaseSharedExplorerDoctypesearchComponent implements OnInit, OnChanges {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  //@Output() onSearchSumbit = new EventEmitter<any>();

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
  //= ['select', 'position'];

  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() selbasedoctype;
  @Output() doctypesearchemitter = new EventEmitter<any>();
  constructor(private httpClient: HttpClient, location: Location, private _router: Router,
    public fb: FormBuilder, private _snackBar: MatSnackBar,  private cd: ChangeDetectorRef) {
    this.httpClient.get("assets/config/documentTypeSearchControlConfig.json").subscribe(data => {
      this.explorerDocTypData = data;
      this.getDoctypeSearchFormData(this.selbasedoctype);
    });
   }
//this.onSearchSumbit.emit(this.formGroupArr);
  ngOnInit(): void {
  }
  ngOnChanges() {
    this.getDoctypeSearchFormData(this.selbasedoctype);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.doctypesearchform.controls[controlName].hasError(errorName);
  }
  public baseSearchOnChange = () => {
    //this.doctypesearchform.controls={};
  }
  getDoctypeSearchFormData(param) {
    this.formSelectApiData = [];
    if(this.explorerDocTypData){
      this.explorerDocTypData.filter(x => {
        if (x.documenttype == param) {
          this.routedoctypedata = x.controls;
          this.doctypesearch = this.routedoctypedata[0].fieldprop;
          this.griddata = this.routedoctypedata[0].api[0];
        }
      });
      this.createDoctypeSearchFormControl();
    }
  }

  createDoctypeSearchFormControl() {
    let frmgrp = {};
    this.doctypesearch.forEach(x => {
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
    this.doctypesearchform = new FormGroup(frmgrp);
  }

  fieldControlEvent(event){
    this.doctypesearchemitter.emit(this.doctypesearchform);
  }

}
