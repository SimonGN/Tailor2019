webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Team/Team.js":
/*!*********************************!*\
  !*** ./components/Team/Team.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeamStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamStyle */ "./components/Team/TeamStyle.js");
/* harmony import */ var _styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/fontsStyles/fontP */ "./styles/fontsStyles/fontP.js");
/* harmony import */ var _styles_fontsStyles_Fonth1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/fontsStyles/Fonth1 */ "./styles/fontsStyles/Fonth1.js");
/* harmony import */ var _styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/Fonth2 */ "./styles/fontsStyles/Fonth2.js");
/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content/home.json */ "./content/home.json");
var _content_home_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/home.json */ "./content/home.json", 1);
/* harmony import */ var _content_team_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../content/team.json */ "./content/team.json");
var _content_team_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/team.json */ "./content/team.json", 1);
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/Team/Team.js";








var displayHome = function displayHome() {
  return _content_home_json__WEBPACK_IMPORTED_MODULE_5__.map(function (member, i) {
    var img = member.img,
        title = member.title,
        text1 = member.text1,
        text2 = member.text2;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "global",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "colum1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, " ", title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "colum1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_Fonth1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, " ", name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "linkedin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, " ", cargo)))));
  });
};

var Team = function Team(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TeamStyle__WEBPACK_IMPORTED_MODULE_1__["TeamStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, displayHome());
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./components/Team/TeamStyle.js":
/*!**************************************!*\
  !*** ./components/Team/TeamStyle.js ***!
  \**************************************/
/*! exports provided: PhotoTextStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoTextStyle", function() { return PhotoTextStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    img{\n        width:100%;\n        object-fit:cover;\n    }\n    .text{\n        display: flex;\n        flex-direction: column;\n    }\n    .title{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        white-space: nowrap;\n        writing-mode: vertical-lr;\n        transform: rotate(180deg);\n    }\n    .global{\n        display:flex;\n    }\n\n    \n    \n    @media only screen and (min-width:415px) and (max-width:768px){\n        \n    }\n    @media only screen and (min-width:769px) {\n        h1{\n            margin-bottom:2.5%;\n        }\n        .colum1, .colum2{\n            width:46%\n        }\n        img{\n            height:90vh;\n        }\n        .title{\n            width:8%;\n            white-space: nowrap;\n            writing-mode: vertical-lr;\n            transform: rotate(180deg);\n        }\n        .text{\n            width: 80%;\n            height: 90vh;\n\n            justify-content: center;\n        }\n\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PhotoTextStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());


/***/ }),

/***/ "./content/team.json":
/*!***************************!*\
  !*** ./content/team.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = [{"name":"Ines Guerra","cargo":"Head of Operations & Sales","linkedin":"https://www.linkedin.com/in/ines-guerra-molina-2847bb100/"},{"name":"Diego Méndez","cargo":"Head of Product","linkedin":"https://www.linkedin.com/in/diegomendezpe%C3%B1o/"},{"name":"Simón G. Negrete","cargo":"Head of Design","linkedin":"https://www.linkedin.com/in/simongnegrete/"},{"name":"Alberto Soler","cargo":"Full Stack Developer","linkedin":"https://www.linkedin.com/in/albertosolerpalau/"},{"name":"María Losada","cargo":"Junior UX & UI","linkedin":"https://www.linkedin.com/in/mar%C3%ADalosada/"},{"name":"Rubén Villar","cargo":"Full Stack Developer","linkedin":"https://www.linkedin.com/in/rubenvillargrela/"}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_PhotoText_PhotoText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PhotoText/PhotoText */ "./components/PhotoText/PhotoText.js");
/* harmony import */ var _components_IpadText_IpadText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/IpadText/IpadText */ "./components/IpadText/IpadText.js");
/* harmony import */ var _components_Services_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Services/Services */ "./components/Services/Services.js");
/* harmony import */ var _components_TextPhoto_TextPhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextPhoto/TextPhoto */ "./components/TextPhoto/TextPhoto.js");
/* harmony import */ var _components_Team_Team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Team/Team */ "./components/Team/Team.js");
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/pages/index.js";








function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhotoText_PhotoText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IpadText_IpadText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Services_Services__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextPhoto_TextPhoto__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b69111590ecd25fb92ce.hot-update.js.map