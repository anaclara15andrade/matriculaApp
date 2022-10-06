import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TurmaDetailPage } from './turma-detail';

@NgModule({
  declarations: [
    TurmaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TurmaDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    TurmaDetailPage
  ]
})
export class TurmaDetailPageModule { }
