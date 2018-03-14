webpackJsonp([0],{

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qr_code_reader_qr_code_reader__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bluetooth_connect_bluetooth_connect__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemsPage = (function () {
    function ItemsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subPages = [
            { title: 'My Wallet', component: "" },
            { title: 'Games', component: "" },
            { title: 'Rewards', component: "" },
            { title: 'Game Reserve', component: "" },
            { title: 'My Offers', component: "" },
            { title: 'Beverage', component: "" },
            { title: 'My Calendar', component: "" },
            { title: 'Wayfinder', component: "" },
            { title: 'Property Info', component: "" },
            { title: 'Call Attendant', component: "" },
            { title: 'Test Page', component: "" }
        ];
        // new slider content
        this.slidesImage = [
            {
                image: "assets/img/dark/banner-a.png",
            },
            {
                image: "assets/img/dark/banner-1.png",
            },
            {
                image: "assets/img/dark/banner-2.png",
            }
        ];
        this.currentUser = {};
        this.walletCash = {};
        this.walletPoints = {};
        this.walletPromo = {};
        this.bubbleBurstOffer = {};
        this.rewardsQuestOffer = {};
    }
    ItemsPage.prototype.openQr = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__qr_code_reader_qr_code_reader__["a" /* QrCodeReaderPage */]);
    };
    ItemsPage.prototype.openBle = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__bluetooth_connect_bluetooth_connect__["a" /* BluetoothConnectPage */]);
    };
    ItemsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemsPage');
    };
    ItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-items',template:/*ion-inline-start:"D:\My Ionic Projects\MobileConciergePWA\src\pages\items\items.html"*/'<ion-header>\n  <ion-toolbar>\n    <button menuToggle ion-button icon-only left>\n          <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    <ion-title text-center> <img src="assets/img/dark/HardRockLogo.png" class="title-image" /> </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="home-page" no-scroll>\n  <ion-slides pager class="dashboard_slider" autoplay="4000" loop="true" speed="1000">\n    <ion-slide *ngFor="let slide of slidesImage">\n      <img [src]="slide.image" class="slide-image" />\n      <p>{{ slide.image }} </p>\n    </ion-slide>\n  </ion-slides>\n  <ion-grid class="container_help text-uppercase">\n    <ion-row>\n      <ion-col col-3 class="bg-gray cardin-status">\n        <div class="text-gray2">Status</div>\n        <span class="cardin" [ngClass]="{\'active\': true }"></span>\n        <span>{{(true)?"Online":"Offline"}}</span>\n      </ion-col>\n      <ion-col col-9 class="quick-connect">\n        <card-in-out></card-in-out>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <button ion-button (click)="openQr()">Open QR</button>\n      </ion-col>\n      <ion-col>\n          <button ion-button (click)="openBle()">Open BLE</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="carded-dtls" no-padding>\n    <ion-row>\n      <ion-col>\n        <div class="walletimg_bg">\n          <ion-grid class="membership">\n            <ion-row>\n              <ion-col class="name-on-card">{{ (currentUser?.first_name) ? currentUser?.first_name : "Guest" }}</ion-col>\n            </ion-row>\n            <ion-row class="card-number">\n              <ion-col text-right><strong>0000012345</strong></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class="text-uppercase card-copyrights" text-right>&copy; 2017, Casino6601 International, Inc.</ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="dashboard_grid">\n    <ion-row class="account-info-container">\n      <ion-col col-4>\n        <div class="account-info text-uppercase">\n          <span class="text-gray2">Cash</span>\n          <p no-margin>{{ walletCash?.FormattedAmount }}</p>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div class="account-info text-uppercase divider">\n          <span class="text-gray2">Points</span>\n          <p no-margin>{{ walletPoints?.Amount }}</p>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div class="account-info text-uppercase">\n          <span class="text-gray2">Promo</span>\n          <p no-margin>{{ walletPromo?.FormattedAmount }}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="tiles activity-tiles">\n        <img src="assets/img/bubble-burst.png" />\n        <h6>{{ bubbleBurstOffer?.QualificationRatio }}% Completed</h6>\n        <div class="progress">\n          <div class="progress-bar" role="progressbar" [style.width]="bubbleBurstOffer?.QualificationRatio+\'%\'"></div>\n        </div>\n      </ion-col>\n      <ion-col class="tiles activity-tiles">\n        <img src="assets/img/HalloweenPrizeHarvest.png" />\n        <h6> {{ rewardsQuestOffer?.completedNodes }}/{{rewardsQuestOffer?.totalNodes }} Completed</h6>\n        <div class="progress">\n          <div class="progress-bar" role="progressbar" [style.width]="rewardsQuestOffer?.QualificationRatio+\'%\'"></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row *ngFor="let item of currentItems | chunk:3; let i = index"> -->\n    <ion-row *ngFor="let item of currentItems; let i = index">\n      <ng-container *ngFor="let card of item; let j = index">\n        <ion-col class="tiles">\n          <button (click)="openItem(card)" *ngIf="!card.empty" class="button button-icon">\n                  <i class="material-icons md-icon">{{card.cssClass}}</i>\n                  <h6>{{card.name}}</h6>\n                  </button>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\My Ionic Projects\MobileConciergePWA\src\pages\items\items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ItemsPage);
    return ItemsPage;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCodeReaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QrCodeReaderPage = (function () {
    function QrCodeReaderPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.camStarted = false;
        this.availableDevices = [];
        this.consoleLog = "";
        this.currentIndex = 0;
    }
    QrCodeReaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QrCodeReaderPage');
    };
    QrCodeReaderPage.prototype.displayCameras = function (cameras) {
        var _this = this;
        debugger;
        if (cameras && cameras.length) {
            this.consoleLog += "Available Options" + "<br>";
            cameras.forEach(function (element) {
                _this.consoleLog += element.deviceId + " - " + element.label + "<br>";
            });
            this.currentIndex = 0;
            this.availableDevices = cameras;
            this.selectedDevice = cameras[0];
            this.camStarted = true;
        }
        else {
            this.consoleLog += "No Cameras" + "<br>";
        }
    };
    QrCodeReaderPage.prototype.handleQrCodeResult = function (result) {
        if (result) {
            this.consoleLog += result + "<br>";
            alert(result);
        }
    };
    QrCodeReaderPage.prototype.onChange = function (device) {
        this.consoleLog += device.label + "<br>";
        this.selectedDevice = device;
        this.camStarted = true;
    };
    QrCodeReaderPage.prototype.swap = function () {
        var total = this.availableDevices.length;
        if (total >= 2) {
            var curr = this.currentIndex;
            var swapped = (total - curr + 1) % total;
            this.currentIndex = swapped;
            this.consoleLog += swapped + "<br>";
            this.selectedDevice = this.availableDevices[swapped];
        }
    };
    QrCodeReaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qr-code-reader',template:/*ion-inline-start:"D:\My Ionic Projects\MobileConciergePWA\src\pages\qr-code-reader\qr-code-reader.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>QrCodeReader</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="absolute-box">\n    <button ion-button small (click)="swap()">Swap</button>\n    <small [innerHTML]="consoleLog"></small>\n    <!-- <select style="float: right;" [(ngModel)]="selectedDevice" (change)="onChange($event.target.value)">\n        <option *ngFor="let device of availableDevices" [ngValue]="device">{{ device.label }}</option>\n      </select> -->\n  </div>\n  <div class="absolute-focus">&nbsp;</div>\n  <ngx-zxing [device]="selectedDevice" cssClass="small-video" (camerasFound)="displayCameras($event)" (scanSuccess)="handleQrCodeResult($event)"></ngx-zxing>\n\n</ion-content>'/*ion-inline-end:"D:\My Ionic Projects\MobileConciergePWA\src\pages\qr-code-reader\qr-code-reader.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QrCodeReaderPage);
    return QrCodeReaderPage;
}());

//# sourceMappingURL=qr-code-reader.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothConnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ble_connectivity_ble_connectivity__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { BluetoothCore } from '@manekinekko/angular-web-bluetooth'
var BluetoothConnectPage = (function () {
    function BluetoothConnectPage(navCtrl, navParams, bleConnect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bleConnect = bleConnect;
        this.devices = "Devices";
    }
    BluetoothConnectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BluetoothConnectPage');
    };
    BluetoothConnectPage.prototype.startScan = function () {
        var _this = this;
        this.bleConnect.findNearbyDevices()
            .then(function (devices) {
            _this.devices += JSON.stringify(devices);
            alert(devices);
        })
            .catch(function (err) {
            _this.devices += err;
        });
    };
    BluetoothConnectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bluetooth-connect',template:/*ion-inline-start:"D:\My Ionic Projects\MobileConciergePWA\src\pages\bluetooth-connect\bluetooth-connect.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>BluetoothConnect</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block (click)="startScan()">Scan for Devices</button>\n  <div>\n    <span>{{ devices }}</span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\My Ionic Projects\MobileConciergePWA\src\pages\bluetooth-connect\bluetooth-connect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ble_connectivity_ble_connectivity__["a" /* BleConnectivityProvider */]])
    ], BluetoothConnectPage);
    return BluetoothConnectPage;
}());

