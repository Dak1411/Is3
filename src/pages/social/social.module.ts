import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialPage } from './social';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    SocialPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialPage),
    SuperTabsModule
  ]
})
export class SocialPageModule {}
