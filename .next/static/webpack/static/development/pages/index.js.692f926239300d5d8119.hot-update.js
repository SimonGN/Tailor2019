webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VideoGalery/VideoGalery.js":
/*!***********************************************!*\
  !*** ./components/VideoGalery/VideoGalery.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VideoGaleryStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoGaleryStyle */ "./components/VideoGalery/VideoGaleryStyle.js");
/* harmony import */ var _styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/fontsStyles/fontP */ "./styles/fontsStyles/fontP.js");
/* harmony import */ var _content_opinion_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../content/opinion.json */ "./content/opinion.json");
var _content_opinion_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/opinion.json */ "./content/opinion.json", 1);
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/VideoGalery/VideoGalery.js";





var VideoGalery = function VideoGalery(props) {
  var logo = _content_opinion_json__WEBPACK_IMPORTED_MODULE_3__.logo,
      email = _content_opinion_json__WEBPACK_IMPORTED_MODULE_3__.email,
      phone = _content_opinion_json__WEBPACK_IMPORTED_MODULE_3__.phone,
      direction = _content_opinion_json__WEBPACK_IMPORTED_MODULE_3__.direction,
      cc = _content_opinion_json__WEBPACK_IMPORTED_MODULE_3__.cc;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VideoGaleryStyle__WEBPACK_IMPORTED_MODULE_1__["VideoGaleryStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "global",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fonth2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " ", title2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (VideoGalery);

/***/ }),

/***/ "./components/VideoGalery/VideoGaleryStyle.js":
/*!****************************************************!*\
  !*** ./components/VideoGalery/VideoGaleryStyle.js ***!
  \****************************************************/
/*! exports provided: VideoGaleryStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGaleryStyle", function() { return VideoGaleryStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbackground-color: #0F1C51\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var VideoGaleryStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());


/***/ }),

/***/ "./content/opinion.json":
/*!******************************!*\
  !*** ./content/opinion.json ***!
  \******************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = [{"photo":"/static/img/imgValuesTailor.jpg","url":"","description":"“Necesitábamos un equipo capaz de conseguir un efecto WOW, que nuestros clientes al mirar la página web, se quedan sorprendidos”","name":"Piere Paradis, VASALTO"},{"photo":"/static/img/imgValuesTailor.jpg","url":"","description":"“Facilidades en todos los sentidos, y además con unas ideas de diseño y desarrollo que se salían de lo habitual”","name":"Alfonso Fernandez, AMAPED"}];

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
/* harmony import */ var _components_PhotoTeam_PhotoTeam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PhotoTeam/PhotoTeam */ "./components/PhotoTeam/PhotoTeam.js");
/* harmony import */ var _components_VideoGalery_VideoGalery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/VideoGalery/VideoGalery */ "./components/VideoGalery/VideoGalery.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/pages/index.js";










function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhotoText_PhotoText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IpadText_IpadText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Services_Services__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextPhoto_TextPhoto__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhotoTeam_PhotoTeam__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.692f926239300d5d8119.hot-update.js.map