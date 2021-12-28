import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from '../../data/routes/internal.routes';
import { ClientesComponent } from '../abm/clientes/clientes.component';
import { GabineteComponent } from './gabinete/gabinete.component';
import { PlantaComponent } from './planta/planta.component';
import { SectorComponent } from './sector/sector.component';
import { TipoPrendaComponent } from './tipo-prenda/tipo-prenda.component';

const routes: Routes = [
  { path:INTERNAL_PATHS.ABM_CLIENTE, component:ClientesComponent },
  { path:INTERNAL_PATHS.ABM_GABINETE, component:GabineteComponent },
  { path:INTERNAL_PATHS.ABM_PLANTA, component:PlantaComponent },
  { path:INTERNAL_PATHS.ABM_SECTOR, component:SectorComponent },
  { path:INTERNAL_PATHS.ABM_TIPO_PRENDA, component:TipoPrendaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbmRoutingModule { }
