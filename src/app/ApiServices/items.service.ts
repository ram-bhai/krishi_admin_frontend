import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Additems } from '../models/additems';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
additems="http://localhost:3000/storage/add-items";
viewItems = "http://localhost:3000/storage/view-storage";
  constructor(private http:HttpClient) { }
 viewStorage(){
   return this.http.get<any>(this.viewItems);
 }
  itemservice(additem: Additems):Observable<any>{
    return this.http.post(this.additems,additem);
  }

}

