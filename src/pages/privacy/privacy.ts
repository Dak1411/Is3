import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App ,MenuController} from 'ionic-angular';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';
import { DisableSideMenu } from '../../providers/disable-side-menu';


@IonicPage()
@DisableSideMenu()
@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html',
})
export class PrivacyPage {
  termsAccepted:boolean=false;
  constructor(
      public app: App,
      public navCtrl: NavController, 
      public navParams: NavParams,
      public menuCtrl:MenuController,
      public generic:GenericServiceProvider) {
  }

  // ionViewDidEnter(){
  //   this.menuCtrl.swipeEnable(false);
  // }
  // ionViewDidLeave() {
  //   this.menuCtrl.swipeEnable(true);
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacyPage');
  }
  viewPopUp(){
    let title="IS3 Security Check";
    let message="I have read and understood all the terms and conditions and security measures associated with IS3 Talk. I wish to continue using the application."
    this.generic.showAlert(title,message,this.onYesHandler,this.onNoHandler,'')
  }




  /**
   * 
   * Alert API Call back
   * 
   */
  onYesHandler = (caller) => {
        this.app.getRootNav().setRoot('PinsetPage');
}
  onNoHandler = (caller) => {
      //this.app.getRootNav().setRoot('LoginPage')
  }
}
