/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let isMobile = {\r\n\tAndroid: function() {return navigator.userAgent.match(/Android/i);},\r\n\tBlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},\r\n\tiOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},\r\n\tOpera: function() {return navigator.userAgent.match(/Opera Mini/i);},\r\n\tWindows: function() {return navigator.userAgent.match(/IEMobile/i);},\r\n\tany: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}\r\n};\r\n\r\n\r\n$(document).ready(function() {\r\n\t$(\".questionnaire-content__slider\").slick({\r\n\t\tslidesToShow: 4,\r\n\t\tslidesToScroll: 4,\r\n\r\n\t\tresponsive:[\r\n\t\t\t{\r\n\t\t\t\tbreakpoint: 900,\r\n\t\t\t\tsettings: {\r\n\t\t\t\t\tslidesToShow:3,\r\n\t\t\t\t\tslidesToScroll:3,\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\tbreakpoint: 680,\r\n\t\t\t\tsettings: {\r\n\t\t\t\t\tslidesToShow:2,\r\n\t\t\t\t\tslidesToScroll:2,\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\tbreakpoint: 500,\r\n\t\t\t\tsettings: {\r\n\t\t\t\t\tslidesToShow:1,\r\n\t\t\t\t\tslidesToScroll:1,\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t]\r\n\t});\r\n\r\n\tlet body = $('body');\r\n\tconsole.log(body);\r\n\tif (isMobile.any()) {\r\n\t\tbody.addClass(\"touch\");\r\n\t\tlet arrow = $('.header-sorting__title');\r\n\t\tarrow.click(function() {\r\n\t\t\t$(this).toggleClass(\"active\");\r\n\t\t\tlet menu = $(\".header-sorting__content\")\r\n\t\t\tmenu.toggleClass(\"open\");\r\n\t\t})\r\n\t\t\r\n\t\t\r\n\t} else{\r\n\t\tbody.addClass('mouse');\r\n\t}\r\n})\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });