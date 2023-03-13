/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background: 023e8a;\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgba(25, 100, 247, 1) 0%,\r\n    rgb(20, 20, 20) 52%,\r\n    rgba(2, 137, 238, 1) 100%\r\n  );\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.content {\r\n  width: 100vw;\r\n  height: 80vh;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n.form-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: rgba(121, 205, 246, 1);\r\n  width: 25%;\r\n  height: 25%;\r\n  border-radius: 35px;\r\n  box-shadow: 0 0 0 3px #149df2;\r\n}\r\n\r\n.label-city {\r\n  margin-bottom: 15px;\r\n  font-size: 25px;\r\n  color: #023e8a;\r\n}\r\n.input-city {\r\n  width: 230px;\r\n  height: 30px;\r\n  border: none;\r\n  border-top-left-radius: 20px;\r\n  border-bottom-left-radius: 20px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  border-right: none;\r\n  padding: 0;\r\n}\r\n.input-city:focus {\r\n  outline: none;\r\n}\r\n\r\n.input-img {\r\n  background-color: white;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-top-right-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n}\r\n\r\n.input-container {\r\n  width: 210px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 20px;\r\n}\r\n\r\n.input-container:hover {\r\n  box-shadow: 0 0 20px rgb(252, 252, 252);\r\n}\r\n.forecast-container {\r\n  /* visibility: hidden; */\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: rgba(121, 205, 246, 1);\r\n  width: 30%;\r\n  height: 450px;\r\n  border-radius: 35px;\r\n  box-shadow: 0 0 0 3px #149df2;\r\n}\r\n.weather-info-container {\r\n  width: 60%;\r\n  height: 60%;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  align-items: center;\r\n  color: #023e8a;\r\n  column-gap: 70px;\r\n}\r\n.city-title {\r\n  color: #023e8a;\r\n}\r\n.city-temp-min {\r\n  grid-column-start: 1;\r\n  grid-row-start: 2;\r\n}\r\n.city-temp-max {\r\n  grid-column-start: 1;\r\n  grid-row-start: 3;\r\n}\r\n.city-temp-feels {\r\n  grid-column-start: 2;\r\n  grid-row-start: 1;\r\n}\r\n.city-humidity {\r\n  grid-column-start: 2;\r\n  grid-row-start: 2;\r\n}\r\n\r\n.city-temp-min,\r\n.city-temp-max,\r\n.city-temp-feels,\r\n.city-humidity,\r\n.city-temperature,\r\n.city-pressure {\r\n  transition: 0.5s;\r\n}\r\n.city-temp-feels,\r\n.city-humidity,\r\n.city-pressure {\r\n  justify-self: center;\r\n}\r\n.city-temp-min:hover,\r\n.city-temp-max:hover,\r\n.city-temp-feels:hover,\r\n.city-humidity:hover,\r\n.city-temperature:hover,\r\n.city-pressure:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.info-data-temp,\r\n.info-data-min,\r\n.info-data-max,\r\n.info-data-feels,\r\n.info-data-hum,\r\n.info-data-press {\r\n  color: #dc2f02;\r\n  font-style: italic;\r\n}\r\n.change-units-slider {\r\n  -webkit-appearance: none;\r\n  width: 70px;\r\n  height: 30px;\r\n  border-radius: 30px;\r\n  transition: 0.1s;\r\n  cursor: pointer;\r\n}\r\n.change-units-slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  background-color: #023e8a;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 30px;\r\n}\r\n/* \r\n.input-units-container {\r\n  display: flex;\r\n  width: 250px;\r\n  justify-content: space-around;\r\n}\r\n.input-units-container label {\r\n  margin-right: 20px;\r\n}\r\n.disabled {\r\n  pointer-events: none;\r\n} */\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AACA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB;;;;;GAKC;EACD,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,wCAAwC;EACxC,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,cAAc;AAChB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,uCAAuC;AACzC;AACA;EACE,wBAAwB;EACxB,aAAa;EACb,6BAA6B;EAC7B,sBAAsB;EACtB,mBAAmB;EACnB,wCAAwC;EACxC,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;AACA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;AACA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;AACA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;AACA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;;;;;;EAME,gBAAgB;AAClB;AACA;;;EAGE,oBAAoB;AACtB;AACA;;;;;;EAME,qBAAqB;AACvB;;AAEA;;;;;;EAME,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;AACA;;;;;;;;;;;GAWG","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,700&display=swap\");\r\n* {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background: 023e8a;\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgba(25, 100, 247, 1) 0%,\r\n    rgb(20, 20, 20) 52%,\r\n    rgba(2, 137, 238, 1) 100%\r\n  );\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.content {\r\n  width: 100vw;\r\n  height: 80vh;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n.form-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: rgba(121, 205, 246, 1);\r\n  width: 25%;\r\n  height: 25%;\r\n  border-radius: 35px;\r\n  box-shadow: 0 0 0 3px #149df2;\r\n}\r\n\r\n.label-city {\r\n  margin-bottom: 15px;\r\n  font-size: 25px;\r\n  color: #023e8a;\r\n}\r\n.input-city {\r\n  width: 230px;\r\n  height: 30px;\r\n  border: none;\r\n  border-top-left-radius: 20px;\r\n  border-bottom-left-radius: 20px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  border-right: none;\r\n  padding: 0;\r\n}\r\n.input-city:focus {\r\n  outline: none;\r\n}\r\n\r\n.input-img {\r\n  background-color: white;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-top-right-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n}\r\n\r\n.input-container {\r\n  width: 210px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 20px;\r\n}\r\n\r\n.input-container:hover {\r\n  box-shadow: 0 0 20px rgb(252, 252, 252);\r\n}\r\n.forecast-container {\r\n  /* visibility: hidden; */\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: rgba(121, 205, 246, 1);\r\n  width: 30%;\r\n  height: 450px;\r\n  border-radius: 35px;\r\n  box-shadow: 0 0 0 3px #149df2;\r\n}\r\n.weather-info-container {\r\n  width: 60%;\r\n  height: 60%;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  align-items: center;\r\n  color: #023e8a;\r\n  column-gap: 70px;\r\n}\r\n.city-title {\r\n  color: #023e8a;\r\n}\r\n.city-temp-min {\r\n  grid-column-start: 1;\r\n  grid-row-start: 2;\r\n}\r\n.city-temp-max {\r\n  grid-column-start: 1;\r\n  grid-row-start: 3;\r\n}\r\n.city-temp-feels {\r\n  grid-column-start: 2;\r\n  grid-row-start: 1;\r\n}\r\n.city-humidity {\r\n  grid-column-start: 2;\r\n  grid-row-start: 2;\r\n}\r\n\r\n.city-temp-min,\r\n.city-temp-max,\r\n.city-temp-feels,\r\n.city-humidity,\r\n.city-temperature,\r\n.city-pressure {\r\n  transition: 0.5s;\r\n}\r\n.city-temp-feels,\r\n.city-humidity,\r\n.city-pressure {\r\n  justify-self: center;\r\n}\r\n.city-temp-min:hover,\r\n.city-temp-max:hover,\r\n.city-temp-feels:hover,\r\n.city-humidity:hover,\r\n.city-temperature:hover,\r\n.city-pressure:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.info-data-temp,\r\n.info-data-min,\r\n.info-data-max,\r\n.info-data-feels,\r\n.info-data-hum,\r\n.info-data-press {\r\n  color: #dc2f02;\r\n  font-style: italic;\r\n}\r\n.change-units-slider {\r\n  -webkit-appearance: none;\r\n  width: 70px;\r\n  height: 30px;\r\n  border-radius: 30px;\r\n  transition: 0.1s;\r\n  cursor: pointer;\r\n}\r\n.change-units-slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  background-color: #023e8a;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 30px;\r\n}\r\n/* \r\n.input-units-container {\r\n  display: flex;\r\n  width: 250px;\r\n  justify-content: space-around;\r\n}\r\n.input-units-container label {\r\n  margin-right: 20px;\r\n}\r\n.disabled {\r\n  pointer-events: none;\r\n} */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/domhandling.js":
/*!***************************************!*\
  !*** ./src/components/domhandling.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cityTitle = document.querySelector('.city-title');
const cityTemperature = document.querySelector('.info-data-temp');
const cityTempMin = document.querySelector('.info-data-min');
const cityTempMax = document.querySelector('.info-data-max');
const cityTempFeels = document.querySelector('.info-data-feels');
const cityHumidity = document.querySelector('.info-data-hum');
const cityPressure = document.querySelector('.info-data-press');


class WeatherInfo {
    constructor(cityName, cityTemp, cityTempMin, cityTempMax, cityTempFeels, cityHumidity, cityPressure) {
        this.cityName = cityName;
        this.cityTemp = cityTemp;
        this.cityTempMin = cityTempMin;
        this.cityTempMax = cityTempMax;
        this.cityTempFeels = cityTempFeels;
        this.cityHumidity = cityHumidity;
        this.cityPressure = cityPressure;
    }

    //method
    insertInfoFahrenheit() {
        cityTitle.innerHTML = this.cityName;
        cityTemperature.innerHTML = `${this.cityTemp}°F`;
        cityTempMin.innerHTML = `${this.cityTempMin}°F`;
        cityTempMax.innerHTML = `${this.cityTempMax}°F`;
        cityTempFeels.innerHTML = `${this.cityTempFeels}°F`;
        cityHumidity.innerHTML = `${this.cityHumidity}%`;
        cityPressure.innerHTML = `${this.cityPressure}hPa`;
    }
    //method
    insertInfoCelsius() {
        cityTitle.innerHTML = this.cityName;
        cityTemperature.innerHTML = `${this.cityTemp}°C`;
        cityTempMin.innerHTML = `${this.cityTempMin}°C`;
        cityTempMax.innerHTML = `${this.cityTempMax}°C`;
        cityTempFeels.innerHTML = `${this.cityTempFeels}°C`;
        cityHumidity.innerHTML = `${this.cityHumidity}%`;
        cityPressure.innerHTML = `${this.cityPressure}hPa`;
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherInfo);

/***/ }),

/***/ "./src/components/getdata.js":
/*!***********************************!*\
  !*** ./src/components/getdata.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "getWeatherCelsius": () => (/* binding */ getWeatherCelsius)
/* harmony export */ });
/* harmony import */ var _getforecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getforecast */ "./src/components/getforecast.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/components/utilities.js");



async function getCoordinates(data) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(url, {
        mode: "cors"
    });
    const dataJson = await getData.json();
    const lat = dataJson[0].lat
    const lon = dataJson[0].lon
    const coord = `lat=${(0,_utilities__WEBPACK_IMPORTED_MODULE_1__.parseNum)(lat)}&lon=${(0,_utilities__WEBPACK_IMPORTED_MODULE_1__.parseNum)(lon)}`;
    (0,_getforecast__WEBPACK_IMPORTED_MODULE_0__.getForecast)(coord)
}

async function getWeatherCelsius(data) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(url, {
        mode: "cors"
    });
    const dataJson = await getData.json();
    const lat = dataJson[0].lat
    const lon = dataJson[0].lon
    const coord = `lat=${(0,_utilities__WEBPACK_IMPORTED_MODULE_1__.parseNum)(lat)}&lon=${(0,_utilities__WEBPACK_IMPORTED_MODULE_1__.parseNum)(lon)}`;
    (0,_getforecast__WEBPACK_IMPORTED_MODULE_0__.getForecastCelsius)(coord)
}



/***/ }),

/***/ "./src/components/getforecast.js":
/*!***************************************!*\
  !*** ./src/components/getforecast.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getForecast": () => (/* binding */ getForecast),
/* harmony export */   "getForecastCelsius": () => (/* binding */ getForecastCelsius)
/* harmony export */ });
/* harmony import */ var _domhandling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domhandling */ "./src/components/domhandling.js");


async function getForecast(coord) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?${coord}&units=imperial&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(forecastUrl);
    const respJson = await getData.json();
    const insertData = new _domhandling__WEBPACK_IMPORTED_MODULE_0__["default"](respJson.name, respJson.main.temp, respJson.main.temp_min, respJson.main.temp_max, respJson.main.feels_like, respJson.main.humidity, respJson.main.pressure)
    return insertData.insertInfoFahrenheit();
}

async function getForecastCelsius(coord) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?${coord}&units=metric&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(forecastUrl);
    const respJson = await getData.json();
    const insertData = new _domhandling__WEBPACK_IMPORTED_MODULE_0__["default"](respJson.name, respJson.main.temp, respJson.main.temp_min, respJson.main.temp_max, respJson.main.feels_like, respJson.main.humidity, respJson.main.pressure)
    return insertData.insertInfoCelsius();
}



/***/ }),

/***/ "./src/components/starterpage.js":
/*!***************************************!*\
  !*** ./src/components/starterpage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _assets_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/search.svg */ "./src/assets/search.svg");


