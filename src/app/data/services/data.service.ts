import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //step es un dato para ABM de planta/sector con gabinete.
  step:number = 1;
  constructor() { }
}
