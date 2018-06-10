webpackJsonp([13],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(783);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

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

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_generic_service_generic_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_disable_side_menu__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, menu, generic, auth, socket) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.generic = generic;
        this.auth = auth;
        this.socket = socket;
        this.passPin = '';
        this.showPassword = false;
        this.spinner = '';
        this.response = '';
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.menu.swipeEnable(true);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.passwordToggle = function () {
        this.showPassword = !this.showPassword;
    };
    LoginPage.prototype.doLogin = function () {
        if (this.generic.isOnline()) {
            if (this.passPin != null && this.passPin.length == 8) {
                //  Un comment the below lines for apis calls 
                //  this.spinner = this.generic.showSpinner();
                //  let req={
                //    "auth_key":this.passPin
                //  }
                //   this.auth.doLogin(req).subscribe(data => this.successCallBack(data, 'login'),
                //                                             error => this.errorCallBack(error));
                this.navCtrl.setRoot('PrivacyPage');
            }
            else {
                this.passPin = '';
                this.generic.showToast('Enter your 8 digit PIN');
            }
        }
        else {
            this.generic.showToast('Please check your network');
        }
    };
    LoginPage.prototype.noKeyPage = function () {
        this.navCtrl.push('SecurekeyPage');
    };
    /**
     *
     * API Call Back
     *
     */
    LoginPage.prototype.successCallBack = function (res, caller) {
        this.spinner.dismiss();
        this.response = res;
        if (caller == 'login') {
            if (this.response.success == true) {
                this.socket.connect();
                this.generic.showToast(this.response.msg);
                localStorage.setItem('council', this.response.result[0].council_key);
                this.navCtrl.setRoot('PrivacyPage');
            }
            else {
                this.generic.showToast(this.response.msg);
            }
        }
    };
    LoginPage.prototype.errorCallBack = function (error) {
        this.spinner.dismiss();
        try {
            this.generic.showToast(error);
        }
        catch (error) {
            console.log(error);
        }
    };
    LoginPage.prototype.onKey = function (e) {
        if (e.keyCode == 13) {
            var activeElement = document.activeElement;
            activeElement && activeElement.blur && activeElement.blur();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\login\login.html"*/'<ion-content>\n  <div class="logo-container">\n      <img class="login-logo" src="assets/imgs/logo.png" />\n      <div class="login-message">\n        <h1 class="welcome-message">Welcome!</h1>\n        <h4 style="color: #828f96;">Enter your <b>Key</b> to Activate</h4>\n      </div>\n      <div class="password-container">\n          <!-- <div>\n            <ion-row style="background: #f6f8fa;border-radius: 64px;height: 53px;">\n              <ion-col col-12>\n                            <ion-input [type]="showPassword?\'text\':\'password\'" [(ngModel)]="passPin"  placeholder="Secure Pin" maxlength="8" style="padding-left: 20%;"></ion-input>\n                            <img class="show-password" [src]="showPassword?\'assets/imgs/show.png\':\'assets/imgs/hide.png\'" (tap)="passwordToggle()"/> \n                            <img class="passlock" src="assets/imgs/ic_passlock.png"/> \n              </ion-col>\n            </ion-row>\n          </div> -->\n          <ion-list>\n            <ion-item class="field-border">\n              <ion-avatar item-start>\n                <img class="passlock" src="assets/imgs/ic_passlock.png"/> \n            </ion-avatar>\n            <ion-input [type]="showPassword?\'text\':\'password\'" [(ngModel)]="passPin"  placeholder="Secure Key" maxlength="8" (window:keydown)="onKey($event)"></ion-input>\n            <ion-avatar item-end>\n              <img class="show-password" [src]="showPassword?\'assets/imgs/show.png\':\'assets/imgs/hide.png\'" (click)="passwordToggle()"/> \n          </ion-avatar>\n            </ion-item>\n          </ion-list>\n          <div>\n              <button ion-button round full class="login-button" (click)="doLogin()">ACTIVATE</button>\n              <p class="secure-message" (click)="noKeyPage()">Don\'t have a <b>Secure Key?</b></p>\n          </div>\n\n      </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_generic_service_generic_service__["a" /* GenericServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=13.js.map