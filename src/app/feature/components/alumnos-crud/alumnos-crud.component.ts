import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { Alumnos } from 'src/app/core/models/alumnos';
import { MatTable } from '@angular/material/table';
import { Observable, observable } from 'rxjs';
import { EditDialogComponent } from '../dialog/alumnos-dialogo/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
export interface DialogData {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  curso: string;
}

@Component({
  selector: 'app-alumnos-crud',
  templateUrl: './alumnos-crud.component.html',
  styleUrls: ['./alumnos-crud.component.css'],
})
export class AlumnosCrudComponent  {
  sesionActual!: any;
  dataSource = this.getStudents$();
  displayColumns: string[] = [
    'Id',
    'Edad',
    'Nombre Completo',
    'Email',
    'Curso',
    'Delete',
    'Editar',
    'Anular Inscripcion'
  ];
  alumnos: Alumnos[] = [];
  @ViewChild(MatTable) table!: MatTable<any>;

  refreshTable() {
    this.table.renderRows();
  }

  constructor(
    private alumnosService: AlumnosService,
    public dialog: MatDialog
  ) {
    this.alumnosService.getAlumnos$().subscribe((data) => {  
      this.alumnos = data;
    });
    this.sesionActual = JSON.parse(localStorage.getItem('sesion') || '{}');
  }

  getStudents$() {
    return this.alumnosService.getAlumnos$();
  }

  deleteStudent(id: number) {
    this.alumnosService.deleteAlumnos(id).subscribe(() => {
      this.loadStudents();
    });
  }
  

  loadStudents() {
    this.alumnosService.getAlumnos$().subscribe((data: Alumnos[]) => {
      this.alumnos = data;
    });
  }

  editStudent() {
    this.alumnosService.editAlumnos(this.alumnos).subscribe(() => {
      this.loadStudents();
      this.refreshTable();
    });
  }

  openDialogEdit(student: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: student,
    });
    dialogRef.afterClosed().subscribe(() => {
     
      alert('Curso modificado');
      this.loadStudents();
      this.refreshTable();
    });
  }

}
