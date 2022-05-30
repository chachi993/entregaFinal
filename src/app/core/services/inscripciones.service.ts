import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Inscripcion } from '../models/inscripcion'
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  private inscripcionesUrl = 'https://6266c85f63e0f3825686f2c9.mockapi.io/inscripciones/cursos';
  constructor(private httpClient: HttpClient) {}

  getInscriptiones$(): Observable<Inscripcion[]> {
    return this.httpClient.get<Inscripcion[]>(this.inscripcionesUrl);
  }

  getInscriptionesPorId$(idInscripcion: number): Observable<Inscripcion> {
    return this.httpClient.get<Inscripcion>(
      `${this.inscripcionesUrl}/${idInscripcion}`
    );
  }

  getCursosPorEstudiante$(id: number): Observable<Inscripcion[]> {
    return this.httpClient
      .get<Inscripcion[]>(this.inscripcionesUrl)
      .pipe(
        map(ins =>
          ins.filter(inscripcion => inscripcion.estudiante.id == id)
        )
      );
  }
  getEstudiantesPorCursos$(id: number): Observable<Inscripcion[]> {
    return this.httpClient
      .get<Inscripcion[]>(this.inscripcionesUrl)
      .pipe(
        map(insc =>
          insc.filter(inscripcion => inscripcion.curso.id == id)
        )
      );
  }

  deleteInscripcion(idInscripcion: number): Observable<any> {
    return this.httpClient.delete(`${this.inscripcionesUrl}/${idInscripcion}`);
  }


  addInscripcion(newInscription: Inscripcion): Observable<any> {
    return this.httpClient.post(`${this.inscripcionesUrl}`, newInscription);
  }

  updateInscripcion(inscripcionEditada: Inscripcion): Observable<any> {
    return this.httpClient.put(`${this.inscripcionesUrl}/${inscripcionEditada.idInscripcion}`,
      inscripcionEditada
    );
  }

  getNuevoId() {
    this.httpClient.get(this.inscripcionesUrl).subscribe(inscriptiones => {
      let inscriptionsArray = inscriptiones as Inscripcion[];
      return inscriptionsArray.length + 1;
    });
    return 0;
  }
}
