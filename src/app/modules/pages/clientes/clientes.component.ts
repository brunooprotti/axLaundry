import { Component, OnInit } from '@angular/core';
import { INTERNAL_PATHS, INTERNAL_ROUTES } from '../../../data/routes/internal.routes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public STR_ABM_CLIENTE = INTERNAL_ROUTES.ABM_CLIENTE

  constructor() { }

  ngOnInit(): void {
  }

}
