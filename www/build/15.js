webpackJsonp([15],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePinPageModule", function() { return ChangePinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_pin__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePinPageModule = (function () {
    function ChangePinPageModule() {
    }
    ChangePinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_pin__["a" /* ChangePinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_pin__["a" /* ChangePinPage */]),
            ],
        })
    ], ChangePinPageModule);
    return ChangePinPageModule;
}());

//# sourceMappingURL=change-pin.module.js.map

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

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePinPage; });
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




var ChangePinPage = (function () {
    function ChangePinPage(navCtrl, generic) {
        this.navCtrl = navCtrl;
        this.generic = generic;
        this.validCurrentKey = false;
        this.currentPin = '';
        this.validNewPin = false;
        this.newPin = '';
        this.confirmNewPin = '';
    }
    ChangePinPage.prototype.ionViewDidEnter = function () {
    };
    ChangePinPage.prototype.ngOnInit = function () {
        this.currentPin = localStorage.getItem('appPin');
    };
    ChangePinPage.prototype.checkCurrentPassword = function (event) {
        if (event.value === this.currentPin) {
            this.validCurrentKey = true;
        }
        else {
            this.validCurrentKey = false;
        }
    };
    ChangePinPage.prototype.validateNewPassword = function (event) {
        if (event.value === this.newPin) {
            this.validNewPin = true;
        }
        else {
            this.validNewPin = false;
        }
    };
    ChangePinPage.prototype.goBack = function () {
        localStorage.setItem('appPin', this.newPin);
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
    };
    ChangePinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-pin',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\change-pin\change-pin.html"*/'\n<ion-header>\n\n    <ion-navbar>\n      <ion-title class="header-title">change your current pin</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding #content>\n    <img src="assets/imgs/ic_tutorial_three.png" style="height:150px;width:150px">\n    <ion-card>\n      <ion-item>\n          <ion-avatar item-end class="margin-bottom-none" *ngIf="validCurrentKey">\n              <img src="assets/imgs/ic_tick.png" class="tick-button">\n            </ion-avatar>\n        <ion-label color="primary" stacked>Your Current PIN</ion-label>\n        <ion-input type="password" placeholder="PIN" (ionChange)=\'checkCurrentPassword($event)\'></ion-input>\n      </ion-item>\n      <ion-item >\n        <ion-label color="primary" stacked>Enter Your New PIN</ion-label>\n        <ion-input type="password" placeholder="PIN"  [(ngModel)]="newPin"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>RE-Enter Your New PIN</ion-label>\n        <ion-input type="password" placeholder="PIN"  (ionChange)="validateNewPassword($event)"></ion-input>\n      </ion-item>\n    </ion-card>\n    <div class="bottom-button"> \n        <button ion-button round full class="submit-button"  (click)="goBack()" >UPDATE PIN</button>\n    </div>\n  </ion-content>\n  <ion-footer no-border >\n      <ion-toolbar color="footer">\n          <button ion-button round full class="submit-button" >UPDATE PIN</button>\n      </ion-toolbar>\n  </ion-footer>\n\n  '/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\change-pin\change-pin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_generic_service_generic_service__["a" /* GenericServiceProvider */]])
    ], ChangePinPage);
    return ChangePinPage;
}());

//# sourceMappingURL=change-pin.js.map

/***/ })

});
//# sourceMappingURL=15.js.map