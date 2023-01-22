import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListaCursosComponent } from './pages/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './pages/editar-curso/editar-curso.component';


@NgModule({
  declarations: [
    FormularioComponent,
    ListaCursosComponent,
    EditarCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
