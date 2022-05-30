import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosAltaRoutingModule } from './alumnos-alta-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlumnosAltaRoutingModule
  ],
  exports:[
    AlumnosAltaRoutingModule
  ]
})
export class StudentFormModule { }
