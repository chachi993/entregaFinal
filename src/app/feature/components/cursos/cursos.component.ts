import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/models/cursos';
import { CursosService } from 'src/app/core/services/cursos.service';
import { cargarCursosRedux, cursosCargadosRedux } from 'src/app/state/actions/curso.action';
import { CursoDialogComponent } from '../dialog/curso-dialog/curso-dialog.component';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  sesionActual!: any;
  cargando$! : Observable<boolean>
  constructor(
    private cursosService: CursosService, 
    public dialog: MatDialog,
    private store : Store<AppState>
    ) {
    this.cursosService.obtenercursos$().subscribe((data) => {
      this.cursos = data;
      this.sesionActual = JSON.parse(localStorage.getItem('sesion') || '{}');
    });
  }

  ngOnInit(): void {
    this.store.dispatch(cargarCursosRedux())
    this.cursosService.obtenercursos$().subscribe((cursos)=> {
      this.store.dispatch(cursosCargadosRedux({cursos : cursos}))
    });
    this.cargando$ = this.store.select(state => state.cursos.cargando)
  }

  cargarCursos() {
    this.cursosService.obtenercursos$().subscribe((data: Curso[]) => {
      this.cursos = data;
    });
  }
  deleteCurso(id: number) {
    this.cursosService.eliminarCurso(id).subscribe(() => {
      alert('Curso eliminado');
      this.cargarCursos();
    });
  }
  modificarCurso() {
    this.cursosService.modificarCurso(this.cursos).subscribe(() => {
      alert('Curso editado');
      this.cargarCursos();
    });
  }
  agregarCurso() {
    this.cargarCursos()
  }

  abrirCursoDialog(curso: any) {
    const cursoClone = Object.assign({}, curso);
    const dialogRef = this.dialog.open(CursoDialogComponent, {
      width: '300px',
      data: cursoClone,
    });
    dialogRef.afterClosed().subscribe(() => {
      alert('Curso editado');
      this.cargarCursos();
    });
  }
}
