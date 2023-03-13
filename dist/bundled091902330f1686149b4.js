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

/***/ "./src/components/getcoordinates.js":
/*!******************************************!*\
  !*** ./src/components/getcoordinates.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/components/utilities.js");

const input = document.querySelector('.input-city');



async function getCityCoordinates() {
    try {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value},&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`

        const response = await fetch(url);
        const dataRes = await response.json()
        const latCoordinates = dataRes[0].lat
        const lonCoordinates = dataRes[0].lon

        // console.log(parse(latCoordinates), parse(lonCoordinates))
        const newCoordinates = new Coordinates((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.parse)(latCoordinates), (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.parse)(lonCoordinates));

        return newCoordinates


    } catch (err) {
        alert('Something went wrong!')
        console.log(err)
    }

}


// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         getCityCoordinates();
//         input.value = '';
//     }
// })

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
const input = document.querySelector('.input-city');
const slider = document.querySelector('.change-units-slider');


async function getCoordinates(data) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(url);
    const dataJson = await getData.json();
    const lat = dataJson[0].lat
    const lon = dataJson[0].lon
    console.log(parseNum(lat), parseNum(lon));
    const coord = `lat=${parseNum(lat)}&lon=${parseNum(lon)}`;
    (0,_getforecast__WEBPACK_IMPORTED_MODULE_0__.getForecast)(coord)
}

async function getWeatherCelsius(data) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(url);
    const dataJson = await getData.json();
    const lat = dataJson[0].lat
    const lon = dataJson[0].lon
    console.log(parseNum(lat), parseNum(lon));
    const coord = `lat=${parseNum(lat)}&lon=${parseNum(lon)}`;
    (0,_getforecast__WEBPACK_IMPORTED_MODULE_0__.getForecastCelsius)(coord)
}



function parseNum(num) {
    return Number.parseFloat(num).toFixed(2)
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getCoordinates(input.value)
        slider.value = 1;
        slider.style.backgroundColor = "white";
    }
})



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
/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getdata */ "./src/components/getdata.js");
/* harmony import */ var _getcoordinates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getcoordinates */ "./src/components/getcoordinates.js");
/* harmony import */ var _getforecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getforecast */ "./src/components/getforecast.js");





const img = document.querySelector('.input-img');
img.src = _assets_search_svg__WEBPACK_IMPORTED_MODULE_1__;
// getCityCoordinates();
// getForecast();

/***/ }),

