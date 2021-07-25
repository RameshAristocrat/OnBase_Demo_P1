import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
clientheight:number;
  constructor() {
    this.clientheight = document.documentElement.clientHeight;
   }

  ngOnInit(): void {
  }

}
