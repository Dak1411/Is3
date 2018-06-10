webpackJsonp([25],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var config = {
    url: 'http://test.is3talk.com', options: {
        transportOptions: {
            polling: {
                extraHeaders: {
                    'x-access-token': localStorage.getItem('token'),
                }
            }
        }
    }
};
var DashboardPageModule = (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["SocketIoModule"].forRoot(config),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// <!-- Un comment the below lines for apis calls -->

var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, app, event, socket) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.event = event;
        this.socket = socket;
        this.socket.connect();
    }
    DashboardPage.prototype.ngOnInit = function () {
        // <!-- Un comment the below lines for apis calls -->
        // this.event.publish('user-detail',JSON.parse(localStorage.getItem('userProfile')));
    };
    DashboardPage.prototype.ionViewWillEnter = function () {
        this.app.activePage = '';
    };
    DashboardPage.prototype.sayHello = function () {
        this.navCtrl.push('SocialPage', { tabIndex: 1 });
    };
    DashboardPage.prototype.featureNavigation = function (page, tabId) {
        if (tabId != '') {
            this.navCtrl.push(page, { tabIndex: tabId });
        }
        else {
            this.navCtrl.push(page);
        }
    };
    DashboardPage.prototype.viewNotifications = function () {
        this.navCtrl.push('NotificationsPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\dashboard\dashboard.html"*/'<ion-header no-border #head>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="viewNotifications()">\n                <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="logo-div">\n        <img class="counsil-logo" src="assets/imgs/ic_southend_logo.png" />\n    </div>\n    <div class="menu-section">\n        <div class="intro-div">\n            <h6 class="cm16-head">CM 16 Care</h6>\n            <p class="cm16-desc">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.\n            </p>\n        </div>\n        <div class="menu-sub-section">\n            <ion-row>\n                <ion-col col-4 (click)="featureNavigation(\'SocialPage\',\'1\')" text-center>\n                    <img src="assets/imgs/ic_chats.png" alt="" class="menu-icon">\n                    <h6 class="menu-name">Chats</h6>\n                </ion-col>\n                <ion-col col-4 (click)="featureNavigation(\'TaskPage\',\'1\')" text-center>\n                        <img src="assets/imgs/ic_tasks.png" alt="" class="menu-icon">\n                        <h6 class="menu-name">Tasks</h6>\n                </ion-col  >\n                <ion-col col-4 (click)="featureNavigation(\'BroadcastPage\',\'\')" text-center>\n                        <img src="assets/imgs/ic_broadcast.png" alt="" class="menu-icon">\n                        <h6 class="menu-name">Broadcast</h6>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                    <ion-col col-4 (click)="featureNavigation(\'SocialPage\',\'2\')" text-center>\n                        <img src="assets/imgs/ic_calls.png" alt="" class="menu-icon">\n                        <h6 class="menu-name">Calls</h6>\n                    </ion-col>\n                    <ion-col col-4 (click)="featureNavigation(\'FaqPage\',\'\')" text-center>\n                            <img src="assets/imgs/ic_faq.png" alt="" class="menu-icon">\n                            <h6 class="menu-name">FAQ</h6>\n                    </ion-col  >\n                    <ion-col col-4 (click)="featureNavigation(\'KeyinfoPage\',\'\')" text-center>\n                            <img src="assets/imgs/ic_key_info.png" alt="" class="menu-icon">\n                            <h6 class="menu-name">KEY INFO</h6>\n                    </ion-col>\n                </ion-row>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=25.js.map