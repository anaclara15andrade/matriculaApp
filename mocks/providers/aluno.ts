import { Injectable } from '@angular/core';

import { Aluno } from '../../models/aluno';

@Injectable()
export class AlunoProvider {

  listaAluno: Aluno[] = [];
  

  defaultAluno: any = {
    codigo : 190089571,
    nome : "JOAO BASTOS",
    email : "JOAOBASTOS@GMAIL.COM",
    ira : "2.5",
    curriculo : "2019.1",
    status : true,
    periodoletivo : {ano : 2019, numero : 2}, 
    curso : {
      codigo : " 136", 
      nome : "Engenharia de redes e comunicações",
      grau : "graduação",
      modalidade : "presencial",
      turno : "diurno",
      coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
      unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
      curriculos : [],
    }
}


  constructor() {
    let listaAluno = [ {
      matricula : "180123456",
      nome : "DANIEL AKIRA ANDO",
      email : "DANIELAKIRA@GMAIL.COM",
      ira : "3.5",
      curriculo : "2018.1",
      status : true,
      periodoletivo : {ano : 2018, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
    }, {
      "matricula" : "16/67011",
      "nome" : "VICTOR HUGO DE SOUSA",
      "email" : "VICTORHUGO@GMAIL.COM",
      "ira" : 5.0,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2016, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
    }, {
      "matricula" : "16/39637",
      "nome" : "RAYAN JHONNYE ALVES ALEXANDRINO",
      "email" : "RAYAJHONNYE@GMAIL.COM",
      "ira" : 5.0,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2016, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
    }, {
      "matricula" : "16/31644",
      "nome" : "JADE MARTINS ARANTES",
      "email" : "JADEMARTINS@GMAIL.COM",
      "ira" : 1.6,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2016, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "16/23561",
      "nome" : "ALINE DOS SANTOS PEREIRA",
      "email" : "ALINESANTOS@GMAIL.COM",
      "ira" : 0.9,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2016, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/48490",
      "nome" : "VINICIUS ALVES DE OLIVEIRA",
      "email" : "VINICIUSALVES@GMAIL.COM",
      "ira" : 2.5,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/25481",
      "nome" : "MAIRA LEITE CONCEICAO",
      "email" : "MARIALEITE@GMAIL.COM",
      "ira" : 3.0,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/131492",
      "nome" : "VICTOR NUNES GOMES",
      "email" : "VICTORNUNES@GMAIL.COM",
      "ira" : 3.8,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/127053",
      "nome" : "VITOR DE AGUIAR CARAZZA",
      "email" : "VITORAGUIAR@GMAIL.COM",
      "ira" : 3.4,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/124941",
      "nome" : "THAMARA GUIMARAES SILVA",
      "email" : "THAMARAGUIMARAES@GMAIL.COM",
      "ira" : 1.2,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/122761",
      "nome" : "ROGERIO OSENO PONTES",
      "email" : "ROGERIOOSENO@GMAIL.COM",
      "ira" : 3.0,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/122256",
      "nome" : "ROBERTO DUARTE JUNIOR",
      "email" : "ROBERTODUARTE@GMAIL.COM",
      "ira" : 3.0,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/121535",
      "nome" : "REBECCA CAROLINNE FREITAS ALVES",
      "email" : "REBECCACAROLINNE@GMAIL.COM",
      "ira" : 2.9,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/119433",
      "nome" : "PEDRO PAULO MARTINS DOS SANTOS",
      "email" : "PEDROPAULO@GMAIL.COM",
      "ira" : 4.7,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/119310",
      "nome" : "PEDRO ISSA HELOU",
      "email" : "PEDROISSA@GMAIL.COM",
      "ira" : 4.8,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/115730",
      "nome" : "MATEUS MARCUZZO DA ROSA",
      "email" : "MATEUSMARCUZZO@GMAIL.COM",
      "ira" : 5.0,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/111521",
      "nome" : "LUANA DAHER LOPES",
      "email" : "LUANADAHER@GMAIL.COM",
      "ira" : 3.8,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/110177",
      "nome" : "LARYSSA DAYSE VILAR E SILVA",
      "email" : "LARYSSADAYSE@GMAIL.COM",
      "ira" : 2.4,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/96077",
      "nome" : "CARLOS EDUARDO DE MORAIS LEAL",
      "email" : "CARLOSEDUARDO@GMAIL.COM",
      "ira" : 2.7,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/51821",
      "nome" : "IVAN GUILHERME PAGANI FERNANDES",
      "email" : "IVANGUILHERME@GMAIL.COM",
      "ira" : 3.0,
      "curriculo" : "",
      "status" : false,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/50905",
      "nome" : "ARTHUR PACHECO DOS SANTOS",
      "email" : "ARTHURPACHECO@GMAIL.COM",
      "ira" : 3.1,
      "curriculo" : "",
      "status" : false,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      

    }, {
      "matricula" : "15/48650",
      "nome" : "BRUNO SALDANHA CARMINATI",
      "email" : "BRUNOSALDANHA@GMAIL.COM",
      "ira" : 1.0,
      "curriculo" : "",
      "status" : false,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/41663",
      "nome" : "VITOR CARDOSO BORGES LEAL",
      "email" : "VITORCARDOSO@GMAIL.COM",
      "ira" : 3.7,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/31111",
      "nome" : "IGOR VIRGILIO AQUINO MARTINS DE A",
      "email" : "IGORVIRGILIO@GMAIL.COM",
      "ira" : 3.3,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/30815",
      "nome" : "HUDSON DE MORAES FILHO",
      "email" : "HUDSONMORAES@GMAIL.COM",
      "ira" : 2.2,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/28268",
      "nome" : "EDUARDO COSTA DE CARVALHO LOUREIRO",
      "email" : "EDUARDOCOSTA@GMAIL.COM",
      "ira" : 4.4,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/22162",
      "nome" : "YAN MACHADO FERNANDES DE SOUSA",
      "email" : "YANMACHADO@GMAIL.COM",
      "ira" : 4.5,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/21999",
      "nome" : "WALISSON FRANCISCO DE ALBUQUERQUE",
      "email" : "WALISSONFRANCISCO@GMAIL.COM",
      "ira" : 4.4,
      "curriculo" : "",
      "status" : false,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/21948",
      "nome" : "VIVIAN VARELA",
      "email" : "VIVIANVARELA@GMAIL.COM",
      "ira" : 1.7,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/17487",
      "nome" : "MARINA MAIA HEREJK",
      "email" : "MARINAMAIA@GMAIL.COM",
      "ira" : 3.8,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/16138",
      "nome" : "LUDIMILA DE OLIVEIRA FELIX",
      "email" : "LUDIMILAOLIVEIRA@GMAIL.COM",
      "ira" : 2.9,
      "curriculo" : "",
      "status" : false,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/15298",
      "nome" : "LEONARDO LACERDA DE OLIVEIRA",
      "email" : "LEONARDOLACERDA@GMAIL.COM",
      "ira" : 2.6,
      "curriculo" : "",
      "status" : false,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/10156",
      "nome" : "EDUARDO RAFAEL ALVES VARGAS",
      "email" : "EDUARDORAFAEL@GMAIL.COM",
      "ira" : 0.1,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/9492",
      "nome" : "DANIEL MENESES CURY",
      "email" : "DANIELMENESES@GMAIL.COM",
      "ira" : 0.2,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "15/8712",
      "nome" : "CARLOS ALEXANDRE GRIEBLER",
      "email" : "CARLOSALEXANDRE@GMAIL.COM",
      "ira" : 0.3,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2015, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/93654",
      "nome" : "ERICK SILVA DE MORAES",
      "email" : "ERICKSILVA@GMAIL.COM",
      "ira" : 1.5,
      "curriculo" : "",
      "status" : false,
      periodoletivo : {ano : 2014, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/93600",
      "nome" : "LAURO MARTINS",
      "email" : "LAUROMARTINS@GMAIL.COM",
      "ira" : 1.6,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/47288",
      "nome" : "PABLO PIORNO BALTORE",
      "email" : "PABLOPIORNO@GMAIL.COM",
      "ira" : 1.7,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/44891",
      "nome" : "LEANDRO CLAUDINO",
      "email" : "LEANDROCLAUDINO@GMAIL.COM",
      "ira" : 3.5,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/42511",
      "nome" : "FELIPE REGIS GONCALVES CABRAL",
      "email" : "FELIPEREGIS@GMAIL.COM",
      "ira" : 3.4,
      "curriculo" : "",
      "status" : false,
      periodoletivo : {ano : 2014, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/10619",
      "nome" : "ISRAEL PEREIRA DE ALMEIDA",
      "email" : "ISRAELPEREIRA@GMAIL.COM",
      "ira" : 2.3,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/9327",
      "nome" : "RENAN BITTENCOURT COELHO SCORZA GONCALVES",
      "email" : "RENANBITTENCOURT@GMAIL.COM",
      "ira" : 2.1,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós graduação",
        modalidade : "presencial",
        turno : "diurno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/134290",
      "nome" : "TITO FONTES VIEIRA CIDADE",
      "email" : "TITOFONTES@GMAIL.COM",
      "ira" : 3.5,
      "curriculo" : "",
      "status" : false,
      periodoletivo : {ano : 2014, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "mestrado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/133579",
      "nome" : "THAYANE RODRIGUES VIANA",
      "email" : "THAYANERODRIGUES@GMAIL.COM",
      "ira" : 1.6,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "mestrado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/129679",
      "nome" : "RAFAELA GALVAO TEIXEIRA",
      "email" : "RAFAELAGALVAO@GMAIL.COM",
      "ira" : 1.1,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "mestrado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/126521",
      "nome" : "MOACIR BALESTRINI FILHO",
      "email" : "MOACIRBALESTRINI@GMAIL.COM",
      "ira" : 4.5,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "mestrado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/115244",
      "nome" : "GREGORY LUIZ RIBEIRO CORREA",
      "email" : "GREGORYLUIZ@GMAIL.COM",
      "ira" : 5.0,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "mestrado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/113101",
      "nome" : "FELIPE SILVA DOS SANTOS",
      "email" : "FELIPESILVA@GMAIL.COM",
      "ira" : 5.0,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "doutorado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/43723",
      "nome" : "MATHEUS FONTENELE DOS SANTOS BESSA",
      "email" : "MATHEUSFONTENELE@GMAIL.COM",
      "ira" : 4.6,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "doutorado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/37995",
      "nome" : "HUGO LEITE FLORENCO MAIA",
      "email" : "HUGOLEITE@GMAIL.COM",
      "ira" : 4.1,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "doutorado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/20405",
      "nome" : "RACHMYNE SABANA DIABATE",
      "email" : "RACHMYNESABANA@GMAIL.COM",
      "ira" : 3.0,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 2}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "doutorado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/14456",
      "nome" : "THIAGO COSTA NASCIMENTO",
      "email" : "THIAGOCOSTA@GMAIL.COM",
      "ira" : 3.0,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós doutorado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    }, {
      "matricula" : "14/12348",
      "nome" : "PETRONIO HENRIQUE MOREIRA CRUZ",
      "email" : "PETRONIOHENRIQUE@GMAIL.COM",
      "ira" : 1.8,
      "curriculo" : "",
      "status" : true,
      periodoletivo : {ano : 2014, numero : 1}, 
      curso : {
        codigo : " 136",
        nome : "Engenharia de redes e comunicações",
        grau : "pós doutorado",
        modalidade : "presencial",
        turno : "noturno",
        coordenador: {email : "danielgs@ene.unb.br", matricula : "", nome : "Daniel Guerreiro e Silva"},
        unidades : [{codigo : "FT", nome : "Faculdade de tecnologia"}, {codigo : "ENE", nome : "Departamento de Engenharia Elétrica"}],
        curriculos : [],
      }
      
    } ];

    for (let aluno of listaAluno) {
      this.listaAluno.push(new Aluno(aluno));
    }
  }

  set(aluno: Aluno) {
    this.aluno = aluno;
  }

  get() {
    return this.aluno;
  }

  detail(matricula: string) {
    var aluno = undefined;
    for(var i = 0; i < this.listaAluno.length; i++) {
      if(matricula == this.listaAluno[i].matricula) {
        aluno = this.listaAluno[i];
        aluno.profilePic = "assets/img/speakers/bear.jpg";
        break;
      }
    }
/*
    var aluno: Aluno = {
      "matricula" : "180123456",
      "nome" : "PETRONIO HENRIQUE MOREIRA CRUZ",
      "periodoIngresso" : {
        "ano" : "2018",
        "numero" : "1"
      },
      "curso" : {
        "codigo" : 2,
        "nome" : "ENGENHARIA DE REDES DE COMUNICACAO"
      },
      "profilePic": "assets/img/speakers/bear.jpg"
    };
*/    
    return aluno;
  }

  search(params?: any) {
    if (!params) {
      return this.listaAluno;
    }

    return this.listaAluno.filter((aluno) => {
      for (let key in params) {
        let field = aluno[key];
        // if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
        //   aluno.profilePic = "assets/img/speakers/bear.jpg";
        //   return aluno;
        // } else if (field == params[key]) {
        //   aluno.profilePic = "assets/img/speakers/bear.jpg";
        //   return aluno;
        // }
      }
      return null;
    });
  }

}
