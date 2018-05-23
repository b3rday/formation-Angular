import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ItemsModule } from './items/items.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    PageNotFoundModule,
    ItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
