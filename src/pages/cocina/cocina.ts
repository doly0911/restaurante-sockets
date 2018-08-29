import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PedidoPage } from "../index.paginas";

@IonicPage()
@Component({
  selector: "page-cocina",
  templateUrl: "cocina.html"
})
export class CocinaPage {
  public pizza: string;
  public tam: string;
  public bebidas: string;
  public adiciones: string;
  public observaciones: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  verPedido() {
    this.navCtrl.push(PedidoPage);
  }

  recibirPedido() {
    this.navParams.data({
      pizza: this.pizza,
      tam: this.tam,
      bebidas: this.bebidas,
      adiciones: this.adiciones,
      observaciones: this.observaciones
    });
  }
}
