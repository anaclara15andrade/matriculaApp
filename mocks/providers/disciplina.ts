import { Injectable } from '@angular/core';

import { Disciplina } from '../../models/disciplina';

@Injectable()
export class DisciplinaProvider {
  listaDisciplina: Disciplina[] = [];

  constructor() {
    let listaDisciplina = [ {
        "codigo" : "ENE0026",
        "nome" : "INTRODUÇÃO A ENGENHARIA DE REDES E COMUNICAÇÕES",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : ""

      }, {
        "codigo" : "ENE0334",
        "nome" : "COMPUTAÇÃO PARA ENGENHARIA",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : ""
      }, {
        "codigo" : "IFD0171",
        "nome" : "FÍSICA 1",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "INSTITUTO DE FÍSICA",
        "prerequisitos" : ""
      }, {
        "codigo" : "IFD0173",
        "nome" : "FÍSICA 1 EXPERIMENTAL",
        "modalidade" : "Presencial",
        "cargahoraria" : 30,
        "unidade" : "INSTITUTO DE FÍSICA",
        "prerequisitos" : ""
      }, {
        "codigo" : "MAT0025",
        "nome" : "CÁLCULO 1",
        "modalidade" : "Presencial",
        "cargahoraria" : 90,
        "unidade" : "DEPARTAMENTO DE MATEMÁTICA",
        "prerequisitos" : ""
      }, {
        "codigo" : "MAT0031",
        "nome" : "INTRODUÇÃO A ALGEBRA LINEAR",
        "modalidade" : "Presencial",
        "cargahoraria" : 90,
        "unidade" : "DEPARTAMENTO DE MATEMÁTICA",
        "prerequisitos" : ""
      }, {
        "codigo" : "ENE0039",
        "nome" : "SISTEMAS DIGITAIS",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "COMPUTAÇÃO PARA ENGENHARIA"
      }, {
        "codigo" : "ENE0040",
        "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
        "modalidade" : "Presencial",
        "cargahoraria" : 30,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "COMPUTAÇÃO PARA ENGENHARIA"
      }, {
        "codigo" : "IDF0175",
        "nome" : "FÍSICA 2",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "INSTITUTO DE FÍSICA",
        "prerequisitos" : "FÍSICA 1, FÍSICA 1 EXPERIMENTAL"
      }, {
        "codigo" : "ENE0013",
        "nome" : "ALGORITMO E ESTRUTURA DE DADOS",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "COMPUTAÇÃO PARA ENGENHARIA"
      }, {
        "codigo" : "MAT0026",
        "nome" : "CÁLCULO 2",
        "modalidade" : "Presencial",
        "cargahoraria" : 90,
        "unidade" : "DEPARTAMENTO DE MATEMÁTICA",
        "prerequisitos" : "CÁLCULO 1"
      }, {
        "codigo" : "EST0023",
        "nome" : "PROBABILIDADE E ESTATÍSTICA",
        "modalidade" : "Presencial",
        "cargahoraria" : 90,
        "unidade" : "DEPARTAMENTO DE ESTATÍSTICA",
        "prerequisitos" : "CÁLCULO 1"
      }, {
        "codigo" : "ENE0056",
        "nome" : "SISTEMAS MICROPROCESSADOS",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "SISTEMAS DIGITAIS"
      }, {
        "codigo" : "ENE0058",
        "nome" : "LABORATÓRIO DE SISTEMAS MICROPROCESSADOS",
        "modalidade" : "Presencial",
        "cargahoraria" : 30,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "SISTEMAS DIGITAIS"
      }, {
        "codigo" : "MAT0026",
        "nome" : "CÁLCULO 3",
        "modalidade" : "Presencial",
        "cargahoraria" : 90,
        "unidade" : "DEPARTAMENTO DE MATEMÁTICA",
        "prerequisitos" : "CÁLCULO 2"
      }, {
        "codigo" : "ENE0067",
        "nome" : "SINAIS E SISTEMAS EM TEMPO CONTÍNUO",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "INTRODUÇÃO A ÁLGEBRA LINEAR"
      }, {
        "codigo" : "ENE0274",
        "nome" : "FUNDAMENTOS DE REDES",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "ALGORITMO E ESTRUTURA DE DADOS, PROBABILIDADE E ESTATÍSTICA"
      }, {
        "codigo" : "ENE0022",
        "nome" : "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "ALGORITMO E ESTRUTURA DE DADOS"
      }, {
        "codigo" : "IFD0177",
        "nome" : "FÍSICA 2 EXPERIMENTAL ",
        "modalidade" : "Presencial",
        "cargahoraria" : 30,
        "unidade" : "INSTITUTO DE FÍSICA",
        "prerequisitos" : "FÍSICA 1, FÍSICA 1 EXPERIMENTAL"
      }, {
        "codigo" : "ENE0177",
        "nome" : "ELETROMAGNETISMO 1",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "CÁLCULO 3"
      }, {
        "codigo" : "ENE0066",
        "nome" : "INTRODUÇÃO A CIRCUITOS ELÉTRICOS",
        "modalidade" : "Presencial",
        "cargahoraria" : 30,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "CÁLCULO 2"
      }, {
        "codigo" : "MAT0080",
        "nome" : "INTRODUÇÃO À TEORIA DOS GRAFOS",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE MATEMÁTICA",
        "prerequisitos" : ""
      }, {
        "codigo" : "ENE0068",
        "nome" : "SINAIS E SISTEMAS DE TEMPO DISCRETO",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "SISTEMAS E SISTEMAS EM TEMPO CONTÍNUO"
      }, {
        "codigo" : "ENE0091",
        "nome" : "SISTEMAS OPERACIONAIS DE REDES",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "SISTEMAS MICROPROCESSADOS, FUNDAMENTOS DE REDES"
      }, {
        "codigo" : "ENE0015",
        "nome" : "FUNDAMENTOS DE REDES 2",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "FUNDAMENTOS DE REDES"
      }, {
        "codigo" : "IQD0125",
        "nome" : "QUÍMICA GERAL TEÓRICA",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "INSTITUTO DE QUÍMICA",
        "prerequisitos" : ""
      }, {
        "codigo" : "ENE0304",
        "nome" : "CIRCUITOS ELÉTRICOS",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "INTRODUÇÃO A CIRCUITOS ELÉTRICOS"
      }, {
        "codigo" : "ENE0282",
        "nome" : "LABORATÓRIO DE CIRCUITOS ELÉTRICOS",
        "modalidade" : "Presencial",
        "cargahoraria" : 30,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "INTRODUÇÃO A CIRCUITOS ELÉTRICOS"
      }, {
        "codigo" : "ENE0276",
        "nome" : "METODOLOGIA E DESENVOLVIMENTO DE SOFTWARE",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "ALGORITMO E ESTRUTURA DE DADOS"
      }, {
        "codigo" : "ENE0011",
        "nome" : "LABORATÓRIO DE REDES",
        "modalidade" : "Presencial",
        "cargahoraria" : 30,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "SISTEMAS OPERACIONAIS DE REDES, FUNDAMENTOS DE REDES 2"
      }, {
        "codigo" : "ENE0025",
        "nome" : "PROTOCOLOS DE TRANSPORTE E ROTEAMENTO",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "FUNDAMENTOS DE REDES 2"
      }, {
        "codigo" : "ECL0024",
        "nome" : "CIÊNCIAS DO AMBIENTE",
        "modalidade" : "Presencial",
        "cargahoraria" : 30,
        "unidade" : "INSTITUTO DE GEOCIÊNCIAS",
        "prerequisitos" : ""
      }, {
        "codigo" : "IQD0126",
        "nome" : "QUÍMICA GERAL EXPERIMENTAL",
        "modalidade" : "Presencial",
        "cargahoraria" : 30,
        "unidade" : "INSTITUTO DE QUÍMICA",
        "prerequisitos" : ""
      }, {
        "codigo" : "ENE0045",
        "nome" : "ELETRÔNICA",
        "modalidade" : "Presencial",
        "cargahoraria" : 60,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "ELETROMAGNETISMO 1, CIRCUITOS ELÉTRICOS"
      }, {
        "codigo" : "ENE0046",
        "nome" : "LABORATÓRIO DE ELETRÔNICA",
        "modalidade" : "Presencial",
        "cargahoraria" : 30,
        "unidade" : "DEPARTAMENTO DE ENGENHARIA ELÉTRICA",
        "prerequisitos" : "ELETROMAGNETISMO"
      }, {
        "codigo" : "",
        "nome" : "MATERIAIS ELETRICOS E MAGNETICOS",
        "cargahoraria" : 90,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "CONVERSAO DE ENERGIA",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "ENE0039",
        "nome" : "SISTEMAS DE COMUNICACOES 1",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "TEORIA DA INFORMACAO",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "ANALISE DE SISTEMAS DE POTENCIA",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "INSTALACOES ELETRICAS",
        "cargahoraria" : 90,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "ARQUITETURA DE PROCESSADORES DIGITAIS",
        "cargahoraria" : 90,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "COMUNICACOES DIGITAIS",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "FUNDAMENTOS DE REDES",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "METODOLOGIA E DESENVOLVIMENTO DE SOFWARE",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "ENE0039",
        "nome" : "SISTEMAS DIGITAIS 1",
        "cargahoraria" : 90,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "ENE0040",
        "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
        "cargahoraria" : 90,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "FENOMENOS DE TRANSPORTE",
        "cargahoraria" : 75,
        "unidadeAcademica" : "ENM"
      }, {
        "codigo" : "",
        "nome" : "HIGIENE E SEGURANCA DO TRABALHO",
        "cargahoraria" : 30,
        "unidadeAcademica" : "EPR"
      }, {
        "codigo" : "",
        "nome" : "LABORATORIO CONVERSAO DE ENERGIA",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "CIRCUITOS POLIFASICOS",
        "cargahoraria" : 90,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "LABORATORIO PRINCIPIOS DE COMUNICACAO",
        "cargahoraria" : 30,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "TRABALHO CONCLUSAO DE CURSO 2",
        "cargahoraria" : 8,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "PRINCIPIOS DE COMUNICACAO",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "TRABALHO CONCLUSAO DE CURSO 1",
        "cargahoraria" : 30,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "MAQUINAS ELETRICAS",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "REDES DE COMUNICACAO DE DADOS",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "ENE0334",
        "nome" : "COMPUTACAO PARA ENGENHARIA",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "SISTEMAS DE PROGRAMACAO",
        "cargahoraria" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "PROJETO FINAL DE GRADUACAO 1",
        "cargahoraria" : 30,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "PROJETO FINAL DE GRADUACAO 2",
        "cargahoraria" : 90,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "",
        "nome" : "ORGANIZACAO INDUSTRIAL",
        "cargahoraria" : 60,
        "unidadeAcademica" : "EPR"
      }, {
        "codigo" : "",
        "nome" : "NOCOES DE DIREITO",
        "cargahoraria" : 60,
        "unidadeAcademica" : "FDD"
      } ];

    for (let disciplina of listaDisciplina) {
      this.listaDisciplina.push(new Disciplina(disciplina));
    }
  }

  pesquisar(params?: any) {
    if (!params) {
      return this.listaDisciplina;
    }

    return this.listaDisciplina.filter((disciplina) => {
      for (let key in params) {
        let field = disciplina[key].toString();
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return disciplina;
        } else if (field == params[key]) {
          return disciplina;
        }
      }
      return null;
    });
  }

}
