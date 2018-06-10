webpackJsonp([0],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shrinking_segment_header_shrinking_segment_header__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserProfilePageModule = (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_3__components_shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

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

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_generic_service_generic_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userprofile_userprofile__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfilePage = (function () {
    function UserProfilePage(navCtrl, generic, profileApis) {
        this.navCtrl = navCtrl;
        this.generic = generic;
        this.profileApis = profileApis;
        this.teamList = [];
        this.managerVisible = false;
        this.spinner = '';
        this.userDetails = [];
        this.response = '';
    }
    UserProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.userDetails = JSON.parse(localStorage.getItem('userProfile'));
        if (this.generic.isOnline()) {
            this.spinner = this.generic.showSpinner();
            this.profileApis.fetchTeamDetail().subscribe(function (data) { return _this.successCallBack(data); }, function (error) { return _this.errorCallBack(error); });
        }
    };
    UserProfilePage.prototype.listToggle = function () {
        this.managerVisible = !this.managerVisible;
    };
    UserProfilePage.prototype.toggleSection = function (i) {
        this.teamList[i].open = !this.teamList[i].open;
    };
    UserProfilePage.prototype.chatPage = function (user) {
        this.navCtrl.push('BuddyChatPage', { user: user });
    };
    /**
     *
     * API Call backs
     *
     */
    UserProfilePage.prototype.successCallBack = function (res) {
        this.spinner.dismiss();
        this.response = res;
        if (this.response.success == true) {
            this.teamList = this.response.result;
        }
        else {
            this.generic.showToast(this.response.msg);
        }
    };
    UserProfilePage.prototype.errorCallBack = function (error) {
        this.generic.showToast(error);
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-profile',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\user-profile\user-profile.html"*/'<ion-header no-border>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content #myContent>\n    <ion-row class="border-bottom">\n        <ion-col text-center style="padding-top: 5px;">\n            <img src="assets/imgs/ic_avatar.png" class="user-image" />\n            <h3 class="user-name margin-top-10">{{userDetails.full_name}}</h3>\n            <h6 class="user-address margin-top-10">{{userDetails.address_line_a}},{{userDetails.address_line_b}}</h6>\n        </ion-col>\n    </ion-row>\n    <ion-row class="border-bottom">\n        <ion-col class="padding-left-16">\n            <p class="email-label">Email:</p>&nbsp;&nbsp;&nbsp;\n            <span class="email-text">{{userDetails.email}}</span>\n        </ion-col>\n    </ion-row>\n    <ion-row class="border-bottom">\n        <ion-col class="padding-left-16">\n            <p class="phone-label">Phone:</p>\n            <span class="phone-text"> {{userDetails.phone}}</span>\n        </ion-col>\n    </ion-row>\n    <div>\n        <ion-list class="accordion-list">\n            <ion-item-group>\n                    <ion-item-divider sticky text-center color="primary">MY TEAM</ion-item-divider>\n                    <ion-list-header *ngFor="let item of teamList;let i=index"  no-lines [ngClass]="{\'display-none\':item.items.length===0}" > \n                            <ion-row class="margin-top-10" (click)="toggleSection(i)">\n                                    <ion-col col-5 text-start>\n                                        <p class="manager-label">{{item.name}}</p>\n                                    </ion-col>\n                                    <ion-col col-7>\n                                        <div class="horizontal-line">\n                                            <ion-icon [name]="teamList[i].open?\'ios-arrow-dropdown-circle-outline\':\'ios-arrow-dropup-circle-outline\'" class="down-arrow"\n                                                (click)="listToggle()"></ion-icon>\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-list class="inner-list" *ngIf="item.items && item.open "  show-detail>\n                                    <ion-item *ngFor="let children of item.items" class="padding-0 " (click)="chatPage(children)">\n                                        <!-- <ion-item > -->\n                                                <ion-avatar item-start>\n                                                    <img src="assets/imgs/ic_avatar.png" class="user-icon">\n                                                </ion-avatar>\n                                                <h2>{{children.full_name}}</h2>\n                                       \n                                    </ion-item>\n                                </ion-list>\n                    </ion-list-header>\n            </ion-item-group>\n        </ion-list>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_generic_service_generic_service__["a" /* GenericServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_userprofile_userprofile__["a" /* UserprofileProvider */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShrinkingSegmentHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ShrinkingSegmentHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ShrinkingSegmentHeaderComponent = (function () {
    function ShrinkingSegmentHeaderComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ShrinkingSegmentHeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ShrinkingSegmentHeaderComponent.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('scrollArea'),
        __metadata("design:type", Object)
    ], ShrinkingSegmentHeaderComponent.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('headerHeight'),
        __metadata("design:type", Number)
    ], ShrinkingSegmentHeaderComponent.prototype, "headerHeight", void 0);
    ShrinkingSegmentHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'shrinking-segment-header',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\components\shrinking-segment-header\shrinking-segment-header.html"*/'<ng-content></ng-content>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\components\shrinking-segment-header\shrinking-segment-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ShrinkingSegmentHeaderComponent);
    return ShrinkingSegmentHeaderComponent;
}());

//# sourceMappingURL=shrinking-segment-header.js.map

/***/ })

});
//# sourceMappingURL=0.js.map