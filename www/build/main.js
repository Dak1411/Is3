webpackJsonp([31],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrlsProvider; });
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

var ApiUrlsProvider = (function () {
    function ApiUrlsProvider() {
        this.council = '';
        this.apis = '';
        this.USER_DETAILS_URL = '';
        this.LOGIN_URL = 'http://mobile.test.is3talk.com/api/mobile/auth/login';
        this.LOGIN_URL_LOCAL = 'http://mobile.is3alpha.com:3000/api/mobile/auth/login';
        this.BASE_URL_LIVE = 'http://' + localStorage.getItem('council') + '.test.is3talk.com/api/mobile';
        this.BASE_URL = 'http://' + localStorage.getItem('council') + '.is3alpha.com:3000/api/mobile';
        this.USER_DETAILS_API = this.BASE_URL_LIVE + '/user/profile';
        this.TEAMS_URL = this.BASE_URL_LIVE + '/team/list';
    }
    ApiUrlsProvider.prototype.createPostAuthorizationHeader = function (header) {
        header.append('Accept', 'application/json');
        header.append('Content-Type', 'application/json');
        if (localStorage.getItem('token')) {
            header.append('x-access-token', localStorage.getItem('token'));
        }
        return header;
    };
    ApiUrlsProvider.prototype.createGetAuthorizationHeader = function (header) {
        if (localStorage.getItem('token')) {
            header.append('x-access-token', localStorage.getItem('token'));
        }
        return header;
    };
    ApiUrlsProvider.prototype.developmentUrls = function (council) {
        this.apis.LOGIN_URL = '';
        this.apis.BASE_URL = '';
        this.apis.USER_DETAILS_URL = '';
        this.apis.TEAMS_URL = '';
        return this.apis;
    };
    ApiUrlsProvider.prototype.liveUrls = function (council) {
        this.apis.LOGIN_URL = '';
        this.apis.BASE_URL = '';
        this.apis.USER_DETAILS_URL = '';
        this.apis.TEAMS_URL = '';
        return this.apis;
    };
    ApiUrlsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ApiUrlsProvider);
    return ApiUrlsProvider;
}());

//# sourceMappingURL=api-urls.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenericServiceProvider = (function () {
    function GenericServiceProvider(toastCtrl, alertCtrl, actionCtrl, loadingCtrl, platform, network
        // private diagnostic: Diagnostic,
        // private fileTransfer: FileTransferObject
    ) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.actionCtrl = actionCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.network = network;
    }
    //Toast
    GenericServiceProvider.prototype.showToast = function (message) {
        var _this = this;
        //check for the toast instance with in the timout event
        if (this.toast) {
            return;
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        this.toast.onDidDismiss(function () {
            _this.toast = null; // To avoid the duplication of toast
        });
        this.toast.present();
    };
    //Alert
    GenericServiceProvider.prototype.showAlert = function (title, message, yesHandler, noHandler, caller) {
        var alert = this.alertCtrl.create({
            title: title || "Please Confirm",
            message: message,
            cssClass: 'buttonCss',
            buttons: [
                {
                    text: 'DISAGREE',
                    role: 'cancel',
                    handler: function () { return noHandler(caller); }
                },
                {
                    text: 'AGREE',
                    handler: function () { return yesHandler(caller); }
                }
            ]
        });
        alert.setMode('ios');
        alert.present();
    };
    //Loader
    GenericServiceProvider.prototype.showSpinner = function () {
        var loading = this.loadingCtrl.create({
            cssClass: 'my-loading-class',
            spinner: 'crescent'
        });
        loading.present();
        return loading;
    };
    //Check for Network connection
    GenericServiceProvider.prototype.isOnline = function () {
        if (this.network.type === 'none') {
            return false;
        }
        else {
            return true;
        }
    };
    //Add item to local storage
    GenericServiceProvider.prototype.addToLocal = function (key, value) {
        localStorage.setItem(key, value);
    };
    GenericServiceProvider.prototype.fetchFromLocal = function (key) {
        return localStorage.getItem(key);
    };
    GenericServiceProvider.prototype.removeFromLocal = function (key) {
        localStorage.removeItem(key);
    };
    GenericServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]
            // private diagnostic: Diagnostic,
            // private fileTransfer: FileTransferObject
        ])
    ], GenericServiceProvider);
    return GenericServiceProvider;
}());

