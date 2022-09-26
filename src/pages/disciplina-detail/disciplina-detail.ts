import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DisciplinaProvider } from '../../mocks/providers/disciplina';

@IonicPage()
@Component({
  selector: 'page-disciplina-detail',
  templateUrl: 'disciplina-detail.html'
})
export class DisciplinaDetailPage {
  disciplina: any;

  constructor(public navCtrl: NavController, navParams: NavParams, disciplinas: DisciplinaProvider) {
    this.disciplina = navParams.get('disciplina') || disciplinas.defaultDIsciplina;
  }

}
