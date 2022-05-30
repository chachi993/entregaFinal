import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/core/models/cursos';
import { AlumnosService } from 'src/app/core/services/alumnos.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})
export class EditDialogComponent implements OnInit {
  cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Fisica',
      descripcion: 'Fisica',
      fechaCom: new Date(),
      fechaFin: new Date(),
      profesor: {
        id: 1,
        nombre: 'Maria',
        apellido: 'Perez',
        email: 'maria@gmail.com',
      },
      alumnos: [],
    },
    {
      id: 2,
      nombre: 'Matematica',
      descripcion: 'Matematica',
      fechaCom: new Date(),
      fechaFin: new Date(),
      profesor: {
        id: 2,
        nombre: 'Pedro',
        apellido: 'Perez',
        email: 'pedro@gmail.com',
      },
      alumnos: [],
    },
    {
      id: 3,
      nombre: 'Quimica',
      descripcion: 'Quimica',
      fechaCom: new Date(),
      fechaFin: new Date(),
      profesor: {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Suarez',
        email: 'pedro1@gmail.com',
      },
      alumnos: [],
    }
  ];
  editStudentForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alumnosService: AlumnosService
  ) {
    this.editStudentForm = this.fb.group({
      nombre: new FormControl(this.data.nombre),
      apellido: new FormControl(this.data.apellido),
      edad: new FormControl(this.data.edad),
      email: new FormControl(this.data.email),
      curso: new FormControl(this.data.curso),
    });
  }

  ngOnInit(): void {}
  editStudentDialog() {
    let alumno = {
      id: this.data.id,
      nombre: this.editStudentForm.value.nombre,
      apellido: this.editStudentForm.value.apellido,
      edad: this.editStudentForm.value.edad,
      email: this.editStudentForm.value.email,
      curso: this.editStudentForm.value.curso,
    }
    this.alumnosService.editAlumnos(alumno).subscribe((alumno) => {
    })
    this.dialogRef.close(alumno);
  }

}
