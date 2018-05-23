
import { NgModule } from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
  // l'orde des deux lignes est pris en compte
{path : 'home', component: HomeComponent},
{path : '', redirectTo : '/home', pathMatch: 'full'},


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules , enableTracing: false} )
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
