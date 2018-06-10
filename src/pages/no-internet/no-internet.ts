import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';

@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-no-internet',
  templateUrl: 'no-internet.html',
})
export class NoInternetPage {
  public unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public generic:GenericServiceProvider) {
  }
  ionViewDidLoad() {
    this.initializeBackButtonCustomHandler();
  }
  initializeBackButtonCustomHandler(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
      console.log('Prevent Back Button Page Change');
    }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  }
  ionViewWillLeave() {
    // Unregister the custom back button action for this page
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }
  retryNetworkCheck(){
    if(this.generic.isOnline()){
      if(this.navCtrl.canGoBack()){
        this.navCtrl.pop();
      }
    }
  }

}
