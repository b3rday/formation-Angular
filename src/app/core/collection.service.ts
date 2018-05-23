import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  _collection: Item[];

  constructor() {
   /* this.collection = [
      {
        id : '1',
        name : 'myname',
        reference : '666',
        state : 'FR'
      },
      {
        id : '2',
        name : 'myname2',
        reference : '667',
        state : 'UK'
      }
    ];
   }

   get collection(): Item[] {
     return this._collection;
   }

   set collection(col: Item[]) {
     this._collection = col;
   }*/

}
}
