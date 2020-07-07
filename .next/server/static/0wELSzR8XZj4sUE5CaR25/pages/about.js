module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Juyh");


/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "Juyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const About = () => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("div", {
    className: "about-area bg-white"
  }, __jsx("h3", null, "Our Story"), __jsx("div", {
    className: "ui grid mb-10"
  }, __jsx("div", {
    className: "seven wide column"
  }, __jsx("img", {
    src: "https://res.cloudinary.com/pauseprogramming/image/upload/v1593559610/grounded/tinified/7d473be7-e511-4819-a419-8f370bff7d3c_eupf0r.jpg",
    alt: "JP Duncan founder of bioenergetic guided active meditation grounded hlc - groundedhlc"
  })), __jsx("div", {
    className: "eight wide column"
  }, __jsx("p", null, "Grounded Holistic Lifestyle Co. grew out of a lot of pain. Jonathan Paul, Grounded HLC's founder, spent 10+ years chasing someone else's ideal of success. 80 hour work weeks, spent pouring over documents, making other people rich. But his personal and spiritual life suffered. There was always a trade: time for money."), __jsx("p", null, "Jonathan has a Bachelor's Degree in Accounting, and quickly realized doing taxes for ultra high net worth individuals was robbing him of peace of mind. The constant deadlines made it seem like it was always April 14th to JP."), __jsx("p", null, "One day he tried an Active Meditation, pioneered by Osho, and taught by Elliot Hulse. And that stress & suffering faded. He tried another session, more relief. One meditation in the morning made work bareable, a kundalini meditation at night, and babies don't sleep so well."))), __jsx("p", null, "From that point on Jon made it a priority to learn how to meditate. Soon, Jonathan was completing intensive & immersive meditation retreats, and studying holisitic lifestyles. His headspace became more comfortable, and going to work felt light. Gone were the days of insomnia and stress induced panic. Eventually, promoted to Senior Accountant at his firm, Jonathan spent a long vacation in Berlin, Germany to study Active Meditation under Elliot Hulse's teachers, who were themselves taught by Osho. Concurrently, studying at the CHEK Institute, JP earned his CHEK level 2 certification, to become a certified CHEK Practioner."), __jsx("p", null, "This would be a truly transformative experience for Jonathan. As he returned back to the Bay area, and to accounting, he began to dream if there was a way to share his new perspective with others. Perhaps, you - like him - feel like life is unmanageable, and if only you had the tools that he now has, your life would be easier, and you could find success, too."), __jsx("p", null, "And this was how Grounded Holistic Lifestyle Co. was founded. One man hoped to create a way to share the practices that so greately improved his quality of life. And he hopes to share them with you now."), __jsx("p", null, "Pick out a sticker, a meditation, or a coaching session, buy that sucker and lets start a conversation about where we can go next, together.")));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });