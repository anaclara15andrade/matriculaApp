import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { AlunoProvider } from '../../mocks/providers/aluno';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  aluno: any;
  item: Item;

  constructor(public navCtrl: NavController, public alunos: AlunoProvider, item: Items) {
    this.aluno = alunos.search()[2];
    this.item = item.defaultItem;
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  // addItem() {
  //   let addModal = this.modalCtrl.create('ItemCreatePage');
  //   addModal.onDidDismiss(item => {
  //     if (item) {
  //       this.items.add(item);
  //     }
  //   })
  //   addModal.present();
  // }

  /**
   * Delete an item from the list of items.
   */
  // deleteItem(item) {
  //   this.items.delete(item);
  // }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
