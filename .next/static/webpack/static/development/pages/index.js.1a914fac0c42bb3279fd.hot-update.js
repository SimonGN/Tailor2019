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
/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../content/home.json */ "./content/home.json");
var _content_home_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/home.json */ "./content/home.json", 1);
/* harmony import */ var _content_opinion_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../content/opinion.json */ "./content/opinion.json");
var _content_opinion_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/opinion.json */ "./content/opinion.json", 1);

var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/WorkGallery/WorkGallery.js";









var WorkGallery = function WorkGallery(props) {
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkGalleryStyle__WEBPACK_IMPORTED_MODULE_3__["WorkGalleryStyle"], {
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fonta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "16px",
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

/* harmony default export */ __webpack_exports__["default"] = (WorkGallery);

/***/ }),

/***/ "./components/WorkGallery/WorkGalleryStyle.js":
/*!****************************************************!*\
  !*** ./components/WorkGallery/WorkGalleryStyle.js ***!
  \****************************************************/
/*! exports provided: WorkGalleryStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkGalleryStyle", function() { return WorkGalleryStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbackground-color: #0F1C51;\n    img{\n        width:100%;\n        object-fit:cover;\n        position:relative;\n        opacity:100%;\n        filter: blur(10px);\n       \n    }\n    .play{ \n        width:50%;\n        height:100%;\n        position:absolute;\n        z-index:1;\n        display: flex;\n        align-items: center;\n        justify-content:center;\n        cursor:pointer;\n    }\n    .text{\n        display: flex;\n        flex-direction: column;\n        & > p{\n            margin-bottom:5%;\n        }\n    }\n    .title{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        white-space: nowrap;\n        writing-mode: vertical-lr;\n        transform: rotate(180deg);\n    }\n    .global{\n        display:flex;\n    }\n    .buttonDiv{\n        display:flex;\n        justify-content:center;\n        margin-top:10%;\n        div{\n            width: 15px;\n            height: 15px;\n            -moz-border-radius: 50%;\n            -webkit-border-radius: 50%;\n            border-radius: 50%;\n            background: transparent;\n            border: 1px solid white;\n            margin-left:2%;\n            cursor:pointer;\n        }\n        div:first-child{\n            margin-left:0;\n        }\n        div.active {\n            background-color:white;\n        }\n    }\n\n\n    \n    \n    @media only screen and (min-width:415px) and (max-width:768px){\n        \n    }\n    @media only screen and (min-width:769px) {\n        h1{\n            margin-bottom:2.5%;\n        }\n        .colum1, .colum2{\n            width:46%\n        }\n        .photo{\n            width:100%;\n\n        }\n        img{\n            min-height:80vh;\n\n        }\n        .title{\n            width:8%;\n            white-space: nowrap;\n            writing-mode: vertical-lr;\n            transform: rotate(180deg);\n        }\n        .text{\n            width: 80%;\n            min-height: 100%;\n            justify-content: center;\n        }\n\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var WorkGalleryStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());


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
/* harmony import */ var _components_WorkGallery_WorkGallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WorkGallery/WorkGallery */ "./components/WorkGallery/WorkGallery.js");
/* harmony import */ var _components_IpadText_IpadText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IpadText/IpadText */ "./components/IpadText/IpadText.js");
/* harmony import */ var _components_Services_Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Services/Services */ "./components/Services/Services.js");
/* harmony import */ var _components_TextPhoto_TextPhoto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TextPhoto/TextPhoto */ "./components/TextPhoto/TextPhoto.js");
/* harmony import */ var _components_PhotoTeam_PhotoTeam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PhotoTeam/PhotoTeam */ "./components/PhotoTeam/PhotoTeam.js");
/* harmony import */ var _components_VideoGallery_VideoGallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/VideoGallery/VideoGallery */ "./components/VideoGallery/VideoGallery.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/pages/index.js";











function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhotoText_PhotoText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WorkGallery_WorkGallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IpadText_IpadText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Services_Services__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextPhoto_TextPhoto__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhotoTeam_PhotoTeam__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VideoGallery_VideoGallery__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.1a914fac0c42bb3279fd.hot-update.js.map