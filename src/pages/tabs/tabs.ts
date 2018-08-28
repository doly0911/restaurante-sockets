import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CocinaPage, ClientePage } from "../index.paginas";
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;
  tab3:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1= CocinaPage;
    this.tab2= HomePage;
    this.tab3= ClientePage;
  }

  

}
