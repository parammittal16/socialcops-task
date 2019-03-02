(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/st-about/st-about.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/st-about/st-about.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about{\n    background-image: url('about-background.png');\n}\nh5{\n    margin-top:25px;\n    margin-bottom:25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zdC1hYm91dC9zdC1hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkNBQTZEO0FBQ2pFO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9zdC1hYm91dC9zdC1hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2Fib3V0LWJhY2tncm91bmQucG5nJyk7XG59XG5oNXtcbiAgICBtYXJnaW4tdG9wOjI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbToyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/st-about/st-about.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/st-about/st-about.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6 col-lg-6\">\n      <div style=\"display: block;width:50%;margin:auto\" class=\"mt-5\">\n        <h3>Sachin Ramesh Tendulkar</h3>\n        <h5><b>Born:</b> 24 April 1973</h5>\n        <h5><b>Education:</b> Kirti M. Doongursee College</h5>\n        <h5><b>Nickname:</b>\tMaster Blaster, Tendlya, Little Master</h5>\n        <h5><b>Height:</b> 5 feet 5 inches (165 cm)</h5>\n        <h5><b>Batting:</b>\tRight-handed</h5>\n        <h5><b>Bowling:</b> Right-arm leg spin, off spin, medium pace</h5>\n        <h5><b>Total Matches Played:</b> {{mathchesPlayed}}</h5>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-6 text-sm-center text-md-right\">\n      <img style=\"height:100vh;\" src=\"/src/assets/sachin.jpg\" alt=\"sachin_pic\">\n    </div>\n  </div>\n</div>\n<div id=\"statement\" class=\"container\">\n  <div class=\"row mt-5\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12 text-center\">\n      <h3 class=\"my-3\">Wikipedia says,</h3>\n      <em class=\"my-2\">“Sachin Tendulkar is a former Indian cricketer, widely regarded to be the\n        greatest cricketer of all time.”</em>\n        <h2 class=\"my-5\">Let us see</h2>\n      </div>\n    </div>\n  </div>\n  <div id=\"statement\" class=\"container\">\n    <div class=\"row mt-5\">\n      <div class=\"col-sm-12 col-md-12 col-lg-12 text-center\">\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <em>\"I'll be going to bed having nightmares of Sachin just running down the wicket and belting me back over the head for six. He was unstoppable.\"<br />- Shane Warne</em>\n              </div>\n            <div class=\"carousel-item\">\n              <em>\"Tendulkar is to Cricket what Michael Jordon is to Basketball and Muhammad Ali is to Boxing.\"<br />- Brian Lara</em>\n            </div>\n            <div class=\"carousel-item\">\n                <em>\"Tendulkar has carried the burden of the nation for 21 years. It is time we carried him on our shoulders.\"<br />- Virat Kohli</em>\n            </div>\n          </div>\n          <a class=\"carousel-control-prev text-red\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next text-red\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/Components/st-about/st-about.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/st-about/st-about.component.ts ***!
  \***********************************************************/
/*! exports provided: StAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StAboutComponent", function() { return StAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_get_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/get-file.service */ "./src/app/Services/get-file.service.ts");



var StAboutComponent = /** @class */ (function () {
    function StAboutComponent(data) {
        this.data = data;
    }
    StAboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getfile()
            .subscribe(function (res) {
            console.log(res);
            var reader = new FileReader();
            reader.readAsText(res);
            reader.onload = function (e) {
                _this.csv = reader.result;
                _this.allTextLines = _this.csv.split(/\r|\n|\r/);
                _this.headers = _this.allTextLines[0].split(',');
                _this.lines = [];
                for (var _i = 0, _a = _this.allTextLines; _i < _a.length; _i++) {
                    var i = _a[_i];
                    // split content based on comma
                    var data = i.split(',');
                    if (data.length === _this.headers.length) {
                        var tarr = [];
                        for (var j = 0; j < _this.headers.length; j++) {
                            tarr.push(data[j]);
                        }
                        // log each row to see output
                        console.log(tarr);
                        _this.lines.push(tarr);
                    }
                }
                // all rows in the csv file
                console.log('>>>>>>>>>>>>>>>>>', _this.lines);
                _this.mathchesPlayed = _this.lines.length;
                console.log(_this.mathchesPlayed);
            };
        }, function (err) {
            console.log(err);
        });
    };
    StAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-st-about',
            template: __webpack_require__(/*! ./st-about.component.html */ "./src/app/Components/st-about/st-about.component.html"),
            styles: [__webpack_require__(/*! ./st-about.component.css */ "./src/app/Components/st-about/st-about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_get_file_service__WEBPACK_IMPORTED_MODULE_2__["GetFileService"]])
    ], StAboutComponent);
    return StAboutComponent;
}());



/***/ }),

/***/ "./src/app/Services/get-file.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/get-file.service.ts ***!
  \**********************************************/
/*! exports provided: GetFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFileService", function() { return GetFileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GetFileService = /** @class */ (function () {
    function GetFileService(http) {
        this.http = http;
    }
    GetFileService.prototype.getfile = function () {
        return this.http.get('/src/assets/sachin.csv', { responseType: 'blob' });
    };
    GetFileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetFileService);
    return GetFileService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-st-about></app-st-about>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'socialcops-task';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_st_about_st_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/st-about/st-about.component */ "./src/app/Components/st-about/st-about.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Components_st_about_st_about_component__WEBPACK_IMPORTED_MODULE_5__["StAboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/parammittal16/socialcops-task/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map