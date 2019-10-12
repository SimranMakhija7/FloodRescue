import { Component, OnInit } from '@angular/core';
import { LocationsService } from './locations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private locService: LocationsService) { }

  ngOnInit() {
    //this.locService.showPlaceData();
    //this.locService.showElevation(this.locService.longitude,this.locService.latitude);
    this.locService.fetchLocations()
    console.log(this.locService.getElevation(12.35,56.25))
  }

}
