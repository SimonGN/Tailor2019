webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PhotoText/PhotoText.js":
/*!*******************************************!*\
  !*** ./components/PhotoText/PhotoText.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PhotoTextStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhotoTextStyle */ "./components/PhotoText/PhotoTextStyle.js");
/* harmony import */ var _styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/fontsStyles/fontP */ "./styles/fontsStyles/fontP.js");
/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../content/home.json */ "./content/home.json");
var _content_home_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/home.json */ "./content/home.json", 1);
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/PhotoText/PhotoText.js";






var displayHome = function displayHome() {
  return _content_home_json__WEBPACK_IMPORTED_MODULE_4__.map(function (member, i) {
    var img = member.img,
        title = member.title,
        text1 = member.text1,
        text2 = member.text2;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "global",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "#b5fcbe",
      size: "12px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, " ", title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "#b5fcbe",
      size: "12px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, " ", text1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "#b5fcbe",
      size: "12px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, " ", text2)));
  });
};

var PhotoText = function PhotoText(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotoTextStyle__WEBPACK_IMPORTED_MODULE_2__["PhotoTextStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, displayHome());
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoText);

/***/ })

})
//# sourceMappingURL=index.js.f38eda24bfccf49330fb.hot-update.js.map