import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubordinateProfilePage } from './subordinate-profile';

@NgModule({
  declarations: [
    SubordinateProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SubordinateProfilePage),
  ],
})
export class SubordinateProfilePageModule {}
