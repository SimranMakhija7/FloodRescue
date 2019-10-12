import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import myLocation from '../location.model';
import { async } from 'q';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  locations=[{
    Bhopal : {
      BimaKunjParisar : {
        latitude : 23.1801939,
        longitude : 77.4173755,
        status : "Not Applicable"
      },
      SagarEstates : {
        latitude : 23.2773382,
        longitude : 77.4582231,
        status : "Not Applicable"
      },
      ZababitLines : {
        latitude : 23.2534713,
        longitude : 77.4132571,
        status : "Not Applicable"
      }
    }
  }
]

  constructor(private http:HttpClient) {   }
  searchStr='Bhopal'
  elevation:number;
  fetchLocations(){
    console.log(this.locations)
    return this.locations;
  }
  

  

  fetchElevation(lat:number, long:number){
    const url="http://dev.virtualearth.net/REST/v1/Elevation/List?points="+lat.toString()+","+long.toString()+"&key=Aq3HsKhrPklE0BTfr5N3LpOYF2YnWsoyHDOV92ZOrqc38TPyEt2-cGdePaQLwgjq"
    let obs=this.http.get(url);
    return this.http.get(url)
  }
  async getElevation(lat:number, long:number){
    let elevation:number=0;
    this.fetchElevation(lat,long).subscribe((res)=>{
      elevation=(res.valueOf()['resourceSets'][0]['resources'][0]['elevations'][0])
      console.log(elevation)
    })
           
  }
  

}
