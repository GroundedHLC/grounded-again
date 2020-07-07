module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		9: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sUSu");


/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

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

/***/ "qJ3r":
/***/ (function(module, exports) {

module.exports = require("react-apexcharts");

/***/ }),

/***/ "sUSu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/_App/AdminSidebar.js
var AdminSidebar = __webpack_require__("Te8g");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/Dashboard/Charts/MonthlyRevenue.js
var __jsx = external_react_default.a.createElement;


const Chart = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "qJ3r", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("qJ3r")],
    modules: ['react-apexcharts']
  }
});

class MonthlyRevenue_MonthlyRevenue extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 75, 80]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 110, 96]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 45, 60]
      }],
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent']
        },
        colors: ['#6a4ffc', '#2962ff', '#a64edd'],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
            style: {
              colors: '#686c71',
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          offsetY: 6
        },
        grid: {
          show: true,
          borderColor: '#f6f6f7'
        },
        yaxis: {
          labels: {
            style: {
              color: '#686c71',
              fontSize: '12px'
            }
          },
          axisBorder: {
            show: false,
            color: '#f6f6f7'
          }
        }
      }
    };
  }

  render() {
    return __jsx("div", {
      className: "chart-box"
    }, __jsx("div", {
      className: "header"
    }, __jsx("h3", null, "Monthly Revenue")), __jsx(Chart, {
      options: this.state.options,
      series: this.state.series,
      type: "bar",
      height: 450
    }));
  }

}

/* harmony default export */ var Charts_MonthlyRevenue = (MonthlyRevenue_MonthlyRevenue);
// CONCATENATED MODULE: ./components/Dashboard/Charts/ProductTrendsByMonth.js
var ProductTrendsByMonth_jsx = external_react_default.a.createElement;


const ProductTrendsByMonth_Chart = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "qJ3r", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("qJ3r")],
    modules: ['react-apexcharts']
  }
});

class ProductTrendsByMonth_ProductTrendsByMonth extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 100, 150, 180]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      }
    };
  }

  render() {
    return ProductTrendsByMonth_jsx("div", {
      className: "chart-box"
    }, ProductTrendsByMonth_jsx("div", {
      className: "header"
    }, ProductTrendsByMonth_jsx("h3", null, "Product Trends By Month")), ProductTrendsByMonth_jsx(ProductTrendsByMonth_Chart, {
      options: this.state.options,
      series: this.state.series,
      type: "line",
      height: 450
    }));
  }

}

/* harmony default export */ var Charts_ProductTrendsByMonth = (ProductTrendsByMonth_ProductTrendsByMonth);
// CONCATENATED MODULE: ./pages/admin/dashboard.js

var dashboard_jsx = external_react_default.a.createElement;




const Dashboard = ({
  user
}) => {
  // console.log(user)
  return dashboard_jsx(AdminSidebar["a" /* default */], {
    user: user
  }, dashboard_jsx("div", {
    className: "create-new-products-area"
  }, dashboard_jsx(Charts_MonthlyRevenue, null), dashboard_jsx(Charts_ProductTrendsByMonth, null)));
};

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ })

/******/ });