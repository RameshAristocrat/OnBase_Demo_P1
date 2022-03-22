import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CsvFileTypes, IgxCsvExporterOptions, IgxCsvExporterService, IgxExcelExporterOptions, IgxExcelExporterService } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-export-grid',
  templateUrl: './export-grid.component.html',
  styleUrls: ['./export-grid.component.scss']
})
export class ExportGridComponent implements OnInit {
  @Output() exportgrid = new EventEmitter<any>();
  @Input() grid1:any;
  selected:any;
  exportData:any[];
  constructor(    private excelExportService: IgxExcelExporterService,
    private csvExportService: IgxCsvExporterService) { }

  ngOnInit(): void {
  }
  public clearSelection(event: MouseEvent) {
    this.selected = '';
    // prevent the drop-down container from opening
    event.stopPropagation();
}
  exportclicked(event) {
    console.log(event);
    console.log(event.newSelection.value);
    this.exportData=[];
    let selectedRows = this.grid1.selectedRows;
    let type=event.newSelection.value;
 debugger
    for (let rowIndex of selectedRows) {
      debugger
       //let rowData = this.grid1.getRowByIndex(rowIndex).rowData;
       this.exportData.push(rowIndex);
    }

    console.log(this.exportData);
    if(type == "xls"){
      this.excelExportService.exportData(this.exportData,
        new IgxExcelExporterOptions(`Report_${new Date().toDateString()}`));
    }else{
      this.csvExportService.exportData(this.exportData,
        new IgxCsvExporterOptions(`Report_${new Date().toDateString()}`,CsvFileTypes.TSV));
    }
 this.selected="";
    //this.exportData = [];
 }
}
