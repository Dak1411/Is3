import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { SocketIoConfig, SocketIoModule } from 'ng-socket-io';
const config: SocketIoConfig = {
  url: 'http://test.is3talk.com', options: {
    transportOptions: {
      polling: {
        extraHeaders: {
          'x-access-token': localStorage.getItem('token'),
        }
      }
    }
  }
};
@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    
    IonicPageModule.forChild(DashboardPage),
    SocketIoModule.forRoot(config),
  ],
})
export class DashboardPageModule { }
