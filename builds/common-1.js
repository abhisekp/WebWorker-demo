webpackJsonp([1],{

/***/ 6:
/***/ function(module, exports) {

	module.exports = "'use strict';\n\nself.addEventListener('message', function (msgEv) {\n    var data = JSON.parse(msgEv.data);\n    if (data === 'GO') {\n        go();\n    }\n}, false);\n\nfunction go() {\n    console.log('Going...');\n    var x = 0;\n    while (x < Math.pow(10, 9)) {\n        x++;\n    }\n    self.postMessage(JSON.stringify(x));\n    self.close();\n}"

/***/ }

});
//# sourceMappingURL=common-1.js.map