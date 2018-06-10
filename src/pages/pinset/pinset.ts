import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';
import { DisableSideMenu } from '../../providers/disable-side-menu';


@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-pinset',
  templateUrl: 'pinset.html',
})
export class PinsetPage {

  passcode: any = '';
  passCodeConfirm: any = '';
  passCodeEntry: any = '';
  confirmKey: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public generic: GenericServiceProvider) {
  }


  add(value) {
    if (!this.confirmKey) {
      if (this.passcode.length < 4) {
        this.passcode = this.passcode + value
        console.log(this.passcode)
      }
    } else {
      if (this.passCodeConfirm.length < 4) {
        this.passCodeConfirm += value;
        console.log(this.passCodeConfirm);
      }
    }
  }
  delete() {
    if (!this.confirmKey) {
      if (this.passcode.length > 0) {
        this.passcode = this.passcode.substring(0, this.passcode.length - 1);
        console.log(this.passcode)
      }
    } else {
      if (this.passCodeConfirm.length > 0) {
        this.passCodeConfirm = this.passCodeConfirm.substring(0, this.passCodeConfirm.length - 1);
        console.log(this.passCodeConfirm);
      }
    }
    // if (this.passcode.length > 0) {
    //   this.passcode = this.passcode.substring(0, this.passcode.length - 1);
    // }
  }
  doNavigation() {
    if (this.confirmKey) {
      if(this.passCodeConfirm.length==4){
        if (this.passCodeEntry === this.passCodeConfirm) {
          localStorage.setItem('appPin', this.passCodeConfirm)
  
          try {
            if (localStorage.getItem('dashboardNavigation') == "true")
              this.navCtrl.setRoot('PinEntryPage')
            else
              this.navCtrl.setRoot('PinRetrievalPage')
          } catch (error) {
            this.generic.showToast(error)
          }
        } else {
          this.generic.showToast('PIN miss match');
          this.passcode = '';
          this.passCodeConfirm = '';
          this.passCodeEntry = ''
          this.confirmKey = false;
        }
      }else{
        this.generic.showToast('Please re-enter your 4 digit PIN')
      }
      
    } else {
      if(this.passcode.length==4){
        this.passCodeEntry = this.passcode;
        this.passcode = '';
        console.log("Passcode:" + this.passcode)
        this.confirmKey = true;
      }else{
        this.generic.showToast('Please enter 4 digit PIN')
      }
    }

  }

}
