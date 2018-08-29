import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PedidoPage } from "../index.paginas";
import { Observable } from "rxjs";
import { OrderProvider, Order } from "../providers/order/order";

@IonicPage()
@Component({
  selector: "page-cocina",
  templateUrl: "cocina.html"
})
export class CocinaPage {
  public order: Observable<Order>;
  public pizza: string;
  public tam: string;
  public bebidas: string;
  public adiciones: string;
  public observaciones: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public orderService: OrderProvider
  ) {
    this.order = this.orderService.getOrders();
  }

  verPedido() {
    this.navCtrl.push(PedidoPage);
  }
}
