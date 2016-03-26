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

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["methods"] = __webpack_require__(4);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = Polymer;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ready = ready;
	
	var _fullwidth = __webpack_require__(5);
	
	var _fullwidth2 = _interopRequireDefault(_fullwidth);
	
	var _polymer = __webpack_require__(2);
	
	var _polymer2 = _interopRequireDefault(_polymer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ready() {
	    var node = void 0,
	        textNodes = [];
	    var walker = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, false);
	    var nowrap = this.nowrap;
	    var spacing = this.spacing;
	    //for (let node; (node = walker.nextNode());) {
	    while (node = walker.nextNode()) {
	        textNodes.push(node);
	    }
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = textNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            node = _step.value;
	
	            var words = node.nodeValue.split(' ');
	            var wrapper = document.createElement('span');
	            wrapper.style.whiteSpace = 'pre-wrap';
	            if (nowrap) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;
	
	                try {
	                    for (var _iterator2 = words[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var word = _step2.value;
	
	                        var elem = document.createElement('span');
	                        elem.style.whiteSpace = 'nowrap';
	                        elem.textContent = (0, _fullwidth2.default)(word);
	                        var spaces = document.createTextNode(' '.repeat(spacing));
	                        wrapper.appendChild(elem);
	                        wrapper.appendChild(spaces);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }
	            } else {
	                var text = words.map(function (str) {
	                    return (0, _fullwidth2.default)(str);
	                }).join(' '.repeat(spacing));
	                wrapper.appendChild(document.createTextNode(text));
	            }
	            var parent = _polymer2.default.dom(node).parentNode;
	            _polymer2.default.dom(parent).insertBefore(wrapper, node);
	            _polymer2.default.dom(parent).removeChild(node);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// Search in array is O(n), hashmaps are O(1),
	// but char code evalution is still faster.
	// Hope it's not penny-wise and pound-foolish.
	
	function convertChar(code) {
	    if (code >= 33 && code <= 126) {
	        return code + 65248;
	    } else if (code === 163) {
	        return code + 65342;
	    } else if (code === 165) {
	        return code + 65344;
	    } else if (code === 183) {
	        return code + 65198;
	    } else if (code === 8361) {
	        return code + 57149;
	    } else if (code === 8373) {
	        return code + 57131;
	    }
	}
	
	function hasFullwidth(code) {
	    // 33 - !, 126 - ~, 163 - £, 165 - ¥,
	    // 183 - ·, 8361 - ₩, 8373 - ₵
	    return code >= 33 && code <= 126 || code === 163 || code === 165 || code === 183 || code === 8361 || code === 8373;
	}
	
	exports.default = function (str) {
	    var res = '';
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var ch = _step.value;
	
	            var code = ch.charCodeAt(0);
	            res += hasFullwidth(code) ? String.fromCharCode(convertChar(code)) : ch;
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return res;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map