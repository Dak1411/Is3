import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfilePage } from './user-profile';
import { ShrinkingSegmentHeaderComponent } from '../../components/shrinking-segment-header/shrinking-segment-header';

@NgModule({
  declarations: [
    UserProfilePage,
    ShrinkingSegmentHeaderComponent
  ],
  imports: [
    IonicPageModule.forChild(UserProfilePage),
  ],
})
export class UserProfilePageModule {}
