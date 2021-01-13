(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Abc/Desktop/selfWeb/angularProjects/portfolio/src/main.ts */"zUnb");


/***/ }),

/***/ "4mys":
/*!********************************************************!*\
  !*** ./src/app/hire-services/chess/chess.component.ts ***!
  \********************************************************/
/*! exports provided: ChessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessComponent", function() { return ChessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ChessComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChessComponent.ɵfac = function ChessComponent_Factory(t) { return new (t || ChessComponent)(); };
ChessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChessComponent, selectors: [["app-chess"]], decls: 3, vars: 0, consts: [[1, "fas", "fa-chess", "fa-3x", "mx-2", "text-primary"]], template: function ChessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel distinctio magni ab pariatur quis maxime laborum earum ullam maiores, id rem voluptatibus. Aspernatur corporis dolorum velit ipsum! Deleniti, similique. Architecto eaque impedit perferendis voluptatibus dignissimos tempora, dolore nihil facilis quos dolores voluptas sunt sint rem unde similique, cupiditate non optio quae ratione. Quis culpa soluta, quas, voluptatem nemo ea error esse dignissimos, necessitatibus ipsum magnam quidem repellat obcaecati saepe sed veritatis aspernatur molestiae. Sint cumque perferendis in impedit laudantium tempore assumenda sapiente ducimus quasi rem totam quia eveniet iste eligendi itaque delectus, aliquam repellat labore, neque unde, maxime facere! Officia.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpcmUtc2VydmljZXMvY2hlc3MvY2hlc3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chess',
                templateUrl: './chess.component.html',
                styleUrls: ['./chess.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class AboutComponent {
    constructor(loc) {
        this.loc = loc;
    }
    ngOnInit() {
    }
    goBack() {
        this.loc.back();
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 42, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col"], [1, "jumbotron", "text-center", "my"], [1, "text-center", "text-font-bold", "display-4"], [1, "col-md-5"], ["src", "assets/profilePic.jpg", "alt", "my-image", 1, "img-fluid", "my-img", "img-responsive"], [1, "col-d-7"], [1, "rounded"], [1, "text-danger"], [1, "text-success"], [1, "my-4"], [1, "col-md-12", "py-5"], [1, "mb-5", "flex-center"], [1, "fb-ic"], [1, "fab", "fa-facebook", "fa-lg", "mr-md-5", "mr-3"], [1, "tw-ic"], [1, "fab", "fa-twitter", "fa-lg", "text-danger", "mr-md-5", "mr-3"], [1, "li-ic"], [1, "fab", "fa-linkedin", "fa-lg", "mr-md-5", "mr-3"], [1, "ins-ic"], [1, "fab", "fa-instagram", "fa-lg", "text-danger", "mr-md-5", "mr-3"], [1, "pin-ic"], [1, "fab", "fa-github", "fa-lg", "text-dark"], ["href", "https://github.com/AdityaParker", "role", "button", 1, "btn", "btn-outline-success", "btn-lg", "px-5", "mr-2", "text-uppercase"], ["role", "button", 1, "btn", "btn-outline-danger", "btn-lg", "px-5", "text-uppercase", 3, "click"], [1, "fas", "fa-chevron-left", "mr-2"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "blockquote", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Hi there! I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Aditya Gautam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". A computer science graduate from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "NIT Allahabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " with fervent interest in Film making and passionate about Web development. Currently I'm working ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "@ADP Hyderabad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " as a Full stack developer. My tech stack includes Angular,React and Spring boot. For more details please visit my Github profile or have a look at my resume. Thank you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Outside of work, I enjoy reading,travelling, making videos, Playing chess and meeting new people.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Get Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_39_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);\r\nblockquote[_ngcontent-%COMP%] {\r\n  font-size: 1.4em;\r\n  width: 60%;\r\n  margin: 50px auto;\r\n  font-family: Open Sans;\r\n  font-style: italic;\r\n  color: #555555;\r\n  padding: 1.2em 30px 1.2em 75px;\r\n  border-left: 8px solid #78c0a8;\r\n  line-height: 1.6;\r\n  position: relative;\r\n  background: #ededed;\r\n}\r\nblockquote[_ngcontent-%COMP%]::before {\r\n  font-family: Arial;\r\n  color: #78c0a8;\r\n  font-size: 4em;\r\n  position: absolute;\r\n  left: 10px;\r\n  top: -10px;\r\n}\r\nblockquote[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n}\r\nblockquote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: #333333;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  margin-top: 1em;\r\n}\r\n.my-img[_ngcontent-%COMP%] {\r\n  height: 250px;\r\n  border-radius: 50%;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #e8f8f3;\r\n  background-attachment: fixed;\r\n}\r\n.my[_ngcontent-%COMP%] {\r\n  background-color: #edf7f5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBd0U7QUFDeEU7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwaXRhbGljKTtcclxuYmxvY2txdW90ZSB7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIHBhZGRpbmc6IDEuMmVtIDMwcHggMS4yZW0gNzVweDtcclxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICM3OGMwYTg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxufVxyXG5cclxuYmxvY2txdW90ZTo6YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgY29sb3I6ICM3OGMwYTg7XHJcbiAgZm9udC1zaXplOiA0ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgdG9wOiAtMTBweDtcclxufVxyXG5cclxuYmxvY2txdW90ZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4ubXktaW1nIHtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjhmMztcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbi5teSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjdmNTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "KXxk":
/*!**********************************************************!*\
  !*** ./src/app/hire-services/hire-services.component.ts ***!
  \**********************************************************/
