import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Docauths } from './docauths';

@Injectable({
  providedIn: 'root'
})
export class Doctauthguars implements CanActivate {
  constructor(private docauths: Docauths, private router: Router) { }
  canActivate() {
    if (this.docauths.isUserLoggedIn())
    {
      return true
    }
    else
    {
      this.router.navigate(['doclogin'])
      return false
    }
  }
}
