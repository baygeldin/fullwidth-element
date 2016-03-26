/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["methods"] = __webpack_require__(1);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _polymer = __webpack_require__(2);
	
	var _polymer2 = _interopRequireDefault(_polymer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var elements = document.querySelectorAll('fullwidth-element');
	
	describe('<fullwidth-element>', function () {
	    it('wraps text node with <span style="white-space: pre-wrap;">', function () {
	        var converted = '<span style="white-space: pre-wrap;">' + 'Ｈｅｌｌｏ Ｗｏｒｌｄ！</span>';
	        expect(_polymer2.default.dom(elements[0]).innerHTML).to.equal(converted);
	    });
	
	    it('works with nested tags', function () {
	        var converted = '<span style="white-space: pre-wrap;">Ｈｅｌｌｏ ' + '</span><b><span style="white-space: pre-wrap;">Ｗｏｒｌｄ！' + '</span></b>';
	        expect(_polymer2.default.dom(elements[1]).innerHTML).to.equal(converted);
	    });
	
	    it('with "nowrap" attribute wraps every word with ' + '<span style="white-space: nowrap;">', function () {
	        var converted = '<span style="white-space: pre-wrap;">' + '<span style="white-space: nowrap;">Ｈｅｌｌｏ</span> ' + '<span style="white-space: nowrap;">Ｗｏｒｌｄ！</span> ' + '</span>';
	        expect(_polymer2.default.dom(elements[2]).innerHTML).to.equal(converted);
	    });
	
	    it('with "spacing" attribute multiplies the amount of spaces ' + 'between words by the corresponding number', function () {
	        var converted = '<span style="white-space: pre-wrap;">' + 'Ｈｅｌｌｏ      Ｗｏｒｌｄ！</span>';
	        expect(_polymer2.default.dom(elements[3]).innerHTML).to.equal(converted);
	    });
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Polymer;

/***/ }
/******/ ]);
//# sourceMappingURL=basic-test.js.map