/*! exports provided: HireServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireServicesComponent", function() { return HireServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HireServicesComponent {
    constructor(_location, route) {
        this._location = _location;
        this.route = route;
    }
    ngOnInit() { }
    goBack() {
        this._location.back();
    }
    navigateChess() {
        console.log('inside chess fun');
        this.route.navigate(['hire-services', 'chess']);
    }
    navigateWeb() {
        this.route.navigate(['hire-services', 'web']);
    }
    navigateEnglish() {
        this.route.navigate(['hire-services', 'english']);
    }
}
HireServicesComponent.ɵfac = function HireServicesComponent_Factory(t) { return new (t || HireServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HireServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HireServicesComponent, selectors: [["app-hire-services"]], decls: 64, vars: 0, consts: [[1, "text-center", "text-primary", "display-4", "py-4", "text-uppercase", "font", 2, "background-color", "#111"], [1, "container"], [1, "row", "my-5"], [1, "col-md-4"], [1, "row"], [1, "btn", "btn-light", "px-5", "my-2", 3, "click"], [1, "col-md-8"], [1, "card", "mb-3", 2, "max-width", "540px"], [1, "row", "g-0"], ["src", "https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg", "alt", "...", 1, "img-fluid"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "text-muted"], [1, "text-center", "my-4"], [1, "btn", "btn-outline-primary", "px-5", 3, "click"]], template: function HireServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HireServicesComponent_Template_button_click_7_listener() { return ctx.navigateChess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Chess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HireServicesComponent_Template_button_click_10_listener() { return ctx.navigateWeb(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HireServicesComponent_Template_button_click_13_listener() { return ctx.navigateEnglish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HireServicesComponent_Template_a_click_62_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpcmUtc2VydmljZXMvaGlyZS1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HireServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hire-services',
                templateUrl: './hire-services.component.html',
                styleUrls: ['./hire-services.component.css'],
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "MlJy":
/*!********************************************************************!*\
  !*** ./src/app/hire-services/programming/programming.component.ts ***!
  \********************************************************************/
