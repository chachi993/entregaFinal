import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../autenticacion/auth.guard';
import { CursosComponent } from '../cursos/cursos.component';
import { AlumnosCrudComponent } from '../alumnos-crud/alumnos-crud.component';
import { AlumnosAltaComponent } from '../alumnos-alta/alumnos-alta.component';
import { InicioComponent } from './inicio.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'cursos',
        component: CursosComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'alumnos',
        component: AlumnosCrudComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'inscripciones',
        component: AlumnosAltaComponent,
        canActivateChild: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
