import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { FormBuilder,FormGroup, Validators } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {

  
 // myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              ) {
  }

  registrarPedido(){

    //este enviara la info a pedidos page

  }

}

