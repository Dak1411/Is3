import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskPage } from './task';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    TaskPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskPage),
    SuperTabsModule
  ]
})
export class TaskPageModule {}
