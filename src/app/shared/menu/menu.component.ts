import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
title: string;
isCollapsed: Boolean;


  constructor() { }

  ngOnInit() {
    this.title = 'my super app' ;
    this.isCollapsed = true;
  }

  /*onClick() {
    alert('test');
  }*/

}
