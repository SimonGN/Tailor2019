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
/* harmony import */ var _PhotoTeamStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoTeamStyle */ "./components/PhotoTeam/PhotoTeamStyle.js");
/* harmony import */ var _styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/fontsStyles/fontP */ "./styles/fontsStyles/fontP.js");
/* harmony import */ var _styles_fontsStyles_FontA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/fontsStyles/FontA */ "./styles/fontsStyles/FontA.js");
/* harmony import */ var _styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/Fonth2 */ "./styles/fontsStyles/Fonth2.js");
/* harmony import */ var _content_team_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content/team.json */ "./content/team.json");
var _content_team_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/team.json */ "./content/team.json", 1);
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/PhotoTeam/Team.js";








var displayTeam = function displayTeam() {
  return _content_team_json__WEBPACK_IMPORTED_MODULE_5__.map(function (member, i) {
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
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, cargo));
  });
};

var Team = function Team(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotoTeamStyle__WEBPACK_IMPORTED_MODULE_1__["PhotoTeamStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, displayTeam());
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./content/team.json":
/*!***************************!*\
  !*** ./content/team.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = [{"name":"Ines Guerra","cargo":"Head of Operations & Sales","linkedin":"https://www.linkedin.com/in/ines-guerra-molina-2847bb100/"},{"name":"Diego Méndez","cargo":"Head of Product","linkedin":"https://www.linkedin.com/in/diegomendezpe%C3%B1o/"},{"name":"Simón G. Negrete","cargo":"Head of Design","linkedin":"https://www.linkedin.com/in/simongnegrete/"},{"name":"Alberto Soler","cargo":"Full Stack Developer","linkedin":"https://www.linkedin.com/in/albertosolerpalau/"},{"name":"María Losada","cargo":"Junior UX & UI","linkedin":"https://www.linkedin.com/in/mar%C3%ADalosada/"},{"name":"Rubén Villar","cargo":"Full Stack Developer","linkedin":"https://www.linkedin.com/in/rubenvillargrela/"}];

/***/ })

})
//# sourceMappingURL=index.js.134e14ce47ee54dba9a7.hot-update.js.map