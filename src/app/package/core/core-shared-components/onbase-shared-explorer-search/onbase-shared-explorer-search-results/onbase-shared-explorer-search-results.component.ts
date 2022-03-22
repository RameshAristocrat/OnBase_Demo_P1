import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild }
  from '@angular/core';
import {
  CsvFileTypes, IColumnExportingEventArgs, IGridToolbarExportEventArgs,
  IgxCsvExporterOptions, IgxCsvExporterService, IgxExcelExporterOptions, IgxExcelExporterService,
  IgxExporterOptionsBase, IgxGridComponent
} from '@infragistics/igniteui-angular';
import { DATA } from '../../../../../../assets/config/customers';
import { Location } from '@angular/common';
import * as fs from 'file-saver';
import { RdMasterApiService } from 'src/app/package/api/apiservice/masterApiService';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-onbase-shared-explorer-search-results',
  templateUrl: './onbase-shared-explorer-search-results.component.html',
  styleUrls: ['./onbase-shared-explorer-search-results.component.scss']
})
export class OnbaseSharedExplorerSearchResultsComponent implements OnInit, AfterViewInit, OnChanges {
  // @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
  @ViewChild('grid1') grid1: IgxGridComponent;
  public data: any[];
  public searchText = '';
  public caseSensitive = false;
  public exactMatch = false;
  public columndata: any;
  public loopGridContent;
  public appString: any;
  public cellclickname: any;
  public gridSelData:any;
  downloadflag: boolean;
  exportData: any[];
  @Input() searchGridData: any;
  @Input() exportfilename: string;
  @Output() onSelGridRowData = new EventEmitter<any>();
  constructor(private httpClient: HttpClient, private cdr: ChangeDetectorRef,
    location: Location, 
    private excelExportService: IgxExcelExporterService,
    private csvExportService: IgxCsvExporterService,
    private servicesApi: RdMasterApiService,private sanitizer: DomSanitizer) {
    this.appString = [];
    this.httpClient.get("assets/config/app-string.json").subscribe(data => {
      this.appString = data;
    })
  }

  ngOnInit(): void {
    this.downloadflag = false;
    this.gridDataLoad();
  }
  ngOnChanges() {
    this.gridDataLoad();
    //this.getDoctypeSearchFormData(this.selbasedoctype);
  }
  public ngAfterViewInit() {
    //this.grid.selectColumns(['City', 'PostalCode']);
    //this.cdr.detectChanges();
  }
  exportButtonHandler() {
    debugger
    console.log(this.grid1.data);
    this.excelExportService.export(this.grid1, new IgxExcelExporterOptions("test"));
  }
  exportclicked(event, cell, data) {
    console.log(event);
    console.log(cell);
    console.log(data);
    console.log(event.newSelection.value);
    this.exportData = [];
    let selectedRows = this.grid1.selectedRows;
    let type = event.newSelection.value;
    debugger
    for (let rowIndex of selectedRows) {
      debugger
      //let rowData = this.grid1.getRowByIndex(rowIndex).rowData;
      this.exportData.push(rowIndex);
    }

    console.log(this.exportData);
    if (type == "xls") {
      this.excelExportService.exportData(this.exportData,
        new IgxExcelExporterOptions(`Report_${new Date().toDateString()}`));
    } else {
      this.csvExportService.exportData(this.exportData,
        new IgxCsvExporterOptions(`Report_${new Date().toDateString()}`, CsvFileTypes.TSV));
    }

    //this.exportData = [];
  }
  configureExport(args: IGridToolbarExportEventArgs) {
    this.exportData = [];
    // You can customize the exporting from this event
    const options: IgxExporterOptionsBase = args.options;
    options.fileName = `Report_${new Date().toDateString()}`;
    let selectedRows = this.grid1.selectedRows;
    for (let rowIndex of selectedRows) {
      //let rowData = this.grid1.getRowByIndex(rowIndex).rowData;
      this.exportData.push(rowIndex);
    }
    if (options instanceof IgxExcelExporterOptions) {
      const excelOptions = options as IgxExcelExporterOptions;
      excelOptions.columnWidth = 10;
      this.excelExportService.exportData(this.exportData,
        new IgxExcelExporterOptions(`Report_${new Date().toDateString()}`));
    } else {
      const csvOptions = options as IgxCsvExporterOptions;
      csvOptions.fileType = CsvFileTypes.TSV;
      csvOptions.valueDelimiter = '\t';
      this.csvExportService.exportData(this.exportData,
        new IgxCsvExporterOptions(`Report_${new Date().toDateString()}`, CsvFileTypes.TSV));
    }
    // debugger
    // console.log(args);
    // args.exporter.columnExporting.subscribe((columnArgs: IColumnExportingEventArgs) => {
    //   // Don't export image fields
    //   // columnArgs.cancel = columnArgs.header === 'Athlete' ||
    //   //                     columnArgs.header === 'Country';
    // });
  }
  public gridDataLoad() {
    debugger
    let count;
    this.columndata = [];
    this.loopGridContent = [];
    this.data = this.searchGridData;
    console.log(Object.keys(this.searchGridData[0]));
    count = Object.keys(this.searchGridData[0]).length;
    console.log("count", count);
    Object.keys(this.searchGridData[0]).forEach(x => {
      this.appString.filter(g => {
        if (x == g.modelname) {
          if (x == "document_Url") {
            this.columndata.splice(0, 0, { field: x, title: g.title, width: "150px", height: "10px", type: "string", pinned: true, url: x["document_Url"], hidden: g.gridcolflag });
            //this.columndata.push();
          } else {
            this.columndata.push({ field: x, title: g.title, width: "150px", height: "10px", type: "string", pinned: true, url: x["document_Url"], hidden: g.gridcolflag });
          }
          //this.columndata.push({ field: x, title: g.title, width: "150px", height: "10px", type: "string", pinned: true, url: x["document_Url"], hidden: g.gridcolflag });
        }
      });
      console.log("this.columndata", this.columndata);
      this.loopGridContent.push({ "title": x, "data": ("element." + x) });
    });
  }
  //Open Date, Document Type, Document Status, Document Handle, Tracking Details
  public clearSearch() {
    this.searchText = '';
    this.grid1.clearSearch();
  }

