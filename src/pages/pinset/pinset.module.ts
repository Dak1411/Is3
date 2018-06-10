import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinsetPage } from './pinset';

@NgModule({
  declarations: [
    PinsetPage,
  ],
  imports: [
    IonicPageModule.forChild(PinsetPage),
  ],
})
export class PinsetPageModule {}
