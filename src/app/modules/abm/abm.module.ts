import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GabineteComponent } from './gabinete/gabinete.component';
import { SectorComponent } from './sector/sector.component';
import { PlantaComponent } from './planta/planta.component';
import { TipoPrendaComponent } from './tipo-prenda/tipo-prenda.component';


@NgModule({
  declarations: [
    ClientesComponent,
    GabineteComponent,
    SectorComponent,
    PlantaComponent,
    TipoPrendaComponent
  ],
  imports: [
    CommonModule,
    AbmRoutingModule,
    ReactiveFormsModule
  ]
})
export class AbmModule { }
