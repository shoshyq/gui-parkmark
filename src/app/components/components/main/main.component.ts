import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap

  constructor(private userService:UserService,private router: Router) { }
  getCenter()
  {
 console.log("hey")
    this.markers.push({
      position: {
        lat: this.center.lat ,
        lng: this.center.lng ,
      },
      label: {
        color: 'red',
        text: 'Your location',
      },
      title: 'Your location',
    })
  }
  center: google.maps.LatLngLiteral ;
  zoom = 17
  
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 20,
    minZoom: 8,
  };
  markers: any = [];
  markers2:any=[];
 
  ngOnInit():void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    this.markers.push({
      position: {
        lat: this.center.lat ,
        lng: this.center.lng ,
      },
      label: {
        color: 'red',
        text: 'Your location',
      },
      title: 'Your location',
    })
  }   
addMarker() {
  this.markers.push({
    position: {
      lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
      lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
    },
    label: {
      color: 'red',
      text: 'Marker label ' + (this.markers.length + 1),
    },
    title: 'Marker title ' + (this.markers.length + 1),
  })
}
dashboard()
{
  this.router.navigate(['Dashboard/',sessionStorage.getItem('ucode')]); 
}
imidSearch()
{
  this.router.navigate(['ImmidSearch/',sessionStorage.getItem('ucode')]); 
}
}
