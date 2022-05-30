import { Profesor } from "./profesor";
import { Alumnos } from "./alumnos";

export interface Curso{
    id: number,
    nombre:string,
    descripcion:string,
    fechaCom: Date,
    fechaFin: Date,
    profesor: Profesor,
    alumnos: Alumnos[]
}