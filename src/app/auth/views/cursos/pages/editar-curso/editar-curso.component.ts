import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { CursoState } from '../../model/curso.state';
import { Curso } from '../../model/cursos';
import { CursosService } from '../../services/cursos.service';
import { eliminarCurso, loadCursoss } from '../../store/cursos.actions';
import { selectCursos } from '../../store/cursos.selectors';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit, OnDestroy{

  cursos$!: Observable<Curso[]>;

  constructor(
    private store: Store<CursoState>,
    private cursosService: CursosService,
    private router: Router
  ){}

  ngOnDestroy(): void {
      
  }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectCursos);

    this.store.dispatch(loadCursoss());
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['/courses/edit-course', curso]);
  }

  eliminarCurso(curso: Curso) {
    this.store.dispatch(eliminarCurso({ curso }));
  }

  filtrarCurso(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;

    /* columna en especifico , filterPredicate lleva dos parametros*/
    this.cursos$ = this.cursosService
      .obtenerCursos()
      .pipe(
        map((c) =>
          c.filter((curso) =>
            curso.nombreCurso
              .toLocaleLowerCase()
              .includes(valorObtenido.toLocaleLowerCase())
          )
        )
      );
  }
}
