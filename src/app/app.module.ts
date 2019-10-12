import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { MapComponent } from './home/map/map.component';
import { ListComponent } from './home/list/list.component';
import { ListItemComponent } from './home/list/list-item/list-item.component';
import { DetailsComponent } from './home/details/details.component';
import { LocationsService } from './home/locations.service';


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
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:' AIzaSyDEKdwB_F7V9dYw07mkYbMiZLJ6f0iFcjU'
    }),
    HttpClientModule
  ],


  providers: [
    LocationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
