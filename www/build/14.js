webpackJsonp([14],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPinPageModule", function() { return ForgotPinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pin__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPinPageModule = (function () {
    function ForgotPinPageModule() {
    }
    ForgotPinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_pin__["a" /* ForgotPinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_pin__["a" /* ForgotPinPage */]),
            ],
        })
    ], ForgotPinPageModule);
    return ForgotPinPageModule;
}());

//# sourceMappingURL=forgot-pin.module.js.map

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

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPinPage; });
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




var ForgotPinPage = (function () {
    function ForgotPinPage(navCtrl, generic) {
        this.navCtrl = navCtrl;
        this.generic = generic;
        this.previousQAns = '';
        this.securityQuestion = '';
        this.securityAnswer = '';
    }
    ForgotPinPage.prototype.ngOnInit = function () {
        this.previousQAns = JSON.parse(localStorage.getItem('QAnsPair'));
    };
    ForgotPinPage.prototype.selectQuestion = function () {
    };
    ForgotPinPage.prototype.validateSecurityQAns = function () {
        if (this.securityQuestion == this.previousQAns.question) {
            if (this.securityAnswer == this.previousQAns.answer) {
                this.navCtrl.setRoot('PinsetPage');
                localStorage.setItem('dashboardNavigation', "true");
            }
            else {
                this.generic.showToast('Security Answer Miss Match');
            }
        }
        else {
            this.generic.showToast('Security Question Miss Match');
        }
    };
    ForgotPinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-pin',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\forgot-pin\forgot-pin.html"*/'\n<ion-content padding>\n    <ion-list no-lines>\n        <ion-item class="head-class" >\n         <h3 text-center style="font-weight: 500;font-size: 20px;">PIN RETRIEVAL</h3>\n        </ion-item>\n      \n        <ion-item >\n          <p text-center>In case you forget your PIN, you can reset it <br>by answering the following security question. </p>\n        </ion-item>\n      \n        <ion-item>\n          <img src="assets/imgs/ic_horizontal_line.png" class="horizontal-divider"/>\n        </ion-item>\n      \n        <ion-item>\n            <ion-label class="question-label">Question</ion-label>\n            <ion-select [(ngModel)]="securityQuestion" class="" interface="action-sheet" (ionChange)="selectQuestion()" style="padding-left:0;width:100%;max-width: 100%;border-bottom: 1px solid #919191">\n                <ion-option>Bacon</ion-option>\n                <ion-option>Black Olives</ion-option>\n                <ion-option>Extra Cheese</ion-option>\n                <ion-option>Mushrooms</ion-option>\n                <ion-option>Pepperoni</ion-option>\n                <ion-option>Sausage</ion-option>\n            </ion-select>\n        </ion-item>\n      \n          \n          <ion-item class="margin-top-10">\n            <ion-label color="primary" stacked class="answer-label">Your Answer</ion-label>\n          <ion-input class="answer-field" type="text" [(ngModel)]="securityAnswer"></ion-input>\n          </ion-item>\n      </ion-list>\n      <button ion-button round full primary class="submit-button" (click)="validateSecurityQAns()">SUBMIT</button>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\forgot-pin\forgot-pin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_generic_service_generic_service__["a" /* GenericServiceProvider */]])
    ], ForgotPinPage);
    return ForgotPinPage;
}());

//# sourceMappingURL=forgot-pin.js.map

/***/ })

});
//# sourceMappingURL=14.js.map