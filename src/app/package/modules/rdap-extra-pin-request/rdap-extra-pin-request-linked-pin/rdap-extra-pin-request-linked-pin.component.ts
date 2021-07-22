import { Component, OnInit, ViewChild } from '@angular/core';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-rdap-extra-pin-request-linked-pin',
  templateUrl: './rdap-extra-pin-request-linked-pin.component.html',
  styleUrls: ['./rdap-extra-pin-request-linked-pin.component.scss']
})
export class RdapExtraPinRequestLinkedPinComponent implements OnInit {
  chkImpCurShed:boolean=true;
  linkedPinsObj = [
    {id: 1, name: '567890'},
    {id: 2, name: '567891'}
];
impactedPinsObj = [
  {id: 1, name: '567893'},
  {id: 2, name: '567894'}
];
fyObj = [
  {id: 1, name: 'FY 22'},
  {id: 2, name: 'FY 23'}
];
quarterObj = [
  {id: 1, name: 'Q1 OCT - DEC'},
  {id: 2, name: 'Q2 JAN - MAR'}
];
currencyObj = [
  {id: 1, name: 'USD'},
  {id: 2, name: 'INR'}
];
revenuePrice:number;
  constructor() { }

  ngOnInit(): void {
    this.revenuePrice = 123487;
  }

}
