import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipService {
  equips = "http://localhost:3000/service/view-services";
  equip_detail = "http://localhost:3000/service/view-services/:sid";
  add_equip = "http://localhost:3000/service/add";
  constructor(private http:HttpClient) { }

  service_Api(){
    return this.http.get<any>(this.equips); 
  }

  service_Details(id:any){
    return this.http.get<any>(this.equip_detail+id);
  }
  
  add_service(equip:FormData){
    return this.http.post<any>(this.add_equip,equip);
  }
  
}
