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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("LyKl");


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

/***/ "LyKl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./components/_App/AdminSidebar.js
var AdminSidebar = __webpack_require__("Te8g");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__("GUDI");

// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// CONCATENATED MODULE: ./components/Orders/OrderStatus.js
var __jsx = external_react_default.a.createElement;






const OrderStatus = ({
  order
}) => {
  const [delivered, setDelivered] = external_react_default.a.useState(order.status === 'delivered');
  const isFirstRun = Object(external_react_["useRef"])(true);
  Object(external_react_["useEffect"])(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    updateStatus();
  }, [delivered]);

  const updateStatus = async () => {
    const url = `${baseUrl["a" /* default */]}/api/orders`;
    const payload = {
      _id: order._id,
      status: delivered ? "delivered" : "pending"
    };
    await external_axios_default.a.put(url, payload);
  };

  const handleChangeStatus = () => {
    setDelivered(prevState => !prevState);
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx(external_semantic_ui_react_["Label"], {
    color: "blue",
    content: Object(formatDate["a" /* default */])(order.createdAt)
  }), __jsx(external_semantic_ui_react_["Popup"], {
    trigger: __jsx(external_semantic_ui_react_["Checkbox"], {
      toggle: true,
      onChange: handleChangeStatus,
      label: delivered ? "Delivered" : "Pending",
      checked: delivered,
      fitted: true
    }),
    header: "Delivery Status",
    content: delivered ? "Delivered" : "Pending",
    position: "top center",
    on: ['hover']
  }));
};

/* harmony default export */ var Orders_OrderStatus = (OrderStatus);
// CONCATENATED MODULE: ./components/Orders/AllOrders.js

var AllOrders_jsx = external_react_default.a.createElement;




const AllOrders = ({
  orders
}) => {
  // console.log(orders)
  const router = Object(router_["useRouter"])();

  const mapOrdersToPanels = orders => {
    return orders.map(order => ({
      key: order._id,
      title: {
        content: AllOrders_jsx(Orders_OrderStatus, {
          order: order
        })
      },
      content: {
        content: AllOrders_jsx(external_react_default.a.Fragment, null, AllOrders_jsx(external_semantic_ui_react_["List"].Header, {
          as: "h3"
        }, "Total: $", order.total, AllOrders_jsx(external_semantic_ui_react_["Label"], {
          content: order.email,
          icon: "mail",
          basic: true,
          horizontal: true,
          style: {
            marginLeft: '1em'
          }
        })), AllOrders_jsx(external_semantic_ui_react_["List"], null, order.products.map(p => AllOrders_jsx(external_semantic_ui_react_["List"].Item, {
          key: p.product._id
        }, AllOrders_jsx(external_semantic_ui_react_["Image"], {
          avatar: true,
          src: p.product.mediaUrl
        }), AllOrders_jsx(external_semantic_ui_react_["List"].Content, null, AllOrders_jsx(external_semantic_ui_react_["List"].Header, null, p.product.name), AllOrders_jsx(external_semantic_ui_react_["List"].Description, null, p.quantity, " x $", p.product.price)), AllOrders_jsx(external_semantic_ui_react_["List"].Content, {
          floated: "right"
        }, AllOrders_jsx(external_semantic_ui_react_["Label"], {
          tag: true,
          color: "red",
          size: "tiny"
        }, p.product.sku))))))
      }
    }));
  };

  return AllOrders_jsx(external_react_default.a.Fragment, null, AllOrders_jsx(external_semantic_ui_react_["Header"], {
    as: "h2"
  }, AllOrders_jsx(external_semantic_ui_react_["Icon"], {
    name: "folder open"
  }), "Orders"), orders.length === 0 ? AllOrders_jsx(external_semantic_ui_react_["Segment"], {
    inverted: true,
    tertiary: true,
    color: "pink",
    textAlign: "center"
  }, AllOrders_jsx(external_semantic_ui_react_["Header"], {
    icon: true
  }, AllOrders_jsx(external_semantic_ui_react_["Icon"], {
    name: "copy outline"
  }), "No Past Orders."), AllOrders_jsx(external_semantic_ui_react_["Button"], {
    onClick: () => router.push('/products'),
    color: "violet"
  }, "View Products")) : AllOrders_jsx(external_semantic_ui_react_["Accordion"], {
    fluid: true,
    styled: true,
    exclusive: false,
    panels: mapOrdersToPanels(orders)
  }));
};

/* harmony default export */ var Orders_AllOrders = (AllOrders);
// CONCATENATED MODULE: ./pages/admin/orders.js

var orders_jsx = external_react_default.a.createElement;






const Orders = ({
  user,
  orders
}) => {
  // console.log(user)
  // console.log(orders)
  return orders_jsx(AdminSidebar["a" /* default */], {
    user: user
  }, orders_jsx(external_semantic_ui_react_["Container"], {
    className: "order-history-area"
  }, orders_jsx(Orders_AllOrders, {
    orders: orders
  })));
};

Orders.getInitialProps = async () => {
  const url = `${baseUrl["a" /* default */]}/api/all-orders`;
  const response = await external_axios_default.a.get(url); // console.log(response)

  return response.data;
};

/* harmony default export */ var admin_orders = __webpack_exports__["default"] = (Orders);

/***/ }),

/***/ "SMlj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return redirectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleLogout; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const handleLogin = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('token', token);
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/profile');
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(location);
  }
};
const handleLogout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('token');
  window.localStorage.setItem('logout', Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
};

/***/ }),

/***/ "Te8g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SMlj");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AdminSidebar = ({
  children,
  user
}) => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const isRoot = user && user.role == 'root';
  const isAdmin = user && user.role == 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  const isActive = route => {
    return route == router.pathname;
  };

  const handleVisible = () => {
    setVisible(prevState => !prevState);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Sidebar"].Pushable, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Sidebar"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"],
    animation: "push",
    icon: "labeled",
    vertical: true,
    visible: visible,
    width: "thin"
  }, isRootOrAdmin && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a",
    onClick: () => router.push('/admin/dashboard'),
    active: isActive('/admin/dashboard')
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "dashboard"
  }), "Dashboard"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a",
    onClick: () => router.push('/admin/add-product'),
    active: isActive('/admin/add-product')
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "add square"
  }), "Create Product"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a",
    onClick: () => router.push('/admin/orders'),
    active: isActive('/admin/orders')
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "ordered list"
  }), "Orders"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a",
    onClick: () => router.push('/admin/customers'),
    active: isActive('/admin/customers')
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "users"
  }), "Customers"), isRoot && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a",
    onClick: () => router.push('/admin/users'),
    active: isActive('/admin/users')
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "users"
  }), "Admin/Users")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a",
    onClick: _utils_auth__WEBPACK_IMPORTED_MODULE_3__[/* handleLogout */ "b"]
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "sign-out"
  }), "Logout"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Sidebar"].Pusher, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    toggle: true,
    label: visible ? 'Hide Sidebar' : 'Show Sidebar',
    onClick: handleVisible
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    basic: true
  }, children)));
};

/* harmony default export */ __webpack_exports__["a"] = (AdminSidebar);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rjN7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseUrl = true ? 'https://shoponix.envytheme.com' : undefined;
/* harmony default export */ __webpack_exports__["a"] = (baseUrl);

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });