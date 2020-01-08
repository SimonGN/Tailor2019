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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-color: #0F1C51;\n    width: 100%;\n    max-height: 507px;\n    .global{\n        display:flex;\n        flex-flow:column;\n    }\n    .colum1{\n        position: relative;\n    }\n    .photo{\n        width:100vw;\n        min-height:900px;\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n        background-color: ", ";\n        background-image: ", ";\n        position: relative;\n        & > div{\n            width: 100vw;\n            min-height:900px;\n            background-color: #0F1C5130;\n            backdrop-filter: blur(10px);\n            -webkit-backdrop-filter: blur(10px);\n            \n        }\n    }\n    .mobile{\n        display:flex;\n        position: absolute;\n        background-color: #0F1C51;\n        padding-top:5%;\n        padding-bottom:5%;\n    }\n    img{\n        width:100%;\n        object-fit:cover;\n        position:relative;\n        opacity:50%;\n        backdrop-filter: blur(10px);\n        -webkit-backdrop-filter: blur(10px);\n    }\n\n    .mobileTitle{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        white-space: nowrap;\n        writing-mode: vertical-lr;\n        transform: rotate(180deg);\n        width:13%;\n    }\n    .mobileText{\n        width:80%;\n        & > p{\n            margin-bottom:5%;\n        }\n    }\n    .play{ \n        top:10%;\n        width:100%;\n        height:80%;\n        position:absolute;\n        z-index:1;\n        display: flex;\n        align-items: center;\n        justify-content:center;\n        cursor:pointer;\n        position: absolute;\n    }\n    .text{\n        display: flex;\n        flex-direction: column;\n        display:none;\n        & > p{\n            margin-bottom:5%;\n        }\n    }\n    .title{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        white-space: nowrap;\n        writing-mode: vertical-lr;\n        transform: rotate(180deg);\n        display:none;\n    }\n    .global{\n        display:flex;\n    }\n    .buttonDiv{\n        display:flex;\n        justify-content:center;\n        margin-top:10%;\n        div{\n            width: 15px;\n            height: 15px;\n            -moz-border-radius: 50%;\n            -webkit-border-radius: 50%;\n            border-radius: 50%;\n            background: transparent;\n            border: 1px solid white;\n            margin-left:10px;\n            cursor:pointer;\n        }\n        div:first-child{\n            margin-left:0;\n        }\n        div.active {\n            background-color:white;\n        }\n    }\n    @media only screen and (min-width:769px) {\n        .global{\n            flex-flow:row;\n            align-items:center;\n        }\n        .mobile{\n            display:none;\n        }\n        .title, .text{\n            display:block;\n        }\n        h1{\n            margin-bottom:2.5%;\n        }\n        .colum1, .colum2{\n            width:46%\n        }\n        .title{\n            display:flex;\n            align-items:center;\n            width:8%;\n            white-space: nowrap;\n            writing-mode: vertical-lr;\n            transform: rotate(180deg);\n        }\n        .photo{\n            width:46vw;\n            & > div{\n                width:46vw\n            }\n            \n        }\n        .text{\n            width: 80%;\n            min-height: 100%;\n            justify-content: center;\n        }\n        .play{\n            top:20%;\n        }\n\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var VideoGalleryStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.photo ? '' : '#0F1C51';
}, function (props) {
  return props.photo ? "url(".concat(props.photo, ")") : '';
});


/***/ })

})
//# sourceMappingURL=index.js.0120c7ab34ba5c990f2b.hot-update.js.map