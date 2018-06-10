webpackJsonp([3],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPageModule", function() { return TaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TaskPageModule = (function () {
    function TaskPageModule() {
    }
    TaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__task__["a" /* TaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__task__["a" /* TaskPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__["b" /* SuperTabsModule */]
            ]
        })
    ], TaskPageModule);
    return TaskPageModule;
}());

//# sourceMappingURL=task.module.js.map

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

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskPage = (function () {
    function TaskPage(navCtrl, navParams, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.superTabsCtrl = superTabsCtrl;
        this.allTaskRoot = 'AllTaskPage';
        this.todayTaskRoot = 'TodayTaskPage';
        this.overdueTaskRoot = 'OverdueTaskPage';
        this.mySelectedIndex = 0;
    }
    TaskPage.prototype.ngOnInit = function () {
        this.mySelectedIndex = this.navParams.data.tabIndex || 0;
    };
    TaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-task',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\task\task.html"*/'<ion-header no-border>\n        <ion-navbar>\n            <ion-buttons end>\n                <button ion-button icon-only (click)="netWork()"><ion-icon name="notifications"></ion-icon></button>\n            </ion-buttons>\n        </ion-navbar>\n      </ion-header>\n      <ion-content>\n        <super-tabs tabsHighlight="true" tabsPlacement="top" [selectedTabIndex]="mySelectedIndex">\n            <super-tab [root]="allTaskRoot" title="All" ></super-tab>\n            <super-tab [root]="todayTaskRoot" title="Today" ></super-tab>\n            <super-tab [root]="overdueTaskRoot" title="Overdue" ></super-tab>\n        </super-tabs>\n      </ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\task\task.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=task.js.map

/***/ })

});
//# sourceMappingURL=3.js.map