  public searchKeyDown(ev) {
    if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
      ev.preventDefault();
      this.grid1.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
      ev.preventDefault();
      this.grid1.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
  }

  public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.grid1.findNext(this.searchText, this.caseSensitive, this.exactMatch);
  }

  public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.grid1.findNext(this.searchText, this.caseSensitive, this.exactMatch);
  }

  public handleRowSelection(args) {
    console.log("args", args);
    // this.onSelGridRowData.emit(args);
    // this.behaviourService.setViewSelectedMasterDetails(args);
    if (args.newSelection.length > 0) {
      this.downloadflag = true;
      this.gridSelData = args.newSelection;
    } else {
      this.downloadflag = false;
      this.gridSelData = null;
    }
    if (args.added.length && args.added[0] === 3) {
      args.cancel = true;
    }
    if (this.cellclickname == "document_Name") {
      //args.newSelection[0].document_Url
      window.location.href = (args.newSelection[0].document_Url).toString();
    }
  }

  public cellClick(event) {
    console.log(event);
    this.cellclickname = event.cell._columnField;
    debugger
  }

  public openDocUrl(url) {
    console.log("url", url);
    window.location.href = 'file:\\\\\nasuslv02\\OnBase$\\Diskgroups\\Data\\V743\\1\\1000729.html';
    //window.open(url, null);
  }

  getRecency(delimitedValue: string) {
    // TODO: convert to pipe
    if (delimitedValue.indexOf('\\') > -1) {
      const recency = delimitedValue.split('\\')[delimitedValue.split('\\').length - 1];
      return recency === 'No Notes' ? '' : recency;
    } else {
      return delimitedValue;
    }
  }
  convertDocUrl(delimitedValue: string) {
    //console.log(location.origin);
    let baseUrl = location.origin;
    baseUrl = baseUrl.replace('9090','9091');
    //console.log(baseUrl);
    //const convertedUrl = baseUrl+delimitedValue.replace('\\\\nasuslv02\\OnBase$', '');
    const convertedUrl = "https://syde-webtst-01:9091"+delimitedValue.replace('\\\\nasuslv02\\OnBase$', '');
    //console.log("convertedUrl",convertedUrl);https://sydc-appdev-01:9091/
    return convertedUrl;
  }

  submitDownload(){
    console.log("gridseldata",this.gridSelData);
    let url;
    this.gridSelData.forEach(x=>{
      url = this.convertDocUrl(x.document_Url);
      this.download(url,x.document_Name);
    });
  }

  download(url, downloadName) {
    let a = document.createElement("a");
    a.setAttribute('type', 'hidden');
    a.href = url;
    a.download = downloadName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  downloadFile(url,filename) {
   // var filename = url.split('/').pop();
    try {
        fs.saveAs(url, filename);
    }
    catch (e) {
        console.log(e)
    }
}
}
