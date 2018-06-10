import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { SettingsNotificationPage } from '../settings-notification/settings-notification';
@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  notificationSounds(){
    this.navCtrl.push('SettingsNotificationPage')
  }

}
