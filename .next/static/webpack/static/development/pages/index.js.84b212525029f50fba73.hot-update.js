webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VideoGallery/VideoGallery.js":
/*!*************************************************!*\
  !*** ./components/VideoGallery/VideoGallery.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _VideoGalleryStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VideoGalleryStyle */ "./components/VideoGallery/VideoGalleryStyle.js");
/* harmony import */ var _styles_fontsStyles_fonta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/fonta */ "./styles/fontsStyles/fonta.js");
/* harmony import */ var _styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/fontsStyles/fontP */ "./styles/fontsStyles/fontP.js");
/* harmony import */ var _styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/fontsStyles/Fonth2 */ "./styles/fontsStyles/Fonth2.js");
/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../content/home.json */ "./content/home.json");
var _content_home_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/home.json */ "./content/home.json", 1);
/* harmony import */ var _content_opinion_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../content/opinion.json */ "./content/opinion.json");
var _content_opinion_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/opinion.json */ "./content/opinion.json", 1);

var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/VideoGallery/VideoGallery.js";









var VideoGallery = function VideoGallery(props) {
  var title10 = _content_home_json__WEBPACK_IMPORTED_MODULE_7__.title10,
      text9 = _content_home_json__WEBPACK_IMPORTED_MODULE_7__.text9;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_content_opinion_json__WEBPACK_IMPORTED_MODULE_8__[0]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      opinionItem = _useState4[0],
      setOpinionItems = _useState4[1];

  var changeItem = function changeItem(number) {
    setOpinionItems(_content_opinion_json__WEBPACK_IMPORTED_MODULE_8__[number]);
  };

  var changeTab = function changeTab(number) {
    if (number >= 0 && number < 4) {
      setTab(number);
      changeItem(number);
    }
  };

  var photo = opinionItem.photo,
      url = opinionItem.url,
      description = opinionItem.description,
      name = opinionItem.name;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_VideoGalleryStyle__WEBPACK_IMPORTED_MODULE_3__["VideoGalleryStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "global",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "column1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Fonta, {
    className: "play",
    color: "white",
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, text9), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: photo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, " ", title10)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "colum1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "buttonDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(tab === 0 && 'active'),
    onClick: function onClick() {
      return changeTab(0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(tab === 1 && 'active'),
    onClick: function onClick() {
      return changeTab(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (VideoGallery);

/***/ }),

/***/ "./styles/fontsStyles/fonta.js":
/*!*************************************!*\
  !*** ./styles/fontsStyles/fonta.js ***!
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
//# sourceMappingURL=index.js.84b212525029f50fba73.hot-update.js.map