import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { Disciplina } from '../../models/disciplina';
import { DisciplinaProvider } from '../../mocks/providers/disciplina';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentDisciplinas: any = [];
  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public disciplinas: DisciplinaProvider) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }
  getDisciplinas(ev) {
    let variavel = ev.target.value;
    if (!variavel || !variavel.trim()) {
      this.currentDisciplinas = [];
      return;
    }
    this.currentDisciplinas = this.disciplinas.pesquisar({
      nome: variavel,
      codigo: variavel
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  openDisciplina(disciplina: Disciplina) {
    this.navCtrl.push('DisciplinaDetailPage', {
      disciplina: disciplina
    });
  }

}
