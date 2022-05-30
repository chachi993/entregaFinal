import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './feature/components/autenticacion/auth.guard';
import { InicioComponent } from './feature/components/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [AuthGuard] },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./feature/components/inicio/inicio.module').then((m) => m.InicioModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'autenticacion/alumnos',
    loadChildren: () =>
      import('./feature/components/alumnos-crud/alumnos-crud.module').then(
        (m) => m.AlumnosCrudModule
      ),canActivate: [AuthGuard],
  },
  {
    path:'autenticacion/cursos',
    loadChildren: () =>
      import('./feature/components/cursos/cursos.module').then(
        (m) => m.CursosModule
      ),canActivate: [AuthGuard],
  },
  {
    path:'inscripcione',
    loadChildren: () =>
      import('./feature/components/alumnos-alta/alumnos-alta.module').then(
        (m) => m.StudentFormModule
      ),canActivate: [AuthGuard],
  },
  {
    path: 'autenticacion',
    loadChildren: () =>
      import('./feature/components/autenticacion/autenticacion.module').then(
        (m) => m.AutenticacionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
