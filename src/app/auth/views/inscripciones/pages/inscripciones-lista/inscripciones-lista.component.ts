import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Alumnos } from '../../../alumnos/model/alumnos';
import { AlumnosService } from '../../../alumnos/services/alumnos.service';
import { Curso } from '../../../cursos/model/cursos';
import { CursosService } from '../../../cursos/services/cursos.service';
import { Inscripciones } from '../../model/inscripciones';
import { InscripcionesService } from '../../services/inscripciones.service';

@Component({
  selector: 'app-inscripciones-lista',
  templateUrl: './inscripciones-lista.component.html',
  styleUrls: ['./inscripciones-lista.component.css']
})
export class InscripcionesListaComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [
    'id',
    'codigo',
    'alumno',
    'fecha',
    'curso',
  ];

  dataSource = new MatTableDataSource<Inscripciones>();

  inscripciones: Inscripciones[];
  InscripcionesSubs:Subscription;
  inscripcion$:Observable<Inscripciones[]>

  constructor(
    private inscripcioneServices: InscripcionesService,
  ) {}

  ngOnInit(): void {
    this.inscripcion$ = this.inscripcioneServices.obtenerInscripciones();
    this.InscripcionesSubs = this.inscripcion$.subscribe(inscripcion => this.dataSource.data = inscripcion)
  }

  ngOnDestroy(): void {
    this.InscripcionesSubs.unsubscribe();
  }
}
