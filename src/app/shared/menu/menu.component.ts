import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input('val')
  val: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('test');
  }

}
