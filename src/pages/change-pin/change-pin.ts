import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';

@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-change-pin',
  templateUrl: 'change-pin.html',
})
export class ChangePinPage {

  validCurrentKey = false;
  currentPin = '';
  validNewPin = false;
  newPin = '';
  confirmNewPin = '';

  constructor(public navCtrl: NavController,
              public generic: GenericServiceProvider) {
  }

  ionViewDidEnter() {

  }
  ngOnInit(): void {
    this.currentPin = localStorage.getItem('appPin')
  }

  checkCurrentPassword(event) {
    if (event.value === this.currentPin) {
      this.validCurrentKey = true;
    } else {
      this.validCurrentKey = false;
    }
  }

  validateNewPassword(event) {
    if (event.value === this.newPin) {
      this.validNewPin = true;
    } else {
      this.validNewPin = false;
    }
  }

  goBack(){
    localStorage.setItem('appPin',this.newPin)
    if(this.navCtrl.canGoBack()){
      this.navCtrl.pop();
    }
  }

}
