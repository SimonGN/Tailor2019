webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/WorkGallery/WorkGallery.js":
/*!***********************************************!*\
  !*** ./components/WorkGallery/WorkGallery.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WorkGalleryStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkGalleryStyle */ "./components/WorkGallery/WorkGalleryStyle.js");
/* harmony import */ var _styles_fontsStyles_fonta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/fonta */ "./styles/fontsStyles/fonta.js");
/* harmony import */ var _styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/fontsStyles/fontP */ "./styles/fontsStyles/fontP.js");
/* harmony import */ var _styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/fontsStyles/Fonth2 */ "./styles/fontsStyles/Fonth2.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../content/home.json */ "./content/home.json");
var _content_home_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/home.json */ "./content/home.json", 1);
/* harmony import */ var _content_project_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../content/project.json */ "./content/project.json");
var _content_project_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/project.json */ "./content/project.json", 1);

var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/WorkGallery/WorkGallery.js";










var WorkGallery = function WorkGallery(props) {
  // const {  } = project;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_content_project_json__WEBPACK_IMPORTED_MODULE_9__[0]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      projectItem = _useState4[0],
      setProjectItems = _useState4[1];

  var changeItem = function changeItem(number) {
    setProjectItems(_content_project_json__WEBPACK_IMPORTED_MODULE_9__[number]);
  };

  var changeTab = function changeTab(number) {
    if (number >= 0 && number < 4) {
      setTab(number);
      changeItem(number);
    }
  };

  var img = projectItem.img,
      url = projectItem.url,
      name = projectItem.name,
      stackDesign = projectItem.stackDesign,
      stackWeb = projectItem.stackWeb,
      description = projectItem.description,
      client = projectItem.client;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkGalleryStyle__WEBPACK_IMPORTED_MODULE_3__["WorkGalleryStyle"], {
    img: img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "infoText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "text",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "title",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, client), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "buttonDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(tab === 0 && 'active'),
    onClick: function onClick() {
      return changeTab(0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(tab === 1 && 'active'),
    onClick: function onClick() {
      return changeTab(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(tab === 2 && 'active'),
    onClick: function onClick() {
      return changeTab(2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(tab === 3 && 'active'),
    onClick: function onClick() {
      return changeTab(3);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkGallery);

/***/ })

})
//# sourceMappingURL=index.js.b311932286ffe8da70d5.hot-update.js.map