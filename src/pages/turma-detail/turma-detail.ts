import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Turma } from '../../models/types';

@IonicPage()
@Component({
  selector: 'page-turma-detail',
  templateUrl: 'turma-detail.html'
})
export class TurmaDetailPage {
  turma: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.turma = navParams.data.turma;
  }

}
