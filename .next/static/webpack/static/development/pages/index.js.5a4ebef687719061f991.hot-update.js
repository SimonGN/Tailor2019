webpackHotUpdate("static/development/pages/index.js",{

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width:100%;\n    min-height:700px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    background-color: ", ";\n    background-image: ", ";\n    display: flex;\n    align-items: flex-end;\n    .background{\n      width:100%;\n      min-height:250px;\n      background-color:#0F1C5150;\n      -webkit-backdrop-filter: blur(50px);\n      backdrop-filter: blur(100px);\n      position: relative;\n      display:flex;\n      align-items: center;\n    }\n    .mobile{\n      display:flex;\n      align-items: center;\n      margin-bottom:5%;\n    }\n    .mobileTitle{\n            width:13%;\n            white-space: nowrap;\n            writing-mode: vertical-lr;\n            transform: rotate(180deg);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n    }\n    .mobileText{\n      width:80%;\n    }\n    .text, .title{\n      display:none;\n    }\n    .info{\n      position: absolute;\n    }\n    .infoText{\n      filter: blur(0px);\n    }\n    .buttons{\n      display:grid;\n      grid-template-columns: repeat(2, 1fr);\n      white-space: pre;\n      a{\n        width:90%;\n        margin:0 auto;\n      }\n    }\n    .buttonDiv{\n        display:flex;\n        justify-content:center;\n        margin-top:5%;\n        div{\n            width: 15px;\n            height: 15px;\n            -moz-border-radius: 50%;\n            -webkit-border-radius: 50%;\n            border-radius: 50%;\n            background: transparent;\n            border: 1px solid white;\n            margin-left:2%;\n            cursor:pointer;\n        }\n        div:first-child{\n            margin-left:0;\n        }\n        div.active {\n            background-color:white;\n        }\n    }\n\n\n    \n    \n    @media only screen and (min-width:415px){\n  \n      .mobile{\n        display:none;\n      }\n        min-height:800px;\n        h1{\n            margin-bottom:2.5%;\n        }\n        .colum1, .colum2{\n            width:46%\n        }\n        .photo{\n            width:100%;\n\n        }\n        img{\n            min-height:80vh;\n\n        }\n        .background{\n          min-height:250px;\n        }\n        .infoText{\n          width:95%;\n          height: 110px;\n          margin:0 auto;\n          display:flex;\n        }\n        .title, .text{\n          display:block;\n        }\n        .title{\n            width:20%;\n            white-space: nowrap;\n            writing-mode: vertical-lr;\n            transform: rotate(180deg);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            \n        }\n        .text, .buttons{\n            width: 40%;\n        }\n        .buttons{\n          & >a{\n            margin-right:5%;\n          }\n        }\n        .buttons, .text{\n          display:flex;\n          align-items: center;\n        }\n\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var WorkGalleryStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.img ? '' : '#0F1C51';
}, function (props) {
  return props.img ? "url(".concat(props.img, ")") : '';
});


/***/ })

})
//# sourceMappingURL=index.js.5a4ebef687719061f991.hot-update.js.map