/*! exports provided: ProgrammingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammingComponent", function() { return ProgrammingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProgrammingComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgrammingComponent.ɵfac = function ProgrammingComponent_Factory(t) { return new (t || ProgrammingComponent)(); };
ProgrammingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgrammingComponent, selectors: [["app-programming"]], decls: 3, vars: 0, consts: [[1, "fas", "fa-language", "fa-3x", "text-danger"]], template: function ProgrammingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas, accusantium dicta dolorum assumenda natus mollitia ut, recusandae nisi ducimus nemo? Soluta ducimus est quos illum aliquam, nostrum sit, eligendi inventore, officia ea quae minima et in animi facilis reiciendis culpa recusandae. Doloremque, molestiae assumenda quae quam earum necessitatibus deleniti, distinctio blanditiis illo eius nam, excepturi officiis debitis eum velit. Ducimus, laboriosam nihil, perferendis mollitia eos vitae libero alias obcaecati non et, ullam minima? Suscipit quisquam optio tempora provident corporis dolores sit quod tenetur pariatur labore minima, perferendis aliquam error obcaecati non, ducimus aut corrupti tempore! Libero blanditiis optio natus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpcmUtc2VydmljZXMvcHJvZ3JhbW1pbmcvcHJvZ3JhbW1pbmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgrammingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-programming',
                templateUrl: './programming.component.html',
                styleUrls: ['./programming.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _hire_services_hire_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hire-services/hire-services.component */ "KXxk");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contacts.component */ "iZNs");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _hire_services_web_web_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hire-services/web/web.component */ "vNyL");
