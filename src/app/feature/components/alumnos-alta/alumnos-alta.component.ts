import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Curso } from 'src/app/core/models/cursos';

@Component({
  selector: 'app-alumnos-alta',
  templateUrl: './alumnos-alta.component.html',
  styleUrls: ['./alumnos-alta.component.css'],
})
export class AlumnosAltaComponent  {
  formulario: FormGroup;
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

  constructor(
    private alumnosService: AlumnosService,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      edad: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      curso: new FormControl('', [Validators.required]),
    });
  }

  addStudent() {
    const alumno = this.formulario.value;
    this.alumnosService.addAlumnos(alumno).subscribe(() => { 
      alert('Alumno Correctamente agregado');
      this.formulario.reset();
    });
  }
}
