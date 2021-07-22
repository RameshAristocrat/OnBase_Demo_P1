import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RDAP';
  onActivate(e) {
    console.log(e.constructor.name);
    if ((e.constructor.name)==="LoginComponent"){ // for example
            window.scroll(0,0);
    }
}

}
