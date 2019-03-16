import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CorreiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correios',
  templateUrl: 'correios.html',
})
export class CorreiosPage {

  cidade:string;
  estado:string;
  logradouro:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreiosPage');
  }

  exibeInputs(){
    console.log(`Cidade: ${this.cidade}\nEstado: ${this.estado}\nLogradouro: ${this.logradouro}`);
  }

}
