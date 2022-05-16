import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './ApiServices/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private admin:AdminService,private router:Router){}
  canActivate():boolean {
    if(this.admin.checkToken()){
       return true;
     }
     else{
       this.router.navigate(['sign-in']);
       return false;
     }
  
  }
}
