webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PhotoTeam/Team.js":
/*!**************************************!*\
  !*** ./components/PhotoTeam/Team.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeamStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamStyle */ "./components/PhotoTeam/TeamStyle.js");
/* harmony import */ var _styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/fontsStyles/fontP */ "./styles/fontsStyles/fontP.js");
/* harmony import */ var _styles_fontsStyles_FontA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/fontsStyles/FontA */ "./styles/fontsStyles/FontA.js");
/* harmony import */ var _styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/Fonth2 */ "./styles/fontsStyles/Fonth2.js");
/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content/home.json */ "./content/home.json");
var _content_home_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/home.json */ "./content/home.json", 1);
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/PhotoTeam/Team.js";








var displayTeam = function displayTeam() {
  return _content_home_json__WEBPACK_IMPORTED_MODULE_5__.map(function (member, i) {
    var name = member.name,
        cargo = member.cargo,
        linkedin = member.linkedin;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_FontA__WEBPACK_IMPORTED_MODULE_3__["default"], {
      target: "_blank",
      href: linkedin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fontp, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, cargo));
  });
};

var Team = function Team(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TeamStyle__WEBPACK_IMPORTED_MODULE_1__["TeamStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, displayTeam());
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ })

})
//# sourceMappingURL=index.js.6d0edcc4ca21285589fb.hot-update.js.map