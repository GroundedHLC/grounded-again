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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart/CartItemList.js":
/*!*****************************************!*\
  !*** ./components/Cart/CartItemList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\David\\Desktop\\again\\components\\Cart\\CartItemList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CartItemList = ({
  products,
  user,
  handleRemoveFromCart,
  success
}) => {
  // console.log(products)
  // const user = false;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const mapCartProductsToItems = products => {
    return products.map(p => ({
      childKey: p.product._id,
      header: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Header, {
        as: "a",
        onClick: () => router.push(`/product?_id=${p.product._id}`),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }
      }, p.product.name),
      image: p.product.mediaUrl,
      meta: `${p.quantity} x $${p.product.price}`,
      fluid: true,
      extra: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        basic: true,
        icon: "remove",
        floated: "right",
        onClick: () => handleRemoveFromCart(p.product._id),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }
      })
    }));
  };

  if (success) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
      success: true,
      header: "success",
      content: "Your order and payment has been accepted!",
      icon: "star outline",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    });
  }

  if (products.length === 0) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      secondary: true,
      color: "green",
      inverted: true,
      textAlign: "center",
      placeholder: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      icons: "true",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "shopping basket",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }), "No products in your cart. Add some!"), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, user ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "violet",
      onClick: () => router.push('/products'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, "View Products") : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "blue",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, "Login to add products")));
  }

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Group, {
    divided: true,
    items: mapCartProductsToItems(products),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CartItemList);

/***/ }),

/***/ "./components/Cart/CartSummary.js":
/*!****************************************!*\
  !*** ./components/Cart/CartSummary.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-checkout */ "react-stripe-checkout");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateCartTotal */ "./utils/calculateCartTotal.js");
var _jsxFileName = "C:\\Users\\David\\Desktop\\again\\components\\Cart\\CartSummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CartSummary = ({
  products,
  handleCheckout,
  success
}) => {
  const [cartAmout, setCartAmaount] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [stripeAmount, setStripeAmount] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [isCartEmpty, setCartEmpty] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const {
      cartTotal,
      stripeTotal
    } = Object(_utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_3__["default"])(products);
    setCartAmaount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    clearing: true,
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Sub total:"), " $", cartAmout, __jsx(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    name: "GroundedHLC",
    amount: stripeAmount,
    image: products.length > 0 ? products[0].product.mediaUrl : '',
    currency: "USD",
    shippingAddress: true,
    billingAddress: true,
    zipCode: true,
    stripeKey: "pk_test_kvLYA12KHorL24g3aTjLu4oc00SFcodPaA",
    token: handleCheckout,
    triggerEvent: "onClick",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    icon: "cart",
    color: "green",
    floated: "right",
    content: "Checkout",
    disabled: isCartEmpty || success,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartSummary);

/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Cart_CartItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Cart/CartItemList */ "./components/Cart/CartItemList.js");
/* harmony import */ var _components_Cart_CartSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Cart/CartSummary */ "./components/Cart/CartSummary.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/catchErrors */ "./utils/catchErrors.js");
var _jsxFileName = "C:\\Users\\David\\Desktop\\again\\pages\\cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Cart = ({
  products,
  user
}) => {
  // console.log(products)
  const [cartProducts, setCartProducts] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(products);
  const [success, setSuccess] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleRemoveFromCart = async productId => {
    const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__["default"]}/api/cart`;
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("token");
    const payload = {
      params: {
        productId
      },
      headers: {
        Authorization: token
      }
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(url, payload);
    setCartProducts(response.data);
  };

  const handleCheckout = async paymentData => {
    try {
      setLoading(true);
      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__["default"]}/api/checkout`;
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("token");
      const payload = {
        paymentData
      };
      const headers = {
        headers: {
          Authorization: token
        }
      };
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_8__["default"])(error, window.alert);
    } finally {
      setLoading(false);
    }
  };

  return __jsx("div", {
    className: "cart-area",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_components_Cart_CartItemList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleRemoveFromCart: handleRemoveFromCart,
    user: user,
    products: cartProducts,
    success: success,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx(_components_Cart_CartSummary__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleCheckout: handleCheckout,
    products: cartProducts,
    success: success,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })));
};

Cart.getInitialProps = async ctx => {
  const {
    token
  } = Object(nookies__WEBPACK_IMPORTED_MODULE_1__["parseCookies"])(ctx);

  if (!token) {
    return {
      products: []
    };
  }

  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__["default"]}/api/cart`;
  const payload = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, payload);
  return {
    products: response.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = false ? undefined : 'http://localhost:3000';
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/calculateCartTotal.js":
/*!*************************************!*\
  !*** ./utils/calculateCartTotal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calculateCartTotal = products => {
  const total = products.reduce((acc, el) => {
    acc += el.product.price * el.quantity;
    return acc;
  }, 0);
  const cartTotal = (total * 100 / 100).toFixed(2);
  const stripeTotal = Number((total * 100).toFixed(2));
  return {
    cartTotal,
    stripeTotal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (calculateCartTotal);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = (error, displayError) => {
  let errorMsg;

  if (error.response) {
    errorMsg = error.response.data;
    console.error("Error response", errorMsg); // for image upload

    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // Request made but no response recieved
    errorMsg = error.request;
    console.error("Error request", errorMsg);
  } else {
    console.error("Error message", errorMsg);
  }

  displayError(errorMsg);
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ 13:
/*!*****************************!*\
  !*** multi ./pages/cart.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\David\Desktop\again\pages\cart.js */"./pages/cart.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-stripe-checkout":
/*!****************************************!*\
  !*** external "react-stripe-checkout" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L0NhcnRJdGVtTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NhbGN1bGF0ZUNhcnRUb3RhbC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jYXRjaEVycm9ycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RyaXBlLWNoZWNrb3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJDYXJ0SXRlbUxpc3QiLCJwcm9kdWN0cyIsInVzZXIiLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsInN1Y2Nlc3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYXBDYXJ0UHJvZHVjdHNUb0l0ZW1zIiwibWFwIiwicCIsImNoaWxkS2V5IiwicHJvZHVjdCIsIl9pZCIsImhlYWRlciIsInB1c2giLCJuYW1lIiwiaW1hZ2UiLCJtZWRpYVVybCIsIm1ldGEiLCJxdWFudGl0eSIsInByaWNlIiwiZmx1aWQiLCJleHRyYSIsImxlbmd0aCIsIkNhcnRTdW1tYXJ5IiwiaGFuZGxlQ2hlY2tvdXQiLCJjYXJ0QW1vdXQiLCJzZXRDYXJ0QW1hb3VudCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHJpcGVBbW91bnQiLCJzZXRTdHJpcGVBbW91bnQiLCJpc0NhcnRFbXB0eSIsInNldENhcnRFbXB0eSIsInVzZUVmZmVjdCIsImNhcnRUb3RhbCIsInN0cmlwZVRvdGFsIiwiY2FsY3VsYXRlQ2FydFRvdGFsIiwiQ2FydCIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsInNldFN1Y2Nlc3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInByb2R1Y3RJZCIsInVybCIsImJhc2VVcmwiLCJ0b2tlbiIsImNvb2tpZSIsImdldCIsInBheWxvYWQiLCJwYXJhbXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiYXhpb3MiLCJkZWxldGUiLCJkYXRhIiwicGF5bWVudERhdGEiLCJwb3N0IiwiZXJyb3IiLCJjYXRjaEVycm9ycyIsIndpbmRvdyIsImFsZXJ0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicGFyc2VDb29raWVzIiwidG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJlbCIsInRvRml4ZWQiLCJOdW1iZXIiLCJkaXNwbGF5RXJyb3IiLCJlcnJvck1zZyIsImNvbnNvbGUiLCJtZXNzYWdlIiwicmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDLE1BQVo7QUFBa0JDLHNCQUFsQjtBQUF3Q0M7QUFBeEMsQ0FBRCxLQUF1RDtBQUN4RTtBQUNBO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxzQkFBc0IsR0FBSU4sUUFBRCxJQUFjO0FBQ3pDLFdBQU9BLFFBQVEsQ0FBQ08sR0FBVCxDQUFhQyxDQUFDLEtBQUs7QUFDdEJDLGNBQVEsRUFBRUQsQ0FBQyxDQUFDRSxPQUFGLENBQVVDLEdBREU7QUFFdEJDLFlBQU0sRUFDRixNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLFVBQUUsRUFBQyxHQUFoQjtBQUFvQixlQUFPLEVBQUUsTUFBTVIsTUFBTSxDQUFDUyxJQUFQLENBQWEsZ0JBQWVMLENBQUMsQ0FBQ0UsT0FBRixDQUFVQyxHQUFJLEVBQTFDLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS0gsQ0FBQyxDQUFDRSxPQUFGLENBQVVJLElBRGYsQ0FIa0I7QUFPdEJDLFdBQUssRUFBRVAsQ0FBQyxDQUFDRSxPQUFGLENBQVVNLFFBUEs7QUFRdEJDLFVBQUksRUFBRyxHQUFFVCxDQUFDLENBQUNVLFFBQVMsT0FBTVYsQ0FBQyxDQUFDRSxPQUFGLENBQVVTLEtBQU0sRUFScEI7QUFTdEJDLFdBQUssRUFBRSxJQVRlO0FBVXRCQyxXQUFLLEVBQ0QsTUFBQyx3REFBRDtBQUNJLGFBQUssTUFEVDtBQUVJLFlBQUksRUFBQyxRQUZUO0FBR0ksZUFBTyxFQUFDLE9BSFo7QUFJSSxlQUFPLEVBQUUsTUFBTW5CLG9CQUFvQixDQUFDTSxDQUFDLENBQUNFLE9BQUYsQ0FBVUMsR0FBWCxDQUp2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWGtCLEtBQUwsQ0FBZCxDQUFQO0FBbUJILEdBcEJEOztBQXNCQSxNQUFHUixPQUFILEVBQVc7QUFDUCxXQUNJLE1BQUMseURBQUQ7QUFDSSxhQUFPLE1BRFg7QUFFSSxZQUFNLEVBQUMsU0FGWDtBQUdJLGFBQU8sRUFBQywyQ0FIWjtBQUlJLFVBQUksRUFBQyxjQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESjtBQVFIOztBQUVELE1BQUdILFFBQVEsQ0FBQ3NCLE1BQVQsS0FBb0IsQ0FBdkIsRUFBeUI7QUFDckIsV0FDSSxNQUFDLHlEQUFEO0FBQ0ksZUFBUyxNQURiO0FBRUksV0FBSyxFQUFDLE9BRlY7QUFHSSxjQUFRLE1BSFo7QUFJSSxlQUFTLEVBQUMsUUFKZDtBQUtJLGlCQUFXLE1BTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9JLE1BQUMsd0RBQUQ7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxzREFBRDtBQUFNLFVBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosd0NBUEosRUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tyQixJQUFJLEdBQ0QsTUFBQyx3REFBRDtBQUNJLFdBQUssRUFBQyxRQURWO0FBRUksYUFBTyxFQUFFLE1BQU1HLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLFdBQVosQ0FGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQyxHQVFELE1BQUMsd0RBQUQ7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVRSLENBWEosQ0FESjtBQTRCSDs7QUFFRCxTQUFPLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksV0FBTyxNQUFuQjtBQUFvQixTQUFLLEVBQUVQLHNCQUFzQixDQUFDTixRQUFELENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUVILENBdkVEOztBQXlFZUQsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNd0IsV0FBVyxHQUFHLENBQUM7QUFBRXZCLFVBQUY7QUFBWXdCLGdCQUFaO0FBQTRCckI7QUFBNUIsQ0FBRCxLQUEyQztBQUM3RCxRQUFNLENBQUNzQixTQUFELEVBQVlDLGNBQVosSUFBOEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQXBDO0FBQ0EsUUFBTSxDQUFDQyxZQUFELEVBQWVDLGVBQWYsSUFBa0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQXhDO0FBQ0EsUUFBTSxDQUFDRyxXQUFELEVBQWNDLFlBQWQsSUFBOEJMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQXBDO0FBRUFELDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQixVQUFNO0FBQUVDLGVBQUY7QUFBYUM7QUFBYixRQUE2QkMseUVBQWtCLENBQUNwQyxRQUFELENBQXJEO0FBQ0EwQixrQkFBYyxDQUFDUSxTQUFELENBQWQ7QUFDQUosbUJBQWUsQ0FBQ0ssV0FBRCxDQUFmO0FBQ0FILGdCQUFZLENBQUNoQyxRQUFRLENBQUNzQixNQUFULEtBQW9CLENBQXJCLENBQVo7QUFDRCxHQUxELEVBS0csQ0FBQ3RCLFFBQUQsQ0FMSDtBQU9BLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5REFBRDtBQUFTLFlBQVEsTUFBakI7QUFBa0IsUUFBSSxFQUFDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLFFBQ2dDeUIsU0FEaEMsRUFFRSxNQUFDLDREQUFEO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxVQUFNLEVBQUVJLFlBRlY7QUFHRSxTQUFLLEVBQUU3QixRQUFRLENBQUNzQixNQUFULEdBQWtCLENBQWxCLEdBQXNCdEIsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZVSxPQUFaLENBQW9CTSxRQUExQyxHQUFxRCxFQUg5RDtBQUlFLFlBQVEsRUFBQyxLQUpYO0FBS0UsbUJBQWUsRUFBRSxJQUxuQjtBQU1FLGtCQUFjLEVBQUUsSUFObEI7QUFPRSxXQUFPLEVBQUUsSUFQWDtBQVFFLGFBQVMsRUFBQyw0Q0FSWjtBQVNFLFNBQUssRUFBRVEsY0FUVDtBQVVFLGdCQUFZLEVBQUMsU0FWZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUUsTUFBQyx3REFBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsU0FBSyxFQUFDLE9BRlI7QUFHRSxXQUFPLEVBQUMsT0FIVjtBQUlFLFdBQU8sRUFBQyxVQUpWO0FBS0UsWUFBUSxFQUFFTyxXQUFXLElBQUk1QixPQUwzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FGRixDQUZGLENBREY7QUE0QkQsQ0F4Q0Q7O0FBMENlb0IsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1jLElBQUksR0FBRyxDQUFDO0FBQUVyQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUF3QjtBQUNqQztBQUNBLFFBQU0sQ0FBQ3FDLFlBQUQsRUFBZUMsZUFBZixJQUFrQ1osNENBQUssQ0FBQ0MsUUFBTixDQUFlNUIsUUFBZixDQUF4QztBQUNBLFFBQU0sQ0FBQ0csT0FBRCxFQUFVcUMsVUFBVixJQUF3QmIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBOUI7QUFDQSxRQUFNLENBQUNhLE9BQUQsRUFBVUMsVUFBVixJQUF3QmYsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBOUI7O0FBRUEsUUFBTTFCLG9CQUFvQixHQUFHLE1BQU95QyxTQUFQLElBQXFCO0FBQzlDLFVBQU1DLEdBQUcsR0FBSSxHQUFFQyxzREFBUSxXQUF2QjtBQUNBLFVBQU1DLEtBQUssR0FBR0MsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsQ0FBZDtBQUNBLFVBQU1DLE9BQU8sR0FBRztBQUNaQyxZQUFNLEVBQUU7QUFBQ1A7QUFBRCxPQURJO0FBRVpRLGFBQU8sRUFBRTtBQUFDQyxxQkFBYSxFQUFFTjtBQUFoQjtBQUZHLEtBQWhCO0FBSUEsVUFBTU8sUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLE1BQU4sQ0FBYVgsR0FBYixFQUFrQkssT0FBbEIsQ0FBdkI7QUFDQVYsbUJBQWUsQ0FBQ2MsUUFBUSxDQUFDRyxJQUFWLENBQWY7QUFDSCxHQVREOztBQVdBLFFBQU1oQyxjQUFjLEdBQUcsTUFBT2lDLFdBQVAsSUFBdUI7QUFDMUMsUUFBSTtBQUNBZixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFlBQU1FLEdBQUcsR0FBSSxHQUFFQyxzREFBUSxlQUF2QjtBQUNBLFlBQU1DLEtBQUssR0FBR0MsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsQ0FBZDtBQUNBLFlBQU1DLE9BQU8sR0FBRztBQUFFUTtBQUFGLE9BQWhCO0FBQ0EsWUFBTU4sT0FBTyxHQUFHO0FBQUNBLGVBQU8sRUFBRTtBQUFDQyx1QkFBYSxFQUFFTjtBQUFoQjtBQUFWLE9BQWhCO0FBQ0EsWUFBTVEsNENBQUssQ0FBQ0ksSUFBTixDQUFXZCxHQUFYLEVBQWdCSyxPQUFoQixFQUF5QkUsT0FBekIsQ0FBTjtBQUNBWCxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNILEtBUkQsQ0FRRSxPQUFPbUIsS0FBUCxFQUFjO0FBQ1pDLHdFQUFXLENBQUNELEtBQUQsRUFBUUUsTUFBTSxDQUFDQyxLQUFmLENBQVg7QUFDSCxLQVZELFNBVVU7QUFDTnBCLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0g7QUFDSixHQWREOztBQWdCQSxTQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBUyxXQUFPLEVBQUVELE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQ0ksd0JBQW9CLEVBQUV2QyxvQkFEMUI7QUFFSSxRQUFJLEVBQUVELElBRlY7QUFHSSxZQUFRLEVBQUVxQyxZQUhkO0FBSUksV0FBTyxFQUFFbkMsT0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFPSSxNQUFDLG9FQUFEO0FBQ0ksa0JBQWMsRUFBRXFCLGNBRHBCO0FBRUksWUFBUSxFQUFFYyxZQUZkO0FBR0ksV0FBTyxFQUFFbkMsT0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FESixDQURKO0FBaUJILENBbEREOztBQW9EQWtDLElBQUksQ0FBQzBCLGVBQUwsR0FBdUIsTUFBTUMsR0FBTixJQUFhO0FBQ2hDLFFBQU07QUFBRWxCO0FBQUYsTUFBWW1CLDREQUFZLENBQUNELEdBQUQsQ0FBOUI7O0FBQ0EsTUFBSSxDQUFDbEIsS0FBTCxFQUFXO0FBQ1AsV0FBTztBQUFFOUMsY0FBUSxFQUFFO0FBQVosS0FBUDtBQUNIOztBQUNELFFBQU00QyxHQUFHLEdBQUksR0FBRUMsc0RBQVEsV0FBdkI7QUFDQSxRQUFNSSxPQUFPLEdBQUc7QUFBRUUsV0FBTyxFQUFFO0FBQUNDLG1CQUFhLEVBQUVOO0FBQWhCO0FBQVgsR0FBaEI7QUFDQSxRQUFNTyxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQ04sR0FBTixDQUFVSixHQUFWLEVBQWVLLE9BQWYsQ0FBdkI7QUFDQSxTQUFPO0FBQUVqRCxZQUFRLEVBQUVxRCxRQUFRLENBQUNHO0FBQXJCLEdBQVA7QUFDSCxDQVREOztBQVdlbkIsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUEsTUFBTVEsT0FBTyxHQUNYLFFBQ0ksU0FESixHQUVJLHVCQUhOO0FBS2VBLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUEsTUFBTVQsa0JBQWtCLEdBQUlwQyxRQUFELElBQWM7QUFDckMsUUFBTWtFLEtBQUssR0FBR2xFLFFBQVEsQ0FBQ21FLE1BQVQsQ0FBZ0IsQ0FBQ0MsR0FBRCxFQUFNQyxFQUFOLEtBQWE7QUFDdkNELE9BQUcsSUFBSUMsRUFBRSxDQUFDM0QsT0FBSCxDQUFXUyxLQUFYLEdBQW1Ca0QsRUFBRSxDQUFDbkQsUUFBN0I7QUFDQSxXQUFPa0QsR0FBUDtBQUNILEdBSGEsRUFHWCxDQUhXLENBQWQ7QUFLQSxRQUFNbEMsU0FBUyxHQUFHLENBQUVnQyxLQUFLLEdBQUcsR0FBVCxHQUFnQixHQUFqQixFQUFzQkksT0FBdEIsQ0FBOEIsQ0FBOUIsQ0FBbEI7QUFDQSxRQUFNbkMsV0FBVyxHQUFHb0MsTUFBTSxDQUFDLENBQUNMLEtBQUssR0FBRyxHQUFULEVBQWNJLE9BQWQsQ0FBc0IsQ0FBdEIsQ0FBRCxDQUExQjtBQUVBLFNBQU87QUFBRXBDLGFBQUY7QUFBYUM7QUFBYixHQUFQO0FBQ0gsQ0FWRDs7QUFZZUMsaUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQSxNQUFNd0IsV0FBVyxHQUFHLENBQUNELEtBQUQsRUFBUWEsWUFBUixLQUF5QjtBQUN6QyxNQUFJQyxRQUFKOztBQUNBLE1BQUlkLEtBQUssQ0FBQ04sUUFBVixFQUFvQjtBQUNoQm9CLFlBQVEsR0FBR2QsS0FBSyxDQUFDTixRQUFOLENBQWVHLElBQTFCO0FBQ0FrQixXQUFPLENBQUNmLEtBQVIsQ0FBYyxnQkFBZCxFQUFnQ2MsUUFBaEMsRUFGZ0IsQ0FJaEI7O0FBQ0EsUUFBR2QsS0FBSyxDQUFDTixRQUFOLENBQWVHLElBQWYsQ0FBb0JHLEtBQXZCLEVBQTZCO0FBQ3pCYyxjQUFRLEdBQUdkLEtBQUssQ0FBQ04sUUFBTixDQUFlRyxJQUFmLENBQW9CRyxLQUFwQixDQUEwQmdCLE9BQXJDO0FBQ0g7QUFDSixHQVJELE1BUU8sSUFBSWhCLEtBQUssQ0FBQ2lCLE9BQVYsRUFBbUI7QUFDdEI7QUFDQUgsWUFBUSxHQUFHZCxLQUFLLENBQUNpQixPQUFqQjtBQUNBRixXQUFPLENBQUNmLEtBQVIsQ0FBYyxlQUFkLEVBQStCYyxRQUEvQjtBQUNILEdBSk0sTUFJQztBQUNKQyxXQUFPLENBQUNmLEtBQVIsQ0FBYyxlQUFkLEVBQStCYyxRQUEvQjtBQUNIOztBQUVERCxjQUFZLENBQUNDLFFBQUQsQ0FBWjtBQUNILENBbkJEOztBQXFCZWIsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuIiwiaW1wb3J0IHsgSGVhZGVyLCBTZWdtZW50LCBCdXR0b24sIEljb24sIEl0ZW0sIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IENhcnRJdGVtTGlzdCA9ICh7IHByb2R1Y3RzLCB1c2VyLCBoYW5kbGVSZW1vdmVGcm9tQ2FydCwgc3VjY2VzcyB9KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpXG4gICAgLy8gY29uc3QgdXNlciA9IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgbWFwQ2FydFByb2R1Y3RzVG9JdGVtcyA9IChwcm9kdWN0cykgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdHMubWFwKHAgPT4gKHtcbiAgICAgICAgICAgIGNoaWxkS2V5OiBwLnByb2R1Y3QuX2lkLFxuICAgICAgICAgICAgaGVhZGVyOiAoXG4gICAgICAgICAgICAgICAgPEl0ZW0uSGVhZGVyIGFzPVwiYVwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdD9faWQ9JHtwLnByb2R1Y3QuX2lkfWApfT5cbiAgICAgICAgICAgICAgICAgICAge3AucHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvSXRlbS5IZWFkZXI+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaW1hZ2U6IHAucHJvZHVjdC5tZWRpYVVybCxcbiAgICAgICAgICAgIG1ldGE6IGAke3AucXVhbnRpdHl9IHggJCR7cC5wcm9kdWN0LnByaWNlfWAsXG4gICAgICAgICAgICBmbHVpZDogdHJ1ZSxcbiAgICAgICAgICAgIGV4dHJhOiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZyb21DYXJ0KHAucHJvZHVjdC5faWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGlmKHN1Y2Nlc3Mpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TWVzc2FnZSBcbiAgICAgICAgICAgICAgICBzdWNjZXNzXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgY29udGVudD1cIllvdXIgb3JkZXIgYW5kIHBheW1lbnQgaGFzIGJlZW4gYWNjZXB0ZWQhXCJcbiAgICAgICAgICAgICAgICBpY29uPVwic3RhciBvdXRsaW5lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZihwcm9kdWN0cy5sZW5ndGggPT09IDApe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlZ21lbnRcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGljb25zPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2hvcHBpbmcgYmFza2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgTm8gcHJvZHVjdHMgaW4geW91ciBjYXJ0LiBBZGQgc29tZSFcbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInZpb2xldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9kdWN0cycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgUHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImJsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiB0byBhZGQgcHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiA8SXRlbS5Hcm91cCBkaXZpZGVkIGl0ZW1zPXttYXBDYXJ0UHJvZHVjdHNUb0l0ZW1zKHByb2R1Y3RzKX0gLz5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0SXRlbUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0cmlwZUNoZWNrb3V0IGZyb20gJ3JlYWN0LXN0cmlwZS1jaGVja291dCc7XG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnQsIERpdmlkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgY2FsY3VsYXRlQ2FydFRvdGFsIGZyb20gJy4uLy4uL3V0aWxzL2NhbGN1bGF0ZUNhcnRUb3RhbCc7XG5cbmNvbnN0IENhcnRTdW1tYXJ5ID0gKHsgcHJvZHVjdHMsIGhhbmRsZUNoZWNrb3V0LCBzdWNjZXNzIH0pID0+IHtcbiAgY29uc3QgW2NhcnRBbW91dCwgc2V0Q2FydEFtYW91bnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdHJpcGVBbW91bnQsIHNldFN0cmlwZUFtb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzQ2FydEVtcHR5LCBzZXRDYXJ0RW1wdHldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjYXJ0VG90YWwsIHN0cmlwZVRvdGFsIH0gPSBjYWxjdWxhdGVDYXJ0VG90YWwocHJvZHVjdHMpO1xuICAgIHNldENhcnRBbWFvdW50KGNhcnRUb3RhbCk7XG4gICAgc2V0U3RyaXBlQW1vdW50KHN0cmlwZVRvdGFsKTtcbiAgICBzZXRDYXJ0RW1wdHkocHJvZHVjdHMubGVuZ3RoID09PSAwKTtcbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPFNlZ21lbnQgY2xlYXJpbmcgc2l6ZT0nbGFyZ2UnPlxuICAgICAgICA8c3Ryb25nPlN1YiB0b3RhbDo8L3N0cm9uZz4gJHtjYXJ0QW1vdXR9XG4gICAgICAgIDxTdHJpcGVDaGVja291dFxuICAgICAgICAgIG5hbWU9J0dyb3VuZGVkSExDJ1xuICAgICAgICAgIGFtb3VudD17c3RyaXBlQW1vdW50fVxuICAgICAgICAgIGltYWdlPXtwcm9kdWN0cy5sZW5ndGggPiAwID8gcHJvZHVjdHNbMF0ucHJvZHVjdC5tZWRpYVVybCA6ICcnfVxuICAgICAgICAgIGN1cnJlbmN5PSdVU0QnXG4gICAgICAgICAgc2hpcHBpbmdBZGRyZXNzPXt0cnVlfVxuICAgICAgICAgIGJpbGxpbmdBZGRyZXNzPXt0cnVlfVxuICAgICAgICAgIHppcENvZGU9e3RydWV9XG4gICAgICAgICAgc3RyaXBlS2V5PSdwa190ZXN0X2t2TFlBMTJLSG9yTDI0ZzNhVGpMdTRvYzAwU0Zjb2RQYUEnXG4gICAgICAgICAgdG9rZW49e2hhbmRsZUNoZWNrb3V0fVxuICAgICAgICAgIHRyaWdnZXJFdmVudD0nb25DbGljaydcbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGljb249J2NhcnQnXG4gICAgICAgICAgICBjb2xvcj0nZ3JlZW4nXG4gICAgICAgICAgICBmbG9hdGVkPSdyaWdodCdcbiAgICAgICAgICAgIGNvbnRlbnQ9J0NoZWNrb3V0J1xuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQ2FydEVtcHR5IHx8IHN1Y2Nlc3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHJpcGVDaGVja291dD5cbiAgICAgIDwvU2VnbWVudD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFN1bW1hcnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBDYXJ0SXRlbUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydC9DYXJ0SXRlbUxpc3RcIlxuaW1wb3J0IENhcnRTdW1tYXJ5IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnQvQ2FydFN1bW1hcnlcIlxuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vdXRpbHMvYmFzZVVybCc7XG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSAnLi4vdXRpbHMvY2F0Y2hFcnJvcnMnO1xuXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHVzZXIgfSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxuICAgIGNvbnN0IFtjYXJ0UHJvZHVjdHMsIHNldENhcnRQcm9kdWN0c10gPSBSZWFjdC51c2VTdGF0ZShwcm9kdWN0cyk7XG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZUZyb21DYXJ0ID0gYXN5bmMgKHByb2R1Y3RJZCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvY2FydGA7XG4gICAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgcGFyYW1zOiB7cHJvZHVjdElkfSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiB0b2tlbn1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUodXJsLCBwYXlsb2FkKTtcbiAgICAgICAgc2V0Q2FydFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoZWNrb3V0ID0gYXN5bmMgKHBheW1lbnREYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL2NoZWNrb3V0YDtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHsgcGF5bWVudERhdGEgfTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7aGVhZGVyczoge0F1dGhvcml6YXRpb246IHRva2VufX07XG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KHVybCwgcGF5bG9hZCwgaGVhZGVycyk7XG4gICAgICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2F0Y2hFcnJvcnMoZXJyb3IsIHdpbmRvdy5hbGVydCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1hcmVhXCI+XG4gICAgICAgICAgICA8U2VnbWVudCBsb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICA8Q2FydEl0ZW1MaXN0IFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZW1vdmVGcm9tQ2FydD17aGFuZGxlUmVtb3ZlRnJvbUNhcnR9XG4gICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9IFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cz17Y2FydFByb2R1Y3RzfSBcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz17c3VjY2Vzc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxDYXJ0U3VtbWFyeSBcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hlY2tvdXQ9e2hhbmRsZUNoZWNrb3V0fVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cz17Y2FydFByb2R1Y3RzfSBcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz17c3VjY2Vzc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5DYXJ0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG4gICAgaWYgKCF0b2tlbil7XG4gICAgICAgIHJldHVybiB7IHByb2R1Y3RzOiBbXSB9O1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvY2FydGA7XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246IHRva2VufSB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwgcGF5bG9hZCk7XG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IHJlc3BvbnNlLmRhdGEgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDsiLCJjb25zdCBiYXNlVXJsID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gJ2h0dHBzOi8vYWdhaW4udmVyY2VsLmFwcCdcbiAgICA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xuIiwiY29uc3QgY2FsY3VsYXRlQ2FydFRvdGFsID0gKHByb2R1Y3RzKSA9PiB7XG4gICAgY29uc3QgdG90YWwgPSBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgZWwpID0+IHtcbiAgICAgICAgYWNjICs9IGVsLnByb2R1Y3QucHJpY2UgKiBlbC5xdWFudGl0eTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcblxuICAgIGNvbnN0IGNhcnRUb3RhbCA9ICgodG90YWwgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgIGNvbnN0IHN0cmlwZVRvdGFsID0gTnVtYmVyKCh0b3RhbCAqIDEwMCkudG9GaXhlZCgyKSk7XG5cbiAgICByZXR1cm4geyBjYXJ0VG90YWwsIHN0cmlwZVRvdGFsIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZUNhcnRUb3RhbDsiLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvciwgZGlzcGxheUVycm9yKSA9PiB7XG4gICAgbGV0IGVycm9yTXNnO1xuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXNwb25zZVwiLCBlcnJvck1zZyk7XG5cbiAgICAgICAgLy8gZm9yIGltYWdlIHVwbG9hZFxuICAgICAgICBpZihlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKXtcbiAgICAgICAgICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvci5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgIC8vIFJlcXVlc3QgbWFkZSBidXQgbm8gcmVzcG9uc2UgcmVjaWV2ZWRcbiAgICAgICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdFwiLCBlcnJvck1zZyk7XG4gICAgfSBlbHNlICB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtZXNzYWdlXCIsIGVycm9yTXNnKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5RXJyb3IoZXJyb3JNc2cpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9yczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdHJpcGUtY2hlY2tvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==