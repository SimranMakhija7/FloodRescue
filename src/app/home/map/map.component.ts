import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private locService: LocationsService) { }
  a:number;
  ngOnInit() {
    
    this.locService.getElevation(23.180,77.417)
  }
  locations=this.locService.locations;
  lat=this.locations[0]['latitude']
  lng=this.locations[0]['longitude']

}
