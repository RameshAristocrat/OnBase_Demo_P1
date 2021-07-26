import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../../../../../assets/config/customers';
@Component({
  selector: 'app-onbase-shared-explorer-search-results',
  templateUrl: './onbase-shared-explorer-search-results.component.html',
  styleUrls: ['./onbase-shared-explorer-search-results.component.scss']
})
export class OnbaseSharedExplorerSearchResultsComponent implements OnInit,AfterViewInit {
  @ViewChild(IgxGridComponent)
  public grid: IgxGridComponent;
  public data: any[];
  @Input() panelOpenState:any;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.data = DATA;
  }
  public ngAfterViewInit() {
    this.grid.selectColumns(['City', 'PostalCode']);
    this.cdr.detectChanges();
}
}
