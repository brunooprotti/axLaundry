import { Component, OnInit } from '@angular/core';
import { Orden } from '../../../data/interfaces/Orden.interface';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  ordenLista:Orden[] = [
    {
      numero:18402,
      origen: 'LAVADERÍA Gabinete 1',
      destino: 'CLIENTE 2',
      fechaAlta: new Date(),
      fechaCierre: new Date(),
      estado: 1,
    },
    {
      numero:18403,
      origen: 'CLIENTE 1 Gabinete 2',
      destino: 'LAVANDERÍA',
      fechaAlta: new Date(),
      fechaCierre: new Date(),
      prendas:250,
      estado: 2,
    },
    {
      numero:18405,
      origen: 'LAVANDERÍA Gabinete 2',
      destino: 'CLIENTE 1',
      fechaAlta: new Date(),
      fechaCierre: new Date(),
      prendas:55,
      estado: 2,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
