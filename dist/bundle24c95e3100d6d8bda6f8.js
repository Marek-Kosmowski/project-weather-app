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
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
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
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
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
    console.log(respJson);
    const insertData = new _domhandling__WEBPACK_IMPORTED_MODULE_0__["default"](respJson.name, respJson.main.temp, respJson.main.temp_min, respJson.main.temp_max, respJson.main.feels_like, respJson.main.humidity, respJson.main.pressure)
    return insertData.insertInfoFahrenheit();
}

async function getForecastCelsius(coord) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?${coord}&units=metric&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(forecastUrl);
    const respJson = await getData.json();
    console.log(respJson);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7QUFHbkI7QUFDL0I7QUFDQSxrRUFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kb21oYW5kbGluZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZ2V0ZGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZ2V0Zm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3N0YXJ0ZXJwYWdlLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogMDIzZThhO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICA5MGRlZyxcXHJcXG4gICAgcmdiYSgyNSwgMTAwLCAyNDcsIDEpIDAlLFxcclxcbiAgICByZ2IoMjAsIDIwLCAyMCkgNTIlLFxcclxcbiAgICByZ2JhKDIsIDEzNywgMjM4LCAxKSAxMDAlXFxyXFxuICApO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjEsIDIwNSwgMjQ2LCAxKTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggIzE0OWRmMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsLWNpdHkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGNvbG9yOiAjMDIzZThhO1xcclxcbn1cXHJcXG4uaW5wdXQtY2l0eSB7XFxyXFxuICB3aWR0aDogMjMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi5pbnB1dC1jaXR5OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1pbWcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXI6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiKDI1MiwgMjUyLCAyNTIpO1xcclxcbn1cXHJcXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjEsIDIwNSwgMjQ2LCAxKTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDQ1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjMTQ5ZGYyO1xcclxcbn1cXHJcXG4ud2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG4gIGNvbHVtbi1nYXA6IDcwcHg7XFxyXFxufVxcclxcbi5jaXR5LXRpdGxlIHtcXHJcXG4gIGNvbG9yOiAjMDIzZThhO1xcclxcbn1cXHJcXG4uY2l0eS10ZW1wLW1pbiB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbn1cXHJcXG4uY2l0eS10ZW1wLW1heCB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xcclxcbn1cXHJcXG4uY2l0eS10ZW1wLWZlZWxzIHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxyXFxufVxcclxcbi5jaXR5LWh1bWlkaXR5IHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxufVxcclxcblxcclxcbi5jaXR5LXRlbXAtbWluLFxcclxcbi5jaXR5LXRlbXAtbWF4LFxcclxcbi5jaXR5LXRlbXAtZmVlbHMsXFxyXFxuLmNpdHktaHVtaWRpdHksXFxyXFxuLmNpdHktdGVtcGVyYXR1cmUsXFxyXFxuLmNpdHktcHJlc3N1cmUge1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuLmNpdHktdGVtcC1mZWVscyxcXHJcXG4uY2l0eS1odW1pZGl0eSxcXHJcXG4uY2l0eS1wcmVzc3VyZSB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNpdHktdGVtcC1taW46aG92ZXIsXFxyXFxuLmNpdHktdGVtcC1tYXg6aG92ZXIsXFxyXFxuLmNpdHktdGVtcC1mZWVsczpob3ZlcixcXHJcXG4uY2l0eS1odW1pZGl0eTpob3ZlcixcXHJcXG4uY2l0eS10ZW1wZXJhdHVyZTpob3ZlcixcXHJcXG4uY2l0eS1wcmVzc3VyZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWRhdGEtdGVtcCxcXHJcXG4uaW5mby1kYXRhLW1pbixcXHJcXG4uaW5mby1kYXRhLW1heCxcXHJcXG4uaW5mby1kYXRhLWZlZWxzLFxcclxcbi5pbmZvLWRhdGEtaHVtLFxcclxcbi5pbmZvLWRhdGEtcHJlc3Mge1xcclxcbiAgY29sb3I6ICNkYzJmMDI7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcbi5jaGFuZ2UtdW5pdHMtc2xpZGVyIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jaGFuZ2UtdW5pdHMtc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzZThhO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG4vKiBcXHJcXG4uaW5wdXQtdW5pdHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuLmlucHV0LXVuaXRzLWNvbnRhaW5lciBsYWJlbCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5kaXNhYmxlZCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59ICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEI7Ozs7O0dBS0M7RUFDRCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7RUFNRSxnQkFBZ0I7QUFDbEI7QUFDQTs7O0VBR0Usb0JBQW9CO0FBQ3RCO0FBQ0E7Ozs7OztFQU1FLHFCQUFxQjtBQUN2Qjs7QUFFQTs7Ozs7O0VBTUUsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7O0dBV0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAwMjNlOGE7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDkwZGVnLFxcclxcbiAgICByZ2JhKDI1LCAxMDAsIDI0NywgMSkgMCUsXFxyXFxuICAgIHJnYigyMCwgMjAsIDIwKSA1MiUsXFxyXFxuICAgIHJnYmEoMiwgMTM3LCAyMzgsIDEpIDEwMCVcXHJcXG4gICk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMjA1LCAyNDYsIDEpO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjMTQ5ZGYyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwtY2l0eSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxufVxcclxcbi5pbnB1dC1jaXR5IHtcXHJcXG4gIHdpZHRoOiAyMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLmlucHV0LWNpdHk6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWltZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lcjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2IoMjUyLCAyNTIsIDI1Mik7XFxyXFxufVxcclxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMjA1LCAyNDYsIDEpO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGhlaWdodDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICMxNDlkZjI7XFxyXFxufVxcclxcbi53ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDYwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjMDIzZThhO1xcclxcbiAgY29sdW1uLWdhcDogNzBweDtcXHJcXG59XFxyXFxuLmNpdHktdGl0bGUge1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxufVxcclxcbi5jaXR5LXRlbXAtbWluIHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxufVxcclxcbi5jaXR5LXRlbXAtbWF4IHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxyXFxufVxcclxcbi5jaXR5LXRlbXAtZmVlbHMge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxyXFxuICBncmlkLXJvdy1zdGFydDogMTtcXHJcXG59XFxyXFxuLmNpdHktaHVtaWRpdHkge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxyXFxuICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktdGVtcC1taW4sXFxyXFxuLmNpdHktdGVtcC1tYXgsXFxyXFxuLmNpdHktdGVtcC1mZWVscyxcXHJcXG4uY2l0eS1odW1pZGl0eSxcXHJcXG4uY2l0eS10ZW1wZXJhdHVyZSxcXHJcXG4uY2l0eS1wcmVzc3VyZSB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG4uY2l0eS10ZW1wLWZlZWxzLFxcclxcbi5jaXR5LWh1bWlkaXR5LFxcclxcbi5jaXR5LXByZXNzdXJlIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG4uY2l0eS10ZW1wLW1pbjpob3ZlcixcXHJcXG4uY2l0eS10ZW1wLW1heDpob3ZlcixcXHJcXG4uY2l0eS10ZW1wLWZlZWxzOmhvdmVyLFxcclxcbi5jaXR5LWh1bWlkaXR5OmhvdmVyLFxcclxcbi5jaXR5LXRlbXBlcmF0dXJlOmhvdmVyLFxcclxcbi5jaXR5LXByZXNzdXJlOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tZGF0YS10ZW1wLFxcclxcbi5pbmZvLWRhdGEtbWluLFxcclxcbi5pbmZvLWRhdGEtbWF4LFxcclxcbi5pbmZvLWRhdGEtZmVlbHMsXFxyXFxuLmluZm8tZGF0YS1odW0sXFxyXFxuLmluZm8tZGF0YS1wcmVzcyB7XFxyXFxuICBjb2xvcjogI2RjMmYwMjtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLmNoYW5nZS11bml0cy1zbGlkZXIge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgd2lkdGg6IDcwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmNoYW5nZS11bml0cy1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjNlOGE7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxufVxcclxcbi8qIFxcclxcbi5pbnB1dC11bml0cy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG4uaW5wdXQtdW5pdHMtY29udGFpbmVyIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuLmRpc2FibGVkIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn0gKi9cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS10aXRsZScpO1xyXG5jb25zdCBjaXR5VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1kYXRhLXRlbXAnKTtcclxuY29uc3QgY2l0eVRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1kYXRhLW1pbicpO1xyXG5jb25zdCBjaXR5VGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRhdGEtbWF4Jyk7XHJcbmNvbnN0IGNpdHlUZW1wRmVlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1kYXRhLWZlZWxzJyk7XHJcbmNvbnN0IGNpdHlIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRhdGEtaHVtJyk7XHJcbmNvbnN0IGNpdHlQcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRhdGEtcHJlc3MnKTtcclxuXHJcblxyXG5jbGFzcyBXZWF0aGVySW5mbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjaXR5TmFtZSwgY2l0eVRlbXAsIGNpdHlUZW1wTWluLCBjaXR5VGVtcE1heCwgY2l0eVRlbXBGZWVscywgY2l0eUh1bWlkaXR5LCBjaXR5UHJlc3N1cmUpIHtcclxuICAgICAgICB0aGlzLmNpdHlOYW1lID0gY2l0eU5hbWU7XHJcbiAgICAgICAgdGhpcy5jaXR5VGVtcCA9IGNpdHlUZW1wO1xyXG4gICAgICAgIHRoaXMuY2l0eVRlbXBNaW4gPSBjaXR5VGVtcE1pbjtcclxuICAgICAgICB0aGlzLmNpdHlUZW1wTWF4ID0gY2l0eVRlbXBNYXg7XHJcbiAgICAgICAgdGhpcy5jaXR5VGVtcEZlZWxzID0gY2l0eVRlbXBGZWVscztcclxuICAgICAgICB0aGlzLmNpdHlIdW1pZGl0eSA9IGNpdHlIdW1pZGl0eTtcclxuICAgICAgICB0aGlzLmNpdHlQcmVzc3VyZSA9IGNpdHlQcmVzc3VyZTtcclxuICAgIH1cclxuXHJcbiAgICAvL21ldGhvZFxyXG4gICAgaW5zZXJ0SW5mb0ZhaHJlbmhlaXQoKSB7XHJcbiAgICAgICAgY2l0eVRpdGxlLmlubmVySFRNTCA9IHRoaXMuY2l0eU5hbWU7XHJcbiAgICAgICAgY2l0eVRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGAke3RoaXMuY2l0eVRlbXB9wrBGYDtcclxuICAgICAgICBjaXR5VGVtcE1pbi5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlUZW1wTWlufcKwRmA7XHJcbiAgICAgICAgY2l0eVRlbXBNYXguaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5VGVtcE1heH3CsEZgO1xyXG4gICAgICAgIGNpdHlUZW1wRmVlbHMuaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5VGVtcEZlZWxzfcKwRmA7XHJcbiAgICAgICAgY2l0eUh1bWlkaXR5LmlubmVySFRNTCA9IGAke3RoaXMuY2l0eUh1bWlkaXR5fSVgO1xyXG4gICAgICAgIGNpdHlQcmVzc3VyZS5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlQcmVzc3VyZX1oUGFgO1xyXG4gICAgfVxyXG4gICAgLy9tZXRob2RcclxuICAgIGluc2VydEluZm9DZWxzaXVzKCkge1xyXG4gICAgICAgIGNpdHlUaXRsZS5pbm5lckhUTUwgPSB0aGlzLmNpdHlOYW1lO1xyXG4gICAgICAgIGNpdHlUZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlUZW1wfcKwQ2A7XHJcbiAgICAgICAgY2l0eVRlbXBNaW4uaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5VGVtcE1pbn3CsENgO1xyXG4gICAgICAgIGNpdHlUZW1wTWF4LmlubmVySFRNTCA9IGAke3RoaXMuY2l0eVRlbXBNYXh9wrBDYDtcclxuICAgICAgICBjaXR5VGVtcEZlZWxzLmlubmVySFRNTCA9IGAke3RoaXMuY2l0eVRlbXBGZWVsc33CsENgO1xyXG4gICAgICAgIGNpdHlIdW1pZGl0eS5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlIdW1pZGl0eX0lYDtcclxuICAgICAgICBjaXR5UHJlc3N1cmUuaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5UHJlc3N1cmV9aFBhYDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJJbmZvOyIsImltcG9ydCB7XHJcbiAgICBnZXRGb3JlY2FzdCxcclxuICAgIGdldEZvcmVjYXN0Q2Vsc2l1cyxcclxufSBmcm9tIFwiLi9nZXRmb3JlY2FzdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgcGFyc2VOdW1cclxufSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGRhdGEpIHtcclxuICAgIGNvbnN0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7ZGF0YX0mbGltaXQ9MSZhcHBpZD1hNzg2NmJmMDFhZmM2MjVmOGQ4OGY0YzNiODI0MzlkMGBcclxuICAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtb2RlOiBcImNvcnNcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhSnNvbiA9IGF3YWl0IGdldERhdGEuanNvbigpO1xyXG4gICAgY29uc3QgbGF0ID0gZGF0YUpzb25bMF0ubGF0XHJcbiAgICBjb25zdCBsb24gPSBkYXRhSnNvblswXS5sb25cclxuICAgIGNvbnN0IGNvb3JkID0gYGxhdD0ke3BhcnNlTnVtKGxhdCl9Jmxvbj0ke3BhcnNlTnVtKGxvbil9YDtcclxuICAgIGdldEZvcmVjYXN0KGNvb3JkKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyQ2Vsc2l1cyhkYXRhKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2RhdGF9JmxpbWl0PTEmYXBwaWQ9YTc4NjZiZjAxYWZjNjI1ZjhkODhmNGMzYjgyNDM5ZDBgXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCJcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YUpzb24gPSBhd2FpdCBnZXREYXRhLmpzb24oKTtcclxuICAgIGNvbnN0IGxhdCA9IGRhdGFKc29uWzBdLmxhdFxyXG4gICAgY29uc3QgbG9uID0gZGF0YUpzb25bMF0ubG9uXHJcbiAgICBjb25zdCBjb29yZCA9IGBsYXQ9JHtwYXJzZU51bShsYXQpfSZsb249JHtwYXJzZU51bShsb24pfWA7XHJcbiAgICBnZXRGb3JlY2FzdENlbHNpdXMoY29vcmQpXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRDb29yZGluYXRlcyxcclxuICAgIGdldFdlYXRoZXJDZWxzaXVzLFxyXG59OyIsImltcG9ydCBXZWF0aGVySW5mbyBmcm9tIFwiLi9kb21oYW5kbGluZ1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QoY29vcmQpIHtcclxuICAgIGNvbnN0IGZvcmVjYXN0VXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyPyR7Y29vcmR9JnVuaXRzPWltcGVyaWFsJmFwcGlkPWE3ODY2YmYwMWFmYzYyNWY4ZDg4ZjRjM2I4MjQzOWQwYFxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IGZldGNoKGZvcmVjYXN0VXJsKTtcclxuICAgIGNvbnN0IHJlc3BKc29uID0gYXdhaXQgZ2V0RGF0YS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwSnNvbik7XHJcbiAgICBjb25zdCBpbnNlcnREYXRhID0gbmV3IFdlYXRoZXJJbmZvKHJlc3BKc29uLm5hbWUsIHJlc3BKc29uLm1haW4udGVtcCwgcmVzcEpzb24ubWFpbi50ZW1wX21pbiwgcmVzcEpzb24ubWFpbi50ZW1wX21heCwgcmVzcEpzb24ubWFpbi5mZWVsc19saWtlLCByZXNwSnNvbi5tYWluLmh1bWlkaXR5LCByZXNwSnNvbi5tYWluLnByZXNzdXJlKVxyXG4gICAgcmV0dXJuIGluc2VydERhdGEuaW5zZXJ0SW5mb0ZhaHJlbmhlaXQoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RDZWxzaXVzKGNvb3JkKSB7XHJcbiAgICBjb25zdCBmb3JlY2FzdFVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj8ke2Nvb3JkfSZ1bml0cz1tZXRyaWMmYXBwaWQ9YTc4NjZiZjAxYWZjNjI1ZjhkODhmNGMzYjgyNDM5ZDBgXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgZmV0Y2goZm9yZWNhc3RVcmwpO1xyXG4gICAgY29uc3QgcmVzcEpzb24gPSBhd2FpdCBnZXREYXRhLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BKc29uKTtcclxuICAgIGNvbnN0IGluc2VydERhdGEgPSBuZXcgV2VhdGhlckluZm8ocmVzcEpzb24ubmFtZSwgcmVzcEpzb24ubWFpbi50ZW1wLCByZXNwSnNvbi5tYWluLnRlbXBfbWluLCByZXNwSnNvbi5tYWluLnRlbXBfbWF4LCByZXNwSnNvbi5tYWluLmZlZWxzX2xpa2UsIHJlc3BKc29uLm1haW4uaHVtaWRpdHksIHJlc3BKc29uLm1haW4ucHJlc3N1cmUpXHJcbiAgICByZXR1cm4gaW5zZXJ0RGF0YS5pbnNlcnRJbmZvQ2Vsc2l1cygpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0Rm9yZWNhc3QsXHJcbiAgICBnZXRGb3JlY2FzdENlbHNpdXNcclxufTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnXHJcbmltcG9ydCBpbWFnZSBmcm9tICcuLi9hc3NldHMvc2VhcmNoLnN2ZydcclxuY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWltZycpO1xyXG5pbWcuc3JjID0gaW1hZ2U7XHJcbiIsImNvbnN0IGNoYW5nZVVuaXRzU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS11bml0cy1zbGlkZXInKVxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jaXR5JylcclxuaW1wb3J0IHtcclxuICAgIGdldENvb3JkaW5hdGVzLFxyXG4gICAgZ2V0V2VhdGhlckNlbHNpdXNcclxufSBmcm9tIFwiLi9nZXRkYXRhXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gcGFyc2VOdW0obnVtKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQobnVtKS50b0ZpeGVkKDIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENpdHlJbmZvKCkge1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBnZXRDb29yZGluYXRlcyhpbnB1dC52YWx1ZSlcclxuICAgICAgICAgICAgY2hhbmdlVW5pdHNTbGlkZXIudmFsdWUgPSAxO1xyXG4gICAgICAgICAgICBjaGFuZ2VVbml0c1NsaWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVW5pdHMoKSB7XHJcbiAgICBpZiAoY2hhbmdlVW5pdHNTbGlkZXIudmFsdWUgPT0gMikge1xyXG4gICAgICAgIGNoYW5nZVVuaXRzU2xpZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZjYmY0OVwiO1xyXG4gICAgICAgIGdldFdlYXRoZXJDZWxzaXVzKGlucHV0LnZhbHVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnZXRDb29yZGluYXRlcyhpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgY2hhbmdlVW5pdHNTbGlkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuY2hhbmdlVW5pdHNTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VVbml0cylcclxuZXhwb3J0IHtcclxuICAgIHBhcnNlTnVtLFxyXG4gICAgZ2V0Q2l0eUluZm9cclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0YXJ0ZXJwYWdlIGZyb20gJy4vY29tcG9uZW50cy9zdGFydGVycGFnZSdcclxuaW1wb3J0IHtcclxuICAgIGdldENpdHlJbmZvXHJcbn0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcydcclxuXHJcbmdldENpdHlJbmZvKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9