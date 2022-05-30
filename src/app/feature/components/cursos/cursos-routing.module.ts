import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../autenticacion/auth.guard';
import { InicioComponent } from '../inicio/inicio.component';
import { AlumnosCrudComponent } from '../alumnos-crud/alumnos-crud.component';
import { AlumnosAltaComponent } from '../alumnos-alta/alumnos-alta.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'inicio',
        component: InicioComponent,
        canActivateChild: [AuthGuard],
      },
      { path: 'inicio', component: InicioComponent, 
      canActivateChild: [AuthGuard] },
      {
        path: 'inscripciones',
        component: AlumnosAltaComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'alumnos',
        component: AlumnosCrudComponent,
        canActivateChild: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
