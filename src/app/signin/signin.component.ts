import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../ApiServices/admin.service';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:Admin = new Admin("", "");
  hide = true;
  isLoggedin?: boolean;
  loginForm!: FormGroup;

  constructor(private admin: AdminService,
     private router: Router,
     private active:ActivatedRoute,
     private notifyService:ToastrService) { }

    signIn(){
        this.admin.signIn(this.user).subscribe(data=>{
          this.notifyService.success("Sing In Successfully..!!")
            sessionStorage.setItem("token",data.token);
            sessionStorage.setItem("id",data.user._id); 
            this.router.navigate(['home']);
        },err=>{
        console.log(err);
        if(err instanceof HttpErrorResponse){
          if(err.status == 400){
            this.notifyService.error("This is warning..!")
          }
          else if(err.status == 500){
            this.notifyService.warning("Something is wrong..!")
        }
      }
    });
  }
  

  ngOnInit(): void {
  }

}
