webpackJsonp([6],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsNotificationPageModule", function() { return SettingsNotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_notification__ = __webpack_require__(790);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsNotificationPageModule = (function () {
    function SettingsNotificationPageModule() {
    }
    SettingsNotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings_notification__["a" /* SettingsNotificationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings_notification__["a" /* SettingsNotificationPage */]),
            ]
        })
    ], SettingsNotificationPageModule);
    return SettingsNotificationPageModule;
}());

//# sourceMappingURL=settings-notification.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DisableSideMenu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(381);
// Ionic


function DisableSideMenu() {
    return function (constructor) {
        var originalDidEnter = constructor.prototype.ionViewDidEnter;
        var originalWillLeave = constructor.prototype.ionViewWillLeave;
        constructor.prototype.ionViewDidEnter = function () {
            // Get the MenuController instance
            var menuCtrl = __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* MenuController */]);
            // Disable the side menu when entering in the page
            menuCtrl.enable(false);
            console.log('Disabling side menu...');
            // Call the ionViewDidEnter event defined in the page
            originalDidEnter && typeof originalDidEnter === 'function' && originalDidEnter.apply(this, arguments);
        };
        constructor.prototype.ionViewWillLeave = function () {
            // Get the MenuController instance
            var menuCtrl = __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* MenuController */]);
            // Enable the side menu when leaving the page
            menuCtrl.enable(true);
            console.log('Enabling side menu...');
            // Call the ionViewWillLeave event defined in the page
            originalWillLeave && typeof originalWillLeave === 'function' && originalWillLeave.apply(this, arguments);
        };
    };
}
//# sourceMappingURL=disable-side-menu.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsNotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_disable_side_menu__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsNotificationPage = (function () {
    function SettingsNotificationPage(navCtrl, vibrations) {
        this.navCtrl = navCtrl;
        this.vibrations = vibrations;
        this.appSettings = '';
        this.appVibration = 'Off';
        this.appPopup = 'No popup';
        this.appSound = '';
        this.appRepeat = 'No Repeat';
        this.inAppSounds = false;
        this.inAppVibrations = false;
        this.inAppChatSounds = false;
        this.keepAlive = false;
        this.backgroundConnection = false;
        this.appReset = false;
    }
    SettingsNotificationPage.prototype.ngOnInit = function () {
        try {
            this.appSettings = JSON.parse(localStorage.getItem('appSettings'));
            this.appVibration = this.appSettings.appVibration;
            this.appPopup = this.appSettings.appPopup;
            this.appSound = this.appSettings.appSound;
            this.appRepeat = this.appSettings.appRepeat;
            this.inAppSounds = this.appSettings.inAppSounds;
            this.inAppVibrations = this.appSettings.inAppVibrations;
            this.inAppChatSounds = this.appSettings.inAppChatSounds;
            this.keepAlive = this.appSettings.keepAlive;
            this.backgroundConnection = this.appSettings.backgroundConnection;
        }
        catch (error) {
            console.log(error);
        }
    };
    SettingsNotificationPage.prototype.selectInAppSound = function () {
        //console.log('Date'+ this.dp.transform(new Date(), 'dd/MM/yyyy; h:mm:a'));
        console.log(this.inAppChatSounds);
    };
    SettingsNotificationPage.prototype.selectInAppVibrations = function () {
        console.log(this.inAppVibrations);
    };
    SettingsNotificationPage.prototype.selectInAppChatSounds = function () {
        console.log(this.inAppChatSounds);
    };
    SettingsNotificationPage.prototype.setVibration = function (ev) {
        var vibrate = 0;
        switch (ev) {
            case 'Off':
                vibrate = 0;
                break;
            case 'Short':
                vibrate = 1000;
                break;
            case 'Long':
                vibrate = 3000;
                break;
        }
        this.vibrations.vibrate(vibrate);
    };
    SettingsNotificationPage.prototype.setPopup = function () {
        console.log(this.appPopup);
    };
    SettingsNotificationPage.prototype.setSound = function () {
        console.log(this.appSound);
    };
    SettingsNotificationPage.prototype.setRepeat = function () {
        console.log(this.appRepeat);
    };
    SettingsNotificationPage.prototype.ionViewWillLeave = function () {
        this.appSettings = {
            'appVibration': this.appVibration,
            'appPopup': this.appPopup,
            'appSound': this.appSound,
            'appRepeat': this.appRepeat,
            'inAppSounds': this.inAppSounds,
            'inAppVibrations': this.inAppVibrations,
            'inAppChatSounds': this.inAppChatSounds,
            'keepAlive': this.keepAlive,
            'backgroundConnection': this.backgroundConnection
        };
    };
    SettingsNotificationPage.prototype.ionViewDidLeave = function () {
        localStorage.setItem('appSettings', JSON.stringify(this.appSettings));
    };
    SettingsNotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings-notification',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\settings-notification\settings-notification.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="page-title">Notification and Sounds</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      message notification\n    </ion-list-header>\n    <ion-item>\n      <ion-label>Vibrate</ion-label>\n      <ion-select [(ngModel)]="appVibration" interface="action-sheet" (ionChange)="setVibration($event)">\n        <ion-option>Off</ion-option>\n        <ion-option>Short</ion-option>\n        <ion-option>Long</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Popup Notifications</ion-label>\n      <ion-select [(ngModel)]="appPopup" interface="action-sheet" (ionChange)="setPopup()">\n        <ion-option>No popup</ion-option>\n        <ion-option>Only when screen "on"</ion-option>\n        <ion-option>Only when screen "off"</ion-option>\n        <ion-option>Always show popup</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sound</ion-label>\n      <ion-select [(ngModel)]="appSound" interface="action-sheet" (ionChange)="setSound()">\n        <ion-option>No popup</ion-option>\n        <ion-option>Only when screen "on"</ion-option>\n        <ion-option>Only when screen "off"</ion-option>\n        <ion-option>Always show popup</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Repeat</ion-label>\n      <ion-select [(ngModel)]="appRepeat" interface="action-sheet" (ionChange)="setRepeat()">\n        <ion-option>1 Hr</ion-option>\n        <ion-option>5 Hr</ion-option>\n        <ion-option>5 Mint</ion-option>\n        <ion-option>No Repeat</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list-header>\n      IN-APP Notifications\n    </ion-list-header>\n    <ion-item>\n      <ion-label >IN-App Sounds</ion-label>\n      <ion-toggle [(ngModel)]="inAppSounds" (ionChange)="selectInAppSound()"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>IN-App Vibrations</ion-label>\n      <ion-toggle [(ngModel)]="inAppVibrations" (ionChange)="selectInAppVibrations()"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>IN-App Chat Sounds</ion-label>\n      <ion-toggle [(ngModel)]="inAppChatSounds" (ionChange)="selectInAppChatSounds()" ></ion-toggle>\n    </ion-item>\n\n    <ion-list-header>\n        Others\n      </ion-list-header>\n      <ion-item>\n        <ion-label >Keep Alive Service\n          <br><span class="white-space label-desc">\n            Relaunch app when shutdown by user or system. This allows app to show notifications.\n          </span>\n        </ion-label>\n        <ion-toggle [(ngModel)]="keepAlive"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n          <ion-label >Background Connection\n            <br><span class="white-space label-desc">\n              Keep a low background connection to IS3 Talk to receive realtime notifications\n            </span>\n          </ion-label>\n          <ion-toggle [(ngModel)]="backgroundConnection"></ion-toggle>\n        </ion-item>\n      <ion-item>\n        <ion-label>Reset</ion-label>\n        <ion-toggle [(ngModel)]="appReset"></ion-toggle>\n      </ion-item>\n  \n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\settings-notification\settings-notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]])
    ], SettingsNotificationPage);
    return SettingsNotificationPage;
}());

//# sourceMappingURL=settings-notification.js.map

/***/ })

});
//# sourceMappingURL=6.js.map