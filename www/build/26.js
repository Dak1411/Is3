webpackJsonp([26],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactsPageModule = (function () {
    function ContactsPageModule() {
    }
    ContactsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */]),
            ],
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_generic_service_generic_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userprofile_userprofile__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsPage = (function () {
    function ContactsPage(navCtrl, viewCtrl, generic, userApis) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.generic = generic;
        this.userApis = userApis;
        this.spinner = '';
        this.teamList = [];
        this.managerVisible = false;
    }
    ContactsPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.generic.isOnline()) {
            this.spinner = this.generic.showSpinner();
            this.userApis.fetchTeamDetail().subscribe(function (data) { return _this.successCallback(data); }, function (error) { return _this.errorCallBack(error); });
        }
        else {
            this.generic.showToast('No network');
        }
    };
    ContactsPage.prototype.toggleSection = function (i) {
        this.teamList[i].open = !this.teamList[i].open;
    };
    ContactsPage.prototype.listToggle = function () {
        this.managerVisible = !this.managerVisible;
    };
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsPage');
    };
    /**
     *
     * API Call backs
     *
     */
    ContactsPage.prototype.successCallback = function (response) {
        this.spinner.dismiss();
        if (response.success == true) {
            this.teamList = response.result;
        }
        else {
            this.generic.showToast(response.msg);
        }
    };
    ContactsPage.prototype.errorCallBack = function (error) {
        this.spinner.dismiss();
        try {
            this.generic.showToast(error);
        }
        catch (error) {
        }
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contacts',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\contacts\contacts.html"*/'<ion-content>\n                <ion-list class="accordion-list">\n                                <ion-item-group>\n                                        <ion-list-header *ngFor="let item of teamList;let i=index"  no-lines [ngClass]="{\'display-none\':item.items.length===0}" > \n                                                <ion-row class="margin-top-10" (click)="toggleSection(i)">\n                                                        <ion-col col-5 text-start>\n                                                            <p class="manager-label">{{item.name}}</p>\n                                                        </ion-col>\n                                                        <ion-col col-7>\n                                                            <div class="horizontal-line">\n                                                                <ion-icon [name]="teamList[i].open?\'ios-arrow-dropdown-circle-outline\':\'ios-arrow-dropup-circle-outline\'" class="down-arrow"\n                                                                    (click)="listToggle()"></ion-icon>\n                                                            </div>\n                                                        </ion-col>\n                                                    </ion-row>\n                                                    <ion-list  class="inner-list" *ngIf="item.items && item.open ">\n                                                        <ion-item detail-push *ngFor="let children of item.items" class="padding-0 ">\n                                                            <!-- <ion-item > -->\n                                                                    <ion-avatar item-start>\n                                                                        <img src="assets/imgs/ic_avatar.png" class="user-icon">\n                                                                    </ion-avatar>\n                                                                    <h2>{{children.full_name}}</h2>\n                                                           \n                                                        </ion-item>\n                                                    </ion-list>\n                                        </ion-list-header>\n                                </ion-item-group>\n                            </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_generic_service_generic_service__["a" /* GenericServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userprofile_userprofile__["a" /* UserprofileProvider */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

});
//# sourceMappingURL=26.js.map