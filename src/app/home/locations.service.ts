import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  locations=[{
        name:"Bima Kunj Parisar",
        latitude : 23.1801939,
        longitude : 77.4173755,
        elevation: 509,
        status : "Urgent help required",
      },
      {
        name:"Sagar Estates",
        latitude : 23.2773382,
        longitude : 77.4582231,
        elevation:512,
        status : "Help required"
      },
      {
        name: "Zababit Lines",
        latitude : 23.2534713,
        longitude : 77.4132571,
        elevation:469,
        status : "Help required"
      }
    
    ]


  constructor(private http:HttpClient) {   }
  searchStr='Bhopal'
  elevation:number;
  fetchLocations(){
    console.log(this.locations)
    return this.locations;
  }
  
  sortLocations(){
    // this.locations[this.searchStr].map((obj)=>{
    //   obj['elevation']=this.fetchElevation(obj.latitude,obj.longitude).subscribe(res=>{
    //       return (res.valueOf()['resourceSets'][0]['resources'][0]['elevations'][0])
    //   })
    // });
    let sortedLoc=this.locations[this.searchStr].sort(("elevation"))
    console.log(sortedLoc)
    
  }
  

  fetchElevation(lat:number, long:number){
    const url="http://dev.virtualearth.net/REST/v1/Elevation/List?points="+lat.toString()+","+long.toString()+"&key=Aq3HsKhrPklE0BTfr5N3LpOYF2YnWsoyHDOV92ZOrqc38TPyEt2-cGdePaQLwgjq"
    let obs=this.http.get(url);
    return this.http.get(url)
  }
  getElevation(lat:number, long:number){
    let elevation:number=0;
    this.fetchElevation(lat,long).subscribe((res)=>{
      
    })
    return elevation;       
  }
  

}
