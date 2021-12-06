import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    FooterComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
