import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  isAdmin():boolean{
    if( localStorage.getItem('token') == "admin12345")
       return true;
    return false;   
  }

  isUser():boolean{
    if( localStorage.getItem('token') == "user12345")
       return true;
    return false;   
  }

}
