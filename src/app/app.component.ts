import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  bg = 'red';

  constructor() {
    this.activate();
  }

  activate = () => {
    this.title = 'OH';
  }

}
