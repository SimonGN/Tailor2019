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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width:100%;\n    min-height:300px;\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n        background-color: ", ";\n        background-image: ", ";\n    img{\n        width:100%;\n        object-fit:cover;\n        position:relative;\n        opacity:100%;\n        filter: blur(10px);\n       \n    }\n    .play{ \n        width:50%;\n        height:100%;\n        position:absolute;\n        z-index:1;\n        display: flex;\n        align-items: center;\n        justify-content:center;\n        cursor:pointer;\n    }\n    .text{\n        display: flex;\n        flex-direction: column;\n        & > p{\n            margin-bottom:5%;\n        }\n    }\n    .title{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        white-space: nowrap;\n        writing-mode: vertical-lr;\n        transform: rotate(180deg);\n    }\n    .global{\n        display:flex;\n    }\n    .buttonDiv{\n        display:flex;\n        justify-content:center;\n        margin-top:10%;\n        div{\n            width: 15px;\n            height: 15px;\n            -moz-border-radius: 50%;\n            -webkit-border-radius: 50%;\n            border-radius: 50%;\n            background: transparent;\n            border: 1px solid white;\n            margin-left:2%;\n            cursor:pointer;\n        }\n        div:first-child{\n            margin-left:0;\n        }\n        div.active {\n            background-color:white;\n        }\n    }\n\n\n    \n    \n    @media only screen and (min-width:415px) and (max-width:768px){\n        \n    }\n    @media only screen and (min-width:769px) {\n        h1{\n            margin-bottom:2.5%;\n        }\n        .colum1, .colum2{\n            width:46%\n        }\n        .photo{\n            width:100%;\n\n        }\n        img{\n            min-height:80vh;\n\n        }\n        .title{\n            width:8%;\n            white-space: nowrap;\n            writing-mode: vertical-lr;\n            transform: rotate(180deg);\n        }\n        .text{\n            width: 80%;\n            min-height: 100%;\n            justify-content: center;\n        }\n\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var WorkGalleryStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.photo ? '' : 'red';
}, function (props) {
  return props.photo ? "url(".concat(props.photo, ")") : '';
});


/***/ })

})
//# sourceMappingURL=index.js.030e1c1fb9b5621ebc88.hot-update.js.map