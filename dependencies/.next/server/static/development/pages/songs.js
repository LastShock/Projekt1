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

/***/ "./components/layout/Background.jsx":
/*!******************************************!*\
  !*** ./components/layout/Background.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\akordy\\dependencies\\components\\layout\\Background.jsx";



function BackGround() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1484200589",
    css: "body::after{content :\"\";display:block;position:fixed;top:0;left:0;background-image:url(https://i.pinimg.com/originals/ea/3f/d3/ea3fd3102ccf575e3c33954f73eab78d.jpg);width:100%;height:100%;opacity :0.6;z-index:-1;}body{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxha29yZHlcXGRlcGVuZGVuY2llc1xcY29tcG9uZW50c1xcbGF5b3V0XFxCYWNrZ3JvdW5kLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUyxBQUk2QixBQVlELFlBWEcsQUFZbEIsY0FYbUIsZUFDVCxNQUNDLE9BQzRGLG1HQUN4RixXQUNDLFlBQ0MsYUFDRixXQUNmIiwiZmlsZSI6IkY6XFxha29yZHlcXGRlcGVuZGVuY2llc1xcY29tcG9uZW50c1xcbGF5b3V0XFxCYWNrZ3JvdW5kLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEJhY2tHcm91bmQoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9keTo6YWZ0ZXJ7ICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb250ZW50IDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2VhLzNmL2QzL2VhM2ZkMzEwMmNjZjU3NWUzYzMzOTU0ZjczZWFiNzhkLmpwZyk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHkgOiAwLjY7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPiBcclxuICAgICkgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmFja0dyb3VuZDsiXX0= */\n/*@ sourceURL=F:\\akordy\\dependencies\\components\\layout\\Background.jsx */"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (BackGround);

/***/ }),

/***/ "./components/layout/BaseLayout.jsx":
/*!******************************************!*\
  !*** ./components/layout/BaseLayout.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Header */ "./components/shared/Header.jsx");
var _this = undefined,
    _jsxFileName = "F:\\akordy\\dependencies\\components\\layout\\BaseLayout.jsx";




var BaseLayout = function BaseLayout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./components/layout/SongCSS.jsx":
/*!***************************************!*\
  !*** ./components/layout/SongCSS.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\akordy\\dependencies\\components\\layout\\SongCSS.jsx";



function SongCSS() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "149662474",
    css: "h2{font-size:50px;}h3{font-size:40px;}.song{margin-right:700px;margin-left:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxha29yZHlcXGRlcGVuZGVuY2llc1xcY29tcG9uZW50c1xcbGF5b3V0XFxTb25nQ1NTLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUyxBQUkrQixBQUdBLEFBR0ksZUFMdEIsQUFHQSxJQUdxQixrQkFDckIiLCJmaWxlIjoiRjpcXGFrb3JkeVxcZGVwZW5kZW5jaWVzXFxjb21wb25lbnRzXFxsYXlvdXRcXFNvbmdDU1MuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU29uZ0NTUygpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNvbmd7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NzAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDozMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+IFxyXG4gICAgKSBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb25nQ1NTOyJdfQ== */\n/*@ sourceURL=F:\\akordy\\dependencies\\components\\layout\\SongCSS.jsx */"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (SongCSS);

/***/ }),

/***/ "./components/shared/H1.jsx":
/*!**********************************!*\
  !*** ./components/shared/H1.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "F:\\akordy\\dependencies\\components\\shared\\H1.jsx";



var H1 = function H1(nadpis) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, nadpis.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 16
    }
  }, nadpis.content));
};

/* harmony default export */ __webpack_exports__["default"] = (H1);

/***/ }),

