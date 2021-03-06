/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	document.write("It works.<br>");

	document.write(__webpack_require__(1));

	var button = __webpack_require__(2);
	var form = __webpack_require__(3);
	var table = __webpack_require__(4);

	button.printDescription();
	form.printDescription();
	table.printDescription();


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "It works from content.js.<br>";


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {

	  printDescription: function() {
	    document.write("I'm a button!<br>");
	  }

	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {

	  printDescription: function() {
	    document.write("I'm a form!<br>");
	  }

	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {

	  printDescription: function() {
	    document.write("I'm a table!<br>");
	  }

	};


/***/ }
/******/ ]);