import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onbase-explorer-common-search',
  templateUrl: './onbase-explorer-common-search.component.html',
  styleUrls: ['./onbase-explorer-common-search.component.scss']
})
export class OnbaseExplorerCommonSearchComponent implements OnInit {
  panelOpenState;
  constructor() {
    this.panelOpenState = true;
   }

  ngOnInit(): void {
    this.panelOpenState = true;
  }

}
