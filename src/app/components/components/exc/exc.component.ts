import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
    
@Component({
  selector: 'app-exc',
  templateUrl: './exc.component.html',
  styleUrls: ['./exc.component.css']
})
export class ExcComponent  {
  center!: google.maps.LatLngLiteral;
  zoom = 12
  
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  markers: any;
 
  ngOnInit():void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    console.log(this.center)
  }
  click(event: google.maps.MouseEvent) {
    console.log(this.center.lat)
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
    options: { animation: google.maps.Animation.BOUNCE },
  })
}
}  


