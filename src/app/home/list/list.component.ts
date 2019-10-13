import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private locService:LocationsService) { }

  ngOnInit() {

  }
  locations=this.locService.locations;
  

}
