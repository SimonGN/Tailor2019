webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VideoGallery/VideoGalleryStyle.js":
/*!******************************************************!*\
  !*** ./components/VideoGallery/VideoGalleryStyle.js ***!
  \******************************************************/
/*! exports provided: VideoGalleryStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGalleryStyle", function() { return VideoGalleryStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbackground-color: #0F1C51\nimg{\n        width:100%;\n        object-fit:cover;\n    }\n    .text{\n        display: flex;\n        flex-direction: column;\n    }\n    .title{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        white-space: nowrap;\n        writing-mode: vertical-lr;\n        transform: rotate(180deg);\n    }\n    .global{\n        display:flex;\n    }\n    .colum1{\n        position:relative;\n        width:100%;\n        min-height: 255px;\n        background-color: ", ";\n        background-image: ", ";\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n        border-radius:16px;\n        margin-bottom:10%;\n    }\n\n    \n    \n    @media only screen and (min-width:415px) and (max-width:768px){\n        \n    }\n    @media only screen and (min-width:769px) {\n        h1{\n            margin-bottom:2.5%;\n        }\n        .colum1, .colum2{\n            width:46%\n        }\n        img{\n            height:90vh;\n        }\n        .title{\n            width:8%;\n            white-space: nowrap;\n            writing-mode: vertical-lr;\n            transform: rotate(180deg);\n        }\n        .text{\n            width: 80%;\n            min-height: 90vh;\n            justify-content: center;\n        }\n\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var VideoGalleryStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.photo ? '' : 'red';
}, function (props) {
  return props.photo ? "url(".concat(props.photo, ")") : '';
});


/***/ })

})
//# sourceMappingURL=index.js.b4bc4dee7c0a05a294f4.hot-update.js.map