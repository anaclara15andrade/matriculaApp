import { Injectable } from '@angular/core';

import { Matricula } from '../../models/matricula';
// import { MatriculaAluno } from '../../models/matriculaAluno';
// import { MatriculaHistorico } from '../../models/matriculaHistorico';

@Injectable()
export class MatriculaProvider {
  listaMatricula: Matricula[] = [];
  // listaMatriculaHistorico: MatriculaHistorico [] = [];

  constructor() {
    let listaMatriculaAluno = [
      {
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "F",
          "disciplina" : {
            "codigo" : 132012,
            "nome" : "INTRODUCAO A ECONOMIA",
            "creditos" : 4
          },
          "listaHorarioAula" : [ {
            "dia" : "SEG",
            "hora" : "14:00-15:50"
          }, {
            "dia" : "QUA",
            "hora" : "14:00-15:50"
          } ]
        }
      },
    ];

    for (let matricula of listaMatriculaAluno) {
      this.listaMatricula.push(new Matricula(matricula));
    }

  }
  add(matricula: Matricula){
    this.listaMatricula.push(matricula);
  }
  delete(matricula: Matricula){
    const index = this.listaMatricula.indexOf(matricula);
    if(index === -1)
      return;
    this.listaMatricula.splice(index, 1);
  }
  get(){
    return this.listaMatricula;
  }
}
