
import { NgModule } from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
  // l'orde des lignes est pris en compte
{path : 'home', component: HomeComponent},
{path : '', redirectTo : '/home', pathMatch: 'full'},
{path : 'items', loadChildren: './items/items.module#ItemsModule'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules , enableTracing: false} )
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
