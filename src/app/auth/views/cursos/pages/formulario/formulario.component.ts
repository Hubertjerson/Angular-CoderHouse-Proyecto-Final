import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from '../../model/cursos';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private cursoService: CursosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombreCurso: new FormControl('', [Validators.required]),
      comision: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required]),
      inicio: new FormControl('', [Validators.required]),
      fin: new FormControl('', [Validators.required]),
      inscripcionAbierta: new FormControl('', [Validators.required]),
      img: new FormControl(),
    });
  }

  agregarCurso() {
    const curso: Curso = {
      id: Math.round(Math.random() * 1000),
      nombreCurso: this.formulario.value.nombreCurso,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.inicio,
      fechaFin: this.formulario.value.fin,
      profesor: this.formulario.value.profesor,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      img: this.formulario.value.img,
    };

    this.cursoService.agregarCurso(curso);
    this.router.navigate(['/courses']);
  }
}
