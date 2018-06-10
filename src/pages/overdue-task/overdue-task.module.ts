import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverdueTaskPage } from './overdue-task';

@NgModule({
  declarations: [
    OverdueTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(OverdueTaskPage),
  ],
})
export class OverdueTaskPageModule {}
