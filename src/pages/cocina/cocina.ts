import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoPage } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-cocina',
  templateUrl: 'cocina.html',
})
export class CocinaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  verPedido(){
    this.navCtrl.push(PedidoPage);
  }

}