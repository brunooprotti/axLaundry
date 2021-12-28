import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from '../../../data/routes/internal.routes';
import { DataService } from '../../../data/services/data.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  constructor(private router : Router,
              private dataService: DataService) { }

  ngOnInit(): void {
  }

  register(){
    //TODO: HACER POST PLANTA
    this.dataService.step = 1;
    this.router.navigateByUrl(INTERNAL_ROUTES.ABM_GABINETE)
  }
}
