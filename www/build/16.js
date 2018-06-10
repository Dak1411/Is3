webpackJsonp([16],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuddyChatPageModule", function() { return BuddyChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buddy_chat__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuddyChatPageModule = (function () {
    function BuddyChatPageModule() {
    }
    BuddyChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buddy_chat__["a" /* BuddyChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buddy_chat__["a" /* BuddyChatPage */]),
            ],
        })
    ], BuddyChatPageModule);
    return BuddyChatPageModule;
}());

//# sourceMappingURL=buddy-chat.module.js.map

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

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuddyChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chatservice_chatservice__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_events__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BuddyChatPage = (function () {
    function BuddyChatPage(navCtrl, navParams, chat, socket, event, popOver) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chat = chat;
        this.socket = socket;
        this.event = event;
        this.popOver = popOver;
        this.myStuff = '';
        this.recipient = '';
        this.message = [];
        this.sender = '';
        this.council = '';
        this.newMessage = '';
        this.getMessages().subscribe(function (message) {
            _this.message.push(message);
        });
        this.socket.on('sentMessage', function (data) {
            console.log(data);
        });
        this.socket.on('message', function (data) {
            _this.message.push(data);
        });
        // this.event.subscribe('sentMessage',data=>{
        //   console.log(data)
        // })
    }
    BuddyChatPage.prototype.ngOnInit = function () {
        try {
            this.recipient = this.navParams.get('user');
            this.sender = JSON.parse(localStorage.getItem('userProfile'));
            this.council = localStorage.getItem('council');
        }
        catch (error) {
        }
        console.log(this.recipient);
        this.chat.getFriendMessage();
    };
    BuddyChatPage.prototype.viewPopOver = function (ev) {
        var popover = this.popOver.create('PopOverPage', {
            category: ''
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
    BuddyChatPage.prototype.sendMessage = function () {
        if (this.newMessage) {
            var messageRequest = {
                'sender': this.sender.id,
                'recipient': this.recipient._id,
                'message_id': this.council + '_' + this.sender.id + '_' + Date.now(),
                'message': this.newMessage,
                'loca_time': new Date(),
            };
            this.socket.emit('newMessage', messageRequest);
            this.message.push(messageRequest);
            this.newMessage = '';
        }
        //this.chat.sendMessage(messageRequest);
    };
    BuddyChatPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('newMessage', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    BuddyChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__providers_disable_side_menu__["a" /* DisableSideMenu */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-buddy-chat',template:/*ion-inline-start:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\buddy-chat\buddy-chat.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{recipient.full_name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewPopOver($event)">\n        <img src="assets/imgs/ic_pop_over.png" alt="" class="pop-over" >\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list no-lines>\n    <ion-item *ngFor="let msg of message">\n      <p class="sender-class" *ngIf="msg.sender == sender.id">  {{msg.message}}</p>\n      <p class="receiver-class" *ngIf="msg.sender != sender.id">  {{msg.message}}</p>\n    </ion-item>\n</ion-list>\n\n\n</ion-content>\n<ion-footer no-border>\n  <ion-toolbar color="grey-color">\n    <ion-buttons end>\n        <button ion-button icon-only (click)="sendMessage()">\n          <!-- <ion-icon ios="ios-attach" md="md-attach"></ion-icon> -->\n          <img src="assets/imgs/ic_send_message.png" alt="" class="send-button">\n        </button>\n    </ion-buttons>\n    <ion-buttons left>\n      <button ion-button icon-only>\n        <img src="assets/imgs/ic_smiley.png" alt="" class="smiley">\n      </button>\n  </ion-buttons>\n  <!-- <ion-textarea placeholder="Type here" autosize></ion-textarea> -->\n  <ion-textarea type="text" [(ngModel)]="newMessage" placeholder="Type your message" class="message-field"></ion-textarea>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\user\Downloads\IS3 Latest Backup-20180609T052927Z-001\IS3 Latest Backup\src\pages\buddy-chat\buddy-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_chatservice_chatservice__["a" /* ChatserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_events__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */]])
    ], BuddyChatPage);
    return BuddyChatPage;
}());

//# sourceMappingURL=buddy-chat.js.map

/***/ })

});
//# sourceMappingURL=16.js.map