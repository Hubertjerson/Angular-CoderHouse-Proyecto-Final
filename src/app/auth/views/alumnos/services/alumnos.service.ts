import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Alumnos } from '../model/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private apiURL = environments.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  obtenerAlumnos(): Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(`${this.apiURL}/alumno`)
  }

  agregarAlumno(alumno:Alumnos):Observable<Alumnos>{
    return this.http.post<Alumnos>(`${this.apiURL}/alumno`, alumno);
  }
  eliminarAlumno(alumno:Alumnos):Observable<Alumnos>{
    return this.http.delete<Alumnos>(`${this.apiURL}/alumno/${alumno.id}`);
  }
  editarAlumno(alumno : Alumnos):Observable<Alumnos>{
    return this.http.put<Alumnos>(`${this.apiURL}/alumno/${alumno.id}`, alumno)
  }
}
