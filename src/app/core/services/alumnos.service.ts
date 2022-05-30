import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumnos } from '../models/alumnos';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  public url = 'https://6266c85f63e0f3825686f2c9.mockapi.io/inscripciones/alumnos';
  alumnos: Alumnos[] = [];

  constructor(private http: HttpClient) {}

  getAlumnos$(): Observable<Alumnos[]> {
    return this.http.get<Alumnos[]>(this.url);
  }

  deleteAlumnos(id: number): Observable<Alumnos> {
    return this.http.delete<Alumnos>(this.url + `/${id}`);
  }

  addAlumnos(alumno: Alumnos): Observable<Alumnos> {
    return this.http.post<Alumnos>(this.url, alumno)
    .pipe(
      tap(()=>{
        this.alumnos.push(alumno);
      })
    )
  }
  editAlumnos(alumnos : any): Observable<Alumnos>{
    return this.http.put<Alumnos>(this.url + `/${alumnos.id}`, alumnos)
   
  }
}

