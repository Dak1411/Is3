import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayTaskPage } from './today-task';

@NgModule({
  declarations: [
    TodayTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(TodayTaskPage),
  ],
})
export class TodayTaskPageModule {}
