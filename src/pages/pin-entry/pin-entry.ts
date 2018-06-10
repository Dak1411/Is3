import { Component } from '@angular/core';
import { IonicPage, NavController,Events } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';

@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-pin-entry',
  templateUrl: 'pin-entry.html',
})
export class PinEntryPage {
  passCode: any = '';
  spinner:any = '';  
  constructor(public navCtrl: NavController,
              public event:Events,
              public generic: GenericServiceProvider) {}


  add(value){
    this.passCode+=value;
      if(this.passCode.length==4){
        this.spinner  = this.generic.showSpinner();
          setTimeout(() => {
             this.verifyAppLock(this.passCode);
          }, 2000);
      }    
  }
  delete(){
    if(this.passCode.length>0){
      this.passCode = this.passCode.substring(0, this.passCode.length - 1);
      console.log('code'+this.passCode);
    } 
  }
  verifyAppLock(passCode){
    this.spinner.dismiss();
    let appPin = localStorage.getItem('appPin');
    if(passCode===appPin){
      this.event.publish('user-detail',JSON.parse(localStorage.getItem('userProfile')));
      this.navCtrl.setRoot('DashboardPage')
    }else{
      this.generic.showToast('Invalid PIN')
    }
    this.passCode = ''
  }
  forgotPin(){
    this.navCtrl.push('ForgotPinPage')
  }
}
