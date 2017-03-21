import { Component } from '@angular/core';
import { NavController, NavParams,App,MenuController } from 'ionic-angular';

/*
  Generated class for the Toolbar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-toolbar',
  templateUrl: 'toolbar.html'
})
export class ToolbarPage {

title:string= "Estrenos";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolbarPage');
  }

}
