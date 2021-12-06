import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Popper from 'popper.js';
import { INTERNAL_PATHS, INTERNAL_ROUTES } from '../../../data/routes/internal.routes';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  public STR_AUTH_LOGIN = INTERNAL_ROUTES.AUTH_LOGIN 
  public step = 1;
  public error = {
    status: false,
    msg: ""
  };

  recuperarForm:FormGroup = this.fb.group({
    email:["",[Validators.required,Validators.email]],
  })

  codigoForm:FormGroup = this.fb.group({
    codigo:["",[Validators.required,Validators.email]],
  })

  newPasswordForm:FormGroup = this.fb.group({
    contraseña:["",[Validators.required,Validators.email]],
  })
  
  constructor( private fb:FormBuilder,
               private router:Router ) { 
    


  }

  ngOnInit(): void {
  }

  recuperar(){
    //Post 2 pasa a la sig pagina de recup, si no salta alert
    this.step = 2;
    this.error.status = true;
    this.error.msg = "El mail ingresado no es válido"
  }

  comprobarCodigo(){
    //Post 3 pasa a la sig pagina de recup, si no salta alert
    this.step = 3;
    this.error.status = true;
    this.error.msg = "El código ingresado no es válido.\nRecordá que tenes 3 intentos"
  }

  reenviarCodigo(){
    //post para reenviar el codigo
  }

  restablecer(){
    //post nueva contraseña
    this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN)
    this.error.status = false;
  }
}
