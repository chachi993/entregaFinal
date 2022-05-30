import { createReducer, on } from "@ngrx/store";

import { SesionState } from "src/app/core/models/sesion.state.model";
import { crearSesion } from "../actions/sesion.action";

export const inicializer: SesionState = {
    sesionActual: false,
    usuario: []
}
export const loginReducer = createReducer(
    inicializer,
    on(crearSesion, (estado,{usuario}) => {
        return { 
            ...estado, 
            sesionActual: true,
             usuario }
    })
)