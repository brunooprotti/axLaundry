import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from '../../../data/routes/internal.routes';
import { DataService } from '../../../data/services/data.service';

@Component({
  selector: 'app-tipo-prenda',
  templateUrl: './tipo-prenda.component.html',
  styleUrls: ['./tipo-prenda.component.css']
})
export class TipoPrendaComponent implements OnInit {

  constructor(private router : Router,
              private dataService: DataService) { }

  ngOnInit(): void {
  }

  register(){
    //TODO: HACER POST tipoprenda
    //TODO: Si una variable (dentro del dataService) tiene valor buscar ese id y mostrar texto secundario modificar. 
    this.router.navigateByUrl(INTERNAL_ROUTES.PRENDAS)
  }

}
