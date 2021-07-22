import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rdap-config-market-search',
  templateUrl: './rdap-config-market-search.component.html',
  styleUrls: ['./rdap-config-market-search.component.scss']
})
export class RdapConfigMarketSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(event){
    console.log("event",event);
  }

}
