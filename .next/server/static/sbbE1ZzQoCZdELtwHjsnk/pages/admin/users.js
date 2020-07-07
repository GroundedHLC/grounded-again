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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("MSll");


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

/***/ "MSll":
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

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__("GUDI");

// CONCATENATED MODULE: ./components/Users/AllUsers.js
var __jsx = external_react_default.a.createElement;






const AllUsers = ({
  user
}) => {
  const [admin, setAdmin] = external_react_default.a.useState(user.role === 'admin');
  const isFirstRun = Object(external_react_["useRef"])(true);
  Object(external_react_["useEffect"])(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    updatePermission();
  }, [admin]);

  const updatePermission = async () => {
    const url = `${baseUrl["a" /* default */]}/api/account`;
    const payload = {
      _id: user._id,
      role: admin ? "admin" : "user"
    };
    await external_axios_default.a.put(url, payload);
  };

  const handleChangePermission = () => {
    setAdmin(prevState => !prevState);
  };

  return __jsx(external_semantic_ui_react_["Table"].Row, null, __jsx(external_semantic_ui_react_["Table"].Cell, {
    collapsing: true
  }, __jsx(external_semantic_ui_react_["Checkbox"], {
    checked: admin,
    toggle: true,
    onChange: handleChangePermission
  })), __jsx(external_semantic_ui_react_["Table"].Cell, null, user.name), __jsx(external_semantic_ui_react_["Table"].Cell, null, user.email), __jsx(external_semantic_ui_react_["Table"].Cell, null, Object(formatDate["a" /* default */])(user.createdAt)), __jsx(external_semantic_ui_react_["Table"].Cell, null, Object(formatDate["a" /* default */])(user.updatedAt)), __jsx(external_semantic_ui_react_["Table"].Cell, null, admin ? "Admin" : "User"));
};

/* harmony default export */ var Users_AllUsers = (AllUsers);
// CONCATENATED MODULE: ./components/Users/UsersWithPermissions.js
var UsersWithPermissions_jsx = external_react_default.a.createElement;







const UsersWithPermissions = () => {
  const [users, setUsers] = external_react_default.a.useState([]);
  external_react_default.a.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const url = `${baseUrl["a" /* default */]}/api/users`;
    const token = external_js_cookie_default.a.get('token');
    const payload = {
      headers: {
        Authorization: token
      }
    };
    const response = await external_axios_default.a.get(url, payload);
    setUsers(response.data);
  };

  return UsersWithPermissions_jsx(external_react_default.a.Fragment, null, UsersWithPermissions_jsx(external_semantic_ui_react_["Header"], {
    as: "h2"
  }, UsersWithPermissions_jsx(external_semantic_ui_react_["Icon"], {
    name: "settings"
  }), "Users With Permissions"), UsersWithPermissions_jsx(external_semantic_ui_react_["Table"], {
    compact: true,
    celled: true
  }, UsersWithPermissions_jsx(external_semantic_ui_react_["Table"].Header, null, UsersWithPermissions_jsx(external_semantic_ui_react_["Table"].Row, null, UsersWithPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Switch"), UsersWithPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Name"), UsersWithPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Email"), UsersWithPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Joined"), UsersWithPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Updated"), UsersWithPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Role"))), UsersWithPermissions_jsx(external_semantic_ui_react_["Table"].Body, null, users.map(user => UsersWithPermissions_jsx(Users_AllUsers, {
    key: user._id,
    user: user
  })))));
};

/* harmony default export */ var Users_UsersWithPermissions = (UsersWithPermissions);
// EXTERNAL MODULE: ./components/_App/AdminSidebar.js
var AdminSidebar = __webpack_require__("Te8g");

// CONCATENATED MODULE: ./pages/admin/users.js

var users_jsx = external_react_default.a.createElement;



const Users = ({
  user
}) => {
  return users_jsx(AdminSidebar["a" /* default */], {
    user: user
  }, users_jsx("div", {
    className: "create-new-products-area"
  }, users_jsx(Users_UsersWithPermissions, {
    currentUserId: user
  })));
};

/* harmony default export */ var admin_users = __webpack_exports__["default"] = (Users);

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