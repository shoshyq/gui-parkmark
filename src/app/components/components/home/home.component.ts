import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

     
 
  constructor(private router:Router){
   }

  ngOnInit(): void {
  }
LogIn(){
        this.router.navigate(['/LogIn']);
  }
SignUp(){
        this.router.navigate(['/SignUp']);
}
Exc(){
            this.router.navigate(['/Exc']);
    } 
     AddPaymentDetails(){
      this.router.navigate(['/PaymentDetails']);
      }
      SearchResults(){
        this.router.navigate(['/SearchResults']);
        }
        AddImmidSearch(){
          this.router.navigate(['/ImmidSearch']);
          }
}
