module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Cart.js":
/*!************************!*\
  !*** ./models/Cart.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Cart Model

const {
  ObjectId,
  Number
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const CartSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: ObjectId,
    ref: "User"
  },
  products: [{
    quantity: {
      type: Number,
      default: 1
    },
    product: {
      type: ObjectId,
      ref: "Product"
    }
  }]
}); // 

/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Cart || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Cart", CartSchema));

/***/ }),

/***/ "./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./models/Product.js");
// Order Model


const {
  ObjectId,
  String,
  Number
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const OrderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: ObjectId,
    ref: "User"
  },
  products: [{
    quantity: {
      type: Number,
      default: 1
    },
    product: {
      type: ObjectId,
      ref: _Product__WEBPACK_IMPORTED_MODULE_1__["default"]
    }
  }],
  email: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'pending',
    enum: ["pending", "delivered"]
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Order || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Order", OrderSchema));

/***/ }),

/***/ "./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Product Model

const {
  String,
  Number
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  },
  viewCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Product', ProductSchema));

/***/ }),

/***/ "./pages/api/checkout.js":
/*!*******************************!*\
  !*** ./pages/api/checkout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ "stripe");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Cart */ "./models/Cart.js");
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Order */ "./models/Order.js");
/* harmony import */ var _utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/calculateCartTotal */ "./utils/calculateCartTotal.js");






const stripe = stripe__WEBPACK_IMPORTED_MODULE_0___default()("sk_test_DRMGWbRKRbxz0X5UhEWrW6SC000lWlMv4r");
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    paymentData
  } = req.body;

  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(req.headers.authorization, "hjdfhuiklnlkbfcagdahsakjsdjdqw");
    const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
      user: userId
    }).populate({
      path: "products.product",
      model: "Product"
    });
    const {
      cartTotal,
      stripeTotal
    } = Object(_utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_5__["default"])(cart.products);
    const prevCustomer = await stripe.customers.list({
      email: paymentData.email,
      limit: 1
    });
    const isExistingCustomer = prevCustomer.data.length > 0;
    let newCustomer;

    if (!isExistingCustomer) {
      newCustomer = await stripe.customers.create({
        email: paymentData.email,
        source: paymentData.id
      });
    }

    const customer = isExistingCustomer && prevCustomer.data[0].id || newCustomer.id;
    await stripe.charges.create({
      currency: "usd",
      amount: stripeTotal,
      receipt_email: paymentData.email,
      customer,
      description: `Checkout | ${paymentData.email} | ${paymentData.id}`
    }, {
      idempotency_key: uuid_v4__WEBPACK_IMPORTED_MODULE_1___default()()
    });
    await new _models_Order__WEBPACK_IMPORTED_MODULE_4__["default"]({
      user: userId,
      email: paymentData.email,
      total: cartTotal,
      products: cart.products
    }).save();
    await _models_Cart__WEBPACK_IMPORTED_MODULE_3__["default"].findOneAndUpdate({
      _id: cart._id
    }, {
      $set: {
        products: []
      }
    });
    res.status(200).send("Checkout successful!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error proccessing charge");
  }
});

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

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/api/checkout.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\David\Desktop\again\pages\api\checkout.js */"./pages/api/checkout.js");


/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL09yZGVyLmpzIiwid2VicGFjazovLy8uL21vZGVscy9Qcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jaGVja291dC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jYWxjdWxhdGVDYXJ0VG90YWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkL3Y0XCIiXSwibmFtZXMiOlsiT2JqZWN0SWQiLCJOdW1iZXIiLCJtb25nb29zZSIsIlNjaGVtYSIsIlR5cGVzIiwiQ2FydFNjaGVtYSIsInVzZXIiLCJ0eXBlIiwicmVmIiwicHJvZHVjdHMiLCJxdWFudGl0eSIsImRlZmF1bHQiLCJwcm9kdWN0IiwibW9kZWxzIiwiQ2FydCIsIm1vZGVsIiwiU3RyaW5nIiwiT3JkZXJTY2hlbWEiLCJQcm9kdWN0IiwiZW1haWwiLCJyZXF1aXJlZCIsInRvdGFsIiwic3RhdHVzIiwiZW51bSIsInRpbWVzdGFtcHMiLCJPcmRlciIsIlByb2R1Y3RTY2hlbWEiLCJuYW1lIiwicHJpY2UiLCJwcm9kdWN0VHlwZSIsInNrdSIsInVuaXF1ZSIsImRlc2NyaXB0aW9uIiwibWVkaWFVcmwiLCJ2aWV3Q291bnQiLCJzdHJpcGUiLCJTdHJpcGUiLCJwcm9jZXNzIiwicmVxIiwicmVzIiwicGF5bWVudERhdGEiLCJib2R5IiwidXNlcklkIiwiand0IiwidmVyaWZ5IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJjYXJ0IiwiZmluZE9uZSIsInBvcHVsYXRlIiwicGF0aCIsImNhcnRUb3RhbCIsInN0cmlwZVRvdGFsIiwiY2FsY3VsYXRlQ2FydFRvdGFsIiwicHJldkN1c3RvbWVyIiwiY3VzdG9tZXJzIiwibGlzdCIsImxpbWl0IiwiaXNFeGlzdGluZ0N1c3RvbWVyIiwiZGF0YSIsImxlbmd0aCIsIm5ld0N1c3RvbWVyIiwiY3JlYXRlIiwic291cmNlIiwiaWQiLCJjdXN0b21lciIsImNoYXJnZXMiLCJjdXJyZW5jeSIsImFtb3VudCIsInJlY2VpcHRfZW1haWwiLCJpZGVtcG90ZW5jeV9rZXkiLCJ1dWlkdjQiLCJzYXZlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiLCJzZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwicmVkdWNlIiwiYWNjIiwiZWwiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBLFVBQUY7QUFBWUM7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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCIvLyBDYXJ0IE1vZGVsXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCB7IE9iamVjdElkLCBOdW1iZXIgfSA9IG1vbmdvb3NlLlNjaGVtYS5UeXBlcztcblxuY29uc3QgQ2FydFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHVzZXI6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0SWQsXG4gICAgICAgIHJlZjogXCJVc2VyXCJcbiAgICB9LFxuICAgIHByb2R1Y3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0SWQsXG4gICAgICAgICAgICAgICAgcmVmOiBcIlByb2R1Y3RcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXVxufSk7XG4vLyBcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5DYXJ0IHx8IG1vbmdvb3NlLm1vZGVsKFwiQ2FydFwiLCBDYXJ0U2NoZW1hKTsiLCIvLyBPcmRlciBNb2RlbFxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XG5cbmNvbnN0IHsgT2JqZWN0SWQsIFN0cmluZywgTnVtYmVyIH0gPSBtb25nb29zZS5TY2hlbWEuVHlwZXM7XG5cbmNvbnN0IE9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdXNlcjoge1xuICAgICAgICB0eXBlOiBPYmplY3RJZCxcbiAgICAgICAgcmVmOiBcIlVzZXJcIlxuICAgIH0sXG4gICAgcHJvZHVjdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RJZCxcbiAgICAgICAgICAgICAgICByZWY6IFByb2R1Y3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0sXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdG90YWw6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc3RhdHVzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICdwZW5kaW5nJyxcbiAgICAgICAgZW51bTogW1wicGVuZGluZ1wiLCBcImRlbGl2ZXJlZFwiXVxuICAgIH1cbn0se1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuT3JkZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJPcmRlclwiLCBPcmRlclNjaGVtYSk7IiwiLy8gUHJvZHVjdCBNb2RlbFxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgeyBTdHJpbmcsIE51bWJlciB9ID0gbW9uZ29vc2UuU2NoZW1hLlR5cGVzO1xuXG5jb25zdCBQcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwcm9kdWN0VHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBza3U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG1lZGlhVXJsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHZpZXdDb3VudDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG59LHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBQcm9kdWN0U2NoZW1hKTsiLCJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5pbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vLi4vbW9kZWxzL0NhcnQnO1xuaW1wb3J0IE9yZGVyIGZyb20gJy4uLy4uL21vZGVscy9PcmRlcic7XG5pbXBvcnQgY2FsY3VsYXRlQ2FydFRvdGFsIGZyb20gJy4uLy4uL3V0aWxzL2NhbGN1bGF0ZUNhcnRUb3RhbCc7XG5cbmNvbnN0IHN0cmlwZSA9IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgcGF5bWVudERhdGEgfSA9IHJlcS5ib2R5O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge3VzZXJJZH0gPSBqd3QudmVyaWZ5KHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xuICAgICAgICBjb25zdCBjYXJ0ID0gYXdhaXQgQ2FydC5maW5kT25lKHsgdXNlcjogdXNlcklkIH0pLnBvcHVsYXRlKHtcbiAgICAgICAgICAgIHBhdGg6IFwicHJvZHVjdHMucHJvZHVjdFwiLFxuICAgICAgICAgICAgbW9kZWw6IFwiUHJvZHVjdFwiXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB7Y2FydFRvdGFsLCBzdHJpcGVUb3RhbH0gPSBjYWxjdWxhdGVDYXJ0VG90YWwoY2FydC5wcm9kdWN0cyk7XG4gICAgICAgIGNvbnN0IHByZXZDdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMubGlzdCh7XG4gICAgICAgICAgICBlbWFpbDogcGF5bWVudERhdGEuZW1haWwsXG4gICAgICAgICAgICBsaW1pdDogMVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaXNFeGlzdGluZ0N1c3RvbWVyID0gcHJldkN1c3RvbWVyLmRhdGEubGVuZ3RoID4gMDtcbiAgICAgICAgbGV0IG5ld0N1c3RvbWVyO1xuICAgICAgICBpZighaXNFeGlzdGluZ0N1c3RvbWVyKXtcbiAgICAgICAgICAgIG5ld0N1c3RvbWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiBwYXltZW50RGF0YS5lbWFpbCxcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHBheW1lbnREYXRhLmlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXN0b21lciA9IChpc0V4aXN0aW5nQ3VzdG9tZXIgJiYgcHJldkN1c3RvbWVyLmRhdGFbMF0uaWQpIHx8IG5ld0N1c3RvbWVyLmlkO1xuICAgICAgICBhd2FpdCBzdHJpcGUuY2hhcmdlcy5jcmVhdGUoe1xuICAgICAgICAgICAgY3VycmVuY3k6IFwidXNkXCIsXG4gICAgICAgICAgICBhbW91bnQ6IHN0cmlwZVRvdGFsLFxuICAgICAgICAgICAgcmVjZWlwdF9lbWFpbDogcGF5bWVudERhdGEuZW1haWwsXG4gICAgICAgICAgICBjdXN0b21lcixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQ2hlY2tvdXQgfCAke3BheW1lbnREYXRhLmVtYWlsfSB8ICR7cGF5bWVudERhdGEuaWR9YFxuICAgICAgICB9LHtcbiAgICAgICAgICAgIGlkZW1wb3RlbmN5X2tleTogdXVpZHY0KClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgbmV3IE9yZGVyKHtcbiAgICAgICAgICAgIHVzZXI6IHVzZXJJZCxcbiAgICAgICAgICAgIGVtYWlsOiBwYXltZW50RGF0YS5lbWFpbCxcbiAgICAgICAgICAgIHRvdGFsOiBjYXJ0VG90YWwsXG4gICAgICAgICAgICBwcm9kdWN0czogY2FydC5wcm9kdWN0c1xuICAgICAgICB9KS5zYXZlKCk7XG5cbiAgICAgICAgYXdhaXQgQ2FydC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgICAgICAge19pZDogY2FydC5faWR9LFxuICAgICAgICAgICAgeyRzZXQ6IHtwcm9kdWN0czogW119fVxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoXCJDaGVja291dCBzdWNjZXNzZnVsIVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJFcnJvciBwcm9jY2Vzc2luZyBjaGFyZ2VcIik7XG4gICAgfVxufSIsImNvbnN0IGNhbGN1bGF0ZUNhcnRUb3RhbCA9IChwcm9kdWN0cykgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gcHJvZHVjdHMucmVkdWNlKChhY2MsIGVsKSA9PiB7XG4gICAgICAgIGFjYyArPSBlbC5wcm9kdWN0LnByaWNlICogZWwucXVhbnRpdHk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG5cbiAgICBjb25zdCBjYXJ0VG90YWwgPSAoKHRvdGFsICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICBjb25zdCBzdHJpcGVUb3RhbCA9IE51bWJlcigodG90YWwgKiAxMDApLnRvRml4ZWQoMikpO1xuXG4gICAgcmV0dXJuIHsgY2FydFRvdGFsLCBzdHJpcGVUb3RhbCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGVDYXJ0VG90YWw7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkL3Y0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=