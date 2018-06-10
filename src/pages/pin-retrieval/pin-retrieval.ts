import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';

@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-pin-retrieval',
  templateUrl: 'pin-retrieval.html',
})
export class PinRetrievalPage {

  securityQuestion:any  = 'Bacon';
  securityAnswer:any  = '';
  
  constructor(public navCtrl: NavController,
              public generic: GenericServiceProvider) {
  }

  selectQuestion(){
    console.log('Selected Question:'+this.securityQuestion);
  }
  getStarted(){
    if(this.securityAnswer){
      let QAnsPair = {
        'question':this.securityQuestion,
        'answer':this.securityAnswer
      }
      localStorage.setItem('QAnsPair',JSON.stringify(QAnsPair));
      this.navCtrl.setRoot('TutorialPage');
    }else{
      this.generic.showToast('Please provide an answer')
    }
  }

}
