import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/collection.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

 // collection: Item [];
  constructor(public collectionService: CollectionService) {
  }

  ngOnInit() {

   /* this.collectionService.collection$.subscribe((items:Item[]) =>{
  this.collection = items;

  )}*/
  }


}
