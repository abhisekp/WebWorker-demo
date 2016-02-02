/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "common-" + chunkId + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
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

	'use strict';
	
	__webpack_require__(1);
	
	var _workerMixin = __webpack_require__(5);
	
	console.log('Initiated');
	
	document.addEventListener('DOMContentLoaded', init);
	
	var workerBlob = undefined;
	__webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(6)]; (function (val) {
	    workerBlob = new Blob([val], { type: 'text/javascript' });
	    console.log(workerBlob);
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	
	function init() {
	    document.querySelector('.btn').addEventListener('click', function (ev) {
	        ev.preventDefault();
	        console.log('Clicked');
	
	        if (!workerBlob) {
	            return;
	        }
	        var workerURL = URL.createObjectURL(workerBlob);
	        var worker = new Worker(workerURL);
	        URL.revokeObjectURL(workerURL);
	
	        worker.addEventListener('message', function (msgEv) {
	            var data = (0, _workerMixin.getMessage)(msgEv);
	            console.log('Long Running Process result:', data);
	        });
	        (0, _workerMixin.postMessage)(worker, 'GO');
	    }, false);
	
	    document.addEventListener('click', function () {
	        return console.log('Doc clicked');
	    });
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js?sourceMap!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js?sourceMap!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\nbutton, input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {\n  appearance: none;\n  background-color: #1565c0;\n  border: 0;\n  border-radius: 3px;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1em;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  line-height: 1;\n  padding: 0.75em 1.5em;\n  text-decoration: none;\n  transition: background-color 150ms ease;\n  user-select: none;\n  vertical-align: middle;\n  white-space: nowrap; }\n  button:hover, button:focus, input[type=\"button\"]:hover, input[type=\"button\"]:focus, input[type=\"reset\"]:hover, input[type=\"reset\"]:focus, input[type=\"submit\"]:hover, input[type=\"submit\"]:focus {\n    background-color: #11519a;\n    color: #fff; }\n  button:disabled, input[type=\"button\"]:disabled, input[type=\"reset\"]:disabled, input[type=\"submit\"]:disabled {\n    cursor: not-allowed;\n    opacity: 0.5; }\n    button:disabled:hover, input[type=\"button\"]:disabled:hover, input[type=\"reset\"]:disabled:hover, input[type=\"submit\"]:disabled:hover {\n      background-color: #1565c0; }\n\nfieldset {\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nlegend {\n  font-weight: 600;\n  margin-bottom: 0.375em;\n  padding: 0; }\n\nlabel {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.375em; }\n\ninput,\nselect {\n  display: block;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1em; }\n\ninput[type=\"color\"], input[type=\"date\"], input[type=\"datetime\"], input[type=\"datetime-local\"], input[type=\"email\"], input[type=\"month\"], input[type=\"number\"], input[type=\"password\"], input[type=\"search\"], input[type=\"tel\"], input[type=\"text\"], input[type=\"time\"], input[type=\"url\"], input[type=\"week\"], input:not([type]), textarea,\nselect[multiple] {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1em;\n  margin-bottom: 0.75em;\n  padding: 0.5em;\n  transition: border-color 150ms ease;\n  width: 100%; }\n  input[type=\"color\"]:hover, input[type=\"date\"]:hover, input[type=\"datetime\"]:hover, input[type=\"datetime-local\"]:hover, input[type=\"email\"]:hover, input[type=\"month\"]:hover, input[type=\"number\"]:hover, input[type=\"password\"]:hover, input[type=\"search\"]:hover, input[type=\"tel\"]:hover, input[type=\"text\"]:hover, input[type=\"time\"]:hover, input[type=\"url\"]:hover, input[type=\"week\"]:hover, input:not([type]):hover, textarea:hover,\n  select[multiple]:hover {\n    border-color: #b1b1b1; }\n  input[type=\"color\"]:focus, input[type=\"date\"]:focus, input[type=\"datetime\"]:focus, input[type=\"datetime-local\"]:focus, input[type=\"email\"]:focus, input[type=\"month\"]:focus, input[type=\"number\"]:focus, input[type=\"password\"]:focus, input[type=\"search\"]:focus, input[type=\"tel\"]:focus, input[type=\"text\"]:focus, input[type=\"time\"]:focus, input[type=\"url\"]:focus, input[type=\"week\"]:focus, input:not([type]):focus, textarea:focus,\n  select[multiple]:focus {\n    border-color: #1565c0;\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06), 0 0 5px rgba(18, 89, 169, 0.7);\n    outline: none; }\n  input[type=\"color\"]:disabled, input[type=\"date\"]:disabled, input[type=\"datetime\"]:disabled, input[type=\"datetime-local\"]:disabled, input[type=\"email\"]:disabled, input[type=\"month\"]:disabled, input[type=\"number\"]:disabled, input[type=\"password\"]:disabled, input[type=\"search\"]:disabled, input[type=\"tel\"]:disabled, input[type=\"text\"]:disabled, input[type=\"time\"]:disabled, input[type=\"url\"]:disabled, input[type=\"week\"]:disabled, input:not([type]):disabled, textarea:disabled,\n  select[multiple]:disabled {\n    background-color: #f2f2f2;\n    cursor: not-allowed; }\n    input[type=\"color\"]:disabled:hover, input[type=\"date\"]:disabled:hover, input[type=\"datetime\"]:disabled:hover, input[type=\"datetime-local\"]:disabled:hover, input[type=\"email\"]:disabled:hover, input[type=\"month\"]:disabled:hover, input[type=\"number\"]:disabled:hover, input[type=\"password\"]:disabled:hover, input[type=\"search\"]:disabled:hover, input[type=\"tel\"]:disabled:hover, input[type=\"text\"]:disabled:hover, input[type=\"time\"]:disabled:hover, input[type=\"url\"]:disabled:hover, input[type=\"week\"]:disabled:hover, input:not([type]):disabled:hover, textarea:disabled:hover,\n    select[multiple]:disabled:hover {\n      border: 1px solid #ddd; }\n\ntextarea {\n  resize: vertical; }\n\n[type=\"search\"] {\n  appearance: none; }\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  display: inline;\n  margin-right: 0.375em; }\n\n[type=\"file\"] {\n  margin-bottom: 0.75em;\n  width: 100%; }\n\nselect {\n  margin-bottom: 1.5em;\n  max-width: 100%;\n  width: auto; }\n\nul,\nol {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\ndl {\n  margin-bottom: 0.75em; }\n  dl dt {\n    font-weight: 600;\n    margin-top: 0.75em; }\n  dl dd {\n    margin: 0; }\n\ntable {\n  border-collapse: collapse;\n  margin: 0.75em 0;\n  table-layout: fixed;\n  width: 100%; }\n\nth {\n  border-bottom: 1px solid #a6a6a6;\n  font-weight: 600;\n  padding: 0.75em 0;\n  text-align: left; }\n\ntd {\n  border-bottom: 1px solid #ddd;\n  padding: 0.75em 0; }\n\ntr,\ntd,\nth {\n  vertical-align: middle; }\n\nbody {\n  color: #333;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1em;\n  line-height: 1.5; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1em;\n  line-height: 1.2;\n  margin: 0 0 0.75em; }\n\np {\n  margin: 0 0 0.75em; }\n\na {\n  color: #1565c0;\n  text-decoration: none;\n  transition: color 150ms ease; }\n  a:active, a:focus, a:hover {\n    color: #104c90; }\n\nhr {\n  border-bottom: 1px solid #ddd;\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n  margin: 1.5em 0; }\n\nimg,\npicture {\n  margin: 0;\n  max-width: 100%; }\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%; }\n\na,\na:link,\na:visited,\na:hover {\n  color: inherit; }\n\n.btn,\n.btn:link,\n.btn:visited {\n  box-shadow: 0 0 0.4em olive;\n  height: 3.125em;\n  width: 6.25em;\n  background: tomato;\n  color: #333;\n  padding: 0.1875em;\n  font-size: 1.5em;\n  font-family: \"Georgia\", \"Cambria\", \"Times New Roman\", \"Times\", serif;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  -webkit-transition: background-color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s, color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;\n  -moz-transition: background-color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s, color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;\n  transition: background-color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s, color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s; }\n\n.btn:hover {\n  background: purple;\n  color: #EAEAEA; }\n", "", {"version":3,"sources":["/./src/src/css/neat/grid/_box-sizing.scss","/./src/src/css/base/_buttons.scss","/./src/src/css/base/_variables.scss","/./src/src/css/bourbon/addons/_font-stacks.scss","/./src/src/css/bourbon/functions/_shade.scss","/./src/src/css/base/_forms.scss","/./src/css/app.scss","/./src/src/css/base/_lists.scss","/./src/src/css/base/_tables.scss","/./src/src/css/base/_typography.scss","/./src/src/css/app.scss","/./src/src/css/bourbon/addons/_size.scss","/./src/src/css/bourbon/functions/_px-to-em.scss","/./src/src/css/bourbon/addons/_prefixer.scss"],"names":[],"mappings":"AAGE;EACE,uBAAuB,EACxB;;AAED;EAII,oBAAoB,EACrB;;ACZL;EACE,iBAAiB;EACjB,0BCgBY;EDfZ,UAAU;EACV,mBCQsB;EDPtB,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,0EEIsE;EFHtE,eCJkB;EDKlB,oCAAoC;EACpC,iBAAiB;EACjB,eAAe;EACf,sBCA8B;EDC9B,sBAAsB;EACtB,wCC0BgB;EDzBhB,kBAAkB;EAClB,uBAAuB;EACvB,oBAAoB,EAgBrB;EAlCD;IAsBI,0BGAS;IHCT,YAAY,EACb;EAxBH;IA2BI,oBAAoB;IACpB,aAAa,EAKd;IAjCH;MA+BM,0BCbQ,EDcT;;AIhCL;EACE,8BAA8B;EAC9B,UAAU;EACV,UAAU;EACV,WAAW,EACZ;;AAED;EACE,iBAAiB;EACjB,uBAA6B;EAC7B,WAAW,EACZ;;AAED;EACE,eAAe;EACf,iBAAiB;EACjB,uBAA6B,EAC9B;;AAED;;EAEE,eAAe;EACf,0EFVsE;EEWtE,eHlBkB,EGmBnB;;AAED;;EACE,uBHK0B;EGJ1B,uBHPe;EGQf,mBHjBsB;EGkBtB,gDHMyC;EGLzC,uBAAuB;EACvB,0EFpBsE;EEqBtE,eH5BkB;EG6BlB,sBHpB2B;EGqB3B,eAAsB;EACtB,oCHKgB;EGJhB,YAAY,EAoBb;EA/BD;;IAcI,sBDlBS,ECmBV;EAfH;;IAkBI,sBH1BU;IG2BV,gFHR0D;IGS1D,cAAc,EACf;EArBH;;IAwBI,0BD5BS;IC6BT,oBAAoB,EAKrB;IA9BH;;MA4BM,uBHjCW,EGkCZ;;AAIL;EACE,iBAAiB,EAClB;;AC2BD;EDxBE,iBAAiB,EAClB;;AC0BD;;EDtBE,gBAAgB;EAChB,sBAA4B,EAC7B;;ACyBD;EDtBE,sBH5D2B;EG6D3B,YAAY,EACb;;AAED;EACE,qBHlE8B;EGmE9B,gBAAgB;EAChB,YAAY,EACb;;AElFD;;EAEE,sBAAsB;EACtB,UAAU;EACV,WAAW,EACZ;;AAED;EACE,sBLM2B,EKI5B;EAXD;IAII,iBAAiB;IACjB,mBLEyB,EKD1B;EANH;IASI,UAAU,EACX;;ACjBH;EACE,0BAA0B;EAC1B,iBAAwB;EACxB,oBAAoB;EACpB,YAAY,EACb;;AAED;EACE,iCJcW;EIbX,iBAAiB;EACjB,kBAAyB;EACzB,iBAAiB,EAClB;;AAED;EACE,8BNMe;EMLf,kBAAyB,EAC1B;;AAED;;;EAGE,uBAAuB,EACxB;;ACvBD;EACE,YPkBc;EOjBd,0ENUsE;EMTtE,ePEkB;EODlB,iBPIoB,EOHrB;;AAED;;;;;;EAME,0ENDsE;EMEtE,ePTkB;EOUlB,iBPNuB;EOOvB,mBPF2B,EOG5B;;AAED;EACE,mBPN2B,EOO5B;;AAED;EACE,ePNY;EOOZ,sBAAsB;EACtB,6BPegB,EORjB;EAVD;IAQI,eLTS,EKUV;;AAGH;EACE,8BPfe;EOgBf,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,gBAAuB,EACxB;;AAED;;EAEE,UAAU;EACV,gBAAgB,EACjB;;AC3CD;EACI,WAAW;EACX,UAAU;ECkCV,aDjCkB;ECuClB,YDvCkB,EACrB;;AAED;;;;EAII,eAAe,EAClB;;AAED;;;EAGI,4BAA4B;ECoB5B,gBC7Ba;EDmCb,cCnCa;EFWb,mBAAmB;EACnB,YAAY;EACZ,kBEba;EFcb,iBEda;EFeb,qEPpB6D;EOqB7D,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EGMf,0IHL2F;EGS3F,uIHT2F;EGqB3F,kIHrB2F,EAClG;;AAED;EACI,mBAAmB;EACnB,eAAe,EAClB","file":"app.scss","sourcesContent":["@charset \"UTF-8\";\n\n@if $border-box-sizing == true {\n  html { // http://bit.ly/1qk2tVR\n    box-sizing: border-box;\n  }\n\n  * {\n    &,\n    &::after,\n    &::before {\n      box-sizing: inherit;\n    }\n  }\n}\n","#{$all-buttons} {\n  appearance: none;\n  background-color: $action-color;\n  border: 0;\n  border-radius: $base-border-radius;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: $base-font-family;\n  font-size: $base-font-size;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  line-height: 1;\n  padding: $small-spacing $base-spacing;\n  text-decoration: none;\n  transition: background-color $base-duration $base-timing;\n  user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n\n  &:hover,\n  &:focus {\n    background-color: shade($action-color, 20%);\n    color: #fff;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n\n    &:hover {\n      background-color: $action-color;\n    }\n  }\n}\n","// Typography\n$base-font-family: $helvetica;\n$heading-font-family: $base-font-family;\n\n// Font Sizes\n$base-font-size: 1em;\n\n// Line height\n$base-line-height: 1.5;\n$heading-line-height: 1.2;\n\n// Other Sizes\n$base-border-radius: 3px;\n$base-spacing: $base-line-height * 1em;\n$small-spacing: $base-spacing / 2;\n$base-z-index: 0;\n\n// Colors\n$blue: #1565c0;\n$dark-gray: #333;\n$medium-gray: #999;\n$light-gray: #ddd;\n\n// Font Colors\n$base-font-color: $dark-gray;\n$action-color: $blue;\n\n// Border\n$base-border-color: $light-gray;\n$base-border: 1px solid $base-border-color;\n\n// Background Colors\n$base-background-color: #fff;\n$secondary-background-color: tint($base-border-color, 75%);\n\n// Forms\n$form-box-shadow: inset 0 1px 3px rgba(#000, 0.06);\n$form-box-shadow-focus: $form-box-shadow, 0 0 5px adjust-color($action-color, $lightness: -5%, $alpha: -0.3);\n\n// Animations\n$base-duration: 150ms;\n$base-timing: ease;\n","@charset \"UTF-8\";\n\n/// Georgia font stack.\n///\n/// @type List\n\n$georgia: \"Georgia\", \"Cambria\", \"Times New Roman\", \"Times\", serif;\n\n/// Helvetica font stack.\n///\n/// @type List\n\n$helvetica: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n\n/// Lucida Grande font stack.\n///\n/// @type List\n\n$lucida-grande: \"Lucida Grande\", \"Tahoma\", \"Verdana\", \"Arial\", sans-serif;\n\n/// Monospace font stack.\n///\n/// @type List\n\n$monospace: \"Bitstream Vera Sans Mono\", \"Consolas\", \"Courier\", monospace;\n\n/// Verdana font stack.\n///\n/// @type List\n\n$verdana: \"Verdana\", \"Geneva\", sans-serif;\n","@charset \"UTF-8\";\n\n/// Mixes a color with black.\n///\n/// @param {Color} $color\n///\n/// @param {Number (Percentage)} $percent\n///   The amount of black to be mixed in.\n///\n/// @example scss - Usage\n///   .element {\n///     background-color: shade(#ffbb52, 60%);\n///   }\n///\n/// @example css - CSS Output\n///   .element {\n///     background-color: #664a20;\n///   }\n///\n/// @return {Color}\n\n@function shade($color, $percent) {\n  @return mix(#000, $color, $percent);\n}\n","fieldset {\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  font-weight: 600;\n  margin-bottom: $small-spacing / 2;\n  padding: 0;\n}\n\nlabel {\n  display: block;\n  font-weight: 600;\n  margin-bottom: $small-spacing / 2;\n}\n\ninput,\nselect {\n  display: block;\n  font-family: $base-font-family;\n  font-size: $base-font-size;\n}\n\n#{$all-text-inputs},\nselect[multiple] {\n  background-color: $base-background-color;\n  border: $base-border;\n  border-radius: $base-border-radius;\n  box-shadow: $form-box-shadow;\n  box-sizing: border-box;\n  font-family: $base-font-family;\n  font-size: $base-font-size;\n  margin-bottom: $small-spacing;\n  padding: $base-spacing / 3;\n  transition: border-color $base-duration $base-timing;\n  width: 100%;\n\n  &:hover {\n    border-color: shade($base-border-color, 20%);\n  }\n\n  &:focus {\n    border-color: $action-color;\n    box-shadow: $form-box-shadow-focus;\n    outline: none;\n  }\n\n  &:disabled {\n    background-color: shade($base-background-color, 5%);\n    cursor: not-allowed;\n\n    &:hover {\n      border: $base-border;\n    }\n  }\n}\n\ntextarea {\n  resize: vertical;\n}\n\n[type=\"search\"] {\n  appearance: none;\n}\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  display: inline;\n  margin-right: $small-spacing / 2;\n}\n\n[type=\"file\"] {\n  margin-bottom: $small-spacing;\n  width: 100%;\n}\n\nselect {\n  margin-bottom: $base-spacing;\n  max-width: 100%;\n  width: auto;\n}\n","html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\nbutton, input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {\n  appearance: none;\n  background-color: #1565c0;\n  border: 0;\n  border-radius: 3px;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1em;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  line-height: 1;\n  padding: 0.75em 1.5em;\n  text-decoration: none;\n  transition: background-color 150ms ease;\n  user-select: none;\n  vertical-align: middle;\n  white-space: nowrap; }\n  button:hover, button:focus, input[type=\"button\"]:hover, input[type=\"button\"]:focus, input[type=\"reset\"]:hover, input[type=\"reset\"]:focus, input[type=\"submit\"]:hover, input[type=\"submit\"]:focus {\n    background-color: #11519a;\n    color: #fff; }\n  button:disabled, input[type=\"button\"]:disabled, input[type=\"reset\"]:disabled, input[type=\"submit\"]:disabled {\n    cursor: not-allowed;\n    opacity: 0.5; }\n    button:disabled:hover, input[type=\"button\"]:disabled:hover, input[type=\"reset\"]:disabled:hover, input[type=\"submit\"]:disabled:hover {\n      background-color: #1565c0; }\n\nfieldset {\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nlegend {\n  font-weight: 600;\n  margin-bottom: 0.375em;\n  padding: 0; }\n\nlabel {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.375em; }\n\ninput,\nselect {\n  display: block;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1em; }\n\ninput[type=\"color\"], input[type=\"date\"], input[type=\"datetime\"], input[type=\"datetime-local\"], input[type=\"email\"], input[type=\"month\"], input[type=\"number\"], input[type=\"password\"], input[type=\"search\"], input[type=\"tel\"], input[type=\"text\"], input[type=\"time\"], input[type=\"url\"], input[type=\"week\"], input:not([type]), textarea,\nselect[multiple] {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1em;\n  margin-bottom: 0.75em;\n  padding: 0.5em;\n  transition: border-color 150ms ease;\n  width: 100%; }\n  input[type=\"color\"]:hover, input[type=\"date\"]:hover, input[type=\"datetime\"]:hover, input[type=\"datetime-local\"]:hover, input[type=\"email\"]:hover, input[type=\"month\"]:hover, input[type=\"number\"]:hover, input[type=\"password\"]:hover, input[type=\"search\"]:hover, input[type=\"tel\"]:hover, input[type=\"text\"]:hover, input[type=\"time\"]:hover, input[type=\"url\"]:hover, input[type=\"week\"]:hover, input:not([type]):hover, textarea:hover,\n  select[multiple]:hover {\n    border-color: #b1b1b1; }\n  input[type=\"color\"]:focus, input[type=\"date\"]:focus, input[type=\"datetime\"]:focus, input[type=\"datetime-local\"]:focus, input[type=\"email\"]:focus, input[type=\"month\"]:focus, input[type=\"number\"]:focus, input[type=\"password\"]:focus, input[type=\"search\"]:focus, input[type=\"tel\"]:focus, input[type=\"text\"]:focus, input[type=\"time\"]:focus, input[type=\"url\"]:focus, input[type=\"week\"]:focus, input:not([type]):focus, textarea:focus,\n  select[multiple]:focus {\n    border-color: #1565c0;\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06), 0 0 5px rgba(18, 89, 169, 0.7);\n    outline: none; }\n  input[type=\"color\"]:disabled, input[type=\"date\"]:disabled, input[type=\"datetime\"]:disabled, input[type=\"datetime-local\"]:disabled, input[type=\"email\"]:disabled, input[type=\"month\"]:disabled, input[type=\"number\"]:disabled, input[type=\"password\"]:disabled, input[type=\"search\"]:disabled, input[type=\"tel\"]:disabled, input[type=\"text\"]:disabled, input[type=\"time\"]:disabled, input[type=\"url\"]:disabled, input[type=\"week\"]:disabled, input:not([type]):disabled, textarea:disabled,\n  select[multiple]:disabled {\n    background-color: #f2f2f2;\n    cursor: not-allowed; }\n    input[type=\"color\"]:disabled:hover, input[type=\"date\"]:disabled:hover, input[type=\"datetime\"]:disabled:hover, input[type=\"datetime-local\"]:disabled:hover, input[type=\"email\"]:disabled:hover, input[type=\"month\"]:disabled:hover, input[type=\"number\"]:disabled:hover, input[type=\"password\"]:disabled:hover, input[type=\"search\"]:disabled:hover, input[type=\"tel\"]:disabled:hover, input[type=\"text\"]:disabled:hover, input[type=\"time\"]:disabled:hover, input[type=\"url\"]:disabled:hover, input[type=\"week\"]:disabled:hover, input:not([type]):disabled:hover, textarea:disabled:hover,\n    select[multiple]:disabled:hover {\n      border: 1px solid #ddd; }\n\ntextarea {\n  resize: vertical; }\n\n[type=\"search\"] {\n  appearance: none; }\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  display: inline;\n  margin-right: 0.375em; }\n\n[type=\"file\"] {\n  margin-bottom: 0.75em;\n  width: 100%; }\n\nselect {\n  margin-bottom: 1.5em;\n  max-width: 100%;\n  width: auto; }\n\nul,\nol {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\ndl {\n  margin-bottom: 0.75em; }\n  dl dt {\n    font-weight: 600;\n    margin-top: 0.75em; }\n  dl dd {\n    margin: 0; }\n\ntable {\n  border-collapse: collapse;\n  margin: 0.75em 0;\n  table-layout: fixed;\n  width: 100%; }\n\nth {\n  border-bottom: 1px solid #a6a6a6;\n  font-weight: 600;\n  padding: 0.75em 0;\n  text-align: left; }\n\ntd {\n  border-bottom: 1px solid #ddd;\n  padding: 0.75em 0; }\n\ntr,\ntd,\nth {\n  vertical-align: middle; }\n\nbody {\n  color: #333;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1em;\n  line-height: 1.5; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1em;\n  line-height: 1.2;\n  margin: 0 0 0.75em; }\n\np {\n  margin: 0 0 0.75em; }\n\na {\n  color: #1565c0;\n  text-decoration: none;\n  transition: color 150ms ease; }\n  a:active, a:focus, a:hover {\n    color: #104c90; }\n\nhr {\n  border-bottom: 1px solid #ddd;\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n  margin: 1.5em 0; }\n\nimg,\npicture {\n  margin: 0;\n  max-width: 100%; }\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%; }\n\na,\na:link,\na:visited,\na:hover {\n  color: inherit; }\n\n.btn,\n.btn:link,\n.btn:visited {\n  box-shadow: 0 0 0.4em olive;\n  height: 3.125em;\n  width: 6.25em;\n  background: tomato;\n  color: #333;\n  padding: 0.1875em;\n  font-size: 1.5em;\n  font-family: \"Georgia\", \"Cambria\", \"Times New Roman\", \"Times\", serif;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  -webkit-transition: background-color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s, color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;\n  -moz-transition: background-color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s, color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;\n  transition: background-color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s, color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s; }\n\n.btn:hover {\n  background: purple;\n  color: #EAEAEA; }\n","ul,\nol {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\ndl {\n  margin-bottom: $small-spacing;\n\n  dt {\n    font-weight: 600;\n    margin-top: $small-spacing;\n  }\n\n  dd {\n    margin: 0;\n  }\n}\n","table {\n  border-collapse: collapse;\n  margin: $small-spacing 0;\n  table-layout: fixed;\n  width: 100%;\n}\n\nth {\n  border-bottom: 1px solid shade($base-border-color, 25%);\n  font-weight: 600;\n  padding: $small-spacing 0;\n  text-align: left;\n}\n\ntd {\n  border-bottom: $base-border;\n  padding: $small-spacing 0;\n}\n\ntr,\ntd,\nth {\n  vertical-align: middle;\n}\n","body {\n  color: $base-font-color;\n  font-family: $base-font-family;\n  font-size: $base-font-size;\n  line-height: $base-line-height;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: $heading-font-family;\n  font-size: $base-font-size;\n  line-height: $heading-line-height;\n  margin: 0 0 $small-spacing;\n}\n\np {\n  margin: 0 0 $small-spacing;\n}\n\na {\n  color: $action-color;\n  text-decoration: none;\n  transition: color $base-duration $base-timing;\n\n  &:active,\n  &:focus,\n  &:hover {\n    color: shade($action-color, 25%);\n  }\n}\n\nhr {\n  border-bottom: $base-border;\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n  margin: $base-spacing 0;\n}\n\nimg,\npicture {\n  margin: 0;\n  max-width: 100%;\n}\n","@import 'bourbon/bourbon';\n@import 'neat/neat';\n@import 'base/base';\n\nhtml, body {\n    padding: 0;\n    margin: 0;\n    @include size(100%);\n}\n\na,\na:link,\na:visited,\na:hover {\n    color: inherit;\n}\n\n.btn,\n.btn:link,\n.btn:visited {\n    box-shadow: 0 0 0.4em olive;\n    @include size(em(100px) em(50px));\n    background: tomato;\n    color: #333;\n    padding: em(3px);\n    font-size: em(24px);\n    font-family: $georgia;\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n    @include transition(background-color 0.5s $ease-in-out-back 0s, color 0.5s $ease-in-out-back 0s);\n}\n\n.btn:hover {\n    background: purple;\n    color: #EAEAEA;\n}\n","@charset \"UTF-8\";\n\n/// Sets the `width` and `height` of the element.\n///\n/// @param {List} $size\n///   A list of at most 2 size values.\n///\n///   If there is only a single value in `$size` it is used for both width and height. All units are supported.\n///\n/// @example scss - Usage\n///   .first-element {\n///     @include size(2em);\n///   }\n///\n///   .second-element {\n///     @include size(auto 10em);\n///   }\n///\n/// @example css - CSS Output\n///   .first-element {\n///     width: 2em;\n///     height: 2em;\n///   }\n///\n///   .second-element {\n///     width: auto;\n///     height: 10em;\n///   }\n///\n/// @todo Refactor in 5.0.0 to use a comma-separated argument\n\n@mixin size($value) {\n  $width: nth($value, 1);\n  $height: $width;\n\n  @if length($value) > 1 {\n    $height: nth($value, 2);\n  }\n\n  @if is-size($height) {\n    height: $height;\n  } @else {\n    @warn \"`#{$height}` is not a valid length for the `$height` parameter in the `size` mixin.\";\n  }\n\n  @if is-size($width) {\n    width: $width;\n  } @else {\n    @warn \"`#{$width}` is not a valid length for the `$width` parameter in the `size` mixin.\";\n  }\n}\n","// Convert pixels to ems\n// eg. for a relational value of 12px write em(12) when the parent is 16px\n// if the parent is another value say 24px write em(12, 24)\n\n@function em($pxval, $base: $em-base) {\n  @if not unitless($pxval) {\n    $pxval: strip-units($pxval);\n  }\n  @if not unitless($base) {\n    $base: strip-units($base);\n  }\n  @return ($pxval / $base) * 1em;\n}\n","@charset \"UTF-8\";\n\n/// A mixin for generating vendor prefixes on non-standardized properties.\n///\n/// @param {String} $property\n///   Property to prefix\n///\n/// @param {*} $value\n///   Value to use\n///\n/// @param {List} $prefixes\n///   Prefixes to define\n///\n/// @example scss - Usage\n///   .element {\n///     @include prefixer(border-radius, 10px, webkit ms spec);\n///   }\n///\n/// @example css - CSS Output\n///   .element {\n///     -webkit-border-radius: 10px;\n///     -moz-border-radius: 10px;\n///     border-radius: 10px;\n///   }\n///\n/// @require {variable} $prefix-for-webkit\n/// @require {variable} $prefix-for-mozilla\n/// @require {variable} $prefix-for-microsoft\n/// @require {variable} $prefix-for-opera\n/// @require {variable} $prefix-for-spec\n\n@mixin prefixer($property, $value, $prefixes) {\n  @each $prefix in $prefixes {\n    @if $prefix == webkit {\n      @if $prefix-for-webkit {\n        -webkit-#{$property}: $value;\n      }\n    } @else if $prefix == moz {\n      @if $prefix-for-mozilla {\n        -moz-#{$property}: $value;\n      }\n    } @else if $prefix == ms {\n      @if $prefix-for-microsoft {\n        -ms-#{$property}: $value;\n      }\n    } @else if $prefix == o {\n      @if $prefix-for-opera {\n        -o-#{$property}: $value;\n      }\n    } @else if $prefix == spec {\n      @if $prefix-for-spec {\n        #{$property}: $value;\n      }\n    } @else  {\n      @warn \"Unrecognized prefix: #{$prefix}\";\n    }\n  }\n}\n\n@mixin disable-prefix-for-all() {\n  $prefix-for-webkit:    false !global;\n  $prefix-for-mozilla:   false !global;\n  $prefix-for-microsoft: false !global;\n  $prefix-for-opera:     false !global;\n  $prefix-for-spec:      false !global;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.postMessage = postMessage;
	exports.getMessage = getMessage;
	function postMessage(worker, msg) {
	    return worker.postMessage(JSON.stringify(msg));
	}
	
	function getMessage(msgEv) {
	    return JSON.parse(msgEv.data);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map