const img = document.querySelector('.input-img');
img.src = _assets_search_svg__WEBPACK_IMPORTED_MODULE_1__;


/***/ }),

/***/ "./src/components/utilities.js":
/*!*************************************!*\
  !*** ./src/components/utilities.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCityInfo": () => (/* binding */ getCityInfo),
/* harmony export */   "parseNum": () => (/* binding */ parseNum)
/* harmony export */ });
/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ "./src/components/getdata.js");
const changeUnitsSlider = document.querySelector('.change-units-slider')
const input = document.querySelector('.input-city')
;


function parseNum(num) {
    return Number.parseFloat(num).toFixed(2)
}

function getCityInfo() {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            (0,_getdata__WEBPACK_IMPORTED_MODULE_0__.getCoordinates)(input.value)
            changeUnitsSlider.value = 1;
            changeUnitsSlider.style.backgroundColor = "white";
        }
    })
}

function changeUnits() {
    if (changeUnitsSlider.value == 2) {
        changeUnitsSlider.style.backgroundColor = "#fcbf49";
        (0,_getdata__WEBPACK_IMPORTED_MODULE_0__.getWeatherCelsius)(input.value)
    } else {
        (0,_getdata__WEBPACK_IMPORTED_MODULE_0__.getCoordinates)(input.value);
        changeUnitsSlider.style.backgroundColor = "white";

    }
}

changeUnitsSlider.addEventListener('click', changeUnits)


/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "search.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_starterpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/starterpage */ "./src/components/starterpage.js");
/* harmony import */ var _components_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/utilities */ "./src/components/utilities.js");



(0,_components_utilities__WEBPACK_IMPORTED_MODULE_1__.getCityInfo)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUduQjtBQUMvQjtBQUNBLGtFQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2RvbWhhbmRsaW5nLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9nZXRkYXRhLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9nZXRmb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvc3RhcnRlcnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAwMjNlOGE7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDkwZGVnLFxcclxcbiAgICByZ2JhKDI1LCAxMDAsIDI0NywgMSkgMCUsXFxyXFxuICAgIHJnYigyMCwgMjAsIDIwKSA1MiUsXFxyXFxuICAgIHJnYmEoMiwgMTM3LCAyMzgsIDEpIDEwMCVcXHJcXG4gICk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMjA1LCAyNDYsIDEpO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjMTQ5ZGYyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwtY2l0eSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxufVxcclxcbi5pbnB1dC1jaXR5IHtcXHJcXG4gIHdpZHRoOiAyMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLmlucHV0LWNpdHk6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWltZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lcjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2IoMjUyLCAyNTIsIDI1Mik7XFxyXFxufVxcclxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMjA1LCAyNDYsIDEpO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGhlaWdodDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICMxNDlkZjI7XFxyXFxufVxcclxcbi53ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDYwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjMDIzZThhO1xcclxcbiAgY29sdW1uLWdhcDogNzBweDtcXHJcXG59XFxyXFxuLmNpdHktdGl0bGUge1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxufVxcclxcbi5jaXR5LXRlbXAtbWluIHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxufVxcclxcbi5jaXR5LXRlbXAtbWF4IHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxyXFxufVxcclxcbi5jaXR5LXRlbXAtZmVlbHMge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxyXFxuICBncmlkLXJvdy1zdGFydDogMTtcXHJcXG59XFxyXFxuLmNpdHktaHVtaWRpdHkge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxyXFxuICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktdGVtcC1taW4sXFxyXFxuLmNpdHktdGVtcC1tYXgsXFxyXFxuLmNpdHktdGVtcC1mZWVscyxcXHJcXG4uY2l0eS1odW1pZGl0eSxcXHJcXG4uY2l0eS10ZW1wZXJhdHVyZSxcXHJcXG4uY2l0eS1wcmVzc3VyZSB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG4uY2l0eS10ZW1wLWZlZWxzLFxcclxcbi5jaXR5LWh1bWlkaXR5LFxcclxcbi5jaXR5LXByZXNzdXJlIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG4uY2l0eS10ZW1wLW1pbjpob3ZlcixcXHJcXG4uY2l0eS10ZW1wLW1heDpob3ZlcixcXHJcXG4uY2l0eS10ZW1wLWZlZWxzOmhvdmVyLFxcclxcbi5jaXR5LWh1bWlkaXR5OmhvdmVyLFxcclxcbi5jaXR5LXRlbXBlcmF0dXJlOmhvdmVyLFxcclxcbi5jaXR5LXByZXNzdXJlOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tZGF0YS10ZW1wLFxcclxcbi5pbmZvLWRhdGEtbWluLFxcclxcbi5pbmZvLWRhdGEtbWF4LFxcclxcbi5pbmZvLWRhdGEtZmVlbHMsXFxyXFxuLmluZm8tZGF0YS1odW0sXFxyXFxuLmluZm8tZGF0YS1wcmVzcyB7XFxyXFxuICBjb2xvcjogI2RjMmYwMjtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLmNoYW5nZS11bml0cy1zbGlkZXIge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgd2lkdGg6IDcwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmNoYW5nZS11bml0cy1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjNlOGE7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxufVxcclxcbi8qIFxcclxcbi5pbnB1dC11bml0cy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG4uaW5wdXQtdW5pdHMtY29udGFpbmVyIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuLmRpc2FibGVkIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn0gKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7Ozs7R0FLQztFQUNELGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7OztFQU1FLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxvQkFBb0I7QUFDdEI7QUFDQTs7Ozs7O0VBTUUscUJBQXFCO0FBQ3ZCOztBQUVBOzs7Ozs7RUFNRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7R0FXR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IDAyM2U4YTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgOTBkZWcsXFxyXFxuICAgIHJnYmEoMjUsIDEwMCwgMjQ3LCAxKSAwJSxcXHJcXG4gICAgcmdiKDIwLCAyMCwgMjApIDUyJSxcXHJcXG4gICAgcmdiYSgyLCAxMzcsIDIzOCwgMSkgMTAwJVxcclxcbiAgKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCAyMDUsIDI0NiwgMSk7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgaGVpZ2h0OiAyNSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICMxNDlkZjI7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbC1jaXR5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG59XFxyXFxuLmlucHV0LWNpdHkge1xcclxcbiAgd2lkdGg6IDIzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4uaW5wdXQtY2l0eTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtaW1nIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAyMTBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYigyNTIsIDI1MiwgMjUyKTtcXHJcXG59XFxyXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxyXFxuICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCAyMDUsIDI0NiwgMSk7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggIzE0OWRmMjtcXHJcXG59XFxyXFxuLndlYXRoZXItaW5mby1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxuICBjb2x1bW4tZ2FwOiA3MHB4O1xcclxcbn1cXHJcXG4uY2l0eS10aXRsZSB7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG59XFxyXFxuLmNpdHktdGVtcC1taW4ge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG59XFxyXFxuLmNpdHktdGVtcC1tYXgge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICBncmlkLXJvdy1zdGFydDogMztcXHJcXG59XFxyXFxuLmNpdHktdGVtcC1mZWVscyB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXHJcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcclxcbn1cXHJcXG4uY2l0eS1odW1pZGl0eSB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXHJcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS10ZW1wLW1pbixcXHJcXG4uY2l0eS10ZW1wLW1heCxcXHJcXG4uY2l0eS10ZW1wLWZlZWxzLFxcclxcbi5jaXR5LWh1bWlkaXR5LFxcclxcbi5jaXR5LXRlbXBlcmF0dXJlLFxcclxcbi5jaXR5LXByZXNzdXJlIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcbi5jaXR5LXRlbXAtZmVlbHMsXFxyXFxuLmNpdHktaHVtaWRpdHksXFxyXFxuLmNpdHktcHJlc3N1cmUge1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jaXR5LXRlbXAtbWluOmhvdmVyLFxcclxcbi5jaXR5LXRlbXAtbWF4OmhvdmVyLFxcclxcbi5jaXR5LXRlbXAtZmVlbHM6aG92ZXIsXFxyXFxuLmNpdHktaHVtaWRpdHk6aG92ZXIsXFxyXFxuLmNpdHktdGVtcGVyYXR1cmU6aG92ZXIsXFxyXFxuLmNpdHktcHJlc3N1cmU6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1kYXRhLXRlbXAsXFxyXFxuLmluZm8tZGF0YS1taW4sXFxyXFxuLmluZm8tZGF0YS1tYXgsXFxyXFxuLmluZm8tZGF0YS1mZWVscyxcXHJcXG4uaW5mby1kYXRhLWh1bSxcXHJcXG4uaW5mby1kYXRhLXByZXNzIHtcXHJcXG4gIGNvbG9yOiAjZGMyZjAyO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG4uY2hhbmdlLXVuaXRzLXNsaWRlciB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY2hhbmdlLXVuaXRzLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyM2U4YTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuLyogXFxyXFxuLmlucHV0LXVuaXRzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcbi5pbnB1dC11bml0cy1jb250YWluZXIgbGFiZWwge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4uZGlzYWJsZWQge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufSAqL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXRpdGxlJyk7XHJcbmNvbnN0IGNpdHlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRhdGEtdGVtcCcpO1xyXG5jb25zdCBjaXR5VGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRhdGEtbWluJyk7XHJcbmNvbnN0IGNpdHlUZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGF0YS1tYXgnKTtcclxuY29uc3QgY2l0eVRlbXBGZWVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRhdGEtZmVlbHMnKTtcclxuY29uc3QgY2l0eUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGF0YS1odW0nKTtcclxuY29uc3QgY2l0eVByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGF0YS1wcmVzcycpO1xyXG5cclxuXHJcbmNsYXNzIFdlYXRoZXJJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKGNpdHlOYW1lLCBjaXR5VGVtcCwgY2l0eVRlbXBNaW4sIGNpdHlUZW1wTWF4LCBjaXR5VGVtcEZlZWxzLCBjaXR5SHVtaWRpdHksIGNpdHlQcmVzc3VyZSkge1xyXG4gICAgICAgIHRoaXMuY2l0eU5hbWUgPSBjaXR5TmFtZTtcclxuICAgICAgICB0aGlzLmNpdHlUZW1wID0gY2l0eVRlbXA7XHJcbiAgICAgICAgdGhpcy5jaXR5VGVtcE1pbiA9IGNpdHlUZW1wTWluO1xyXG4gICAgICAgIHRoaXMuY2l0eVRlbXBNYXggPSBjaXR5VGVtcE1heDtcclxuICAgICAgICB0aGlzLmNpdHlUZW1wRmVlbHMgPSBjaXR5VGVtcEZlZWxzO1xyXG4gICAgICAgIHRoaXMuY2l0eUh1bWlkaXR5ID0gY2l0eUh1bWlkaXR5O1xyXG4gICAgICAgIHRoaXMuY2l0eVByZXNzdXJlID0gY2l0eVByZXNzdXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbWV0aG9kXHJcbiAgICBpbnNlcnRJbmZvRmFocmVuaGVpdCgpIHtcclxuICAgICAgICBjaXR5VGl0bGUuaW5uZXJIVE1MID0gdGhpcy5jaXR5TmFtZTtcclxuICAgICAgICBjaXR5VGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5VGVtcH3CsEZgO1xyXG4gICAgICAgIGNpdHlUZW1wTWluLmlubmVySFRNTCA9IGAke3RoaXMuY2l0eVRlbXBNaW59wrBGYDtcclxuICAgICAgICBjaXR5VGVtcE1heC5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlUZW1wTWF4fcKwRmA7XHJcbiAgICAgICAgY2l0eVRlbXBGZWVscy5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlUZW1wRmVlbHN9wrBGYDtcclxuICAgICAgICBjaXR5SHVtaWRpdHkuaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5SHVtaWRpdHl9JWA7XHJcbiAgICAgICAgY2l0eVByZXNzdXJlLmlubmVySFRNTCA9IGAke3RoaXMuY2l0eVByZXNzdXJlfWhQYWA7XHJcbiAgICB9XHJcbiAgICAvL21ldGhvZFxyXG4gICAgaW5zZXJ0SW5mb0NlbHNpdXMoKSB7XHJcbiAgICAgICAgY2l0eVRpdGxlLmlubmVySFRNTCA9IHRoaXMuY2l0eU5hbWU7XHJcbiAgICAgICAgY2l0eVRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGAke3RoaXMuY2l0eVRlbXB9wrBDYDtcclxuICAgICAgICBjaXR5VGVtcE1pbi5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlUZW1wTWlufcKwQ2A7XHJcbiAgICAgICAgY2l0eVRlbXBNYXguaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5VGVtcE1heH3CsENgO1xyXG4gICAgICAgIGNpdHlUZW1wRmVlbHMuaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5VGVtcEZlZWxzfcKwQ2A7XHJcbiAgICAgICAgY2l0eUh1bWlkaXR5LmlubmVySFRNTCA9IGAke3RoaXMuY2l0eUh1bWlkaXR5fSVgO1xyXG4gICAgICAgIGNpdHlQcmVzc3VyZS5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlQcmVzc3VyZX1oUGFgO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckluZm87IiwiaW1wb3J0IHtcclxuICAgIGdldEZvcmVjYXN0LFxyXG4gICAgZ2V0Rm9yZWNhc3RDZWxzaXVzLFxyXG59IGZyb20gXCIuL2dldGZvcmVjYXN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBwYXJzZU51bVxyXG59IGZyb20gXCIuL3V0aWxpdGllc1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7ZGF0YX0mbGltaXQ9MSZhcHBpZD1hNzg2NmJmMDFhZmM2MjVmOGQ4OGY0YzNiODI0MzlkMGBcclxuICAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtb2RlOiBcImNvcnNcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhSnNvbiA9IGF3YWl0IGdldERhdGEuanNvbigpO1xyXG4gICAgY29uc3QgbGF0ID0gZGF0YUpzb25bMF0ubGF0XHJcbiAgICBjb25zdCBsb24gPSBkYXRhSnNvblswXS5sb25cclxuICAgIGNvbnN0IGNvb3JkID0gYGxhdD0ke3BhcnNlTnVtKGxhdCl9Jmxvbj0ke3BhcnNlTnVtKGxvbil9YDtcclxuICAgIGdldEZvcmVjYXN0KGNvb3JkKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyQ2Vsc2l1cyhkYXRhKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtkYXRhfSZsaW1pdD0xJmFwcGlkPWE3ODY2YmYwMWFmYzYyNWY4ZDg4ZjRjM2I4MjQzOWQwYFxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1vZGU6IFwiY29yc1wiXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGFKc29uID0gYXdhaXQgZ2V0RGF0YS5qc29uKCk7XHJcbiAgICBjb25zdCBsYXQgPSBkYXRhSnNvblswXS5sYXRcclxuICAgIGNvbnN0IGxvbiA9IGRhdGFKc29uWzBdLmxvblxyXG4gICAgY29uc3QgY29vcmQgPSBgbGF0PSR7cGFyc2VOdW0obGF0KX0mbG9uPSR7cGFyc2VOdW0obG9uKX1gO1xyXG4gICAgZ2V0Rm9yZWNhc3RDZWxzaXVzKGNvb3JkKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0Q29vcmRpbmF0ZXMsXHJcbiAgICBnZXRXZWF0aGVyQ2Vsc2l1cyxcclxufTsiLCJpbXBvcnQgV2VhdGhlckluZm8gZnJvbSBcIi4vZG9taGFuZGxpbmdcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNvb3JkKSB7XHJcbiAgICBjb25zdCBmb3JlY2FzdFVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj8ke2Nvb3JkfSZ1bml0cz1pbXBlcmlhbCZhcHBpZD1hNzg2NmJmMDFhZmM2MjVmOGQ4OGY0YzNiODI0MzlkMGBcclxuICAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBmZXRjaChmb3JlY2FzdFVybCk7XHJcbiAgICBjb25zdCByZXNwSnNvbiA9IGF3YWl0IGdldERhdGEuanNvbigpO1xyXG4gICAgY29uc3QgaW5zZXJ0RGF0YSA9IG5ldyBXZWF0aGVySW5mbyhyZXNwSnNvbi5uYW1lLCByZXNwSnNvbi5tYWluLnRlbXAsIHJlc3BKc29uLm1haW4udGVtcF9taW4sIHJlc3BKc29uLm1haW4udGVtcF9tYXgsIHJlc3BKc29uLm1haW4uZmVlbHNfbGlrZSwgcmVzcEpzb24ubWFpbi5odW1pZGl0eSwgcmVzcEpzb24ubWFpbi5wcmVzc3VyZSlcclxuICAgIHJldHVybiBpbnNlcnREYXRhLmluc2VydEluZm9GYWhyZW5oZWl0KCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0Q2Vsc2l1cyhjb29yZCkge1xyXG4gICAgY29uc3QgZm9yZWNhc3RVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/JHtjb29yZH0mdW5pdHM9bWV0cmljJmFwcGlkPWE3ODY2YmYwMWFmYzYyNWY4ZDg4ZjRjM2I4MjQzOWQwYFxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IGZldGNoKGZvcmVjYXN0VXJsKTtcclxuICAgIGNvbnN0IHJlc3BKc29uID0gYXdhaXQgZ2V0RGF0YS5qc29uKCk7XHJcbiAgICBjb25zdCBpbnNlcnREYXRhID0gbmV3IFdlYXRoZXJJbmZvKHJlc3BKc29uLm5hbWUsIHJlc3BKc29uLm1haW4udGVtcCwgcmVzcEpzb24ubWFpbi50ZW1wX21pbiwgcmVzcEpzb24ubWFpbi50ZW1wX21heCwgcmVzcEpzb24ubWFpbi5mZWVsc19saWtlLCByZXNwSnNvbi5tYWluLmh1bWlkaXR5LCByZXNwSnNvbi5tYWluLnByZXNzdXJlKVxyXG4gICAgcmV0dXJuIGluc2VydERhdGEuaW5zZXJ0SW5mb0NlbHNpdXMoKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGdldEZvcmVjYXN0LFxyXG4gICAgZ2V0Rm9yZWNhc3RDZWxzaXVzXHJcbn07IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJ1xyXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi4vYXNzZXRzL3NlYXJjaC5zdmcnXHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1pbWcnKTtcclxuaW1nLnNyYyA9IGltYWdlO1xyXG4iLCJjb25zdCBjaGFuZ2VVbml0c1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdW5pdHMtc2xpZGVyJylcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY2l0eScpXHJcbmltcG9ydCB7XHJcbiAgICBnZXRDb29yZGluYXRlcyxcclxuICAgIGdldFdlYXRoZXJDZWxzaXVzXHJcbn0gZnJvbSBcIi4vZ2V0ZGF0YVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTnVtKG51bSkge1xyXG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KG51bSkudG9GaXhlZCgyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDaXR5SW5mbygpIHtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgZ2V0Q29vcmRpbmF0ZXMoaW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgIGNoYW5nZVVuaXRzU2xpZGVyLnZhbHVlID0gMTtcclxuICAgICAgICAgICAgY2hhbmdlVW5pdHNTbGlkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVVuaXRzKCkge1xyXG4gICAgaWYgKGNoYW5nZVVuaXRzU2xpZGVyLnZhbHVlID09IDIpIHtcclxuICAgICAgICBjaGFuZ2VVbml0c1NsaWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmY2JmNDlcIjtcclxuICAgICAgICBnZXRXZWF0aGVyQ2Vsc2l1cyhpbnB1dC52YWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ2V0Q29vcmRpbmF0ZXMoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGNoYW5nZVVuaXRzU2xpZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNoYW5nZVVuaXRzU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVW5pdHMpXHJcbmV4cG9ydCB7XHJcbiAgICBwYXJzZU51bSxcclxuICAgIGdldENpdHlJbmZvXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdGFydGVycGFnZSBmcm9tICcuL2NvbXBvbmVudHMvc3RhcnRlcnBhZ2UnXHJcbmltcG9ydCB7XHJcbiAgICBnZXRDaXR5SW5mb1xyXG59IGZyb20gJy4vY29tcG9uZW50cy91dGlsaXRpZXMnXHJcblxyXG5nZXRDaXR5SW5mbygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==