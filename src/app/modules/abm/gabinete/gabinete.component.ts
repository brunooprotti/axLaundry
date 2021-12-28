import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as e from 'cors';
import { INTERNAL_PATHS, INTERNAL_ROUTES } from '../../../data/routes/internal.routes';
import { DataService } from '../../../data/services/data.service';

@Component({
  selector: 'app-gabinete',
  templateUrl: './gabinete.component.html',
  styleUrls: ['./gabinete.component.css']
})
export class GabineteComponent implements OnInit {
  step: number;

  public STR_ABM_GABINETE = INTERNAL_PATHS.ABM_GABINETE
  constructor(private router:Router,
              private dataService:DataService) { 
    this.step = this.dataService.step;
  }

  ngOnInit(): void {
  }

  siguiente(){
    this.step += 1; 
  }
  anterior(){
    this.step -= 1;
  }

  ir(){
    if (this.step === 1) this.router.navigateByUrl(INTERNAL_ROUTES.ABM_PLANTA)
    else if(this.step === 2)  this.router.navigateByUrl(INTERNAL_ROUTES.ABM_SECTOR)
  }
}
