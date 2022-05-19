import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  addstorage = "http://localhost:3000/storage/add";
  view = "http://localhost:3000/storageCategory/view";
  allStore = "http://localhost:3000/storage/view-storage";

  public responseCache = new Map();

  constructor(private http:HttpClient) { }
  Storage_Api(storage:FormData){
    return this.http.post<any>(this.addstorage,storage);
  }
  storage_view(){
    return this.http.get<any>(this.view);
  }

  allStorage():Observable<any>{
    const storageFromCache = this.responseCache.get(this.allStore);
    if(storageFromCache){
      return of(storageFromCache);
    }
    const response = this.http.get<any>(this.allStore);
    response.subscribe(storages => this.responseCache.set(this.allStore,storages));
    return response;
  }

  

  // service_Api():Observable<any>{
  //   const equipsfromCache = this.responseCache.get(this.equips);
  //   if(equipsfromCache){
  //     return of(equipsfromCache);
  //   }
  //   const response = this.http.get<any>(this.equips); 
  //   response.subscribe(equipment => this.responseCache.set(this.equips,equipment));
  //   return response; 
  // }
}
