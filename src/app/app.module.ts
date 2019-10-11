import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { MapComponent } from './home/map/map.component';
import { ListComponent } from './home/list/list.component';
import { ListItemComponent } from './home/list/list-item/list-item.component';
import { DetailsComponent } from './home/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    MapComponent,
    ListComponent,
    ListItemComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
