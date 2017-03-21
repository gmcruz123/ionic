import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {CardsTemplatePage} from '../pages/cards-template/cards-template';
import {Restaurante} from '../providers/restaurant-model';
import {Listrest} from '../providers/index'; /*servicio restaurantes*/
import {RestListCardsPage} from '../pages/rest-list-cards/rest-list-cards'



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RestListCardsPage,
    CardsTemplatePage,
    Restaurante

    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,

    CardsTemplatePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Listrest]
})
export class AppModule {}
