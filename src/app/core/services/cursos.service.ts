import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Curso } from '../models/cursos';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  public url = 'https://6266c85f63e0f3825686f2c9.mockapi.io/inscripciones/cursos';
  cursos: Curso[] = [];
  constructor(private http: HttpClient) {}

  obtenercursos$(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }

  eliminarCurso(id: number): Observable<Curso> {
    return this.http.delete<Curso>(this.url + `/${id}`);
  }

  modificarCurso(curso: any): Observable<Curso> {
    return this.http.put<Curso>(this.url + `/${curso.id}`, curso);
  }
  agregarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.url, curso).pipe(
      tap(() => {
        this.cursos.push(curso);
      })
    );
  }
}
