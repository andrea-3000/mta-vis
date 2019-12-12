/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700,700i&display=swap&subset=latin-ext);\", \"\"]);\n// Module\nexports.push([module.i, \"body {\\n  background-color: #f4f4f4;\\n  font-family: 'Roboto Mono', monospace;\\n  color: #434343; }\\n\\n.subtitle {\\n  color: #a4a4a4; }\\n\\n#map {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/map.js */ \"./src/map.js\");\n/* harmony import */ var _src_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_map_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/src/map.js: Identifier 'json' has already been declared (98:8)\\n\\n\\u001b[0m \\u001b[90m  96 | \\u001b[39masync \\u001b[36mfunction\\u001b[39m drawTrains(map\\u001b[33m,\\u001b[39m json) {\\u001b[0m\\n\\u001b[0m \\u001b[90m  97 | \\u001b[39m    \\u001b[36mconst\\u001b[39m response \\u001b[33m=\\u001b[39m await fetch(\\u001b[32m\\\"https://comp426.peterandringa.com/mta/live\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  98 | \\u001b[39m    let json \\u001b[33m=\\u001b[39m await response\\u001b[33m.\\u001b[39mjson()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  99 | \\u001b[39m    let trains \\u001b[33m=\\u001b[39m json\\u001b[33m.\\u001b[39mtrains\\u001b[33m.\\u001b[39mmap( t \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 100 | \\u001b[39m        let train_id \\u001b[33m=\\u001b[39m \\u001b[32m'train-'\\u001b[39m\\u001b[33m+\\u001b[39mt\\u001b[33m.\\u001b[39mtrain_id\\u001b[33m.\\u001b[39mreplace(\\u001b[32m' '\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[32m'_'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 101 | \\u001b[39m        map\\u001b[33m.\\u001b[39maddSource(train_id\\u001b[33m,\\u001b[39m {\\u001b[32m\\\"type\\\"\\u001b[39m\\u001b[33m:\\u001b[39m \\u001b[32m\\\"geojson\\\"\\u001b[39m\\u001b[33m,\\u001b[39m data\\u001b[33m:\\u001b[39m { \\u001b[32m\\\"type\\\"\\u001b[39m\\u001b[33m:\\u001b[39m \\u001b[32m\\\"Point\\\"\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[32m\\\"coordinates\\\"\\u001b[39m\\u001b[33m:\\u001b[39m t\\u001b[33m.\\u001b[39mtrain_loc}})\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:6420:17)\\n    at ScopeHandler.checkRedeclarationInScope (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:3776:12)\\n    at ScopeHandler.declareName (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:3742:12)\\n    at Parser.checkLVal (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:8159:22)\\n    at Parser.parseVarId (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10682:10)\\n    at Parser.parseVar (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10657:12)\\n    at Parser.parseVarStatement (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10479:10)\\n    at Parser.parseStatementContent (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10076:21)\\n    at Parser.parseStatement (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10009:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10585:25)\\n    at Parser.parseBlockBody (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10572:10)\\n    at Parser.parseBlock (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10556:10)\\n    at Parser.parseFunctionBody (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:9584:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:9554:10)\\n    at /Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10717:12\\n    at Parser.withTopicForbiddingContext (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:9884:14)\\n    at Parser.parseFunction (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10716:10)\\n    at Parser.parseFunctionStatement (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10357:17)\\n    at Parser.parseStatementContent (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10132:25)\\n    at Parser.parseStatement (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10009:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10585:25)\\n    at Parser.parseBlockBody (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:10572:10)\\n    at Parser.parseTopLevel (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:9940:10)\\n    at Parser.parse (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:11447:17)\\n    at parse (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/parser/lib/index.js:11483:38)\\n    at parser (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\\n    at normalizeFile (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\\n    at runSync (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at /Users/andreafg/Documents/college/19-20/fall-19/COMP-426/mta-vis/frontend/node_modules/@babel/core/lib/transform.js:34:34\");\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ })

/******/ });