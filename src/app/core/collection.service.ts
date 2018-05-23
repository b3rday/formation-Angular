import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Observable, from, of } from 'rxjs';

import { State } from '../items/state.enum';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  collection$: Observable<Item[]>;

 // collection:Item[];

  constructor() {
    const collection: Item[] = [
      {
        id : '1',
        name : 'myname',
        reference : '666',
        state : State.ALIVRER
      },
      {
        id : '2',
        name : 'myname2',
        reference : '667',
        state : State.LIVREE
      }
    ];
    this.collection$ = of(collection);
   }
/*
   get collection(): Item[] {
     return this.collection;
   }

   set collection(col: Item[]) {
     this.collection = col;
   }
*/
}

