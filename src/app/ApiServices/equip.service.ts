import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Addservice } from '../models/addservice';

@Injectable({
  providedIn: 'root'
})
export class EquipService{
  equips = "http://localhost:3000/service/view-services";
  equip_detail = "http://localhost:3000/service/view-services/";
  add_equip = "http://localhost:3000/service/add";
  edit_equip = "http://localhost:3000/service/update";
  remove = "http://localhost:3000/service/delete";
  booking = "http://localhost:3000/order/view-order";
  
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
