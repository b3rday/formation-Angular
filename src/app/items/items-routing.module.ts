
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';


const itemsRoutes: Routes = [
  // l'orde des deux lignes est pris en compte
{path : 'items', children: [
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListItemsComponent},
]},

];

@NgModule({
  imports: [
    RouterModule.forChild(itemsRoutes)
  ],
  exports: [RouterModule]

})
export class ItemsRoutingModule { }
