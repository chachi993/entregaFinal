import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosCrudRoutingModule } from './alumnos-crud-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlumnosCrudRoutingModule
  ],
  exports:[
    AlumnosCrudRoutingModule
  ]
})
export class AlumnosCrudModule { }
