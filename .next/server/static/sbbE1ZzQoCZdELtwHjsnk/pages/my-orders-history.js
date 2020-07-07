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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bcJn");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "bcJn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__("kG9d");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__("GUDI");

// CONCATENATED MODULE: ./components/MyOrdersHistory/OrdersHistory.js

var __jsx = external_react_default.a.createElement;




const OrdersHistory = ({
  orders = []
}) => {
  const router = Object(router_["useRouter"])();

  const mapOrdersToPanels = orders => {
    return orders.map(order => ({
      key: order._id,
      title: {
        content: __jsx(external_react_default.a.Fragment, null, __jsx(external_semantic_ui_react_["Label"], {
          color: "blue",
          content: Object(formatDate["a" /* default */])(order.createdAt)
        }), __jsx(external_semantic_ui_react_["Popup"], {
          trigger: __jsx(external_semantic_ui_react_["Checkbox"], {
            toggle: true,
            disabled: true,
            label: order.status == "delivered" ? "Delivered" : "Pending",
            checked: order.status == "delivered" ? true : false,
            fitted: true
          }),
          header: "Delivery Status",
          content: order.status == "delivered" ? "Delivered" : "Pending",
          position: "top center",
          on: ['hover']
        }))
      },
      content: {
        content: __jsx(external_react_default.a.Fragment, null, __jsx(external_semantic_ui_react_["List"].Header, {
          as: "h3"
        }, "Total: $", order.total, __jsx(external_semantic_ui_react_["Label"], {
          content: order.email,
          icon: "mail",
          basic: true,
          horizontal: true,
          style: {
            marginLeft: '1em'
          }
        })), __jsx(external_semantic_ui_react_["List"], null, order.products.map(p => __jsx(external_semantic_ui_react_["List"].Item, {
          key: p.product._id
        }, __jsx(external_semantic_ui_react_["Image"], {
          avatar: true,
          src: p.product.mediaUrl
        }), __jsx(external_semantic_ui_react_["List"].Content, null, __jsx(external_semantic_ui_react_["List"].Header, null, p.product.name), __jsx(external_semantic_ui_react_["List"].Description, null, p.quantity, " . $", p.product.price)), __jsx(external_semantic_ui_react_["List"].Content, {
          floated: "right"
        }, __jsx(external_semantic_ui_react_["Label"], {
          tag: true,
          color: "red",
          size: "tiny"
        }, p.product.sku))))))
      }
    }));
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx(external_semantic_ui_react_["Header"], {
    as: "h2"
  }, __jsx(external_semantic_ui_react_["Icon"], {
    name: "folder open"
  }), "My Order History"), orders.length === 0 ? __jsx(external_semantic_ui_react_["Segment"], {
    inverted: true,
    tertiary: true,
    color: "pink",
    textAlign: "center"
  }, __jsx(external_semantic_ui_react_["Header"], {
    icon: true
  }, __jsx(external_semantic_ui_react_["Icon"], {
    name: "copy outline"
  }), "No Past Orders."), __jsx(external_semantic_ui_react_["Button"], {
    onClick: () => router.push('/products'),
    color: "violet"
  }, "View Products")) : __jsx(external_semantic_ui_react_["Accordion"], {
    fluid: true,
    styled: true,
    exclusive: false,
    panels: mapOrdersToPanels(orders)
  }));
};

/* harmony default export */ var MyOrdersHistory_OrdersHistory = (OrdersHistory);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// CONCATENATED MODULE: ./pages/my-orders-history.js

var my_orders_history_jsx = external_react_default.a.createElement;






const MyOrdersHistory = ({
  orders
}) => {
  // console.log(orders)
  return my_orders_history_jsx(external_semantic_ui_react_["Container"], {
    className: "order-history-area"
  }, my_orders_history_jsx(MyOrdersHistory_OrdersHistory, {
    orders: orders
  }));
};

MyOrdersHistory.getInitialProps = async ctx => {
  const {
    token
  } = Object(external_nookies_["parseCookies"])(ctx);

  if (!token) {
    return {
      orders: []
    };
  }

  const payload = {
    headers: {
      Authorization: token
    }
  };
  const url = `${baseUrl["a" /* default */]}/api/orders`;
  const response = await external_axios_default.a.get(url, payload);
  return response.data;
};

/* harmony default export */ var my_orders_history = __webpack_exports__["default"] = (MyOrdersHistory);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kG9d":
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "rjN7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseUrl = true ? 'https://shoponix.envytheme.com' : undefined;
/* harmony default export */ __webpack_exports__["a"] = (baseUrl);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });