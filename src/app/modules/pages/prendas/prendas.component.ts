import { Component, OnInit } from '@angular/core';
import { INTERNAL_ROUTES } from '../../../data/routes/internal.routes';

@Component({
  selector: 'app-prendas',
  templateUrl: './prendas.component.html',
  styleUrls: ['./prendas.component.css']
})
export class PrendasComponent implements OnInit {

  public STR_AGREGAR_TIPO_PRENDA = INTERNAL_ROUTES.ABM_TIPO_PRENDA

  constructor() { }

  ngOnInit(): void {
  }

}