//# sourceMappingURL=generic-service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-task/all-task.module": [
		738,
		30
	],
	"../pages/broadcast/broadcast.module": [
		739,
		29
	],
	"../pages/buddy-chat/buddy-chat.module": [
		741,
		16
	],
	"../pages/calls/calls.module": [
		740,
		28
	],
	"../pages/change-pin/change-pin.module": [
		742,
		15
	],
	"../pages/chats/chats.module": [
		743,
		27
	],
	"../pages/contacts/contacts.module": [
		746,
		26
	],
	"../pages/dashboard/dashboard.module": [
		747,
		25
	],
	"../pages/faq/faq.module": [
		744,
		24
	],
	"../pages/forgot-pin/forgot-pin.module": [
		750,
		14
	],
	"../pages/keyinfo/keyinfo.module": [
		745,
		23
	],
	"../pages/login/login.module": [
		751,
		13
	],
	"../pages/no-internet/no-internet.module": [
		752,
		12
	],
	"../pages/notifications/notifications.module": [
		748,
		22
	],
	"../pages/overdue-task/overdue-task.module": [
		749,
		21
	],
	"../pages/pin-entry/pin-entry.module": [
		756,
		11
	],
	"../pages/pin-retrieval/pin-retrieval.module": [
		754,
		10
	],
	"../pages/pinset/pinset.module": [
		759,
		9
	],
	"../pages/pop-over/pop-over.module": [
		753,
		20
	],
	"../pages/privacy/privacy.module": [
		760,
		8
	],
	"../pages/securekey/securekey.module": [
		755,
		7
	],
	"../pages/settings-notification/settings-notification.module": [
		758,
		6
	],
	"../pages/settings/settings.module": [
		757,
		5
	],
	"../pages/social/social.module": [
		762,
		4
	],
	"../pages/subordinate-profile/subordinate-profile.module": [
		763,
		19
	],
	"../pages/task/task.module": [
		764,
		3
	],
	"../pages/today-task/today-task.module": [
		761,
		18
	],
	"../pages/tutorial/tutorial.module": [
		766,
		2
	],
	"../pages/user-profile/user-profile.module": [
		765,
		0
	],
	"../pages/view-profile/view-profile.module": [
		767,
		1
	],
	"../pages/welcome/welcome.module": [
		768,
		17
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkCheckProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
var NetworkCheckProvider = (function () {
    function NetworkCheckProvider(eventCtrl, netWork) {
        this.eventCtrl = eventCtrl;
        this.netWork = netWork;
        this.previousStatus = ConnectionStatusEnum.Online;
    }
    NetworkCheckProvider.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.netWork.onDisconnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Online) {
                _this.eventCtrl.publish('network:offline');
            }
            _this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.netWork.onConnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Offline) {
                _this.eventCtrl.publish('network:online');
            }
            _this.previousStatus = ConnectionStatusEnum.Online;
        });
    };
    NetworkCheckProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], NetworkCheckProvider);
    return NetworkCheckProvider;
}());