/* harmony import */ var _hire_services_programming_programming_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hire-services/programming/programming.component */ "MlJy");
/* harmony import */ var _hire_services_chess_chess_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hire-services/chess/chess.component */ "4mys");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _hire_services_hire_services_component__WEBPACK_IMPORTED_MODULE_6__["HireServicesComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _hire_services_web_web_component__WEBPACK_IMPORTED_MODULE_11__["WebComponent"],
        _hire_services_programming_programming_component__WEBPACK_IMPORTED_MODULE_12__["ProgrammingComponent"],
        _hire_services_chess_chess_component__WEBPACK_IMPORTED_MODULE_13__["ChessComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _hire_services_hire_services_component__WEBPACK_IMPORTED_MODULE_6__["HireServicesComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _hire_services_web_web_component__WEBPACK_IMPORTED_MODULE_11__["WebComponent"],
                    _hire_services_programming_programming_component__WEBPACK_IMPORTED_MODULE_12__["ProgrammingComponent"],
                    _hire_services_chess_chess_component__WEBPACK_IMPORTED_MODULE_13__["ChessComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 100, vars: 0, consts: [[1, "my-color"], ["id", "navBar", 1, "navbar", "px-3", "navbar-expand-lg"], ["href", "#", 1, "navbar-brand", "ml-5"], ["src", "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU3IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMTU3IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGQ9Ik0yNS42NDE0IDI2LjYxNzJMMjkuMDg2NyA4LjQwNjI1SDM0LjM0MjZMMjguNjY0OCAzNEgyMy4zNTYyTDE5LjE5MDIgMTYuODc4OUwxNS4wMjQyIDM0SDkuNzE1NjJMNC4wMzc4OSA4LjQwNjI1SDkuMjkzNzVMMTIuNzU2NiAyNi41ODJMMTYuOTc1NCA4LjQwNjI1SDIxLjQ0MDJMMjUuNjQxNCAyNi42MTcyWk00OC42NjUyIDM0LjM1MTZDNDUuODc2MiAzNC4zNTE2IDQzLjYwMjcgMzMuNDk2MSA0MS44NDQ5IDMxLjc4NTJDNDAuMDk4OCAzMC4wNzQyIDM5LjIyNTggMjcuNzk0OSAzOS4yMjU4IDI0Ljk0NzNWMjQuNDU1MUMzOS4yMjU4IDIyLjU0NDkgMzkuNTk0OSAyMC44Mzk4IDQwLjMzMzIgMTkuMzM5OEM0MS4wNzE1IDE3LjgyODEgNDIuMTE0NCAxNi42NjggNDMuNDYyMSAxNS44NTk0QzQ0LjgyMTUgMTUuMDM5MSA0Ni4zNjg0IDE0LjYyODkgNDguMTAyNyAxNC42Mjg5QzUwLjcwNDMgMTQuNjI4OSA1Mi43NDkyIDE1LjQ0OTIgNTQuMjM3NSAxNy4wODk4QzU1LjczNzUgMTguNzMwNSA1Ni40ODc1IDIxLjA1NjYgNTYuNDg3NSAyNC4wNjg0VjI2LjE0MjZINDQuMzc2MkM0NC41NDAyIDI3LjM4NDggNDUuMDMyNCAyOC4zODA5IDQ1Ljg1MjcgMjkuMTMwOUM0Ni42ODQ4IDI5Ljg4MDkgNDcuNzMzNiAzMC4yNTU5IDQ4Ljk5OTIgMzAuMjU1OUM1MC45NTYyIDMwLjI1NTkgNTIuNDg1NSAyOS41NDY5IDUzLjU4NzEgMjguMTI4OUw1Ni4wODMyIDMwLjkyMzhDNTUuMzIxNSAzMi4wMDIgNTQuMjkwMiAzMi44NDU3IDUyLjk4OTQgMzMuNDU1MUM1MS42ODg3IDM0LjA1MjcgNTAuMjQ3MyAzNC4zNTE2IDQ4LjY2NTIgMzQuMzUxNlpNNDguMDg1MiAxOC43NDIyQzQ3LjA3NzMgMTguNzQyMiA0Ni4yNTcgMTkuMDgyIDQ1LjYyNDIgMTkuNzYxN0M0NS4wMDMxIDIwLjQ0MTQgNDQuNjA0NyAyMS40MTQxIDQ0LjQyODkgMjIuNjc5N0g1MS40OTUzVjIyLjI3NTRDNTEuNDcxOSAyMS4xNTA0IDUxLjE2NzIgMjAuMjgzMiA1MC41ODEyIDE5LjY3MzhDNDkuOTk1MyAxOS4wNTI3IDQ5LjE2MzMgMTguNzQyMiA0OC4wODUyIDE4Ljc0MjJaTTgwLjEyNjYgMjQuNjY2QzgwLjEyNjYgMjcuNzEyOSA3OS40NzYyIDMwLjA5MTggNzguMTc1NCAzMS44MDI3Qzc2Ljg3NDYgMzMuNTAyIDc1LjA1ODIgMzQuMzUxNiA3Mi43MjYyIDM0LjM1MTZDNzAuNjYzNyAzNC4zNTE2IDY5LjAxNzIgMzMuNTYwNSA2Ny43ODY3IDMxLjk3ODVMNjcuNTU4MiAzNEg2Mi45ODc5VjdINjguMDY4VjE2LjY4NTVDNjkuMjM5OCAxNS4zMTQ1IDcwLjc4MDkgMTQuNjI4OSA3Mi42OTEgMTQuNjI4OUM3NS4wMTEzIDE0LjYyODkgNzYuODI3NyAxNS40ODQ0IDc4LjE0MDIgMTcuMTk1M0M3OS40NjQ1IDE4Ljg5NDUgODAuMTI2NiAyMS4yOTEgODAuMTI2NiAyNC4zODQ4VjI0LjY2NlpNNzUuMDQ2NSAyNC4yOTY5Qzc1LjA0NjUgMjIuMzc1IDc0Ljc0MTggMjAuOTc0NiA3NC4xMzI0IDIwLjA5NTdDNzMuNTIzIDE5LjIwNTEgNzIuNjE0OCAxOC43NTk4IDcxLjQwNzggMTguNzU5OEM2OS43OTA2IDE4Ljc1OTggNjguNjc3MyAxOS40MjE5IDY4LjA2OCAyMC43NDYxVjI4LjI1MkM2OC42ODkxIDI5LjU4NzkgNjkuODE0MSAzMC4yNTU5IDcxLjQ0MyAzMC4yNTU5QzczLjA4MzYgMzAuMjU1OSA3NC4xNjE3IDI5LjQ0NzMgNzQuNjc3MyAyNy44MzAxQzc0LjkyMzQgMjcuMDU2NiA3NS4wNDY1IDI1Ljg3ODkgNzUuMDQ2NSAyNC4yOTY5WiIgZmlsbD0iIzEwMkE0MiIvPgo8cGF0aCBkPSJNODcuMjA3IDM0VjguNDA2MjVIOTUuMDgyQzk3LjMzMiA4LjQwNjI1IDk5LjM0MTggOC45MTYwMiAxMDEuMTExIDkuOTM1NTVDMTAyLjg5MyAxMC45NDM0IDEwNC4yODEgMTIuMzg0OCAxMDUuMjc3IDE0LjI1OThDMTA2LjI3MyAxNi4xMjMgMTA2Ljc3MSAxOC4yNDQxIDEwNi43NzEgMjAuNjIzVjIxLjgwMDhDMTA2Ljc3MSAyNC4xNzk3IDEwNi4yNzkgMjYuMjk0OSAxMDUuMjk1IDI4LjE0NjVDMTA0LjMyMiAyOS45OTggMTAyLjk0NSAzMS40MzM2IDEwMS4xNjQgMzIuNDUzMUM5OS4zODI4IDMzLjQ3MjcgOTcuMzczIDMzLjk4ODMgOTUuMTM0OCAzNEg4Ny4yMDdaTTkyLjQ4MDUgMTIuNjc3N1YyOS43NjM3SDk1LjAyOTNDOTcuMDkxOCAyOS43NjM3IDk4LjY2OCAyOS4wODk4IDk5Ljc1NzggMjcuNzQyMkMxMDAuODQ4IDI2LjM5NDUgMTAxLjQwNCAyNC40NjY4IDEwMS40MjggMjEuOTU5VjIwLjYwNTVDMTAxLjQyOCAxOC4wMDM5IDEwMC44ODkgMTYuMDM1MiA5OS44MTA1IDE0LjY5OTJDOTguNzMyNCAxMy4zNTE2IDk3LjE1NjIgMTIuNjc3NyA5NS4wODIgMTIuNjc3N0g5Mi40ODA1Wk0xMjIuNjQxIDM0LjM1MTZDMTE5Ljg1MiAzNC4zNTE2IDExNy41NzkgMzMuNDk2MSAxMTUuODIxIDMxLjc4NTJDMTE0LjA3NSAzMC4wNzQyIDExMy4yMDIgMjcuNzk0OSAxMTMuMjAyIDI0Ljk0NzNWMjQuNDU1MUMxMTMuMjAyIDIyLjU0NDkgMTEzLjU3MSAyMC44Mzk4IDExNC4zMDkgMTkuMzM5OEMxMTUuMDQ3IDE3LjgyODEgMTE2LjA5IDE2LjY2OCAxMTcuNDM4IDE1Ljg1OTRDMTE4Ljc5NyAxNS4wMzkxIDEyMC4zNDQgMTQuNjI4OSAxMjIuMDc5IDE0LjYyODlDMTI0LjY4IDE0LjYyODkgMTI2LjcyNSAxNS40NDkyIDEyOC4yMTMgMTcuMDg5OEMxMjkuNzEzIDE4LjczMDUgMTMwLjQ2MyAyMS4wNTY2IDEzMC40NjMgMjQuMDY4NFYyNi4xNDI2SDExOC4zNTJDMTE4LjUxNiAyNy4zODQ4IDExOS4wMDggMjguMzgwOSAxMTkuODI5IDI5LjEzMDlDMTIwLjY2MSAyOS44ODA5IDEyMS43MDkgMzAuMjU1OSAxMjIuOTc1IDMwLjI1NTlDMTI0LjkzMiAzMC4yNTU5IDEyNi40NjEgMjkuNTQ2OSAxMjcuNTYzIDI4LjEyODlMMTMwLjA1OSAzMC45MjM4QzEyOS4yOTcgMzIuMDAyIDEyOC4yNjYgMzIuODQ1NyAxMjYuOTY1IDMzLjQ1NTFDMTI1LjY2NCAzNC4wNTI3IDEyNC4yMjMgMzQuMzUxNiAxMjIuNjQxIDM0LjM1MTZaTTEyMi4wNjEgMTguNzQyMkMxMjEuMDUzIDE4Ljc0MjIgMTIwLjIzMyAxOS4wODIgMTE5LjYgMTkuNzYxN0MxMTguOTc5IDIwLjQ0MTQgMTE4LjU4IDIxLjQxNDEgMTE4LjQwNSAyMi42Nzk3SDEyNS40NzFWMjIuMjc1NEMxMjUuNDQ4IDIxLjE1MDQgMTI1LjE0MyAyMC4yODMyIDEyNC41NTcgMTkuNjczOEMxMjMuOTcxIDE5LjA1MjcgMTIzLjEzOSAxOC43NDIyIDEyMi4wNjEgMTguNzQyMlpNMTQzLjgzNyAyNy43OTQ5TDE0Ny4zNyAxNC45ODA1SDE1Mi42NzlMMTQ2LjI2MiAzNEgxNDEuNDExTDEzNC45OTUgMTQuOTgwNUgxNDAuMzA0TDE0My44MzcgMjcuNzk0OVoiIGZpbGw9IiMyQ0FFQkEiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjAzNzg4NzYiIHk9IjciIHdpZHRoPSIxNTYuNjQxIiBoZWlnaHQ9IjM1LjM1MTYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSI0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K", "alt", "Logo"], ["src", "https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif", "width", "50"], ["type", "button", "data-toggle", "collapse", "data-target", "#myNav", 1, "navbar-toggler"], [1, "navbar-icon"], [1, "fas", "fa-bars"], ["id", "myNav", 1, "collpase", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], ["routerLinkActive", "active", 1, "nav-item", "mx-5"], ["routerLink", "/header", 1, "nav-link", "text-uppercase", "font-weight-bold", 2, "border-top-left-radius", "10px", "border-bottom-left-radius", "10px"], ["routerLink", "/projects", 1, "nav-link", "text-uppercase", "font-weight-bold"], ["routerLink", "/hire-services", 1, "nav-link", "text-uppercase", "font-weight-bold"], ["routerLink", "/contact", 1, "nav-link", "text-uppercase", "font-weight-bold", 2, "border-top-right-radius", "10px", "border-bottom-right-radius", "10px"], [1, "nav-icons", "d-none", "d-lg-block", "mr-5"], ["href", "https://www.facebook.com/aditya.gautam.3158", 1, "nav-icon"], [1, "fab", "fa-facebook"], ["href", "https://www.instagram.com/chaotic.bloke", 1, "nav-icon"], [1, "fab", "fa-instagram", "text-danger"], ["href", "https://www.twitter.com/chaoticbloke", 1, "nav-icon"], [1, "fab", "fa-twitter"], ["id", "profile"], [1, "container-fluid"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-md-4", "text-center"], [1, "display-4", "mt-5"], [1, "underline", "bg-danger", "mx-auto", "my-2"], ["href", "#", 1, "btn", "btn-outline-danger", "rounded-pill", "mx-2", "text-uppercase"], ["href", "#", 1, "btn", "btn-outline-danger", "rounded-pill", "text-uppercase"], [1, "col-md-4", "my-5"], ["src", "https://image.freepik.com/free-vector/cute-man-with-laptop-code-programming_24640-23435.jpg", "width", "60%", 1, "img-fluid", "ml-5", "cartoon"], [1, "my-5"], [1, "text-center", "text-dark"], [1, "underline2", "mx-auto", "bg-danger", "my-3"], [1, "container", "mt-5"], [1, "row"], [1, "col", "ml-5"], [1, "card", "shadow", "p-3", "mb-5"], ["src", "assets\\tours.png", "alt", "", 1, "card-img-top", 2, "height", "180px"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], [1, "d-flex"], [1, "fab", "fa-react", "fa-2x", "text-info", "mr-4"], ["href", "https://tours-react-beginner-project.netlify.app/", 1, "btn", "btn-outline-danger", "text-uppercase"], ["src", "assets\\car-house.png", "alt", "", 1, "card-img-top", 2, "height", "180px"], [1, "fab", "fa-bootstrap", "fa-2x", "text-danger", "mr-4"], ["href", "https://car-house.netlify.app/", 1, "btn", "btn-outline-danger", "text-uppercase"], ["src", "assets\\shopping.png", "alt", "", 1, "card-img-top", 2, "height", "180px"], [1, "fab", "fa-js", "fa-2x", "text-success", "mr-4"], ["href", "https://furniture-point.netlify.app/", 1, "btn", "btn-outline-danger", "text-uppercase"], [1, "text-center", "lead", "text-success", "font-weight-bold", "my-3", "text-uppercase"], ["routerLink", "/projects", "target", "_blank", 1, "btn", "btn-lg", "btn-outline-danger"], [1, "fas", "fa-location-arrow", "pl-3"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Aditya Gautam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Videographer and Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Hire me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Leave a message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Recent Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Tours Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Using React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "see project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Car House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h6", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Using HTML5 CSS3 and Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "see project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h6", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Using HTML5 CSS3 and ES6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "see project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "All Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);\n\n.my-color[_ngcontent-%COMP%] {\n}\n\n.navbar-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: blue;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: rgb(5, 1, 3);\n  transform: scale(1.1);\n  transition: 0.5s ease all;\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-decoration: none !important;\n  transition-property: color;\n  transition-duration: 2s;\n  transition-timing-function: linear;\n}\n\n.cartoon[_ngcontent-%COMP%] {\n  margin-left: 100px !important;\n}\n\n.underline[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 5px;\n}\n\n.underline2[_ngcontent-%COMP%] {\n  width: 6%;\n  height: 5px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  text-align: center;\n  margin: auto;\n}\n\nnav[_ngcontent-%COMP%] {\n  font-family: Open Sans !important;\n  font-style: italic !important;\n}\n\n@media (min-width: 980px) {\n  .nav-link[_ngcontent-%COMP%] {\n    \n    background-color: #cc0000;\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdFQUF3RTs7QUFFeEU7QUFDQTs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwaXRhbGljKTtcblxuLm15LWNvbG9yIHtcbn1cblxuLm5hdmJhci1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHJnYig1LCAxLCAzKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UgYWxsO1xufVxuLm5hdi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG4uY2FydG9vbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuLnVuZGVybGluZSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogNXB4O1xufVxuLnVuZGVybGluZTIge1xuICB3aWR0aDogNiU7XG4gIGhlaWdodDogNXB4O1xufVxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxubmF2IHtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xuICAubmF2LWxpbmsge1xuICAgIC8qIGJhY2tncm91bmQ6IHJnYig0OCwgMTY1LCAyKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "text-center", "py-3", "footer", "fixed-bottom", "bg-secondary"], [1, "fab", "fa-angular", "text-danger"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iZNs":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 2, vars: 0, template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contacts works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vNyL":
/*!****************************************************!*\
  !*** ./src/app/hire-services/web/web.component.ts ***!
  \****************************************************/
/*! exports provided: WebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebComponent", function() { return WebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WebComponent {
    constructor() { }
    ngOnInit() {
    }
}
WebComponent.ɵfac = function WebComponent_Factory(t) { return new (t || WebComponent)(); };
WebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebComponent, selectors: [["app-web"]], decls: 3, vars: 0, consts: [[1, "fas", "fa-laptop-code", "fa-3x", "text-info"]], template: function WebComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis a eaque facilis, est fuga non tempore? Minus fuga asperiores provident quisquam beatae earum aperiam officiis ad? Nemo adipisci labore recusandae corporis voluptatum accusamus veniam. Est quia aliquam delectus impedit debitis, maxime corrupti repudiandae ipsa eveniet deleniti dolores quis, harum officia tempore ad ratione cum. Tempora corporis incidunt perferendis dolorem deleniti non reiciendis velit earum nam, eaque omnis quis ipsum temporibus tempore perspiciatis in sunt voluptates dicta nesciunt cum minima sit sed? Dolor officia illum totam consectetur quos, minus in facere sequi culpa fugiat atque aperiam quo libero deleniti accusantium dicta sed nihil nulla dolorum qui pariatur quibusdam. Natus porro ea aliquam officiis corporis nobis tempore autem, eos error explicabo necessitatibus nostrum vitae sunt deleniti fuga officia deserunt, vel eligendi aut repudiandae voluptas. Dolore autem quae sit necessitatibus veritatis et, magni nesciunt molestiae nulla neque nobis blanditiis dicta, perspiciatis recusandae accusamus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpcmUtc2VydmljZXMvd2ViL3dlYi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web',
                templateUrl: './web.component.html',
                styleUrls: ['./web.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _hire_services_chess_chess_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hire-services/chess/chess.component */ "4mys");
/* harmony import */ var _hire_services_hire_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hire-services/hire-services.component */ "KXxk");
/* harmony import */ var _hire_services_programming_programming_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hire-services/programming/programming.component */ "MlJy");
/* harmony import */ var _hire_services_web_web_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hire-services/web/web.component */ "vNyL");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");











