import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthnticationServiceService } from './authntication-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuardGuard implements CanActivate {
  constructor(private authService:AuthnticationServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
      const islogged=this.authService.islogged();
      if(islogged){
        return true;
      }
      else
       alert("Please Login first ")
       return false;
  }
  
}
