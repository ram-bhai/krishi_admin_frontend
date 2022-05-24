import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Additems } from '../models/additems';
import { EditItems } from '../models/edit-items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

item = "http://localhost:3000/storage/items/";
remove = "http://localhost:3000/storage/delete-items/";
additems="http://localhost:3000/storage/add-items";
viewItems = "http://localhost:3000/storage/view-storage";
updates = "http://localhost:3000/storage/view-storage";
update_Item = "http://localhost:3000/storage/items/";


  constructor(private http:HttpClient) { }


 user_Item(item_id:any,sid:any){
  return this.http.get<any>(this.item+item_id+"/"+sid);
 }

  storage_User(sid:any,item_id:any,item:EditItems){
    return this.http.put<any>(this.update_Item+sid+"/"+item_id,item);
  }

 viewStorage(){
   return this.http.get<any>(this.viewItems);
 }

  itemservice(additem: Additems):Observable<any>{
    return this.http.post(this.additems,additem);
  }

  updateItem(item:EditItems):Observable<any>{
 return this.http.post<any>(this.updates,item)
  }

  removeItem(item_Id:any,sid:any):Observable<any>{
    return this.http.delete<any>(this.remove+item_Id+"/"+sid);
  }

}

