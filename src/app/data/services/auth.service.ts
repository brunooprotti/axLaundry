import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";

import { API_ROUTES } from '../routes/api.routes';

import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt'
import { BehaviorSubject, Observable } from 'rxjs';
import { INTERNAL_ROUTES } from '../routes/internal.routes';

export interface ObjLogin  {
  userName:string;
  password:string;
}

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor( private http:HttpClient,
               private router: Router,
               private cookieService:CookieService) { }

  login(objLogin:ObjLogin){
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.post<string>(API_ROUTES.AUTH.LOGIN, objLogin, requestOptions)
      .pipe(tap(res => this.setSesion(res)))
  }


  private setSesion(authResult:string){
    this.cookieService.set('token',authResult)
    this.loginStatus.next(true);
  }

  logout(){
    this.loginStatus.next(false);
    this.cookieService.delete('token');
    this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
  }

  public isLoggedIn() : Observable<boolean> {
    return this.loginStatus.asObservable();
  }

  public getTokenData(){
    if (this.isLoggedIn()) {
      const token = this.cookieService.get('token');
      const data = helper.decodeToken(token);
      return data;
    }
  }

  private hasToken() : boolean {
    return this.cookieService.check('currentUser');
  }
}
