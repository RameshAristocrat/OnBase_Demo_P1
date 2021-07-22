import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Game Title#1' },
  { position: 2, name: 'Game Title#2'},
  { position: 3, name: 'Game Title#3'},
  { position: 4, name: 'Game Title#4'},
  { position: 5, name: 'Game Title#5'},
  { position: 6, name: 'Game Title#6'},
  { position: 7, name: 'Game Title#7'},
  { position: 8, name: 'Game Title#8'}
];


@Component({
  selector: 'app-rdap-extra-pin-request-game-title',
  templateUrl: './rdap-extra-pin-request-game-title.component.html',
  styleUrls: ['./rdap-extra-pin-request-game-title.component.scss']
})
export class RdapExtraPinRequestGameTitleComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
