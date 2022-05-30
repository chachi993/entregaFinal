import { Alumnos, Alumnos as Estudiantes } from '../models/alumnos';
import { Curso } from '../models/cursos';

export interface Inscripcion {
  idInscripcion: number;
  estudiante: Alumnos;
  curso: Curso;
  inscripcionDate: Date;
}
