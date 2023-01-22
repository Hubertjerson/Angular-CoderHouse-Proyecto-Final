import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCursosPipe } from './filtro-cursos.pipe';



@NgModule({
  declarations: [
    FiltroCursosPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FiltroCursosPipe
  ]
})
export class PipeModule { }
