import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injector, Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Network } from "@ionic-native/network";
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HttpModule, Http } from '@angular/http';
import { Vibration } from '@ionic-native/vibration'
import { Socket } from 'ng-socket-io';

import { GenericServiceProvider } from '../providers/generic-service/generic-service';
import { NetworkCheckProvider } from '../providers/network-check/network-check';
import { AuthProvider } from '../providers/auth/auth';
import { ApiUrlsProvider } from '../providers/api-urls/api-urls'; //to call http methods
import { UserprofileProvider } from '../providers/userprofile/userprofile';
import { ChatserviceProvider } from '../providers/chatservice/chatservice';
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
    MyApp,
  //  SettingsNotificationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, 
      { 
     
         scrollAssist: false, 
         autoFocusAssist: false}
      ),
    BrowserAnimationsModule,
    SuperTabsModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //SettingsNotificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GenericServiceProvider,
    Network,
    NetworkCheckProvider,
    AuthProvider,
    ApiUrlsProvider,
    UserprofileProvider,
    ChatserviceProvider,
    Vibration,
  ]
})
export class AppModule {
  static injector: Injector;

  constructor(injector: Injector) {
    // Make the injector to be available in the entire module
    AppModule.injector = injector;
  }
}
