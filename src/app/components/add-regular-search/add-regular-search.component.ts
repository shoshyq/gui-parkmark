import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
//import { GoogleMap, MapInfoWindow } from '@angular/google-maps/';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { GoogleMapsModule } from '@angular/google-maps/';
import { FormControl, Validators } from '@angular/forms';
import { ParkSpot } from 'src/app/models/parkspot.model';
import { Search } from 'src/app/models/search.model';
import { SearchesService } from 'src/app/services/searches.service';
import { City } from 'src/app/models/city.models';

@Component({
  selector: 'app-add-regular-search',
  templateUrl: './add-regular-search.component.html',
  styleUrls: ['./add-regular-search.component.css']
})
export class AddRegularSearchComponent implements OnInit {
  
  selectedCity: string;
  newSearch:Search = new Search();
  subscribe:any;
  cities: City[];
    addressFormControl = new FormControl('', [
      Validators.required,
      ]);
      widthFormControl = new FormControl('', [
        Validators.pattern("^[0-9]*$"),
        ]);

      formattedaddress=" ";
      public AddressChange(address: any) {
      //setting address from API to local variable
       this.formattedaddress=address.formatted_address
      }
  constructor(private searchesService:SearchesService,private router: Router) {
   
  }
  
  ngOnInit()
  { 
   this.searchesService.GetCities().subscribe(list=>
      {       
            this.cities=list;        
      });  
    }
  AddRegularSearch(frm:any){
  
    this.searchesService.AddRegularSearch(this.newSearch).subscribe(code=>
      {
        this.newSearch.Code=code; 
        if(code!=0)
         {
           console.log("search has been added successfully")
           sessionStorage.setItem('rsearch',code.toString());
   
          this.router.navigate(['/Main',sessionStorage.getItem('ucode')]);
         }
        else 
        console.log("something is wrong")
        });
    
  }
  initAutocomplete() {
  
  
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input") as HTMLInputElement;
    const searchBox = new google.maps.places.SearchBox(input);  
    // Bias the SearchBox results towards current map's viewport.

  
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.

      }    // Clear out the old markers.

}
