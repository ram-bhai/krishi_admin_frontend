import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  accept = "https://krishi-backend.herokuapp.com/contracts/accepted-req"
requests = "https://krishi-backend.herokuapp.com/contracts/view-requests";
cancelled = "https://krishi-backend.herokuapp.com/contracts/cancelled";
approve = "https://krishi-backend.herokuapp.com/contracts/update/";
viewone = "https://krishi-backend.herokuapp.com/contracts/viewOne/:cid";
deny = "https://krishi-backend.herokuapp.com/contracts/cancel/";

  constructor(private http:HttpClient) { }

  viewContracts():Observable<any>{
    return this.http.get(this.requests);
  }

  viewCancelled():Observable<any>{
    return this.http.get(this.cancelled);
  }

  approval(pending:any,verification:any,approved:any,cid:any):Observable<any>{
    return this.http.post(this.approve+cid,{pending:pending,verification:verification,isApproved:approved});
  }

  cancellation(pending:any,verification:any,approved:any,cid:any):Observable<any>{
    return this.http.post(this.deny+cid,{pending:pending,verification:verification,isApproved:approved});
  }

  accepted():Observable<any>{
    return this.http.get(this.accept);
  }

}
