webpackJsonp([2],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutorialPageModule = (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
            ],
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

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

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.state = 'x';
        this.skipButton = true;
        this.showPager = true;
    }
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.swipeEnable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    TutorialPage.prototype.slideMoved = function () {
        if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
            this.state = 'rightSwipe';
        else
            this.state = 'leftSwipe';
    };
    TutorialPage.prototype.animationDone = function () {
        this.state = 'x';
    };
    TutorialPage.prototype.slideChanged = function () {
        if (this.slides.isEnd()) {
            this.skipButton = false;
            this.showPager = false;
        }
        else {
            this.skipButton = true;
            this.showPager = true;
        }
    };
    TutorialPage.prototype.navigatePinRetrieval = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\tutorial\tutorial.html"*/'<ion-content no-bounce style="background: url(\'assets/imgs/ic_tutorial_bg.png\')">\n    <ion-slides #slides [pager]="showPager" (ionSlideDrag)="slideMoved()" (ionSlideDidChange)="slideChanged()">\n        <ion-slide style="margin-top: -10px;">\n            <img src="assets/imgs/ic_tutorial_one.png" class="slider-image" [@bounce]=\'state\' (@bounce.done)="animationDone($event)"\n            />\n            <div [@bounce]=\'state\'>\n                <h2 class="slider-title">STAY CONNECTED</h2>\n                <img src="assets/imgs/ic_divider.png" class="slider-divider">\n                <p class="slider-text">We encourage users to stay in touch with the care team and maintain good relationship.</p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <img src="assets/imgs/ic_tutorial_two.png" class="slider-image" [@bounce]=\'state\' (@bounce.done)="animationDone($event)">\n            <div [@bounce]=\'state\'>\n                <h2 class="slider-title">SECURE MESSAGING</h2>\n                <img src="assets/imgs/ic_divider.png" class="slider-divider">\n                <p class="slider-text">We help you to communicate effectively through Integrated Secure Social Service Chat.</p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <img src="assets/imgs/ic_tutorial_three.png" class="slider-image" [@bounce]=\'state\' (@bounce.done)="animationDone($event)">\n            <div [@bounce]=\'state\'>\n                <h2 class="slider-title">REAL TIME NOTIFICATION</h2>\n                <img src="assets/imgs/ic_divider.png" class="slider-divider">\n                <div style="margin:0 15px">\n                    <p class="slider-text" style="margin-bottom:0px">We help you to keep a real time track of your Broadcast and message updates.</p>\n                </div>\n                <div>\n                    <!-- <button ion-button round full class="get-started" (tap)="navigatePinRetrieval()" >Get Started</button> -->\n                </div>\n            </div>\n        </ion-slide>\n        \n    </ion-slides>\n    <div class="skip-button" *ngIf="skipButton">\n            <button ion-button icon-only (click)="navigatePinRetrieval()" clear>Skip</button>\n    </div>\n    <ion-footer no-border *ngIf="!showPager">\n        <ion-toolbar color="footer">\n            <button ion-button round full class="get-started" (tap)="navigatePinRetrieval()" >Get Started</button>\n        </ion-toolbar>\n      </ion-footer>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\tutorial\tutorial.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('bounce', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'translateX(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => rightSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-65px)', offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 1.0 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => leftSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(65px)', offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 1.0 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=2.js.map