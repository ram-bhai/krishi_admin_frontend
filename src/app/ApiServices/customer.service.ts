import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 customers = "http://localhost:3000/customer/view";

//  const responsecache = new Map();
  constructor(private http:HttpClient) { }

  viewCustomers():Observable<any>{
    return this.http.get(this.customers)
  }
}
