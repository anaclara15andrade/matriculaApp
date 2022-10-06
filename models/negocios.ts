export type Professor={
    nome:string;
  
    // constructor(nome:string){
    //     this.nome = nome;
    // }
  }
  
  export type PeriodoLetivo={
    ano:number;
    numero:number;
    
    // constructor(ano:number, numero:number){
    //     this.ano = ano;
    //     this.numero = numero;
    // }
  }
  
  export type Localidade={
    local:string;
  
    // constructor(local:string){
    //     this.local = local;
    // }
  }
  
  export type HorarioSemanal={
    dia:string;
    horarioInicio:string;
    horarioFim:string;
    local:Localidade;
  
    // constructor(dia:string, horarioInicio:string, horarioFim:string, local:Localidade){
    //     this.dia = dia;
    //     this.horarioInicio = horarioInicio;
    //     this.horarioFim = horarioFim;
    //     this.local = local;
    // }
  }
  
  export type Coordenador={
    matricula:string;
    nome:string;
    email:string;
  
    // constructor(matricula:string, nome:string, email:string){
    //     this.matricula = matricula;
    //     this.nome = nome;
    //     this.email = email;
    // }
  }
  
  export type Unidade={
    codigo:string;
    nome:string;
  
    // constructor(codigo:string, nome:string){
    //     this.codigo = codigo;
    //     this.nome = nome;
    // }
  }
  
  export type PrazoConclusao={
    minimo:number;
    medio:number;
    maximo:number;
    
    // constructor(minimo:number, medio:number, maximo:number){
    //     this.minimo = minimo;
    //     this.medio = medio;
    //     this.maximo = maximo;
    // }
  }
  
  export type CargaHoraria={
    totalMinima:number;
    totalObrigatoria:number;
    OptativaMinima:number;
    eletivaMaxima:number;
    maximaPorPeriodo:number;
    total:number;
    teorica:number;
    pratica:number;
  
    // constructor(totalMinima:number, totalObrigatoria:number, OptativaMinima:number, eletivaMaxima:number, maximaPorPeriodo:number, total:number, teorica:number, pratica:number){
    //     this.totalMinima = totalMinima;
    //     this.totalObrigatoria = totalObrigatoria;
    //     this.OptativaMinima = OptativaMinima;
    //     this.eletivaMaxima = eletivaMaxima;
    //     this.maximaPorPeriodo = maximaPorPeriodo;
    //     this.total = total;
    //     this.teorica = teorica;
    //     this.pratica = pratica;
    // }
  }
  
  export type Aluno={
    matricula:string;
    nome:string;
    email:string;
    ira:number;
    curriculo:string;
    status:boolean;
    periodoletivo:PeriodoLetivo;
    curso:Curso;
  
    // constructor(matricula:string, nome:string, email:string, ira:number, curriculo:string, status:boolean, periodoletivo:PeriodoLetivo, curso:Curso){
    //     this.matricula = matricula;
    //     this.nome = nome;
    //     this.email = email;
    //     this.ira = ira;
    //     this.curriculo = curriculo;
    //     this.status = status;
    //     this.periodoletivo = periodoletivo;
    //     this.curso = curso;
    // }
  }
  
  export type Matricula={
    status:string;
    prioridade:number;
    motivoIndeferimento:string;
    aluno:Aluno;
    turma:Turma;
  
    // constructor(status:string, prioridade:number, motivoIndeferimento:string, aluno:Aluno, turma:Turma){
    //     this.status = status;
    //     this.prioridade = prioridade;
    //     this.motivoIndeferimento = motivoIndeferimento;
    //     this.aluno = aluno;
    //     this.turma = turma;
    // }
  }
  
  export type Turma={
    codigo:string;
    vagasocupadas:number;
    vagasofertadas:number;
    sede:string;
    professor:Professor;
    horariosemanal:HorarioSemanal;
    periodoletivo:PeriodoLetivo;
  
    // constructor(codigo:string, vagasocupadas:number, vagasofertadas:number, sede:string, professor:Professor, horariosemanal:HorarioSemanal, periodoletivo:PeriodoLetivo){
    //     this.codigo = codigo;
    //     this.vagasocupadas = vagasocupadas;
    //     this.vagasofertadas = vagasofertadas;
    //     this.sede = sede;
    //     this.professor = professor;
    //     this.horariosemanal = horariosemanal;
    //     this.periodoletivo = periodoletivo;
    // }
  }
  
  export type EstruturaCurricular={
    codigo:string;
    status:string;
    periodoLetivoEntradaVigor:PeriodoLetivo;
    cargaHoraria:CargaHoraria;
    prazoConclusao:PrazoConclusao;
    disciplinas:DisciplinaEstruturaCurricular;
  
    // constructor(codigo:string, status:string, periodoLetivoEntradaVigor:PeriodoLetivo, cargaHoraria:CargaHoraria, prazoConclusao:PrazoConclusao, disciplinas:DisciplinaEstruturaCurricular){
    //     this.codigo = codigo;
    //     this.status = status;
    //     this.periodoLetivoEntradaVigor = periodoLetivoEntradaVigor;
    //     this.cargaHoraria = cargaHoraria;
    //     this.prazoConclusao = prazoConclusao;
    //     this.disciplinas = disciplinas;
    // }
  }
  
  export type Disciplina={
    codigo:string;
    nome:string;
    modalidade:string;
    cargaHoraria:CargaHoraria;
    unidade:Unidade;
    preRequisitos:Disciplina;
  
    // constructor(codigo:string, nome:string, modalidade:string, cargaHoraria:CargaHoraria, unidade:Unidade, preRequisitos:Disciplina){
    //     this.codigo = codigo;
    //     this.nome = nome;
    //     this.modalidade = modalidade;
    //     this.cargaHoraria = cargaHoraria;
    //     this.unidade = unidade;
    //     this.preRequisitos = preRequisitos;
    // }
  }
  
  export type DisciplinaEstruturaCurricular={
    tipo:string;
    nivel:number;
    disciplina:Disciplina;
  
    // constructor(tipo:string, nivel:number, disciplina:Disciplina){
    //     this.tipo = tipo;
    //     this.nivel = nivel;
    //     this.disciplina = disciplina;
    // }
  }
  
  export type Curso={
    codigo:string;
    nome:string;
    grau:string;
    modalidade:string;
    turno:string;
    coordenador:Coordenador;
    unidade:Unidade;
    estrutura:EstruturaCurricular;
  
    // constructor(codigo:string, nome:string, grau:string, modalidade:string, turno:string, coordenador:Coordenador, unidade:Unidade, estrutura:EstruturaCurricular){
    //     this.codigo = codigo;
    //     this.nome = nome;
    //     this.grau = grau;
    //     this.modalidade = modalidade;
    //     this.coordenador = coordenador;
    //     this.unidade = unidade;
    //     this.estrutura = estrutura;
    // }
  }
  
  export type DisciplinaHistoricoAcademico={
    status:string;
    mencao:string;
    periodo:PeriodoLetivo;
    disciplina:Disciplina;
  
    // constructor(status:string, mencao:string, periodo:PeriodoLetivo, disciplina:Disciplina){
    //     this.status = status;
    //     this.mencao = mencao;
    //     this.periodo = periodo;
    //     this.disciplina = disciplina;
    // }
  }
  
  export type HistoricoAcademico={
    aluno:Aluno;
    disciplinas:DisciplinaHistoricoAcademico;
  
    // constructor(aluno:Aluno, disciplinas:DisciplinaHistoricoAcademico){
    //     this.aluno = aluno;
    //     this.disciplinas = disciplinas;
    // }
  }
  
  // export interface Aluno {
  //   [prop: string]: any;
  // }
  