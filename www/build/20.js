webpackJsonp([20],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopOverPageModule", function() { return PopOverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pop_over__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopOverPageModule = (function () {
    function PopOverPageModule() {
    }
    PopOverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pop_over__["a" /* PopOverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pop_over__["a" /* PopOverPage */]),
            ],
        })
    ], PopOverPageModule);
    return PopOverPageModule;
}());

//# sourceMappingURL=pop-over.module.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopOverPage; });
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


var PopOverPage = (function () {
    function PopOverPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.category = '';
    }
    PopOverPage.prototype.ngOnInit = function () {
        this.category = this.navParams.get('category');
    };
    PopOverPage.prototype.setSelectedTitle = function (selectedItem) {
        this.viewCtrl.dismiss(selectedItem);
    };
    PopOverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pop-over',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\pop-over\pop-over.html"*/'<ion-list no-lines class="margin-bottom-0">\n    <ion-item (click)="setSelectedTitle(\'Call\')" >\n        Call\n    </ion-item>\n    <ion-item (click)="setSelectedTitle(\'Profile\')" *ngIf="category!=\'profile\'">\n            View Profile\n    </ion-item>\n</ion-list>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\pop-over\pop-over.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], PopOverPage);
    return PopOverPage;
}());

//# sourceMappingURL=pop-over.js.map

/***/ })

});
//# sourceMappingURL=20.js.map