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
/* harmony import */ var _styles_fontsStyles_FontA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/fontsStyles/FontA */ "./styles/fontsStyles/FontA.js");
/* harmony import */ var _styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/Fonth2 */ "./styles/fontsStyles/Fonth2.js");
/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content/home.json */ "./content/home.json");
var _content_home_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/home.json */ "./content/home.json", 1);
/* harmony import */ var _content_team_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../content/team.json */ "./content/team.json");
var _content_team_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/team.json */ "./content/team.json", 1);
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/Team/Team.js";








var displayImg = function displayImg() {
  return _content_home_json__WEBPACK_IMPORTED_MODULE_5__.map(function (member, i) {
    var img = member.img;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  });
};

var displayTitle = function displayTitle() {
  return _content_home_json__WEBPACK_IMPORTED_MODULE_5__.map(function (member, i) {
    var title = member.title;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, " ", title);
  });
};

var displayTeam = function displayTeam() {
  return _content_team_json__WEBPACK_IMPORTED_MODULE_6__.map(function (member, i) {
    var name = member.name,
        cargo = member.cargo; // <FontA target="_blank" href={linkedin}>{name}</FontA>                 

    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, " ", cargo);
  });
};

var Team = function Team(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TeamStyle__WEBPACK_IMPORTED_MODULE_1__["TeamStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "global",
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "colum1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, displayImg()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, displayTitle()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "colum1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, displayTitle()))));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./components/TextPhoto/TextPhoto.js":
/*!*******************************************!*\
  !*** ./components/TextPhoto/TextPhoto.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextPhotoStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextPhotoStyle */ "./components/TextPhoto/TextPhotoStyle.js");
/* harmony import */ var _styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/fontsStyles/fontP */ "./styles/fontsStyles/fontP.js");
/* harmony import */ var _styles_fontsStyles_Fonth1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/Fonth1 */ "./styles/fontsStyles/Fonth1.js");
/* harmony import */ var _styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/fontsStyles/Fonth2 */ "./styles/fontsStyles/Fonth2.js");
/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../content/home.json */ "./content/home.json");
var _content_home_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/home.json */ "./content/home.json", 1);
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/TextPhoto/TextPhoto.js";








var displayHome = function displayHome() {
  return _content_home_json__WEBPACK_IMPORTED_MODULE_6__.map(function (member, i) {
    var img3 = member.img3,
        title4 = member.title4,
        text5 = member.text5,
        text6 = member.text6;
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_Fonth1__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, " ", text5), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, " ", text6))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, " ", title4)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "colum1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: img3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })));
  });
};

var TextPhoto = function TextPhoto(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextPhotoStyle__WEBPACK_IMPORTED_MODULE_2__["TextPhotoStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, displayHome());
};

/* harmony default export */ __webpack_exports__["default"] = (TextPhoto);

/***/ }),

/***/ "./styles/fontsStyles/FontA.js":
/*!*************************************!*\
  !*** ./styles/fontsStyles/FontA.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-family: Grabenbach-regular,Helvetica,Arial;\n    font-weight: 400;\n    font-size: ", ";\n    letter-spacing: 1px;\n    line-height: 1.35;\n    color: ", ";;\n    text-align: ", ";;\n    cursor:pointer;\n\n\n    @media only screen and (min-width:769px){\n        font-size: ", ";\n    }\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FontA = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject(), function (props) {
  return props.size ? props.size : '19px';
}, function (props) {
  return props.color ? props.color : '#0F1C51';
}, function (props) {
  return props.align ? props.align : 'left';
}, function (props) {
  return props.size ? props.size : '25px';
});
/* harmony default export */ __webpack_exports__["default"] = (FontA);

/***/ })

})
//# sourceMappingURL=index.js.04bda5e7d9bf9a9c6cb6.hot-update.js.map