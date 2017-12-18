webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n    margin: 50px;\n}\n\nh1,\nh3,\nh6 {\n    text-align: center;\n}\n\n.filterInput {\n    text-align: center;\n}\n\nimg {\n    margin: 15px;\n    width: 89%;\n    height: 300px;\n}\n\n.quote {\n    font-style: oblique;\n    font-weight: bolder;\n}\n\n.card-info {\n    height: 100px;\n}\n\n.card {\n    border: 2px solid black;\n    margin: 5px;\n}\n\n.card-footer {\n    margin: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- nav bar -->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n            <h1 class='navbar-nav'>Collectible Clerics</h1>\n        </div>\n        <div class=\"navbar-right collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li *ngIf=\"currentUser == false\"><a class=\"nav-link\" routerLink=\"/\">Home</a></li>\n                <li *ngIf=\"currentUser != false\"><a class=\"nav-link\" routerLink=\"/theodex\">Theodex</a></li>\n                <li *ngIf=\"currentUser != false\"><a class=\"nav-link\" routerLink=\"/profile\">Profile</a></li>\n                <li *ngIf=\"currentUser != false\"><button (click)=logout() type=\"button\" class=\"btn btn-xs navbar-btn\"><a href=\"/logout\" class=\"nav-link\">Logout</a></button></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<main>\n    <h2>Theological Meets Digital</h2>\n    <p>Theologians consider the divine deeply and critically. From that process comes theology. The cards in this deck were inspired by Dr. James Cone's Intro to Systematic Theology course at <a href=\"utsnyc.edu\">Union Theological Seminary in the city of New York</a>.\n        He emphasized that each of us have a theology. What's yours?</p>\n    <div class=\"row\">\n        <div class=\"col-xs-offset-2 col-sm-offset-3 col-md-offset-4 col-lg-offset-4 col-xs-10 col-sm-9 col-md-8 col-lg-8\">\n            <div *ngFor=\"let card of cards | search: filter\" class=\"card\" style=\"width: 30rem;\">\n                <img class=\"card-img-top\" src=\"{{card.imageUrl}}\" alt=\"Picture of theologian\">\n                <div class=\"card-block card-info\">\n                    <h1 class=\"card-title\">{{card.name}}</h1>\n                </div>\n                <div class=\"card-footer\">\n                    <h2>#{{card.number}}</h2>\n                    <h5>{{card.theology}}</h5>\n                    <hr>\n                </div>\n            </div>\n        </div>\n    </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_card_service__ = __webpack_require__("../../../../../src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_card__ = __webpack_require__("../../../../../src/app/data/card.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutComponent = (function () {
    function AboutComponent(_user, _card, _router) {
        this._user = _user;
        this._card = _card;
        this._router = _router;
        this.filter = new __WEBPACK_IMPORTED_MODULE_4__data_card__["a" /* Card */]();
        this.cards = [];
        this.users = [];
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter.name = "James H. Cone";
        this._user.getCurrentUser()
            .then(function (user) {
            _this.currentUser = user;
        })
            .catch(function (error) {
            _this.currentUser = false;
            console.log('error getting current user: ', error);
        });
        this._card.showAllCards()
            .then(function (cards) {
            console.log('all cards retrieved: ', cards);
            _this.cards = cards;
        })
            .catch(function (error) { return console.log('error showing all cards: ', error); });
        this._user.showAll()
            .then(function (users) {
            console.log('all users retrieved: ', users);
            _this.users = users;
        })
            .catch(function (error) { return console.log('error showing all users: ', error); });
    };
    AboutComponent.prototype.logout = function () {
        var _this = this;
        console.log('logging out');
        // this._router.navigate(['/logoutUser']);
        this._user.logoutUser()
            .then(function () {
            _this._router.navigate(['/']);
        })
            .catch(function (error) { return console.log('error logging out: ', error); });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AboutComponent);

var _a, _b, _c;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__log_reg_log_reg_component__ = __webpack_require__("../../../../../src/app/log-reg/log-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theodex_theodex_component__ = __webpack_require__("../../../../../src/app/theodex/theodex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__log_reg_log_reg_component__["a" /* LogRegComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'theodex',
        component: __WEBPACK_IMPORTED_MODULE_7__theodex_theodex_component__["a" /* TheodexComponent */]
    },
    {
        path: 'user/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__user_user_component__["a" /* UserComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'card/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__card_card_component__["a" /* CardComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log_reg_log_reg_component__ = __webpack_require__("../../../../../src/app/log-reg/log-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theodex_theodex_component__ = __webpack_require__("../../../../../src/app/theodex/theodex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_card_service__ = __webpack_require__("../../../../../src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_pipe__ = __webpack_require__("../../../../../src/app/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__log_reg_log_reg_component__["a" /* LogRegComponent */],
            __WEBPACK_IMPORTED_MODULE_7__theodex_theodex_component__["a" /* TheodexComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_9__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__search_pipe__["a" /* SearchPipe */], __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_13__services_card_service__["a" /* CardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n    margin: 50px;\n}\n\nh1,\nh3,\nh6 {\n    text-align: center;\n}\n\n.filterInput {\n    text-align: center;\n}\n\nimg {\n    margin: 10px;\n    width: 97%;\n    height: 60rem;\n}\n\n.quote {\n    font-style: oblique;\n    font-weight: bolder;\n}\n\n.card-info {\n    height: 100%;\n    margin: 0px 10px;\n}\n\n.card {\n    border: 2px solid black;\n    margin: 5px;\n}\n\n.card-columns {\n    margin-left: 50px;\n}\n\nbutton {\n    margin-bottom: 10px;\n}\n\n.card-footer {\n    height: 165px;\n    margin: 0px 10px;\n}\n\n.collect-button {\n    margin-left: 44%;\n}\n\n.remove-button {\n    margin-left: 37%;\n}\n\n.crop {\n    width: 510px;\n    height: 315px;\n    overflow: hidden;\n}\n\n.crop img {\n    width: 203%;\n    height: 494px;\n    margin: -176px 0px 0px 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- nav bar -->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            </button>\n            <h1 class='navbar-nav'>Collectible Clerics</h1>\n        </div>\n        <div class=\"navbar-right collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n                <li><a class=\"nav-link\" routerLink=\"/theodex\">Theodex</a></li>\n                <li><a class=\"nav-link\" routerLink=\"/profile\">Profile</a></li>\n                <li><button type=\"button\" class=\"btn btn-xs navbar-btn\"><a href=\"/logout\" class=\"nav-link\">Logout</a></button></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<main>\n    <div class=\"row\">\n        <div class=\"col-xs-offset-1 col-sm-offset-1 col-md-offset-2 col-lg-offset-2 col-xs-10 col-sm-9 col-md-8 col-lg-8\">\n            <div class=\"card\" style=\"width: 100%;\">\n                <div *ngIf=\"card.name == 'Arvind P. Nirmal'\" class=\"crop\">\n                    <img class=\"card-img-top\" src=\"{{card.imageUrl}}\" alt=\"Picture of theologian\">\n                </div>\n                <img *ngIf=\"card.name != 'Arvind P. Nirmal'\" class=\"card-img-top\" src=\"{{card.imageUrl}}\" alt=\"Picture of theologian\">\n                <div class=\"card-block card-info\">\n                    <h1 class=\"card-title\">{{card.name}}</h1>\n                    <p class=\"card-text quote\">{{card.quote}}</p>\n                    <p class=\"card-text\">{{card.bio}}</p>\n                    <br>\n                    <p><a href=\"{{card.link}}\">Click here</a> for more details on {{card.name}}. </p>\n                </div>\n                <div class=\"card-footer\">\n                    <h2>#{{card.number}}</h2>\n                    <h5>{{card.theology}}</h5>\n                    <hr>\n                    <button *ngIf=\"userCardIDs.indexOf(card._id) === -1\" class=\"collect-button btn btn-primary\" (click)=\"collectCard(card)\">Collect</button>\n                    <h6 *ngIf=\"userCardIDs.indexOf(card._id) != -1\">You have collected this card!</h6>\n                    <button *ngIf=\"userCardIDs.indexOf(card._id) != -1\" class=\"remove-button btn btn-primary\" (click)=\"removeCard(card)\">Remove from Collection</button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <h3>Collectors of this card: </h3>\n    <div *ngFor=\"let user of card.collectors\">\n        <h3 *ngIf=\"user._id != currentUser._id\"><a class=\"nav-link\" [routerLink]=\"['/user', user._id]\">{{user.username}}</a></h3>\n        <h3 *ngIf=\"user._id === currentUser._id\"><a class=\"nav-link\" routerLink=\"/profile\">{{user.username}}</a></h3>\n    </div>\n\n</main>"

/***/ }),

/***/ "../../../../../src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_card_service__ = __webpack_require__("../../../../../src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_user__ = __webpack_require__("../../../../../src/app/data/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_card__ = __webpack_require__("../../../../../src/app/data/card.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardComponent = (function () {
    function CardComponent(_router, _route, _user, _card) {
        var _this = this;
        this._router = _router;
        this._route = _route;
        this._user = _user;
        this._card = _card;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__data_user__["a" /* User */]();
        this.card = new __WEBPACK_IMPORTED_MODULE_5__data_card__["a" /* Card */]();
        this.userCards = [];
        this.userCardIDs = [];
        this._route.params.subscribe(function (param) {
            console.log('param: ', param);
            _this.cardID = param.id;
            console.log('card  id: ', _this.cardID);
        });
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user.getCurrentUser()
            .then(function (user) {
            _this.currentUser = user;
            _this.userCards = user.cardCollection;
            _this.userCardIDs = _this.userCards.map(function (e) { return e._id; });
        })
            .catch(function (error) { return console.log('error getting current user: ', error); });
        this._card.showOneCard(this.cardID)
            .then(function (card) {
            _this.card = card;
        })
            .catch(function (error) { return console.log('error showing card: ', error); });
    };
    CardComponent.prototype.collectCard = function (card) {
        var _this = this;
        this._card.addCollector(card, this.currentUser._id)
            .then(function () {
            console.log('collector added to card');
            _this._user.getCurrentUser()
                .then(function (user) {
                _this.currentUser = user;
                _this.userCards = user.cardCollection;
                _this.userCardIDs = _this.userCards.map(function (e) { return e._id; });
            })
                .then(function () {
                _this._card.showOneCard(card._id)
                    .then(function (oneCard) {
                    _this.card = oneCard;
                    _this.cardID = _this.card._id;
                })
                    .catch(function (error) { return console.log('error showing card: ', error); });
            })
                .catch(function (error) { return console.log('error getting current user: ', error); });
        })
            .catch(function (error) { return console.log('error adding collector to card: ', error); });
    };
    CardComponent.prototype.logout = function () {
        var _this = this;
        console.log('logging out');
        // this._router.navigate(['/logoutUser']);
        this._user.logoutUser()
            .then(function () {
            _this._router.navigate(['/']);
        })
            .catch(function (error) { return console.log('error logging out: ', error); });
    };
    CardComponent.prototype.removeCard = function (card) {
        var _this = this;
        this._card.removeCollector(card, this.currentUser)
            .then(function () {
            console.log('collector added to card');
            _this._user.getCurrentUser()
                .then(function (user) {
                _this.currentUser = user;
                _this.userCards = user.cardCollection;
                _this.userCardIDs = _this.userCards.map(function (e) { return e._id; });
            })
                .catch(function (error) { return console.log('error getting current user: ', error); });
        })
            .then(function () {
            _this._card.showOneCard(card._id)
                .then(function (oneCard) {
                _this.card = oneCard;
                _this.cardID = _this.card._id;
            })
                .catch(function (error) { return console.log('error showing one card: ', error); });
        })
            .catch(function (error) { return console.log('error removing collector from card: ', error); });
    };
    return CardComponent;
}());
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-card',
        template: __webpack_require__("../../../../../src/app/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/card/card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */]) === "function" && _d || Object])
], CardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dashboard {\n    margin: 50px;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\nimg {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- nav bar -->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n            <h1 class='navbar-nav'>Collectible Clerics</h1>\n        </div>\n        <div class=\"navbar-right collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n                <li><a class=\"nav-link\" routerLink=\"/theodex\">Theodex</a></li>\n                <li><a class=\"nav-link\" routerLink=\"/profile\">Profile</a></li>\n                <li><button (click)=logout() type=\"button\" class=\"btn btn-xs navbar-btn\"><a href=\"/logout\" class=\"nav-link\">Logout</a></button></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div id=\"dashboard\">\n    <h1>Dashboard</h1>\n    <br>\n    <h3>Cleric Cards</h3>\n\n    <form (submit)=\"createCard(newCard)\" #newCard=\"ngForm\">\n        <input type=\"text\" name=\"number\" #number=\"ngModel\" [(ngModel)]=\"newCard.number\" placeholder=\"Card Number\">\n        <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"newCard.name\" placeholder=\"Card name\">\n        <input type=\"text\" name=\"theology\" #theology=\"ngModel\" [(ngModel)]=\"newCard.theology\" placeholder=\"Card Theology\">\n        <input type=\"text\" name=\"quote\" #quote=\"ngModel\" [(ngModel)]=\"newCard.quote\" placeholder=\"Card Quote\">\n        <input type=\"text\" name=\"bio\" #bio=\"ngModel\" [(ngModel)]=\"newCard.bio\" placeholder=\"Card Bio\">\n        <input type=\"text\" name=\"link\" #link=\"ngModel\" [(ngModel)]=\"newCard.link\" placeholder=\"Card Link\">\n        <input type=\"text\" name=\"imageUrl\" #imageUrl=\"ngModel\" [(ngModel)]=\"newCard.imageUrl\" placeholder=\"Card Image Url\">\n        <!-- NEED TO FIGURE OUT HOW TO HANDLE THIS DATA. -->\n        <!-- <label *ngFor=\"let user of users\" class=\"checkbox\"><input\n        type=\"checkbox\" name=\"users\" #collectors=\"ngModel\" [(ngModel)]=\"newCard.users\" placeholder=\"Card Collectors\" value=\"user._id\">{{user.username}}</label> -->\n        <button>Create Card</button>\n    </form>\n    <br>\n    <table class=\".table-striped .table-bordered\">\n        <thead>\n            <tr>\n                <th>Number</th>\n                <th>Name</th>\n                <th>Theology</th>\n                <th>Quote</th>\n                <th>Bio</th>\n                <th>Link</th>\n                <th>Image Url</th>\n                <th>Collectors</th>\n                <th>Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let card of cards\">\n                <td>{{card.number}}</td>\n                <td>{{card.name}}</td>\n                <td>{{card.theology}}</td>\n                <td>{{card.quote}}</td>\n                <td>{{card.bio}}</td>\n                <td>{{card.link}}</td>\n                <td><img class=\"img-fluid\" src=\"{{card.imageUrl}}\" alt=\"Picture of theologian\">\n                <p>{{card.imageUrl}}</p></td>\n                <td>\n                    <ul>\n                        <li *ngFor=\"let user of card.collectors\">{{user.username}} <button class=\"btn btn-xs\" (click)=\"deleteCollector(card, user)\">Delete Collector</button></li>\n                    </ul>\n                </td>\n                <td>\n                    <!-- Button trigger modal for Edit Card -->\n                    <button (click)=\"editCardTemplate(card)\" class=\"btn btn-xs\" data-toggle=\"modal\" data-target=\"#editCardModal\">Edit</button>\n                    <!-- Button trigger modal for add collector to card -->\n                    <button class=\"btn btn-xs\" (click)=\"editCardTemplate(card)\" data-toggle=\"modal\" data-target=\"#addCollectorModal\">Add Collector</button>\n                    <button class=\"btn btn-xs\" (click)=\"deleteCard(card._id)\">Delete</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <!-- Modal for editing card -->\n    <div class=\"modal fade\" id=\"editCardModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editCardModelLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"editCardModalLabel\">Edit {{editedCard.name}} Card</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form id=\"editCard\" #editCard=\"ngForm\" (submit)=\"updateCard(editCard)\">\n                        <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"editedCard.name\" placeholder=\"{{editedCard.name}}\">\n                        <input type=\"text\" name=\"theology\" #theology=\"ngModel\" [(ngModel)]=\"editedCard.theology\" placeholder=\"{{editedCard.theology}}\">\n                        <input type=\"text\" name=\"quote\" #quote=\"ngModel\" [(ngModel)]=\"editedCard.quote\" placeholder=\"{{editedCard.quote}}\">\n                        <input type=\"text\" name=\"bio\" #bio=\"ngModel\" [(ngModel)]=\"editedCard.bio\" placeholder=\"{{editedCard.bio}}\">\n                        <input type=\"text\" name=\"number\" #number=\"ngModel\" [(ngModel)]=\"editedCard.number\" placeholder=\"{{editedCard.number}}\">\n                        <input type=\"text\" name=\"link\" #link=\"ngModel\" [(ngModel)]=\"editedCard.link\" placeholder=\"{{editedCard.link}}\">\n                        <input type=\"text\" name=\"imageUrl\" #imageUrl=\"ngModel\" [(ngModel)]=\"editedCard.imageUrl\" placeholder=\"{{editedCard.imageUrl}}\">\n                        <!-- Figure out how to add and remove collectors using checkboxes from the input field for each card -->\n                        <!-- <label *ngFor=\"let user of users\" class=\"checkbox\"><input value=\"{{user._id}}\" type=\"checkbox\" name=\"users\" #users=\"ngModel\" [(ngModel)]=\"user._id\" >{{user.username}}</label> -->\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\" form=\"editCard\">Save changes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Modal for adding collector to card -->\n    <div class=\"modal fade\" id=\"addCollectorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addCollectorModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"addCollectorModalLabel\">Add Collector to {{editedCard.name}}'s Card</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form id=\"addCollector\" #addCollector=\"ngForm\" (submit)=\"addCollectorToCard(addCollector)\">\n                        <!-- Figure out how to add and remove collectors using checkboxes from the input field for each card -->\n                        <label *ngFor=\"let user of users\" class=\"checkbox\"></label>\n                        <select name=\"collector\" #collector=\"ngModel\" [(ngModel)]=\"editedCard.collector\">\n                            <option value=\"\" disabled selected=\"selected\">Select...</option>\n                            <option *ngFor=\"let user of users\" value=\"{{user._id}}\">{{user.username}}</option>\n                        </select>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\" form=\"addCollector\">Save changes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>\n    <h3>Collectors</h3>\n    <form (submit)=submitRegister(register.value) #register=\"ngForm\">\n        <select name=\"status\" id=\"status\" #status=\"ngModel\" [(ngModel)]=\"registerUser.status\">\n                <option value=\"admin\">Admin</option>\n                <option value=\"user\">User</option>\n            </select>\n        <input type=\"text\" name=\"username\" placeholder=\"username\" id=\"username\" required #username=\"ngModel\" [(ngModel)]=\"registerUser.username\">\n        <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"email\" required #email=\"ngModel\" [(ngModel)]=\"registerUser.email\">\n        <input type=\"password\" name=\"password\" placeholder=\"password\" id=\"password\" required minlength=\"6\" #password=\"ngModel\" [(ngModel)]=\"registerUser.password\">\n        <input type=\"password\" name=\"passwordConfirmation\" placeholder=\"password confirmation\" id=\"passwordConfirmation\" required #passwordConfirmation=\"ngModel\" [(ngModel)]=\"pwd_conf\">\n        <button class=\"btn btn-lg btn-success\" [disabled]=\"register.invalid\">Register</button>\n    </form>\n    <table class=\".table-striped .table-bordered\">\n        <thead>\n            <tr>\n                <th>Username</th>\n                <th>Email</th>\n                <th>Status</th>\n                <th>Card Collection</th>\n                <th>Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let user of users\">\n                <td>{{user.username}}</td>\n                <td>{{user.email}}</td>\n                <td>{{user.status}}</td>\n                <td>\n                    <ul>\n                        <li *ngFor=\"let card of user.cardCollection\">{{card.name}} <button class=\"btn btn-xs\" (click)=\"deleteCardCollection(user, card)\">Delete Card from Collection</button></li>\n                    </ul>\n                </td>\n                <td>\n                    <button (click)=\"editUserTemplate(user)\" class=\"btn btn-xs\" data-toggle=\"modal\" data-target=\"#editUserModal\">Edit</button>\n                    <button (click)=\"deleteUser(user._id)\" class=\"btn btn-xs\">Delete</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <!-- Modal for editing user -->\n    <div class=\"modal fade\" id=\"editUserModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editUserModelLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"editUserModalLabel\">Edit {{editedUser.username}} Card</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form id=\"editUser\" #editUser=\"ngForm\" (submit)=\"updateUser(editUser, $event)\">\n                        <input type=\"text\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"editedUser.username\" placeholder=\"{{editedUser.username}}\">\n                        <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"editedUser.email\" placeholder=\"{{editedUser.email}}\">\n                        <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"editedUser.password\" placeholder=\"Password\">\n                        <input type=\"password\" name=\"passwordConfirmation\" #passwordConfirmation=\"ngModel\" [(ngModel)]=\"pw_conf\" placeholder=\"Password Confirmation\">\n                        <select name=\"userStatus\" id=\"userStatus\" #userStatus=\"ngModel\" [(ngModel)]=\"editedUser.status\">\n                                <option value=\"admin\">Admin</option>\n                                <option value=\"user\">User</option>\n                            </select>\n                        <!-- Figure out how to add and remove cards using checkboxes from the input field for each card -->\n                        <label *ngFor=\"let card of cards\" class=\"checkbox\"><input value=\"{{card._id}}\" type=\"checkbox\" name=\"cardCollection\" #cardCollection=\"ngModel\" [(ngModel)]=\"card._id\">{{card.name}}</label>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\" form=\"editUser\" data-dismiss=\"modal\">Save changes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_card_service__ = __webpack_require__("../../../../../src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_card__ = __webpack_require__("../../../../../src/app/data/card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_user__ = __webpack_require__("../../../../../src/app/data/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(_router, _card, _user) {
        this._router = _router;
        this._card = _card;
        this._user = _user;
        this.newCard = new __WEBPACK_IMPORTED_MODULE_4__data_card__["a" /* Card */]();
        this.editedCard = new __WEBPACK_IMPORTED_MODULE_4__data_card__["a" /* Card */]();
        this.editedUser = new __WEBPACK_IMPORTED_MODULE_5__data_user__["a" /* User */]();
        this.cards = [];
        this.users = [];
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_5__data_user__["a" /* User */]();
        this.registerUser = new __WEBPACK_IMPORTED_MODULE_5__data_user__["a" /* User */]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('in ngonit');
        this._user.getCurrentUser()
            .then(function (user) {
            _this.currentUser = user;
            console.log('current user id: ', _this.currentUser._id);
        })
            .catch(function (error) { return console.log('error getting current user: ', error); });
        this._user.showAll()
            .then(function (users) {
            console.log('******users have been retrieved: ', users);
            _this.users = users;
        })
            .catch(function (error) { return console.log('error showing all users: ', error); });
        this._card.showAllCards()
            .then(function (cards) {
            console.log('all cards retrieved: ', cards);
            _this.cards = cards;
        })
            .catch(function (error) { return console.log('error showing all cards: ', error); });
    };
    DashboardComponent.prototype.submitRegister = function (user) {
        var _this = this;
        console.log('logReg component sending registration info: ', user);
        this._user.register(user)
            .then(function (user) {
            _this.registerUser = new __WEBPACK_IMPORTED_MODULE_5__data_user__["a" /* User */]();
            _this.pw_conf = "";
        })
            .then(function () {
            _this._user.showAll()
                .then(function (users) {
                console.log('******users have been retrieved: ', users);
                _this.users = users;
            })
                .catch(function (error) { return console.log('error showing all users: ', error); });
        })
            .then(function () {
            _this._card.showAllCards()
                .then(function (cards) {
                console.log('all cards retrieved: ', cards);
                _this.cards = cards;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
        })
            .catch(function (error) {
            console.log('error registering user from logReg component: ', error);
        });
    };
    DashboardComponent.prototype.createCard = function (form) {
        var _this = this;
        console.log('FORM VALUE: ', form.value);
        this.newCard = form.value;
        console.log('card from form: ', this.newCard);
        // form.value.users.forEach(collectorID => {
        //   this.newCard.collectors.push(collectorID);
        // });
        // console.log('card with collectors pushed: ', this.newCard);
        this._card.createCard(this.newCard)
            .then(function (card) {
            _this._card.showAllCards()
                .then(function (cards) {
                console.log('all cards retrieved: ', cards);
                _this.cards = cards;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
            form.reset();
            _this.newCard = new __WEBPACK_IMPORTED_MODULE_4__data_card__["a" /* Card */]();
        })
            .catch(function (error) { return console.log('error creating new card: ', error); });
    };
    DashboardComponent.prototype.updateCard = function (form) {
        var _this = this;
        console.log('FORM VALUE: ', form.value);
        console.log('edited card from form: ', this.editedCard);
        this._card.editCard(this.editedCard)
            .then(function (card) {
            // this.editedCard = new Card();
            form.reset();
        })
            .then(function () {
            _this._card.showAllCards()
                .then(function (cards) {
                console.log('all cards retrieved: ', cards);
                _this.cards = cards;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
        })
            .catch(function (error) { return console.log('error updating new card: ', error); });
    };
    DashboardComponent.prototype.updateUser = function (form, event) {
        var _this = this;
        event.preventDefault();
        console.log('FORM VALUE: ', form.value);
        console.log('edited user from form: ', this.editedUser);
        this._user.edit(this.editedUser)
            .then(function (user) {
            _this.editedUser = new __WEBPACK_IMPORTED_MODULE_5__data_user__["a" /* User */]();
            form.reset();
        })
            .then(function () {
            _this._user.showAll()
                .then(function (users) {
                console.log('all users retrieved: ', users);
                _this.users = users;
            })
                .catch(function (error) { return console.log('error showing all users: ', error); });
        })
            .catch(function (error) { return console.log('error updating new user: ', error); });
    };
    DashboardComponent.prototype.editCardTemplate = function (card) {
        this.editedCard = card;
    };
    DashboardComponent.prototype.editUserTemplate = function (user) {
        this.editedUser = user;
    };
    DashboardComponent.prototype.deleteCard = function (cardID) {
        var _this = this;
        this._card.deleteCard(cardID)
            .then(function () {
            console.log('card successfully deleted');
            _this._card.showAllCards()
                .then(function (cards) {
                console.log('all cards retrieved: ', cards);
                _this.cards = cards;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
        })
            .catch(function (error) { return console.log('error deleting card: ', error); });
    };
    DashboardComponent.prototype.deleteUser = function (userID) {
        var _this = this;
        console.log('deleting user: ', userID);
        this._user.deleteUser(userID)
            .then(function () {
            console.log('user successfully deleted');
            _this._user.showAll()
                .then(function (users) {
                console.log('all cards retrieved: ', users);
                _this.users = users;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
        })
            .then(function () {
            _this._card.showAllCards()
                .then(function (cards) {
                console.log('all cards retrieved: ', cards);
                _this.cards = cards;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
        })
            .catch(function (error) { return console.log('error deleting card: ', error); });
    };
    DashboardComponent.prototype.addCollectorToCard = function (form) {
        var _this = this;
        console.log('adding collector ', form.value.collector);
        console.log('to card ', this.editedCard);
        this._card.addCollector(this.editedCard, form.value.collector)
            .then(function () {
            _this._card.showAllCards()
                .then(function (cards) {
                console.log('all cards retrieved: ', cards);
                _this.cards = cards;
                _this.editedUser = new __WEBPACK_IMPORTED_MODULE_5__data_user__["a" /* User */]();
                form.reset;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
        })
            .then(function () {
            _this._user.showAll()
                .then(function (users) {
                console.log('users retrieved: ', users);
                _this.users = users;
            })
                .catch(function (error) { return console.log('error showing all users: ', error); });
        })
            .catch(function (error) { return console.log('error showing all cards: ', error); });
    };
    DashboardComponent.prototype.deleteCollector = function (card, collector) {
        var _this = this;
        this._card.removeCollector(card, collector)
            .then(function () {
            _this._card.showAllCards()
                .then(function (cards) {
                console.log('all cards retrieved: ', cards);
                _this.cards = cards;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
        })
            .then(function () {
            _this._user.showAll()
                .then(function (users) {
                console.log('users retrieved: ', users);
                _this.users = users;
            })
                .catch(function (error) { return console.log('error showing all users: ', error); });
        })
            .catch(function (error) { return console.log('error removing collector from card: ', error); });
    };
    DashboardComponent.prototype.deleteCardCollection = function (user, card) {
        var _this = this;
        this._user.deleteCard(user, card)
            .then(function () {
            _this._card.showAllCards()
                .then(function (cards) {
                console.log('all cards retrieved: ', cards);
                _this.cards = cards;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
        })
            .then(function () {
            _this._user.showAll()
                .then(function (users) {
                console.log('users retrieved: ', users);
                _this.users = users;
            })
                .catch(function (error) { return console.log('error showing all users: ', error); });
        })
            .catch(function (error) { return console.log('error deleting card from collection: ', error); });
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        console.log('logging out');
        // this._router.navigate(['/logout']);
        this._user.logoutUser()
            .then(function () {
            _this._router.navigate(['/']);
        })
            .catch(function (error) { return console.log('error logging out: ', error); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_card_service__["a" /* CardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_card_service__["a" /* CardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
var Card = (function () {
    function Card() {
    }
    return Card;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ "../../../../../src/app/data/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.username = "";
        this.email = "";
        this.password = "";
        this.status = "user";
        this.cardCollection = [];
        this.communicate = false;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/log-reg/log-reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".log,\n.reg {\n    width: 300px;\n    display: inline-block;\n    margin: 100px;\n    height: 400px;\n}\n\n.log {\n    vertical-align: top;\n}\n\n.BorderDiv {\n    border: 2px solid black;\n}\n\n.alert {\n    color: red;\n}\n\nbutton {\n    margin: 15px auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-reg/log-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- nav bar -->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n            <h1 class='navbar-nav'>Collectible Clerics</h1>\n        </div>\n        <div class=\"navbar-right collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"row\">\n    <div class=\"BorderDiv log col-md-offset-2 col-lg-4 col-sm-12\">\n        <h2>Login</h2>\n        <form (submit)=submitLogin(login.value) #login=\"ngForm\">\n            <div>\n                <label for=\"email\">*Email: </label>\n                <input required type=\"email\" name=\"email\" id=\"email\" #email=\"ngModel\" [(ngModel)]=\"loginUser.email\">\n            </div>\n            <div *ngIf=\"(email.touched || email.dirty) && email.errors\">\n                <p class=\"alert\">Email is required.</p>\n            </div>\n            <div>\n                <label for=\"password\">*Password: </label>\n                <input required type=\"password\" name=\"password\" id=\"password\" #password=\"ngModel\" [(ngModel)]=\"loginUser.password\">\n            </div>\n            <div *ngIf=\"(password.touched || password.dirty) && password.errors\">\n                <p class=\"alert\">Password is required.</p>\n            </div>\n            <button class=\"btn btn-lg btn-success\" [disabled]=\"login.invalid\">Login</button>\n        </form>\n        <p *ngIf=\"loginFail\" class=\"alert\">Please use alternate username or email address for login.</p>\n    </div>\n    <div class=\"BorderDiv reg col-lg-4 col-sm-12\">\n        <h2>Register</h2>\n        <form (submit)=submitRegister(register.value) #register=\"ngForm\">\n            <div>\n                <label for=\"status\">Status: </label>\n                <select name=\"status\" id=\"status\" #status=\"ngModel\" [(ngModel)]=\"registerUser.status\">\n                    <option value=\"admin\">Admin</option>\n                    <option value=\"user\">User</option>\n                </select>\n            </div>\n            <div>\n                <label for=\"username\">*Username: </label>\n                <input type=\"text\" name=\"username\" id=\"username\" required minlength=\"6\" #username=\"ngModel\" [(ngModel)]=\"registerUser.username\">\n            </div>\n            <div *ngIf=\"(username.touched || username.dirty) && username.errors\">\n                <p *ngIf=\"username.errors.required\" class=\"alert\">Username is required.</p>\n                <p *ngIf=\"username.errors.minlength\" class=\"alert\">Username must be at least 6 characters.</p>\n\n            </div>\n            <div>\n                <label for=\"remail\">*Email: </label>\n                <input type=\"remail\" name=\"remail\" id=\"remail\" required #remail=\"ngModel\" [(ngModel)]=\"registerUser.email\">\n            </div>\n            <div *ngIf=\"(remail.touched || remail.dirty) && remail.errors\">\n                <p class=\"alert\">Email is required.</p>\n            </div>\n            <div>\n                <label for=\"rpassword\">*Password: </label>\n                <input type=\"password\" name=\"rpassword\" id=\"rpassword\" required minlength=\"6\" #rpassword=\"ngModel\" [(ngModel)]=\"registerUser.password\">\n            </div>\n            <div *ngIf=\"(rpassword.touched || rpassword.dirty) && rpassword.errors\">\n                <p *ngIf=\"rpassword.errors.required\" class=\"alert\">Password is required.</p>\n                <p *ngIf=\"rpassword.errors.minlength\" class=\"alert\">Password must be at least 6 characters.</p>\n            </div>\n            <div>\n                <label for=\"passwordConfirmation\">*Password Confirmation</label>\n                <input type=\"password\" name=\"passwordConfirmation\" id=\"passwordConfirmation\" required #passwordConfirmation=\"ngModel\" [(ngModel)]=\"pwd_conf\">\n            </div>\n            <div *ngIf=\"(passwordConfirmation.touched || passwordConfirmation.dirty) && passwordConfirmation.errors\">\n                <p class=\"alert\">Password confirmation is required.</p>\n                <p *ngIf=\"registerUser.password != pwd_conf\" class=\"alert\">Password must match password confirmation.</p>\n            </div>\n            <!-- <div>\n                <p>*Would you like to receive email updates from Collectible Clerics?: </p>\n                <input type=\"checkbox\" name=\"communicate\" value=\"Yes\" id=\"communicateY\" required #communicateY=\"ngModel\" [(ngModel)]=\"registerUser.communicate\">\n                <input type=\"checkbox\" name=\"communicate\" value=\"No\" id=\"communicateN\" required #communicateN=\"ngModel\" [(ngModel)]=\"registerUser.communicate\">\n            </div>\n            <div *ngIf=\"((communicateY.touched || communicateY.dirty)) || (communicateN.touched || communicateN.dirty)) && (!communicateN.errors && !communicateY.errors)\">\n                <p class=\"alert\">Please confirm your email preference.</p>\n            </div> -->\n            <button class=\"btn btn-lg btn-success\" [disabled]=\"register.invalid\">Register</button>\n        </form>\n        <p *ngIf=\"registerFail\" class=\"alert\">Please use alternate username or email address for registration.</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/log-reg/log-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_user__ = __webpack_require__("../../../../../src/app/data/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogRegComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogRegComponent = (function () {
    function LogRegComponent(_user, _router) {
        this._user = _user;
        this._router = _router;
        this.loginUser = new __WEBPACK_IMPORTED_MODULE_3__data_user__["a" /* User */]();
        this.registerUser = new __WEBPACK_IMPORTED_MODULE_3__data_user__["a" /* User */]();
        this.logRegErrors = [];
        this.registerFail = false;
        this.loginFail = false;
    }
    LogRegComponent.prototype.ngOnInit = function () {
        this.loginUser = new __WEBPACK_IMPORTED_MODULE_3__data_user__["a" /* User */]();
        this.registerUser = new __WEBPACK_IMPORTED_MODULE_3__data_user__["a" /* User */]();
    };
    //HANDLE ERRORS AND PUSH TO LOGREGERRORS
    LogRegComponent.prototype.submitRegister = function (user) {
        var _this = this;
        console.log('logReg component sending registration info: ', user);
        this._user.register(user)
            .then(function (user) {
            console.log('user: ', user);
            if (!(user instanceof Error)) {
                _this.registerUser = new __WEBPACK_IMPORTED_MODULE_3__data_user__["a" /* User */]();
                if (user.status == "admin") {
                    _this._router.navigate(['/dashboard']);
                }
                else {
                    _this._router.navigate(['/theodex']);
                }
            }
            else {
                console.log("Please register with an alternate email or username.");
            }
        })
            .catch(function (error) {
            _this.registerFail = true;
            console.log("registerFail var: ", _this.registerFail);
            console.log('(ts file)error registering user from logReg component: ', error);
        });
    };
    LogRegComponent.prototype.submitLogin = function (user) {
        var _this = this;
        this._user.login(user)
            .then(function (user) {
            _this.loginUser = new __WEBPACK_IMPORTED_MODULE_3__data_user__["a" /* User */]();
            if (user.status == "admin") {
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this._router.navigate(['/theodex']);
            }
        })
            .catch(function (error) {
            _this.loginFail = true;
            console.log("loginFail var: ", _this.loginFail);
            console.log('(ts file)error logging in user from logReg component: ', error);
        });
    };
    return LogRegComponent;
}());
LogRegComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-log-reg',
        template: __webpack_require__("../../../../../src/app/log-reg/log-reg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/log-reg/log-reg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogRegComponent);

var _a, _b;
//# sourceMappingURL=log-reg.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n    margin: 50px;\n}\n\nh1,\nh3,\nh6 {\n    text-align: center;\n}\n\n.filterInput {\n    text-align: center;\n}\n\nimg {\n    margin-top: 15px;\n    width: 100%;\n    height: 300px;\n}\n\n.quote {\n    font-style: oblique;\n    font-weight: bolder;\n}\n\n.card-info {\n    height: 100px;\n}\n\n.card {\n    border: 2px solid black;\n    margin: 5px;\n}\n\n.card-columns {\n    margin-left: 50px;\n}\n\nbutton {\n    margin-bottom: 10px;\n    margin-left: 19%;\n}\n\n.crop {\n    width: 266px;\n    height: 315px;\n    overflow: hidden;\n}\n\n.crop img {\n    width: 330%;\n    height: 494px;\n    margin: -176px 0px 0px 1px;\n}\n\n.collect-button {\n    margin-left: 36%;\n}\n\n.remove-button {\n    margin-left: 19%;\n}\n\n.card-footer {\n    height: 165px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- nav bar -->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n            <h1 class='navbar-nav'>Collectible Clerics</h1>\n        </div>\n        <div class=\"navbar-right collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n                <li><a class=\"nav-link\" routerLink=\"/theodex\">Theodex</a></li>\n                <li><a class=\"nav-link\" routerLink=\"/profile\">Profile</a></li>\n                <li><button (click)=logout() type=\"button\" class=\"btn btn-xs navbar-btn\"><a href=\"/logout\" class=\"nav-link\">Logout</a></button></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<main>\n    <h1>Your Collection</h1>\n    <!-- user info -->\n\n    <!-- if user is current, allow editing -->\n    <p class=\"filterInput\"><input type=\"text\" [(ngModel)]='filter.name' placeholder=\"Theologian's Name\"></p>\n    <p class=\"filterInput\">\n        Select Theology...\n        <select name=\"pack\" class=\"form-control\" required [(ngModel)]='filter.theology'>\n            <option value=\"\">Select theology...</option>\n            <option value=\"Womanism\">Womanism</option>\n            <option value=\"Feminism\">Feminism</option>\n            <option value=\"Queer\">Queer</option>\n            <option value=\"Liberalism\">Liberalism</option>\n            <option value=\"Orthodox\">Orthodox</option>\n            <option value=\"Neo-Orthodox\">Neo-Orthodox</option>\n            <option value=\"Liberation\">Liberation</option>\n            <option value=\"African\">African</option>\n            <option value=\"Asian\">Asian</option>\n            <option value=\"Native American\">Native American</option>\n            <option value=\"Latin American\">Latin American</option>\n            <option value=\"Asian Pacific North American\">Asian Pacific North American</option>\n            <option value=\"Hispanic American\">Hispanic American</option>\n            <option value=\"Mujerista\">Mujerista</option>\n            <option value=\"Process\">Process</option>\n            <option value=\"Ethics\">Ethics</option>            \n        </select>\n    </p>\n    <!-- display user's collection of cards -->\n    <div class=\"row\">\n        <div class=\"card-columns\">\n            <div *ngFor=\"let card of currentUser.cardCollection | search: filter\" class=\"card card-outline-primary mb-3 col-xs-12 col-sm-6 col-md-4 col-lg-4\" style=\"width: 30rem;\">\n                <div *ngIf=\"card.name == 'Arvind P. Nirmal'\" class=\"crop\">\n                    <img class=\"card-img-top\" src=\"{{card.imageUrl}}\" alt=\"Picture of theologian\">\n                </div>\n                <img *ngIf=\"card.name != 'Arvind P. Nirmal'\" class=\"card-img-top\" src=\"{{card.imageUrl}}\" alt=\"Picture of theologian\">\n                <div class=\"card-block card-info\">\n                    <h1 class=\"card-title\"><a class=\"nav-link\" [routerLink]=\"['/card', card._id]\">{{card.name}}</a></h1>\n                </div>\n                <div class=\"card-footer\">\n                    <h2>#{{card.number}}</h2>\n                    <h5>{{card.theology}}</h5>\n                    <hr>\n                    <h6>You have collected this card!</h6>\n                    <button class=\"btn btn-primary\" (click)=\"removeCard(card)\">Remove from Collection</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_card_service__ = __webpack_require__("../../../../../src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_user__ = __webpack_require__("../../../../../src/app/data/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_card__ = __webpack_require__("../../../../../src/app/data/card.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(_user, _card, _router) {
        this._user = _user;
        this._card = _card;
        this._router = _router;
        this.filter = new __WEBPACK_IMPORTED_MODULE_5__data_card__["a" /* Card */]();
        this.cards = [];
        this.users = [];
        this.userCards = [];
        this.userCardIDs = [];
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__data_user__["a" /* User */]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user.getCurrentUser()
            .then(function (user) {
            _this.currentUser = user;
            _this.userCards = user.cardCollection;
            console.log('userCards: ', _this.userCards);
            _this.userCardIDs = _this.userCards.map(function (e) { return e._id; });
        })
            .catch(function (error) { return console.log('error getting current user: ', error); });
        this._card.showAllCards()
            .then(function (cards) {
            console.log('all cards retrieved: ', cards);
            _this.cards = cards;
        })
            .catch(function (error) { return console.log('error showing all cards: ', error); });
        this._user.showAll()
            .then(function (users) {
            console.log('all users retrieved: ', users);
            _this.users = users;
        })
            .catch(function (error) { return console.log('error showing all users: ', error); });
    };
    ProfileComponent.prototype.collectCard = function (card) {
        var _this = this;
        this._card.addCollector(card, this.currentUser._id)
            .then(function () {
            console.log('collector added to card');
            _this._user.getCurrentUser()
                .then(function (user) {
                _this.currentUser = user;
                _this.userCards = user.cardCollection;
                _this.userCardIDs = _this.userCards.map(function (e) { return e._id; });
            })
                .catch(function (error) { return console.log('error getting current user: ', error); });
        })
            .catch(function (error) { return console.log('error adding collector to card: ', error); });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        console.log('logging out');
        // this._router.navigate(['/logoutUser']);
        this._user.logoutUser()
            .then(function () {
            _this._router.navigate(['/']);
        })
            .catch(function (error) { return console.log('error logging out: ', error); });
    };
    ProfileComponent.prototype.removeCard = function (card) {
        var _this = this;
        this._card.removeCollector(card, this.currentUser)
            .then(function () {
            console.log('collector added to card');
            _this._user.getCurrentUser()
                .then(function (user) {
                _this.currentUser = user;
                _this.userCards = user.cardCollection;
                _this.userCardIDs = _this.userCards.map(function (e) { return e._id; });
            })
                .catch(function (error) { return console.log('error getting current user: ', error); });
        })
            .catch(function (error) { return console.log('error removing collector from card: ', error); });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (elements, filter) {
        var _this = this;
        if (!Array.isArray(elements) || !filter) {
            return elements;
        }
        console.log('search pipe', elements);
        return elements.filter(function (element) { return _this.filter(element, filter); });
    };
    SearchPipe.prototype.filter = function (element, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (!element[field].toString().toLowerCase().includes(filter[field].toString().toLowerCase())) {
                    return false;
                }
            }
        }
        return true;
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'search',
        pure: false,
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/card.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardService = (function () {
    function CardService(_http) {
        this._http = _http;
    }
    CardService.prototype.createCard = function (card) {
        console.log('in card service to create card: ', card);
        return this._http.post('/cards', card)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    CardService.prototype.editCard = function (card) {
        return this._http.put("/cards/" + card._id, card)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    CardService.prototype.showOneCard = function (cardID) {
        return this._http.get("/cards/" + cardID)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    CardService.prototype.showAllCards = function () {
        return this._http.get('/cards')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    CardService.prototype.showCardPack = function (pack) {
        return this._http.get("cards/pack/" + pack)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    CardService.prototype.deleteCard = function (card) {
        return this._http.delete("/cards/" + card._id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    CardService.prototype.addCollector = function (card, collectorID) {
        console.log('adding collector to card: ', collectorID, card);
        return this._http.put("/cards/add/" + card._id, { collectorID: collectorID })
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    CardService.prototype.removeCollector = function (card, collector) {
        console.log('CARD SERVER in remove collector method: ', card, collector);
        return this._http.post("/cards/remove/" + card._id, { collectorID: collector._id })
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return CardService;
}());
CardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CardService);

var _a;
//# sourceMappingURL=card.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.register = function (user) {
        console.log('in user service sending user to be registered: ', user);
        return this._http.post('/register', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.login = function (user) {
        return this._http.post('/login', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.logoutUser = function () {
        return this._http.get('/logoutUser')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.show = function (userID) {
        return this._http.get("/users/" + userID)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.showAll = function () {
        return this._http.get('/users')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.getCurrentUser = function () {
        return this._http.get('/user')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.edit = function (user) {
        return this._http.put("/users/" + user._id, user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.deleteUser = function (userID) {
        return this._http.delete("/users/" + userID)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.deleteCard = function (user, card) {
        return this._http.put("/users/remove/" + user._id, { cardID: card._id })
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/theodex/theodex.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n    margin: 50px;\n}\n\nh1,\nh3,\nh6 {\n    text-align: center;\n}\n\n.filterInput {\n    text-align: center;\n}\n\nimg {\n    margin-top: 15px;\n    width: 100%;\n    height: 300px;\n}\n\n.quote {\n    font-style: oblique;\n    font-weight: bolder;\n}\n\n.card-info {\n    height: 100px;\n}\n\n.card {\n    border: 2px solid black;\n    margin: 5px;\n}\n\n.card-columns {\n    margin-left: 50px;\n}\n\nbutton {\n    margin-bottom: 10px;\n}\n\n.card-footer {\n    height: 165px;\n}\n\n.collect-button {\n    margin-left: 36%;\n}\n\n.remove-button {\n    margin-left: 19%;\n}\n\n.crop {\n    width: 266px;\n    height: 315px;\n    overflow: hidden;\n}\n\n.crop img {\n    width: 330%;\n    height: 494px;\n    margin: -176px 0px 0px 1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theodex/theodex.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- nav bar -->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n            <h1 class='navbar-nav'>Collectible Clerics</h1>\n        </div>\n        <div class=\"navbar-right collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n                <li><a class=\"nav-link\" routerLink=\"/theodex\">Theodex</a></li>\n                <li><a class=\"nav-link\" routerLink=\"/profile\">Profile</a></li>\n                <li><button (click)=logout() type=\"button\" class=\"btn btn-xs navbar-btn\"><a href=\"/logout\" class=\"nav-link\">Logout</a></button></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<main>\n    <h1>Theodex</h1>\n    <br>\n    <h3>Peruse Packs of Pious People</h3>\n    <p class=\"filterInput\"><input type=\"text\" [(ngModel)]='filter.name' placeholder=\"Theologian's Name\"></p>\n    <p class=\"filterInput\">\n        Select Theology...\n        <select name=\"pack\" class=\"form-control\" required [(ngModel)]='filter.theology'>\n            <option value=\"\">Select theology...</option>\n            <option value=\"Womanism\">Womanism</option>\n            <option value=\"Feminism\">Feminism</option>\n            <option value=\"Queer\">Queer</option>\n            <option value=\"Liberalism\">Liberalism</option>\n            <option value=\"Orthodox\">Orthodox</option>\n            <option value=\"Neo-Orthodox\">Neo-Orthodox</option>\n            <option value=\"Liberation\">Liberation</option>\n            <option value=\"African\">African</option>\n            <option value=\"Asian\">Asian</option>\n            <option value=\"Native American\">Native American</option>\n            <option value=\"Latin American\">Latin American</option>\n            <option value=\"Asian Pacific North American\">Asian Pacific North American</option>\n            <option value=\"Hispanic American\">Hispanic American</option>\n            <option value=\"Mujerista\">Mujerista</option>\n            <option value=\"Process\">Process</option>\n            <option value=\"Ethics\">Ethics</option>\n        </select>\n    </p>\n    <div class=\"row\">\n        <div class=\"card-columns\">\n            <div *ngFor=\"let card of cards | search: filter\" class=\"card card-outline-primary mb-3 col-xs-12 col-sm-6 col-md-4 col-lg-4\" style=\"width: 30rem;\">\n                <div *ngIf=\"card.name == 'Arvind P. Nirmal'\" class=\"crop\">\n                    <img class=\"card-img-top\" src=\"{{card.imageUrl}}\" alt=\"Picture of theologian\">\n                </div>\n                <img *ngIf=\"card.name != 'Arvind P. Nirmal'\" class=\"card-img-top\" src=\"{{card.imageUrl}}\" alt=\"Picture of theologian\">\n                <div class=\"card-block card-info\">\n                    <h1 class=\"card-title\"><a class=\"nav-link\" [routerLink]=\"['/card', card._id]\">{{card.name}}</a></h1>\n                </div>\n                <div class=\"card-footer\">\n                    <h2>#{{card.number}}</h2>\n                    <h5>{{card.theology}}</h5>\n                    <hr>\n                    <button *ngIf=\"userCardIDs.indexOf(card._id) === -1\" class=\"collect-button btn btn-primary\" (click)=\"collectCard(card)\">Collect</button>\n                    <h6 *ngIf=\"userCardIDs.indexOf(card._id) != -1\">You have collected this card!</h6>\n                    <button *ngIf=\"userCardIDs.indexOf(card._id) != -1\" class=\"remove-button btn btn-primary\" (click)=\"removeCard(card)\">Remove from Collection</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/theodex/theodex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_card_service__ = __webpack_require__("../../../../../src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_user__ = __webpack_require__("../../../../../src/app/data/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_card__ = __webpack_require__("../../../../../src/app/data/card.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheodexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TheodexComponent = (function () {
    function TheodexComponent(_user, _card, _router) {
        this._user = _user;
        this._card = _card;
        this._router = _router;
        this.filter = new __WEBPACK_IMPORTED_MODULE_5__data_card__["a" /* Card */]();
        this.cards = [];
        this.users = [];
        this.userCards = [];
        this.userCardIDs = [];
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__data_user__["a" /* User */]();
    }
    TheodexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user.getCurrentUser()
            .then(function (user) {
            _this.currentUser = user;
            _this.userCards = user.cardCollection;
            console.log('userCards: ', _this.userCards);
            _this.userCardIDs = _this.userCards.map(function (e) { return e._id; });
        })
            .catch(function (error) { return console.log('error getting current user: ', error); });
        this._card.showAllCards()
            .then(function (cards) {
            console.log('all cards retrieved: ', cards);
            _this.cards = cards;
        })
            .catch(function (error) { return console.log('error showing all cards: ', error); });
        this._user.showAll()
            .then(function (users) {
            console.log('all users retrieved: ', users);
            _this.users = users;
        })
            .catch(function (error) { return console.log('error showing all users: ', error); });
    };
    TheodexComponent.prototype.collectCard = function (card) {
        var _this = this;
        this._card.addCollector(card, this.currentUser._id)
            .then(function () {
            console.log('collector added to card');
            _this._user.getCurrentUser()
                .then(function (user) {
                _this.currentUser = user;
                _this.userCards = user.cardCollection;
                _this.userCardIDs = _this.userCards.map(function (e) { return e._id; });
            })
                .catch(function (error) { return console.log('error getting current user: ', error); });
        })
            .then(function () {
            _this._card.showAllCards()
                .then(function (cards) {
                console.log('all cards retrieved: ', cards);
                _this.cards = cards;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
        })
            .then(function () {
            _this._user.showAll()
                .then(function (users) {
                console.log('all users retrieved: ', users);
                _this.users = users;
            })
                .catch(function (error) { return console.log('error showing all users: ', error); });
        })
            .catch(function (error) { return console.log('error adding collector to card: ', error); });
    };
    TheodexComponent.prototype.logout = function () {
        var _this = this;
        console.log('logging out');
        // this._router.navigate(['/logoutUser']);
        this._user.logoutUser()
            .then(function () {
            _this._router.navigate(['/']);
        })
            .catch(function (error) { return console.log('error logging out: ', error); });
    };
    TheodexComponent.prototype.removeCard = function (card) {
        var _this = this;
        this._card.removeCollector(card, this.currentUser)
            .then(function () {
            console.log('collector added to card');
            _this._user.getCurrentUser()
                .then(function (user) {
                _this.currentUser = user;
                _this.userCards = user.cardCollection;
                _this.userCardIDs = _this.userCards.map(function (e) { return e._id; });
            })
                .catch(function (error) { return console.log('error getting current user: ', error); });
        })
            .then(function () {
            _this._card.showAllCards()
                .then(function (cards) {
                console.log('all cards retrieved: ', cards);
                _this.cards = cards;
            })
                .catch(function (error) { return console.log('error showing all cards: ', error); });
        })
            .then(function () {
            _this._user.showAll()
                .then(function (users) {
                console.log('all users retrieved: ', users);
                _this.users = users;
            })
                .catch(function (error) { return console.log('error showing all users: ', error); });
        })
            .catch(function (error) { return console.log('error adding collector to card: ', error); });
    };
    return TheodexComponent;
}());
TheodexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-theodex',
        template: __webpack_require__("../../../../../src/app/theodex/theodex.component.html"),
        styles: [__webpack_require__("../../../../../src/app/theodex/theodex.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], TheodexComponent);

var _a, _b, _c;
//# sourceMappingURL=theodex.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n    margin: 50px;\n}\n\nh1,\nh3,\nh6 {\n    text-align: center;\n}\n\n.filterInput {\n    text-align: center;\n}\n\nimg {\n    margin-top: 15px;\n    width: 100%;\n    height: 300px;\n}\n\n.quote {\n    font-style: oblique;\n    font-weight: bolder;\n}\n\n.card-info {\n    height: 100px;\n}\n\n.card {\n    border: 2px solid black;\n    margin: 5px;\n}\n\n.card-columns {\n    margin-left: 50px;\n}\n\nbutton {\n    margin-bottom: 10px;\n    margin-left: 19%;\n}\n\n.crop {\n    width: 266px;\n    height: 315px;\n    overflow: hidden;\n}\n\n.crop img {\n    width: 330%;\n    height: 494px;\n    margin: -176px 0px 0px 1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- nav bar -->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n            <h1 class='navbar-nav'>Collectible Clerics</h1>\n        </div>\n        <div class=\"navbar-right collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n                <li><a class=\"nav-link\" routerLink=\"/theodex\">Theodex</a></li>\n                <li><a class=\"nav-link\" routerLink=\"/profile\">Profile</a></li>\n                <li><button (click)=logout() type=\"button\" class=\"btn btn-xs navbar-btn\"><a href=\"/logout\" class=\"nav-link\">Logout</a></button></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<main>\n    <h1>{{pageUser.username}}'s Collection</h1>\n    <!-- user info -->\n\n    <!-- if user is current, allow editing -->\n    <p class=\"filterInput\"><input type=\"text\" [(ngModel)]='filter.name' placeholder=\"Theologian's Name\"></p>\n    <p class=\"filterInput\">\n        Select Theology...\n        <select name=\"pack\" class=\"form-control\" required [(ngModel)]='filter.theology'>\n            <option value=\"\">Select theology...</option>\n            <option value=\"Womanism\">Womanism</option>\n            <option value=\"Feminism\">Feminism</option>\n            <option value=\"Queer\">Queer</option>\n            <option value=\"Liberalism\">Liberalism</option>\n            <option value=\"Orthodox\">Orthodox</option>\n            <option value=\"Neo-Orthodox\">Neo-Orthodox</option>\n            <option value=\"Liberation\">Liberation</option>\n            <option value=\"African\">African</option>\n            <option value=\"Asian\">Asian</option>\n            <option value=\"Native American\">Native American</option>\n            <option value=\"Latin American\">Latin American</option>\n            <option value=\"Asian Pacific North American\">Asian Pacific North American</option>\n            <option value=\"Hispanic American\">Hispanic American</option>\n            <option value=\"Mujerista\">Mujerista</option>\n            <option value=\"Process\">Process</option>\n            <option value=\"Ethics\">Ethics</option>            \n        </select>\n    </p>\n    <!-- display user's collection of cards -->\n    <div class=\"row\">\n        <div class=\"card-columns\">\n            <div *ngFor=\"let card of pageUserCards| search: filter\" class=\"card card-outline-primary mb-3 col-xs-12 col-sm-6 col-md-4 col-lg-4\" style=\"width: 30rem;\">\n                <div *ngIf=\"card.name == 'Arvind P. Nirmal'\" class=\"crop\">\n                    <img class=\"card-img-top\" src=\"{{card.imageUrl}}\" alt=\"Picture of theologian\">\n                </div>\n                <img *ngIf=\"card.name != 'Arvind P. Nirmal'\" class=\"card-img-top\" src=\"{{card.imageUrl}}\" alt=\"Picture of theologian\">\n                <div class=\"card-block card-info\">\n                    <h1 class=\"card-title\"><a class=\"nav-link\" [routerLink]=\"['/card', card._id]\">{{card.name}}</a></h1>\n                </div>\n                <div class=\"card-footer\">\n                    <h2>#{{card.number}}\n                    </h2>\n                    <h5>{{card.theology}}</h5>\n                    <hr>\n                </div>\n            </div>\n        </div>\n    </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_card_service__ = __webpack_require__("../../../../../src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_user__ = __webpack_require__("../../../../../src/app/data/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_card__ = __webpack_require__("../../../../../src/app/data/card.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = (function () {
    function UserComponent(_route, _router, _user, _card) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._user = _user;
        this._card = _card;
        this.cards = [];
        this.pageUser = new __WEBPACK_IMPORTED_MODULE_4__data_user__["a" /* User */]();
        this.pageUserCards = [];
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__data_user__["a" /* User */]();
        this.filter = new __WEBPACK_IMPORTED_MODULE_5__data_card__["a" /* Card */]();
        this._route.params.subscribe(function (param) {
            console.log('param: ', param);
            _this.pageUserID = param.id;
            console.log('page user id: ', _this.pageUserID);
        });
        this._user.getCurrentUser()
            .then(function (user) {
            _this.currentUser = user;
        })
            .catch(function (error) { return console.log('error getting current user: ', error); });
        this._user.show(this.pageUserID)
            .then(function (user) {
            _this.pageUser = user;
            _this.pageUserCards = user.cardCollection;
            console.log('userCards: ', _this.pageUserCards);
        })
            .catch(function (error) { return console.log('error getting current user: ', error); });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.removeCard = function (card) {
        var _this = this;
        this._card.removeCollector(card, this.currentUser)
            .then(function () {
            _this._user.show(_this.pageUserID)
                .then(function (user) {
                _this.pageUser = user;
                _this.pageUserCards = user.cardCollection;
                console.log('userCards: ', _this.pageUserCards);
            })
                .catch(function (error) { return console.log('error getting current user: ', error); });
        })
            .catch(function (error) { return console.log('error removing card from collection: ', error); });
    };
    UserComponent.prototype.logout = function () {
        var _this = this;
        console.log('logging out');
        // this._router.navigate(['/logout']);
        this._user.logoutUser()
            .then(function () {
            _this._router.navigate(['/']);
        })
            .catch(function (error) { return console.log('error logging out: ', error); });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map