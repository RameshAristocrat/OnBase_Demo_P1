import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import {ModulesList} from '../../menu/main-menu';
@Component({
  selector: 'app-main-menu-bar',
  templateUrl: './main-menu-bar.component.html',
  styleUrls: ['./main-menu-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainMenuBarComponent implements OnInit {
  modulesList: Array<any>;
  @Input() sidenav: MatSidenav
  ngOnInit(): void {
    // this.modulesList = ModulesList;
    // console.log(this.modulesList);
  }

}
