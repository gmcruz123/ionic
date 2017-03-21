import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Restaurante} from './restaurant-model';
/*
  Generated class for the Listrest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Listrest {

restaurante:Restaurante[];

  constructor(public http: Http) {
    this.restaurante=[];
    this.restaurante.push({nombre:"carantanta",direccion:"cll1An2-31",imagen:'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg',likes:3});
    this.restaurante.push({nombre:"carantanta",direccion:"cll1An2-31",imagen:'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg',likes:3});
    this.restaurante.push({nombre:"carantanta",direccion:"cll1An2-31",imagen:'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg',likes:3});
    this.restaurante.push({nombre:"carantanta",direccion:"cll1An2-31",imagen:'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg',likes:3});



    console.log('Hello Listrest Provider');
  }

}
