import { Component, OnInit } from '@angular/core';
import { INTERNAL_PATHS, INTERNAL_ROUTES } from '../../data/routes/internal.routes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public STR_CLIENTES = INTERNAL_PATHS.PAGE_CLIENTES
  public STR_PRENDAS = INTERNAL_PATHS.PAGE_PRENDAS
  public STR_ORDENES = INTERNAL_PATHS.PAGE_ORDENES

  constructor() { }

  ngOnInit(): void {
  }

}
