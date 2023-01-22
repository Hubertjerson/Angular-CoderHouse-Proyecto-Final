import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { CursoState } from '../../model/curso.state';
import { Curso } from '../../model/cursos';
import { eliminarCurso, loadCursoss } from '../../store/cursos.actions';
import { selectCursos } from '../../store/cursos.selectors';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>;
  
  constructor(
    private store: Store<CursoState>,
    private router: Router
  ){}

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectCursos);
    this.store.dispatch(loadCursoss())
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['/cursos/edit', curso]);
  }

  eliminarCurso(curso: Curso) {
    this.store.dispatch(eliminarCurso({ curso }));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se elimno el Curso',
      showConfirmButton: false,
      timer: 1500,
    });
    this.cursos$ = this.store.select(selectCursos);
  }
}
