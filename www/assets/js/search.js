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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/templates/search.js":
/*!************************************!*\
  !*** ./client/templates/search.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/polyfills */ \"./client/utils/polyfills.js\");\n\nObject(_utils_polyfills__WEBPACK_IMPORTED_MODULE_0__[\"focusWithin\"])(document.querySelector('.js-search-field'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdGVtcGxhdGVzL3NlYXJjaC5qcz9iOTA2Il0sIm5hbWVzIjpbImZvY3VzV2l0aGluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQUEsb0VBQVcsQ0FBQ0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFELENBQVgiLCJmaWxlIjoiLi9jbGllbnQvdGVtcGxhdGVzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvY3VzV2l0aGluIH0gZnJvbSAnLi4vdXRpbHMvcG9seWZpbGxzJztcblxuZm9jdXNXaXRoaW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlYXJjaC1maWVsZCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/templates/search.js\n");

/***/ }),

/***/ "./client/utils/polyfills.js":
/*!***********************************!*\
  !*** ./client/utils/polyfills.js ***!
  \***********************************/
/*! exports provided: focusWithin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusWithin\", function() { return focusWithin; });\n// if browser does not support `:focus-within`\n// pseudo-selector, inits a polyfill (IE/Edge)\nvar focusWithin = function () {\n  try {\n    // if `document.querySelector()` does not throw an error,\n    // an empty function is returned, because the browser\n    // supports the `:focus-within` pseudo-selector and thus\n    // does not need a polyfill.\n    document.querySelector(':focus-within');\n    return function () {};\n    /* eslint-disable-line no-empty-function */\n  } catch (err) {\n    return function (node) {\n      if (document.activeElement && node.contains(document.activeElement)) {\n        node.classList.add('is-focus-within');\n      }\n\n      node.addEventListener('focus', function () {\n        node.classList.add('is-focus-within');\n      }, true);\n      node.addEventListener('blur', function () {\n        if (!node.contains(document.activeElement)) {\n          node.classList.remove('is-focus-within');\n        }\n      }, true);\n    };\n  }\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvcG9seWZpbGxzLmpzPzdhZTciXSwibmFtZXMiOlsiZm9jdXNXaXRoaW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlcnIiLCJub2RlIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFNQSxXQUFXLEdBQUksWUFBWTtBQUMvQixNQUFJO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsWUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCO0FBQ0EsV0FBTyxZQUFXLENBQUUsQ0FBcEI7QUFBc0I7QUFDdkIsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaLFdBQU8sVUFBVUMsSUFBVixFQUFnQjtBQUNyQixVQUFJSCxRQUFRLENBQUNJLGFBQVQsSUFBMEJELElBQUksQ0FBQ0UsUUFBTCxDQUFjTCxRQUFRLENBQUNJLGFBQXZCLENBQTlCLEVBQXFFO0FBQ25FRCxZQUFJLENBQUNHLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixpQkFBbkI7QUFDRDs7QUFFREosVUFBSSxDQUFDSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDTCxZQUFJLENBQUNHLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixpQkFBbkI7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUlBSixVQUFJLENBQUNLLGdCQUFMLENBQXNCLE1BQXRCLEVBQThCLFlBQVk7QUFDeEMsWUFBSSxDQUFDTCxJQUFJLENBQUNFLFFBQUwsQ0FBY0wsUUFBUSxDQUFDSSxhQUF2QixDQUFMLEVBQTRDO0FBQzFDRCxjQUFJLENBQUNHLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixpQkFBdEI7QUFDRDtBQUNGLE9BSkQsRUFJRyxJQUpIO0FBS0QsS0FkRDtBQWVEO0FBQ0YsQ0F6Qm1CLEVBQXBCIiwiZmlsZSI6Ii4vY2xpZW50L3V0aWxzL3BvbHlmaWxscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlmIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBgOmZvY3VzLXdpdGhpbmBcbi8vIHBzZXVkby1zZWxlY3RvciwgaW5pdHMgYSBwb2x5ZmlsbCAoSUUvRWRnZSlcbmNvbnN0IGZvY3VzV2l0aGluID0gKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBpZiBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigpYCBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvcixcbiAgICAvLyBhbiBlbXB0eSBmdW5jdGlvbiBpcyByZXR1cm5lZCwgYmVjYXVzZSB0aGUgYnJvd3NlclxuICAgIC8vIHN1cHBvcnRzIHRoZSBgOmZvY3VzLXdpdGhpbmAgcHNldWRvLXNlbGVjdG9yIGFuZCB0aHVzXG4gICAgLy8gZG9lcyBub3QgbmVlZCBhIHBvbHlmaWxsLlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cy13aXRoaW4nKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7fTsgLyogZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eS1mdW5jdGlvbiAqL1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIG5vZGUuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdpcy1mb2N1cy13aXRoaW4nKTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdpcy1mb2N1cy13aXRoaW4nKTtcbiAgICAgIH0sIHRydWUpO1xuXG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghbm9kZS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZm9jdXMtd2l0aGluJyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRydWUpO1xuICAgIH07XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGZvY3VzV2l0aGluIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/utils/polyfills.js\n");

/***/ }),

/***/ 4:
/*!******************************************!*\
  !*** multi ./client/templates/search.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vtolbert/Sites/ga-sps/client/templates/search.js */"./client/templates/search.js");


/***/ })

/******/ });