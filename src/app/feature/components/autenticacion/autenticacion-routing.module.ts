import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from '../cursos/cursos.component';
import { InicioComponent } from '../inicio/inicio.component';
import { AlumnosCrudComponent } from '../alumnos-crud/alumnos-crud.component';
import { AlumnosAltaComponent } from '../alumnos-alta/alumnos-alta.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'inicio',
         component: InicioComponent 
        },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'alumnos',
        component: AlumnosCrudComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'inscripciones',
        component: AlumnosAltaComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutenticacionRoutingModule {}