//# sourceMappingURL=network-check.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_super_tabs__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_vibration__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_generic_service_generic_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_network_check_network_check__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_api_urls_api_urls__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_userprofile_userprofile__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_chatservice_chatservice__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_socket_io__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














 //to call http methods



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
var AppModule = (function () {
    function AppModule(injector) {
        // Make the injector to be available in the entire module
        AppModule_1.injector = injector;
    }
    AppModule_1 = AppModule;
    AppModule = AppModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/all-task/all-task.module#AllTaskPageModule', name: 'AllTaskPage', segment: 'all-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/broadcast/broadcast.module#BroadcastPageModule', name: 'BroadcastPage', segment: 'broadcast', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calls/calls.module#CallsPageModule', name: 'CallsPage', segment: 'calls', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buddy-chat/buddy-chat.module#BuddyChatPageModule', name: 'BuddyChatPage', segment: 'buddy-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-pin/change-pin.module#ChangePinPageModule', name: 'ChangePinPage', segment: 'change-pin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/keyinfo/keyinfo.module#KeyinfoPageModule', name: 'KeyinfoPage', segment: 'keyinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/overdue-task/overdue-task.module#OverdueTaskPageModule', name: 'OverdueTaskPage', segment: 'overdue-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-pin/forgot-pin.module#ForgotPinPageModule', name: 'ForgotPinPage', segment: 'forgot-pin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/no-internet/no-internet.module#NoInternetPageModule', name: 'NoInternetPage', segment: 'no-internet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pop-over/pop-over.module#PopOverPageModule', name: 'PopOverPage', segment: 'pop-over', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pin-retrieval/pin-retrieval.module#PinRetrievalPageModule', name: 'PinRetrievalPage', segment: 'pin-retrieval', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/securekey/securekey.module#SecurekeyPageModule', name: 'SecurekeyPage', segment: 'securekey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pin-entry/pin-entry.module#PinEntryPageModule', name: 'PinEntryPage', segment: 'pin-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings-notification/settings-notification.module#SettingsNotificationPageModule', name: 'SettingsNotificationPage', segment: 'settings-notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pinset/pinset.module#PinsetPageModule', name: 'PinsetPage', segment: 'pinset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/today-task/today-task.module#TodayTaskPageModule', name: 'TodayTaskPage', segment: 'today-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social/social.module#SocialPageModule', name: 'SocialPage', segment: 'social', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subordinate-profile/subordinate-profile.module#SubordinateProfilePageModule', name: 'SubordinateProfilePage', segment: 'subordinate-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task/task.module#TaskPageModule', name: 'TaskPage', segment: 'task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-profile/view-profile.module#ViewProfilePageModule', name: 'ViewProfilePage', segment: 'view-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic2_super_tabs__["b" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_ng_socket_io__["SocketIoModule"].forRoot(config)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_generic_service_generic_service__["a" /* GenericServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_12__providers_network_check_network_check__["a" /* NetworkCheckProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_api_urls_api_urls__["a" /* ApiUrlsProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_chatservice_chatservice__["a" /* ChatserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_vibration__["a" /* Vibration */],
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]) === "function" && _a || Object])
    ], AppModule);
    return AppModule;
    var AppModule_1, _a;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_urls_api_urls__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserprofileProvider = (function () {
    function UserprofileProvider(http, apis) {
        this.http = http;
        this.apis = apis;
    }
    UserprofileProvider.prototype.fetchUserDetail = function () {
        var council = localStorage.getItem('council');
        var Url = 'http://' + council + '.test.is3talk.com/api/mobile/user/profile';
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header = this.apis.createGetAuthorizationHeader(header);
        var requestOption = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        return this.http.get(Url, requestOption).map(function (res) {
            return res.json();
        });
    };
    UserprofileProvider.prototype.fetchTeamDetail = function () {
        var council = localStorage.getItem('council');
        var Url = 'http://' + council + '.test.is3talk.com/api/mobile/team/list';
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header = this.apis.createGetAuthorizationHeader(header);
        var requestOption = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        return this.http.get(Url, requestOption).map(function (res) {
            return res.json();
        });
        //return this.http.get("assets/information.json").map(res=>res.json());
    };
    UserprofileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__api_urls_api_urls__["a" /* ApiUrlsProvider */]])
    ], UserprofileProvider);
    return UserprofileProvider;
}());

//# sourceMappingURL=userprofile.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
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




var ChatserviceProvider = (function () {
    function ChatserviceProvider(socket, event) {
        this.socket = socket;
        this.event = event;
    }
    ChatserviceProvider.prototype.getFriendMessage = function () {
    };
    ChatserviceProvider.prototype.sendMessage = function (msg) {
        this.socket.emit('newMessage', msg);
    };
    ChatserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */]])
    ], ChatserviceProvider);
    return ChatserviceProvider;
}());

