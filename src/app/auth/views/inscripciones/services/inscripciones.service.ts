import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscripciones } from '../model/inscripciones';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  private apiURL = environments.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  obtenerInscripciones(): Observable<Inscripciones[]>{
    return this.http.get<Inscripciones[]>(`${this.apiURL}/inscripciones`)
  }

  agregarInscripciones(inscripciones: Inscripciones):Observable<Inscripciones>{
    return this.http.post<Inscripciones>(`${this.apiURL}/inscripciones`,inscripciones)
  }

}
