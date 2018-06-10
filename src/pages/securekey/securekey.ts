import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';

@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-securekey',
  templateUrl: 'securekey.html',
})
export class SecurekeyPage {
  
  constructor(public navCtrl: NavController) {
  }

  
  goBack(){
    this.navCtrl.setRoot('LoginPage');
  }
  

}
