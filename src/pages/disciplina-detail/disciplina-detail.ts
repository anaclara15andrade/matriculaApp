import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';
import { DisciplinaProvider } from '../../mocks/providers/disciplina';
import { Turma } from '../../models/types';
import { TurmaProvider } from '../../mocks/providers/turma';

@IonicPage()
@Component({
  selector: 'page-disciplina-detail',
  templateUrl: 'disciplina-detail.html'
})
export class DisciplinaDetailPage {
  disciplina: any;
  currentTurmas: any[];
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, disciplinas: DisciplinaProvider, item: Items, turma: TurmaProvider) {
    this.disciplina = navParams.get('disciplina') || disciplinas.defaultDIsciplina;
    this.currentTurmas = turma.pesquisar({disciplina: this.disciplina.codigo});
    this.item = item.defaultItem;
  }
  openTurma(turma: Turma) {
    this.navCtrl.push('TurmaDetailPage', {
      turma: turma
    });
  }

}
