webpackJsonp([9],{

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinsetPageModule", function() { return PinsetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pinset__ = __webpack_require__(791);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PinsetPageModule = (function () {
    function PinsetPageModule() {
    }
    PinsetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pinset__["a" /* PinsetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pinset__["a" /* PinsetPage */]),
            ],
        })
    ], PinsetPageModule);
    return PinsetPageModule;
}());

//# sourceMappingURL=pinset.module.js.map

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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinsetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_generic_service_generic_service__ = __webpack_require__(165);
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




var PinsetPage = (function () {
    function PinsetPage(navCtrl, navParams, generic) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.generic = generic;
        this.passcode = '';
        this.passCodeConfirm = '';
        this.passCodeEntry = '';
        this.confirmKey = false;
    }
    PinsetPage.prototype.add = function (value) {
        if (!this.confirmKey) {
            if (this.passcode.length < 4) {
                this.passcode = this.passcode + value;
                console.log(this.passcode);
            }
        }
        else {
            if (this.passCodeConfirm.length < 4) {
                this.passCodeConfirm += value;
                console.log(this.passCodeConfirm);
            }
        }
    };
    PinsetPage.prototype.delete = function () {
        if (!this.confirmKey) {
            if (this.passcode.length > 0) {
                this.passcode = this.passcode.substring(0, this.passcode.length - 1);
                console.log(this.passcode);
            }
        }
        else {
            if (this.passCodeConfirm.length > 0) {
                this.passCodeConfirm = this.passCodeConfirm.substring(0, this.passCodeConfirm.length - 1);
                console.log(this.passCodeConfirm);
            }
        }
        // if (this.passcode.length > 0) {
        //   this.passcode = this.passcode.substring(0, this.passcode.length - 1);
        // }
    };
    PinsetPage.prototype.doNavigation = function () {
        if (this.confirmKey) {
            if (this.passCodeConfirm.length == 4) {
                if (this.passCodeEntry === this.passCodeConfirm) {
                    localStorage.setItem('appPin', this.passCodeConfirm);
                    try {
                        if (localStorage.getItem('dashboardNavigation') == "true")
                            this.navCtrl.setRoot('PinEntryPage');
                        else
                            this.navCtrl.setRoot('PinRetrievalPage');
                    }
                    catch (error) {
                        this.generic.showToast(error);
                    }
                }
                else {
                    this.generic.showToast('PIN miss match');
                    this.passcode = '';
                    this.passCodeConfirm = '';
                    this.passCodeEntry = '';
                    this.confirmKey = false;
                }
            }
            else {
                this.generic.showToast('Please re-enter your 4 digit PIN');
            }
        }
        else {
            if (this.passcode.length == 4) {
                this.passCodeEntry = this.passcode;
                this.passcode = '';
                console.log("Passcode:" + this.passcode);
                this.confirmKey = true;
            }
            else {
                this.generic.showToast('Please enter 4 digit PIN');
            }
        }
    };
    PinsetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pinset',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\pinset\pinset.html"*/'<ion-content padding>\n  <div text-center class="margin-top-10" *ngIf="!confirmKey">\n      <h3 class="pin-head">SET UP YOUR PIN</h3>\n      <span class="pin-subhead">Create a Secure 4-Digit PIN to unlock IS3 </span>\n  </div>\n  <div text-center class="margin-top-10" *ngIf="confirmKey">\n    <h3 class="pin-head">CONFIRM YOUR PIN</h3>\n    <span class="pin-subhead">Re-enter your Secure 4-Digit PIN </span>\n</div>\n\n  <div>\n    <ion-row text-center style="margin-top: 30px;height: 50px; padding-top: 10px;">\n      <!-- <ion-col col-3>\n          <h1 *ngIf="passcode.substring(0, 1).length>\'0\'">o</h1>\n        </ion-col>\n        <ion-col col-3>\n            <h1 *ngIf="passcode.substring(1, 2).length>\'0\'">o</h1>\n        </ion-col>\n        <ion-col col-3>\n            <h1 *ngIf="passcode.substring(2, 3).length>\'0\'">o</h1>\n        </ion-col>\n        <ion-col col-3>\n            <h1 *ngIf="passcode.substring(3, 4).length>\'0\'">o</h1>\n        </ion-col> -->\n      <ion-col col-1>\n      </ion-col>\n      <ion-col col-10>\n        <div class="pass-codes">\n            <input type="password" readonly="true" [value]="!confirmKey?passcode.substring(0, 1):passCodeConfirm.substring(0, 1)" class="pin-field">\n            <input type="password" readonly="true" [value]="!confirmKey?passcode.substring(1, 2):passCodeConfirm.substring(1, 2)" class="pin-field">\n            <input type="password" readonly="true" [value]="!confirmKey?passcode.substring(2, 3):passCodeConfirm.substring(2, 3)" class="pin-field">\n            <input type="password" readonly="true" [value]="!confirmKey?passcode.substring(3, 4):passCodeConfirm.substring(3, 4)" class="pin-field" style="margin:0">\n            \n        </div>\n      </ion-col>\n      <ion-col col-1>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div style="margin-top: 35px">\n    <ion-row>\n      <ion-col col-4 text-center>\n        <button ion-button class="digit" (click)="add(1)">1</button>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <button ion-button class="digit" (click)="add(2)">2</button>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <button ion-button class="digit" (click)="add(3)">3</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 text-center>\n        <button ion-button class="digit" (click)="add(4)">4</button>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <button ion-button class="digit" (click)="add(5)">5</button>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <button ion-button class="digit" (click)="add(6)">6</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 text-center>\n        <button ion-button class="digit" (click)="add(7)">7</button>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <button ion-button class="digit" (click)="add(8)">8</button>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <button ion-button class="digit" (click)="add(9)">9</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 text-center></ion-col>\n      <ion-col col-4 text-center>\n        <button ion-button class="digit" (click)="add(0)">0 </button>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <img src="assets/imgs/ic_backspace.png" class="back-space" (click)="delete()"/>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer no-border>\n  <ion-toolbar color="white-color" >\n    <ion-buttons>\n        <button ion-button round full class="pin-button" (tap)="doNavigation()" *ngIf="!confirmKey">NEXT</button>\n        <button ion-button round full class="pin-button" (tap)="doNavigation()" *ngIf="confirmKey">CONFIRM</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n<!-- style="margin-bottom: 10px;" -->'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\pinset\pinset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_generic_service_generic_service__["a" /* GenericServiceProvider */]])
    ], PinsetPage);
    return PinsetPage;
}());

//# sourceMappingURL=pinset.js.map

/***/ })

});
//# sourceMappingURL=9.js.map