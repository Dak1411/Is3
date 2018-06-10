import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';


@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-forgot-pin',
  templateUrl: 'forgot-pin.html',
})
export class ForgotPinPage implements OnInit {

  previousQAns:any  = '';
  securityQuestion:any= '';
  securityAnswer:any  = '';

  constructor(public navCtrl: NavController,
    public generic: GenericServiceProvider) {
  }

  ngOnInit(): void {
    this.previousQAns=JSON.parse(localStorage.getItem('QAnsPair'));
  }
  selectQuestion(){

  }
  validateSecurityQAns(){
    if(this.securityQuestion == this.previousQAns.question){
      if(this.securityAnswer == this.previousQAns.answer){
          this.navCtrl.setRoot('PinsetPage');
          localStorage.setItem('dashboardNavigation',"true")
      }else{
        this.generic.showToast('Security Answer Miss Match')
      }
    }else{
      this.generic.showToast('Security Question Miss Match')
    }
  }


}
