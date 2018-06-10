import { Injectable } from '@angular/core'
import { ToastController, AlertController, ActionSheetController, LoadingController, Platform } from 'ionic-angular'
import { Network } from '@ionic-native/network';
// import { Diagnostic } from '@ionic-native/diagnostic';
// import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";

declare var cordova: any;
declare var window: any;

@Injectable()
export class GenericServiceProvider {
    private toast: any;

    constructor(private toastCtrl: ToastController,
        private alertCtrl: AlertController,
        private actionCtrl: ActionSheetController,
        private loadingCtrl: LoadingController,
        private platform: Platform,
        private network:Network
        // private diagnostic: Diagnostic,
        // private fileTransfer: FileTransferObject
      ) { }

    //Toast
    showToast(message) {
        //check for the toast instance with in the timout event
        if (this.toast) { //if the toast instance is present then i dont want to create duplicate toast.
            return;
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        })
        this.toast.onDidDismiss(() => {
            this.toast = null; // To avoid the duplication of toast
        });
        this.toast.present();
    }

    //Alert
    showAlert(title, message, yesHandler, noHandler, caller) {
        let alert = this.alertCtrl.create({
            title: title || "Please Confirm",
            message: message,
            cssClass:'buttonCss',
            buttons: [
                {
                    text: 'DISAGREE',
                    role: 'cancel',
                    handler: () => noHandler(caller)
                },
                {
                    text: 'AGREE',
                    handler: () => yesHandler(caller)
                }
            ]
        });
        alert.setMode('ios');
        alert.present();
    }

    //Loader
    showSpinner() {
        let loading = this.loadingCtrl.create({
            cssClass: 'my-loading-class',
            spinner: 'crescent'
        })
        loading.present();
        return loading;
    }

    //Check for Network connection
    isOnline() {
        if (this.network.type==='none') {
            return false;
        }else {
            return true;
        }
    }



    //Add item to local storage
    addToLocal(key, value) {
        localStorage.setItem(key, value);
    }
    fetchFromLocal(key) {
        return localStorage.getItem(key);
    }
    removeFromLocal(key) {
        localStorage.removeItem(key);
    }

    /*downloadImage(fileName, ext, base64) {
        let storageDirectory: string = "";
        //Select Storage Location
        if (this.platform.is('ios')) {
            storageDirectory = cordova.file.documentsDirectory + 'PwC/';
        }
        else if (this.platform.is('android')) {
            storageDirectory = cordova.file.externalDataDirectory + 'PwC/';
        }
        else {
            return false;
        }

        //Request Access
        if (this.platform.is("android")) {
            this.diagnostic.requestRuntimePermission('READ_EXTERNAL_STORAGE').then(() => {
                console.log("Success");
            })
        }
        //Download Image
        var uri = encodeURI('data:' + "image/png" + ';base64,' + base64);
        var fileURL = storageDirectory + "Image.png".replace(/ /g, '%20');
        this.fileTransfer.download(uri, fileURL).then((success) => {
            console.log("Downloaded The Attachment" + success);
            base64 = 'data:' + "image/png" + ';base64,' + base64;
            const alertSuccess = this.alertCtrl.create({
                title: `Download Succeeded!`,
                subTitle: `Image was successfully downloaded`,
                buttons: ['Ok']
            });
            alertSuccess.present();
        }, error => {
            const alertFailure = this.alertCtrl.create({
                title: `Download Failed!`,
                subTitle: `Image was not successfully downloaded. Error code: ${error.code}`,
                buttons: ['Ok']
            });
            alertFailure.present();
        })
    }*/

    // openFile(fileName,ext){
    //     this.fileOpener.open(fileName,ext)
    //     .then((success)=>console.log("Success"),
    //           (error)=>console.log("failed"+error))
    //     .catch(e => console.log('Error openening file', e));
    // }


}