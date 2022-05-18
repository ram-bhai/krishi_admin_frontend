import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  addstorage = "http://localhost:3000/storage/add";
  view = "http://localhost:3000/storageCategory/view";
  constructor(private http:HttpClient) { }
  Storage_Api(storage:FormData){
    return this.http.post<any>(this.addstorage,storage);
  }
  storage_view(){
    return this.http.get<any>(this.view);
  }
}
