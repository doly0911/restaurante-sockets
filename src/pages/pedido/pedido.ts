import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ClientePage } from "../cliente/cliente";

/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pedido",
  templateUrl: "pedido.html"
})
export class PedidoPage {
  pizza: "";
  tam: "";
  bebidas: "";
  adiciones: "";
  observaciones: "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pizza = navParams.get("pizza");
    this.tam = navParams.get("tam");
    this.bebidas = navParams.get("bebidas");
    this.adiciones = navParams.get("adiciones");
    this.observaciones = navParams.get("observaciones");
  }

  nuevoPedido() {
    this.navCtrl.setRoot(ClientePage, {
      pizza: this.pizza,
      tam: this.tam,
      bebidas: this.bebidas,
      adiciones: this.adiciones,
      observaciones: this.observaciones
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PedidoPage");
  }
}
