import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { PrendasComponent } from './prendas/prendas.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ClientesComponent,
    PrendasComponent,
    OrdenesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
