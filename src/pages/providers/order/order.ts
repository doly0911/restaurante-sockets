import { Injectable } from "@angular/core";
import { ConnectionProvider, Connection } from "../connection/connection";

export interface Order {
  pizza: string;
  tam: string;
  bebidas: string;
  adiciones: string;
  observaciones: string;
}

@Injectable()
export class OrderProvider {
  private path = "order";
  private connection: Connection<Order>;

  constructor(private connectionService: ConnectionProvider) {
    this.connection = this.connectionService.getConnection(this.path);
  }

  getOrders() {
    return this.connection.data$;
  }

  sendOrder(order: Order) {
    this.connection.emit("add-order", order);
  }
}
