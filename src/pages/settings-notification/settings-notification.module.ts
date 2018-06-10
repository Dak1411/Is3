import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsNotificationPage } from './settings-notification';


@NgModule({
  declarations: [
    SettingsNotificationPage
  ],
  imports: [ 
    IonicPageModule.forChild(SettingsNotificationPage),
    
  ]
})
export class SettingsNotificationPageModule {}
