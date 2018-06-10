webpackJsonp([28],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsPageModule", function() { return CallsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calls__ = __webpack_require__(772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CallsPageModule = (function () {
    function CallsPageModule() {
    }
    CallsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calls__["a" /* CallsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calls__["a" /* CallsPage */]),
            ],
        })
    ], CallsPageModule);
    return CallsPageModule;
}());

//# sourceMappingURL=calls.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallsPage = (function () {
    function CallsPage(navCtrl, navParams, viewCtrl, superTab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.superTab = superTab;
    }
    CallsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CallsPage');
    };
    CallsPage.prototype.ngOnInit = function () {
        this.viewCtrl.showBackButton(true);
    };
    CallsPage.prototype.newCall = function () {
        this.superTab.slideTo(0);
    };
    CallsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calls',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\calls\calls.html"*/'<ion-content class="call-bg">\n        <ion-list>\n                <ion-item>\n                        <ion-avatar item-start>\n                                <img src="assets/imgs/ic_avatar.png" class="user-icon">\n                        </ion-avatar>\n                        <ion-avatar item-end>\n                                <img src="assets/imgs/ic_call_phone.png" class="phone-icon">\n                        </ion-avatar>\n                        <div class="active-user"></div>\n                        <h2>John Doe</h2>\n                        <p>Yesterday, 11.30 AM</p>\n                </ion-item>\n\n                <ion-item>\n                        <ion-avatar item-start>\n                                <img src="assets/imgs/ic_avatar.png" class="user-icon">\n                        </ion-avatar>\n                        <ion-avatar item-end>\n                                <img src="assets/imgs/ic_call_phone.png" class="phone-icon">\n                        </ion-avatar>\n                        <h2>John Doe</h2>\n                        <p>Yesterday, 11.30 AM</p>\n                </ion-item>\n\n                <ion-item>\n                        <ion-avatar item-start>\n                                <img src="assets/imgs/ic_avatar.png" class="user-icon">\n                        </ion-avatar>\n                        <ion-avatar item-end>\n                                <img src="assets/imgs/ic_call_phone.png" class="phone-icon">\n                        </ion-avatar>\n                        <div class="active-user"></div>\n                        <h2>John Doe</h2>\n                        <p>Yesterday, 11.30 AM</p>\n                </ion-item>\n        </ion-list>\n        <ion-fab class="fab-button" (click)="newCall()">\n                <button ion-fab>\n                        <img src="assets/imgs/ic_add_contact.png" alt="">\n                </button>\n        </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\calls\calls.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], CallsPage);
    return CallsPage;
}());

//# sourceMappingURL=calls.js.map

/***/ })

});
//# sourceMappingURL=28.js.map