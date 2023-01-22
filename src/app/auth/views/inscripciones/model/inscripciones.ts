import { Alumnos } from "../../alumnos/model/alumnos";
import { Curso } from '../../cursos/model/cursos';

export interface Inscripciones {
    id:number;
    codigo:string;
    alumno:Alumnos;
    fecha:Date;
    curso:Curso;
}