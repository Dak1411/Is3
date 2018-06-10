webpackJsonp([11],{

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinEntryPageModule", function() { return PinEntryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pin_entry__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PinEntryPageModule = (function () {
    function PinEntryPageModule() {
    }
    PinEntryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pin_entry__["a" /* PinEntryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pin_entry__["a" /* PinEntryPage */]),
            ],
        })
    ], PinEntryPageModule);
    return PinEntryPageModule;
}());

//# sourceMappingURL=pin-entry.module.js.map

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

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_generic_service_generic_service__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PinEntryPage = (function () {
    function PinEntryPage(navCtrl, event, generic) {
        this.navCtrl = navCtrl;
        this.event = event;
        this.generic = generic;
        this.passCode = '';
        this.spinner = '';
    }
    PinEntryPage.prototype.add = function (value) {
        var _this = this;
        this.passCode += value;
        if (this.passCode.length == 4) {
            this.spinner = this.generic.showSpinner();
            setTimeout(function () {
                _this.verifyAppLock(_this.passCode);
            }, 2000);
        }
    };
    PinEntryPage.prototype.delete = function () {
        if (this.passCode.length > 0) {
            this.passCode = this.passCode.substring(0, this.passCode.length - 1);
            console.log('code' + this.passCode);
        }
    };
    PinEntryPage.prototype.verifyAppLock = function (passCode) {
        this.spinner.dismiss();
        var appPin = localStorage.getItem('appPin');
        if (passCode === appPin) {
            this.event.publish('user-detail', JSON.parse(localStorage.getItem('userProfile')));
            this.navCtrl.setRoot('DashboardPage');
        }
        else {
            this.generic.showToast('Invalid PIN');
        }
        this.passCode = '';
    };
    PinEntryPage.prototype.forgotPin = function () {
        this.navCtrl.push('ForgotPinPage');
    };
    PinEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pin-entry',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\pin-entry\pin-entry.html"*/'<ion-content>\n  <div class="div-30">\n    <p text-center class="text-head">Enter your 4-Digit PIN to continue</p>\n    <ion-row text-center style="    padding-top: 10px;">\n        <ion-col col-1>\n        </ion-col>\n        <ion-col col-10>\n          <div class="pass-codes">\n            <input type="password" readonly="true" value="{{passCode.substring(0, 1)}}" class="pin-field">\n            <input type="password" readonly="true" value="{{passCode.substring(1, 2)}}" class="pin-field">\n            <input type="password" readonly="true" value="{{passCode.substring(2, 3)}}" class="pin-field">\n            <input type="password" readonly="true" value="{{passCode.substring(3, 4)}}" class="pin-field" style="margin:0">\n\n          </div>\n        </ion-col>\n        <ion-col col-1>\n        </ion-col>\n      </ion-row>\n  </div>\n  <div class="div-70">\n      <div style="padding-top: 30px">\n          <ion-row>\n            <ion-col col-4 text-center>\n              <button ion-button class="digit" (click)="add(1)">1</button>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <button ion-button class="digit" (click)="add(2)">2</button>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <button ion-button class="digit" (click)="add(3)">3</button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 text-center>\n              <button ion-button class="digit" (click)="add(4)">4</button>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <button ion-button class="digit" (click)="add(5)">5</button>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <button ion-button class="digit" (click)="add(6)">6</button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 text-center>\n              <button ion-button class="digit" (click)="add(7)">7</button>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <button ion-button class="digit" (click)="add(8)">8</button>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <button ion-button class="digit" (click)="add(9)">9</button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 text-center></ion-col>\n            <ion-col col-4 text-center>\n              <button ion-button class="digit" (click)="add(0)">0 </button>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <img src="assets/imgs/ic_white_backspace.png" class="back-space" (click)="delete()" />\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-center class="forgot-class">\n            <p style="margin: 0;" (click)="forgotPin()">Forgot your PIN?</p>\n        </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\pin-entry\pin-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_generic_service_generic_service__["a" /* GenericServiceProvider */]])
    ], PinEntryPage);
    return PinEntryPage;
}());

//# sourceMappingURL=pin-entry.js.map

/***/ })

});
//# sourceMappingURL=11.js.map