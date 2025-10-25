import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Adminauths } from './adminauths';

@Injectable({
  providedIn: 'root'
})
export class Adminauthguards implements CanActivate {
  constructor(private adminauths:Adminauths, private router:Router)  { }

  canActivate() {
    if (this.adminauths.isUserLoggedIn())
    {
        return true
    }
    else
    {
      this.router.navigate(['adminlogin'])
      return false
    }
  }
}