/***/ "./src/components/utilities.js":
/*!*************************************!*\
  !*** ./src/components/utilities.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ "./src/components/getdata.js");
const changeUnits = document.querySelector('.change-units-slider')
const input = document.querySelector('.input-city')
;


function parse(data) {
    return Number.parseFloat(data).toFixed(2);
}


function changeUnitsSlider() {
    if (changeUnits.value == 2) {
        changeUnits.style.backgroundColor = "#fcbf49";
        (0,_getdata__WEBPACK_IMPORTED_MODULE_0__.getWeatherCelsius)(input.value)
    } else {
        (0,_getdata__WEBPACK_IMPORTED_MODULE_0__.getCoordinates)(input.value);
    }
}

changeUnits.addEventListener('click', changeUnitsSlider)


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
/* harmony import */ var _components_domhandling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/domhandling */ "./src/components/domhandling.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDUkE7QUFDQTtBQUNBLENBR21CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBaUI7QUFDekIsTUFBTTtBQUNOLFFBQVEsd0RBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUluQjtBQUMvQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kb21oYW5kbGluZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZ2V0Y29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2dldGRhdGEuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2dldGZvcmVjYXN0LmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9zdGFydGVycGFnZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IDAyM2U4YTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgOTBkZWcsXFxyXFxuICAgIHJnYmEoMjUsIDEwMCwgMjQ3LCAxKSAwJSxcXHJcXG4gICAgcmdiKDIwLCAyMCwgMjApIDUyJSxcXHJcXG4gICAgcmdiYSgyLCAxMzcsIDIzOCwgMSkgMTAwJVxcclxcbiAgKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCAyMDUsIDI0NiwgMSk7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgaGVpZ2h0OiAyNSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICMxNDlkZjI7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbC1jaXR5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG59XFxyXFxuLmlucHV0LWNpdHkge1xcclxcbiAgd2lkdGg6IDIzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4uaW5wdXQtY2l0eTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtaW1nIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAyMTBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYigyNTIsIDI1MiwgMjUyKTtcXHJcXG59XFxyXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxyXFxuICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCAyMDUsIDI0NiwgMSk7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggIzE0OWRmMjtcXHJcXG59XFxyXFxuLndlYXRoZXItaW5mby1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxuICBjb2x1bW4tZ2FwOiA3MHB4O1xcclxcbn1cXHJcXG4uY2l0eS10aXRsZSB7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG59XFxyXFxuLmNpdHktdGVtcC1taW4ge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG59XFxyXFxuLmNpdHktdGVtcC1tYXgge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICBncmlkLXJvdy1zdGFydDogMztcXHJcXG59XFxyXFxuLmNpdHktdGVtcC1mZWVscyB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXHJcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcclxcbn1cXHJcXG4uY2l0eS1odW1pZGl0eSB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXHJcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS10ZW1wLW1pbixcXHJcXG4uY2l0eS10ZW1wLW1heCxcXHJcXG4uY2l0eS10ZW1wLWZlZWxzLFxcclxcbi5jaXR5LWh1bWlkaXR5LFxcclxcbi5jaXR5LXRlbXBlcmF0dXJlLFxcclxcbi5jaXR5LXByZXNzdXJlIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcbi5jaXR5LXRlbXAtZmVlbHMsXFxyXFxuLmNpdHktaHVtaWRpdHksXFxyXFxuLmNpdHktcHJlc3N1cmUge1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jaXR5LXRlbXAtbWluOmhvdmVyLFxcclxcbi5jaXR5LXRlbXAtbWF4OmhvdmVyLFxcclxcbi5jaXR5LXRlbXAtZmVlbHM6aG92ZXIsXFxyXFxuLmNpdHktaHVtaWRpdHk6aG92ZXIsXFxyXFxuLmNpdHktdGVtcGVyYXR1cmU6aG92ZXIsXFxyXFxuLmNpdHktcHJlc3N1cmU6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1kYXRhLXRlbXAsXFxyXFxuLmluZm8tZGF0YS1taW4sXFxyXFxuLmluZm8tZGF0YS1tYXgsXFxyXFxuLmluZm8tZGF0YS1mZWVscyxcXHJcXG4uaW5mby1kYXRhLWh1bSxcXHJcXG4uaW5mby1kYXRhLXByZXNzIHtcXHJcXG4gIGNvbG9yOiAjZGMyZjAyO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG4uY2hhbmdlLXVuaXRzLXNsaWRlciB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY2hhbmdlLXVuaXRzLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyM2U4YTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuLyogXFxyXFxuLmlucHV0LXVuaXRzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcbi5pbnB1dC11bml0cy1jb250YWluZXIgbGFiZWwge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4uZGlzYWJsZWQge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufSAqL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCOzs7OztHQUtDO0VBQ0QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7O0VBTUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLG9CQUFvQjtBQUN0QjtBQUNBOzs7Ozs7RUFNRSxxQkFBcUI7QUFDdkI7O0FBRUE7Ozs7OztFQU1FLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBOzs7Ozs7Ozs7OztHQVdHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogMDIzZThhO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICA5MGRlZyxcXHJcXG4gICAgcmdiYSgyNSwgMTAwLCAyNDcsIDEpIDAlLFxcclxcbiAgICByZ2IoMjAsIDIwLCAyMCkgNTIlLFxcclxcbiAgICByZ2JhKDIsIDEzNywgMjM4LCAxKSAxMDAlXFxyXFxuICApO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjEsIDIwNSwgMjQ2LCAxKTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggIzE0OWRmMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsLWNpdHkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGNvbG9yOiAjMDIzZThhO1xcclxcbn1cXHJcXG4uaW5wdXQtY2l0eSB7XFxyXFxuICB3aWR0aDogMjMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi5pbnB1dC1jaXR5OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1pbWcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXI6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiKDI1MiwgMjUyLCAyNTIpO1xcclxcbn1cXHJcXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjEsIDIwNSwgMjQ2LCAxKTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDQ1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjMTQ5ZGYyO1xcclxcbn1cXHJcXG4ud2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG4gIGNvbHVtbi1nYXA6IDcwcHg7XFxyXFxufVxcclxcbi5jaXR5LXRpdGxlIHtcXHJcXG4gIGNvbG9yOiAjMDIzZThhO1xcclxcbn1cXHJcXG4uY2l0eS10ZW1wLW1pbiB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbn1cXHJcXG4uY2l0eS10ZW1wLW1heCB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xcclxcbn1cXHJcXG4uY2l0eS10ZW1wLWZlZWxzIHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxyXFxufVxcclxcbi5jaXR5LWh1bWlkaXR5IHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxufVxcclxcblxcclxcbi5jaXR5LXRlbXAtbWluLFxcclxcbi5jaXR5LXRlbXAtbWF4LFxcclxcbi5jaXR5LXRlbXAtZmVlbHMsXFxyXFxuLmNpdHktaHVtaWRpdHksXFxyXFxuLmNpdHktdGVtcGVyYXR1cmUsXFxyXFxuLmNpdHktcHJlc3N1cmUge1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuLmNpdHktdGVtcC1mZWVscyxcXHJcXG4uY2l0eS1odW1pZGl0eSxcXHJcXG4uY2l0eS1wcmVzc3VyZSB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNpdHktdGVtcC1taW46aG92ZXIsXFxyXFxuLmNpdHktdGVtcC1tYXg6aG92ZXIsXFxyXFxuLmNpdHktdGVtcC1mZWVsczpob3ZlcixcXHJcXG4uY2l0eS1odW1pZGl0eTpob3ZlcixcXHJcXG4uY2l0eS10ZW1wZXJhdHVyZTpob3ZlcixcXHJcXG4uY2l0eS1wcmVzc3VyZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWRhdGEtdGVtcCxcXHJcXG4uaW5mby1kYXRhLW1pbixcXHJcXG4uaW5mby1kYXRhLW1heCxcXHJcXG4uaW5mby1kYXRhLWZlZWxzLFxcclxcbi5pbmZvLWRhdGEtaHVtLFxcclxcbi5pbmZvLWRhdGEtcHJlc3Mge1xcclxcbiAgY29sb3I6ICNkYzJmMDI7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcbi5jaGFuZ2UtdW5pdHMtc2xpZGVyIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jaGFuZ2UtdW5pdHMtc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzZThhO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG4vKiBcXHJcXG4uaW5wdXQtdW5pdHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuLmlucHV0LXVuaXRzLWNvbnRhaW5lciBsYWJlbCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5kaXNhYmxlZCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59ICovXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktdGl0bGUnKTtcclxuY29uc3QgY2l0eVRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGF0YS10ZW1wJyk7XHJcbmNvbnN0IGNpdHlUZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGF0YS1taW4nKTtcclxuY29uc3QgY2l0eVRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1kYXRhLW1heCcpO1xyXG5jb25zdCBjaXR5VGVtcEZlZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGF0YS1mZWVscycpO1xyXG5jb25zdCBjaXR5SHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1kYXRhLWh1bScpO1xyXG5jb25zdCBjaXR5UHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1kYXRhLXByZXNzJyk7XHJcblxyXG5cclxuY2xhc3MgV2VhdGhlckluZm8ge1xyXG4gICAgY29uc3RydWN0b3IoY2l0eU5hbWUsIGNpdHlUZW1wLCBjaXR5VGVtcE1pbiwgY2l0eVRlbXBNYXgsIGNpdHlUZW1wRmVlbHMsIGNpdHlIdW1pZGl0eSwgY2l0eVByZXNzdXJlKSB7XHJcbiAgICAgICAgdGhpcy5jaXR5TmFtZSA9IGNpdHlOYW1lO1xyXG4gICAgICAgIHRoaXMuY2l0eVRlbXAgPSBjaXR5VGVtcDtcclxuICAgICAgICB0aGlzLmNpdHlUZW1wTWluID0gY2l0eVRlbXBNaW47XHJcbiAgICAgICAgdGhpcy5jaXR5VGVtcE1heCA9IGNpdHlUZW1wTWF4O1xyXG4gICAgICAgIHRoaXMuY2l0eVRlbXBGZWVscyA9IGNpdHlUZW1wRmVlbHM7XHJcbiAgICAgICAgdGhpcy5jaXR5SHVtaWRpdHkgPSBjaXR5SHVtaWRpdHk7XHJcbiAgICAgICAgdGhpcy5jaXR5UHJlc3N1cmUgPSBjaXR5UHJlc3N1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tZXRob2RcclxuICAgIGluc2VydEluZm9GYWhyZW5oZWl0KCkge1xyXG4gICAgICAgIGNpdHlUaXRsZS5pbm5lckhUTUwgPSB0aGlzLmNpdHlOYW1lO1xyXG4gICAgICAgIGNpdHlUZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlUZW1wfcKwRmA7XHJcbiAgICAgICAgY2l0eVRlbXBNaW4uaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5VGVtcE1pbn3CsEZgO1xyXG4gICAgICAgIGNpdHlUZW1wTWF4LmlubmVySFRNTCA9IGAke3RoaXMuY2l0eVRlbXBNYXh9wrBGYDtcclxuICAgICAgICBjaXR5VGVtcEZlZWxzLmlubmVySFRNTCA9IGAke3RoaXMuY2l0eVRlbXBGZWVsc33CsEZgO1xyXG4gICAgICAgIGNpdHlIdW1pZGl0eS5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlIdW1pZGl0eX0lYDtcclxuICAgICAgICBjaXR5UHJlc3N1cmUuaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5UHJlc3N1cmV9aFBhYDtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRJbmZvQ2Vsc2l1cygpIHtcclxuICAgICAgICBjaXR5VGl0bGUuaW5uZXJIVE1MID0gdGhpcy5jaXR5TmFtZTtcclxuICAgICAgICBjaXR5VGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5VGVtcH3CsENgO1xyXG4gICAgICAgIGNpdHlUZW1wTWluLmlubmVySFRNTCA9IGAke3RoaXMuY2l0eVRlbXBNaW59wrBDYDtcclxuICAgICAgICBjaXR5VGVtcE1heC5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlUZW1wTWF4fcKwQ2A7XHJcbiAgICAgICAgY2l0eVRlbXBGZWVscy5pbm5lckhUTUwgPSBgJHt0aGlzLmNpdHlUZW1wRmVlbHN9wrBDYDtcclxuICAgICAgICBjaXR5SHVtaWRpdHkuaW5uZXJIVE1MID0gYCR7dGhpcy5jaXR5SHVtaWRpdHl9JWA7XHJcbiAgICAgICAgY2l0eVByZXNzdXJlLmlubmVySFRNTCA9IGAke3RoaXMuY2l0eVByZXNzdXJlfWhQYWA7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckluZm87IiwiaW1wb3J0IHtcclxuICAgIHBhcnNlLFxyXG59IGZyb20gXCIuL3V0aWxpdGllc1wiO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jaXR5Jyk7XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENpdHlDb29yZGluYXRlcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtpbnB1dC52YWx1ZX0sJmxpbWl0PTEmYXBwaWQ9YTc4NjZiZjAxYWZjNjI1ZjhkODhmNGMzYjgyNDM5ZDBgXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhUmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc3QgbGF0Q29vcmRpbmF0ZXMgPSBkYXRhUmVzWzBdLmxhdFxyXG4gICAgICAgIGNvbnN0IGxvbkNvb3JkaW5hdGVzID0gZGF0YVJlc1swXS5sb25cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGFyc2UobGF0Q29vcmRpbmF0ZXMpLCBwYXJzZShsb25Db29yZGluYXRlcykpXHJcbiAgICAgICAgY29uc3QgbmV3Q29vcmRpbmF0ZXMgPSBuZXcgQ29vcmRpbmF0ZXMocGFyc2UobGF0Q29vcmRpbmF0ZXMpLCBwYXJzZShsb25Db29yZGluYXRlcykpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3Q29vcmRpbmF0ZXNcclxuXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8vIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4vLyAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbi8vICAgICAgICAgZ2V0Q2l0eUNvb3JkaW5hdGVzKCk7XHJcbi8vICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuLy8gICAgIH1cclxuLy8gfSkiLCJjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jaXR5Jyk7XHJcbmNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdW5pdHMtc2xpZGVyJyk7XHJcbmltcG9ydCB7XHJcbiAgICBnZXRGb3JlY2FzdCwgZ2V0Rm9yZWNhc3RDZWxzaXVzXHJcbn0gZnJvbSBcIi4vZ2V0Zm9yZWNhc3RcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGRhdGEpIHtcclxuICAgIGNvbnN0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7ZGF0YX0mbGltaXQ9MSZhcHBpZD1hNzg2NmJmMDFhZmM2MjVmOGQ4OGY0YzNiODI0MzlkMGBcclxuICAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgZGF0YUpzb24gPSBhd2FpdCBnZXREYXRhLmpzb24oKTtcclxuICAgIGNvbnN0IGxhdCA9IGRhdGFKc29uWzBdLmxhdFxyXG4gICAgY29uc3QgbG9uID0gZGF0YUpzb25bMF0ubG9uXHJcbiAgICBjb25zb2xlLmxvZyhwYXJzZU51bShsYXQpLCBwYXJzZU51bShsb24pKTtcclxuICAgIGNvbnN0IGNvb3JkID0gYGxhdD0ke3BhcnNlTnVtKGxhdCl9Jmxvbj0ke3BhcnNlTnVtKGxvbil9YDtcclxuICAgIGdldEZvcmVjYXN0KGNvb3JkKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyQ2Vsc2l1cyhkYXRhKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2RhdGF9JmxpbWl0PTEmYXBwaWQ9YTc4NjZiZjAxYWZjNjI1ZjhkODhmNGMzYjgyNDM5ZDBgXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGRhdGFKc29uID0gYXdhaXQgZ2V0RGF0YS5qc29uKCk7XHJcbiAgICBjb25zdCBsYXQgPSBkYXRhSnNvblswXS5sYXRcclxuICAgIGNvbnN0IGxvbiA9IGRhdGFKc29uWzBdLmxvblxyXG4gICAgY29uc29sZS5sb2cocGFyc2VOdW0obGF0KSwgcGFyc2VOdW0obG9uKSk7XHJcbiAgICBjb25zdCBjb29yZCA9IGBsYXQ9JHtwYXJzZU51bShsYXQpfSZsb249JHtwYXJzZU51bShsb24pfWA7XHJcbiAgICBnZXRGb3JlY2FzdENlbHNpdXMoY29vcmQpXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcGFyc2VOdW0obnVtKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQobnVtKS50b0ZpeGVkKDIpXHJcbn1cclxuXHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIGdldENvb3JkaW5hdGVzKGlucHV0LnZhbHVlKVxyXG4gICAgICAgIHNsaWRlci52YWx1ZSA9IDE7XHJcbiAgICAgICAgc2xpZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRDb29yZGluYXRlcyxcclxuICAgIGdldFdlYXRoZXJDZWxzaXVzXHJcbn07IiwiaW1wb3J0IFdlYXRoZXJJbmZvIGZyb20gXCIuL2RvbWhhbmRsaW5nXCI7XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNvb3JkKSB7XHJcbiAgICBjb25zdCBmb3JlY2FzdFVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj8ke2Nvb3JkfSZ1bml0cz1pbXBlcmlhbCZhcHBpZD1hNzg2NmJmMDFhZmM2MjVmOGQ4OGY0YzNiODI0MzlkMGBcclxuICAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBmZXRjaChmb3JlY2FzdFVybCk7XHJcbiAgICBjb25zdCByZXNwSnNvbiA9IGF3YWl0IGdldERhdGEuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2cocmVzcEpzb24pO1xyXG4gICAgY29uc3QgaW5zZXJ0RGF0YSA9IG5ldyBXZWF0aGVySW5mbyhyZXNwSnNvbi5uYW1lLCByZXNwSnNvbi5tYWluLnRlbXAsIHJlc3BKc29uLm1haW4udGVtcF9taW4sIHJlc3BKc29uLm1haW4udGVtcF9tYXgsIHJlc3BKc29uLm1haW4uZmVlbHNfbGlrZSwgcmVzcEpzb24ubWFpbi5odW1pZGl0eSwgcmVzcEpzb24ubWFpbi5wcmVzc3VyZSlcclxuICAgIHJldHVybiBpbnNlcnREYXRhLmluc2VydEluZm9GYWhyZW5oZWl0KCk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RDZWxzaXVzKGNvb3JkKSB7XHJcbiAgICBjb25zdCBmb3JlY2FzdFVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj8ke2Nvb3JkfSZ1bml0cz1tZXRyaWMmYXBwaWQ9YTc4NjZiZjAxYWZjNjI1ZjhkODhmNGMzYjgyNDM5ZDBgXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgZmV0Y2goZm9yZWNhc3RVcmwpO1xyXG4gICAgY29uc3QgcmVzcEpzb24gPSBhd2FpdCBnZXREYXRhLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BKc29uKTtcclxuICAgIGNvbnN0IGluc2VydERhdGEgPSBuZXcgV2VhdGhlckluZm8ocmVzcEpzb24ubmFtZSwgcmVzcEpzb24ubWFpbi50ZW1wLCByZXNwSnNvbi5tYWluLnRlbXBfbWluLCByZXNwSnNvbi5tYWluLnRlbXBfbWF4LCByZXNwSnNvbi5tYWluLmZlZWxzX2xpa2UsIHJlc3BKc29uLm1haW4uaHVtaWRpdHksIHJlc3BKc29uLm1haW4ucHJlc3N1cmUpXHJcbiAgICByZXR1cm4gaW5zZXJ0RGF0YS5pbnNlcnRJbmZvQ2Vsc2l1cygpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRGb3JlY2FzdCxcclxuICAgIGdldEZvcmVjYXN0Q2Vsc2l1c1xyXG59OyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcydcclxuaW1wb3J0IGltYWdlIGZyb20gJy4uL2Fzc2V0cy9zZWFyY2guc3ZnJ1xyXG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuL2dldGRhdGEnXHJcbmltcG9ydCBnZXRDaXR5Q29vcmRpbmF0ZXMgZnJvbSAnLi9nZXRjb29yZGluYXRlcydcclxuaW1wb3J0IGdldEZvcmVjYXN0IGZyb20gJy4vZ2V0Zm9yZWNhc3QnXHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1pbWcnKTtcclxuaW1nLnNyYyA9IGltYWdlO1xyXG4vLyBnZXRDaXR5Q29vcmRpbmF0ZXMoKTtcclxuLy8gZ2V0Rm9yZWNhc3QoKTsiLCJjb25zdCBjaGFuZ2VVbml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdW5pdHMtc2xpZGVyJylcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY2l0eScpXHJcbmltcG9ydCB7XHJcbiAgICBnZXRDb29yZGluYXRlcyxcclxuICAgIGdldFdlYXRoZXJDZWxzaXVzXHJcbn0gZnJvbSBcIi4vZ2V0ZGF0YVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBhcnNlKGRhdGEpIHtcclxuICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdChkYXRhKS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVW5pdHNTbGlkZXIoKSB7XHJcbiAgICBpZiAoY2hhbmdlVW5pdHMudmFsdWUgPT0gMikge1xyXG4gICAgICAgIGNoYW5nZVVuaXRzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZjYmY0OVwiO1xyXG4gICAgICAgIGdldFdlYXRoZXJDZWxzaXVzKGlucHV0LnZhbHVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnZXRDb29yZGluYXRlcyhpbnB1dC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNoYW5nZVVuaXRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVW5pdHNTbGlkZXIpXHJcbmV4cG9ydCB7XHJcbiAgICBwYXJzZSxcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0YXJ0ZXJwYWdlIGZyb20gJy4vY29tcG9uZW50cy9zdGFydGVycGFnZSdcclxuaW1wb3J0IHtcclxuICAgIGdldEZhaHJlbmhlaXQsXHJcbiAgICBnZXRDZWxzaXVzXHJcbn0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcydcclxuXHJcblxyXG5pbXBvcnQgdGVzdGluZyBmcm9tICcuL2NvbXBvbmVudHMvZG9taGFuZGxpbmcnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9