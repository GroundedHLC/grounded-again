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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("W+IF");


/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "GUDI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const formatDate = date => {
  return new Date(date).toLocaleDateString('en-US');
};

/* harmony default export */ __webpack_exports__["a"] = (formatDate);

/***/ }),

/***/ "W+IF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "react-gravatar"
var external_react_gravatar_ = __webpack_require__("dUMR");
var external_react_gravatar_default = /*#__PURE__*/__webpack_require__.n(external_react_gravatar_);

// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__("GUDI");

// CONCATENATED MODULE: ./components/Profile/ProfileHeader.js

var __jsx = external_react_default.a.createElement;




const ProfileHeader = ({
  role,
  email,
  name,
  createdAt
}) => {
  return __jsx(external_semantic_ui_react_["Container"], null, __jsx("div", {
    className: "profile-root-user"
  }, __jsx("div", {
    className: "profile-image"
  }, __jsx(external_react_gravatar_default.a, {
    email: email,
    size: 100,
    rating: "pg",
    default: "monsterid"
  }), __jsx("button", {
    onClick: () => window.open('https://en.gravatar.com/', '_blank'),
    className: "upload",
    title: "Upload Image"
  }, __jsx(external_semantic_ui_react_["Icon"], {
    name: "camera"
  }))), __jsx("h3", null, name), __jsx("p", null, email), __jsx("p", null, "Joined: ", Object(formatDate["a" /* default */])(createdAt)), __jsx("p", null, "Role: ", role === 'user' ? 'Customer' : role)));
};

/* harmony default export */ var Profile_ProfileHeader = (ProfileHeader);
// CONCATENATED MODULE: ./pages/profile.js

var profile_jsx = external_react_default.a.createElement;


const Profile = ({
  user
}) => {
  return profile_jsx("div", {
    className: "profile-area"
  }, profile_jsx(Profile_ProfileHeader, user));
};

/* harmony default export */ var profile = __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dUMR":
/***/ (function(module, exports) {

module.exports = require("react-gravatar");

/***/ })

/******/ });