/***/ "./components/shared/Header.jsx":
/*!**************************************!*\
  !*** ./components/shared/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\akordy\\dependencies\\components\\shared\\Header.jsx";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        __self: this,
        className: "jsx-2097697861",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        className: "jsx-2097697861",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }
      }, "Domovsk\xE1 str\xE1nka")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        className: "jsx-2097697861",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }
      }, "Hlavn\xED str\xE1nka")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/songs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        className: "jsx-2097697861",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }
      }, "P\xEDsni\u010Dky")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        className: "jsx-2097697861",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }
      }, "O n\xE1s"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2097697861",
        css: "a.jsx-2097697861{font-size:20px;margin-left:30px;color:white;}h1.jsx-2097697861{font-size:36px;margin-left:10px;}nav.jsx-2097697861{background-color:#3b444b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxha29yZHlcXGRlcGVuZGVuY2llc1xcY29tcG9uZW50c1xcc2hhcmVkXFxIZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCd0IsQUFHNEMsQUFLQSxBQUtTLGVBVFAsQUFLQSxVQUtyQixPQVRnQixBQU1oQixZQUxBIiwiZmlsZSI6IkY6XFxha29yZHlcXGRlcGVuZGVuY2llc1xcY29tcG9uZW50c1xcc2hhcmVkXFxIZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+RG9tb3Zza8OhIHN0csOhbmthPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+SGxhdm7DrSBzdHLDoW5rYTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29uZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Qw61zbmnEjWt5PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk8gbsOhczwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjQ0NGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=F:\\akordy\\dependencies\\components\\shared\\Header.jsx */"
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/songs/Song.jsx":
/*!***********************************!*\
  !*** ./components/songs/Song.jsx ***!
  \***********************************/
/*! exports provided: Song */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Song", function() { return Song; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Song = function Song(name, autor, url, pic) {
  _classCallCheck(this, Song);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "autor", void 0);

  _defineProperty(this, "url", void 0);

  _defineProperty(this, "pic", void 0);

  this.name = name;
  this.autor = autor;
  this.url = url;
  this.pic = pic;
};

/***/ }),

/***/ "./components/songs/SongsBody.jsx":
/*!****************************************!*\
  !*** ./components/songs/SongsBody.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _songs_Song__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../songs/Song */ "./components/songs/Song.jsx");
/* harmony import */ var _layout_SongCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/SongCSS */ "./components/layout/SongCSS.jsx");
var _this = undefined,
    _jsxFileName = "F:\\akordy\\dependencies\\components\\songs\\SongsBody.jsx";



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Sappy = new _songs_Song__WEBPACK_IMPORTED_MODULE_1__["Song"]('Sappy', 'Nirvana', '', 'https://i.pinimg.com/originals/51/48/45/514845fae6d2e8f38e7fa5631984fe6e.jpg');
var RapeMe = new _songs_Song__WEBPACK_IMPORTED_MODULE_1__["Song"]('Rape Me', 'Nirvana', '', 'https://i.pinimg.com/originals/51/48/45/514845fae6d2e8f38e7fa5631984fe6e.jpg');
var Glycerin = new _songs_Song__WEBPACK_IMPORTED_MODULE_1__["Song"]('Glycerin', 'Bush', '', 'data:image/png;base64,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');
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([Sappy, RapeMe, Glycerin]),
      _useState2 = _slicedToArray(_useState, 2),
      songs = _useState2[0],
      setSongs = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      song = _useState4[0],
      setSong = _useState4[1];

  var removeSong = function removeSong(song) {
    setSongs(songs.filter(function (t) {
      return t != song;
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: song,
    onChange: function onChange(e) {
      return setSong(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setSongs([].concat(_toConsumableArray(songs), [song]));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "P\u0159idat p\xEDsni\u010Dku"), songs.map(function (song) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "song",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, "N\xE1zev: ", song.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, "Autor: ", song.autor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: song.pic,
      width: "500",
      height: "600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        return removeSong(song.name);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, "Odstranit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        return removeSong(song);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, "Upravit"));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_SongCSS__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }));
});

/***/ }),

/***/ "./pages/songs.jsx":
/*!*************************!*\
  !*** ./pages/songs.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/BaseLayout */ "./components/layout/BaseLayout.jsx");
/* harmony import */ var _components_shared_H1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/H1 */ "./components/shared/H1.jsx");
/* harmony import */ var _components_layout_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Background */ "./components/layout/Background.jsx");
/* harmony import */ var _components_songs_SongsBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/songs/SongsBody */ "./components/songs/SongsBody.jsx");
var _jsxFileName = "F:\\akordy\\dependencies\\pages\\songs.jsx";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Songs = /*#__PURE__*/function (_React$Component) {
  _inherits(Songs, _React$Component);

  var _super = _createSuper(Songs);

  function Songs() {
    _classCallCheck(this, Songs);

    return _super.apply(this, arguments);
  }

  _createClass(Songs, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_BaseLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Background__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_H1__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "P\xEDsni\u010Dky",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_songs_SongsBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Songs;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Songs);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/songs.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/songs.jsx */"./pages/songs.jsx");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=songs.js.map