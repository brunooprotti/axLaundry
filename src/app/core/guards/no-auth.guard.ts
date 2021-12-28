import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { INTERNAL_ROUTES } from '../../data/routes/internal.routes';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private cookieService:CookieService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.cookieService.get('token') && this.cookieService.check('token')) {
        // logged in so return false
        this.router.navigateByUrl(INTERNAL_ROUTES.HOME);
        return false;
     }
     // logged in so redirect to home page with the return url
     return true;
  }
  
}
