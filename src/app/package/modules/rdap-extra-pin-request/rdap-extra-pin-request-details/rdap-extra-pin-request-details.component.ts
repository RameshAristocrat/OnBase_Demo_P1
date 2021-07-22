import { Component, OnInit, ViewChild } from '@angular/core';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-rdap-extra-pin-request-details',
  templateUrl: './rdap-extra-pin-request-details.component.html',
  styleUrls: ['./rdap-extra-pin-request-details.component.scss']
})
export class RdapExtraPinRequestDetailsComponent implements OnInit {
  @ViewChild('select') select: NgSelectComponent;
  requestStatusObj = [
    {id: 1, name: 'Requested'},
    {id: 2, name: 'Rejected'}
];
channelObj = [
  {id: 1, name: 'class 2 stepper'},
  {id: 2, name: 'class 3 stepper'}
];
channelTypeObj = [
  {id: 1, name: 'for sale'},
  {id: 2, name: 'for lease'}
];
regionObj = [
  {id: 1, name: 'ANZ'},
  {id: 2, name: 'IND'},
  {id: 3, name: 'PKZ'}
];
marketObj = [
  {id: 1, name: 'NSW'},
  {id: 2, name: 'COL'},
  {id: 3, name: 'TVS'}
];
studioObj = [
  {id: 1, name: 'Bash Studio'},
  {id: 2, name: 'JPL Studio'},
];
pinTypeObj = [
  {id: 1, name: 'OG'},
  {id: 2, name: 'OH'},
];
gameComplexityObj = [
  {id: 1, name: 'High'},
  {id: 2, name: 'Low'},
];
selectedCity: any;
selectedCityIds: string[];
selectedCityName = 'Vilnius';
selectedCityId: number;
selectedUserIds: number[];
  constructor() { }
  ngOnInit(): void {
  }

}
