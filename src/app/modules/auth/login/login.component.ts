import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INTERNAL_PATHS, INTERNAL_ROUTES } from '../../../data/routes/internal.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public STR_AUTH_RECUPERAR = INTERNAL_ROUTES.AUTH_PASSWORD

  loginForm: FormGroup = this.fb.group({
    email:["",[Validators.required,Validators.email]],
    contraseña:["",[Validators.required]]
  })

  constructor( private fb:FormBuilder,
               private router:Router ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value);
    this.router.navigateByUrl(INTERNAL_ROUTES.HOME)
  }
}
