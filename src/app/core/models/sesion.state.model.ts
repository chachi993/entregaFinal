import { Usuario } from "./usuario";

export interface SesionState{
    sesionActual: boolean;
    usuario: Usuario[];
}