//# sourceMappingURL=chatservice.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_generic_service_generic_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_app_menu_controller__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_network_check_network_check__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, ionicApp, generic, menu, events, netWorkCheck) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.ionicApp = ionicApp;
        this.generic = generic;
        this.menu = menu;
        this.events = events;
        this.netWorkCheck = netWorkCheck;
        this.rootPage = '';
        this.activePage = '';
        this.previousView = '';
        this.userName = '';
        this.designation = '';
        /*--------Alert Cal Back------*/
        this.onYesHandler = function (caller) {
            if (caller == "backPress") {
                _this.platform.exitApp();
            }
        };
        this.onNoHandler = function (caller) {
            if (caller == "backPress") {
            }
        };
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log('Again');
            _this.backToLastState();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.networkCheck();
            _this.netWorkCheck.initializeNetworkEvents();
            _this.viewUser();
            _this.platform.registerBackButtonAction(function () {
                var activePortal = _this.ionicApp._loadingPortal.getActive() ||
                    _this.ionicApp._modalPortal.getActive() ||
                    _this.ionicApp._toastPortal.getActive() ||
                    _this.ionicApp._overlayPortal.getActive();
                if (activePortal) {
                    activePortal.dismiss();
                }
                else {
                    if (_this.nav.canGoBack()) {
                        _this.nav.pop();
                    }
                    else {
                        if (_this.nav.getActive().name === 'LoginPage') {
                            _this.platform.exitApp();
                        }
                        else {
                            _this.generic.showAlert("Exit", "Do you want to exit the app?", _this.onYesHandler, _this.onNoHandler, "backPress");
                        }
                    }
                }
            });
            //Application paused when moved to background
            _this.platform.pause.subscribe(function () {
                localStorage.setItem('lastView', _this.nav.getActive().name);
                _this.generic.showToast('lastView:' + _this.nav.getActive().name);
            });
            //Launch the last view 
            // this.platform.resume.subscribe(() => {
            //     this.backToLastState();
            // });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.activePage = page;
        this.nav.push(page);
    };
    MyApp.prototype.checkActive = function (page) {
        return page === this.activePage;
    };
    MyApp.prototype.openPageTab = function () {
        this.nav.push('SocialPage', { tabIndex: 0 });
    };
    MyApp.prototype.viewProfile = function () {
        this.nav.push('ViewProfilePage');
    };
    MyApp.prototype.networkCheck = function () {
        var _this = this;
        this.events.subscribe('network:online', function () {
            _this.generic.showToast("Network Available");
            console.log('network connected!');
        });
        this.events.subscribe('network:offline', function () {
            if (_this.nav.getActive().name != 'NoInternetPage')
                _this.nav.push('NoInternetPage');
        });
    };
    MyApp.prototype.backToLastState = function () {
        var lastState = localStorage.getItem('lastView');
        try {
            if (lastState == null) {
                this.nav.setRoot('LoginPage');
            }
            else if (lastState == "LoginPage" ||
                lastState == "PrivacyPage" ||
                lastState == "PinsetPage" ||
                lastState == "TutorialPage" ||
                lastState == "PinRetrievalPage" ||
                lastState == "SecurekeyPage") {
                this.nav.setRoot(lastState);
            }
            else {
                this.nav.setRoot('PinEntryPage');
            }
        }
        catch (error) {
            console.log('Error in pushing the view:' + error);
        }
    };
    MyApp.prototype.viewUser = function () {
        var _this = this;
        this.events.subscribe('user-detail', function (user) {
            _this.userName = user.full_name || '';
            _this.designation = user.role || '';
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\app\app.html"*/'<ion-menu [content]="content" type="overlay" id="user-menu">\n  <ion-header no-border>\n    <ion-toolbar>\n      <img src="assets/imgs/ic_southend_logo.png" class="width-50 margin-top-10">\n    </ion-toolbar>\n    <div class="user-info" (click)="viewProfile()" menuClose>\n        <ion-row class="padding-top-5"> \n            <ion-col col-3>\n                    <img src="assets/imgs/ic_avatar.png" class="user-image"> \n            </ion-col>\n            <ion-col col-7>\n                <div class="padding-top-10">\n                    <!-- Un comment the below lines for apis calls -->\n                        <!-- <label class="user-name"><b>{{userName}}</b></label><br>\n                        <label class="user-designation">{{designation}}</label> -->\n                        <label class="user-name"><b>Anand Raj</b></label><br>\n                        <label class="user-designation">Manager</label>\n                </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n                    <img src="assets/imgs/ic_arrow_forward.png" class="arrow-forward"> \n            </ion-col>\n        </ion-row>       \n    </div>\n  </ion-header>\n\n  <ion-content scroll="true" scrollbar-y="true"> \n    <ion-list no-lines class="padding-top-10">\n        <button ion-item menuClose  detail-none (click)="openPageTab(\'ContactsPage\')">\n            <img class="menu-image" [src]="checkActive(\'ContactPage\')? \'assets/imgs/ic_team_menu_selected\':\'assets/imgs/ic_team_menu.png\'" [class.activeHighlight]="checkActive(\'DashboardPage\')" />\n            <h3 class="menu-text" [class.activeHighlight]="checkActive(\'ContactPage\')"> My Team</h3>\n        </button>\n        <button ion-item menuClose  detail-none (click)="openPage(\'SettingsPage\')">\n            <img class="menu-image" [src]="checkActive(\'SettingsPage\')?\'assets/imgs/ic_settings_menu_selected.png\':\' assets/imgs/ic_settings_menu.png\'" [class.activeHighlight]="checkActive(\'DashboardPage\')" />\n            <h3 class="menu-text" [class.activeHighlight]="checkActive(\'SettingsPage\')"> Settings</h3>\n        </button>\n        <button ion-item menuClose  detail-none (click)="openPage(\'KeyinfoPage\')">\n            <img class="menu-image" [src]="checkActive(\'KeyinfoPage\')? \'assets/imgs/ic_keyinfo_menu_selected.png\':\'assets/imgs/ic_keyinfo_menu.png\'" [class.activeHighlight]="checkActive(\'DashboardPage\')" />\n            <h3 class="menu-text" [class.activeHighlight]="checkActive(\'KeyinfoPage\')"> Key Info</h3>\n        </button>\n        <button ion-item menuClose  detail-none (click)="openPage(\'FaqPage\')">\n            <img class="menu-image" [src]="checkActive(\'FaqPage\')? \'assets/imgs/ic_faq_menu_selected.png\':\'assets/imgs/ic_faq_menu.png\'" [class.activeHighlight]="checkActive(\'DashboardPage\')" />\n            <h3 class="menu-text" [class.activeHighlight]="checkActive(\'FaqPage\')"> FAQ</h3>\n        </button>\n\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n        <ion-toolbar color="footer">\n            <ion-title text-center>\n                <span class="footer-text">&#xA9; Copyright <b>IS3 Talk</b><br>\n                Powered by <b>Ignitho<sup>TM</sup></b></span>\n            </ion-title>\n        </ion-toolbar>\n      </ion-footer>\n\n      <!-- <user-menu></user-menu> -->\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_4__providers_generic_service_generic_service__["a" /* GenericServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_app_menu_controller__["a" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_network_check_network_check__["a" /* NetworkCheckProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_urls_api_urls__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthProvider = (function () {
    function AuthProvider(http, apis, event) {
        this.http = http;
        this.apis = apis;
        this.event = event;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.doLogin = function (req) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header = this.apis.createPostAuthorizationHeader(header);
        var requestOption = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        return this.http.post(this.apis.LOGIN_URL, JSON.stringify(req), requestOption).map(function (res) {
            if (res.status) {
                localStorage.setItem('token', res.headers.get('x-access-token'));
                _this.event.publish('tokenReceived', res.headers.get('x-access-token'));
            }
            return res.json();
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__api_urls_api_urls__["a" /* ApiUrlsProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(381);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[388]);
//# sourceMappingURL=main.js.map