import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosCrudComponent } from './components/alumnos-crud/alumnos-crud.component';
import { AlumnosAltaComponent } from './components/alumnos-alta/alumnos-alta.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EditDialogComponent } from './components/dialog/alumnos-dialogo/edit-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CursoDialogComponent } from './components/dialog/curso-dialog/curso-dialog.component';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AutenticacionModule } from './components/autenticacion/autenticacion.module';
import { CursosRoutingModule } from './components/cursos/cursos-routing.module';

@NgModule({
  declarations: [
    InicioComponent,
    AlumnosCrudComponent,
    CursoDialogComponent,
    AlumnosAltaComponent,
    CursosComponent,
    ToolbarComponent,
    EditDialogComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutenticacionModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    CursosComponent,
    AlumnosCrudComponent,
    AlumnosAltaComponent,
    InicioComponent,
    LoginComponent,
    ToolbarComponent,
    AutenticacionModule,
    CursosRoutingModule,
  ],
})
export class FeatureModule {}
