import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  addstorage = 'http://localhost:3000/storage/add';
  view = 'http://localhost:3000/storageCategory/view';
  allStore = 'http://localhost:3000/storage/view-storage';
  update = 'http://localhost:3000/storage/update-items/';
  book = 'http://localhost:3000/booked-storage/view-booked';
  remove = 'http://localhost:3000/storage/delete-storage';
  view_User = 'http://localhost:3000/storage/view-storage';

  public responseCache = new Map();

  constructor(private http: HttpClient) {}
  removeStorage_id(bid: any) {
    return this.http.post<any>(this.remove, { bid });
  }

  storage_View_id(pid: any) {
    return this.http.get<any>(this.view_User + pid);
  }

  Storage_Api(storage: FormData) {
    return this.http.post<any>(this.addstorage, storage);
  }
  storage_view() {
    return this.http.get<any>(this.view);
  }

  allStorage(): Observable<any> {
    const storageFromCache = this.responseCache.get(this.allStore);
    if (storageFromCache) {
      return of(storageFromCache);
    }
    const response = this.http.get<any>(this.allStore);
    response.subscribe((storages) =>
      this.responseCache.set(this.allStore, storages)
    );
    return response;
  }

  updatestorages(formData: FormData, id: any): Observable<any> {
    return this.http.put<any>(this.update + id, formData);
  }

  bookedStorage(): Observable<any> {
    return this.http.get(this.book);
  }
}
