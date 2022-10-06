import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TurmaProvider } from '../../mocks/providers/turma';
import { Settings } from '../../providers';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  turmas: any[];

  constructor(public navCtrl: NavController,  public navParams: NavParams, public translate: TranslateService, turmas: TurmaProvider) {
    this.turmas = turmas.pesquisar().slice(4, 8);
  }
}
