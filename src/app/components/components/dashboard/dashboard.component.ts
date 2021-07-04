import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
  }
  imidSearch(){
      this.router.navigate(['ImmidSearch/',sessionStorage.getItem('ucode')]); 

  }
  addRegSearch(){
    this.router.navigate(['AddRegularSearch/']); 

}
feedbacks(){
  this.router.navigate(['FeedbackDetails/']); 

}
updateUserDetails(){
  this.router.navigate(['UpdateUserDetails/']); 

}
updatePaymentDetails(){
  this.router.navigate(['UpdatePaymentDetails/']); 

}
addPaymentDetails(){
  this.router.navigate(['AddPaymentDetails/']); 

}
updateRegSearch(){
  this.router.navigate(['UpdateRegularSearch/']); 

}

}
