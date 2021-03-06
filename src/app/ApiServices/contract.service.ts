import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  accept = "http://localhost:3000/contract/accepted-req"
requests = "http://localhost:3000/contract/view-requests";
cancelled = "http://localhost:3000/contract/cancelled";
approve = "http://localhost:3000/contract/update/";
viewone = "http://localhost:3000/contract/viewOne/:cid";
deny = "http://localhost:3000/contract/cancel/:cid";

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
