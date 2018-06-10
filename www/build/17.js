webpackJsonp([17],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(801);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userprofile_userprofile__ = __webpack_require__(383);
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




var WelcomePage = (function () {
    function WelcomePage(navCtrl, userDetails, generic, event) {
        this.navCtrl = navCtrl;
        this.userDetails = userDetails;
        this.generic = generic;
        this.event = event;
        this.spinner = '';
        this.response = '';
        this.userArray = [];
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.setRoot('DashboardPage');
        }, 3000);
    };
    WelcomePage.prototype.ngOnInit = function () {
        // <!-- Un comment the below lines for apis calls
        if (this.generic.isOnline()) {
            this.spinner = this.generic.showSpinner();
            // this.userDetails.fetchUserDetail().subscribe(data=>this.successCallBack(data,'userProfile'),
            //                                             error=>this.onErrorCallBack(error))
        }
    };
    /**
     *
     * API Call backs
     *
     */
    WelcomePage.prototype.successCallBack = function (res, caller) {
        this.spinner.dismiss();
        this.response = res;
        if (caller == 'userProfile') {
            if (this.response.success == true) {
                this.userArray = this.response.result[0];
                localStorage.setItem('userProfile', JSON.stringify(this.userArray));
                this.event.publish('user-detail', this.userArray);
            }
            else {
                this.generic.showToast(this.response.msg);
            }
        }
    };
    WelcomePage.prototype.onErrorCallBack = function (error) {
        this.spinner.dismiss();
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\welcome\welcome.html"*/'<ion-content padding>\n<div text-center class="vertical-center "> \n    <img src="assets/imgs/ic_welcome_logo.png" alt="" class="welcome-logo">\n    <!-- Un comment the below lines for apis calls -->\n    <h4 class="welcome-title white-color">HELLO <br>Anand Raj</h4>\n    <!-- <h4 class="welcome-title white-color">HELLO <br>Anand Raj</h4> -->\n    <img src="assets/imgs/ic_welcome_divider.png" class="divider"/>\n    <p class="white-color margin-top-40">You are all set to start <br> the <b>CM16+ chat!</b></p>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_generic_service_generic_service__["a" /* GenericServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=17.js.map