const routes = [
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"] },
    //parent-child
    {
        path: 'hire-services',
        component: _hire_services_hire_services_component__WEBPACK_IMPORTED_MODULE_5__["HireServicesComponent"],
        children: [
            {
                path: 'chess',
                component: _hire_services_chess_chess_component__WEBPACK_IMPORTED_MODULE_4__["ChessComponent"],
            },
            { path: 'web', component: _hire_services_web_web_component__WEBPACK_IMPORTED_MODULE_7__["WebComponent"] },
            { path: 'english', component: _hire_services_programming_programming_component__WEBPACK_IMPORTED_MODULE_6__["ProgrammingComponent"] },
        ],
    },
    { path: 'contact', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: '**', component: _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function ProjectsComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
} }
function ProjectsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Card title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some quick example text to build on the card title and make up the bulk of the card's content.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
class ProjectsComponent {
    constructor() {
        this.option = ["All", "HTML&CSS", "Vanilla JS", "React", "Angular", "Full Stack"];
        this.data = ["HTML&CSS", "Vanilla JS", "React", "Angular", "Full Stack", "HTML&CSS", "Vanilla JS", "React", "Angular", "Full Stack"];
    }
    ngOnInit() {
    }
    handleFilter(val) {
        this.data = ["HTML&CSS", "Vanilla JS", "React", "Angular", "Angular", "Full Stack", "HTML&CSS", "Vanilla JS", "React", "React", "React", "Angular", "Full Stack"];
        let temp = val.target.value;
        let d = [];
        for (let x of this.data) {
            if (x === temp)
                d.push(x);
        }
        if (temp === 'All') {
            //do nothing
        }
        else
            this.data = d;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 16, vars: 2, consts: [[1, "bg-dark", "text-primary", "py-5", "display-4", "text-center", "font-weight-bold"], [1, "text-center", "py-3", "text-capitalize"], ["for", "skills", 1, "bg-light", "mx-2"], ["name", "skills", 1, "bg-light", "rounded", 3, "change"], [4, "ngFor", "ngForOf"], ["id", "projects", 1, "py-3", "text-center"], [1, "container"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mb-3"], ["routerLink", "/home", 1, "btn", "btn-lg", "btn-outline-danger", "text-uppercase", "text-center", "animated", "pulse"], [1, "fas", "fa-chevron-left", "mr-2"], [1, "col-md-4"], [1, "card", "shadow", "p-3", "mb-5", 2, "width", "18rem"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-secondary", "btn-outline-secondary", "bg-light"], ["href", "#", 1, "btn", "btn-primary"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nAll Projects\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filter projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProjectsComponent_Template_select_change_6_listener($event) { return ctx.handleFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_option_7_Template, 2, 1, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsComponent_div_11_Template, 11, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back to home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".card[_ngcontent-%COMP%]{\r\n   margin-bottom: 15px;\r\n   border-radius: 10px;\r\n   text-align: center;\r\n}\r\n#projects[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLG1CQUFtQjtHQUNuQixtQkFBbUI7R0FDbkIsa0JBQWtCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7T0FXTyIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNwcm9qZWN0cyBhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLyogLmJ0dG57XHJcbiAgICBhbmltYXRpb24tbmFtZTogYnV0dG9uLWFuaW1hdGlvbiAycyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJ1dHRvbi1hbmltYXRpb257XHJcbiAgICBmcm9te1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMSk7XHJcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIHRve1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWRkbGVicm93bjtcclxuICAgIH0gKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map