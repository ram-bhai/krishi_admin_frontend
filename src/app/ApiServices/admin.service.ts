import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 signin = "http://localhost:3000/admin/signIn";
  constructor(private http:HttpClient) { }

  signIn(credentials:Admin):Observable<any>{
    return this.http.post(this.signin,credentials)
  }

  public checkToken():boolean{
    return !!sessionStorage.getItem('token');
  }

}
