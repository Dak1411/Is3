webpackJsonp([1],{

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function() { return ViewProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_profile__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewProfilePageModule = (function () {
    function ViewProfilePageModule() {
    }
    ViewProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_profile__["a" /* ViewProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_profile__["a" /* ViewProfilePage */]),
            ],
        })
    ], ViewProfilePageModule);
    return ViewProfilePageModule;
}());

//# sourceMappingURL=view-profile.module.js.map

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

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_generic_service_generic_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userprofile_userprofile__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_disable_side_menu__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewProfilePage = (function () {
    function ViewProfilePage(navCtrl, generic, profileApis, popOver) {
        this.navCtrl = navCtrl;
        this.generic = generic;
        this.profileApis = profileApis;
        this.popOver = popOver;
        this.spinner = '';
        this.teamList = [];
        this.managerVisible = false;
        this.category = 'profile';
        this.userDetails = [];
    }
    ViewProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.userDetails = JSON.parse(localStorage.getItem('userProfile'));
        if (this.generic.isOnline()) {
            this.spinner = this.generic.showSpinner();
            this.profileApis.fetchTeamDetail().subscribe(function (data) { return _this.successCallBack(data, 'team'); }, function (error) { return _this.errorCallBack(error); });
        }
        else {
            this.generic.showToast('No network');
        }
    };
    ViewProfilePage.prototype.toggleSection = function (i) {
        this.teamList[i].open = !this.teamList[i].open;
    };
    ViewProfilePage.prototype.listToggle = function () {
        this.managerVisible = !this.managerVisible;
    };
    ViewProfilePage.prototype.chatWithBuddy = function () {
        this.navCtrl.push('BuddyChatPage');
    };
    ViewProfilePage.prototype.viewPopOver = function (ev) {
        var popover = this.popOver.create('PopOverPage', {
            category: 'profile'
        });
        popover.present({
            ev: ev
        });
        popover.onDidDismiss(function (popoverData) {
            if (popoverData === null) {
            }
            else {
                console.log(popoverData);
            }
        });
    };
    ViewProfilePage.prototype.buddyChat = function (recipient) {
        this.navCtrl.push('BuddyChatPage', { user: recipient });
    };
    /**
     *
     * API Call back
     *
     *
     */
    ViewProfilePage.prototype.successCallBack = function (res, caller) {
        this.spinner.dismiss();
        if (caller == 'team') {
            this.teamList = res.result;
        }
        else {
        }
    };
    ViewProfilePage.prototype.errorCallBack = function (error) {
        this.spinner.dismiss();
    };
    ViewProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-profile',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\view-profile\view-profile.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n    <ion-buttons end>\n        <button ion-button icon-only  (click)="viewPopOver($event)">\n                <img src="assets/imgs/ic_pop_over.png" style="width: 5px;">\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div text-center>\n    <img src="assets/imgs/ic_avatar.png" class="user-image">\n    <!-- <h3 class="user-name">John Doe</h3>\n    <img src="assets/imgs/ic_message.png" class="chat-image" (click)="chatWithBuddy()">\n    <h5 class="user-role">Social Worker</h5> -->\n    <ion-row>\n        <ion-col col-4></ion-col>\n        <ion-col col-4>\n    <h3 class="user-name">{{userDetails.full_name}}</h3>\n    <h5 class="user-role">{{userDetails.role}}</h5>\n        </ion-col>\n        <ion-col col-4 style="text-align: right;padding-right: 10px;">\n                <img src="assets/imgs/ic_message.png" class="chat-icon" (click)="chatWithBuddy()">\n        </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-toolbar>\n      <ion-segment [(ngModel)]="category" color="primary">\n        <ion-segment-button value="team">\n         TEAM\n        </ion-segment-button>\n        <ion-segment-button value="profile">\n          PROFILE\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div [ngSwitch]="category">\n        <ion-list class="accordion-list" *ngSwitchCase="\'team\'">\n            <ion-item-group>\n                    <ion-list-header *ngFor="let item of teamList;let i=index"  no-lines [ngClass]="{\'display-none\':item.items.length==0}"> \n                            <ion-row class="margin-top-10" (click)="toggleSection(i)">\n                                    <ion-col col-5 text-start>\n                                        <p class="manager-label">{{item.name}}</p>\n                                    </ion-col>\n                                    <ion-col col-7>\n                                        <div class="horizontal-line">\n                                            <ion-icon [name]="teamList[i].open?\'ios-arrow-dropdown-circle-outline\':\'ios-arrow-dropup-circle-outline\'" class="down-arrow"\n                                                (click)="listToggle()"></ion-icon>\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-list class="inner-list" *ngIf="item.items && item.open " >\n                                    <ion-item *ngFor="let children of item.items" class="padding-0 "  detail-push (click)="buddyChat(children)">\n                                        <!-- <ion-item > -->\n                                                <ion-avatar item-start>\n                                                    <img src="assets/imgs/ic_avatar.png" class="user-icon">\n                                                </ion-avatar>\n                                                <h2>{{children.full_name}}</h2>\n                                       \n                                    </ion-item>\n                                </ion-list>\n                    </ion-list-header>\n            </ion-item-group>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'profile\'" padding>\n            <ion-item class="padding-0 margin-top-10" style="border-bottom: 1px solid #d3d3d3 !important">\n                <h4 class="to-upper field-head">case id</h4>\n                <p class="field-value">-</p>\n            </ion-item>\n\n            <ion-item class="padding-0 margin-top-10" style="border-bottom: 1px solid #d3d3d3 !important">\n                <h4 class="to-upper field-head">Address</h4>\n                <p class="field-value">{{userDetails.address_line_a}},{{userDetails.address_line_b}}</p>\n            </ion-item>\n\n            <ion-item class="padding-0 margin-top-10" style="border-bottom: 1px solid #d3d3d3 !important">\n                <h4 class="to-upper field-head">Phone Number</h4>\n                <p class="field-value">{{userDetails.phone}}</p>\n            </ion-item>\n\n            <ion-item class="padding-0 margin-top-10" style="border-bottom: 1px solid #d3d3d3 !important">\n                <h4 class="to-upper field-head">email</h4>\n                <p class="field-value">{{userDetails.email}}</p>\n            </ion-item>\n\n            <ion-item class="padding-0 margin-top-10" style="border-bottom: 1px solid #d3d3d3 !important">\n                <h4 class="to-upper field-head">Category</h4>\n                <p class="field-value">General</p>\n            </ion-item>\n\n            <ion-item class="padding-0 margin-top-10" style="border-bottom: 1px solid #d3d3d3 !important">\n                <h4 class="to-upper field-head">User Info</h4>\n                <p class="field-value">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n            </ion-item>\n\n            <ion-item class="padding-0 margin-top-10" style="border-bottom: 1px solid #d3d3d3 !important">\n                <h4 class="to-upper field-head">council</h4>\n                <p class="field-value">Southend-On-Sea</p>\n            </ion-item>\n\n            <ion-item class="padding-0 margin-top-10">\n                <h4 class="to-upper field-head">department</h4>\n                <p class="field-value">CM 16</p>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\view-profile\view-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_generic_service_generic_service__["a" /* GenericServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */]])
    ], ViewProfilePage);
    return ViewProfilePage;
}());

//# sourceMappingURL=view-profile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map