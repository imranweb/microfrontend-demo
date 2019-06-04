(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmohimran%2Fprojects%2Fsapient%2Fmicrofrontend-demo%2Fpackages%2Fcart%2Fpages%2Findex.js!./":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/mohimran/projects/sapient/microfrontend-demo/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmohimran%2Fprojects%2Fsapient%2Fmicrofrontend-demo%2Fpackages%2Fcart%2Fpages%2Findex.js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "../../node_modules/react/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ../../node_modules/react/index.js from dll-reference dll_eea4c2bd957b91b8bf6f ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_eea4c2bd957b91b8bf6f */ "dll-reference dll_eea4c2bd957b91b8bf6f"))("../../node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mohimran/projects/sapient/microfrontend-demo/packages/cart/pages/index.js";

var prefix =  true ? 'http://localhost:5002' : undefined;
var image = "".concat(prefix, "/static/cart.png");

var onClickHandler = function onClickHandler() {
  console.log("%c%cCheckout button not working", "background:black ; color: white", "color: red; font-size:25px"); //window.location.href =  '/checkout';
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "100%",
    src: image,
    useMap: "#image-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("map", {
    name: "image-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("area", {
    target: "",
    alt: "",
    title: "",
    onClick: onClickHandler,
    coords: "1491,470,1062,417",
    shape: "rect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })));
});

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fmohimran%2Fprojects%2Fsapient%2Fmicrofrontend-demo%2Fpackages%2Fcart%2Fpages%2Findex.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fmohimran%2Fprojects%2Fsapient%2Fmicrofrontend-demo%2Fpackages%2Fcart%2Fpages%2Findex.js! */"../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmohimran%2Fprojects%2Fsapient%2Fmicrofrontend-demo%2Fpackages%2Fcart%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_eea4c2bd957b91b8bf6f":
/*!*******************************************!*\
  !*** external "dll_eea4c2bd957b91b8bf6f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_eea4c2bd957b91b8bf6f;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map