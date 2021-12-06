import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from '../../data/routes/internal.routes';
import { ClientesComponent } from '../abm/clientes/clientes.component';

const routes: Routes = [
  { path:INTERNAL_PATHS.ABM_CLIENTE, component:ClientesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbmRoutingModule { }
