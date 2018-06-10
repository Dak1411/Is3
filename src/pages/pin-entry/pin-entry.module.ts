import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinEntryPage } from './pin-entry';

@NgModule({
  declarations: [
    PinEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(PinEntryPage),
  ],
})
export class PinEntryPageModule {}
