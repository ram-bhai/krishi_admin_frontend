import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  intercept(request:HttpRequest<any>,next:HttpHandler){
    let tokenizedRequest = request.clone({
      setHeaders:{
        Authorization:'' + sessionStorage.getItem('token')
      }
    })
    return next.handle(tokenizedRequest);
  }
}
