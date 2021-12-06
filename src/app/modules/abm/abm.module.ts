import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    AbmRoutingModule,
    ReactiveFormsModule
  ]
})
export class AbmModule { }
