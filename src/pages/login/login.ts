import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { AuthProvider } from '../../providers/auth/auth';
import { Socket } from 'ng-socket-io';

@IonicPage()
@DisableSideMenu()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  passPin: any = '';
  showPassword: boolean = false;
  spinner: any = '';
  response: any = '';
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public generic: GenericServiceProvider,
    public auth: AuthProvider,
    public socket:Socket) {
  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  passwordToggle() {
    this.showPassword = !this.showPassword;
  }
  doLogin() {
    if (this.generic.isOnline()) {
      if (this.passPin != null && this.passPin.length == 8) {
        //  Un comment the below lines for apis calls 
      //  this.spinner = this.generic.showSpinner();
      //  let req={
      //    "auth_key":this.passPin
      //  }
      //   this.auth.doLogin(req).subscribe(data => this.successCallBack(data, 'login'),
      //                                             error => this.errorCallBack(error));
      this.navCtrl.setRoot('PrivacyPage')
      } else {
        this.passPin = '';
        this.generic.showToast('Enter your 8 digit PIN')
      }
    } else {
      this.generic.showToast('Please check your network')
    }
  }

  noKeyPage() {
    this.navCtrl.push('SecurekeyPage');
  }


  /**
   * 
   * API Call Back
   * 
   */
  successCallBack(res, caller) {
    this.spinner.dismiss();
    this.response = res;
    if (caller == 'login') {
      if (this.response.success == true) {
        this.socket.connect();
        this.generic.showToast(this.response.msg)
        localStorage.setItem('council',this.response.result[0].council_key)
        this.navCtrl.setRoot('PrivacyPage')
      } else {
        this.generic.showToast(this.response.msg)
      }
    }
  }
  errorCallBack(error) {
    this.spinner.dismiss();
    try {
      this.generic.showToast(error);
    } catch (error) {
      console.log(error)
    }
  }


  onKey(e) {
    if (e.keyCode == 13) {
        let activeElement = <HTMLElement>document.activeElement;
        activeElement && activeElement.blur && activeElement.blur();
    }
}

}
