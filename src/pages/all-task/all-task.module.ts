import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllTaskPage } from './all-task';

@NgModule({
  declarations: [
    AllTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(AllTaskPage),
  ],
})
export class AllTaskPageModule {}
