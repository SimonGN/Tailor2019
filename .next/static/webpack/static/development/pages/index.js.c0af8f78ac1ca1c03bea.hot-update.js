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








var displayImg = function displayImg() {
  return _content_home_json__WEBPACK_IMPORTED_MODULE_5__.map(function (member, i) {
    var img = member.img;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "global",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "colum1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })));
  });
};

var displayTitle = function displayTitle() {
  return _content_home_json__WEBPACK_IMPORTED_MODULE_5__.map(function (member, i) {
    var img = member.img;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "global",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "colum1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })));
  });
};

var displayTeam = function displayTeam() {
  return _content_team_json__WEBPACK_IMPORTED_MODULE_6__.map(function (member, i) {
    var img = member.img,
        title = member.title,
        name = member.name,
        cargo = member.cargo;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "global",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "colum1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, " ", title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "colum1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_Fonth1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, " ", name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "linkedin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, " ", cargo)))));
  });
};

var Team = function Team(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TeamStyle__WEBPACK_IMPORTED_MODULE_1__["TeamStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "global",
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "colum1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, displayImg()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, " ", title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "colum1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_Fonth1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, " ", name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, " ", cargo))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ })

})
//# sourceMappingURL=index.js.c0af8f78ac1ca1c03bea.hot-update.js.map