import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { INTERNAL_ROUTES } from '../../data/routes/internal.routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private cookieService:CookieService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.cookieService.get('token') && this.cookieService.check('token')) {
        // logged in so return true
        return true;
     }
     // not logged in so redirect to login page with the return url
     this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
     return false;
  }
  
}
