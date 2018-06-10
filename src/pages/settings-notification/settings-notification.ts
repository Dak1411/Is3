import { Component,OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DisableSideMenu } from '../../providers/disable-side-menu';


@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-settings-notification',
  templateUrl: 'settings-notification.html',
})
export class SettingsNotificationPage implements OnInit{
  
  appSettings:any =  '';
  appVibration:any  = 'Off';
  appPopup:any  ='No popup';
  appSound:any  = '';
  appRepeat:any = 'No Repeat';

  inAppSounds:boolean = false;
  inAppVibrations:boolean = false;
  inAppChatSounds:boolean = false;

  keepAlive:boolean = false;
  backgroundConnection:boolean  = false;
  appReset:boolean  = false;

  constructor(public navCtrl: NavController,
              public vibrations:Vibration) {
  }

  ngOnInit(): void {
   try {
      this.appSettings = JSON.parse(localStorage.getItem('appSettings'));

      this.appVibration = this.appSettings.appVibration;
      this.appPopup = this.appSettings.appPopup;
      this.appSound = this.appSettings.appSound;
      this.appRepeat =  this.appSettings.appRepeat; 

      this.inAppSounds = this.appSettings.inAppSounds
      this.inAppVibrations  = this.appSettings.inAppVibrations
      this.inAppChatSounds  = this.appSettings.inAppChatSounds

      this.keepAlive  = this.appSettings.keepAlive;
      this.backgroundConnection = this.appSettings.backgroundConnection;
   } catch (error) {
     console.log(error);
   }

  }

  selectInAppSound(){
    //console.log('Date'+ this.dp.transform(new Date(), 'dd/MM/yyyy; h:mm:a'));
    console.log(this.inAppChatSounds);
  }
  selectInAppVibrations(){
    console.log(this.inAppVibrations)
  }
  selectInAppChatSounds(){
    console.log(this.inAppChatSounds)
  }
  setVibration(ev){
    let vibrate = 0;
    switch(ev){
      case 'Off':
      vibrate = 0;
        break;
      case 'Short':
      vibrate = 1000;
        break;
      case 'Long':
      vibrate =3000;
        break
    }
    this.vibrations.vibrate(vibrate);
  }
  setPopup(){
    console.log(this.appPopup)
  }
  setSound(){
    console.log(this.appSound)
  }
  setRepeat(){
    console.log(this.appRepeat)
  }

  ionViewWillLeave(){
    this.appSettings ={
     'appVibration' :  this.appVibration,
     'appPopup': this.appPopup,
     'appSound' : this.appSound,
     'appRepeat' : this.appRepeat,
     'inAppSounds':this.inAppSounds,
     'inAppVibrations': this.inAppVibrations,
     'inAppChatSounds': this.inAppChatSounds,
     'keepAlive':this.keepAlive,
     'backgroundConnection':this.backgroundConnection
    }
  }
    ionViewDidLeave(){
      localStorage.setItem('appSettings',JSON.stringify(this.appSettings))
    }
}
