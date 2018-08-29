import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { OrderProvider, Order} from "../providers/order/order";
import { Observable } from "../../../node_modules/rxjs/Rx";
import { PedidoPage } from "../pedido/pedido";


@IonicPage()
@Component({
  selector: "page-cliente",
  templateUrl: "cliente.html"
})
export class ClientePage {
  public order: Observable<Order>;
  public pizza: string;
  public tam: string;
  public bebidas: string;
  public adiciones: string;
  public observaciones: string;

  // myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public orderService: OrderProvider
  ) {
    this.order = this.orderService.getOrders();
  }

  registrarPedido(event) {
    this.orderService.sendOrder({
      pizza: this.pizza,
      tam: this.tam,
      bebidas: this.bebidas,
      adiciones: this.adiciones,
      observaciones: this.observaciones
    });
    this.navCtrl.push(PedidoPage, {
      pizza: this.pizza,
      tam: this.tam,
      bebidas: this.bebidas,
      adiciones: this.adiciones,
      observaciones: this.observaciones
    });
  }
}
