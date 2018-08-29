import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { ConnectionProvider } from "/Users/mac/Proyectos/restaurante-sockets/src/pages/providers/connection/connection";
import { OrderProvider } from "/Users/mac/Proyectos/restaurante-sockets/src/pages/providers/order/order";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import {
  CocinaPage,
  ClientePage,
  TabsPage,
  PedidoPage
} from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CocinaPage,
    ClientePage,
    TabsPage,
    PedidoPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CocinaPage,
    ClientePage,
    TabsPage,
    PedidoPage
  ],
  providers: [
    StatusBar,
    ConnectionProvider,
    OrderProvider,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
