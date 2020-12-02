_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Csharp%5COneDrive%5CDocuments%5CVSCode%5Creactps5%5Cps5-dash%5Cpages%5Cindex.js!./":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Csharp%5COneDrive%5CDocuments%5CVSCode%5Creactps5%5Cps5-dash%5Cpages%5Cindex.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\sharp\\OneDrive\\Documents\\VSCode\\reactps5\\ps5-dash\\pages\\index.js";
 // import styles from '../styles/Home.module.css'

function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "screen",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "media-nav",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "active",
          children: "Games"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "Media"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "settings",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "icon",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fa fa-search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "icon",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fa fa-cog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "icon",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "user",
            src: "https://randomuser.me/api/portraits/men/47.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "time",
          children: "7:09 AM"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "game-nav",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "game active",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fa fa-location-arrow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "game",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "img",
            style: {
              background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              transform: "scale(1.5)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "game",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "img",
            style: {
              background: "url('data:image/jpeg;base64,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')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "scale(1)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "game",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "img",
            style: {
              background: "url('data:image/jpeg;base64,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')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "scale(1)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "game",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "img",
            style: {
              background: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFhUWFRcXGBUXFxcXFxgYFxcXFhUVFxcYHSggGBolHRUVIjEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi0dHSUvLS0tLS0tLS8vLy8rLS0uLS4tLS0tLS0tLS0tLS0tLSsrLS0tLS0tLS0tLS0tLS0tK//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAYFBwj/xAA/EAACAQMCAwYEAwcDAgcBAAABAhEAAyEEEgUxQQYTIlFhcTKBkaEHFLEjQsHR4fDxM1JicoIXJESDssLDFf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJxEAAgICAgICAQQDAAAAAAAAAAECEQMhEjEiQQRR8BMUYYEycZH/2gAMAwEAAhEDEQA/ANEUqRBNSMlAgridBhb6U1xIow9K8cfKgKGpXxAjyqdOn99KZ15VYC4+VAVrg8Uj3+tSkUyr9pB9jkfxpyenSgBZaicVORQOtAVMzUgPnSZOtApnM1AGzVe7O6D8zcKTtVV3EjnzgAVzLtd/8Pm/b3AeZtj7MJ/WquyMfiHA7YstqLLudjEEPGdj7GiAOomujqOzCC2X3uXCFo8MSBMcpiaht8LuG07G86o15h3UYO69t8+szWlx3xBdc2x4J8Ubj4o8sxW6JZlbXDF/KfmNzbvLEfHt8qkfhQ/Li8CxdoG3EZbb5VcXTt//AD+7VSzAlYAk+G8Zx8qLx/kbZRCzqVIWMyt2Tj5UoWZyzwLv9Qlq9vQbXcERJKFR1nHiq1xHsxaFm7ctXXJs7twYCJQSwkAdDzqfs7xI3tYkqF2WrgAHunP6CujqVI0vECwIBN8iREjugJE8xg5okhbOXc7G2RdtILlyLiuSZWRsCkR4f+RoNF2W0r3blnvrm9GPhx8PhzO2P3q018E6jTMASNl6T0ytuJNcPgbzxTUjptP/AOYNKQtlKz2a0r3+4W9dJAafhEMpAK5XPM8vKq3EeCJZ0y3WZu8ZyoXG3DHPKeS+dH+ZK68kc/zBHyZyp+xNW+3zk3bdv91ULfNiQf8A4ipqhbM3Zf71aQ1Xs2sVZUA56VhGg4oioplqYKKoIQPSomHjUc4BP6D9JqztNQkS5PoP4/zqgIj0qRFod0VYtgVQLkKYU905ph5UAyjMUh6cqIZpk5mgCAqJ7MmYqYjGKQt+tARq0+1G2FJpkXFK4JxUBWe4OlOGJpOn1oUUzUAQWYqVximsD+NSFKAqEHMeh+n+TUrL1oop9tARqaRotlIj9KAguLQC30qwVmpbOmZjCgsTgAelKBTa1IqG1utuHRijDqDn+o9K0o7OXwJ2qfTdn+Vcs6J2fuwh3+XX+lKJZ2Ldt7tuy9y9eZj4hD2UCkMQDtaJ+9UOLretEXV1Fw3CbtrcYnbbYQOXmSavarQau3Z/Z2LV5kHgRtgaTJPjbHOsRwXtBxPU6l9I9nT94u+5tu2sqZUuMn/kKsnSCVml4PqLzBmbU3VtqQCbY3HfdbGADiWLE9BUFnidywmoN67qFGnuJbK2ykk3CTuG7EHn86xOp4tq0u3dEHFhku3WiwTaBdiJkqcgCAPICtRwXT8T1CSp0twBUt3O+Tfua3JRjPNgG5/yrMZ3os8fEl7OhNS95tHevI9u2uXCAg3GYPO0HcIQGB1865HEe0DvcFgarUXEyHa5tthmHlbCgqs9GJ9q7Or4LxVQ522NrWwu3TqEZe7JuIUAMzuJ5Sa5nD9+qvW/zCob0kIdoW4wAMd6erYwSKmR1RYVTO1qOI/lbdm21/WftLaGLZs7V7yYALgssR0NWdFwhrBuPbOquOLty2WttaBgbWlt/MmR9KpcX1d+0Vt3LVgldqoHtpcb/gJj1xzrncVu3WuHTX4NzvS23wgm5c2gQTiD4YrSZi117NCeFW+8uN3lx7i3R8L2VYEqtzc28wTuYjHlVXizObpV2c4X49haCJGUwRk5Fcq8uq0jpphasMbhVltutu4QzHaIIyAdvyyautqzcuNvAW4vge3gbdnhwAB4cYPtRTT0beNxSf2SJbil3ddfTcGuuodQIYAjxDrVfiHDLtqGZfD5ggge9WjNnP2Rj71Koowk05WhQbmMxUNr4z7cqmNQacftI8xVBI9upbRxHny9qWzzNNa5j0zQD3RFMKO4c0A50AVj1p2Gfn/Wm2xRMOsc4oCOYpC7GJo7i1XNv+5oC3bEiook1cjBA51C6QaArMtOi1IwolWoCELUxNCRj5/xpEeVANNRlc1IKI2qgAYUIxUjrUTLQCKjn+ld/gZ7vT3rwALjdHsqggfU1n0fNdTg3FBbLKw3W25jnGImOvlFVEZnl4tqlu94L7kzMEnYfQp8MfKtVwzXuul1GsfxXPEcDAVANqgDoJJqJeH8PDd5vYiZ7vxETz+HbPyJqG3x+3Za4Wskad+agbiMQW2+R6qPKtGTzxO1usS93n5i4zbjKsxKETO0p8IHsBE16td0aHX6bUhdrvYuo3mRFtlnzIkj51kV0/AbNw6k6ic7haJJAIz/AKe3f8iYpaPtvbu8SW9cbutPbsuqFpybmxtzR1MDHSKzdPZuMHO6XRme1dgpxNrgg77xEf8AdtnljnzrbcCv3F4brn+BlS6yFGJIIsyrAwIM0HE7XB71xb9zUNJYupBcAmd3+3lUui7ScNW1qbZ1H7Bzt3w5kPbAeCF6Sa44fBeTTs7ZpfqcaT0jzjsh28166izuv3bqs6o9q5LSCwUwTlWzIitZ+JDHTa9L1oHcVS8QMANbYjcx9QoEHyNWuFargdi6t6y7Xbudki4QCNskblCg+JcnzxXM7X37msW4yEB2ACrONozsn1zn1Nd/8kcH4s3er4Tbv6nT8QLDuksl88pw1p/kGYz/AMRTDhVnV6jTcQSIAO6ecrIT5q0z7CvK9V26KcITQyRqA72bin4ltKdwn3DKnsrV2/wz7QONDqraEbhu7rdMC4yiJ9Mg/I+dbcH7OfP0aPhd9bmq1fEnE2tPut2ozOwQ236Y8+8rn8f0RDabVBty6gEs3k7guAPIR4R/0VY4h2lt8M02n0+mCXG2ncWDgGILP0MszH6UHDO2tjX2blnVlLNzcvdxvIYjxKRzyGGfQ1l4dX/Y/cJS43/BprunvXNHYFliG2oSQ2zGw9R6xT6e1dtaa6NU+4tIUFtxyIAnrn6VzLnF1bS2rdi6wuJtVwu5SsKVYE+4q3qNdavWALrBbq8jByfcDka1JV2WMlLo41tqP5UIYDPMGjPOuR0IyKi06ftPlUl1qayPGPnVQDu+VJF69KbUedEpqgNoNBSXApXKAJs0LHkPP+dFboHmPY0ARahYU8dTTGelAX1WKjuJVq4tRAUBznxU1kcqJrfOaJFzQETL0pBcU7rmjRTQAJbqYLijRKPZQFZ1zVa8IkVccVVu5qMFbULAHnT2pBz1qa4JHzFSd1Mf3NQCtJ964HbjVhUFjeFJG4+ZH8clRHrXb4rojc095Bza2yj3KkCvKO3Wr26rugI7m2ltTIJJCiCPLH6n0qg4Gr1IksTukn+vU5rphG2WwTJeyjAdYXcmf+1R9az2oA5x1q9xjXbfy5RvCNPbgxABWVdR7NPPM/WnEqk0aPQ6ssEtthFaZ5QDG4f350Oj0p/9OhvZMMt4K4j2m2BBEjJPpBFZdOIuzDapPPqAOcxJwcmg7rU2yrIrIwEBkaGz6jp6VylgT/g6488odbNnf0zoLne27dsi2SqKylgd9oktsAEnavKOXKsrxXitx7gbMIIEMw5kyZk8zV/svavaltUG8VzuZgxLMzqOfyoT2L1pWRaVsZIcfSCBXr+LBQVM8/yJqTt+xuzvD7+suG4unfUBCu+bqrznaC7EGMHl5V6r2dt3Fi1c0y2VA8JR1dZ/2lQBHvnlWL7AWNVoLlwvpy1u8iqQrLKsrSCZPKGb61q9ZxFGDG5pLkDmWS3cB9gjMSPlVzzyRfWjzwUHqLLXH7Nm4h7+xdtlZCXoUdcT4hKnGDWT4LwwNfkl4QSDiAZEZgc812zwjhl2xcKWBbum22xhZu24fadpwoHOOdeZWdc6NljbJ6EFDkcyIzXSE+cGuji/jNT5Xf8AR7gV/L3rihcXHVxjxDdO73Eh/rVrXKBz/jic/SshwPj14vYu3Xd7dwi0xWXaShNshfFncCsCDnzrcLakR4pXG4qyznGDg8qxmlyS+0dPj43CT+n0cnToQcfDHL65q4iTU+wzED35TRd3XnSPYVGSoUWHB/vpXR2+dVmTxxHrVAxWQQaADE1IVpNz9DQART3TECk1ORQCJobpEVMBQFZoAFUiPah3R0qwy0ISgOq64NQFashcUJWhEUttGq1KEqRLdClK7azR2rdT3Uk1JbSgI1t05WrASgZaEspsuaguWATV0rmo3FClBh0P1q1atYob9qVxnNOt3aPPE/4qAp9o7pSw0TJB5Eg9AcjlzrxXtk7XLrX9h2mA5jCvABBaOpyJ9K9S/EC9cGnBt5k7MMQQDmRHM4ryjXcK1b22dzCAz3ZZuYEFtsAdOfv5GuaUud+j1OeN4FCvLuzM3tQTgVuew/Y5tRbW9fG61Dd2hJjJhm9iaynDdKGYvtDAEBV5gkzlh1Ajl1JHSa9H0IvOLab32KqqQCQpb947QYAknAxXdnjMlr+GXLFwjaVziB8sEVXIJkFmBHnINejvotp+EExyImeU/qK43HuG+AtbGx/3ShKyfIgGDWHE2slHE7Has2buoYndGldo6nY6NG48ozmmb8R3Hw2CP/dJ/wDp/cVD2d7w6prd0sSbF8FJJP8ApMQM4HIVjCetbXRlqzbf+Ilyc2/fxT94FdHTfiShG17bjlkQf415u1PArbk2qOaxpO0euaDt7pi3+oy/9SwPSc1seHajR6lSveWbgbAyp9jBr5xNT6bVlf3iPIjmK50V36Po7inZDTFB3Ki1dWCr2iVG5DKsyrg8uZGOlXeF6plVLd62wLfvd6bwBkhSxc7lkgeYzXl/Ybt3cVTactc2CQdsuVJ5RukxPSSB0516B2Q4137XLF6BcAkCCNyEAkycEiYrSkqpk/Tm1zj67NAVoalImmK1g6ohcUAt+IeoqyVobaYnyJH6UJZWa1molSTVxkoQlBZGyCgNvyqyqUXd0FlR0pG2eVWGSnKZmgshCUPd1K2KcoKFOjFRsKkqN6GSILUqCo88vrU6CgImXNSItCxz71Oi0IMwqNlqfbQstAVWWga3VplqMihUyjtO4U+otSIA/uaslRQtihTk8Z4ebmmuqvxgbl8IbK5+E8zFeQ8Q4kfy5Ads7pBS2IK7Sf8AtIYfOfSvcEbx/T9QK8i/Ebs21u5cujw6dnJhQzFRtXMAYyOZMR9+cottUez42WEYSU1/oyvZUAAuUXFzmcTg49PhmvS+GcStBACpXlnBiuD2W7JPqNBATbKhwx5O+7cFn7T0rkPxHUaR9rKxgQAQYU9CCB/murPGzacS1W9D4tt204ZdsHeolSI6BhII6SKo8RugIHLAog3cugWB86ytnjNxyJYA/TmMwOfrikyXNS66dCzKbibzyULPiZunsvoesRAlZBwFzb1BvXBL3LN8wOk2nYR64+9YrZXo2uYHUKqBjBZQYx8DCPeJrD6jSMhyDjpGaikdJYysumPOMUNwDpNdtU32wwEMPvFU9Tp9wmIPlVU7YePWjl01G6xQgV0OFHW7M60Wby3CzLtzuXmIHl16fSt5o74/N2dQjXWVwrDaSERwCGDDpbYcuviIrzO3bO4KepiPfFbPg2qFu0pV7m8Hbs3ABoAEHHwnHzrEpKOx+3nldRR7zoLu9FYciKskVm+wHE++0+2CDbhSCZ9jPUYP0rTxRyUnceixx5McVHIqlSv/AIBFNaHP3/h/SpAtMAc1CgNbqPZVnlQstCEarRAU8UYWgIgtCVqYrTFaAgKUISpyvOnC0BKRQMKlIoSlBZEi1MopwsUgaAhIlqtJQLaHOpQtWgORUbCpaFhRhkLVFFHe6UM1ABFAy1JOaAtQ0iJLYBn+/Ost25cFBbGXuOFCliAQUKsCOQncPtWsbFYnt7oLr3NJctbdy3G+IkDAVxMZOLb1HdaOmPjy8jV8JtratLZAgIoWOmB9YryLtLrGTWsZJC4g+uT8pmvROyPEWvWGuvG4O6naZBCmAR8q8w7XXP8AzNwnzH0jlUk9FxqpUK9xBe7MKAxHMAfrXLsa10tMEYKS4YbvhOIPzxFVkLbeXpVfWXSVCjAHT+P61lbNukdzgnHDc1NgMqjLSFHkjnBOef60442LmrJYW7duYYOCWKgmYgYPpXH7PeHVWZH7x8+qMP41f4nw43dt5UiQfc8+dJJezUG3Zd0zWLpdbcAbiQIgxPOOlUeI6DaDXMSxdtOHCsI68/cGK0j6lb1vdybkR6/yrDVdHSLu0+zG62xFc8DNaDiSCIqt2c0Fy5cLW1nu/ESQSmFZgrmICttIzjnXeD0eTKqYtVw66/duqZuQqoCC5IEz3YO6IjMRmuxo+G6jCHT35EQe5uCSxWYkZI2x5YqfsH2VucR1jOtwBLTpcuXRgyTIW2I5ypiYgAH0r6Mako6o1DLxlyr8qjGfhpwG7Ysu95Sju3wdQBuyfIktyrZxTrii21EklSOeTJLJK3+URxTAU8U6iqcwWWmFSlaELWqKCUpwKM0oqUKI+sUoo9tPtpQohK0WwdaPbTGlAenUUbLThaUAWWoqnqNhRhj26lWokqVBVQHIoDRsaBqAr3M1FFTutRsKjKR0iKeM0VxcVAQPmPaqmpspcG1xKzMeo/vl1mrk9Kiu2qGjjdm+CjTad7aqVXexUM24kQokkeZB+Vebca0Auaza0wx3H1CiTH0ivZrafsiOs/3yrzrtDo9upFzMgTIzyBX2IisyRuLuzFblFhGAhru88uShtoC581b7VxnvopyNx8vKtJ24ULfCDChRECBkszGOmWOK4WmtIOcEms3TOkSLhesZtVYhY/aoBE/7vOOXn6E11x2idD8AAnzOY8sVT4Zctfm7IcnbvAEZ8Rwny3RNejN3THZKGGyuJXPl0qTmkujpi7asy+i49Yu+G5YZdxgPC7c8p6/aotToAhxgHE+cHyru8atWxJBGD5fKuXrdeNoO0YOScTOOtcHK+j0KLsznG9D3YLHoevL+tRdnuIMmk11pNwbUdwkgSoQG4bknpIgAdZPrFzVahdXcW1vFu1u8TsQNxH7qev2zW27JdihqA1s3NulVgxRY3m7s2g7o5ASZPmfMmvVjtR2eLM4udekdb8EtALelutEb7gz5gLj9Z+Yr0aKrcN0C2UCLJ5SxiWIAEmAAMACAAAAAKtxW6PMxiKaiikaEAIpbaMCnoCK6OVKjYU01QCBT7aTUQoAStKkxpJQowFKpIqJmoETRTgU4p6EBYVE4qwaiYUACipQKFFqQUQANMwpzSagKz0NExzUbNWSkDvDD5/pRh5qK4M0JxQ1RIedGRgUK9KkYxQNj2rYhgTyE1meM6UECcMvL3gzy8wIrpcN4iLl7UIOSIg+ZLT+grMcR7TJZJS4pKoSu7G5Y9+fQdR4eeKCDOT2t7Pd8Ve2IYAhsknHnPKI8utefazQsrQft9P1r1PhHaHTX3I71ATGDjJ5xPL9M1xe1HCgr7wYJ8xH3j+nrWWdY6dM88XTql23umBctz7blJ+1d3tGxNxttld4PxKGLZAOYME5mq2p0atdRN4VnZRuJgLkefP8AxWg4lppck3ly3NgJkzggRmsS6QcpJ+JlbvFdVABJEeaD77jU2i4Vq9TzlUYTvYCCADG0Dznp/m7r+6swf9Z5BiCqgY65nrijftmLKMqKz3HMkuQVTkIG0CRAGIFbSX0YWSd7ZwxotuwHG7CrPiInLQekxk19H9ltDasaW1btIEULkDqx+Ik9TPWvmP8AM3Hud4zS0jpHLkAPIeVfRXZLjVu5YsiQCwAE/wC4qWK++DWrE17NQtPTKIpE1o5D00UgKc0KKnFMtOKAUUJWpKGKEGKU4FNNOKAFlpBYoiBRdDQEdMRRkU20UA4NEKGjFAKgc09C1AK2aOo7dSTQEbUjypTmhagIWFQvUj1EzZismiG4aZaZl8U/aiAoaDU1x+JcWABYcgDHXl1pdq9d3Wmcgwz+BcwZbnHrG4/KsTwsHU3xpu8ZCUk7xJBUE7VAicQfrzjOJzUFbLHG5FPT9rTprveuG2MGVhHRiCtz1hgPlNZ3tFxwag71IEk7hmT6mefSo+LcPIbWWm3b7KEiOR23UUn1EMT86y2nacfekZclo3GCi6LF5oyDXQ0favVKCovuVPMMd0e26YrnFTyqEWoM1UaaLOp4k5uLcMHa6tHKSpBzHnFarjXaYFgV0yglUYliQQWWdpWMkTzmslo9Eb11bQ/eME/7V5sx9AATXV4ha3uxWYLQJyYmBJ86rqtmOFspa/il26TuIHoogfzodFw/dXRXhEESK6+k0e1cCYz7xzA8zFZctaNxx72ZS/pmBmDH8q6vCOO3QgtSRkkEGCpI2gicTBbPtV3iD4GBtA3DHxL0M9GGQR61a7KdmH1DLefClvh5SsHrPntke9WKs55NI9K4R2rvnRWWIS5fGxGBPiuH4SwiACYLbpjB+VLiH4nPZ3K+j2sMLuYwSRIyAQwjODmujZ7N7HTYSqR77TBk58wNvoJrM9sexequwUZbiKGYrO07ycnJIONoHkFFd1CS7VnHkmei9je0C67SrfUBWnbcQGdrgAke0EEehFdorXz12P7SarhN27b/ACzXbbFS6w6uI5QYjAJGRJxkCvbuz/ajT6xZtFgeqOjIw5ThhkZGRNZdFpnTaiWnpjUAYpiaVCaEHBp6CjQ0AQFCPKiBoN1AFQmlNKgDJpCmpVaAmqFmpUqjASmkHpUqAaedCxpUqjBC7VX609KoVAVzdXxjYdoTxBomZAExuPLAGT7UqVeLJmmsvFdHbHBTuzBdsuJXNQqqpDFCsqjKy7nXKlT4pEQCJmWHQVx9T2nBu6XVMGXUWoF7EC4i4VvPcVLA+4pUq7SxRnt/lo3jlToi/EK4L+ouajSS9s21S4yT8fVTHxDaq8iRg1567lT5HqOUU9Kt4IKEFBejOWXkWbF7dU7LilSrTNxdmg7D2li/dzuAVAZgBWBZhHWSq/Kr4sLP99KVKsy7JB6ZbXaz7CYHnXaTSpsXoBmeUH3pUqlGmzgdoFteC2NoUsxY/ugcyZOP812eB9pdJplCgm44/dsqWnp8RhfLrSpV7viY1J7PF8rI1ol4j+I+ob/R09q0pUsHvvMgRJAEAHI6muNrO0N67tF3XMQxhkt/s0EqYO4RuEwM+dKlXozZniaUUjzwx80+R0uz+otpZXfbLBn2NFwqBJwxIP29R51Y1XErIYoiFAVYEi65jOYYwVYqZHz50qVeP5FSjzry+z3fG14+jZ9i9WBba3+0IBDK1x3uMQ3MF2JJgj71p1uA8qVKuGNtwVkypKbrRIDQk0qVdaOY0RRrSpUoCY0JpUqUBU809KlA/9k=')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "scale(1)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "game",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "img",
            style: {
              background: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMWFhUVGBcYGBcXGRgaGxgYFxgXGBoYGB4bHSggGholHRoXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGzMmICU1NS0tLysvLS0vLy8vLS0tLS0vLy0tLS0tLS0tLS0tLS0vNS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EAEEQAAIBAgQEBAQDCAECBAcAAAECEQMhAAQSMQVBUWEGInGBEzKRoUKx8AcUI1JiwdHh8RVyM3OCkhYkY4OTorL/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBBQAG/8QAMhEAAgIBAwIDBQgDAQEAAAAAAQIAEQMSITEEQRMiUWFxgZHwBRQyobHB0fEjUuFCFf/aAAwDAQACEQMRAD8AfsnxhhbVY9cGMh8Ft1Etz/W2FCMEMlmoEE4vfH6Tk48xvzSz4jo/AKlVLKxjnIPT/HvgWayG8xPI7j1wwZzPCrlypUk2jY7EXvzjCZmsoOW2NxttTcwcuPzak4hinWK7GPeMEslnqyNL3XqDED6YV8rVgMjaiGBE6ytuYuCIwayPGcvRGiarSIJaGE9tre2PPv2uagI5NQ+qZdn+KKdMufxQNXqDixnaUoTShX/qMT/vCatYmyHuBzjErVqgEtqAnczbAHF7YQy7EVI+IJUWoGqppawJiNazbzTfpOL2WZWZ4psrLYodr7FYJ7bdsbtXUqo1ioZ8pBFv6SN46YzI8fUag701AsJN7dAAZwOXOmNbcgflAw9K2RyEs/C55xfLwqcmBEybBjf6AiMLlHPMjEalZSbzMX3In133w5ZhqeYpyrBiBus8zcwYYescsJfHOHfBbyiRpEkXE87/AK5YLBmTIuxuD1XTvia6qESlIwy+UMD83WDBFpOB1XiFMaU1gzpsDMl9gAOfbsemFPivGys01Rm0kA7af4iyRBPmWFExa/XEfDqipmHE6V+FCs7Iyo4YsdQXzaSoEMBOrkVJiXL1zq+hBt68/kJXh+ycb4/FyE2ew29e+/NekcneDvA7H8sFqApmGQiDvI833nubYAfFDKsgeZQwFp0kmDblY/cbyBPkKQeT8ZaegiQwYzblpB++L36jGiB3ah6zjL0WV8hxott6Tfj1FQBEnlB2HMnAGlli0wCY5D6foc+2Gyrk1cWzFIkbFtaj3LLAxLR4Vo00gCJvrm1xdgRvaYjlzvfMfV4XHkYGE3QdRjP+RCBFlOGFf/FVFBuNQJMbWBO36nFyhxEUjNKpTAgW+GoieQNz+ZwXrVKKl6SlFSmo1vUUm+rTBAEgSRy9cAa3BlZiBm6MgSQtOrt1IVIwt+rwA6XYA+hlOLpOpK6sSEj1EsjxY8TUEgsRt5Yjvz7RzxrnKNDM0vi0wEdVLFBAJXedIiRznvucL+Yy1FCIzArK7EMKSuIgcw4E7iI73wy+EeGwDUqrCqrGYEAusE7XOnl1ODVsZXWh2hMMmoY8g3P1cH5PLNIKgraZIv8AbqR9IwdoZ9qcrGp2gC978gN95/1itmaaKiuCdNSY52UkFSf5rgx/nDH4KyICtmXAvISeQFmPYn8vXBDMj4vEG4PEQMGYZ/COxHMKcOyho0oYjWTLQbensMRcS4gFkJztOKfEOJFlYg2NQr3O5t2t62xQMnlifCVyWwN0aPvHadDKTjAQDtI3cnERxtmDoUsRsCfoJxay2V1aYvqWdoi5EH3B7Yc2VFYITuePhzJ1xMwLAbCU4x6uCRyJLaQL9sb/APSnL6AtxvcQB1OC1iZob0g0J1xMlMxIBwUXhVMnSHJMxtHrGCddEpIqhQY5n++AOUdo1cBPMW6eXZiAFN+2N/3N5jSf1/bDLT4gAtyCfywO4hnwbBv8YFcjE8QnxIo5kGSyYuzRbkL/AFxJWqAYyrnFpppFz1wIq5uTgwCYBIUUIXGa0jE9LMkgHC+lfrgjQ4oFUDGMk8uSUKuWjliThypq/iTHbF7KPAvcYILw6k4mI9MeZ6G88mOzYm1DIU9LaYIbYGRHW4vjzLZPUTrpUhzJAEn648y3DdBlHP3IPYicTy7fjpjtce36OEH3ypTxtXulgZJHWGRSOkDCTxngRSo+lWCT5TeI9ft7YcE4gynTUSD2Nj3xdp1lcRbuMBbLvHDw32M5WcqymRI7/wC+WPFZxaSfW/57YduIcOIfyKpB5WBHaeeBGYywFmpkH3H3uMMGf1nj0St+AxO8U58LSVQTTao6oWkkAEFmIAE/Kpxa8NcKpGgr1EYswB1bwDsAPw2+px74t4YWQMiy1NldQYvp3X3UsJ7404DxSkaQGsBVEAm0AW0vPyuNiDE7jfEz5U8cM/pt7+/xjPAyLgONObs+0doWyxWhD0g0hoLCIJPJlne49vpjOK8TH/T3ZqqtUB0hgpVRUqPpVSpJOkM0XMgD6oPibMcOoknRSrO7X2c73JaTHOwvPTfBbhIFbJH4NPToJ0KpK+emwqKVO6+YA9jhRBORmFbg8X/VwwmjEAwJojmv7qBuCcCqNXVFpmnUqVVALQwUQCS0iSQGQiwgtaYgM/Hf2e/u+W1U8xLUyKZUnYGI0E/K4lTbsdrYB+FfEApufiSKwEkuSpkC4BP41KgTHLnBGDPifxbXr0BSKKqabsAxaQRFNjb4bN1mwB6YWpUAhx7oxwxNrBHC+IEfw3MCkZpoWTV/EMMRHzGCrkDvg6aKvTq2BKtRE84dwrCNsJPh2ga+bXSNKoxLMIKLAJ0w3mnV8MA7wD3wwZ/M/Dz6Zcuvw3Wk7MTEEGpzMdBvhg1jEN68yn4d5PlxK+Y7b6W/58Yz5HwjqGuNKgi9pEg3Hpb/ANwxpUzqUkrUGqFdA+JTKnzDzAMqk9ZH0nmSWLP8by6U1Va9MqFA8rAmYjl9ccnWq+fzvkl6dMiT8qsdwo6AGT6LJvhudhmKlD5gRVene/ZE9N07YcbBwdNG77ntXtv0hrN8ZFNHQU1HxaZpgE8yVuxO5xUXg5edFMN1+Ux1m9uWIfH+XWk2VVWDHVU1EABZGiAtrgdTvgtnfD1FqhqaJf8An2m0bbxFsNQOM2Rsdb1zfpJciY/u+EZSf/X4a9f4kHhXgIr14tpXzMQRGkRsRYzt/wAYYvEGbCzTMhBAgc9RsBHW/wBMW/DdFcrQrVSYuJMWCqCfbcn2xzvhfFDnM7UzNSqERTKKzR2SATyAknqRj3Wszp4QNXtfoO/8Q/s7AA/jMDS716nsP3jrTztIMMvmtFMVNVVTIUBk2E9TTt/9sb74JZ/jegLTy0LTAIKBTJO1zzPp98J3iHK08wmhKia5BU6gSGF5gXPfEvhXifx6N2IdRpdeci0n6R6g4DpVTA3hg2vI9h7iO6kZM2PxKpuG9a7H9oYpcbAp6CJqpUJZDYebVB+m4w1+Hy2Z3RVCgSbmTPIHbY7zjlfB2Q8TqU6tQU0AksxAvoEXb1x1/hPFMjRTSmYpdz8RJP0OFYGXEHF7lifnH5enLFD20iWPEGSRaFQhROhv/wCTgT4bzY0ISd05/wDmVBi/4h4kjZV2RgwZXAIIIsCLEYS/BHGKTZeg7sFUq3zQDarV7/fCsgvPjdjt5t/eB/EcKGFwo3sfvOinPjeLATJtOA+b4gXm9unbA/OcaRvKjKBe+oX/ANY2p0ibzbHSxhDuDOdld+DNPikGQb4kqcQdhpYzt7xiOpljvyx5Qy+ox9T0w+hJtRlipmpxVZsEKfDGI1GAOWKeby+khZn0x4EcCCwPJlN2nEbYJUMkdUHFhcoNURMY3UIFGAwDjYJ3wefJibIO3+8Z+4g729Me1ibplGjmD0wWo5hiAoMH9bYB7Y2FVhscYy3CV6hirWZDZvXGpzIO/PpgT+8k7491nljNELxIfoZgVIVthsbSP84uUsoN1Jwr5fMaTcSMG+F5y8ardDhORSvEoxOGPmhHNKbHpjypDoUaSCL/AOsTPT1DGoy2EXtvLBYNiLOdyQUlDcdefthb434Bp1f4mkyRBdCUaOhIuffHRXyQb5gGjbGlSj8MSm1pB/3hRWWjKGr1nF+KeEqOVy9eoqef4VTzOSx+U7apg4vfs0g5YiPxt+Qw0/tFYNk8x5YYUau2xGhsLv7K6QOV/wDW35LhRNGPCA7GUvGvhalUmoCadQjSSDAddypt0G8WjnGFXJcOBpfuzs9Z51EZdpMDyaKjsdFpYiOftPZc5wtakagDG0iYn1xWHCVTlYfbAONZ3ND2QhirgfODvDPBadGkAqkA3MkkyQLkm5PL0AGwxU494PpZip8Vw2qAshithJ5epwy01A2GPSMP8TajJz0ZB1DmKNTwDl9AYh2AiVNWow+hbnGL2X4MKVBadNQpYajFgqnl6k/Yd8MdNTMcmgEdQcWaVJdAVgZcTEwFUjygjaYG2KcLKBYE5fW4cmqmacj/AGg0wr5SBaagB/mgJf746bl+HkjUTpQc/wDXM4R/2zEfFyAA0gGqAP8A8WOppSECfp6YEZPOx9083TjwcY9L/Mwbxbg4rZY0SNNNhBvBYRzI6n7YRB4CojbUPR3/AM46Xn8zYKCLb/r64phLYVkZb3EtwdOxWwaEUeF+EadIlwGLEadTMWIEzAkmBN7b2wT8MeDqSZh6wU3mRJ0kmOW3LDJ/0x41Nt98FaKpSQTaBJxq7gbTMgVbo2e8SOO/s8y1Ss9dlcO8TodlBgACykDYYG0/AtHWoX42+xr1r9ZGrbD9WzIbzaoHL05e+KCVm3UX++GjCp5EkfOwOxlHilJBSFHTCqCAotAiItt6YR6Hg9FGmm1ZFGwWtVAHOwDR/wA4fXy5/EDOJqPDyRNgO+HnHjIphcl8bJqOk1FDhXhpabai9Ro5PUdx6wxInvhnUkC2Lq8Had4xBVzC0rKZPXGoqLsg+Ux2c7ufnKlWqx3xby2aRQPyjc4H1a2ozETiNzhumxE6qMJ1c4XY6SQPXGKQWBI83b+2BdFzOCuSyTE6msO+5wJAE0HVCOUprcncjnjKkaiRjUKBixRoTBNl788JO28aAW2EyjlGLQRA549r5cTaf164kzPFEUfN/fC7ms8zOSGMdrYxQzGMfw0FcyLM0tJg/Xb88RLhiyyLmKSM8FoGoxHmAGqOl5xD/wBDUjVTcEG42KkHoR+eGLmBG8W/TMDtAegHtj0UYxezOXemINMHown/ADigKh2jDAbiCpBqbNRxLRldsX8nRQgBlkfzBoj2jBFeDU9wW+o/xhbZAOY5MLHcShkc6wMTgiMyTeL9sR1uFASyk+h/ziAUWGFMyHvKVXKBxLv70Ry/vixTIcENecDFQ+mM+Gepws6K5jVOUHgwd4y4GauWq00N6lN0k8iykA+l8DPCHh9cnRWkpJi5Zt2Y7k/4w1pVMEMSfbFetUCIznZRP+B9YxK9XSzo4sjEW03p5abmw78/TrjetkrSLjCPX8SGqS4ggSttUWMR80DAhuN5wFzlkMUxLkXidh/3dBzjbGEKI4eId50I5cYjNDFbwrxY5vLrVaPiAlKmnbWvP3BU++CxTCSYzWe8qIPOJFpH2vgkmTAYs8AR9I3+wGIBC+YiYuB3wC4jxlncIw8ovAsCTsD2mLdsV9Pem5zetdSwvtIfFfhWnxDM5d2J+HltbFBYuz/DKgnkvlM+2N+KcQdAVBgnc9OwwX8OVQTV5wsk9Tf/AIwqcRr6wTz54oCizOdkzMwWvbC/BapNFSbmWk95ODeWqBBqjU3IchgL4Wp6suvZmH3waGXmwxE7U87mOjhC3UqZrOVXMT7D7Ylp8MrNdzPYxi4xp0AD8z+vP+wxQHEKhaZk/bFqDIw9Jy8zYEbaz7zCFLhoBmoR2EnBOjTUDygRgNlKTufNMdf8YLBSqwt/U4FgRtc8jh/NpqbuOuA3Ec/Tpkj5m6Db3xNmqNZgZYAdOv0xQXhBJv8AYThiKo5MTlysdlWCsxxGo8yYB5D8vTFYLOGYcHQfNNun/GI6eWKyyWtYAbepI3w8ZF7SY43P4oArKyxYj1GNVS0k77D/ADgxR4VUqGT3uTgiODWAJEDoOePHKBBGFjuBAnC6SySwk8sGylpIjGLk1Q2xsyk2wtm1G4YUgUZqbXAJ6ev9sUs/Vq1THygchzxdYlZsOm0/TEE48vrMYmqEoJw/r9ziT90GLLDGsYZZitIgbIcQYpUGrfWwI56pJW/PoZwyeHJXK0EMgilTEHeygXxy/gfEgtSCzADaJve9r23O2Oh8N40rbG2wJjp+WOf4mk6Wn0GTp9S6sfxhg14MHbFXN5NWMwMT/E1bgHG1PTMbYoBricwi9pDlKQXYYJriolG/bFoEDAObjcQKzZhIxQanyxeDTiOsvPCMi2LlWN6MplMeFMTxjIxNcouU8wdKs0TpBMDcwNh3O2OVeIPEtSuj0XBRtZsraQqgEaCNN2mZOo7QBh48fU6rUkWjUCuXjRJD1ZEaUgTI35QJvjn+R4egooznT8Zn8xJ0kJpABUCbMWv9uePXQjsQs3KX/TKuXorVDqtN/wAOuSSeYUgGRbbA3IZ6rTZXpkg0zIO4kMXGrvPXFrjlCnSfSlRagjcSIPS+5npNo9MR8Gr/AAajBgx1KJFgJsVJ9juOv0EebmWggDadQ/Z7TotRq1qWsGrVbWjNIRhcBbfysDJkm1zGGnThH/ZyzpUNH8LUEqGB+JGagJ7lUX3nth8IwJkWTZjIiuFXiVA/vDEAxa/oL4aszWVBLew5k9BgZxrNBaSkLBcSZifNYD079B3xT0oNyLqyCtekDZLNVKWo0QCW+YtAGmSYAN/f6dcCKx33vyPL3FiO/wBsEchkqkMyljMkgsbHoOx5YEMNFRgxJLmDJnSdrduX3x1GwkC737zjIxLURt2jb4LM5cjpUb7hTg+bCNpwkeEuMJRc06h0rVuGOysLQT368oHs9EY5WUFXJE7mEhsYBlM5cdMXsjlgLwL7Yj04vjBYWZiSTAyoigBVE2xozxjJ6Y8K4ok5N8Sv8S8Y3q1dAtvjQ2P98QZhwRtM88Mq4gtpBmq5qTefXG9etNseZTJzcz2xN+6wwI++NJUGAA5WTUDpUT0x5WrdMe1jAJwMqVpPTAqt7w3yaBUmMk3OJ1GkScR5On+I+3+ceZqp3wR3NQBsNRmlesOmKj1MeO+NFa+Ghak7PZm+NGGN3YDEJqdsEIJM51w9TSrhyBEG7bAQZNgbxYW3Ixd8IEl2frPmE6hcTbYqJF4m8Yp5LMSulrjBzguSVA0avPN1Py87Rudj7DpjnZDYoz6NLTzDf2Rq4NxBKy+VpiwNxPaD+r4IFCCLc8LHAFNOiFkEqzSVnebNfn2w55eqrqGGxwWLLvp9JJ1GAN/kHf8AWeGtG+PWqjpOPHXtONSQMOqTEmbiuMbGriu0HYXxtTv7Y2hPBjLSxjR6XTEWdzKU6ZZ6i0xEBmIABItvbAjhvGq37z+7V6agkagyGVFied4seWJnC8GVpqq5zDx3xg1c21yPhkqlwI0NGocxJBPv2GFSpxGpBXUxUEnTNtW0x1784wxeMeFaMxmhLsxrMy2GnQ0sQecglQItAOF5+HxSSoLht/6TqcAb8whOEsoHMuxb0BKfxiT3P54McHoO7qoEkkC53m1zy3++BdNIa4A6SYnB7h4KFdSETsZsffBDGCsYMlNRnUfBXDlUF3phK6j4Z3BCQsAiYuylttyTzwzkYUfB9ZjWLOT/ABFbTJJ1aCk78xIPocOeFnGB3icjeYmA+LcMZgalJmDgbSbjoOnphZzFGoReZsb37/kZx0NcQ18ihMhRMidxvzxZ05C8yXKLER8o1eDvf2uBgTXy1VnvO5Jx1dMqg2UYq5zh6GIQb35W623xZ94xnbTJBhYG5zjI8Aq1qiqCVW5LcgOZHe+H/hnDloUxTQsQP5mJ+nIDsIGL1HLqghRHXHpxz81MZYgAmlMwRj1sypqfD1DWF1FeYWYk++K/Fs6MvRasRISGYC50gjVHU6ZxyLM+K2XiCZxQytU0rUpklvJ5RoEASI2gbjBYk07EwHGvcTs8gHEDVT1xpmM0s6JAJ5TfEaAk2GHrRkLkjapMxmyjE1HKADzXOI8tSMy1sWNcmBjCewhoo5YTTM5lKS6mIVdvrgHmvFtFXAB1TBJHIG0f908jAiL4zxpUcZV9CMx/pEsO4HMxI9/Y8sfiYXzVOc25zq59478u+I8+R1NLO19n9N0+VScp/OPub8Xu0/DUKBNm8wPQ2Ig7/QYD1OOVXP8AEYNpkCFUSDIjbmDE298LzZyVswJJ6gWJsDvjXMcRCBTaDNyGiAOoB5wJ74jOTK3ed1Ok6TGL0iNX/wAYVo0kKR1iG7c4t6csEuD8eFc6GBDgA9jvt9NvzxzSs7VCYkONWzW8tg3mi0xsCZmw3GuZr1tSgMFK+byvHmAN56dr7nqMPw5sqMLO0g63oekzY2KLR7EfX12nYWYY9ZoX1wm+G/Ez1Cq1gBIA1SLkRc2AE/2thmXOU2kKwaN4vsY323x18eRXG0+Oz9PkwsQwkhbGs41asAJ+2K7Zrth4W5GWAnK6/ExSciSCNu/vhs8I58N+KzbDlvFvW/2wPzOQVgRpBIiQwgre0jp3EjvifLZcKwYgmD+HlOxjne98ccsF3n1hBddNAVHapmKMkNbSRBnmQR788EuEZsRGuY/vhIqhgNLctiBA7bemM4fmWpsCtiOX+MYpU7gwHRgPMLnSXfmMVyxPriDKcQBADWJH36YtMobuOow4ZiJI3TBtxtBvFeJtl6NSruUWw5SSAs+5GObJ4ozRfWatSSep0z0gWAw8ePVIyVa9oT6iohF8csyLzAJ0ibtcxJ5jnjDk1k+yO6fCMa77xwreMq1Sm1NwCGEGQBvzHQ9+WBOVq1TW+MjsrKsKw2gbAj8QmPYc9jHRr00M2dRzJIPaBB/XPGz8X1DSg0mRFiCSTAk6iLb7cj0wphe8eCFFACQ8V4wxDq7K7Fy7MYkkqFm1gBeLfiwGybalfzquoGQ3MC47lpEzz98b5lFieY5ibjVDb+qj3wRXJ1CtF6UmmFOsD5Q2okl+W0ebt2wlr4lGLT+ISHIJTcfDdRc/MNwWNp+u/wDicSZWi9F/g/MpvpNwRvuIIPp64K8P4TrQ+eHIkCYVgBIIOm3rEfY4HcQeotbTVlWAIBiJXqN9zzHfDMbkiolgNe8OcFztQEKmkGkTVEm0gKhUeqlvW2OrIZAPUTjk3hjLCrVWmGZNflLDciCT7fL03x1ulTCgKJgAC9za18Ew3inM9UYwZhdfw9Q1kagvOJifScbqMVs7w5XIqQFqp8lQDzL27oea7H1gg0ESxlmpUiPf7Yr1+JU0qpRYkPUnQIMGASbxAMA4GUOJmozKy6HQQym8TaR1UwYPbqDhDz/GWqZ7zOR8JwaWkjUYKjSoJgBpIMiCJnrglazDOIgTq7DHijEkY0bGgb3FE7Ra8eZsJl9BLA1SUXSAfNoZlkc11BQexxx4Z+srtpaKreQEKsou50kgkNYQwuAN9sdV8f5cQlYwfh2QGYUuGDM0cp+EB79scuPC6+YrlKKTU0s5AJtoG97gk6R1lhhbN56leLETh1DjvGzJVHzNcK8uxjaRpjkbWYc++OlcKpPTphXMkbHmRaNXU739Mc0/ZnxlaVWrRzDH4jskarFHJ0fD02KSTNxPzScdTcjrj2BO9xXVudkqqntVrXGKPEqbfCIVmVjYFQCQeRuQI632xaqVPff9euKTKeU4q02KnOL6Wsbzl2fzlQO6v8SQYOqZta9zNjY9D3wPpfCfkkjsJEemG3xj4eqVrpBAkwpCsxLAhYjSdydRM2wn8Syi5byGm1Np3nzOk/NsZFtgR/nm5cBWfU9H9oJlABq+/E9q/BKMW0te4gTNrCefKMUstkw+p1LBFsqx7kb3E8uw7YqVqqSrBSRNwWAk8zA23NxidOJPqC09ItHXvJk73/PCtDdpY2fGT5wNvT64mZj4qkwpRSTJCyNIM+vQEkDl0nEVLMn8X4bggC687KOnbEj8TLMadTy2IMXva49r98D6WkCxkkekHphgH+wkuVwAPCO3thbJ8VvLKOwvAiRbuev/ABgpw7O1DWpp8SzEAGQCCwsCRubxBOFyiNTgAb81BJn05x7db4jbiJpsCLMDII3BBsfrGGKCptZBmyeKul9519sqQ6K0iSAdueNM7llRysM0RfU3QdDgX4c43Wzaq+geQrz6Ad5HW/8ANbDM+XkyWiekYt8VTV7++ckdMy2Foe7/AJ+8Uc1mZZWiCJBEbKSZTuNt+YGKWY4hpIk1SgBDLuslSVK8gwIEX2OCmd4uK40gG1yGVVieQAvFuYwPOW1SDG1tretsTeGfSdAZAO/6wjkKpr0wVllkgzuCORv0IN+uDOU4WCNTCIiRsQcI2c4wctCUSxE6iBAWYAi1psOR2wyeFvFK1lZMwyqZGkGZPMnVAHTvY9sL8IwznHIjHSySwZ8w78vfpiRK5QCNvf8APFhWV08jBiN4IJ94xFUyupbY8cZ7GB4nYiCvE+epVMnmA0Wpn01WCf8A7accmo5gKSL9u/fDV+0DNCloywnzQ7+gkIPQnUY/pXCtA+35YdiXkmIdt9ps1aZAt1P2x5SqkBx1Fj0Ox9PKzfUY0r1Iif8An17YjEnygFj2E7+mGNpA3gAMx2mufzRMxbVBI/L3xe8NZNq1PNVCWCZehUqcoLKp0gzyn7A4vcK8HVa/mqAqOhMD/J57Ycn4HSynDs2iW+JTliQTOlYA5m97dXMRtiJsiOdIE6C48mJQ17/pOe8H41BGpmSDIZWKwfT3M+uGbM8SetNKqVakyqwqBTKwwmdJgWkGBvpMRIwga1XddRGyqSLdSeWC/EOKCnVVcuZREVCx2dgSSeqwSRb+XG+EQbWb4iv+L5x44Bw/4VddFQN5SyRZmAtIv5hcklSYgSBbD43EYpKAZYiCelt8ch4bm0dddenUWjI8ySAj/hcNHlediCJ74cMrxepQQGv/APNZUi2apCalMf8A1kX5h/WvQkjBq1++JyIVrVxGJ8+xRUuCrAyDEgTA/XTEtLOVNTNJv9hNo6Y0ytNKqLVpOtSmw8rpBB+nPFvL5OMeprntSVFrxfxM0h8QCKhJCNIEWGq34hAEzaQDYwcK1Lh1Ooy1FnXVLQYI0oq0wjAH+osQeYAg2x0R/DtNq3xqg1kRpB+VYgC3PmfU4XvEfGtGZkJ/4JCiVMO3zEEyPL9xE88HW01HvtxNPC/CcxQq1VaoxpUGIpkn59cNtMBAIt1jphqzNdiWJPzJot1I3+uEHOeIa4qsaZgud5OlIsQFkhrGZYkX2wx8M44/wi1dQzR5SBpLH+rkPUfQ40iLIuDPG+ed6S0tUPpd4+UMEqUee0+bY9sJnD88clUDKWBZZdk3I3U3iE1RbcwTGwB/xHnnqKlQwdPxQJImKgEra8DQpk+Y+4wF4Jw2tVqioo0DWKhcgFR8OQo6E8tPKMJsk3KRSYyCP4/uEuJ1nNdeIQGFNqdeov4lpygJAj8N7bnR7Y6jlmFQBlIKnmDM4Q/COVWpmGXVNJtQdCSBMNNNf5gTpJG0LawjDRwtXyNP93ZWqUqcilUp+ZhT/ClRfm1KPKCoaQo2w3Dk0gk8STqcAyEAcjt9d4bZANvviq7zzxDU4irrqC1Y/wDJrT9NE/bEeRr06klHJixBVlK+qsAw98UDOnaRN0mTuKE0zmYIMAQMBc9T+MQCgbcAkAkSIO+w2wzVsorCP9zjQ0/hrEDtMY8XBG5+vznkwlW2A+O/5Ch+s4pxDhzUazU3GlwZF+W4Ijr7e2N8tlWpuWQsT1QkE9d7+0XnbHTc9T+LKtcGRYXE9ztgRk/CQXVqaVYRDTG4M2598Rmgdp2RkLL5hvELO0nrkulIxqVSbTqMwDAF5tPcDFz/AOFHWkalQBCoJ0kgkrEzbY72PTDzU4ZTXyoV1ARGmVIP4XEjUDgZm+EvAC5irbbVUMd4jb74wZFmFGIuL3h/gpasUSr8OuhMAzpIiTDA9D9Dh2pZalahm6KliDBsUeN9LQGDdjB5jCLnslXpmYA0gfxFABABm4S9r+YiY52EWsnx74n8PMMQd1dBeRsQJ3529Iw4VzJ2VrqHm4LSoHVlatWi0QIfUkbwUNiO2KD8drKSKtOqWHOlDIR1EkEemCPDM1ScEVHGtbhhs45EA3Q9Ua4OLJySPcyOX4uXoIxhf1nvD9IqcPeuXIYHzRdhYC99v1BxZz2UqKxBY6eotI+1vXFxc8bSV1dNiQp/DadI685xO9Q1NwJX1ie0XJ/XTC/vJJlh6Ba2gZcoDjTM8Jalcrv3HP02wfo1tJuhmB3m299sacSYOkQQSelp+hw0ZhcmPSGiQYD/AOlZlSKtOoEblpfQ1+XKfrghwzxzmcu2mqVqraQ0BvZh/ecLXEa1ZHIGqSeU+0YifLOyk1SKS6p1MPN3AUX3HPrtjWPeZjW9iI38b4fSz9YZ0M7Uqiovw0HnVlswcmyxAIiZ1HYXNnNeF8m9Nlyz09YA+apUEHfS2sus/wBNo6jCjS4xSy4QUF1aj5y+qSNJgi8TMcuWLlXxhVdSjinBUggAi3a8j2wg48hN2fnX5Dn4w/DxjtDnDPBVFV+LmKrGN1pqzmPZSPfBqhxXI0lilQexjeiW5X0iqWG+2kegxy9c2wIhn0sIYEk+bnc8iB+eJ6FfRVDgRpZSOto5+2CGLu2/v+tvhMbJWy7e763+M6z4j1IKQQsrHUT6QLHqZP54534/8SVXUZVmtCloAAcyDLehAiOYPaGvM+J1zIWQylZ2iJneTfbl/wA45t4wpgAf0kgNzgkyP10wflFWItQzWZ54dRCzQQoSm7MSOYUnTveSAB6g7A4iq5I1HNSlHmJYryk7wBf2F8N37KeHLWo1WYLuFJ/Ex0gmfS2289cLviKgclmqlBQNKsCBfzK3mUG3MEA++FkEbiUYyGsMKqdn8D5BFySCC61JJNRRLKbAMJIiLdCLxfAniHgurlnOY4XU+GZlss5/hP10T8h7bWGwwxcNqBKVNF+VVVVi3lCiPTbEfG88RQqBT5iukdRNiR7H74aAOJKSwJaJ3Cc1TeoXy7HIZw3q5ciaFc7nywRqN4dRqvJVhhv4Rxl3mnWT4GYAn4bCQ0fjpNbWvUWI5gYQ6wLqKVQKUEaSQNSgGfK0SPe18MuTLGmqGuKqgyvxVPxEI5hlB1R7HvFsb5lm6VO4h+nmajiQynqQrfQ3Me5wO4hkzVs6hwWV5BWxUFb9LEzi9RdyvmcMYkaQek78p7ek4koVwPKyzPX68wNv7YDYnmGpK8CBE4PQ1FlAaTBZrU+sgnf2nnjepwtQwqPqqxsDpCD/ALFFj7knBPiWcMQEtaSLxNtLRYHFDLZll6wb/wBpwwAVAZmu4H45w98w+suFpC7FohQNQkbAkzHsOmFXjvFfL+75e1EdPmcncudyD0tPpAw9cdywrUagG4WVGqFBnc9+Umw7YX8n4WX92/iHRVJZpsfJYKL7bSCOt52wJUQg91c88M8NaoBVoRqB0Zig0BQYlalJhBiQpF5BAMiIw9ZKq7AfEplGHIneN4YCG+g/OOb0+Prk6QWrkwaw2cswHMGY3k9454s8L/aTmKz6TlFICsRD6JKgwAzkDeBztJm0ERiPIhOdqInRK3E0A5z06dQY54qDi6OA1PzT129IxzrP8eqaYf4VMkEEfERrnaArMdI6XNwZjHuS49WTy/BJUbssgG5kgkAaen+xhbM/ePTBi55nT8pxBHtsw3GN6hvfCBR4wXcEHSV672men9/bBx+KM0ecXiNufK+/2xjZguzQB0xYkrxDNVukYGZ1zufN16Y0XiakR9Y/KMS1M0sGBP67YWzAxi4si8QNULn5YH69MR08nVqNaWPLmP8AWLulZufQYYOHVkVYQX59Z74LGFaLza05kHD+DLTXVUAZzy5emA3HfC+Vc6vhBSd9B036wCAPWME+J8aKNp0lngHSDAUEgAudhJOFfxNx1CdCfxCD5gvyEjYE/wAo6c8PocCIUtdkyar4Z1KDTrMo6zr29r+pOKT5bN0jpAqODfVT2PLoL2wvpWqly9So+kKxYgkK1RphekADblc98QZT9oVamoT94ddNoF5jn5gYtG1saLHaMLH/AG+cuZjNuIdYVJG8khr72EgzPqO19+HZ4mRJkCS1jA225CTONKlUum4nnqk/6nEf7oFIekSH5jYEel7YUGQyvJiyiiDYhRs/Ow2Fzznv22+mPeG56Gh/N2PWbRG4Pp7YBrxfSSoEkWJF+1+XP+2NqHGUgBjpvZjvv+v7Y8VsVUWpIPMtcS4qTqKoB1baJNgO+FDOuzEsTJnDIc/SYNfUNpkbm3ucDlyIdYACxJkySfeIte2H42AHETlRidjcBOxlZ/Qg43+HzmSd8FzwkC9zH0xPS4MXIEEezf2B++GFhJ9LcGCaVfy6d+35EYOrSIRNSkA2uI/PfBvg3Dyk6aEiLsg1NG0HyzveJGIqC01JVebGUKjnMWIOkgnl3xLk6jSdxLMXSBx+LeZlULEFVgaQTyFrGJ74DeKcstWtTKAlYkgGbkwTt2H/ALsMr1GUFViDeAYt2gfbviDKIGDsxphwumYIUCZ8wMjcc+mEnqQ3EtHQ6Bdy/wCGckcvS0o4HxfOxO4JFh7AAfXrhS8RtUNR6lZAdRGlid1Swi9gPuZ9r3G88yEMWIlo0i4UaFsCLMplCD3OCfhfhv72TUrIQo2d7LYQACd7X29NjHg7kcTcmDEq2TCnhHMRQAqVNRbzbmYJgDrGmMNGXydJlJdpgDnYDkAevbCpxxstQUn4odhEhBaBJALWYxci1ibYW38aU2ASmza0UwCPJMSZuQ885AM3wwMw7RD4UeiDX6xqzGVRmK6tJuIJDQepgf59cSUgKFMPr1zyC7Qb89wt/fthepZhWonM0Kq/EaGNNtx8qnSWk8hvgfS8XMp0iqNJ/pnTvAYNE8pPTnhLNmNxox9PQKmdR4VxdHWNYE/KWiwP8xLbYv0M4tWmSoFo5XuYFt4Nr7X7Y51R4lRYGHVC4OpU0qC2kLCgqZ52Efe40VaqrCVmKgzBJBBiAYNhbl2wSG+0TlwV5p0jPZiFgESpYAaha45794P+MVTWFRSRYLY9uoEGO/vhFy+eq16kMSWMAneAOZPQdegwar5KpBZJI0q2ljcstiPzIPOcH+DkwFUEcRgpZlQpJMDc89pg2MnbcdT6YD5nMCGMyTyAC79ep+w3xdqZctSDD5iQAkqtjaTcn6TAwOy9R0jWhBVoBsQIAhtzO4vvvhDsSbuWYQg4EoZ+lUAT4jjqocB4MggrTPMQILQOcbQmeJMmzuzKz1CR5mIuR1MGI/xjpD5kEwGubz+KPzH6viA5dQIET1sP9czH/OGJl07wsnTjIKInFszwtxbS07wRe+x+mC1HxPUpZZKFNnWJm4iJkaT81zMiTh240VAKtr0G50kBZ5yWIL9fffoGfw1l6iqQWJN7QARz95i+HfeVq2Ej/wDnPqIxHf5Tzw54nd3QVhqCghSd7i0km/mAPaLbRhu/6v8AFBKsqJIVWNiTzW8jpbCzl+DlUNIDWCDAJUKGvGrYkTBMDl6YzN5hVVVqUUkeWFuPKAuoCLdOu3PZLsmQ7SjHgyYVpvfGGpxtRGwaSGGkAnfqRePXGr8ecABDqX+g3NwJYESN9u/a6Pkso730uLkAsRAjlLETEEf8HBDJ5aqFLUyH0kgsrLExtck22/8AXhhRQIoMzsAdhGtuKMDOhvRo57X5ctrYmy3EKruFpg6jOzAiOs/h54Tcrmc7UBZVdkA1TpawE9BBG/374c/CrMtBaq6WZmIbYQBIIB0nVG8COcdceVNuJmXIBdGEH4RmG+ZwFeCwBMmNpsD9+eIqvDKNJdRhtP4QwA5XPT3xW4r4kNNwAYgam1A+YkSEiPL6/oq/E+MVKrS7E225AG8CMVJjM5rvcu8d4krU9AABHyqdIEHeGUxO9jzPLHNswkM2qZJJsCefVZB9sE87xUK4ZCZH2xoc7mDEawIG5/zh6pXESxBharn30yAJmJ1Bz7/NHt/xay5rN8vwoJ83nmLbERKz6R62GMxmFHAlXKW6vIO894gEpgE5qlT0FSdAY7kHdRcX22viHNtk2CkayLnX8MJqPPdg3ueePcZghiUbRXisTc1XOUCAtNUQkfi1gDlZg1jPPviOjn4JU19JWQUrHXBH8rTqjpuNsZjMYyACeGVh3lylxCmDIYSOa6oM97TggmeVhCuQf9fXe2MxmEMKlKuWG8myPFKtInz1NN/l80nkSGMRPpj3iBeuDmKYDVFUGrA6idQ6WH2xmMwtTqu43KvhaSsolM3BKoxB3ZjF4nryH5Y2bglR01NmEVmliIZ7ja+wO/XbfGYzCygB2j16nIVq5S4VnKNHWcyhqjUQoLEUoEwSou4JJOk2EXB5Q8a8YEtIErEgaQEnay7RyxmMxUqgGS5SW3JixnuINUOoA3sALT7DF48Np0aQZnc5lgTpAXQvQE6tRMcxjMZg681RIsqT6SLhmaIfQ1T4aEEmV1kHsBE8uY398QZvL0QZWrUaebIiGe38RrHucZjMEVECzDD1m8oWmUGkAajJJXnHJiZNuuGTg9fQIqeSVAMkHzb+UTvAB8x9JxmMxE3oJ1QlbmNOTTLqoCqjsGPnujdwwnlMSPTBP4oaoAJVegk3+WFkT787YzGYkay2kmNCjTfvg3xRqUgszadO2lvKQylZiGsJEgACZ5DC8nFSwfMPWp6UiFFytM3BMebUQbjee0Y9xmGY01BvYQPmYkZSun2gn5StV4tSJWp8RGDkA6SAYF/OCZ27cvbFhuMgEqKiuS0eXZBMQSd+vfHuMw3LgAHMPp+sZzwB/UsaUY6qgWYKiwLAdJ39vzxsiLFrgW6fSLY8xmOZZbkzskaTYkGaINhqki2kwBsRMETPT9AUKArVkWqsIACzhgI3i3JtjE9/TMZijEdP17ojMupgPWM1IcMqU1RFBLSFkOzkxpkkTAmN4HPHubzOXylL4SOF+ENk06muDJtYk3m3zHbGYzHUKDifOZGPMUc949dmgIvw5DFAN4IaJ7/39sVOD8UqCoaeX+MaVUnTSVxrRj/K5AEcuRIFzzxmMw9lAoASYE7mPFDgnxEHx/ialAULUan5hEyGplpF4ufwxihW8MUi51tUUWGkOpF+W2oDv9+WMxmFox9Z5jcs5bhGUoLCqhP9RBMdDaYwF4llaFVyxRun8MAAx6sL8vYYzGYeqwFJE//Z')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "scale(1)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "subtitle",
          children: "Official News From Playstation |  1/08/2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Ready for PS5 Adventure?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "ASTRO's PLAYROOM  is pre-loaded and waiting for you! Explore the new capabilties of the PS5 and change the world...."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "video-trailers",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "trailer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "sShot",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsEzqnRlRfqzRgTvWNSI4axkhEMl5mtPd0g&usqp=CAU"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "video-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "circle-player",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fa fa-play",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "title",
            children: "Spider-Man: Miles Morales"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "trailer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "sShot",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA712LdhWJ738ZDw0f4X-BGKn9_1LA-931BQ&usqp=CAU"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "video-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "circle-player",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fa fa-play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "title",
            children: "NBA 2k21"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "trailer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "sShot",
          src: "https://www.godfall.com/images/screenshots/Combat-1920.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "video-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "circle-player",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fa fa-play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "title",
            children: "GodFall"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "trailer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "sShot",
          src: "https://static1-www.millenium.gg/articles/6/19/86/6/@/196478-bo-cold-war-reveal-3-article_m-1.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "video-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "circle-player",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fa fa-play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "title",
            children: "Call of Duty: Cold War"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "trailer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "sShot",
          src: "https://www.cyberpunk.net/build/images/media/screenshots/Cyberpunk2077_Party_at_night_RGB-en-e04dd18a.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "video-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "circle-player",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fa fa-play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "title",
            children: "Cyberpunk 2077"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Csharp%5COneDrive%5CDocuments%5CVSCode%5Creactps5%5Cps5-dash%5Cpages%5Cindex.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFtcFN0YXRlQ29udGV4dCIsIlJlYWN0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsImlzSW5BbXBNb2RlIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiaW5BbXBNb2RlIiwiaGVhZCIsImNoaWxkIiwibGlzdCIsImZyYWdtZW50TGlzdCIsIk1FVEFUWVBFUyIsImtleXMiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJrZXkiLCJpIiwibGVuIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwiaGVhZEVsZW1lbnQiLCJkZWZhdWx0SGVhZCIsInByb3BzIiwidW5pcXVlIiwiYyIsInByb2Nlc3MiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZCIsImlzU2VydmVyIiwiY29uc3RydWN0b3IiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIkNvbXBvbmVudCIsIkhvbWUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJiYWNrZ3JvdW5kUmVwZWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDVkEsdUJB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhGQUE4RixlQUFlO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdC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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxF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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFB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YXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIlwidXNlIHN0cmljdFwiO3ZhciBhc3NpZ249T2JqZWN0LmFzc2lnbi5iaW5kKE9iamVjdCk7bW9kdWxlLmV4cG9ydHM9YXNzaWduO21vZHVsZS5leHBvcnRzLmRlZmF1bHQ9bW9kdWxlLmV4cG9ydHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QtYXNzaWduLmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcc2hhcnBcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRzXFxcXFZTQ29kZVxcXFxyZWFjdHBzNVxcXFxwczUtZGFzaFxcXFxwYWdlc1xcXFxpbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQW1wU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PGFueT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnQW1wU3RhdGVDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5BbXBNb2RlKHtcbiAgYW1wRmlyc3QgPSBmYWxzZSxcbiAgaHlicmlkID0gZmFsc2UsXG4gIGhhc1F1ZXJ5ID0gZmFsc2UsXG59ID0ge30pOiBib29sZWFuIHtcbiAgcmV0dXJuIGFtcEZpcnN0IHx8IChoeWJyaWQgJiYgaGFzUXVlcnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbXAoKTogYm9vbGVhbiB7XG4gIC8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbiAgcmV0dXJuIGlzSW5BbXBNb2RlKFJlYWN0LnVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEhlYWRNYW5hZ2VyQ29udGV4dDogUmVhY3QuQ29udGV4dDx7XG4gIHVwZGF0ZUhlYWQ/OiAoc3RhdGU6IGFueSkgPT4gdm9pZFxuICBtb3VudGVkSW5zdGFuY2VzPzogYW55XG59PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEhlYWRNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdIZWFkTWFuYWdlckNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVmZmVjdCBmcm9tICcuL3NpZGUtZWZmZWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBpc0luQW1wTW9kZSB9IGZyb20gJy4vYW1wJ1xuXG50eXBlIFdpdGhJbkFtcE1vZGUgPSB7XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKTogSlNYLkVsZW1lbnRbXSB7XG4gIGNvbnN0IGhlYWQgPSBbPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5dXG4gIGlmICghaW5BbXBNb2RlKSB7XG4gICAgaGVhZC5wdXNoKDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPilcbiAgfVxuICByZXR1cm4gaGVhZFxufVxuXG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KFxuICBsaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4pOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4ge1xuICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICAvLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG4gIGlmIChjaGlsZC50eXBlID09PSBSZWFjdC5GcmFnbWVudCkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdChcbiAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZShcbiAgICAgICAgKFxuICAgICAgICAgIGZyYWdtZW50TGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgICAgICAgIGZyYWdtZW50Q2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbiAgICAgICAgKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+ID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKVxuICAgICAgICB9LFxuICAgICAgICBbXVxuICAgICAgKVxuICAgIClcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpXG59XG5cbmNvbnN0IE1FVEFUWVBFUyA9IFsnbmFtZScsICdodHRwRXF1aXYnLCAnY2hhclNldCcsICdpdGVtUHJvcCddXG5cbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL1xuZnVuY3Rpb24gdW5pcXVlKCkge1xuICBjb25zdCBrZXlzID0gbmV3IFNldCgpXG4gIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YVR5cGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFDYXRlZ29yaWVzOiB7IFttZXRhdHlwZTogc3RyaW5nXTogU2V0PHN0cmluZz4gfSA9IHt9XG5cbiAgcmV0dXJuIChoOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgIGxldCBpc1VuaXF1ZSA9IHRydWVcblxuICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpXG4gICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLmFkZChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgIHN3aXRjaCAoaC50eXBlKSB7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICBjYXNlICdiYXNlJzpcbiAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFncy5hZGQoaC50eXBlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1FVEFUWVBFUy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1ldGF0eXBlID0gTUVUQVRZUEVTW2ldXG4gICAgICAgICAgaWYgKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSkgY29udGludWVcblxuICAgICAgICAgIGlmIChtZXRhdHlwZSA9PT0gJ2NoYXJTZXQnKSB7XG4gICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXVxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KClcbiAgICAgICAgICAgIGlmIChjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSA9IGNhdGVnb3JpZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNVbmlxdWVcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovXG5mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKFxuICBoZWFkRWxlbWVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgcHJvcHM6IFdpdGhJbkFtcE1vZGVcbikge1xuICByZXR1cm4gaGVhZEVsZW1lbnRzXG4gICAgLnJlZHVjZShcbiAgICAgIChsaXN0OiBSZWFjdC5SZWFjdENoaWxkW10sIGhlYWRFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgICAgICBjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShcbiAgICAgICAgICBoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKVxuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKVxuICAgIC5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pXG4gICAgLnJldmVyc2UoKVxuICAgIC5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSlcbiAgICAuZmlsdGVyKHVuaXF1ZSgpKVxuICAgIC5yZXZlcnNlKClcbiAgICAubWFwKChjOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFwcm9wcy5pbkFtcE1vZGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgICAgLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG4gICAgICAgICAgWydodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzcyddLnNvbWUoKHVybCkgPT5cbiAgICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybClcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0geyAuLi4oYy5wcm9wcyB8fCB7fSkgfVxuICAgICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ11cbiAgICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCB7IGtleSB9KVxuICAgIH0pXG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9cbmZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBhbXBTdGF0ZSA9IHVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KVxuICBjb25zdCBoZWFkTWFuYWdlciA9IHVzZUNvbnRleHQoSGVhZE1hbmFnZXJDb250ZXh0KVxuICByZXR1cm4gKFxuICAgIDxFZmZlY3RcbiAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlPXtyZWR1Y2VDb21wb25lbnRzfVxuICAgICAgaGVhZE1hbmFnZXI9e2hlYWRNYW5hZ2VyfVxuICAgICAgaW5BbXBNb2RlPXtpc0luQW1wTW9kZShhbXBTdGF0ZSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRWZmZWN0PlxuICApXG59XG5cbi8vIFRPRE86IFJlbW92ZSBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5IZWFkLnJld2luZCA9ICgpID0+IHt9XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG50eXBlIFN0YXRlID0gSlNYLkVsZW1lbnRbXSB8IHVuZGVmaW5lZFxuXG50eXBlIFNpZGVFZmZlY3RQcm9wcyA9IHtcbiAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6IDxUPihcbiAgICBjb21wb25lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgcHJvcHM6IFRcbiAgKSA9PiBTdGF0ZVxuICBoYW5kbGVTdGF0ZUNoYW5nZT86IChzdGF0ZTogU3RhdGUpID0+IHZvaWRcbiAgaGVhZE1hbmFnZXI6IGFueVxuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50PFNpZGVFZmZlY3RQcm9wcz4ge1xuICBwcml2YXRlIF9oYXNIZWFkTWFuYWdlcjogYm9vbGVhblxuXG4gIGVtaXRDaGFuZ2UgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQoXG4gICAgICAgIHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoXG4gICAgICAgICAgWy4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc10sXG4gICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuX2hhc0hlYWRNYW5hZ2VyID1cbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIgJiYgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXG5cbiAgICBpZiAoaXNTZXJ2ZXIgJiYgdGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1lZGlhLW5hdlwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgR2FtZXNcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5NZWRpYTwvYT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZXR0aW5nc1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVzZXJcIiBzcmM9XCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNDcuanBnXCIvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj5cbiAgICAgICAgICAgICAgNzowOSBBTVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbWUtbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lIGFjdGl2ZVwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9jYXRpb24tYXJyb3dcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgc3R5bGU9IHt7YmFja2dyb3VuZDogXCJ1cmwoJ2h0dHBzOi8vaS5yZWRkLml0LzhwdmRpMHBuZThhNTEucG5nJylcIixcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTpcImNvbnRhaW5cIiwgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsIFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuNSlcIiwgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgc3R5bGU9IHt7YmFja2dyb3VuZDogXCJ1cmwoJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhRVEVoVVRFeE1XRmhVWEdSZ2FHQmdYRnhvWEZ4Z2RHQjBZSFIwWEdCZ2FIU2dnR2hvbEhSMFlJVEVpSlNrdExqQXVGeUF6T0RNc055Z3RMaXNCQ2dvS0RnME9HaEFRR3kwbEhTVXRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TGYvQUFCRUlBUDBBeHdNQklnQUNFUUVERVFIL3hBQWNBQUFDQWdNQkFRQUFBQUFBQUFBQUFBQUZCZ01FQVFJSEFBai94QUJPRUFBQ0FRSUVBd1FFQ1FnSEJnWURBQUFCQWhFQUF3UVNJVEVGQmtFVElsRmhNbkdCa1FjVUkwSlNvYkd5MFNSVVlvS1NrOEh3VTNKem9zTGg0aFVXTkVPRDhTVXpZMlNqc3dnWFJQL0VBQmdCQUFNQkFRQUFBQUFBQUFBQUFBQUFBQUFCQXdJRS84UUFJeEVBQWdJREFRQURBQUlEQUFBQUFBQUFBQUVDRVFNU0lURWlRVkVUTWdSaGNmL2FBQXdEQVFBQ0VRTVJBRDhBYWVEY0pzR3haSnMyaVRidC93RExYNkk4cUoydUMyUDZDMSs3VDhLaDRHZmtMUDhBWlcvdWlqVmtWb1pVVGdsajgzcy91MC9DcGw0SmgvemV6KzZUOEt2TFVxMENzSGpnbUgvTjdQN3BQd3JVOEZ3LzV2Wi9kSitGRkJYaUtRV0IyNExoL3dBM3MvdWsvQ296d1d4K2IyZjNhZmhSZHlOcDE4T3VrZmlQZldBS1k3Qkk0Slkvb0xQN3RQd3FWT0M0Zjgzcy91ay9DaUpXdHhib0FvTHdYRC9tOW45MG40Vmk1d2pEL205bjkwbjRVUmZTb1NLUmtHdHdmRC9tOW45MG40VjRjR3NmbTluOTBuNFVTQzF1RXJRZ1llQ1lmODNzL3VrL0N0UndXeCtiMmYzU2ZoUmNyVVJwbVdVVjRIWVAvd0RQWi9kSitGZVBCY09OUGk5bjkwbjRVVXRHdENSSUVpVHNPcDlWQUE2OXdLeEgvRDJmM1NmaFZWdURXQi95TFg3dFB3bzM4WnRrNUJjUXQ5SE11YjNUTll1VzZTWTZBSjRSWS9vTFg3dFB3clJ1RDJQNkMxKzdUOEtNTmJxTmtyUXdLM0NMSDlCYS9kcCtGUk53bXgvUTJ2M2EvaFJlNGxWM0ZLamFGbm1qaHRrWVc2Ulp0ZzkzVUlvUHByNVY2clhOeC9KYnY2bjMwcjFaWUJUZ0IrUXMvd0JuYis2S05XcUZjQnRmazluK3l0L2RGR0xLVTBKa3Exdm1ySVNzRmFaZ3lqMXMxeW9EUXptWGk2NFhDM3NRMFJiUWtBOVcyVmZheEE5dEtnczV6ek56ZGN0Y1p0WWpYNG5aYzROMmtaY3pCV3V6NXFTaC93Q2pUOXp4eG01ZzhEZnhGcEE3b0JsQmtnWm1WY3hBM0NnejdLNTFpa3RYT0RmRkh0WW80a2czaXh3bDdYRU1TNTcyU05TU2srQm85eWJ6bWpjSnRYcjR6TGJkY1BpWkdhRkl5aTR3NnJsS0Z2MXFSb1orVXUydTVNUU1jTVZocmxvNkczYlJsdXl2b20ybzdzWndWYlVFRGZXQVhLZkc4VnhBM1hYR0N6ZHM0Z3ErRDdLM0F0S3dCRE15bTRXSXpkOEVETUlnVVA1WHd0dXh4aDE0VmNGekJYTERYTDZvM2FXTGR6dlpGVmhJREVoZTdNZ00zVFFET2JjWGhjU01OeERoejVPS3RjdHIyTnMvS3MydWRMMXJjWllJTGtBRUNESUlqSXpvSFA4QXhsOEpnN3R5MUp2RUZMSUFESE9RVElVZ3psVU04UWZRcTd5MXhkY1hoYk9KVGE0Z0pBNk1OR1gyTUNQWlFUaUJYSGNSTmxNVDJad1Z2TWV5TnBuTjI5S3NNdHhIRUlneWt4TTNvMDZyM3dkNDVjRGlzZHdydFZ1ZG16WGNOTEFsdTdMV3ROTTRoWlVScUhNQ21CZTVMNDFpdUlyMnlZeGJkMjNmaTlnemF0NVV0Qm9La2xlMXpGWmg1ak1JZ2F4YzR2eCs2L0ZHNGVNVDhUVVdWZTB3dDIzZSs3ZEFib0s1UnFNb0FKS25YcFN2ek5pTU5mZkNZL2hUaGVKWExxQnJDSHZ0bUJ6akVXeDZPVWlHWTZFVE02RUh1Zk1SdzdGL0dzTmpYU3hmdzJ0bDJPUnlHUU1yV2lmL0FEQm1sU2duVmVoZzBDSmZoRDR4ak1GdzIzZlcrdmJveUpjSXRvVXVGZ1piS3k5M1VTSWpjMXJ6OXhUSFlNWVZzTTV2Rml3dVdtdG9UZEZ0R3VNd0tnRlRsVnRGOG9FN3EzT2VKdmY3dDRZWXdrWWgzU0JjTVhHVlMrVmlEcVRreUVuZlVUcWFkK1llSzJCaStGTjI5cUd1WFdVNTFncStIdXFyQXpzV0lVSHFTQlRFWXZjMUxpZUYzc2JnN3BScmRwM2lGWW85dFN4dE9yQWovSWdnMVUrRVpMeWNKYStqczE5TFNxYmdBVndsMXJmYXNBZ0FYUUFTTmxuek5MdndpY3UzY0Y4WnhlQlg1SEVXN2x2RjJRTzZNNnNPMlVEb0NaOHBQUW1Pb1diNkMxYVJpUGxGQ2hUcUc3aFlySFh1aGpIZ0RUQkMvd0FENEp3dkdZU3krSHNXY3E1R1IwVlJkdHVtVm9aZ00yZVIzZ2QvT20yNDAxeVRtemw1dURsdUpjT2NwYkRMMitISm0yeXN3QXkrV1lnUnVNMGdqYXVsNEhHaTdhdDNWbkxjUkhFN3c0RENmZlFobHMxRTVyeHVWcTFNQ0M2S3JYS3MzS2d1Q21hUXU4My9BUEMzZjFQdnJYcXp6Z1B5UzcrcDk5YTlXR01ZT1g0K0wyUDdLMzkxYUxyRkNPQkorVDJQN0szOTBVWFFVMFRaUGJNMWwxcXNiSzdsUVQ1Z0d0L2k2SDVpL3NqOEtCR2hXbHptYmdOM0ZQWlF1aTRaTHFYTGlReHVYY21vUW4wUWs5SU93MUcxTWo0VlBvTCt5S2pPRlQ2Qy9zajhLWWpLelN0eTF5ZGV3ZVB4Rit4Y3QvRjhRd1o3TEsyWmRTU1ZZYVNDelFJMklIblRTdUZUNkMvc2lyRnJDcFBvTCt5UHdwTWFMU1d3TkFJOVdsS1BDK05ZbkhOZnVZVHNMTmkxY2EwbHk3YmE4OTlrOUpvVzRnUzNPZzFZbmZUYW0rMmdBMEFBOGhGSjNBT0Q0bmg1djJiZG9ZakRYTHIzYk9XNHFYTFJ1UVRiY1BBS2c3TUNUdnBXRFpGelR4N0Y0WEM0YTUrVGk4OTYxWnV5anZhQnVTQ3lmS0t3QUludkhZOUtJOHA4WHZYN3VLdFhSYmI0dTZvdCt5Q0xWM011WWdLek1ReWFCaG1PcG9YemZ3akZZbkM0WkRadG02dUl0WHJpaTRPekMyeXh5Qm5qTVNDQnRHaDJxM3kxd2k5Z3NUZlMyZ09CdkUzcllEQU5oN2pEdjI4aE1HMngxR1V3RDAxSnBpQjNMbk1lTHZtNHpYc0FoVEZuRGxEYXVMY3VLdHhGTEszeGd3eEJPVUZTSkExNjFhNHR4M0VEaW54SkxtRXQyL2l3eEMzTDFsM1lIdE96eWFYMEhpMDZlRWRhbzh0OEh4T0hXOEh3VnQ3bHpGdmZSMnVXejJhdTZzQ1NPOW1VQW1CMWpXcnZFT0QzanhZNHo0c3Q2eU1JTEFCZTNKYnRPMHpoWE8wU1BHZktnWnJ6THpGaWJObmh6MjJ3ek5pNzFteTdaSHVXcHZDUmR0UmNVbE5DUUNUSUkxSFdYL2JsK3ppN09FeFF0RTRnTWJONjBySXJHM0JlMjl0bVlxMlhZNWlESTA2Vlg1ajRKaWIxbmhvdDRkRmJEWW16ZWUwdHhRaUpaSkF0SVR1Y3BBQmlOT20xV2IzQnIrSngxakZYMVcxYXdxdjJOb1BuZDN1Q0dlNFFNcXFCRUFFbWRaRzFOQ0dJMEk1cDRCY3hWdTMyVjQyTHRtNnQyM2NDNWdHVU1zTXNpVklZZy94Mm9xOW9OdUFmV0FhbVhDSjlCZjJSK0ZhRUpYR2VYc1pqTFl3K0x2V0ZzRXFiZ3NXM0QzUXBrTG1kaUVFZ0hTVHBUT3RvS29WUkFBQUFHd0EwQXEyK0RUNkMvc2lxMXpESjlCZjJSU0dSaXNHdERoVitpdjdJcnpZWlBvTCt5S1pveTFSc0t5dHBSc0FENUFDdG5GQUM1eml2NUpkL1UrK3RZcVRuSC9oTHY2bjMwck5KZ01YQVYvSjdIOWxiKzR0RWdsUWNCc2o0dGgvN0cxOXhhSVpZcFdaRVhuYm5sZUhYTGFYY1BjWmJub1hGWkFoSWlWT1lqS1JJMzBnNzd3WTQ3eHhzSllXODFscmt0YlFvakxtelhDRlVMbWdOM2lCcDY2RmZDM3k5OGM0ZmNDaWJsbjVXMzRuSURtWDJwbTA4WXBjNUE0NGVKL0ViYlNmaVNtNWZtWWE2dnllSGtuYzVjOXoxcUtMRlIxTzJTUU13Z3dKRXpCOEo2MEo0bnpGWnM0dkRZUjU3VEVoOHUwRElKR2Irc1pBOHhSUFByWENlZlNjU2J2RkxSdkM3WXZyMkpOcTUyUXc5b2hGdUpkeVpHSnZTOFp0bVBoUXdSM2lLQmM1YzFMdzJ5dCs1WmU1YkxCU1VaUVZKbUpESFVHRHQ0VVI1YjRzbU13dG5FcHRkUU5HK1Z0bVg5VmdSN0tTL2g4WC9BTUsvNjlyN0hvWTBqb0hCTWNiOWkzZU5zMiswVU9GTEJpRllTc2xkSklnd1BHcmR4b0JORGVWMkF3T0ZKMEh4ZXlUT2tmSnJ2VnJFWE4vQ2tNVCtDYzgvR3NiZHdZdzdwY3M1dTBablRLdVVoWkVhdEpJaitGYmMyODhyZ0wxbTArSHVYRGYwdGxHU0N3SUJVNWlJTXN2bHI2NlFlVlRmSEhlSmZGbHNzMDNNM2JNNnJCdUxNRkZKbWF4OEo3NGs0M2hmeGxiQy9MSEwyTHUwOSt4T2JPcXgwMjg2QkhhckpKQUxES1lFaVpnK0U5YXA4eWNhdDRMQzNjVmRrcmJFd05DeEpBVlI1a2tDcjYxei93Q0U5a3hWeE1BL2JkbXRwNzl3MmJOMjlGd2hrdzZ1TFNzUU0zYU9RZCt6Rk5nam9PRXhLM2JhWGJaREk2cXlrYkZXQUlQdU5RY1J1TWx0M1ZDN0twSVFFS1dqV0FUb0Q0VDlWSUh3RThlYTdnM3dkMlJkd2paWVlFTmtZbUFRZFpWZzZ4MEdXdWk0MC9Kdi9WYjdEU1FNVStSZWIxNG10eTVic1BiUzJRcFoyVXl4RTVRQnJvSU1ueEcrc09DaXVXZi9BSTZwK1Ezei93QzRQLzEyNjZxQ05ZTXhvZkkrQityMzA3QVRPY2VkaGdiOW13Mkd1WERmMHRNaklBelNGeWtNUVFaWmQ5Tzl2dkI4QXdKRUdCSW1ZUFVUMXJuSHd6RC9BTVE0UC9iSC93Q3l4WFVHQW5YK1pwb0N1VW9MeFRqMXF6aXNQaFhuUGlNK1E2UU1nQkdiK3RxQjVpbUxMWEIvaEF4eHhLdGpyUnZackdKbkRrV3Jwc2l5Z1ZlMUYzSjJjdGRUTjZXeDhkS0d4bmFGdFZtNHRWK1h1S3JpOExaeENiWEVERUQ1cmJNdnNZRWV5cmppbUlXZWNsL0pMdjZuMzByTmI4NXg4VHUvcWZmU3ZVbU1iT0FmOExoLzdHMTl4YXZNYUg4QmI4bHcvd0RZMnZ1TFZwbWsxZ0RGdzBzY29jcld1SHJmVzFxTDE1cm13R1ZUNk5zZUtxSmoxbW1Zck5ZRnFLZGlCWEY4SmR1V2JpV3JvdE82bFJjS1o4azZFaGN5OTZOdGRERysxUjRibDVodzRZTFBiUHlQWTVqYmJJVmpMSnQ5cEpNZnBiNitWR3hiblNyQ3JBaWl3Rkw0TytVYnZEYkwyR3hJdjJ5MlpCMlJRb1Q2UW5PMHFZQmlCclBqVW53aGNwdnhQRHJoeGZXeWdjT3hOczNHWXFDQUIzMUFHcDhlbTFOVTYxbUtBRVRpWEptUHZZUDRrZUpXMXRaRnRrcGhDcmxFQUdVdDI1MElBblRYVWJHbTI1YkpFZUZYeWFpSzBJWnozbHprTzloK0lYc2NjVWptOW43UzJMSlFRekJ1NmUwTUVFRGNIU2ZHYWw1MTVGdVkrL2g3b3hLV2hoem1SVFpOeVdKVWtzZTBFcjNWMGp4MTEwZjRxUEpRSWpzcVlHYUNZMUlFQW5yQUpNQ2cvTG5BcnRpL2lyOTI4bDA0bGxZNWJSdHNnUVpWVE1ialprQzdDQnFXUFdqOWVGQUNOdzdrTzdaNHBjNGltS1JlMUo3U3lMQkNzclJJemRyT2FRR3pSNlVtSU1VNDhSc085cDB0c3F1eWtCbVV1b25TU29ZRStxUlZtYThLQU9mOG9jaFl6aDFwck9IeDluS3psem53aFl5UUYwUGJqU0FLWitVdUNYTUpoemF1M3ppTGh1WExqWFN1UXNiaGs5MlQ5dEc0cnhvR0kzUEhJMTNING5EWDF4U1doaGptdHFiQnVFdG1WaVdidEJJbFYwQUhYV3JGemx6RzNMK0h1MzhkYmEzWXVHNTJWdkRHMkhNRURNeHV0dEpqMTA0VnFTS0JBdmptRHVYYkZ5M1p1QzFjZFNvdUZjK1NkQ3dVTUphSmpYUXdkZHFGWWZsNWw0ZDhSTDIyUFltem03TmdtV0NvSnQ5cEpPWGZ2YW5YVGFtVmpVYlZvQk81RTVVdWNPc3ZZT0pGNjJXektPektGQ2ZTRTUybFRBTVJ2UGpSM0VOVnU2YW8zcWFBWGVjRCtTWGYxUHZwV0t4emtmeVM3K3A5OUs5UXdUSExndjhBd3VIL0FMRzE5eGFyWDhUa3hhSkF5M1VpWjFESm5PM2dRWTkxSlBLSEhybGl4YlJneldncXloOU5OQk9TZW42UHU4NGVKOE5iRmNUdHZadXJrYzJ5TGdaOHloRWs1WWdLM2RJQThkL0NscUNsWjFOVnJZMndldER1SDNMZ2kzZVlNOFNHQXk1bzBPbTArcnAwRlh1elBqTllvWk1pUldManhXdVkrMnRTRFRBM1V6cldIdkFDYWhZa0NxZHk1U1lGaDhWV2h4VlU3aDZ6WE9PWitiOFhoc1N0cnVSR2J1MjVWZ1pBR1ltWmtHUUFQV2FhWWpyVnE0ZXRVT084Y3Q0Vk05d25YUlZHck1mTHk4NnFjQzRzTVRZdDNsMmNiZUJHaEhzTTBxOFY3VEY0akVGWStRUFpxcGpYTEdjNjZhdFBzQXBTZXFOUmk1T2tYZjhBOWtJTGtQWllKOUlNQ1JxUnRHdTFPbUV4cVhFVzRqQmxZU0NPdGNONGdiaWtJMXFEdG1Pd2drNy9BRHVnOWxOSHdYOGM3N1lObTE3eklQQWpkUjVSOW5uU2pLd2xCeE9uZHJXeXZVTmJDdG1TMEdyek5WWjdrVkMrS0FvQXRGcTFtcW54cXBBODBBU2xxMGMxZ0xTVHpielcxdTUyVnM1U3JFRWlHWmpBRVFSb0FaOHlRUE9rNUpEVVd4b3grS1MyaGQyQ3FOeWRoMEgyaXFSeEt1b2RDR1ZnQ3BCa0VIVUVId2l1YTNyeTNFQkRNc2xneWxqbFk5UzRQcFBwb3huclRmd1BpeTM3S3hvNmdCbDAwalNSR21VeDBwUnlKczFLRFNLL043Zmt0MzlYNzYxNm8rYlQrUzNmMWZ2clhxbzJUU0lNWFp5OWtSczlpeTN0Q0tyZlZsUHRyM0Q4U3kzVWRUcXBtRHMzVFh3TVRyUlBpK0VaY0ZoYm8xS3BhSDZyb29QMWhhRjJMUllLMDk3ekVHdDQzY2FaUEl0WldoKzRaeEZNUUpVOTVkR1Era2g4L0k5RHNhSXpGY3l2RTJyNjNWYzIySzZPSU1RUUNHQjBaUFJCWHpuUWdVOWNNNHd0dzluY0FXNkJNZk5jZlNROVI0amNlclV6bEN1bTR6VWdpYnRZZkZDbzNhZHFySER0TlRzcFJ2Y3ZUVU1pcHhaUDhpdGx3bldnQ2hqN3VTMDdqZFZKRTdUSFh5cjU1NGx6SmNlKzF3ZDRrNmw0SmIyRFFSdHA0RGF1NS9DQmpyZGpDWFVkNGU4aklnQWt5d2lZOEJ2WHo1bHRvQmxUT2RaWnAxOVN6RzUwM3JVVXhIWGZnZzRzb3cyS041bFMxYUtQMXlvSHpURXlkMTI4Nmd0OGRVTStKdG8rUys1STIyYVRMYTZieDdLNWd0d2xrUmdRcnZiVWdDQkJaUVRIakUweDhqY1FRSzZYRGxUMGdONEVhZytPbzk5R1ZVamVJTjh6OHlZVjA3clE1MlVnanBycWQ5YUc4bThYdDRiRnBpM1M0VmUyVVlETEtFa0RPMllpUkFPZzExSHFxSG5DOWJacmFpMlZWWkFZcVF4bmFSc1BPbFBGNHJLbW0yaWoxOTQ3K29pczR0VGVWdStuMC9ZNGhiY2tKY1J5c1RsWUdKMm53cVZyaEZmTHZDK0p1aFVxNVFnZ2pXTmpJMDJPb0ZkbzVVNTROOEMzZHQvS2FETUNBaEhpZFRyVkhFZ09ONjhUcFVDMm1KMTBxL1pZZXlwSVVtc1dPaXJhdzNuVjFXQTBxUUlLMEtVV0FQNWl4WFo0YTg0TUhJd1grc1JBK3V1TzUyWmx1U2N4ZjBvbVJ2b041L0VlUXJxZlBDSDRxUnZMTDdPdjhQcnJrM0ZNT1d0Mnl1d2tHUEVrbWZxK3FvNUgyaStKY0xlSVcxY2NBbFpYVmxHWWVlcytYaHA0MWY1T3ZXTFdJWkJNM080aG1SM1pKQUFKZ0gvQ0tCNGpodHg3bGhWNzkyNmlzbzJtQ3drbnl5bVRUanl6eVY4WHVtOWVkWGNEdUFBd3BPN0dldlFlMzJFRTdDYlJhNXZUOGx1L3EvZld2VnZ6Z1B5UzcrcDk5YTlWckloM0dFZjdMVHlzMlQ3aGJKK3FsN0JrTW0xR0xpRThOVWYrM1UvczI4MytHaEhEazd1bnI5K2xVd3NqblZORWZIclI3RU1oSVpHR284SDBqMVNWUDZ0UzhLdUMvYWduS1FBeUdZWVI0RUdRVk9uL0FHcXppOEdMZ1ZQcHFRZW0vVDdmYlNyZHhGMndXZ1NWZnZUb0pFL1VRV2Z3SGFEd3F0azQ5UjBIZ1hHQ1l0NGlBOGdMYzBDdVRzckRaYm4xR1JHOFV3czRGSVdGeFVSY0drRVp3ZDFJZ2d4NWFIMUdtKzFkTnhRdzl2a2FqT0ZlRm9TdjB0OXFEUXptZmlGMnhobnZXUXBaQkpEVEJIV0k2MWNSZk90T0lZRkx0c3JkdDlvc0U1TjVqcEd4UGhXRWJQbi9BSXp4MXNUZE55OHhjNVNJUGRFblFBQWFSdnBRdWN6SFBsM01BU0ZqempjZTM3YTl4aTBjelJiWlZKTUEvTjhGSjZzTnFyVzhWSmdRU0NaNndQb3g3NmJuZmc5YTlMTVRjR1ZYZGdRd1ZWTGFLWkpnRHVpZkdoUzQwMnJ3WUtRcW1DcmI1VHVwQjEwL2dLZStVdVAyTEZ1OGpoVWNzTzhkaXVVREtUMGc1anI5UFNsVG5ER1dyMkpVMnRnb0ROcUF4a25TZHdKaWZPaHBOZWdwTmMvM1lVNW54eUZWdWhSSlFkNk5TQ082WjhUMVBqU3JpN0pGbTBUOC9NL1hYcHAwamVpUEVjU2pZSzBBc01HN050TkQyWUpCbmN5R1hmYkthZzR5dzdMQ0VMRTJ2RWJqS3BJOEp5ejdhbmpqcnczT1czU2xaV0padHVrK1BzcGw1ZnVoVk9YdWtnZ0ZqQW54MU80ODZBMkpjYWROK2sxTmlDVDNnRDBnRFFSNWc5ZDZzbjBrZDArRFRtRDR5cHNFRW0ydnBhWlltSTJrbW5yc1kycmlud1AyRGN4WXVMZEt3cEpDeDNnUG1uMy9BRkh5STduTlptbFkweWtvYzFNaXg1MVBYaUt4UXdCemlrNFZ6cktrTUk4akdvOElKcm1OeHNxRklCenRDNnhzTTJiMmFmdFYyRGpWck5oN3FpSktOdnRzZDY0dmlTeEltUXdFS1BDRFA0TlBtUENwNUVXeFBnNWNnWXRqYWUwNGpzMjdwME9qeVNCMTNCUHRwaXVnbXVlOHNjWUl4ZHBBdXR6dXRHMnM5UElpZlZwWFNTaEJxc0hhc25sVk1WK2NFakNYWi9RKytsWXF6em9UOFR1NmZRKytsWXJUSm9zNHNrY1BTUHpZZTBsRVVEKzlTL2djV1R0cG9EL0o2VmZ4bDF2aUthLzhpMlBWbHRzLytFVUJ3RjBrZ3pwbDJQcnJXSWwvaytvWTdPSzdpdVRFSC9LaG5IOEk2bnRsRWhoRHFOVG9aVndQRlQ3d2F6aHNRWWdqU2ZXS0lwak8waHVtbGRGV1FqSXBjRWRHVU9naEdFTXYwR1VhaitxUnQvblIzZ0dJeU9iVTZkUDhQMVN2c0ZLN1lWckYxbXRDVWIwa0grSHo2ajNkYUw0WEZDVXVMcU9oK3NTUElpS1RWcWlxZmJIVzBoM2lwNFBxcTFiWUVBallpUjdhZ3gxMVVScmpiS3BZK3dUWE5aMFVjaCtGWGlLakVDemJ0U3lpYnBLNkhQQkRMcE9nM1pUcVpCMUduTVZ4dHJQOG5hSU1HU0NPdnpvT3ZocFArYkx4ekdmR0xqWGJqUXpFbVBQYVBLTnZVS1NjVFloeWVvTzlRVlNsWmVTY1ZRUmUrcWFrYjdkZmVhaXN0MnBPWXdaTWVRMmp5MTFxaGVKalU2R0FEN05xaXd0aUxneXRLK0lsZFRwRTFRa2doaWNLNlpyYlNWREZnSWdBeEczaVIvQ3B1TXVqTGhnZ2pKYWh2WDFrK01nKytocjRsdFZMRmpFU1NUN05kYWp1NGhwQTAzQVBuRlA4c1A4QWdTc1lZYVIzc3czMzJreEhxcWppY2NXaFNOQm9SNmpXK0Q0aVJJQTlYMmFWY3U0RW83cmRSa2Y1d1lGV1VrQmhJT28wSVB0cmRtYUxYSjkrL2J4Vm5zU1RlN1JjdHNHTXgraXgyVlNKQm5vVFgxSXJlVmZLUEJyMXRMeU5sYTRWZEdnUUIzV0JQZUozZ2I5Sm5wWDAvd0FGNHhieE5oTDlvakt3bUpCS25xclFTTXdPaDE2VVNkaHJSY2ZFUjBOVlh4cmZSTmJ2aU5hbXNXUTRrMWlnQitJeHlvak0rd0JrZVBsN2RxNVBqOExsVUVtU1RMVCtsNERwb0ZFVTY4N2NURTlna2QzMDQyemRGOW5YejlWSk9LdUZyWkpIZGtrZnBlZnZGU203ZlBvNk1hcGQrejNKNkFZKzArNEFZajloaFhTMzRsckdSajdLNXZ5VmVBeGxza2JKYyt3L2pYUnIyTm5hcjRZM0U1ODh2a0JPYjhjVGhib0NFQTVQdnJXYXE4MTNDY0xkL1YrK3RlcmNvMHljWmNNcGRKNFZaWTduRFRKbWRMVnExMTgyTkxXQXY2ZWNmeG92eGk0RXdGZ0J0N05nWlBBWE8vRy9RSVBlS1dNUGZDZ1NaM0gyMFE0TEtyR0ZNUk9reE92bFJQaDl3WkNQUDdhVlV4dzBnK3lkYU5ZUERYbUFLb3dIaVFWSGp1MERhYXNwSWpvRjcxMGJ6cUt6aGdESTBtWjlmV3FPRTRaY0pra2ErZjhBbFRMdzdnU25VM0FwUDZNajN5S0hNcEdERGRuSHJhd3d1M0doRVNXUGtvNkRxZkt1VGN6L0FBaWZIcHNvSHNXMDhYR2E0ZEQ2S25WUkJpSjNud2h3K0U1ZXp3VmpEQUJqY3VBVHBwa0JlUUNEcnQ0ZXV1S2NhNFVETEtZSzlKNitFOWV0Y3Mybnc2b0t1bXVONGlSSWxaSFhTZmJYVFBncitENGdManNhcHphTlp0TnBsNmk3Y0hqMVZUdHVkWWhJK0RUbFFjUXhRRnk0TGFXU2x3NlNYSVlmSktaRUVoVzExaU5xK2krT2NOWEUyTHRobUtpNmpJU3U0ekFpUk9ock1ZMEU1Ykh6ZngvQkxmeEYyNmpMYnR2ZGNxSW1GTE4zdlVZSkE4d0tFM2VHTXk1RUZzbFNDU1lCRXlDdjFheFBzcXpqTFp0NGdvclpsUjJVSGFRcFlCdjJsQi9XRlgrV3JoTGtFa0tXMmt5RkNpQ0ZVaVdPOGVSMzJxVzBqcmxqaG92MEM4UjRRUWN3ZE0wUXdIYUhVYmtFSkJvYjhYT2NHUUJPMFA0LzFLYitONEVac3ZhUG1mYURJVWVSeTk4a2FrYVpScVNkd0Q0bnc5QUFFSVp2MFdMR1lZeURtMUFJRXlxem1FQWROUmxaQ1VhQnRyRDltNFk2Z0VNUVJsQmd6bDNCanBwWGJQaFM0UGJ1NE00dFVIYUlMZXUyWkhaUkRId1hObW5wQjhhNVcyQXQyckM1bEp1Q1dhWUFKSUVEcklHM3ZQcitndVhzU2x6aDlsckF6cWJDNUZlRE1MR1Y0MDNFSDIxVlUvQ1VsclZuemZpc1JrV0FkeEFDaUJwdXhIaDRUL2tDdkkvRld3OTIzZExFSm5CTW5LSW1HMzAybldoTHdibDNPdlptVEZ1RG9DZi9BQ3g0UUR1ZkRlcHJONDNHN1BMQWhpcXJKQTAwV1NTWSt2OEFqUHcyK24wbGhYUWdQcVF3QkI2RUhVSDNWVDQzekwyYVpMUHBIU2Q4dm1QT2ttMXpZLzhBcy9ERUF5eXJiTGJ4RWpNL3FDKzArdXF2QjhRMklRc1crY3lsdGlZT3krSGhOYWUwdjZpaW94L3NUdXVjeDBIcG4vQ0Q5dFZ1SVh3WlVEUWFHTnZWN3Z0cTg5K0pTMkJFWlNlZzlYaXdOQ2NZNEF5ZzdVU2hyQmhHZTAwMGJja0pPTEhnTGJuN28valhScllFeEZJZndmMnhudjNYWUtxcXF5eEFIZUpKMVBxSHZwa3hISHNNbTk5VC9VbC91ZzFmQy9nUXpMNUUvT0RBWVc2QUI4eWYyMHIxTHZNUE5kcHNMY1JMYmtuTDNtaFJveW56TmVwU2FzVVl0SWh3aXJjdDI4ME5DVzkvSlIrTkVjSmhyU2svSlc5TlJLSzNyM0JwV3dHWkVYY0FLbnZLZy9qVjYvaTNKMDBCalVlSW9pNHZsam5Ldm9MY3hZb05ZS0JFVmsxRElvVTZFRFVBUlJtN2pteENvN0gwbEVhUUF3N3cwSHJhbG00M2RLdHE3RHZkZGY1aXM4THh4RnNBblFiZnEvanFLZGQ0UFpVT25ENElIbjA4Q09ucnJmam1LRnF6dE9kaGJCbUFDMHdTZW0wZTJoV0Q0cXNud1AyLzVpUHJvcmY0alpGcGplSzluSGV6YWlQVkd2bFdoZW9RdWFlSjVyT0Vzc1NiaU96dDF5NWU0SjFrenJBOHRUcHFrY2N4Z0dhQWVzekJKUG5HbmhwdHJWcmlYRTh6dGMwQk80RW4yZDR6dDQxZDVGNGF1S3g0emlVdElidVhUdkVNb1VIeEFKbjJDZDZoSnVlUjhPdlNNTUsrWGZ3YlBnZzVFWVhFeDJKQVZnR05xMGZTWE1BQTdlQmpQM2ZNR3V3WWhXVldaUm1ZQWtMTVppQm9KNlR0U05pZUtNakhzMktCVHZwdU45OWgrRksvR2ZoUXhIWkZiVGhHa2dNYmMzQ0J2STlGZkxRbnJwMTA2VHBFWXdsSVI4ZGlyUWR1MHlOTnhqR1psWk5aeVRNeXNBZDZkdHE5Z2JOa3NTdHh3ZW96ZzdTZHdvRzgvWFM3aTdiZWtWY3pwSklIdkFrK3VxZDVtK2RFQWQwRFZUT2tqZWRLai9HMTZYbE5lSWVyOXdaWEdybHREbWFNMzJUUWZpQ1g3UUJ5S0Jwb2c3UmhyRU1OQVBDZGQ2aHg3WGV6czNRekFNQUpCQUFNYkdPc2h0Nm40UHhxODl3aHlHaFNaOUZqbGd4cHAwUFRwUzFycG5lK0ZiRUxjTm01MjRZT3JyQUlnWlQxR2drYjYxM0xrTGpOdTN3ekNLNTc0dEFaVTFNQW1OdXNRVDVrMXcxK0pyMnhXR3lrRlRIUTdnZ1R1RDRlTk4vSlhGc3RsVlpwTFpvRVN3WlRxb1BnVklZVDROVzQzUmxwTmx2NFJlWExiM254bGhMaGRpbWUwSU9ib3pyb1NwaU5BRHR0U0ZlbVE0N29UWHVqS0JKK2UyNThOZkN1bzNMek42Unlqd0dySDI3MXovanZEc2w2NkRKVWpPc3JFWmlkQ0ZCR2huVTZ4VGxqa2xiQ000ZUxwQStMbTJMUU1nTXpMQmtkNklBOXBQdnJvRmhTTGEyOVZWVkMvcE5BM0o2VHZYTytCMmU4b0lJeXNDR2pTUVFjdm5NVTlYcitZQXVZVTZoUjE5ZlUrcXE0bzg0UnlPdlRlN2UrYmIwQTB6ZEI2dkdoZUlpQ0ZNK0o4VDR6MXF6ZGFScjNVOFBIMStYbFZMRlBFeHRzS2xuYThSVEFuNnlwYUN3Wkd2OEFPMVFwY2l0MlNzOW5wVzFOUlZHWEZ0a0hFYm5jTUh3NitZcjFROFFYdU43UHRyMU55c1ZVTi9EUXIyN2FIV0VReE9zUnNlcEV6RlNXYlZzWHNtYlhmS1IwMy9IM1VJNFRlN29CK2dxeityc1BmVTl2R0FYODNRWlFUUGtaK28xejBWcFA2RFBHRGJTNHVVa0J4S2dDUklPb0pqUUF4VmZFWDhpeVlNQ1lHNDY2YmU2aFdKYkkxdEEwaGM1a25ZTVI1ajdhMHhheUhkU1NTb1dmcXJYM3dWS3VvUDRER0JRTGhrQWVNQS9VVFd2TVdLK1RkVjFWa0JPb0hVVDA5UjlsVThJNk5iTnR5TmRkTlBDb3hqQm5NTkFVQlJHczYrbzBMWWZMcWhkNHZ3N0QyZTdjeFJhNzg3SW9aVjhwaWpuSldEUmM5MEdXOUZibmlqWlNSRTVmU0c0SFRldDdtRlZnMlVBQXZiZTRDRDhwbElHVXlQUklqVFFiK05YOGFodFhycUJSQ3NRdmhsQjdzZXlLcEhETnJnbm1oYitqZmk1N1JSYnpFVEpKVVN4QThQSW5yNVVvNDdoeUlTQU1wSFhadmZURmN4dmg2WFU3ZTZsM2ptTWpiVTZUV0ZWbEhMNDBMT0pPVTVaL3F0NStCOFIrTll3V0h6OVI1aHRqNXo4MCtkUVlsODh6VWxyRmo1d2h2cERyL1dIOGF2R1M4WnpOZmFMRjhocktNckNWSkJUcU84U0Q2djRWcHdoc3Q5Q2RRV0FQaGxjNVcvdXNhMGZDNWpLYUh5MzlsYThSUmtWU3cxSTBNUWRJMThEVTNIOE5xUmppQ2tYbUVRY3gwSFFucDc2TmNOeFJOdHJWcTEyakY4NnNDWnRuWUV4c1lHOGpjMVI1aEtIRTNEcXN0TVJPKy92TTBUNVBVQzVjSVlpQUFSdE9ZNmU2SzFCWElVM1NIZkNYeWx0RklsZ3FobU9ra0RVKytnSE1lRTdROXAyaEI3cWtLdVlFVEFqWGZXaXpnWlFSdkpCayswSDNmWlcvREx0dGJxbThKUUF0dG1HZ2dFanlKQjlZcnBuVFZIUEZOT3hQdzJEYzNtdG9Ua1FybnprQWpxUVJHcE1kS1pqY0ExOUp2NTYxRmNLWmlWSllFa2c3NmRQWkVWZ3NUdHBVZEZIN0tPYlptNloxWStvZEtpc1djN2dIelB1aitKSHVyVnpGRWVHV0dERXg4MEQza2tqN1BmVW5HM1p2YW8wUi93Q3l6NGZWVVZ6aHJ6Nk1VeTJiTFJXYm1GWnZENjZIRnNudlFsOFR3ZVcwNVBsMDh4WHFOOGY0Y3dzdVNSODM3eTE2bG9hVTdGakM0aUZXTXVnR3NId0ZaR0pFekkxOGpXMXJDZ292OVVmWldsM0JnYXp2NXpWZHhWWmNzZDdVYXh2b1RBcVQ0MTBKRVQ5SHcxL2hWamgxaFRZSWhUMUxFRWxmUzZ5STJFZXVxSXNTRDExRzNUZVo4T2xMK1EwOGRVeXhldk91ckk2cWRpVjBQbk1iVmhic2JFMVB4bmpSdU5BZHlBRG9ZeTk3WUNGOFBPb3JPRVBZdGUzVVhGdDZBekxEUXowSFRYeG9oTmhPQ0N2THJHNDdvSkpOc3hKMEJCRUVucDY2eHpEWmUyNm02b0RGVlgwZ1NTaWdkTnpBQnFibDZFejNHMFdJbVlQakE2bVRsMnBTNDd4MThSZFZVanM3WkpWVm5wdVNTQURNQWFRQk9rN21qbnpwSlI2V3plYU50UnYvQUQ0SFNnVjFpN2xaMkoxcXhoTVl6TVE1Q3pCQVBsdUo2SGI2NnJZMnkxdG1sbHpIV0JJTUhZa3RIMVRYRmRTYU82cmpZTHZKTEdOcWtzY0x1T0pXRDZ6QnJhMG1obWozRDN6SU9oR2g2YmY5eFYwck9kZ1Y3TDI0RENQYlAyVkhqcm9kUXBtQk9rN1ViNG5aeklUMVdTUFlLWHd4QlVrYWFINjZkMEJiNDNaVTNtWlQxMUI4ZXYxMVB3dkVDMWVCQjBZNVdPdzEyMDljZStxZU11Qm1ZcUlFeVB4L2pXbUZUTmRVRVNyR0Q3anI3TjU4cWFkQ2ZUb0Zwd2FNOE1ZSlp1TjlMdWdIckFPZzhkVDlWQitENDViUzNNeHQ2cEFOeGxVYmpRRjRBSjlkUzhSVHNzUGFkN2xxOFNESlVpNGlnTVRBY0RRcUFOdnBkZEszL0pUTWFXaVRCOE5aNENqVHhqUWUzMVVOeFRBRUtEM2lRUEVpVEV4NVZkNGZpcnB4dHBiYk15S3JLb0I3dWl0TEFIVFV5ZmJRckNNZ0xkcU13ekhNSWc1ZGRqNHpCOWdyRStJMUZXeVI0dDRnS1dka2s2dUlPblh5RWlmVlJ2aDF3bVNBVG1Zd1BjQjlsTFF2QUF0a1VNeW5OSGd3aUI3SzM0UGR1cElTRDRaam9QUC9BQ3JHM0J1SFJxdDhXWldLUGJLa2JUMWd4VW4rMEQ2Vkx5M2ZsQzUxTWJCV0hxR3Y4NjBVd2podHlRZG9OVWhKVjMwbGtoVHRlR09ONGhtdzdtTkRsKzh0ZXIzR0UvSjdtdjBmdkxYcUplaEJjQjJFc1psdHJCOUZkWUIrYUlHcEhXTlpvbi91azdFQVhMY24wZmxMUm1mby9LVUk0UGlXWTJsTUsyVUJEcVZuU0NWQkUrOGV1dXNEbEMrQ3Z5MkNCVWtyK1NYdEozajhzOEt3NUdvd3IwUVc1YmVNdmEyWUFFZCsxSUkwTEU5cHIzcDZhYlNTS0Y4U3c0cy9JdExPN1FjcFVxd1lCczRaV0lJQ3YxNmpydlROeHpqT0ZzWFRidlkvQW00Q1VaVXdPS3VaY3BncTJURkVDQ05Sdk02YjBBNXJMMnI0aTVhdUFNcnFiS3Npc3JXYlJYS3JPNXl3eGs1anVLbTBXc2g0aGdWYTJIekVNRkFLeDFXRjE4TmhwOWxOZkpiV1d3ZUl0dkFCbFludmFvTzhKNjZFMGszRzdvWXlaTTVwOUtlc2JlenlvaHdEakF3eTNIWVpnd2tENlRDUUU5YlRHKzVGYnhMdE16bGJhSy9QTjBoYkdEdytyejJqbVI2T3lsb0JFRXlmWVBHaDJCNFl0aFlFRmlJSjlYUWE2Q3JqV0dWamVhRGN1RUZ6MEIyQ2o5QlIzUlBRVnVnSldhMnZTVDR1QUhHWVRLR1lxR0hrZFI1elVkN0ZrMndwWmlBUFJPZ0g4aWpsMjNNZzdIZWZBME14UEFzb0RDU2tiRHZNSTBreVJOWmxEN0tReXZ3RG9zNkNqM0JySUt2cE1TZDRtQUpqeFBXcVZuRGtEUUFlclUrMmluRFVpUjQrSFFpaVB0QkxpczF1WlkwOE50WnBYZXl5a3JPZ09rL3pwVG8yR0JtZCttdmg0K05CK000YUFyUUoyOWY4L3dBYXBranl5V1BKMmdLdG85UVBjMzQxdmdSOHFzVDE4dWhxV3k1LzcxWTRVQWJva3hJSUc1bnoyOHZycVVYMHZOVkZoSzBoNkVnOURvWUkySW5TUVlOZXNjS3hkN0VNN1h1Mk4wZktTY2hhTm04SkhqNFQ0bWl0bTBJTWZidDAxMDhZRlRkbTJtVnNwQkdvK3VxeVhMT2VNdTBhOERSaGZPc0cxYkk4d1FJalgxeFdsN2hneXN4S3dOUkprbmI3Wm9weExIMlFXdUpJdVhFVldHWHV3Smh3ZkdBcW4rcUtFWDVZZ3g0ZTRmejl0VHlPNm9yQlZaNjFoTGE1V0lra2JRZnc4S0w0UGcxeTZBYkZwN3U4a0pDZ2lJR1k2VDVUVTNMT0VTOWlMRmxsSlZtT2FONEFKSTlXbXZXRFRiajdmeHBtUzFZeEdKdFd5VkJTOHVGd3lsZENsb0FnM1NDSUxHUk02OUJOSXBZb1dlRTNMVEUzN055M0ErY295dC9VT3F6NVZYd2xzRWhnTnV1bnUwcGx2WEh3VnN1b3ZQaHdWWEVZWEVRejJ3MnhCQktzcGc1WFF4SWd5WmdWamNKMkYyNGdhYkRaYmxrOVNsMFNDZlZxUFpXaFg5R25IN1ErSzNDUDBmdkxYcXh4bDV3YkdaMFRydjNsMXIxYlpORkxsOVVXMGcwek4yWjI4TW40bWxybW5MaDhSalZ1WGIzeDZ6aWxPRnVsM1k5bVN6UVNTWUlVMjJuY3pHb21tRGhWd1pMUk1EUzJaSmlJaWFiZVkrWFV4SEU3dDlNUmhoaDhUaEhzWHlicTU4eEJDdXEvT0lLMlRxUjZKckxOSVZPWXJOeHVKWDdXRVcxZVhpMkdSa0xObFNTc200ckg1eW0zY2FOKytPb2lvT040QTRPN2J3OTBoMnRKYnRzUk1TTE5tY3M3Z2JDZWdwMzRKeVpocmE0RTN1SW85ekJOY0tOYmEyZ1lYR0RkbStabUpVSE1OSTBhTktWZmhKdksrT3Vzakt5NWwxVWdnL0pXZW9wQTFZR3VGVzBWakEyV0pqL0tzV0dBM1A0R3NZSUxyR3JFTWZWNC9WWGkwSFlHa2hzSzN5V3R4QTJCMkhrZnJpb0lCSkFFNit2b0tsd2pOMmJNRmtUcC9FUjVmeHJGbTJkU3NpVDFCL21LcXV0RUpjVElWdE9BU05CNUVTUDQxSll0QXgzZ2VtczZmVlZsYklHcEUrZW9Idm1wR0kyeXdmUCtQalZVam5jMkI4WmdzclpTM2RPMGF3UENRS2l0UXA4WTZiVmI0ZzVCQUJqUXpHMy9BSHFrZ0Vnc1RsbldOL1o1MUdTcVhEc2k3aXJETnUzYks1cE1ucGwwOXBuZjFDbHptTzlMd0p5Z2FiSDN4dlJtMWpGQnlBTUZXWmRqdnQwamFyL0dNQUxsaG1Dak9BRHNCb0RyT25nYXBKN1JPZUMwbjA1M2FYeXJQWitIak5XbXNhK05RM0VQai9Hb0haWXg4c202NnRMTVZCRUgzbitBbzFpcmNEdXJMYlJvVDdZRlNjbjJVT0RWdDhwWU5QUTV0dDlvSTk5RVV0ZDdNeGtEcU5RQjA5V2xVaytKRUlyNU5nVzd3UnpaWnpCWWF3RHRBTUNQUHg5VlFXclpVVEowSFNESHNvN2lyaXN2ZGt6b1RIUWZ6RkRYdGc3YUgxYisycHRGVXkzeVRmakdXem1JQkRwbUlBeWwxS3FmMmlQZlRaeHV4ZkZ1L2c4S1NsMjJ1SEZ0RmJJeldBc04yWmthOXBtekhjZ0FlRktPQzRGZkp1S3R0cFZzcmFyb1JKSTM2QUUweFBkdTNsUzFpc0U5ODI1eVhGYnM3eTVUQjcya21SRWFUNTBrTTA0cmV1MitEMjhKaVN6WXk4UWdWaUd1bFJkekxKQk05MEtKT3NrZFpvUnpHcXE5dkRUSncrSHMybUkyeklETUhyQk1leXJxc2JhaS9oTUM2czhBWWk2M2EzQm03c29wMFNmUkQrZFZMSExtSkRHYkxGOVR1cE9zeVRydk0vWE5NRURNVmVQeEoxSjFFZFAwMXIxVk9QWENMVnhDSUlnRWVZWUExNm5ZcUljQzJXMmg4RlhkY3dtQnVzaVI0aVJwUkhFY2JaYnIzR1d3VGNRS1ZHRkpRQUZ5SS9LUVZIZU1nSFdCcnBTcmgrWXdxcU95MlVEMDk0QS9SclhGOHdnNmkxSGxuMCs3UUFjczh4WmV3R1cwUll5NUp3WTF5Mlhzd3grTmF5SHpIOUpWUFNLaHhXS0Z5NHp3b0xrc2N0dnNsMFMyZ2hlMGZVNUpKbmM3VXN2eFlFazluR3V3YlFmVlZ4ZVlCL1JkSTlML0FFMGhoRzIrVW54Z2ozNzFMQk93b0l2R3U4UGsvd0M5di9kcTgvTWFqYXhINi84QXBvQU84SnZNc3dldXhHbEV4ZlNPOERQa2V2OEFENjZUMTVqQUJQWSt2djZlN0xWU3p6R3d1c1FrS2ZtZ2pvSUd1WGZicFdyTXVLWS9waUdQL0xBV2Q1eWtlMDcreWhYRnNXd2JvRThlcFByNkNnQzg1TXFrZG1UbUozZlFkSUF5NlZVdThlSnRnRkpJNjV2OVA4eFJzMFpjRXd2bWxwSm1kei9DdDJ3dWM3NlNQcTlWQk1MeHlCcmJuOWFQOE5Xdjk1b0FBdEFmcmY2YXkyMzAya01HQ3c0VUVCUkV3SjExL0RlczRuR01yUW9HMCtXNTIwanA3aFNxM01UWmdTczVkdTl0OVZSNHZtRm1CWEtRSlB6dkdkTnFha3djVS9RdjJWb0U1NTExRUQ3STNOVWNYaFk3dzI5bzk0cXZZNDNraUZZNmZPZWZkM2ROL3FyTnpqY3NSMmU4L085ZjZQMVVjRHFPajhCNE1iQ09vUGRkc3dCa2tBaGRET2t5S3YzWkEwUHQ2MHAydmhEN29uRGF3TmUwOHZORFdqYys2ejhYOW5hNmZjcFgram9aYmVITUUvejdxb1hjTVFaRkRidlA0STB3MGY4QVUvMFZXUE9vL29QL0FKUDlGTVIwRWNmdEtia1c3ZzdZdXp6a2FHZFNzSUNzRlJKUGVCcmE3eDYwN1MxdDh2ZWxKUmtmTTJhSERLZC9FUVJyRmM0dWM1QS84aVArcC9vcU04NWYraC84bitta0ErNGZqbHNNTHd0UDJtUkxSR1lkbUZYS0NWRVRPVmRCTUFtYXAzK0tUZXVYU2doa3ZLQXFxcCtWREFGb0FraWRUU1llYi84QTBQNy9BUHByUWMzYi9JLzMvd0RUVEFLY1Z3cEZoeWRQUmpYOUlhYUd2VUI0anpMMmx0bDdLSmpYUE94QitqWHFSby8vMlE9PScpXCIsXG4gICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6XCJjb3ZlclwiLCBcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIiwgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIlxuICAgICAgICAgICAgIHN0eWxlPSB7e2JhY2tncm91bmQ6IFwidXJsKCdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4TVRFaFVTRWhJVkZSVVhGUmNZR1JjWEdCY1lGeGdZR0JnV0Z4c1lGUmNZSFNnZ0dCb2xIUmNZSWpFaEpTa3JMaTR1R0I4ek9ETXROeWd0TGlzQkNnb0tEZzBPR3hBUUd5MGxJQ1l0TFMwdExTMHRMUzB0TURVdExTMHRMeTB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdkxTMHRMUzB0TFMwdExmL0FBQkVJQUxjQkV3TUJFUUFDRVFFREVRSC94QUFjQUFBQkJRRUJBUUFBQUFBQUFBQUFBQUFBQWdNRUJRWUhBUWoveEFCTkVBQUNBUUlEQlFRRkJ3Z0ZDd1VBQUFBQkFnTUFFUVFTSVFVVE1VRlJCaUpoY1FjeWdaR2hGRUpTWXJIQjBTTlRjb0tTaytId002TzAwL0VWRmpSRVZITjBnNkt5MGhjMVE4TEQvOFFBR3dFQUFnTUJBUUVBQUFBQUFBQUFBQUFBQUFNQkFnUUZCZ2YveEFBNkVRQUNBUUlFQWdnRkFnWUNBZ01BQUFBQUFRSURFUVFTSVRFRlFSTWlVV0Z4a2FIUk1vR3h3ZkFVNFFZVkl6TkNVbkx4Z3FJMFEyTC8yZ0FNQXdFQUFoRURFUUEvQU9iVjdNeWhRQk53T3pIbFV1Q2lJcENsNUhDTG1JdmxITm10cllBMkhHMXhTcWxhTk5wTzkreEEybHVXamRqOFFJbG5MNGZkT1NxdnZiS3pDOXdDUmJrZVBROUt5ejRsUWc3U3V2a1BvWWFyaVA3U3plQXZZblliRzRyZWJxTlFZcE4yNGR3cERXQnQ0aXhHbzBwbFRIVWFkcnZkWFZoZVNSWm4wVTdUL054ZnZSK0ZLL21lSDcvTDl3eVNNVkloVWxXQkRBa0VIUWdnMklJNUVFV3JvSnBxNktsMTJhN0tZbkhiejVNcUhkNWMyWmd2clpyV3Z4OVUxbnI0cW5RdG52cVNvdDdFL2Ezbzd4K0hqM3NxUmhjeUxwSUNieU9zYTZXK2t3cFZQaUZHYnNyK1hZRGcwVFAvQUVwMm4rYmkvZWo4S3AvTThQMytYN2s5SElQL0FFcDJuK2JpL2VqOEtQNXBoKy95L2NPamtWZTErd20wTU1wZVRETVVHcGFNcklBT3BDRWtEeElwMVBHMEtqc3BhOStoRGkwWndHdFJVc2RnYkVteGsyNHc2aG55bHRUWUJWdGNrOHRTQjdSU3ExZUZHT2FleEtWeTYydjZPOGZob1hubGpUSkdMdGxjTVFMZ0UydHdGN253QnJQVDRoUnFTVUZlNzdpemcwWlN0cFFtNFBaYnlBRUZGQjRGMnRmaUw2QW0xd1JlMXRDS3oxc1ZTby9HeHRLaFVxdTFPTGI3bGN2TU4yZWdVRGVUbzdkQVhDRDI1Ym40VmpmRktMMmt2TmU1ZVhEc2U5cVV2Sms4WWFGUlpHaEhrR3Y3OHV0Ui9NYUhPWHF2Y1gvS2NjOTZjdkprYkY3TWhrR3NrUVAwaG1COXQxQUk4NnN1SjRkZjVMelh1WGp3dkhML0FPdVhreWpuMkpJaElZcXRtSUJPWTVyV3ZiS3A0WEY3OVJXbWVNcFJpcE42Zkw3dEVVc1BWcXljSVJiYTVXMUV4N0hkaUFIUWs4clNqNG1PMUsvbWVHLzI5VjdtaDhOeGFWM1Rma1FvSUdac29HdXBOOUFvSEVzVHdBNW10anFSeTV1WEx2OEFBeHlnNHl5dmNsRFpqZlRUM1RmM2RZM3hMRHAyY3ZWZTVzWERjVzFkVTM1QzIyTkpsejNRcmV4TjJVQURpeExxdmRCc0w5U0J4TlhwNCtqVWVXTHUvUDZNVlZ3ZGVrcnppMTRrZjVNdjU2TCt0L3U2MFozL0FLdjA5elBZUGt5L25vdjYzKzdxYzcvMWZwN2hZUGt5L25vdjYzKzdvenYvQUZmcDdoWVJQaHlvQnVyS2JnTXB1TGkxd1FRQ0RxT0lIR3BqTlBUNmdFR0dMQXRtVlZCdG1hOXMzSEtMQWttMnVnMEZyOFJSS2FUdHUrNExEc1dCekVLc3NSSjBBL0thKzlMVlIxYks3aS9UM0N4RUJwcEFVQUZBQlFCN2FyNVVBV295b0RhZGcrelh5N2RSTVdXTlo4UzhqTHhDaUxCQUFFaXdKSkE5OWNuaUZYb1ozVzlsOVdVbFM2UnBQdk41Mi83T0xGZ0k0NFpUdThNTTI2WWdzd1pncGUvRzZsejRXSjhLODNpVzUza3owM0FLc2FOYkpiNHRFK3puYjVsajZNZU9NLzNrSDlrdzliYTM5cWwveCs3T1hYL3ZUOFdiaXN3bzQxNloreU9SdjhvUXIzV0lFNEhKam9zdnQwVStPVTh6WGM0WGliLzBaL0wyRlZJOHlUNkF2OWM4NFA4QTlxcnhoV2NQbUZJMm5wSi8wRS84UmhQN1REWFB3ZjhBZCtVdm95OHRqVVZsTEdRMmw2U05ud1RQQkxJNGVOc3JXaWtZQWp4VUcvc3JiVDRmWHFRVTRyUjk2S3VhVHNhckM0aFpFV1JHREk2aGxZY0dWaGNFZUJCckcwMDJtV1BudjBzYkpqdyswWFdKUXF5UnBObEhBTTVkV3NPVnloYjlZMTZiaHMzVW9MTnlkdm9JbXJNNkY2RmV6KzV3cllweDM4UmJMNFJMZkwrMGJ0NGpMMHJsOFVyNTZ2UnJhUDE1K3hlbXJLNTBPZUZYVmtZQXF3S2tIZ1FSWWcreXVhblozUXcrWXUwblo5OExqSk1JQVNRLzVNbjV5TnFoOGRORDRnMTYzRDFvMWFLcWVmM00wbFpscGkxVldLSjZxV1FIcmtBVy90dFhpZUtWblVydGRuMzFaOUEvaCtncVdFVStjdGZZQkJvQ1dVWEZ4Zk5lMXlMNkE4d2ZkV1NuUW5VK0ZYOERvMXNkU291MDNibHVsOVdqMFFYQklkRFlYUHJjTGdjMTZrZStyeXdkYUt1NHZ5ZnNLanhURHlrb3FTMTAzajltTkltWWhSeEpBOStsWmtqZktTaW5KOGlkdFNXOWw1WFovd0JwaUI3MFZEN2EzNGgydzhJOXJiK1d5KzV4T0hVazhYVnFkaWpINTJ1eGpCcWUrd3QzWTIxSnNCZnUzSjVBQXNiK0ZacUZOMUpxS04rT3JScFU3eWVudHI5YkZiaDhPTFdIcTNCSklzWkdHb1pnZUNnK3F2dE92RHQ4UzRqWmREU2UyamZaM0w3djViYjhEZy9CM0tYNm5FTGZWTDF1L3NUbFZRcGtrTmtIc0xFY2g4TG5sZnFSWERwVXBWWktNVmR2MVBSWW5FcWxGNjJ0dSt6OSt4Y3lxMnJqekpHQ2RBOGhJSEFCSXhsV3c2WGtmOW5ycWZhOE80ZkhETjMxbFpYK2ZKSHovaVhFWGlwV2pwRmJkcjczM3Nyc1BCbnphZ0JSY2szc0JjTHlCUEZoeXJwVGFqOHptQ3pobC9QUi93Qlovd0NGUm0vL0FDL1QzQVJpY09VZGtKQktteHRlMStZMTZjUFpWb05TaXBJQ1pGQU55dVkyVE0wakVjYmQyTkFvK2tXRWdITFFrOEtUSjJxTzIreStyOHRDZVJFeEUrY2pRS3FpeXFPQ2pqYnhKNGtuVW5XblJwcGU1Rnh6QWFGMytqRTU5ckRkRDR5QSt5cVZJcXlYYTE3L0FHSlJGdFRjcUlDMUdWQUZxTXFBTFVaVUI3VWdGQUhWZlFsaThyYnN2WVNQaVNGc0xPeVI0SWpXMTdoV2MySGowcmhjWGplU2ZjdnJJdkI5YTM1eU4xdC9ZRFQ0ck1HQWprd2tzTWdKUDBsS0ZCeUlacjM4UEd1REtGMzhqcjRiRnFqUnRiVlRVbDk3a1gwZVljeHlZNk5pQ1VuaFVrY0xyaFlBYmVHbGJxNnRTcGY4ZnV6RFVubnFTa3ViTDd0RHR5UENKSEpMcEcweVJzM0pjOTdNZkFFQy9nU2VWS3BVWlZXMUhlMS9JbzNZbjR2REpMRzBjaWgwZFNyS2RRVklzUWZaUzR5Y1dtdDBTWWYwYmRtM3dHSngwQnVVTzRhSno4Nk03NjF6OUljRDVYNWl1aGpzU3E4SVM1NjM5Q2tGWnN0dlNUL29KLzRqQ2YybUdrWVArNzhwZlJreTJOUldVc1ozRzlodG55eU5OTGhVZDNiTXhKZlVucU0xcTB3eGxlRWNzWk5JcmxSZkpHRVVLaWdCVnNxaXdBQUZnQnlBNVZuYnU3c3NjQTJ2cy9GYlEyeVlNUkdZbmQxREx4M2VIUVh1ckQxaGx2WnVCWnVYQWVrcFZLZUh3ZWVEdjd2ODhoRFRjck03OUhHc2FCVkFWRVVBRGdGVlJiM0FDdk5OdHU0OG9Pdy9hMlBhRWNycFlidVowc0R4UzVNYi9yTGIyZzFweE9HbFFraythVDl5c1pYTTc2WDloNW8weDBZL0tROXh5T083WTZIOVZqLzFHdGZESzFwT2s5bjlSZGFOMWM1Zkh0V2I4OUorMjM0MTBKY013MG0yNCtyR3g0cGlZUlVVMVpkeTloOTFadTlLeEZ3T04ya1ljaUFUdzhTUU9sK0ZVWDZiQlJianAyNi9ua2l5L1Y4UWxHRDYxdHJKSzNrRFM2WlZBVmVZNGsyK20zUHlGaDRWNS9IY1hsV1RoRGJ0OWx5K3A2M2huOFB4dzhsVnF1OGx5V3k5eDZOREdRN2FNTlZUNXhiNXR4ODBYc2RkVGJTdWJRb1RxU3RGYS9tNTFjWGk2VWFidStyemZMd1hhK1dnakZrWjJBNEtjZzhrQVFmQlJUY2ZwVVZOZjRwTDd2NmkrRUxOUWRWN3prNWViMDlCdk9jcFcvZGExeHlPVzVGK3RyMWtqT1VkVXpvenBRbmJNcmlvRUJKTGNGVXNRT0pDNmtEMmEzNUFIandxYWNNOHNvdkVWZWpoZi9wZC93Q2N5aTJudEF5dDBVYUtvNEFjdjU4ZXByM1BEZUhSd3NjMHZqZnAzSStlOFM0azhUTExINEY1dDlyKzNZTXhZMlZSbFdXUlIwVjJBOXdOZEYwNE4zYVhrY3U0NnJ6VEFneU95QWdrdTdaRjZGaXhzRDBIRThxcStqcHZSYTl5MUE4RXFSK29NN2ZUWWQwZm9SbmorazM3SW95eW44V2k3RjkzN2VaSTNGaDNrdTk3Qy9la2MyVzUxMWJtMnQ3QzVQU3JTbkdHbm9pQnlYR01wQWlkMVZWQ0FxV1F0WWxpV0FQTm1ZZ2NnUUtyR21tcnpTdTNjbS9ZSzJyS3hLQm1aaXNTQWxpU2J0ZVE2bnB2TGV5b29wSk5yYTc5dnNReEVZdEM1K2s2SjdBR2RoNzkyYXM5YWlYWW0vdDdnUmFZQVVBRkFCUUFVQUZBRnhnWkpGZ2hlSE1IVEZZaGxLZ2tnaUxCYTZWejhWbGRTMHRzcStyRVY3Nk5IVHRzOW9mbDJ6eTQza0dMdzluZEJuUnN0MVNSbE9oTWRtdWVsZ0R5djVyRjBIVFYwOU9UUFFjQ3hFSlltTUpwYTZXYTh2VXV2UmovQUszL0FMeUQreVllbjF2N1ZML2o5MlpLL3dEZW40c1k5TnYvQUxkL3o0Ly9BTFZwNFYvOGhlREVWTmlONkh1MTIvaStSek5lYUZlNFNkWGlGZ1BObDBCOExIclZ1SjRUbzU5SkhaK2pJcHl1ckhTSzVZd3kvcEovMEUvOFJoUDdURFdyQi8zZmxMNk1yTFkxRlpTeHlQdExqdHZqRnpERENmY0NRN3UwVUJYTHBheFpMa2VacnM0ZU9CZEtQU1d6YzlXS2xudm9kQzdIeTR4c0toeDZxczkydUJiMWI5M01GSkFhM0cxYzNFS2txalZMNFJrYjIxTEk0R1BlaWZJTjRFTVlmbmtKREZiOUxnR2xabmx5OGlSODFVRHdXb0FydTBlTXc4V0hrT0tZQ0ZsS05lNXpaZ1JsQUdwSjZEV21VbEp5V1RjTFgwUG4rTkZRbmQzT3VramdaN1gwS29MaEQ0Nm5wbHJWak9OSkxMQ3pmcCsvMDhUdDhQOEE0Ym5QcjRqcXJzNS9zZWdhNm5pZFNkVDRrOVRYbmExYXBXbG1tN25zS0dHcFllR1dsR3krdml5WThrYS8wYmtINlpUdmZxNjl6MmErTmFjTkNoZTlTZGw2L1JwSE54ZFRHTlBMU3Y4QU5aVjQ4MzZJcFJ0YUdPWmMwaGV6QW5UbURmcjFyMFZQSFlhbEJ3cHhzdTM4MVBGNGw0aXZQTlZsZDluWjRja1M0SkF3QkJ1T3RlV3hMY3FzcFBtMno2QncrcFNsaDRxbTdwSkwwSjBzQTNha0R2S3VadkZYWWhUN082UDF4MG82R1RwNTF5MytaVll0UnhQUlNmeFh0LzQydjUzOUNQRklWWU1PUnY1K0I4RHdwS2RuZEcycEJUaTR2bVZPMk5tYnRzeWF4dHF2VUE2Z0g3TDlRUlgwRGgyTFdJb3FUMzJaOHc0aFFkREVTZy9GRERRcEdTSk8rNE5qR3A3cWtjcEhIRWo2Sy90QTZWcXpTbjhPaTdmWmU1bDJHTVJpV2Uxem9QVlVDeXJmNktqUWVmRTh5YXZHQ2p0KzVGeVRnbGdDNXBHSmZrbVU1QjRzVklMZVF0NW5oUzZuU1h0RmFkdDlTVlljM1N6T3E3KzVKQ3FOMlZWYjhnQWJLdlBRZU5Wek9uRnZMNjZodVFNUEZuWlVIejJWUitzUVB2cDhubGkzMkVDOGJNSGtkeHdaaVIramZ1ajNXcXRPT1dDUU1jeEdrVVM5YzduOVpzZytFWHhxSWF6ay9CZmY3Z1JhWUFVQUZBQlFBVUFGQUdwN0g3U1dKZlhqRHE4eHl5T0l3eVRKQXZkZGhsdURDZERiMWhiZ2E1bVBvU25KTkp0V1cydXpmdVE3OGpSVDdYam1sdTgyR2hRd1ltTmlNVEU1YmV4aktNcS9YUkRvSzV0VENWSFNjRkdUYnR5WS9DVlhTeEVLcjJUdVhubzc3VjRLUDVXWmNUSEdHbVRKdkdDRjFTQ0tMT0FkYkVvYW5FWU9zb1U0cUxkbzYyMTVzWk9xcDFKVDdXMkk5TFBhWEI0akE3dURGUXl2dm96bFJ3eHNNMXpZY3FidzdEMWFkZk5PTFNzOTBMbTFZNUpzemFFbUhtam5pYkxKR3daVDhDRDFCQklQZ1RYY3EwNDFJT0V0bUpUc2ZRZXl2U0hzK1dGSkh4VVVUTW9MUnlPb1pHNXFRZkhuekd0ZVhxWUN2R1Rpb3Q5NlJvVTB5cjdkOXFjRkxoTWtXS2hkdC9obXNyZ25LdUlpWmpZY2dvSjlsV3c5R3JUcVhsRnJSOHU1ZzJtalEvNTY3Ty8yM0QvdkYvR3Mvd0NucS82dnlKdWcvd0E5dG5mN2JoLzNpMVA2V3Qvby9JTXlJYy9wRzJhcktneEtzV1lDNmc1QjlabklDZ0R6cGl3R0lhdmxaR2RFbzl1Tm0vN2RoLzNpL2pWZjBlSS8wZmt3ekx0T09lbEh0T01YalB5TW1hR0pRaUZUM1dKc3pzQ09PdGgrcFhkNGRoZWlwWG10WDJpcHl1ekp3U3ZlK2R0UHJIalc2VUk3V1F0dG5TKzAzYWNZN0I0TlE2YndFdk9wZEZJZEYzWXVHWUd6Rm1ZZVZlVngySG5RaFVTVytpOE56dThEY1pZcU1wZjRwdjdHWGVBZ0VreDJHdjhBU1JmYzFjSG9aOWg3ZDR5a2xmWHlmc1NwTm5rWVk0eUo0WjBWTStVRnpleHNWSUZyRUhpTDArR0d0ckk0R0w0L21qbG9KcDlyK3hvK3dtMUVrS0pKZzRJcGl1YTRqSHFpM3JaMXV2RzR0Y0VhZ25XMm1NSXJrY0t0ak1SVVhXcVNhOFRQZWxyc2ZIR3Z5cUxkbzE3dWk1VkRBNmxsVVdGd1R5NDM2MHd5eGJaaDlpN1NaYklRTFg4dFBxOHIwbXJTVXR6cFlMSDFNTTd4MjVvMWI0MExLQ0JkY3FxUnd1dVFLdzh6cjdhN2ZDOElwNFNjWmY1UDZJcHhYR1A5UlRxUWVxVi9OdC9Td3M0VTM3cklSeU84akZ4eU5pMXg1R3ZOVnNMVnBUY0d0ajJXSDRqUnJVMU5jKzVrekJvQmx6dEgzR3ZiZVJuTXVyWlRadE84T0orbWE2ZkM2czZUZE5yU1J3UDRnb1FyeFZXbnV0WHBiNi9taG1jZnNkME9qUmxUd0ptaDl4dStwcjE4YXF0YXo4bjdIam91KzVGK1F2MWkvZndmM2xUMHE3L0oreGF3ZklYNnhmdjRQN3lqcFYzK1Q5Z3NPNGFFeGxuWm85RWUyV1NKeVdaU2kyVkdKMExYdmJTMVZuTFBhS1QzWEpydkpTRzltZXZlNmdoWEtsbVZSbnlOa3NXSUFPWXFkVHlxMWI0Ylc1cjZrSTgrUU45S0w5L0Ivd0NkSFNMc2ZrL1lMQnRCaG5BQkJDb2lBZ2dqdW9BMWlOQ00yWTM4YUtTNnQzemJZTWpVd0FvQUtBQ2dBb0FLQUNnQW9BS0FDZ0FvQTlSYm1xemRrQ1Z4L0tUd0JQbFhQbEdUWXk2UWhnUnhGVnl5anVndUp2VFl5SUM5UFVpRHdpbVJaQW1tRUVsUllWVW94Sk5TV1E5aE1ZSW16RlF4c1F0eVJadUlJc1JyeTF1TmRRYTVIR0tqalNVVnUyYXNMRE5LN05TZTFycElza0N4d0VvQklWUlFYT2x3VGJsWUN2TnVldWh0VkRUVXZZTzJVTE1yeVFBdUZzSEI1Nitzdk1hOWV0V3pvVTZNa1FOczlvNDhlclJQR29rQ25nd3l1QnJhNXRrYTE3TjdEY0UwWHVHUncxT1o0N0JiczNCdWg0RzFqNU1PVERnUjlvcGtkU3N0QzZ3TTJlTUhwM1Q5MS81NVYzT0YxWFowbnkxUm5ySlBySWtnMTJET0t6VkZpQjNLR0JWdUI5NFBVVkRGdlRWRkhpc09ZMktuMkhrUjFGWFR1TWk3b1pxU3dVQUZBQlFBVUFGQUJRQVVBRkFCUUFVQUZBQlFBVUFGQUFCZlFhay96cFFRYWZabXhZNGJTWXhncFBDTGkzNjRIMmY0VmxxVkhQU0F0emIwaVRjVGpVWTJqeTI1QWFmQ29qVGFXb3JJOTJWRXlnM3VPZHVGUEdyUWc0ckNXMUh1cGJwcDdGNHo3U0VhcFpyY1lGTVRJRnhMYzB4TWhpM2FwUlN3bGVJdVFOZUo0RHp0UzY5WlVvT1RHUlYzWXNNVkpEbFRORkRkZUJqbGRnNTZzamNMYWNkUE92S1Y2dFd2SzhtZEduR01FVlJuTjduVzVwWFJhRGVsVnl4dzh0dWVoSUh2UFB3clBsdTdEMjFhNWV6N0RCTGlSWWNnVzZ0ZHN4NGFYVWpKZTl3N0tWMHRycGRpNnBtYnVaWEZNRnpJQUNEcGNqcHdQbldtblN6ZFl6MWFpajFSL1pTMlUrSkZkZkFVVjBqbTF0c1puTHEySnRkZ1dlMEVDMGFnaG9leEVBbFRMODRhcWZ1UGdhcHM3aXZoZHpPc3BCc1JZaW1qanlna0tBQ2dBb0FLQUNnQW9BS0FDZ0FvQUtBQ2dBb0FWR2hZaFFMa2tBRHFUUTNZaHV4dHNGSGhjRW1iU1djRFZ1UVBST25ueCt5c011a3F2WFNJdk01YUl6cjRvelNsM2JpYm5wVG9TV3kyUTdMa2pvV0RTeGdBWkwvV0IrOGFWWktUMXVaOHMzekg0cHhhd1BrVDBwY29zcTAwUnNVYjhLdEhUY2xGUk5FT2xxYm94eWtSV1dxNUxiRngyTVdIblZraWpkMklKcXhKNFZ2VktsT05SV2tTTXZIYmhYRnFZWnhrNHN2MGxqMkZMa1VpclN5eDBHMFo1cGFsaUllQWF1Vm1lOFRxdU9sbU9zeDRYSkE0YTNBOHVsTWhETUtxU1VTS0lkNDNFRDI2MTI4Tmc1S05qajFaNTVYMko2dzJGclYxYWRPTk9PVkVacm5vRk1DNTRhQUFVQU9SdVFiMUJWcTQxdGJDaHh2VTRqMWg5OVJGMjBaU0R5dkt5cmd3enY2aU8vNktsdnNGWGNrdDJOdWh4dG5URGpESit3MzRWR2VQYVJuajJqRWtiTDZ5bGZNRWZiVms3a3BwaWFDUW9BS0FDZ0FvQUtBQ2dBb0FLQUNnQzMyTHNXV1Vod01xYTJZOCtJN281NjBxZFdNZEJWU3FvYUY5L2tRSkN5dDNuWTNKSHpSeUErMmtLcmVYY0xkZHVTYUtyL051YXdaQmNHLzBiamw4N1QyMHVTZ252WTBLc21TNU5ra05tZXlrL05RNmUzcWFjcWk1Q1hVc3JJOGZEQWU2cHp0bGMxeURqR3R3cGtSa1N1YVUweXd5eHJPeS9aUkpJR3htSnVJZ1NJMEJzWldCc1NUeENBNmFha2c5TmVUeERpRG92SlQzK2cybFR6Ymlma2F1MWtoVEtXc3FoUVdZblFCYjYxd1AxbUlsSytkblQ2Q2xHTnJhbTEyWDZMWU11ZkVxUzUvK09OeXFMNE13MVkrVmg1OGEyUTRqaVlxemw2R09wR20zMVVNYmI5SGVDaVRPQTZua003VzAxSkpZbXdBODZyVjR6aUtVYnRwL0l0U293bTdXTUwyaDJiQ2tjWWlXejk1MjFKT1ZnTEEzNEVCUWJjcm1vaHhHbzUvMW1ucHlMeXdQU1JjcWEwUlJRdzhENDFPS3hDZDBtTXdtRWtyTm90cHRudGxVMk92RFN1WlRtNHZWRzJxb3U2VDJJR043Z0k0bmhmWGowMTZmYlhwdUhZUk5LdEw1STVHSXFmNElySzdKbEFHZ2dzY0JpcjkxdVBJL2RVTkVORXhoVUVDS0N4NWVnQnlHVWc2VkRSVnh1WCtCMm1jb0RjdEJhczlTbHpSa25UMXVpUzA1TjdXUFR4cGFpdVl1eDZJNytzUGQvT3RGN2JFWHRzVjJMMkRDMXpiS2VxMkZ2WU5EN3F2R3JKRFkxcEl5Mk0yYThkMnRtUytqamg3UnlyVkdhZWhyak5QVG1RNnNYQ2dBb0FLQUNnQW9BS0FISUlDeDBJSFVzYkFWRGtrUVgrNHhSQVNKckxZQVpYK2J5MXJEV1VudFpDODFKTzh0eS8yQnZnU2NUNnFvRkZ5Q1NSek5pZmpWYWxzcVVkeGNuVHZkQzhYdHhZd1FwcVk0ZHkxWkVGUGtVVXUxeXgxclFxS1Jmb2lNK1B2VitqUlBSa09iRlpxc28yTHFOaVBCRG5kVUh6bUF2MHVlTlZyVkZUZzV2a2hzVmQyTjN0ZmJQY1NDTVdqalVLQU9GZ0xXcncxV3RLcE50N3M3RkhESlJ1YWYwWTdQRXBiRnN1aUV4eER4dDMzODljby9XcGtJdGFzVGlHbzlWZk0yN1lhZmVzNG5YZGtBQ05vcjViY1NIRGdtNTZnK0Z1ZHpLUjlyWVV1bG1aQzRCc01oc2JpeERDN2FHa1lpbDBrYkxjYlJxWkpYT1l0MldsTHRhS1JBYml4VzRGN2cydXdOdGRLNTBmMU1YOEZ6dVBGVVhESzJoMkhzUTdNTHJJb0hBQkxEdzFKcTE4UzIrb1UvVzBvd3NyRnJ0RHNyaWszY2tVZTlSUlo0d1ZXYndhTWs1RzhWTmowUEt0ME9rY2RVa3prVG5GdmNvNXRnWUhHS3p4WWhCaUxrdERJKzVuQkhkWldpZTJVZ2pqYTErZXRkZkI0K3ZTdEdwYkw0R1N0QzZ2RGN5K0o3TDJ2bGtzUnljZmVQd3J2UXhLa3JvdzlNNHUwa1ZtSTJITW56Y3c2b2IvRGo4S2Nxc1dYVmFESzRpeHNkRDhhWU1KK0V4bDdLM0hnRDE4RFVOQllsazFCQWcwRmhPYW9Kc1NZSnFHTGxFbjRlY2puY1ZTVWJpSlJ1VzhNd0l1RFdhVVdtWjJyTWpUeTd4dDJEcHhZK0hUMjFlS3lyTXk2V1ZabVNtQXRhd3RhMXVWcVgzaTlkekpiYjJVRU9lUDFPWStqNWVGYTZkUytqTmxLcGZSN2xQVFI0VUFGQUJRQVVBRkFFckJRc3hDcUN4SnNBT05JcTlwS2FTdXpRNEYyaWJkeWFDM0lnOGVQRGhVTlpsb1pxaVUxbWllWTNFTU9lbFdqRkJDS1pUVFRFMUxrYWtyQ0tzZ0V0VmlCQkZBRXpZMFJNb3R4MXNCMU9uMzF5dU0xSEhDdExkdEkxNEdLbFd1OWtybDN0TFp6eGdGenFlSTZWNU5kUnBzN1ZPYXEzakV1T3ovYXJFSmhoSGgzampFRVR1d0lVdTdieFNRTTF4M3Q2QU5OT3RhcE5wbVRvSXQzbHpORDJUN1dZckZ5bEJJb2pqT1o1R1JSYUdOY3BZOEFIbGt6TjBSVU9sNmhOaXF0R01GZHJmWXI4ZDI3bGR5R0RpSjFMeDdsMFNUZDNlelB2RnNNMGNieUR2YUxhL0dxdTcwdU9vMDRRV2JLbSsvVXNkaFQ0UW8ySStXNHFKYzZJV21LUmplT3VjSm10WXNCb1JmUTFTTk8zTmpLK0prK3IwY2ZsYzFzdXlJNVNzbThsekJiTElqV3VwMTB0M2Rlb0d1bE5jYjZuUGpYbEJPTmxic3QrTWV3ZUV4Q09Cdmc4ZDlkNERuQXR3QjVueEpGdWxDVFFUblRrdEkyWml2U0RqQlBpUkFmVmhJUG5JUmUvc1ZyRHphcVRTazdEYUxsVGptWE1ncGhSNWlyS2NvN01VNHA3b2g3VjJheWdTTHF2TVYyTUZqN3ZKVStUT2ZYd3FTdkR5SU9Fa1J6M2xVK2FnNmUydXBOT094ejVKeExMRDRhQVNLMjZRT3ZlVWhRQ09JdUxEenBNbk54M0xRcVNXNWsrMEVJam1ZTHdQZUE2WDRqMzNyWlJrM0JYTmRKNW9sYVhwdHhsaE42Z2tYRzFxa3ExY2xMSnpGQXRvbVliRjIwTjlhcEtGeFVvWEpNTXFvTzczaVRjbm1hVzA1UFVYSk9UMUpBeGdIZGRlUEFpcVpPYUs1Tk5CaWV4MEJCdU9ITFhuNVZlUGVUSHZNcHRMQ2J1UXJ5NGp5L2hXaU1ybzF3bG1WeUxWaTRVQUZBQlFBVUFYejdmWVFyRkNnaVcxaVY5WTlidDRuV3NOWlpIZDZzaU5OTjNaR3dFNVc1NDM5OU9wSjVkU2FrYmxpWlE2Z1V5MWhGc3J1TVM0R3d2VUpwbDFWNUVTVzNDcmpFTU5RU050UmNEby9aL1l5WVRDcmlaVnZNK3FnL011RGxGdkkzUGo1VjVqaWVLNldkdVNOZUhqTDRWektEYXVMTFppeHVUZXVCT3BtbWtlbnd1RlZPbTVGajJlMkFUaHJUVExHazI1WmtCSlowVnhKbGNDMlhRV0d1bWR0T0ZiSEpKM3VjNlNrMnNxZWhPaDNlRzJkaU1LczY3K2RtTHVWZFVZT3dEQUZBeFQ4bmNEU3dKdlZlbWl0eTM2R3RVbXBXdWw0WE01dExBdWQ1T0ZTWmk0c0lIM2loQXQ4cFZUbUtXRU1ObVhnam13dUtoVFQ1bG5TbkZwU2kxNG9sNGZiY0Rxa00xMWd3MGNnM1JER1hFelNCdzB2ZHltSjJ6cUFXdnJNUnFlRjA3aVowbkZ0cDNiOUJuQjlyWm9DSkkySWtueEJjcWgvSjdxSkdnaWhWVHdWbkJXOWdiUmc4YlZOOUNycFJrN2N2emJ4WjBEc3YyOWFZTXM4VmlzYXVKRXRsY0Vzb2JMY2xNeFJpQmZoYWpwTGJpWllOUytCNjluM005MjB4S3JpNUQ5TlkzSFQxUXArS21sVG5hUStqaHBUcHJ1MEtRYmVLV0M4S2JUcDFhaXZDSlNyQ2pUZHB5MUwvczl0ZFppWTIrZHc4NmhYVHl2UXoxYWVWWm82b3JzYmdqRk1RUFZQRHc2MTZMQllucGFXV1c2T1BqS2FqMWxzdzJreElXUmZXUVdJSE5lSVAyMXJwcld6NW1TTFRWbVpyYk0rZHdmcWl0RUk1VlkxMEk1WWtBbXJEandHZ0JZTldSREhFZWdxMGV1Q2RSUUNkaElrWWM2QXNtT3BqVzYzODZpeUt1a2lmZ3NXQzFyV3VlUEd4UDNYcWtvNkNaMDJsY2k3ZWp6Sm0rai9oL1BsVnFlaE5MUW9LYVBDZ2tLQUNnQW9BdE1JSWhHTTl5ZGZkYy9iU1oyNWxldmZRVU1RblQrRkNuSHRMWlgyamtHTEFxYnA4eXNvTmk4WHRMTUxEUVZYTkdKRUtOaXJMa21rOUkyeDlndlRJeUlKMnhNTnZaNDBJdU13SkhVRFVnKzYzdHBHTHJkSFJsSkY0UnZKRzY3UzQ4c1FnTndCOGE4ZlZrN0hhd05GT1Z6RzdZa3NqZVJwR0NwNXF0K1MxTzdqWjVLQ1MzZW5tYTNaZXlwNWxScjl5eTJ0MHNCYTlFWVNucUxxNHFqUXZHMnBkYmQycC9rNkZYa2p1ck1GQVlMSUNiRS9SQkhEamV0S2pKYUpIRmxXcFR2S1VuOHJvZ2JHMndtTWhFOHV6SUFDNUFJRFhOdVlBVW1xelZuWnhRekN5bktOMVZhN2l6bGx3cTVYR0g3eUc2a28xMEk1cVdVRVd2Um5pdGtYNkN0TjJsTDZHRnhlQmppa2lud3pFN2h3MldRYnhyWGlRQUxidmhWRWpXNGt0MXFzYXFZK3BncWlqcXJydStwcE5pZ0pnV1pFeTVtZGlwOWFPTE81aVY3NmdLam5RMnRmVFc0TnBQcTZDS01mNnNYTGJrWlBibUthVjFadENJd3A4d3pYKzJ1cnduQ3JFUWNtOVVZT09ZbDRPcGtpdEhxVjZXdnJYUXhhcllhSDlIYm5vY25CdWhpcC8xOStXcFpkbnBza3Vwc2VYalhGcnZwTFZlMDYwWTVJdWxiYjZHMDIweXZEdlBuTFkvRUw5OWFlSFMvcnBkcHpzWEgrbXpLeVlvamdhOUdvSE1VQ2oyaEpkemFycnNObE5XaVJnS2tZRnFDRDBWSUFUVWdLV1FnMUJEU1pJRExJTEhROGorTlEwTDFqcWhwOEtSeHQ1aXBTTEtkeGNEWlR4cVdpSks1S2FKblVnOTBFZTArUXF0MGhWMUhZenROSEJRU0ZBQlFBQ29lcUFmdmV1ZlVoTnZVWW1lV3BhamxKQzlRNVdBOEpxbWZVQUJxeW1CN2VtcWR3TlIyRncxNVhmbXNac1BFLzRWaTRwTExSakh0ZjBHVUZyY1RqSkhSem00RTE1MVllVlJOeDNYSTlKUXhkS21vcVM2cjB2Mzk1VzRwZDdJa2VZRE13RnlDUjdoeHJUaDZYUTRPZFNXOHVxaU1aVzZmSFFvd2VrT3Mva2QxMlN5UllkTGtDdzFBNitGVmhhTVVjZkVaNmxablA4QTB0ZHFyeFI0T0lFNzVobWRRRzdnT3FyNG0vdXZRcHB1L1pxVW5oNVFzbnV6YTRMNU5IaG9zT0ltQ0tnQVVBOU9OK3B2ZW91bXRTNnAxSVR2Rm9nWW5abUhYVVJpSWRaQ0FUNUJ0VFMzQ0J1aGlLNzNkL0FpalkyR1lYM2c4d3BJOGpwWWlxOUhCam5qTVJIU3hlbllFTWlLVlk1Z3Rsa1JyT29QSlhON3I5UnN5K0ZPNk9MT2Qrc3F3azdyVG1udC93Qjk2MU9lOXF1emtrVjc2cU5WWUxZZ2RHVUVqdzA0NmRMVldqVnFZV3BuanNkT1NvOFJvOUhMU1hMbVk3Tnk2YUd2WlVjUlN4TVZPTFBENGpDMXNMTjA1cXpYNW9lTXhGaU9YQ3NHSjRiYTdqOEw1SFF3M0VzeVNuOFMyZmNiVHN2dEZabDNVbkVpMnZQK05jSHJVcWxyNm82VldDbEhNdG1WbTJ0bnRETHV6d1BxbnFEK0hPdlZZVEVLdFR6YytaeDZsUEt6T3kyWjJJNFhOdks5YU85allwMlNFTTRIRFd1TmllTjBhVHkwMW1ma2p1NFRnVmFxcjFIbDd0MzVjdm14T2J3UHdybVArSUsxOUl4OVRyeC9oeWpiVnkvOVF2V3ZEL3hCRnUxV051OWV4anhQOE56U3ZSbGZ1ZW5yc2VIalhlaFVqVVNuQjNSNXlwU25TazRUVm11MGRYV25iaVhvTjNzZUZWVExEMGN4OWxXM0tPS0pNWUExWCtJcUJidTl4K050YUNqUm5ING56Tk1IbmxCSVVBRkFCUUJaYkZ3VzlMaTlyTHAwdmZTL3VOS3F1eUZ6cVpMTVpuaEtrcXdzUldXYUh4a21yb1lOWnBJc2VWU3dCVWdPUkxjMW9vUXV5R3piZGg0RkpkaTFpTkFPcDBybWNaZDZzVjNmYzFZZDJwdlRudjhBSWMyM2h3eFljNjQ3YlhXanVqZmhwUmJ5VCtGN21ZZ2lZWWlETDYyOHNQQytoUHV1YTZYRUU1WU9sUDhBUHpRamhxalR4dFJQdi9QVTYxc0RaemJzaGlUWURNeE9nTnI2ZGJkSzVsT0R0cU54bGVMbnBwMkl5K3p3dU0yek5QbHZEZ2xNYWtEUXk2aG1QSVdOL2NLbGZVeDNsSitCclgydkcvNUlUeHJwNmlPenlIOTBScjRCcUhOUFM1b1dIbERydUxmalpMMUpPRDJQaHI1cElWekhuS016bjlRak1QYlVxRWVhSzFNVlgyakoyN3RpM1ZValcwY0Q1T09nalZmZEk0dFY5RnNqSTgwM2VVdGZ6c1JtdHFkcWNFZ1A1VlEzMFk3eU5mb1dobHlyK3N3RlVjNDlwc3A0VEVOcTBXMC9rdk5xeGdkdGRyOFRObVRDcjNRdHlXZDJrWmJnWlZqdVNxM0tndmNxTDhhWG5pOU5XT25TcTA1YUpkcTAzOE5GNW1Wa2RONjI3dmtKMHpXdjdiZTJ2UTRQQlR3dE5WSmJ0NnJzUmg0bmlvNHVXVkxaYVB0L1ljTFdyc1NxS0MxMlBOUnBPYjAzSHNCaVNqaGxPb054WG5PSlFqZk5FOUh3L000NUpuUU5wcDhyd1JsVWZsWTFMQWMrRm1BNjNGL2JhcThPeEdTb3I3UGNSaUtWbmxPWFRZbTJnOXRPNHBpNVNrNkVIWmMvWTZIRDZVWVJWYVc5MTVjMklmRUFmTzl3MHJ6YWhmOEF4UFVWTVdvUjBxeFh5VnZyYzloeEh0SFVmZUttZEJjbjVrWWJpamJ2SlhYYkhYelc1TFFnOERlc3NrNHV6TzNUbkNySE5GM1hjZWtWMU9GNCtXR3FwUDRYdjduSzR4d3lHS3BOeFhYanMvc0pVOUs5Mmo1eXlTYlA0Tjl0QXZXUGdJQTk5V0xEMkhYVUhvYWlXeFNleEltbEhlYmxxZnZxRXRDaVJuYVlOQ2drS0FDZ0FvQXYreTdXRWgvUkgyMG1xcjJNOWRYc1N0cFFDUUg2UTRmaFM4dWhGS2Jpek9NS3pUUnVQQUw2RFUwckt3dllsUmJOa1BLM24rRk5qUmx6RnVyRkU3RDdLTjlUdzQyK3k1NTFxamFLc2hVcS9ZWCt3cFJHeFVhQWpYejBJUHdyZ2NYVXVtako3Tlc4anFZSCtwaFpkcWxmNU5XSiswRkpPYmpldVlPcHRiRlJFb1hGUVA4QVdPblUySysreFB1cDA2OG5oZWpmS1MrNXR3MU9NcTdsemNYOWphWS9id0w3cUY1WkNxOXlQRGhOVHJkNUpaQVZWZnJXc09ST3Rza3AzZGtYcFliTEhQVVMxNXl2NUpMMzhpcHcyRGpCWkxCMjlkb1liQ0pOTFpwcERiWHh2R0R5TFZSSmJEVmFPc0ZsVDV2ZCtDLzdMM0NZaGtqQUc1Z1E2QWdaWS9KRVVLMHg5bHYwcXVub0luVFVwYzIvWDV2WkZqZ1lrQkRpTWtqaExpVzNRLzVjVnJqMkt2blYxYmY2aUtqazFsdnAyUlYvTi84QVpMeDJQTUVieXVUSWlLV0lDQUlRb0xHek14WitISUdyNm1iTEY3YVAxT1BiSHc2eTVzUThhZ3NvVUVteWdBc1RsNFh1ekVlSVFHdVBqc1IxbFRpKzluZHdsNHlVMDlrbzl1Mi95S3ZhK0tTNVdQUmdXUm1CTml2Y052RzdEWDlBZU4vVWZ3L2dFb2ROVVhoZjZuSjR0ajZsV2VYTnRwOGlxVTIxcjFFNEtjWEY4eml4bGxkeWFOUmNhajdQT3VJNjhveTZHdG8rWGVhNVlOSmRQUjFYMEZJRGZTc2VMcHhwUFhZMDRPcE9zdXJ1am92WWJhTEZDamoxUVNHOEJyWWl1YlRrbTNsMkxZMmprYWIzWng4eUZpWFBGaVdOdUdwdnA0VmQ3MzNaTUlTa2xyWkN5dE9xMDNCS1Z0UG95a2FVWnUzUDZnT28wTklsQlZFWHB1ZUdlYW0ybVNJSmp4NEg0SHo2SHhyTlVvdTJxdXZVN09DNGhtZWFEeXpmTC9HWHMrOHU5allNNGpNQkpHaFVYdEkyWE1laW0xcitkaFdUOU5MZEhjL25OR0ZsSk83MGF0cXZFdWNlNnk0RzhxbFpzUElzWU5nTzYxN3EvVURMY0g2eDYxNmZnMWVwbXlTNW84VHhhaFRoV2M2WHd1NW5GVHBYb3prM0hSOGFrb09vS2dxMk03UWtzbHVaMC9HcFFMY3Fxc01DZ0FvQUtBQ2dDNzJDcEtQeUFOeWVtbjIwcWIxRTFOMFMwbEhJMy9ublVORlhIdEsyV0pBU1dPWWszeXJ3OXBxblJwdlVlbkpyUW5iUHZiTUZWVjhCcWZieE5UbGpIUkNhblpjc0hPUmI4LzUwcW03RXJyTWFRNkFFL3dBVC9qVTJKWkhreFdWd2VXbFpjZmczaUtEakg0bHFqcDhMeEVjUFZ6VDFpOUg0ZnNhSFpXTlU5MXVEYWVSOER5RmVUalUxeVMwYTBhTzVpc0c0cnBJYXgzVFhZUk8wbXltS3NxSE1VT1pTTmJpMm8wNDNCT2xXbXJ4YUY0V3VvMUZKK0JLMlppbzBqM2NydkZINnpLb3ROTzFoYk13OVVBV0hIdThGMUJZcWpwb3pmVlVweXpRMWZieVhndnp2SmVEMmhHOTFWREhHdmVBalRNaW5YVXFiQjNQNXlRZ0RYU29qTlN1dXd2T2pVbzVYdmZ0ZXI4cjJYY2pTYktnZHJTd3haYmpXYVp0NDVIUUVNcWdlS2tqb2FiRlBkZVpncnpYd1RmOEE0clJmbmpxV3NPeWxZbHNna1kvT0NwR3QrdTl5WjI4eG1wbVZHUjFtcks5bDUrbDdHUzlJWHlpRnNQaDQ1Vlg1U0pWWTNtZDBWRXUyVjNrSXViMnVFRnFUaUo5RFRkVHNMMGFrS3MxQjNTNTJ0dDVmY3kySDJISk9vd1VCT2RRbDJBSUVNWkpGdzNFbHNyQWEyNGsrUE93Y1pWcWpyTmFmVm5XeG1KcDA0ZEZSNml0cnJ5TXZ0Zkp2NWQwRkVZa1lKbDlYS3B5akw5V3cwOEsrbDRXRGhSaEY3MlBJMUduSnRiRVNubFJTU0VhZzJwVldqVHFxMVJYR1U2MDZUdkIySmVGa3phZk8rMytOY1hpT0hkS0Y5NGVxL1k2T0JrcHo2dWt2Ui91Vyt6ZG9PakRXdzFyaVY2S29wT0wxN0RwVXByRlNjWnBhY3pMckZsYkwwSkh1TmRQaHloTExLWGg4em00NVNobWpFY2tIdEJycFl5R1NXWjZ4YTE5L0V3NFNlZU9WYVNXM3Q0RFJGY2VXRXlUdW4xWHF1L3U4VHBmcUZVaFpyckxmdTcvQUFPUjBIWGpwU0pUVm5HU0k2R2U4Qy94R3lGelpzRGlEUFpibFhVUlNhQVh5Z216andCdnB3UEdyVVpRcHAwNUxSOW9WblhxUHBudjJydTdUVGJLMmdKOExOaHBkSldSU2hZV0lNUnpCQ2ZIVWE4S01IV1ZIRUsvYjZFNHpEeW5TVldPM05kak1wdXVZMHIxOWppWDdSMEtCcnFUMG9JdmNCSjRIM1VCbEt2Rno1MnZ5NVZaSXNsWVpxU1FvQUtBQ2dDeDJYczhPY3puS254Ynk2RHhwYzVOYkNwenRzV21OeHlxb2pqVmNnNWNxcEdEM2U1U0ZOdDNaVXZNVG9QY0t0YzA1VWlaZzhBVDNwTkIwNW56NlZSeTdCVTZ2S0pZaVM3RGtCd0hTb3RvWjdEVTB0eVBQN1A0MnFVaXlWa0lsbjZWS1FKRU9SU1RlcnBqVTlMRW5DNG14dGYyK05jWGkvRDFWZzYwRjExNm83WENPSU9sUG9hbXNKZWhPaXhKdWJnazliL1pYa00zTnU1Nm1waDAxbGdySmVwNzh1VE1WbFFzT2w3V1A0MDZGS280NTdhR1dwT01acUVHa3l6MlNrSkpNWU1zdDdwRkpiS0NEeEM4SEkwNG54MDRFaEZjdHhsYXZVZWxYcXg1dGZtaHJjSW1MbFlHUmx1UG1nYjBwNEJRZDBoOFNTYWVsTjduTnF5dzBJMmduNDdYKzdKVzJzWkhnRVhFWXpFc3Zlc3U4ZG1MRzFyTERGNjNIcnBUVkI3bUNkZURXV3lTN2w5MlpUdFB0TjhUUERPaVdTQ0tYTHZiUkYza3ljRXV4QUFXM2VON3NhNXVOeFZLcEhvazkzclpYSFlYRFBPNVdmY2VZakRTSFpMN1N3OGx6aUlFV1ZVQlVvaXlObkY4MnVVczRKMDRkSzdIQnNKQ2pWakJ1NnZmNThqSmlhOEtrWGFObjQzOWptTmUxT2FGQUJRQUExRW9xU3M5Z1RhZDBUNGNVR3NEb3gwdU9CL0N1SFU0YlZweS9wMmNlU2U2N2pwL3E2ZFJkZTZsemEyZmY0amUwOEVWT2J3Rnh6SFEyckRrcTBaTnlnMUYvTmVQdU96VXFzVmxtbTBRZzJtdGJhV0p6d2NhanYrZmxqTFZ3K1dlYW5wK2ZseEpwZFdNcVM3WXY4OHk5T1VhcnQ4TWwrZVJMd0loS3VKUStZMnlsV0FBNmtnZzV2ZUs1N3c2ZXRQWHhOZjZpU2RxbWk3dFJ6RDRFcTExa0JIRzJvUHgwdlFuQ01iVkU3ZVpHU3JLZWFsSlg4YkdydzIySGt3KzdsUUhkajhuSWJodFFSbCt0eHFjTlNqT3ZDTWRkYitBckVPVk9FcGZDM28xeWZlaW1DMTY2NXc3aXdsUVJjcmNmaWdlNnZEbWZ1RldTTHhSQnF4Y0tBQ2dBb0Fmd1VHZHdPWEUrVlJKMlJXVHNpMnhNUkF2OEJ5cWlhRnhrbTdFT0tGM05rVXNmQVhxSlRTM0hsMWd0bkNQS0NBOHJhNjZxbzZud0h4UGdOYzBwMzE1RVh1UHlReDVYeU9TeUM1UHpUYStuQzF0RHdvVTVKcTVUbzRsZXNuR3REUWxvalNTZDcySDdxbEl1bG9DR2hnd2trRnJVSkVKTWhzMU1HSWw0REVzVGt2eDRkYmpXMTY4M3hqaGxOUmVJcHF6Vy9ZejBmQ2VKVlhKWWVvN3A3ZHFIejZ4RmdTRHdPaEhzTmNLbjFZcnJOZlE2ZGJyU2ZWVXZSK3BmWVRGQjQ5MTNvVzBDWHpHSzVJdWU3Wml4R2I1dzQ4YkMxV3B4aG02K3E3alBXcVZWRnVGays5YW0vaWttand4Y3RGQkNpRm1mTGxVS0JjdEhHcEpIdGMzcDJyK0ZXUnk1U3BSZWFvM0tYNXpaeVdDUjlyWXRzWk9YM1VWa2hUUzlsMTE1RHFlcE51VllPSVl0MFlaSTdzdmhLU2xQcEdsWmNtWCsyWlV3K0dua0JzUkcxdThTTXhHVmVQRTNJcmg0Uk90WGpGOXB2eFdJbktEay9wWTN2b3lnZGRsWWFGb3JIZG5OdkFRdmZabXRsT3JhTUxqUWE4ZVZldXYySENjYmJuS3ZTUjJmT0V4akFBQ09YOHBHVlhLb3Y2eUFEVHVuL3VGZXA0Zlg2V2lyN3JSKzVtbXJNeTFiaWdVQUZBQlFBNHN6QnMxemZxZGIrZEZrUlpEaUxHNU9idUU5T0g4SzV1STRaUnE2N1B1Tk5QR1ZhV2kxWGVQRFpYMS9oL0dzMGVHMUlyS3FqdDJOREpZNkVubWRQWHhzUy9rSzZMYTloMEZPWERrdGM4aFA2dE5XY0lpdmtpcU5BVDRBMnZTSzNES2szMWFtbmV0UitIeDFHbXRZYTl6MCtaS0Q1bEFHaTlCOTlhY0hnSVlhN1R1KzBSak1iT3U5VlpkZzNNNm9Mc1FQdDkxYjFxWWxkN0ZYaThlVzBYUmZpYXNvakZHeENxeGNLQUNnQW9BS0FOTHNPRlk0bWxaUXpOWUtHRjlkU1Rib0JiNDFscXR6bGxSVnZTNDlnMXQzemJuYTQwOFdJNkMvRG1iQVVUZitLS3hYTXNTNGpRdHJjNjI0RWs5YmMvc0EwNFVoTE03RjI3SzVBeEV4UmVQZmtGeWVpOGxYcC9QaFRJUnpQdVJFblpFT1RGQVJpTlJhK3JucjREdys3MjB4UWJsZGtYMHNpTWo4YWF5akdYUGVIa2Frc3RqMlI2aEloSWpzOVhMRFphZ3RZVkRPVVlPcHNWTndmR3FWYWNha0hDV3pHVTV5aEpTanVqWTRyczR1VWlOV3pyWjVEeVV1THJHQWZEanpKdjhBUkZlQWszQnRMNW5zYWJwMU90UFMrc2ZjbTlrcC93QW9JWEFGNzU0cEJkR1hxbHh6NmNPZkxTOEZiWGtZc1plK3VqNU5GWjZWdTA3NG1TUFpXR3NFVmxFbVhSUzQ5V1BUNXFEVStJK3JXbVVsQ0RuTFpIR3k1cDJYTXN0bTRIY3hMREVNcUtMWFBFbm1UNGszTmVNcjEzVnFPY3VaM2FVS2RKVzNLckd3R2JhV3o4R0Rtdk1zc2dQTkVPYTNsbFNUU3V6d2VsMVpWSDRJd1krdG1haXRFZC9ydEhNT2RlbS9CWjhIRk1CL1JUaTU2SklyTC8zN3V1cndpZVdzNDlxK21wU3BzY1VyMFFrS0FDZ0FvQUtBQ2dCY2NyTHdKRkZpQ1FtMFhITUh6SDRWR1ZGY2lGLzVWZm92dVA0MUdWRWRHaU8yTGMvT0l2MDAreXBzV3Noa20vR3BKQ2drS0FDZ0FvQUtBSDhEaDk1SXFEbWFyS1dWWElacHpIbmJLUDZOQmEvRHhKOHlRVGZvTDFsVHlxL05sTi9Ba1FnSHZIUkZGK2dzTGdHM0lEVUFlWjQ4YXR0YWN5eTFJR1B4SlluaU9RRnRSZnc2blQ0VXlFRWtVazIyZWJWbC9veHdJVTNIVDFRUHNQdW9vclZsNWxZelU5RkJLdHJVc2xpV090NmdFTnMxU2tDR3lha3NKb0xFellnQnhFT2E1QWxRa0FYSkNrTllEbmUxcmVOSXhVOGxDY2wyTVpSaG5xUmoyczdSTGg5MUVrYjJNclhlUWpodkhPWnI5UU9BOEFLOFRiS3JIYlUra3FPYTJXaThFWnp0RnRwY0hBOCtRYjRkeUhRWDNqQTJJOEFMc2YwYmM2dlJobWxzR0xuYUNTZTVnUFI5Z0N6UGkzMU55cUU2a2s2dTl6eFBLL2kxY3pqZUtzbFJqOHhXQm8zdk5tK0Ivbi9Hdk1wbThvL1J0YkViZm1tTnlzRVVtVThnUmxnK09kelh0TURTNktoR1BkZnpPTFhsbXFObmRGTmFoSm0vU0VnZloyTFU2MmhaL2FsbkI5Nml0V0Jkc1JEeEt5MlBuYXZXR2NLQ1FvQUtBQ2dBb0FLQUNnQW9BS0FDZ0FvQUtBQ2dBb0E4dlZjd0Yzc0tFaEhrQTFQY0hnT1pIbnc5aDZVaXJOTnBGWkZ1Y3FybE92VURpeCs3aGIzZERkTGJjcmhva0VjbWJUMWdvemtEVE0vSUFmUlcxaDVDb2J0cVdUVElxdGE4MHQ3MzBIQWsrUjl3OHIxZTkrcEVxbHpaVnpURmlXUEUvd0EyclJGSkt4RDFHaTFXdUZodlByUmNMQXowWEN3MnpWT1lsSVFXb3pGZ3pVWEExWG94MmNadG9SRUR1eFhsWTlMQWhiZU9jcjdqV0hpTlZSb05jM29YcDduWlo5alJybWtMbGJBc3pPYmdBYWs2NkR6Ti9LdkxkR3JtOVlxVnNyV2h3SHRmdHR0cFl0VWhVN3U1U0VHL3FmUG1jRStzMXI2OEFBT1ZXcVZJMGFiaytXNWFLY3Q5M3QzTG16WllIQjdxTkkweXFxZ0FXRno1MzZrNisydkZWNnlxemM1YnM3VUZUaEZSU2JHZHM0b3d3U1MzSktxU0xuaXgwWFFlSkZNd2ROVmEwWWQ1U3ZWVWFiYVJPOUJHeGxHRm54TWc3N3o1TXhQS01BOC9yTzN1RmV5YXRvY0M4azlEcXlTYThkQUtncFl3dnBCMnZsd1dJMS9wQUlsSFhPYkgzTG1Qc3JYdzZPZkVSN3RmSWRXZ28wemlsNjlWbU1BWG96QUY2TXdCZWpNQVhvekFGNk13QmVqTUFYb3pBRjZNd0Jlak1BWG96QUY2TXdCZWpNQVhvekFGNk13SHFMY2dEaVNCNzZxd05SRWNnVkI4M2o1Mi9uL3E2MWx0bTFaU1VyQThudnF5UWg2dlVpUE9RYnFiRWMvdThSVjhxYTFHUTBJMkt4RHY2eHZiMkFlNnJSZ283REwzR2FzUUlZMEVqZEJJbTlCSWswQUpOU0FVQWRoOUNlekF1SG14SjlhU1RJUDBZeGYvQUxtUHVGY0xpdFM5UlE3UHVOZ3RDTDZhKzBqS3E3UGlPWGVKdkoyMUZvcmtLZzAxekZXdjRMYm5YTmpvc3hwb1V1a25iNXZ3TVYyRDJkM1d4VGFsKzZndjZxS2JleTVId0ZlYzQxaVhtVkZiYnM2V0dqbWJxUHdYY2pXc1Q0RDJYcmhLeHRTaVkvdC9pbUNKRm1Pb2FSdUdvanRZYWZXSVA2dGQzZzFHTGNxblpwNW1YRlNUNnE1WGZrZFk3TTdPZ3dPQnd5dWRkMmpjR2E4ampPNUhJWFpqcWVWcTdzbW82czUxS05TcjFZRCswOXUyUnJJVkowRnpjNjliYUQzbWx5cWFHcWpnN3pTYk9UOXZkcUdTUklmbXhqTWZGM0FQd1czdk5laDROUnkwdWtlNytoajRqSmRKa1hJeTFkZzU0VUFGQUJRQVVBRkFCUUFVQUZBQlFBVUFGQUJRQVVBRkFILy8yUT09JylcIixcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTpcImNvdmVyXCIsIFxuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLCBcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMSlcIiwgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgc3R5bGU9IHt7YmFja2dyb3VuZDogXCJ1cmwoJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhNVEVoVVNFeElWRmhVV0ZSY1hHQlVYRnhjWEZ4Z1lGeGNYRmhVVkZ4Y1lIU2dnR0JvbEhSVVZJakVoSlNrckxpNHVHQjh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HeEFRR2kwZEhTVXZMUzB0TFMwdExTOHZMeThyTFMwdUxTNHRMUzB0TFMwdExTMHRMUzB0TFNzckxTMHRMUzB0TFMwdExTMHRMUzB0Sy8vQUFCRUlBS2dCTEFNQklnQUNFUUVERVFIL3hBQWNBQUFCQlFFQkFRQUFBQUFBQUFBQUFBQUNBQUVEQkFZRkJ3ai94QUEvRUFBQ0FRTUNBd1lFQXdjREFnY0JBQUFCQWhFQUF5RUVFZ1V4UVFZVElsRmhjVEtCa2FFSEZMRWpRc0hSNGZEeE0xSmljb0lYSkVTRHNzTERGZi9FQUJnQkFRRUJBUUVBQUFBQUFBQUFBQUFBQUFBQkFnTUUvOFFBSnhFQUFnSUNBZ0lDQVFRREFBQUFBQUFBQUFFQ0VRTWhFakVpUVFSUjhCTVVZWUV5Y1pILzJnQU1Bd0VBQWhFREVRQS9BTkVVcVJCTlNNbEFncmlkQmhiNlUxeElvdzlLOGNmS2dLR3BYeEFqeXFkT245OUtaMTVWWUM0K1ZBVnJnOFVqMyt0U2tVeXI5cEI5amtmeHB5ZW5TZ0JaYWljVk9SUU90QVZNelVnUG5TWk90QXBuTTFBR3pWZTdPNkQ4emNLVHRWVjNFam56Z0FWekx0ZC84UG0vYjNBZVp0ajdNSi9XcXV5TWZpSEE3WXN0cUxMdWRqRUVQR2RqN0dpQU9vbXVqcU96Q0MyWDN1WENGbzhNU0JNY3BpYWh0OEx1RzA3Rzg2bzE1aDNVWU82OXQ4K3N6V2x4M3hCZGMyeDRKOFViajRvOHN4VzZKWmxiWERGL0tmbU56YnZMRWZIdDhxa2ZoUS9MaThDeGRvRzNFWmJiNVZjWFR0Ly9BRCs3VlN6QWxZQWsrRzhaeDhxTHgva2JaUkN6cVZJV015dDJUajVVb1daeXp3THY5UWxxOXZRYlhjRVJKS0ZSMW5IaXExeEhzeGFGbTdjdFhYSnM3dHdZQ0pRU3drQWREenFmczd4STN0WWtxRjJXcmdBSHVuUDZDdWpxVkkwdkVDd0lCTjhpUkVqdWdKRTh4ZzVva2hiT1hjN0cyUmR0SUxseUxpdVNaV1JzQ2tSNGYrUm9ORjJXMHIzYmxudnJtOUdQaHg4UGh6TzJQM3EwMThFNmpUTUFTTmw2VDB5dHVKTmNQZ2J6eFRVanB0UC9BT1lOS1F0bEt6MmEwcjMrNFc5ZEpBYWZoRU1wQUs1WFBNOHZLcTNFZUNKWjB5M1dadThaeW9YRzNESFBLZVMrZEgrWks2OGtjL3pCSHlaeXAreE5XKzN6azNiZHY5MVVMZk5pUWY4QTRpcHFoYk0zWmY3MWFRMVhzMnNWWlVBNTZWaEdnNG9pb3BscVlLS29JUVBTb21IalVjNEJQNkQ5SnF6dE5Ra1M1UG9QNC96cWdJajBxUkZvZDBWWXRnVlFMa0tZVTkwNXBoNVVBeWpNVWg2Y3FJWnBrNW1nQ0FxSjdNbVlxWWpHS1F0K3RBUnEwKzFHMkZKcGtYRks0SnhVQldlNE9sT0dKcE9uMW9VVXpVQVFXWXFWeGltc0QrTlNGS0FxRUhNZWgrbitUVXJMMW9vcDl0QVJxYVJvdGxJajlLQWd1TFFDMzBxd1ZtcGJPbVpqQ2dzVGdBZWxLQlRhMUlxRzF1dHVIUmlqRHFEbitvOUswbzdPWHdKMnFmVGRuK1ZjczZKMmZ1d2gzK1hYK2xLSloyTGR0N3R1eTl5OWVaajRoRDJVQ2tNUUR0YUorOVVPTHJldEVYVjFGdzNDYnRyY1luYmJZUU9YbVNhdmFyUWF1M1ovWjJMVjVrSGdSdGdhVEpQamJIT3NSd1h0QnhQVTZsOUk5blQ5NHUrNXR1MnNxWlV1TW4va0tzblNDVm1sNFBxTHpCbWJVM1Z0cVFDYlkzSGZkYkdBRGlXTEU5QlVGbmlkeXdtb042N3FGR251SmJLMnlrazNDVHVHN0VIbjg2eE9wNHRxMHUzZEVIRmhrdTNXaXdUYUJkaUprcWNnQ0FQSUN0UndYVDhUMUNTcDB0d0JVdDNPK1RmdWEzSlJqUE5nRzUveXJNWjNvczhmRWw3T2hOUzk1dEhldkk5dTJ1WENBZzNHWVBPMEhjSVFHQjE4NjVIRWUwRHZjRmdhclVYRXlIYTV0dGhtSGxiQ2dxczlHSjlxN09yNEx4VlE1MjJOcld3dTNUcUVaZTdKdUlVQU16dUo1U2E1bkQ5K3F2Vy96Q29iMGtJZG9XNHdBTWQ2ZXJZd1NLbVIxUllWVE8xcU9JL2xiZG0yMS9XZnRMYUdMWnM3Vjd5WUFMZ3NzUjBOV2RGd2hyQnVQYk9xdU9MdHkyV3R0YUJnYldsdC9NbVI5S3BjWDFkKzBWdDNMVmdsZHFvSHRwY2IvZ0pqMXh6cm5jVnUzV3VIVFg0Tnp2UzIzd2dtNWMyZ1FUaUQ0WXJTWmkxMTdOQ2VGVys4dU4zbHg3aTNSOEwyVllFcXR6YzI4d1R1WWpIbFZYaXpPYnBWMmM0WDQ5aGFDSkdVd1JrNUZjcTh1cTBqcHBoYXNNYmhWbHR1dHU0UXpIYUlJeUFkdnl5YXV0cXpjdU52QVc0dmdlM2diZG5od0FCNGNZUHRSVFQwYmVOeFNmMlNKYmlsM2RkZlRjR3V1b2RRSVlBanhEclZmaUhETHRxR1pmRDVnZ2dlOVdqTm5QMlJqNzFLb293azA1V2hRYm1NeFVOcjR6N2NxbU5RYWNmdEk4eFZCSTl1cGJSeEhueTlxV3p6Tk5hNWowelFEM1JGTUtPNGMwQTUwQVZqMXAyR2ZuL1dtMnhSTU9zYzRvQ09ZcEM3R0pvN2kxWE52KzVvQzNiRWlvb2sxY2pCQTUxQzZRYUFyTXRPaTFJd29sV29DRUxVeE5DUmo1L3hwRWVWQU5OUmxjMUlLSTJxZ0FZVUl4VWpyVVRMUUNLam4rbGQvZ1o3dlQzcndBTGpkSHNxZ2dmVTFuMGZOZFRnM0ZCYkxLdzNXMjVqbkdJbU92bEZWRVpubDR0cWx1OTRMN2t6TUVuWWZRcDhNZkt0Vnd6WHV1bDFHc2Z4WFBFY0RBVkFOcWdEb0pKcUplSDhQRGQ1dllpWjd2eEVUeitIYlB5SnFHM3grM1phNFdza2FkK2FnYmlNUVcyK1I2cVBLdEdUenhPMXVzUzkzbjVpNHpiaktzeEtFVE8wcDhJSHNCRTE2dGQwYUhYNmJVaGRydll1bzNtUkZ0bG56SWtqNTFrVjAvQWJOdzZrNmljN2hhSkpBSXovQUtlM2Y4aVlwYVB0dmJ1OFNXOWNidXRQYnN1cUZweWJteHR6UjFNREhTS3pkUFp1TUhPNlhSbWUxZGdweE5yZ2c3N3hFZjhBZHRubGpuenJiY0N2M0Y0YnJuK0JsUzZ5RkdKSUlzeXJBd0lNMEhFN1hCNzF4Yjl6VU5KWXVwQmNBbWQzKzNsVXVpN1NjTlcxcWJaMUg3Qnp0M3c1a1BiQWVDRjZTYTQ0ZkJlVFRzN1pwZnFjYVQwanpqc2gyODE2Nml6dXYzYnFzNm85cTVMU0N3VXdUbFd6SWl0WitKREhUYTlMMW9IY1ZTOFFNQU5iWWpjeDlRb0VIeU5XdUZhcmdkaTZ0Nnk3WGJ1ZGtpNFFDTnNrYmxDZytKY256eFhNN1gzN21zVzR5RUIyQUNyT05venNuMXpuMU5kLzhrY0g0czNlcjRUYnY2blQ4UUxEdWtzbDg4cHcxcC9rR1l6L0FNUlREaFZuVjZqVGNRU0lBTzZlY3JJVDVxMHo3Q3ZLOVYyNktjSVRReVJxQTcyYmluNGx0S2R3bjNES25zclYyL3d6N1FPTkRxcmFFYmh1N3JkTUM0eWlKOU1nL0krZGJjSDdPZlAwYVBoZDlibXExZkVuRTJ0UHV0Mm96T3dRMjM2WTgrOHJuOGYwUkRhYlZCdHk2Z0VzM2s3Z3VBUElSNFIvMFZZNGgybHQ4TTAybjArbUNYRzJuY1dEZ0dJTFAwTXN6SDZVSERPMnRqWDJibG5WbExOemN2ZHh2SVlqeEtSenlHR2ZRMWw0ZFgvWS9jSlM0My9CcHJ1bnZYTkhZRmxpRzJvU1Eyekd3OVI2eFQ2ZTFkdGFhNk5VKzR0SVVGdHh5SUFucm42VnpMbkYxYlMycmRpNnd1SnRWd3U1U3NLVllFKzRxM3FOZGF2V0FMckJicThqQnlmY0RrYTFKVjJXTWxMbzQxdHFQNVVJWURQTUdqUE91UjBJeUtpMDZmdFBsVWwxcWF5UEdQblZRRHUrVkpGNjlLYlVlZEVwcWdOb05CU1hBcFhLQUpzMExIa1BQK2RGYm9IbVBZMEFSYWhZVThkVFRHZWxBWDFXS2p1SlZxNHRSQVVCem54VTFrY3FKcmZPYUpGelFFVEwwcEJjVTdybWpSVFFBSmJxWUxpalJLUFpRRloxelZhOElrVmNjVlZ1NXFNRmJVTEFIblQycEJ6MXFhNEpIekZTZDFNZjNOUUN0Sjk2NEhialZoVUZqZUZKRzQrWkg4Y2xSSHJYYjRyb2pjMDk1QnphMnlqM0trQ3ZLTzNXcjI2cnVnSTdtMmx0VElKSkNpQ1BMSDZuMHFnNEdyMUlrc1R1a24rdlU1cnBoRzJXd1RKZXlqQWRZWGNtZisxUjlhejJvQTV4MXE5eGpYYmZ5NVJ2Q05QYmd4QUJXVmRSN05QUE0vV25FcWswYVBRNnNzRXR0aEZhWjVRREc0ZjM1ME9qMHAvOU9odlpNTXQ0SzRqMm0yQkJFakpQcEJGWmRPSXV6RGFwUFBxQU9jeEp3Y21nN3JVMnlySXJJd0VCa2FHejZqcDZWeWxnVC9nNjQ4OG9kYk5uZjB6b0xuZTI3ZHNpMlNxS3lsZ2Q5b2t0c0FFbmF2S09YS3NyeFhpdHg3Z2JNSUlFTXc1a3laazh6Vi9zdmF2YWx0VUc4Vnp1Wmd4TE16cU9meW9UMkwxcFdSYVZzWkljZlNDQlhyK0xCUVZNOC95SnFUdCt4dXp2RDcrc3VHNHVuZlVCQ3UrYnFyem5hQzdFR01IbDVWNnIyZHQzRmkxYzB5MlZBOEpSMWRaLzJsUUJIdm5sV0w3QVdOVm9MbHd2cHkxdThpcVFyTEtzclNDWlBLR2I2MXE5WnhGR0RHNXBMa0RtV1MzY0I5Z2pNU1BsVnp6eVJmV2p6d1VIcUxMWEg3Tm00aDcreGR0bFpDWG9VZGNUNGhLbkdEV1Q0THd3TmZrbDRRU0RpQVpFWmdjODEyendqaGwyeGNLV0JidW0yMnhoWnUyNGZhZHB3b0hPT2RlWldkYzZObGpiSjZFRkRrY3lJelhTRStjR3VqaS9qTlQ1WGY4QVI3Z1YvTDNyaWhjWEhWeGp4RGRPNzNFaC9yVnJYS0J6L2ppYy9Tc2h3UGoxNHZZdTNYZDdkd2kweFdYYVNoTnNoZkZuY0NzQ0RuenJjTGFrUjRwWEc0cXl6bkdEZzhxeG1seVMrMGRQajQzQ1QrbjBjblRvUWNmREhMNjVxNGlUVSt3ekVEMzVUUmQzWG5TUFlWR1NvVVdIQi92cFhSMitkVm1UeHhIclZBeFdRUWFBREUxSVZwTno5RFFBUlQzVEVDazFPUlFDSm9icEVWTUJRRlpvQUZVaVBhaDNSMHF3eTBJU2dPcTY0TlFGYXNoY1VKV2hFVXR0R3ExS0VxUkxkQ2xLN2F6UjJyZFQzVWsxSmJTZ0kxdDA1V3JBU2daYUVzcHN1YWd1V0FUVjBybW8zRkNsQmgwUDFxMWF0WW9iOXFWeG5OT3QzYVBQRS80cUFwOW83cFN3MFRKQjVFZzlBY2psenJ4WHRrN1hMclg5aDJtQTVqQ3ZBQkJhT3B5SjlLOVMvRUM5Y0duQnQ1azdNTVFRRG1SSE00cnlqWGNLMWIyMmR6Q0F6M1padVlFRnRzQWRPZnY1R3VhVXVkK2oxT2VONEZDdkx1ek0zdFFUZ1Z1ZXcvWTV0UmJXOWZHNjFEZDJoSmpKaG05aWF5bkRkS0dZdnREQUVCVjVna3psaDFBamwxSkhTYTlIMEl2T0xhYjMyS3FxUUNRcGI5NDdRWUFrbkF4WGRuak1scitHWExGd2phVnppQjhzRVZYSUprRm1CSG5JTmVqdm90cCtFRXh5SW1lVS9xSzQzSHVHK0F0Ykd4LzNTaEt5ZklnR0RXSEUyc2xIRTdIYXMyYnVvWW5kR2xkbzZuWTZORzQ4b3ptbWI4UjNIdzJDUC9kSi93RHAvY1ZEMmQ3dzZwcmQwc1NiRjhGSkpQOEFwTVFNNEhJVmpDZXRiWFJscXpiZitJbHljMi9meFQ5NEZkSFRmaVNoRzE3Ympsa1FmNDE1dTFQQXJiazJxT2F4cE8wZXVhRHQ3cGkzK295LzlTd1BTYzFzZUhhalI2bFN2ZVdiZ2JBeXA5akJyNXhOVDZiVmxmM2lQSWptSzUwVjM2UG83aW5aRFRGQjNLaTFkV0NyMmlWRzVES3N5cmc4dVpHT2xYZUY2cGxWTGQ2MndMZnZkNmJ3QmtoU3hjN2xrZ2VZelhsL1lidDNjVlRhY3RjMkNRZHN1Vko1UnVreFBTU0IwNTE2QjJRNDEzN1hMRjZCY0FrQ0NOeUVBa3ljRWlZclNrcXBrL1RtMXpqNjdOQVZvYWxJbW1LMWc2b2hjVUF0K0llb3F5Vm9iYVlueUpINlVKWldhMW1vbFNUVnhrb1FsQlpHeUNnTnZ5cXlxVVhkMEZsUjBwRzJlVldHU25LWm1nc2hDVVBkMUsyS2NvS0ZPakZSc0trcU42R1NJTFVxQ284OHZyVTZDZ0ltWE5TSXRDeHo3MU9pMElNd3FObHFmYlFzdEFWV1dnYTNWcGxxTWloVXlqdE80VStvdFNJQS91YXNsUlF0aWhUazhaNGVibW11cXZ4Z2JsOEliSzUrRTh6RmVROFE0a2Z5NUFkczdwQlMySUs3U2Y4QXRJWWZPZlN2Y0VieC9UOVFLOGkvRWJzMjF1NWN1anc2ZG5KaFF6RlJ0WE1BWXlPWk1SOStjb3R0VWV6NDJXRVlTVTEvb3l2WlVBQXVVWEZ6bWNUZzQ5UGhtdlMrR2NTdEJBQ3BYbG5CaXVEMlc3SlBxTkJBVGJLaHd4NU8rN2NGbjdUMHJrUHhIVWFSOXJLeGdRQVFZVTlDQ0IvbXVyUEd6YWNTMVc5RDR0dDIwNFpkc0hlb2xTSTZCaElJNlNLbzhSdWdJSExBb2czY3VnV0I4Nnl0bmpOeHlKWUEvVG1Nd09mcmlreVhOUzY2ZEN6S2JpYnp5VUxQaVp1bnN2b2VzUkFsWkJ3RnpiMUJ2WEJMM0xOOHdPazJuWVI2NCs5WXJaWG8ydVlIVUtxQmpCWlFZeDhEQ1BlSnJENmpTTWh5RGpwR2Fpa2RKWXlzdW1QT01VTndEcE5kdFUzMnd3RU1QdkZVOVRwOXdtSVBsVlU3WWVQV2psMDFHNnhRZ1YwT0ZIVzdNNjBXYnkzQ3pMdHp1WG1JSGwxNmZTdDVvNzQvTjJkUWpYV1Z3ckRhU0VSd0NHRERwYlljdXZpSXJ6TzNiTzRLZXBpUGZGYlBnMnFGdTBwVjdtOEhiczNBQm9BRUhId25IenJFcEtPeCszbmxkUlI3em9MdTlGWWNpS3NrVm0rd0hFKyswKzJDRGJoU0NaOWpQVVlQMHJUeFJ5VW5jZWl4eDVNY1ZISXFsU3YvQUlCRk5hSFAzL2gvU3BBdE1BYzFDZ05icVBaVm5sUXN0Q0VhclJBVThVWVdnSWd0Q1ZxWXJURmFBZ0tVSVNweXZPbkMwQktSUU1LbElvU2xCWkVpMU1vcHdzVWdhQWhJbHF0SlFMYUhPcFF0V2dPUlViQ3BhRmhSaGtMVkZGSGU2VU0xQUJGQXkxSk9hQXRRMGlKTFlCbisvT3N0MjVjRkJiR1h1T0ZDbGlBUVVLc0NPUW5jUHRXc2JGWW50N29McjNOSmN0YmR5M0crSWtEQVZ4TVpPTGIxSGRhT21Qank4alY4SnRyYXRMWkFnSW9XT21COVlyeUx0THJHVFdzWkpDNGcrdVQ4cG12Uk95UEVXdldHdXZHNE82bmFaQkNtQVI4cTh3N1hYUDhBek53bnpIMGpsVWs5RnhxcFVLOXhCZTdNS0F4SE1BZnJYTHNhMTB0TUVZS1M0WWJ2aE9JUHp4RlZrTGJlWHBWZldYU1ZDakFIVCtQNjFsYk51a2R6Z25IRGMxTmdNcWpMU0ZIa2puQk9lZjYwNDQyTG1ySllXN2R1WVlPQ1dLZ21ZZ1lQcFhIN1BlSFZXWkg3eDgrcU1QNDFmNG53NDNkdDVVaVFmYzgrZEpKZXpVRzNaZDB6V0xwZGJjQWJpUUlneFBPT2xVZUk2RGFEWE1TeGR0T0hDc0k2OC9jR0swajZsYjF2ZHlia1I2L3lyRFZkSFNMdTArekc2MnhGYzhETmFEaVNDSXF0MmMwRnk1Y0xXMW51L0VTUVNtRlpncm1JQ3R0SXpqblhlRDBlVEtxWXRWdzY2L2R1cVp1UXFvQ0M1SUV6M1lPNklqTVJtdXhvK0c2akNIVDM1RVFlNXVDU3hXWWtaSTJ4NVlxZnNIMlZ1Y1Ixak90d0JMVHBjdVhSZ3lUSVcySTV5cGlZZ0FIMHI2TWFrbzZvMURMeGx5cjhxakdmaHB3RzdZc3U5NVNqdTN3ZFFCdXlmSWt0eXJaeFRyaWkyMUVrbFNPZVRKTEpLMytVUnhUQVU4VTZpcWN3V1dtRlNsYUVMV3FLQ1Vwd0tNMG9xVUtJK3NVb285dFB0cFFvaEswV3dkYVBiVEdsQWVuVVViTFRoYVVBV1dvcW5xTmhSaGoyNmxXb2txVkJWUUhJb0RSc2FCcUFyM00xRkZUdXRSc0tqS1IwaUtlTTBWeGNWQVFQbVBhcW1wc3BjRzF4S3pNZW8vdmwxbXJrOUtpdTJxR2pqZG0rQ2pUYWQ3YXFWWGV4VU0yNGtRb2trZVpCK1ZlYmNhMEF1YXphMHd4M0gxQ2lUSDBpdlpyYWZzaU9zLzN5cnpydERvOXVwRnpNZ1RJenlCWDJJaXN5UnVMdXpGYmxGaEdBaHJ1ODh1U2h0b0M1ODFiN1Z4bnZvcHlOeDh2S3RKMjRVTGZDRENoUkVDQmtzekdPbVdPSzRXbXRJT2NFbXMzVE9rU0xoZXNadFZZaFkvYW9CRS83dk9PWG42RTExeDJpZEQ4QUFuek9ZOHNWVDRaY3RmbTdJY25idkFFWjhSd255M1JOZWpOM1RIWktHR3l1SlhQbDBxVG1rdWpwaTdhc3kraTQ5WXUrRzVZWmR4Z1BDN2M4cDYvYW90VG9BaHhnSEUrY0h5cnU4YXRXeEpCR0Q1Zkt1WHJkZU5vTzBZT1NjVE9PdGNISytqMEtMc3puRzlEM1lMSG9ldkwrdFJkbnVJTW1rMTFwTndiVWR3a2dTb1FHNGJrbnBJZ0FkWlByRnpWYWhkWGNXMXZGdTF1OFRzUU54SDdxZXYyelcyN0pkaWhxQTFzM051bFZneFJZM203czJnN281QVNaUG1mTW12Vmp0UjJlTE00dWRla2RiOEV0QUxlbHV0RWI3Z3o1Z0xqOVorWXIwYUtyY04wQzJVQ0xKNVN4aVdJQUVtQUFNQUNBQUFBQUt0eFc2UE14aUthaWlrYUVBSXBiYU1Dbm9DSzZPVktqWVUwMVFDQlQ3YVRVUW9BU3RLa3hwSlFvd0ZLcElxSm1vRVRSVGdVNHA2RUJZVkU0cXdhaVlVQUNpcFFLRkZxUVVRQU5Nd3B6U2FnS3owTkV4elViTldTa0R2REQ1L3BSaDVxSzRNMEp4UTFSSWVkR1JnVUs5S2tZeFFOajJyWWhnVHlFMW1lTTZVRUNjTXZMM2d6eTh3SXJwY040aUxsN1VJT1NJZytaTFQrZ3JNY1I3VEpaSlM0cEtvU3U3RzVZOStmUWRSNGVlS0NET1QydDdQZDhWZTJJWUFoc2tuSG5QS0k4dXRlZmF6UXNyUWZ0OVAxcjFQaEhhSFRYM0k3MUFUR0RqSjV4UEw5TTF4ZTFIQ2dyN3dZSjh4SDNqK25yV1dkWTZkTTg4WFRxbDIzdW1CY3R6N2JsSisxZDN0R3hOeHR0bGQ0UHhLR0xaQU9ZTUU1bXEycDBhdGRSTjRWblpSdUpnTGtlZlA4QXhXZzRscHBjazNseTNOZ0premdnUm1zUzZRY3BKK0psYnZGZFZBQkpFZWFENzdqVTJpNFZxOVR6bFVZVHZZQ0NBREcwRHpucC9tN3IrNnN3ZjlaNUJpQ3FnWTY1bnJpamZ0bUxLTXFLejNITWt1UVZUa0lHMENSQUdJRmJTWDBZV1NkN1p3eG90dXdIRzdDclBpSW5MUWVreGsxOUg5bHREYXNhVzFidElFVUxrRHF4K0lrOVRQV3ZtUDhBTTNIdWQ0elMwanBITGtBUEllVmZSWFpMalZ1NVlzaVFDd0FFL3dDNHFXSysrRFdyRTE3TlF0UFRLSXBFMW81RDAwVWdLYzBLS25GTXRPS0FVVUpXcEtHS0VHS1U0Rk5OT0tBRmxwQllvaUJSZERRRWRNUlJrVTIwVUE0TkVLR2pGQUtnYzA5QzFBSzJhT283ZFNUUUViVWp5cFRtaGFnSVdGUXZVajFFelppc21pRzRhWmFabDhVL2FpQW9hRFUxeCtKY1dBQlljZ0RIWGwxcGRxOWQzV21jZ3d6K0Jjd1pibkhyRzQvS3NUd3NIVTN4cHU4WkNVazd4SkJVRTdWQWljUWZyempPSnpVRmJMSEc1RlBUOXJUcHJ2ZXVHMk1HVmhIUmlDdHoxaGdQbE5aM3RGeHdhZzcxSUVrN2htVDZtZWZTbytMY1BJYldXbTNiN0tFaU9SMjNVVW4xRU1UODZ5Mm5hY2Zla1pjbG8zR0NpNkxGNW95RFhRMGZhdlZLQ292dVZQTU1kMGUyNllybkZUeXFFV29NMVVhYUxPcDRrNXVMY01IYTZ0SEtTcEJ6SG5GYXJqWGFZRmdWMHlnbFVZbGlRUVdXZHBXTWtUem1zbG85RWIxMWJRL2VNRS83VjVzeDlBQVRYVjRoYTN1eFdZTFFKeVltQko4NnJxdG1PRnNwYS9pbDI2VHVJSG9vZ2Z6b2RGdy9kWFJYaEVFU0s2K2swZTFjQ1l6N3h6QTh6RlpjdGFOeHg3MlpTL3BtQm1ESDhxNnZDT08zUWd0U1Jra0VHQ3BJMmdpY1RCYlB0VjNpRDRHQnRBM0RIeEwwTTlHR1FSNjFhN0tkbUgxRExlZkNsdmg1U3NIclBudGtlOVdLczU1Tkk5SzRSMnJ2blJXV0lTNWZHeEdCUGl1SDRTd2lBQ1lMYnBqQitWTGlING5QWjNLK2oyc01MdVl3U1JJeUFRd2pPRG11alo3TjdIVFlTcVI3N1RCazU4d052b0pyTTlzZXhlcXV3VVpiaUtHWXJPMDd5Y25KSU9Ob0hrRkZkMUNTN1ZuSGttZWk5amUwQzY3U3JmVUJXbmJjUUdkcmdBa2UwRUVlaEZkb3JYejEyUDdTYXJoTjI3Yi9BQ3pYYmJGUzZ3NnVJNVFZakFKR1JKeGtDdmJ1ei9halQ2eFp0RmdlcU9qSXc1VGhoa1pHUk5aZEZwblRhaVducGpVQVlwaWFWQ2FFSEJwNkNqUTBBUUZDUEtpQm9OMUFGUW1sTktnREpwQ21wVmFBbXFGbXBVcWpBU21rSHBVcUFhZWRDeHBVcWpCQzdWWDYwOUtvVkFWemRYeGpZZG9UeEJvbVpBRXh1UExBR1Q3VXFWZUxKbW1zdkZkSGJIQlR1ekJkc3VKWE5RcXFwREZDc3FqS3k3blhLbFQ0cEVRQ0ptV0hRVng5VDJuQnU2WFZNR1hVV29GN0VDNGk0VnZQY1ZMQSs0cFVxN1N4Um50L2xvM2psVG9pL0VLNEwrb3VhalNTOXMyMVM0eVQ4ZlZUSHhEYXE4aVJnMTU2N2xUNUhxT1VVOUt0NElLRUZCZWpPV1hrV2JGN2RVN0xpbFNyVE54ZG1nN0QybGkvZHp1QVZBWmdCV0JaaEhXU3EvS3I0c0xQOTlLVktzeTdKQjZaYlhhejdDWUhuWGFUU3BzWG9CbWVVSDNwVXFsR216Z2RvRnRlQzJOb1VzeFkvdWdjeVpPUDgxMmVCOXBkSnBsQ2dtNDQvZHNxV25wOFJoZkxyU3BWN3ZpWTFKN1BGOHJJMW9sNGorSStvYi9SMDlxMHBVc0h2dk1nUkpBRUFISTZtdU5yTzBONjd0RjNYTVF4aGt0L3MwRXFZTzRSdUV3TStkS2xYb3pabmlhVVVqend4ODArUjB1eitvdHBaWGZiTEJuMk5Gd3FCSnd4SVAyOVI1MVkxWEVySVlvaUZBVllFaTY1ak9ZWXdWWXFaSHo1MHFWZVA1RlNqenJ5K3ozZkcxNCtqWjlpOVdCYmEzKzBJQkRLMXgzdU1RM01GMkpKZ2o3MXAxdUE4cVZLdUdOdHdWa3lwS2JyUklEUWswcVZkYU9ZMFJSclNwVW9DWTBKcFVxVUJVODA5S2xBLzlrPScpXCIsXG4gICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6XCJjb3ZlclwiLCBcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIiwgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIlxuICAgICAgICAgICAgIHN0eWxlPSB7e2JhY2tncm91bmQ6IFwidXJsKCdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4TVNFaFVTRXhNV0ZoVVZHQmNZR0JjWEdSZ2FHeGdZRnhnWEdCb1lHQjRiSFNnZ0dob2xIUm9YSVRFaEpTa3JMaTR1Rng4ek9ETXROeWd0TGlzQkNnb0tEZzBPR3hBUUd6TW1JQ1UxTlMwdEx5c3ZMUzB2THk4dkxTMHRMUzB2THkwdExTMHRMUzB0TFMwdExTMHZOUzB0TFMwdExTMHRMUzB0TFMwdExmL0FBQkVJQUtnQkxBTUJJZ0FDRVFFREVRSC94QUFiQUFBQ0FnTUJBQUFBQUFBQUFBQUFBQUFGQmdNRUFBSUhBZi9FQUVFUUFBSUJBZ1FFQkFRRENBRUNCQWNBQUFFQ0VRTWhBQVFTTVFWQlVXRUdJbkdCRXpLUm9VS3g4QWNVSTFKaXdkSGg4UlZ5TTNPQ2toWWtZNE9Ub3JML3hBQWFBUUFEQVFFQkFRQUFBQUFBQUFBQUFBQUNBd1FCQlFBRy84UUFNaEVBQWdJQkF3SURCUWdEQVFFQUFBQUFBUUlBRVFNU0lURUVRUk1pVVdGeGdaSHdCUlF5b2JIQjBmRWpVdUZDRmYvYUFBd0RBUUFDRVFNUkFEOEFmc254aGhiVlk5Y0dNaDhGdDFFdHovVzJGQ01FTWxtb0VFNHZmSDZUazQ4eHZ6U3o0am8vQUtsVkxLeGpuSVBUL0h2Z1dheUc4eFBJN2oxd3daelBDcmx5cFVrMmpZN0VYdnpqQ1ptc29PVzJOeHR0VGN3Y3VQemFrNGhpbldLN0dQZU1Fc2xucXlOTDNYcURFRDZZVjhyVmdNamFpR0JFNnl0dVl1Q0l3YXlQR2N2UkdpYXJTSUphR0U5dHJlMlBQdjJ1YWdJNU5RK3FaZG4rS0tkTXVmeFFOWHFEaXhuYVVvVFNoWC9xTVQvdkNhdFlteUh1QnpqRXJWcWdFdHFBbmN6YkFIRjdZUXk3RVZJK0lKVVdvR3FwcGF3SmlOYXpielRmcE9MMldaV1o0cHNyTFlvZHI3RllKN2Jkc2J0WFVxbzFpb1o4cEJGdjZTTjQ2WXpJOGZVYWc3MDFBc0pON2RBQVp3T1hPbU5iY2dmbEF3OUsyUnlFcy9DNTV4Zkx3cWNtQkV5YkJqZjZBaU1MbEhQTWpFYWxaU2J6TVgzSW4xMzN3NVpocWVZcHlyQmlCdXM4emN3WVllc2NzSmZIT0hmQmJ5aVJwRWtYRTg3L0FLNVlMQm1USXV4dUQxWFR2aWE2cUVTbEl3eStVTUQ4M1dEQkZwT0IxWGlGTWFVMWd6cHNETWw5Z0FPZmJzZW1GUGl2R3lzMDFSbTBrQTdhZjRpeVJCUG1XRkV4YS9YRWZEcWlwbUhFNlYrRkNzN0l5bzRZc2RRWHphU29FTUJPcmtWSmlYTDF6cStoQnQ2OC9rSlhoK3ljYjQvRnlFMmV3MjllKy9OZWtjbmVEdkE3SDhzRnFBcG1HUWlEdkk4MzNudWJZQWZGREtzZ2VaUXdGcDBrbURibFkvY2J5QlBrS1FlVDhaYWVnaVF3WXpibHBCKytMMzZqR2lCM2FoNnpqTDBXVjhoeG90dDZUZmoxRlFCRW5sQjJITW5BR2xsaTB3Q1k1RDZmb2MrMkd5cmsxY1d6RklrYkZ0YWozTExBeExSNFZvMDBnQ0p2cm0xeGRnUnZhWWpsenZmTWZWNFhIa1lHRTNRZFJqUCtSQ0JGbE9HRmYvRlZGQnVOUUpNYldCTzM2bkZ5aHhFVWpOS3BUQWdXK0dvaWVRTnorWndYclZLS2w2U2xGU21vMXZVVW0rclRCQUVnU1J5OWNBYTNCbFppQm02TWdTUXRPcnQxSVZJd3QrcndBNlhZQStobE9McE9wSzZzU0VqMUVzanhZOFRVRWdzUnQ1WWp2ejdSenhybktORE0wdmkwd0VkVkxGQkFKWGVkSWlSem52dWNMK1l5MUZDSXpBcks3RU1LU3VJZ2N3NEU3aUk3M3d5K0VlR3dEVXFyQ3FyR1lFQXVzRTdYT25sMU9EVnNaWFdoMmhNTW1vWThnM1AxY0g1UExOSUtncmFaSXY4QWJxUjlJd2RvWjlxY3JHcDJnQzk3OGdOOTUvMWl0bWFhS2l1Q2ROU1k1MlVrRlNmNXJneC9uREg0S3lJQ3RtWEF2SVNlUUZtUFluOHZYQkRNajR2RUc0UEVRTUdZWi9DT3hITUtjT3lobzBvWWpXVExRYmVuc01SY1M0Z0ZrSnp0T0tmRU9KRmxZZzJOUXIzTzV0MnQ2MnhRTW5saWZDVnlXd04wYVB2SGFkREtUakFRRHRJM2NuRVJ4dG1Eb1VzUnNDZm9KeGF5MlYxYVl2cVdkb2k1RUgzQjdZYzJWRllJVHVlUGh6SjF4TXdMQWJDVTR4NnVDUnlKTGFRTDlzYi9BUFNuTDZBdHh2Y1FCMU9DMWlab2IwZzBKMXhNbE14SUJ3VVhoVk1uU0hKTXh0SHJHQ2RkRXBJcWhRWTVuKytBT1VkbzFjQlBNVzZlWFppQUZOKzJOLzNONWpTZjEvYkRMVDRnQXR5Q2Z5d080aG53YkJ2OFlGY2pFOFFueElvNWtHU3lZdXpSYmtML0FGeEpXcUFZeXJuRnBwcEZ6MXdJcTV1VGd3Q1lCSVVVSVhHYTBqRTlMTWtnSEMrbGZyZ2pRNG9GVURHTWs4dVNVS3VXamxpVGh5cHEvaVRIYkY3S1BBdmNZSUx3Nms0bUk5TWVaNkc4OG1PelltMURJVTlMYVlJYllHUkhXNHZqekxaUFVUcnBVaHpKQUVuNjQ4eTNEZEJsSFAzSVBZaWNUeTdmanBqdGNlMzZPRUgzeXBUeHRYdWxnWkpIV0dSU09rRENUeG5nUlNvK2xXQ1Q1VGVJOWZ0N1ljRTRneW5UVVNEMk5qM3hkcDFsY1JidU1CYkx2SER3MzJNNVdjcXltUkk3L3dDK1dQRlp4YVNmVy81N1lkdUljT0lmeUtwQjVXQkhhZWVCR1l5d0ZtcGtIM0gzdU1NR2YxbmowU3QrQXhPOFU1OExTVlFUVGFvNm9Xa2tBRUZtSUFFL0tweGE4TmNLcEdncjFFWXN3QjFid0RzQVB3MitweDc0dDRZV1FNaXkxTmxkUVl2cDNYM1VzSjc0MDREeFNrYVFHc0JWRUFtMEFXMHZQeXVOaURFN2pmRXo1VThjTS9wdDcrL3hqUEF5TGdPTk9icyswZG9XeXhXaEQwZzBob0xDSUpQSmxuZTQ5dnBqT0s4VEgvVDNacXF0VUIwaGdwVlJVcVBwVlNwSk9rTTBYTWdENm9QaWJNY09va25SU3JPN1gyYzczSmFUSE93dlBUZkJiaElGYkpINE5QVG9KMEtwSytlbXdxS1ZPNitZQTlqaFJCT1JtRmJnOFgvVnd3bWpFQXdKb2ptdjdxQnVDY0NxTlhWRnBtblVxVlZBTFF3VVFDUzBpU1FHUWl3Z3RhWWdNL0hmMmUvdStXMVU4eExVeUtaVW5ZR0kwRS9LNGxUYnNkcllCK0ZmRUFwdWZpU0t3RWt1U3BrQzRCUDQxS2dUSExuQkdEUGlmeGJYcjBCU0tLcWFic0F4YVFSRk5qYjRiTjFtd0I2WVdwVUFoeDdveHd4TnJCSEMrSUVmdzNNQ2tacG9XVFYvRU1NUkh6R0Nya0R2ZzZhS3ZUcTJCS3RSRTg0ZHdyQ05zSlBoMmdhK2JYU05Lb3hMTUlLTEFKMHczbW5WOE1BN3dEM3d3Wi9NL0R6NlpjdXZ3M1drN01URUVHcHpNZEJ2aGcxakVONjh5bjRkNVBseEsrWTdiNlcvNThZejVId2pxR3VOS2dpOXBFZzNIcGIvQU53eHBVenFVa3JVR3FGZEErSlRLbnpEekFNcWs5Wkgwbm1TV0xQOGJ5NlUxVmE5TXFGQThyQW1Zamw5Y2NuV3ErZnp2a2w2ZE1pVDhxc2R3bzZBR1Q2TEp2aHVkaG1LbEQ1Z1JWZW5lL1pFOU4wN1ljYkJ3ZE5HNzdudFh0djBock44WkZOSFFVMUh4YVpwZ0U4eVZ1eE81eFVYZzVlZEZNTjErVXgxbTl1V0lmSCtYV2syVlZXREhWVTFFQUJaR2lBdHJnZFR2Z3RuZkQxRnFocWFKZjhBbjJtMGJieEZzTlFPTTJSc2RiMXpmcEpjaVkvdStFWlNmL1g0YTlmNGtIaFhnSXIxNHRwWHpNUVJHa1JzUll6dC93QVlZdkVHYkN6VE1oQkFnYzlSc0JIVy93Qk1XL0RkRmNyUXJWU1l1Sk1XQ3FDZmJjbjJ4enZoZkZEbk03VXpOU3FFUlRLS3pSMlNBVHlBa25xUmozV3N6cDRRTlh0Zm9PLzhRL3M3QUEvak1EUzcxNm5zUDNqclR6dElNTXZtdEZNVk5WVlRJVUJrMkU5VFR0LzlzYjc0SlovamVnTFR5MExUQUlLQlRKTzF6elBwOThKM2lISzA4d21oS2lhNUJVNmdTR0Y1Z1hQZkV2aFhpZng2TjJJZFJwZGVjaTBuNlI2ZzREcFZUQTNoZzJ2STloN2lPNmtaTTJQeEtwdUc5YTdIOW9ZcGNiQXA2Q0pxcFVKWkRZZWJWQittNHcxK0h5MlozUlZDZ1NibVRQSUhiWTd6amxmQjJROFRxVTZ0UVUwQWtzeEF2b0VYYjF4MS9oUEZNalJUU21ZcGR6OFJKUDBPRllHWEVIRjdsaWZuSDVlbkxGRDIwaVdQRUdTUmFGUWhST2h2L3dDVGdUNGJ6WTBJU2QwNS93RG1WQmkvNGg0a2paVjJSZ3daWEFJSUlzQ0xFWVMvQkhHS1RaZWc3c0ZVcTN6UURhclY3L2ZDc2d2UGpkanQ1dC9lQi9FY0tHRndvM3Nmdk9pblBqZUxBVEp0T0ErYjRnWG05dW5iQS9PY2FSdktqS0JlK29YL0FOWTJwMGliemJIU3hoRHVET2RsZCtETlBpa0dRYjRrcWNRZGhwWXp0N3hpT3BsanZ5eDVReStveDlUMHcraEp0UmxpcG1weFZac0VLZkRHSTFHQU9XS2VieStraFpuMHg0RWNDQ3dQSmxOMm5FYllKVU1rZFVIRmhjb05VUk1ZM1VJRkdBd0RqWUozd2VmSmliSU8zKzhaKzRnNzI5TWUxaWJwbEdqbUQwd1dvNWhpQW9NSDliWUI3WTJGVmhzY1l5M0NWNmhpcldaRFp2WEdweklPL1BwZ1QrOGs3NDkxbmxqTkVMeElmb1pnVklWdGhzYlNQODR1VXNvTjFKd3I1Zk1hVGNTTUcrRjV5OGFyZERoT1JTdkVveE9HUG1oSE5LYkhwanlwRG9VYVNDTC9BT3NUUFQxREdveTJFWHR2TEJZTmlMT2R5UVVsRGNkZWZ0aGI0MzRCcDFmNG1reVJCZENVYU9oSXVmZkhSWHlRYjVnR2piR2xTajhNU20xcEIvM2hSV1dqS0dyMW5GK0tlRXFPVnk5ZW9xZWY0VlR6T1N4K1U3YXBnNHZmczBnNVlpUHh0K1F3MC90RllOazh4NVlZVWF1MnhHaHNMdjdLNlFPVi93RFczNUxoUk5HUENBN0dVdkd2aGFsVW1vQ2FkUWpTU0RBZGR5cHQwRzhXam5HRlhKY09CcGZ1enM5WjUxRVpkcE1EeWFLanNkRnBZaU9mdFBaYzV3dGFrYWdERzBpWW4xeFdIQ1ZUbFlmYkFPTlozTkQyUWhpcmdmT0R2RFBCYWRHa0Fxa0EzTWtreVFMa201UEwwQUd3eFU0OTRQcFppcDhWdzJxQXNoaXRoSjVlcHd5MDFBMkdQU01QOFRhakp6MFpCMURtS05Ud0RsOUFZaDJBaVZOV293K2hibkdMMlg0TUtWQmFkTlFwWWFqRmdxbmw2ay9ZZDhNZE5UTWNtZ0VkUWNXYVZKZEFWZ1pjVEV3RlVqeWdqYVlHMktjTEtCWUU1Zlc0Y21xbWFjai9BR2cwd3I1U0JhYWdCL21nSmY3NDZibCtIa2pVVHBRYy93RFhNNFIvMnpFZkZ5QUEwZ0dxQVA4QThXT3BwU0VDZnA2WUVaUE94OTA4M1Rqd2NZOUwvTXdieGJnNHJaWTBTTk5OaEJ2QllSekk2bjdZUkI0Q29qYlVQUjMvQU00NlhuOHpZS0NMYi9yNjRwaExZVmtaYjNFdHdkT3hXd2FFVWVGK0VhZElsd0dMRWFkVE1XSUV6QWttQk43YjJ3VDhNZURxU1poNndVM21SSjBrbU9XM0xESi8weDQxTnQ5OEZhS3BTUVRhQkp4cTdnYlRNZ1ZibzJlOFNPTy9zOHkxU3M5ZGxjTzhUb2RsQmdBQ3lrRFlZRzAvQXRIV29YNDIreHIxcjlaR3JiRDlXekliemFvSEwwNWUrS0NWbTNVWCsrR2pDcDVFa2ZPd094bEhpbEpCU0ZIVENxQ0FvdEFpSXR0NllSNkhnOUZHbW0xWkZHd1d0VkFIT3dEUi93QTRmWHk1L0VET0pxUER5Uk5nTytIbkhqSXBoY2w4YkpxT2sxRkRoWGhwYWJhaTlSbzVQVWR4Nnd4SW52aG5Va0MyTHE4SGFkNHhCVnpDMHJLWlBYR29xTHNnK1V4MmM3dWZuS2xXcXgzeGJ5MmFSUVB5amM0SDFhMm96RVRpTnpodW14RTZxTUoxYzRYWTZTUVBYR0tRV0JJODNiKzJCZEZ6T0N1U3lURTZtc08rNXdKQUUwSFZDT1VwcmNuY2puaktrYWlSalVLQml4Um9UQk5sNzg4Sk8yOGFBVzJFeWpsR0xRUkE1NDlyNWNUYWYxNjRrelBGRVVmTi9mQzdtczh6T1NHTWRyWXhRekdNZncwRmN5TE0wdEpnL1hiODhSTGhpeXlMbUtTTThGb0dveEhtQUdxT2w1eEQvd0JEVWpWVGNFRzQyS2tIb1IrZUdMbUJHOFcvVE1EdEFlZ0h0ajBVWXhlek9YZW1JTk1Ib3duL0FEaWdLaDJqREFiaUNwQnFiTlJ4TFJsZHNYOG5SUWdCbGtmekJvajJqQkZlRFU5d1crby94aGJaQU9ZNU1MSGNTaGtjNndNVGdpTXlUZUw5c1IxdUZBU3lrK2gvemlBVVdHRk15SHZLVlhLQnhMdjcwUnkvdml4VEljRU5lY0RGUSttTStHZXB3czZLNWpWT1VIZ3dkNHk0R2F1V3EwME42bE4wazhpeWtBK2w4RFBDSGg5Y25SV2twSmk1WnQyWTdrLzR3MXBWTUVNU2ZiRmV0VUNJem5aUlArQjlZeEs5WFN6bzRzakVXMDNwNWFibXc3OC9UcmpldGtyU0xqQ1BYOFNHcVM0Z2dTdHRVV01SODBEQWh1TjV3Rnpsa01VeExrWGlkaC8zZEJ6amJHRUtJNGVJZDUwSTVjWWpOREZid3J4WTV2THJWYVBpQWxLbW5iV3ZQM0JVKytDeFRDU1l6V2U4cUlQT0pGcEgydmdrbVRBWXM4QVI5STMrd0dJQkMrWWlZdUIzd0M0anhsbmNJdzhvdkFzQ1RzRDJtTGRzVjlQZW01emV0ZFN3dnRJZkZmaFdueERNNWQySitIbHRiRkJZdXovREtnbmt2bE0rMk4rS2NRZEFWQmduYzlPd3dYOE9WUVRWNXdzazlUZi9BSXdxY1JyNndUejU0b0Npek9ka3pNd1d2YkMvQmFwTkZTYm1Xazk1T0RlV3FCQnFqVTNJY2hnTDRXcDZzdXZabUgzd2FHWG13eEU3VTg3bU9qaEMzVXFack9WWE1UN0Q3WWxwOE1yTmR6UFl4aTR4cDBBRDh6K3ZQK3d4UUhFS2hhWmsvYkZxREl3OUp5OHpZRWJhejd6Q0ZMaG9CbW9SMkVuQk9qVFVEeWdSZ05sS1R1Zk5NZGY4WUxCU3F3dC9VNEZnUnRjOGpoL05wcWJ1T3VBM0VjL1Rwa2o1bTZEYjN4Tm1xTlpnWllBZE92MHhRWGhCSnY4QVlUaGlLbzVNVGx5c2RsV0NzeHhHbzh5WUI1RDh2VEZZTE9HWWNIUWZOTnVuL0dJNmVXS3l5V3RZQWJlcEkzdzhaRjdTWTQzUDRvQXJLeXhZajFHTlZTMGs3N0QvQURneFI0VlVxR1QzdVRnaU9EV0FKRURvT2VQSEtCQkdGanVCQW5DNlN5U3drOHNHeWxwSWpHTGsxUTJ4c3lrMnd0bTFHNFlVZ1VacWJYQUo2ZXY5c1VzL1ZxMVRIeWdjaHp4ZFlsWnNPbTAvVEVFNDh2ck1ZbXFFb0p3L3I5emlUOTBHTExER3NZWlppdElnYkljUVlwVUdyZld3STU2cEpXL1BvWnd5ZUhKWEswRU1naWxURUhleWdYeHkvZ2ZFZ3RTQ3pBRGFKdmU5cjIzTzJPaDhONDByYkcyd0pqcCtXT2Y0bWs2V24wR1RwOVM2c2Z4aGcxNE1IYkZYTjVOV013TVQvRTFiZ0hHMVBUTWJZb0JyaWN3aTlwRGxLUVhZWUpyaW9sRy9iRm9FREFPYmpjUUt6WmhJeFFhbnl4ZURUaU9zdlBDTWkyTGxXTjZNcGxNZUZNVHhqSXhOY291VTh3ZEtzMFRwQk1EY3dOaDNPMk9WZUlQRXRTdWowWEJSdFpzcmFRcWdFYUNOTjJtWk9vN1FCaDQ4ZlU2clVrV2pVQ3VYalJKRDFaRWFVZ1RJMzVRSnZqbitSNGVnb296blQ4Wm44eEowa0pwQUJVQ2JNV3Y5dWVQWFFqc1FzM0tYL1RLdVhvclZEcXROL3dBT3VTU2VZVWdHUmJiQTNJWjZyVFpYcGtnMHpJTzRrTVhHcnZQWEZyamxDblNmU2xSYWdqY1NJUFMrNW5wTm85TVI4R3IvQUFhakJneDFLSkZnSnNWSjlqdU92MEVlYm1XZ2dEYWRRL1o3VG90UnExcVdzR3JWYldqTklSaGNCYmZ5c0RKa20xekdHblRoSC9aeXpwVU5IOExVRXFHQitKR2FnSjdsVVgzbnRoOEl3SmtXVFpqSWl1RlhpVkEvdkRFQXhhL29MNGFzeldWQkxldzVrOUJnWnhyTkJhU2tMQmNTWmlmTllEMDc5QjN4VDBvTnlMcXlDdGVrRFpMTlZLV28wUUNXK1l0QUdtU1lBTi9mNmRjQ0t4MzN2eVBMM0ZpTy93QnNFY2hrcWtNeWxqTWtnc2JIb094NVlFTU5GUmd4SkxtREpuU2RyZHVYM3gxR3drQzczN3pqSXhMVVJ0MmpiNExNNWNqcFViN2hUZytiQ05wd2tlRXVNSlJjMDZoMHJWdUdPeXNMUVQzNjhvSHM5RVk1V1VGWEpFN21FaHNZQmxNNWNkTVhzamxnTHdMN1lqMDR2akJZV1ppU1RBeW9pZ0JWRTJ4b3p4ako2WThLNG9rNU44U3Y4UzhZM3ExZEF0dmpRMlA5OFFaaHdSdE04OE1xNGd0cEJtcTVxVGVmWEc5ZXROc2VaVEp6Y3oyeE4rNnd3SSsrTkpVR0FBNVdUVURwVVQweDVXcmRNZTFqQUp3TXFWcFBUQXF0N3czeWFCVW1NazNPSjFHa1NjUjVPbitJKzMrY2VacXAzd1IzTlFCc05SbWxlc09tS2oxTWVPK05GYStHaGFrN1BabStOR0dOM1lERUpxZHNFSUpNNTF3OVRTcmh5QkVHN2JBUVpOZ2J4WVczSXhkOElFbDJmclBtRTZoY1RiWXFKRjRtOFlwNUxNU3VscmpCemd1U1ZBMGF2UE4xUHk4N1J1ZGo3RHBqblpEWW96Nk5MVHpEZjJScTROeEJLeStWcGl3TnhQYUQrcjRJRkNDTGM4TEhBRk5PaUZrRXF6U1ZuZWJOZm4ydzU1ZXFycUdHeHdXTEx2cDlKSjFHQU4va0hmOEFXZUd0RytQV3FqcE9QSFh0T05TUU1PcVRFbWJpdU1iR3JpdTBIWVh4dFR2N1kyaFBCakxTeGpSNlhURVdkektVNlpaNmkweEVCbUlBQkl0dmJBamh2R3EzN3orN1Y2YWdrYWd5R1ZGaWVkNHNlV0puQzhHVnBxcTV6RHgzeGcxYzIxeVBoa3Fsd0kwTkdvY3hKQlB2MkdGU3B4R3BCWFV4VUVuVE50VzB4MTc4NHd4ZU1lRmFNeG1oTHN4ck15MkduUTBzUWVjZ2xRSXRBT0Y1K0h4U1NvTGh0LzZUcWNBYjh3aE9Fc29ITXV4YjBCS2Z4aVQzUDU0TWNIb083cW9Fa2tDNTNtMXp5MysrQmROSWE0QTZTWW5CN2g0S0ZkU0VUc1pzZmZCREdDc1lNbE5SblVmQlhEbFVGM3BoSzZqNFozQkNRc0FpWXV5bHR0eVR6d3prWVVmQjlaaldMT1QvQUJGYlRKSjFhQ2s3OHhJUG9jT2VGbkdCM2ljamVZbUErTGNNWmdhbEptRGdiU2Jqb09ucGhaekZHb1JlWnNiMzcva1p4ME5jUTE4aWhNaFJNaWR4dnp4WjA1Qzh5WEtMRVI4bzFlRHZmMnVCZ1RYeTFWbnZPNUp4MWRNcWcyVVlxNXpoNkdJUWIzNVc2MjN4Wjk0eG5iVEpCaFlHNXpqSThBcTFxaXFDVlc1TGNnT1pIZStIL2huRGxvVXhUUXNRUDVtSituSURzSUdMMUhMcWdoUkhYSHB4ejgxTVpZZ0FtbE13Umoxc3lwcWZEMURXRjFGZVlXWWsrK0svRnM2TXZSYXNSSVNHWUM1MGdqVkhVNlp4eUxNK0syWGlDWnhReXRVMHJVcGtsdko1Um9FQVNJMmdiakJZazA3RXdIR3ZjVHM4Z0hFRFZUMXhwbU0wczZKQUo1VGZFYUFrMkdIclJrTGtqYXBNeG15akUxSEtBRHpYT0k4dFNNeTFzV05jbUJqQ2V3aG9vNVlUVE01bEtTNm1JVmR2cmdIbXZGdEZYQUIxVEJKSElHMGY5MDhqQWlMNHp4cFVjWlY5Q014L3BFc080SE14STkvWThzZmlZWHpWT2MyNXpxNTk0Nzh1K0k4K1IxTkxPMTluOU4wK1ZTY3AvT1B1YjhYdTAvRFVLQk5tOHdQUTJJZzcvUVlEMU9PVlhQOEFFWU5wa0NGVVNESWpibURFMjk4THpaeVZzd0pKNmdXSnNEdmpYTWNSQ0JUYUROeUdpQU9vQjV3Sjc0ak9USzNlZDFPazZUR0wwaU5YL3dBWVZvMGtLUjFpRzdjNHQ2Y3NFdUQ4ZUZjNkdCRGdBOWp2dDlOdnp4elNzN1ZDWWtPTld6Vzh0ZzNtaTB4c0NabXczR3VacjF0U2dNRksrYnl2SG1BTjU2ZHI3bnFNUHc1c3FNTE8wZzYzb2VrelkyS0xSN0VmWDEybllXWVk5Wm9YMXdtK0cvRXoxQ3ExZ0JJQTFTTGtSYzJBRS8ydGhtWE9VMmtLd2FONHZzWTMyM3gxOGVSWEcwK096OVBrd3NRd2toYkdzNDFhc0FKKzJLN1pydGg0VzVHV0FuSzYvRXhTY2lTQ051L3ZoczhJNThOK0t6YkRsdkZ2Vy8yd1B6T1FWZ1JwQklpUXdncmUwanAzRWp2aWZMWmNLd1lnbUQrSGxPeGpuZTk4Y2NzRjNuMWhCZGROQVZIYXBtS01rTmJTUkJubVFSNzg4RXVFWnNSR3VZL3ZoSXFoZ05MY3RpQkE3YmVtTTRmbVdwc0N0aU9YK01ZcFU3Z3dIUmdQTUxuU1hmbU1WeXhQcmlES2NRQkFEV0pIMzZZdE1vYnVPb3c0WmlKSTNUQnR4dEJ2RmVKdGw2TlNydVVXdzVTU0FzKzVHT2JKNG96UmZXYXRTU2VwMHowZ1dBdzhlUFZJeVZhOW9UNmlvaEY4Y3N5THpBSjBpYnRjeEo1am5qRGsxayt5TzZmQ01hNzd4d3JlTXExU20xTndDR0VHUUJ2ekhROStXQk9WcTFUVytNanNyS3NLdzJnYkFqOFFtUFljOWpIUnIwME0yZFJ6SklQYUJCL1hQR3o4WDFEU2cwbVJGaUNTVEFrNmlMYjdjajB3cGhlOGVDRkZBQ1E4VjR3eERxN0s3Rnk3TVlra3FGbTFnQmVMZml3R3liYWxmenF1b0dRM01DNDdscEV6ejk4YjVsRmllWTVpYmpWRGIrcWozd1JYSjFDdEY2VW1tRk9zRDVRMm9rbCtXMGVidDJ3bHI0bEdMVCtJU0hJSlRjZkRkUmMvTU53V05wK3Uvd0RpY1NaV2k5Ri9nL01wdnBOd1J2dUlJUHA2NEs4UDRUclErZUhJa0NZVmdCSUlPbTNyRWZZNEhjUWVvdGJUVmxXQUlCaUpYcU45enpIZkRNYmtpb2xnTmU4T2NGenRRRUtta0drVFZFbTBnS2hVZXFsdlcyT3JJWkFQVVRqazNoakxDclZXbUdaTmZsTERjaUNUN2ZMMDN4MXVsVENnS0pnQUM5emExOEV3M2luTTlVWXdaaGRmdzlRMWthZ3ZPSmlmU2NicU1Wczd3NVhJcVFGcXA4bFFEekwyN29lYTdIMWdnMEVTeGxtcFVpUGY3WXIxK0pVMHFwUllrUFVuUUlNR0FTYnhBTUE0R1VPSm1vekt5NkhRUXltOFRhUjFVd1lQYnFEaER6L0dXcVo3ek9SOEp3YVdralVZS2pTb0pnQnBJTWlDSm5yZ2xhekRPSWdUcTdESGlqRWtZMGJHZ2IzRkU3UmE4ZVpzSmw5QkxBMVNVWFNBZk5vWmxrYzExQlFleHh4NForc3J0cGFLcmVRRUtzb3U1MGtna05ZUXd1QU45c2RWOGY1Y1FsWXdmaDJRR1lVdUdETTBjcCtFQjc5c2N1UEM2K1lybEtLVFUwczVBSnRvRzk3Z2s2UjFsaGhiTjU2bGVMRVRoMURqdkd6SlZIek5jSzh1eGphUnBqa2JXWWMrK09sY0twUFRwaFhNa2JIbVJhTlhVNzM5TWMwL1pueGxhVldyUnpESDRqc2thckZISjBmRDAyS1NUTnhQelNjZFRjanJqMkJPOXhYVnVka3FxbnRWclhHS1BFcWJmQ0lWbVZqWUZRQ1FlUnVRSTYzMnhhcVZQZmY5ZXVLVEtlVTRxMDJLbk9MNldzYnpsMmZ6bFFPNnY4U1FZT3FadGE5ek5qWTlEM3dQcGZDZmtranNKRWVtRzN4ajRlcVZycEJBa3dwQ3N4TEFoWWpTZHlkUk0yd244U3lpNWJ5R20xTnAzbnpPay9Oc1pGdGdSL25tNWNCV2ZVOUg5b0psQUJxKy9FOXEvQktNVzB0ZTRnVE5yQ2VmS01Vc3RrdytwMUxCRnNxeDdrYjNFOHV3N1lxVnFxU3JCU1JOd1dBazh6QTIzTnhpZE9KUHFDMDlJdEhYdkprNzMvUEN0RGRwWTJmR1Q1d052VDY0bVpqNHFrd3BSU1RKQ3lOSU0rdlFFa0RsMG5FVkxNbjhYNGJnZ0M2ODdLT25iRWo4VExNYWRUeTJJTVh2YTQ5cjk4RDZXa0N4a2tla0hwaGdIK3drdVZ3QVBDTzN0aGJKOFZ2TEtPd3ZBaVJidWV2L0FCZ3B3N08xRFdwcDhTekVBR1FDQ3dzQ1J1YnhCT0Z5aU5UZ0FiODFCSm4wNXg3ZGI0amJpSnBzQ0xNRElJM0JCc2ZyR0dLQ3B0WkJteWVLdWw5NTE5c3FRNkswaVNBZHVlTk03bGxSeXNNMFJmVTNRZERnWDRjNDNXemFxK2dlUXJ6NkFkNUhXLzhBTmJETStYa3lXaWVrWXQ4VlRWNysrY2tkTXkyRm9lNy9BSis4VWMxbVpaV2lDSkJFYktTWlR1TnQrWUdLV1k0aHBJazFTZ0JETHVzbFNWSzhnd0lFWDJPQ21kNHVLNDBnRzF5R1ZWaWVRQXZGdVl3UE9XMVNERzF0cmV0c1RlR2ZTZEFaQU8vNndqa0twcjB3Vmxsa2d6dUNPUnYwSU4rdURPVTRXQ05UQ0lpUnNRY0kyYzR3Y3RDVVN4RTZpQkFXWUFpMXBzT1Iyd3llRnZGSzFsWk13eXFaR2tHWlBNblZBSFR2WTlzTDhJd3puSElqSFN5U3daOHc3OHZmcGlSSzVRQ052ZjhBUEZoV1YwOGpCaU40SUo5NHhGVXl1cGJZOGNaN0dCNG5ZaUN2RStlcFZNbm1BMFdwbjAxV0NmOEE3YWNjbW81Z0tTTDl1L2ZEViswRE5DbG95d256UTcrZ2tJUFFuVVkvcFhDdEErMzVZZGlYa21JZHQ5cHMxYVpBdDFQMng1U3FrQngxRmowT3g5UEt6ZlVZMHIxSWlmOEFuMTdZakVueWdGajJFNyttR05wQTNnQU14Mm11ZnpSTXhiVkJJL0wzeGU4TlpOcTFQTlZDV0NaZWhVcWNvTEtwMGd6eW43QTR2Y0s4SFZhL21xQXFPaE1EL0o1N1ljbjRIU3luRHMyaVcrSlRsaVFUT2xZQTVtOTdkWE1SdGlKc2lPZElFNkM0OG1KUTE3L3BPZThINDFCR3BtU0RJWldLd2ZUM00rdUdiTThTZXROS3FWYWt5cXdxQlRLd3dtZEpnV2tHQnZwTVJJd2dhMVhkZFJHeXFTTGRTZVdDL0VPS0NuVlZjdVpSRVZDeDJkZ1NTZXF3U1JiK1hHK0VRYldiNGl2K0w1eDQ0QncvNFZkZEZRTjVTeVJabUF0SXY1aGNrbFNZZ1NCYkQ0M0VZcEtBWllpQ2VsdDhjaDRibTBkZGRlblVXakk4eVNBai9oY05IbGVkaUNKNzRjTXJ4ZXBRUUd2L0FQTlpVaTJhcENhbE1mOEExa1g1aC9XdlFrakJxMSsrSnlJVnJWeEdKOCt4UlV1Q3JBeURFZ1RBL1hURXRMT1ZOVE5KdjloTm82WTB5dE5LcUxWcE90U213OHJwQkIrblBGdkw1T01lcHJudFNWRnJ4ZnhNMGg4UUNLaEpDTklFV0dxMzRoQUV6YVFEWXdjSzFMaDFPb3kxRm5YVkxRWUkwb3Ewd2pBSCtvc1FlWUFnMngwUi9EdE5xM3hxZzFrUnBCK1ZZZ0MzUG1mVTRYdkVmR3RHWmtKLzRKQ2lWTU8zekVFeVBMOXhFODhIVzAxSHZ0eE5QQy9DY3hRcTFWYW94cFVHSXBrbjU5Y050TUJBSXQxanBocXpOZGlXSlB6Sm90MUkzK3VFSE9lSWE0cXNhWmd1ZDVPbElzUUZraHJHWllrWDJ3eDhNNDQvd2kxZFF6UjVTQnBMSCtya1BVZlE0MGlMSXVEUEcrZWQ2UzB0VVBwZDQrVU1FcVVlZTArYlk5c0puRDg4Y2xVREtXQlpaZGszSTNVM2lFMVJiY3dUR3dCL3hIbm5xS2xRd2RQeFFKSW1LZ0VyYThEUXBrK1krNHdGNEp3MnRWcWlvbzBEV0toY2dGUjhPUW82RTh0UEtNSnNrM0tSU1l5Q1A0L3VFdUoxbk5kZUlRR0ZOcWRlb3Y0bHB5Z0pBajhON2JuUjdZNmpsbUZRQmxJS25tRE00US9DT1ZXcG1HWFZOSnRRZENTQk1OTk5mNWdUcEpHMExhd2pEUnd0WHlOUDkzWldxVXFjaWxVcCtaaFQvQ2xSZm0xS1BLQ29hUW8ydzNEazBnazhTVHFjQXlFQWNqdDlkNGJaQU52dmlxN3p6eERVNGlycnFDMVkvd0RKclQ5TkUvYkVlUnIwNmtsSEppeEJWbEsrcXNBdzk4VURPbmFSTjBtVHVLRTB6bVlJTUFRTUJjOVQrTVFDZ2JjQWtBa1NJTyt3Mnd6VnNvckNQOXpqUTAvaHJFRHRNWThYQkc1K3Z6bmt3bFcyQStPLzVDaCtzNHB4RGh6VWF6VTNHbHdaRitXNElqcjdlMk44dGxXcHVXUXNUMVFrRTlkNyswWG5iSFRjOVQrTEt0Y0dSWVhFOXp0Z1JrL0NRWFZxYVZZUkRURzRNMjU5OFJtZ2RwMlJrTEw1aHZFTE8wbnJrdWxJeHFWU2JUcU13REFGNXRQY0RGei9BT0ZIV2thbFFCQ29KMGtna3JFemJZNzJQVER6VTRaVFh5b1YxQVJHbVZJUDRYRWpVRGdabStFdkFDNWlyYmJWVU1kNGpiNzR3WkZtRkdJdUwzaC9ncGFzVVNyOE91aE1BenBJaVREQTlEOURoMnBaYWxhaG02S2xpREJzVWVOOUxRR0RkakI1akNMbnNsWHBtWUEwZ2Z4RkFCQUJtNFM5citZaVk1MkVXc254NzRuOFBNTVFkMWRCZVJzUUozNTI5SXc0VnpKMlZycUhtNExTb0hWbGF0V2kwUUlmVWtid1VOaU8yS0Q4ZHJLU0t0T3FXSE9sRElSMUVrRWVtQ1BETTFTY0VWSEd0YmhoczQ1RUEzUTlVYTRPTEp5U1BjeU9YNHVYb0l4aGYxbnZEOUlxY1BldVhJWUh6UmRoWUM5OXYxQnhaejJVcUt4Qlk2ZW90SSsxdlhGeGM4YlNWMWROaVFwL0RhZEk2ODV4TzlRMU53SlgxaWUwWEovWFRDL3ZKSmxoNkJhMmdaY29EalRNOEphbGNydjNIUDAyd2ZvMXRKdWhtQjNtMjk5c2FjU1lPa1FRU2VscCtodzBaaGNtUFNHaVFZRC9BT2xabFNLdE9vRWJscGZRMStYS2ZyZ2h3enh6bWN1Mm1xVnFyYVEwQnZaaC9lY0xYRWExWkhJR3FTZVUrMFlpZkxPeWsxU0tTNnAxTVBOM0FVWDNIUHJ0aldQZVpqVzlpSTM4YjRmU3o5WVowTTdVcWlvdncwSG5WbHN3Y215eEFJaVoxSFlYTm5OZUY4bTlObHl6MDlZQSthcFVFSGZTMnN1cy93Qk5vNmpDalM0eFN5NFFVRjFhajV5K3FTTkpnaThUTWN1V0xsWHhoVmRTamluQlVnZ0FpM2E4ajJ3ZzQ4aE4yZm5YNURuNHcvRHhqdERuRFBCVkZWK0xtS3JHTjFwcXptUFpTUGZCcWh4WEkwbGlsUWV4amVpVzVYMGlxV0crMmtlZ3h5OWMyd0lobjBzSVlFaytibmM4aUIrZUo2RmZSVkRnUnBaU090bzUrMkNHTHUyL3YrdHZoTWJKV3k3ZTc2MytNNno0ajFJS1FRc3JIVVQ2UUxIcVpQNTQ1MzQvOFNWWFVaVm10Q2xvQUFjeURMZWhBaU9ZUGFHdk0rSjF6SVdReWxaMmlKbmVUZmJsL3dBNDV0NHdwZ0FmMGtnTnpna3lQMTB3ZmxGV0l0UXpXWjU0ZFJDelFRb1NtN01TT1lVblR2ZVNBQjZnN0E0aXE1STFITlNsSG1KWXJ5azd3QmYyRjhOMzdLZUhMV28xV1lMdUZKL0V4MGdtZlMyMjg5Y0x2aUtnY2xtcWxCUU5Lc0NCZnpLM21VRzNNRUErK0ZrRWJpVVl5R3NNS3FkbjhENUJGeVNDQzYxSkpOUlJMS2JBTUpJaUxkQ0x4ZkFuaUhndXJsbk9ZNFhVK0dabHNzNS9oUDEwVDhoN2JXR3d3eGNOcUJLVk5GK1ZWVlZpM2xDaVBUYkVmRzg4UlFxQlQ1aXVrZFJOaVI3SDc0YUFPSktTd0phSjNDYzFUZW9YeTdISVp3M3E1Y2lhRmM3bnl3UnFONGRScXZKVmhodjRSeGwzbW5XVDRHWUFuNGJDUTBmanBOYld2VVdJNWdZUTZ3THFLVlFLVUVhU1FOU2dHZkswU1BlMThNdVRMR21xR3VLcWd5dnhWUHhFSTVobEIxUjdIdkZzYjVsbTZWTzRoK25tYWppUXlucVFyZlEzTWU1d080aGt6VnM2aHdXVjVCV3hVRmI5TEV6aTlSZHl2bWNNWWthUWVrNzhwN2VrNGtvVndQS3l6UFg2OHdOdjdZRFlubUdwSzhDQkU0UFExRmxBYVRCWnJVK3NnbmYybm5qZXB3dFF3cVBxcXhzRHBDRC9BTEZGajdrbkJQaVdjTVFFdGFTTHhOdExSWUhGRExabGw2d2Ivd0Jwd3dBVkFabXU0SDQ1dzk4dytzdUZwQzdGb2hRTlFrYkFrekhzT21GWGp2RmZMKzc1ZTFFZFBtY25jdWR5RDB0UHBBdzljZHl3clVhZ0c0V1ZHcUZCbmM5K1VtdzdZWDhuNFdYOTIvaUhSVkpacHNmSllLTDdiU0NPdDUyd0pVUWc5MWM4OE04TmFvQlZvUnFCMFppZzBCUVlsYWxKaEJpUXBGNUJBTWlJdzlaS3E3QWZFcGxHSEluZU40WUNHK2cvT09iMCtQcms2UVdya3dhdzJjc3dITUdZM2s5NDU0czhML2FUbUt6NlRsRklDc1JENkpLZ3dBemtEZUJ6dEptMEVSaVBJaE9kcUluUkszRTBBNXowNmRRWTU0cURpNk9BMVB6VDEyOUl4enJQOGVxYVlmNFZNa0VFZkVScm5hQXJNZEk2WE53WmpIdVM0OVdUeS9CSlVic3NnRzVrZ2tBYWVuK3hoYk0vZVBUQmk1NW5UOHB4Qkh0c3czR042aHZmQ0JSNHdYY0VIU1Y2NzJtZW45L2JCeCtLTTBlY1hpTnVmSysvMnhqWmd1elFCMHhZa3J4RE5WdWtZR1oxenVmTjE2WTBYaWFrUjlZL0tNUzFNMHNHQlA2N1lXekF4aTRzaThRTlVMbjVZSDY5TVIwOG5WcU5hV1BMbVA4QVdMdWxadWZRWVlPSFZrVllRWDU5Wjc0TEdGYUx6YTA1a0hEK0RMVFhWVUFaenk1ZW1BM0hmQytWYzZ2aEJTZDlCMDM2d0NBUFdNRStKOGFLTnAwbG5nSFNEQVVFZ0F1ZGhKT0ZmeE54MUNkQ2Z4Q0Q1Z3Z5RWpZRS93QW82YzhQb2NDSVV0ZGt5YXI0WjFLRFRyTW82enIyOXIrcE9LVDViTjBqcEFxT0RmVlQyUExvTDJ3dnBXcWx5OVNvK2tLeFlna0sxUnBoZWtBRGJsYzk4UVpUOW9WYW1vVDk0ZGROb0Y1am41Z1l0RzFzYUxIYU1MSC9BRytjdVpqTnVJZFlWSkc4a2hyNzJFZ3pQcU8xOStIWjRtUkprQ1MxakEyMjVDVE9OS2xVdW00bm5xay82bkVmN29GSWVrU0g1allFZWw3WVVHUXl2Sml5aWlEWWhScy9PdzJGenpudjIyK21QZUc1NkdoL04yUFdiUkc0UHA3WUJyeGZTU29Fa1dKRisxK1hQKzJOcUhHVWdCanB2Wmp2dit2N1k4VnNWVVdwSVBNdGNTNHFUcUtvQjFiYUpOZ08rRkRPdXpFc1RKbkRJYy9TWU5mVU5wa2JtM3VjRGx5SWRZQUN4Smt5U2ZlSXRlMkg0MkFIRVRsUmlkamNCT3hsWi9RZzQzK0h6bVNkOEZ6d2tDOXpIMHhQUzRNWElFRWV6ZjJCKytHRmhKOUxjR0NhVmZ5NmQrMzVFWU9yU0lSTlNrQTJ1SS9QZkJ2ZzNEeWs2YUVpTHNnMU5HMEh5enZlSkdJcUMwMUpWZWJHVUtqbk1XSU9rZ25sM3hMazZqU2R4TE1YU0J4K0xlWmxVTEVGVmdhUVR5RnJHSjc0RGVLY3N0V3RUS0FsWWtnR2Jrd1R0MkgvQUxzTXIxR1VGVmlEZUFZdDJnZmJ2aURLSUdEc3hwaHd1bVlJVUNaOHdNamNjK21FbnFRM0V0SFE2QmR5L3dDR2NrY3ZTMG80SHhmT3hPNEpGaDdBQWZYcmhTOFJ0VU5SNmxaQWRSR2xpZDFTd2k5Z1B1WjlyM0c4OHlFTVdJbG8waTRVYUZzQ0xNcGxDRDNPQ2ZoZmh2NzJUVXJJUW8yZDdMWVFBQ2Q3WDI5TmpIZzdrY1RjbURFcTJUQ25oSE1SUUFxVk5SYnpibVlKZ0RyR21NTkdYeWRKbEpkcGdEbllEa0FldmJDcHh4c3RRVW40b2RoRWhCYUJKQUxXWXhjaTFpYllXMzhhVTJBU216YTBVd0NQSk1TWnVRODg1QU0zd3dNdzdSRDRVZWlEWDZ4cXpHVlJtSzZ0SnVJSkRRZXBnZjU5Y1NVZ0tGTVByMXp5QzdRYjg5d3QvZnRoZXBaaFdvbk0wS3EvRWFHTk50eDhxblNXazhodmdmUzhYTXAwaXFOSi9wblR2QVlORThwUFRuaExObU54b3g5UFFLbWRSNFZ4ZEhXTllFL0tXaXdQOHhMYll2ME00dFdtU29GbzVYdVlGdDROcjdYN1k1MVI0bFJZR0hWQzRPcFUwcUMya0xDZ3FaNTJFZmU0MFZhcXJDVm1LZ3pCSkJCaUFZTmhibDJ3U0crMFRsd1Y1cDBqUFppRmdFU3BZQWFoYTQ1Nzk0UCtNVlRXRlJTUllMWTl1b0VHTy92aEZ5K2VxMTZrTVNXTUFuZUFPWlBRZGVnd2FyNUtwQlpKSTBxMmxqY3N0aVB6SVBPY0grRGt3RlVFY1JncFpsUXBKTURjODlwZzJNbmJjZFQ2WUQ1bk1DR015VHlBQzc5ZXArdzN4ZHFaY3RTREQ1aVFBa3F0amFUY242VEF3T3k5UjBqV2hCVm9Cc1FJQWh0ek80dnZ2aERzU2J1V1lRZzRFb1orbFVBVDRqanFvY0I0TWdnclRQTVFJTFFPY2JRbWVKTW16dXpLejFDUjVtSXVSMU1HSS94anBENWtFd0d1YnorS1B6SDZ2aUE1ZFFJRVQxc1A5Y3pIL09HSmwwN3dzblRqSUtJbkZzend0eGJTMDd3UmUreCttQzFIeFBVcFpaS0ZObldKbTRpSmthVDgxek1pVGgyNDBWQUt0cjBHNTBrQlo1eVdJTDlmZmZvR2Z3MWw2aXFRV0pON1FBUno5NWkrSGZlVnEyRWovd0RuUHFJeEhmNVR6dzU0bmQzUVZocUNnaFNkN2kwa20vbUFQYUxiUmh1LzZ2OEFGQktzcUpJVldOaVR6VzhqcGJDemwrRGxVTklEV0NEQUpVS0d2R3JZa1RCTURsNll6TjVoVlZWcVVVa2VXRnVQS0F1b0NMZE91M1BaTHNtUTdTakhneVlWcHZmR0dweHRSR3dhU0dHa0FuZnFSZVBYR3I4ZWNBQkRxWCtnM053SllFU045dS9hNlBrc283MzB1TGtBc1JBamxMRVRFRWY4SEJESjVhcUZMVXlIMGtnc3JMRXh0Y2syMi84QVhoaFJRSW9NenNBZGhHdHVLTURPaHZSbzU3WDVjdHJZbXkzRUtydUZwZzZqT3pBaU9zL2g1NFRjcm1jN1VCWlZka0ExVHBhd0U5QkJHLzM3NGMvQ3JNdEJhcTZXWm1JYllRQklJQjBuVkc4Q09jZGNlVk51Sm1YSUJkR0VINFJtRytad0ZlQ3dCTW1OcHNEOStlSXF2REtOSmRSaHRQNFF3QTVYUFQzeFc0cjRrTk53QVlnYW0xQStZa1NFaVBMNi9vcS9FK01WS3JTN0UyMjVBRzhDTVZKak01cnZjdThkNGtyVTlBQUJIeXFkSUVIZUdVeE85anpQTEhOc3drTTJxWkpKc0NlZlZaQjlzRTg3eFVLNFpDWkgyeG9jN21ERWF3SUc1L3poNnBYRVN4Qmhhcm4zMHlBSm1KMUJ6Ny9OSHQveGF5NXJOOHZ3b0o4M25tTGJFUkt6NlI2MkdNeG1GSEFsWEtXNnZJTzg5NGdFcGdFNXFsVDBGU2RBWTdrSGRSY1gyMnZpSE50azJDa2F5TG5YOE1KcVBQZGczdWVlUGNaZ2hpVWJSWGlzVGMxWE9VQ0F0TlVRa2ZpMWdEbFpnMWpQUHZpT2puNEpVMTlKV1FVckhYQkg4clRxanB1TnNaak1ZeUFDZUdWaDNseWx4Q21ESVlTT2E2b005N1RnZ21lVmhDdVFmOWZYZTJNeG1FTUtsS3VXRzhteVBGS3RJbnoxTk4vbDgwbmtTR01SUHBqM2lCZXVEbUtZRFZGVUdyQTZpZFE2V0gyeG1Nd3RUcXU0M0t2aGFTc29sTTNCS294QjNaakY0bnJ5SDVZMmJnbFIwMU5tRVZtbGlJWjdqYSt3Ty9YYmZHWXpDeWdCMmoxNm5JVnE1UzRWbktOSFdjeWhxalVRb0xFVW9Fd1NvdTRKSk9rMkVYQjVROGE4WUV0SUVyRWdhUUVuYXk3Unl4bU14VXFnR1M1U1czSml4bnVJTlVPb0Ezc0FMVDdERjQ4TnAwYVFabmM1bGdUcEFYUXZRRTZ0Uk1jeGpNWmc2ODFSSXNxVDZTTGhtYUlmUTFUNGFFRW1WMWtIc0JFOHVZMzk4UVp2TDBRWldyVWFlYklpR2UzOFJySHVjWmpNRVZFQ3pERDFtOG9XbVVHa0FhakpKWG5ISmlaTnV1R1RnOWZRSXFlU1ZBTWtIemIrVVR2QUI4eDlKeG1NeEUzb0oxUWxibU5PVFRMcW9DcWpzR1BudWpkd3dubE1TUFRCUDRvYW9BSlZlZ2szK1dGa1Q3ODdZekdZa2F5MmttTkNqVGZ2ZzN4UnFVZ3N6YWRPMmx2S1F5bFppR3NKRWdBQ1o1REM4bkZTd2ZNUFdwNlVpRkZ5dE0zQk1lYlVRYmplZTBZOXhtR1kwMUJ2WVFQbVlrWlN1bjJnbjVTdFY0dFNKV3A4UkdEa0E2U0FZRi9PQ1oyN2N2YkZodU1nRXFLaXVTMGVYWkJNUVNkK3ZmSHVNdzNMZ0FITVBwK3NaendCL1VzYVVZNnFnV1lLaXdMQWRKMzl2enhzaUxGcmdXNmZTTFk4eG1PWlpia3pza2FUWWtHYUlOaHFraTJrd0JzUk1FVFBUOUFVS0FyVmtXcXNJQUN6aGdJM2kzSnRqRTkvVE1aaWpFZFAxN29qTXVwZ1BXTTFJY01xVTFSRkJMU0ZrT3preHBra1RBbU40SFBIdWJ6T1h5bEw0U09GK0VOazA2bXVESnRZazNtM3pIYkdZekhVS0RpZk9aR1BNVWM5NDlkbWdJdnc1REZBTjRJYUo3LzM5c1ZPRDhVcUNvYWVYK01hVlVuVFNWeHJSai9LNUFFY3VSSUZ6enhtTXc5bEFvQVNZRTdtUEZEZ254RUh4L2lhbEFVTFVhbjVoRXlHcGxwRjR1Znd4aWhXOE1VaTUxdFVVV0drT3BGK1cyb0R2OStXTXhtRm94OVo1amNzNWJoR1VvTENxaFA5UkJNZERhWXdGNGxsYUZWeXhSdW44TUFBeDZzTDh2WVl6R1llcXdGSkUvL1onKVwiLFxuICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOlwiY292ZXJcIiwgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsIFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiLCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgT2ZmaWNpYWwgTmV3cyBGcm9tIFBsYXlzdGF0aW9uIHwgIDEvMDgvMjAyMVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoMT5SZWFkeSBmb3IgUFM1IEFkdmVudHVyZT88L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBU1RSTydzIFBMQVlST09NICBpcyBwcmUtbG9hZGVkIGFuZCB3YWl0aW5nIGZvciB5b3UhIEV4cGxvcmUgXG4gICAgICAgICAgdGhlIG5ldyBjYXBhYmlsdGllcyBvZiB0aGUgUFM1IGFuZCBjaGFuZ2UgdGhlIHdvcmxkLi4uLlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24gaWQ9XCJ2aWRlby10cmFpbGVyc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWlsZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNTaG90XCJzcmM9XCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUVXNFenFuUmxSZnF6UmdUdldOU0k0YXhraEVNbDVtdFBkMGcmdXNxcD1DQVVcIi8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1wbGF5ZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSBcImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U3BpZGVyLU1hbjogTWlsZXMgTW9yYWxlczwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhaWxlclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic1Nob3RcInNyYz1cImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1RBNzEyTGRoV0o3MzhaRHcwZjRYLUJHS245XzFMQS05MzFCUSZ1c3FwPUNBVVwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLXBsYXllclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9IFwiZmEgZmEtcGxheVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5OQkEgMmsyMTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFpbGVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzU2hvdFwic3JjPVwiaHR0cHM6Ly93d3cuZ29kZmFsbC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL0NvbWJhdC0xOTIwLmpwZ1wiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLXBsYXllclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9IFwiZmEgZmEtcGxheVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Hb2RGYWxsPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWlsZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNTaG90XCJzcmM9XCJodHRwczovL3N0YXRpYzEtd3d3Lm1pbGxlbml1bS5nZy9hcnRpY2xlcy82LzE5Lzg2LzYvQC8xOTY0NzgtYm8tY29sZC13YXItcmV2ZWFsLTMtYXJ0aWNsZV9tLTEuanBnXCIvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8taW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtcGxheWVyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0gXCJmYSBmYS1wbGF5XCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNhbGwgb2YgRHV0eTogQ29sZCBXYXI8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhaWxlclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic1Nob3RcInNyYz1cImh0dHBzOi8vd3d3LmN5YmVycHVuay5uZXQvYnVpbGQvaW1hZ2VzL21lZGlhL3NjcmVlbnNob3RzL0N5YmVycHVuazIwNzdfUGFydHlfYXRfbmlnaHRfUkdCLWVuLWUwNGRkMThhLmpwZ1wiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLXBsYXllclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9IFwiZmEgZmEtcGxheVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5DeWJlcnB1bmsgMjA3Nzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=