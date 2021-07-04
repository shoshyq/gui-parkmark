import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {


 
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  newUser:User = new User();
  subscribe:any;
  hide = true;
  constructor(private userService:UserService,private router: Router) {
    
  }
  

  ngOnInit()
  { 
    
  }
  SignUp(frm:any){
    console.log(this.newUser.code,this.newUser.username,this.newUser.userpassword);
    this.userService.SignUp(this.newUser).subscribe((code: number)=>{
     //לקבל את הקוד חברה שנכנס עכשיו ולשלוח אותו להוספת בחירה
     this.newUser.code=code; 
     if(code!=0)
      {
        console.log("user has been added successfully")
        sessionStorage.setItem('ucode',code.toString());
       this.router.navigate(['/Main',sessionStorage.getItem('ucode')]);
      }
     else 
     console.log("בחר שם אחר שם משתמש זה כבר קיים במערכת")
     });
     
    }
}
