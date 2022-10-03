import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TurmaProvider } from '../../mocks/providers/turma';
import { Disciplina } from '../../models/disciplina';
import { Turma } from '../../models/turma';
import { Matricula } from '../../models/matricula';
import { TranslateService } from '@ngx-translate/core';
import { MatriculaProvider } from '../../mocks/providers/matricula';


export interface AlertMetadata {
  title: string;
  description: string;
  descriptionDetail: string;
  inputName: string;
  okButton: string;
  cancelButton: string;
}

@IonicPage()
@Component({
  selector: 'page-turma-list',
  templateUrl: 'turma-list.html',
})
export class TurmaListPage {
  alertaConfirmarTurma: AlertMetadata;
  disciplina: Disciplina;
  currentTurmas: Turma[];
  currentMatriculaConfirmada;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public turmaProvider: TurmaProvider,
    public matriculaProvider: MatriculaProvider,
    translate: TranslateService,
    private alertCtrl: AlertController,
    ) {
    this.disciplina = navParams.get('disciplina');
    console.log(this.disciplina);
    this.currentTurmas = this.turmaProvider.pesquisar({
      disciplina: this.disciplina.codigo
    });
    console.log(this.currentTurmas);

    translate.get(["ADICIONAR_TURMA_TITLE",
    "ADICIONAR_TURMA_DESCRIPTION",
    "ADICIONAR_TURMA_INPUTNAME",
    "CANCEL_BUTTON",
    "CONFIRM_BUTTON"
  ]).subscribe(
    (values) => {
      this.alertaConfirmarTurma = {
        title: values.ADICIONAR_TURMA_TITLE,
        description: values.ADICIONAR_TURMA_DESCRIPTION,
        descriptionDetail: '',
        inputName: values.ADICIONAR_TURMA_INPUTNAME,
        okButton: values.CONFIRM_BUTTON,
        cancelButton: values.CANCEL_BUTTON
      };
    });
    //this.currentMatriculaConfirmada = this.matriculaProvider.getMatriculaConfimada();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurmaListPage');
  }

  confirmarPedidoMatricula(turma: Turma) {
    let prompt = this.alertCtrl.create({
      title: this.alertaConfirmarTurma.title,
      message: this.alertaConfirmarTurma.description,
      inputs: [
        {
          name: 'prioridade',
          placeholder: this.alertaConfirmarTurma.inputName
        },
      ],
      buttons: [
        {
          text: this.alertaConfirmarTurma.cancelButton,
        },
        {
          text: this.alertaConfirmarTurma.okButton,
          handler: data => {
            this.inserirMatricula(turma,parseInt(data.prioridade));
          }
        }
      ]
    });
    prompt.present();
  }

  inserirMatricula(turma:Turma,prioridade?:number) {
    var matricula: Matricula = {
      turma : turma
    };

    if(typeof prioridade !== 'undefined') {
      matricula.prioridade = prioridade;
    }
    this.matriculaProvider.add(matricula);
    this.navCtrl.push('ListMasterPage');
    
  }
}
