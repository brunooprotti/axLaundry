import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { PrendasComponent } from './prendas/prendas.component';


@NgModule({
  declarations: [
    ClientesComponent,
    PrendasComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
