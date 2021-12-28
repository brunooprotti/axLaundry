import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from '../../../data/routes/internal.routes';
import { AuthService, ObjLogin } from '../../../data/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public STR_AUTH_RECUPERAR = INTERNAL_ROUTES.AUTH_PASSWORD

  loginForm!: FormGroup;

  constructor( private authService:AuthService,
               private fb:FormBuilder,
               private router:Router ) { 

                 this.loginForm = this.fb.group({
                   userName:["",[Validators.required,Validators.email]],
                   password:["",[Validators.required]]
                 })

  }


  login(){
    const objLogin:ObjLogin = this.loginForm.value

    if( objLogin.userName && objLogin.password ){ //Si existen entonces hago el post.
      console.log(objLogin);
      this.authService.login(objLogin)
        .subscribe(
          () => {
            this.router.navigateByUrl(INTERNAL_ROUTES.HOME)
          },e => console.log(e)
        )
    }
  }
}
