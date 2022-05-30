import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule, 
    FlexLayoutModule,
    
  ],
  exports: [
    NavbarComponent,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
  ]
})
export class CoreModule { }
