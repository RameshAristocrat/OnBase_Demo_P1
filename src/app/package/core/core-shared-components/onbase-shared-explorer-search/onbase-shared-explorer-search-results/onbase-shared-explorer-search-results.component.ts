import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../../../../../assets/config/customers';
@Component({
  selector: 'app-onbase-shared-explorer-search-results',
  templateUrl: './onbase-shared-explorer-search-results.component.html',
  styleUrls: ['./onbase-shared-explorer-search-results.component.scss']
})
export class OnbaseSharedExplorerSearchResultsComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;
  public data: any[];
  public searchText = '';
  public caseSensitive = false;
  public exactMatch = false;
  public columndata:any;
  public loopGridContent;
  public appString:any;
  //@Input() panelOpenState: any;
  @Input() searchGridData: any;
  constructor(private httpClient: HttpClient,private cdr: ChangeDetectorRef) { 
    this.appString=[];
    this.httpClient.get("assets/config/app-string.json").subscribe(data => {
      this.appString = data;
    })
  }

  ngOnInit(): void {
    
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
public gridDataLoad(){
  this.columndata=[];
  this.loopGridContent=[];
    this.data = this.searchGridData;
    Object.keys(this.searchGridData[0]).forEach(x =>{
      this.appString.filter(g =>{
        if(x==g.modelname){
          this.columndata.push({ field:x, title:g.title, width: "150px", height:"10px", type: "string", pinned: true });
        }
      });
     this.loopGridContent.push({"title":x,"data":("element."+x)});
    });
}
  public clearSearch() {
    this.searchText = '';
    this.grid.clearSearch();
  }

  public searchKeyDown(ev) {
    if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
      ev.preventDefault();
      this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
      ev.preventDefault();
      this.grid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
  }

  public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
  }

  public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
  }
}
