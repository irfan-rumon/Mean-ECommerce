import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthorizationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
       if( !this.auth.isLoggedIn()  )
       {
         this.router.navigate(['/login']);
         this.auth.deleteToken();
         return false;
       }
       if( this.auth.getUser().roll == "admin")
       {
             
        this.router.navigate(['/login']);
        this.auth.deleteToken();
        return false;
        }
      return true;
        
      
  }
  
}
