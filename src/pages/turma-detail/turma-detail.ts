import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatriculaProvider } from '../../mocks/providers/matricula';
import { Turma } from '../../models/types';

@IonicPage()
@Component({
  selector: 'page-turma-detail',
  templateUrl: 'turma-detail.html'
})
export class TurmaDetailPage {
  turma: any;
  matriculaProvider: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public matProv: MatriculaProvider) {
    this.turma = navParams.data.turma;
    this.matriculaProvider = matProv;
  }

  addMatricula(){
    let matricula = {
      "status" : "Matricula",
      "turma" : this.turma
    };
    this.matriculaProvider.add(matricula);
    this.navCtrl.popToRoot();
  }
}
