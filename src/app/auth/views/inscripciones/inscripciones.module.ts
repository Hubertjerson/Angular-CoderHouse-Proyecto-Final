import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InscripcionesListaComponent } from './pages/inscripciones-lista/inscripciones-lista.component';


@NgModule({
  declarations: [
    FormularioComponent,
    InscripcionesListaComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule
  ]
})
export class InscripcionesModule { }
