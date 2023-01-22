import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentsPROD } from 'src/environments/environments.prod';
import { Alumnos } from '../model/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private apiURL = environmentsPROD.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  obtenerAlumnos(): Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(`${this.apiURL}/alumnos`)
  }

  agregarAlumno(alumno:Alumnos):Observable<Alumnos>{
    return this.http.post<Alumnos>(`${this.apiURL}/alumnos`, alumno);
  }
  eliminarAlumno(alumno:Alumnos):Observable<Alumnos>{
    return this.http.delete<Alumnos>(`${this.apiURL}/alumnos/${alumno.id}`);
  }
  editarAlumno(alumno : Alumnos):Observable<Alumnos>{
    return this.http.put<Alumnos>(`${this.apiURL}/alumnos/${alumno.id}`, alumno)
  }
}
