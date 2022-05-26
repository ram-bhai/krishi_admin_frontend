import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Addservice } from '../models/addservice';

@Injectable({
  providedIn: 'root'
})
export class EquipService{
  equips = "https://krishi-backend.herokuapp.com/service/view-services";
  equip_detail = "https://krishi-backend.herokuapp.com/service/view-services/";
  add_equip = "https://krishi-backend.herokuapp.com/service/add";
  edit_equip = "https://krishi-backend.herokuapp.com/service/update";
  remove = "https://krishi-backend.herokuapp.com/service/delete";
  booking = "https://krishi-backend.herokuapp.com/order/view-order";
  
  constructor(private http:HttpClient) { }

  public responseCache = new Map();

  service_Api():Observable<any>{
    const equipsfromCache = this.responseCache.get(this.equips);
    if(equipsfromCache){
      return of(equipsfromCache);
    }
    const response = this.http.get<any>(this.equips); 
    response.subscribe(equipment => this.responseCache.set(this.equips,equipment));
    return response; 
  }

  service_Details(id:any){
    return this.http.get<any>(this.equip_detail+id);
  }
  
  add_service(equip:FormData){
    return this.http.post<any>(this.add_equip,equip);
  }


  removeEquipment(id:any){
    return this.http.post<any>(this.remove,{id});
  }

  updateEquipment(formdata:FormData):Observable<any>{
    return this.http.post<any>(this.edit_equip,formdata);
  }

  bookedElement():Observable<any>{
    return this.http.get(this.booking);
  }

}
