import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  registerForm:FormGroup = this.fb.group({
    nombre:[""],
    direccion:[""],
    cuit:[],
    email:[""],
  })
  
  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }
  
  register(){
    console.log(this.registerForm.value);
  }
}
