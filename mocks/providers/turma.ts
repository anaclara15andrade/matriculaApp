import { Injectable } from '@angular/core';

import { Turma } from '../../models/turma';

@Injectable()
export class TurmaProvider {
  listaTurma: Turma[] = [];

/*
  defaultTurma: any = {
  "codigo" : "C",
  "disciplina" : {
    "codigo" : 113034,
    "nome" : "CALCULO 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  };
*/

  constructor() {
    let listaTurma = [ {
  "codigo" : "C",
  "disciplina" : {
    "codigo" : 113034,
    "nome" : "CALCULO 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUI",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "SEX",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "J",
  "disciplina" : {
    "codigo" : 113034,
    "nome" : "CALCULO 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "SEX",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "D",
  "disciplina" : {
    "codigo" : 113093,
    "nome" : "INTRODUCAO A ALGEBRA LINEAR"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "16:00-17:50"
  }, {
    "dia" : "QUA",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "F",
  "disciplina" : {
    "codigo" : 113042,
    "nome" : "CALCULO 2"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUI",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "SEX",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "K",
  "disciplina" : {
    "codigo" : 113042,
    "nome" : "CALCULO 2"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "SEX",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 113301,
    "nome" : "EQUACOES DIFERENCIAIS 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 113522,
    "nome" : "METODOS MATEMATICOS FISICA 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "QUA",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "SEX",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 113069,
    "nome" : "VARIAVEL COMPLEXA 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "TER",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUI",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 113051,
    "nome" : "CALCULO 3"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "SEX",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 113051,
    "nome" : "CALCULO 3"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUI",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "SEX",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "D",
  "disciplina" : {
    "codigo" : 113417,
    "nome" : "CALCULO NUMERICO"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUI",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "G",
  "disciplina" : {
    "codigo" : 118001,
    "nome" : "FISICA 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUA",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 118010,
    "nome" : "FISICA 1 EXPERIMENTAL"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "F",
  "disciplina" : {
    "codigo" : 118010,
    "nome" : "FISICA 1 EXPERIMENTAL"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEX",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "E",
  "disciplina" : {
    "codigo" : 118028,
    "nome" : "FISICA 2"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUA",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "F",
  "disciplina" : {
    "codigo" : 118036,
    "nome" : "FISICA 2 EXPERIMENTAL"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "G",
  "disciplina" : {
    "codigo" : 118036,
    "nome" : "FISICA 2 EXPERIMENTAL"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "QUI",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 115045,
    "nome" : "PROBABILIDADE E ESTATISTICA"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "QUA",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "SEX",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "H",
  "disciplina" : {
    "codigo" : 115045,
    "nome" : "PROBABILIDADE E ESTATISTICA"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "SEX",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 122408,
    "nome" : "CIENCIAS DO AMBIENTE"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 122408,
    "nome" : "CIENCIAS DO AMBIENTE"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 132012,
    "nome" : "INTRODUCAO A ECONOMIA"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "QUA",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "F",
  "disciplina" : {
    "codigo" : 132012,
    "nome" : "INTRODUCAO A ECONOMIA"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 184802,
    "nome" : "NOCOES DE DIREITO"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "18:00-19:50"
  }, {
    "dia" : "QUA",
    "hora" : "18:00-19:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 168921,
    "nome" : "HIGIENE E SEGURANCA DO TRABALHO"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "12:00-13:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 181315,
    "nome" : "ORGANIZACAO INDUSTRIAL"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "SEG",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 114626,
    "nome" : "QUIMICA GERAL TEORICA"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "QUA",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 114634,
    "nome" : "QUIMICA GERAL EXPERIMENTAL"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "D",
  "disciplina" : {
    "codigo" : 113913,
    "nome" : "INTRODUCAO A CIENCIA DA COMPUTACAO"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "16:00-17:50"
  }, {
    "dia" : "SEX",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "D",
  "disciplina" : {
    "codigo" : 162019,
    "nome" : "DESENHO TECNICO"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUI",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 110302,
    "nome" : "INTRODUCAO A MECANICA DOS SOLIDOS"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "QUA",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "SEX",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "E",
  "disciplina" : {
    "codigo" : 134465,
    "nome" : "INTRODUCAO A SOCIOLOGIA"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "QUI",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 170381,
    "nome" : "PROJETO FINAL DE GRADUACAO 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SAB",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 170399,
    "nome" : "PROJETO FINAL DE GRADUACAO 2"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SAB",
    "hora" : "10:00-15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 169196,
    "nome" : "TRABALHO CONCLUSAO DE CURSO 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SAB",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 169129,
    "nome" : "TRABALHO CONCLUSAO DE CURSO 2"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SAB",
    "hora" : "10:00-15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167959,
    "nome" : "FUNDAMENTOS DE REDES"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "QUI",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 169676,
    "nome" : "COMPUTACAO PARA ENGENHARIA"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "QUI",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 169749,
    "nome" : "SISTEMAS DE PROGRAMACAO"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "QUA",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "SEX",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167975,
    "nome" : "METODOLOGIA E DESENVOLVIMENTO DE SOFWARE"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "QUA",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "SEX",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 108545,
    "nome" : "ARQUITETURA PROTOCOLOS REDES"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 108553,
    "nome" : "LABORATORIO ARQUITETURA E PROTOCOLOS DE REDES"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 5,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "QUI",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 108553,
    "nome" : "LABORATORIO ARQUITETURA E PROTOCOLOS DE REDES"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 5,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "QUI",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167266,
    "nome" : "TEORIA DA INFORMACAO"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "16:00-17:50"
  }, {
    "dia" : "QUI",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 108529,
    "nome" : "REDES DE TELECOMUNICACOES"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "16:00-17:50"
  }, {
    "dia" : "QUA",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 108537,
    "nome" : "LABORATORIO REDES DE TELECOMUNICACOES"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEX",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 169650,
    "nome" : "REDES DE COMUNICACAO DE DADOS"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167983,
    "nome" : "SISTEMAS DIGITAIS 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "16:00-17:50"
  }, {
    "dia" : "QUA",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "QUI",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 167983,
    "nome" : "SISTEMAS DIGITAIS 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "TER",
    "hora" : "16:00-17:50"
  }, {
    "dia" : "QUI",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167011,
    "nome" : "CIRCUITOS ELETRICOS 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "16:00-17:50"
  }, {
    "dia" : "QUA",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "QUI",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "C",
  "disciplina" : {
    "codigo" : 167011,
    "nome" : "CIRCUITOS ELETRICOS 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUI",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167037,
    "nome" : "ELETROMAGNETISMO 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUI",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 167037,
    "nome" : "ELETROMAGNETISMO 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "16:00-17:50"
  }, {
    "dia" : "QUI",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167991,
    "nome" : "SISTEMAS DIGITAIS 2"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "16:00-17:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 167991,
    "nome" : "SISTEMAS DIGITAIS 2"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUA",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUI",
    "hora" : "14:00-15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167746,
    "nome" : "ARQUITETURA DE PROCESSADORES DIGITAIS"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "TER",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUI",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167070,
    "nome" : "MATERIAIS ELETRICOS E MAGNETICOS"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUA",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "SEX",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167029,
    "nome" : "CIRCUITOS ELETRICOS 2"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "TER",
    "hora" : "14:00-15:50"
  }, {
    "dia" : "QUI",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 167053,
    "nome" : "ELETRONICA 1"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "16:00-17:50"
  }, {
    "dia" : "TER",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUI",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 169111,
    "nome" : "LABORATORIO PRINCIPIOS DE COMUNICACAO"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 5,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "08:00-09:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : 169111,
    "nome" : "LABORATORIO PRINCIPIOS DE COMUNICACAO"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 5,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 169188,
    "nome" : "PRINCIPIOS DE COMUNICACAO"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "TER",
    "hora" : "10:00-11:50"
  }, {
    "dia" : "QUI",
    "hora" : "10:00-11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : 167878,
    "nome" : "COMUNICACOES DIGITAIS"
  },
  "periodoLetivo" : {
    "ano" : 2017,
    "numero" : 1
  },
  "numeroVagas" : 10,
  "numeroMatriculas" : 0,
  "listaHorarioAula" : [ {
    "dia" : "SEG",
    "hora" : "08:00-09:50"
  }, {
    "dia" : "QUA",
    "hora" : "08:00-09:50"
  } ]
} ];

    for (let turma of listaTurma) {
      this.listaTurma.push(new Turma(turma));
    }
  }

  pesquisar(params?: any) {
    if (!params) {
      return this.listaTurma;
    }
    if ("disciplina" in params) {
      return this.listaTurma.filter((turma) => {
        if(turma.disciplina.codigo == params.disciplina) {
              return turma;
        }
        return null;
      });
    }
  }

}
