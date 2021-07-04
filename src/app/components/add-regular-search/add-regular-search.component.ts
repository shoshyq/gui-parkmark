import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
//import { GoogleMap, MapInfoWindow } from '@angular/google-maps/';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { GoogleMapsModule } from '@angular/google-maps/';

@Component({
  selector: 'app-add-regular-search',
  templateUrl: './add-regular-search.component.html',
  styleUrls: ['./add-regular-search.component.css']
})
export class AddRegularSearchComponent implements OnInit {
  
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap 
  @ViewChild(MapInfoWindow, { static: false }) infoWindow! : MapInfoWindow
  center!: google.maps.LatLngLiteral ;
  zoom = 16
  markers:any;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
  };

  infoContent = '';
  x:any;
  constructor() { 
    
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    this.markers = [];
    sessionStorage.setItem('shop','1')
  }

  ngOnInit(): void {
    if (navigator.geolocation) {
      var location_timeout = setTimeout("geolocFail()", 10000);
  
      navigator.geolocation.getCurrentPosition((position) => {
          clearTimeout(location_timeout);
  
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          this.markers.push({
            position: {
              lat: this.center.lat ,
              lng: this.center.lng ,
            },
            label: {
              color: 'red',
              text: 'Your Location',
            },
            title: 'Your location',
            info: 'Marker info ' + (this.markers.length + 1),
            options: {
            },
          })
      }, function(error) {
          clearTimeout(location_timeout);
      });
  } else {
      // Fallback for no geolocation
  }
 
    console.log(this.center)
    console.log(JSON.stringify(this.map.getCenter()))
  }
  click(event: google.maps.MouseEvent) {
    console.log(event)
  }
  center_changed() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((showPosition) =>
      {
        this.center = {
          lat: showPosition.coords.latitude,
          lng: showPosition.coords.longitude,
        }
      });
    } 
  }
  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }
  getLocation(x:any) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((showPosition) =>
      {
        this.center = {
          lat: showPosition.coords.latitude,
          lng: showPosition.coords.longitude,
        }
      });
    }
  }
}
