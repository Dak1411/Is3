import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, IonicApp, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GenericServiceProvider } from '../providers/generic-service/generic-service';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { NetworkCheckProvider } from '../providers/network-check/network-check';
import { Socket } from 'ng-socket-io';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = '';
    activePage: any = ''
    previousView: any = '';
    userName:   any =   '';
    designation:any =   ''

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public ionicApp: IonicApp,
        public generic: GenericServiceProvider,
        public menu: MenuController,
        public events: Events,
        public netWorkCheck: NetworkCheckProvider,
       ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            console.log('Again')
            
            this.backToLastState();

            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.networkCheck();
            this.netWorkCheck.initializeNetworkEvents();
            this.viewUser();
            this.platform.registerBackButtonAction(() => {
                let activePortal = this.ionicApp._loadingPortal.getActive() ||
                    this.ionicApp._modalPortal.getActive() ||
                    this.ionicApp._toastPortal.getActive() ||
                    this.ionicApp._overlayPortal.getActive();
                if (activePortal) {
                    activePortal.dismiss();
                } else {
                    if (this.nav.canGoBack()) {
                        this.nav.pop();
                    } else {
                        if (this.nav.getActive().name === 'LoginPage') {
                            this.platform.exitApp();
                        } else {
                            this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
                        }
                    }
                }

            });

            //Application paused when moved to background
            this.platform.pause.subscribe(() => {
                
                localStorage.setItem('lastView', this.nav.getActive().name)
                this.generic.showToast('lastView:'+this.nav.getActive().name);
            });
            //Launch the last view 
            // this.platform.resume.subscribe(() => {
            //     this.backToLastState();
            // });
        });
    }

    openPage(page) {
        this.activePage = page;
        this.nav.push(page);
    }
    checkActive(page: any) {
        return page === this.activePage;
    }

    openPageTab() {
        this.nav.push('SocialPage', { tabIndex: 0 })
    }
    viewProfile() {
        this.nav.push('ViewProfilePage')
    }
    networkCheck() {
        this.events.subscribe('network:online', () => {
            this.generic.showToast("Network Available");
            console.log('network connected!');
        });

        this.events.subscribe('network:offline', () => {
            
            if (this.nav.getActive().name != 'NoInternetPage')
                this.nav.push('NoInternetPage');
        });
    }

    backToLastState() {
        
        let lastState:any = localStorage.getItem('lastView');
        try {
            if (lastState == null) {
                this.nav.setRoot('LoginPage');
            }
            else if (lastState == "LoginPage" ||
                lastState == "PrivacyPage" ||
                lastState == "PinsetPage" ||
                lastState == "TutorialPage" ||
                lastState == "PinRetrievalPage" ||
                lastState == "SecurekeyPage") {
                    this.nav.setRoot(lastState);
            }
            else {
                this.nav.setRoot('PinEntryPage');
            }
        } catch (error) {
            console.log('Error in pushing the view:'+error)
        }
    }

    viewUser(){
        this.events.subscribe('user-detail',user=>{
            this.userName = user.full_name || '';
            this.designation = user.role || '';
        }) 
    }


    /*--------Alert Cal Back------*/
    onYesHandler = (caller) => {
        if (caller == "backPress") {
            this.platform.exitApp();
        }
    }
    onNoHandler = (caller) => {
        if (caller == "backPress") {

        }
    }
}