//# sourceMappingURL=bluetooth-connect.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BleConnectivityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BleConnectivityProvider = (function () {
    function BleConnectivityProvider() {
    }
    BleConnectivityProvider.prototype.findNearbyDevices = function () {
        if (navigator.bluetooth) {
            return navigator.bluetooth.requestDevice({
                acceptAllDevices: true,
                optionalServices: ['battery_service']
            });
        }
        return Promise.reject("Bluetooth is Not Available");
    };
    BleConnectivityProvider.prototype.connectToDevice = function (device) {
        return device.gatt.connect();
    };
    BleConnectivityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BleConnectivityProvider);
    return BleConnectivityProvider;
}());

//# sourceMappingURL=ble-connectivity.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(263);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_items_items__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_card_in_out_card_in_out__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_chunk_chunk__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__zxing_ngx_scanner__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_qr_code_reader_qr_code_reader__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_ble_connectivity_ble_connectivity__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bluetooth_connect_bluetooth_connect__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_items_items__["a" /* ItemsPage */],
                __WEBPACK_IMPORTED_MODULE_6__components_card_in_out_card_in_out__["a" /* CardInOutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_chunk_chunk__["a" /* ChunkPipe */],
                __WEBPACK_IMPORTED_MODULE_9__pages_qr_code_reader_qr_code_reader__["a" /* QrCodeReaderPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bluetooth_connect_bluetooth_connect__["a" /* BluetoothConnectPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__zxing_ngx_scanner__["a" /* NgxZxingModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_items_items__["a" /* ItemsPage */],
                __WEBPACK_IMPORTED_MODULE_6__components_card_in_out_card_in_out__["a" /* CardInOutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_qr_code_reader_qr_code_reader__["a" /* QrCodeReaderPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bluetooth_connect_bluetooth_connect__["a" /* BluetoothConnectPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_ble_connectivity_ble_connectivity__["a" /* BleConnectivityProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_items_items__ = __webpack_require__(208);
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
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_items_items__["a" /* ItemsPage */];
        this.profileService = {};
        this.pages = [
            { title: 'Home', icon: 'icon-home', component: __WEBPACK_IMPORTED_MODULE_1__pages_items_items__["a" /* ItemsPage */], isDefault: true },
            { title: 'Offers', icon: 'icon-offer', component: "", isDefault: false },
            { title: 'Calendar', icon: 'icon-calendar', component: "", isDefault: false },
            { title: 'Social Share', icon: 'icon-share', component: "", isDefault: false },
            { title: 'Virtual Assistant', icon: 'icon-virtual-assistant', component: "", isDefault: true },
            { title: 'Resposible Gaming', icon: 'icon-responsible', component: "", isDefault: true },
            { title: 'Help', icon: 'ios-help-circle-outline', component: "", isDefault: true },
            { title: 'Contact Us', icon: 'ios-call-outline', component: "", isDefault: true },
            { title: 'Privacy Policy', icon: 'icon-privacy-policy', component: "", isDefault: true },
            { title: 'Test Page', icon: 'icon-share', component: "" }
        ];
        this.currentUser = {};
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\My Ionic Projects\MobileConciergePWA\src\app\app.html"*/'\n<ion-menu [content]="content" class="side_menu">\n    <ion-header class="side_menu_header">\n        <ion-card class="prop_bg">\n            <ion-icon ios="ios-arrow-back" md="ios-arrow-back" class="bigger_icon" (click)="closeSideMenu()"></ion-icon>\n            <ion-avatar item- class="profile_avatar_holder">\n                <img [src]="currentUser?.picture" class="image_element profile_avatar" default="assets/img/avatar-default.png">\n            </ion-avatar>\n        </ion-card>\n        <ion-card class="name_card">\n            <ion-item class="inner">\n                <h3><span class="med">Welcome,</span>\n                    <div class="large">{{ (currentUser.first_name) ? currentUser?.first_name : "Guest" }}</div>\n                </h3>\n                <h4>12345 - Platinum</h4>\n            </ion-item>\n        </ion-card>\n    </ion-header>\n    <ion-content class="side_menu_content">\n        <div item-height="10"></div>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of sideBarPages" (click)="openPage(p)">\n                 <i class="material-icons md-icon">{{p.icon}}</i>\n                 <span class="side_menu_link">{{p.title}} </span>\n        </button>\n            <button ion-item (click)="logoutApp()">                \n                <ion-icon name="ios-log-out-outline"></ion-icon><span class="side_menu_link">LOGOUT</span>         \n        </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav #content [root]="rootPage" class="dark-theme"></ion-nav>\n\n\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->'/*ion-inline-end:"D:\My Ionic Projects\MobileConciergePWA\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\My Ionic Projects\MobileConciergePWA\src\pages\home\home.html"*/'<h1>Hello World!!!</h1>'/*ion-inline-end:"D:\My Ionic Projects\MobileConciergePWA\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardInOutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the CardInOutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CardInOutComponent = (function () {
    function CardInOutComponent() {
        console.log('Hello CardInOutComponent Component');
        this.text = 'Hello World';
    }
    CardInOutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'card-in-out',template:/*ion-inline-start:"D:\My Ionic Projects\MobileConciergePWA\src\components\card-in-out\card-in-out.html"*/'<div>\n  <button ion-button class="btn  btn-primary" (click)="cardInOut()">Connect To Slot</button>\n</div>'/*ion-inline-end:"D:\My Ionic Projects\MobileConciergePWA\src\components\card-in-out\card-in-out.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CardInOutComponent);
    return CardInOutComponent;
}());

//# sourceMappingURL=card-in-out.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChunkPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChunkPipe = (function () {
    function ChunkPipe() {
    }
    ChunkPipe.prototype.transform = function (value, n) {
        if (value) {
            return this.chunk(value.filter(function (item) { return item.IsVisible; }), n);
        }
    };
    ChunkPipe.prototype.chunk = function (arr, n) {
        var newArr = [];
        var nestedArr = [];
        for (var i = 1; i <= arr.length; i++) {
            nestedArr.push(arr[i - 1]);
            if (i % n === 0) {
                newArr.push(nestedArr);
                nestedArr = [];
            }
        }
        if (nestedArr.length > 0) {
            newArr.push(nestedArr);
        }
        return newArr;
    };
    ChunkPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'chunk'
        })
    ], ChunkPipe);
    return ChunkPipe;
}());

//# sourceMappingURL=chunk.js.map

/***/ })

},[238]);
//# sourceMappingURL=main.js.map