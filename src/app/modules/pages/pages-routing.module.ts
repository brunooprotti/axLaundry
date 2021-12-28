import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from '../../data/routes/internal.routes';
import { ClientesComponent } from './clientes/clientes.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { PrendasComponent } from './prendas/prendas.component';

const routes: Routes = [
  {path:INTERNAL_PATHS.PAGE_CLIENTES,component:ClientesComponent},
  {path:INTERNAL_PATHS.PAGE_PRENDAS,component:PrendasComponent}, 
  {path:INTERNAL_PATHS.PAGE_ORDENES,component:OrdenesComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
