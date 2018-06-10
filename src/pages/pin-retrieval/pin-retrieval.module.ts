import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinRetrievalPage } from './pin-retrieval';

@NgModule({
  declarations: [
    PinRetrievalPage,
  ],
  imports: [
    IonicPageModule.forChild(PinRetrievalPage),
  ],
})
export class PinRetrievalPageModule {}
