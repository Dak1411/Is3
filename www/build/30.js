webpackJsonp([30],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTaskPageModule", function() { return AllTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_task__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllTaskPageModule = (function () {
    function AllTaskPageModule() {
    }
    AllTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_task__["a" /* AllTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_task__["a" /* AllTaskPage */]),
            ],
        })
    ], AllTaskPageModule);
    return AllTaskPageModule;
}());

//# sourceMappingURL=all-task.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
 * Generated class for the AllTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllTaskPage = (function () {
    function AllTaskPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllTaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllTaskPage');
    };
    AllTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-all-task',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\all-task\all-task.html"*/'<ion-content>\n        <ion-card>\n                <ion-row>\n                        <ion-col col-4 class="left-col" text-center>\n                                <div class="vertical-center">\n                                        <p class="day-head">26</p>\n                                        <p class="month-head">JAN 2018</p>\n                                        <p class="time-head">11:30 AM</p>\n                                </div>\n                                <img src="assets/imgs/ic_exclamation.png" alt="" class="exclamation-tick">\n\n                        </ion-col>\n                        <ion-col col-8 class="right-col">\n                                <h3 class="task-head">Meet with Jane Doe</h3>\n                                <p class="task-desc">\n                                        It is a long established fact that a reader will be distracted by the readable content.\n                                </p>\n                        </ion-col>\n                </ion-row>\n        </ion-card>\n\n        <ion-card>\n                <ion-row>\n                        <ion-col col-4 class="left-col-all" text-center>\n                                <div class="vertical-center">\n                                        <p class="day-head-all">26</p>\n                                        <p class="month-head-all">JAN 2018</p>\n                                        <p class="time-head">11:30 AM</p>\n                                </div>\n                        </ion-col>\n                        <ion-col col-8 class="right-col-all">\n                                <h3 class="task-head">Meet with Jane Doe</h3>\n                                <p class="task-desc">\n                                        It is a long established fact that a reader will be distracted by the readable content.\n                                </p>\n                        </ion-col>\n                </ion-row>\n        </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\all-task\all-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], AllTaskPage);
    return AllTaskPage;
}());

//# sourceMappingURL=all-task.js.map

/***/ })

});
//# sourceMappingURL=30.js.map