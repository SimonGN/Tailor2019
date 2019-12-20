webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Services/Services.js":
/*!*****************************************!*\
  !*** ./components/Services/Services.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServicesStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServicesStyle */ "./components/Services/ServicesStyle.js");
/* harmony import */ var _styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/fontsStyles/Fonth2 */ "./styles/fontsStyles/Fonth2.js");
/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../content/home.json */ "./content/home.json");
var _content_home_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/home.json */ "./content/home.json", 1);
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/components/Services/Services.js";





var displayService = function displayService() {
  return _content_home_json__WEBPACK_IMPORTED_MODULE_3__.map(function (member, i) {
    var title3 = member.title3;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "global",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_fontsStyles_Fonth2__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, " ", title3));
  });
};

var Services = function Services(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServicesStyle__WEBPACK_IMPORTED_MODULE_1__["ServicesStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "global",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, displayService(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "scroll1",
    src: "/static/svg/services/scroll1.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "scroll2",
    src: "/static/svg/services/scroll2.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "scroll3",
    src: "/static/svg/services/scroll3.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "scroll4",
    src: "/static/svg/services/scroll4.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/Services/ServicesStyle.js":
/*!**********************************************!*\
  !*** ./components/Services/ServicesStyle.js ***!
  \**********************************************/
/*! exports provided: ServicesStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesStyle", function() { return ServicesStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n    padding-bottom:100px;\n    @-webkit-keyframes drift{\n    0% {\n        -webkit-transform:translateX(0);\n        transform:translateX(0);\n    }\n    to{\n        -webkit-transform:translateX(-100%);\n        transform:translateX(-100%);\n    }\n    }\n    @keyframes drift{\n    0%\n    {\n        -webkit-transform:translateX(0);\n        transform:translateX(0);\n    }\n    to{\n        -webkit-transform:translateX(-100%);\n        transform:translateX(-100%);\n    }\n    }\n    .svg {\n        width:1800vw;\n        -webkit-animation:drift 200s linear infinite alternate;\n        animation:drift 200s linear infinite alternate;\n    }\n\n    .global{\n        position:relative;\n    }\n\n    .title{\n        writing-mode: vertical-rl;\n        transform: rotate(180deg);\n        margin-bottom:8%;\n        position:absolute;\n        left: 2%;\n        top: 12%;\n        z-index: 1;\n    }\n\n    @media only screen and (min-width:415px) and (max-width:768px){\n        display: flex;\n        align-items: center;\n        .title{\n            writing-mode: vertical-rl;\n            transform: rotate(180deg);\n            position:absolute;\n            left: 1.33%;\n            top: 16%;\n            z-index: 1;\n        }\n        .svg {\n            width:3000vw;\n        }\n    }\n    @media only screen and (min-width:769px) and (max-width:1024px){\n        display: flex;\n        align-items: center;\n        padding:0;\n        .global{\n            padding-bottom:130px;\n        }\n        .title{\n            writing-mode: vertical-rl;\n            transform: rotate(180deg);\n            margin-bottom:8%;\n            position:absolute;\n            left: 4.5%;\n            top: 15%;\n            z-index: 1;\n        }\n        .svg {\n            width:1000vw;\n            img{\n                width:200%; \n            }\n        }\n    }\n    @media only screen and (max-height: 768px) and (max-width: 1024px) and (orientation:landscape){\n        padding:0;\n        .global{\n            padding-bottom:130px;\n        }\n        .title{\n            left: 4.5%;\n            top: 15%;\n        }\n        .svg {\n            width:1000vw;\n            img{\n                width:200%; \n            }\n        }\n    }\n\n    @media only screen and (min-width:1025px) and (max-width:1440px){      \n        display: flex;\n        align-items: center;\n        padding-top:18%;\n        padding:0;\n        .global{\n            padding-bottom:130px;\n        }\n        .title{\n            left: 4.5%;\n            top: 19%;\n        }\n        .svg {\n            width:1000vw;\n            img{\n                width:155%; \n            }\n        }\n        .scroll1,.scroll3,.scroll2, .scroll4{\n            display:block;\n            margin-bottom: 0.1%;\n        }\n    }\n    @media only screen and (min-width:1441px){\n        display: flex;\n        align-items: center;\n        padding:0;\n        .global{\n            padding-bottom:130px;\n        }\n        .title{\n            left: 6.1%;\n            top: 20%;\n        }\n        .svg {\n            width:750vw;\n            img{\n                width:200%; \n            }\n        }\n        .scroll1,.scroll3,.scroll2, .scroll4{\n            display:block;\n            margin-bottom: 0.1%;\n        }\n\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ServicesStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());


/***/ }),

/***/ "./content/home.json":
/*!***************************!*\
  !*** ./content/home.json ***!
  \***************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = [{"img":"static/img/simon-gonzalez-negrete-nunc.jpg","title":"QUÉ ES TAILOR","text1":"Tailor es una boutique digital cuyo objetivo es dar forma a productos o idéas.","text2":"Creamos productos y soluciones digitales para PYMES, startups y grandes empresas.","img2":"static/img/ipad.png","title2":"CÓMO TRABAJAMOS","text3":"Siempre entregamos más de lo que esperas. Y lo hacemos de forma transparente.","text4":"Con un solo clic, podrás seguir el progreso de tu proyecto de forma sencilla e intuitiva.","button":"IR A ESPACIO","title3":"SERVICIOS"}];

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
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Tailor2019/pages/index.js";






function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhotoText_PhotoText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IpadText_IpadText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Services_Services__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c69b9626e942e6d3667c.hot-update.js.map